import { z } from 'zod'

// ─────────────────────────────────────────────────────────────────────────────
// SCHEMAS ZOD — Validação dos contratos de dados do módulo
// ─────────────────────────────────────────────────────────────────────────────

const AlternativeSchema = z.object({
  id: z.string().min(1, 'ID da alternativa é obrigatório'),
  text: z.string().min(1, 'Texto da alternativa é obrigatório'),
  isCorrect: z.boolean(),
  feedback: z.string().min(1, 'Feedback é obrigatório'),
})

const ObjectiveQuestionSchema = z
  .object({
    id: z.string().min(1),
    stem: z.string().min(1, 'Enunciado da questão é obrigatório'),
    alternatives: z.array(AlternativeSchema).min(2, 'Mínimo de 2 alternativas'),
    correctAlternativeId: z.string().min(1, 'ID da alternativa correta é obrigatório'),
    explanation: z.string().min(1, 'Explicação é obrigatória'),
    relatedConceptId: z.string().optional(),
    referenceId: z.string().optional(),
  })
  .superRefine((q, ctx) => {
    const correctCount = q.alternatives.filter((a) => a.isCorrect).length
    if (correctCount === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Questão "${q.id}": nenhuma alternativa marcada como correta`,
      })
    }
    if (correctCount > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Questão "${q.id}": mais de uma alternativa marcada como correta`,
      })
    }
    const found = q.alternatives.find((a) => a.id === q.correctAlternativeId)
    if (!found) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Questão "${q.id}": correctAlternativeId não corresponde a nenhuma alternativa`,
      })
    } else if (!found.isCorrect) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Questão "${q.id}": correctAlternativeId aponta para uma alternativa não marcada como correta`,
      })
    }
    const ids = q.alternatives.map((a) => a.id)
    if (new Set(ids).size !== ids.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Questão "${q.id}": IDs de alternativas duplicados`,
      })
    }
  })

const FlashcardSchema = z.object({
  id: z.string().min(1),
  front: z.string().min(1, 'Frente do flashcard é obrigatória'),
  back: z.string().min(1, 'Verso do flashcard é obrigatório'),
  tags: z.array(z.string()),
})

const DecisionOptionSchema = z.object({
  id: z.string().min(1),
  text: z.string().min(1),
  consequence: z.string().min(1, 'Consequência é obrigatória'),
  explanation: z.string().min(1, 'Explicação é obrigatória'),
  isRecommended: z.boolean(),
})

const DecisionExerciseSchema = z
  .object({
    id: z.string().min(1),
    situation: z.string().min(1),
    options: z.array(DecisionOptionSchema).min(2, 'Mínimo de 2 opções'),
  })
  .superRefine((exercise, ctx) => {
    const recommendedCount = exercise.options.filter((option) => option.isRecommended).length
    if (recommendedCount !== 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Exercício "${exercise.id}" deve possuir exatamente uma opção recomendada`,
      })
    }
  })

const GlossaryItemSchema = z.object({
  id: z.string().min(1),
  term: z.string().min(1),
  definition: z.string().min(1),
  example: z.string().min(1),
})

const ConceptNodeSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  type: z.enum(['central', 'primary', 'secondary', 'application']),
})

const ConceptEdgeSchema = z.object({
  id: z.string().min(1),
  from: z.string().min(1),
  to: z.string().min(1),
  label: z.string().min(1),
})

