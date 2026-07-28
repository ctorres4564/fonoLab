import type { LearningUnit } from '@/types/platform'

export const unidade03: LearningUnit = {
  id: 'unit-linguagem-03',
  slug: 'desenvolvimento-transtornos-linguagem-oral',
  title: 'Desenvolvimento e Transtornos da Linguagem Oral',
  description:
    'Estuda as características, os aspectos linguísticos, as bases neurobiológicas e os princípios de avaliação e intervenção nos transtornos do desenvolvimento da linguagem oral.',
  objective:
    'Compreender as características dos transtornos do desenvolvimento da linguagem, seus principais impactos linguísticos e funcionais, suas bases explicativas e os princípios utilizados na avaliação e na intervenção fonoaudiológica.',
  order: 3,
  modules: [
    {
      id: 'mod-transtornos-linguagem-caracteristicas',
      slug: 'caracteristicas-transtornos-especificos-linguagem',
      title: 'Características dos Transtornos Específicos de Linguagem',
      description:
        'Fundamentos sobre os transtornos do desenvolvimento da linguagem oral: evolução terminológica, heterogeneidade de perfis, persistência, impacto funcional e os cuidados necessários para diferenciar atraso, variação e transtorno persistente.',
      order: 1,
      learningObjective:
        'Compreender as características centrais dos transtornos do desenvolvimento da linguagem, sua heterogeneidade, seus impactos funcionais e os cuidados necessários para diferenciar atraso, variação e transtorno persistente.',
      estimatedTimeMinutes: 180,
      difficulty: 'advanced',
      status: 'published',
      prerequisiteKnowledge: [
        'Desenvolvimento típico da linguagem oral na infância',
        'Unidade 1: Fundamentos, avaliação e diagnóstico da linguagem',
      ],
      totalActivities: 43,
    },
    {
      id: 'mod-transtornos-linguagem-aspectos-linguisticos',
      slug: 'aspectos-linguisticos-transtornos-linguagem',
      title: 'Aspectos Linguísticos dos Transtornos de Linguagem',
      description:
        'Como os transtornos do desenvolvimento da linguagem afetam fonologia, morfossintaxe, semântica, pragmática, narrativa e processamento verbal, reconhecendo a heterogeneidade dos perfis e os limites de interpretações baseadas em um único subsistema.',
      order: 2,
      learningObjective:
        'Compreender como os transtornos do desenvolvimento da linguagem podem afetar diferentes componentes linguísticos, incluindo fonologia, morfossintaxe, semântica, pragmática, narrativa e processamento verbal, reconhecendo a heterogeneidade dos perfis e os limites de interpretações baseadas em um único subsistema.',
      estimatedTimeMinutes: 180,
      difficulty: 'advanced',
      status: 'published',
      prerequisiteKnowledge: [
        'Módulo 1: Características dos transtornos específicos de linguagem',
      ],
      totalActivities: 43,
    },
    {
      id: 'mod-transtornos-linguagem-bases-neurobiologicas',
      slug: 'bases-neurobiologicas-transtornos-linguagem',
      title: 'Bases Neurobiológicas dos Transtornos de Linguagem',
      description:
        'Modelos neurobiológicos, genéticos e cognitivos associados aos transtornos do desenvolvimento da linguagem, reconhecendo a heterogeneidade dos achados, os limites das evidências disponíveis e a impossibilidade de explicar o quadro por uma única causa.',
      order: 3,
      learningObjective:
        'Compreender os principais modelos neurobiológicos, genéticos e cognitivos associados aos transtornos do desenvolvimento da linguagem, reconhecendo a heterogeneidade dos achados, os limites das evidências disponíveis e a impossibilidade de explicar o quadro por uma única causa.',
      estimatedTimeMinutes: 180,
      difficulty: 'advanced',
      status: 'published',
      prerequisiteKnowledge: [
        'Módulo 1: Características dos transtornos específicos de linguagem',
        'Módulo 2: Aspectos linguísticos dos transtornos de linguagem',
      ],
      totalActivities: 45,
    },
    {
      id: 'mod-transtornos-linguagem-avaliacao-intervencao',
      slug: 'avaliacao-intervencao-transtornos-linguagem',
      title: 'Avaliação e Intervenção nos Transtornos de Linguagem',
      description:
        'Critérios diagnósticos e protocolos modernos para transtornos do desenvolvimento da linguagem fundamentados no Consórcio CATALISE, análise clínica multidimensional e princípios de intervenção baseados em evidências.',
      order: 4,
      learningObjective:
        'Relacionar dados da avaliação linguística, funcional e contextual à definição de hipóteses, prioridades e princípios de intervenção fonoaudiológica.',
      estimatedTimeMinutes: 180,
      difficulty: 'advanced',
      status: 'published',
      prerequisiteKnowledge: [
        'Módulo 3: Bases neurobiológicas dos transtornos de linguagem',
      ],
      totalActivities: 42,
    },
  ],
}
