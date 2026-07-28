import { defineFonoLabModule } from '@/methodology/fonolab'

export const moduloAfasiasNeurolinguistica = defineFonoLabModule({
  id: 'mod-afasias-neurolinguistica',
  slug: 'afasias-neurolinguistica-adulto',
  title: 'Afasias e Neurolinguística no Adulto e Idoso',
  description:
    'Estudo das alterações de linguagem adquiridas decorrentes de lesões cerebrais focalizadas em adultos e idosos, com foco em diagnóstico diferencial e intervenção baseada em evidências.',
  order: 1,
  learningObjective:
    'Diferenciar os perfis clínicos das principais síndromes afásicas a partir dos eixos de fluência, compreensão e repetição, reconhecendo os limites dessa classificação; compreender o processo de avaliação fonoaudiológica da afasia; e analisar criticamente abordagens de reabilitação baseadas em evidência, sem tratá-las como protocolos universais.',
  prerequisiteKnowledge: [
    'Neuroanatomia funcional do córtex cerebral',
    'Modelos de processamento cognitivo da linguagem',
    'Conceito de plasticidade cerebral',
  ],
  estimatedTimeMinutes: 180,
  difficulty: 'advanced',
  status: 'published',

  learn: {
    summary: [
      {
        id: 'sum-neu-1',
        text: 'A afasia pode ser descrita como um distúrbio de linguagem adquirido, decorrente de lesão de áreas de linguagem do sistema nervoso central — mais frequentemente por Acidente Vascular Encefálico (AVE) no hemisfério esquerdo, mas também por traumatismo cranioencefálico, tumores ou processos neurodegenerativos (Mansur; Machado, 2014). A afasia se diferencia de outros distúrbios neurogênicos de comunicação, como a disartria (alteração motora da execução da fala, por comprometimento de força, tônus ou coordenação da musculatura fonoarticulatória) e a apraxia de fala (alteração do planejamento motor da fala), pois compromete a formulação e/ou a compreensão simbólica da própria linguagem, e não apenas sua execução motora.',
      },
      {
        id: 'sum-neu-2',
        text: 'O estatuto científico da afasia começou a ser delineado no século XIX. Em 1861, Paul Broca descreveu o primeiro caso de afasia motora, localizando a lesão na terceira circunvolução frontal do hemisfério esquerdo — inaugurando o localizacionismo, que associava funções cognitivas a áreas cerebrais circunscritas. Em 1874, Carl Wernicke descreveu um quadro de dificuldade de compreensão áudio-verbal associado a lesões em regiões posteriores do giro temporal superior esquerdo, chamando-o de afasia sensorial (Panhoca, 2014). Essas descrições fundam a classificação clássica das afasias, ainda amplamente usada como referência didática e clínica, mas cuja validade como sistema fechado de categorias é questionada pela neurolinguística contemporânea.',
      },
      {
        id: 'sum-neu-3',
        text: 'A classificação clássica organiza os quadros afásicos a partir de três eixos observáveis: fluência da fala espontânea (produção verbal fluida e de ritmo preservado, ou não-fluente, esforçada e reduzida), compreensão auditiva (capacidade de compreender a linguagem oral) e repetição (capacidade de repetir palavras e frases ouvidas). A combinação desses três eixos permite posicionar um quadro afásico dentro de um conjunto de perfis clássicos, que funcionam como referências de reconhecimento de padrões — e não como categorias diagnósticas rígidas e mutuamente exclusivas.',
      },
      {
        id: 'sum-neu-4',
        text: 'Entre os perfis não-fluentes, a afasia de Broca caracteriza-se por fala esforçada, reduzida, com agramatismo (dificuldade de estruturação sintática, com fala telegráfica) e anomia, enquanto a compreensão auditiva costuma estar relativamente preservada para material simples. A afasia global associa comprometimento grave em todos os eixos — produção, compreensão e repetição —, sendo o quadro mais severo. A afasia transcortical motora assemelha-se à de Broca (não-fluência, compreensão preservada), mas se distingue justamente pela repetição preservada, indicando integridade das vias perissilvianas centrais mesmo com lesão em áreas frontais adjacentes.',
      },
      {
        id: 'sum-neu-5',
        text: 'Entre os perfis fluentes, a afasia de Wernicke apresenta fala fluida em ritmo, porém repleta de parafasias (trocas fonêmicas ou semânticas) e neologismos, com compreensão auditiva gravemente comprometida. A afasia de condução caracteriza-se por um déficit desproporcional na repetição, com fala espontânea e compreensão relativamente preservadas — atribuído classicamente a lesões que desconectam áreas de compreensão e produção. A afasia transcortical sensorial assemelha-se à de Wernicke, mas com repetição preservada. Já a afasia anômica, considerada o quadro mais leve, caracteriza-se por dificuldade predominante de evocação lexical (anomia), com fluência, compreensão e repetição relativamente preservadas.',
      },
      {
        id: 'sum-neu-6',
        text: 'Essa classificação, no entanto, tem limites importantes que devem ser considerados na prática clínica. Uma discussão crítica sobre a semiologia das afasias aponta que apenas cerca de 50% a 60% dos pacientes com lesão na área de Broca desenvolvem uma afasia de Broca persistente, e cerca de 30% das lesões na área de Wernicke resultam em afasia de Wernicke crônica; cerca de 15% das afasias de Broca crônicas ocorrem sem lesão detectável na própria área de Broca (Novaes Pinto; Santana, 2009). Isso significa que perfis mistos e atípicos são frequentes na prática real, e que classificar um paciente em uma categoria fechada pode obscurecer variações clinicamente relevantes no processamento da linguagem daquele indivíduo específico.',
      },
      {
        id: 'sum-neu-7',
        text: 'A avaliação fonoaudiológica da afasia é um processo abrangente, que inclui componentes cognitivos, linguísticos e pragmáticos de forma integrada, sem se restringir à busca por déficits: deve também valorizar habilidades preservadas, compensações e dados sobre qualidade de vida e participação social (Mansur; Machado, 2014). Entre os objetivos da avaliação estão contribuir para o diagnóstico da afasia, diferenciar síndromes afásicas, identificar condições que contribuem para o quadro comunicativo, subsidiar a indicação de métodos terapêuticos e verificar efeitos de intervenções ao longo do tempo — nunca apenas confirmar uma categoria diagnóstica isolada.',
      },
      {
        id: 'sum-neu-8',
        text: 'A coleta de dados pode ocorrer por observação direta (situações de conversação, dramatização) ou indireta (relatos de familiares e cuidadores, cuja confiabilidade depende do grau de convívio e da capacidade de observação do informante), usando roteiros como o ASHA-FACS ou o Índice de Efetividade Comunicativa (CETI). Em fase aguda, quando há instabilidade do quadro e frequente confusão mental, protocolos formais extensos não são apropriados; testes de rastreio rápidos ("de beira de leito", como o Frenchay Aphasia Screening Test, o BEST ou o Language Screening Test de Flamand-Roze e colaboradores) permitem uma triagem inicial sem sobrecarregar o paciente.',
      },
      {
        id: 'sum-neu-9',
        text: 'Em fase crônica, com o quadro relativamente estável, testes abrangentes como o Boston Diagnostic Aphasia Examination, a Western Aphasia Battery, a bateria Montreal-Toulouse e a PALPA (de base cognitivista) permitem caracterizar em detalhe os aspectos gramaticais, discursivos, léxico-semânticos e fonológicos do quadro, subsidiando o estabelecimento de um perfil e a comparação longitudinal do desempenho. O grau de disponibilidade desses instrumentos em português brasileiro é desigual entre eles, e não deve ser tratado como equivalente: a bateria Montreal-Toulouse possui versão brasileira completa, adaptada, validada e normatizada (MTL-Brasil); o Boston Diagnostic Aphasia Examination foi traduzido e testado em amostras brasileiras, com dados de referência publicados para parte de seus subtestes; a Western Aphasia Battery-Revised conta apenas com adaptação transcultural preliminar de sua versão de rastreio (screening), em estudo-piloto com amostra pequena; e a PALPA possui apenas adaptação em português europeu, não brasileiro. Testes de habilidades específicas, como o Token Test (versão reduzida, adaptada e validada por Fontanari, 1989) e um teste de nomeação complementar ao Boston (adaptado por Miotto et al.), têm aplicação documentada e consolidada em português brasileiro e complementam essa avaliação. A avaliação da linguagem não deve, porém, ser dissociada da avaliação cognitiva: déficits de atenção, função executiva, memória e praxias frequentemente coexistem com a afasia e podem interagir com ela, exigindo encaminhamento para avaliação neuropsicológica quando indicado.',
      },
      {
        id: 'sum-neu-10',
        text: 'A reabilitação das afasias apoia-se na noção de plasticidade — a capacidade do sistema nervoso central de alterar estrutura e função em resposta a estímulos internos e externos, incluindo o treino terapêutico. Um conjunto de princípios orienta como formular propostas terapêuticas com base em neuroplasticidade: uso (a prática ativa evita degradação funcional), especificidade da experiência, repetição e intensidade do treino, tempo pós-lesão, idade (associada negativamente à magnitude da plasticidade), relevância do aprendizado para o paciente, transferência e interferência entre comportamentos aprendidos (Kleim; Jones, 2008, citados por Mansur; Machado, 2014). Esses princípios não determinam um protocolo único, mas orientam decisões sobre como e quando intervir.',
      },
      {
        id: 'sum-neu-11',
        text: 'Historicamente, a reabilitação apoiou-se em modelos cognitivistas, que fracionam o processamento da linguagem em etapas (por exemplo, da percepção sonora ao acesso ao sistema semântico) e buscam localizar o nível de processamento alterado para dirigir a terapia a ele — seja pela recuperação específica do déficit, seja pela substituição funcional por vias alternativas. Um estudo de caso brasileiro relatou o programa de reabilitação de um paciente com afasia de condução e dislexia fonológica, com melhora quantificável no número de respostas corretas de leitura após 22 sessões estruturadas nesses princípios (Carthery-Goulart; Senaha, 2007, citados por Mansur; Machado, 2014) — um resultado ilustrativo, mas limitado por se tratar de um único caso, sem permitir generalização direta a outros perfis.',
      },
      {
        id: 'sum-neu-12',
        text: 'A virada do século trouxe abordagens de base mais diretamente neurobiológica. A Terapia por Restrição Induzida da Linguagem (Constraint Induced Language Therapy, CILT) estimula o uso exclusivo da linguagem verbal, mesmo com dificuldade, evitando a compensação por gestos, desenhos ou escrita — sob a hipótese de que a compensação recruta funções saudáveis e reduz a estimulação das regiões prejudicadas. É aplicada de forma intensiva (tipicamente mais de três horas diárias, cinco vezes por semana), por meio de jogos em grupo, e mostrou manutenção de ganhos por seis meses em afásicos crônicos; programas experimentais testaram inclusive o treinamento de cuidadores leigos para conduzir a prática domiciliar de forma intensiva (Meinzer et al., citados por Mansur; Machado, 2014). Essa intensidade, no entanto, é de difícil viabilização na maior parte dos contextos assistenciais.',
      },
      {
        id: 'sum-neu-13',
        text: 'A Análise de Traços Semânticos (Semantic Feature Analysis, SFA) busca ampliar o resgate lexical incentivando o paciente a produzir palavras relacionadas ao alvo — categoria semântica, uso, ações, propriedades, associações — ativando a rede semântica ao redor da palavra-alvo até que seu nome seja resgatado acima do limiar de ativação. Já as terapias que recrutam o hemisfério direito, como a Terapia de Entonação Melódica (Melodic Intonation Therapy, MIT), utilizam entonação e ritmo para induzir a produção verbal em pacientes com afasia não-fluente grave e estereotipias persistentes, sendo indicadas sobretudo quando a compreensão auditiva está relativamente preservada (Norton et al., 2009).',
      },
      {
        id: 'sum-neu-14',
        text: 'Um estudo de neuroimagem com ressonância de difusão identificou aumento do número de fibras e do volume do fascículo arqueado — via de substância branca relacionada à repetição e à produção verbal — após terapia intensiva baseada em entonação em pacientes com afasia de Broca crônica (Schlaug; Marchina; Norton, 2009). Trata-se, porém, de um estudo com amostra muito pequena (seis pacientes), o que exige cautela antes de generalizar o achado como evidência definitiva de que a MIT produz reorganização estrutural em qualquer perfil de paciente; o achado é promissor, mas preliminar.',
      },
      {
        id: 'sum-neu-15',
        text: 'A estimulação multimodal, como a Leitura Oral para Linguagem em Afasia (Oral Reading for Language in Aphasia, ORLA), baseia-se em leitura repetida e sistemática de frases e parágrafos em voz alta, inicialmente em uníssono com o terapeuta, com estímulos graduados em dificuldade crescente. Diferentes níveis de gravidade respondem de forma distinta: na afasia grave observa-se sobretudo melhora da leitura; na moderada, do discurso; e da leve à moderada, de escrita e discurso — o que reforça que a escolha da abordagem deve considerar o perfil específico do paciente, e não uma indicação genérica válida para toda a população afásica.',
      },
      {
        id: 'sum-neu-16',
        text: 'Abordagens ecológicas como o método PACE (Promoting Aphasics\' Communicative Effectiveness) partem de outro princípio: em vez de restringir canais de comunicação, aceitam qualquer modalidade — fala, gestos, desenho, escrita — como resposta legítima em uma troca comunicativa real entre paciente e parceiro (Davis; Wilcox, 1981). Coerente com esse princípio ecológico, uma revisão sistemática sobre treinamento de parceiros de comunicação (familiares e cuidadores) reuniu evidências de que capacitar esses parceiros nas estratégias de facilitação da comunicação é um componente relevante da reabilitação, e não um complemento opcional (Simmons-Mackie et al., 2010) — a intervenção fonoaudiológica na afasia não deve, portanto, restringir-se ao consultório.',
      },
      {
        id: 'sum-neu-17',
        text: 'Este módulo teve como foco os aspectos linguísticos do diagnóstico diferencial e da reabilitação da afasia. É importante destacar, contudo, que nenhuma dessas abordagens — cognitivista, CILT, SFA, MIT, ORLA ou PACE — deve ser tratada como protocolo universal aplicável a qualquer paciente afásico: a escolha depende do perfil clínico, da fase do quadro, da tolerância à intensidade proposta e dos recursos disponíveis. Um projeto de reabilitação responsável deve incluir, além dos aspectos linguísticos, os aspectos psicossociais e emocionais, e a integração e participação do indivíduo com afasia em sua comunidade, de modo a garantir qualidade de vida (Mansur; Machado, 2014) — retomando o princípio, já central nesta plataforma, de que decisões clínicas responsáveis resultam da individualização e da integração de múltiplas fontes de informação.',
      },
    ],
    mainIdea:
      'As afasias são distúrbios de linguagem adquiridos, classicamente descritos a partir dos eixos de fluência, compreensão e repetição — uma classificação útil, mas com limites conhecidos, já que perfis mistos são frequentes. O diagnóstico diferencial depende de avaliação abrangente e integrada à avaliação cognitiva, e a reabilitação reúne abordagens cognitivistas e neurobiológicas (CILT, SFA, MIT, ORLA, PACE) que devem ser escolhidas conforme o perfil do paciente, nunca aplicadas como protocolo único, sempre articuladas à participação da família e à inclusão social.',
    essentialConcepts: [
      {
        id: 'conc-afasia',
        term: 'Afasia',
        definition:
          'Distúrbio de linguagem adquirido, decorrente de lesão de áreas de linguagem do sistema nervoso central, que compromete a formulação e/ou compreensão simbólica da linguagem — distinto de disartria e apraxia de fala, que afetam a execução ou o planejamento motor da fala.',
        example: 'Paciente pós-AVE que compreende bem, mas não consegue formular frases gramaticalmente completas, apesar de ter musculatura orofacial preservada.',
      },
      {
        id: 'conc-af-broca',
        term: 'Afasia de Broca',
        definition:
          'Afasia não-fluente por lesão frontal esquerda (área de Broca e adjacências). Caracteriza-se por produção verbal esforçada e reduzida, agramatismo e anomia, com compreensão auditiva relativamente preservada para material simples.',
        example: 'Paciente que compreende ordens do terapeuta mas se expressa apenas com palavras isoladas, ex.: "água... copo... dar".',
      },
      {
        id: 'conc-af-wernicke',
        term: 'Afasia de Wernicke',
        definition:
          'Afasia fluente por lesão temporal posterior esquerda. Caracteriza-se por fala fluida em ritmo, porém incompreensível pelo uso de parafasias e neologismos, com grave déficit de compreensão auditiva.',
        example: 'Paciente que fala sem parar de forma articulada, mas sem sentido: "o trator de sol voou nas canetas do mar".',
      },
      {
        id: 'conc-af-conducao',
        term: 'Afasia de Condução',
        definition:
          'Afasia fluente caracterizada por déficit desproporcional na repetição de palavras e frases, com fala espontânea e compreensão auditiva relativamente preservadas.',
        example: 'Paciente que usa a palavra "computador" espontaneamente, mas ao ser solicitado a repeti-la produz parafasias sucessivas.',
      },
      {
        id: 'conc-af-global',
        term: 'Afasia Global',
        definition:
          'Quadro afásico mais grave, com comprometimento acentuado simultâneo de fluência, compreensão auditiva e repetição, geralmente associado a lesões extensas.',
        example: 'Paciente com produção verbal praticamente ausente e compreensão de ordens simples muito reduzida logo após um AVE extenso.',
      },
      {
        id: 'conc-af-anomica',
        term: 'Afasia Anômica',
        definition:
          'Considerada o quadro afásico mais leve, caracteriza-se predominantemente por dificuldade de evocação lexical (anomia), com fluência, compreensão e repetição relativamente preservadas.',
        example: 'Paciente que sabe para que serve uma "chave", consegue usá-la corretamente na frase, mas não consegue evocar a palavra quando solicitado.',
      },
      {
        id: 'conc-af-transcortical-motora',
        term: 'Afasia Transcortical Motora',
        definition:
          'Afasia não-fluente semelhante à de Broca, mas distinta por apresentar repetição preservada, indicando integridade das vias perissilvianas centrais mesmo com lesão em áreas frontais adjacentes.',
        example: 'Paciente com fala espontânea reduzida e esforçada, mas capaz de repetir corretamente frases longas ditas pelo examinador.',
      },
      {
        id: 'conc-af-transcortical-sensorial',
        term: 'Afasia Transcortical Sensorial',
        definition:
          'Afasia fluente semelhante à de Wernicke quanto à compreensão comprometida e às parafasias, mas distinta por apresentar repetição preservada.',
        example: 'Paciente com fala fluente e pouco compreensível que, ainda assim, repete corretamente frases ouvidas, mesmo sem compreendê-las.',
      },
      {
        id: 'conc-classificacao-limites',
        term: 'Limites da classificação clássica',
        definition:
          'Reconhecimento de que a classificação por fluência, compreensão e repetição é uma referência de reconhecimento de padrões, e não um sistema fechado: perfis mistos e atípicos são frequentes na prática clínica real.',
        example: 'Paciente cuja apresentação não se encaixa integralmente em nenhuma síndrome clássica, exigindo descrição funcional detalhada em vez de rótulo único.',
      },
      {
        id: 'conc-plasticidade-afasia',
        term: 'Plasticidade cerebral (na reabilitação da afasia)',
        definition:
          'Capacidade do sistema nervoso central de alterar estrutura e função em resposta a estímulos, incluindo o treino terapêutico; fundamenta os princípios de uso, especificidade, intensidade, tempo, idade, relevância, transferência e interferência que orientam a reabilitação.',
        example: 'Reorganização de áreas cerebrais adjacentes ou homólogas contralaterais para sustentar funções de linguagem após lesão.',
      },
      {
        id: 'conc-cilt',
        term: 'Terapia por Restrição Induzida da Linguagem (CILT)',
        definition:
          'Abordagem neurobiológica intensiva que estimula exclusivamente a linguagem verbal, restringindo estratégias compensatórias (gestos, desenho, escrita), geralmente por meio de jogos em grupo com prática de várias horas diárias.',
        example: 'Jogo de cartas em que os participantes só podem pedir a carta desejada verbalmente, sem apontar ou desenhar.',
      },
      {
        id: 'conc-sfa',
        term: 'Análise de Traços Semânticos (SFA)',
        definition:
          'Técnica que amplia o resgate lexical por meio da produção de palavras relacionadas ao alvo (categoria, uso, ação, propriedades, associações), ativando a rede semântica até facilitar o resgate da palavra-alvo.',
        example: 'Diante da figura de um "cachorro", o paciente é estimulado a dizer "late", "tem quatro patas", "é um animal de estimação" antes de tentar nomear.',
      },
      {
        id: 'conc-mit',
        term: 'Terapia de Entonação Melódica (MIT)',
        definition:
          'Técnica que usa entonação melódica e ritmo, associados a toques com a mão, para recrutar vias do hemisfério direito e facilitar a produção verbal em afasias não-fluentes graves com boa compreensão.',
        example: 'Entoar "eu-que-ro-á-gua" em melodia simples e ritmo constante, acompanhando com toques rítmicos da mão.',
      },
      {
        id: 'conc-orla',
        term: 'Leitura Oral para Linguagem em Afasia (ORLA)',
        definition:
          'Abordagem de estimulação multimodal baseada em leitura repetida e sistemática de frases em voz alta, inicialmente em uníssono com o terapeuta, com estímulos graduados em dificuldade crescente.',
        example: 'Ler em conjunto com o terapeuta uma frase curta várias vezes, até conseguir lê-la de forma independente.',
      },
      {
        id: 'conc-pace',
        term: 'Método PACE',
        definition:
          'Abordagem ecológica de reabilitação comunicativa em que paciente e terapeuta trocam mensagens reais usando qualquer canal de comunicação disponível, valorizando o sucesso da mensagem sobre a perfeição da fala.',
        example: 'Terapeuta e paciente trocam informações sobre uma figura sem que o outro a veja, usando fala, gestos ou desenhos.',
      },
      {
        id: 'conc-treino-parceiro',
        term: 'Treinamento de parceiro de comunicação',
        definition:
          'Capacitação de familiares e cuidadores em estratégias que facilitam a comunicação com a pessoa afásica no cotidiano, reconhecida por revisão sistemática como componente relevante da reabilitação, e não apenas um complemento.',
        example: 'Orientar um familiar a usar frases curtas, dar tempo de resposta e aceitar gestos como resposta válida durante uma conversa.',
      },
    ],
    evidence: [
      {
        id: 'ev-neu-1',
        claim:
          'Apenas cerca de 50% a 60% dos pacientes com lesão na área de Broca desenvolvem afasia de Broca persistente, cerca de 30% das lesões na área de Wernicke resultam em afasia de Wernicke crônica, e cerca de 15% das afasias de Broca crônicas ocorrem sem lesão detectável na própria área de Broca.',
        source: 'Novaes Pinto; Santana (2009)',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'Reforça que a classificação clássica (Broca/Wernicke/Condução) deve ser usada como referência de reconhecimento de padrões, não como sistema fechado de categorias diagnósticas; perfis mistos são esperados, não exceção.',
      },
      {
        id: 'ev-neu-2',
        claim:
          'Uma revisão sistemática sobre treinamento de parceiros de comunicação em afasia reuniu evidências de que capacitar familiares e cuidadores em estratégias de facilitação da comunicação é um componente relevante da reabilitação.',
        source: 'Simmons-Mackie et al. (2010)',
        evidenceLevel: 'strong',
        clinicalImplication:
          'A intervenção fonoaudiológica na afasia deve incluir sistematicamente o treinamento de parceiros de comunicação, e não se limitar ao atendimento individual em consultório.',
      },
      {
        id: 'ev-neu-3',
        claim:
          'Um estudo de neuroimagem por ressonância de difusão identificou aumento do número de fibras e do volume do fascículo arqueado após terapia intensiva baseada em entonação (MIT) em pacientes com afasia de Broca crônica.',
        source: 'Schlaug; Marchina; Norton (2009)',
        evidenceLevel: 'emerging',
        clinicalImplication:
          'Achado promissor sobre plasticidade estrutural associada à MIT, mas obtido em amostra muito pequena (seis pacientes); não deve ser generalizado como prova definitiva de reorganização estrutural em todos os perfis de afasia não-fluente.',
      },
      {
        id: 'ev-neu-4',
        claim:
          'A Terapia de Entonação Melódica recruta vias do hemisfério direito por meio de entonação e ritmo, sendo racionalmente indicada para pacientes com afasia não-fluente grave, estereotipias persistentes e compreensão auditiva relativamente preservada.',
        source: 'Norton et al. (2009)',
        evidenceLevel: 'expert_opinion',
        clinicalImplication:
          'A indicação da MIT deve considerar o perfil específico (não-fluência grave com boa compreensão), e não ser oferecida indistintamente a qualquer paciente afásico.',
      },
      {
        id: 'ev-neu-5',
        claim:
          'A Terapia por Restrição Induzida da Linguagem (CILT), aplicada de forma intensiva (mais de três horas diárias, cinco vezes por semana) por meio de jogos em grupo, mostrou manutenção de ganhos por seis meses em afásicos crônicos, inclusive com treinamento de cuidadores leigos para prática domiciliar intensiva.',
        source: 'Meinzer; Streiftau; Rockstroh (2007) — citação originalmente identificada em Mansur; Machado (2014), confirmada de forma independente via metadados (Europe PMC); acesso parcial, texto integral não lido',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'A CILT é uma opção com resultados sustentados ao longo do tempo, mas sua exigência de alta intensidade limita a viabilidade em muitos contextos assistenciais, exigindo avaliação realista de recursos antes da indicação.',
      },
      {
        id: 'ev-neu-6',
        claim:
          'Um estudo de caso brasileiro relatou melhora quantificável no número de respostas corretas de leitura em um paciente com afasia de condução e dislexia fonológica, após 22 sessões de reabilitação estruturada em princípios da Neuropsicologia Cognitiva.',
        source: 'Carthery-Goulart; Senaha (2007) — citação originalmente identificada em Mansur; Machado (2014); texto integral lido e confirmado de forma independente via PMC nesta auditoria, incluindo o diagnóstico evolutivo de afasia de condução e as 22 sessões relatadas',
        evidenceLevel: 'emerging',
        clinicalImplication:
          'Ilustra a aplicação de modelos cognitivistas na população brasileira, mas, por se tratar de um único caso, não permite generalizar o resultado a outros perfis ou pacientes.',
      },
      {
        id: 'ev-neu-7',
        claim:
          'A recuperação funcional pós-lesão é mais expressiva nos primeiros meses após o AVE (fase espontânea), com intervenções tardias apresentando ritmo de evolução mais lento, ainda que ganhos continuem sendo relatados após esse período.',
        source: 'Allen et al., citados por Mansur; Machado (2014)',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'A intervenção tardia não deve ser descartada, mas a expectativa de ritmo de progresso deve ser ajustada e comunicada de forma realista à família, sem prometer recuperação equivalente à da fase aguda.',
      },
      {
        id: 'ev-neu-8',
        claim:
          'Princípios de neuroplasticidade experience-dependent (uso, especificidade, repetição e intensidade do treino, tempo, idade, relevância, transferência e interferência) fundamentam a formulação de propostas de reabilitação em afasia.',
        source: 'Kleim; Jones, citados por Mansur; Machado (2014)',
        evidenceLevel: 'expert_opinion',
        clinicalImplication:
          'Esses princípios orientam decisões terapêuticas (por exemplo, sobre intensidade e relevância funcional dos estímulos), mas não determinam um protocolo único válido para todos os pacientes.',
      },
      {
        id: 'ev-neu-9',
        claim:
          'Instrumentos de rastreio rápido desenvolvidos para a fase aguda do AVE, como o Language Screening Test, permitem avaliação da linguagem nas primeiras 24 horas após a lesão, quando protocolos formais extensos não são apropriados.',
        source: 'Flamand-Roze et al., citados por Mansur; Machado (2014)',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'Reforça a necessidade de adequar o instrumento de avaliação à fase clínica do paciente, evitando a aplicação de baterias extensas em momentos de instabilidade neurológica.',
      },
    ],
    limitations: [
      {
        id: 'lim-neu-1',
        description:
          'O diagnóstico de afasia baseado nas categorias clássicas (Broca, Wernicke, Condução etc.) é idealizado; na prática clínica real, a maioria dos quadros apresenta perfis mistos ou atípicos, dada a natureza variável de cada lesão cerebral.',
      },
      {
        id: 'lim-neu-2',
        description:
          'Testes formais de afasia exigem capacidade mínima de engajamento do paciente; afasias globais graves ou comorbidades como depressão e apraxia de fala podem mascarar a real competência de compreensão.',
      },
      {
        id: 'lim-neu-3',
        description:
          'O achado de plasticidade estrutural associada à MIT (Schlaug; Marchina; Norton, 2009) baseia-se em amostra muito pequena (seis pacientes), o que limita a força da generalização.',
      },
      {
        id: 'lim-neu-4',
        description:
          'A CILT exige intensidade de prática (mais de três horas diárias, cinco vezes por semana) de difícil viabilização na maior parte dos contextos assistenciais brasileiros, ambulatoriais ou domiciliares.',
      },
      {
        id: 'lim-neu-5',
        description:
          'Abordagens cognitivistas clássicas, embora úteis para especificar a natureza do déficit, tendem a apresentar generalização limitada do aprendizado para situações funcionais do cotidiano.',
      },
      {
        id: 'lim-neu-6',
        description:
          'O grau de disponibilidade em português brasileiro varia conforme o instrumento, e esses termos não são equivalentes entre si: a bateria Montreal-Toulouse possui versão brasileira completa, adaptada, validada e normatizada, publicada comercialmente como MTL-Brasil; o Boston Diagnostic Aphasia Examination foi traduzido e testado em amostras brasileiras, com dados de referência publicados para parte de seus subtestes (compreensão oral), mas sem confirmação de normatização completa de todos os subtestes; a Western Aphasia Battery-Revised conta apenas com uma adaptação transcultural preliminar de sua versão de rastreio (screening test), em estudo-piloto com amostra pequena (Neves et al., 2014), não da bateria integral; a PALPA possui apenas versão adaptada, validada e normatizada em português europeu (Portugal), não em português brasileiro; já o Token Test em versão reduzida (adaptado e validado por Fontanari, 1989) e um teste de nomeação complementar ao Boston (adaptado por Miotto et al.) têm aplicação documentada e consolidada em português brasileiro. Não se deve, portanto, tratar "aplicado em amostra brasileira", "adaptado", "traduzido", "validado" e "normatizado" como sinônimos, nem presumir que a disponibilidade de uma versão de rastreio equivale à disponibilidade da bateria completa.',
      },
      {
        id: 'lim-neu-7',
        description:
          'A fase aguda do AVE, marcada por instabilidade do quadro e frequente confusão mental, limita a aplicação de protocolos formais extensos, exigindo instrumentos de rastreio específicos para esse momento.',
      },
      {
        id: 'lim-neu-8',
        description:
          'A magnitude e o ritmo da recuperação funcional variam conforme idade, tempo pós-lesão, extensão e localização da lesão; não há prognóstico único aplicável a todos os pacientes com afasia.',
      },
      {
        id: 'lim-neu-9',
        description:
          'Relatos de caso único (como o de reabilitação cognitivista em afasia de condução) ilustram princípios, mas não permitem generalização estatística a outros perfis clínicos.',
      },
      {
        id: 'lim-neu-10',
        description:
          'Revisões sobre intervenção tardia (iniciada mais de seis meses após o AVE) sintetizam estudos metodologicamente heterogêneos, o que exige cautela ao comparar diretamente seus resultados.',
      },
      {
        id: 'lim-neu-11',
        description:
          'A avaliação e a terapia centradas exclusivamente no déficit linguístico são insuficientes; aspectos psicossociais, emocionais e de participação social do paciente afásico precisam ser sistematicamente considerados.',
      },
    ],
    simpleExplanation:
      'Imagine que a linguagem funciona como a fiação elétrica de uma casa: existe o interruptor (a parte que "liga" a fala) e a fiação que leva a informação até a lâmpada (a parte que "entende" o que chega). Quando alguém sofre uma lesão cerebral, como um AVE, essa "fiação" pode ser danificada em pontos diferentes — e é aí que aparecem os diferentes tipos de afasia. Se o problema está mais no "interruptor", a pessoa entende bem, mas tem muita dificuldade para falar, com frases curtas e esforçadas — é o padrão parecido com a afasia de Broca. Se o problema está mais na "fiação central" que traduz a informação, a pessoa pode falar bastante e com fluência, mas o que sai não faz muito sentido, e ela também tem dificuldade para entender o que ouve — padrão parecido com a afasia de Wernicke. Só que, na vida real, essa "fiação" raramente quebra de um jeito tão limpo e organizado: por isso, é comum encontrar pessoas com afasia cujo quadro não se encaixa perfeitamente em nenhuma dessas categorias de livro-texto. Por isso o fonoaudiólogo não usa só um rótulo, mas avalia com cuidado o que a pessoa consegue e o que ela tem dificuldade de fazer. Depois da avaliação, existem várias formas de "religar os fios": algumas terapias usam canto e ritmo para ajudar a pessoa a falar de novo; outras pedem que a pessoa só use a fala, sem usar gestos, para forçar esse caminho a se fortalecer; outras aceitam qualquer jeito de se comunicar — fala, gesto, desenho — desde que a mensagem chegue. Nenhuma dessas formas é "a certa" para todo mundo: a escolha depende de como está o "curto-circuito" de cada pessoa. E um ponto muito importante: a família também entra nesse processo, aprendendo a se comunicar melhor com quem tem afasia no dia a dia, porque a reabilitação não deve acontecer só dentro do consultório.',
    conceptMap: {
      centralNode: 'Afasias no Adulto e Idoso',
      nodes: [
        { id: 'n-neu-central', label: 'Afasias no Adulto e Idoso', type: 'central', description: 'Distúrbios de linguagem adquiridos por lesão cerebral focal, com diagnóstico diferencial e reabilitação individualizados.' },
        { id: 'n-neu-classificacao', label: 'Classificação clássica', type: 'primary', description: 'Organização por fluência, compreensão e repetição, com limites conhecidos de validade.' },
        { id: 'n-neu-naofluentes', label: 'Perfis não-fluentes', type: 'secondary', description: 'Broca, Global, Transcortical motora.' },
        { id: 'n-neu-fluentes', label: 'Perfis fluentes', type: 'secondary', description: 'Wernicke, Condução, Transcortical sensorial, Anômica.' },
        { id: 'n-neu-avaliacao', label: 'Avaliação', type: 'primary', description: 'Processo integrado, com testes de rastreio, baterias abrangentes e testes específicos.' },
        { id: 'n-neu-plasticidade', label: 'Plasticidade cerebral', type: 'primary', description: 'Fundamento neurobiológico da reabilitação.' },
        { id: 'n-neu-cognitivista', label: 'Abordagem cognitivista', type: 'application', description: 'Foco no processamento e no déficit específico.' },
        { id: 'n-neu-cilt', label: 'CILT', type: 'application', description: 'Restrição de compensação, prática intensiva.' },
        { id: 'n-neu-sfa', label: 'SFA', type: 'application', description: 'Ativação de redes semânticas para resgate lexical.' },
        { id: 'n-neu-mit', label: 'MIT (hemisfério direito)', type: 'application', description: 'Entonação e ritmo para afasia não-fluente grave.' },
        { id: 'n-neu-pace', label: 'PACE e treino de parceiro', type: 'application', description: 'Abordagem ecológica e envolvimento familiar.' },
      ],
      edges: [
        { id: 'e-neu-1', from: 'n-neu-central', to: 'n-neu-classificacao', label: 'organizada por' },
        { id: 'e-neu-2', from: 'n-neu-classificacao', to: 'n-neu-naofluentes', label: 'inclui' },
        { id: 'e-neu-3', from: 'n-neu-classificacao', to: 'n-neu-fluentes', label: 'inclui' },
        { id: 'e-neu-4', from: 'n-neu-central', to: 'n-neu-avaliacao', label: 'requer' },
        { id: 'e-neu-5', from: 'n-neu-avaliacao', to: 'n-neu-classificacao', label: 'diferencia perfis de' },
        { id: 'e-neu-6', from: 'n-neu-central', to: 'n-neu-plasticidade', label: 'reabilitada com base em' },
        { id: 'e-neu-7', from: 'n-neu-plasticidade', to: 'n-neu-cognitivista', label: 'fundamenta' },
        { id: 'e-neu-8', from: 'n-neu-plasticidade', to: 'n-neu-cilt', label: 'fundamenta' },
        { id: 'e-neu-9', from: 'n-neu-plasticidade', to: 'n-neu-sfa', label: 'fundamenta' },
        { id: 'e-neu-10', from: 'n-neu-plasticidade', to: 'n-neu-mit', label: 'fundamenta' },
        { id: 'e-neu-11', from: 'n-neu-central', to: 'n-neu-pace', label: 'inclui participação familiar via' },
      ],
    },
    glossary: [
      { id: 'gl-neu-1', term: 'Parafasia Fonêmica', definition: 'Substituição, omissão ou transposição indesejada de fonemas na palavra-alvo.', example: 'Dizer "televana" em vez de "televisão".' },
      { id: 'gl-neu-2', term: 'Parafasia Semântica', definition: 'Substituição de uma palavra por outra semanticamente relacionada ao alvo pretendido.', example: 'Dizer "mesa" quando a intenção era "cadeira".' },
      { id: 'gl-neu-3', term: 'Agramatismo', definition: 'Dificuldade de estruturação sintática, com omissão de morfemas gramaticais e verbos auxiliares, resultando em fala telegráfica.', example: 'Expressar-se apenas como "eu... ir... hospital... ontem".' },
      { id: 'gl-neu-4', term: 'Anomia', definition: 'Dificuldade em evocar nomes de objetos ou palavras conhecidas; sintoma comum à maioria das afasias.', example: 'Saber para que serve uma chave, mas não conseguir dizer a palavra "chave".' },
      { id: 'gl-neu-5', term: 'Estereotipia Verbal', definition: 'Repetição involuntária e persistente de uma mesma sílaba, palavra ou frase curta diante de qualquer tentativa de comunicação.', example: 'Um paciente vocalizando "ta-ta-ta" para todas as perguntas.' },
      { id: 'gl-neu-6', term: 'Fluência', definition: 'Eixo classificatório relacionado ao ritmo, à extensão e à fluidez da produção verbal espontânea.', example: 'Fala fluida e de ritmo preservado (fluente) versus fala esforçada e reduzida (não-fluente).' },
      { id: 'gl-neu-7', term: 'Repetição (eixo classificatório)', definition: 'Capacidade de repetir palavras e frases ouvidas, usada como um dos três eixos da classificação clássica das afasias.', example: 'Repetição gravemente comprometida na afasia de condução, apesar de fala espontânea preservada.' },
      { id: 'gl-neu-8', term: 'Neologismo', definition: 'Palavra inventada, sem significado reconhecível na língua, produzida no lugar do item lexical pretendido.', example: 'Produzir "flibornato" em vez de uma palavra real durante a fala espontânea.' },
      { id: 'gl-neu-9', term: 'Jargão Afásico', definition: 'Fala fluente, porém incompreensível, marcada por parafasias e neologismos frequentes.', example: 'Discurso longo e articulado, mas sem sentido compreensível para o ouvinte.' },
      { id: 'gl-neu-10', term: 'Localizacionismo', definition: 'Corrente histórica que associa funções cognitivas específicas a áreas cerebrais circunscritas.', example: 'Associar a produção da fala exclusivamente à área de Broca, no giro frontal inferior esquerdo.' },
      { id: 'gl-neu-11', term: 'Teste de Rastreio ("beira de leito")', definition: 'Instrumento de aplicação rápida, usado em fase aguda ou recente, para triagem inicial da linguagem, sem substituir a avaliação abrangente.', example: 'Aplicar o Language Screening Test nas primeiras 24 horas após um AVE.' },
      { id: 'gl-neu-12', term: 'Bateria Abrangente', definition: 'Instrumento extenso de avaliação, aplicado preferencialmente em fase crônica, que examina múltiplos aspectos da linguagem em diferentes modalidades.', example: 'Boston Diagnostic Aphasia Examination, com subtestes de conversação, compreensão, repetição, leitura e escrita.' },
      { id: 'gl-neu-13', term: 'Neuroplasticidade', definition: 'Capacidade do sistema nervoso central de alterar sua estrutura e função em resposta a estímulos, incluindo o treino terapêutico.', example: 'Reorganização de regiões cerebrais perilesionais ou homólogas contralaterais após lesão.' },
      { id: 'gl-neu-14', term: 'Parceiro de Comunicação', definition: 'Familiar, cuidador ou outra pessoa do convívio da pessoa afásica, capacitado a facilitar a comunicação cotidiana com ela.', example: 'Cônjuge treinado para dar tempo de resposta e aceitar gestos como parte válida da conversa.' },
      { id: 'gl-neu-15', term: 'Comunicação Multimodal', definition: 'Uso combinado de diferentes canais (fala, gestos, desenho, escrita) para garantir o sucesso de uma troca comunicativa.', example: 'Usar um desenho simples para complementar uma palavra que não foi compreendida na fala.' },
      { id: 'gl-neu-16', term: 'Fascículo Arqueado', definition: 'Via de substância branca que conecta áreas posteriores e anteriores da linguagem, relacionada à repetição e à produção verbal.', example: 'Lesões nessa via estão classicamente associadas ao déficit de repetição da afasia de condução.' },
    ],
  },

  apply: {
    questions: [
      {
        id: 'q-neu-1',
        stem: 'O que caracteriza a afasia como um distúrbio de linguagem, diferenciando-a da disartria e da apraxia de fala?',
        alternatives: [
          { id: 'q-neu-1-a', text: 'A afasia compromete a formulação e/ou a compreensão simbólica da linguagem, enquanto a disartria compromete a execução motora da fala e a apraxia compromete o planejamento motor da fala.', isCorrect: true, feedback: 'Correto. Essa distinção é essencial para o diagnóstico diferencial entre distúrbios neurogênicos de comunicação.' },
          { id: 'q-neu-1-b', text: 'Afasia, disartria e apraxia de fala são termos sinônimos, usados de forma intercambiável na prática clínica.', isCorrect: false, feedback: 'Incorreto. São distúrbios distintos, com mecanismos e alvos terapêuticos diferentes.' },
          { id: 'q-neu-1-c', text: 'A afasia é exclusivamente um distúrbio motor da musculatura orofacial.', isCorrect: false, feedback: 'Incorreto. Isso descreveria mais a disartria; a afasia é um distúrbio simbólico da linguagem, não primariamente motor.' },
          { id: 'q-neu-1-d', text: 'A disartria é sempre consequência direta de uma afasia não tratada.', isCorrect: false, feedback: 'Incorreto. Não há essa relação de causalidade; são quadros que podem coexistir, mas têm mecanismos distintos.' },
        ],
        correctAlternativeId: 'q-neu-1-a',
        explanation: 'A afasia é um distúrbio da linguagem simbólica, distinto de alterações motoras da fala como a disartria e a apraxia de fala, ainda que os três quadros possam coexistir em um mesmo paciente neurológico.',
        hint: 'Pense na diferença entre "não conseguir formular a mensagem" e "não conseguir executar motoramente a fala".',
        relatedConceptId: 'conc-afasia',
        referenceId: 'ref-mansurmachado2014-cap85',
      },
      {
        id: 'q-neu-2',
        stem: 'Quais são os três eixos observáveis usados pela classificação clássica das afasias?',
        alternatives: [
          { id: 'q-neu-2-a', text: 'Fluência da fala espontânea, compreensão auditiva e repetição.', isCorrect: true, feedback: 'Correto. A combinação desses três eixos posiciona o quadro dentro dos perfis clássicos de afasia.' },
          { id: 'q-neu-2-b', text: 'Idade do paciente, tempo pós-lesão e escolaridade.', isCorrect: false, feedback: 'Incorreto. Esses fatores influenciam o prognóstico, mas não são os eixos da classificação clássica das síndromes afásicas.' },
          { id: 'q-neu-2-c', text: 'Leitura, escrita e cálculo.', isCorrect: false, feedback: 'Incorreto. Esses são domínios frequentemente avaliados, mas não constituem os três eixos clássicos de classificação.' },
          { id: 'q-neu-2-d', text: 'Força muscular, tônus e coordenação motora da fala.', isCorrect: false, feedback: 'Incorreto. Esses parâmetros são próprios da avaliação de disartria, não da classificação clássica das afasias.' },
        ],
        correctAlternativeId: 'q-neu-2-a',
        explanation: 'Fluência, compreensão auditiva e repetição são os três eixos que, combinados, permitem posicionar um quadro afásico dentro dos perfis clássicos.',
        hint: 'Pense nos três desempenhos comparados entre Broca, Wernicke e Condução.',
        relatedConceptId: 'conc-classificacao-limites',
        referenceId: 'ref-mansurmachado2014-cap85',
      },
      {
        id: 'q-neu-3',
        stem: 'Por que a neuroplasticidade é considerada o fundamento central da reabilitação das afasias?',
        alternatives: [
          { id: 'q-neu-3-a', text: 'Porque é a capacidade do sistema nervoso central de alterar estrutura e função em resposta a estímulos, incluindo o treino terapêutico, sustentando a possibilidade de reorganização funcional após a lesão.', isCorrect: true, feedback: 'Correto. Os princípios de neuroplasticidade orientam decisões sobre uso, intensidade, tempo e relevância dos estímulos terapêuticos.' },
          { id: 'q-neu-3-b', text: 'Porque garante que todo paciente afásico recuperará a linguagem por completo, independentemente da gravidade da lesão.', isCorrect: false, feedback: 'Incorreto. A plasticidade sustenta a possibilidade de reorganização, mas não garante recuperação completa em todos os casos.' },
          { id: 'q-neu-3-c', text: 'Porque elimina a necessidade de avaliação cognitiva associada à avaliação de linguagem.', isCorrect: false, feedback: 'Incorreto. A avaliação cognitiva continua sendo necessária, já que déficits de atenção, memória e função executiva podem coexistir com a afasia.' },
          { id: 'q-neu-3-d', text: 'Porque substitui a necessidade de qualquer classificação diagnóstica do quadro afásico.', isCorrect: false, feedback: 'Incorreto. A neuroplasticidade fundamenta a reabilitação, mas não elimina a relevância do diagnóstico diferencial.' },
        ],
        correctAlternativeId: 'q-neu-3-a',
        explanation: 'A neuroplasticidade fundamenta os princípios (uso, especificidade, intensidade, tempo, idade, relevância, transferência, interferência) que orientam as decisões terapêuticas na reabilitação da afasia.',
        hint: 'Pense no que possibilita que o cérebro "reaprenda" ou reorganize funções após uma lesão.',
        relatedConceptId: 'conc-plasticidade-afasia',
        referenceId: 'ref-mansurmachado2014-cap85',
      },
      {
        id: 'q-neu-4',
        stem: 'Qual é a principal diferença entre a afasia de Broca e a afasia de Wernicke?',
        alternatives: [
          { id: 'q-neu-4-a', text: 'A afasia de Broca é não-fluente, com compreensão relativamente preservada; a afasia de Wernicke é fluente, mas com compreensão auditiva gravemente comprometida.', isCorrect: true, feedback: 'Correto. Essa é a diferenciação clássica central entre os dois perfis, apesar dos limites conhecidos dessa classificação.' },
          { id: 'q-neu-4-b', text: 'A afasia de Broca compromete apenas a escrita; a afasia de Wernicke compromete apenas a leitura.', isCorrect: false, feedback: 'Incorreto. Ambas podem comprometer leitura e escrita; a diferenciação central se dá pela fluência e pela compreensão auditiva.' },
          { id: 'q-neu-4-c', text: 'Não há diferença relevante entre as duas; ambas apresentam o mesmo perfil clínico.', isCorrect: false, feedback: 'Incorreto. Apesar dos limites da classificação clássica, os perfis clássicos de Broca e Wernicke são claramente distintos entre si.' },
          { id: 'q-neu-4-d', text: 'A afasia de Broca compromete apenas a repetição; a afasia de Wernicke preserva totalmente a repetição.', isCorrect: false, feedback: 'Incorreto. A repetição pode estar comprometida em ambas; o que as diferencia primariamente é a fluência e a compreensão auditiva.' },
        ],
        correctAlternativeId: 'q-neu-4-a',
        explanation: 'A dicotomia fluência/compreensão é o principal eixo diferenciador clássico entre a afasia de Broca (não-fluente, compreensão preservada) e a de Wernicke (fluente, compreensão comprometida).',
        hint: 'Pense em qual das duas você conseguiria "entender melhor" o que está sendo dito, mesmo que a fala seja difícil de produzir.',
        relatedConceptId: 'conc-af-broca',
        referenceId: 'ref-mansurmachado2014-cap85',
      },
      {
        id: 'q-neu-5',
        stem: 'Como se diferenciam a afasia de Condução e a afasia Transcortical Motora quanto à repetição?',
        alternatives: [
          { id: 'q-neu-5-a', text: 'Na afasia de Condução, a repetição está desproporcionalmente comprometida apesar da fala espontânea fluente; na afasia Transcortical Motora, a repetição está preservada, apesar da não-fluência.', isCorrect: true, feedback: 'Correto. A repetição é justamente o eixo que diferencia esses dois perfis dos demais quadros com fluência semelhante.' },
          { id: 'q-neu-5-b', text: 'Em ambas, a repetição está sempre preservada, sem exceção.', isCorrect: false, feedback: 'Incorreto. Na afasia de Condução, a repetição é classicamente o déficit mais desproporcional do quadro.' },
          { id: 'q-neu-5-c', text: 'Em ambas, a repetição está sempre gravemente comprometida.', isCorrect: false, feedback: 'Incorreto. Na afasia Transcortical Motora, a repetição é justamente o aspecto preservado que a diferencia da afasia de Broca.' },
          { id: 'q-neu-5-d', text: 'A repetição não é um critério relevante para diferenciar esses dois quadros.', isCorrect: false, feedback: 'Incorreto. A repetição é exatamente o critério central de diferenciação entre esses perfis.' },
        ],
        correctAlternativeId: 'q-neu-5-a',
        explanation: 'A repetição comprometida de forma desproporcional caracteriza a afasia de Condução; já sua preservação, apesar da não-fluência, caracteriza a afasia Transcortical Motora.',
        hint: 'Pense em qual dos dois perfis "consegue repetir bem" apesar de outras dificuldades.',
        relatedConceptId: 'conc-af-conducao',
        referenceId: 'ref-mansurmachado2014-cap85',
      },
      {
        id: 'q-neu-6',
        stem: 'Qual é a principal diferença de princípio entre a CILT e o método PACE quanto ao uso de canais de comunicação?',
        alternatives: [
          { id: 'q-neu-6-a', text: 'A CILT restringe o uso de canais compensatórios (gestos, desenho, escrita), estimulando exclusivamente a fala verbal; o PACE aceita qualquer canal de comunicação como resposta legítima.', isCorrect: true, feedback: 'Correto. Essas duas abordagens partem de princípios opostos quanto à compensação multimodal.' },
          { id: 'q-neu-6-b', text: 'Ambas restringem completamente o uso de gestos e desenho, exigindo apenas fala verbal.', isCorrect: false, feedback: 'Incorreto. Apenas a CILT adota essa restrição; o PACE tem princípio oposto.' },
          { id: 'q-neu-6-c', text: 'Ambas aceitam qualquer canal de comunicação, sem qualquer restrição.', isCorrect: false, feedback: 'Incorreto. A CILT restringe deliberadamente canais compensatórios, ao contrário do PACE.' },
          { id: 'q-neu-6-d', text: 'A CILT é usada apenas para escrita, e o PACE apenas para leitura.', isCorrect: false, feedback: 'Incorreto. Nenhuma das duas abordagens se restringe dessa forma.' },
        ],
        correctAlternativeId: 'q-neu-6-a',
        explanation: 'A CILT parte da restrição de canais compensatórios para estimular a fala verbal residual; o PACE parte do princípio oposto, valorizando qualquer canal que garanta o sucesso da mensagem.',
        hint: 'Pense em "restringir para fortalecer" versus "aceitar qualquer canal para garantir a comunicação".',
        relatedConceptId: 'conc-cilt',
        referenceId: 'ref-daviswilcox1981',
      },
      {
        id: 'q-neu-7',
        stem: 'Um paciente apresenta fala fluente, compreensão auditiva relativamente preservada, repetição preservada, mas dificuldade predominante de evocação lexical. Qual perfil é mais compatível com esse quadro?',
        alternatives: [
          { id: 'q-neu-7-a', text: 'Afasia Anômica.', isCorrect: true, feedback: 'Correto. A dificuldade predominante de evocação lexical, com os demais eixos relativamente preservados, é a característica central da afasia anômica.' },
          { id: 'q-neu-7-b', text: 'Afasia de Broca.', isCorrect: false, feedback: 'Incorreto. A afasia de Broca é não-fluente, o que não corresponde ao quadro descrito.' },
          { id: 'q-neu-7-c', text: 'Afasia Global.', isCorrect: false, feedback: 'Incorreto. A afasia global envolve comprometimento grave em todos os eixos, não apenas na evocação lexical.' },
          { id: 'q-neu-7-d', text: 'Afasia de Condução.', isCorrect: false, feedback: 'Incorreto. Na afasia de condução, a repetição estaria desproporcionalmente comprometida, o que não corresponde ao quadro descrito.' },
        ],
        correctAlternativeId: 'q-neu-7-a',
        explanation: 'A afasia anômica é considerada o quadro mais leve dentro da classificação clássica, com dificuldade predominante de evocação lexical e os demais eixos relativamente preservados.',
        hint: 'Pense em qual perfil tem "quase tudo preservado", exceto encontrar a palavra certa.',
        relatedConceptId: 'conc-af-anomica',
        referenceId: 'ref-mansurmachado2014-cap85',
      },
      {
        id: 'q-neu-8',
        stem: 'Um paciente apresenta fala não-fluente e esforçada, compreensão auditiva relativamente preservada, mas repetição preservada — diferentemente do que se esperaria classicamente na afasia de Broca. Qual perfil é mais compatível?',
        alternatives: [
          { id: 'q-neu-8-a', text: 'Afasia Transcortical Motora.', isCorrect: true, feedback: 'Correto. A repetição preservada, apesar da não-fluência, é justamente o que diferencia esse perfil da afasia de Broca clássica.' },
          { id: 'q-neu-8-b', text: 'Afasia de Wernicke.', isCorrect: false, feedback: 'Incorreto. A afasia de Wernicke é fluente, o que não corresponde ao quadro descrito.' },
          { id: 'q-neu-8-c', text: 'Afasia Transcortical Sensorial.', isCorrect: false, feedback: 'Incorreto. Esse perfil é fluente, com compreensão comprometida, o que não corresponde ao quadro descrito.' },
          { id: 'q-neu-8-d', text: 'Afasia Anômica.', isCorrect: false, feedback: 'Incorreto. A afasia anômica é fluente, o que não corresponde à não-fluência descrita no caso.' },
        ],
        correctAlternativeId: 'q-neu-8-a',
        explanation: 'A afasia Transcortical Motora combina não-fluência (como a de Broca) com repetição preservada, indicando integridade das vias perissilvianas centrais.',
        hint: 'Releia com atenção qual eixo está preservado apesar da não-fluência.',
        relatedConceptId: 'conc-af-transcortical-motora',
        referenceId: 'ref-mansurmachado2014-cap85',
      },
      {
        id: 'q-neu-9',
        stem: 'Segundo dados citados na literatura sobre a validade da classificação clássica, qual é a implicação clínica mais adequada do achado de que boa parte das afasias de Broca crônicas ocorre sem lesão detectável na própria área de Broca?',
        alternatives: [
          { id: 'q-neu-9-a', text: 'A classificação clássica deve ser usada com cautela, como referência de reconhecimento de padrões, e não como correspondência rígida e obrigatória entre localização da lesão e síndrome afásica.', isCorrect: true, feedback: 'Correto. Esse achado é um dos argumentos centrais para relativizar a validade da classificação clássica como sistema fechado.' },
          { id: 'q-neu-9-b', text: 'A classificação clássica deve ser abandonada por completo, sem qualquer utilidade clínica ou didática.', isCorrect: false, feedback: 'Incorreto. A classificação continua útil como referência de reconhecimento de padrões; o que se questiona é sua validade como sistema fechado e obrigatório.' },
          { id: 'q-neu-9-c', text: 'Isso prova que a área de Broca nunca está relacionada à produção da fala.', isCorrect: false, feedback: 'Incorreto. O achado relativiza a correspondência rígida entre área e síndrome, mas não nega a relevância da área de Broca para a produção verbal.' },
          { id: 'q-neu-9-d', text: 'Isso significa que exames de neuroimagem deixaram de ser relevantes na avaliação da afasia.', isCorrect: false, feedback: 'Incorreto. A neuroimagem continua relevante; o achado apenas mostra que a correspondência entre localização e síndrome clínica não é absoluta.' },
        ],
        correctAlternativeId: 'q-neu-9-a',
        explanation: 'Achados como esse reforçam que a classificação clássica funciona como referência de reconhecimento de padrões clínicos, e não como uma correspondência anatômica rígida e universal.',
        hint: 'Pense no que esse dado estatístico implica sobre a confiabilidade de "adivinhar" a lesão só pelo quadro clínico, ou vice-versa.',
        relatedConceptId: 'conc-classificacao-limites',
        referenceId: 'ref-novaespintosantana2009',
      },
      {
        id: 'q-neu-10',
        stem: 'Um paciente apresenta afasia de Broca grave, com estereotipia verbal persistente ("ta-ta-ta") e boa compreensão auditiva para ordens simples. Qual abordagem terapêutica inicial é mais coerente com o perfil descrito?',
        alternatives: [
          { id: 'q-neu-10-a', text: 'Terapia de Entonação Melódica (MIT), que usa entonação e ritmo para recrutar vias do hemisfério direito em quadros não-fluentes graves com boa compreensão.', isCorrect: true, feedback: 'Correto. Esse é justamente o perfil clínico para o qual a MIT é racionalmente indicada.' },
          { id: 'q-neu-10-b', text: 'Aplicação imediata da bateria completa do Boston Diagnostic Aphasia Examination, sem qualquer adaptação ao estado emocional do paciente.', isCorrect: false, feedback: 'Incorreto. Testagem formal extensa sem sensibilidade ao estado do paciente pode gerar frustração e recusa, prejudicando o vínculo terapêutico.' },
          { id: 'q-neu-10-c', text: 'Forçar a repetição da palavra incorreta até que a pronúncia seja foneticamente perfeita.', isCorrect: false, feedback: 'Incorreto. Insistir em correções fonéticas rígidas tende a aumentar a ansiedade e os episódios de bloqueio expressivo.' },
          { id: 'q-neu-10-d', text: 'Interromper a intervenção fonoaudiológica, já que a estereotipia indica que o paciente não é capaz de se beneficiar de terapia.', isCorrect: false, feedback: 'Incorreto. A estereotipia verbal persistente é justamente um dos quadros para os quais a MIT tem indicação racional, não um motivo para suspender a intervenção.' },
        ],
        correctAlternativeId: 'q-neu-10-a',
        explanation: 'A MIT é racionalmente indicada para pacientes com afasia não-fluente grave, estereotipias persistentes e boa compreensão auditiva — perfil descrito na questão.',
        hint: 'Pense em qual abordagem foi descrita como indicada justamente para esse tipo de quadro.',
        relatedConceptId: 'conc-mit',
        referenceId: 'ref-norton2009-mit',
      },
      {
        id: 'q-neu-11',
        stem: 'Um paciente crônico com afasia leve tende a compensar suas dificuldades de fala recorrendo excessivamente a gestos e desenhos, mesmo quando teria condições de tentar a produção verbal. Qual conduta é mais coerente com os princípios discutidos neste módulo antes de indicar a CILT?',
        alternatives: [
          { id: 'q-neu-11-a', text: 'Avaliar se o paciente tem tolerância clínica e disponibilidade de tempo para a intensidade exigida pela CILT (várias horas diárias, várias vezes por semana) antes de indicá-la, considerando também alternativas menos intensivas.', isCorrect: true, feedback: 'Correto. A indicação de qualquer abordagem intensiva deve considerar viabilidade real, e não apenas adequação teórica ao perfil clínico.' },
          { id: 'q-neu-11-b', text: 'Indicar a CILT imediatamente para todos os pacientes que usam gestos, independentemente da disponibilidade de tempo ou tolerância à intensidade da prática.', isCorrect: false, feedback: 'Incorreto. A exigência de alta intensidade da CILT torna necessária uma avaliação prévia de viabilidade, não uma indicação automática.' },
          { id: 'q-neu-11-c', text: 'Proibir definitivamente o uso de qualquer gesto pelo paciente em todos os contextos, inclusive fora da terapia, sem qualquer avaliação prévia.', isCorrect: false, feedback: 'Incorreto. Essa conduta radicaliza o princípio da CILT sem considerar a viabilidade e o impacto na comunicação cotidiana do paciente.' },
          { id: 'q-neu-11-d', text: 'Concluir que o uso de gestos é sempre prejudicial e deve ser eliminado imediatamente em qualquer paciente afásico.', isCorrect: false, feedback: 'Incorreto. A restrição de canais compensatórios é um princípio específico da CILT, não uma regra geral válida para toda a reabilitação de afasia.' },
        ],
        correctAlternativeId: 'q-neu-11-a',
        explanation: 'A escolha de uma abordagem intensiva como a CILT deve considerar viabilidade prática (tempo, tolerância, recursos), e não apenas a adequação teórica do princípio de restrição de compensação ao perfil do paciente.',
        hint: 'Pense nas limitações práticas de aplicar uma terapia de altíssima intensidade fora de um contexto de pesquisa controlada.',
        relatedConceptId: 'conc-cilt',
        referenceId: 'ref-meinzer2007',
      },
      {
        id: 'q-neu-12',
        stem: 'A família de um paciente com afasia de Wernicke, que tem baixa consciência de seus próprios erros de fala, relata dificuldade e frustração na comunicação diária em casa. Qual conduta é mais coerente com os princípios discutidos neste módulo?',
        alternatives: [
          { id: 'q-neu-12-a', text: 'Treinar a família em estratégias de facilitação da comunicação (dar tempo de resposta, usar frases curtas, aceitar diferentes canais de comunicação), reconhecendo o treinamento de parceiros como componente relevante da reabilitação.', isCorrect: true, feedback: 'Correto. A revisão sistemática sobre treinamento de parceiros de comunicação reforça que capacitar a família é parte relevante da reabilitação, não um complemento opcional.' },
          { id: 'q-neu-12-b', text: 'Orientar a família a corrigir sistematicamente cada erro de fala do paciente, insistindo até que a produção esteja foneticamente correta.', isCorrect: false, feedback: 'Incorreto. Correções sistemáticas e rígidas tendem a aumentar a frustração, sem evidência de que produzam melhora funcional na comunicação cotidiana.' },
          { id: 'q-neu-12-c', text: 'Informar à família que a comunicação em casa não é responsabilidade da intervenção fonoaudiológica, que deve se restringir ao consultório.', isCorrect: false, feedback: 'Incorreto. A reabilitação da afasia não deve se restringir ao consultório, especialmente diante de evidência sobre o valor do treinamento de parceiros de comunicação.' },
          { id: 'q-neu-12-d', text: 'Concluir que, por ter baixa consciência dos próprios erros, o paciente não é capaz de se beneficiar de qualquer estratégia de comunicação facilitada.', isCorrect: false, feedback: 'Incorreto. A baixa consciência de erro não impede que estratégias de facilitação da comunicação, aplicadas pelo parceiro, melhorem a comunicação cotidiana.' },
        ],
        correctAlternativeId: 'q-neu-12-a',
        explanation: 'O treinamento de parceiros de comunicação é reconhecido por revisão sistemática como componente relevante da reabilitação da afasia, especialmente diante de dificuldades relatadas na comunicação familiar cotidiana.',
        hint: 'Pense no papel da família como parte ativa do processo terapêutico, e não apenas como espectadora.',
        relatedConceptId: 'conc-treino-parceiro',
        referenceId: 'ref-simmonsmackie2010',
      },
    ],
    associations: [
      {
        id: 'assoc-neu-1',
        instruction: 'Associe cada perfil afásico clássico ao seu padrão característico de fluência, compreensão e repetição.',
        pairs: [
          { id: 'p-neu-1', left: 'Afasia de Broca', right: 'Não-fluente, compreensão preservada, repetição comprometida' },
          { id: 'p-neu-2', left: 'Afasia de Wernicke', right: 'Fluente, compreensão gravemente comprometida, parafasias' },
          { id: 'p-neu-3', left: 'Afasia de Condução', right: 'Fluente, compreensão preservada, repetição desproporcionalmente comprometida' },
          { id: 'p-neu-4', left: 'Afasia Global', right: 'Comprometimento grave em fluência, compreensão e repetição' },
          { id: 'p-neu-5', left: 'Afasia Anômica', right: 'Fluente, compreensão e repetição preservadas, anomia predominante' },
          { id: 'p-neu-6', left: 'Afasia Transcortical Motora', right: 'Não-fluente, compreensão preservada, repetição preservada' },
          { id: 'p-neu-7', left: 'Afasia Transcortical Sensorial', right: 'Fluente, compreensão comprometida, repetição preservada' },
        ],
      },
      {
        id: 'assoc-neu-2',
        instruction: 'Associe cada abordagem de reabilitação ao seu princípio ou mecanismo central.',
        pairs: [
          { id: 'p-neu-8', left: 'Terapia de Entonação Melódica (MIT)', right: 'Entonação e ritmo para recrutar vias do hemisfério direito' },
          { id: 'p-neu-9', left: 'Terapia por Restrição Induzida (CILT)', right: 'Restrição de canais compensatórios, prática intensiva' },
          { id: 'p-neu-10', left: 'Análise de Traços Semânticos (SFA)', right: 'Ativação de redes semânticas ao redor da palavra-alvo' },
          { id: 'p-neu-11', left: 'Método PACE', right: 'Aceitação de qualquer canal em troca comunicativa real' },
          { id: 'p-neu-12', left: 'ORLA', right: 'Leitura repetida em voz alta, com estímulos multimodais graduados' },
          { id: 'p-neu-13', left: 'Treinamento de parceiro de comunicação', right: 'Capacitação de familiares em estratégias de facilitação cotidiana' },
        ],
      },
    ],
    decisionExercises: [
      {
        id: 'dec-neu-1',
        situation:
          'Um paciente com afasia de Broca grave, avaliado há poucas semanas após um AVE, apresenta estereotipia verbal persistente e grande frustração ao tentar falar. A compreensão de ordens simples está preservada. O terapeuta precisa decidir a linha terapêutica inicial.',
        options: [
          { id: 'dec-neu-1-o1', text: 'Iniciar com uma abordagem melódica (MIT), aproveitando ritmo e entonação para tentar contornar a estereotipia e recrutar vias alternativas de produção verbal.', consequence: 'Coerente com a indicação racional descrita para esse perfil (não-fluência grave, estereotipia, boa compreensão), com chance de reduzir a frustração inicial e favorecer pequenas produções funcionais.', explanation: 'A MIT é indicada justamente para quadros de afasia não-fluente grave com estereotipias persistentes e compreensão relativamente preservada.', isRecommended: true },
          { id: 'dec-neu-1-o2', text: 'Aplicar imediatamente uma bateria formal extensa e completa, exigindo desempenho normatizado desde a primeira sessão.', consequence: 'Risco elevado de o paciente se frustrar com tarefas que não consegue realizar, prejudicando o vínculo terapêutico logo no início do processo.', explanation: 'Testagem formal extensa sem sensibilidade ao momento emocional do paciente pode comprometer a adesão e a confiança na terapia.', isRecommended: false },
          { id: 'dec-neu-1-o3', text: 'Restringir completamente o uso de qualquer gesto ou expressão não-verbal desde a primeira sessão, seguindo rigidamente o princípio da CILT sem adaptação.', consequence: 'Pode bloquear ainda mais a comunicação do paciente nesta fase inicial, aumentando o sofrimento sem base clara para essa escolha nesse momento específico.', explanation: 'A CILT tem indicação e exigências de intensidade específicas; aplicá-la rigidamente, sem considerar o momento e a tolerância do paciente, não é a conduta mais coerente aqui.', isRecommended: false },
          { id: 'dec-neu-1-o4', text: 'Encerrar a avaliação e adiar qualquer intervenção até que o paciente pare completamente de apresentar a estereotipia verbal.', consequence: 'Atraso desnecessário no início da reabilitação, já que a estereotipia é justamente um dos achados que orienta a escolha terapêutica, não um impeditivo para começar.', explanation: 'A presença de estereotipia verbal não é motivo para adiar a intervenção; é, ao contrário, um dado clínico relevante para orientar a escolha da abordagem.', isRecommended: false },
        ],
      },
      {
        id: 'dec-neu-2',
        situation:
          'Um familiar de uma paciente com afasia de Wernicke pergunta ao fonoaudiólogo: "ela nunca mais vai voltar a ser como antes?", visivelmente angustiado com a dificuldade de se comunicar em casa.',
        options: [
          { id: 'dec-neu-2-o1', text: 'Explicar, com linguagem acessível, que a evolução varia conforme fatores como extensão da lesão, tempo e resposta individual à terapia, sem prometer recuperação total nem negar toda possibilidade de ganho, e oferecer orientação prática sobre estratégias de comunicação em casa.', consequence: 'Fortalece a confiança da família na equipe, ajusta expectativas de forma realista e oferece ferramentas concretas para o cotidiano.', explanation: 'Comunicar prognóstico com honestidade e sem promessas absolutas, associando orientação prática, é consistente com os princípios de plasticidade variável e de participação familiar discutidos neste módulo.', isRecommended: true },
          { id: 'dec-neu-2-o2', text: 'Garantir à família que, com terapia intensiva, a paciente vai voltar a falar exatamente como antes do AVE.', consequence: 'Cria expectativas irreais que podem gerar frustração e desconfiança na equipe caso a evolução não corresponda à promessa feita.', explanation: 'Nenhuma abordagem discutida neste módulo garante recuperação total; prometer isso contraria os princípios de individualização e de prognóstico variável.', isRecommended: false },
          { id: 'dec-neu-2-o3', text: 'Responder que não há nada mais a ser feito e que a família deve apenas se adaptar à situação, sem qualquer orientação adicional.', consequence: 'Desconsidera as possibilidades reais de reabilitação e de melhora da comunicação funcional, além de deixar a família sem qualquer suporte prático.', explanation: 'Essa resposta ignora tanto os princípios de plasticidade quanto o papel do treinamento de parceiros de comunicação na melhora da comunicação cotidiana.', isRecommended: false },
          { id: 'dec-neu-2-o4', text: 'Evitar responder diretamente à pergunta e mudar de assunto, para não lidar com a ansiedade da família.', consequence: 'Perde a oportunidade de esclarecer dúvidas legítimas e de orientar a família sobre estratégias de comunicação, prejudicando a relação de confiança.', explanation: 'Evitar a conversa não protege a família; pelo contrário, priva-a de informações e orientações que poderiam reduzir a angústia e melhorar a comunicação em casa.', isRecommended: false },
        ],
      },
    ],
    fictionalCases: [
      {
        id: 'case-neu-1',
        title: 'Caso fictício: Dona Alzira, 65 anos',
        description:
          'Dona Alzira tem 65 anos, é aposentada e mora com o marido. Há três meses sofreu um AVE isquêmico no hemisfério esquerdo. Na avaliação fonoaudiológica, observa-se: fala espontânea fluente, em ritmo preservado, mas repleta de parafasias fonêmicas e neologismos; compreensão auditiva gravemente comprometida, mesmo para ordens simples; repetição também comprometida. Dona Alzira parece não perceber que sua fala é incompreensível para os demais, seguindo a conversa como se estivesse sendo bem compreendida — uma reduzida consciência do próprio déficit de linguagem frequentemente descrita em quadros com compreensão auditiva gravemente comprometida, e não um comportamento incoerente com o perfil observado. O marido relata muita dificuldade e frustração na comunicação em casa, e não sabe como agir diante das falas "sem sentido" da esposa.',
        disclaimer:
          'Este é um caso fictício, construído exclusivamente para fins didáticos. Não representa nenhuma pessoa real e não deve ser utilizado como modelo de laudo, diagnóstico definitivo ou conduta clínica prescritiva. A avaliação e o diagnóstico diferencial reais exigem exame presencial completo, exames complementares pertinentes e julgamento clínico individualizado.',
        questions: [
          {
            id: 'case-neu-1-q1',
            stem: 'Considerando o padrão de fluência, compreensão e repetição descrito, qual perfil afásico é mais compatível com o quadro de Dona Alzira?',
            alternatives: [
              { id: 'case-neu-1-q1-a', text: 'Afasia de Wernicke, dado o padrão fluente com parafasias e neologismos, associado a compreensão auditiva e repetição comprometidas.', isCorrect: true, feedback: 'Correto. A combinação de fluência preservada com compreensão auditiva e repetição comprometidas, e parafasias/neologismos frequentes, é compatível com o perfil clássico da afasia de Wernicke.' },
              { id: 'case-neu-1-q1-b', text: 'Afasia de Broca, dado o padrão de fala esforçada e reduzida.', isCorrect: false, feedback: 'Incorreto. A descrição indica fala fluente, não esforçada e reduzida, o que não corresponde ao perfil de Broca.' },
              { id: 'case-neu-1-q1-c', text: 'Afasia Transcortical Sensorial, dado que a repetição estaria preservada.', isCorrect: false, feedback: 'Incorreto. No caso descrito, a repetição também está comprometida, o que não corresponde a esse perfil, cuja característica distintiva é justamente a repetição preservada.' },
              { id: 'case-neu-1-q1-d', text: 'Afasia Anômica, dado que os demais eixos estariam preservados.', isCorrect: false, feedback: 'Incorreto. No caso descrito, tanto a compreensão quanto a repetição estão comprometidas, o que não corresponde ao perfil anômico.' },
            ],
            correctAlternativeId: 'case-neu-1-q1-a',
            explanation: 'O padrão de fluência preservada associado a compreensão auditiva e repetição comprometidas, com parafasias e neologismos frequentes, é compatível com o perfil clássico da afasia de Wernicke — sempre considerando que se trata de um padrão de reconhecimento, não uma certeza diagnóstica fechada.',
            hint: 'Releia com atenção os três eixos: fluência, compreensão e repetição.',
            relatedConceptId: 'conc-af-wernicke',
            referenceId: 'ref-mansurmachado2014-cap85',
          },
          {
            id: 'case-neu-1-q2',
            stem: 'Diante da frustração relatada pelo marido de Dona Alzira na comunicação em casa, qual conduta é mais coerente com os princípios discutidos neste módulo?',
            alternatives: [
              { id: 'case-neu-1-q2-a', text: 'Orientar o marido em estratégias de facilitação da comunicação (frases curtas, tempo de resposta, aceitação de diferentes canais), reconhecendo o treinamento de parceiro de comunicação como parte relevante da reabilitação.', isCorrect: true, feedback: 'Correto. O treinamento de parceiros de comunicação é um componente reconhecido da reabilitação, especialmente relevante diante de dificuldade relatada no ambiente familiar.' },
              { id: 'case-neu-1-q2-b', text: 'Orientar o marido a corrigir imediatamente cada parafasia produzida por Dona Alzira, até que a fala esteja completamente correta.', isCorrect: false, feedback: 'Incorreto. Correções sistemáticas e rígidas tendem a aumentar a frustração da paciente, sem evidência de melhora funcional na comunicação cotidiana com esse tipo de conduta.' },
              { id: 'case-neu-1-q2-c', text: 'Informar que a comunicação em casa não é responsabilidade da terapia fonoaudiológica e que o marido deve lidar sozinho com a situação.', isCorrect: false, feedback: 'Incorreto. A reabilitação da afasia não deve se restringir ao consultório; a orientação de parceiros de comunicação é parte reconhecida do processo terapêutico.' },
              { id: 'case-neu-1-q2-d', text: 'Concluir que, por Dona Alzira não perceber seus próprios erros de fala, não há qualquer estratégia possível para melhorar a comunicação em casa.', isCorrect: false, feedback: 'Incorreto. A baixa consciência de erro não impede que estratégias de facilitação aplicadas pelo parceiro melhorem a comunicação cotidiana.' },
            ],
            correctAlternativeId: 'case-neu-1-q2-a',
            explanation: 'Diante de dificuldades relatadas na comunicação familiar, orientar o parceiro de comunicação em estratégias de facilitação é uma conduta consistente com a evidência sobre treinamento de parceiros discutida neste módulo.',
            hint: 'Pense no papel ativo que a família pode ter no processo de reabilitação, e não apenas como espectadora da terapia.',
            relatedConceptId: 'conc-treino-parceiro',
            referenceId: 'ref-simmonsmackie2010',
          },
        ],
      },
    ],
    branchingCases: [
      {
        id: 'bc-neu-geraldo',
        title: 'Decisão Clínica: Seu Geraldo e a Reabilitação da Afasia',
        description: 'Simulação clínica fictícia, construída exclusivamente para fins didáticos: Seu Geraldo, 68 anos, aposentado, sofreu um AVE isquêmico extenso na artéria cerebral média esquerda há 4 semanas. Encontra-se estável neurologicamente, mas apresenta graves prejuízos de linguagem. Não representa nenhuma pessoa real, não deve ser usado como modelo de conduta clínica prescritiva, e a avaliação/diagnóstico diferencial reais exigem exame presencial completo e julgamento clínico individualizado.',
        startSceneId: 'scene-geraldo-start',
        scenes: [
          {
            id: 'scene-geraldo-start',
            title: '1. Acolhimento e Investigação da Fluência',
            text: 'Seu Geraldo entra na sua sala acompanhado pela esposa, Dona Maria. Ele se comunica de forma não-verbal por gestos de cabeça, mas quando tenta falar, produz apenas a sílaba "ta-ta-ta" (estereotipia verbal) com expressão de grande frustração. A compreensão de comandos cotidianos simples parece boa. Qual a sua conduta para iniciar a avaliação diagnóstica?',
            choices: [
              {
                text: 'Aplicar a bateria completa do Teste de Boston para obter pontuações normatizadas rígidas desde a primeira sessão.',
                feedback: 'Seu Geraldo fica extremamente constrangido com as tarefas formais sucessivas que não consegue realizar. Ele chora de frustração e recusa-se a cooperar.',
                nextSceneId: 'scene-geraldo-boston-fail',
                isRecommended: false
              },
              {
                text: 'Iniciar com uma avaliação informal de compreensão (perguntas simples de sim/não e execução de ordens lúdicas) e análise da comunicação funcional.',
                feedback: 'Excelente. Seu Geraldo mostra-se cooperativo. Você confirma que ele compreende ordens de até dois passos (ex: "pegue a caneta e me entregue"), mas sua expressão é restrita a gestos e à estereotipia "ta-ta".',
                nextSceneId: 'scene-geraldo-reab-planning',
                isRecommended: true
              }
            ]
          },
          {
            id: 'scene-geraldo-boston-fail',
            title: 'Recuperando o Vínculo Terapêutico',
            text: 'Após a frustração com o teste formal, Seu Geraldo está desmotivado. Dona Maria pergunta se ele nunca mais vai conseguir falar. Como você redireciona o processo?',
            choices: [
              {
                text: 'Pausar a testagem formal e propor uma atividade lúdica de reconhecimento de objetos de uso pessoal trazidos de casa com ajuda da esposa.',
                feedback: 'Muito bom. Seu Geraldo recupera a calma e a confiança ao conseguir apontar corretamente para seus óculos, carteira e fotos da família, demonstrando boa compreensão.',
                nextSceneId: 'scene-geraldo-reab-planning',
                isRecommended: true
              },
              {
                text: 'Insistir que o teste de Boston é indispensável para fins de relatório médico e continuar a aplicação.',
                feedback: 'Seu Geraldo se recusa a responder e Dona Maria decide encerrar a sessão devido ao sofrimento emocional do marido.',
                nextSceneId: 'scene-geraldo-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'scene-geraldo-reab-planning',
            title: '2. Escolha da Abordagem de Reabilitação',
            text: 'Com a impressão diagnóstica de afasia de Broca grave (com estereotipia verbal persistente), compatível com os achados da avaliação informal realizada e a confirmar em avaliação formal mais aprofundada, você precisa selecionar a linha terapêutica inicial para o trabalho com Seu Geraldo. Qual a sua escolha?',
            choices: [
              {
                text: 'Implementar a Terapia de Entonação Melódica (MIT), aproveitando a melodia e o ritmo para recrutar o hemisfério direito.',
                feedback: 'Escolha brilhante. Seu Geraldo responde muito bem ao cantarolar. O ritmo permite que ele iniba a estereotipia "ta-ta" e consiga vocalizar pequenas palavras funcionais entonadas como "oi", "bom dia" e "água".',
                nextSceneId: 'scene-geraldo-family-training',
                isRecommended: true
              },
              {
                text: 'Aplicar a Terapia CILT (Restrição Induzida de Linguagem), proibindo o uso de gestos e obrigando a expressão estritamente falada.',
                feedback: 'Decisão inadequada para este perfil e esta fase: a CILT foi estudada sobretudo em afásicos crônicos com maior tolerância à prática intensiva, não em quadro subagudo (4 semanas) com afasia não-fluente grave e estereotipia persistente. Sem o apoio gestual e sem ferramentas expressivas, Seu Geraldo fica bloqueado por minutos e entra em sofrimento emocional crônico.',
                nextSceneId: 'scene-geraldo-cilt-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'scene-geraldo-cilt-fail',
            title: 'Contornando a Frustração na Terapia',
            text: 'A restrição absoluta de gestos na CILT falhou e Seu Geraldo demonstra apatia. O que você faz para restabelecer o progresso?',
            choices: [
              {
                text: 'Flexibilizar o protocolo, introduzindo pistas melódicas (MIT) e permitindo o uso de gestos naturais como apoio.',
                feedback: 'Correto. A introdução de melodia reduz o bloqueio motor e os gestos aliviam o estresse comunicativo, permitindo que ele volte a produzir emissões funcionais.',
                nextSceneId: 'scene-geraldo-family-training',
                isRecommended: true
              },
              {
                text: 'Orientar a esposa a manter a restrição rigorosa de gestos também em casa para acelerar a neuroplasticidade.',
                feedback: 'A rigidez em casa gera brigas no ambiente familiar e Seu Geraldo entra em quadro de isolamento social e depressão reativa.',
                nextSceneId: 'scene-geraldo-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'scene-geraldo-family-training',
            title: '3. Treinamento de Parceiro e Alta Terapêutica',
            text: 'Seu Geraldo já consegue expressar necessidades básicas com apoio de entonação melódica na terapia e gestos simples. Agora, você deve treinar Dona Maria para otimizar a comunicação diária em casa. Qual a sua orientação?',
            choices: [
              {
                text: 'Treinar Dona Maria nos princípios da abordagem PACE, aceitando gestos, desenhos e escrita como respostas válidas e incentivando a troca comunicativa real.',
                feedback: 'Perfeito! Dona Maria aprende a facilitar o diálogo. A comunicação flui melhor no dia a dia, e Seu Geraldo passa a interagir de forma ativa e confiante nas conversações familiares.',
                nextSceneId: 'scene-geraldo-success',
                isRecommended: true
              },
              {
                text: 'Pedir para Dona Maria fingir que não entende os gestos de Seu Geraldo, exigindo que ele fale tudo verbalmente para forçá-lo a exercitar a fala.',
                feedback: 'Isso gera atritos constantes. Seu Geraldo desiste de tentar se comunicar com a esposa, piorando a anomia e o isolamento em casa.',
                nextSceneId: 'scene-geraldo-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'scene-geraldo-success',
            title: 'Fim de Simulação — Sucesso Clínico',
            text: 'Parabéns! Você conduziu com excelência a avaliação de Seu Geraldo, soube escolher a Terapia de Entonação Melódica (MIT) no momento ideal para contornar a estereotipia e treinou a família nos princípios comunicativos do PACE, promovendo reabilitação com alta validade ecológica e preservação da dignidade e vínculo social do paciente.',
            choices: []
          },
          {
            id: 'scene-geraldo-end-fail',
            title: 'Fim de Simulação — Conduta Inadequada',
            text: 'A condução terapêutica falhou por rigidez metodológica, desconsiderando os limites emocionais do paciente e gerando sofrimento ou isolamento familiar. Lembre-se de que a comunicação ecológica (PACE) e a flexibilidade são essenciais na reabilitação neurológica.',
            choices: []
          }
        ]
      }
    ],
  },

  review: {
    flashcards: [
      { id: 'fc-neu-f1', front: 'O que diferencia a afasia de disartria e de apraxia de fala?', back: 'A afasia compromete a formulação e/ou compreensão simbólica da linguagem; a disartria compromete a execução motora da fala; a apraxia de fala compromete o planejamento motor da fala.', tags: ['afasia', 'diagnostico-diferencial'] },
      { id: 'fc-neu-f2', front: 'Quais são os três eixos da classificação clássica das afasias?', back: 'Fluência da fala espontânea, compreensão auditiva e repetição.', tags: ['classificacao', 'fluencia'] },
      { id: 'fc-neu-f3', front: 'Qual é o sintoma definidor que diferencia a Afasia de Broca da Afasia de Wernicke?', back: 'A fluência da fala: Broca é não-fluente (esforçada, agramática), enquanto Wernicke é fluente (com jargão e neologismos).', tags: ['broca', 'wernicke'] },
      { id: 'fc-neu-f4', front: 'Como é a repetição na Afasia de Condução?', back: 'Está gravemente e desproporcionalmente comprometida, apesar de fala espontânea e compreensão relativamente preservadas.', tags: ['afasia-conducao', 'repeticao'] },
      { id: 'fc-neu-f5', front: 'O que diferencia a Afasia Transcortical Motora da Afasia de Broca?', back: 'Na Transcortical Motora, a repetição está preservada, apesar da não-fluência; na de Broca, a repetição também costuma estar comprometida.', tags: ['transcortical', 'repeticao'] },
      { id: 'fc-neu-f6', front: 'Qual é a característica central da Afasia Anômica?', back: 'Dificuldade predominante de evocação lexical (anomia), com fluência, compreensão e repetição relativamente preservadas — considerado o quadro mais leve.', tags: ['afasia-anomica'] },
      { id: 'fc-neu-f7', front: 'Qual é a característica central da Afasia Global?', back: 'Comprometimento grave e simultâneo de fluência, compreensão e repetição — o quadro mais severo entre as síndromes clássicas.', tags: ['afasia-global'] },
      { id: 'fc-neu-f8', front: 'Segundo Novaes Pinto e Santana (2009), que porcentagem de lesões na área de Broca resulta em afasia de Broca persistente?', back: 'Aproximadamente 50% a 60%, o que evidencia a variabilidade e os limites da correspondência rígida entre lesão e síndrome clássica.', tags: ['limites-classificacao', 'evidencia'] },
      { id: 'fc-neu-f9', front: 'Por que a classificação clássica das afasias deve ser usada com cautela?', back: 'Porque perfis mistos e atípicos são frequentes na prática clínica real; a classificação funciona como referência de reconhecimento de padrões, não como sistema fechado.', tags: ['limites-classificacao'] },
      { id: 'fc-neu-f10', front: 'Quais são exemplos de testes de rastreio ("beira de leito") para afasia?', back: 'Frenchay Aphasia Screening Test, BEST e Language Screening Test (LAST), usados em fase aguda para triagem rápida.', tags: ['avaliacao', 'rastreio'] },
      { id: 'fc-neu-f11', front: 'Cite três testes abrangentes de avaliação da afasia mencionados neste módulo.', back: 'Boston Diagnostic Aphasia Examination, Western Aphasia Battery e bateria Montreal-Toulouse (MT-86), entre outros como a PALPA.', tags: ['avaliacao', 'baterias'] },
      { id: 'fc-neu-f12', front: 'Por que a avaliação da linguagem não deve ser dissociada da avaliação cognitiva?', back: 'Porque déficits de atenção, função executiva, memória e praxias frequentemente coexistem com a afasia e podem interagir com o quadro linguístico.', tags: ['avaliacao', 'cognicao'] },
      { id: 'fc-neu-f13', front: 'O que fundamenta a reabilitação da afasia do ponto de vista neurobiológico?', back: 'A neuroplasticidade — capacidade do sistema nervoso central de alterar estrutura e função em resposta a estímulos, incluindo o treino terapêutico.', tags: ['plasticidade'] },
      { id: 'fc-neu-f14', front: 'O que caracteriza a Terapia por Restrição Induzida da Linguagem (CILT)?', back: 'Estimulação exclusiva da linguagem verbal, restringindo compensação por gestos ou desenho, aplicada de forma intensiva (várias horas diárias, várias vezes por semana).', tags: ['cilt'] },
      { id: 'fc-neu-f15', front: 'O que é a Análise de Traços Semânticos (SFA)?', back: 'Técnica que amplia o resgate lexical incentivando a produção de palavras relacionadas ao alvo (categoria, uso, ação, propriedades), ativando a rede semântica.', tags: ['sfa'] },
      { id: 'fc-neu-f16', front: 'Para quais casos a Terapia de Entonação Melódica (MIT) é racionalmente indicada?', back: 'Afasias não-fluentes graves, com estereotipias verbais persistentes e compreensão auditiva relativamente preservada.', tags: ['mit'] },
      { id: 'fc-neu-f17', front: 'Que achado de neuroimagem foi associado à MIT, e qual sua principal limitação?', back: 'Aumento do fascículo arqueado após terapia intensiva (Schlaug; Marchina; Norton, 2009); a principal limitação é a amostra muito pequena (seis pacientes).', tags: ['mit', 'evidencia', 'limitacoes'] },
      { id: 'fc-neu-f18', front: 'O que é a ORLA e como seus efeitos variam conforme a gravidade da afasia?', back: 'Leitura repetida em voz alta com estímulos multimodais graduados; na afasia grave melhora sobretudo a leitura, na moderada o discurso, e da leve à moderada, escrita e discurso.', tags: ['orla'] },
      { id: 'fc-neu-f19', front: 'Qual é o princípio central do método PACE?', back: 'Aceitar qualquer canal de comunicação (fala, gestos, desenho, escrita) como resposta legítima em uma troca comunicativa real, valorizando o sucesso da mensagem.', tags: ['pace'] },
      { id: 'fc-neu-f20', front: 'O que revisão sistemática de Simmons-Mackie et al. (2010) reforça sobre o treinamento de parceiros de comunicação?', back: 'Que capacitar familiares e cuidadores em estratégias de facilitação da comunicação é um componente relevante da reabilitação, não um complemento opcional.', tags: ['treino-parceiro', 'evidencia'] },
      { id: 'fc-neu-f21', front: 'Por que a intervenção tardia (mais de seis meses pós-AVE) não deve ser descartada?', back: 'Porque ganhos continuam sendo relatados após esse período, ainda que com ritmo de evolução mais lento do que na fase espontânea inicial.', tags: ['plasticidade', 'prognostico'] },
      { id: 'fc-neu-f22', front: 'Que princípios de neuroplasticidade orientam a formulação de propostas terapêuticas em afasia?', back: 'Uso, especificidade da experiência, repetição e intensidade, tempo, idade, relevância, transferência e interferência (Kleim; Jones, 2008).', tags: ['plasticidade', 'principios'] },
      { id: 'fc-neu-f23', front: 'Qual é a principal limitação prática da CILT em muitos contextos assistenciais?', back: 'A exigência de alta intensidade de prática (mais de três horas diárias, cinco vezes por semana), de difícil viabilização fora de contextos específicos.', tags: ['cilt', 'limitacoes'] },
      { id: 'fc-neu-f24', front: 'Por que um projeto de reabilitação da afasia não deve se limitar aos aspectos linguísticos?', back: 'Porque aspectos psicossociais, emocionais, de participação social e qualidade de vida do paciente também precisam ser considerados sistematicamente.', tags: ['participacao', 'principio-central'] },
      { id: 'fc-neu-f25', front: 'Por que estudos de caso único, como o de reabilitação cognitivista em afasia de condução, exigem cautela na interpretação?', back: 'Porque, apesar de ilustrarem princípios terapêuticos, não permitem generalização estatística a outros perfis clínicos.', tags: ['limitacoes', 'evidencia'] },
      { id: 'fc-neu-f26', front: 'Qual é o princípio central deste módulo em relação à escolha de abordagem terapêutica?', back: 'Nenhuma abordagem (cognitivista, CILT, SFA, MIT, ORLA ou PACE) deve ser tratada como protocolo universal; a escolha depende do perfil clínico, da fase do quadro e dos recursos disponíveis.', tags: ['principio-central', 'individualizacao'] },
    ],
    finalSynthesis:
      'As afasias são distúrbios de linguagem adquiridos por lesão cerebral, classicamente descritos a partir dos eixos de fluência, compreensão auditiva e repetição, que permitem reconhecer perfis como Broca, Wernicke, Condução, Global, Anômica e as formas transcorticais. Essa classificação, porém, tem limites conhecidos: perfis mistos e atípicos são frequentes, e boa parte das afasias de Broca crônicas ocorre sem lesão detectável na própria área de Broca, o que reforça seu uso como referência de reconhecimento de padrões, não como sistema fechado. A avaliação fonoaudiológica deve ser abrangente, integrando componentes cognitivos, linguísticos e pragmáticos, com instrumentos adequados à fase clínica — rastreio rápido na fase aguda, baterias abrangentes na fase crônica — e sempre articulada à avaliação cognitiva. A reabilitação apoia-se na neuroplasticidade — capacidade do sistema nervoso central de reorganizar estrutura e função em resposta ao treino — e reúne abordagens diversas: cognitivistas, CILT, SFA, MIT e ORLA, cada uma com indicações, evidências e limitações próprias, nenhuma delas universal. A escolha entre elas depende do perfil clínico do paciente, da fase do quadro, da tolerância à intensidade exigida e dos recursos efetivamente disponíveis, não apenas da adequação teórica ao déficit identificado. O método PACE e o treinamento de parceiros de comunicação reforçam que a reabilitação não deve se restringir ao consultório, mas incluir a família como parte ativa do processo, favorecendo a comunicação funcional no cotidiano. O fio condutor deste módulo permanece o mesmo desta plataforma: decisões clínicas responsáveis nascem da individualização a cada paciente e da integração de múltiplas fontes de informação — nunca da aplicação automática de um rótulo diagnóstico ou de um protocolo terapêutico único.',
  },

  references: [
    {
      id: 'ref-mansurmachado2014-cap85',
      authors: 'MANSUR, Letícia Lessa; MACHADO, Thais Helena.',
      title: 'Avaliação e Reabilitação das Afasias',
      source: 'In: MARCHESAN, Irene Queiroz; SILVA, Hilton Justino da; TOMÉ, Marileda Cattelan (org.). Tratado das Especialidades em Fonoaudiologia. São Paulo: Guanabara Koogan, 2014. cap. 85. Acesso integral: capítulo lido na íntegra a partir do PDF do projeto.',
      year: 2014,
      usedIn: ['learn.summary', 'learn.essentialConcepts', 'learn.evidence', 'apply.questions', 'apply.fictionalCases'],
    },
    {
      id: 'ref-panhoca2014-cap84',
      authors: 'PANHOCA, Ivone.',
      title: 'Fonoaudiologia na Perspectiva da Neurolinguística Enunciativo-discursiva',
      source: 'In: MARCHESAN, Irene Queiroz; SILVA, Hilton Justino da; TOMÉ, Marileda Cattelan (org.). Tratado das Especialidades em Fonoaudiologia. São Paulo: Guanabara Koogan, 2014. cap. 84. Acesso integral: trecho histórico introdutório lido na íntegra a partir do PDF do projeto.',
      year: 2014,
      usedIn: ['learn.summary'],
    },
    {
      id: 'ref-novaespintosantana2009',
      authors: 'NOVAES PINTO, Rosana do Carmo; SANTANA, Ana Paula.',
      title: 'Semiologia das afasias: uma discussão crítica',
      source: 'Psicologia: Reflexão e Crítica, v. 22, n. 3, 2009. Acesso parcial: síntese dos argumentos obtida por extração automatizada do artigo, sem leitura direta do texto integral.',
      year: 2009,
      doi: '10.1590/S0102-79722009000300012',
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-norton2009-mit',
      authors: 'NORTON, Andrea; ZIPSE, Lauryn; MARCHINA, Sarah; SCHLAUG, Gottfried.',
      title: 'Melodic Intonation Therapy: Shared Insights on How It Is Done and Why It Might Help',
      source: 'Annals of the New York Academy of Sciences, v. 1169, p. 431-436, 2009. Acesso parcial: título, metadados e achado geral confirmados via busca (Europe PMC); texto integral não lido.',
      year: 2009,
      doi: '10.1111/j.1749-6632.2009.04859.x',
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-schlaug2009-whitematter',
      authors: 'SCHLAUG, Gottfried; MARCHINA, Sarah; NORTON, Andrea.',
      title: 'Evidence for Plasticity in White-Matter Tracts of Patients With Chronic Broca\'s Aphasia Undergoing Intense Intonation-Based Speech Therapy',
      source: 'Annals of the New York Academy of Sciences, v. 1169, p. 385-394, 2009. Amostra pequena (n=6). Acesso parcial: metadados e achado principal (incluindo o n) confirmados via busca (Europe PMC/WebSearch); texto integral não lido.',
      year: 2009,
      doi: '10.1111/j.1749-6632.2009.04587.x',
      usedIn: ['learn.summary', 'learn.evidence', 'learn.limitations'],
    },
    {
      id: 'ref-simmonsmackie2010',
      authors: 'SIMMONS-MACKIE, Nina; RAYMER, Anastasia; ARMSTRONG, Elizabeth; HOLLAND, Audrey; CHERNEY, Leora R.',
      title: 'Communication Partner Training in Aphasia: A Systematic Review',
      source: 'Archives of Physical Medicine and Rehabilitation, v. 91, n. 12, p. 1814-1837, 2010. Acesso parcial: título, tipo de estudo (revisão sistemática) e metadados confirmados via busca (Europe PMC); resultados detalhados e número de estudos incluídos não confirmados em texto integral.',
      year: 2010,
      doi: '10.1016/j.apmr.2010.08.026',
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions', 'apply.fictionalCases'],
    },
    {
      id: 'ref-albertsparkshelm1973',
      authors: 'ALBERT, Martin L.; SPARKS, Robert W.; HELM, Nancy A.',
      title: 'Melodic Intonation Therapy for Aphasia',
      source: 'Archives of Neurology, v. 29, n. 2, p. 130-131, 1973. Acesso parcial: existência, metadados e DOI confirmados via busca (PubMed/WebSearch); artigo histórico de 1973, sem abstract acessível nas bases consultadas, texto integral não lido.',
      year: 1973,
      doi: '10.1001/archneur.1973.00490260074018',
      usedIn: ['learn.essentialConcepts'],
    },
    {
      id: 'ref-daviswilcox1981',
      authors: 'DAVIS, George Albyn; WILCOX, M. Jeanne.',
      title: 'Incorporating Parameters of Natural Conversation in Aphasia Treatment: PACE Therapy',
      source: 'In: CHAPEY, Roberta (Ed.). Language Intervention Strategies in Adult Aphasia. Baltimore: Williams & Wilkins, 1981. p. 169-193. Acesso parcial: existência e dados bibliográficos confirmados via busca (WebSearch); capítulo de livro não disponível em texto integral nas bases consultadas.',
      year: 1981,
      usedIn: ['learn.summary', 'apply.questions'],
    },
    {
      id: 'ref-goodglass2001-boston',
      authors: 'GOODGLASS, Harold; KAPLAN, Edith; BARRESI, Barbara.',
      title: 'Boston Diagnostic Aphasia Examination',
      source: '3. ed. Baltimore: Lippincott, Williams & Wilkins, 2001. Citado via Mansur; Machado (2014), cap. 85.',
      year: 2001,
      usedIn: ['learn.summary', 'learn.glossary'],
    },
    {
      id: 'ref-kertesz1982-wab',
      authors: 'KERTESZ, Andrew.',
      title: 'Western Aphasia Battery',
      source: 'New York: Grune and Stratton, 1982. Citado via Mansur; Machado (2014), cap. 85.',
      year: 1982,
      usedIn: ['learn.summary'],
    },
    {
      id: 'ref-meinzer2007',
      authors: 'MEINZER, Marcus; STREIFTAU, Sarah; ROCKSTROH, Brigitte.',
      title: 'Intensive Language Training in the Rehabilitation of Chronic Aphasia: Efficient Training by Laypersons',
      source: 'Journal of the International Neuropsychological Society, v. 13, n. 5, p. 846-853, 2007. Citado originalmente por Mansur; Machado (2014), cap. 85, e confirmado de forma independente nesta auditoria. Acesso parcial: metadados confirmados via busca (Europe PMC); texto integral não lido.',
      year: 2007,
      doi: '10.1017/s1355617707071111',
      usedIn: ['learn.summary', 'learn.evidence'],
    },
    {
      id: 'ref-cartherygoulart2007',
      authors: 'CARTHERY-GOULART, Maria Teresa; SENAHA, Mirna Lie Hosogi.',
      title: 'Diagnosis and Rehabilitation Attempt of a Patient With Acquired Dyslexia',
      source: 'Dementia & Neuropsychologia, v. 1, n. 1, p. 89-96, 2007. Citado originalmente por Mansur; Machado (2014), cap. 85. Acesso integral: texto completo lido via PMC nesta auditoria, confirmando o diagnóstico de afasia de condução, as 22 sessões de 50 minutos e o ganho de desempenho na leitura (de 45,3% para 57,4%, ou 82,1% incluindo autocorreções).',
      year: 2007,
      doi: '10.1590/s1980-57642008dn10100014',
      usedIn: ['learn.summary', 'learn.evidence'],
    },
    {
      id: 'ref-fontanari1989-tokentest',
      authors: 'FONTANARI, Jandyra Maria.',
      title: 'Adaptação e validação da versão reduzida do Token Test para o português brasileiro',
      source: 'Dissertação/estudo de adaptação citado na literatura fonoaudiológica brasileira sobre avaliação de compreensão auditiva na afasia (1989). Acesso parcial: existência e uso desta adaptação confirmados via busca (WebSearch) nesta auditoria; texto integral não lido.',
      year: 1989,
      usedIn: ['learn.limitations'],
    },
    {
      id: 'ref-miotto-bostonnaming',
      authors: 'MIOTTO, Eliane C. et al.',
      title: 'Development of an adapted version of the Boston Naming Test for Portuguese speakers',
      source: 'Brazilian Journal of Psychiatry (Revista Brasileira de Psiquiatria). Acesso parcial: metadados e principais achados (739 sujeitos brasileiros saudáveis, efeito de idade e escolaridade) confirmados via busca (WebSearch/SciELO) nesta auditoria; texto integral não lido.',
      year: 2010,
      usedIn: ['learn.limitations'],
    },
    {
      id: 'ref-neves2014-wabr',
      authors: 'NEVES, et al.',
      title: 'Cross-cultural adaptation of the Western Aphasia Battery - Revised screening test to Brazilian Portuguese: a preliminary study',
      source: 'Codas, 2014. Estudo preliminar (n=28) de adaptação transcultural apenas do teste de rastreio (screening) da WAB-R, não da bateria integral. Acesso parcial: metadados e desenho do estudo confirmados via busca (WebSearch/SciELO) nesta auditoria; texto integral não lido.',
      year: 2014,
      usedIn: ['learn.limitations'],
    },
    {
      id: 'ref-mtlbrasil',
      authors: 'PARENTE, Maria Alice de Mattos Pimenta; FONSECA, Rochele Paz; PAGLIARIN, Karina Carlesso; et al.',
      title: 'MTL-Brasil — Bateria Montreal-Toulouse de Avaliação da Linguagem',
      source: 'São Paulo: Vetor Editora, 2016. Versão brasileira completa, adaptada, validada e normatizada, publicada comercialmente. Acesso parcial: autoria, editora, ano e escopo (22 tarefas) confirmados via busca (WebSearch) nesta auditoria; texto integral/manual não lido.',
      year: 2016,
      usedIn: ['learn.limitations'],
    },
  ],
})
