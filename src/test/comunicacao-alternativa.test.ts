import { describe, it, expect } from 'vitest'
import { platform } from './platformTestHelper'
import { validateModule } from '@/lib/validation/moduleSchema'

const area = platform.areas.find((a) => a.slug === 'linguagem')!
const unit = area.units.find((u) => u.slug === 'neurolinguistica-comunicacao-alternativa')!
const modulo = unit.modules.find((m) => m.slug === 'comunicacao-alternativa-ampliada')!

const PLACEHOLDER = 'Conteúdo em elaboração.'

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

// ─────────────────────────────────────────────────────────────────────────────
// Módulo — Comunicação Aumentativa e Alternativa (status "published")
// ─────────────────────────────────────────────────────────────────────────────
describe('Módulo CAA: carregamento e preservação de identidade', () => {
  it('carrega o módulo com id, slug e order preservados', () => {
    expect(modulo).toBeDefined()
    expect(modulo.id).toBe('mod-comunicacao-alternativa')
    expect(modulo.slug).toBe('comunicacao-alternativa-ampliada')
    expect(modulo.order).toBe(2)
  })

  it('está com status "published" após conclusão da auditoria clínica e bibliográfica', () => {
    expect(modulo.status).toBe('published')
  })
})

describe('Módulo CAA — ausência de placeholders', () => {
  it('nenhum parágrafo do resumo é o placeholder padrão', () => {
    modulo.learn.summary.forEach((p) => expect(p.text).not.toBe(PLACEHOLDER))
  })

  it('mainIdea, simpleExplanation e finalSynthesis não são placeholders', () => {
    expect(modulo.learn.mainIdea).not.toBe(PLACEHOLDER)
    expect(modulo.learn.simpleExplanation).not.toBe(PLACEHOLDER)
    expect(modulo.review.finalSynthesis).not.toBe(PLACEHOLDER)
  })

  it('não há mais atividades em arrays vazios (apply/review preenchidos)', () => {
    expect(modulo.apply.questions.length).toBeGreaterThan(0)
    expect(modulo.apply.associations.length).toBeGreaterThan(0)
    expect(modulo.apply.decisionExercises.length).toBeGreaterThan(0)
    expect(modulo.apply.fictionalCases.length).toBeGreaterThan(0)
    expect(modulo.review.flashcards.length).toBeGreaterThan(0)
    expect(modulo.references.length).toBeGreaterThan(0)
  })
})

describe('Módulo CAA — conteúdo de Aprender', () => {
  it('resumo autoral tem entre 1700 e 2300 palavras', () => {
    const words = wordCount(modulo.learn.summary.map((p) => p.text).join(' '))
    expect(words).toBeGreaterThanOrEqual(1700)
    expect(words).toBeLessThanOrEqual(2300)
  })

  it('explicação em linguagem simples tem entre 320 e 450 palavras', () => {
    const words = wordCount(modulo.learn.simpleExplanation)
    expect(words).toBeGreaterThanOrEqual(320)
    expect(words).toBeLessThanOrEqual(450)
  })

  it('tem entre 14 e 18 conceitos essenciais, todos com termo, definição e exemplo', () => {
    expect(modulo.learn.essentialConcepts.length).toBeGreaterThanOrEqual(14)
    expect(modulo.learn.essentialConcepts.length).toBeLessThanOrEqual(18)
    modulo.learn.essentialConcepts.forEach((c) => {
      expect(c.term.length).toBeGreaterThan(0)
      expect(c.definition.length).toBeGreaterThan(0)
      expect(c.example && c.example.length).toBeGreaterThan(0)
    })
  })

  it('tem entre 8 e 10 evidências, todas com fonte e implicação clínica', () => {
    expect(modulo.learn.evidence.length).toBeGreaterThanOrEqual(8)
    expect(modulo.learn.evidence.length).toBeLessThanOrEqual(10)
    modulo.learn.evidence.forEach((e) => {
      expect(e.source.length).toBeGreaterThan(0)
      expect(e.clinicalImplication.length).toBeGreaterThan(0)
      expect(['strong', 'moderate', 'emerging', 'expert_opinion']).toContain(e.evidenceLevel)
    })
  })

  it('tem entre 10 e 14 limitações/cuidados registrados', () => {
    expect(modulo.learn.limitations.length).toBeGreaterThanOrEqual(10)
    expect(modulo.learn.limitations.length).toBeLessThanOrEqual(14)
  })

  it('mapa conceitual é válido: nó central, entre 10 e 14 nós, e arestas conectando ids existentes', () => {
    const map = modulo.learn.conceptMap
    expect(map.centralNode.length).toBeGreaterThan(0)
    expect(map.nodes.length).toBeGreaterThanOrEqual(10)
    expect(map.nodes.length).toBeLessThanOrEqual(14)
    const nodeIds = new Set(map.nodes.map((n) => n.id))
    map.edges.forEach((e) => {
      expect(nodeIds.has(e.from)).toBe(true)
      expect(nodeIds.has(e.to)).toBe(true)
    })
  })

  it('glossário tem entre 15 e 20 termos, todos com definição e exemplo', () => {
    expect(modulo.learn.glossary.length).toBeGreaterThanOrEqual(15)
    expect(modulo.learn.glossary.length).toBeLessThanOrEqual(20)
    modulo.learn.glossary.forEach((g) => {
      expect(g.definition.length).toBeGreaterThan(0)
      expect(g.example.length).toBeGreaterThan(0)
    })
  })

  it('combate explicitamente o mito de que a CAA atrasa a fala', () => {
    const summaryText = modulo.learn.summary.map((p) => p.text).join(' ').toLowerCase()
    expect(summaryText).toContain('não atrasa')
  })

  it('rejeita explicitamente a exigência de pré-requisitos cognitivos para introduzir CAA', () => {
    const summaryText = modulo.learn.summary.map((p) => p.text).join(' ').toLowerCase()
    expect(summaryText).toContain('pré-requisitos cognitivos')
  })

  it('não trata nenhum sistema específico (PECS, DGF, modelagem) como indicação universal', () => {
    const limitationsText = modulo.learn.limitations.map((l) => l.description).join(' ').toLowerCase()
    expect(limitationsText).toContain('indicação universal')
  })
})

