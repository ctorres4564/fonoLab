import { useState } from 'react'
import type { ConceptMapData, GlossaryItem, EssentialConcept } from '@/types/content'
import { Info, X } from 'lucide-react'
import { clsx } from 'clsx'

interface Props {
  data: ConceptMapData
  glossary?: GlossaryItem[]
  essentialConcepts?: EssentialConcept[]
  themeColor?: string
}

const TYPE_STYLES: Record<string, string> = {
  central:     'bg-primary-600 text-white font-bold text-sm px-4 py-2 rounded-xl shadow-lg',
  primary:     'bg-primary-100 text-primary-800 font-semibold text-sm px-3 py-1.5 rounded-lg border border-primary-200 dark:bg-primary-900/40 dark:text-primary-200 dark:border-primary-800',
  secondary:   'bg-surface-100 text-surface-700 text-sm px-3 py-1.5 rounded-lg border border-surface-200 dark:bg-surface-800 dark:text-surface-300 dark:border-surface-700',
  application: 'bg-emerald-50 text-emerald-800 text-xs px-2.5 py-1 rounded-lg border border-emerald-200 italic dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800/50',
}

export function ConceptMapView({ data, glossary = [], essentialConcepts = [], themeColor }: Props) {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const handleNodeClick = (nodeId: string) => {
    setSelectedNodeId(prev => prev === nodeId ? null : nodeId)
    setSelectedType(null) // Limpa o filtro de tipo se um nó específico for clicado
  }

  const handleTypeClick = (type: string) => {
    setSelectedType(prev => prev === type ? null : type)
    setSelectedNodeId(null) // Limpa o nó selecionado se um tipo for clicado
  }

  // Encontrar detalhes sobre o nó selecionado
  const selectedNode = data.nodes.find(n => n.id === selectedNodeId)
  let nodeDetail = ''
  if (selectedNode) {
    if (selectedNode.description) {
      nodeDetail = selectedNode.description
    } else {
      const termLower = selectedNode.label.toLowerCase()
      const fromGlossary = glossary.find(g => g.term.toLowerCase() === termLower)
      const fromConcepts = essentialConcepts.find(c => c.term.toLowerCase() === termLower)
      nodeDetail = fromGlossary?.definition || fromConcepts?.definition || 'Detalhe não disponível para este conceito no resumo atual.'
    }
  }

  return (
    <div className="space-y-4">
      {/* Legenda */}
      <div className="flex items-center gap-3 flex-wrap text-xs">
        <span className="text-surface-400">Legenda (clique para filtrar):</span>
        {Object.entries(TYPE_STYLES).map(([type, style]) => {
          const isSelected = selectedType === type
          const isFaded = selectedType !== null && !isSelected
          
          let displayStyle = style
          if (type === 'central' && themeColor) {
            if (themeColor === 'blue') displayStyle = 'bg-blue-600 text-white font-bold text-sm px-4 py-2 rounded-xl shadow-lg'
            else if (themeColor === 'emerald') displayStyle = 'bg-emerald-600 text-white font-bold text-sm px-4 py-2 rounded-xl shadow-lg'
            else if (themeColor === 'amber') displayStyle = 'bg-amber-600 text-white font-bold text-sm px-4 py-2 rounded-xl shadow-lg'
          }

          return (
            <button
              key={type}
              onClick={() => handleTypeClick(type)}
              className={clsx(
                displayStyle,
                'transition-all duration-200 hover:ring-2 hover:ring-primary-400 hover:ring-offset-1 dark:hover:ring-offset-surface-900',
                isFaded && 'opacity-40 grayscale-[50%]',
                isSelected && 'ring-2 ring-primary-500 ring-offset-2 dark:ring-offset-surface-900 scale-105'
              )}
            >
              {type === 'central' ? 'Central' : type === 'primary' ? 'Primário' : type === 'secondary' ? 'Secundário' : 'Aplicação'}
            </button>
          )
        })}
      </div>

      {/* Nós */}
      <div className="space-y-2">
        {data.nodes.map((node) => {
          const isSelectedNode = selectedNodeId === node.id
          
          let isFaded = false
          if (selectedNodeId !== null && !isSelectedNode) {
            isFaded = true
          } else if (selectedType !== null && node.type !== selectedType) {
            isFaded = true
          }
          
          let nodeStyle = TYPE_STYLES[node.type]
          if (node.type === 'central' && themeColor) {
            if (themeColor === 'blue') {
              nodeStyle = 'bg-blue-600 text-white font-bold text-sm px-4 py-2 rounded-xl shadow-lg shadow-blue-500/10'
            } else if (themeColor === 'emerald') {
              nodeStyle = 'bg-emerald-600 text-white font-bold text-sm px-4 py-2 rounded-xl shadow-lg shadow-emerald-500/10'
            } else if (themeColor === 'amber') {
              nodeStyle = 'bg-amber-600 text-white font-bold text-sm px-4 py-2 rounded-xl shadow-lg shadow-amber-500/10'
            }
          }

          return (
            <button
              key={node.id}
              onClick={() => handleNodeClick(node.id)}
              className={clsx(
                'inline-flex mr-2 mb-2 transition-all duration-200 hover:ring-2 hover:ring-primary-400 hover:ring-offset-1 dark:hover:ring-offset-surface-900',
                nodeStyle,
                isFaded && 'opacity-40 grayscale-[50%]',
                isSelectedNode && 'ring-2 ring-primary-500 ring-offset-2 dark:ring-offset-surface-900 scale-105'
              )}
            >
              {node.label}
            </button>
          )
        })}
      </div>

      {/* Detalhes do Nó Selecionado */}
      {selectedNode && (
        <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800/50 rounded-lg p-3 text-sm flex gap-3 relative animate-in fade-in slide-in-from-top-2">
          <Info className="text-primary-500 shrink-0 mt-0.5" size={16} />
          <div className="flex-1 pr-6">
            <span className="font-semibold text-primary-900 dark:text-primary-100 block mb-1">{selectedNode.label}</span>
            <span className="text-surface-700 dark:text-surface-300">{nodeDetail}</span>
          </div>
          <button 
            onClick={() => setSelectedNodeId(null)}
            className="absolute top-3 right-3 text-surface-400 hover:text-surface-600 dark:hover:text-surface-200"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Relações */}
      <div>
        <p className="text-xs text-surface-400 mb-2 font-medium uppercase tracking-wide">Relações</p>
        <div className="space-y-1">
          {data.edges.map((edge) => {
            const fromNode = data.nodes.find((n) => n.id === edge.from)
            const toNode = data.nodes.find((n) => n.id === edge.to)
            
            let isRelated = true
            if (selectedNodeId !== null) {
              isRelated = edge.from === selectedNodeId || edge.to === selectedNodeId
            } else if (selectedType !== null) {
              isRelated = fromNode?.type === selectedType || toNode?.type === selectedType
            }
            
            if (!isRelated) return null // Hide non-related edges to highlight

            return (
              <div 
                key={edge.id} 
                className={clsx(
                  "text-sm flex items-center gap-2 flex-wrap transition-opacity duration-200",
                  "text-surface-600 dark:text-surface-300",
                  (selectedNodeId !== null || selectedType !== null) && "bg-surface-50 dark:bg-surface-800/50 p-1.5 rounded"
                )}
              >
                <span className={clsx(
                  "font-medium", 
                  (selectedNodeId === edge.from || (selectedType !== null && fromNode?.type === selectedType)) ? "text-primary-600 dark:text-primary-400" : "text-surface-800 dark:text-surface-100"
                )}>{fromNode?.label}</span>
                <span className="text-surface-400 dark:text-surface-400">→ {edge.label} →</span>
                <span className={clsx(
                  "font-medium", 
                  (selectedNodeId === edge.to || (selectedType !== null && toNode?.type === selectedType)) ? "text-primary-600 dark:text-primary-400" : "text-surface-800 dark:text-surface-100"
                )}>{toNode?.label}</span>
              </div>
            )
          })}
          {selectedNodeId && data.edges.filter(e => e.from === selectedNodeId || e.to === selectedNodeId).length === 0 && (
            <p className="text-sm text-surface-500 italic">Nenhuma relação encontrada para este nó no mapa.</p>
          )}
        </div>
      </div>
    </div>
  )
}
