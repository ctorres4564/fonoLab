import { useState, useEffect, useCallback } from 'react'
import type { LearningModule } from '@/types/platform'
import type { ObjectiveQuestion, BranchingCase } from '@/types/content'
import { useProgressStore } from '@/features/progress/useProgressStore'
import { CheckCircle2, XCircle, ChevronRight, Shuffle, HelpCircle, RefreshCw, BookOpen } from 'lucide-react'
import { clsx } from 'clsx'

interface Props {
  module: LearningModule
  unitId: string
}

// ── Quiz ──────────────────────────────────────────────────────────────────────

function QuizQuestion({
  question,
  unitId,
  moduleId,
  onAnswer,
}: {
  question: ObjectiveQuestion
  unitId: string
  moduleId: string
  onAnswer: (isCorrect: boolean) => void
}) {
  const [selected, setSelected] = useState<string | null>(null)
  const [showHint, setShowHint] = useState(false)
  const answered = selected !== null
  const { answerQuestion, completeActivity } = useProgressStore()

  const handleSelect = (altId: string) => {
    if (answered) return
    setSelected(altId)
    const isCorrect = altId === question.correctAlternativeId
    answerQuestion(unitId, moduleId, {
      questionId: question.id,
      selectedAlternativeId: altId,
      isCorrect,
    })
    completeActivity(unitId, moduleId, question.id)
    onAnswer(isCorrect)
  }

  return (
    <div className="card space-y-4">
      <div className="flex justify-between items-start gap-4">
        <p className="font-medium text-surface-900 dark:text-surface-100 leading-relaxed">{question.stem}</p>
        {question.hint && !answered && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="text-xs text-primary-600 dark:text-primary-400 hover:text-primary-700 font-medium flex items-center gap-1 shrink-0 bg-primary-50 dark:bg-primary-950/30 px-2.5 py-1 rounded-lg border border-primary-200/50 dark:border-primary-900/50 transition-colors"
          >
            <HelpCircle size={12} />
            {showHint ? 'Ocultar Dica' : 'Ver Dica'}
          </button>
        )}
      </div>

      {showHint && !answered && (
        <div className="alert-info text-xs animate-in fade-in slide-in-from-top-1">
          <strong>Pista pedagógica:</strong> {question.hint}
        </div>
      )}

      <div className="space-y-2">
        {question.alternatives.map((alt) => {
          const isSelected = selected === alt.id
          const isCorrect = alt.id === question.correctAlternativeId
          const showResult = answered && (isSelected || isCorrect)

          return (
            <button
              key={alt.id}
              disabled={answered}
              onClick={() => handleSelect(alt.id)}
              className={clsx(
                'w-full text-left px-4 py-3 rounded-lg border text-sm transition-all',
                !answered && 'hover:border-primary-300 hover:bg-primary-50 border-surface-200',
                answered && isCorrect && 'border-emerald-500 bg-emerald-50 text-emerald-800',
                answered && isSelected && !isCorrect && 'border-rose-300 bg-rose-50 text-rose-800',
                answered && !isSelected && !isCorrect && 'border-surface-200 opacity-50',
              )}
            >
              <div className="flex items-start gap-2">
                <div className="mt-0.5 shrink-0">
                  {answered && isCorrect && <CheckCircle2 size={16} className="text-emerald-600" />}
                  {answered && isSelected && !isCorrect && <XCircle size={16} className="text-rose-700" />}
                  {(!answered || (!isCorrect && !isSelected)) && (
                    <div className="w-4 h-4 rounded-full border-2 border-surface-300" />
                  )}
                </div>
                <span>{alt.text}</span>
              </div>
              {showResult && (
                <p className="mt-2 text-xs opacity-80 ml-6">{alt.feedback}</p>
              )}
            </button>
          )
        })}
      </div>
      {answered && (
        <div className="alert-info text-sm">
          <strong>Explicação:</strong> {question.explanation}
        </div>
      )}
    </div>
  )
}

// ── Associação ────────────────────────────────────────────────────────────────

