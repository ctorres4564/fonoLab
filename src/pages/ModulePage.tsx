import { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate, Link } from 'react-router-dom'
import { platform } from '@/data/platform'
import { LearnMode } from '@/components/learning/LearnMode'
import { ApplyMode } from '@/components/applying/ApplyMode'
import { ReviewMode } from '@/components/reviewing/ReviewMode'
import { Clock, BookOpen, ChevronRight } from 'lucide-react'
import { clsx } from 'clsx'
import { contentService } from '@/services/contentService'
import type { LearningModule } from '@/types/platform'

type Mode = 'learn' | 'apply' | 'review'

const TABS: { id: Mode; label: string }[] = [
  { id: 'learn',  label: 'Aprender' },
  { id: 'apply',  label: 'Aplicar'  },
  { id: 'review', label: 'Revisar'  },
]

const DIFFICULTY_LABEL: Record<string, string> = {
  introductory: 'Introdutório',
  intermediate: 'Intermediário',
  advanced: 'Avançado',
}

function findModuleMetadata(moduleSlug: string) {
  for (const area of platform.areas) {
    for (const unit of area.units) {
      const mod = unit.modules.find((m) => m.slug === moduleSlug)
      if (mod) return { area, unit, mod }
    }
  }
  return null
}

export function ModulePage() {
  const { moduleSlug, mode = 'learn' } = useParams<{ moduleSlug: string; mode?: string }>()
  const navigate = useNavigate()
  const currentMode = (['learn', 'apply', 'review'].includes(mode!) ? mode! : 'learn') as Mode

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [moduleData, setModuleData] = useState<LearningModule | null>(null)

  // Reseta o scroll para o topo quando o modo de visualização ou o módulo muda.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [moduleSlug, currentMode])

  useEffect(() => {
    if (!moduleSlug) return

    let isMounted = true
    setLoading(true)
    setError(null)

    contentService.loadModuleBySlug(moduleSlug)
      .then((data) => {
        if (isMounted) {
          setModuleData(data)
          setLoading(false)
        }
      })
      .catch(() => {
        if (isMounted) {
          setError('Não foi possível carregar este módulo.')
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [moduleSlug])

  const handleRetry = () => {
    if (!moduleSlug) return
    setLoading(true)
    setError(null)
    contentService.loadModuleBySlug(moduleSlug)
      .then((data) => {
        setModuleData(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Não foi possível carregar este módulo.')
        setLoading(false)
      })
  }

  const found = moduleSlug ? findModuleMetadata(moduleSlug) : null
  if (!found) return <Navigate to="/" replace />

  const { area, unit, mod: metadata } = found

  return (
    <div className="space-y-6">
      {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
      <nav aria-label="Localização" className="flex items-center gap-1 text-sm text-surface-500 flex-wrap">
        <Link to="/" className="hover:text-primary-600 transition-colors">Início</Link>
        <ChevronRight size={14} />
        <Link to={`/areas/${area.slug}`} className="hover:text-primary-600 transition-colors">{area.title}</Link>
        <ChevronRight size={14} />
        <Link to={`/areas/${area.slug}/units/${unit.slug}`} className="hover:text-primary-600 transition-colors">{unit.title}</Link>
        <ChevronRight size={14} />
        <span className="text-surface-900 font-medium">{metadata.title}</span>
      </nav>

      {/* ── Cabeçalho do módulo ─────────────────────────────────────────────── */}
      <div className="card">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="badge-neutral">Módulo {metadata.order}</span>
              <span className="badge-primary">{DIFFICULTY_LABEL[metadata.difficulty]}</span>
            </div>
            <h1 className="text-xl font-bold text-surface-900">{metadata.title}</h1>
            <p className="text-surface-600 text-sm mt-1">{metadata.learningObjective}</p>
          </div>
          <div className="text-right text-sm text-surface-500 shrink-0">
            <p className="flex items-center gap-1 justify-end">
              <Clock size={13} /> {metadata.estimatedTimeMinutes} min
            </p>
            {metadata.prerequisiteKnowledge && metadata.prerequisiteKnowledge.length > 0 && (
              <p className="flex items-center gap-1 justify-end mt-1">
                <BookOpen size={13} /> {metadata.prerequisiteKnowledge.length} pré-requisito(s)
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ── Abas de modo ───────────────────────────────────────────────────── */}
      <div className="tab-bar">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            className={clsx(currentMode === tab.id ? 'tab-item-active' : 'tab-item')}
            onClick={() => navigate(`/modules/${moduleSlug}/${tab.id}`)}
            aria-selected={currentMode === tab.id}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Conteúdo do modo ───────────────────────────────────────────────── */}
      <div role="tabpanel" aria-labelledby={`tab-${currentMode}`}>
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4" aria-live="polite">
            <p className="text-surface-600 dark:text-surface-300">Carregando conteúdo do módulo...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4" aria-live="assertive">
            <p className="text-red-600 dark:text-red-400 font-semibold mb-2">{error}</p>
            <button className="btn-primary" onClick={handleRetry}>Tentar novamente</button>
          </div>
        ) : moduleData ? (
          <>
            {currentMode === 'learn'  && <LearnMode  module={moduleData} unitId={unit.id} />}
            {currentMode === 'apply'  && <ApplyMode  module={moduleData} unitId={unit.id} />}
            {currentMode === 'review' && <ReviewMode module={moduleData} unitId={unit.id} />}
          </>
        ) : null}
      </div>

      {/* ── Navegação entre modos ───────────────────────────────────────────── */}
      <div className="flex justify-between pt-4 border-t border-surface-200">
        <button
          className="btn-ghost"
          disabled={loading}
          onClick={() => {
            const idx = TABS.findIndex((t) => t.id === currentMode)
            if (idx > 0) navigate(`/modules/${moduleSlug}/${TABS[idx - 1].id}`)
            else navigate('/')
          }}
        >
          ← {currentMode === 'learn' ? 'Voltar ao início' : `Anterior`}
        </button>
        <button
          className="btn-primary"
          disabled={loading || !!error}
          onClick={() => {
            const idx = TABS.findIndex((t) => t.id === currentMode)
            if (idx < TABS.length - 1) navigate(`/modules/${moduleSlug}/${TABS[idx + 1].id}`)
            else navigate('/')
          }}
        >
          {currentMode === 'review' ? 'Concluir módulo' : 'Próximo'} →
        </button>
      </div>
    </div>
  )
}
