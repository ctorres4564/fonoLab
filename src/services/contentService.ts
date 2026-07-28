import { platform } from '@/data/platform'
import type { LearningModule, LearningModuleMetadata, LearningUnit, LearningArea } from '@/types/platform'
import { moduleLoaders } from './moduleLoaders'
import { validateModule } from '@/lib/validation/moduleSchema'

const moduleCache = new Map<string, LearningModule>()

export const contentService = {
  /**
   * Obtém os metadados leves de um módulo a partir de seu slug.
   */
  getModuleMetadata(slug: string): LearningModuleMetadata | null {
    for (const area of platform.areas) {
      for (const unit of area.units) {
        const mod = unit.modules.find((m) => m.slug === slug)
        if (mod) return mod
      }
    }
    return null
  },

  /**
   * Obtém os metadados de uma unidade a partir de seu slug.
   */
  getUnitMetadata(unitSlug: string): LearningUnit | null {
    for (const area of platform.areas) {
      const unit = area.units.find((u) => u.slug === unitSlug)
      if (unit) return unit
    }
    return null
  },

  /**
   * Obtém os metadados de uma área a partir de seu slug.
   */
  getAreaMetadata(areaSlug: string): LearningArea | null {
    return platform.areas.find((a) => a.slug === areaSlug) || null
  },

  /**
   * Carrega o conteúdo clínico completo do módulo dinamicamente sob demanda.
   * Aplica validação Zod e armazena em cache na memória após sucesso.
   */
  async loadModuleBySlug(slug: string): Promise<LearningModule> {
    // 1. Verificar cache em memória
    if (moduleCache.has(slug)) {
      return moduleCache.get(slug)!
    }

    // 2. Localizar carregador dinâmico
    const loader = moduleLoaders[slug]
    if (!loader) {
      throw new Error(`Módulo não encontrado para o slug: "${slug}"`)
    }

    // 3. Executar import dinâmico
    try {
      const moduleData = await loader()

      // 4. Validar o conteúdo do módulo carregado com o schema Zod existente
      const validation = validateModule(moduleData)
      if (!validation.success) {
        console.error(`Falha na validação Zod do módulo "${slug}":`, validation.errors)
        throw new Error(`Dados inválidos no módulo "${slug}"`)
      }

      // 5. Salvar no cache em memória e retornar
      moduleCache.set(slug, moduleData)
      return moduleData
    } catch (err) {
      console.error(`Erro ao carregar o módulo "${slug}":`, err)
      throw err
    }
  },
}
