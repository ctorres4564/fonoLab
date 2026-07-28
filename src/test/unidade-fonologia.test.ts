import { describe, it, expect, beforeEach } from 'vitest'
import { platform } from './platformTestHelper'
import { validateModules } from '@/lib/validation/moduleSchema'
import { ProgressService } from '@/lib/progress/progressService'
import { getNextActivityRecommendation } from '@/lib/progress/recommendations'
import { addDays } from '@/lib/progress/spacedReview'

const area = platform.areas.find((a) => a.slug === 'linguagem')!
const unit = area.units.find((u) => u.slug === 'desenvolvimento-fonologico-alteracoes-fala')!

// ─────────────────────────────────────────────────────────────────────────────
// 1. Carregamento e integração da Unidade "Desenvolvimento fonológico e
//    alterações de fala" (Unidade 2, order: 2) na Área Linguagem
// ─────────────────────────────────────────────────────────────────────────────
describe('Unidade — Desenvolvimento fonológico e alterações de fala', () => {
  it('existe e está registrada na Área Linguagem', () => {
    expect(unit).toBeDefined()
    expect(area.units).toContain(unit)
  })

  it('tem id, slug, title, description e objective definidos, e ocupa a posição 2', () => {
    expect(unit.id).toBe('unit-linguagem-02')
    expect(unit.slug).toBe('desenvolvimento-fonologico-alteracoes-fala')
    expect(unit.order).toBe(2)
    expect(unit.title).toBeDefined()
    expect(unit.description).toBeDefined()
    expect(unit.objective).toBeDefined()
  })

  it('não colide de id/slug/order com nenhuma outra unidade da área', () => {
    const ids = area.units.map((u) => u.id)
    const slugs = area.units.map((u) => u.slug)
    const orders = area.units.map((u) => u.order)
    expect(new Set(ids).size).toBe(ids.length)
    expect(new Set(slugs).size).toBe(slugs.length)
    expect(new Set(orders).size).toBe(orders.length)
  })

  it('a ordem pedagógica da Área Linguagem é: Fundamentos (1), Fonologia (2), Transtornos da Linguagem Oral (3), Linguagem no Adulto (6)', () => {
    expect(area.units.map((u) => u.id)).toEqual([
      'unit-linguagem-01',
      'unit-linguagem-02',
      'unit-linguagem-03',
      'unit-linguagem-06',
    ])
    expect(area.units.map((u) => u.order)).toEqual([1, 2, 3, 6])
  })

  it('a Unidade 1 permanece intacta (3 módulos, order 1)', () => {
    const unidade01 = area.units.find((u) => u.id === 'unit-linguagem-01')!
    expect(unidade01.modules).toHaveLength(3)
    expect(unidade01.order).toBe(1)
  })

  it('a nova Unidade 3 (Desenvolvimento e Transtornos da Linguagem Oral) está registrada, com 4 módulos', () => {
    const unidadeTL = area.units.find((u) => u.slug === 'desenvolvimento-transtornos-linguagem-oral')!
    expect(unidadeTL.id).toBe('unit-linguagem-03')
    expect(unidadeTL.order).toBe(3)
    expect(unidadeTL.modules).toHaveLength(4)
    expect(unidadeTL.modules.map((m) => m.id)).toEqual([
      'mod-transtornos-linguagem-caracteristicas',
      'mod-transtornos-linguagem-aspectos-linguisticos',
      'mod-transtornos-linguagem-bases-neurobiologicas',
      'mod-transtornos-linguagem-avaliacao-intervencao',
    ])
  })

  it('a unidade de Neurolinguística/Afasias/CAA permanece intacta, agora reposicionada como Unidade 6', () => {
    const unidadeNeuro = area.units.find((u) => u.slug === 'neurolinguistica-comunicacao-alternativa')!
    expect(unidadeNeuro.id).toBe('unit-linguagem-06')
    expect(unidadeNeuro.order).toBe(6)
    expect(unidadeNeuro.modules).toHaveLength(2)
    expect(unidadeNeuro.modules.map((m) => m.id)).toEqual([
      'mod-afasias-neurolinguistica',
      'mod-comunicacao-alternativa',
    ])
  })

  it('tem exatamente 4 módulos', () => {
    expect(unit.modules).toHaveLength(4)
  })

  it('módulos têm ordem sequencial 1, 2, 3, 4', () => {
    const orders = unit.modules.map((m) => m.order)
    expect(orders).toEqual([1, 2, 3, 4])
  })

  it('módulos têm os slugs esperados, resolvíveis globalmente', () => {
    const slugs = unit.modules.map((m) => m.slug)
    expect(slugs).toEqual([
      'desenvolvimento-fonologico',
      'alteracoes-fonologicas',
      'principios-intervencao-fonologica',
      'planejamento-terapeutico-transtornos-fonologicos',
    ])

    // Slugs de módulo devem ser globalmente únicos (rota /modules/:moduleSlug)
    const allModuleSlugs = area.units.flatMap((u) => u.modules.map((m) => m.slug))
    expect(new Set(allModuleSlugs).size).toBe(allModuleSlugs.length)
  })

  it('os 4 módulos da unidade estão publicados', () => {
    const [modulo1, modulo2, modulo3, modulo4] = unit.modules
    expect(modulo1.status).toBe('published')
    expect(modulo2.status).toBe('published')
    expect(modulo3.status).toBe('published')
    expect(modulo4.status).toBe('published')
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 2. Validação Zod dos módulos da unidade de Fonologia (permitindo rascunho)
// ─────────────────────────────────────────────────────────────────────────────
describe('Validação dos módulos da unidade de Fonologia', () => {
  it('todos os 4 módulos passam na validação Zod mesmo em draft', () => {
    const result = validateModules(unit.modules)
    if (!result.success) {
      console.error('Erros de validação:', result.errors)
    }
    expect(result.success).toBe(true)
  })

  it('não tem IDs ou slugs duplicados entre os módulos da unidade', () => {
    const ids = unit.modules.map((m) => m.id)
    const slugs = unit.modules.map((m) => m.slug)
    expect(new Set(ids).size).toBe(ids.length)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('não tem IDs de módulo duplicados com nenhuma outra unidade da plataforma', () => {
    const allModuleIds = platform.areas.flatMap((a) => a.units.flatMap((u) => u.modules.map((m) => m.id)))
    expect(new Set(allModuleIds).size).toBe(allModuleIds.length)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 3. Progresso — isolamento entre módulos e preservação das outras unidades
// ─────────────────────────────────────────────────────────────────────────────
describe('Progresso da unidade de Fonologia', () => {
  const unitId = 'unit-linguagem-02'
  const moduloA = 'mod-desenvolvimento-fonologico'
  const moduloB = 'mod-alteracoes-fonologicas'

  beforeEach(() => {
    ProgressService.resetAll()
  })

  it('cada módulo tem progresso independente ao ser iniciado', () => {
    ProgressService.markActivityCompleted(unitId, moduloA, 'act-1')
    const progA = ProgressService.getModuleProgress(unitId, moduloA)
    const progB = ProgressService.getModuleProgress(unitId, moduloB)
    expect(progA.status).toBe('in_progress')
    expect(progB.status).toBe('not_started')
  })

  it('calcula progresso da unidade de Fonologia sem afetar a Unidade 1', () => {
    const unidade01Id = 'unit-linguagem-01'
    const modUnidade01 = 'mod-avaliacao-linguagens'

    ProgressService.markModuleCompleted(unidade01Id, modUnidade01)
    ProgressService.markModuleCompleted(unitId, moduloA)

    const progUnidade01 = ProgressService.getModuleProgress(unidade01Id, modUnidade01)
    const progFonologia = ProgressService.getModuleProgress(unitId, moduloA)

    expect(progUnidade01.status).toBe('completed')
    expect(progFonologia.status).toBe('completed')
  })

  it('o progresso geral (recomendação) considera módulos de todas as unidades', () => {
    const allModules = area.units.flatMap((u) => u.modules)
    const allProgresses: Record<string, ReturnType<typeof ProgressService.getModuleProgress>> = {}
    area.units.forEach((u) => {
      u.modules.forEach((m) => {
        allProgresses[m.id] = ProgressService.getModuleProgress(u.id, m.id)
      })
    })
    const rec = getNextActivityRecommendation(allModules, allProgresses)
    // Nenhum módulo iniciado ainda -> recomenda o primeiro módulo (Unidade 1)
    expect(rec?.reason).toBe('first_module')
  })

  it('recomenda o primeiro módulo da unidade de Fonologia quando nenhum de seus módulos foi iniciado', () => {
    const rec = getNextActivityRecommendation(unit.modules, {})
    expect(rec?.moduleId).toBe('mod-desenvolvimento-fonologico')
    expect(rec?.reason).toBe('first_module')
  })

  it('recomenda o primeiro módulo da nova Unidade 3 (Transtornos da Linguagem Oral), não o da Unidade 6, ao concluir as Unidades 1 e 2, mesmo com valores de "order" repetidos entre unidades', () => {
    // Regressão: `order` é local a cada unidade (1, 2, 3... dentro dela), então
    // o último módulo da unidade de Fonologia (order=4) e o primeiro módulo da
    // Unidade 3 (order=1) não compartilham necessariamente o mesmo valor, mas
    // o ponto testado permanece: a recomendação deve seguir a sequência em que
    // as unidades/módulos são fornecidos (area.units.flatMap), não o valor
    // bruto de `order` nem a posição alfabética/numérica do id da unidade.
    const unidade01 = area.units.find((u) => u.id === 'unit-linguagem-01')!
    unidade01.modules.forEach((m) => ProgressService.markModuleCompleted(unidade01.id, m.id))
    unit.modules.forEach((m) => ProgressService.markModuleCompleted(unitId, m.id))

    const allModules = area.units.flatMap((u) => u.modules)
    const allProgresses: Record<string, ReturnType<typeof ProgressService.getModuleProgress>> = {}
    area.units.forEach((u) => {
      u.modules.forEach((m) => {
        allProgresses[m.id] = ProgressService.getModuleProgress(u.id, m.id)
      })
    })

    const rec = getNextActivityRecommendation(allModules, allProgresses)
    expect(rec?.reason).toBe('next_module')
    expect(rec?.moduleId).toBe('mod-transtornos-linguagem-caracteristicas')
  })

  it('prioriza revisão atrasada de um módulo da unidade de Fonologia sobre o próximo módulo não iniciado', () => {
    const progresses: Record<string, ReturnType<typeof ProgressService.getModuleProgress>> = {
      [moduloB]: {
        moduleId: moduloB,
        status: 'in_progress',
        completedActivityIds: [],
        answers: [],
        flashcardResults: [],
        difficultConceptIds: [],
        masteredConceptIds: [],
        scheduledReviews: [
          {
            moduleId: moduloB,
            reason: 'spaced_review',
            dueDate: addDays(new Date(), -1).toISOString(),
            intervalDays: 1,
            reviewNumber: 1,
          },
        ],
      },
    }
    const rec = getNextActivityRecommendation(unit.modules, progresses)
    expect(rec?.moduleId).toBe(moduloB)
    expect(rec?.reason).toBe('overdue_review')
  })

  it('dados atuais do localStorage (schemaVersion atual) continuam válidos', () => {
    ProgressService.markModuleCompleted(unitId, moduloA)
    const reloaded = ProgressService.load()
    expect(reloaded.schemaVersion).toBeGreaterThanOrEqual(1)
    expect(reloaded.unitProgresses[unitId].moduleProgresses[moduloA].status).toBe('completed')
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 4. Migração retrocompatível — reorganização das unidades 02/03
// ─────────────────────────────────────────────────────────────────────────────
describe('Migração de progresso — reorganização das unidades da Área Linguagem', () => {
  const STORAGE_KEY = 'fonolab_progress'

  beforeEach(() => {
    ProgressService.resetAll()
  })

  it('remapeia progresso salvo sob os IDs antigos (pré-reorganização) para os novos IDs, sem perder dados', () => {
    // Simula um registro salvo ANTES de qualquer reorganização: na época,
    // 'unit-linguagem-02' era a unidade de Neurolinguística/Afasias/CAA e
    // 'unit-linguagem-03' era a unidade de Fonologia. A cadeia de migrações
    // aplica primeiro a troca 02↔03 (unitIdSwapV1) e, em seguida, renomeia
    // a unidade de Afasias/CAA de '03' para '06' (unitIdRenameV2), já que
    // '03' passou a ser a nova unidade de Transtornos da Linguagem Oral.
    const legacyProgress = {
      schemaVersion: 1,
      lastUpdated: new Date().toISOString(),
      unitProgresses: {
        'unit-linguagem-02': {
          unitId: 'unit-linguagem-02',
          moduleProgresses: {
            'mod-afasias-neurolinguistica': {
              moduleId: 'mod-afasias-neurolinguistica',
              status: 'completed',
              completedActivityIds: ['act-1'],
              answers: [],
              flashcardResults: [],
              difficultConceptIds: [],
              masteredConceptIds: [],
              scheduledReviews: [],
            },
          },
        },
        'unit-linguagem-03': {
          unitId: 'unit-linguagem-03',
          moduleProgresses: {
            'mod-desenvolvimento-fonologico': {
              moduleId: 'mod-desenvolvimento-fonologico',
              status: 'in_progress',
              completedActivityIds: ['act-2'],
              answers: [],
              flashcardResults: [],
              difficultConceptIds: [],
              masteredConceptIds: [],
              scheduledReviews: [],
            },
          },
        },
      },
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(legacyProgress))

    const migrated = ProgressService.load()

    // O progresso de Afasias (antes sob '02', depois '03') agora deve estar sob '06'.
    expect(migrated.unitProgresses['unit-linguagem-06']?.moduleProgresses['mod-afasias-neurolinguistica']?.status).toBe('completed')
    // O progresso de Fonologia (antes sob '03') agora deve estar sob '02'.
    expect(migrated.unitProgresses['unit-linguagem-02']?.moduleProgresses['mod-desenvolvimento-fonologico']?.status).toBe('in_progress')
    // O ID intermediário '03' não deve reter o progresso de Afasias.
    expect(migrated.unitProgresses['unit-linguagem-03']?.moduleProgresses['mod-afasias-neurolinguistica']).toBeUndefined()

    // Nenhum dado foi perdido: as duas entradas de módulo continuam presentes.
    const allModuleProgresses = Object.values(migrated.unitProgresses).flatMap((u) => Object.keys(u.moduleProgresses))
    expect(allModuleProgresses).toContain('mod-afasias-neurolinguistica')
    expect(allModuleProgresses).toContain('mod-desenvolvimento-fonologico')
  })

  it('a migração é idempotente: recarregar múltiplas vezes não troca os dados de volta', () => {
    const legacyProgress = {
      schemaVersion: 1,
      lastUpdated: new Date().toISOString(),
      unitProgresses: {
        'unit-linguagem-02': {
          unitId: 'unit-linguagem-02',
          moduleProgresses: {
            'mod-afasias-neurolinguistica': {
              moduleId: 'mod-afasias-neurolinguistica',
              status: 'completed',
              completedActivityIds: [],
              answers: [],
              flashcardResults: [],
              difficultConceptIds: [],
              masteredConceptIds: [],
              scheduledReviews: [],
            },
          },
        },
      },
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(legacyProgress))

    ProgressService.load()
    ProgressService.load()
    const thirdLoad = ProgressService.load()

    expect(thirdLoad.unitProgresses['unit-linguagem-06']?.moduleProgresses['mod-afasias-neurolinguistica']?.status).toBe('completed')
    expect(thirdLoad.unitProgresses['unit-linguagem-02']?.moduleProgresses['mod-afasias-neurolinguistica']).toBeUndefined()
    expect(thirdLoad.unitProgresses['unit-linguagem-03']?.moduleProgresses['mod-afasias-neurolinguistica']).toBeUndefined()
  })

  it('progresso já salvo sob os IDs atuais (pós-reorganização, com a Unidade 6) permanece intacto', () => {
    ProgressService.markModuleCompleted('unit-linguagem-02', 'mod-desenvolvimento-fonologico')
    ProgressService.markModuleCompleted('unit-linguagem-06', 'mod-afasias-neurolinguistica')

    const reloaded = ProgressService.load()
    expect(reloaded.unitProgresses['unit-linguagem-02'].moduleProgresses['mod-desenvolvimento-fonologico'].status).toBe('completed')
    expect(reloaded.unitProgresses['unit-linguagem-06'].moduleProgresses['mod-afasias-neurolinguistica'].status).toBe('completed')
  })

  it('progresso da nova Unidade 3 (Transtornos da Linguagem Oral) não é afetado por nenhuma migração', () => {
    ProgressService.markModuleCompleted('unit-linguagem-03', 'mod-transtornos-linguagem-caracteristicas')

    const reloaded = ProgressService.load()
    expect(reloaded.unitProgresses['unit-linguagem-03'].moduleProgresses['mod-transtornos-linguagem-caracteristicas'].status).toBe('completed')
    expect(reloaded.appliedMigrations).toContain('unitIdSwapV1')
    expect(reloaded.appliedMigrations).toContain('unitIdRenameV2')
  })
})
