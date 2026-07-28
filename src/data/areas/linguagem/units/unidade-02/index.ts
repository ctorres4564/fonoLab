import type { LearningUnit } from '@/types/platform'

export const unidade02: LearningUnit = {
  id: 'unit-linguagem-02',
  slug: 'desenvolvimento-fonologico-alteracoes-fala',
  title: 'Desenvolvimento fonológico e alterações de fala',
  description:
    'Estudo do desenvolvimento fonológico, das alterações fonológicas e dos princípios utilizados na organização da intervenção e do planejamento terapêutico.',
  objective:
    'Compreender o desenvolvimento do sistema fonológico, reconhecer alterações fonológicas e relacionar os achados da avaliação aos princípios de intervenção e ao planejamento terapêutico.',
  order: 2,
  modules: [
    {
      id: 'mod-desenvolvimento-fonologico',
      slug: 'desenvolvimento-fonologico',
      title: 'Desenvolvimento fonológico',
      description:
        'Introdução à aquisição e à organização progressiva do sistema fonológico durante o desenvolvimento da linguagem.',
      order: 1,
      learningObjective:
        'Compreender como o sistema fonológico se organiza e se desenvolve, reconhecendo os principais componentes envolvidos na aquisição dos sons da fala e os cuidados necessários para distinguir variabilidade do desenvolvimento de possíveis sinais de alteração.',
      estimatedTimeMinutes: 120,
      difficulty: 'introductory',
      status: 'published',
      prerequisiteKnowledge: [
        'Noções gerais de fonética articulatória',
        'Desenvolvimento típico da linguagem oral na primeira infância',
      ],
      totalActivities: 35,
    },
    {
      id: 'mod-alteracoes-fonologicas',
      slug: 'alteracoes-fonologicas',
      title: 'Alterações fonológicas',
      description:
        'Estudo das manifestações fonológicas, de sua identificação e de seus efeitos sobre a inteligibilidade e a comunicação.',
      order: 2,
      learningObjective:
        'Compreender as características das alterações fonológicas, reconhecer diferentes padrões de manifestação e interpretar os achados clínicos de forma contextualizada, sem estabelecer conclusões diagnósticas a partir de sinais isolados.',
      estimatedTimeMinutes: 130,
      difficulty: 'intermediate',
      status: 'published',
      prerequisiteKnowledge: [
        'Módulo 1 desta unidade: Desenvolvimento fonológico',
        'Noções gerais de fonética articulatória',
      ],
      totalActivities: 41,
    },
    {
      id: 'mod-principios-intervencao-fonologica',
      slug: 'principios-intervencao-fonologica',
      title: 'Princípios de intervenção fonológica',
      description:
        'Apresentação dos fundamentos utilizados na definição de objetivos e estratégias de intervenção fonológica.',
      order: 3,
      learningObjective:
        'Compreender os princípios que orientam a seleção de objetivos, alvos, estímulos, estratégias e formas de acompanhamento na intervenção fonológica, relacionando as decisões terapêuticas ao perfil funcional e fonológico identificado na avaliação.',
      estimatedTimeMinutes: 140,
      difficulty: 'intermediate',
      status: 'published',
      prerequisiteKnowledge: [
        'Módulo 1 desta unidade: Desenvolvimento fonológico',
        'Módulo 2 desta unidade: Alterações fonológicas',
      ],
      totalActivities: 43,
    },
    {
      id: 'mod-planejamento-terapeutico-transtornos-fonologicos',
      slug: 'planejamento-terapeutico-transtornos-fonologicos',
      title: 'Planejamento terapêutico nos transtornos fonológicos',
      description:
        'Organização do planejamento terapêutico a partir dos dados da avaliação e das necessidades comunicativas do paciente.',
      order: 4,
      learningObjective:
        'Compreender como organizar um planejamento terapêutico fonológico individualizado, relacionando os dados da avaliação às prioridades, metas, estratégias, monitoramento da evolução, generalização e critérios de reavaliação.',
      estimatedTimeMinutes: 150,
      difficulty: 'advanced',
      status: 'published',
      prerequisiteKnowledge: [
        'Módulo 1 desta unidade: Desenvolvimento fonológico',
        'Módulo 2 desta unidade: Alterações fonológicas',
        'Módulo 3 desta unidade: Princípios de intervenção fonológica',
      ],
      totalActivities: 43,
    },
  ],
}
