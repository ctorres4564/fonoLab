import type { PlatformProgress, ModuleProgress, ScheduledReview } from '@/types/progress'
import { createFirstReview, createNextReview } from './spacedReview'

// ─────────────────────────────────────────────────────────────────────────────
// SERVIÇO DE PROGRESSO — Encapsula localStorage, sem acesso direto nos componentes
// ─────────────────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'fonolab_progress'
const CURRENT_SCHEMA_VERSION = 1

// ─────────────────────────────────────────────────────────────────────────────
// MIGRAÇÃO — Reorganização das unidades da Área Linguagem
// As unidades "Desenvolvimento fonológico e alterações de fala" e
// "Neurolinguística, Afasias e Comunicação Alternativa" trocaram de posição
// (e, portanto, de ID/order) para refletir a progressão pedagógica correta.
// Módulo IDs (mod-*) não mudaram — apenas o ID da unidade que os agrupa no
// localStorage. Sem essa migração, progresso salvo sob o ID antigo ficaria
// órfão (o app passaria a procurar por esses módulos sob o novo ID da unidade
// e o usuário perderia o progresso já registrado).
// ─────────────────────────────────────────────────────────────────────────────
const UNIT_ID_SWAP_V1: Record<string, string> = {
  'unit-linguagem-02': 'unit-linguagem-03', // era Neurolinguística/Afasias/CAA
  'unit-linguagem-03': 'unit-linguagem-02', // era Desenvolvimento fonológico
}

function migrateUnitIdSwap(progress: PlatformProgress): boolean {
  const oldKeys = Object.keys(UNIT_ID_SWAP_V1).filter((k) => progress.unitProgresses[k])
  if (oldKeys.length === 0) return false

  const captured = oldKeys.map((k) => ({ newId: UNIT_ID_SWAP_V1[k], unit: progress.unitProgresses[k] }))
  oldKeys.forEach((k) => delete progress.unitProgresses[k])
  captured.forEach(({ newId, unit }) => {
    progress.unitProgresses[newId] = { ...unit, unitId: newId }
  })
  return true
}

// ─────────────────────────────────────────────────────────────────────────────
// MIGRAÇÃO — Introdução da Unidade 3 "Desenvolvimento e Transtornos da
// Linguagem Oral" na sequência pedagógica oficial da Área Linguagem.
// A unidade de Neurolinguística/Afasias/CAA, que ocupava a posição 3
// (id "unit-linguagem-03"), passa a ocupar a posição 6 ("unit-linguagem-06"),
// pois pertence pedagogicamente à Unidade 6 — Linguagem no Adulto. O ID
// "unit-linguagem-03" fica livre para a nova unidade sobre transtornos do
// desenvolvimento da linguagem oral. Módulo IDs (mod-*) não mudaram — apenas
// o ID da unidade que agrupa os módulos de Afasias/CAA no localStorage. Sem
// esta migração, o progresso salvo sob "unit-linguagem-03" ficaria associado
// à unidade errada (a nova, e não a de Afasias/CAA) após esta atualização.
// ─────────────────────────────────────────────────────────────────────────────
const UNIT_ID_RENAME_V2: Record<string, string> = {
  'unit-linguagem-03': 'unit-linguagem-06', // era Neurolinguística/Afasias/CAA; "03" agora é a nova unidade de Transtornos da Linguagem Oral
}

function migrateUnitIdRename(progress: PlatformProgress): boolean {
  const oldKeys = Object.keys(UNIT_ID_RENAME_V2).filter((k) => progress.unitProgresses[k])
  if (oldKeys.length === 0) return false

  const captured = oldKeys.map((k) => ({ newId: UNIT_ID_RENAME_V2[k], unit: progress.unitProgresses[k] }))
  oldKeys.forEach((k) => delete progress.unitProgresses[k])
  captured.forEach(({ newId, unit }) => {
    progress.unitProgresses[newId] = { ...unit, unitId: newId }
  })
  return true
}

