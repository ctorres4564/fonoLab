import type { LearningMethodology } from '@/types/methodology'

export const fonolabMethodology: LearningMethodology = {
  name: 'Ciclo FonoLab de Aprendizagem Clínica',
  version: '1.0.0',
  purpose:
    'Organizar a aprendizagem em linguagem pela progressão entre fundamentos, análise de evidências, raciocínio clínico, aplicação contextualizada e revisão espaçada.',
  principles: [
    'Progressão do conhecimento fundamental para a tomada de decisão clínica.',
    'Integração entre linguagem, funcionalidade, participação e contexto sociocultural.',
    'Uso explícito de evidências, com indicação de força, limitações e implicações clínicas.',
    'Avaliação formativa com feedback explicativo, e não apenas indicação de acerto ou erro.',
    'Casos fictícios e atividades aplicadas sem substituir avaliação, diagnóstico ou supervisão profissional.',
    'Revisão espaçada e recuperação ativa para consolidação de conceitos essenciais.',
  ],
  cycle: [
    {
      id: 'learn',
      title: 'Aprender',
      purpose: 'Construir modelos mentais e reconhecer conceitos, evidências e limites.',
      requiredEvidence: [
        'síntese conceitual',
        'ideia central',
        'conceitos essenciais',
        'evidências e limitações',
        'mapa conceitual',
        'glossário',
      ],
    },
    {
      id: 'apply',
      title: 'Aplicar',
      purpose: 'Transferir o conhecimento para interpretação, comparação e decisão clínica simulada.',
      requiredEvidence: [
        'questões com feedback',
        'associações conceituais',
        'decisões com consequências',
        'caso fictício identificado como pedagógico',
      ],
    },
    {
      id: 'review',
      title: 'Revisar',
      purpose: 'Consolidar a aprendizagem por recuperação ativa, síntese e revisão espaçada.',
      requiredEvidence: ['flashcards', 'síntese integradora', 'agenda de revisão'],
    },
  ],
  progression: {
    stages: [
      {
        id: 'foundation',
        title: 'Fundamentos',
        description: 'Conceitos, desenvolvimento típico, avaliação e linguagem profissional comum.',
      },
      {
        id: 'development',
        title: 'Desenvolvimento e condições clínicas',
        description: 'Perfis linguísticos, variação, transtornos e condições associadas.',
      },
      {
        id: 'clinical_reasoning',
        title: 'Raciocínio clínico',
        description: 'Integração entre avaliação, hipóteses, prioridades, intervenção e monitoramento.',
      },
      {
        id: 'integration',
        title: 'Integração ao longo da vida',
        description: 'Aplicação crítica em diferentes populações, contextos e necessidades comunicativas.',
      },
    ],
    advancementRule:
      'A sequência recomendada respeita a ordem das unidades e dos módulos; módulos avançados devem declarar conhecimentos prévios e pressupõem domínio dos fundamentos correspondentes.',
  },
  assessment: {
    diagnostic: 'Conhecimentos prévios declarados orientam a entrada e a recomendação de percurso.',
    formative: 'Questões, associações e decisões fornecem feedback imediato e explicativo.',
    integrative: 'Casos fictícios e sínteses verificam a articulação entre conceitos, evidências e conduta.',
    masteryCriterion:
      'Conclusão das atividades do módulo, desempenho mínimo definido pela plataforma e revisão posterior programada.',
  },
  qualityCriteria: [
    {
      id: 'qc-alignment',
      title: 'Alinhamento construtivo',
      description: 'Objetivo, conteúdo, atividades e revisão devem avaliar o mesmo núcleo de aprendizagem.',
      verification: 'Metadados e módulo completo coincidem; todas as três fases estão presentes.',
    },
    {
      id: 'qc-evidence',
      title: 'Rastreabilidade da evidência',
      description: 'Afirmações clínicas devem indicar fonte, força da evidência, limitação e uso.',
      verification: 'Evidências e referências possuem identificadores únicos e indicação de uso.',
    },
    {
      id: 'qc-feedback',
      title: 'Feedback formativo',
      description: 'Toda alternativa e decisão explica por que uma resposta é adequada ou inadequada.',
      verification: 'Questões têm uma resposta correta; decisões têm uma recomendação principal.',
    },
    {
      id: 'qc-safety',
      title: 'Segurança pedagógica e clínica',
      description: 'Casos simulados não podem ser apresentados como prescrição ou diagnóstico individual.',
      verification: 'Casos fictícios possuem aviso explícito e limitações clínicas são declaradas.',
    },
    {
      id: 'qc-progression',
      title: 'Progressão curricular',
      description: 'Unidades e módulos seguem ordem explícita, sem duplicidades ou saltos não documentados.',
      verification: 'O plano curricular registra unidades publicadas, em desenvolvimento e planejadas.',
    },
  ],
  curriculumPlan: [
    {
      order: 1,
      title: 'Fundamentos, avaliação e diagnóstico da linguagem',
      stage: 'foundation',
      status: 'published',
      sourceChapters: ['28', '31'],
      competency: 'Estruturar avaliação, raciocínio diagnóstico e planejamento terapêutico.',
    },
    {
      order: 2,
      title: 'Desenvolvimento fonológico e alterações de fala',
      stage: 'development',
      status: 'published',
      sourceChapters: ['capítulos correspondentes da Seção 3, a confirmar na leitura integral'],
      competency: 'Analisar desenvolvimento fonológico e planejar intervenção contextualizada.',
    },
    {
      order: 3,
      title: 'Desenvolvimento e transtornos da linguagem oral',
      stage: 'development',
      status: 'published',
      sourceChapters: ['capítulos correspondentes da Seção 3, a confirmar na leitura integral'],
      competency: 'Integrar perfis linguísticos, bases explicativas, avaliação e intervenção.',
    },
    {
      order: 4,
      title: 'Leitura, escrita e aprendizagem',
      stage: 'development',
      status: 'planned',
      sourceChapters: ['33–35'],
      competency: 'Diferenciar aquisição, dificuldades escolares e transtornos específicos.',
    },
    {
      order: 5,
      title: 'Linguagem em condições do desenvolvimento',
      stage: 'clinical_reasoning',
      status: 'planned',
      sourceChapters: ['36–38'],
      competency: 'Adaptar avaliação e intervenção a diferentes condições do desenvolvimento.',
    },
    {
      order: 6,
      title: 'Neurolinguística, afasias e comunicação alternativa',
      stage: 'integration',
      status: 'published',
      sourceChapters: ['39–41', 'conteúdo transversal de comunicação alternativa'],
      competency: 'Analisar alterações adquiridas e apoiar comunicação funcional ao longo da vida.',
    },
    {
      order: 7,
      title: 'Linguagem, subjetividade, corpo e práticas terapêuticas',
      stage: 'integration',
      status: 'planned',
      sourceChapters: ['42–44'],
      competency: 'Analisar criticamente corpo, subjetividade, grupos e práticas terapêuticas.',
    },
    {
      order: 8,
      title: 'Fluência e gagueira',
      stage: 'clinical_reasoning',
      status: 'planned',
      sourceChapters: ['45–48'],
      competency: 'Comparar modelos explicativos e fundamentar avaliação e intervenção em fluência.',
    },
  ],
}