describe('Módulo CAA — conteúdo de Aplicar', () => {
  it('tem exatamente 12 questões objetivas, cada uma com 4 alternativas e uma única correta', () => {
    expect(modulo.apply.questions).toHaveLength(12)
    modulo.apply.questions.forEach((q) => {
      expect(q.alternatives).toHaveLength(4)
      const correct = q.alternatives.filter((a) => a.isCorrect)
      expect(correct).toHaveLength(1)
      expect(correct[0].id).toBe(q.correctAlternativeId)
    })
  })

  it('cada alternativa (correta e incorretas) tem comentário/feedback', () => {
    modulo.apply.questions.forEach((q) => {
      q.alternatives.forEach((a) => expect(a.feedback.length).toBeGreaterThan(0))
    })
  })

  it('não há IDs de questão ou de alternativa duplicados dentro do módulo', () => {
    const questionIds = modulo.apply.questions.map((q) => q.id)
    expect(new Set(questionIds).size).toBe(questionIds.length)
    const altIds = modulo.apply.questions.flatMap((q) => q.alternatives.map((a) => a.id))
    expect(new Set(altIds).size).toBe(altIds.length)
  })

  it('tem 2 atividades de associação, cada uma com 6 a 8 pares sem duplicidade', () => {
    expect(modulo.apply.associations).toHaveLength(2)
    modulo.apply.associations.forEach((assoc) => {
      expect(assoc.pairs.length).toBeGreaterThanOrEqual(6)
      expect(assoc.pairs.length).toBeLessThanOrEqual(8)
      const ids = assoc.pairs.map((p) => p.id)
      expect(new Set(ids).size).toBe(ids.length)
    })
  })

  it('tem 2 exercícios de decisão, cada um com opções contendo consequência, explicação e exatamente uma conduta recomendada', () => {
    expect(modulo.apply.decisionExercises).toHaveLength(2)
    modulo.apply.decisionExercises.forEach((ex) => {
      expect(ex.options.length).toBeGreaterThanOrEqual(2)
      ex.options.forEach((o) => {
        expect(o.consequence.length).toBeGreaterThan(0)
        expect(o.explanation.length).toBeGreaterThan(0)
      })
      expect(ex.options.filter((o) => o.isRecommended)).toHaveLength(1)
    })
  })

  it('um exercício de decisão aborda seleção de método de acesso, e outro aborda implementação com família ou escola', () => {
    const situations = modulo.apply.decisionExercises.map((ex) => ex.situation.toLowerCase())
    expect(situations.some((s) => s.includes('acesso'))).toBe(true)
    expect(situations.some((s) => s.includes('escola') || s.includes('família') || s.includes('familia'))).toBe(true)
  })

  it('tem 1 caso fictício com disclaimer explícito e sem diagnóstico definitivo no enunciado', () => {
    expect(modulo.apply.fictionalCases).toHaveLength(1)
    const case1 = modulo.apply.fictionalCases[0]
    expect(case1.disclaimer.length).toBeGreaterThan(0)
    expect(case1.disclaimer.toLowerCase()).toContain('fictício')
    expect(case1.questions.length).toBeGreaterThan(0)
  })

  it('preserva o branchingCase legado (Enzo) auditado', () => {
    expect(modulo.apply.branchingCases).toHaveLength(1)
    expect(modulo.apply.branchingCases![0].id).toBe('bc-caa-enzo')
  })
})

