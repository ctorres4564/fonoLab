import { describe, it, expect, beforeEach } from 'vitest'
import { platform } from './platformTestHelper'
import { validateModules } from '@/lib/validation/moduleSchema'
import { ProgressService } from '@/lib/progress/progressService'
import {
  createFirstReview,
  createNextReview,
  isDue,
  addDays,
} from '@/lib/progress/spacedReview'
import { getNextActivityRecommendation } from '@/lib/progress/recommendations'
import type { ModuleProgress } from '@/types/progress'

// ─────────────────────────────────────────────────────────────────────────────
// 1. Carregamento da plataforma
// ─────────────────────────────────────────────────────────────────────────────
describe('Plataforma', () => {
  it('carrega com id, title e areas', () => {
    expect(platform.id).toBeDefined()
    expect(platform.title).toBeDefined()
    expect(platform.areas.length).toBeGreaterThan(0)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 2. Carregamento das áreas
// ─────────────────────────────────────────────────────────────────────────────
describe('Área Linguagem', () => {
  it('existe e tem slug "linguagem"', () => {
    const area = platform.areas.find((a) => a.slug === 'linguagem')
    expect(area).toBeDefined()
  })

  it('tem pelo menos uma unidade', () => {
    const area = platform.areas.find((a) => a.slug === 'linguagem')!
    expect(area.units.length).toBeGreaterThan(0)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 3. Carregamento da Unidade 1
// ─────────────────────────────────────────────────────────────────────────────
describe('Unidade 1', () => {
  const unit = platform.areas[0].units[0]

  it('tem id, slug e title', () => {
    expect(unit.id).toBeDefined()
    expect(unit.slug).toBeDefined()
    expect(unit.title).toBeDefined()
  })

  it('tem exatamente 3 módulos', () => {
    expect(unit.modules).toHaveLength(3)
  })

  it('módulos têm ordem sequencial 1, 2, 3', () => {
    const orders = unit.modules.map((m) => m.order)
    expect(orders).toEqual([1, 2, 3])
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 4. Validação dos 3 módulos
// ─────────────────────────────────────────────────────────────────────────────
describe('Validação dos módulos', () => {
  const modules = platform.areas[0].units[0].modules

  it('todos os 3 módulos passam na validação Zod', () => {
    const result = validateModules(modules)
    if (!result.success) {
      console.error('Erros de validação:', result.errors)
    }
    expect(result.success).toBe(true)
  })

  it('não tem IDs ou slugs duplicados', () => {
    const ids = modules.map((m) => m.id)
    const slugs = modules.map((m) => m.slug)
    expect(new Set(ids).size).toBe(ids.length)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('cada questão tem exatamente uma alternativa correta', () => {
    modules.forEach((mod) => {
      const allQuestions = [
        ...mod.apply.questions,
        ...mod.apply.fictionalCases.flatMap((c) => c.questions),
      ]
      allQuestions.forEach((q) => {
        const correctCount = q.alternatives.filter((a) => a.isCorrect).length
        expect(correctCount).toBe(1)
      })
    })
  })

  it('flashcards têm front e back não vazios', () => {
    modules.forEach((mod) => {
      mod.review.flashcards.forEach((fc) => {
        expect(fc.front.length).toBeGreaterThan(0)
        expect(fc.back.length).toBeGreaterThan(0)
      })
    })
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 5. Progresso (localStorage mock via jsdom)
// ─────────────────────────────────────────────────────────────────────────────
describe('ProgressService', () => {
  const unitId = 'unit-linguagem-01'
  const moduleId = 'mod-avaliacao-linguagens'

  beforeEach(() => {
    ProgressService.resetAll()
  })

  it('retorna progresso vazio ao iniciar', () => {
    const prog = ProgressService.getModuleProgress(unitId, moduleId)
    expect(prog.status).toBe('not_started')
    expect(prog.completedActivityIds).toHaveLength(0)
  })

  it('registra atividade concluída e muda status para in_progress', () => {
    ProgressService.markActivityCompleted(unitId, moduleId, 'act-1')
    const prog = ProgressService.getModuleProgress(unitId, moduleId)
    expect(prog.status).toBe('in_progress')
    expect(prog.completedActivityIds).toContain('act-1')
  })

  it('registra resposta e calcula taxa de acerto', () => {
    ProgressService.recordAnswer(unitId, moduleId, 'q-1', 'alt-a', true)
    ProgressService.recordAnswer(unitId, moduleId, 'q-2', 'alt-b', false)
    const accuracy = ProgressService.getAccuracyRate(unitId, moduleId)
    expect(accuracy).toBe(50)
  })

  it('marca módulo como concluído', () => {
    ProgressService.markModuleCompleted(unitId, moduleId)
    const prog = ProgressService.getModuleProgress(unitId, moduleId)
    expect(prog.status).toBe('completed')
    expect(prog.completedAt).toBeDefined()
  })

  it('salva e recupera notas pessoais do diário', () => {
    const testNotes = 'Minha explicação Feynman para este módulo.'
    ProgressService.saveNotes(unitId, moduleId, testNotes)
    const prog = ProgressService.getModuleProgress(unitId, moduleId)
    expect(prog.notes).toBe(testNotes)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 6. Revisão espaçada
// ─────────────────────────────────────────────────────────────────────────────
describe('Revisão espaçada', () => {
  it('cria primeira revisão para 1 dia', () => {
    const review = createFirstReview('mod-1')
    expect(review.intervalDays).toBe(1)
    expect(review.reviewNumber).toBe(1)
  })

  it('cria revisão subsequente corretamente', () => {
    const first = createFirstReview('mod-1')
    const second = createNextReview(first)
    expect(second?.intervalDays).toBe(3)
    expect(second?.reviewNumber).toBe(2)
  })

  it('retorna null após a 5ª revisão', () => {
    let review = createFirstReview('mod-1')
    for (let i = 0; i < 4; i++) {
      review = createNextReview(review)!
    }
    const next = createNextReview(review)
    expect(next).toBeNull()
  })

  it('isDue retorna true para data passada', () => {
    const review = { ...createFirstReview('mod-1'), dueDate: addDays(new Date(), -2).toISOString() }
    expect(isDue(review)).toBe(true)
  })

  it('isDue retorna false para data futura', () => {
    const review = createFirstReview('mod-1')
    expect(isDue(review)).toBe(false)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 7. Recomendação da próxima atividade
// ─────────────────────────────────────────────────────────────────────────────
describe('Recomendação determinística', () => {
  const modules = platform.areas[0].units[0].modules

  it('recomenda primeiro módulo quando nenhum foi iniciado', () => {
    const rec = getNextActivityRecommendation(modules, {})
    expect(rec).not.toBeNull()
    expect(rec?.reason).toBe('first_module')
    expect(rec?.mode).toBe('learn')
  })

  it('prioriza revisão atrasada sobre módulo em andamento', () => {
    const progresses: Record<string, ModuleProgress> = {
      'mod-avaliacao-linguagens': {
        moduleId: 'mod-avaliacao-linguagens',
        status: 'in_progress',
        completedActivityIds: [],
        answers: [],
        flashcardResults: [],
        difficultConceptIds: [],
        masteredConceptIds: [],
        scheduledReviews: [{
          moduleId: 'mod-avaliacao-linguagens',
          reason: 'spaced_review',
          dueDate: addDays(new Date(), -1).toISOString(),
          intervalDays: 1,
          reviewNumber: 1,
        }],
      },
    }
    const rec = getNextActivityRecommendation(modules, progresses)
    expect(rec?.reason).toBe('overdue_review')
    expect(rec?.mode).toBe('review')
  })

  it('prioriza resposta incorreta sobre módulo em andamento sem revisão', () => {
    const progresses: Record<string, ModuleProgress> = {
      'mod-avaliacao-linguagens': {
        moduleId: 'mod-avaliacao-linguagens',
        status: 'in_progress',
        completedActivityIds: [],
        answers: [{ questionId: 'q-1', selectedAlternativeId: 'wrong', isCorrect: false, answeredAt: new Date().toISOString(), attemptNumber: 1 }],
        flashcardResults: [],
        difficultConceptIds: [],
        masteredConceptIds: [],
        scheduledReviews: [],
      },
    }
    const rec = getNextActivityRecommendation(modules, progresses)
    expect(rec?.reason).toBe('incorrect_answer')
  })
})
