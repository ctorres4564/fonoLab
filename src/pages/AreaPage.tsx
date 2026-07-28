import { useParams, Navigate } from 'react-router-dom'
import { platform } from '@/data/platform'
import { useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export function AreaPage() {
  const { areaSlug } = useParams()
  const navigate = useNavigate()
  const area = platform.areas.find((a) => a.slug === areaSlug)
  if (!area) return <Navigate to="/" replace />

  return (
    <div className="space-y-6">
      <div>
        <button onClick={() => navigate('/')} className="btn-ghost text-sm mb-3">
          ← Início
        </button>
        <h1 className="text-2xl font-bold">Área: {area.title}</h1>
        <p className="text-surface-600 mt-1">{area.description}</p>
      </div>

      <div className="space-y-3">
        {area.units.map((unit) => (
          <div
            key={unit.id}
            className="card-hover"
            onClick={() => navigate(`/areas/${areaSlug}/units/${unit.slug}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(`/areas/${areaSlug}/units/${unit.slug}`)}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-surface-400">Unidade {unit.order}</span>
                <h2 className="font-semibold text-surface-900">{unit.title}</h2>
                <p className="text-sm text-surface-500 mt-1">{unit.description}</p>
                <p className="text-xs text-surface-400 mt-2">{unit.modules.length} módulo(s)</p>
              </div>
              <ChevronRight size={18} className="text-surface-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
