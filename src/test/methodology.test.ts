import { describe, expect, it } from 'vitest'
import { platform } from '@/data/platform'
import { fonolabMethodology } from '@/data/methodology'
import {
  LearningMethodologySchema,
  validateMethodologicalConsistency,
} from '@/lib/validation/methodologySchema'

describe('Metodologia pedagógica do FonoLab', () => {
  it('possui um contrato metodológico válido', () => {
    expect(LearningMethodologySchema.safeParse(fonolabMethodology).success).toBe(true)
  })

  it('usa exatamente o ciclo Aprender–Aplicar–Revisar', () => {
    expect(fonolabMethodology.cycle.map((phase) => phase.id)).toEqual([
      'learn',
      'apply',
      'review',
    ])
  })

  it('registra as oito unidades curriculares em sequência contínua', () => {
    expect(fonolabMethodology.curriculumPlan.map((unit) => unit.order)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8,
    ])
  })

  it('distingue unidades publicadas das unidades ainda planejadas', () => {
    const publishedOrders = platform.areas.flatMap((area) =>
      area.units.map((unit) => unit.order)
    )
    const plannedPublishedOrders = fonolabMethodology.curriculumPlan
      .filter((unit) => unit.status === 'published')
      .map((unit) => unit.order)

    expect(plannedPublishedOrders).toEqual(publishedOrders)
    expect(
      fonolabMethodology.curriculumPlan.filter((unit) => unit.status === 'planned').length
    ).toBeGreaterThan(0)
  })

  it('mantém unidades, módulos, pré-requisitos e objetivos metodologicamente consistentes', () => {
    expect(validateMethodologicalConsistency(platform, fonolabMethodology)).toEqual([])
  })
})
