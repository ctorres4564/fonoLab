import { create } from 'zustand'
import { ProgressService } from '@/lib/progress/progressService'
import type { ModuleProgress, QuestionAnswer, ScheduledReview } from '@/types/progress'

// ─────────────────────────────────────────────────────────────────────────────
// ZUSTAND STORE — Estado reativo de progresso (wrap sobre ProgressService)
// ─────────────────────────────────────────────────────────────────────────────

interface ProgressStore {
  // Estado
  progresses: Record<string, ModuleProgress> // key: `${unitId}::${moduleId}`

  // Ações
  loadProgress: (unitId: string, moduleId: string) => void
  completeActivity: (unitId: string, moduleId: string, activityId: string) => void
  answerQuestion: (
    unitId: string,
    moduleId: string,
    answer: Omit<QuestionAnswer, 'answeredAt' | 'attemptNumber'>
  ) => void
  completeModule: (unitId: string, moduleId: string) => void
  scheduleReview: (unitId: string, review: ScheduledReview) => void
  completeActiveReview: (unitId: string, moduleId: string) => void
  getModuleProgress: (unitId: string, moduleId: string) => ModuleProgress | undefined
  getAccuracy: (unitId: string, moduleId: string) => number
  saveNotes: (unitId: string, moduleId: string, notes: string) => void
}

export const useProgressStore = create<ProgressStore>((set, get) => ({
  progresses: {},

  loadProgress: (unitId, moduleId) => {
    const key = `${unitId}::${moduleId}`
    const prog = ProgressService.getModuleProgress(unitId, moduleId)
    set((state) => ({ progresses: { ...state.progresses, [key]: prog } }))
  },

  completeActivity: (unitId, moduleId, activityId) => {
    ProgressService.markActivityCompleted(unitId, moduleId, activityId)
    const key = `${unitId}::${moduleId}`
    const prog = ProgressService.getModuleProgress(unitId, moduleId)
    set((state) => ({ progresses: { ...state.progresses, [key]: prog } }))
  },

  answerQuestion: (unitId, moduleId, { questionId, selectedAlternativeId, isCorrect }) => {
    ProgressService.recordAnswer(unitId, moduleId, questionId, selectedAlternativeId, isCorrect)
    const key = `${unitId}::${moduleId}`
    const prog = ProgressService.getModuleProgress(unitId, moduleId)
    set((state) => ({ progresses: { ...state.progresses, [key]: prog } }))
  },

  completeModule: (unitId, moduleId) => {
    ProgressService.markModuleCompleted(unitId, moduleId)
    const key = `${unitId}::${moduleId}`
    const prog = ProgressService.getModuleProgress(unitId, moduleId)
    set((state) => ({ progresses: { ...state.progresses, [key]: prog } }))
  },

  scheduleReview: (unitId, review) => {
    ProgressService.addScheduledReview(unitId, review)
    const key = `${unitId}::${review.moduleId}`
    const prog = ProgressService.getModuleProgress(unitId, review.moduleId)
    set((state) => ({ progresses: { ...state.progresses, [key]: prog } }))
  },

  completeActiveReview: (unitId, moduleId) => {
    ProgressService.completeActiveReview(unitId, moduleId)
    const key = `${unitId}::${moduleId}`
    const prog = ProgressService.getModuleProgress(unitId, moduleId)
    set((state) => ({ progresses: { ...state.progresses, [key]: prog } }))
  },

  getModuleProgress: (unitId, moduleId) => {
    const key = `${unitId}::${moduleId}`
    return get().progresses[key]
  },

  getAccuracy: (unitId, moduleId) => {
    return ProgressService.getAccuracyRate(unitId, moduleId)
  },

  saveNotes: (unitId, moduleId, notes) => {
    ProgressService.saveNotes(unitId, moduleId, notes)
    const key = `${unitId}::${moduleId}`
    const prog = ProgressService.getModuleProgress(unitId, moduleId)
    set((state) => ({ progresses: { ...state.progresses, [key]: prog } }))
  },
}))
