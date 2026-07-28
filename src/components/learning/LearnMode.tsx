import { useState, useEffect } from 'react'
import type { LearningModule } from '@/types/platform'
import { ConceptMapView } from './ConceptMapView'
import { ChevronDown, ChevronUp, BookMarked, Zap, AlertTriangle, Info, Search, PenTool, Check } from 'lucide-react'
import { clsx } from 'clsx'
import { useProgressStore } from '@/features/progress/useProgressStore'

interface Props {
  module: LearningModule
  unitId: string
}

const EVIDENCE_LEVEL: Record<string, string> = {
  strong: 'Forte',
  moderate: 'Moderado',
  emerging: 'Emergente',
  expert_opinion: 'Opinião de especialistas',
}

const EVIDENCE_COLOR: Record<string, string> = {
  strong: 'badge-success',
  moderate: 'badge-primary',
  emerging: 'badge-info',
  expert_opinion: 'badge-neutral',
}

function Section({ title, children, defaultOpen = true }: {
  title: string; children: React.ReactNode; defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <section className="border border-surface-200 dark:border-surface-800 rounded-xl overflow-hidden transition-colors duration-200">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-surface-50 dark:bg-surface-800 hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-surface-800 dark:text-surface-200">{title}</span>
        {open ? <ChevronUp size={16} className="text-surface-400" /> : <ChevronDown size={16} className="text-surface-400" />}
      </button>
      {open && <div className="px-5 py-4 bg-white dark:bg-surface-900 transition-colors duration-200">{children}</div>}
    </section>
  )
}

