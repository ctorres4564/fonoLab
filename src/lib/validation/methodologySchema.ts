import { z } from 'zod'
import type { LearningPlatform } from '@/types/platform'
import type { LearningMethodology } from '@/types/methodology'

const CurriculumPlanSchema = z
  .array(
    z.object({
      order: z.number().int().positive(),
      title: z.string().min(1),
      stage: z.enum(['foundation', 'development', 'clinical_reasoning', 'integration']),
      status: z.enum(['published', 'in_development', 'planned']),
      sourceChapters: z.array(z.string().min(1)).min(1),
      competency: z.string().min(1),
    })
  )
  .min(1)

export const LearningMethodologySchema = z.object({
  name: z.string().min(1),
  version: z.string().regex(/^\d+\.\d+\.\d+$/),
  purpose: z.string().min(1),
  principles: z.array(z.string().min(1)).min(4),
  cycle: z
    .array(
      z.object({
        id: z.enum(['learn', 'apply', 'review']),
        title: z.string().min(1),
        purpose: z.string().min(1),
        requiredEvidence: z.array(z.string().min(1)).min(1),
      })
    )
    .length(3),
  progression: z.object({
    stages: z
      .array(
        z.object({
          id: z.enum(['foundation', 'development', 'clinical_reasoning', 'integration']),
          title: z.string().min(1),
          description: z.string().min(1),
        })
      )
      .length(4),
    advancementRule: z.string().min(1),
  }),
  assessment: z.object({
    diagnostic: z.string().min(1),
    formative: z.string().min(1),
    integrative: z.string().min(1),
    masteryCriterion: z.string().min(1),
  }),
  qualityCriteria: z.array(
    z.object({
      id: z.string().min(1),
      title: z.string().min(1),
      description: z.string().min(1),
      verification: z.string().min(1),
    })
  ).min(4),
  curriculumPlan: CurriculumPlanSchema,
})

export function validateMethodologicalConsistency(
  platform: LearningPlatform,
  methodology: LearningMethodology
): string[] {
  const errors: string[] = []
  const schemaResult = LearningMethodologySchema.safeParse(methodology)

  if (!schemaResult.success) {
    return schemaResult.error.issues.map((issue) => `[${issue.path.join('.')}] ${issue.message}`)
  }

  const cycleIds = methodology.cycle.map((phase) => phase.id)
  if (new Set(cycleIds).size !== cycleIds.length) {
    errors.push('O ciclo metodológico contém fases duplicadas.')
  }

  const planOrders = methodology.curriculumPlan.map((unit) => unit.order)
  const expectedOrders = Array.from({ length: planOrders.length }, (_, index) => index + 1)
  if (planOrders.some((order, index) => order !== expectedOrders[index])) {
    errors.push('O plano curricular deve usar uma sequência contínua iniciada em 1.')
  }

  const planByOrder = new Map(methodology.curriculumPlan.map((unit) => [unit.order, unit]))
  for (const area of platform.areas) {
    const unitOrders = area.units.map((unit) => unit.order)
    if (new Set(unitOrders).size !== unitOrders.length) {
      errors.push(`A área "${area.slug}" contém ordens de unidade duplicadas.`)
    }

    for (const unit of area.units) {
      const plannedUnit = planByOrder.get(unit.order)
      if (!plannedUnit) {
        errors.push(`A unidade publicada "${unit.slug}" não está registrada no plano curricular.`)
      } else if (plannedUnit.status !== 'published') {
        errors.push(`A unidade "${unit.slug}" existe na plataforma, mas não está marcada como publicada.`)
      }

      const moduleOrders = unit.modules.map((module) => module.order)
      const expectedModuleOrders = Array.from(
        { length: moduleOrders.length },
        (_, index) => index + 1
      )
      if (moduleOrders.some((order, index) => order !== expectedModuleOrders[index])) {
        errors.push(`A unidade "${unit.slug}" deve numerar seus módulos continuamente a partir de 1.`)
      }

      for (const module of unit.modules) {
        if (module.difficulty !== 'introductory' && !module.prerequisiteKnowledge?.length) {
          errors.push(`O módulo "${module.slug}" deve declarar conhecimentos prévios.`)
        }
        if (module.learningObjective.trim().split(/\s+/).length < 8) {
          errors.push(`O objetivo do módulo "${module.slug}" é insuficientemente específico.`)
        }
      }
    }
  }

  const publishedOrders = new Set(
    platform.areas.flatMap((area) => area.units.map((unit) => unit.order))
  )
  for (const unit of methodology.curriculumPlan) {
    if (unit.status === 'published' && !publishedOrders.has(unit.order)) {
      errors.push(`A unidade ${unit.order} está marcada como publicada, mas não existe na plataforma.`)
    }
  }

  return errors
}
