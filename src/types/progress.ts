// ─────────────────────────────────────────────────────────────────────────────
// TIPOS DE PROGRESSO DO ESTUDANTE
// ─────────────────────────────────────────────────────────────────────────────

export type ActivityType = 'question' | 'flashcard' | 'association' | 'decision' | 'case'

export interface QuestionAnswer {
  questionId: string
  selectedAlternativeId: string
  isCorrect: boolean
  answeredAt: string // ISO
  attemptNumber: number
}

export interface FlashcardResult {
  flashcardId: string
  result: 'easy' | 'medium' | 'hard'
  reviewedAt: string // ISO
}

export interface ScheduledReview {
  moduleId: string
  reason: 'spaced_review' | 'incorrect_answer' | 'difficult_concept'
  dueDate: string // ISO
  intervalDays: number
  reviewNumber: number
}

export interface ModuleProgress {
  moduleId: string
  status: 'not_started' | 'in_progress' | 'completed'

  completedActivityIds: string[]
  answers: QuestionAnswer[]
  flashcardResults: FlashcardResult[]
  difficultConceptIds: string[]
  masteredConceptIds: string[]

  scheduledReviews: ScheduledReview[]

  startedAt?: string    // ISO
  lastAccessedAt?: string // ISO
  completedAt?: string  // ISO
  notes?: string
}

export interface UnitProgress {
  unitId: string
  moduleProgresses: Record<string, ModuleProgress>
}

export interface PlatformProgress {
  schemaVersion: number
  lastUpdated: string // ISO
  unitProgresses: Record<string, UnitProgress>
  /** Migrações locais já aplicadas a este registro (idempotência), ex.: "unitIdSwapV1". */
  appliedMigrations?: string[]
}

// ── Recomendação ──────────────────────────────────────────────────────────────

export type RecommendationReason =
  | 'overdue_review'
  | 'incorrect_answer'
  | 'module_in_progress'
  | 'next_module'
  | 'first_module'

export interface NextActivityRecommendation {
  moduleId: string
  moduleTitle: string
  mode: 'learn' | 'apply' | 'review'
  reason: RecommendationReason
  reasonLabel: string
}
