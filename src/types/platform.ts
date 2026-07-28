// ─────────────────────────────────────────────────────────────────────────────
// TIPOS DE PLATAFORMA — Hierarquia principal
// ─────────────────────────────────────────────────────────────────────────────

import type { LearnContent, ApplyContent, ReviewContent } from './content'

export type Difficulty = 'introductory' | 'intermediate' | 'advanced'
export type ContentStatus = 'draft' | 'review' | 'published'
export type ModuleStatus = 'not_started' | 'in_progress' | 'completed' | 'review_pending'

export interface LearningPlatform {
  id: string
  title: string
  description: string
  version: string
  areas: LearningArea[]
}

export interface LearningArea {
  id: string
  slug: string
  title: string
  description: string
  icon?: string
  units: LearningUnit[]
}

export interface LearningUnit {
  id: string
  slug: string
  title: string
  description: string
  objective: string
  order: number
  modules: (LearningModuleMetadata & { totalActivities: number })[]
}

export interface LearningModuleMetadata {
  id: string
  slug: string
  title: string
  description: string
  order: number

  learningObjective: string
  prerequisiteKnowledge?: string[]
  estimatedTimeMinutes: number
  difficulty: Difficulty
  status: ContentStatus
  totalActivities?: number
}

export interface LearningModule extends LearningModuleMetadata {
  learn: LearnContent
  apply: ApplyContent
  review: ReviewContent

  references: Reference[]
}

export interface Reference {
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