export function LearnMode({ module, unitId }: Props) {
  const { learn, references } = module
  const [searchTerm, setSearchTerm] = useState('')

  // Determina a cor temática baseado no ID da Unidade (eixo temático)
  const getThemeColor = (uId: string) => {
    if (uId === 'unit-linguagem-01') return 'blue'
    if (uId === 'unit-linguagem-02') return 'emerald'
    return 'amber'
  }
  const themeColor = getThemeColor(unitId)

  // Lógica do Diário de Aprendizado
  const saveNotes = useProgressStore((s) => s.saveNotes)
  const progresses = useProgressStore((s) => s.progresses)
  const progressKey = `${unitId}::${module.id}`
  const moduleProgress = progresses[progressKey]

  const [notes, setNotes] = useState(() => moduleProgress?.notes ?? '')
  const [isSaving, setIsSaving] = useState(false)

  // Sincroniza com as notas do progresso quando o módulo é carregado
  useEffect(() => {
    setNotes(moduleProgress?.notes ?? '')
  }, [module.id, moduleProgress?.notes])

  // Auto-salvamento com debounce de 800ms
  useEffect(() => {
    if (notes === (moduleProgress?.notes ?? '')) return

    setIsSaving(true)
    const timeout = setTimeout(() => {
      saveNotes(unitId, module.id, notes)
      setIsSaving(false)
    }, 800)

    return () => clearTimeout(timeout)
  }, [notes, unitId, module.id, saveNotes, moduleProgress?.notes])

  // Filtragem do Glossário em tempo real
  const filteredGlossary = learn.glossary.filter((g) => {
    const term = g.term.toLowerCase()
    const def = g.definition.toLowerCase()
    const query = searchTerm.toLowerCase()
    return term.includes(query) || def.includes(query)
  })

  return (
    <div className="space-y-4">

      {/* Resumo */}
      <Section title="📖 Resumo">
        <div className={clsx(
          "space-y-3 p-4 rounded-r-xl border-l-4",
          themeColor === 'blue' && 'border-blue-500 bg-blue-50/20 dark:bg-blue-950/10',
          themeColor === 'emerald' && 'border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/10',
          themeColor === 'amber' && 'border-amber-500 bg-amber-50/20 dark:bg-amber-950/10'
        )}>
          {learn.summary.map((p) => (
            <p key={p.id} className="text-surface-700 dark:text-surface-200 leading-relaxed">{p.text}</p>
          ))}
        </div>
      </Section>

      {/* Ideia principal */}
      <Section title="💡 Ideia Principal">
        <div className="alert-info">
          <p className="text-sky-900 dark:text-sky-200 font-medium">{learn.mainIdea}</p>
        </div>
      </Section>

      {/* Conceitos essenciais */}
      <Section title="🔑 Conceitos Essenciais">
        <div className="space-y-4">
          {learn.essentialConcepts.map((c) => (
            <div key={c.id} className="border-l-2 border-primary-300 dark:border-primary-800 pl-4">
              <p className="font-semibold text-surface-900 dark:text-surface-100">{c.term}</p>
              <p className="text-surface-600 dark:text-surface-300 text-sm mt-1">{c.definition}</p>
              {c.example && (
                <p className="text-surface-500 dark:text-surface-450 text-xs mt-1 italic">Exemplo: {c.example}</p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Evidências */}
      <Section title="📊 Evidências e Argumentos">
        <div className="space-y-4">
          {learn.evidence.map((ev) => (
            <div key={ev.id} className="card p-4">
              <div className="flex items-start gap-2 flex-wrap mb-2">
                <Zap size={14} className="text-primary-500 mt-0.5 shrink-0" />
                <p className="text-surface-800 dark:text-surface-200 font-medium flex-1">{ev.claim}</p>
              </div>
              <div className="flex items-center gap-2 flex-wrap text-xs text-surface-500 dark:text-surface-400 mb-2">
                <span>Fonte: {ev.source}</span>
                <span className={clsx(EVIDENCE_COLOR[ev.evidenceLevel])}>
                  Evidência {EVIDENCE_LEVEL[ev.evidenceLevel]}
                </span>
              </div>
              <div className="alert-success p-3">
                <p className="text-emerald-800 dark:text-emerald-200 text-sm">
                  <strong>Implicação clínica:</strong> {ev.clinicalImplication}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Limitações */}
      <Section title="⚠️ Limitações e Cuidados">
        <div className="space-y-3">
          {learn.limitations.map((lim) => (
            <div key={lim.id} className="flex gap-3">
              <AlertTriangle size={15} className="text-amber-500 shrink-0 mt-0.5" />
              <p className="text-surface-700 dark:text-surface-300 text-sm">{lim.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Linguagem simples */}
      <Section title="🗣️ Explicação em Linguagem Simples">
        <div className="alert-info">
          <Info size={16} className="text-sky-500 shrink-0 mt-0.5" />
          <p className="text-sky-800 dark:text-sky-200">{learn.simpleExplanation}</p>
        </div>
      </Section>

      {/* Mapa conceitual */}
      <Section title="🗺️ Mapa Conceitual">
        <ConceptMapView 
          data={learn.conceptMap} 
          glossary={learn.glossary} 
          essentialConcepts={learn.essentialConcepts} 
          themeColor={themeColor}
        />
      </Section>

      {/* Glossário com busca */}
      <Section title="📚 Glossário Técnico">
        <div className="space-y-4">
          <div className="relative flex items-center">
            <span className="absolute left-3 text-surface-400">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Buscar termo ou significado no glossário..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-colors placeholder:text-surface-400"
            />
          </div>

          {filteredGlossary.length > 0 ? (
            <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
              {filteredGlossary.map((g) => (
                <div key={g.id} className="p-3 border border-surface-100 dark:border-surface-800/60 hover:bg-surface-50/50 dark:hover:bg-surface-800/20 rounded-lg transition-colors">
                  <p className="font-semibold text-surface-900 dark:text-surface-100 text-sm">{g.term}</p>
                  <p className="text-surface-600 dark:text-surface-300 text-xs mt-1 leading-relaxed">{g.definition}</p>
                  {g.example && (
                    <p className="text-surface-400 dark:text-surface-450 text-[10px] mt-1.5 italic">Aplicação: {g.example}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 border border-dashed border-surface-200 dark:border-surface-800 rounded-lg">
              <p className="text-xs text-surface-400">Nenhum termo encontrado para sua busca.</p>
            </div>
          )}
        </div>
      </Section>

      {/* Diário de Reflexão Ativa */}
      <Section title="📝 Diário de Reflexão (Técnica Feynman)">
        <div className="space-y-4">
          <div className="flex items-start gap-2.5 alert-info p-3.5 rounded-lg">
            <PenTool size={16} className="text-sky-500 shrink-0 mt-0.5" />
            <p className="text-sky-800 dark:text-sky-200 text-xs leading-relaxed">
              <strong>Técnica Feynman:</strong> Escreva um resumo pessoal do módulo com suas próprias palavras, simulando que o está ensinando a outra pessoa. Isso força a evocação ativa e consolida o conteúdo na memória de longo prazo.
            </p>
          </div>

          <div className="relative">
            <textarea
              placeholder="Digite suas anotações e reflexões sobre este módulo..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={6}
              className="w-full p-4 pr-12 text-sm bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-colors font-sans leading-relaxed resize-y min-h-[120px]"
            />
            
            <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-xs text-surface-400 pointer-events-none select-none bg-surface-50/90 dark:bg-surface-950/90 px-2 py-0.5 rounded shadow-sm">
              {isSaving ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                  <span>Salvando...</span>
                </>
              ) : notes ? (
                <>
                  <Check size={11} className="text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Salvo</span>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </Section>

      {/* Referências */}
      <Section title="📋 Referências" defaultOpen={false}>
        <div className="space-y-3">
          {references.map((ref) => (
            <div key={ref.id} className="text-sm text-surface-600 dark:text-surface-300">
              <span className="font-medium">{ref.authors}</span> ({ref.year}).{' '}
              <em>{ref.title}</em>. {ref.source}.
              {ref.doi && (
                <span className="text-primary-600 ml-1">
                  DOI: <a href={`https://doi.org/${ref.doi}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{ref.doi}</a>
                </span>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Aviso sobre fontes */}
      <div className="flex items-start gap-2 text-xs text-surface-400 pt-2">
        <BookMarked size={12} className="shrink-0 mt-0.5" />
        <span>Conteúdo autoral fundamentado nas referências listadas. Não reproduz extensamente textos protegidos.</span>
      </div>
    </div>
  )
}
