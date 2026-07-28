export type CurriculumUnitStatus = 'published' | 'in_development' | 'planned'
export type CurriculumStage = 'foundation' | 'development' | 'clinical_reasoning' | 'integration'

export interface MethodologicalCyclePhase {
  id: 'learn' | 'apply' | 'review'
  title: string
  purpose: string
  requiredEvidence: string[]
}

export interface MethodologyQualityCriterion {
  id: string
  title: string
  description: string
  verification: string
}

export interface CurriculumUnitPlan {
  order: number
  title: string
  stage: CurriculumStage
  status: CurriculumUnitStatus
  sourceChapters: string[]
  competency: string
}

export interface LearningMethodology {
  name: string
  version: string
  purpose: string
  principles: string[]
  cycle: MethodologicalCyclePhase[]
  progression: {
    stages: Array<{
      id: CurriculumStage
      title: string
      description: string
    }>
    advancementRule: string
  }
  assessment: {
    diagnostic: string
    formative: string
    integrative: string
    masteryCriterion: string
  }
  qualityCriteria: MethodologyQualityCriterion[]
  curriculumPlan: CurriculumUnitPlan[]
}
