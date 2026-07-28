import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { platform } from '@/data/platform'
import { ChevronRight } from 'lucide-react'

export function UnitPage() {
  const { areaSlug, unitSlug } = useParams()
  const navigate = useNavigate()

  const area = platform.areas.find((a) => a.slug === areaSlug)
  const unit = area?.units.find((u) => u.slug === unitSlug)
  if (!area || !unit) return <Navigate to="/" replace />

  return (
    <div className="space-y-6">
      <div>
        <button onClick={() => navigate(`/areas/${areaSlug}`)} className="btn-ghost text-sm mb-3">
          ← {area.title}
        </button>
        <h1 className="text-2xl font-bold">{unit.title}</h1>
        <p className="text-surface-600 mt-1">{unit.description}</p>
        <div className="alert-info mt-4">
          <p className="font-medium text-sky-900 text-sm">Objetivo da Unidade</p>
          <p className="text-sky-800 text-sm mt-1">{unit.objective}</p>
        </div>
      </div>

      <div className="space-y-3">
        {unit.modules.map((mod) => (
          <div
            key={mod.id}
            className="card-hover"
            onClick={() => navigate(`/modules/${mod.slug}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(`/modules/${mod.slug}`)}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-surface-400">Módulo {mod.order}</span>
                <h2 className="font-semibold text-surface-900">{mod.title}</h2>
                <p className="text-sm text-surface-500 mt-1">{mod.description}</p>
              </div>
              <ChevronRight size={18} className="text-surface-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