const ConceptMapSchema = z
  .object({
    centralNode: z.string().min(1),
    nodes: z.array(ConceptNodeSchema).min(1),
    edges: z.array(ConceptEdgeSchema),
  })
  .superRefine((map, ctx) => {
    const nodeIds = map.nodes.map((node) => node.id)
    const nodeIdSet = new Set(nodeIds)
    if (nodeIdSet.size !== nodeIds.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Mapa conceitual contém IDs de nós duplicados',
      })
    }
    if (map.nodes.filter((node) => node.type === 'central').length !== 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Mapa conceitual deve possuir exatamente um nó do tipo central',
      })
    }
    for (const edge of map.edges) {
      if (!nodeIdSet.has(edge.from) || !nodeIdSet.has(edge.to)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Aresta "${edge.id}" aponta para nó inexistente`,
        })
      }
    }
  })

const BranchingCaseSchema = z
  .object({
    id: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    startSceneId: z.string().min(1),
    scenes: z.array(
      z.object({
        id: z.string().min(1),
        title: z.string().min(1),
        text: z.string().min(1),
        choices: z.array(
          z.object({
            text: z.string().min(1),
            feedback: z.string().min(1),
            nextSceneId: z.string().nullable(),
            isRecommended: z.boolean().optional(),
          })
        ),
      })
    ).min(1),
  })
  .superRefine((branchingCase, ctx) => {
    const sceneIds = new Set(branchingCase.scenes.map((scene) => scene.id))
    if (!sceneIds.has(branchingCase.startSceneId)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Caso "${branchingCase.id}" aponta para uma cena inicial inexistente`,
      })
    }
    for (const scene of branchingCase.scenes) {
      for (const choice of scene.choices) {
        if (choice.nextSceneId !== null && !sceneIds.has(choice.nextSceneId)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Cena "${scene.id}" aponta para uma próxima cena inexistente`,
          })
        }
      }
    }
  })

const TranscriptActivitySchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  instruction: z.string().min(1),
  tokens: z.array(
    z.object({
      id: z.string().min(1),
      text: z.string().min(1),
      isInteractive: z.boolean(),
      correctAnswer: z.boolean(),
      errorType: z.string().optional(),
      feedback: z.string().optional(),
    })
  ).min(1),
  explanation: z.string().min(1),
})

const ReferenceSchema = z.object({
  id: z.string().min(1),
  authors: z.string().min(1),
  title: z.string().min(1),
  source: z.string().min(1),
  year: z.number().int().min(1900).max(new Date().getFullYear() + 1),
  doi: z.string().optional(),
  url: z.string().url().optional(),
  accessDate: z.string().optional(),
  usedIn: z.array(z.string()).min(1, 'Referência deve indicar onde é utilizada'),
})

const LearnContentSchema = z.object({
  summary: z.array(z.object({ id: z.string(), text: z.string().min(1) })).min(1),
  mainIdea: z.string().min(1, 'Ideia principal é obrigatória'),
  essentialConcepts: z.array(
    z.object({
      id: z.string().min(1),
      term: z.string().min(1),
      definition: z.string().min(1),
      example: z.string().optional(),
    })
  ),
  evidence: z.array(
    z.object({
      id: z.string().min(1),
      claim: z.string().min(1),
      source: z.string().min(1),
      evidenceLevel: z.enum(['strong', 'moderate', 'emerging', 'expert_opinion']),
      clinicalImplication: z.string().min(1),
    })
  ),
  limitations: z.array(z.object({ id: z.string().min(1), description: z.string().min(1) })),
  simpleExplanation: z.string().min(1),
  conceptMap: ConceptMapSchema,
  glossary: z.array(GlossaryItemSchema),
})

const ApplyContentSchema = z.object({
  questions: z.array(ObjectiveQuestionSchema),
  associations: z.array(
    z.object({
      id: z.string().min(1),
      instruction: z.string().min(1),
      pairs: z.array(z.object({ id: z.string(), left: z.string(), right: z.string() })),
    })
  ),
  decisionExercises: z.array(DecisionExerciseSchema),
  fictionalCases: z.array(
    z.object({
      id: z.string().min(1),
      title: z.string().min(1),
      description: z.string().min(1),
      disclaimer: z.string().min(1),
      questions: z.array(ObjectiveQuestionSchema),
    })
  ),
  branchingCases: z.array(BranchingCaseSchema).optional(),
  transcriptActivities: z.array(TranscriptActivitySchema).optional(),
})

const ReviewContentSchema = z.object({
  flashcards: z.array(FlashcardSchema),
  finalSynthesis: z.string().min(1),
})

export const LearningModuleSchema = z
  .object({
    id: z.string().min(1),
    slug: z.string().min(1).regex(/^[a-z0-9-]+$/, 'Slug deve ser lowercase com hífens'),
    title: z.string().min(1, 'Título é obrigatório'),
    description: z.string().min(1),
    order: z.number().int().min(1),
    learningObjective: z.string().min(1, 'Objetivo de aprendizagem é obrigatório'),
    prerequisiteKnowledge: z.array(z.string()).optional(),
    estimatedTimeMinutes: z.number().int().min(1),
    difficulty: z.enum(['introductory', 'intermediate', 'advanced']),
    status: z.enum(['draft', 'review', 'published']),
    learn: LearnContentSchema,
    apply: ApplyContentSchema,
    review: ReviewContentSchema,
    references: z.array(ReferenceSchema),
  })

export type ValidationResult =
  | { success: true }
  | { success: false; errors: string[] }

export function validateModule(data: unknown): ValidationResult {
  const result = LearningModuleSchema.safeParse(data)
  if (result.success) return { success: true }
  return {
    success: false,
    errors: result.error.issues.map((i) => `[${i.path.join('.')}] ${i.message}`),
  }
}

export function validateModules(modules: unknown[]): ValidationResult {
  const errors: string[] = []

  const slugs = new Set<string>()
  const ids = new Set<string>()
  const orders = new Set<number>()

  modules.forEach((mod, idx) => {
    const r = validateModule(mod)
    if (!r.success) {
      errors.push(...r.errors.map((e) => `Módulo[${idx}]: ${e}`))
    }
    // Unicidade
    const m = mod as { id?: string; slug?: string; order?: number }
    if (m.slug) {
      if (slugs.has(m.slug)) errors.push(`Slug duplicado: "${m.slug}"`)
      else slugs.add(m.slug)
    }
    if (m.id) {
      if (ids.has(m.id)) errors.push(`ID duplicado: "${m.id}"`)
      else ids.add(m.id)
    }
    if (m.order !== undefined) {
      if (orders.has(m.order)) errors.push(`Ordem duplicada: ${m.order}`)
      else orders.add(m.order)
    }
  })

  return errors.length === 0 ? { success: true } : { success: false, errors }
}
