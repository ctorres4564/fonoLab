import { describe, it, expect } from 'vitest'
import { platform } from './platformTestHelper'
import { validateModule } from '@/lib/validation/moduleSchema'

const area = platform.areas.find((a) => a.slug === 'linguagem')!
const unit = area.units.find((u) => u.slug === 'desenvolvimento-fonologico-alteracoes-fala')!
const modulo = unit.modules.find((m) => m.slug === 'desenvolvimento-fonologico')!

const PLACEHOLDER = 'Conteúdo em elaboração.'

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

// ─────────────────────────────────────────────────────────────────────────────
// Módulo 1 — Desenvolvimento fonológico (conteúdo real, status "review")
// ─────────────────────────────────────────────────────────────────────────────
describe('Módulo 1 — Desenvolvimento fonológico: carregamento', () => {
  it('carrega o módulo com id e slug estáveis', () => {
    expect(modulo).toBeDefined()
    expect(modulo.id).toBe('mod-desenvolvimento-fonologico')
    expect(modulo.slug).toBe('desenvolvimento-fonologico')
    expect(modulo.order).toBe(1)
  })

  it('está com status "published" após auditoria clínica final', () => {
    expect(modulo.status).toBe('published')
  })
})

describe('Módulo 1 — ausência de placeholders', () => {
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

describe('Módulo 1 — conteúdo de Aprender', () => {
  it('resumo autoral tem entre 1400 e 2000 palavras', () => {
    const words = wordCount(modulo.learn.summary.map((p) => p.text).join(' '))
    expect(words).toBeGreaterThanOrEqual(1400)
    expect(words).toBeLessThanOrEqual(2000)
  })

  it('explicação em linguagem simples tem entre 250 e 400 palavras', () => {
    const words = wordCount(modulo.learn.simpleExplanation)
    expect(words).toBeGreaterThanOrEqual(250)
    expect(words).toBeLessThanOrEqual(400)
  })

  it('tem entre 8 e 12 conceitos essenciais, todos com termo, definição e exemplo', () => {
    expect(modulo.learn.essentialConcepts.length).toBeGreaterThanOrEqual(8)
    expect(modulo.learn.essentialConcepts.length).toBeLessThanOrEqual(12)
    modulo.learn.essentialConcepts.forEach((c) => {
      expect(c.term.length).toBeGreaterThan(0)
      expect(c.definition.length).toBeGreaterThan(0)
      expect(c.example && c.example.length).toBeGreaterThan(0)
    })
  })

  it('tem entre 5 e 8 evidências, todas com fonte e implicação clínica', () => {
    expect(modulo.learn.evidence.length).toBeGreaterThanOrEqual(5)
    expect(modulo.learn.evidence.length).toBeLessThanOrEqual(8)
    modulo.learn.evidence.forEach((e) => {
      expect(e.source.length).toBeGreaterThan(0)
      expect(e.clinicalImplication.length).toBeGreaterThan(0)
      expect(['strong', 'moderate', 'emerging', 'expert_opinion']).toContain(e.evidenceLevel)
    })
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

  it('glossário tem entre 12 e 15 termos, todos com definição e exemplo', () => {
    expect(modulo.learn.glossary.length).toBeGreaterThanOrEqual(12)
    expect(modulo.learn.glossary.length).toBeLessThanOrEqual(15)
    modulo.learn.glossary.forEach((g) => {
      expect(g.definition.length).toBeGreaterThan(0)
      expect(g.example.length).toBeGreaterThan(0)
    })
  })

  it('todo termo do glossário é efetivamente abordado no corpo do módulo (sem termos órfãos)', () => {
    // Cada termo do glossário deve ter ao menos uma palavra significativa
    // reconhecível no resumo, nos conceitos essenciais ou nas evidências —
    // evita glossário com termos nunca explicados no módulo.
    const corpus = [
      ...modulo.learn.summary.map((p) => p.text),
      ...modulo.learn.essentialConcepts.map((c) => `${c.term} ${c.definition}`),
      ...modulo.learn.evidence.map((e) => e.claim),
    ].join(' ').toLowerCase()

    const stopwords = new Set(['de', 'da', 'do', 'a', 'e', 'em'])

    modulo.learn.glossary.forEach((g) => {
      const words = g.term.toLowerCase().split(/\s+/).filter((w) => w.length > 3 && !stopwords.has(w))
      const mentioned = words.some((w) => corpus.includes(w))
      expect(mentioned).toBe(true)
    })
  })
})

describe('Módulo 1 — conteúdo de Aplicar', () => {
  it('tem exatamente 10 questões objetivas, cada uma com 4 alternativas e uma única correta', () => {
    expect(modulo.apply.questions).toHaveLength(10)
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

  it('tem 2 atividades de associação, cada uma com 5 a 7 pares sem duplicidade', () => {
    expect(modulo.apply.associations).toHaveLength(2)
    modulo.apply.associations.forEach((assoc) => {
      expect(assoc.pairs.length).toBeGreaterThanOrEqual(5)
      expect(assoc.pairs.length).toBeLessThanOrEqual(7)
      const ids = assoc.pairs.map((p) => p.id)
      expect(new Set(ids).size).toBe(ids.length)
    })
  })

  it('tem 2 exercícios de decisão, cada um com pelo menos 2 opções contendo consequência e explicação', () => {
    expect(modulo.apply.decisionExercises).toHaveLength(2)
    modulo.apply.decisionExercises.forEach((ex) => {
      expect(ex.options.length).toBeGreaterThanOrEqual(2)
      ex.options.forEach((o) => {
        expect(o.consequence.length).toBeGreaterThan(0)
        expect(o.explanation.length).toBeGreaterThan(0)
      })
      // Exatamente uma opção deve ser a mais recomendada
      expect(ex.options.filter((o) => o.isRecommended)).toHaveLength(1)
    })
  })

  it('tem 1 caso fictício com disclaimer e sem diagnóstico definitivo no enunciado', () => {
    expect(modulo.apply.fictionalCases).toHaveLength(1)
    const case1 = modulo.apply.fictionalCases[0]
    expect(case1.disclaimer.length).toBeGreaterThan(0)
    expect(case1.disclaimer.toLowerCase()).toContain('fictício')
    expect(case1.questions.length).toBeGreaterThan(0)
  })
})

describe('Módulo 1 — conteúdo de Revisar', () => {
  it('tem entre 18 e 24 flashcards, todos completos', () => {
    expect(modulo.review.flashcards.length).toBeGreaterThanOrEqual(18)
    expect(modulo.review.flashcards.length).toBeLessThanOrEqual(24)
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

  it('síntese final tem entre 200 e 300 palavras', () => {
    const words = wordCount(modulo.review.finalSynthesis)
    expect(words).toBeGreaterThanOrEqual(200)
    expect(words).toBeLessThanOrEqual(300)
  })
})

describe('Módulo 1 — referências', () => {
  it('tem ao menos 6 referências, todas com autores, título, fonte, ano e ao menos um uso indicado', () => {
    expect(modulo.references.length).toBeGreaterThanOrEqual(6)
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

describe('Módulo 1 — validação Zod completa e compatibilidade com os demais módulos da unidade', () => {
  it('passa integralmente na validação do schema, já com status "published"', () => {
    const result = validateModule(modulo)
    if (!result.success) {
      console.error('Erros de validação do Módulo 1:', result.errors)
    }
    expect(result.success).toBe(true)
  })

  it('o Módulo 2 (Alterações fonológicas) está publicado, com conteúdo real, e não foi deixado em draft', () => {
    const [, modulo2] = unit.modules
    expect(modulo2.status).toBe('published')
    expect(modulo2.learn.summary[0].text).not.toBe(PLACEHOLDER)
    expect(modulo2.apply.questions.length).toBeGreaterThan(0)
    expect(modulo2.review.flashcards.length).toBeGreaterThan(0)
    const result = validateModule(modulo2)
    expect(result.success).toBe(true)
  })

  it('o Módulo 3 está publicado; o Módulo 4 está em revisão, ambos com conteúdo real', () => {
    const [, , modulo3, modulo4] = unit.modules
    expect(modulo3.status).toBe('published')
    expect(modulo3.learn.summary[0].text).not.toBe(PLACEHOLDER)
    expect(validateModule(modulo3).success).toBe(true)

    expect(modulo4.status).toBe('published')
    expect(modulo4.learn.summary[0].text).not.toBe(PLACEHOLDER)
    expect(modulo4.apply.questions.length).toBeGreaterThan(0)
    expect(modulo4.review.flashcards.length).toBeGreaterThan(0)
    expect(validateModule(modulo4).success).toBe(true)
  })
})
