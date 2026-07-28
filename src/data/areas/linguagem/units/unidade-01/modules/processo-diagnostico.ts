import type { LearningModule } from '@/types/platform'

export const moduloProcessoDiagnostico: LearningModule = {
  id: 'mod-processo-diagnostico',
  slug: 'processo-diagnostico-linguagem',
  title: 'Organização do processo diagnóstico em linguagem',
  description:
    'Etapas do processo diagnóstico fonoaudiológico, distinção entre diagnóstico funcional e nosológico, e critérios de diagnóstico diferencial entre TDL, TEA, dislexia e dificuldades escolares.',
  order: 2,
  learningObjective:
    'Compreender as etapas do processo diagnóstico fonoaudiológico em linguagem, diferenciar diagnóstico funcional de nosológico, aplicar critérios de distinção entre TDL, TEA e dislexia, e reconhecer os limites do raciocínio diagnóstico.',
  prerequisiteKnowledge: [
    'Módulo 1: Avaliação das linguagens oral e escrita',
    'Desenvolvimento neuropsicomotor típico',
    'Noções de DSM-5 e CID-11',
  ],
  estimatedTimeMinutes: 210,
  difficulty: 'intermediate',
  status: 'published',

  learn: {
    summary: [
      {
        id: 'sum-1',
        text: 'O processo diagnóstico em Fonoaudiologia da Linguagem não se constitui como um ato pontual ou o resultado direto de um único instrumento. Trata-se de um raciocínio clínico progressivo, construído a partir de múltiplas camadas de informação organizadas em etapas metodológicas distintas.',
      },
      {
        id: 'sum-2',
        text: 'A anamnese fonoaudiológica é o primeiro ato clínico: mapeia marcos de desenvolvimento, antecedentes familiares e contexto de vida. O relato parental é um dado clínico válido, especialmente em crianças pequenas, mas sujeito a viés de memória dos cuidadores (Bishop et al., 2017).',
      },
      {
        id: 'sum-3',
        text: 'A avaliação compreensiva combina instrumentos formais (padronizados, com normas de referência) e procedimentos informais. A Análise de Amostra de Linguagem Espontânea (ALE) é um procedimento amplamente recomendado que fornece dados sobre complexidade morfossintática, diversidade lexical e habilidades pragmáticas.',
      },
      {
        id: 'sum-4',
        text: 'O diagnóstico funcional descreve o perfil de habilidades e dificuldades; o diagnóstico nosológico categoriza o quadro em sistemas classificatórios (DSM-5, CID-11). Ambos são necessários e complementares, mas não intercambiáveis (Zorzi & Hage, 2004).',
      },
      {
        id: 'sum-5',
        text: 'No diagnóstico diferencial entre TDL e TEA, a distinção crítica reside na dimensão pragmática e sociocomunicativa: no TDL, a pragmática está preservada; no TEA, há prejuízo nas habilidades de atenção compartilhada, apontamento protodeclarativo e reciprocidade social (Bishop et al., 2017).',
      },
      {
        id: 'sum-6',
        text: 'A diferenciação entre dislexia e dificuldades escolares exige avaliação longitudinal da Resposta à Intervenção (RTI). A ausência de progresso esperado frente a intervenção de qualidade fortalece a hipótese de transtorno específico (Snowling, 2013).',
      },
    ],
    mainIdea:
      'O diagnóstico fonoaudiológico em linguagem é uma construção clínica progressiva que integra anamnese, instrumentos formais e informais e dados contextuais, com o objetivo de descrever o perfil funcional e categorizá-lo segundo critérios precisos de diagnóstico diferencial.',
    essentialConcepts: [
      {
        id: 'conc-df',
        term: 'Diagnóstico Funcional',
        definition:
          'Descrição do perfil de habilidades e dificuldades do paciente, baseada na observação clínica integrada. Orienta diretamente o planejamento terapêutico.',
        example: 'Relatar que o paciente apresenta morfossintaxe comprometida com semântica e pragmática preservadas.',
      },
      {
        id: 'conc-dn',
        term: 'Diagnóstico Nosológico',
        definition:
          'Categorização do quadro clínico segundo sistemas classificatórios (DSM-5, CID-11).',
        example: 'Classificar o quadro como "Transtorno do Desenvolvimento da Linguagem" com base nos critérios do DSM-5.',
      },
      {
        id: 'conc-dd',
        term: 'Diagnóstico Diferencial',
        definition:
          'Processo de distinção sistemática entre quadros clínicos de apresentação semelhante com base em critérios específicos.',
        example: 'Distinguir TDL de TEA pela análise da pragmática e atenção compartilhada.',
      },
      {
        id: 'conc-ale',
        term: 'Amostra de Linguagem Espontânea (ALE)',
        definition:
          'Procedimento informal de coleta e análise do discurso natural em contexto de jogo ou narrativa.',
        example: 'Gravar e transcrever a fala de uma criança durante brincadeira de faz-de-conta para calcular EME e analisar a qualidade morfossintática.',
      },
      {
        id: 'conc-rti',
        term: 'Resposta à Intervenção (RTI)',
        definition:
          'Paradigma que avalia a responsividade do paciente a intervenções estruturadas ao longo do tempo como critério diagnóstico auxiliar.',
        example: 'Criança com dificuldade de leitura que não progride após intervenção fonológica estruturada levanta hipótese de dislexia.',
      },
    ],
    evidence: [
      {
        id: 'ev-1',
        claim:
          'A diferenciação entre TDL e TEA é fundamentalmente pragmática e sociocomunicativa.',
        source: 'Bishop et al. (2017); APA, DSM-5-TR (2022)',
        evidenceLevel: 'strong',
        clinicalImplication:
          'A avaliação pragmática por instrumentos ecologicamente válidos (ADOS-2, CCC-2) é indispensável nesses casos.',
      },
      {
        id: 'ev-2',
        claim:
          'A RTI é um critério complementar robusto para distinção entre dificuldades escolares e dislexia.',
        source: 'Snowling (2013)',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'O fonoaudiólogo deve documentar sistematicamente as respostas às intervenções.',
      },
    ],
    limitations: [
      {
        id: 'lim-1',
        description:
          'Dois indivíduos com o mesmo diagnóstico nosológico podem ter perfis funcionais radicalmente distintos. O diagnóstico categórico não substitui a descrição funcional individualizada.',
      },
      {
        id: 'lim-2',
        description:
          'Testes normatizados para populações urbanas de nível socioeconômico médio-alto podem patologizar variantes do desenvolvimento em contextos de privação cultural.',
      },
      {
        id: 'lim-3',
        description:
          'O diagnóstico de TDL é mais confiável após os 4 anos; antes disso, a variabilidade individual torna qualquer categorização mais provisória.',
      },
    ],
    simpleExplanation:
      'Diagnosticar um problema de linguagem é como investigar por que uma planta não está crescendo. Não basta ver as folhas murchas (sintoma). É preciso verificar o solo, a água, a luz e as raízes. O fonoaudiólogo faz o mesmo: investiga os sons, o vocabulário, a gramática, a comunicação social e o contexto de vida — só então nomeia o problema com precisão.',
    conceptMap: {
      centralNode: 'Processo Diagnóstico em Linguagem',
      nodes: [
        { id: 'n-central', label: 'Processo Diagnóstico', type: 'central' },
        { id: 'n-etapas', label: 'Etapas', type: 'primary' },
        { id: 'n-anam', label: 'Anamnese', type: 'secondary' },
        { id: 'n-formal', label: 'Avaliação Formal', type: 'secondary' },
        { id: 'n-informal', label: 'Avaliação Informal (ALE)', type: 'secondary' },
        { id: 'n-tipos', label: 'Tipos de Diagnóstico', type: 'primary' },
        { id: 'n-func', label: 'Funcional', type: 'secondary' },
        { id: 'n-noso', label: 'Nosológico', type: 'secondary' },
        { id: 'n-dd', label: 'Diagnóstico Diferencial', type: 'primary' },
        { id: 'n-tdl-tea', label: 'TDL vs TEA', type: 'application' },
        { id: 'n-dis-dif', label: 'Dislexia vs Dificuldade Escolar', type: 'application' },
      ],
      edges: [
        { id: 'e-1', from: 'n-central', to: 'n-etapas', label: 'organizado em' },
        { id: 'e-2', from: 'n-etapas', to: 'n-anam', label: 'etapa 1' },
        { id: 'e-3', from: 'n-etapas', to: 'n-formal', label: 'etapa 2' },
        { id: 'e-4', from: 'n-etapas', to: 'n-informal', label: 'etapa 3' },
        { id: 'e-5', from: 'n-central', to: 'n-tipos', label: 'produz' },
        { id: 'e-6', from: 'n-tipos', to: 'n-func', label: 'tipo' },
        { id: 'e-7', from: 'n-tipos', to: 'n-noso', label: 'tipo' },
        { id: 'e-8', from: 'n-central', to: 'n-dd', label: 'exige' },
        { id: 'e-9', from: 'n-dd', to: 'n-tdl-tea', label: 'eixo' },
        { id: 'e-10', from: 'n-dd', to: 'n-dis-dif', label: 'eixo' },
      ],
    },
    glossary: [
      {
        id: 'gl-dsm5',
        term: 'DSM-5-TR',
        definition: 'Manual Diagnóstico e Estatístico de Transtornos Mentais, 5ª edição revisada (APA, 2022).',
        example: 'Utilizado para codificação nosológica do TDL, TEA, dislexia e TDAH.',
      },
      {
        id: 'gl-ados2',
        term: 'ADOS-2',
        definition: 'Autism Diagnostic Observation Schedule, 2ª edição. Instrumento padronizado de observação para TEA.',
        example: 'Usado para diferenciação TDL vs TEA na avaliação sociocomunicativa.',
      },
      {
        id: 'gl-ac',
        term: 'Atenção Compartilhada',
        definition: 'Capacidade de coordenar a atenção entre um parceiro social e um objeto de interesse comum.',
        example: 'Ausência de apontamento protodeclarativo é indicador precoce investigado na suspeita de TEA.',
      },
      {
        id: 'gl-ecolalia',
        term: 'Ecolalia',
        definition: 'Repetição imediata ou diferida de falas produzidas por outras pessoas ou meios audiovisuais.',
        example: 'Ocorre em fases típicas do desenvolvimento, TDL, DI e TEA — não é marcador exclusivo de autismo.',
      },
      {
        id: 'gl-comorbidade',
        term: 'Comorbidade',
        definition: 'Co-ocorrência de dois ou mais transtornos em um mesmo indivíduo, com critérios diagnósticos independentes.',
        example: 'TDL e TDAH podem coexistir; a presença de um não exclui a investigação do outro.',
      },
    ],
  },

  apply: {
    questions: [
      {
        id: 'q-m2-1',
        stem: 'Qual é a distinção clínica mais importante entre o Transtorno do Desenvolvimento da Linguagem (TDL) e o Transtorno do Espectro Autista (TEA) no contexto fonoaudiológico?',
        alternatives: [
          { id: 'alt-a', text: 'No TDL, o vocabulário expressivo é sempre maior do que no TEA.', isCorrect: false, feedback: 'O tamanho do vocabulário varia amplamente em ambos os transtornos e não é o critério central de distinção.' },
          { id: 'alt-b', text: 'No TDL, as habilidades pragmáticas e sociocomunicativas estão preservadas; no TEA, são comprometidas.', isCorrect: true, feedback: 'Correto. A preservação da intenção comunicativa, do apontamento, da atenção compartilhada e da reciprocidade social distingue o TDL do TEA, onde essas habilidades estão estruturalmente comprometidas.' },
          { id: 'alt-c', text: 'O TDL se manifesta apenas após os 6 anos, enquanto o TEA é detectado antes dos 3 anos.', isCorrect: false, feedback: 'O TDL pode ser identificado a partir dos 3-4 anos e o TEA também pode ter apresentação tardia ou variável.' },
          { id: 'alt-d', text: 'A presença de ecolalia confirma TEA e exclui TDL.', isCorrect: false, feedback: 'A ecolalia ocorre em múltiplos contextos — TDL, TEA, DI e em fases típicas do desenvolvimento — e não é marcador diagnóstico exclusivo do TEA.' },
        ],
        correctAlternativeId: 'alt-b',
        explanation: 'O critério central de distinção é a pragmática: no TDL, o indivíduo deseja comunicar e mantém reciprocidade social, ainda que com recursos linguísticos limitados. No TEA, o comprometimento sociocomunicativo é estrutural e independente do nível linguístico.',
      },
      {
        id: 'q-m2-2',
        stem: 'Uma criança de 3 anos apresenta vocabulário abaixo do esperado para a idade. Os pais relatam baixa exposição à linguagem e ausência de histórico familiar de transtornos de linguagem. Após 6 meses de estimulação estruturada, o vocabulário se aproxima do esperado. Qual é a hipótese diagnóstica mais consistente?',
        alternatives: [
          { id: 'alt-a', text: 'Transtorno do Desenvolvimento da Linguagem (TDL)', isCorrect: false, feedback: 'O TDL é persistente e de base neurobiológica. A boa resposta à estimulação e a ausência de histórico familiar reduzem essa hipótese.' },
          { id: 'alt-b', text: 'Atraso de linguagem de base ambiental', isCorrect: true, feedback: 'Correto. A resposta favorável à estimulação, associada ao contexto de baixa exposição e ausência de histórico familiar, é compatível com atraso de base ambiental/maturacional.' },
          { id: 'alt-c', text: 'Transtorno do Espectro Autista (TEA)', isCorrect: false, feedback: 'O TEA envolve comprometimento sociocomunicativo mais amplo, que não se limita ao vocabulário e não se resolve com simples estimulação de vocabulário.' },
          { id: 'alt-d', text: 'Dislexia de desenvolvimento', isCorrect: false, feedback: 'A dislexia se manifesta no aprendizado da leitura e escrita — não é diagnosticada antes do início da alfabetização formal.' },
        ],
        correctAlternativeId: 'alt-b',
        explanation: 'A tríade — contexto ambiental empobrecido, ausência de histórico familiar e resposta positiva à estimulação — distingue o atraso de base ambiental do TDL. Este último persiste independentemente da qualidade da intervenção e do contexto.',
      },
    ],
    associations: [
      {
        id: 'assoc-m2-1',
        instruction: 'Associe cada tipo de diagnóstico ou etapa do processo diagnóstico à sua principal função clínica.',
        pairs: [
          { id: 'p1', left: 'Diagnóstico Funcional', right: 'Orienta o planejamento terapêutico individualizado' },
          { id: 'p2', left: 'Diagnóstico Nosológico', right: 'Classifica o quadro segundo DSM-5/CID-11' },
          { id: 'p3', left: 'Anamnese', right: 'Mapeia histórico de desenvolvimento e contexto de vida' },
          { id: 'p4', left: 'ALE (Amostra Espontânea)', right: 'Avalia complexidade morfossintática e pragmática em contexto natural' },
        ],
      },
    ],
    decisionExercises: [
      {
        id: 'dec-m2-1',
        situation: 'Uma criança de 4 anos chega à clínica com ausência quase total de fala expressiva. Os pais relatam que ela "entende tudo", sorri, faz contato visual, aponta para o que quer e brinca com outras crianças. A audiometria é normal. Qual seria a prioridade avaliativa?',
        options: [
          {
            id: 'opt-a',
            text: 'Diagnosticar TEA imediatamente com base na ausência de fala.',
            consequence: 'Diagnóstico prematuro sem investigação adequada.',
            explanation: 'A ausência de fala expressiva isolada não confirma TEA. As habilidades sociocomunicativas descritas (contato visual, apontamento, interação) contradizem os critérios centrais do TEA.',
            isRecommended: false,
          },
          {
            id: 'opt-b',
            text: 'Avaliar detalhadamente a compreensão, a pragmática e a expressão oral; investigar hipótese de TDL com predominância expressiva.',
            consequence: 'Hipótese diagnóstica bem fundamentada e raciocínio diferencial preservado.',
            explanation: 'A preservação de compreensão, pragmática e interação social com déficit isolado na expressão é compatível com TDL de perfil expressivo. A investigação completa evita diagnósticos equivocados.',
            isRecommended: true,
          },
          {
            id: 'opt-c',
            text: 'Encerrar a avaliação, pois a criança "entende tudo" e o problema resolverá sozinho.',
            consequence: 'Perda de janela de intervenção precoce.',
            explanation: 'A ausência de fala expressiva aos 4 anos é um indicador clínico que exige investigação rigorosa. O desenvolvimento espontâneo sem intervenção não pode ser assumido nessa faixa etária.',
            isRecommended: false,
          },
        ],
      },
    ],
    fictionalCases: [
      {
        id: 'case-m2-1',
        title: 'Diagnóstico diferencial — caso fictício',
        disclaimer: 'Este caso é inteiramente fictício e destina-se exclusivamente a fins educacionais.',
        description: 'P.R., 5 anos, foi encaminhado por queixa de "fala difícil de entender" e "pouca fala". A avaliação revela vocabulário expressivo muito reduzido, frases curtas e com erros morfossintáticos frequentes, mas boa compreensão de ordens simples e complexas. Durante a sessão de observação lúdica, P.R. mantém bom contato visual, aponta para brinquedos para mostrar ao examinador (apontamento protodeclarativo), sorri em resposta e inicia turnos comunicativos com vocalizações e gestos.',
        questions: [
          {
            id: 'q-case-m2-1',
            stem: 'Com base no perfil descrito, qual é a hipótese diagnóstica mais consistente?',
            alternatives: [
              { id: 'alt-a', text: 'Transtorno do Espectro Autista (TEA)', isCorrect: false, feedback: 'A presença de apontamento protodeclarativo, contato visual e iniciativa comunicativa contradizem os critérios centrais do TEA.' },
              { id: 'alt-b', text: 'TDL com predomínio expressivo', isCorrect: true, feedback: 'Correto. O perfil — comprometimento expressivo (vocabulário reduzido, morfossintaxe alterada) com compreensão e pragmática preservadas — é compatível com TDL de perfil expressivo.' },
              { id: 'alt-c', text: 'Atraso de linguagem por baixa exposição', isCorrect: false, feedback: 'Sem informações sobre o contexto ambiental, essa hipótese não pode ser confirmada e a persistência e o grau do déficit sugerem investigação adicional.' },
              { id: 'alt-d', text: 'Deficiência Intelectual', isCorrect: false, feedback: 'A DI envolve déficit cognitivo global, que não está evidenciado no perfil descrito — a compreensão e a pragmática estão preservadas.' },
            ],
            correctAlternativeId: 'alt-b',
            explanation: 'A dissociação entre expressão comprometida e compreensão/pragmática preservadas, com persistência além da faixa maturacional esperada, aponta para TDL com predomínio expressivo. A próxima etapa seria investigação neurológica para exclusão de causas associadas e rastreio auditivo complementar.',
          },
        ],
      },
    ],
  },

  review: {
    flashcards: [
      { id: 'fc-m2-1', front: 'Qual a diferença entre diagnóstico funcional e diagnóstico nosológico?', back: 'Diagnóstico funcional descreve o perfil de habilidades/dificuldades e orienta a terapia. Diagnóstico nosológico classifica o quadro em sistemas como DSM-5 ou CID-11. Ambos são necessários e complementares.', tags: ['diagnostico', 'funcional', 'nosologico'] },
      { id: 'fc-m2-2', front: 'Por que a ecolalia não confirma, por si só, o diagnóstico de TEA?', back: 'A ecolalia é um fenômeno linguístico que ocorre em múltiplos contextos: fases típicas do desenvolvimento, TDL, DI e TEA. Seu valor diagnóstico depende da análise qualitativa da função comunicativa.', tags: ['ecolalia', 'TEA', 'diagnostico-diferencial'] },
      { id: 'fc-m2-3', front: 'O que diferencia TDL de atraso de linguagem?', back: 'O TDL é persistente, de base neurobiológica, e não se explica por causas identificáveis (audição, DI, TEA). O atraso de linguagem está associado a fatores maturacionais ou ambientais e tende a se resolver com estimulação adequada.', tags: ['TDL', 'atraso', 'diagnostico-diferencial'] },
      { id: 'fc-m2-4', front: 'O que é a Resposta à Intervenção (RTI) e qual seu papel diagnóstico?', back: 'RTI avalia a responsividade do paciente a intervenções estruturadas ao longo do tempo. A ausência de progresso esperado frente a intervenção de qualidade fortalece a hipótese de transtorno específico (ex.: dislexia).', tags: ['RTI', 'dislexia', 'diagnostico'] },
      { id: 'fc-m2-5', front: 'Por que o critério de exclusão é central no diagnóstico de TDL?', back: 'O TDL é definido pela ausência de causa biomédica identificável (DI, perda auditiva, TEA, lesão neurológica). O diagnóstico exige descontinuar essas causas alternativas antes de ser confirmado.', tags: ['TDL', 'criterio-exclusao'] },
    ],
    finalSynthesis:
      'O processo diagnóstico fonoaudiológico em linguagem é uma construção clínica progressiva que combina anamnese, instrumentos formais e informais, e dados contextuais. O diagnóstico funcional descreve o perfil individual e orienta a terapia; o diagnóstico nosológico categoriza e comunica. O diagnóstico diferencial — especialmente TDL vs TEA e dislexia vs dificuldade escolar — exige critérios precisos, respeito à heterogeneidade intragrupo e reconhecimento da possibilidade de comorbidades.',
  },

  references: [
    {
      id: 'ref-bishop2017',
      authors: 'BISHOP, D. V. M. et al.',
      title: 'Phase 2 of CATALISE: a multinational and multidisciplinary Delphi consensus study',
      source: 'Journal of Child Psychology and Psychiatry, 58(10), 1068–1080',
      year: 2017,
      doi: '10.1111/jcpp.12721',
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-apa2022',
      authors: 'AMERICAN PSYCHIATRIC ASSOCIATION',
      title: 'Manual Diagnóstico e Estatístico de Transtornos Mentais – DSM-5-TR',
      source: 'Washington, D.C.: APA',
      year: 2022,
      usedIn: ['learn.essentialConcepts', 'apply.questions'],
    },
    {
      id: 'ref-zorzi2004',
      authors: 'ZORZI, J. L.; HAGE, S. R. V.',
      title: 'PROC — Protocolo de Observação Comportamental',
      source: 'São José dos Campos: Pulso',
      year: 2004,
      usedIn: ['learn.summary'],
    },
    {
      id: 'ref-snowling2013-m2',
      authors: 'SNOWLING, M. J.',
      title: 'Early identification and interventions for dyslexia: a contemporary view',
      source: 'Journal of Research in Special Educational Needs, 13(1), 7–14',
      year: 2013,
      doi: '10.1111/j.1471-3802.2012.01262.x',
      usedIn: ['learn.evidence'],
    },
  ],
}
