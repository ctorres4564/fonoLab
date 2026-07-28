import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { platform } from '@/data/platform'
import { useProgressStore } from '@/features/progress/useProgressStore'
import { getNextActivityRecommendation } from '@/lib/progress/recommendations'
import { ProgressService } from '@/lib/progress/progressService'
import {
  BookOpen, Clock, BarChart2, ChevronRight,
  CheckCircle2, Circle, PlayCircle, RefreshCw, Lightbulb,
} from 'lucide-react'
import type { LearningModuleMetadata } from '@/types/platform'
import type { ModuleStatus } from '@/types/platform'
import { clsx } from 'clsx'

function getModuleStatus(unitId: string, module: LearningModuleMetadata): ModuleStatus {
  const prog = ProgressService.getModuleProgress(unitId, module.id)
  if (prog.status === 'completed') {
    const hasDue = prog.scheduledReviews.some((r) => new Date(r.dueDate) <= new Date())
    return hasDue ? 'review_pending' : 'completed'
  }
  return prog.status as ModuleStatus
}

const STATUS_CONFIG: Record<ModuleStatus, { label: string; color: string; Icon: React.ElementType }> = {
  not_started:    { label: 'Não iniciado',      color: 'badge-neutral',  Icon: Circle },
  in_progress:    { label: 'Em andamento',      color: 'badge-primary',  Icon: PlayCircle },
  completed:      { label: 'Concluído',         color: 'badge-success',  Icon: CheckCircle2 },
  review_pending: { label: 'Revisão pendente',  color: 'badge-warning',  Icon: RefreshCw },
}

const DIFFICULTY_LABEL: Record<string, string> = {
  introductory: 'Introdutório',
  intermediate: 'Intermediário',
  advanced: 'Avançado',
}

export function HomePage() {
  const navigate = useNavigate()
  const progresses = useProgressStore((s) => s.progresses)

  const area = platform.areas[0]
  const [activeUnitId, setActiveUnitId] = useState(area.units[0].id)
  const unit = area.units.find((u) => u.id === activeUnitId) || area.units[0]

  const allModules = area.units.flatMap((u) => u.modules)
  const allProgresses: Record<string, ReturnType<typeof ProgressService.getModuleProgress>> = {}
  
  area.units.forEach((u) => {
    u.modules.forEach((m) => {
      allProgresses[m.id] = ProgressService.getModuleProgress(u.id, m.id)
    })
  })

  const recommendation = getNextActivityRecommendation(allModules, allProgresses)

  const completedCount = unit.modules.filter(
    (m) => getModuleStatus(unit.id, m) === 'completed'
  ).length
  const unitProgress = Math.round((completedCount / unit.modules.length) * 100)

  void progresses // Força reatividade do store

  return (
    <div className="space-y-8">
      {/* ── Hero da Área ─────────────────────────────────────────────────── */}
      <section>
        <div className="flex items-start gap-3 mb-1">
          <span className="badge-primary">FonoLab</span>
          <span className="text-surface-400 text-sm">Área de Estudo</span>
        </div>
        <h1 className="text-3xl font-bold text-surface-900 mt-2">{area.title}</h1>
        <p className="text-surface-600 dark:text-surface-300 mt-2 max-w-3xl">{area.description}</p>
      </section>

      {/* ── Próxima atividade recomendada ─────────────────────────────── */}
      {recommendation && (
        <section>
          <p className="section-title flex items-center gap-1.5">
            <Lightbulb size={13} /> Próxima atividade recomendada
          </p>
          <div className="alert-info flex items-start justify-between gap-4 flex-wrap">
            <div>
              <p className="font-semibold text-sky-900">{recommendation.moduleTitle}</p>
              <p className="text-sky-700 text-sm mt-0.5">{recommendation.reasonLabel}</p>
            </div>
            <button
              className="btn-primary shrink-0"
              onClick={() => navigate(`/modules/${recommendation.moduleId}/${recommendation.mode}`)}
            >
              Ir agora <ChevronRight size={14} />
            </button>
          </div>
        </section>
      )}

      {/* ── Abas de Unidades ────────────────────────────────────────────── */}
      <section>
        <div className="tab-bar mb-6">
          {area.units.map((u) => (
            <button
              key={u.id}
              className={clsx(
                u.id === activeUnitId ? 'tab-item-active' : 'tab-item'
              )}
              onClick={() => setActiveUnitId(u.id)}
            >
              Unidade {u.order}: {u.title}
            </button>
          ))}
        </div>

        {/* Detalhes e Progresso da Unidade Ativa */}
        <div className="bg-surface-50/50 dark:bg-surface-900/30 p-5 rounded-xl border border-surface-200 dark:border-surface-800/80 mb-6">
          <h2 className="text-lg font-bold text-surface-900">{unit.title}</h2>
          <p className="text-sm text-surface-600 dark:text-surface-300 mt-1">{unit.description}</p>
          
          <div className="mt-4 flex items-center gap-3">
            <div className="progress-track flex-1 max-w-xs">
              <div className="progress-fill" style={{ width: `${unitProgress}%` }} />
            </div>
            <span className="text-xs font-semibold text-surface-600 dark:text-surface-300">
              {completedCount}/{unit.modules.length} módulos concluídos ({unitProgress}%)
            </span>
          </div>
        </div>
      </section>

      {/* ── Módulos ──────────────────────────────────────────────────────── */}
      <section>
        <p className="section-title">Módulos da Unidade</p>
        <div className="space-y-3">
          {unit.modules.map((mod) => {
            const status = getModuleStatus(unit.id, mod)
            const { label, color, Icon } = STATUS_CONFIG[status]
            const accuracy = ProgressService.getAccuracyRate(unit.id, mod.id)
            const prog = ProgressService.getModuleProgress(unit.id, mod.id)
            const totalActivities = mod.totalActivities
            const completedActivities = prog.completedActivityIds.length

            return (
              <div
                key={mod.id}
                className="card-hover group"
                onClick={() => navigate(`/modules/${mod.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigate(`/modules/${mod.slug}`)}
                aria-label={`Abrir módulo: ${mod.title}`}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-surface-400 text-xs font-medium">
                        Módulo {mod.order}
                      </span>
                      <span className={clsx(color)}><Icon size={11} /> {label}</span>
                    </div>
                    <h2 className="text-base font-semibold text-surface-900 group-hover:text-primary-700 transition-colors">
                      {mod.title}
                    </h2>
                    <p className="text-sm text-surface-500 mt-1 line-clamp-2">{mod.description}</p>

                    <div className="flex items-center gap-4 mt-3 text-xs text-surface-500 flex-wrap">
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {mod.estimatedTimeMinutes} min
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen size={12} /> {DIFFICULTY_LABEL[mod.difficulty]}
                      </span>
                      {accuracy > 0 && (
                        <span className="flex items-center gap-1">
                          <BarChart2 size={12} /> {accuracy}% acertos
                        </span>
                      )}
                      <span>
                        {completedActivities}/{totalActivities} atividades
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <button
                      className={clsx(
                        status === 'not_started' ? 'btn-primary' : 'btn-secondary'
                      )}
                      onClick={(e) => {
                        e.stopPropagation()
                        navigate(`/modules/${mod.slug}/learn`)
                      }}
                    >
                      {status === 'not_started' ? 'Iniciar' : 'Continuar'}
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
