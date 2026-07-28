export type CoreDifficulty = 'introductory' | 'intermediate' | 'advanced'
export type CoreContentStatus = 'draft' | 'review' | 'published'

export interface CoreModuleMetadata {
  id: string
  slug: string
  title: string
  description: string
  order: number
  learningObjective: string
  prerequisiteKnowledge?: string[]
  estimatedTimeMinutes: number
  difficulty: CoreDifficulty
  status: CoreContentStatus
  totalActivities?: number
}

export interface CoreReference {
  id: string
  authors: string
  title: string
  source: string
  year: number
  doi?: string
  url?: string
  accessDate?: string
  usedIn: string[]
}

export interface CoreLearningModule<TLearn, TApply, TReview>
  extends CoreModuleMetadata {
  learn: TLearn
  apply: TApply
  review: TReview
  references: CoreReference[]
}

export interface CoreMethodologyExtension {
  id: string
  title: string
  requiredPrinciples: string[]
  publicationChecks: string[]
}

export function defineLearningModule<
  TLearn,
  TApply,
  TReview,
  TModule extends CoreLearningModule<TLearn, TApply, TReview>,
>(module: TModule): TModule {
  return module
}