function AssociationActivity({ activity, unitId, moduleId }: {
  activity: LearningModule['apply']['associations'][0]
  unitId: string; moduleId: string
}) {
  const [matches, setMatches] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const { completeActivity } = useProgressStore()

  const shuffledRight = [...activity.pairs].sort(() => Math.random() - 0.5)

  const handleMatch = (pairId: string, right: string) => {
    if (submitted) return
    setMatches((prev) => ({ ...prev, [pairId]: right }))
  }

  const handleSubmit = () => {
    setSubmitted(true)
    completeActivity(unitId, moduleId, activity.id)
  }

  const allMatched = Object.keys(matches).length === activity.pairs.length

  return (
    <div className="card space-y-4">
      <p className="font-medium text-surface-900">{activity.instruction}</p>
      <div className="grid grid-cols-1 gap-3">
        {activity.pairs.map((pair) => (
          <div key={pair.id} className="flex items-center gap-3 flex-wrap">
            <div className="flex-1 min-w-0 px-3 py-2 bg-primary-50 dark:bg-primary-950/40 text-primary-800 dark:text-primary-200 rounded-lg text-sm font-medium border border-primary-100 dark:border-primary-900/50">
              {pair.left}
            </div>
            <ChevronRight size={16} className="text-surface-400 shrink-0" />
            <select
              className="flex-1 min-w-0 border border-surface-200 dark:border-surface-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 disabled:opacity-60"
              value={matches[pair.id] ?? ''}
              disabled={submitted}
              onChange={(e) => handleMatch(pair.id, e.target.value)}
            >
              <option value="" className="text-surface-900 dark:text-surface-100 bg-white dark:bg-surface-800">Selecione...</option>
              {shuffledRight.map((p) => (
                <option key={p.id} value={p.right} className="text-surface-900 dark:text-surface-100 bg-white dark:bg-surface-800">{p.right}</option>
              ))}
            </select>
            {submitted && (
              <div className="shrink-0">
                {matches[pair.id] === pair.right
                  ? <CheckCircle2 size={18} className="text-emerald-600" />
                  : <XCircle size={18} className="text-rose-700" />
                }
              </div>
            )}
          </div>
        ))}
      </div>
      {!submitted && (
        <button className="btn-primary" disabled={!allMatched} onClick={handleSubmit}>
          Verificar
        </button>
      )}
      {submitted && (
        <div className="alert-success text-sm">
          Correspondências corretas: {activity.pairs.map((p) => (
            <div key={p.id}><strong>{p.left}</strong> → {p.right}</div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Exercício de decisão ──────────────────────────────────────────────────────

function DecisionExercise({ exercise, unitId, moduleId }: {
  exercise: LearningModule['apply']['decisionExercises'][0]
  unitId: string; moduleId: string
}) {
  const [chosen, setChosen] = useState<string | null>(null)
  const { completeActivity } = useProgressStore()

  const handleChoose = (optId: string) => {
    if (chosen) return
    setChosen(optId)
    completeActivity(unitId, moduleId, exercise.id)
  }

  const chosenOption = exercise.options.find((o) => o.id === chosen)

  return (
    <div className="card space-y-4">
      <div className="alert-warning">
        <p className="text-amber-900 font-medium text-sm">{exercise.situation}</p>
      </div>
      <div className="space-y-2">
        {exercise.options.map((opt) => (
          <button
            key={opt.id}
            disabled={!!chosen}
            onClick={() => handleChoose(opt.id)}
            className={clsx(
              'w-full text-left px-4 py-3 rounded-lg border text-sm transition-all',
              !chosen && 'hover:border-primary-300 hover:bg-primary-50 border-surface-200',
              chosen && opt.id === chosen && opt.isRecommended && 'border-emerald-500 bg-emerald-50',
              chosen && opt.id === chosen && !opt.isRecommended && 'border-rose-300 bg-rose-50',
              chosen && opt.id !== chosen && 'border-surface-200 opacity-40',
            )}
          >
            {opt.text}
          </button>
        ))}
      </div>
      {chosenOption && (
        <div className={clsx('rounded-lg p-4 text-sm space-y-2', chosenOption.isRecommended ? 'bg-emerald-50 border border-emerald-100 text-emerald-800' : 'bg-rose-50 border border-rose-100 text-rose-800')}>
          <p className="font-semibold">{chosenOption.isRecommended ? '✅ Boa escolha!' : '⚠️ Consequência:'} {chosenOption.consequence}</p>
          <p className="text-surface-700 dark:text-surface-300">{chosenOption.explanation}</p>
        </div>
      )}
    </div>
  )
}

// ── Caso clínico fictício ─────────────────────────────────────────────────────

function FictionalCase({ clinicalCase, unitId, moduleId }: {
  clinicalCase: LearningModule['apply']['fictionalCases'][0]
  unitId: string; moduleId: string
}) {
  const [answered, setAnswered] = useState(0)

  return (
    <div className="space-y-4">
      <div className="card">
        <div className="flex items-center gap-2 mb-2">
          <span className="badge-warning">Caso Clínico Fictício</span>
        </div>
        <h3 className="font-semibold text-surface-900 dark:text-surface-100">{clinicalCase.title}</h3>
        <div className="alert-warning mt-3 text-xs">{clinicalCase.disclaimer}</div>
        <p className="text-surface-700 dark:text-surface-300 text-sm mt-3 leading-relaxed">{clinicalCase.description}</p>
      </div>
      {clinicalCase.questions.map((q) => (
        <QuizQuestion
          key={q.id}
          question={q}
          unitId={unitId}
          moduleId={moduleId}
          onAnswer={() => setAnswered((n) => n + 1)}
        />
      ))}
      {answered > 0 && (
        <p className="text-xs text-surface-400 text-center">
          {answered}/{clinicalCase.questions.length} questão(ões) respondida(s)
        </p>
      )}
    </div>
  )
}

// ── Simulador Clínico Ramificado ─────────────────────────────────────────────────

function BranchingCaseSimulator({ branchingCase, unitId, moduleId }: {
  branchingCase: BranchingCase
  unitId: string; moduleId: string
}) {
  const [currentSceneId, setCurrentSceneId] = useState<string>(branchingCase.startSceneId)
  const [history, setHistory] = useState<string[]>([])
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState<number | null>(null)
  const [score, setScore] = useState<number>(0)
  const [choicesMadeCount, setChoicesMadeCount] = useState<number>(0)
  const [completed, setCompleted] = useState(false)
  const { completeActivity } = useProgressStore()

  const currentScene = branchingCase.scenes.find(s => s.id === currentSceneId)

  const handleChoiceSelect = (choiceIndex: number) => {
    setSelectedChoiceIndex(choiceIndex)
  }

  const handleNext = () => {
    if (selectedChoiceIndex === null || !currentScene) return
    
    const choice = currentScene.choices[selectedChoiceIndex]
    
    if (choice.isRecommended) {
      setScore(prev => prev + 1)
    }
    setChoicesMadeCount(prev => prev + 1)
    
    if (choice.nextSceneId) {
      setHistory(prev => [...prev, currentSceneId])
      setCurrentSceneId(choice.nextSceneId)
      setSelectedChoiceIndex(null)
    } else {
      setCompleted(true)
      completeActivity(unitId, moduleId, branchingCase.id)
    }
  }

  const handleRestart = () => {
    setCurrentSceneId(branchingCase.startSceneId)
    setHistory([])
    setSelectedChoiceIndex(null)
    setScore(0)
    setChoicesMadeCount(0)
    setCompleted(false)
  }

  if (!currentScene) return null

  return (
    <div className="card space-y-4 border-l-4 border-indigo-500">
      <div className="flex items-center justify-between border-b border-surface-150 dark:border-surface-800 pb-2">
        <h3 className="font-semibold text-surface-900 dark:text-surface-100 flex items-center gap-2">
          <BookOpen size={16} className="text-indigo-500 shrink-0" />
          {branchingCase.title}
        </h3>
        {!completed && (
          <span className="text-xs text-surface-500">
            Etapa {history.length + 1}
          </span>
        )}
      </div>

      {!completed ? (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="bg-surface-50 dark:bg-surface-800/40 p-4 rounded-xl border border-surface-200/50 dark:border-surface-800">
            <h4 className="font-semibold text-sm text-indigo-700 dark:text-indigo-300 mb-1">{currentScene.title}</h4>
            <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed whitespace-pre-line">{currentScene.text}</p>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-surface-400 dark:text-surface-500 uppercase tracking-wider">Qual conduta você escolhe?</p>
            {currentScene.choices.map((choice, index) => {
              const isSelected = selectedChoiceIndex === index
              return (
                <button
                  key={index}
                  onClick={() => handleChoiceSelect(index)}
                  className={clsx(
                    "w-full text-left px-4 py-3 rounded-lg border text-sm transition-all duration-150",
                    isSelected
                      ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-900 dark:text-indigo-200 ring-1 ring-indigo-500"
                      : "border-surface-200 dark:border-surface-800 hover:border-indigo-300 hover:bg-surface-50 dark:hover:bg-surface-800/30 text-surface-700 dark:text-surface-300"
                  )}
                >
                  {choice.text}
                </button>
              )
            })}
          </div>

          {selectedChoiceIndex !== null && (
            <div className="alert-info text-xs animate-in fade-in slide-in-from-top-1">
              <strong>Consequência imediata:</strong> {currentScene.choices[selectedChoiceIndex].feedback}
            </div>
          )}

          <div className="flex justify-end gap-2 pt-2">
            <button
              onClick={handleNext}
              disabled={selectedChoiceIndex === null}
              className="btn-primary"
            >
              Avançar
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-6 space-y-4 animate-in zoom-in-95">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/40 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 size={32} />
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-lg text-surface-900 dark:text-surface-100">Simulação Concluída!</h4>
            <p className="text-sm text-surface-600 dark:text-surface-400 max-w-md mx-auto">
              Você tomou <strong>{score}</strong> decisões recomendadas de um total de <strong>{choicesMadeCount}</strong> etapas.
            </p>
          </div>
          <button
            onClick={handleRestart}
            className="btn-secondary mx-auto flex items-center gap-2"
          >
            <RefreshCw size={14} />
            Refazer Simulação
          </button>
        </div>
      )}
    </div>
  )
}

export function ApplyMode({ module, unitId }: Props) {
  const [activeQuestions, setActiveQuestions] = useState<ObjectiveQuestion[]>([])
  const [quizKey, setQuizKey] = useState(0)
  const [quizAnswered, setQuizAnswered] = useState(0)

  const drawQuestions = useCallback(() => {
    if (!module.apply.questions || module.apply.questions.length === 0) return
    const shuffled = [...module.apply.questions].sort(() => Math.random() - 0.5)
    // Draw 3 questions, or all if we have less than 3
    setActiveQuestions(shuffled.slice(0, Math.min(3, shuffled.length)))
    setQuizAnswered(0)
    setQuizKey((prev) => prev + 1)
  }, [module.apply.questions])

  useEffect(() => {
    drawQuestions()
  }, [drawQuestions])

  return (
    <div className="space-y-8">
      {/* Questões objetivas */}
      {activeQuestions.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <p className="section-title flex items-center gap-1.5 mb-0 uppercase tracking-wider text-xs font-semibold text-surface-400 dark:text-surface-500">
              <Shuffle size={13} /> Questões Objetivas (Lote de {activeQuestions.length})
            </p>
            {module.apply.questions.length > 3 && (
              <button
                onClick={drawQuestions}
                className="text-xs text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center gap-1 bg-primary-50 dark:bg-primary-950/30 px-2 py-1 rounded border border-primary-200/50 dark:border-primary-900/50 transition-colors"
              >
                <RefreshCw size={12} />
                Novas Questões
              </button>
            )}
          </div>
          <div className="space-y-4">
            {activeQuestions.map((q) => (
              <QuizQuestion
                key={q.id + '-' + quizKey}
                question={q}
                unitId={unitId}
                moduleId={module.id}
                onAnswer={() => setQuizAnswered((n) => n + 1)}
              />
            ))}
          </div>
          {quizAnswered > 0 && (
            <p className="text-xs text-surface-400 mt-2 text-center">
              {quizAnswered}/{activeQuestions.length} respondida(s)
            </p>
          )}
        </section>
      )}

      {/* Associação de conceitos */}
      {module.apply.associations.length > 0 && (
        <section>
          <p className="section-title">🔗 Associação de Conceitos</p>
          <div className="space-y-4">
            {module.apply.associations.map((a) => (
              <AssociationActivity key={a.id} activity={a} unitId={unitId} moduleId={module.id} />
            ))}
          </div>
        </section>
      )}

      {/* Simulador Clínico Ramificado */}
      {module.apply.branchingCases && module.apply.branchingCases.length > 0 && (
        <section>
          <p className="section-title">🎮 Simulações e Decisões Clínicas</p>
          <div className="space-y-6">
            {module.apply.branchingCases.map((bc) => (
              <BranchingCaseSimulator
                key={bc.id}
                branchingCase={bc}
                unitId={unitId}
                moduleId={module.id}
              />
            ))}
          </div>
        </section>
      )}

      {/* Exercícios de decisão */}
      {module.apply.decisionExercises.length > 0 && (
        <section>
          <p className="section-title">🎯 Exercícios de Decisão Clínica</p>
          <div className="space-y-4">
            {module.apply.decisionExercises.map((d) => (
              <DecisionExercise key={d.id} exercise={d} unitId={unitId} moduleId={module.id} />
            ))}
          </div>
        </section>
      )}

      {/* Casos clínicos fictícios */}
      {module.apply.fictionalCases.length > 0 && (
        <section>
          <p className="section-title">🏥 Casos Clínicos (fictícios)</p>
          <div className="space-y-4">
            {module.apply.fictionalCases.map((c) => (
              <FictionalCase key={c.id} clinicalCase={c} unitId={unitId} moduleId={module.id} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