function createEmptyProgress(): PlatformProgress {
  return {
    schemaVersion: CURRENT_SCHEMA_VERSION,
    lastUpdated: new Date().toISOString(),
    unitProgresses: {},
  }
}

function createEmptyModuleProgress(moduleId: string): ModuleProgress {
  return {
    moduleId,
    status: 'not_started',
    completedActivityIds: [],
    answers: [],
    flashcardResults: [],
    difficultConceptIds: [],
    masteredConceptIds: [],
    scheduledReviews: [],
  }
}

function createFreshProgress(): PlatformProgress {
  // Progresso nunca salvo antes: não há dados legados para migrar.
  return { ...createEmptyProgress(), appliedMigrations: ['unitIdSwapV1', 'unitIdRenameV2'] }
}

function load(): PlatformProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return createFreshProgress()
    const parsed = JSON.parse(raw) as Partial<PlatformProgress>
    if (!parsed.schemaVersion || parsed.schemaVersion < CURRENT_SCHEMA_VERSION) {
      console.warn('[ProgressService] Schema desatualizado — reiniciando progresso.')
      return createFreshProgress()
    }
    const progress = { ...createEmptyProgress(), ...parsed }

    // Migração idempotente: troca de posição das unidades 02/03 da Área Linguagem.
    // Usa `parsed.appliedMigrations` (o que estava realmente salvo), não o valor
    // já mesclado com o template vazio, para não confundir "nunca migrado" com
    // "progresso novo".
    let changed = false
    const appliedMigrations = parsed.appliedMigrations ?? []
    if (!appliedMigrations.includes('unitIdSwapV1')) {
      migrateUnitIdSwap(progress)
      progress.appliedMigrations = [...appliedMigrations, 'unitIdSwapV1']
      changed = true
    } else {
      progress.appliedMigrations = appliedMigrations
    }

    // Migração idempotente: unidade de Afasias/CAA sai da posição 3 ("unit-
    // linguagem-03") e passa a ocupar a posição 6 ("unit-linguagem-06"), para
    // abrir espaço para a nova Unidade 3 (Desenvolvimento e Transtornos da
    // Linguagem Oral). Roda depois da migração acima para capturar também o
    // caso de progresso legado que só chegou a "03" por causa da troca V1.
    if (!appliedMigrations.includes('unitIdRenameV2')) {
      migrateUnitIdRename(progress)
      progress.appliedMigrations = [...(progress.appliedMigrations ?? appliedMigrations), 'unitIdRenameV2']
      changed = true
    }

    // Sanitização de duplicatas de revisões espaçadas
    if (progress.unitProgresses) {
      Object.keys(progress.unitProgresses).forEach((uId) => {
        const unit = progress.unitProgresses[uId]
        if (unit?.moduleProgresses) {
          Object.keys(unit.moduleProgresses).forEach((mId) => {
            const mod = unit.moduleProgresses[mId]
            if (mod?.scheduledReviews) {
              const spaced = mod.scheduledReviews.filter((r) => r.reason === 'spaced_review')
              if (spaced.length > 1) {
                // Mantém apenas a revisão de maior número
                const maxReview = spaced.reduce((max, r) => r.reviewNumber > max.reviewNumber ? r : max, spaced[0])
                mod.scheduledReviews = [
                  ...mod.scheduledReviews.filter((r) => r.reason !== 'spaced_review'),
                  maxReview
                ]
                changed = true
              }
            }
          })
        }
      })
    }
    if (changed) {
      save(progress)
    }

    return progress
  } catch {
    console.error('[ProgressService] Dados corrompidos — reiniciando progresso.')
    return createFreshProgress()
  }
}

