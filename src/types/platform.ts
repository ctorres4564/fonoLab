// ─────────────────────────────────────────────────────────────────────────────
// TIPOS DE PLATAFORMA — Hierarquia principal
// ─────────────────────────────────────────────────────────────────────────────

import type { LearningMethodology } from './methodology'
import type {
  CoreContentStatus,
  CoreDifficulty,
  CoreModuleMetadata,
  CoreReference,
} from '@/methodology/core'
import type { HealthLearningModule } from '@/methodology/health'

export type Difficulty = CoreDifficulty
export type ContentStatus = CoreContentStatus
export type ModuleStatus = 'not_started' | 'in_progress' | 'completed' | 'review_pending'

export interface LearningPlatform {
  id: string
  title: string
  description: string
  version: string
  methodology: LearningMethodology
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

export type LearningModuleMetadata = CoreModuleMetadata

// Aliases de compatibilidade: o produto FonoLab usa a extensão de saúde
// sobre o núcleo pedagógico genérico.
export type LearningModule = HealthLearningModule
export type Reference = CoreReference
