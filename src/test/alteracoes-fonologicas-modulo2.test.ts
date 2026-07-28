import { describe, it, expect } from 'vitest'
import { platform } from './platformTestHelper'
import { validateModule } from '@/lib/validation/moduleSchema'

const area = platform.areas.find((a) => a.slug === 'linguagem')!
const unit = area.units.find((u) => u.slug === 'desenvolvimento-fonologico-alteracoes-fala')!
const modulo = unit.modules.find((m) => m.slug === 'alteracoes-fonologicas')!

const PLACEHOLDER = 'Conteúdo em elaboração.'

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

// ─────────────────────────────────────────────────────────────────────────────
// Módulo 2 — Alterações fonológicas (conteúdo real, status "published")
// ─────────────────────────────────────────────────────────────────────────────
describe('Módulo 2 — Alterações fonológicas: carregamento', () => {
  it('carrega o módulo com id e slug estáveis', () => {
    expect(modulo).toBeDefined()
    expect(modulo.id).toBe('mod-alteracoes-fonologicas')
    expect(modulo.slug).toBe('alteracoes-fonologicas')
    expect(modulo.order).toBe(2)
  })

  it('está com status "published" após auditoria clínica final', () => {
    expect(modulo.status).toBe('published')
  })
})

describe('Módulo 2 — ausência de placeholders', () => {
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

describe('Módulo 2 — conteúdo de Aprender', () => {
  it('resumo autoral tem entre 1500 e 2100 palavras', () => {
    const words = wordCount(modulo.learn.summary.map((p) => p.text).join(' '))
    expect(words).toBeGreaterThanOrEqual(1500)
    expect(words).toBeLessThanOrEqual(2100)
  })

  it('explicação em linguagem simples tem entre 300 e 450 palavras', () => {
    const words = wordCount(modulo.learn.simpleExplanation)
    expect(words).toBeGreaterThanOrEqual(300)
    expect(words).toBeLessThanOrEqual(450)
  })

  it('tem entre 10 e 14 conceitos essenciais, todos com termo, definição e exemplo', () => {
    expect(modulo.learn.essentialConcepts.length).toBeGreaterThanOrEqual(10)
    expect(modulo.learn.essentialConcepts.length).toBeLessThanOrEqual(14)
    modulo.learn.essentialConcepts.forEach((c) => {
      expect(c.term.length).toBeGreaterThan(0)
      expect(c.definition.length).toBeGreaterThan(0)
      expect(c.example && c.example.length).toBeGreaterThan(0)
    })
  })

  it('tem entre 6 e 9 evidências, todas com fonte e implicação clínica', () => {
    expect(modulo.learn.evidence.length).toBeGreaterThanOrEqual(6)
    expect(modulo.learn.evidence.length).toBeLessThanOrEqual(9)
    modulo.learn.evidence.forEach((e) => {
      expect(e.source.length).toBeGreaterThan(0)
      expect(e.clinicalImplication.length).toBeGreaterThan(0)
      expect(['strong', 'moderate', 'emerging', 'expert_opinion']).toContain(e.evidenceLevel)
    })
  })

  it('tem ao menos 10 limitações/cuidados registrados', () => {
    expect(modulo.learn.limitations.length).toBeGreaterThanOrEqual(10)
  })

  it('mapa conceitual é válido: nó central, nós e arestas conectando ids existentes', () => {
    const map = modulo.learn.conceptMap
    expect(map.centralNode.length).toBeGreaterThan(0)
    expect(map.nodes.length).toBeGreaterThan(0)
    const nodeIds = new Set(map.nodes.map((n) => n.id))
    map.edges.forEach((e) => {
      expect(nodeIds.has(e.from)).toBe(true)
      expect(nodeIds.has(e.to)).toBe(true)
    })
  })

  it('glossário tem entre 12 e 18 termos, todos com definição e exemplo', () => {
    expect(modulo.learn.glossary.length).toBeGreaterThanOrEqual(12)
    expect(modulo.learn.glossary.length).toBeLessThanOrEqual(18)
    modulo.learn.glossary.forEach((g) => {
      expect(g.definition.length).toBeGreaterThan(0)
      expect(g.example.length).toBeGreaterThan(0)
    })
  })
})

describe('Módulo 2 — conteúdo de Aplicar', () => {
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

  it('tem 1 caso fictício com disclaimer explícito e sem diagnóstico definitivo no enunciado', () => {
    expect(modulo.apply.fictionalCases).toHaveLength(1)
    const case1 = modulo.apply.fictionalCases[0]
    expect(case1.disclaimer.length).toBeGreaterThan(0)
    expect(case1.disclaimer.toLowerCase()).toContain('fictício')
    expect(case1.questions.length).toBeGreaterThan(0)
  })

  it('as alternativas corretas do caso fictício usam formulações cautelosas, não diagnóstico fechado', () => {
    const case1 = modulo.apply.fictionalCases[0]
    case1.questions.forEach((q) => {
      const correct = q.alternatives.find((a) => a.id === q.correctAlternativeId)!
      const text = correct.text.toLowerCase()
      const hedged = ['compatível com', 'sugere', 'necessidade de investigação', 'não permite', 'antes de qualquer conclusão', 'integrar']
        .some((phrase) => text.includes(phrase))
      expect(hedged).toBe(true)
    })
  })
})

describe('Módulo 2 — conteúdo de Revisar', () => {
  it('tem entre 20 e 26 flashcards, todos completos', () => {
    expect(modulo.review.flashcards.length).toBeGreaterThanOrEqual(20)
    expect(modulo.review.flashcards.length).toBeLessThanOrEqual(26)
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

  it('síntese final tem entre 220 e 320 palavras', () => {
    const words = wordCount(modulo.review.finalSynthesis)
    expect(words).toBeGreaterThanOrEqual(220)
    expect(words).toBeLessThanOrEqual(320)
  })
})

describe('Módulo 2 — referências', () => {
  it('tem ao menos 8 referências, todas com autores, título, fonte, ano e ao menos um uso indicado', () => {
    expect(modulo.references.length).toBeGreaterThanOrEqual(8)
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
})

describe('Módulo 2 — validação Zod e preservação dos demais módulos', () => {
  it('passa integralmente na validação do schema, já com status "published"', () => {
    const result = validateModule(modulo)
    if (!result.success) {
      console.error('Erros de validação do Módulo 2:', result.errors)
    }
    expect(result.success).toBe(true)
  })

  it('o Módulo 1 permanece publicado e intacto', () => {
    const modulo1 = unit.modules.find((m) => m.slug === 'desenvolvimento-fonologico')!
    expect(modulo1.status).toBe('published')
    expect(modulo1.learn.summary[0].text).not.toBe(PLACEHOLDER)
  })

  it('os Módulos 3 e 4 estão publicados, ambos com conteúdo real', () => {
    const [, , modulo3, modulo4] = unit.modules
    expect(modulo3.status).toBe('published')
    expect(modulo3.learn.summary[0].text).not.toBe(PLACEHOLDER)

    expect(modulo4.status).toBe('published')
    expect(modulo4.learn.summary[0].text).not.toBe(PLACEHOLDER)
  })

  it('não há IDs de módulo duplicados com nenhuma outra unidade da plataforma', () => {
    const allModuleIds = platform.areas.flatMap((a) => a.units.flatMap((u) => u.modules.map((m) => m.id)))
    expect(new Set(allModuleIds).size).toBe(allModuleIds.length)
  })
})
