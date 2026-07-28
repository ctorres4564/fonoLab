import { useState } from 'react'
import type { LearningModule } from '@/types/platform'
import { useProgressStore } from '@/features/progress/useProgressStore'
import { ProgressService } from '@/lib/progress/progressService'
import { ChevronLeft, ChevronRight, RotateCcw, Calendar, CheckCircle2, Lock } from 'lucide-react'

interface Props {
  module: LearningModule
  unitId: string
}

// ── Flashcards ────────────────────────────────────────────────────────────────

function FlashcardDeck({ module, unitId }: Props) {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [done, setDone] = useState<Set<string>>(new Set())
  const { completeActivity, completeActiveReview } = useProgressStore()

  const cards = module.review.flashcards
  const card = cards[index]
  if (!card) return null

  const handleNext = () => {
    if (!done.has(card.id)) {
      const updated = new Set(done).add(card.id)
      setDone(updated)
      completeActivity(unitId, module.id, card.id)
      if (updated.size === cards.length) {
        completeActiveReview(unitId, module.id)
      }
    }
    setFlipped(false)
    setTimeout(() => setIndex((i) => Math.min(i + 1, cards.length - 1)), 150)
  }

  const handlePrev = () => {
    setFlipped(false)
    setTimeout(() => setIndex((i) => Math.max(i - 1, 0)), 150)
  }

  return (
    <div className="space-y-4">
      {/* Progresso */}
      <div className="flex items-center justify-between text-sm text-surface-500">
        <span>{index + 1} / {cards.length}</span>
        <span>{done.size} revisado(s)</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${((index + 1) / cards.length) * 100}%` }} />
      </div>

      {/* Cartão */}
      <div
        className="cursor-pointer min-h-40 card flex items-center justify-center text-center p-8 hover:border-primary-200 transition-colors"
        onClick={() => setFlipped(!flipped)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setFlipped(!flipped)}
        aria-label={flipped ? 'Verso do flashcard — clique para virar' : 'Frente do flashcard — clique para ver a resposta'}
      >
        <div>
          <p className="text-xs text-surface-400 mb-3 uppercase tracking-wide">
            {flipped ? 'Resposta' : 'Pergunta — clique para revelar'}
          </p>
          <p className={flipped ? 'text-surface-900 font-medium text-lg' : 'text-surface-700 text-base'}>
            {flipped ? card.back : card.front}
          </p>
          {card.tags.length > 0 && flipped && (
            <div className="flex gap-1 justify-center mt-4 flex-wrap">
              {card.tags.map((t) => <span key={t} className="badge-neutral">{t}</span>)}
            </div>
          )}
        </div>
      </div>

      {/* Controles */}
      <div className="flex items-center justify-between gap-3">
        <button className="btn-secondary" onClick={handlePrev} disabled={index === 0}>
          <ChevronLeft size={14} /> Anterior
        </button>
        <button className="btn-ghost" onClick={() => setFlipped(!flipped)}>
          <RotateCcw size={14} /> Virar
        </button>
        <button className="btn-primary" onClick={handleNext} disabled={index === cards.length - 1 && done.has(card.id)}>
          Próximo <ChevronRight size={14} />
        </button>
      </div>
    </div>
  )
}

// ── Revisões agendadas ────────────────────────────────────────────────────────

function ScheduledReviews({ module, unitId }: Props) {
  const prog = ProgressService.getModuleProgress(unitId, module.id)
  if (prog.scheduledReviews.length === 0) return null

  return (
    <div>
      <p className="section-title flex items-center gap-1.5">
        <Calendar size={13} /> Revisões Programadas
      </p>
      <div className="space-y-2">
        {prog.scheduledReviews.map((r, i) => {
          const due = new Date(r.dueDate)
          const isPast = due <= new Date()
          return (
            <div
              key={i}
              className={`flex items-center justify-between p-3 rounded-lg border text-sm ${
                isPast
                  ? 'bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/20 dark:border-amber-900/40 dark:text-amber-200'
                  : 'bg-surface-50 border-surface-200 text-surface-800 dark:bg-surface-900 dark:border-surface-800 dark:text-surface-200'
              }`}
            >
              <span className="font-medium">
                Revisão {r.reviewNumber} — {r.reason === 'spaced_review' ? 'Espaçada' : 'Resposta incorreta'}
              </span>
              <span className={isPast ? 'text-amber-700 dark:text-amber-400 font-semibold' : 'text-surface-600 dark:text-surface-400'}>
                {isPast ? '⚠️ Atrasada' : due.toLocaleDateString('pt-BR')}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── ReviewMode ────────────────────────────────────────────────────────────────

export function ReviewMode({ module, unitId }: Props) {
  const prog = ProgressService.getModuleProgress(unitId, module.id)
  const incorrectQuestions = prog.answers
    .filter((a) => !a.isCorrect)
    .map((a) => a.questionId)
  const uniqueIncorrect = [...new Set(incorrectQuestions)]

  const activeSpacedReview = prog.scheduledReviews.find((r) => r.reason === 'spaced_review')
  const totalCards = module.review.flashcards.length
  const initialCompleted = prog.completedActivityIds.filter(id => id.startsWith('fc-')).length >= totalCards

  const currentReviewNumber = activeSpacedReview
    ? activeSpacedReview.reviewNumber
    : (initialCompleted ? 6 : 0)

  const getProjectedDate = (daysToAdd: number) => {
    const d = new Date()
    d.setDate(d.getDate() + daysToAdd)
    return d.toLocaleDateString('pt-BR')
  }

  return (
    <div className="space-y-8">
      {/* Síntese final */}
      <section>
        <p className="section-title">📝 Síntese Final</p>
        <div className="card">
          <p className="text-surface-700 leading-relaxed">{module.review.finalSynthesis}</p>
        </div>
      </section>

      {/* Flashcards */}
      {module.review.flashcards.length > 0 && (
        <section>
          <p className="section-title">🃏 Flashcards</p>
          <FlashcardDeck module={module} unitId={unitId} />
        </section>
      )}

      {/* Revisões agendadas */}
      <ScheduledReviews module={module} unitId={unitId} />

      {/* Questões incorretas */}
      {uniqueIncorrect.length > 0 && (
        <section>
          <p className="section-title">❌ Questões Respondidas Incorretamente</p>
          <div className="space-y-2">
            {uniqueIncorrect.map((qId) => {
              const q =
                module.apply.questions.find((x) => x.id === qId) ??
                module.apply.fictionalCases.flatMap((c) => c.questions).find((x) => x.id === qId)
              if (!q) return null
              return (
                <div key={qId} className="card p-4 text-sm">
                  <p className="text-surface-800 font-medium">{q.stem}</p>
                  <p className="text-emerald-700 mt-2">
                    <CheckCircle2 size={12} className="inline mr-1" />
                    Resposta correta: {q.alternatives.find((a) => a.isCorrect)?.text}
                  </p>
                  <p className="text-surface-600 text-xs mt-1">{q.explanation}</p>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* Intervalo de revisão */}
      <section>
        <p className="section-title">📅 Linha do Tempo de Revisão Espaçada</p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {[1, 3, 7, 14, 30].map((days, index) => {
            const reviewNum = index + 1
            const isCompleted = reviewNum < currentReviewNumber
            const isActive = reviewNum === currentReviewNumber
            const isLocked = reviewNum > currentReviewNumber

            let cardClass = "card p-4 text-center border transition-all flex flex-col justify-between min-h-[140px] "
            let statusBadge = null
            let dateLabel = ""

            if (isCompleted) {
              cardClass += "bg-emerald-50/50 border-emerald-100 dark:bg-emerald-950/10 dark:border-emerald-900/30"
              statusBadge = (
                <span className="flex items-center justify-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-2">
                  <CheckCircle2 size={13} /> Concluída
                </span>
              )
              dateLabel = "Fixação realizada"
            } else if (isActive && activeSpacedReview) {
              const due = new Date(activeSpacedReview.dueDate)
              const isPast = due <= new Date()
              cardClass += isPast
                ? "bg-amber-50/50 border-amber-400 shadow-sm animate-pulse dark:bg-amber-950/10 dark:border-amber-900/50"
                : "bg-primary-50/30 border-primary-400 shadow-sm dark:bg-primary-950/10 dark:border-primary-900/50"
              statusBadge = (
                <span className={`flex items-center justify-center gap-1 text-xs font-semibold mt-2 ${
                  isPast ? 'text-amber-700 dark:text-amber-400' : 'text-primary-700 dark:text-primary-400'
                }`}>
                  <Calendar size={13} /> {isPast ? '⚠️ Vencida' : 'Disponível'}
                </span>
              )
              dateLabel = due.toLocaleDateString('pt-BR')
            } else {
              cardClass += "bg-surface-50 border-surface-200 opacity-60 dark:bg-surface-900/10 dark:border-surface-800/50"
              statusBadge = (
                <span className="flex items-center justify-center gap-1 text-xs text-surface-400 mt-2">
                  <Lock size={12} /> {currentReviewNumber === 0 ? 'Pendente' : 'Aguardando'}
                </span>
              )
              dateLabel = getProjectedDate(days)
            }

            return (
              <div key={days} className={cardClass}>
                <div>
                  <p className="text-xs text-surface-400 font-medium">Revisão {reviewNum}</p>
                  <p className={`text-2xl font-bold mt-1 ${isLocked ? 'text-surface-600' : isCompleted ? 'text-emerald-600' : 'text-primary-600'}`}>
                    {days} {days === 1 ? 'dia' : 'dias'}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-surface-100 dark:border-surface-800/40 text-center">
                  <p className="text-xs font-medium text-surface-600 dark:text-surface-300">
                    {isCompleted ? 'Status' : isLocked ? 'Previsão:' : 'Prazo:'}
                  </p>
                  <p className={`text-xs font-semibold mt-0.5 ${isActive && activeSpacedReview && (new Date(activeSpacedReview.dueDate) <= new Date()) ? 'text-amber-600 dark:text-amber-400' : 'text-surface-700 dark:text-surface-200'}`}>
                    {dateLabel}
                  </p>
                  {statusBadge}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
