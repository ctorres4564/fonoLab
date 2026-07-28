import { describe, expect, it } from 'vitest'
import { healthMethodologyExtension } from '@/methodology/health'
import { fonolabProductProfile } from '@/methodology/fonolab'
import { moduleLoaders } from '@/services/moduleLoaders'

describe('Arquitetura metodológica em camadas', () => {
  it('mantém o núcleo pedagógico independente do domínio Fonoaudiologia', async () => {
    const coreSource = await import('@/methodology/core')
    expect(coreSource.defineLearningModule).toBeTypeOf('function')
    expect(JSON.stringify(coreSource).toLowerCase()).not.toContain('fonoaudi')
  })

  it('aplica ao FonoLab a extensão metodológica de saúde', () => {
    expect(fonolabProductProfile.methodologyExtension).toBe(healthMethodologyExtension.id)
    expect(fonolabProductProfile.cycle).toEqual(['learn', 'apply', 'review'])
  })

  it('carrega todos os módulos pelo contrato especializado do produto', async () => {
    for (const loader of Object.values(moduleLoaders)) {
      const module = await loader()
      expect(module.learn).toBeDefined()
      expect(module.apply).toBeDefined()
      expect(module.review).toBeDefined()
      expect(module.references.length).toBeGreaterThan(0)
    }
  })
})
