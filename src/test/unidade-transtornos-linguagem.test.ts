import { describe, it, expect } from 'vitest'
import { platform } from './platformTestHelper'
import { validateModule } from '@/lib/validation/moduleSchema'

const area = platform.areas.find((a) => a.slug === 'linguagem')!
const unit = area.units.find((u) => u.slug === 'desenvolvimento-transtornos-linguagem-oral')!
const modulo = unit.modules.find((m) => m.slug === 'caracteristicas-transtornos-especificos-linguagem')!

const PLACEHOLDER = 'Conteúdo em elaboração.'

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

// ─────────────────────────────────────────────────────────────────────────────
// Unidade 3 — Desenvolvimento e Transtornos da Linguagem Oral
// ─────────────────────────────────────────────────────────────────────────────
describe('Unidade 3 — Desenvolvimento e Transtornos da Linguagem Oral', () => {
  it('existe, está registrada na Área Linguagem e ocupa a posição 3', () => {
    expect(unit).toBeDefined()
    expect(unit.id).toBe('unit-linguagem-03')
    expect(unit.order).toBe(3)
    expect(area.units).toContain(unit)
  })

  it('tem exatamente 4 módulos cadastrados, na ordem correta', () => {
    expect(unit.modules).toHaveLength(4)
    expect(unit.modules.map((m) => m.id)).toEqual([
      'mod-transtornos-linguagem-caracteristicas',
      'mod-transtornos-linguagem-aspectos-linguisticos',
      'mod-transtornos-linguagem-bases-neurobiologicas',
      'mod-transtornos-linguagem-avaliacao-intervencao',
    ])
    expect(unit.modules.map((m) => m.order)).toEqual([1, 2, 3, 4])
  })

  it('os Módulos 1, 2, 3 e 4 estão com status "published"', () => {
    const [modulo1, modulo2, modulo3, modulo4] = unit.modules
    expect(modulo1.status).toBe('published')
    expect(modulo2.status).toBe('published')
    expect(modulo3.status).toBe('published')
    expect(modulo4.status).toBe('published')
  })

  it('não há IDs ou slugs duplicados entre os módulos da unidade', () => {
    const ids = unit.modules.map((m) => m.id)
    const slugs = unit.modules.map((m) => m.slug)
    expect(new Set(ids).size).toBe(ids.length)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('não há IDs de módulo duplicados com nenhuma outra unidade da plataforma', () => {
    const allModuleIds = platform.areas.flatMap((a) => a.units.flatMap((u) => u.modules.map((m) => m.id)))
    expect(new Set(allModuleIds).size).toBe(allModuleIds.length)
  })

  it('não há IDs, slugs ou orders de unidade duplicados na Área Linguagem', () => {
    const ids = area.units.map((u) => u.id)
    const slugs = area.units.map((u) => u.slug)
    const orders = area.units.map((u) => u.order)
    expect(new Set(ids).size).toBe(ids.length)
    expect(new Set(slugs).size).toBe(slugs.length)
    expect(new Set(orders).size).toBe(orders.length)
  })

  it('o módulo 4 passa na validação Zod como módulo completo publicado', () => {
    const [, , , modulo4] = unit.modules
    const result = validateModule(modulo4)
    if (!result.success) {
      console.error('Erros de validação do módulo 4 publicado:', result.errors)
    }
    expect(result.success).toBe(true)
  })

  it('o módulo 4 não usa o placeholder: conteúdo real foi integrado', () => {
    const [, , , modulo4] = unit.modules
    expect(modulo4.learn.summary[0].text).not.toBe(PLACEHOLDER)
    expect(modulo4.learn.essentialConcepts.length).toBeGreaterThan(0)
    expect(modulo4.apply.questions.length).toBeGreaterThan(0)
  })

  it('os Módulos 2, 3 e 4 não usam mais o placeholder: conteúdo real foi integrado', () => {
    const [, modulo2, modulo3, modulo4] = unit.modules
    ;[modulo2, modulo3, modulo4].forEach((m) => {
      expect(m.learn.summary[0].text).not.toBe(PLACEHOLDER)
      expect(m.learn.essentialConcepts.length).toBeGreaterThan(0)
      expect(m.apply.questions.length).toBeGreaterThan(0)
    })
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// Módulo 1 — Características dos Transtornos Específicos de Linguagem
// ─────────────────────────────────────────────────────────────────────────────
describe('Módulo 1: carregamento', () => {
  it('carrega o módulo com id, slug e order estáveis', () => {
    expect(modulo).toBeDefined()
    expect(modulo.id).toBe('mod-transtornos-linguagem-caracteristicas')
    expect(modulo.slug).toBe('caracteristicas-transtornos-especificos-linguagem')
    expect(modulo.order).toBe(1)
  })

  it('está com status "published" após conclusão da auditoria clínica e bibliográfica final', () => {
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

  it('não há atividades em arrays vazios (apply/review preenchidos)', () => {
    expect(modulo.apply.questions.length).toBeGreaterThan(0)
    expect(modulo.apply.associations.length).toBeGreaterThan(0)
    expect(modulo.apply.decisionExercises.length).toBeGreaterThan(0)
    expect(modulo.apply.fictionalCases.length).toBeGreaterThan(0)
    expect(modulo.review.flashcards.length).toBeGreaterThan(0)
    expect(modulo.references.length).toBeGreaterThan(0)
  })
})

describe('Módulo 1 — conteúdo de Aprender', () => {
  it('resumo autoral tem entre 1600 e 2200 palavras', () => {
    const words = wordCount(modulo.learn.summary.map((p) => p.text).join(' '))
    expect(words).toBeGreaterThanOrEqual(1600)
    expect(words).toBeLessThanOrEqual(2200)
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

  it('não trata discrepância de QI como critério universal de diagnóstico', () => {
    const summaryText = modulo.learn.summary.map((p) => p.text).join(' ').toLowerCase()
    expect(summaryText).toContain('discrepância')
    expect(summaryText).toContain('não sustenta')
  })

  it('estabelece explicitamente que comorbidades não excluem o diagnóstico de TDL', () => {
    const summaryText = modulo.learn.summary.map((p) => p.text).join(' ').toLowerCase()
    expect(summaryText).toContain('coocorrente')
  })

  it('contextualiza a terminologia histórica em relação ao termo atual (TDL)', () => {
    const summaryText = modulo.learn.summary.map((p) => p.text).join(' ')
    expect(summaryText).toContain('Transtorno do Desenvolvimento da Linguagem')
    expect(summaryText.toLowerCase()).toContain('distúrbio específico de linguagem')
  })
})

describe('Módulo 1 — conteúdo de Aplicar', () => {
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
})

describe('Módulo 1 — conteúdo de Revisar', () => {
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

describe('Módulo 1 — referências', () => {
  it('tem referências, todas com autores, título, fonte, ano e ao menos um uso indicado', () => {
    expect(modulo.references.length).toBeGreaterThan(0)
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

describe('Módulo 1 — validação Zod', () => {
  it('passa integralmente na validação do schema, já com status "published"', () => {
    const result = validateModule(modulo)
    if (!result.success) {
      console.error('Erros de validação do Módulo 1:', result.errors)
    }
    expect(result.success).toBe(true)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// Módulo 2 — Aspectos Linguísticos dos Transtornos de Linguagem
// ─────────────────────────────────────────────────────────────────────────────
const modulo2 = unit.modules.find((m) => m.slug === 'aspectos-linguisticos-transtornos-linguagem')!

describe('Módulo 2: carregamento', () => {
  it('carrega o módulo com id, slug e order estáveis', () => {
    expect(modulo2).toBeDefined()
    expect(modulo2.id).toBe('mod-transtornos-linguagem-aspectos-linguisticos')
    expect(modulo2.slug).toBe('aspectos-linguisticos-transtornos-linguagem')
    expect(modulo2.order).toBe(2)
  })

  it('está com status "published" após conclusão da auditoria clínica e bibliográfica final', () => {
    expect(modulo2.status).toBe('published')
  })
})

describe('Módulo 2 — ausência de placeholders', () => {
  it('nenhum parágrafo do resumo é o placeholder padrão', () => {
    modulo2.learn.summary.forEach((p) => expect(p.text).not.toBe(PLACEHOLDER))
  })

  it('mainIdea, simpleExplanation e finalSynthesis não são placeholders', () => {
    expect(modulo2.learn.mainIdea).not.toBe(PLACEHOLDER)
    expect(modulo2.learn.simpleExplanation).not.toBe(PLACEHOLDER)
    expect(modulo2.review.finalSynthesis).not.toBe(PLACEHOLDER)
  })

  it('não há atividades em arrays vazios (apply/review preenchidos)', () => {
    expect(modulo2.apply.questions.length).toBeGreaterThan(0)
    expect(modulo2.apply.associations.length).toBeGreaterThan(0)
    expect(modulo2.apply.decisionExercises.length).toBeGreaterThan(0)
    expect(modulo2.apply.fictionalCases.length).toBeGreaterThan(0)
    expect(modulo2.review.flashcards.length).toBeGreaterThan(0)
    expect(modulo2.references.length).toBeGreaterThan(0)
  })
})

describe('Módulo 2 — conteúdo de Aprender', () => {
  it('resumo autoral tem entre 1700 e 2300 palavras', () => {
    const words = wordCount(modulo2.learn.summary.map((p) => p.text).join(' '))
    expect(words).toBeGreaterThanOrEqual(1700)
    expect(words).toBeLessThanOrEqual(2300)
  })

  it('explicação em linguagem simples tem entre 320 e 450 palavras', () => {
    const words = wordCount(modulo2.learn.simpleExplanation)
    expect(words).toBeGreaterThanOrEqual(320)
    expect(words).toBeLessThanOrEqual(450)
  })

  it('tem entre 15 e 19 conceitos essenciais, todos com termo, definição e exemplo', () => {
    expect(modulo2.learn.essentialConcepts.length).toBeGreaterThanOrEqual(15)
    expect(modulo2.learn.essentialConcepts.length).toBeLessThanOrEqual(19)
    modulo2.learn.essentialConcepts.forEach((c) => {
      expect(c.term.length).toBeGreaterThan(0)
      expect(c.definition.length).toBeGreaterThan(0)
      expect(c.example && c.example.length).toBeGreaterThan(0)
    })
  })

  it('tem entre 8 e 10 evidências, todas com fonte e implicação clínica', () => {
    expect(modulo2.learn.evidence.length).toBeGreaterThanOrEqual(8)
    expect(modulo2.learn.evidence.length).toBeLessThanOrEqual(10)
    modulo2.learn.evidence.forEach((e) => {
      expect(e.source.length).toBeGreaterThan(0)
      expect(e.clinicalImplication.length).toBeGreaterThan(0)
      expect(['strong', 'moderate', 'emerging', 'expert_opinion']).toContain(e.evidenceLevel)
    })
  })

  it('tem entre 10 e 14 limitações/cuidados registrados', () => {
    expect(modulo2.learn.limitations.length).toBeGreaterThanOrEqual(10)
    expect(modulo2.learn.limitations.length).toBeLessThanOrEqual(14)
  })

  it('mapa conceitual é válido: nó central, entre 11 e 15 nós, e arestas conectando ids existentes', () => {
    const map = modulo2.learn.conceptMap
    expect(map.centralNode.length).toBeGreaterThan(0)
    expect(map.nodes.length).toBeGreaterThanOrEqual(11)
    expect(map.nodes.length).toBeLessThanOrEqual(15)
    const nodeIds = new Set(map.nodes.map((n) => n.id))
    map.edges.forEach((e) => {
      expect(nodeIds.has(e.from)).toBe(true)
      expect(nodeIds.has(e.to)).toBe(true)
    })
  })

  it('glossário tem entre 16 e 20 termos, todos com definição e exemplo', () => {
    expect(modulo2.learn.glossary.length).toBeGreaterThanOrEqual(16)
    expect(modulo2.learn.glossary.length).toBeLessThanOrEqual(20)
    modulo2.learn.glossary.forEach((g) => {
      expect(g.definition.length).toBeGreaterThan(0)
      expect(g.example.length).toBeGreaterThan(0)
    })
  })

  it('explicita a heterogeneidade dos perfis linguísticos, sem tratar um subsistema como retrato completo', () => {
    const summaryText = modulo2.learn.summary.map((p) => p.text).join(' ').toLowerCase()
    expect(summaryText).toContain('heterogene')
  })

  it('diferencia explicitamente desempenho em tarefa estruturada de funcionamento cotidiano', () => {
    const summaryText = modulo2.learn.summary.map((p) => p.text).join(' ').toLowerCase()
    expect(summaryText).toContain('funcionamento cotidiano')
  })

  it('não trata dificuldade pragmática isolada como suficiente para suspeita de TEA', () => {
    const summaryText = modulo2.learn.summary.map((p) => p.text).join(' ').toLowerCase()
    expect(summaryText).toContain('tea')
  })
})

describe('Módulo 2 — conteúdo de Aplicar', () => {
  it('tem exatamente 12 questões objetivas, cada uma com 4 alternativas e uma única correta', () => {
    expect(modulo2.apply.questions).toHaveLength(12)
    modulo2.apply.questions.forEach((q) => {
      expect(q.alternatives).toHaveLength(4)
      const correct = q.alternatives.filter((a) => a.isCorrect)
      expect(correct).toHaveLength(1)
      expect(correct[0].id).toBe(q.correctAlternativeId)
    })
  })

  it('cada alternativa (correta e incorretas) tem comentário/feedback', () => {
    modulo2.apply.questions.forEach((q) => {
      q.alternatives.forEach((a) => expect(a.feedback.length).toBeGreaterThan(0))
    })
  })

  it('não há IDs de questão ou de alternativa duplicados dentro do módulo', () => {
    const questionIds = modulo2.apply.questions.map((q) => q.id)
    expect(new Set(questionIds).size).toBe(questionIds.length)
    const altIds = modulo2.apply.questions.flatMap((q) => q.alternatives.map((a) => a.id))
    expect(new Set(altIds).size).toBe(altIds.length)
  })

  it('tem 2 atividades de associação, cada uma com 6 a 8 pares sem duplicidade', () => {
    expect(modulo2.apply.associations).toHaveLength(2)
    modulo2.apply.associations.forEach((assoc) => {
      expect(assoc.pairs.length).toBeGreaterThanOrEqual(6)
      expect(assoc.pairs.length).toBeLessThanOrEqual(8)
      const ids = assoc.pairs.map((p) => p.id)
      expect(new Set(ids).size).toBe(ids.length)
    })
  })

  it('tem 2 exercícios de decisão, cada um com opções contendo consequência, explicação e exatamente uma conduta recomendada', () => {
    expect(modulo2.apply.decisionExercises).toHaveLength(2)
    modulo2.apply.decisionExercises.forEach((ex) => {
      expect(ex.options.length).toBeGreaterThanOrEqual(2)
      ex.options.forEach((o) => {
        expect(o.consequence.length).toBeGreaterThan(0)
        expect(o.explanation.length).toBeGreaterThan(0)
      })
      expect(ex.options.filter((o) => o.isRecommended)).toHaveLength(1)
    })
  })

  it('um exercício de decisão aborda interpretação de perfil linguístico, e outro aborda diferença entre teste estruturado e funcionamento cotidiano', () => {
    const situations = modulo2.apply.decisionExercises.map((ex) => ex.situation.toLowerCase())
    expect(situations.some((s) => s.includes('perfil'))).toBe(true)
    expect(situations.some((s) => s.includes('estruturada') || s.includes('espontân'))).toBe(true)
  })

  it('tem 1 caso fictício com disclaimer explícito e sem diagnóstico definitivo no enunciado', () => {
    expect(modulo2.apply.fictionalCases).toHaveLength(1)
    const case1 = modulo2.apply.fictionalCases[0]
    expect(case1.disclaimer.length).toBeGreaterThan(0)
    expect(case1.disclaimer.toLowerCase()).toContain('fictício')
    expect(case1.questions.length).toBeGreaterThan(0)
  })
})

describe('Módulo 2 — conteúdo de Revisar', () => {
  it('tem entre 24 e 30 flashcards, todos completos', () => {
    expect(modulo2.review.flashcards.length).toBeGreaterThanOrEqual(24)
    expect(modulo2.review.flashcards.length).toBeLessThanOrEqual(30)
    modulo2.review.flashcards.forEach((fc) => {
      expect(fc.front.length).toBeGreaterThan(0)
      expect(fc.back.length).toBeGreaterThan(0)
      expect(fc.tags.length).toBeGreaterThan(0)
    })
  })

  it('não há flashcards com IDs duplicados', () => {
    const ids = modulo2.review.flashcards.map((f) => f.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('síntese final tem entre 230 e 330 palavras', () => {
    const words = wordCount(modulo2.review.finalSynthesis)
    expect(words).toBeGreaterThanOrEqual(230)
    expect(words).toBeLessThanOrEqual(330)
  })
})

describe('Módulo 2 — referências', () => {
  it('tem referências, todas com autores, título, fonte, ano e ao menos um uso indicado', () => {
    expect(modulo2.references.length).toBeGreaterThan(0)
    modulo2.references.forEach((r) => {
      expect(r.authors.length).toBeGreaterThan(0)
      expect(r.title.length).toBeGreaterThan(0)
      expect(r.source.length).toBeGreaterThan(0)
      expect(r.year).toBeGreaterThanOrEqual(1900)
      expect(r.usedIn.length).toBeGreaterThan(0)
    })
  })

  it('não há referências com ID duplicado', () => {
    const ids = modulo2.references.map((r) => r.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('toda referenceId usada em questões corresponde a uma referência real do módulo', () => {
    const refIds = new Set(modulo2.references.map((r) => r.id))
    const allQuestions = [...modulo2.apply.questions, ...modulo2.apply.fictionalCases.flatMap((fc) => fc.questions)]
    allQuestions.forEach((q) => {
      if (q.referenceId) expect(refIds.has(q.referenceId)).toBe(true)
    })
  })
})

describe('Módulo 2 — validação Zod e preservação da unidade', () => {
  it('passa integralmente na validação do schema, com status "published"', () => {
    const result = validateModule(modulo2)
    if (!result.success) {
      console.error('Erros de validação do Módulo 2:', result.errors)
    }
    expect(result.success).toBe(true)
  })

  it('não há IDs de referência colidindo entre Módulo 1 e Módulo 2 de forma inadvertida (reuso proposital é permitido, mas cada array deve ser internamente consistente)', () => {
    const refIds1 = modulo.references.map((r) => r.id)
    const refIds2 = modulo2.references.map((r) => r.id)
    expect(new Set(refIds1).size).toBe(refIds1.length)
    expect(new Set(refIds2).size).toBe(refIds2.length)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// Módulo 3 — Bases Neurobiológicas dos Transtornos de Linguagem
// ─────────────────────────────────────────────────────────────────────────────
const modulo3 = unit.modules.find((m) => m.slug === 'bases-neurobiologicas-transtornos-linguagem')!

describe('Módulo 3: carregamento', () => {
  it('carrega o módulo com id, slug e order estáveis', () => {
    expect(modulo3).toBeDefined()
    expect(modulo3.id).toBe('mod-transtornos-linguagem-bases-neurobiologicas')
    expect(modulo3.slug).toBe('bases-neurobiologicas-transtornos-linguagem')
    expect(modulo3.order).toBe(3)
  })

  it('está com status "published" após conclusão da auditoria clínica e bibliográfica final', () => {
    expect(modulo3.status).toBe('published')
  })
})

describe('Módulo 3 — ausência de placeholders', () => {
  it('nenhum parágrafo do resumo é o placeholder padrão', () => {
    modulo3.learn.summary.forEach((p) => expect(p.text).not.toBe(PLACEHOLDER))
  })

  it('mainIdea, simpleExplanation e finalSynthesis não são placeholders', () => {
    expect(modulo3.learn.mainIdea).not.toBe(PLACEHOLDER)
    expect(modulo3.learn.simpleExplanation).not.toBe(PLACEHOLDER)
    expect(modulo3.review.finalSynthesis).not.toBe(PLACEHOLDER)
  })

  it('não há atividades em arrays vazios (apply/review preenchidos)', () => {
    expect(modulo3.apply.questions.length).toBeGreaterThan(0)
    expect(modulo3.apply.associations.length).toBeGreaterThan(0)
    expect(modulo3.apply.decisionExercises.length).toBeGreaterThan(0)
    expect(modulo3.apply.fictionalCases.length).toBeGreaterThan(0)
    expect(modulo3.review.flashcards.length).toBeGreaterThan(0)
    expect(modulo3.references.length).toBeGreaterThan(0)
  })
})

describe('Módulo 3 — conteúdo de Aprender', () => {
  it('resumo autoral tem entre 1700 e 2300 palavras', () => {
    const words = wordCount(modulo3.learn.summary.map((p) => p.text).join(' '))
    expect(words).toBeGreaterThanOrEqual(1700)
    expect(words).toBeLessThanOrEqual(2300)
  })

  it('explicação em linguagem simples tem entre 320 e 450 palavras', () => {
    const words = wordCount(modulo3.learn.simpleExplanation)
    expect(words).toBeGreaterThanOrEqual(320)
    expect(words).toBeLessThanOrEqual(450)
  })

  it('tem entre 15 e 19 conceitos essenciais, todos com termo, definição e exemplo', () => {
    expect(modulo3.learn.essentialConcepts.length).toBeGreaterThanOrEqual(15)
    expect(modulo3.learn.essentialConcepts.length).toBeLessThanOrEqual(19)
    modulo3.learn.essentialConcepts.forEach((c) => {
      expect(c.term.length).toBeGreaterThan(0)
      expect(c.definition.length).toBeGreaterThan(0)
      expect(c.example && c.example.length).toBeGreaterThan(0)
    })
  })

  it('tem entre 8 e 10 evidências, todas com fonte e implicação clínica', () => {
    expect(modulo3.learn.evidence.length).toBeGreaterThanOrEqual(8)
    expect(modulo3.learn.evidence.length).toBeLessThanOrEqual(10)
    modulo3.learn.evidence.forEach((e) => {
      expect(e.source.length).toBeGreaterThan(0)
      expect(e.clinicalImplication.length).toBeGreaterThan(0)
      expect(['strong', 'moderate', 'emerging', 'expert_opinion']).toContain(e.evidenceLevel)
    })
  })

  it('tem entre 10 e 14 limitações/cuidados registrados', () => {
    expect(modulo3.learn.limitations.length).toBeGreaterThanOrEqual(10)
    expect(modulo3.learn.limitations.length).toBeLessThanOrEqual(14)
  })

  it('mapa conceitual é válido: nó central, entre 11 e 15 nós, e arestas conectando ids existentes', () => {
    const map = modulo3.learn.conceptMap
    expect(map.centralNode.length).toBeGreaterThan(0)
    expect(map.nodes.length).toBeGreaterThanOrEqual(11)
    expect(map.nodes.length).toBeLessThanOrEqual(15)
    const nodeIds = new Set(map.nodes.map((n) => n.id))
    map.edges.forEach((e) => {
      expect(nodeIds.has(e.from)).toBe(true)
      expect(nodeIds.has(e.to)).toBe(true)
    })
  })

  it('glossário tem entre 16 e 20 termos, todos com definição e exemplo', () => {
    expect(modulo3.learn.glossary.length).toBeGreaterThanOrEqual(16)
    expect(modulo3.learn.glossary.length).toBeLessThanOrEqual(20)
    modulo3.learn.glossary.forEach((g) => {
      expect(g.definition.length).toBeGreaterThan(0)
      expect(g.example.length).toBeGreaterThan(0)
    })
  })

  it('não trata nenhum achado genético ou de neuroimagem isolado como biomarcador diagnóstico do TDL', () => {
    const summaryText = modulo3.learn.summary.map((p) => p.text).join(' ').toLowerCase()
    expect(summaryText).toContain('biomarcador')
    expect(summaryText).toContain('não existe, até o momento, biomarcador')
  })

  it('explicita a heterogeneidade neurobiológica, sem tratar um achado como padrão único e obrigatório', () => {
    const summaryText = modulo3.learn.summary.map((p) => p.text).join(' ').toLowerCase()
    expect(summaryText).toContain('heterogene')
  })

  it('não generaliza automaticamente achados de estudos com falantes de inglês para o português', () => {
    const summaryText = modulo3.learn.summary.map((p) => p.text).join(' ').toLowerCase()
    expect(summaryText).toContain('falantes de inglês')
  })
})

describe('Módulo 3 — conteúdo de Aplicar', () => {
  it('tem exatamente 12 questões objetivas, cada uma com 4 alternativas e uma única correta', () => {
    expect(modulo3.apply.questions).toHaveLength(12)
    modulo3.apply.questions.forEach((q) => {
      expect(q.alternatives).toHaveLength(4)
      const correct = q.alternatives.filter((a) => a.isCorrect)
      expect(correct).toHaveLength(1)
      expect(correct[0].id).toBe(q.correctAlternativeId)
    })
  })

  it('cada alternativa (correta e incorretas) tem comentário/feedback', () => {
    modulo3.apply.questions.forEach((q) => {
      q.alternatives.forEach((a) => expect(a.feedback.length).toBeGreaterThan(0))
    })
  })

  it('não há IDs de questão ou de alternativa duplicados dentro do módulo', () => {
    const questionIds = modulo3.apply.questions.map((q) => q.id)
    expect(new Set(questionIds).size).toBe(questionIds.length)
    const altIds = modulo3.apply.questions.flatMap((q) => q.alternatives.map((a) => a.id))
    expect(new Set(altIds).size).toBe(altIds.length)
  })

  it('tem 2 atividades de associação, cada uma com 6 a 8 pares sem duplicidade', () => {
    expect(modulo3.apply.associations).toHaveLength(2)
    modulo3.apply.associations.forEach((assoc) => {
      expect(assoc.pairs.length).toBeGreaterThanOrEqual(6)
      expect(assoc.pairs.length).toBeLessThanOrEqual(8)
      const ids = assoc.pairs.map((p) => p.id)
      expect(new Set(ids).size).toBe(ids.length)
    })
  })

  it('tem 2 exercícios de decisão, cada um com opções contendo consequência, explicação e exatamente uma conduta recomendada', () => {
    expect(modulo3.apply.decisionExercises).toHaveLength(2)
    modulo3.apply.decisionExercises.forEach((ex) => {
      expect(ex.options.length).toBeGreaterThanOrEqual(2)
      ex.options.forEach((o) => {
        expect(o.consequence.length).toBeGreaterThan(0)
        expect(o.explanation.length).toBeGreaterThan(0)
      })
      expect(ex.options.filter((o) => o.isRecommended)).toHaveLength(1)
    })
  })

  it('um exercício de decisão aborda interpretação de neuroimagem, e outro aborda interpretação de risco genético/familiar', () => {
    const situations = modulo3.apply.decisionExercises.map((ex) => ex.situation.toLowerCase())
    expect(situations.some((s) => s.includes('ressonância') || s.includes('neuroimagem'))).toBe(true)
    expect(situations.some((s) => s.includes('genético') || s.includes('genética'))).toBe(true)
  })

  it('tem 1 caso fictício com disclaimer explícito e sem diagnóstico/prognóstico a partir de genética ou neuroimagem no enunciado', () => {
    expect(modulo3.apply.fictionalCases).toHaveLength(1)
    const case1 = modulo3.apply.fictionalCases[0]
    expect(case1.disclaimer.length).toBeGreaterThan(0)
    expect(case1.disclaimer.toLowerCase()).toContain('fictício')
    expect(case1.questions.length).toBeGreaterThan(0)
  })
})

describe('Módulo 3 — conteúdo de Revisar', () => {
  it('tem entre 24 e 30 flashcards, todos completos', () => {
    expect(modulo3.review.flashcards.length).toBeGreaterThanOrEqual(24)
    expect(modulo3.review.flashcards.length).toBeLessThanOrEqual(30)
    modulo3.review.flashcards.forEach((fc) => {
      expect(fc.front.length).toBeGreaterThan(0)
      expect(fc.back.length).toBeGreaterThan(0)
      expect(fc.tags.length).toBeGreaterThan(0)
    })
  })

  it('não há flashcards com IDs duplicados', () => {
    const ids = modulo3.review.flashcards.map((f) => f.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('síntese final tem entre 230 e 330 palavras', () => {
    const words = wordCount(modulo3.review.finalSynthesis)
    expect(words).toBeGreaterThanOrEqual(230)
    expect(words).toBeLessThanOrEqual(330)
  })
})

describe('Módulo 3 — referências', () => {
  it('tem referências, todas com autores, título, fonte, ano e ao menos um uso indicado', () => {
    expect(modulo3.references.length).toBeGreaterThan(0)
    modulo3.references.forEach((r) => {
      expect(r.authors.length).toBeGreaterThan(0)
      expect(r.title.length).toBeGreaterThan(0)
      expect(r.source.length).toBeGreaterThan(0)
      expect(r.year).toBeGreaterThanOrEqual(1900)
      expect(r.usedIn.length).toBeGreaterThan(0)
    })
  })

  it('não há referências com ID duplicado', () => {
    const ids = modulo3.references.map((r) => r.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('toda referenceId usada em questões corresponde a uma referência real do módulo', () => {
    const refIds = new Set(modulo3.references.map((r) => r.id))
    const allQuestions = [...modulo3.apply.questions, ...modulo3.apply.fictionalCases.flatMap((fc) => fc.questions)]
    allQuestions.forEach((q) => {
      if (q.referenceId) expect(refIds.has(q.referenceId)).toBe(true)
    })
  })

  it('referências sem acesso a texto integral estão explicitamente sinalizadas para revisão humana', () => {
    const naoConfirmadas = modulo3.references.filter((r) => r.source.includes('REFERÊNCIA NÃO CONFIRMADA'))
    naoConfirmadas.forEach((r) => {
      expect(r.source.toLowerCase()).toContain('revisão humana necessária')
    })
  })
})

describe('Módulo 3 — validação Zod e preservação da unidade', () => {
  it('passa integralmente na validação do schema, com status "published"', () => {
    const result = validateModule(modulo3)
    if (!result.success) {
      console.error('Erros de validação do Módulo 3:', result.errors)
    }
    expect(result.success).toBe(true)
  })

  it('não há IDs de referência colidindo entre os módulos de forma inadvertida', () => {
    const refIds3 = modulo3.references.map((r) => r.id)
    expect(new Set(refIds3).size).toBe(refIds3.length)
  })
})

describe('Módulo 3 — auditoria de segurança clínica e dependência de fontes', () => {
  it('nenhuma evidência classificada como "strong" depende de uma fonte de acesso parcial', () => {
    modulo3.learn.evidence.forEach((e) => {
      if (!e.source.includes('Acesso integral')) {
        expect(e.evidenceLevel).not.toBe('strong')
      }
    })
  })

  it('quando uma questão referencia uma fonte de acesso parcial, a alternativa correta não apresenta a conclusão dessa fonte como certeza definitiva', () => {
    const parciais = modulo3.references
      .filter((r) => r.source.includes('REFERÊNCIA NÃO CONFIRMADA'))
      .map((r) => r.id)
    const questionsUsingParciais = modulo3.apply.questions.filter((q) => q.referenceId && parciais.includes(q.referenceId))
    questionsUsingParciais.forEach((q) => {
      const correct = q.alternatives.find((a) => a.isCorrect)!
      expect(correct.text.toLowerCase()).not.toMatch(/comprovad[oa]|definitivamente confirmad[oa]|certamente/)
    })
  })

  it('não recomenda neuroimagem ou teste genético como critério diagnóstico de rotina para o TDL', () => {
    const summaryText = modulo3.learn.summary.map((p) => p.text).join(' ').toLowerCase()
    expect(summaryText).toContain('não existe, até o momento, biomarcador')
    expect(summaryText).not.toMatch(/deve(m)? realizar (uma )?(ressonância|neuroimagem|exame genético) para diagnosticar/)
  })

  it('trata achado incidental de neuroimagem com cautela, orientando avaliação médica apropriada', () => {
    const dec1 = modulo3.apply.decisionExercises.find((d) => d.situation.toLowerCase().includes('ressonância'))!
    const recommended = dec1.options.find((o) => o.isRecommended)!
    expect(recommended.text.toLowerCase()).toContain('médico')
  })

  it('esclarece que testes genéticos comerciais não substituem avaliação clínica nem determinam prognóstico individual', () => {
    const dec2 = modulo3.apply.decisionExercises.find((d) => d.situation.toLowerCase().includes('genético'))!
    const recommended = dec2.options.find((o) => o.isRecommended)!
    expect(recommended.text.toLowerCase()).toContain('genética clínica')
    expect(recommended.explanation.toLowerCase()).toContain('ausência de uma variante')
  })

  it('usa "condição diferenciadora" reconhecendo que o diagnóstico sindrômico não substitui o diagnóstico funcional nem determina a gravidade', () => {
    const q12 = modulo3.apply.questions.find((q) => q.id === 'q-tl3-12')!
    const correct = q12.alternatives.find((a) => a.isCorrect)!
    expect(correct.text.toLowerCase()).toContain('perfil linguístico')
    expect(correct.text.toLowerCase() + correct.feedback.toLowerCase()).toContain('não substitui')
  })

  it('o caso "Enzo" não conclui diagnóstico ou prognóstico a partir de histórico familiar, exame neurológico ou expectativa de teste genético', () => {
    const enzo = modulo3.apply.fictionalCases.find((c) => c.id === 'case-tl3-1')!
    const q3 = enzo.questions.find((q) => q.id === 'case-tl3-1-q3')!
    const correct = q3.alternatives.find((a) => a.isCorrect)!
    expect(correct.text.toLowerCase()).toContain('nenhum diagnóstico definitivo')
  })

  it('todas as alternativas incorretas das 12 questões principais têm feedback explicando por que o raciocínio é inadequado', () => {
    modulo3.apply.questions.forEach((q) => {
      q.alternatives.filter((a) => !a.isCorrect).forEach((a) => {
        expect(a.feedback.toLowerCase()).toContain('incorreto')
      })
    })
  })

  it('distingue explicitamente correlação de causalidade nas limitações registradas', () => {
    const limitationsText = modulo3.learn.limitations.map((l) => l.description).join(' ').toLowerCase()
    expect(limitationsText).toContain('correlação')
    expect(limitationsText).toContain('não comprova causalidade')
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// Módulo 4 — Avaliação e Intervenção nos Transtornos de Linguagem
// ─────────────────────────────────────────────────────────────────────────────
const modulo4 = unit.modules.find((m) => m.slug === 'avaliacao-intervencao-transtornos-linguagem')!

describe('Módulo 4 — conteúdo de Aprender', () => {
  it('resumo teórico clínico é detalhado e possui pelo menos 15 parágrafos', () => {
    expect(modulo4).toBeDefined()
    expect(modulo4.learn.summary.length).toBeGreaterThanOrEqual(15)
  })

  it('tem 4 conceitos essenciais detalhados, com termos, definições e exemplos', () => {
    expect(modulo4.learn.essentialConcepts).toHaveLength(4)
    modulo4.learn.essentialConcepts.forEach((c) => {
      expect(c.term.length).toBeGreaterThan(0)
      expect(c.definition.length).toBeGreaterThan(0)
      expect(c.example.length).toBeGreaterThan(0)
    })
  })

  it('tem 2 evidências e 2 limitações com fontes bibliográficas associadas', () => {
    expect(modulo4.learn.evidence).toHaveLength(2)
    expect(modulo4.learn.limitations).toHaveLength(2)
  })

  it('mapa conceitual possui o nó central de avaliação e intervenção e tem nós estruturais válidos', () => {
    expect(modulo4.learn.conceptMap.centralNode.toLowerCase()).toContain('avaliação e intervenção')
    expect(modulo4.learn.conceptMap.nodes.length).toBeGreaterThanOrEqual(8)
    expect(modulo4.learn.conceptMap.edges.length).toBeGreaterThanOrEqual(6)
  })
})

describe('Módulo 4 — conteúdo de Aplicar', () => {
  it('tem exatamente 12 questões objetivas de múltipla escolha com feedbacks completos', () => {
    expect(modulo4.apply.questions).toHaveLength(12)
    modulo4.apply.questions.forEach((q) => {
      expect(q.alternatives).toHaveLength(4)
      expect(q.alternatives.filter((a) => a.isCorrect)).toHaveLength(1)
      q.alternatives.forEach((a) => {
        expect(a.text.length).toBeGreaterThan(0)
        expect(a.feedback.length).toBeGreaterThan(0)
      })
    })
  })

  it('todas as alternativas incorretas têm feedback explicando por que o raciocínio é inadequado', () => {
    modulo4.apply.questions.forEach((q) => {
      q.alternatives.filter((a) => !a.isCorrect).forEach((a) => {
        expect(a.feedback.toLowerCase()).toContain('incorreto')
      })
    })
  })

  it('tem 2 atividades de associação com 6 pares cada', () => {
    expect(modulo4.apply.associations).toHaveLength(2)
    modulo4.apply.associations.forEach((assoc) => {
      expect(assoc.pairs).toHaveLength(6)
    })
  })

  it('tem 2 exercícios de decisão com consequências, explicações e exatamente uma conduta recomendada', () => {
    expect(modulo4.apply.decisionExercises).toHaveLength(2)
    modulo4.apply.decisionExercises.forEach((ex) => {
      expect(ex.options.length).toBeGreaterThanOrEqual(2)
      ex.options.forEach((o) => {
        expect(o.consequence.length).toBeGreaterThan(0)
        expect(o.explanation.length).toBeGreaterThan(0)
      })
      expect(ex.options.filter((o) => o.isRecommended)).toHaveLength(1)
    })
  })

  it('tem 1 caso fictício clínico com disclaimer e pelo menos 2 questões', () => {
    expect(modulo4.apply.fictionalCases).toHaveLength(1)
    const caso = modulo4.apply.fictionalCases[0]
    expect(caso.disclaimer.toLowerCase()).toContain('fictício')
    expect(caso.questions.length).toBeGreaterThanOrEqual(2)
    caso.questions.forEach((q) => {
      expect(q.alternatives).toHaveLength(4)
      expect(q.alternatives.filter((a) => a.isCorrect)).toHaveLength(1)
    })
  })
})

describe('Módulo 4 — conteúdo de Revisar e Referências', () => {
  it('tem 25 flashcards completos de memorização ativa', () => {
    expect(modulo4.review.flashcards).toHaveLength(25)
    modulo4.review.flashcards.forEach((fc) => {
      expect(fc.front.length).toBeGreaterThan(0)
      expect(fc.back.length).toBeGreaterThan(0)
      expect(fc.tags.length).toBeGreaterThan(0)
    })
  })

  it('síntese final do Módulo 4 tem entre 230 e 330 palavras', () => {
    const words = wordCount(modulo4.review.finalSynthesis)
    expect(words).toBeGreaterThanOrEqual(230)
    expect(words).toBeLessThanOrEqual(330)
  })

  it('tem referências bibliográficas estruturadas e sem ID duplicado', () => {
    expect(modulo4.references.length).toBeGreaterThan(0)
    const ids = modulo4.references.map((r) => r.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
