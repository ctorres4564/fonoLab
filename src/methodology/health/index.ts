import type { ApplyContent, LearnContent, ReviewContent } from '@/types/content'
import type { CoreLearningModule, CoreMethodologyExtension } from '../core'
import { defineLearningModule } from '../core'

export type HealthLearningModule = CoreLearningModule<
  LearnContent,
  ApplyContent,
  ReviewContent
>

export const healthMethodologyExtension: CoreMethodologyExtension = {
  id: 'health',
  title: 'Extensão para educação em saúde',
  requiredPrinciples: [
    'rastreabilidade de evidências e referências',
    'explicitação de limitações e incertezas',
    'casos simulados identificados como pedagógicos',
    'prevenção de diagnóstico ou prescrição individual',
    'respeito à diversidade clínica, linguística e sociocultural',
  ],
  publicationChecks: [
    'evidências indicam força e implicação clínica',
    'casos fictícios possuem aviso pedagógico',
    'decisões apresentam consequências e justificativas',
    'referências indicam onde foram utilizadas',
  ],
}

export function defineHealthLearningModule<TModule extends HealthLearningModule>(
  module: TModule
): TModule {
  return defineLearningModule(module)
}
