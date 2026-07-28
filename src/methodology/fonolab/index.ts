import type { HealthLearningModule } from '../health'
import { defineHealthLearningModule } from '../health'

export const fonolabProductProfile = {
  id: 'fonolab',
  title: 'FonoLab',
  domain: 'Fonoaudiologia',
  area: 'Linguagem',
  methodologyExtension: 'health',
  cycle: ['learn', 'apply', 'review'] as const,
}

export function defineFonoLabModule<TModule extends HealthLearningModule>(
  module: TModule
): TModule {
  return defineHealthLearningModule(module)
}
