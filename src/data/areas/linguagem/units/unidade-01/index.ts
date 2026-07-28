import type { LearningUnit } from '@/types/platform'

export const unidade01: LearningUnit = {
  id: 'unit-linguagem-01',
  slug: 'fundamentos-avaliacao-diagnostico',
  title: 'Fundamentos, Avaliação e Diagnóstico da Linguagem',
  description:
    'Apresenta os fundamentos teóricos da avaliação fonoaudiológica em linguagem, o processo diagnóstico e sua relação com o planejamento terapêutico.',
  objective:
    'Ao concluir esta unidade, o estudante será capaz de compreender os modelos teóricos de avaliação da linguagem oral e escrita, organizar o raciocínio diagnóstico diferencial e vincular os dados da avaliação ao planejamento terapêutico baseado em evidências.',
  order: 1,
  modules: [
    {
      id: 'mod-avaliacao-linguagens',
      slug: 'avaliacao-linguagens-oral-escrita',
      title: 'Avaliação das linguagens oral e escrita',
      description:
        'Fundamentos dos subsistemas da linguagem oral e sua interdependência com leitura e escrita, orientando a avaliação clínica fonoaudiológica.',
      order: 1,
      learningObjective:
        'Compreender e mapear os subsistemas da linguagem oral (fonologia, morfossintaxe, semântica e pragmática) e sua interdependência com as habilidades de leitura e escrita, utilizando modelos teóricos fundamentados em evidências para estruturar a avaliação clínica.',
      estimatedTimeMinutes: 210,
      difficulty: 'intermediate',
      status: 'published',
      prerequisiteKnowledge: [
        'Neurodesenvolvimento típico da criança',
        'Anatomia e fisiologia da audição e do sistema nervoso central',
        'Fonética articulatória',
      ],
      totalActivities: 15,
    },
    {
      id: 'mod-processo-diagnostico',
      slug: 'processo-diagnostico-linguagem',
      title: 'Organização do processo diagnóstico em linguagem',
      description:
        'Etapas do processo diagnóstico fonoaudiológico, distinção entre diagnóstico funcional e nosológico, e critérios de diagnóstico diferencial entre TDL, TEA, dislexia e dificuldades escolares.',
      order: 2,
      learningObjective:
        'Compreender as etapas do processo diagnóstico fonoaudiológico em linguagem, diferenciar diagnóstico funcional de nosológico, aplicar critérios de distinção entre TDL, TEA e dislexia, e reconhecer os limites do raciocínio diagnóstico.',
      estimatedTimeMinutes: 210,
      difficulty: 'intermediate',
      status: 'published',
      prerequisiteKnowledge: [
        'Módulo 1: Avaliação das linguagens oral e escrita',
        'Desenvolvimento neuropsicomotor típico',
        'Noções de DSM-5 e CID-11',
      ],
      totalActivities: 10,
    },
    {
      id: 'mod-planejamento-terapeutico',
      slug: 'planejamento-terapeutico-linguagem',
      title: 'Relação entre avaliação, diagnóstico e planejamento terapêutico',
      description:
        'Como os dados da avaliação se traduzem em objetivos hierarquizados, seleção de abordagens baseadas em evidências, monitoramento do progresso, generalização e critérios de alta fonoaudiológica.',
      order: 3,
      learningObjective:
        'Compreender como os dados da avaliação alimentam o raciocínio diagnóstico e se traduzem em objetivos terapêuticos hierarquizados e mensuráveis, reconhecendo os critérios que orientam a reavaliação, a generalização de habilidades e a alta fonoaudiológica.',
      estimatedTimeMinutes: 210,
      difficulty: 'intermediate',
      status: 'published',
      prerequisiteKnowledge: [
        'Módulo 1: Avaliação das linguagens oral e escrita',
        'Módulo 2: Organização do processo diagnóstico em linguagem',
        'Noções de raciocínio clínico baseado em evidências',
      ],
      totalActivities: 10,
    },
  ],
}
