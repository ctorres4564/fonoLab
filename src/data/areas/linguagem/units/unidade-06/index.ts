import type { LearningUnit } from '@/types/platform'

export const unidade06: LearningUnit = {
  id: 'unit-linguagem-06',
  slug: 'neurolinguistica-comunicacao-alternativa',
  title: 'Neurolinguística, Afasias e Comunicação Alternativa',
  description:
    'Aborda o diagnóstico diferencial e reabilitação das afasias no adulto e idoso, além dos sistemas de Comunicação Aumentativa e Alternativa (CAA) para sujeitos não-verbais.',
  objective:
    'Ao concluir esta unidade, o estudante será capaz de diagnosticar os diferentes tipos de afasias, projetar condutas terapêuticas adequadas utilizando métodos melódicos e pragmáticos, planejar sistemas de comunicação alternativa para múltiplos perfis motores/cognitivos e treinar parceiros de comunicação utilizando técnicas de modelagem.',
  order: 6,
  modules: [
    {
      id: 'mod-afasias-neurolinguistica',
      slug: 'afasias-neurolinguistica-adulto',
      title: 'Afasias e Neurolinguística no Adulto e Idoso',
      description:
        'Estudo das alterações de linguagem adquiridas decorrentes de lesões cerebrais focalizadas em adultos e idosos, com foco em diagnóstico diferencial e intervenção baseada em evidências.',
      order: 1,
      learningObjective:
        'Diferenciar os perfis clínicos das principais síndromes afásicas a partir dos eixos de fluência, compreensão e repetição, reconhecendo os limites dessa classificação; compreender o processo de avaliação fonoaudiológica da afasia; e analisar criticamente abordagens de reabilitação baseadas em evidência, sem tratá-las como protocolos universais.',
      estimatedTimeMinutes: 180,
      difficulty: 'advanced',
      status: 'published',
      prerequisiteKnowledge: [
        'Neuroanatomia funcional do córtex cerebral',
        'Modelos de processamento cognitivo da linguagem',
        'Conceito de plasticidade cerebral',
      ],
      totalActivities: 43,
    },
    {
      id: 'mod-comunicacao-alternativa',
      slug: 'comunicacao-alternativa-ampliada',
      title: 'Comunicação Aumentativa e Alternativa (CAA)',
      description:
        'Fundamentos da Comunicação Aumentativa e Alternativa: recursos sem apoio e com apoio, seleção de vocabulário, métodos de acesso, avaliação centrada na participação, treinamento de parceiros de comunicação e implementação em contextos naturais, em crianças e adultos.',
      order: 2,
      learningObjective:
        'Compreender os fundamentos da Comunicação Aumentativa e Alternativa, seus recursos, indicações, princípios de avaliação, seleção e implementação, considerando funcionalidade, participação, comunicação multimodal e tomada de decisão centrada na pessoa.',
      estimatedTimeMinutes: 180,
      difficulty: 'advanced',
      status: 'published',
      prerequisiteKnowledge: [
        'Desenvolvimento típico da intenção comunicativa',
        'Noções de motricidade, acessibilidade física e comunicação multimodal',
        'Conceitos básicos de avaliação fonoaudiológica da linguagem',
      ],
      totalActivities: 43,
    },
  ],
}
