import { defineFonoLabModule } from '@/methodology/fonolab'

export const moduloPrincipiosIntervencaoFonologica = defineFonoLabModule({
  id: 'mod-principios-intervencao-fonologica',
  slug: 'principios-intervencao-fonologica',
  title: 'Princípios de intervenção fonológica',
  description:
    'Apresentação dos fundamentos utilizados na definição de objetivos e estratégias de intervenção fonológica.',
  order: 3,
  learningObjective:
    'Compreender os princípios que orientam a seleção de objetivos, alvos, estímulos, estratégias e formas de acompanhamento na intervenção fonológica, relacionando as decisões terapêuticas ao perfil funcional e fonológico identificado na avaliação.',
  prerequisiteKnowledge: [
    'Módulo 1 desta unidade: Desenvolvimento fonológico',
    'Módulo 2 desta unidade: Alterações fonológicas',
  ],
  estimatedTimeMinutes: 140,
  difficulty: 'intermediate',
  status: 'published',

  learn: {
    summary: [
      {
        id: 'sum-1',
        text: 'A intervenção fonológica não é um conjunto de técnicas aplicadas isoladamente, mas a continuidade lógica do processo avaliativo discutido nos Módulos 1 e 2 desta unidade: é a partir da análise do sistema fonológico da criança — seus contrastes, seus processos persistentes ou atípicos, sua inteligibilidade e seu impacto funcional — que se definem os objetivos terapêuticos (Mota; Wiethan, 2014). Este módulo distingue três níveis de decisão clínica que, com frequência, são confundidos entre si: o princípio (a lógica geral que orienta uma decisão, como "trabalhar contrastes, não sons isolados"), o modelo (um programa estruturado de intervenção, como o Modelo de Ciclos ou o Modelo de Oposições Máximas) e a estratégia (uma técnica específica usada dentro de um modelo, como uma pista visual ou tátil). Compreender essa distinção evita o erro de tratar um modelo específico como se fosse, em si, um princípio universal aplicável a qualquer criança.',
      },
      {
        id: 'sum-2',
        text: 'Definir prioridades terapêuticas significa decidir, entre os diferentes achados de uma avaliação fonológica completa, o que será abordado primeiro. Um princípio central discutido nos módulos anteriores desta unidade continua válido aqui: a decisão não deve se basear em um único achado isolado, mas na análise conjunta da persistência e da atipicidade dos processos fonológicos, do impacto funcional sobre a comunicação da criança e da inteligibilidade de fala. Sons ou processos que comprometem mais intensamente a inteligibilidade, ou que geram maior impacto funcional e social, tendem a ser priorizados — mas essa priorização deve ser ajustada ao perfil individual, e não seguir uma fórmula fixa aplicável a todos os casos.',
      },
      {
        id: 'sum-3',
        text: 'A seleção dos sons-alvo do tratamento é uma das decisões mais estudadas na área. Edwards (1992) propõe critérios ainda amplamente utilizados: escolher sons que já façam parte do inventário fonético da criança; sons para os quais ela seja mais estimulável; sons que contribuam para melhorar a inteligibilidade; sons mais frequentes na língua; sons adquiridos mais cedo no desenvolvimento típico; sons importantes para a própria criança; e sons mais fáceis de produzir na posição silábica em questão. Esses critérios não são regras rígidas nem mutuamente exclusivas: cabe ao terapeuta ponderá-los de acordo com o perfil específico de cada criança, e não aplicá-los mecanicamente.',
      },
      {
        id: 'sum-4',
        text: 'Um princípio amplamente discutido na literatura é o de que a intervenção fonológica trabalha, preferencialmente, contrastes entre sons — e não sons isolados —, já que o objetivo é reorganizar o sistema de oposições da criança, e não apenas ensinar a articulação de um fonema específico (Mota; Wiethan, 2014). Dentro dessa lógica, a abordagem de complexidade, proposta por Gierut (2001), argumenta que, ao trabalhar sons foneticamente mais complexos ou marcados linguisticamente, é possível obter generalização para sons mais simples, sem que estes precisem ser diretamente tratados. Uma mudança fonológica mais ampla tende a emergir quando a intervenção foca em dois sons imprecisos que diferem entre si por uma classe maior de traços e por um número maior de traços distintivos (Storkel, 2022). Esse achado fundamenta o Modelo de Oposições Máximas, discutido mais adiante.',
      },
      {
        id: 'sum-5',
        text: 'A generalização — a ampliação da produção correta de um alvo treinado para contextos não trabalhados diretamente em terapia — é considerada o critério mais importante para avaliar a eficácia de uma intervenção fonológica (Elbert; Gierut, citados por Mota; Wiethan, 2014). A literatura descreve diferentes tipos de generalização: para itens lexicais não trabalhados; para outras posições na palavra; para outras unidades linguísticas (de palavras para frases, por exemplo); dentro de uma mesma classe de sons; para outras classes de sons; para outras situações e interlocutores; e generalização baseada em relações implicacionais entre traços distintivos. Monitorar quais tipos de generalização estão ocorrendo — e quais não — é parte essencial do acompanhamento terapêutico, e não apenas um resultado esperado ao final do processo.',
      },
      {
        id: 'sum-6',
        text: 'O Modelo de Ciclos, proposto por Hodson e Paden, é uma abordagem baseada em processos fonológicos, estruturada em dois procedimentos centrais: estimulação (bombardeio auditivo, pistas táteis e visuais) e produção. As autoras sugerem que os processos fonológicos a serem tratados sejam selecionados com base em sua ocorrência mínima de 40% nos contextos testados, organizados em quatro níveis de gravidade relacionados à inteligibilidade — do menos inteligível ao mais inteligível —, tratando-se primeiro os processos dos níveis mais graves (Mota; Wiethan, 2014).',
      },
      {
        id: 'sum-7',
        text: 'O Modelo de Ciclos Modificado, proposto por Tyler, Edwards e Saxman, organiza a intervenção em ciclos de três semanas, com foco em um processo fonológico por semana, em sessões de 50 minutos, duas vezes por semana. Ao final de cada ciclo, uma sondagem de generalização verifica o desempenho da criança em palavras não trabalhadas diretamente; conforme o percentual de acerto, a criança avança para produção em nível de sentença ou repete o ciclo em nível de palavra. A participação da família é elemento central desse modelo, que inclui a prática domiciliar do bombardeio auditivo entre as sessões (Mota; Wiethan, 2014).',
      },
      {
        id: 'sum-8',
        text: 'Os modelos de pares mínimos baseiam-se nos traços distintivos: contrastar duas palavras que diferem por um único som pode ajudar a criança a perceber que a troca de um fonema por outro altera o significado, evidenciando a função contrastiva dos sons da língua. Quando os sons contrastantes diferem por apenas um traço distintivo, fala-se em oposições mínimas; quando diferem por vários traços — incluindo traços de classes maiores, como sonorante, vocoide e aproximante —, fala-se em oposições máximas (Gierut, 1989). No Brasil, o Modelo de Oposições Máximas foi adaptado e testado, mostrando-se eficaz na reestruturação do sistema fonológico de crianças tratadas (Bagetti; Mota; Keske-Soares, 2005).',
      },
      {
        id: 'sum-9',
        text: 'O Modelo de Oposições Múltiplas, proposto por Williams (2000), confronta a criança com vários sons simultaneamente dentro de um mesmo padrão de substituição, reduzindo homonímias na fala e sendo especialmente indicado para sistemas fonológicos com restrições severas, em que um único som substitui vários outros. Esse modelo também foi testado e adaptado no contexto brasileiro (Ceron, 2009), sem um limite fixo quanto ao número de sons-alvo trabalhados simultaneamente, já que esse número depende do padrão de substituição específico de cada criança.',
      },
      {
        id: 'sum-10',
        text: 'O Modelo ABAB-Retirada e Provas Múltiplas baseia-se em relações implicacionais entre traços distintivos: a ideia central é de que trabalhar propriedades linguisticamente mais complexas tende a promover a aquisição de propriedades mais simples relacionadas. O modelo alterna períodos de intervenção direta (B) com períodos de retirada (A), durante os quais são aplicadas provas de generalização e coletadas amostras de fala espontânea, permitindo verificar mudanças no sistema fonológico da criança sem intervenção direta simultânea. Esse desenho é particularmente útil para investigar, de forma controlada, se a generalização observada decorre da intervenção ou de outros fatores (Mota; Wiethan, 2014).',
      },
      {
        id: 'sum-11',
        text: 'O Metaphon é um modelo que busca promover mudanças no sistema fonológico por meio do desenvolvimento da consciência metafonológica — a capacidade de refletir conscientemente sobre os sons da fala e seus contrastes. Organiza-se em duas fases: a Fase I desenvolve a consciência da natureza contrastiva dos sons, percorrendo níveis do conceito, do som, do fonema e da palavra; a Fase II transfere esse conhecimento para situações comunicativas reais, utilizando pares mínimos em atividades de fala e escuta, culminando no nível da sentença (Dean; Howell, 1986). O Metaphon ilustra como a intervenção fonológica pode se associar a habilidades metalinguísticas mais amplas, e não se restringir ao treino de produção motora.',
      },
      {
        id: 'sum-12',
        text: 'Estudos brasileiros que compararam diferentes condutas terapêuticas oferecem informações relevantes, mas limitadas, para a prática. Um deles comparou o Modelo de Oposições Máximas à terapia articulatória (com pistas táteis, cinestésicas e visuais) em crianças com simplificação de onset complexo, encontrando que a terapia articulatória exigiu menos sessões para estabilizar a produção — atribuído ao fato de a criança já possuir os sons isoladamente adquiridos, com dificuldade restrita à implementação fonética da estrutura (Giacchini, 2009, citado por Mota; Wiethan, 2014). Outro estudo associou o Modelo de Oposições Máximas a exercícios de habilidades práxicas orofaciais, encontrando evolução terapêutica em todos os grupos, com resultados ainda melhores nos grupos que também receberam intervenção práxica (Gubiani, 2011, citado por Mota; Wiethan, 2014). Ambos os estudos têm amostras pequenas, o que exige cautela antes de generalizar seus achados; ainda assim, sugerem que combinar pistas motoras a um modelo fonológico pode potencializar resultados, mesmo em quadros de base predominantemente linguística.',
      },
      {
        id: 'sum-13',
        text: 'A organização da prática terapêutica — como as tentativas de produção são distribuídas ao longo do tempo, com que frequência e intensidade as sessões ocorrem — influencia os resultados da intervenção, ainda que a literatura não estabeleça um único parâmetro ideal aplicável a todos os casos. Os modelos descritos neste módulo variam consideravelmente quanto à frequência de sessões, à duração de cada ciclo e à quantidade de repetições por sessão, o que reforça que decisões sobre dosagem terapêutica devem ser ajustadas ao modelo escolhido, ao perfil da criança e à sua resposta ao tratamento ao longo do tempo — tema que será aprofundado no Módulo 4 desta unidade.',
      },
      {
        id: 'sum-14',
        text: 'O envolvimento da família aparece, em praticamente todos os modelos descritos, como elemento que favorece a generalização e a manutenção dos ganhos terapêuticos, seja por meio da prática do bombardeio auditivo em casa, seja pela orientação sobre como reagir às produções da criança no dia a dia. O monitoramento da resposta ao tratamento — por meio de sondagens de generalização, retomada de amostras de fala e comparação com os dados da avaliação inicial — não é uma etapa opcional, mas parte constitutiva de qualquer um dos modelos aqui discutidos, permitindo ajustar alvos, estratégias e ritmo da intervenção ao longo do processo, e não apenas ao final dele.',
      },
      {
        id: 'sum-15',
        text: 'Uma revisão de escopo sobre intervenção fonológica no Brasil, que analisou vinte estudos publicados entre 2014 e 2024, constatou que todas as abordagens terapêuticas relatadas mostraram-se eficazes na remediação de quadros fonológicos, sendo pares mínimos e oposições máximas, o modelo ABAB-retirada com provas múltiplas, a consciência fonológica e o modelo de ciclos modificado as abordagens mais publicadas — sem que nenhuma delas emergisse como universalmente superior às demais (Gabana-Silveira; Mezzomo; Mota, 2025). Essa conclusão converge com o próprio capítulo de referência utilizado neste módulo, que afirma não haver abordagem superior ou inferior: o tratamento depende do sistema fonológico e das características de cada criança, cabendo ao terapeuta a sensibilidade clínica para selecionar o(s) modelo(s) mais adequado(s) (Mota; Wiethan, 2014). Este módulo apresentou os princípios, os critérios de seleção de alvos e os principais modelos de intervenção fonológica; a organização de um plano terapêutico individual completo, com periodicidade, critérios de alta e documentação clínica, será tratada no Módulo 4 desta unidade.',
      },
    ],
    mainIdea:
      'A intervenção fonológica parte diretamente da avaliação para definir prioridades e selecionar alvos terapêuticos com base em critérios como estimulabilidade, complexidade e potencial de generalização, apoiando-se em modelos distintos — Ciclos, Oposições Mínimas/Máximas/Múltiplas, ABAB-Retirada e Metaphon, entre outros —, nenhum deles universalmente superior aos demais.',
    essentialConcepts: [
      {
        id: 'conc-principio-modelo-estrategia',
        term: 'Princípio, modelo e estratégia',
        definition:
          'Três níveis distintos de decisão clínica: princípio é a lógica geral orientadora; modelo é um programa terapêutico estruturado; estratégia é uma técnica específica usada dentro de um modelo.',
        example:
          '"Trabalhar contrastes" é um princípio; o Modelo de Ciclos é um modelo; uma pista tátil usada dentro desse modelo é uma estratégia — confundir esses níveis pode levar a tratar um modelo específico como regra universal.',
      },
      {
        id: 'conc-alvo-terapeutico',
        term: 'Alvo terapêutico',
        definition:
          'Som, contraste ou estrutura fonológica selecionado para ser trabalhado diretamente na intervenção, a partir de critérios como estimulabilidade, complexidade e impacto na inteligibilidade.',
        example:
          'Escolher o contraste entre plosivas e fricativas, em vez de um único som isolado, como alvo de um ciclo terapêutico, a partir da análise conjunta de vários critérios.',
      },
      {
        id: 'conc-contraste-terapia',
        term: 'Contraste (em intervenção fonológica)',
        definition:
          'Oposição entre dois ou mais sons trabalhada na terapia para reorganizar o sistema fonológico da criança, e não apenas treinar a articulação de um som isolado.',
        example:
          'Trabalhar o par "faca"/"vaca" evidencia a função contrastiva do traço de sonoridade, orientando a escolha entre modelos de oposições mínimas ou máximas.',
      },
      {
        id: 'conc-generalizacao',
        term: 'Generalização',
        definition:
          'Ampliação da produção correta de um alvo treinado para itens, posições, estruturas ou contextos não trabalhados diretamente em terapia; critério central de eficácia terapêutica.',
        example:
          'Uma criança treinada no som /f/ em início de palavra passa a produzi-lo corretamente também em posição medial, sem treino específico para essa posição — achado que deve ser monitorado, não apenas presumido.',
      },
      {
        id: 'conc-estimulabilidade',
        term: 'Estimulabilidade',
        definition:
          'Capacidade de a criança produzir corretamente um som ausente do inventário fonético quando recebe um modelo direto do terapeuta.',
        example:
          'Uma criança estimulável para o som /r/ tende a apresentar prognóstico mais favorável para a aquisição desse som em terapia, sendo um dos critérios de seleção de alvos.',
      },
      {
        id: 'conc-complexidade',
        term: 'Complexidade (abordagem de complexidade)',
        definition:
          'Princípio segundo o qual trabalhar sons ou estruturas linguisticamente mais complexos pode promover generalização para propriedades mais simples relacionadas, sem tratamento direto destas.',
        example:
          'Selecionar como alvo um som mais complexo, na expectativa de que sons mais simples da mesma classe sejam adquiridos por generalização, fundamento do Modelo de Oposições Máximas.',
      },
      {
        id: 'conc-inteligibilidade-intervencao',
        term: 'Inteligibilidade (na definição de prioridades)',
        definition:
          'Grau em que a fala da criança é compreendida por um ouvinte; um dos critérios usados para priorizar quais processos ou sons tratar primeiro.',
        example:
          'Priorizar processos que mais comprometem a compreensão da fala pelos colegas de escola, em vez de tratar processos com menor impacto comunicativo.',
      },
      {
        id: 'conc-selecao-lexical',
        term: 'Seleção lexical (palavras-estímulo)',
        definition:
          'Escolha das palavras usadas para estimular e testar a produção de um alvo terapêutico, geralmente representadas por figuras.',
        example:
          'Selecionar seis palavras contendo o som-alvo em diferentes posições para uma sondagem de generalização ao final de um ciclo terapêutico.',
      },
      {
        id: 'conc-pratica-distribuida',
        term: 'Prática distribuída',
        definition:
          'Organização das tentativas de produção do alvo terapêutico ao longo de várias sessões e momentos, em vez de concentradas em um único período intensivo.',
        example:
          'Distribuir a prática de um som-alvo ao longo de várias sessões semanais, em vez de uma única sessão longa, favorecendo a consolidação da aprendizagem.',
      },
      {
        id: 'conc-pista-terapeutica',
        term: 'Pista terapêutica',
        definition:
          'Recurso auditivo, visual, tátil ou proprioceptivo usado para auxiliar a criança a perceber ou produzir um som-alvo.',
        example:
          'Usar o espelho (pista visual) para que a criança observe o posicionamento dos lábios na produção de um som-alvo.',
      },
      {
        id: 'conc-hierarquia-producao',
        term: 'Hierarquia de produção',
        definition:
          'Progressão da prática de um alvo terapêutico por diferentes níveis linguísticos, da unidade mais simples à mais complexa (som, sílaba, palavra, frase, fala espontânea).',
        example:
          'Avançar da produção do som isolado para sua produção em palavras e, depois, em frases, conforme o desempenho da criança evolui.',
      },
      {
        id: 'conc-monitoramento',
        term: 'Monitoramento',
        definition:
          'Acompanhamento sistemático da resposta da criança à intervenção ao longo do tempo, por meio de sondagens de generalização e reavaliações periódicas.',
        example:
          'Aplicar uma sondagem de generalização ao final de cada ciclo terapêutico para decidir se um novo alvo deve ser introduzido.',
      },
      {
        id: 'conc-resposta-tratamento',
        term: 'Resposta ao tratamento',
        definition:
          'Forma como a criança evolui diante de uma intervenção específica, usada para ajustar alvos, estratégias e ritmo terapêutico.',
        example:
          'Uma criança com baixa resposta a um modelo específico pode se beneficiar da combinação com pistas motoras complementares, ajustadas ao seu perfil.',
      },
      {
        id: 'conc-envolvimento-familiar',
        term: 'Envolvimento familiar',
        definition:
          'Participação ativa da família no processo terapêutico, incluindo prática domiciliar orientada e orientações sobre a comunicação cotidiana com a criança.',
        example:
          'Orientar os pais a realizar o bombardeio auditivo em casa entre as sessões de terapia, prática prevista no desenho de vários modelos.',
      },
      {
        id: 'conc-fidelidade-implementacao',
        term: 'Fidelidade de implementação',
        definition:
          'Grau em que um modelo terapêutico é aplicado conforme seus procedimentos originais, relevante para interpretar os resultados obtidos com ele.',
        example:
          'Alterar a frequência de sessões de um modelo sem registrar essa mudança dificulta comparar os resultados obtidos com os da literatura original.',
      },
      {
        id: 'conc-funcionalidade',
        term: 'Funcionalidade (do alvo terapêutico)',
        definition:
          'Relevância prática de um som ou contraste para a comunicação cotidiana da criança, um dos critérios para priorização de alvos.',
        example:
          'Priorizar um som presente no próprio nome da criança ou em palavras frequentes em seu vocabulário funcional.',
      },
    ],
    evidence: [
      {
        id: 'ev-int-1',
        claim:
          'A generalização é considerada o critério mais importante para medir a eficácia de uma intervenção fonológica, sendo descritos ao menos sete tipos distintos de generalização.',
        source: 'Elbert; Gierut, citados por Mota; Wiethan (2014)',
        evidenceLevel: 'expert_opinion',
        clinicalImplication:
          'O monitoramento terapêutico deve verificar explicitamente quais tipos de generalização estão ocorrendo, e não apenas a evolução do som diretamente treinado dentro da sessão clínica.',
      },
      {
        id: 'ev-int-2',
        claim:
          'Maior mudança fonológica tende a emergir quando a intervenção foca em dois sons imprecisos que diferem entre si por uma classe maior de traços e por um número maior de traços distintivos (fundamento da abordagem de complexidade e do Modelo de Oposições Máximas).',
        source: 'Gierut (2001); Storkel (2022)',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'Justifica, em alguns perfis, a escolha de alvos mais complexos em vez dos mais simples — mas não deve ser aplicado de forma automática a toda criança, já que outros fatores (idade, estimulabilidade, motivação) também influenciam o resultado.',
      },
      {
        id: 'ev-int-3',
        claim:
          'O Modelo de Oposições Máximas Modificado, adaptado e testado em 7 crianças brasileiras (4 meninos, 3 meninas, de 3;10 a 6;9) com desvio fonológico, mostrou-se eficaz na reestruturação do sistema fonológico das crianças tratadas.',
        source: 'Bagetti; Mota; Keske-Soares (2005)',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'Fornece uma opção com adaptação e teste em português brasileiro; ainda assim, trata-se de uma série de casos com amostra pequena (n=7), sem grupo controle, o que limita a força da evidência sobre eficácia comparada a outros modelos. Dados bibliográficos confirmados por busca acadêmica independente; o artigo original não foi lido em texto integral nesta auditoria.',
      },
      {
        id: 'ev-int-4',
        claim:
          'O Modelo de Oposições Múltiplas, também adaptado e testado no Brasil, é indicado especialmente para sistemas fonológicos com restrições severas, em que um mesmo som substitui várias outras produções-alvo.',
        source: 'Williams (2000); Ceron (2009)',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'Pode ser mais indicado do que modelos de pares únicos quando há colapso de muitos fonemas em um só som substituto, mas essa indicação deve ser confirmada pelo perfil fonológico específico de cada criança, não presumida pelo diagnóstico.',
      },
      {
        id: 'ev-int-5',
        claim:
          'Uma revisão de escopo sobre intervenção fonológica no Brasil (20 estudos, 2014-2024) constatou que todas as abordagens relatadas foram eficazes, com pares mínimos/oposições máximas, ABAB-retirada e provas múltiplas, consciência fonológica e ciclos modificado entre as mais publicadas — sem nenhuma abordagem emergindo como universalmente superior.',
        source: 'Gabana-Silveira; Mezzomo; Mota (2025)',
        evidenceLevel: 'strong',
        clinicalImplication:
          'Reforça que a escolha do modelo deve ser guiada pelo perfil da criança e pela experiência clínica, não pela busca de um método "melhor" em abstrato.',
      },
      {
        id: 'ev-int-6',
        claim:
          'Em estudo comparativo, crianças tratadas por terapia articulatória (pistas táteis, cinestésicas e visuais) para simplificação de onset complexo estabilizaram a produção com menos sessões do que crianças tratadas pelo Modelo de Oposições Máximas, atribuído à presença prévia dos sons isolados no inventário fonético.',
        source: 'Giacchini (2009), citado por Mota; Wiethan (2014)',
        evidenceLevel: 'emerging',
        clinicalImplication:
          'Sugere que, quando o conhecimento fonológico da estrutura já está presente e a dificuldade é predominantemente de implementação fonética, abordagens mais motoras podem ser vantajosas — mas o achado vem de uma amostra pequena (4 crianças) e não deve ser generalizado sem cautela.',
      },
      {
        id: 'ev-int-7',
        claim:
          'A associação do Modelo de Oposições Máximas a exercícios de habilidades práxicas orofaciais resultou em evolução terapêutica em todos os grupos estudados, com melhores resultados nos grupos que também receberam intervenção práxica.',
        source: 'Gubiani (2011), citado por Mota; Wiethan (2014)',
        evidenceLevel: 'emerging',
        clinicalImplication:
          'Sugere benefício potencial de combinar pistas motoras a um modelo fonológico, mesmo em quadros de base linguística — achado de estudo único, com amostra reduzida, que merece cautela na generalização.',
      },
      {
        id: 'ev-int-8',
        claim:
          'Critérios amplamente citados para a seleção de sons-alvo incluem: presença no inventário fonético, maior estimulabilidade, contribuição para a inteligibilidade, maior frequência na língua, aquisição mais precoce no desenvolvimento típico, relevância para a criança e facilidade de produção na posição trabalhada.',
        source: 'Edwards (1992)',
        evidenceLevel: 'expert_opinion',
        clinicalImplication:
          'Esses critérios devem ser ponderados em conjunto, e não aplicados como regra fixa; nenhum critério isolado determina, sozinho, a escolha do alvo terapêutico.',
      },
    ],
    limitations: [
      {
        id: 'lim-int-1',
        description:
          'Heterogeneidade dos transtornos fonológicos: perfis muito diferentes exigem respostas terapêuticas diferentes, não um protocolo único aplicável a todos os casos.',
      },
      {
        id: 'lim-int-2',
        description:
          'Diferenças entre perfis individuais: idade, gravidade, comorbidades e contexto familiar influenciam a escolha e o ritmo da intervenção.',
      },
      {
        id: 'lim-int-3',
        description:
          'Muitos estudos que sustentam os modelos aqui descritos usam amostras pequenas, limitando a força das conclusões sobre eficácia comparada entre modelos.',
      },
      {
        id: 'lim-int-4',
        description:
          'Dificuldade de comparação direta entre modelos: estudos usam diferentes desenhos, medidas de resultado e critérios de melhora, dificultando concluir qual modelo é "mais eficaz" em termos absolutos.',
      },
      {
        id: 'lim-int-5',
        description:
          'A intensidade e a frequência da intervenção influenciam os resultados, mas a literatura não estabelece um parâmetro único ideal aplicável a todos os modelos e perfis.',
      },
      {
        id: 'lim-int-6',
        description:
          'A adesão familiar à prática domiciliar interfere nos resultados obtidos, mesmo quando o modelo terapêutico é adequadamente selecionado.',
      },
      {
        id: 'lim-int-7',
        description:
          'A seleção do modelo depende também da experiência clínica do terapeuta, que não pode ser plenamente substituída por um algoritmo de decisão.',
      },
      {
        id: 'lim-int-8',
        description:
          'A generalização observada em terapia tem limites; nem todo ganho terapêutico se estende automaticamente a todos os contextos comunicativos da criança.',
      },
      {
        id: 'lim-int-9',
        description:
          'O monitoramento contínuo da resposta ao tratamento é indispensável, já que a resposta inicial a um modelo não garante a manutenção de sua eficácia ao longo de todo o processo.',
      },
      {
        id: 'lim-int-10',
        description:
          'Nenhum modelo deve ser escolhido apenas com base no rótulo diagnóstico da criança; a decisão depende da análise conjunta do perfil fonológico, funcional e motor identificado na avaliação.',
      },
    ],
    simpleExplanation:
      'Depois de entender como a fala se desenvolve (Módulo 1) e como reconhecer quando algo foge do esperado (Módulo 2), chega a hora de pensar: e agora, o que fazer? Este módulo é sobre as ideias que orientam essa decisão — não sobre "a receita certa" para cada criança, porque essa receita única não existe. Pense em um médico que, diante de diferentes pacientes com dor de cabeça, não prescreve sempre o mesmo remédio: ele investiga a causa, considera o histórico da pessoa e escolhe o tratamento mais adequado para aquele caso. Na fonoaudiologia, com a intervenção fonológica, acontece algo parecido: existem várias "linhas de tratamento" diferentes, cada uma com uma lógica própria, e a escolha depende do perfil específico da criança. Algumas dessas linhas trabalham parecido com um jogo de "adivinhação": mostram à criança que trocar um som por outro muda o significado da palavra ("faca" vira "vaca"), ajudando-a a perceber a importância de cada som. Outras organizam a terapia em ciclos, trabalhando um som ou padrão de cada vez, por algumas semanas. Outras ainda apostam em ensinar a criança a "pensar sobre os sons" da própria fala, como um jogo de detetive sonoro. Não existe uma dessas linhas que seja sempre "a melhor": pesquisas mostram que todas podem funcionar bem, dependendo de cada caso. Um ponto muito importante deste módulo é que o sucesso da terapia não se mede apenas pelo que a criança consegue fazer dentro do consultório. O verdadeiro objetivo é que ela consiga usar o que aprendeu na vida real — em casa, na escola, brincando com os amigos. Isso se chama generalização, e é por isso que a participação da família é tão valorizada em quase todos os modelos: praticar em casa ajuda a levar o aprendizado da sala de terapia para o mundo real. Por fim, escolher um caminho de tratamento não é o fim da história: o fonoaudiólogo continua acompanhando de perto como a criança responde, ajustando o que for preciso ao longo do caminho. Ou seja: a intervenção fonológica é um processo vivo, pensado sob medida, e não uma fórmula fixa aplicada sempre da mesma forma — tema que será aprofundado no próximo módulo, sobre como organizar esse plano de tratamento na prática.',
    conceptMap: {
      centralNode: 'Intervenção fonológica',
      nodes: [
        { id: 'n-central', label: 'Intervenção fonológica', type: 'central', description: 'Processo terapêutico que decorre diretamente da avaliação fonológica, sem modelo único universalmente superior.' },
        { id: 'n-avaliacao', label: 'Avaliação', type: 'primary', description: 'Base de dados (contrastes, processos, inteligibilidade, impacto funcional) que fundamenta toda decisão terapêutica.' },
        { id: 'n-prioridades', label: 'Definição de prioridades', type: 'primary', description: 'Decisão sobre o que tratar primeiro, a partir da análise conjunta de múltiplos achados.' },
        { id: 'n-selecao-alvos', label: 'Seleção de alvos', type: 'primary', description: 'Escolha dos sons/contrastes-alvo com base em critérios como estimulabilidade e complexidade.' },
        { id: 'n-modelo', label: 'Escolha de modelo', type: 'secondary', description: 'Seleção do programa terapêutico estruturado mais adequado ao perfil da criança.' },
        { id: 'n-estrategias', label: 'Estratégias', type: 'secondary', description: 'Técnicas específicas (pistas, bombardeio auditivo) usadas dentro do modelo escolhido.' },
        { id: 'n-pratica', label: 'Prática', type: 'secondary', description: 'Organização da frequência, intensidade e distribuição das tentativas de produção.' },
        { id: 'n-monitoramento', label: 'Monitoramento', type: 'application', description: 'Acompanhamento sistemático da resposta ao tratamento ao longo do processo.' },
        { id: 'n-generalizacao', label: 'Generalização', type: 'application', description: 'Critério central de eficácia: extensão dos ganhos a contextos não diretamente treinados.' },
        { id: 'n-reavaliacao', label: 'Reavaliação', type: 'application', description: 'Retomada periódica da avaliação para confirmar ou ajustar alvos e modelo.' },
      ],
      edges: [
        { id: 'e-int-1', from: 'n-central', to: 'n-avaliacao', label: 'parte de' },
        { id: 'e-int-2', from: 'n-avaliacao', to: 'n-prioridades', label: 'fundamenta' },
        { id: 'e-int-3', from: 'n-prioridades', to: 'n-selecao-alvos', label: 'orienta' },
        { id: 'e-int-4', from: 'n-selecao-alvos', to: 'n-modelo', label: 'direciona' },
        { id: 'e-int-5', from: 'n-modelo', to: 'n-estrategias', label: 'organiza-se em' },
        { id: 'e-int-6', from: 'n-estrategias', to: 'n-pratica', label: 'aplicadas na' },
        { id: 'e-int-7', from: 'n-pratica', to: 'n-monitoramento', label: 'acompanhada por' },
        { id: 'e-int-8', from: 'n-monitoramento', to: 'n-generalizacao', label: 'verifica' },
        { id: 'e-int-9', from: 'n-generalizacao', to: 'n-reavaliacao', label: 'informa' },
        { id: 'e-int-10', from: 'n-reavaliacao', to: 'n-selecao-alvos', label: 'pode redefinir' },
      ],
    },
    glossary: [
      { id: 'gl-int-1', term: 'Alvo terapêutico', definition: 'Som, contraste ou estrutura fonológica selecionado para ser trabalhado diretamente na intervenção.', example: 'Um contraste entre duas classes de sons escolhido para um ciclo de terapia.' },
      { id: 'gl-int-2', term: 'Generalização', definition: 'Ampliação da produção correta de um alvo treinado para contextos não trabalhados diretamente.', example: 'Produzir corretamente um som em posição não treinada, sem instrução específica para essa posição.' },
      { id: 'gl-int-3', term: 'Estimulabilidade', definition: 'Capacidade de produzir corretamente, com modelo direto, um som ausente do inventário fonético.', example: 'Repetir corretamente um som após o terapeuta demonstrar sua produção.' },
      { id: 'gl-int-4', term: 'Complexidade', definition: 'Grau de dificuldade linguística de um som ou estrutura, usado como critério de seleção de alvos em algumas abordagens.', example: 'Selecionar um som mais complexo esperando generalização para sons mais simples relacionados.' },
      { id: 'gl-int-5', term: 'Modelo de Ciclos', definition: 'Abordagem baseada em processos fonológicos, com estimulação e produção organizadas por níveis de gravidade.', example: 'Tratar primeiro os processos que mais comprometem a inteligibilidade.' },
      { id: 'gl-int-6', term: 'Ciclos Modificado', definition: 'Variante do Modelo de Ciclos organizada em ciclos de três semanas, um processo por semana.', example: 'Sondagem de generalização ao final de cada ciclo, decidindo o avanço para o nível de sentença.' },
      { id: 'gl-int-7', term: 'Oposições Mínimas', definition: 'Terapia de pares contrastivos em que os sons diferem por um único traço distintivo.', example: 'Contrastar "pato" e "bato", que diferem apenas quanto à sonoridade.' },
      { id: 'gl-int-8', term: 'Oposições Máximas', definition: 'Terapia de pares contrastivos em que os sons diferem por vários traços distintivos, incluindo classes maiores.', example: 'Contrastar "pato" e "rato", cujos sons diferem em múltiplos traços.' },
      { id: 'gl-int-9', term: 'Oposições Múltiplas', definition: 'Modelo que confronta a criança com vários sons simultaneamente dentro de um mesmo padrão de substituição.', example: 'Trabalhar, ao mesmo tempo, os vários sons que uma criança substitui por um único som comum.' },
      { id: 'gl-int-10', term: 'ABAB-Retirada e Provas Múltiplas', definition: 'Desenho terapêutico que alterna intervenção direta e retirada, baseado em hierarquia implicacional de traços.', example: 'Aplicar provas de generalização durante um período sem intervenção direta sobre o som-alvo.' },
      { id: 'gl-int-11', term: 'Metaphon', definition: 'Modelo que desenvolve consciência metafonológica em duas fases, da consciência do contraste à sua aplicação comunicativa.', example: 'Usar termos como "comprido/curto" para representar contrastes sonoros na Fase I.' },
      { id: 'gl-int-12', term: 'Bombardeio auditivo', definition: 'Estimulação auditiva intensiva com palavras contendo o som-alvo, sem exigir produção da criança.', example: 'Ler uma lista de 15 palavras com o som-alvo no início e no fim de cada sessão.' },
      { id: 'gl-int-13', term: 'Pista terapêutica', definition: 'Recurso auditivo, visual, tátil ou proprioceptivo usado para apoiar a percepção ou produção de um som.', example: 'Usar um elástico ortodôntico como guia tátil para a posição da língua.' },
      { id: 'gl-int-14', term: 'Prática distribuída', definition: 'Organização das tentativas de produção ao longo de várias sessões, e não concentradas em um único período.', example: 'Distribuir a prática de um alvo ao longo de semanas, em vez de uma sessão intensiva única.' },
      { id: 'gl-int-15', term: 'Envolvimento familiar', definition: 'Participação ativa da família na prática terapêutica, favorecendo a generalização dos ganhos.', example: 'Prática do bombardeio auditivo em casa, orientada pelo terapeuta.' },
      { id: 'gl-int-16', term: 'Monitoramento', definition: 'Acompanhamento sistemático da resposta da criança à intervenção ao longo do tempo.', example: 'Sondagens de generalização aplicadas periodicamente ao longo do tratamento.' },
    ],
  },

  apply: {
    questions: [
      {
        id: 'q-int-1',
        stem: 'Qual das alternativas diferencia corretamente princípio, modelo e estratégia em intervenção fonológica?',
        alternatives: [
          { id: 'q-int-1-a', text: 'Princípio é uma lógica geral que orienta decisões (ex.: trabalhar contrastes, não sons isolados); modelo é um programa terapêutico estruturado (ex.: Modelo de Ciclos); estratégia é uma técnica específica usada dentro de um modelo (ex.: uma pista visual).', isCorrect: true, feedback: 'Correto. Essa distinção evita que um modelo específico seja tratado como se fosse, em si, uma regra universal aplicável a qualquer criança.' },
          { id: 'q-int-1-b', text: 'Os três termos são sinônimos e podem ser usados indistintamente.', isCorrect: false, feedback: 'Incorreto. São níveis distintos de decisão clínica, com implicações diferentes para a prática.' },
          { id: 'q-int-1-c', text: 'Modelo é sempre mais geral do que princípio, e estratégia é o nome dado a qualquer programa terapêutico completo.', isCorrect: false, feedback: 'Incorreto. A relação está invertida: o princípio é o mais geral; a estratégia é a mais específica.' },
          { id: 'q-int-1-d', text: 'Princípio se aplica exclusivamente a modelos motores; modelo e estratégia se aplicam apenas a modelos linguísticos.', isCorrect: false, feedback: 'Incorreto. Essa distinção não tem relação com a natureza motora ou linguística do modelo.' },
        ],
        correctAlternativeId: 'q-int-1-a',
        explanation: 'Distinguir princípio, modelo e estratégia é essencial para não confundir uma técnica específica com uma regra geral, e para reconhecer que diferentes modelos podem compartilhar os mesmos princípios subjacentes.',
        hint: 'Pense em qual dos três é mais abstrato/geral e qual é mais concreto/específico.',
        relatedConceptId: 'conc-principio-modelo-estrategia',
        referenceId: 'ref-tratado2014-cap72',
      },
      {
        id: 'q-int-2',
        stem: 'O que caracteriza a generalização em intervenção fonológica?',
        alternatives: [
          { id: 'q-int-2-a', text: 'A ampliação da produção correta de um alvo treinado para itens, posições, estruturas linguísticas ou contextos não trabalhados diretamente em terapia.', isCorrect: true, feedback: 'Correto. A generalização é considerada o critério mais importante para avaliar a eficácia de uma intervenção fonológica.' },
          { id: 'q-int-2-b', text: 'A repetição do mesmo exercício até a produção ficar automática apenas dentro da sessão clínica.', isCorrect: false, feedback: 'Incorreto. Produção estável apenas na sessão clínica, sem extensão a outros contextos, não caracteriza generalização.' },
          { id: 'q-int-2-c', text: 'A aplicação do mesmo modelo terapêutico a todas as crianças atendidas por um profissional.', isCorrect: false, feedback: 'Incorreto. Isso descreveria uma prática clínica inadequada, não o conceito de generalização.' },
          { id: 'q-int-2-d', text: 'A substituição de um modelo terapêutico por outro após uma única sessão sem resposta.', isCorrect: false, feedback: 'Incorreto. Isso não é generalização, e trocar de modelo após uma única sessão seria uma decisão precipitada.' },
        ],
        correctAlternativeId: 'q-int-2-a',
        explanation: 'A generalização mede se os ganhos obtidos em terapia se estendem além do que foi diretamente treinado, sendo o parâmetro central de eficácia terapêutica discutido na literatura.',
        hint: 'Pense no que realmente importa: a criança usar o som apenas na sessão, ou em qualquer situação da vida real?',
        relatedConceptId: 'conc-generalizacao',
        referenceId: 'ref-tratado2014-cap72',
      },
      {
        id: 'q-int-3',
        stem: 'O que é estimulabilidade, no contexto da seleção de alvos terapêuticos?',
        alternatives: [
          { id: 'q-int-3-a', text: 'A capacidade de a criança produzir corretamente, com apoio de um modelo direto do terapeuta, um som ausente do seu inventário fonético.', isCorrect: true, feedback: 'Correto. A estimulabilidade é um dos critérios usados para selecionar sons-alvo com prognóstico mais favorável.' },
          { id: 'q-int-3-b', text: 'A capacidade de a criança repetir qualquer palavra após ouvi-la uma única vez, independentemente do som envolvido.', isCorrect: false, feedback: 'Incorreto. Estimulabilidade refere-se especificamente à produção de um som-alvo com apoio de modelo, não a qualquer repetição.' },
          { id: 'q-int-3-c', text: 'A quantidade total de sons que a criança já produz corretamente sem qualquer apoio.', isCorrect: false, feedback: 'Incorreto. Isso descreveria o inventário fonético, não a estimulabilidade.' },
          { id: 'q-int-3-d', text: 'A velocidade com que a criança aprende a ler palavras novas.', isCorrect: false, feedback: 'Incorreto. Estimulabilidade é um conceito da produção de fala, não da leitura.' },
        ],
        correctAlternativeId: 'q-int-3-a',
        explanation: 'A estimulabilidade é frequentemente associada a um prognóstico terapêutico mais favorável, sendo um dos critérios considerados na seleção de alvos.',
        hint: 'Pense no que acontece quando o terapeuta oferece um modelo direto de um som que a criança ainda não produz sozinha.',
        relatedConceptId: 'conc-estimulabilidade',
        referenceId: 'ref-edwards1992-pdi',
      },
      {
        id: 'q-int-4',
        stem: 'Segundo os critérios amplamente citados para seleção de sons-alvo, qual das situações a seguir representa a aplicação mais adequada desses critérios?',
        alternatives: [
          { id: 'q-int-4-a', text: 'Considerar, em conjunto, se o som já está no inventário fonético, se a criança é estimulável para ele, seu impacto na inteligibilidade, sua frequência na língua e sua relevância para a criança, antes de decidir o alvo inicial.', isCorrect: true, feedback: 'Correto. Os critérios de Edwards (1992) devem ser ponderados em conjunto, não aplicados isoladamente.' },
          { id: 'q-int-4-b', text: 'Escolher sempre o som mais raro da língua, por ser o que exige maior atenção terapêutica.', isCorrect: false, feedback: 'Incorreto. Raridade do som não é, isoladamente, um critério de seleção discutido na literatura.' },
          { id: 'q-int-4-c', text: 'Escolher o alvo exclusivamente pela ordem alfabética dos fonemas do português.', isCorrect: false, feedback: 'Incorreto. Não há qualquer fundamento técnico para esse critério.' },
          { id: 'q-int-4-d', text: 'Escolher o alvo com base apenas na idade cronológica da criança, ignorando estimulabilidade e inventário fonético.', isCorrect: false, feedback: 'Incorreto. A idade isolada não é suficiente; os módulos anteriores desta unidade já discutiram os limites do uso de idade como critério único.' },
        ],
        correctAlternativeId: 'q-int-4-a',
        explanation: 'Os critérios de seleção de alvos devem ser ponderados em conjunto e ajustados ao perfil específico da criança, e não aplicados como regras isoladas ou mecânicas.',
        hint: 'Pense em quantos critérios diferentes a literatura cita, e se algum deles, sozinho, seria suficiente.',
        relatedConceptId: 'conc-selecao-lexical',
        referenceId: 'ref-edwards1992-pdi',
      },
      {
        id: 'q-int-5',
        stem: 'De acordo com a abordagem de complexidade discutida neste módulo, qual é a lógica para, em alguns casos, selecionar sons mais complexos como alvo inicial de tratamento?',
        alternatives: [
          { id: 'q-int-5-a', text: 'Trabalhar sons linguisticamente mais complexos pode gerar generalização para sons mais simples relacionados, sem que estes precisem ser diretamente tratados.', isCorrect: true, feedback: 'Correto. Esse é o fundamento da abordagem de complexidade, que sustenta, entre outros, o Modelo de Oposições Máximas.' },
          { id: 'q-int-5-b', text: 'Sons mais complexos são sempre mais fáceis de ensinar, por exigirem menos repetições.', isCorrect: false, feedback: 'Incorreto. Sons mais complexos não são necessariamente mais fáceis de ensinar; a lógica está no potencial de generalização, não na facilidade de ensino.' },
          { id: 'q-int-5-c', text: 'Começar pelos sons mais complexos garante que a criança nunca precisará de reavaliação.', isCorrect: false, feedback: 'Incorreto. Reavaliação e monitoramento continuam sendo necessários independentemente do alvo escolhido.' },
          { id: 'q-int-5-d', text: 'A complexidade do som não tem qualquer relação com o potencial de generalização observado na literatura.', isCorrect: false, feedback: 'Incorreto. A literatura descreve justamente uma relação entre complexidade do alvo e potencial de generalização.' },
        ],
        correctAlternativeId: 'q-int-5-a',
        explanation: 'A abordagem de complexidade argumenta que o trabalho com sons mais complexos pode antecipar a aquisição de sons mais simples relacionados, por meio da generalização — um princípio, não uma regra aplicável a toda criança.',
        hint: 'Pense no que se espera "de graça" (sem treino direto) ao se trabalhar um alvo mais difícil.',
        relatedConceptId: 'conc-complexidade',
        referenceId: 'ref-gierut2001-complexity',
      },
      {
        id: 'q-int-6',
        stem: 'Diante de uma criança com múltiplos processos fonológicos alterados, qual conduta está mais alinhada aos princípios de definição de prioridades discutidos neste módulo?',
        alternatives: [
          { id: 'q-int-6-a', text: 'Analisar em conjunto a persistência, a atipicidade, o impacto funcional e a inteligibilidade associados a cada processo, para decidir o que priorizar, sem se basear em um único achado isolado.', isCorrect: true, feedback: 'Correto. A priorização deve integrar múltiplos achados da avaliação, como discutido também nos Módulos 1 e 2 desta unidade.' },
          { id: 'q-int-6-b', text: 'Tratar sempre primeiro o processo que aparece com menor frequência na amostra de fala.', isCorrect: false, feedback: 'Incorreto. Frequência isolada não é o critério central de priorização discutido na literatura.' },
          { id: 'q-int-6-c', text: 'Tratar sempre primeiro o som mais fácil de pronunciar, independentemente de seu impacto na comunicação.', isCorrect: false, feedback: 'Incorreto. Facilidade de pronúncia isolada ignora o impacto funcional, um critério central de priorização.' },
          { id: 'q-int-6-d', text: 'Tratar todos os processos simultaneamente, sem qualquer ordem de prioridade.', isCorrect: false, feedback: 'Incorreto. Os modelos discutidos neste módulo pressupõem a seleção e priorização de alvos, não o tratamento simultâneo indiferenciado de tudo.' },
        ],
        correctAlternativeId: 'q-int-6-a',
        explanation: 'A definição de prioridades terapêuticas exige a análise conjunta de múltiplos achados — persistência, atipicidade, impacto funcional e inteligibilidade —, e não a aplicação de um único critério isolado.',
        hint: 'Lembre-se do princípio, já discutido nos módulos anteriores desta unidade, de que nenhuma decisão deve se basear em um único achado.',
        relatedConceptId: 'conc-inteligibilidade-intervencao',
        referenceId: 'ref-tratado2014-cap72',
      },
      {
        id: 'q-int-7',
        stem: 'Qual é uma diferença relevante entre o Modelo de Ciclos original e o Modelo de Ciclos Modificado?',
        alternatives: [
          { id: 'q-int-7-a', text: 'O Modelo de Ciclos Modificado organiza a intervenção em ciclos de três semanas com foco em um processo por semana e inclui sondagem de generalização ao final de cada ciclo, com avanço condicionado ao desempenho da criança.', isCorrect: true, feedback: 'Correto. Essa estrutura de ciclos e sondagens é uma característica específica do Modelo de Ciclos Modificado.' },
          { id: 'q-int-7-b', text: 'O Modelo de Ciclos Modificado elimina completamente o bombardeio auditivo, presente apenas no modelo original.', isCorrect: false, feedback: 'Incorreto. O bombardeio auditivo está presente em ambos os modelos.' },
          { id: 'q-int-7-c', text: 'O Modelo de Ciclos original não permite o tratamento de mais de um processo fonológico ao longo de toda a intervenção.', isCorrect: false, feedback: 'Incorreto. Ambos os modelos preveem o tratamento sequencial de diferentes processos ao longo do tempo.' },
          { id: 'q-int-7-d', text: 'Não há qualquer diferença relevante entre os dois modelos; o nome "modificado" é apenas estilístico.', isCorrect: false, feedback: 'Incorreto. Há diferenças estruturais relevantes, como a organização em ciclos de três semanas e as sondagens de generalização.' },
        ],
        correctAlternativeId: 'q-int-7-a',
        explanation: 'O Modelo de Ciclos Modificado acrescenta uma estrutura temporal mais definida (ciclos de três semanas) e sondagens sistemáticas de generalização, que orientam o avanço da criança entre níveis de complexidade.',
        hint: 'Pense no que muda em termos de estrutura temporal e de verificação de progresso entre os dois modelos.',
        relatedConceptId: 'conc-monitoramento',
        referenceId: 'ref-tyler1987-modifiedcycles',
      },
      {
        id: 'q-int-8',
        stem: 'Qual é a principal diferença entre oposições mínimas e oposições máximas em terapia de pares contrastivos?',
        alternatives: [
          { id: 'q-int-8-a', text: 'Nas oposições mínimas, os sons contrastantes diferem por um único traço distintivo; nas oposições máximas, diferem por vários traços, incluindo traços de classes maiores.', isCorrect: true, feedback: 'Correto. Essa é a distinção central entre os dois tipos de contraste usados na terapia de pares.' },
          { id: 'q-int-8-b', text: 'Oposições mínimas usam sempre mais de duas palavras por sessão, enquanto oposições máximas usam apenas uma palavra.', isCorrect: false, feedback: 'Incorreto. A distinção não está relacionada ao número de palavras usadas por sessão.' },
          { id: 'q-int-8-c', text: 'Oposições máximas são aplicadas exclusivamente em adultos, nunca em crianças.', isCorrect: false, feedback: 'Incorreto. Ambos os modelos de oposições são amplamente aplicados e estudados em crianças com alteração fonológica.' },
          { id: 'q-int-8-d', text: 'Não há diferença conceitual entre os dois termos; ambos descrevem exatamente o mesmo procedimento terapêutico.', isCorrect: false, feedback: 'Incorreto. São conceitos distintos, fundamentados em diferentes graus de diferença entre traços distintivos.' },
        ],
        correctAlternativeId: 'q-int-8-a',
        explanation: 'A distinção entre oposições mínimas e máximas está no número e no tipo de traços distintivos que diferenciam os sons contrastados, com implicações diferentes para o potencial de mudança fonológica esperado.',
        hint: 'Pense em quantos traços distintivos separam os dois sons contrastados em cada tipo de oposição.',
        relatedConceptId: 'conc-contraste-terapia',
        referenceId: 'ref-gierut1989-maxopp',
      },
      {
        id: 'q-int-9',
        stem: 'Em qual perfil fonológico o Modelo de Oposições Múltiplas tende a ser mais especificamente indicado, em comparação a um modelo de par único (mínimo ou máximo)?',
        alternatives: [
          { id: 'q-int-9-a', text: 'Quando há colapso severo de vários fonemas em um único som substituto, e não apenas a troca isolada entre dois sons.', isCorrect: true, feedback: 'Correto. O Modelo de Oposições Múltiplas foi proposto justamente para lidar com esse tipo de restrição severa do sistema fonológico.' },
          { id: 'q-int-9-b', text: 'Quando a criança apresenta apenas um único som alterado em toda a amostra de fala.', isCorrect: false, feedback: 'Incorreto. Um único som alterado é mais compatível com modelos de par único do que com o Modelo de Oposições Múltiplas.' },
          { id: 'q-int-9-c', text: 'Exclusivamente quando a criança já concluiu outro modelo terapêutico anteriormente.', isCorrect: false, feedback: 'Incorreto. A indicação depende do perfil fonológico atual, não do histórico terapêutico prévio.' },
          { id: 'q-int-9-d', text: 'Apenas quando a criança tem mais de 10 anos de idade.', isCorrect: false, feedback: 'Incorreto. A indicação do modelo depende do perfil fonológico, não de um corte etário específico.' },
        ],
        correctAlternativeId: 'q-int-9-a',
        explanation: 'O Modelo de Oposições Múltiplas é indicado especialmente para sistemas com colapso de vários fonemas em um único som substituto, reduzindo homonímias — um perfil diferente daquele mais tipicamente tratado por modelos de par único.',
        hint: 'Pense em quantos sons diferentes uma criança pode estar substituindo por um único som, e como isso afeta a escolha do modelo.',
        relatedConceptId: 'conc-contraste-terapia',
        referenceId: 'ref-williams2000-multopp',
      },
      {
        id: 'q-int-10',
        stem: 'Uma revisão de escopo sobre intervenção fonológica no Brasil constatou que todas as abordagens relatadas nos estudos analisados foram eficazes, sem que nenhuma emergisse como universalmente superior. Qual é a implicação clínica mais direta desse achado?',
        alternatives: [
          { id: 'q-int-10-a', text: 'A escolha do modelo terapêutico deve ser fundamentada no perfil fonológico, motor e funcional específico de cada criança, e não na busca por um método considerado "o melhor" em abstrato.', isCorrect: true, feedback: 'Correto. Esse achado reforça a mensagem central deste módulo: não há modelo universalmente superior.' },
          { id: 'q-int-10-b', text: 'Como nenhum modelo é superior, é indiferente qual modelo o terapeuta escolhe, podendo a escolha ser aleatória.', isCorrect: false, feedback: 'Incorreto. A ausência de um modelo universalmente superior não significa que a escolha seja indiferente; ela deve ser fundamentada no perfil da criança.' },
          { id: 'q-int-10-c', text: 'O achado prova que todos os modelos produzem exatamente os mesmos resultados em qualquer criança.', isCorrect: false, feedback: 'Incorreto. O achado indica eficácia geral dos modelos estudados, não resultados idênticos em todos os casos individuais.' },
          { id: 'q-int-10-d', text: 'O achado invalida a necessidade de avaliação fonológica prévia à escolha do modelo terapêutico.', isCorrect: false, feedback: 'Incorreto. Pelo contrário: sem um modelo "vencedor" universal, a avaliação detalhada do perfil da criança se torna ainda mais importante para fundamentar a escolha.' },
        ],
        correctAlternativeId: 'q-int-10-a',
        explanation: 'A ausência de uma abordagem universalmente superior reforça a importância da avaliação individualizada e da experiência clínica na escolha do modelo terapêutico mais adequado a cada criança.',
        hint: 'Pense no que "nenhum modelo é superior" implica para a forma como a escolha deve ser feita — e no que não implica.',
        relatedConceptId: 'conc-resposta-tratamento',
        referenceId: 'ref-gabana2025-scoping',
      },
      {
        id: 'q-int-11',
        stem: 'Um estudo comparativo encontrou que crianças com simplificação de onset complexo, cujos sons envolvidos já estavam isoladamente adquiridos no inventário fonético, estabilizaram a produção mais rapidamente com terapia articulatória (pistas motoras) do que com um modelo fonológico de oposições. Qual leitura clínica é mais adequada para esse achado?',
        alternatives: [
          { id: 'q-int-11-a', text: 'Quando a dificuldade está predominantemente na implementação fonética de uma estrutura já conhecida linguisticamente, associar ou priorizar pistas motoras pode ser vantajoso — sem que isso signifique que pistas motoras sejam sempre superiores a modelos fonológicos em outros perfis.', isCorrect: true, feedback: 'Correto. O achado é específico do perfil descrito (sons já adquiridos isoladamente, dificuldade restrita à estrutura), e não uma regra geral de superioridade.' },
          { id: 'q-int-11-b', text: 'O achado prova que a terapia articulatória é sempre superior a qualquer modelo fonológico, em qualquer perfil de criança.', isCorrect: false, feedback: 'Incorreto. Generalizar esse achado a qualquer perfil contraria os princípios discutidos neste módulo e a natureza limitada (amostra pequena) do estudo original.' },
          { id: 'q-int-11-c', text: 'O achado deve ser ignorado, já que veio de um estudo com amostra pequena e não tem qualquer relevância clínica.', isCorrect: false, feedback: 'Incorreto. Mesmo estudos com amostra pequena podem oferecer informações relevantes, desde que interpretadas com a devida cautela — não devem ser simplesmente descartados.' },
          { id: 'q-int-11-d', text: 'O achado indica que modelos fonológicos nunca devem ser usados em casos de simplificação de encontro consonantal.', isCorrect: false, feedback: 'Incorreto. O achado é específico do perfil descrito, não uma contraindicação geral a modelos fonológicos para esse tipo de processo.' },
        ],
        correctAlternativeId: 'q-int-11-a',
        explanation: 'Achados de estudos comparativos devem ser interpretados dentro do perfil específico estudado, sem serem transformados em regras gerais — especialmente quando vêm de amostras pequenas, como destacado nas limitações deste módulo.',
        hint: 'Pense no que era específico sobre o perfil dessas crianças (sons já adquiridos isoladamente) antes de generalizar a conclusão.',
        relatedConceptId: 'conc-resposta-tratamento',
        referenceId: 'ref-tratado2014-cap72',
      },
      {
        id: 'q-int-12',
        stem: 'Uma criança apresenta boa produção do som-alvo durante as sessões clínicas, mas nenhuma generalização é observada em casa após várias semanas, e a família relata baixa adesão à prática domiciliar orientada. Qual é a conduta clínica mais coerente com os princípios discutidos neste módulo?',
        alternatives: [
          { id: 'q-int-12-a', text: 'Investigar e abordar as barreiras ao envolvimento familiar na prática domiciliar antes de presumir que o modelo terapêutico é inadequado, já que esse envolvimento é parte constitutiva da maioria dos modelos discutidos.', isCorrect: true, feedback: 'Correto. A baixa adesão familiar é uma explicação plausível e modificável para a ausência de generalização, e deve ser investigada antes de outras conclusões.' },
          { id: 'q-int-12-b', text: 'Concluir imediatamente que a criança não é capaz de generalizar aprendizados, encerrando a intervenção.', isCorrect: false, feedback: 'Incorreto. Essa conclusão é precipitada e ignora uma explicação mais provável e modificável (a adesão familiar).' },
          { id: 'q-int-12-c', text: 'Trocar de modelo terapêutico a cada poucas semanas até que a generalização ocorra espontaneamente, independentemente da causa identificada.', isCorrect: false, feedback: 'Incorreto. Trocar de modelo sem investigar a causa provável (baixa adesão domiciliar) não resolve o problema identificado.' },
          { id: 'q-int-12-d', text: 'Ignorar o relato da família sobre a prática domiciliar, já que apenas o desempenho dentro da sessão clínica deve ser considerado.', isCorrect: false, feedback: 'Incorreto. O relato familiar sobre a prática domiciliar é uma informação clinicamente relevante, especialmente para entender a ausência de generalização.' },
        ],
        correctAlternativeId: 'q-int-12-a',
        explanation: 'O envolvimento familiar é elemento constitutivo da maioria dos modelos de intervenção fonológica discutidos; sua ausência é uma explicação plausível para a falta de generalização e deve ser investigada antes de decisões mais drásticas, como trocar de modelo ou encerrar a intervenção.',
        hint: 'Pense em qual variável modificável pode explicar a diferença entre o desempenho na sessão e o desempenho em casa.',
        relatedConceptId: 'conc-envolvimento-familiar',
        referenceId: 'ref-tratado2014-cap72',
      },
    ],
    associations: [
      {
        id: 'assoc-int-1',
        instruction: 'Associe cada modelo de intervenção fonológica à sua característica central.',
        pairs: [
          { id: 'assoc-int-1-p1', left: 'Modelo de Ciclos', right: 'Seleciona processos com ocorrência mínima de 40%, organizados em quatro níveis de gravidade' },
          { id: 'assoc-int-1-p2', left: 'Modelo de Ciclos Modificado', right: 'Ciclos de três semanas, um processo por semana, com sondagem de generalização ao final' },
          { id: 'assoc-int-1-p3', left: 'Oposições Mínimas', right: 'Contraste de sons que diferem por um único traço distintivo' },
          { id: 'assoc-int-1-p4', left: 'Oposições Máximas', right: 'Contraste de sons que diferem por vários traços, incluindo classes maiores' },
          { id: 'assoc-int-1-p5', left: 'Oposições Múltiplas', right: 'Confronta vários sons simultaneamente, indicado para colapsos severos de fonemas' },
          { id: 'assoc-int-1-p6', left: 'ABAB-Retirada e Provas Múltiplas', right: 'Baseia-se em relações implicacionais entre traços distintivos' },
          { id: 'assoc-int-1-p7', left: 'Metaphon', right: 'Desenvolve consciência metafonológica em duas fases' },
        ],
      },
      {
        id: 'assoc-int-2',
        instruction: 'Associe cada princípio ou conceito à sua implicação clínica mais adequada.',
        pairs: [
          { id: 'assoc-int-2-p1', left: 'Estimulabilidade elevada para um som ausente', right: 'Costuma indicar prognóstico mais favorável para a aquisição desse som' },
          { id: 'assoc-int-2-p2', left: 'Abordagem de complexidade', right: 'Pode justificar a escolha de um alvo mais complexo para gerar generalização a sons mais simples' },
          { id: 'assoc-int-2-p3', left: 'Baixa adesão à prática domiciliar', right: 'Deve ser investigada antes de se concluir que o modelo terapêutico é inadequado' },
          { id: 'assoc-int-2-p4', left: 'Ausência de generalização para a fala espontânea', right: 'Deve ser monitorada e investigada, não apenas registrada como resultado final' },
          { id: 'assoc-int-2-p5', left: 'Nenhum modelo emergiu como universalmente superior', right: 'A escolha do modelo deve ser guiada pelo perfil individual da criança' },
          { id: 'assoc-int-2-p6', left: 'Critérios de Edwards para seleção de alvos', right: 'Devem ser ponderados em conjunto, não aplicados como regra fixa isolada' },
        ],
      },
    ],
    decisionExercises: [
      {
        id: 'dec-int-1',
        situation:
          'Uma criança de 4 anos e 8 meses apresenta alteração fonológica leve a moderada, com poucos sons alterados e processos isolados, boa estimulabilidade e inventário fonético amplo, quase completo. Um colega de trabalho sugere iniciar diretamente pelo Modelo de Oposições Máximas, "porque é o mais moderno". Qual é a conduta mais coerente com os princípios discutidos neste módulo?',
        options: [
          { id: 'dec-int-1-o1', text: 'Adotar automaticamente o Modelo de Oposições Máximas apenas por ser mencionado como mais recente, sem analisar o perfil específico da criança.', consequence: 'Pode não ser a escolha mais adequada, já que esse modelo é mais estudado e indicado, sobretudo, para quadros mais graves e sistemas com restrições mais amplas; para quadros leves a moderados, outros modelos podem ser igualmente ou mais indicados.', explanation: 'Nenhum modelo deve ser escolhido apenas por sua popularidade ou novidade, mas pela adequação ao perfil fonológico, à gravidade e à estimulabilidade da criança avaliada.', isRecommended: false },
          { id: 'dec-int-1-o2', text: 'Analisar o perfil fonológico completo (gravidade, estimulabilidade, tipos de processo) antes de escolher entre os modelos discutidos, reconhecendo que mais de uma opção pode ser tecnicamente defensável.', consequence: 'Aumenta a probabilidade de selecionar um modelo compatível com as características específicas da criança, evitando decisões baseadas em modismo ou preferência pessoal isolada.', explanation: 'A literatura da área — incluindo revisões brasileiras recentes — indica que não há um modelo universalmente superior; a escolha deve ser fundamentada no perfil individual e na experiência clínica.', isRecommended: true },
          { id: 'dec-int-1-o3', text: 'Aguardar sem iniciar qualquer intervenção até que surja um consenso definitivo sobre qual modelo é o melhor.', consequence: 'Atrasa desnecessariamente o início da intervenção, já que múltiplos modelos têm sustentação na literatura para uso imediato, cabendo ao terapeuta a escolha fundamentada.', explanation: 'A ausência de um modelo "vencedor" universal não significa ausência de opções sustentadas; a decisão deve ser tomada com base nos critérios discutidos, não adiada indefinidamente.', isRecommended: false },
          { id: 'dec-int-1-o4', text: 'Escolher o modelo com base exclusivamente no que a família já ouviu falar ou pediu especificamente, sem considerar o perfil fonológico da criança.', consequence: 'Pode gerar expectativas desalinhadas com o que é tecnicamente mais indicado para o caso, embora a opinião da família deva ser ouvida e considerada no processo.', explanation: 'A preferência familiar é uma informação relevante a ser dialogada, mas a indicação técnica do modelo deve partir da análise fonoaudiológica do caso.', isRecommended: false },
        ],
      },
      {
        id: 'dec-int-2',
        situation:
          'Após seis sessões de um modelo terapêutico bem selecionado para o perfil da criança, observa-se boa produção do som-alvo dentro da sessão clínica, mas nenhuma generalização para a fala espontânea em casa ou na escola, segundo relato da família. A família relata que a lista de bombardeio auditivo entregue nas sessões raramente é praticada em casa. Qual conduta é mais adequada?',
        options: [
          { id: 'dec-int-2-o1', text: 'Investigar e abordar as barreiras ao envolvimento familiar na prática domiciliar, reforçando sua importância para a generalização, antes de presumir que o modelo terapêutico é ineficaz.', consequence: 'Aumenta a chance de que a generalização ocorra, já que muitos modelos dependem da prática domiciliar como parte de seu desenho original; abandonar o modelo sem investigar essa variável pode ser precipitado.', explanation: 'O envolvimento familiar é elemento central na maioria dos modelos discutidos neste módulo; sua ausência pode explicar a falta de generalização independentemente da adequação do modelo escolhido.', isRecommended: true },
          { id: 'dec-int-2-o2', text: 'Trocar imediatamente de modelo terapêutico, presumindo que a ausência de generalização indica que o modelo escolhido é inadequado.', consequence: 'Pode representar uma troca desnecessária, já que a causa mais provável da falta de generalização, nesse caso, é a baixa adesão à prática domiciliar, não a inadequação do modelo em si.', explanation: 'Antes de trocar de modelo, é preciso investigar variáveis que podem explicar a ausência de generalização, como a adesão familiar à prática domiciliar prevista no próprio desenho do modelo.', isRecommended: false },
          { id: 'dec-int-2-o3', text: 'Aumentar a intensidade das sessões clínicas sem qualquer ajuste na orientação familiar.', consequence: 'Pode não resolver o problema, já que a lacuna identificada está na prática fora da clínica, não necessariamente na quantidade de sessões clínicas.', explanation: 'Aumentar a intensidade clínica sem endereçar a prática domiciliar pode não impactar a generalização, que depende também do que ocorre fora da sessão.', isRecommended: false },
          { id: 'dec-int-2-o4', text: 'Interromper a intervenção, concluindo que a criança não é capaz de generalizar o aprendizado.', consequence: 'Conclusão precipitada e potencialmente prejudicial, já que a causa identificável (baixa adesão à prática domiciliar) é uma variável modificável, não uma limitação da criança.', explanation: 'Atribuir a ausência de generalização a uma limitação da criança, sem investigar variáveis modificáveis como a adesão familiar, é uma conclusão precipitada.', isRecommended: false },
        ],
      },
    ],
    fictionalCases: [
      {
        id: 'case-int-1',
        title: 'Caso fictício: Sofia, 5 anos e 6 meses',
        description:
          'Sofia tem 5 anos e 6 meses e já passou por avaliação fonológica completa, incluindo investigação auditiva (audição normal) e avaliação das estruturas e funções motoras orais (sem alterações). O perfil fonológico identificado inclui: redução persistente de encontros consonantais em quase todas as ocorrências; plosivização de fricativas em posição inicial de palavra; ausência do fonema /ʎ/ em qualquer posição; PCC de 58% em amostra de fala espontânea, classificado como moderadamente grave. A inteligibilidade é considerada adequada para familiares próximos, mas reduzida para colegas e professores na escola, gerando episódios de frustração comunicativa relatados pela família. Sofia demonstra boa estimulabilidade para os sons fricativos quando recebe modelo direto do avaliador.',
        disclaimer:
          'Este é um caso fictício, construído exclusivamente para fins didáticos. Não representa nenhuma pessoa real e não deve ser utilizado como modelo de laudo, plano terapêutico ou conduta clínica definitiva. A organização de um plano terapêutico completo, com periodicidade e critérios de alta, é tratada no Módulo 4 desta unidade e depende de avaliação e acompanhamento presenciais.',
        questions: [
          {
            id: 'case-int-1-q1',
            stem: 'Considerando exclusivamente os dados descritos, qual conjunto de critérios torna a redução de encontros consonantais um alvo terapêutico inicial mais defensável do que a ausência do /ʎ/, nesse caso específico?',
            alternatives: [
              { id: 'case-int-1-q1-a', text: 'A redução de encontros consonantais é mais frequente na amostra, contribui de forma mais ampla para a baixa inteligibilidade relatada, e Sofia já demonstra boa estimulabilidade para sons relacionados — critérios que, em conjunto, sustentam essa priorização inicial, sem excluir o /ʎ/ de etapas futuras.', isCorrect: true, feedback: 'Correto. A combinação de frequência, impacto na inteligibilidade e estimulabilidade sustenta essa priorização, sem que isso signifique que o /ʎ/ seja irrelevante — apenas que não é o alvo inicial mais defensável com os dados apresentados.' },
              { id: 'case-int-1-q1-b', text: 'Deve-se sempre priorizar o som ausente por completo do inventário, independentemente de qualquer outro critério.', isCorrect: false, feedback: 'Incorreto. A ausência completa de um som não é, isoladamente, critério suficiente de priorização; outros fatores (frequência, impacto, estimulabilidade) devem ser considerados em conjunto.' },
              { id: 'case-int-1-q1-c', text: 'A escolha deve ser feita por sorteio entre os processos identificados, já que todos têm igual relevância clínica.', isCorrect: false, feedback: 'Incorreto. A priorização deve ser fundamentada nos critérios técnicos discutidos neste módulo, não em escolha aleatória.' },
              { id: 'case-int-1-q1-d', text: 'Deve-se tratar primeiro o processo mais fácil de explicar para a família, independentemente de seu impacto clínico.', isCorrect: false, feedback: 'Incorreto. A facilidade de explicação à família não é, isoladamente, um critério técnico de priorização de alvos.' },
            ],
            correctAlternativeId: 'case-int-1-q1-a',
            explanation: 'A priorização de um alvo terapêutico deve integrar múltiplos critérios — aqui, a frequência do processo, seu impacto na inteligibilidade relatada pela família e pela escola, e a estimulabilidade da criança para sons relacionados — e não decorrer de um único achado isolado, como a mera ausência de um som específico.',
            hint: 'Reveja os critérios de seleção de alvos discutidos no módulo e verifique quais deles favorecem cada uma das opções.',
            relatedConceptId: 'conc-selecao-lexical',
            referenceId: 'ref-edwards1992-pdi',
          },
          {
            id: 'case-int-1-q2',
            stem: 'Diante do perfil de Sofia — sistema com restrição envolvendo múltiplos sons afetados por processos diferentes, mas sem relato de colapso de muitos fonemas em um único som substituto —, qual conduta é mais coerente com os modelos discutidos neste módulo?',
            alternatives: [
              { id: 'case-int-1-q2-a', text: 'Considerar um modelo baseado em contrastes (como oposições mínimas ou máximas) ou o Modelo de Ciclos, sem presumir automaticamente a necessidade do Modelo de Oposições Múltiplas, mais indicado para colapsos severos de muitos fonemas em um único substituto.', isCorrect: true, feedback: 'Correto. O perfil descrito não indica claramente o padrão de colapso severo para o qual o Modelo de Oposições Múltiplas foi especificamente proposto; outros modelos são, ao menos, igualmente defensáveis com os dados disponíveis.' },
              { id: 'case-int-1-q2-b', text: 'Aplicar obrigatoriamente o Modelo de Oposições Múltiplas, já que qualquer criança com mais de um processo alterado se beneficia exclusivamente desse modelo.', isCorrect: false, feedback: 'Incorreto. A indicação mais específica desse modelo é para colapso severo de muitos fonemas em um único substituto, padrão não claramente descrito no caso de Sofia.' },
              { id: 'case-int-1-q2-c', text: 'Concluir que nenhum modelo discutido neste módulo é aplicável ao caso de Sofia.', isCorrect: false, feedback: 'Incorreto. Vários dos modelos discutidos são tecnicamente aplicáveis ao perfil descrito; a questão é qual deles é mais bem fundamentado pelos critérios apresentados, não a inexistência de opções.' },
              { id: 'case-int-1-q2-d', text: 'Definir o modelo terapêutico definitivo apenas com os dados apresentados, sem qualquer necessidade de acompanhamento posterior.', isCorrect: false, feedback: 'Incorreto. Mesmo após a escolha inicial de um modelo, o monitoramento contínuo da resposta ao tratamento continua sendo necessário, como discutido ao longo deste módulo.' },
            ],
            correctAlternativeId: 'case-int-1-q2-a',
            explanation: 'A escolha entre os modelos de contraste (mínimas/máximas) e o Modelo de Ciclos, para o perfil descrito, é tecnicamente mais defensável do que a indicação automática do Modelo de Oposições Múltiplas, cuja indicação mais específica pressupõe colapso severo de muitos fonemas em um único som substituto — padrão não relatado no caso.',
            hint: 'Compare o perfil de Sofia com a indicação mais específica de cada modelo discutido no resumo deste módulo.',
            relatedConceptId: 'conc-contraste-terapia',
            referenceId: 'ref-williams2000-multopp',
          },
        ],
      },
    ],
  },

  review: {
    flashcards: [
      { id: 'fc-int-1', front: 'O que diferencia princípio, modelo e estratégia em intervenção fonológica?', back: 'Princípio é a lógica geral (ex.: trabalhar contrastes); modelo é um programa estruturado (ex.: Modelo de Ciclos); estratégia é uma técnica específica dentro de um modelo (ex.: pista visual).', tags: ['principio-modelo-estrategia'] },
      { id: 'fc-int-2', front: 'O que é generalização em intervenção fonológica?', back: 'Ampliação da produção correta de um alvo treinado para contextos não trabalhados diretamente em terapia; critério central de eficácia.', tags: ['generalizacao'] },
      { id: 'fc-int-3', front: 'Cite três tipos de generalização discutidos na literatura.', back: 'Generalização a itens não treinados, a outras posições na palavra e a outras unidades linguísticas (entre outras).', tags: ['generalizacao'] },
      { id: 'fc-int-4', front: 'O que é estimulabilidade?', back: 'Capacidade de produzir corretamente, com apoio de modelo direto, um som ausente do inventário fonético.', tags: ['estimulabilidade'] },
      { id: 'fc-int-5', front: 'O que propõe a abordagem de complexidade?', back: 'Trabalhar sons mais complexos pode gerar generalização para sons mais simples relacionados, sem tratamento direto destes.', tags: ['complexidade'] },
      { id: 'fc-int-6', front: 'Cite os critérios de Edwards (1992) para seleção de sons-alvo.', back: 'Presença no inventário fonético, estimulabilidade, contribuição para inteligibilidade, frequência na língua, aquisição precoce, relevância para a criança e facilidade na posição trabalhada.', tags: ['selecao-alvos'] },
      { id: 'fc-int-7', front: 'Como o Modelo de Ciclos seleciona os processos a serem tratados?', back: 'Processos com ocorrência mínima de 40% nos contextos testados, organizados em quatro níveis de gravidade relacionados à inteligibilidade.', tags: ['ciclos'] },
      { id: 'fc-int-8', front: 'Quanto tempo dura, tipicamente, um ciclo no Modelo de Ciclos Modificado?', back: 'Três semanas, com foco em um processo fonológico por semana, em sessões de 50 minutos, duas vezes por semana.', tags: ['ciclos-modificado'] },
      { id: 'fc-int-9', front: 'Qual é a diferença entre oposições mínimas e máximas?', back: 'Oposições mínimas diferem por um único traço distintivo; oposições máximas diferem por vários traços, incluindo traços de classes maiores.', tags: ['oposicoes'] },
      { id: 'fc-int-10', front: 'Para que perfil o Modelo de Oposições Múltiplas é especialmente indicado?', back: 'Sistemas fonológicos com restrições severas, em que um mesmo som substitui vários outros sons-alvo (colapso de fonemas).', tags: ['oposicoes-multiplas'] },
      { id: 'fc-int-11', front: 'Em que se baseia o Modelo ABAB-Retirada e Provas Múltiplas?', back: 'Nas relações implicacionais entre traços distintivos: trabalhar propriedades mais complexas tende a promover aquisição de propriedades mais simples relacionadas.', tags: ['abab'] },
      { id: 'fc-int-12', front: 'O que caracteriza o Metaphon?', back: 'Modelo que busca mudanças no sistema fonológico por meio do desenvolvimento da consciência metafonológica, organizado em duas fases.', tags: ['metaphon'] },
      { id: 'fc-int-13', front: 'O que é bombardeio auditivo?', back: 'Estimulação auditiva intensiva com palavras contendo o som-alvo, sem exigir produção da criança, usada em diversos modelos de intervenção.', tags: ['bombardeio-auditivo'] },
      { id: 'fc-int-14', front: 'Por que nenhum modelo de intervenção fonológica deve ser considerado universalmente superior?', back: 'Porque a eficácia depende do perfil fonológico, motor e funcional de cada criança; revisões da área mostram que diferentes modelos são eficazes em diferentes perfis.', tags: ['principio-central'] },
      { id: 'fc-int-15', front: 'Segundo revisão de escopo brasileira (2025), quais foram as abordagens mais publicadas entre 2014 e 2024?', back: 'Pares mínimos/oposições máximas, ABAB-retirada e provas múltiplas, consciência fonológica e ciclos modificado.', tags: ['evidencia'] },
      { id: 'fc-int-16', front: 'Por que o envolvimento familiar é importante na intervenção fonológica?', back: 'Porque favorece a generalização e a manutenção dos ganhos terapêuticos, sobretudo por meio da prática domiciliar orientada.', tags: ['envolvimento-familiar'] },
      { id: 'fc-int-17', front: 'O que é fidelidade de implementação?', back: 'Grau em que um modelo terapêutico é aplicado conforme seus procedimentos originais, relevante para interpretar os resultados obtidos.', tags: ['fidelidade'] },
      { id: 'fc-int-18', front: 'Por que a ausência de generalização não deve ser atribuída automaticamente à criança?', back: 'Porque pode decorrer de outras variáveis modificáveis, como baixa adesão à prática domiciliar ou modelo mal ajustado ao perfil, que devem ser investigadas antes.', tags: ['generalizacao', 'avaliacao'] },
      { id: 'fc-int-19', front: 'O que é hierarquia de produção?', back: 'Progressão da prática de um alvo por diferentes níveis linguísticos: som, sílaba, palavra, frase e fala espontânea.', tags: ['hierarquia-producao'] },
      { id: 'fc-int-20', front: 'Cite um estudo brasileiro que comparou terapia articulatória e Modelo de Oposições Máximas.', back: 'Giacchini (2009): a terapia articulatória exigiu menos sessões para estabilizar a produção do onset complexo em crianças com esse padrão específico — achado de amostra pequena, a ser interpretado com cautela.', tags: ['estudos-comparativos'] },
      { id: 'fc-int-21', front: 'Que tipo de pista terapêutica é usada quando a criança observa o próprio rosto no espelho durante a produção do som?', back: 'Pista visual.', tags: ['pista-terapeutica'] },
      { id: 'fc-int-22', front: 'O que é prática distribuída?', back: 'Organização das tentativas de produção do alvo ao longo de várias sessões, em vez de concentradas em um único período intensivo.', tags: ['pratica-distribuida'] },
      { id: 'fc-int-23', front: 'Por que a inteligibilidade é um critério de priorização de alvos?', back: 'Porque processos que mais comprometem a compreensão da fala tendem a gerar maior impacto funcional, justificando prioridade terapêutica.', tags: ['inteligibilidade', 'priorizacao'] },
      { id: 'fc-int-24', front: 'O Modelo de Oposições Máximas foi adaptado e testado no Brasil por quais autores?', back: 'Bagetti, Mota e Keske-Soares (2005).', tags: ['oposicoes-maximas'] },
      { id: 'fc-int-25', front: 'O Modelo de Oposições Múltiplas foi adaptado e testado no Brasil por qual autora?', back: 'Ceron (2009).', tags: ['oposicoes-multiplas'] },
      { id: 'fc-int-26', front: 'Qual é o papel do monitoramento ao longo da intervenção fonológica?', back: 'Acompanhar a resposta ao tratamento por meio de sondagens de generalização e reavaliações, permitindo ajustar alvos, estratégias e ritmo terapêutico.', tags: ['monitoramento'] },
    ],
    finalSynthesis:
      'A intervenção fonológica é a continuidade lógica da avaliação: parte da análise dos contrastes, dos processos persistentes ou atípicos, da inteligibilidade e do impacto funcional identificados nos módulos anteriores desta unidade para definir prioridades terapêuticas e selecionar alvos, com base em critérios como estimulabilidade, complexidade, frequência e relevância funcional (Edwards, 1992). Distinguir princípio, modelo e estratégia evita o erro de tratar um programa terapêutico específico como se fosse, em si, uma regra universal. Modelos como o de Ciclos, o de Ciclos Modificado, os modelos de pares mínimos e máximos, o de Oposições Múltiplas, o ABAB-Retirada e Provas Múltiplas e o Metaphon oferecem caminhos distintos, fundamentados em lógicas diferentes — processos fonológicos, traços distintivos, relações implicacionais ou consciência metafonológica —, todos voltados à generalização como critério central de eficácia. Estudos brasileiros que adaptaram e testaram alguns desses modelos, assim como uma revisão de escopo recente sobre a produção nacional na área, convergem para uma mesma conclusão: nenhuma abordagem é universalmente superior às demais. A escolha depende do perfil fonológico, motor e funcional de cada criança, da experiência clínica do terapeuta e do acompanhamento contínuo da resposta ao tratamento — que inclui, necessariamente, o envolvimento da família na prática entre as sessões. Este módulo apresentou os princípios, os critérios de seleção de alvos e os principais modelos de intervenção fonológica sustentados pela literatura, sem prescrever nenhum deles como solução única. A organização de um plano terapêutico individual completo, com periodicidade definida, critérios de alta e documentação clínica sistemática, será tratada no Módulo 4 desta unidade, a partir dos fundamentos aqui estabelecidos.',
  },

  references: [
    {
      id: 'ref-tratado2014-cap72',
      authors: 'MOTA, Helena Bolli; WIETHAN, Fernanda Marafiga.',
      title: 'Fonologia – Intervenção',
      source: 'In: MARCHESAN, Irene Queiroz; SILVA, Hilton Justino da; TOMÉ, Marileda Cattelan (org.). Tratado das Especialidades em Fonoaudiologia. São Paulo: Guanabara Koogan, 2014. cap. 72.',
      year: 2014,
      usedIn: ['learn.summary', 'learn.essentialConcepts', 'learn.evidence', 'apply.questions'],
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
      id: 'ref-storkel2022-lshss',
      authors: 'STORKEL, Holly L.',
      title: 'Minimal, Maximal, or Multiple: Which Contrastive Intervention Approach to Use With Children With Speech Sound Disorders?',
      source: 'Language, Speech, and Hearing Services in Schools, v. 53, n. 3, p. 632-645, 2022.',
      year: 2022,
      doi: '10.1044/2021_LSHSS-21-00105',
      usedIn: ['learn.summary', 'learn.evidence'],
    },
    {
      id: 'ref-hodson1983-cycles',
      authors: 'HODSON, Barbara W.; PADEN, Elaine P.',
      title: 'Targeting Intelligible Speech: A Phonological Approach to Remediation',
      source: 'San Diego: College-Hill Press, 1983.',
      year: 1983,
      usedIn: ['learn.summary', 'learn.glossary'],
    },
    {
      id: 'ref-tyler1987-modifiedcycles',
      authors: 'TYLER, Ann A.; EDWARDS, Mary Louise; SAXMAN, John H.',
      title: 'Clinical Application of Two Phonological Treatment Procedures',
      source: 'Journal of Speech and Hearing Disorders, v. 52, n. 4, p. 393-409, 1987. Estudo com amostra pequena (n=4).',
      year: 1987,
      doi: '10.1044/jshd.5204.393',
      usedIn: ['learn.summary', 'apply.questions'],
    },
    {
      id: 'ref-gierut1989-maxopp',
      authors: 'GIERUT, Judith A.',
      title: 'Maximal Opposition Approach to Phonological Treatment',
      source: 'Journal of Speech and Hearing Disorders, v. 54, p. 9-19, 1989.',
      year: 1989,
      doi: '10.1044/jshd.5401.09',
      usedIn: ['learn.summary', 'apply.questions'],
    },
    {
      id: 'ref-bagetti2005-maxoppbr',
      authors: 'BAGETTI, Tanira; MOTA, Helena Bolli; KESKE-SOARES, Márcia.',
      title: 'Modelo de Oposições Máximas Modificado: Uma Proposta de Tratamento para o Desvio Fonológico',
      source: 'Revista da Sociedade Brasileira de Fonoaudiologia, v. 10, n. 1, p. 36-42, 2005. Amostra: 7 crianças (3;10 a 6;9).',
      year: 2005,
      usedIn: ['learn.summary', 'learn.evidence'],
    },
    {
      id: 'ref-williams2000-multopp',
      authors: 'WILLIAMS, A. Lynn.',
      title: 'Multiple Oppositions: Theoretical Foundations for an Alternative Contrastive Intervention Approach',
      source: 'American Journal of Speech-Language Pathology, v. 9, n. 4, p. 282-288, 2000.',
      year: 2000,
      doi: '10.1044/1058-0360.0904.282',
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions', 'apply.fictionalCases'],
    },
    {
      id: 'ref-ceron2009-multoppbr',
      authors: 'CERON, Marizete Ilha.',
      title: 'Oposições Múltiplas: Abordagem Contrastiva para Sujeitos com Desvio Fonológico',
      source: 'Dissertação (Mestrado) — Universidade Federal de Santa Maria, Santa Maria, 2009.',
      year: 2009,
      usedIn: ['learn.summary', 'learn.evidence'],
    },
    {
      id: 'ref-gierut2001-complexity',
      authors: 'GIERUT, Judith A.',
      title: 'Complexity in Phonological Treatment: Clinical Factors',
      source: 'Language, Speech, and Hearing Services in Schools, v. 32, n. 4, p. 229-241, 2001.',
      year: 2001,
      doi: '10.1044/0161-1461(2001/021)',
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-dean1986-metaphon',
      authors: 'DEAN, Elisabeth; HOWELL, Janet.',
      title: 'Developing Linguistic Awareness: A Theoretically Based Approach to Phonological Disorders',
      source: 'British Journal of Disorders of Communication, v. 21, p. 223-238, 1986.',
      year: 1986,
      usedIn: ['learn.summary', 'learn.glossary'],
    },
    {
      id: 'ref-edwards1992-pdi',
      authors: 'EDWARDS, Mary Louise.',
      title: 'Clinical Forum: Phonological Assessment and Treatment in Support of Phonological Processes',
      source: 'Language, Speech, and Hearing Services in Schools, v. 23, p. 233-240, 1992.',
      year: 1992,
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions'],
    },
  ],
})
