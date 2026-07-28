import type { ScheduledReview } from '@/types/progress'

// ─────────────────────────────────────────────────────────────────────────────
// REVISÃO ESPAÇADA — Intervalos simples: 1, 3, 7, 14, 30 dias
// ─────────────────────────────────────────────────────────────────────────────

export const REVIEW_INTERVALS_DAYS = [1, 3, 7, 14, 30] as const

export function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export function createFirstReview(moduleId: string): ScheduledReview {
  return {
    moduleId,
    reason: 'spaced_review',
    dueDate: addDays(new Date(), REVIEW_INTERVALS_DAYS[0]).toISOString(),
    intervalDays: REVIEW_INTERVALS_DAYS[0],
    reviewNumber: 1,
  }
}

export function createNextReview(previous: ScheduledReview): ScheduledReview | null {
  const nextNumber = previous.reviewNumber + 1
  const nextInterval = REVIEW_INTERVALS_DAYS[nextNumber - 1]
  if (!nextInterval) return null // Revisões concluídas

  return {
    moduleId: previous.moduleId,
    reason: 'spaced_review',
    dueDate: addDays(new Date(), nextInterval).toISOString(),
    intervalDays: nextInterval,
    reviewNumber: nextNumber,
  }
}

export function createIncorrectAnswerReview(moduleId: string): ScheduledReview {
  return {
    moduleId,
    reason: 'incorrect_answer',
    dueDate: addDays(new Date(), 1).toISOString(),
    intervalDays: 1,
    reviewNumber: 1,
  }
}

export function isDue(review: ScheduledReview): boolean {
  return new Date(review.dueDate) <= new Date()
}

export function isOverdue(review: ScheduledReview): boolean {
  const due = new Date(review.dueDate)
  const now = new Date()
  return due < now
}

export function getDaysUntilDue(review: ScheduledReview): number {
  const diff = new Date(review.dueDate).getTime() - Date.now()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

export function formatDueDate(review: ScheduledReview): string {
  const days = getDaysUntilDue(review)
  if (days < 0) return `${Math.abs(days)} dia(s) atrasada`
  if (days === 0) return 'Hoje'
  if (days === 1) return 'Amanhã'
  return `Em ${days} dias`
}
