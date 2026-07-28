/* eslint-disable */
// @ts-nocheck
import { describe, it, expect } from 'vitest'
import { platform as prodPlatform } from '../data/platform'
import { moduleLoaders } from '../services/moduleLoaders'
import { validateModule } from '../lib/validation/moduleSchema'
import fs from 'fs'
import path from 'path'

// Função para buscar fisicamente todos os arquivos de módulos clínicos no diretório
function getPhysicalModuleFiles(): string[] {
  const unitsDir = path.resolve(__dirname, '../data/areas/linguagem/units')
  const files: string[] = []

  if (!fs.existsSync(unitsDir)) return files

  const units = fs.readdirSync(unitsDir)
  for (const unit of units) {
    const modulesDir = path.join(unitsDir, unit, 'modules')
    if (fs.existsSync(modulesDir)) {
      const moduleFiles = fs.readdirSync(modulesDir)
      for (const file of moduleFiles) {
        if (file.endsWith('.ts')) {
          files.push(path.join(modulesDir, file))
        }
      }
    }
  }
  return files
}

describe('Testes de Integridade da Plataforma (Metadados vs Conteúdo Clínico Real)', () => {
  
  // 1. Cada metadata possui um loader
  it('todos os metadados cadastrados na plataforma possuem um loader registrado', () => {
    prodPlatform.areas.forEach((area) => {
      area.units.forEach((unit) => {
        unit.modules.forEach((meta) => {
          const loader = moduleLoaders[meta.slug]
          expect(loader, `Metadado com slug "${meta.slug}" na unidade "${unit.id}" não possui loader registrado em moduleLoaders.ts`).toBeDefined()
          expect(typeof loader, `Loader para o slug "${meta.slug}" deve ser uma função`).toBe('function')
        })
      })
    })
  })

  // 2. Cada loader retorna um módulo válido
  it('todos os loaders carregam o módulo clínico com sucesso e passam na validação Zod', async () => {
    for (const [slug, loader] of Object.entries(moduleLoaders)) {
      let fullModule: any
      try {
        fullModule = await loader()
      } catch (err) {
        throw new Error(`Falha ao executar o loader para o slug "${slug}": ${err}`)
      }

      expect(fullModule, `Loader de "${slug}" retornou um módulo vazio`).toBeDefined()

      const validation = validateModule(fullModule)
      if (!validation.success) {
        console.error(`Erros de validação Zod no módulo carregado "${slug}":`, validation.errors)
      }
      expect(validation.success, `Módulo carregado pelo loader "${slug}" falhou na validação Zod`).toBe(true)
    }
  })

  // 3. id, slug, title, order e status coincidem
  it('atributos estáticos nos metadados coincidem exatamente com os atributos reais do módulo clínico carregado', async () => {
    for (const area of prodPlatform.areas) {
      for (const unit of area.units) {
        for (const meta of unit.modules) {
          const loader = moduleLoaders[meta.slug]
          const fullModule = await loader()

          expect(fullModule.id, `ID divergente para o módulo "${meta.slug}": metadado ID "${meta.id}" vs módulo real ID "${fullModule.id}"`).toBe(meta.id)
          expect(fullModule.slug, `Slug divergente para o módulo "${meta.slug}": metadado Slug "${meta.slug}" vs módulo real Slug "${fullModule.slug}"`).toBe(meta.slug)
          expect(fullModule.title, `Título divergente para o módulo "${meta.slug}": metadado Título "${meta.title}" vs módulo real Título "${fullModule.title}"`).toBe(meta.title)
          expect(fullModule.order, `Ordem divergente para o módulo "${meta.slug}": metadado Ordem "${meta.order}" vs módulo real Ordem "${fullModule.order}"`).toBe(meta.order)
          expect(fullModule.status, `Status divergente para o módulo "${meta.slug}": metadado Status "${meta.status}" vs módulo real Status "${fullModule.status}"`).toBe(meta.status)
        }
      }
    }
  })

  // 4. totalActivities corresponde às atividades reais
  it('o total de atividades declarado nos metadados corresponde à soma real das atividades do módulo', async () => {
    for (const area of prodPlatform.areas) {
      for (const unit of area.units) {
        for (const meta of unit.modules) {
          const loader = moduleLoaders[meta.slug]
          const fullModule = await loader()

          const actualQuestions = fullModule.apply?.questions?.length || 0
          const actualFlashcards = fullModule.review?.flashcards?.length || 0
          const actualAssociations = fullModule.apply?.associations?.length || 0
          const actualDecisions = fullModule.apply?.decisionExercises?.length || 0
          const actualCases = fullModule.apply?.fictionalCases?.length || 0

          const totalRealActivities = actualQuestions + actualFlashcards + actualAssociations + actualDecisions + actualCases
          expect(meta.totalActivities, `totalActivities incorreto no metadado para "${meta.slug}": declarado "${meta.totalActivities}" vs real "${totalRealActivities}"`).toBe(totalRealActivities)
        }
      }
    }
  })

  // 5. Nenhum loader está órfão
  it('não há loaders órfãos registrados em moduleLoaders que não estejam declarados em alguma unidade da plataforma', () => {
    const allMetadataSlugs = new Set<string>()
    prodPlatform.areas.forEach((area) => {
      area.units.forEach((unit) => {
        unit.modules.forEach((meta) => {
          allMetadataSlugs.add(meta.slug)
        })
      })
    })

    Object.keys(moduleLoaders).forEach((loaderSlug) => {
      expect(allMetadataSlugs.has(loaderSlug), `Loader para o slug "${loaderSlug}" é órfão (não está associado a nenhuma unidade na plataforma de produção)`).toBe(true)
    })
  })

  // 6. Nenhum módulo publicado está ausente do registro
  it('todos os arquivos físicos de módulo clínico salvos no disco estão registrados nos loaders e na plataforma', async () => {
    const physicalFiles = getPhysicalModuleFiles()
    const allMetadataSlugs = new Set<string>()
    prodPlatform.areas.forEach((area) => {
      area.units.forEach((unit) => {
        unit.modules.forEach((meta) => {
          allMetadataSlugs.add(meta.slug)
        })
      })
    })

    for (const filePath of physicalFiles) {
      // Importa dinamicamente o arquivo para obter seu slug
      const exports = await import(filePath)
      const moduleObject = Object.values(exports).find(
        (val: any) => val && typeof val === 'object' && 'id' in val && 'slug' in val
      ) as any

      expect(moduleObject, `O arquivo físico "${filePath}" não exporta um objeto de módulo válido`).toBeDefined()
      const slug = moduleObject.slug

      expect(moduleLoaders[slug], `O arquivo físico "${filePath}" com o slug "${slug}" não está registrado em moduleLoaders.ts`).toBeDefined()
      expect(allMetadataSlugs.has(slug), `O arquivo físico "${filePath}" com o slug "${slug}" não está cadastrado em nenhuma unidade na plataforma de produção`).toBe(true)
    }
  })

  // 7. Não existem IDs ou slugs duplicados em toda a plataforma real e nos módulos carregados
  it('não há IDs ou slugs duplicados na plataforma estática nem nos módulos clínicos carregados', async () => {
    const prodIds = new Set<string>()
    const prodSlugs = new Set<string>()

    for (const area of prodPlatform.areas) {
      for (const unit of area.units) {
        for (const meta of unit.modules) {
          // Validação dos metadados estáticos
          expect(prodIds.has(meta.id), `ID de metadado duplicado encontrado: "${meta.id}"`).toBe(false)
          prodIds.add(meta.id)

          expect(prodSlugs.has(meta.slug), `Slug de metadado duplicado encontrado: "${meta.slug}"`).toBe(false)
          prodSlugs.add(meta.slug)

          // Validação do módulo completo correspondente
          const loader = moduleLoaders[meta.slug]
          const fullModule = await loader()

          expect(fullModule.id, `ID real divergente para o slug "${meta.slug}"`).toBe(meta.id)
          expect(fullModule.slug, `Slug real divergente para o slug "${meta.slug}"`).toBe(meta.slug)
        }
      }
    }
  })
})