describe('Módulo CAA — conteúdo de Revisar', () => {
  it('tem entre 24 e 30 flashcards, todos completos', () => {
    expect(modulo.review.flashcards.length).toBeGreaterThanOrEqual(24)
    expect(modulo.review.flashcards.length).toBeLessThanOrEqual(30)
    modulo.review.flashcards.forEach((fc) => {
      expect(fc.front.length).toBeGreaterThan(0)
      expect(fc.back.length).toBeGreaterThan(0)
      expect(fc.tags.length).toBeGreaterThan(0)
    })
  })

  it('não há flashcards com IDs duplicados', () => {
    const ids = modulo.review.flashcards.map((f) => f.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('síntese final tem entre 230 e 330 palavras', () => {
    const words = wordCount(modulo.review.finalSynthesis)
    expect(words).toBeGreaterThanOrEqual(230)
    expect(words).toBeLessThanOrEqual(330)
  })
})

describe('Módulo CAA — referências', () => {
  it('tem ao menos 10 referências, todas com autores, título, fonte, ano e ao menos um uso indicado', () => {
    expect(modulo.references.length).toBeGreaterThanOrEqual(10)
    modulo.references.forEach((r) => {
      expect(r.authors.length).toBeGreaterThan(0)
      expect(r.title.length).toBeGreaterThan(0)
      expect(r.source.length).toBeGreaterThan(0)
      expect(r.year).toBeGreaterThanOrEqual(1900)
      expect(r.usedIn.length).toBeGreaterThan(0)
    })
  })

  it('não há referências com ID duplicado', () => {
    const ids = modulo.references.map((r) => r.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('toda referenceId usada em questões corresponde a uma referência real do módulo', () => {
    const refIds = new Set(modulo.references.map((r) => r.id))
    const allQuestions = [...modulo.apply.questions, ...modulo.apply.fictionalCases.flatMap((fc) => fc.questions)]
    allQuestions.forEach((q) => {
      if (q.referenceId) expect(refIds.has(q.referenceId)).toBe(true)
    })
  })
})

describe('Módulo CAA — validação Zod e preservação da unidade e da plataforma', () => {
  it('passa integralmente na validação do schema, já com status "published"', () => {
    const result = validateModule(modulo)
    if (!result.success) {
      console.error('Erros de validação do Módulo CAA:', result.errors)
    }
    expect(result.success).toBe(true)
  })

  it('o módulo de Afasias e Neurolinguística está publicado ("published")', () => {
    const moduloAfasias = unit.modules.find((m) => m.slug === 'afasias-neurolinguistica-adulto')!
    expect(moduloAfasias.id).toBe('mod-afasias-neurolinguistica')
    expect(moduloAfasias.order).toBe(1)
    expect(moduloAfasias.status).toBe('published')
  })

  it('a unidade continua com exatamente 2 módulos, id/slug/order preservados (agora como Unidade 6)', () => {
    expect(unit.id).toBe('unit-linguagem-06')
    expect(unit.slug).toBe('neurolinguistica-comunicacao-alternativa')
    expect(unit.order).toBe(6)
    expect(unit.modules).toHaveLength(2)
  })

  it('não há IDs de módulo duplicados com nenhuma outra unidade da plataforma', () => {
    const allModuleIds = platform.areas.flatMap((a) => a.units.flatMap((u) => u.modules.map((m) => m.id)))
    expect(new Set(allModuleIds).size).toBe(allModuleIds.length)
  })
})
