import type { LearningModule } from '@/types/platform'

export const moduloPlanejamentoTerapeuticoTranstornosFonologicos: LearningModule = {
  id: 'mod-planejamento-terapeutico-transtornos-fonologicos',
  slug: 'planejamento-terapeutico-transtornos-fonologicos',
  title: 'Planejamento terapêutico nos transtornos fonológicos',
  description:
    'Organização do planejamento terapêutico a partir dos dados da avaliação e das necessidades comunicativas do paciente.',
  order: 4,
  learningObjective:
    'Compreender como organizar um planejamento terapêutico fonológico individualizado, relacionando os dados da avaliação às prioridades, metas, estratégias, monitoramento da evolução, generalização e critérios de reavaliação.',
  prerequisiteKnowledge: [
    'Módulo 1 desta unidade: Desenvolvimento fonológico',
    'Módulo 2 desta unidade: Alterações fonológicas',
    'Módulo 3 desta unidade: Princípios de intervenção fonológica',
  ],
  estimatedTimeMinutes: 150,
  difficulty: 'advanced',
  status: 'published',

  learn: {
    summary: [
      {
        id: 'sum-1',
        text: 'O planejamento terapêutico fonológico é o momento em que os achados da avaliação (Módulos 1 e 2) e os princípios e modelos de intervenção (Módulo 3) se transformam em um plano de ação individualizado para uma criança específica. Este módulo não define um protocolo fechado a ser seguido por qualquer caso, mas discute como organizar prioridades, metas, estratégias e formas de acompanhamento de maneira coerente com o perfil identificado na avaliação. É útil distinguir quatro elementos frequentemente confundidos na prática: a meta terapêutica (o que se pretende alcançar, geralmente descrita em termos funcionais), a estratégia (o modelo e as técnicas escolhidas para buscar essa meta, discutidos no Módulo 3), a atividade (a tarefa específica realizada em uma sessão) e o resultado (o desempenho observado, que retroalimenta o plano). Confundir esses elementos — por exemplo, tratar uma atividade como se fosse, em si, a meta — pode levar a um planejamento pouco funcional.',
      },
      {
        id: 'sum-2',
        text: 'A definição de prioridades, discutida no Módulo 3, é o primeiro passo do planejamento: a partir dela, formulam-se metas terapêuticas específicas. Uma meta terapêutica bem formulada não descreve apenas um som a ser corrigido, mas um objetivo funcional — por exemplo, "ampliar a inteligibilidade de fala em contextos escolares" — desdobrado em metas de curto, médio e longo prazo. Metas de curto prazo costumam estar ligadas a alvos fonológicos específicos e ao desempenho em nível de palavra ou sentença; metas de médio prazo, à consolidação de contrastes e à generalização entre estruturas; metas de longo prazo, ao impacto funcional e comunicativo mais amplo, retomando os conceitos discutidos no Módulo 2. A hierarquização dessas metas — o que vem primeiro, o que depende do quê — deve ser explicitada no planejamento, e não deixada implícita.',
      },
      {
        id: 'sum-3',
        text: 'Antes de iniciar a intervenção sobre um alvo específico, é recomendável estabelecer uma linha de base: o desempenho da criança naquele alvo antes de qualquer tratamento direto, geralmente obtida por meio de uma sondagem inicial com um conjunto definido de palavras-estímulo (Mota; Wiethan, 2014). A linha de base permite comparar objetivamente o desempenho antes e depois da intervenção, e não depender apenas da impressão subjetiva de melhora. Associado a ela, o critério de desempenho define o patamar de acerto que indica que um alvo foi suficientemente trabalhado, orientando a decisão de avançar para um novo alvo ou nível de complexidade. Diferentes modelos terapêuticos, como discutido no módulo anterior, adotam critérios de desempenho distintos; não há um único percentual universalmente correto para todos os alvos e todas as crianças.',
      },
      {
        id: 'sum-4',
        text: 'A seleção de alvos dentro do planejamento retoma os critérios discutidos no Módulo 3 — inventário fonético, estimulabilidade, frequência, idade de aquisição típica, facilidade posicional (Edwards, 1992) —, acrescentando uma camada adicional: a funcionalidade comunicativa do alvo para aquela criança específica, considerando seu impacto na inteligibilidade e na participação social e escolar. Um alvo tecnicamente bem justificado pelos critérios linguísticos, mas de baixa relevância funcional imediata para a criança e sua família, pode ser reconsiderado dentro da hierarquia de metas — o planejamento terapêutico não é apenas uma decisão técnica isolada, mas uma negociação informada entre o que é linguisticamente relevante e o que é funcionalmente prioritário para aquele caso.',
      },
      {
        id: 'sum-5',
        text: 'A escolha do modelo de intervenção e das estratégias específicas segue os princípios discutidos no Módulo 3: nenhum modelo deve ser escolhido apenas pelo diagnóstico ou por preferência pessoal, mas pela adequação ao perfil fonológico, motor e funcional identificado na avaliação. Dentro do planejamento, essa escolha se conecta a decisões sobre dose terapêutica — o número de tentativas de produção do alvo em uma sessão —, intensidade — a concentração de estímulos e repetições ao longo do tempo — e frequência — quantas sessões ocorrem por semana ou por período. Essas três dimensões, frequentemente tratadas em conjunto sob o termo dosagem terapêutica, influenciam os resultados da intervenção, mas a literatura não estabelece um parâmetro único aplicável a todos os modelos e perfis.',
      },
      {
        id: 'sum-6',
        text: 'Uma revisão que analisou 134 estudos de intervenção em transtornos dos sons da fala, publicados entre 1979 e 2009, encontrou que o formato mais comum envolvia atendimento individual, sessões de 30 a 60 minutos, de duas a três vezes por semana — mas a maioria dos estudos analisados era de nível de evidência mais baixo (quase-experimental ou estudo de caso), o que limita a força dessa descrição como recomendação normativa (Baker; McLeod, 2011). Um estudo controlado posterior encontrou que um cronograma de tratamento mais intensivo produziu mudanças fonológicas mais amplas em todo o sistema, em comparação a um cronograma menos intensivo (Allen, 2013); no entanto, outros estudos da área sugerem que a intensidade cumulativa total do tratamento pode ser tão ou mais relevante do que a distribuição específica das sessões ao longo da semana. Diante dessas divergências, este módulo não recomenda uma frequência ou intensidade fixa como padrão geral: a dosagem terapêutica deve ser definida a partir do perfil da criança, do modelo escolhido e dos recursos disponíveis, e ajustada conforme a resposta observada ao tratamento.',
      },
      {
        id: 'sum-7',
        text: 'A organização da sessão terapêutica — a sequência de bombardeio auditivo, estimulação, produção e generalização, discutida em detalhe nos diferentes modelos apresentados no Módulo 3 — deve ser registrada no planejamento de forma que outro profissional, ou o mesmo profissional em outro momento, consiga compreender o que foi realizado e por quê. Esse registro sistemático de desempenho não é uma formalidade burocrática: é o que permite comparar sessões ao longo do tempo, identificar padrões de resposta e fundamentar decisões futuras sobre continuidade, ajuste ou mudança de conduta.',
      },
      {
        id: 'sum-8',
        text: 'O monitoramento da resposta ao tratamento é parte constitutiva do planejamento, não uma etapa posterior a ele. Um estudo de casos brasileiro avaliou a efetividade de testes complementares — como o índice PCC-R, provas de inconsistência de fala, estimulabilidade e habilidades metafonológicas — no acompanhamento da evolução terapêutica de três crianças com transtorno fonológico, concluindo que esses instrumentos foram eficazes tanto para o diagnóstico inicial quanto para documentar mudanças ao longo do tratamento, independentemente da gravidade inicial (Wertzner; Pagan-Neves, 2012). Apesar de tratar-se de uma série de casos com amostra pequena, o achado reforça um princípio já discutido nos módulos anteriores desta unidade: nenhum índice isolado substitui a análise conjunta de múltiplas fontes de informação, mas o uso sistemático de medidas complementares enriquece o monitoramento em relação à observação apenas informal do progresso.',
      },
      {
        id: 'sum-9',
        text: 'A generalização, discutida em detalhe no Módulo 3, deve ser explicitamente antecipada no planejamento: quais tipos de generalização são esperados a partir de determinado alvo, em que prazo, e como serão verificados. Metas que não preveem verificação de generalização correm o risco de mensurar apenas o desempenho dentro da sessão clínica, sem informação sobre o impacto real na comunicação cotidiana da criança — risco já discutido no módulo anterior a respeito da participação familiar na prática domiciliar. O planejamento deve, portanto, incluir tanto os alvos quanto os contextos em que a generalização será observada e registrada.',
      },
      {
        id: 'sum-10',
        text: 'A participação da família e a articulação com a escola são dimensões do planejamento terapêutico que vão além da mera comunicação de progresso: envolvem orientar responsáveis sobre estratégias de estimulação no ambiente doméstico, esclarecer expectativas realistas sobre o tempo de tratamento e, quando pertinente, dialogar com professores sobre como apoiar a comunicação da criança em sala de aula. Envolver esses interlocutores nas decisões sobre prioridades e metas — e não apenas informá-los posteriormente — é consistente com o princípio de tomada de decisão compartilhada, cada vez mais discutido na prática clínica baseada em evidências, embora sua aplicação sistemática varie conforme o contexto e os recursos disponíveis a cada família.',
      },
      {
        id: 'sum-11',
        text: 'A reavaliação periódica — não apenas ao final do processo terapêutico, mas em pontos definidos ao longo dele — permite confirmar se o plano terapêutico permanece adequado ou se precisa ser ajustado. Isso pode envolver a redefinição de prioridades, a troca de alvo ou de modelo terapêutico, ou a intensificação ou redução da frequência das sessões, sempre com base em dados de desempenho registrados sistematicamente, e não apenas na impressão geral do terapeuta ou da família. A necessidade de reavaliar condutas ao longo do processo é particularmente relevante diante de baixa resposta ao tratamento, tema já discutido no Módulo 3 a propósito da diferenciação entre inadequação do modelo e outras variáveis explicativas, como baixa adesão familiar.',
      },
      {
        id: 'sum-12',
        text: 'A decisão entre continuar, ajustar ou encerrar uma linha de conduta terapêutica específica deve ser tomada a partir da integração dos dados de monitoramento com o julgamento clínico, e não de forma automática a partir de um único indicador. Uma resposta insatisfatória a um alvo específico pode indicar a necessidade de revisar o alvo, a estratégia, a dose ou a frequência — isoladamente ou em conjunto —, antes de se concluir que a criança "não responde ao tratamento" de forma mais ampla. Essa distinção é importante para evitar decisões precipitadas de descontinuidade que, na verdade, deveriam ser decisões de ajuste pontual do plano.',
      },
      {
        id: 'sum-13',
        text: 'Os critérios de alta fonoaudiológica também não devem se apoiar em um único indicador, como um valor específico de PCC-R ou a ausência de um processo fonológico isolado. A capacidade de generalizar as habilidades trabalhadas para a vida diária costuma ser tão ou mais relevante para essa decisão do que resultados pontuais em provas formais — reforçando a importância da observação da fala espontânea e do impacto funcional, temas já discutidos nos módulos anteriores desta unidade. Diretrizes profissionais reconhecem que os critérios de admissão e alta devem ser considerados de forma geral pelo fonoaudiólogo, servindo de base para critérios específicos de cada programa ou serviço, e não como regras fixas aplicáveis a qualquer contexto clínico (American Speech-Language-Hearing Association, 2004).',
      },
      {
        id: 'sum-14',
        text: 'Um princípio transversal a todo este módulo, e coerente com a conclusão já discutida no Módulo 3 de que nenhum modelo é universalmente superior, é o de que o planejamento terapêutico deve ser individualizado: mesmo duas crianças com perfis fonológicos superficialmente semelhantes podem exigir hierarquias de metas, doses, frequências e critérios de avanço diferentes, a depender de fatores como idade, motivação, contexto familiar, comorbidades e resposta inicial ao tratamento. Protocolos rígidos, que definem de antemão um número fixo de sessões, uma frequência universal ou um critério de alta absoluto, desconsideram essa variabilidade e podem tanto prolongar desnecessariamente o tratamento de crianças com boa resposta quanto encerrar prematuramente o de crianças que precisariam de mais tempo ou de ajustes na conduta.',
      },
      {
        id: 'sum-15',
        text: 'A tomada de decisão compartilhada — envolvendo o fonoaudiólogo, a criança (na medida do possível para sua idade) e a família nas decisões sobre prioridades, metas e ritmo do tratamento — é consistente com os princípios de individualização discutidos ao longo deste módulo. Isso não significa que decisões técnicas sejam definidas por votação informal, mas que a experiência clínica do profissional se combine com as informações e preferências da família para produzir um plano que seja, ao mesmo tempo, tecnicamente fundamentado e viável na vida real daquela criança e daquela família.',
      },
      {
        id: 'sum-16',
        text: 'Este módulo encerra a Unidade 2 retomando, de forma integrada, os fundamentos discutidos nos módulos anteriores: o conhecimento sobre desenvolvimento fonológico típico (Módulo 1) e sobre alterações fonológicas (Módulo 2) fundamenta a leitura da avaliação; os princípios e modelos de intervenção (Módulo 3) oferecem os caminhos terapêuticos possíveis; e o planejamento terapêutico, discutido aqui, organiza esses elementos em um plano individualizado, com metas hierarquizadas, critérios de desempenho definidos, monitoramento sistemático e critérios de reavaliação e de alta que nunca decorrem de um único indicador isolado. A mensagem central que atravessa toda a unidade permanece válida também aqui: decisões clínicas responsáveis resultam da integração de múltiplas fontes de informação e da individualização a cada criança, nunca da aplicação automática de uma regra única.',
      },
    ],
    mainIdea:
      'O planejamento terapêutico fonológico organiza os achados da avaliação e os princípios de intervenção em um plano individualizado — com metas hierarquizadas, critérios de desempenho, dose e frequência ajustadas ao perfil da criança, monitoramento sistemático e critérios de reavaliação e alta que nunca decorrem de um único indicador isolado.',
    essentialConcepts: [
      {
        id: 'conc-planejamento-terapeutico',
        term: 'Planejamento terapêutico',
        definition:
          'Organização sistemática das prioridades, metas, estratégias e formas de acompanhamento da intervenção fonológica, a partir dos dados da avaliação e individualizada para cada criança.',
        example:
          'Documento clínico que reúne linha de base, metas hierarquizadas, modelo escolhido e critérios de reavaliação para um caso específico.',
      },
      {
        id: 'conc-prioridade-clinica',
        term: 'Prioridade clínica',
        definition:
          'Decisão sobre o que tratar primeiro, a partir da análise conjunta de persistência, atipicidade, impacto funcional e inteligibilidade.',
        example:
          'Priorizar um processo que compromete fortemente a inteligibilidade escolar antes de um processo com menor impacto comunicativo.',
      },
      {
        id: 'conc-meta-terapeutica',
        term: 'Meta terapêutica',
        definition:
          'Objetivo que se pretende alcançar com a intervenção, formulado preferencialmente em termos funcionais e desdobrado em metas de curto, médio e longo prazo.',
        example:
          'Meta de longo prazo: ampliar a inteligibilidade de fala em contextos escolares, desdobrada em metas de curto prazo relacionadas a alvos específicos.',
      },
      {
        id: 'conc-objetivo-funcional',
        term: 'Objetivo funcional',
        definition:
          'Meta formulada em termos do impacto real na comunicação cotidiana da criança, e não apenas em termos de produção isolada de um som.',
        example:
          'Ser compreendido por colegas novos na escola, e não apenas produzir corretamente um som em tarefa estruturada de consultório.',
      },
      {
        id: 'conc-linha-base',
        term: 'Linha de base',
        definition:
          'Desempenho da criança em um alvo específico antes de qualquer intervenção direta sobre ele, usado como referência para medir progresso.',
        example:
          'Sondagem inicial com seis palavras-alvo antes de iniciar o tratamento de um som específico.',
      },
      {
        id: 'conc-criterio-desempenho',
        term: 'Critério de desempenho',
        definition:
          'Patamar de acerto que indica que um alvo foi suficientemente trabalhado, orientando o avanço para um novo alvo ou nível de complexidade.',
        example:
          'Considerar avançar para o nível de sentença após um determinado percentual de acerto em sondagem de generalização em nível de palavra.',
      },
      {
        id: 'conc-dose-terapeutica',
        term: 'Dose terapêutica',
        definition:
          'Número de tentativas de produção do alvo terapêutico realizadas em uma sessão.',
        example:
          'Um número definido de tentativas de produção do som-alvo em uma sessão, a depender do modelo terapêutico escolhido.',
      },
      {
        id: 'conc-intensidade',
        term: 'Intensidade',
        definition:
          'Concentração de estímulos, repetições e sessões ao longo do tempo, incluindo a intensidade cumulativa total do tratamento.',
        example:
          'Um cronograma mais intensivo pode produzir mudanças fonológicas mais amplas em alguns perfis, mas não de forma universal.',
      },
      {
        id: 'conc-frequencia',
        term: 'Frequência',
        definition:
          'Número de sessões terapêuticas realizadas por semana ou por período definido.',
        example:
          'Duas a três sessões semanais é um formato comumente relatado na literatura, mas não uma regra universal para todos os casos.',
      },
      {
        id: 'conc-generalizacao-planejamento',
        term: 'Generalização (no planejamento)',
        definition:
          'Antecipação, no plano terapêutico, de quais tipos de generalização são esperados a partir de um alvo, em que prazo e como serão verificados.',
        example:
          'Prever, no planejamento, uma sondagem de generalização para outras posições silábicas após o treino inicial em um único contexto.',
      },
      {
        id: 'conc-monitoramento-planejamento',
        term: 'Monitoramento (com testes complementares)',
        definition:
          'Acompanhamento sistemático da evolução terapêutica por meio de instrumentos como índices de gravidade, provas de inconsistência e habilidades metafonológicas, além da observação clínica.',
        example:
          'Reaplicar o índice PCC-R periodicamente para documentar mudanças ao longo do tratamento.',
      },
      {
        id: 'conc-resposta-tratamento-planejamento',
        term: 'Resposta ao tratamento',
        definition:
          'Forma como a criança evolui diante do plano terapêutico aplicado, usada para decidir sobre continuidade, ajuste ou mudança de conduta.',
        example:
          'Baixa resposta a um alvo específico pode indicar necessidade de ajustar o alvo, a estratégia, a dose ou a frequência, isoladamente ou em conjunto.',
      },
      {
        id: 'conc-reavaliacao-planejamento',
        term: 'Reavaliação',
        definition:
          'Retomada periódica da avaliação ao longo do processo terapêutico, para confirmar ou ajustar prioridades, metas e conduta.',
        example:
          'Reavaliar o perfil fonológico a cada bloco de sessões, não apenas ao final do tratamento.',
      },
      {
        id: 'conc-participacao',
        term: 'Participação',
        definition:
          'Impacto da dificuldade de fala, e da evolução terapêutica, sobre a vida social, escolar e comunicativa cotidiana da criança.',
        example:
          'Observar se a criança passou a se comunicar com mais confiança em situações escolares, além dos ganhos em tarefas estruturadas.',
      },
      {
        id: 'conc-alta-fonoaudiologica',
        term: 'Alta fonoaudiológica',
        definition:
          'Decisão de encerrar o acompanhamento terapêutico direto, fundamentada em múltiplos indicadores — nunca em um único índice ou processo isolado.',
        example:
          'Considerar alta após generalização consistente para a fala espontânea, e não apenas após um valor específico de PCC-R.',
      },
      {
        id: 'conc-decisao-compartilhada',
        term: 'Tomada de decisão compartilhada',
        definition:
          'Envolvimento do fonoaudiólogo, da criança e da família nas decisões sobre prioridades, metas e ritmo do tratamento.',
        example:
          'Dialogar com a família sobre expectativas realistas de tempo de tratamento ao definir as metas do plano.',
      },
      {
        id: 'conc-individualizacao',
        term: 'Individualização do plano',
        definition:
          'Princípio segundo o qual o planejamento terapêutico deve ser ajustado ao perfil específico de cada criança, e não seguir um protocolo fixo aplicável a todos os casos.',
        example:
          'Duas crianças com perfis fonológicos semelhantes podem ter planos terapêuticos diferentes, a depender de idade, motivação e contexto familiar.',
      },
    ],
    evidence: [
      {
        id: 'ev-plan-1',
        claim:
          'Uma revisão que analisou 134 estudos de intervenção em transtornos dos sons da fala (1979-2009) encontrou que o formato mais comum de atendimento era individual, em sessões de 30 a 60 minutos, de duas a três vezes por semana; a maioria dos estudos, porém, era de nível de evidência mais baixo (quase-experimental ou estudo de caso).',
        source: 'Baker; McLeod (2011)',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'Descreve um formato comumente relatado na literatura, útil como referência geral, mas não deve ser tomado como padrão obrigatório, dado o nível de evidência predominantemente baixo dos estudos que o sustentam.',
      },
      {
        id: 'ev-plan-2',
        claim:
          'Em estudo controlado, um cronograma de intervenção mais intensivo produziu mudanças fonológicas mais amplas em todo o sistema do que um cronograma menos intensivo.',
        source: 'Allen (2013)',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'Sustenta a possibilidade de maior intensidade favorecer resultados em alguns perfis, mas não deve ser generalizado como regra universal, já que outros estudos da área apontam a intensidade cumulativa total como fator possivelmente mais relevante do que a distribuição semanal específica das sessões.',
      },
      {
        id: 'ev-plan-3',
        claim:
          'Testes complementares (PCC-R, inconsistência de fala, estimulabilidade e habilidades metafonológicas) mostraram-se eficazes para documentar mudanças terapêuticas ao longo do tratamento em três crianças com transtorno fonológico, independentemente da gravidade inicial.',
        source: 'Wertzner; Pagan-Neves (2012)',
        evidenceLevel: 'emerging',
        clinicalImplication:
          'Reforça o valor do monitoramento sistemático com instrumentos complementares; achado de série de casos com amostra muito pequena (n=3), a ser interpretado com cautela quanto à generalização.',
      },
      {
        id: 'ev-plan-4',
        claim:
          'Um instrumento brasileiro de inconsistência de fala, com valores de corte por idade e sexo, pode ser reaplicado ao longo do tratamento como uma das medidas de monitoramento da resposta terapêutica.',
        source: 'Castro; Wertzner (2011)',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'Complementa a observação clínica informal, mas — como discutido no Módulo 2 desta unidade — não deve ser usado como critério isolado de decisão clínica.',
      },
      {
        id: 'ev-plan-5',
        claim:
          'Uma revisão de escopo sobre intervenção fonológica no Brasil constatou que nenhuma abordagem terapêutica emergiu como universalmente superior, dependendo a eficácia do perfil de cada criança.',
        source: 'Gabana-Silveira; Mezzomo; Mota (2025)',
        evidenceLevel: 'strong',
        clinicalImplication:
          'Reforça, também no nível do planejamento terapêutico como um todo (não apenas na escolha do modelo), a necessidade de individualização em vez de protocolos fixos.',
      },
      {
        id: 'ev-plan-6',
        claim:
          'Critérios amplamente citados para seleção de alvos terapêuticos incluem inventário fonético, estimulabilidade, contribuição para a inteligibilidade, frequência na língua, idade de aquisição típica e facilidade posicional.',
        source: 'Edwards (1992)',
        evidenceLevel: 'expert_opinion',
        clinicalImplication:
          'Esses critérios devem orientar também a formulação de metas dentro do planejamento, sempre ponderados em conjunto e não como regra fixa isolada.',
      },
      {
        id: 'ev-plan-7',
        claim:
          'Diretrizes profissionais reconhecem que critérios de admissão e alta em fonoaudiologia devem ser considerados de forma geral pelo profissional, servindo de base para critérios específicos de cada programa ou serviço, e não como regras fixas aplicáveis a qualquer contexto.',
        source: 'American Speech-Language-Hearing Association (2004)',
        evidenceLevel: 'expert_opinion',
        clinicalImplication:
          'Reforça que a decisão de alta deve integrar múltiplos indicadores e o julgamento clínico, não um índice ou processo isolado.',
      },
      {
        id: 'ev-plan-8',
        claim:
          'Estudos brasileiros descrevem três parâmetros distintos para a aquisição de um mesmo fonema — idade de produção habitual, de aquisição e de domínio —, cada um associado a um critério estatístico diferente de acerto.',
        source: 'Ceron; De Simoni; Keske-Soares (2022)',
        evidenceLevel: 'strong',
        clinicalImplication:
          'Reforça que metas terapêuticas relacionadas à idade não devem usar um único critério de "domínio" sem qualificação, e que os prazos esperados para a consolidação de um alvo variam conforme o critério de desempenho adotado no planejamento.',
      },
      {
        id: 'ev-plan-9',
        claim:
          'A generalização é considerada o critério mais importante para avaliar a eficácia de uma intervenção fonológica, envolvendo diferentes tipos que devem ser antecipados e verificados ao longo do processo terapêutico.',
        source: 'Elbert; Gierut, citados por Mota; Wiethan (2014)',
        evidenceLevel: 'expert_opinion',
        clinicalImplication:
          'O planejamento deve prever explicitamente como e quando cada tipo de generalização esperada será verificado, e não apenas registrar o desempenho dentro da sessão clínica.',
      },
    ],
    limitations: [
      {
        id: 'lim-plan-1',
        description:
          'Heterogeneidade dos perfis: crianças com quadros aparentemente semelhantes podem exigir planejamentos terapêuticos distintos, sem que um protocolo único sirva a todos os casos.',
      },
      {
        id: 'lim-plan-2',
        description:
          'Limites de amostras pequenas: vários estudos que sustentam recomendações sobre dose, frequência e monitoramento envolvem poucos participantes, limitando a força das conclusões.',
      },
      {
        id: 'lim-plan-3',
        description:
          'Diferenças entre modelos: cada modelo terapêutico (Módulo 3) pressupõe parâmetros próprios de dose, frequência e critério de avanço, dificultando comparações diretas entre eles.',
      },
      {
        id: 'lim-plan-4',
        description:
          'Variação na intensidade: a literatura diverge sobre se a distribuição semanal das sessões ou a intensidade cumulativa total do tratamento é o fator mais determinante para os resultados.',
      },
      {
        id: 'lim-plan-5',
        description:
          'Adesão: a adesão da criança e da família ao plano terapêutico, incluindo a prática domiciliar, interfere nos resultados independentemente da qualidade técnica do planejamento.',
      },
      {
        id: 'lim-plan-6',
        description:
          'Participação familiar: nem todas as famílias têm as mesmas condições de tempo, recursos ou compreensão para participar do plano da forma idealizada, o que deve ser considerado na definição de metas realistas.',
      },
      {
        id: 'lim-plan-7',
        description:
          'Diferenças de contexto: recursos disponíveis (tempo, acesso a atendimento, apoio escolar) variam entre contextos clínicos e devem ser considerados na viabilidade do plano, não apenas em sua adequação técnica.',
      },
      {
        id: 'lim-plan-8',
        description:
          'Limites de critérios normativos: índices e tabelas de referência usados no planejamento (Módulos 1 e 2) refletem amostras e critérios específicos, não substituindo a análise individualizada.',
      },
      {
        id: 'lim-plan-9',
        description:
          'Risco de metas pouco funcionais: metas formuladas apenas em termos de produção isolada de sons, sem conexão com o impacto comunicativo real, podem gerar progresso pouco significativo para a vida da criança.',
      },
      {
        id: 'lim-plan-10',
        description:
          'Necessidade de reavaliar condutas: um plano bem fundamentado no início do tratamento pode deixar de ser o mais adequado ao longo do processo, exigindo revisão periódica, não apenas execução linear.',
      },
      {
        id: 'lim-plan-11',
        description:
          'Impossibilidade de usar um único indicador para alta: nenhum índice, processo isolado ou marco pontual sozinho é suficiente para fundamentar a decisão de encerrar o acompanhamento terapêutico.',
      },
    ],
    simpleExplanation:
      'Nos módulos anteriores desta unidade, você aprendeu como a fala se desenvolve, como reconhecer quando algo foge do esperado e quais são as principais linhas de tratamento disponíveis. Este último módulo é sobre como juntar tudo isso em um plano real para uma criança real. Pense em um planejamento terapêutico como um mapa de viagem. Antes de sair, é preciso saber onde se está (a linha de base: como a criança fala agora, antes de começar), para onde se quer chegar (as metas, de preferência descritas de um jeito que realmente importa na vida da criança, como "ser entendido pelos amigos na escola") e qual caminho será seguido (o modelo de terapia escolhido, discutido no módulo anterior). Mas um mapa de viagem também precisa dizer com que frequência você vai parar para checar se está no caminho certo. É aí que entram o monitoramento e a reavaliação: de tempos em tempos, o fonoaudiólogo para, olha os dados que foi registrando e pergunta: "isso está funcionando? preciso ajustar alguma coisa?" Se a resposta for "não está funcionando muito bem", isso não significa necessariamente abandonar tudo — às vezes basta mudar um detalhe, como a quantidade de repetições em cada sessão, ou conversar melhor com a família sobre como praticar em casa. Uma dúvida muito comum é: quantas sessões por semana são necessárias, ou quando a criança pode "ter alta"? Este módulo explica por que não existe uma resposta única e fixa para essas perguntas. Pesquisas mostram formatos comuns (por exemplo, duas a três vezes por semana), mas isso não é uma regra obrigatória — cada criança, cada família e cada contexto têm suas particularidades. Da mesma forma, decidir que uma criança pode ter alta não deve depender de um único número em um teste: o que realmente importa é se ela consegue usar o que aprendeu na vida real, não só dentro do consultório. Por fim, este módulo destaca que a família e, quando possível, a própria criança devem participar das decisões sobre o tratamento — não apenas recebê-las prontas. Um bom planejamento terapêutico é, ao mesmo tempo, tecnicamente bem fundamentado e ajustado à realidade de quem vai vivê-lo no dia a dia.',
    conceptMap: {
      centralNode: 'Planejamento terapêutico',
      nodes: [
        { id: 'n-central', label: 'Planejamento terapêutico', type: 'central', description: 'Organização individualizada das prioridades, metas, estratégias e acompanhamento da intervenção fonológica.' },
        { id: 'n-avaliacao', label: 'Avaliação', type: 'primary', description: 'Base de dados dos Módulos 1 e 2 que fundamenta o planejamento.' },
        { id: 'n-prioridades', label: 'Definição de prioridades', type: 'primary', description: 'Decisão sobre o que tratar primeiro, retomada do Módulo 3.' },
        { id: 'n-metas', label: 'Metas', type: 'primary', description: 'Objetivos funcionais hierarquizados em curto, médio e longo prazo.' },
        { id: 'n-selecao-alvos', label: 'Seleção de alvos', type: 'secondary', description: 'Escolha de alvos específicos com base em critérios técnicos e funcionais.' },
        { id: 'n-estrategias', label: 'Escolha de estratégias', type: 'secondary', description: 'Modelo terapêutico e técnicas escolhidas, discutidos no Módulo 3.' },
        { id: 'n-pratica', label: 'Organização da prática', type: 'secondary', description: 'Dose, intensidade, frequência e estrutura da sessão.' },
        { id: 'n-monitoramento', label: 'Monitoramento', type: 'application', description: 'Acompanhamento sistemático com testes complementares e registro de desempenho.' },
        { id: 'n-generalizacao', label: 'Generalização', type: 'application', description: 'Verificação da extensão dos ganhos a contextos não diretamente treinados.' },
        { id: 'n-reavaliacao', label: 'Reavaliação', type: 'application', description: 'Retomada periódica da avaliação para confirmar ou ajustar o plano.' },
        { id: 'n-continuidade-alta', label: 'Continuidade ou alta', type: 'application', description: 'Decisão fundamentada em múltiplos indicadores, nunca em um único índice.' },
      ],
      edges: [
        { id: 'e-plan-1', from: 'n-central', to: 'n-avaliacao', label: 'parte de' },
        { id: 'e-plan-2', from: 'n-avaliacao', to: 'n-prioridades', label: 'fundamenta' },
        { id: 'e-plan-3', from: 'n-prioridades', to: 'n-metas', label: 'orienta' },
        { id: 'e-plan-4', from: 'n-metas', to: 'n-selecao-alvos', label: 'desdobra-se em' },
        { id: 'e-plan-5', from: 'n-selecao-alvos', to: 'n-estrategias', label: 'direciona' },
        { id: 'e-plan-6', from: 'n-estrategias', to: 'n-pratica', label: 'organiza-se em' },
        { id: 'e-plan-7', from: 'n-pratica', to: 'n-monitoramento', label: 'acompanhada por' },
        { id: 'e-plan-8', from: 'n-monitoramento', to: 'n-generalizacao', label: 'verifica' },
        { id: 'e-plan-9', from: 'n-generalizacao', to: 'n-reavaliacao', label: 'informa' },
        { id: 'e-plan-10', from: 'n-reavaliacao', to: 'n-continuidade-alta', label: 'sustenta decisão sobre' },
        { id: 'e-plan-11', from: 'n-reavaliacao', to: 'n-metas', label: 'pode redefinir' },
      ],
    },
    glossary: [
      { id: 'gl-plan-1', term: 'Planejamento terapêutico', definition: 'Organização sistemática de prioridades, metas, estratégias e acompanhamento da intervenção.', example: 'Plano individualizado elaborado após a avaliação fonológica completa.' },
      { id: 'gl-plan-2', term: 'Meta terapêutica', definition: 'Objetivo que se pretende alcançar com a intervenção, formulado em termos funcionais.', example: 'Ampliar a inteligibilidade de fala em contextos escolares.' },
      { id: 'gl-plan-3', term: 'Objetivo funcional', definition: 'Meta relacionada ao impacto real na comunicação cotidiana, não apenas à produção isolada de um som.', example: 'Ser compreendido por pessoas fora do círculo familiar.' },
      { id: 'gl-plan-4', term: 'Linha de base', definition: 'Desempenho da criança em um alvo antes de qualquer intervenção direta sobre ele.', example: 'Sondagem inicial aplicada antes do início do tratamento de um som.' },
      { id: 'gl-plan-5', term: 'Critério de desempenho', definition: 'Patamar de acerto que indica que um alvo foi suficientemente trabalhado.', example: 'Percentual de acerto definido para avançar a um novo nível de complexidade.' },
      { id: 'gl-plan-6', term: 'Dose terapêutica', definition: 'Número de tentativas de produção do alvo em uma sessão.', example: 'Quantidade de tentativas de produção do som-alvo estabelecida para uma sessão.' },
      { id: 'gl-plan-7', term: 'Intensidade', definition: 'Concentração de estímulos, repetições e sessões ao longo do tempo.', example: 'Cronograma mais concentrado de sessões em um período determinado.' },
      { id: 'gl-plan-8', term: 'Frequência', definition: 'Número de sessões terapêuticas por semana ou período definido.', example: 'Duas sessões semanais, por exemplo.' },
      { id: 'gl-plan-9', term: 'Prioridade clínica', definition: 'Decisão sobre o que tratar primeiro, a partir da análise conjunta de múltiplos achados.', example: 'Priorizar o processo com maior impacto na inteligibilidade.' },
      { id: 'gl-plan-10', term: 'Generalização', definition: 'Extensão dos ganhos terapêuticos a contextos não diretamente treinados.', example: 'Uso correto de um som treinado em situações fora da terapia.' },
      { id: 'gl-plan-11', term: 'Monitoramento', definition: 'Acompanhamento sistemático da evolução terapêutica ao longo do tempo.', example: 'Reaplicação periódica de índices de gravidade e provas complementares.' },
      { id: 'gl-plan-12', term: 'Resposta ao tratamento', definition: 'Forma como a criança evolui diante do plano terapêutico aplicado.', example: 'Evolução observada após um bloco de sessões com um modelo específico.' },
      { id: 'gl-plan-13', term: 'Reavaliação', definition: 'Retomada periódica da avaliação ao longo do processo terapêutico.', example: 'Nova coleta de amostra de fala após um determinado número de sessões.' },
      { id: 'gl-plan-14', term: 'Alta fonoaudiológica', definition: 'Decisão de encerrar o acompanhamento terapêutico direto, com base em múltiplos indicadores.', example: 'Generalização consistente para a fala espontânea, entre outros critérios.' },
      { id: 'gl-plan-15', term: 'Tomada de decisão compartilhada', definition: 'Envolvimento do profissional, da criança e da família nas decisões sobre o tratamento.', example: 'Dialogar com a família sobre prioridades e expectativas de tempo.' },
      { id: 'gl-plan-16', term: 'Individualização', definition: 'Ajuste do planejamento ao perfil específico de cada criança, sem protocolo fixo universal.', example: 'Planos terapêuticos diferentes para crianças com perfis superficialmente semelhantes.' },
      { id: 'gl-plan-17', term: 'Testes complementares', definition: 'Instrumentos adicionais (índices de gravidade, inconsistência, estimulabilidade) usados para monitorar a evolução terapêutica.', example: 'Reaplicação do índice PCC-R ao longo do tratamento.' },
      { id: 'gl-plan-18', term: 'Participação', definition: 'Impacto da dificuldade de fala e da terapia sobre a vida social, escolar e comunicativa da criança.', example: 'Maior confiança para se comunicar em situações escolares após a intervenção.' },
    ],
  },

  apply: {
    questions: [
      {
        id: 'q-plan-1',
        stem: 'Qual das alternativas diferencia corretamente meta terapêutica, estratégia, atividade e resultado?',
        alternatives: [
          { id: 'q-plan-1-a', text: 'Meta é o objetivo pretendido; estratégia é o modelo/técnicas escolhidos para alcançá-la; atividade é a tarefa específica realizada em sessão; resultado é o desempenho observado, que retroalimenta o plano.', isCorrect: true, feedback: 'Correto. Essa distinção evita tratar uma atividade pontual como se fosse, em si, a meta do tratamento.' },
          { id: 'q-plan-1-b', text: 'Os quatro termos são sinônimos e podem ser usados indistintamente no planejamento terapêutico.', isCorrect: false, feedback: 'Incorreto. São elementos distintos, com funções diferentes dentro do planejamento.' },
          { id: 'q-plan-1-c', text: 'Resultado é sempre definido antes da meta, servindo de base para escolhê-la.', isCorrect: false, feedback: 'Incorreto. A meta é definida a partir da avaliação e das prioridades; o resultado é observado depois, durante o acompanhamento.' },
          { id: 'q-plan-1-d', text: 'Atividade é sinônimo de modelo terapêutico completo.', isCorrect: false, feedback: 'Incorreto. A atividade é uma tarefa específica dentro de uma sessão, não o modelo terapêutico como um todo.' },
        ],
        correctAlternativeId: 'q-plan-1-a',
        explanation: 'Diferenciar meta, estratégia, atividade e resultado organiza o raciocínio do planejamento e evita confundir uma tarefa pontual com o objetivo mais amplo do tratamento.',
        hint: 'Pense na ordem lógica: o que se quer alcançar, como se pretende alcançar, o que se faz concretamente, e o que se observa depois.',
        relatedConceptId: 'conc-meta-terapeutica',
        referenceId: 'ref-tratado2014-cap72',
      },
      {
        id: 'q-plan-2',
        stem: 'O que é uma linha de base, no contexto do planejamento terapêutico?',
        alternatives: [
          { id: 'q-plan-2-a', text: 'O desempenho da criança em um alvo específico antes de qualquer intervenção direta sobre ele, usado como referência para medir progresso.', isCorrect: true, feedback: 'Correto. A linha de base permite comparar objetivamente o desempenho antes e depois da intervenção.' },
          { id: 'q-plan-2-b', text: 'O desempenho médio esperado para qualquer criança da mesma idade, segundo tabelas normativas.', isCorrect: false, feedback: 'Incorreto. Linha de base é individual, referente ao desempenho daquela criança específica antes do tratamento, não uma média populacional.' },
          { id: 'q-plan-2-c', text: 'O resultado obtido ao final do tratamento, usado para decidir a alta.', isCorrect: false, feedback: 'Incorreto. A linha de base é obtida antes do início da intervenção sobre o alvo, não ao final.' },
          { id: 'q-plan-2-d', text: 'A lista de todos os modelos terapêuticos disponíveis para aquele perfil de criança.', isCorrect: false, feedback: 'Incorreto. Isso não corresponde ao conceito de linha de base.' },
        ],
        correctAlternativeId: 'q-plan-2-a',
        explanation: 'A linha de base é um dado individual, coletado antes do tratamento direto de um alvo específico, essencial para avaliar objetivamente o progresso terapêutico.',
        hint: 'Pense em "ponto de partida documentado" antes de qualquer intervenção sobre aquele alvo.',
        relatedConceptId: 'conc-linha-base',
        referenceId: 'ref-tratado2014-cap72',
      },
      {
        id: 'q-plan-3',
        stem: 'Qual é a diferença entre dose, intensidade e frequência no planejamento terapêutico?',
        alternatives: [
          { id: 'q-plan-3-a', text: 'Dose é o número de tentativas de produção em uma sessão; frequência é o número de sessões por semana ou período; intensidade refere-se à concentração de estímulos e sessões ao longo do tempo, incluindo a intensidade cumulativa total.', isCorrect: true, feedback: 'Correto. Essas três dimensões, frequentemente tratadas em conjunto como "dosagem terapêutica", têm definições distintas, ainda que relacionadas.' },
          { id: 'q-plan-3-b', text: 'Os três termos são sinônimos e podem ser usados de forma intercambiável.', isCorrect: false, feedback: 'Incorreto. São conceitos relacionados, mas distintos, cada um capturando um aspecto diferente da dosagem terapêutica.' },
          { id: 'q-plan-3-c', text: 'Dose refere-se exclusivamente ao número de sessões por mês.', isCorrect: false, feedback: 'Incorreto. Isso descreveria mais a frequência do que a dose, que se refere ao número de tentativas dentro de uma sessão.' },
          { id: 'q-plan-3-d', text: 'Frequência refere-se exclusivamente à quantidade de repetições de um único som em uma sessão.', isCorrect: false, feedback: 'Incorreto. Isso descreveria mais a dose do que a frequência, que se refere ao número de sessões ao longo do tempo.' },
        ],
        correctAlternativeId: 'q-plan-3-a',
        explanation: 'Distinguir dose, intensidade e frequência permite discutir de forma mais precisa as decisões sobre "quanto" e "com que regularidade" a intervenção deve ocorrer, sem tratar essas dimensões como uma única variável indiferenciada.',
        hint: 'Pense em "quanto dentro de uma sessão", "quantas vezes por semana" e "concentração ao longo de todo o tratamento" como três perguntas diferentes.',
        relatedConceptId: 'conc-dose-terapeutica',
        referenceId: 'ref-baker2011-ebp',
      },
      {
        id: 'q-plan-4',
        stem: 'Qual das alternativas representa uma meta terapêutica formulada de forma mais funcional?',
        alternatives: [
          { id: 'q-plan-4-a', text: '"Ampliar a inteligibilidade de fala da criança em situações de conversa com colegas na escola."', isCorrect: true, feedback: 'Correto. Essa formulação conecta a meta ao impacto real na comunicação cotidiana da criança, e não apenas à produção isolada de um som.' },
          { id: 'q-plan-4-b', text: '"Fazer a criança produzir corretamente o som /s/ dez vezes seguidas em tarefa de repetição."', isCorrect: false, feedback: 'Incorreto. Essa formulação descreve mais uma atividade ou critério de desempenho pontual do que uma meta funcional mais ampla.' },
          { id: 'q-plan-4-c', text: '"Aplicar o Modelo de Ciclos durante seis meses."', isCorrect: false, feedback: 'Incorreto. Isso descreve uma estratégia/modelo terapêutico, não uma meta em si.' },
          { id: 'q-plan-4-d', text: '"Preencher a ficha de evolução a cada sessão."', isCorrect: false, feedback: 'Incorreto. Isso descreve um procedimento de registro, não uma meta terapêutica.' },
        ],
        correctAlternativeId: 'q-plan-4-a',
        explanation: 'Uma meta funcional conecta o objetivo terapêutico ao impacto real na vida comunicativa da criança, e não apenas a um desempenho isolado em tarefa estruturada.',
        hint: 'Pense em qual alternativa descreve algo que realmente importa na vida cotidiana da criança, além do consultório.',
        relatedConceptId: 'conc-objetivo-funcional',
        referenceId: 'ref-tratado2014-cap72',
      },
      {
        id: 'q-plan-5',
        stem: 'Como as metas de curto, médio e longo prazo tendem a se relacionar em um planejamento terapêutico fonológico?',
        alternatives: [
          { id: 'q-plan-5-a', text: 'Metas de curto prazo costumam estar ligadas a alvos específicos; metas de médio prazo, à consolidação e generalização entre estruturas; metas de longo prazo, ao impacto funcional e comunicativo mais amplo.', isCorrect: true, feedback: 'Correto. Essa hierarquização conecta o trabalho pontual com alvos específicos ao objetivo funcional mais amplo do tratamento.' },
          { id: 'q-plan-5-b', text: 'Não há qualquer relação entre metas de curto, médio e longo prazo; cada uma é definida de forma independente das demais.', isCorrect: false, feedback: 'Incorreto. As metas devem ser hierarquizadas e relacionadas entre si, não definidas de forma desconectada.' },
          { id: 'q-plan-5-c', text: 'Metas de longo prazo devem ser definidas apenas depois que todas as metas de curto prazo tiverem sido totalmente concluídas.', isCorrect: false, feedback: 'Incorreto. A meta de longo prazo (o objetivo funcional mais amplo) costuma orientar a definição das metas de curto e médio prazo desde o início, não apenas ser definida ao final.' },
          { id: 'q-plan-5-d', text: 'Metas de curto prazo são sempre mais importantes do que as de longo prazo.', isCorrect: false, feedback: 'Incorreto. Nenhuma das metas é, por definição, mais importante; elas se relacionam de forma hierárquica e complementar.' },
        ],
        correctAlternativeId: 'q-plan-5-a',
        explanation: 'A hierarquização de metas em diferentes prazos conecta o trabalho terapêutico pontual (curto prazo) ao objetivo funcional mais amplo (longo prazo), passando pela consolidação e generalização (médio prazo).',
        hint: 'Pense em como o trabalho com um som específico se conecta, no final das contas, ao objetivo mais amplo de comunicação da criança.',
        relatedConceptId: 'conc-meta-terapeutica',
        referenceId: 'ref-tratado2014-cap72',
      },
      {
        id: 'q-plan-6',
        stem: 'Por que não existe um único percentual de critério de desempenho universalmente correto para decidir o avanço entre alvos terapêuticos?',
        alternatives: [
          { id: 'q-plan-6-a', text: 'Porque diferentes modelos terapêuticos adotam critérios de desempenho distintos, e a escolha deve ser coerente com o modelo e o perfil da criança, não aplicada de forma genérica.', isCorrect: true, feedback: 'Correto. Os diferentes modelos discutidos no Módulo 3 desta unidade adotam critérios de avanço distintos, coerentes com sua própria lógica interna.' },
          { id: 'q-plan-6-b', text: 'Porque critérios de desempenho não têm qualquer relevância para a decisão de avançar entre alvos.', isCorrect: false, feedback: 'Incorreto. Critérios de desempenho são relevantes; o que não existe é um único percentual universal aplicável a todos os modelos e casos.' },
          { id: 'q-plan-6-c', text: 'Porque o avanço entre alvos deve ser decidido exclusivamente pela idade cronológica da criança.', isCorrect: false, feedback: 'Incorreto. A idade isolada não é o critério central de avanço entre alvos terapêuticos.' },
          { id: 'q-plan-6-d', text: 'Porque todos os modelos terapêuticos usam exatamente o mesmo critério, tornando a pergunta irrelevante.', isCorrect: false, feedback: 'Incorreto. Os módulos anteriores desta unidade já mostraram que diferentes modelos adotam critérios distintos.' },
        ],
        correctAlternativeId: 'q-plan-6-a',
        explanation: 'Cada modelo terapêutico define seus próprios critérios de desempenho, coerentes com sua lógica interna; aplicar um único percentual universal, desconsiderando o modelo e o perfil da criança, contraria os princípios discutidos ao longo desta unidade.',
        hint: 'Lembre-se dos diferentes critérios de avanço mencionados para os modelos discutidos no módulo anterior.',
        relatedConceptId: 'conc-criterio-desempenho',
        referenceId: 'ref-tratado2014-cap72',
      },
      {
        id: 'q-plan-7',
        stem: 'Qual é a contribuição do uso de testes complementares (como PCC-R, inconsistência de fala e estimulabilidade) para o monitoramento da intervenção fonológica?',
        alternatives: [
          { id: 'q-plan-7-a', text: 'Permitem documentar de forma mais objetiva as mudanças ao longo do tratamento, complementando a observação clínica informal, embora não substituam a análise conjunta de múltiplas fontes de informação.', isCorrect: true, feedback: 'Correto. Um estudo de casos brasileiro constatou que esses instrumentos foram eficazes para documentar mudanças terapêuticas ao longo do tratamento.' },
          { id: 'q-plan-7-b', text: 'Substituem completamente a necessidade de observação clínica e de amostras de fala espontânea durante o monitoramento.', isCorrect: false, feedback: 'Incorreto. Nenhum instrumento isolado substitui a análise conjunta de múltiplas fontes de informação, princípio central desta unidade.' },
          { id: 'q-plan-7-c', text: 'Servem apenas para o diagnóstico inicial, sem qualquer utilidade durante o acompanhamento terapêutico.', isCorrect: false, feedback: 'Incorreto. O estudo citado mostrou utilidade tanto para o diagnóstico quanto para o acompanhamento da evolução terapêutica.' },
          { id: 'q-plan-7-d', text: 'Devem ser aplicados apenas uma vez, no início do tratamento, sem necessidade de reaplicação.', isCorrect: false, feedback: 'Incorreto. O monitoramento sistemático pressupõe reaplicação periódica desses instrumentos ao longo do processo.' },
        ],
        correctAlternativeId: 'q-plan-7-a',
        explanation: 'Testes complementares enriquecem o monitoramento terapêutico ao fornecer dados mais objetivos sobre a evolução, mas continuam sendo parte de uma análise mais ampla, não substitutos de uma leitura clínica integrada.',
        hint: 'Pense no papel desses testes como complementares, e não substitutos, de outras fontes de informação.',
        relatedConceptId: 'conc-monitoramento-planejamento',
        referenceId: 'ref-wertzner2012-testescomplementares',
      },
      {
        id: 'q-plan-8',
        stem: 'Uma criança apresenta baixa resposta a um alvo terapêutico específico após várias sessões. Qual é a conduta mais coerente com os princípios discutidos neste módulo?',
        alternatives: [
          { id: 'q-plan-8-a', text: 'Investigar se o próprio alvo, a estratégia, a dose ou a frequência precisam de ajuste, isoladamente ou em conjunto, antes de concluir que a criança "não responde ao tratamento" de forma mais ampla.', isCorrect: true, feedback: 'Correto. Uma resposta insatisfatória a um alvo específico pode ter causas pontuais e ajustáveis, que devem ser investigadas antes de conclusões mais amplas.' },
          { id: 'q-plan-8-b', text: 'Concluir imediatamente que a criança não é capaz de se beneficiar de nenhuma forma de intervenção fonológica.', isCorrect: false, feedback: 'Incorreto. Essa é uma conclusão precipitada, que ignora a possibilidade de ajustes pontuais no plano.' },
          { id: 'q-plan-8-c', text: 'Manter exatamente a mesma conduta indefinidamente, já que mudanças no plano nunca são justificáveis.', isCorrect: false, feedback: 'Incorreto. A reavaliação e o ajuste de conduta diante de baixa resposta são partes constitutivas do planejamento terapêutico responsável.' },
          { id: 'q-plan-8-d', text: 'Interromper todo o acompanhamento terapêutico sem qualquer investigação adicional.', isCorrect: false, feedback: 'Incorreto. Interromper sem investigar as possíveis causas da baixa resposta é uma decisão precipitada.' },
        ],
        correctAlternativeId: 'q-plan-8-a',
        explanation: 'Diante de baixa resposta a um alvo específico, a conduta responsável é investigar variáveis pontuais e ajustáveis (alvo, estratégia, dose, frequência) antes de generalizar a conclusão para o processo terapêutico como um todo.',
        hint: 'Pense em quantas variáveis diferentes podem explicar uma baixa resposta a um alvo específico, antes de generalizar a conclusão.',
        relatedConceptId: 'conc-resposta-tratamento-planejamento',
        referenceId: 'ref-tratado2014-cap72',
      },
      {
        id: 'q-plan-9',
        stem: 'Por que os critérios de alta fonoaudiológica não devem se apoiar em um único indicador, como um valor específico de PCC-R?',
        alternatives: [
          { id: 'q-plan-9-a', text: 'Porque a capacidade de generalizar as habilidades trabalhadas para a vida diária costuma ser tão ou mais relevante do que resultados pontuais em provas formais, e diretrizes profissionais recomendam considerar múltiplos fatores.', isCorrect: true, feedback: 'Correto. A observação da fala espontânea e do impacto funcional são consistentemente destacadas como centrais para essa decisão.' },
          { id: 'q-plan-9-b', text: 'Porque o PCC-R nunca deve ser utilizado em nenhuma etapa do processo terapêutico.', isCorrect: false, feedback: 'Incorreto. O PCC-R pode ser um dos instrumentos utilizados no monitoramento; o problema é usá-lo como critério único e isolado para a alta.' },
          { id: 'q-plan-9-c', text: 'Porque não existem diretrizes profissionais sobre critérios de admissão e alta em fonoaudiologia.', isCorrect: false, feedback: 'Incorreto. Existem diretrizes profissionais sobre o tema, que recomendam considerar fatores gerais, não um índice único.' },
          { id: 'q-plan-9-d', text: 'Porque a decisão de alta deve depender exclusivamente da opinião da família, sem qualquer dado clínico.', isCorrect: false, feedback: 'Incorreto. A decisão deve integrar dados clínicos e a perspectiva da família, não se basear exclusivamente em nenhum dos dois isoladamente.' },
        ],
        correctAlternativeId: 'q-plan-9-a',
        explanation: 'A decisão de alta deve integrar múltiplos indicadores — desempenho em provas formais, generalização para a fala espontânea, impacto funcional — e não se apoiar em um único índice ou processo isolado.',
        hint: 'Pense no que realmente importa para saber se a criança "está bem" com sua comunicação no dia a dia, além de um número em uma prova.',
        relatedConceptId: 'conc-alta-fonoaudiologica',
        referenceId: 'ref-asha2004-discharge',
      },
      {
        id: 'q-plan-10',
        stem: 'Diante de evidências divergentes sobre a intensidade ideal de intervenção (um estudo favorecendo cronogramas mais intensivos, outros sugerindo que a intensidade cumulativa total importa mais do que a distribuição semanal), qual conduta é mais coerente com os princípios discutidos neste módulo?',
        alternatives: [
          { id: 'q-plan-10-a', text: 'Definir a dosagem terapêutica (dose, intensidade e frequência) a partir do perfil da criança, do modelo escolhido e dos recursos disponíveis, ajustando-a conforme a resposta observada ao tratamento.', isCorrect: true, feedback: 'Correto. Diante de evidências divergentes, a individualização e o monitoramento contínuo são mais defensáveis do que a adoção de um parâmetro fixo único.' },
          { id: 'q-plan-10-b', text: 'Adotar sempre o cronograma mais intensivo possível, independentemente dos recursos disponíveis ou da resposta da criança.', isCorrect: false, feedback: 'Incorreto. Isso ignoraria tanto a divergência entre os estudos quanto as limitações práticas de cada contexto.' },
          { id: 'q-plan-10-c', text: 'Adotar sempre exatamente duas sessões semanais, já que essa é a frequência mais citada na literatura.', isCorrect: false, feedback: 'Incorreto. Um formato comumente relatado não deve ser tratado como regra fixa obrigatória para todos os casos.' },
          { id: 'q-plan-10-d', text: 'Ignorar completamente a literatura sobre dose e intensidade, já que os estudos divergem entre si.', isCorrect: false, feedback: 'Incorreto. A divergência entre estudos não significa que a literatura deva ser ignorada, mas que suas conclusões devem ser aplicadas com cautela e adaptadas ao caso.' },
        ],
        correctAlternativeId: 'q-plan-10-a',
        explanation: 'Diante de evidências divergentes sobre parâmetros ideais de dosagem terapêutica, a conduta mais responsável é a individualização informada pela literatura, e não a adoção mecânica de um único parâmetro como regra fixa.',
        hint: 'Pense em como equilibrar o que a pesquisa sugere com a realidade específica de cada criança e cada contexto clínico.',
        relatedConceptId: 'conc-intensidade',
        referenceId: 'ref-allen2013-intensity',
      },
      {
        id: 'q-plan-11',
        stem: 'Qual é a conduta mais coerente com o princípio de tomada de decisão compartilhada na definição de um plano terapêutico?',
        alternatives: [
          { id: 'q-plan-11-a', text: 'Envolver a família (e, na medida do possível, a própria criança) na discussão sobre prioridades, metas e expectativas realistas de tempo, combinando essas informações com a experiência clínica do profissional.', isCorrect: true, feedback: 'Correto. A tomada de decisão compartilhada combina o julgamento técnico do profissional com as informações e preferências da família, sem que uma substitua a outra.' },
          { id: 'q-plan-11-b', text: 'Definir todo o plano terapêutico exclusivamente pelo profissional, comunicando-o à família apenas depois de finalizado, sem qualquer diálogo prévio.', isCorrect: false, feedback: 'Incorreto. Essa conduta não caracteriza tomada de decisão compartilhada, que pressupõe diálogo desde a definição de prioridades e metas.' },
          { id: 'q-plan-11-c', text: 'Deixar que a família decida sozinha todos os aspectos técnicos do plano terapêutico, incluindo a escolha do modelo de intervenção.', isCorrect: false, feedback: 'Incorreto. Decisões técnicas específicas continuam sendo de responsabilidade do profissional, informadas pelo diálogo com a família, não transferidas integralmente a ela.' },
          { id: 'q-plan-11-d', text: 'Evitar qualquer conversa com a família sobre prazos e expectativas, para não gerar ansiedade.', isCorrect: false, feedback: 'Incorreto. Diálogo transparente sobre expectativas realistas é parte da tomada de decisão compartilhada, não algo a ser evitado.' },
        ],
        correctAlternativeId: 'q-plan-11-a',
        explanation: 'A tomada de decisão compartilhada combina a experiência técnica do profissional com as informações, valores e preferências da família, sem que decisões sejam impostas unilateralmente nem transferidas integralmente à família.',
        hint: 'Pense em "combinar", não em "substituir" — nem o profissional decide tudo sozinho, nem a família decide tudo sozinha.',
        relatedConceptId: 'conc-decisao-compartilhada',
        referenceId: 'ref-tratado2014-cap72',
      },
      {
        id: 'q-plan-12',
        stem: 'Duas crianças apresentam perfis fonológicos superficialmente semelhantes (mesma idade, processos parecidos), mas uma tem forte adesão familiar à prática domiciliar e a outra não. Qual conduta é mais coerente com o princípio de individualização discutido neste módulo?',
        alternatives: [
          { id: 'q-plan-12-a', text: 'Elaborar planos terapêuticos que considerem essa diferença de contexto, ajustando expectativas, metas de curto prazo ou estratégias de envolvimento familiar de forma distinta para cada caso.', isCorrect: true, feedback: 'Correto. A individualização do planejamento deve considerar não apenas o perfil fonológico, mas também fatores contextuais como adesão familiar.' },
          { id: 'q-plan-12-b', text: 'Aplicar exatamente o mesmo plano terapêutico às duas crianças, já que seus perfis fonológicos são semelhantes.', isCorrect: false, feedback: 'Incorreto. Perfis fonológicos semelhantes não implicam que todos os fatores relevantes ao planejamento sejam idênticos, como discutido ao longo deste módulo.' },
          { id: 'q-plan-12-c', text: 'Concluir que a criança com menor adesão familiar não deve receber nenhum tipo de intervenção fonológica.', isCorrect: false, feedback: 'Incorreto. Menor adesão familiar é um fator a ser trabalhado e considerado no planejamento, não um motivo para excluir a criança da intervenção.' },
          { id: 'q-plan-12-d', text: 'Ignorar a diferença de adesão familiar, já que ela não tem qualquer relação com os resultados terapêuticos.', isCorrect: false, feedback: 'Incorreto. A adesão familiar é discutida neste módulo e no Módulo 3 como fator relevante para a generalização e os resultados terapêuticos.' },
        ],
        correctAlternativeId: 'q-plan-12-a',
        explanation: 'A individualização do planejamento terapêutico envolve considerar não apenas o perfil fonológico, mas também fatores contextuais, como a adesão familiar, que podem levar a planos diferentes mesmo para crianças com perfis fonológicos semelhantes.',
        hint: 'Pense em quais fatores, além do perfil fonológico em si, influenciam a viabilidade e o desenho de um plano terapêutico.',
        relatedConceptId: 'conc-individualizacao',
        referenceId: 'ref-gabana2025-scoping',
      },
    ],
    associations: [
      {
        id: 'assoc-plan-1',
        instruction: 'Associe cada termo à sua função no planejamento terapêutico.',
        pairs: [
          { id: 'assoc-plan-1-p1', left: 'Linha de base', right: 'Referência de desempenho antes de qualquer intervenção direta sobre o alvo' },
          { id: 'assoc-plan-1-p2', left: 'Critério de desempenho', right: 'Patamar de acerto que indica avanço para novo alvo ou nível' },
          { id: 'assoc-plan-1-p3', left: 'Dose terapêutica', right: 'Número de tentativas de produção em uma sessão' },
          { id: 'assoc-plan-1-p4', left: 'Frequência', right: 'Número de sessões por semana ou período' },
          { id: 'assoc-plan-1-p5', left: 'Monitoramento', right: 'Acompanhamento sistemático da evolução ao longo do tempo' },
          { id: 'assoc-plan-1-p6', left: 'Reavaliação', right: 'Retomada periódica da avaliação para ajustar o plano' },
          { id: 'assoc-plan-1-p7', left: 'Alta fonoaudiológica', right: 'Decisão de encerrar o acompanhamento, com base em múltiplos indicadores' },
        ],
      },
      {
        id: 'assoc-plan-2',
        instruction: 'Associe cada situação de planejamento à decisão mais coerente com os princípios discutidos neste módulo.',
        pairs: [
          { id: 'assoc-plan-2-p1', left: 'Baixa resposta a um alvo específico após várias sessões', right: 'Investigar alvo, estratégia, dose e frequência antes de concluir "não responde ao tratamento"' },
          { id: 'assoc-plan-2-p2', left: 'PCC-R dentro da meta esperada, mas sem generalização para fala espontânea', right: 'Não considerar isoladamente esse índice como suficiente para a alta' },
          { id: 'assoc-plan-2-p3', left: 'Família com baixa adesão à prática domiciliar', right: 'Ajustar estratégias de envolvimento familiar dentro do planejamento individualizado' },
          { id: 'assoc-plan-2-p4', left: 'Meta formulada apenas como "produzir o som /r/ corretamente"', right: 'Reformular como objetivo funcional ligado à comunicação cotidiana' },
          { id: 'assoc-plan-2-p5', left: 'Dúvida sobre frequência ideal de sessões', right: 'Definir a partir do perfil da criança e dos recursos disponíveis, não de uma regra fixa' },
          { id: 'assoc-plan-2-p6', left: 'Necessidade de comparar desempenho antes e depois de um alvo', right: 'Consultar a linha de base registrada no início do tratamento daquele alvo' },
        ],
      },
    ],
    decisionExercises: [
      {
        id: 'dec-plan-1',
        situation:
          'Uma criança de 6 anos está em intervenção há três meses. O terapeuta percebe que o alvo prioritário inicialmente definido tem apresentado evolução lenta, enquanto um segundo processo fonológico, não priorizado no início, parece estar se resolvendo espontaneamente. A família pergunta se seria melhor "trocar de prioridade" agora.',
        options: [
          { id: 'dec-plan-1-o1', text: 'Reavaliar formalmente o caso, revisando os dados de linha de base, o desempenho registrado ao longo dos três meses e o impacto funcional atual de cada processo, antes de decidir sobre mudar ou manter a prioridade.', consequence: 'Permite uma decisão fundamentada em dados, evitando tanto a troca precipitada de prioridade quanto a manutenção cega de um plano que talvez precise de ajuste.', explanation: 'A reavaliação periódica, com base em dados sistematicamente registrados, é a conduta consistente com os princípios de monitoramento e individualização discutidos neste módulo.', isRecommended: true },
          { id: 'dec-plan-1-o2', text: 'Trocar imediatamente a prioridade apenas com base na percepção informal de que um processo está "se resolvendo sozinho", sem revisar dados sistemáticos.', consequence: 'Pode levar a uma decisão pouco fundamentada, já que a percepção informal pode não refletir com precisão os dados de desempenho registrados.', explanation: 'Decisões sobre mudança de prioridade devem se basear em dados de monitoramento sistemático, não apenas em impressões pontuais, ainda que estas possam ser um sinal a ser investigado.', isRecommended: false },
          { id: 'dec-plan-1-o3', text: 'Manter exatamente a mesma prioridade e conduta, independentemente dos dados de evolução, para não gerar instabilidade no plano.', consequence: 'Pode prolongar desnecessariamente o trabalho sobre um alvo com evolução lenta, sem considerar dados que sugerem a necessidade de revisão.', explanation: 'Evitar qualquer ajuste, mesmo diante de dados sugestivos de mudança, contraria o princípio de reavaliação periódica discutido neste módulo.', isRecommended: false },
          { id: 'dec-plan-1-o4', text: 'Encerrar a intervenção imediatamente, já que houve mudança nos processos observados desde o início do tratamento.', consequence: 'Decisão precipitada, que não considera adequadamente os critérios discutidos para a decisão de alta, nem investiga o motivo da evolução lenta do alvo prioritário.', explanation: 'A decisão de encerrar a intervenção exige a integração de múltiplos indicadores, não apenas a mudança observada em um processo específico.', isRecommended: false },
        ],
      },
      {
        id: 'dec-plan-2',
        situation:
          'Um professor entra em contato com o fonoaudiólogo, preocupado porque um aluno em intervenção fonológica ainda é pouco compreendido em sala de aula, embora o terapeuta relate boa evolução nas sessões clínicas. O professor pergunta o que pode ser feito.',
        options: [
          { id: 'dec-plan-2-o1', text: 'Dialogar com o professor sobre o momento atual do plano terapêutico, esclarecer que a generalização para novos contextos pode ocorrer em ritmo diferente do observado na sessão clínica, e combinar formas simples de apoio em sala de aula, sempre respeitando o sigilo e os limites éticos do caso.', consequence: 'Fortalece a articulação entre terapia e escola, ajuda a calibrar expectativas realistas e pode favorecer a generalização, sem prometer resultados que ainda não ocorreram.', explanation: 'A articulação com a escola, com comunicação clara sobre expectativas e sem prometer resultados que ainda não ocorreram, é consistente com os princípios de generalização e participação discutidos neste módulo.', isRecommended: true },
          { id: 'dec-plan-2-o2', text: 'Informar ao professor que a evolução nas sessões já deveria ter resolvido completamente o problema em sala de aula, sem qualquer explicação adicional.', consequence: 'Pode gerar expectativas desalinhadas com o que de fato é esperado no processo de generalização, além de não oferecer ao professor nenhuma orientação prática.', explanation: 'Bom desempenho na sessão clínica não implica generalização automática e imediata para todos os contextos; essa relação deve ser explicada, não presumida como resolvida.', isRecommended: false },
          { id: 'dec-plan-2-o3', text: 'Ignorar o contato do professor, já que decisões sobre o plano terapêutico dizem respeito exclusivamente à família e ao terapeuta.', consequence: 'Perde uma oportunidade de fortalecer a articulação com a escola, que pode contribuir para a generalização dos ganhos terapêuticos ao ambiente escolar.', explanation: 'Embora decisões técnicas sejam do fonoaudiólogo e da família, a articulação com a escola é uma dimensão relevante do planejamento discutida neste módulo, e não deve ser descartada.', isRecommended: false },
          { id: 'dec-plan-2-o4', text: 'Encerrar a intervenção, concluindo que ela não está funcionando, apenas com base no relato do professor sobre o contexto escolar.', consequence: 'Conclusão precipitada, que ignora os dados de evolução já registrados nas sessões clínicas e não investiga adequadamente a situação antes de uma decisão tão relevante.', explanation: 'Um único relato, mesmo relevante, não é suficiente para decidir sobre a continuidade da intervenção sem integrá-lo aos demais dados de monitoramento já registrados.', isRecommended: false },
        ],
      },
    ],
    fictionalCases: [
      {
        id: 'case-plan-1',
        title: 'Caso fictício: Enzo, 5 anos e 9 meses',
        description:
          'Enzo tem 5 anos e 9 meses, cursa a pré-escola e mora com os pais e uma irmã mais velha. A avaliação fonológica completa (incluindo investigação auditiva normal e avaliação motora oral sem alterações) identificou: PCC-R de 62%, classificado como moderadamente grave; processos persistentes de redução de encontro consonantal e plosivização de fricativas; boa estimulabilidade para as fricativas quando recebe modelo direto; inconsistência de fala dentro dos valores esperados para a idade. A família relata que Enzo é compreendido em casa, mas evita falar em situações novas na escola, e a professora recentemente comentou que ele "fica quieto" em atividades de roda de conversa. Na anamnese, os pais relatam disponibilidade para participar de orientações, mas rotina bastante corrida durante a semana.',
        disclaimer:
          'Este é um caso fictício, construído exclusivamente para fins didáticos. Não representa nenhuma pessoa real e não deve ser utilizado como modelo de laudo, planejamento terapêutico definitivo ou conduta clínica prescritiva. A elaboração de um plano terapêutico real exige avaliação presencial completa, acompanhamento contínuo e julgamento clínico individualizado.',
        questions: [
          {
            id: 'case-plan-1-q1',
            stem: 'Considerando os dados descritos, qual formulação de meta terapêutica de longo prazo é mais coerente com o perfil de Enzo?',
            alternatives: [
              { id: 'case-plan-1-q1-a', text: '"Ampliar a participação comunicativa de Enzo em situações escolares, incluindo rodas de conversa, reduzindo a evitação da fala em contextos novos."', isCorrect: true, feedback: 'Correto. Essa meta conecta o trabalho fonológico ao impacto funcional relatado pela família e pela escola, e não apenas à produção isolada de sons específicos.' },
              { id: 'case-plan-1-q1-b', text: '"Eliminar completamente qualquer processo fonológico da fala de Enzo em quatro semanas."', isCorrect: false, feedback: 'Incorreto. Essa meta não é realista nem individualizada, e desconsidera os princípios discutidos neste módulo sobre a ausência de prazos fixos universais.' },
              { id: 'case-plan-1-q1-c', text: '"Aplicar o Modelo de Ciclos por seis meses, independentemente da resposta observada."', isCorrect: false, feedback: 'Incorreto. Essa formulação descreve uma estratégia com prazo fixo predeterminado, não uma meta funcional, e contraria o princípio de ajuste conforme a resposta ao tratamento.' },
              { id: 'case-plan-1-q1-d', text: '"Fazer Enzo produzir 100% dos encontros consonantais corretamente antes de qualquer outra consideração."', isCorrect: false, feedback: 'Incorreto. Essa meta ignora a hierarquização de metas e o objetivo funcional mais amplo, focando exclusivamente em um critério de produção isolado.' },
            ],
            correctAlternativeId: 'case-plan-1-q1-a',
            explanation: 'Uma meta de longo prazo bem formulada conecta o trabalho fonológico ao impacto funcional relatado — neste caso, a evitação comunicativa em contextos escolares —, e não apenas à produção isolada de sons específicos.',
            hint: 'Releia os dados sobre o comportamento de Enzo na escola e pense em qual meta se conecta diretamente a esse achado.',
            relatedConceptId: 'conc-objetivo-funcional',
            referenceId: 'ref-tratado2014-cap72',
          },
          {
            id: 'case-plan-1-q2',
            stem: 'Diante da rotina familiar "bastante corrida durante a semana" relatada na anamnese, qual conduta de planejamento é mais coerente com os princípios discutidos neste módulo?',
            alternatives: [
              { id: 'case-plan-1-q2-a', text: 'Dialogar com a família sobre formas viáveis e realistas de envolvimento na prática domiciliar dentro da rotina relatada, ajustando expectativas em vez de presumir que a prática ideal ocorrerá sem apoio adicional.', isCorrect: true, feedback: 'Correto. Reconhecer as limitações reais de contexto da família e ajustar o plano de acordo é coerente com os princípios de individualização e tomada de decisão compartilhada.' },
              { id: 'case-plan-1-q2-b', text: 'Presumir que a família seguirá integralmente todas as orientações domiciliares, sem qualquer ajuste ou diálogo sobre a rotina relatada.', isCorrect: false, feedback: 'Incorreto. Ignorar a informação relatada sobre a rotina familiar pode gerar expectativas irreais e prejudicar a generalização, tema discutido neste módulo e no Módulo 3.' },
              { id: 'case-plan-1-q2-c', text: 'Concluir que, por causa da rotina corrida, a família não deve ser envolvida em nenhum aspecto do planejamento.', isCorrect: false, feedback: 'Incorreto. A resposta adequada não é excluir a família do planejamento, mas ajustar as expectativas e estratégias de envolvimento à realidade relatada.' },
              { id: 'case-plan-1-q2-d', text: 'Aumentar imediatamente a frequência das sessões clínicas para compensar a falta de prática domiciliar, sem qualquer conversa prévia com a família sobre viabilidade.', isCorrect: false, feedback: 'Incorreto. Alterar a frequência sem dialogar sobre a viabilidade também para a família pode não resolver a questão e ignora o princípio de decisão compartilhada.' },
            ],
            correctAlternativeId: 'case-plan-1-q2-a',
            explanation: 'Diante de um contexto familiar com limitações reais de tempo, a conduta mais coerente com os princípios deste módulo é dialogar e ajustar expectativas e estratégias de forma realista, e não presumir adesão integral nem excluir a família do processo.',
            hint: 'Pense no princípio de tomada de decisão compartilhada e de individualização diante de um contexto familiar específico.',
            relatedConceptId: 'conc-decisao-compartilhada',
            referenceId: 'ref-tratado2014-cap72',
          },
        ],
      },
    ],
  },

  review: {
    flashcards: [
      { id: 'fc-plan-1', front: 'Qual a diferença entre meta, estratégia, atividade e resultado no planejamento terapêutico?', back: 'Meta é o objetivo pretendido; estratégia é o modelo/técnicas escolhidos; atividade é a tarefa específica em sessão; resultado é o desempenho observado, que retroalimenta o plano.', tags: ['meta-estrategia-atividade-resultado'] },
      { id: 'fc-plan-2', front: 'O que é linha de base?', back: 'Desempenho da criança em um alvo específico antes de qualquer intervenção direta sobre ele, usado como referência para medir progresso.', tags: ['linha-de-base'] },
      { id: 'fc-plan-3', front: 'O que é critério de desempenho?', back: 'Patamar de acerto que indica que um alvo foi suficientemente trabalhado, orientando o avanço para um novo alvo ou nível.', tags: ['criterio-desempenho'] },
      { id: 'fc-plan-4', front: 'O que é dose terapêutica?', back: 'Número de tentativas de produção do alvo terapêutico realizadas em uma sessão.', tags: ['dose'] },
      { id: 'fc-plan-5', front: 'O que é intensidade, no contexto da dosagem terapêutica?', back: 'Concentração de estímulos, repetições e sessões ao longo do tempo, incluindo a intensidade cumulativa total do tratamento.', tags: ['intensidade'] },
      { id: 'fc-plan-6', front: 'O que é frequência terapêutica?', back: 'Número de sessões realizadas por semana ou por período definido.', tags: ['frequencia'] },
      { id: 'fc-plan-7', front: 'Segundo revisão que analisou 134 estudos, qual formato de atendimento é mais comumente relatado na literatura?', back: 'Atendimento individual, sessões de 30 a 60 minutos, de duas a três vezes por semana — mas a maioria dos estudos era de nível de evidência mais baixo.', tags: ['evidencia', 'frequencia'] },
      { id: 'fc-plan-8', front: 'O que um estudo controlado (Allen, 2013) encontrou sobre intensidade da intervenção?', back: 'Um cronograma mais intensivo produziu mudanças fonológicas mais amplas em todo o sistema, em comparação a um cronograma menos intensivo.', tags: ['intensidade', 'evidencia'] },
      { id: 'fc-plan-9', front: 'Por que uma meta terapêutica formulada apenas como "produzir corretamente o som X" é considerada pouco funcional?', back: 'Porque não conecta o trabalho fonológico ao impacto real na comunicação cotidiana da criança.', tags: ['objetivo-funcional'] },
      { id: 'fc-plan-10', front: 'Como se relacionam metas de curto, médio e longo prazo?', back: 'Curto prazo: alvos específicos; médio prazo: consolidação e generalização; longo prazo: impacto funcional e comunicativo mais amplo.', tags: ['meta-terapeutica'] },
      { id: 'fc-plan-11', front: 'Que testes complementares mostraram-se eficazes para monitorar a evolução terapêutica em estudo brasileiro?', back: 'PCC-R, provas de inconsistência de fala, estimulabilidade e habilidades metafonológicas.', tags: ['monitoramento', 'testes-complementares'] },
      { id: 'fc-plan-12', front: 'Diante de baixa resposta a um alvo específico, o que deve ser investigado antes de trocar de conduta?', back: 'Se o alvo, a estratégia, a dose ou a frequência precisam de ajuste, isoladamente ou em conjunto, antes de concluir que a criança não responde ao tratamento.', tags: ['resposta-tratamento'] },
      { id: 'fc-plan-13', front: 'Por que a reavaliação periódica é importante ao longo do processo terapêutico?', back: 'Porque um plano adequado no início pode deixar de ser o mais indicado ao longo do tempo, exigindo confirmação ou ajuste de prioridades, metas e conduta.', tags: ['reavaliacao'] },
      { id: 'fc-plan-14', front: 'Por que os critérios de alta não devem se basear em um único índice, como o PCC-R?', back: 'Porque a capacidade de generalizar habilidades para a vida diária costuma ser tão ou mais relevante do que resultados pontuais em provas formais.', tags: ['alta-fonoaudiologica'] },
      { id: 'fc-plan-15', front: 'O que dizem diretrizes profissionais (ASHA, 2004) sobre critérios de admissão e alta?', back: 'Devem ser considerados de forma geral pelo profissional, servindo de base para critérios específicos de cada serviço, e não como regras fixas universais.', tags: ['alta-fonoaudiologica', 'diretrizes'] },
      { id: 'fc-plan-16', front: 'O que é tomada de decisão compartilhada no planejamento terapêutico?', back: 'Envolvimento do fonoaudiólogo, da criança e da família nas decisões sobre prioridades, metas e ritmo do tratamento.', tags: ['decisao-compartilhada'] },
      { id: 'fc-plan-17', front: 'Por que a individualização é um princípio central do planejamento terapêutico?', back: 'Porque mesmo crianças com perfis fonológicos semelhantes podem exigir planos diferentes, a depender de idade, motivação, contexto familiar e resposta ao tratamento.', tags: ['individualizacao'] },
      { id: 'fc-plan-18', front: 'Por que protocolos terapêuticos rígidos (frequência fixa, número de sessões predeterminado) são desaconselhados?', back: 'Porque desconsideram a variabilidade entre crianças, podendo prolongar tratamentos desnecessariamente ou encerrá-los prematuramente.', tags: ['individualizacao', 'protocolo-rigido'] },
      { id: 'fc-plan-19', front: 'Qual é o papel da articulação com a escola no planejamento terapêutico?', back: 'Apoiar a generalização dos ganhos terapêuticos ao ambiente escolar, por meio de diálogo com professores sobre estratégias de apoio à comunicação.', tags: ['escola', 'generalizacao'] },
      { id: 'fc-plan-20', front: 'O que deve ser antecipado no planejamento em relação à generalização?', back: 'Quais tipos de generalização são esperados a partir de um alvo, em que prazo, e como serão verificados.', tags: ['generalizacao-planejamento'] },
      { id: 'fc-plan-21', front: 'Qual é o papel da participação familiar na prática domiciliar?', back: 'Favorecer a generalização e a manutenção dos ganhos terapêuticos, sendo parte constitutiva da maioria dos modelos discutidos na unidade.', tags: ['participacao-familiar'] },
      { id: 'fc-plan-22', front: 'Segundo Ceron, De Simoni e Keske-Soares (2022), por que metas relacionadas à idade não devem usar um único critério de "domínio"?', back: 'Porque existem três parâmetros distintos (produção habitual, aquisição e domínio), cada um associado a um critério estatístico diferente de acerto.', tags: ['meta-terapeutica', 'evidencia'] },
      { id: 'fc-plan-23', front: 'O que caracteriza uma série de casos como fonte de evidência, e por que exige cautela?', back: 'Envolve poucos participantes (como no estudo de Wertzner e Pagan-Neves, 2012, com n=3); os achados são relevantes, mas não devem ser generalizados sem cautela.', tags: ['evidencia', 'limitacoes'] },
      { id: 'fc-plan-24', front: 'Qual é o princípio central deste módulo em relação a protocolos terapêuticos?', back: 'Nenhum protocolo fixo (frequência universal, número de sessões predeterminado, critério de alta absoluto) substitui a individualização e o julgamento clínico.', tags: ['principio-central'] },
      { id: 'fc-plan-25', front: 'Qual é a relação entre este módulo e os Módulos 1, 2 e 3 desta unidade?', back: 'O planejamento terapêutico organiza, em um plano individualizado, os fundamentos de desenvolvimento (Módulo 1), alteração (Módulo 2) e intervenção (Módulo 3) discutidos anteriormente.', tags: ['integracao-unidade'] },
      { id: 'fc-plan-26', front: 'Por que um plano terapêutico deve ser registrado de forma sistemática, e não apenas mantido na memória do terapeuta?', back: 'Porque o registro permite comparar sessões ao longo do tempo, identificar padrões de resposta e fundamentar decisões futuras sobre continuidade, ajuste ou mudança de conduta.', tags: ['registro', 'monitoramento'] },
    ],
    finalSynthesis:
      'O planejamento terapêutico fonológico organiza, em um plano individualizado, os fundamentos discutidos ao longo desta unidade: o conhecimento sobre desenvolvimento e alterações fonológicas orienta a leitura da avaliação; os princípios e modelos de intervenção oferecem os caminhos terapêuticos possíveis; e o planejamento propriamente dito articula prioridades, metas hierarquizadas em curto, médio e longo prazo, critérios de desempenho, dose, intensidade e frequência ajustadas ao perfil da criança. Uma meta bem formulada conecta o trabalho fonológico ao impacto funcional real na comunicação cotidiana, e não apenas à produção isolada de sons. A literatura descreve formatos comumente relatados de atendimento e evidências sobre intensidade, mas nenhum parâmetro deve ser tratado como regra fixa universal, dada a divergência entre estudos e a heterogeneidade dos perfis. O monitoramento sistemático — com testes complementares e registro de desempenho — e a reavaliação periódica sustentam decisões sobre continuidade, ajuste de conduta ou alta, sempre a partir da integração de múltiplos indicadores, nunca de um único índice isolado. A participação da família e a articulação com a escola favorecem a generalização dos ganhos para a vida real da criança, e a tomada de decisão compartilhada combina o julgamento clínico do profissional com as informações e expectativas da família. O fio condutor de toda a Unidade 2 permanece válido também aqui: decisões clínicas responsáveis resultam da individualização a cada criança e da integração de múltiplas fontes de informação, nunca da aplicação automática de uma regra ou protocolo único.',
  },

  references: [
    {
      id: 'ref-tratado2014-cap72',
      authors: 'MOTA, Helena Bolli; WIETHAN, Fernanda Marafiga.',
      title: 'Fonologia – Intervenção',
      source: 'In: MARCHESAN, Irene Queiroz; SILVA, Hilton Justino da; TOMÉ, Marileda Cattelan (org.). Tratado das Especialidades em Fonoaudiologia. São Paulo: Guanabara Koogan, 2014. cap. 72.',
      year: 2014,
      usedIn: ['learn.summary', 'learn.essentialConcepts', 'learn.evidence', 'apply.questions', 'apply.fictionalCases'],
    },
    {
      id: 'ref-tratado2014-cap71',
      authors: 'WERTZNER, Haydée Fiszbein; PAGAN-NEVES, Luciana de Oliveira.',
      title: 'Avaliação e Diagnóstico do Distúrbio Fonológico',
      source: 'In: MARCHESAN, Irene Queiroz; SILVA, Hilton Justino da; TOMÉ, Marileda Cattelan (org.). Tratado das Especialidades em Fonoaudiologia. São Paulo: Guanabara Koogan, 2014. cap. 71.',
      year: 2014,
      usedIn: ['learn.summary'],
    },
    {
      id: 'ref-wertzner2012-testescomplementares',
      authors: 'WERTZNER, Haydée Fiszbein; PAGAN-NEVES, Luciana de Oliveira.',
      title: 'A Efetividade dos Testes Complementares no Acompanhamento da Intervenção Terapêutica no Transtorno Fonológico',
      source: 'Revista da Sociedade Brasileira de Fonoaudiologia, v. 17, n. 4, 2012. Estudo de casos (n=3).',
      year: 2012,
      doi: '10.1590/S1516-80342012000400018',
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-baker2011-ebp',
      authors: 'BAKER, Elise; MCLEOD, Sharynne.',
      title: 'Evidence-Based Practice for Children With Speech Sound Disorders: Part 1 Narrative Review',
      source: 'Language, Speech, and Hearing Services in Schools, v. 42, p. 102-139, 2011. Revisão de 134 estudos (1979-2009).',
      year: 2011,
      doi: '10.1044/0161-1461(2010/09-0075)',
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-allen2013-intensity',
      authors: 'ALLEN, Melissa M.',
      title: 'Intervention Efficacy and Intensity for Children With Speech Sound Disorder',
      source: 'Journal of Speech, Language, and Hearing Research, v. 56, n. 3, p. 865-877, 2013.',
      year: 2013,
      doi: '10.1044/1092-4388(2012/11-0076)',
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-castro2011-inconsistencia',
      authors: 'CASTRO, Márcia Mathias de; WERTZNER, Haydée Fiszbein.',
      title: 'Speech Inconsistency Index in Brazilian Portuguese-Speaking Children',
      source: 'Folia Phoniatrica et Logopaedica, v. 63, n. 5, p. 237-241, 2011. Amostra: 101 crianças de 5 a 10 anos (51 com alteração fonológica, 50 com desenvolvimento típico).',
      year: 2011,
      doi: '10.1159/000323183',
      usedIn: ['learn.summary', 'learn.evidence'],
    },
    {
      id: 'ref-gabana2025-scoping',
      authors: 'GABANA-SILVEIRA, Jesus Cláudio; MEZZOMO, Carolina Lisbôa; MOTA, Helena Bolli.',
      title: 'Speech Sound Disorder Interventions Approach in Brazil: A Scoping Review',
      source: 'Revista CEFAC, v. 27, n. 6, 2025.',
      year: 2025,
      doi: '10.1590/1982-0216/20252767024',
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-edwards1992-pdi',
      authors: 'EDWARDS, Mary Louise.',
      title: 'Clinical Forum: Phonological Assessment and Treatment in Support of Phonological Processes',
      source: 'Language, Speech, and Hearing Services in Schools, v. 23, p. 233-240, 1992.',
      year: 1992,
      usedIn: ['learn.summary', 'learn.evidence'],
    },
    {
      id: 'ref-asha2004-discharge',
      authors: 'AMERICAN SPEECH-LANGUAGE-HEARING ASSOCIATION.',
      title: 'Admission/Discharge Criteria in Speech-Language Pathology [Guidelines]',
      source: 'ASHA, 2004. Disponível em: https://www.asha.org/policy/gl2004-00046/. Acesso em: 27 jul. 2026.',
      year: 2004,
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-ceron2022ijlcd',
      authors: 'CERON, Marizete Ilha; DE SIMONI, Simone Nicolini; KESKE-SOARES, Márcia.',
      title: 'Phonological Acquisition of Brazilian Portuguese: Ages of Customary Production, Acquisition and Mastery',
      source: 'International Journal of Language & Communication Disorders, v. 57, n. 2, p. 274-287, 2022.',
      year: 2022,
      doi: '10.1111/1460-6984.12689',
      usedIn: ['learn.evidence'],
    },
  ],
}
