import { describe, it, expect } from 'vitest'
import { platform } from './platformTestHelper'
import { validateModule } from '@/lib/validation/moduleSchema'

const area = platform.areas.find((a) => a.slug === 'linguagem')!
const unit = area.units.find((u) => u.slug === 'desenvolvimento-fonologico-alteracoes-fala')!
const modulo = unit.modules.find((m) => m.slug === 'planejamento-terapeutico-transtornos-fonologicos')!

const PLACEHOLDER = 'Conteúdo em elaboração.'

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

// ─────────────────────────────────────────────────────────────────────────────
// Módulo 4 — Planejamento terapêutico nos transtornos fonológicos (status "published")
// ─────────────────────────────────────────────────────────────────────────────
describe('Módulo 4 — Planejamento terapêutico: carregamento', () => {
  it('carrega o módulo com id e slug estáveis', () => {
    expect(modulo).toBeDefined()
    expect(modulo.id).toBe('mod-planejamento-terapeutico-transtornos-fonologicos')
    expect(modulo.slug).toBe('planejamento-terapeutico-transtornos-fonologicos')
    expect(modulo.order).toBe(4)
  })

  it('está com status "published" após auditoria clínica final', () => {
    expect(modulo.status).toBe('published')
  })
})

describe('Módulo 4 — ausência de placeholders', () => {
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

describe('Módulo 4 — conteúdo de Aprender', () => {
  it('resumo autoral tem entre 1700 e 2300 palavras', () => {
    const words = wordCount(modulo.learn.summary.map((p) => p.text).join(' '))
    expect(words).toBeGreaterThanOrEqual(1700)
    expect(words).toBeLessThanOrEqual(2300)
  })

  it('explicação em linguagem simples tem entre 300 e 450 palavras', () => {
    const words = wordCount(modulo.learn.simpleExplanation)
    expect(words).toBeGreaterThanOrEqual(300)
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

  it('tem ao menos 11 limitações/cuidados registrados', () => {
    expect(modulo.learn.limitations.length).toBeGreaterThanOrEqual(11)
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

  it('glossário tem entre 15 e 20 termos, todos com definição e exemplo', () => {
    expect(modulo.learn.glossary.length).toBeGreaterThanOrEqual(15)
    expect(modulo.learn.glossary.length).toBeLessThanOrEqual(20)
    modulo.learn.glossary.forEach((g) => {
      expect(g.definition.length).toBeGreaterThan(0)
      expect(g.example.length).toBeGreaterThan(0)
    })
  })

  it('não define frequência ou número de sessões fixo como padrão universal', () => {
    const summaryText = modulo.learn.summary.map((p) => p.text).join(' ').toLowerCase()
    expect(summaryText).toContain('não recomenda uma frequência ou intensidade fixa')
  })

  it('não apresenta critério de alta baseado em um único indicador', () => {
    const summaryText = modulo.learn.summary.map((p) => p.text).join(' ').toLowerCase()
    expect(summaryText).toContain('não devem se apoiar em um único indicador')
  })
})

describe('Módulo 4 — conteúdo de Aplicar', () => {
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

  it('tem 1 caso fictício com disclaimer explícito e sem plano terapêutico definitivo', () => {
    expect(modulo.apply.fictionalCases).toHaveLength(1)
    const case1 = modulo.apply.fictionalCases[0]
    expect(case1.disclaimer.length).toBeGreaterThan(0)
    expect(case1.disclaimer.toLowerCase()).toContain('fictício')
    expect(case1.disclaimer.toLowerCase()).toContain('definitivo')
    expect(case1.questions.length).toBeGreaterThan(0)
  })
})

describe('Módulo 4 — conteúdo de Revisar', () => {
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

describe('Módulo 4 — referências', () => {
  it('tem ao menos 9 referências, todas com autores, título, fonte, ano e ao menos um uso indicado', () => {
    expect(modulo.references.length).toBeGreaterThanOrEqual(9)
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

describe('Módulo 4 — validação Zod e preservação dos demais módulos', () => {
  it('passa integralmente na validação do schema, já com status "published"', () => {
    const result = validateModule(modulo)
    if (!result.success) {
      console.error('Erros de validação do Módulo 4:', result.errors)
    }
    expect(result.success).toBe(true)
  })

  it('os Módulos 1, 2 e 3 permanecem publicados e intactos', () => {
    const modulo1 = unit.modules.find((m) => m.slug === 'desenvolvimento-fonologico')!
    const modulo2 = unit.modules.find((m) => m.slug === 'alteracoes-fonologicas')!
    const modulo3 = unit.modules.find((m) => m.slug === 'principios-intervencao-fonologica')!
    expect(modulo1.status).toBe('published')
    expect(modulo2.status).toBe('published')
    expect(modulo3.status).toBe('published')
    expect(modulo1.learn.summary[0].text).not.toBe(PLACEHOLDER)
    expect(modulo2.learn.summary[0].text).not.toBe(PLACEHOLDER)
    expect(modulo3.learn.summary[0].text).not.toBe(PLACEHOLDER)
  })

  it('não há IDs de módulo duplicados com nenhuma outra unidade da plataforma', () => {
    const allModuleIds = platform.areas.flatMap((a) => a.units.flatMap((u) => u.modules.map((m) => m.id)))
    expect(new Set(allModuleIds).size).toBe(allModuleIds.length)
  })

  it('a unidade tem exatamente 4 módulos, todos com conteúdo real (nenhum em draft com placeholder)', () => {
    expect(unit.modules).toHaveLength(4)
    unit.modules.forEach((m) => {
      expect(m.learn.summary[0].text).not.toBe(PLACEHOLDER)
    })
  })
})
