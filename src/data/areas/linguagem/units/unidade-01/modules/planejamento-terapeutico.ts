import { defineFonoLabModule } from '@/methodology/fonolab'

export const moduloPlanejamentoTerapeutico = defineFonoLabModule({
  id: 'mod-planejamento-terapeutico',
  slug: 'planejamento-terapeutico-linguagem',
  title: 'Relação entre avaliação, diagnóstico e planejamento terapêutico',
  description:
    'Como os dados da avaliação se traduzem em objetivos hierarquizados, seleção de abordagens baseadas em evidências, monitoramento do progresso, generalização e critérios de alta fonoaudiológica.',
  order: 3,
  learningObjective:
    'Compreender como os dados da avaliação alimentam o raciocínio diagnóstico e se traduzem em objetivos terapêuticos hierarquizados e mensuráveis, reconhecendo os critérios que orientam a reavaliação, a generalização de habilidades e a alta fonoaudiológica.',
  prerequisiteKnowledge: [
    'Módulo 1: Avaliação das linguagens oral e escrita',
    'Módulo 2: Organização do processo diagnóstico em linguagem',
    'Noções de raciocínio clínico baseado em evidências',
  ],
  estimatedTimeMinutes: 210,
  difficulty: 'intermediate',
  status: 'published',

  learn: {
    summary: [
      {
        id: 'sum-1',
        text: 'A relação entre avaliação, diagnóstico e planejamento terapêutico em Fonoaudiologia não é linear. Trata-se de um ciclo dinâmico: avalia-se para diagnosticar, diagnostica-se para planejar, planeja-se para intervir e intervém-se para reavaliar.',
      },
      {
        id: 'sum-2',
        text: 'Os objetivos terapêuticos organizam-se em três horizontes: (1) objetivos de longo prazo — funcionalidade comunicativa global; (2) objetivos de médio prazo — competências intermediárias necessárias; (3) objetivos de curto prazo — metas operacionais observáveis por sessão, com critério de desempenho definido (Law et al., 2004).',
      },
      {
        id: 'sum-3',
        text: 'A seleção de abordagens deve integrar evidências científicas, preferências do paciente/família e recursos disponíveis — o tripé da Prática Baseada em Evidências (ASHA, 2023). O ensino explícito de consciência fonêmica aliado à instrução fônica sistemática tem o maior nível de evidência para dislexia (National Reading Panel, 2000).',
      },
      {
        id: 'sum-4',
        text: 'Intervenções mediadas por pais/cuidadores têm impacto mensurável no vocabulário e na qualidade interacional de crianças pré-escolares, especialmente de 0 a 5 anos (Roberts & Kaiser, 2011).',
      },
      {
        id: 'sum-5',
        text: 'A generalização é o critério de eficácia mais exigente da terapia: a habilidade deve ser usada espontaneamente em contextos, parceiros e situações diferentes daqueles em que foi treinada. A dificuldade de generalização é um marcador clínico em TDL e TEA (Stokes & Baer, 1977).',
      },
      {
        id: 'sum-6',
        text: 'A alta fonoaudiológica deve ser fundamentada em: (a) atingimento dos objetivos terapêuticos; (b) generalização; (c) manutenção; (d) avaliação conjunta com família e escola. Em condições persistentes como TDL, a alta não é definitiva.',
      },
    ],
    mainIdea:
      'Avaliação, diagnóstico e planejamento formam um ciclo contínuo: os dados avaliativos alimentam o diagnóstico funcional, que orienta objetivos hierarquizados e abordagens baseadas em evidências, enquanto o monitoramento retroalimenta o ciclo até que os critérios de alta sejam plenamente atingidos.',
    essentialConcepts: [
      {
        id: 'conc-lp',
        term: 'Objetivo de Longo Prazo',
        definition: 'Resultado final esperado da intervenção em termos de participação funcional no contexto real do paciente.',
        example: 'Utilizar estruturas frasais completas com flexão verbal e nominal em interações com pares.',
      },
      {
        id: 'conc-mp',
        term: 'Objetivo de Médio Prazo',
        definition: 'Competência intermediária que conecta os objetivos de curto prazo ao resultado final.',
        example: 'Produzir frases com sujeito + verbo + objeto durante narrativas em jogo simbólico.',
      },
      {
        id: 'conc-cp',
        term: 'Objetivo de Curto Prazo',
        definition: 'Meta operacional observável e mensurável para cada sessão ou bloco de sessões, com critério de desempenho.',
        example: 'Produzir estruturas SVO com 80% de precisão em atividade de narração com figuras.',
      },
      {
        id: 'conc-gen',
        term: 'Generalização',
        definition: 'Uso espontâneo de uma habilidade adquirida em contextos, parceiros e situações diferentes dos treinados.',
        example: 'Usar estruturas morfossintáticas trabalhadas na clínica durante conversa em casa, sem pistas do terapeuta.',
      },
      {
        id: 'conc-pbe',
        term: 'Prática Baseada em Evidências (PBE)',
        definition: 'Modelo de decisão clínica que integra evidências científicas, expertise do clínico e valores do paciente/família.',
        example: 'Escolher instrução fônica sistemática para dislexia com base em meta-análises, adaptando ao perfil da criança.',
      },
    ],
    evidence: [
      {
        id: 'ev-1',
        claim: 'O ensino explícito de consciência fonêmica com instrução fônica sistemática é a abordagem com maior nível de evidência para dislexia.',
        source: 'National Reading Panel (2000); Snowling & Hulme (2011)',
        evidenceLevel: 'strong',
        clinicalImplication: 'Planos terapêuticos em dislexia devem incluir atividades estruturadas de consciência fonêmica com progressão sistemática.',
      },
      {
        id: 'ev-2',
        claim: 'Intervenções mediadas por pais produzem impacto mensurável no vocabulário e qualidade interacional de pré-escolares.',
        source: 'Roberts & Kaiser (2011)',
        evidenceLevel: 'moderate',
        clinicalImplication: 'O plano terapêutico deve incluir orientação parental como componente sistemático, especialmente em crianças de 0 a 5 anos.',
      },
    ],
    limitations: [
      {
        id: 'lim-1',
        description: 'Uma abordagem com alto nível de evidência populacional pode não ser a mais indicada para um perfil clínico específico. Evidência científica não é prescrição universal.',
      },
      {
        id: 'lim-2',
        description: 'A mensuração de progresso em habilidades pragmáticas é mais complexa que em habilidades estruturais; escores de teste raramente capturam mudanças reais na funcionalidade interacional.',
      },
      {
        id: 'lim-3',
        description: 'A eficácia de intervenções mediadas por pais depende da disponibilidade, saúde mental e letramento dos cuidadores. Programas que ignoram esses fatores subestimam resultados em contextos vulneráveis.',
      },
    ],
    simpleExplanation:
      'O ciclo clínico é como uma obra de construção. A avaliação é o levantamento do terreno, o diagnóstico é a planta, e o plano terapêutico é o cronograma de execução. Se surgir um imprevisto na obra, o engenheiro ajusta o cronograma — o fonoaudiólogo faz o mesmo ao reavaliar o paciente. A alta é o momento em que a obra está concluída e o paciente habita sua capacidade comunicativa com autonomia.',
    conceptMap: {
      centralNode: 'Ciclo Clínico Fonoaudiológico',
      nodes: [
        { id: 'n-central', label: 'Ciclo Clínico', type: 'central' },
        { id: 'n-aval', label: 'Avaliação', type: 'primary' },
        { id: 'n-diag', label: 'Diagnóstico Funcional', type: 'primary' },
        { id: 'n-plan', label: 'Planejamento Terapêutico', type: 'primary' },
        { id: 'n-obj-lp', label: 'Objetivo Longo Prazo', type: 'secondary' },
        { id: 'n-obj-mp', label: 'Objetivo Médio Prazo', type: 'secondary' },
        { id: 'n-obj-cp', label: 'Objetivo Curto Prazo', type: 'secondary' },
        { id: 'n-interv', label: 'Intervenção', type: 'primary' },
        { id: 'n-reavali', label: 'Reavaliação', type: 'secondary' },
        { id: 'n-gen', label: 'Generalização', type: 'secondary' },
        { id: 'n-alta', label: 'Alta Fonoaudiológica', type: 'application' },
      ],
      edges: [
        { id: 'e-1', from: 'n-central', to: 'n-aval', label: 'começa em' },
        { id: 'e-2', from: 'n-aval', to: 'n-diag', label: 'gera' },
        { id: 'e-3', from: 'n-diag', to: 'n-plan', label: 'orienta' },
        { id: 'e-4', from: 'n-plan', to: 'n-obj-lp', label: 'define' },
        { id: 'e-5', from: 'n-plan', to: 'n-obj-mp', label: 'define' },
        { id: 'e-6', from: 'n-plan', to: 'n-obj-cp', label: 'define' },
        { id: 'e-7', from: 'n-plan', to: 'n-interv', label: 'guia' },
        { id: 'e-8', from: 'n-interv', to: 'n-reavali', label: 'gera' },
        { id: 'e-9', from: 'n-reavali', to: 'n-aval', label: 'retroalimenta' },
        { id: 'e-10', from: 'n-interv', to: 'n-gen', label: 'monitora' },
        { id: 'e-11', from: 'n-gen', to: 'n-alta', label: 'critério para' },
      ],
    },
    glossary: [
      {
        id: 'gl-crit-desemp',
        term: 'Critério de Desempenho',
        definition: 'Parâmetro quantitativo que define quando um objetivo terapêutico foi atingido.',
        example: 'Produzir estrutura SVO corretamente em 80% das tentativas em atividade estruturada.',
      },
      {
        id: 'gl-inst-fonica',
        term: 'Instrução Fônica Sistemática',
        definition: 'Método de ensino da correspondência letra-som de forma explícita, sequenciada e progressiva.',
        example: 'Intervenção com maior evidência para crianças com dislexia ou risco fonológico.',
      },
      {
        id: 'gl-manut',
        term: 'Manutenção',
        definition: 'Persistência de uma habilidade adquirida após o término do treino ativo.',
        example: 'Verificar, dois meses após a redução de sessões, se a criança mantém as estruturas morfossintáticas trabalhadas.',
      },
      {
        id: 'gl-orient-par',
        term: 'Orientação Parental',
        definition: 'Componente da intervenção em que cuidadores recebem treino para atuar como facilitadores do desenvolvimento linguístico.',
        example: 'Ensinar pais a usar expansões e reformulações durante a rotina de leitura compartilhada.',
      },
      {
        id: 'gl-plano-alta',
        term: 'Plano de Alta',
        definition: 'Documento que descreve o perfil final, os objetivos atingidos e os indicadores que justificariam retomada do acompanhamento.',
        example: 'Entregue à família ao final do processo, orienta sobre sinais de alerta futuros.',
      },
    ],
  },

  apply: {
    questions: [
      {
        id: 'q-m3-1',
        stem: 'Uma criança com TDL atinge os objetivos de morfossintaxe no consultório, mas a professora relata que ela continua cometendo os mesmos erros na sala de aula. O que esse achado indica clinicamente?',
        alternatives: [
          { id: 'alt-a', text: 'Os objetivos foram atingidos e a criança pode receber alta.', isCorrect: false, feedback: 'Alta sem generalização é prematura. O critério de eficácia mais exigente da terapia é a generalização para contextos naturais.' },
          { id: 'alt-b', text: 'A generalização ainda não ocorreu; o plano deve incluir estratégias de transferência para o ambiente escolar.', isCorrect: true, feedback: 'Correto. A generalização exige uso espontâneo em contextos diferentes dos treinados. O plano deve incluir atividades de transferência, orientação à professora e coleta de amostras em contexto natural.' },
          { id: 'alt-c', text: 'O diagnóstico inicial estava errado e deve ser revisado.', isCorrect: false, feedback: 'A ausência de generalização não indica diagnóstico equivocado; é um fenômeno esperado que exige estratégias específicas.' },
          { id: 'alt-d', text: 'A professora deve ser desconsiderada, pois o desempenho no consultório é o único dado válido.', isCorrect: false, feedback: 'O relato da professora é um dado de validade ecológica fundamental. O consultório é um contexto artificial; o desempenho escolar é o que mais importa para a vida da criança.' },
        ],
        correctAlternativeId: 'alt-b',
        explanation: 'A generalização — uso espontâneo em contextos, parceiros e situações não treinados — é o critério de eficácia mais exigente. A ausência de generalização requer planejamento de atividades de transferência progressiva, orientação a professores e coleta de amostras de linguagem natural.',
      },
      {
        id: 'q-m3-2',
        stem: 'Qual das seguintes situações representa o critério mais adequado para indicação de alta fonoaudiológica em linguagem?',
        alternatives: [
          { id: 'alt-a', text: 'O paciente atingiu escores dentro da faixa normal nos testes padronizados.', isCorrect: false, feedback: 'Normalidade em testes não equivale a funcionalidade comunicativa real. A alta é multidimensional e inclui generalização e manutenção.' },
          { id: 'alt-b', text: 'O número máximo de sessões autorizado pelo convênio foi atingido.', isCorrect: false, feedback: 'Critérios temporais administrativos não são critérios clínicos. A alta deve ser tecnicamente fundamentada.' },
          { id: 'alt-c', text: 'Os objetivos terapêuticos foram atingidos, a generalização foi confirmada e o progresso se manteve por período adequado.', isCorrect: true, feedback: 'Correto. A tríade — atingimento de objetivos, generalização confirmada e manutenção — são os critérios clinicamente fundamentados para a alta, independentemente de escores ou tempo administrativo.' },
          { id: 'alt-d', text: 'Os pais relataram satisfação com o atendimento.', isCorrect: false, feedback: 'A satisfação dos pais é um dado de experiência do usuário, não um critério clínico de alta. Deve ser considerado, mas não é suficiente isoladamente.' },
        ],
        correctAlternativeId: 'alt-c',
        explanation: 'A alta fonoaudiológica tecnicamente fundamentada exige: (a) atingimento dos objetivos definidos; (b) generalização das habilidades em contextos naturais; (c) manutenção ao longo de um período de seguimento. Em condições persistentes como TDL, a alta não é definitiva.',
      },
    ],
    associations: [
      {
        id: 'assoc-m3-1',
        instruction: 'Associe cada nível de objetivo terapêutico ao seu exemplo correspondente.',
        pairs: [
          { id: 'p1', left: 'Objetivo de Longo Prazo', right: 'Usar linguagem funcional em interações com pares na escola' },
          { id: 'p2', left: 'Objetivo de Médio Prazo', right: 'Produzir frases com sujeito, verbo e objeto em narrativa' },
          { id: 'p3', left: 'Objetivo de Curto Prazo', right: 'Produzir estrutura SVO com 80% de acerto em tarefa de figuras' },
          { id: 'p4', left: 'Critério de Generalização', right: 'Usar estruturas treinadas na clínica em conversa espontânea em casa' },
        ],
      },
    ],
    decisionExercises: [
      {
        id: 'dec-m3-1',
        situation: 'Após 8 meses de intervenção em dislexia, uma criança de 9 anos lê pseudopalavras com 85% de precisão (objetivo atingido). A professora, porém, relata que a leitura em voz alta na sala ainda é muito lenta e com hesitações frequentes. Qual seria a conduta mais adequada?',
        options: [
          {
            id: 'opt-a',
            text: 'Dar alta imediata, pois o objetivo de precisão foi atingido.',
            consequence: 'Intervenção encerrada com déficit de fluência não tratado.',
            explanation: 'A precisão e a fluência são dimensões distintas da leitura. Atingir precisão não equivale a fluência funcional para a leitura escolar.',
            isRecommended: false,
          },
          {
            id: 'opt-b',
            text: 'Reavaliar formalmente a fluência leitora e reformular os objetivos para incluir velocidade e prosódia.',
            consequence: 'Plano terapêutico atualizado com base nos dados de reavaliação.',
            explanation: 'A reavaliação revelou nova necessidade clínica. O plano deve ser reformulado incluindo metas de fluência, como leitura repetida e técnicas de leitura assistida.',
            isRecommended: true,
          },
          {
            id: 'opt-c',
            text: 'Solicitar avaliação neurológica e suspender a terapia.',
            consequence: 'Interrupção desnecessária da intervenção fonoaudiológica.',
            explanation: 'O déficit de fluência com precisão preservada é um dado clínico esperado em dislexia e não indica necessariamente alteração neurológica nova.',
            isRecommended: false,
          },
        ],
      },
    ],
    fictionalCases: [
      {
        id: 'case-m3-1',
        title: 'Planejamento e generalização — caso fictício',
        disclaimer: 'Este caso é inteiramente fictício e destina-se exclusivamente a fins educacionais.',
        description: 'G.F., 6 anos, recebe acompanhamento fonoaudiológico por TDL com predomínio morfossintático. Após 6 meses, produz frases com sujeito, verbo e objeto com 85% de precisão nas sessões. A mãe relata que em casa ele ainda fala em "telegrama" (ex.: "quero água — mãe — agora"). Na escola, a professora descreve que ele não usa frases completas nas atividades orais.',
        questions: [
          {
            id: 'q-case-m3-1',
            stem: 'Qual é a conduta mais adequada nesse momento do acompanhamento?',
            alternatives: [
              { id: 'alt-a', text: 'Dar alta, pois o critério de 80% de precisão foi atingido no consultório.', isCorrect: false, feedback: 'A ausência de generalização para os contextos natural (casa) e escolar impede a alta. O critério de eficácia inclui o uso espontâneo fora do contexto terapêutico.' },
              { id: 'alt-b', text: 'Manter e reformular o plano para incluir estratégias de generalização: orientação à mãe, comunicação com a escola e tarefas em contexto natural.', isCorrect: true, feedback: 'Correto. A próxima fase do plano deve focalizar a transferência das habilidades treinadas para os contextos naturais (casa e escola), com orientação parental e, quando possível, parceria com a professora.' },
              { id: 'alt-c', text: 'Questionar o diagnóstico de TDL, pois o paciente regrediu.', isCorrect: false, feedback: 'Não há regressão descrita — há ausência de generalização, que é um fenômeno esperado e tratável no TDL, não uma regressão.' },
              { id: 'alt-d', text: 'Solicitar nova avaliação neuropsicológica antes de qualquer intervenção.', isCorrect: false, feedback: 'Sem sinais de regressão ou comorbidade nova, a conduta prioritária é o manejo clínico da generalização, não novo encaminhamento.' },
            ],
            correctAlternativeId: 'alt-b',
            explanation: 'O desempenho de 85% no consultório não indica alta se a generalização ainda não ocorreu. A próxima fase do plano deve priorizar estratégias de transferência: orientação parental (ex.: técnicas de expansão e modelagem), comunicação com a escola e atividades em contextos naturais variados.',
          },
        ],
      },
    ],
  },

  review: {
    flashcards: [
      { id: 'fc-m3-1', front: 'Quais são os três horizontes de objetivos terapêuticos?', back: '1. Longo prazo: funcionalidade comunicativa global.\n2. Médio prazo: competências intermediárias.\n3. Curto prazo: metas operacionais observáveis por sessão com critério de desempenho.', tags: ['objetivos', 'planejamento'] },
      { id: 'fc-m3-2', front: 'O que é generalização em terapia de linguagem?', back: 'Uso espontâneo de uma habilidade adquirida em contextos, parceiros e situações diferentes daqueles em que foi treinada. É o critério de eficácia mais exigente.', tags: ['generalizacao', 'eficacia'] },
      { id: 'fc-m3-3', front: 'Quais são os critérios clínicos para a alta fonoaudiológica em linguagem?', back: '(a) Objetivos terapêuticos atingidos; (b) Generalização confirmada em contextos naturais; (c) Manutenção ao longo de período adequado; (d) Avaliação conjunta com família e escola.', tags: ['alta', 'criterios'] },
      { id: 'fc-m3-4', front: 'O que o tripé da Prática Baseada em Evidências (PBE) integra?', back: 'Evidências científicas disponíveis + Expertise clínica do fonoaudiólogo + Valores e preferências do paciente/família.', tags: ['PBE', 'evidencias'] },
      { id: 'fc-m3-5', front: 'Por que a alta em TDL não é definitiva?', back: 'O TDL é persistente e tende a manifestar novas demandas em fases distintas do desenvolvimento (ex.: linguagem acadêmica no ensino médio). A alta deve ser acompanhada de orientação sobre indicadores de retorno.', tags: ['TDL', 'alta', 'persistencia'] },
    ],
    finalSynthesis:
      'A prática fonoaudiológica clinicamente responsável fundamenta-se na compreensão de que avaliação, diagnóstico e planejamento terapêutico são dimensões de um ciclo clínico contínuo. O diagnóstico funcional traduz a complexidade do perfil linguístico em objetivos hierarquizados e orientados pela funcionalidade real. A seleção de abordagens integra evidências, julgamento clínico e contexto do paciente. O monitoramento e a reavaliação periódica garantem a responsividade do plano. A alta é o desfecho tecnicamente fundamentado — não um evento administrativo — reconhecendo que o paciente atingiu autonomia comunicativa nos contextos que importam para a sua vida.',
  },

  references: [
    {
      id: 'ref-asha2023',
      authors: 'AMERICAN SPEECH-LANGUAGE-HEARING ASSOCIATION – ASHA',
      title: 'Evidence-Based Practice',
      source: 'Rockville, MD: ASHA',
      year: 2023,
      url: 'https://www.asha.org/research/ebp/',
      usedIn: ['learn.summary', 'apply.questions'],
    },
    {
      id: 'ref-law2004',
      authors: 'LAW, J. et al.',
      title: 'Efficacy of treatment for children with developmental speech and language delay/disorder',
      source: 'Journal of Speech, Language, and Hearing Research, 47(4), 924–943',
      year: 2004,
      doi: '10.1044/1092-4388(2004/069)',
      usedIn: ['learn.summary'],
    },
    {
      id: 'ref-nrp2000',
      authors: 'NATIONAL READING PANEL',
      title: 'Teaching children to read: an evidence-based assessment',
      source: 'Washington, D.C.: NICHD',
      year: 2000,
      usedIn: ['learn.evidence'],
    },
    {
      id: 'ref-roberts2011',
      authors: 'ROBERTS, M. Y.; KAISER, A. P.',
      title: 'The effectiveness of parent-implemented language interventions: a meta-analysis',
      source: 'American Journal of Speech-Language Pathology, 20(3), 180–199',
      year: 2011,
      doi: '10.1044/1058-0360(2011/10-0055)',
      usedIn: ['learn.evidence'],
    },
    {
      id: 'ref-stokes1977',
      authors: 'STOKES, T. F.; BAER, D. M.',
      title: 'An implicit technology of generalization',
      source: 'Journal of Applied Behavior Analysis, 10(2), 349–367',
      year: 1977,
      doi: '10.1901/jaba.1977.10-349',
      usedIn: ['learn.summary', 'apply.questions'],
    },
  ],
})
