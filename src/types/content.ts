// ─────────────────────────────────────────────────────────────────────────────
// TIPOS DE CONTEÚDO — Aprender, Aplicar, Revisar
// ─────────────────────────────────────────────────────────────────────────────

// ── Aprender ──────────────────────────────────────────────────────────────────

export interface LearnContent {
  summary: ContentParagraph[]
  mainIdea: string
  essentialConcepts: EssentialConcept[]
  evidence: EvidenceItem[]
  limitations: LimitationItem[]
  simpleExplanation: string
  conceptMap: ConceptMapData
  glossary: GlossaryItem[]
}

export interface ContentParagraph {
  id: string
  text: string
}

export interface EssentialConcept {
  id: string
  term: string
  definition: string
  example?: string
}

export interface EvidenceItem {
  id: string
  claim: string
  source: string
  evidenceLevel: 'strong' | 'moderate' | 'emerging' | 'expert_opinion'
  clinicalImplication: string
}

export interface LimitationItem {
  id: string
  description: string
}

export interface ConceptMapData {
  centralNode: string
  nodes: ConceptNode[]
  edges: ConceptEdge[]
}

export interface ConceptNode {
  id: string
  label: string
  type: 'central' | 'primary' | 'secondary' | 'application'
  description?: string
}

export interface ConceptEdge {
  id: string
  from: string
  to: string
  label: string
}

export interface GlossaryItem {
  id: string
  term: string
  definition: string
  example: string
}

// ── Aplicar ───────────────────────────────────────────────────────────────────

export interface ApplyContent {
  questions: ObjectiveQuestion[]
  associations: AssociationActivity[]
  decisionExercises: DecisionExercise[]
  fictionalCases: FictionalCase[]
  branchingCases?: BranchingCase[]
  transcriptActivities?: TranscriptActivity[]
}

export interface ObjectiveQuestion {
  id: string
  stem: string
  alternatives: Alternative[]
  correctAlternativeId: string
  explanation: string
  hint?: string
  relatedConceptId?: string
  referenceId?: string
}

// Simulador Clínico Ramificado
export interface BranchingCase {
  id: string
  title: string
  description: string
  startSceneId: string
  scenes: BranchingScene[]
}

export interface BranchingScene {
  id: string
  title: string
  text: string
  choices: BranchingChoice[]
}

export interface BranchingChoice {
  text: string
  feedback: string
  nextSceneId: string | null // null indica fim da simulação
  isRecommended?: boolean // Se é a melhor escolha clínica
}

// Análise de Transcrição de Fala
export interface TranscriptActivity {
  id: string
  title: string
  instruction: string
  tokens: TranscriptToken[]
  explanation: string
}

export interface TranscriptToken {
  id: string
  text: string
  isInteractive: boolean // Clicável?
  correctAnswer: boolean // É um desvio/erro?
  errorType?: string // Ex: "Plosivização"
  feedback?: string // Explicação ao ser clicado
}

export interface Alternative {
  id: string
  text: string
  isCorrect: boolean
  feedback: string
}

export interface AssociationActivity {
  id: string
  instruction: string
  pairs: AssociationPair[]
}

export interface AssociationPair {
  id: string
  left: string
  right: string
}

export interface DecisionExercise {
  id: string
  situation: string
  options: DecisionOption[]
}

export interface DecisionOption {
  id: string
  text: string
  consequence: string
  explanation: string
  isRecommended: boolean
}

export interface FictionalCase {
  id: string
  title: string
  description: string
  disclaimer: string
  questions: ObjectiveQuestion[]
}

// ── Revisar ───────────────────────────────────────────────────────────────────

export interface ReviewContent {
  flashcards: Flashcard[]
  finalSynthesis: string
}

export interface Flashcard {
  id: string
  front: string
  back: string
  tags: string[]
}

// ── Revisão espaçada ─────────────────────────────────────────────────────────

export interface ReviewSchedule {
  moduleId: string
  intervals: number[] // dias
  currentInterval: number
  nextReviewDate: string // ISO
  totalReviews: number
}