function save(progress: PlatformProgress): void {
  try {
    progress.lastUpdated = new Date().toISOString()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch (err) {
    console.error('[ProgressService] Falha ao salvar progresso:', err)
  }
}

function getModuleProgress(unitId: string, moduleId: string): ModuleProgress {
  const progress = load()
  return (
    progress.unitProgresses[unitId]?.moduleProgresses[moduleId] ??
    createEmptyModuleProgress(moduleId)
  )
}

function setModuleProgress(unitId: string, updated: ModuleProgress): void {
  const progress = load()
  if (!progress.unitProgresses[unitId]) {
    progress.unitProgresses[unitId] = { unitId, moduleProgresses: {} }
  }
  progress.unitProgresses[unitId].moduleProgresses[updated.moduleId] = updated
  save(progress)
}

function markActivityCompleted(unitId: string, moduleId: string, activityId: string): void {
  const mod = getModuleProgress(unitId, moduleId)
  if (!mod.completedActivityIds.includes(activityId)) {
    mod.completedActivityIds.push(activityId)
  }
  if (mod.status === 'not_started') {
    mod.status = 'in_progress'
    mod.startedAt = new Date().toISOString()
  }
  mod.lastAccessedAt = new Date().toISOString()
  setModuleProgress(unitId, mod)
}

function recordAnswer(
  unitId: string,
  moduleId: string,
  questionId: string,
  selectedAlternativeId: string,
  isCorrect: boolean
): void {
  const mod = getModuleProgress(unitId, moduleId)
  const attempt = mod.answers.filter((a) => a.questionId === questionId).length + 1
  mod.answers.push({
    questionId,
    selectedAlternativeId,
    isCorrect,
    answeredAt: new Date().toISOString(),
    attemptNumber: attempt,
  })
  if (mod.status === 'not_started') {
    mod.status = 'in_progress'
    mod.startedAt = new Date().toISOString()
  }
  mod.lastAccessedAt = new Date().toISOString()
  setModuleProgress(unitId, mod)
}

function markModuleCompleted(unitId: string, moduleId: string): void {
  const mod = getModuleProgress(unitId, moduleId)
  mod.status = 'completed'
  mod.completedAt = new Date().toISOString()
  mod.lastAccessedAt = mod.completedAt
  setModuleProgress(unitId, mod)
}

function addScheduledReview(unitId: string, review: ScheduledReview): void {
  const mod = getModuleProgress(unitId, review.moduleId)
  mod.scheduledReviews.push(review)
  setModuleProgress(unitId, mod)
}

function getAccuracyRate(unitId: string, moduleId: string): number {
  const mod = getModuleProgress(unitId, moduleId)
  if (mod.answers.length === 0) return 0
  const lastAnswers = new Map<string, boolean>()
  mod.answers.forEach((a) => lastAnswers.set(a.questionId, a.isCorrect))
  const correct = [...lastAnswers.values()].filter(Boolean).length
  return Math.round((correct / lastAnswers.size) * 100)
}

function completeActiveReview(unitId: string, moduleId: string): void {
  const mod = getModuleProgress(unitId, moduleId)
  const spacedReviews = mod.scheduledReviews.filter((r) => r.reason === 'spaced_review')
  
  // Limpa todas as revisões espaçadas existentes para este módulo (remove duplicatas)
  mod.scheduledReviews = mod.scheduledReviews.filter((r) => r.reason !== 'spaced_review')

  if (spacedReviews.length > 0) {
    const active = spacedReviews.reduce((max, r) => r.reviewNumber > max.reviewNumber ? r : max, spacedReviews[0])
    const next = createNextReview(active)
    if (next) {
      mod.scheduledReviews.push(next)
    }
  } else {
    const first = createFirstReview(moduleId)
    mod.scheduledReviews.push(first)
  }
  setModuleProgress(unitId, mod)
}

function saveNotes(unitId: string, moduleId: string, notes: string): void {
  const mod = getModuleProgress(unitId, moduleId)
  mod.notes = notes
  mod.lastAccessedAt = new Date().toISOString()
  setModuleProgress(unitId, mod)
}

function resetAll(): void {
  localStorage.removeItem(STORAGE_KEY)
}

export const ProgressService = {
  load,
  getModuleProgress,
  setModuleProgress,
  markActivityCompleted,
  recordAnswer,
  markModuleCompleted,
  addScheduledReview,
  completeActiveReview,
  getAccuracyRate,
  saveNotes,
  resetAll,
}
