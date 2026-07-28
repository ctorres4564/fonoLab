import type { LearningModule } from '@/types/platform'

export const moduloAspectosLinguisticos: LearningModule = {
  id: 'mod-transtornos-linguagem-aspectos-linguisticos',
  slug: 'aspectos-linguisticos-transtornos-linguagem',
  title: 'Aspectos Linguísticos dos Transtornos de Linguagem',
  description:
    'Como os transtornos do desenvolvimento da linguagem afetam fonologia, morfossintaxe, semântica, pragmática, narrativa e processamento verbal, reconhecendo a heterogeneidade dos perfis e os limites de interpretações baseadas em um único subsistema.',
  order: 2,
  learningObjective:
    'Compreender como os transtornos do desenvolvimento da linguagem podem afetar diferentes componentes linguísticos, incluindo fonologia, morfossintaxe, semântica, pragmática, narrativa e processamento verbal, reconhecendo a heterogeneidade dos perfis e os limites de interpretações baseadas em um único subsistema.',
  prerequisiteKnowledge: ['Módulo 1: Características dos transtornos específicos de linguagem'],
  estimatedTimeMinutes: 180,
  difficulty: 'advanced',
  status: 'published',

  learn: {
    summary: [
      {
        id: 'sum-tl2-1',
        text: 'O Transtorno do Desenvolvimento da Linguagem (TDL) não afeta um único componente linguístico, mas pode comprometer, em graus variados, a fonologia, o léxico, a morfossintaxe e a pragmática de uma mesma criança (Bishop et al., 2017). Um estudo brasileiro com 204 crianças de 4 a 6 anos confirmou que todos os subsistemas avaliados — vocabulário, morfologia de número e compreensão morfossintática — foram sensíveis ao efeito do DEL, com o grupo DEL apresentando desempenho significativamente inferior aos dois grupos em desenvolvimento típico em cada uma das três medidas (Puglisi; Befi-Lopes, 2016). Não existe, porém, um "perfil padrão": a combinação e a gravidade dessas dificuldades variam de criança para criança, o que caracteriza a heterogeneidade do TDL discutida já no Módulo 1.',
      },
      {
        id: 'sum-tl2-2',
        text: 'A linguagem receptiva (compreensão) e a linguagem expressiva (produção) devem ser avaliadas separadamente, nunca uma inferida a partir da outra. Uma criança pode produzir frases razoavelmente estruturadas e, ainda assim, ter dificuldade real de compreender instruções complexas — ou o inverso. Como discutido no módulo anterior, estratégias compensatórias (uso de contexto, rotina, pistas visuais) podem mascarar prejuízos de compreensão, tornando ainda mais importante a avaliação direcionada de cada uma dessas duas dimensões.',
      },
      {
        id: 'sum-tl2-3',
        text: 'No plano da fonologia, dificuldades em organizar o sistema de sons da língua são comuns, embora nem toda alteração fonológica indique TDL: quando restrita à fonologia, sem comprometimento de outros subsistemas, a dificuldade tende a ter prognóstico mais favorável do que quadros que também envolvem morfossintaxe e discurso, como discutido no Módulo 1. A fonologia deve ser avaliada como um subsistema entre vários, não como substituto de uma avaliação linguística completa.',
      },
      {
        id: 'sum-tl2-4',
        text: 'A morfologia — as regras de formação e flexão de palavras — é considerada uma das marcas clínicas mais estudadas do TDL, mas sua manifestação depende da língua falada pela criança. Em inglês, marcadores de tempo verbal e concordância (como a desinência de terceira pessoa "-s", o passado regular "-ed" e os verbos BE e DO) foram propostos como candidatos a marcador clínico, com base na constatação de que crianças com o transtorno omitem esses morfemas por um período mais longo do que crianças mais novas em desenvolvimento típico (Rice; Wexler, 1996).',
      },
      {
        id: 'sum-tl2-5',
        text: 'Em português brasileiro, a manifestação morfológica mais estudada é o morfema nominal de número (plural), e não apenas a morfologia verbal — o que ilustra por que um marcador clínico validado para uma língua não deve ser transposto automaticamente para outra sem adaptação e verificação empírica (Puglisi; Befi-Lopes, 2016). O estudo brasileiro citado usou uma prova específica de reconhecimento de singular/plural e encontrou desempenho significativamente pior no grupo DEL do que nos grupos em desenvolvimento típico (p < 0,001, com tamanho de efeito considerável).',
      },
      {
        id: 'sum-tl2-6',
        text: 'A sintaxe — a organização das palavras em frases — tende a ser especialmente desafiadora em estruturas de maior complexidade, como orações relativas, perguntas com elementos deslocados e relações de dependência entre partes não adjacentes da frase. Um estudo com crianças brasileiras falantes de português com TDL encontrou desempenho significativamente pior do que controles pareados na compreensão de sentenças que exigiam estabelecer esse tipo de relação não adjacente, com mais erros ainda quando a tarefa aumentava a exigência de memória de trabalho (Fortunato-Tavares et al., 2012).',
      },
      {
        id: 'sum-tl2-7',
        text: 'É importante destacar, no entanto, que o mesmo estudo testou duas hipóteses teóricas específicas sobre a origem desse déficit sintático — a de que crianças com o transtorno representariam frases de forma "achatada", sem hierarquia interna (déficit de ordenação hierárquica), e a de que haveria um déficit específico no sistema gramatical computacional — e não encontrou confirmação para nenhuma das duas, já que nenhum grupo mostrou preferência sistemática por erros hierárquicos (Fortunato-Tavares et al., 2012). Ou seja: a dificuldade sintática é um achado replicado, mas o mecanismo exato que a explica permanece em aberto, e não deve ser apresentado como certeza teórica fechada.',
      },
      {
        id: 'sum-tl2-8',
        text: 'Morfologia e sintaxe frequentemente são avaliadas em conjunto (morfossintaxe), já que muitas tarefas exigem a compreensão simultânea de marcadores morfológicos e da ordem das palavras na frase. No estudo brasileiro citado, a prova de compreensão morfossintática combinava justamente essas duas exigências, permitindo observar não apenas o desempenho geral, mas também o tipo de erro cometido pela criança (morfológico, sintático ou ambos) (Puglisi; Befi-Lopes, 2016).',
      },
      {
        id: 'sum-tl2-9',
        text: 'Esse mesmo estudo revelou um achado especialmente relevante para não tratar os déficits como estáticos: aos 4 anos, as crianças do grupo DEL cometiam praticamente todos os tipos de erro (morfológico, sintático e morfossintático) em proporções semelhantes, num padrão pouco sistemático; aos 6 anos, esse padrão se tornou qualitativamente mais parecido ao do desenvolvimento típico (predominância de erros morfológicos), embora ainda quantitativamente pior (Puglisi; Befi-Lopes, 2016). Ou seja, o perfil de erro mudou de natureza com a idade, e não apenas de quantidade — uma reorganização, não uma simples persistência do mesmo padrão.',
      },
      {
        id: 'sum-tl2-10',
        text: 'No plano semântico, o vocabulário (léxico) cresce com a idade em todos os grupos, mas seu papel vai além de ser apenas "mais uma habilidade comprometida": o mesmo estudo brasileiro encontrou correlação direta entre tamanho do vocabulário e desempenho morfológico/morfossintático, mesmo controlando o efeito da idade — sugerindo que um vocabulário mínimo pode ser necessário para que a criança comece a analisar os componentes internos das palavras (Puglisi; Befi-Lopes, 2016). Uma curva ROC identificou um ponto de corte de vocabulário associado ao domínio do morfema de número, com sensibilidade de 77,1% e especificidade de 76,3% nessa amostra — um achado específico desse estudo, não um ponto de corte universal.',
      },
      {
        id: 'sum-tl2-11',
        text: 'Vocabulário reduzido, isoladamente, não deve ser tratado como diagnóstico de TDL: ele também é amplamente influenciado por nível socioeconômico e tipo de escola. O mesmo estudo mostrou que crianças de escola pública em desenvolvimento típico tiveram desempenho pior do que as de escola particular em todas as medidas — um efeito ambiental, e não orgânico —, o que reforça a necessidade de considerar o contexto antes de atribuir um desempenho baixo unicamente a um transtorno (Puglisi; Befi-Lopes, 2016).',
      },
      {
        id: 'sum-tl2-12',
        text: 'É importante diferenciar vocabulário (o conhecimento armazenado de palavras) de acesso lexical (a capacidade de recuperar essa palavra no momento da fala). Uma criança pode "saber" uma palavra — reconhecê-la e compreendê-la quando ouve — e, ainda assim, ter dificuldade de evocá-la espontaneamente na hora de falar, um padrão que se manifesta como pausas, circunlóquios ou substituições lexicais durante a produção espontânea, mesmo quando o desempenho em tarefas estruturadas de vocabulário receptivo está adequado.',
      },
      {
        id: 'sum-tl2-13',
        text: 'A pragmática — o uso da linguagem em contextos sociais, incluindo manter um tópico, fazer inferências sobre a intenção do interlocutor e ajustar o registro à situação — pode estar comprometida em crianças com TDL. É fundamental, porém, não confundir dificuldade pragmática com transtorno do espectro autista: dificuldades de comunicação social ocorrem ao longo de um espectro que atravessa diferentes condições do neurodesenvolvimento, e uma dificuldade pragmática isolada não é, por si só, suficiente para sustentar suspeita de TEA (Norbury, 2014).',
      },
      {
        id: 'sum-tl2-14',
        text: 'O discurso e a narrativa — a capacidade de organizar e relatar uma sequência de eventos de forma coerente — integram, ao mesmo tempo, vocabulário, morfossintaxe, coesão textual e organização temporal, funcionando como uma janela para observar como a criança usa a linguagem de forma integrada, além do desempenho isolado em tarefas estruturadas de um único subsistema. Dificuldades de narrativa costumam se manifestar tanto na macroestrutura (a organização geral do relato — início, complicação, resolução) quanto na microestrutura (o vocabulário e a gramática usados dentro de cada frase do relato).',
      },
      {
        id: 'sum-tl2-15',
        text: 'A compreensão de inferências — a capacidade de deduzir informações que não estão ditas explicitamente, como a intenção de um personagem ou a causa de um evento — costuma ser mais vulnerável do que a compreensão literal em crianças com dificuldades de linguagem, mesmo quando a decodificação de sentenças isoladas parece preservada. Avaliar apenas a compreensão literal de frases curtas, portanto, pode não capturar dificuldades relevantes que só aparecem diante de textos mais longos e menos explícitos.',
      },
      {
        id: 'sum-tl2-16',
        text: 'A memória de trabalho verbal, sobretudo o componente fonológico, segue sendo um processo cognitivo central na compreensão dos transtornos de linguagem, frequentemente avaliado por tarefas de repetição de pseudopalavras (Gathercole; Baddeley, 1990, já discutido no Módulo 1). Entre os candidatos a marcador psicolinguístico do transtorno testados em crianças inglesas de 11 anos com histórico de TDL — repetição de pseudopalavras, marcador de terceira pessoa, marcador de passado e repetição de sentenças —, a repetição de sentenças apresentou a melhor combinação de sensibilidade (90%) e especificidade (85%) (Conti-Ramsden; Botting; Faragher, 2001).',
      },
      {
        id: 'sum-tl2-17',
        text: 'A repetição de sentenças exige que a criança processe simultaneamente percepção da fala, vocabulário, conhecimento gramatical e planejamento da produção — o que provavelmente explica por que essa tarefa se mostrou mais sensível do que marcadores restritos a um único subsistema isolado (Conti-Ramsden; Botting; Faragher, 2001). Ainda assim, nenhum marcador psicolinguístico isolado — pseudopalavras, sentenças ou marcadores morfológicos — deve ser usado como critério diagnóstico único e suficiente, dado que os próprios estudos que os validaram foram conduzidos em amostras e idiomas específicos.',
      },
      {
        id: 'sum-tl2-18',
        text: 'O processamento linguístico não deve ser entendido como uma capacidade fixa: o mesmo estudo sobre compreensão sintática mostrou que tanto crianças com TDL quanto seus pares em desenvolvimento típico cometeram mais erros de estruturação sintática quando a tarefa aumentava a exigência de memória de trabalho, com queda de acurácia de magnitude semelhante (cerca de 26%) em ambos os grupos (Fortunato-Tavares et al., 2012). Isso significa que o desempenho observado em uma avaliação depende também da demanda de processamento imposta pela tarefa, não apenas de uma capacidade linguística estável ou exclusiva da criança com TDL.',
      },
      {
        id: 'sum-tl2-19',
        text: 'Essa dependência de demanda reforça uma distinção central deste módulo: desempenho em tarefa estruturada não é sinônimo de funcionamento cotidiano. Uma criança pode ter bom desempenho em uma tarefa de repetição de sentenças, altamente controlada e previsível, e ainda assim ter dificuldade real para contar espontaneamente o que aconteceu no recreio, tarefa que exige geração ativa de conteúdo, organização temporal e ajuste ao ouvinte, sem qualquer apoio estrutural externo.',
      },
      {
        id: 'sum-tl2-20',
        text: 'O impacto funcional de um determinado perfil linguístico — já apresentado no Módulo 1 como critério central de caracterização do transtorno — depende do contexto de vida da criança, e não apenas da magnitude do déficit medido em teste. Duas crianças com escores semelhantes em uma prova estruturada podem ter necessidades de participação muito diferentes, conforme as exigências linguísticas específicas de sua escola, de sua família e de seu grupo social.',
      },
      {
        id: 'sum-tl2-21',
        text: 'A variação entre indivíduos com TDL é a regra, não a exceção: praticamente todas as combinações possíveis de comprometimento entre fonologia, morfossintaxe, semântica e pragmática já foram documentadas na literatura. Por isso, encontrar uma criança cujo perfil não se encaixa exatamente no relato de outro caso, mesmo com o mesmo diagnóstico, não deve gerar dúvida sobre a validade do diagnóstico em si.',
      },
      {
        id: 'sum-tl2-22',
        text: 'Além de variar entre crianças, o perfil linguístico de uma mesma criança varia ao longo do desenvolvimento e conforme a demanda da tarefa, como já ilustrado pela mudança qualitativa nos padrões de erro entre 4 e 6 anos (Puglisi; Befi-Lopes, 2016) e pelo efeito da carga de memória de trabalho na compreensão sintática (Fortunato-Tavares et al., 2012). Um perfil linguístico documentado em uma avaliação é, portanto, um retrato daquele momento e daquela tarefa específica — não uma fotografia definitiva e permanente da criança.',
      },
      {
        id: 'sum-tl2-23',
        text: 'Por fim, o perfil linguístico de uma criança deve sempre ser interpretado em relação ao contexto: fatores como nível socioeconômico, tipo de escola, exposição a mais de uma língua e variação dialetal influenciam o desempenho em praticamente todas as tarefas estruturadas de linguagem (Puglisi; Befi-Lopes, 2016). Um resultado abaixo da média nunca deve ser interpretado isoladamente do contexto de vida da criança, sob risco de patologizar diferença de oportunidade ou de variação linguística legítima.',
      },
      {
        id: 'sum-tl2-24',
        text: 'Este módulo percorreu os principais componentes linguísticos potencialmente afetados no TDL — fonologia, morfossintaxe, semântica, pragmática e narrativa —, além dos processos de memória de trabalho e processamento verbal que os sustentam. Nenhum desses subsistemas, isoladamente, define o transtorno ou explica todo o quadro de uma criança: a caracterização responsável exige integrar múltiplos domínios, considerar variação entre indivíduos e ao longo do tempo, e distinguir desempenho em tarefa estruturada de funcionamento espontâneo real. Os módulos seguintes aprofundarão as bases neurobiológicas propostas para essas dificuldades e os princípios de avaliação e intervenção que decorrem dessa caracterização.',
      },
    ],
    mainIdea:
      'Os transtornos do desenvolvimento da linguagem podem afetar, em combinações e graus variados, a fonologia, a morfossintaxe, a semântica, a pragmática, a narrativa e os processos de memória de trabalho e processamento verbal que os sustentam — sem que exista um perfil linguístico único ou marcador isolado suficiente para caracterizar todo o quadro. O desempenho em qualquer subsistema deve ser interpretado à luz da idade, da demanda da tarefa, do contexto socioeconômico e cultural, e sempre distinguindo resultado em teste estruturado de funcionamento espontâneo cotidiano.',
    essentialConcepts: [
      {
        id: 'conc-tl2-heterogeneidade',
        term: 'Heterogeneidade de Perfil Linguístico',
        definition:
          'Ausência de um padrão único de comprometimento no TDL: crianças com o mesmo diagnóstico podem apresentar diferentes combinações e graus de dificuldade entre fonologia, morfossintaxe, semântica e pragmática.',
        example: 'Uma criança com dificuldade predominantemente morfossintática e outra com dificuldade predominantemente pragmática, ambas diagnosticadas com TDL.',
      },
      {
        id: 'conc-tl2-receptiva',
        term: 'Linguagem Receptiva',
        definition:
          'Capacidade de compreender a linguagem oral, que deve ser avaliada de forma independente da expressiva, já que estratégias compensatórias podem mascarar prejuízos reais de compreensão.',
        example: 'Uma criança que segue instruções simples usando pistas de rotina, mas falha ao seguir instruções verbais sem qualquer apoio contextual.',
      },
      {
        id: 'conc-tl2-expressiva',
        term: 'Linguagem Expressiva',
        definition:
          'Capacidade de produzir linguagem oral, da articulação e fonologia à formulação gramatical, ao vocabulário utilizado e à organização do discurso.',
        example: 'Uma criança que compreende bem, mas produz frases curtas, com vocabulário limitado e estrutura gramatical simplificada.',
      },
      {
        id: 'conc-tl2-fonologia',
        term: 'Fonologia',
        definition:
          'Sistema de organização dos sons da língua; dificuldades restritas a esse subsistema, sem comprometimento de outros, tendem a ter prognóstico mais favorável.',
        example: 'Substituir sistematicamente o som "r" pelo som "l" em todas as palavras.',
      },
      {
        id: 'conc-tl2-morfologia',
        term: 'Morfologia',
        definition:
          'Conjunto de regras de formação e flexão das palavras (verbal e nominal); considerada uma das marcas clínicas mais estudadas do TDL, com manifestação que varia conforme a língua falada pela criança.',
        example: 'Omitir a marca de plural ("os menino" em vez de "os meninos") ou de tempo verbal ("ontem eu brinca" em vez de "brinquei").',
      },
      {
        id: 'conc-tl2-sintaxe',
        term: 'Sintaxe',
        definition:
          'Regras de organização das palavras em frases; especialmente desafiadora em estruturas complexas, como orações relativas e relações entre elementos não adjacentes da sentença.',
        example: 'Dificuldade em compreender corretamente "o menino que a menina empurrou caiu", em que a ordem das palavras não corresponde diretamente à ordem dos eventos.',
      },
      {
        id: 'conc-tl2-morfossintaxe',
        term: 'Morfossintaxe',
        definition:
          'Integração entre morfologia e sintaxe, frequentemente avaliada em conjunto, já que muitas tarefas exigem compreender simultaneamente marcadores morfológicos e ordem das palavras.',
        example: 'Compreender corretamente "os patos bicam a galinha preta", que exige processar tanto a concordância de número quanto a ordem sujeito-verbo-objeto.',
      },
      {
        id: 'conc-tl2-semantica',
        term: 'Semântica',
        definition:
          'Domínio relacionado ao significado das palavras e das frases; inclui o vocabulário e sua relação com o desenvolvimento de outras habilidades linguísticas.',
        example: 'Compreender que "grande" e "enorme" têm significados relacionados, mas não idênticos.',
      },
      {
        id: 'conc-tl2-acesso-lexical',
        term: 'Acesso Lexical',
        definition:
          'Capacidade de recuperar uma palavra já conhecida no momento da fala, distinta do conhecimento armazenado dessa palavra (vocabulário); dificuldades de acesso podem ocorrer mesmo com vocabulário adequado.',
        example: 'Uma criança que reconhece a figura de uma "colher" ao ouvi-la, mas hesita, pausa ou diz "aquele troço de comer" ao tentar nomeá-la espontaneamente.',
      },
      {
        id: 'conc-tl2-vocabulario',
        term: 'Vocabulário (Léxico)',
        definition:
          'Conjunto de palavras conhecidas pela criança; cresce com a idade e se correlaciona com o desenvolvimento morfológico e morfossintático, mas também é fortemente influenciado por fatores socioeconômicos e escolares.',
        example: 'Uma criança de nível socioeconômico mais baixo com vocabulário reduzido em relação a pares de nível mais alto, sem que isso indique, por si só, transtorno.',
      },
      {
        id: 'conc-tl2-pragmatica',
        term: 'Pragmática',
        definition:
          'Uso da linguagem em contextos sociais, incluindo manter tópicos, fazer inferências sobre a intenção do interlocutor e ajustar o registro à situação; dificuldades pragmáticas ocorrem em várias condições do neurodesenvolvimento, não apenas no TEA.',
        example: 'Uma criança que muda de assunto abruptamente durante uma conversa, sem perceber que o interlocutor não acompanhou a mudança.',
      },
      {
        id: 'conc-tl2-discurso',
        term: 'Discurso',
        definition:
          'Uso da linguagem em unidades mais amplas que a frase isolada, integrando vocabulário, morfossintaxe e coesão para construir mensagens coerentes.',
        example: 'Explicar as regras de um jogo de forma que outra pessoa consiga entender e jogar sem ter visto o jogo antes.',
      },
      {
        id: 'conc-tl2-narrativa',
        term: 'Narrativa',
        definition:
          'Capacidade de organizar e relatar uma sequência de eventos de forma coerente, envolvendo tanto a macroestrutura (organização geral do relato) quanto a microestrutura (vocabulário e gramática usados).',
        example: 'Contar o que aconteceu em um passeio ao zoológico, incluindo início, um evento inesperado e um desfecho, de forma compreensível para quem não estava presente.',
      },
      {
        id: 'conc-tl2-inferencias',
        term: 'Compreensão de Inferências',
        definition:
          'Capacidade de deduzir informações não ditas explicitamente, como a intenção de um personagem ou a causa de um evento; costuma ser mais vulnerável do que a compreensão literal.',
        example: 'Entender, a partir de "Pedro olhou para o relógio e saiu correndo", que Pedro provavelmente está atrasado, mesmo sem essa informação ser dita diretamente.',
      },
      {
        id: 'conc-tl2-memoria-trabalho',
        term: 'Memória de Trabalho Verbal',
        definition:
          'Capacidade de manter e manipular temporariamente informação fonológica; frequentemente avaliada por tarefas de repetição de pseudopalavras, sem ser um marcador definitivo isolado do transtorno.',
        example: 'Dificuldade em repetir corretamente uma pseudopalavra de quatro sílabas nunca ouvida antes.',
      },
      {
        id: 'conc-tl2-repeticao-pseudopalavras',
        term: 'Repetição de Pseudopalavras',
        definition:
          'Tarefa que avalia a memória de trabalho fonológica solicitando que a criança repita palavras inventadas, sem significado prévio; um dos candidatos a marcador psicolinguístico do TDL, mas não o mais sensível entre os testados.',
        example: 'Pedir à criança que repita "blofinaste" logo após ouvi-la pela primeira vez.',
      },
      {
        id: 'conc-tl2-repeticao-sentencas',
        term: 'Repetição de Sentenças',
        definition:
          'Tarefa que solicita a repetição literal de frases cada vez mais longas e complexas, integrando percepção, vocabulário, gramática e produção; identificada como o marcador psicolinguístico com melhor sensibilidade e especificidade entre os testados em um estudo com crianças de 11 anos.',
        example: 'Pedir à criança que repita "o menino que a professora chamou foi buscar o livro na estante" exatamente como ouviu.',
      },
      {
        id: 'conc-tl2-marcador-clinico',
        term: 'Marcador Clínico (Psicolinguístico)',
        definition:
          'Medida ou tarefa proposta como indicador relevante do transtorno em uma população e língua específicas; nenhum marcador isolado deve ser usado como critério diagnóstico único e suficiente.',
        example: 'Usar o desempenho em repetição de sentenças como um dado a mais na avaliação, e não como prova definitiva isolada de TDL.',
      },
    ],
    evidence: [
      {
        id: 'ev-tl2-1',
        claim: 'O TDL é uma condição heterogênea, podendo coexistir com outras condições do neurodesenvolvimento, sem que isso indique um perfil linguístico único entre os indivíduos afetados.',
        source: 'Bishop; Snowling; Thompson; Greenhalgh; CATALISE-2 consortium (2017). Journal of Child Psychology and Psychiatry, 58(10), 1068-1080. DOI: 10.1111/jcpp.12721. Acesso integral (já confirmado no Módulo 1): artigo lido na íntegra.',
        evidenceLevel: 'strong',
        clinicalImplication:
          'A avaliação deve investigar múltiplos subsistemas linguísticos, sem presumir que o perfil de uma criança se pareça com o de outra criança com o mesmo diagnóstico.',
      },
      {
        id: 'ev-tl2-2',
        claim: 'Em uma amostra de 204 crianças brasileiras de 4-6 anos, o grupo com DEL apresentou desempenho significativamente inferior a dois grupos em desenvolvimento típico (escola pública e particular) em vocabulário, morfologia de número e compreensão morfossintática (p<0,001 em todas as medidas, com tamanhos de efeito de moderados a grandes).',
        source: 'Puglisi; Befi-Lopes (2016). CoDAS, 28(4), 388-394. DOI: 10.1590/2317-1782/20162015242. Acesso integral nesta auditoria: artigo lido na íntegra.',
        evidenceLevel: 'strong',
        clinicalImplication:
          'O impacto do TDL tende a se manifestar em múltiplos subsistemas simultaneamente, reforçando a necessidade de avaliação multidomínio, e não apenas de um subsistema isolado.',
      },
      {
        id: 'ev-tl2-3',
        claim: 'No mesmo estudo, o vocabulário se correlacionou de forma direta e significativa com o desempenho morfológico e morfossintático, mesmo controlando o efeito da idade, sugerindo que um vocabulário mínimo pode ser necessário para o desenvolvimento morfológico consistente.',
        source: 'Puglisi; Befi-Lopes (2016). CoDAS, 28(4), 388-394. DOI: 10.1590/2317-1782/20162015242. Acesso integral nesta auditoria: artigo lido na íntegra (correlações parciais e curva ROC).',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'O trabalho com vocabulário pode ter efeito facilitador sobre o desenvolvimento morfológico, mas o ponto de corte específico encontrado (ABFW ≈ 83,5) é particular dessa amostra e não deve ser adotado universalmente.',
      },
      {
        id: 'ev-tl2-4',
        claim: 'Crianças com DEL, aos 4 anos, apresentaram padrão de erro pouco sistemático (todos os tipos de erro em proporções semelhantes) na prova de compreensão morfossintática; aos 6 anos, o padrão se tornou qualitativamente mais parecido ao do desenvolvimento típico, embora ainda quantitativamente inferior.',
        source: 'Puglisi; Befi-Lopes (2016). CoDAS, 28(4), 388-394. DOI: 10.1590/2317-1782/20162015242. Acesso integral nesta auditoria: artigo lido na íntegra (análise de tipos de erro por grupo e idade).',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'O perfil de erro de uma criança com TDL pode se reorganizar qualitativamente ao longo do tempo, não apenas melhorar em quantidade; reavaliações periódicas devem considerar mudanças de padrão, não só de escore total.',
      },
      {
        id: 'ev-tl2-5',
        claim: 'Em dois experimentos (compreensão de predicados e de reflexivos), crianças brasileiras com TDL foram significativamente menos precisas do que controles pareados por idade (χ² com p<0,001 em ambos), e ambos os grupos — TDL e desenvolvimento típico — apresentaram queda de acurácia semelhante (cerca de 26%) sob maior carga de memória de trabalho. Nenhum dos dois grupos apresentou preferência por erros hierárquicos, o que não confirma a hipótese do déficit de ordenação hierárquica (HOD); os autores também não encontraram suporte para a hipótese concorrente de complexidade gramatical computacional (CGC) como explicação exclusiva.',
        source: 'Fortunato-Tavares; Andrade; Befi-Lopes; Hestvik; Epstein (2012). Journal of Speech, Language, and Hearing Research, 55(4), 1097-1111. DOI: 10.1044/1092-4388(2011/10-0215). Acesso integral nesta auditoria: artigo lido na íntegra, incluindo resultados estatísticos completos (Experimentos 1 e 2), discussão e discussão geral; amostra de 16 crianças com TDL e 16 controles pareados por idade.',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'Dificuldades sintáticas em estruturas complexas e o efeito de carga de memória de trabalho devem ser investigados na avaliação, mas nenhuma das duas hipóteses teóricas específicas testadas (HOD ou CGC) explica sozinha o déficit; a amostra reduzida (16+16) também exige cautela na generalização, e o próprio estudo discute divergências metodológicas com pesquisas anteriores (uso de clíticos vs. pronomes plenos, tarefa de escolha forçada vs. seleção entre quatro figuras).',
      },
      {
        id: 'ev-tl2-6',
        claim: 'Em um estudo com 37 crianças com TDL e dois grupos-controle (40 crianças pareadas por extensão média de enunciado e 45 pareadas por idade), 36 das 37 crianças com TDL marcaram tempo verbal (terceira pessoa "-s", passado "-ed", BE, DO) com menos de 60% de acurácia em contextos obrigatórios, contra cerca de 80% ou mais nos controles por idade, com distribuições quase não sobrepostas entre os grupos — sustentando a proposta de tempo verbal como candidato a marcador clínico do TDL em falantes de inglês.',
        source: 'Rice; Wexler (1996). Journal of Speech, Language, and Hearing Research, 39(6), 1239-1257. Acesso parcial nesta auditoria: metodologia e achados quantitativos (tamanhos de amostra, taxas de acurácia, grau de não sobreposição) confirmados via busca; texto integral não lido.',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'Esses marcadores específicos foram validados para o inglês; sua transposição direta para o português (que tem sistema morfológico diferente) não deve ser feita sem adaptação e validação empírica próprias.',
      },
      {
        id: 'ev-tl2-7',
        claim: 'Entre quatro candidatos a marcador psicolinguístico do TDL (repetição de pseudopalavras, marcador de terceira pessoa, marcador de passado e repetição de sentenças) testados em crianças inglesas de 11 anos com histórico de TDL, a repetição de sentenças apresentou a melhor combinação de sensibilidade (90%) e especificidade (85%).',
        source: 'Conti-Ramsden; Botting; Faragher (2001). Journal of Child Psychology and Psychiatry, 42(6), 741-748. DOI: 10.1111/1469-7610.00770. Acesso parcial nesta auditoria: metodologia e achados quantitativos confirmados via busca; texto integral não lido.',
        evidenceLevel: 'strong',
        clinicalImplication:
          'A repetição de sentenças pode ser um dado valioso e prático na avaliação, mas os índices de sensibilidade/especificidade citados vieram de uma amostra específica (crianças inglesas de 11 anos) e não devem ser generalizados sem verificação para outras idades e línguas.',
      },
      {
        id: 'ev-tl2-8',
        claim: 'Crianças com TDL frequentemente apresentam desempenho reduzido em tarefas de repetição de pseudopalavras, associado a dificuldades mais amplas de aquisição vocabular e gramatical, embora o estatuto causal dessa relação permaneça em debate.',
        source: 'Gathercole; Baddeley (1990). Journal of Memory and Language, 29, 336-360. Acesso parcial (já reportado no Módulo 1): metadados e achados gerais confirmados via busca; texto integral não lido.',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'A repetição de pseudopalavras pode ser um indicador complementar útil, mas não deve ser usada isoladamente como critério diagnóstico, dado que nem toda criança com TDL apresenta esse padrão.',
      },
      {
        id: 'ev-tl2-9',
        claim: 'Dificuldades pragmáticas e de comunicação social ocorrem ao longo de um espectro que atravessa diferentes condições do neurodesenvolvimento, e não são, isoladamente, suficientes para diferenciar TDL de transtorno do espectro autista; a delimitação diagnóstica do chamado "transtorno de comunicação social" permanece em debate na literatura.',
        source: 'Norbury (2014). Journal of Child Psychology and Psychiatry, 55(3), 204-216. DOI: 10.1111/jcpp.12154. Acesso parcial nesta auditoria: resumo e principais argumentos confirmados via busca; texto integral não lido.',
        evidenceLevel: 'expert_opinion',
        clinicalImplication:
          'Uma dificuldade pragmática isolada não deve, por si só, motivar suspeita ou encaminhamento para investigação de TEA; a diferenciação exige avaliação mais ampla do perfil de comunicação social e comportamental.',
      },
    ],
    limitations: [
      {
        id: 'lim-tl2-1',
        description:
          'O estudo de Puglisi e Befi-Lopes (2016) avaliou apenas o morfema nominal de número (plural), não outros morfemas nominais e verbais do português; achados sobre esse morfema específico não devem ser generalizados a toda a morfologia da língua.',
      },
      {
        id: 'lim-tl2-2',
        description:
          'A amostra desse estudo (204 crianças, 4-6 anos, região de São Paulo) tem abrangência etária e geográfica limitada; resultados podem não se generalizar diretamente a outras faixas etárias, regiões ou variedades dialetais do português brasileiro.',
      },
      {
        id: 'lim-tl2-3',
        description:
          'A amostra de Fortunato-Tavares et al. (2012) foi pequena (16 crianças com TDL e 16 controles), o que exige cautela antes de generalizar os achados sobre compreensão sintática para toda a população com TDL; além disso, a hipótese teórica específica testada (déficit de ordenação hierárquica) não foi confirmada, deixando o mecanismo exato do déficit sintático em aberto.',
      },
      {
        id: 'lim-tl2-4',
        description:
          'Os marcadores morfossintáticos de tempo verbal propostos por Rice e Wexler (1996) foram desenvolvidos e validados para o inglês; o português não compartilha o mesmo sistema de marcação de tempo, o que impede a transposição direta desses marcadores sem adaptação e validação própria.',
      },
      {
        id: 'lim-tl2-5',
        description:
          'Os índices de sensibilidade e especificidade da repetição de sentenças relatados por Conti-Ramsden, Botting e Faragher (2001) foram obtidos em crianças inglesas de 11 anos com histórico de TDL; não há garantia de que os mesmos índices se apliquem a crianças mais novas ou falantes de outras línguas.',
      },
      {
        id: 'lim-tl2-6',
        description:
          'Nenhum marcador psicolinguístico isolado — repetição de pseudopalavras, repetição de sentenças ou marcadores morfológicos específicos — deve ser utilizado como critério diagnóstico único e suficiente para TDL.',
      },
      {
        id: 'lim-tl2-7',
        description:
          'Desempenho em tarefas estruturadas de linguagem não equivale automaticamente a funcionamento cotidiano espontâneo; uma criança pode ter bom desempenho em teste e, ainda assim, apresentar dificuldade funcional real em contextos naturais, ou o inverso.',
      },
      {
        id: 'lim-tl2-8',
        description:
          'Variação dialetal e sociolinguística — como o uso do morfema de plural em diferentes grupos socioeconômicos e culturais no Brasil — pode ser confundida com dificuldade morfológica se não for considerada na interpretação dos resultados.',
      },
      {
        id: 'lim-tl2-9',
        description:
          'Nível socioeconômico e tipo de escola influenciam o desempenho em praticamente todos os subsistemas linguísticos avaliados por testes estruturados; um resultado baixo não deve ser atribuído automaticamente a um transtorno sem considerar esse contexto.',
      },
      {
        id: 'lim-tl2-10',
        description:
          'O perfil linguístico de uma criança muda ao longo do desenvolvimento, inclusive de forma qualitativa (não apenas quantitativa), e também varia conforme a demanda cognitiva da tarefa (por exemplo, carga de memória de trabalho); um único momento de avaliação não deve ser tratado como retrato definitivo e permanente.',
      },
      {
        id: 'lim-tl2-11',
        description:
          'Dificuldades pragmáticas se sobrepõem entre TDL, TEA e outras condições do neurodesenvolvimento; a fronteira diagnóstica de quadros como o "transtorno de comunicação social" ainda é objeto de debate na literatura (Norbury, 2014).',
      },
      {
        id: 'lim-tl2-12',
        description:
          'Os estudos citados neste módulo usam metodologias, idiomas, faixas etárias e critérios diagnósticos distintos entre si; comparações diretas de percentuais e pontos de corte entre estudos diferentes devem ser feitas com cautela.',
      },
    ],
    simpleExplanation:
      'Pense na linguagem como uma casa com vários cômodos: tem o cômodo dos sons (fonologia), o cômodo das palavras e seus significados (vocabulário), o cômodo das regras de gramática (morfossintaxe) e o cômodo de "saber conversar direito" com as pessoas (pragmática). Quando uma criança tem um transtorno de linguagem, não é como se a casa inteira desabasse igual para todo mundo: às vezes um cômodo fica mais bagunçado que os outros, às vezes vários cômodos ficam um pouco bagunçados ao mesmo tempo, e essa combinação muda de criança para criança. Por isso não existe "a" criança típica com esse transtorno — existem várias combinações possíveis. Um erro comum é olhar só para um desses cômodos e achar que já se sabe tudo sobre a "casa inteira". Por exemplo, uma criança pode ter um vocabulário até bom, mas trocar a ordem das palavras nas frases ou esquecer de conjugar os verbos direito; outra pode falar frases certinhas, mas ter dificuldade para contar uma historinha de um jeito que a outra pessoa entenda o que aconteceu primeiro e depois. Também é importante lembrar que ir bem numa tarefa organizada, feita na sala de atendimento — como repetir frases que o fonoaudiólogo fala —, não garante que a criança consiga, sozinha, contar o que aconteceu na escola de um jeito claro, sem ajuda nenhuma. São duas coisas diferentes: uma é o desempenho numa tarefa controlada; outra é como a criança realmente se vira no dia a dia. E, assim como no módulo anterior, é essencial lembrar que nada disso é fixo: o jeito como a criança erra muda com a idade — às vezes até de um jeito mais "organizado" — e também muda dependendo de quão difícil é a tarefa. Por fim, coisas como estudar em escola pública ou particular, ou falar mais de uma língua em casa, também afetam o desempenho em testes de linguagem, então um resultado baixo isolado nunca deve ser interpretado sem pensar no contexto de vida dessa criança.',
    conceptMap: {
      centralNode: 'Aspectos Linguísticos dos Transtornos de Linguagem',
      nodes: [
        { id: 'n-tl2-central', label: 'Aspectos Linguísticos dos Transtornos de Linguagem', type: 'central', description: 'Como o TDL afeta diferentes componentes linguísticos, sem perfil único.' },
        { id: 'n-tl2-receptiva', label: 'Linguagem Receptiva', type: 'primary', description: 'Compreensão, avaliada separadamente da produção.' },
        { id: 'n-tl2-expressiva', label: 'Linguagem Expressiva', type: 'primary', description: 'Produção: fonologia, morfossintaxe, vocabulário, discurso.' },
        { id: 'n-tl2-fonologia', label: 'Fonologia', type: 'secondary', description: 'Sistema de sons da língua.' },
        { id: 'n-tl2-morfossintaxe', label: 'Morfossintaxe', type: 'secondary', description: 'Morfologia e sintaxe integradas; marca clínica frequente.' },
        { id: 'n-tl2-semantica', label: 'Semântica e Vocabulário', type: 'secondary', description: 'Significado e léxico; correlacionado com morfologia.' },
        { id: 'n-tl2-pragmatica', label: 'Pragmática', type: 'primary', description: 'Uso social da linguagem; não exclusiva de TEA.' },
        { id: 'n-tl2-narrativa', label: 'Discurso e Narrativa', type: 'secondary', description: 'Organização de relatos; macro e microestrutura.' },
        { id: 'n-tl2-processamento', label: 'Memória de Trabalho e Processamento Verbal', type: 'primary', description: 'Sustenta o desempenho nos demais subsistemas.' },
        { id: 'n-tl2-marcadores', label: 'Marcadores Psicolinguísticos', type: 'application', description: 'Repetição de pseudopalavras e de sentenças, entre outros.' },
        { id: 'n-tl2-variabilidade', label: 'Variabilidade entre Indivíduos e ao Longo do Tempo', type: 'primary', description: 'Perfis mudam entre crianças, com a idade e com a demanda da tarefa.' },
        { id: 'n-tl2-impacto', label: 'Impacto Funcional', type: 'application', description: 'Desempenho em teste ≠ funcionamento cotidiano.' },
        { id: 'n-tl2-avaliacao', label: 'Avaliação Integrada', type: 'application', description: 'Múltiplos subsistemas e fontes, nunca um único marcador.' },
      ],
      edges: [
        { id: 'e-tl2-1', from: 'n-tl2-central', to: 'n-tl2-receptiva', label: 'compromete' },
        { id: 'e-tl2-2', from: 'n-tl2-central', to: 'n-tl2-expressiva', label: 'compromete' },
        { id: 'e-tl2-3', from: 'n-tl2-expressiva', to: 'n-tl2-fonologia', label: 'inclui' },
        { id: 'e-tl2-4', from: 'n-tl2-expressiva', to: 'n-tl2-morfossintaxe', label: 'inclui' },
        { id: 'e-tl2-5', from: 'n-tl2-expressiva', to: 'n-tl2-semantica', label: 'inclui' },
        { id: 'e-tl2-6', from: 'n-tl2-semantica', to: 'n-tl2-morfossintaxe', label: 'correlaciona-se com' },
        { id: 'e-tl2-7', from: 'n-tl2-central', to: 'n-tl2-pragmatica', label: 'compromete' },
        { id: 'e-tl2-8', from: 'n-tl2-pragmatica', to: 'n-tl2-narrativa', label: 'expressa-se em' },
        { id: 'e-tl2-9', from: 'n-tl2-central', to: 'n-tl2-processamento', label: 'sustentado por' },
        { id: 'e-tl2-10', from: 'n-tl2-processamento', to: 'n-tl2-marcadores', label: 'avaliado por' },
        { id: 'e-tl2-11', from: 'n-tl2-central', to: 'n-tl2-variabilidade', label: 'caracteriza-se por' },
        { id: 'e-tl2-12', from: 'n-tl2-variabilidade', to: 'n-tl2-impacto', label: 'relaciona-se a' },
        { id: 'e-tl2-13', from: 'n-tl2-central', to: 'n-tl2-avaliacao', label: 'exige' },
      ],
    },
    glossary: [
      { id: 'gl-tl2-1', term: 'Extended Optional Infinitive (EOI)', definition: 'Hipótese teórica segundo a qual crianças com TDL falantes de inglês omitem marcadores de tempo verbal e concordância por um período mais longo do que crianças mais novas em desenvolvimento típico.', example: 'Uma criança inglesa com TDL que produz "he walk" em vez de "he walks" com mais frequência e por mais tempo do que o esperado para a idade.' },
      { id: 'gl-tl2-2', term: 'Marcador de Tempo Verbal (Tense)', definition: 'Morfema gramatical que indica o tempo em que a ação ocorre; proposto como candidato a marcador clínico do TDL em inglês.', example: 'A desinência "-ed" do passado regular em inglês, ou "-va"/"-u" no português.' },
      { id: 'gl-tl2-3', term: 'Morfema de Número', definition: 'Marcador gramatical de singular/plural; um dos morfemas nominais mais estudados no português brasileiro em relação ao TDL.', example: 'O "-s" final que marca plural em "meninos".' },
      { id: 'gl-tl2-4', term: 'Estrutura Hierárquica (Sintaxe)', definition: 'Organização das palavras de uma frase em relações de dependência (não apenas sequenciais), permitindo relações entre elementos não adjacentes.', example: 'Em "o menino que a menina empurrou caiu", "menino" e "caiu" mantêm relação sintática apesar de não estarem lado a lado.' },
      { id: 'gl-tl2-5', term: 'Déficit de Ordenação Hierárquica (HOD)', definition: 'Hipótese teórica segundo a qual crianças com transtorno de linguagem representariam frases de forma "achatada", sem hierarquia sintática interna; não confirmada em estudo com crianças brasileiras.', example: 'A hipótese previa que a criança trataria todos os elementos da frase como uma sequência plana, sem estrutura em árvore.' },
      { id: 'gl-tl2-6', term: 'Curva ROC', definition: 'Ferramenta estatística usada para identificar o ponto de corte de uma medida contínua (como o escore de vocabulário) que melhor discrimina entre dois grupos ou desfechos.', example: 'Usar a curva ROC para encontrar o escore de vocabulário que melhor prediz o domínio do morfema de número em uma amostra específica.' },
      { id: 'gl-tl2-7', term: 'Sensibilidade e Especificidade', definition: 'Medidas de acurácia diagnóstica: sensibilidade é a proporção de casos verdadeiros corretamente identificados; especificidade é a proporção de não casos corretamente identificados.', example: 'Uma tarefa com sensibilidade de 90% identifica corretamente 9 em cada 10 crianças que realmente têm o transtorno.' },
      { id: 'gl-tl2-8', term: 'Macroestrutura Narrativa', definition: 'Organização geral de um relato (introdução, complicação, resolução), independentemente das frases específicas usadas para contá-lo.', example: 'Uma criança que consegue montar a sequência geral de uma história, mesmo usando frases simples.' },
      { id: 'gl-tl2-9', term: 'Microestrutura Narrativa', definition: 'Aspectos de vocabulário, gramática e coesão dentro das frases que compõem um relato.', example: 'O uso correto de pronomes e conectivos ("depois", "porque") dentro das frases de uma narrativa.' },
      { id: 'gl-tl2-10', term: 'Coesão Textual', definition: 'Uso de recursos linguísticos (pronomes, conectivos, repetição controlada) que ligam as partes de um texto ou relato entre si.', example: 'Usar "ele" para se referir a um personagem já mencionado, em vez de repetir o nome a cada frase.' },
      { id: 'gl-tl2-11', term: 'Transtorno de Comunicação Social (Pragmática)', definition: 'Categoria diagnóstica proposta para dificuldades pragmáticas persistentes sem os demais critérios de TEA; seus limites diagnósticos permanecem em debate na literatura.', example: 'Uma criança com dificuldade marcante de manter tópicos de conversa, sem os padrões restritos/repetitivos de comportamento exigidos para TEA.' },
      { id: 'gl-tl2-12', term: 'Extensão Média do Enunciado (EMU)', definition: 'Medida do comprimento médio das frases produzidas por uma criança, usada como indicador do desenvolvimento morfossintático.', example: 'Comparar o número médio de morfemas por frase entre uma criança com TDL e uma criança dois anos mais nova em desenvolvimento típico.' },
      { id: 'gl-tl2-13', term: 'Carga de Memória de Trabalho', definition: 'Grau de exigência de manutenção e manipulação temporária de informação imposto por uma tarefa; tarefas com maior carga tendem a produzir mais erros, mesmo em crianças sem transtorno.', example: 'Uma frase com uma cláusula adicional exige mais memória de trabalho do que a mesma frase sem essa cláusula.' },
      { id: 'gl-tl2-14', term: 'Tarefa Estruturada', definition: 'Atividade de avaliação controlada e previsível (como repetir frases ou apontar figuras), distinta da comunicação espontânea em contexto natural.', example: 'Uma prova de repetição de sentenças aplicada em sala silenciosa na clínica.' },
      { id: 'gl-tl2-15', term: 'Funcionamento Cotidiano (Funcionalidade)', definition: 'Uso real da linguagem nas atividades e interações do dia a dia da criança, que pode diferir do desempenho observado em tarefas estruturadas.', example: 'A capacidade de a criança explicar espontaneamente, em casa, o que aconteceu na escola.' },
      { id: 'gl-tl2-16', term: 'ABFW (Teste de Linguagem Infantil)', definition: 'Instrumento brasileiro de avaliação de linguagem infantil nas áreas de fonologia, vocabulário, fluência e pragmática, usado em estudos brasileiros sobre TDL.', example: 'Aplicar a prova de Vocabulário Expressivo do ABFW para obter um escore comparável a dados normativos brasileiros.' },
      { id: 'gl-tl2-17', term: 'Nível Socioeconômico (NSE) e Linguagem', definition: 'Relação documentada entre nível socioeconômico da família/escola e desempenho em tarefas de vocabulário, morfologia e compreensão, independente da presença de transtorno.', example: 'Crianças de escola pública apresentando vocabulário menor do que as de escola particular, ambas em desenvolvimento típico.' },
      { id: 'gl-tl2-18', term: 'Perfil "Idiossincrático" de Linguagem', definition: 'Padrão de erro ou desempenho que não segue simplesmente um atraso em relação ao desenvolvimento típico, mas apresenta características qualitativamente distintas.', example: 'Uma criança de 4 anos com TDL cometendo tipos de erro variados e pouco sistemáticos, diferente do padrão mais previsível de crianças mais novas em desenvolvimento típico.' },
    ],
  },

  apply: {
    questions: [
      {
        id: 'q-tl2-1',
        stem: 'Por que não existe um "perfil linguístico típico" único para caracterizar todas as crianças com TDL?',
        alternatives: [
          { id: 'q-tl2-1-a', text: 'Porque o TDL é uma condição heterogênea: diferentes crianças com o mesmo diagnóstico podem apresentar combinações e graus distintos de comprometimento entre fonologia, morfossintaxe, semântica e pragmática.', isCorrect: true, feedback: 'Correto. A heterogeneidade é uma característica central do TDL, documentada tanto no consenso CATALISE quanto em estudos empíricos.' },
          { id: 'q-tl2-1-b', text: 'Porque o TDL sempre afeta exclusivamente a fonologia, variando apenas em intensidade.', isCorrect: false, feedback: 'Incorreto. O TDL pode afetar múltiplos subsistemas além da fonologia, e nem toda criança tem a fonologia como área mais afetada.' },
          { id: 'q-tl2-1-c', text: 'Porque cada criança com TDL tem, obrigatoriamente, uma condição diferenciadora distinta.', isCorrect: false, feedback: 'Incorreto. Por definição, o TDL ocorre sem uma condição biomédica diferenciadora conhecida; a heterogeneidade decorre de variação no perfil linguístico em si.' },
          { id: 'q-tl2-1-d', text: 'Porque não há nenhum subsistema linguístico que seja mais frequentemente afetado do que outros.', isCorrect: false, feedback: 'Incorreto. Alguns subsistemas (como a morfologia) são descritos como marcas clínicas frequentes, mas isso não elimina a variabilidade entre indivíduos.' },
        ],
        correctAlternativeId: 'q-tl2-1-a',
        explanation: 'A heterogeneidade do TDL significa que diferentes combinações de comprometimento entre subsistemas são esperadas, e não uma exceção a um padrão único.',
        hint: 'Pense no que caracteriza o TDL segundo o consenso CATALISE, discutido no Módulo 1.',
        relatedConceptId: 'conc-tl2-heterogeneidade',
        referenceId: 'ref-tl2-bishop2017',
      },
      {
        id: 'q-tl2-2',
        stem: 'Por que a morfologia é considerada uma das marcas clínicas mais estudadas do TDL, mas sua manifestação específica varia entre línguas?',
        alternatives: [
          { id: 'q-tl2-2-a', text: 'Porque diferentes línguas marcam informações gramaticais de formas distintas (por exemplo, tempo verbal em inglês, morfema de número em português), então o marcador morfológico mais sensível em uma língua pode não ser o mesmo em outra.', isCorrect: true, feedback: 'Correto. Isso explica por que marcadores validados para o inglês (tempo verbal) não são automaticamente aplicáveis ao português, cuja literatura destaca o morfema de número.' },
          { id: 'q-tl2-2-b', text: 'Porque a morfologia só existe em algumas línguas, como o inglês.', isCorrect: false, feedback: 'Incorreto. Todas as línguas têm morfologia, ainda que organizada de formas diferentes.' },
          { id: 'q-tl2-2-c', text: 'Porque crianças com TDL só apresentam dificuldades morfológicas quando falam inglês.', isCorrect: false, feedback: 'Incorreto. Dificuldades morfológicas são documentadas em falantes de diversas línguas, incluindo o português brasileiro.' },
          { id: 'q-tl2-2-d', text: 'Porque a morfologia é o único subsistema linguístico afetado no TDL.', isCorrect: false, feedback: 'Incorreto. Outros subsistemas (fonologia, semântica, pragmática) também podem ser afetados.' },
        ],
        correctAlternativeId: 'q-tl2-2-a',
        explanation: 'A manifestação da dificuldade morfológica depende da estrutura gramatical específica de cada língua, o que exige validação própria de marcadores para cada idioma.',
        hint: 'Compare o que é destacado como marcador em inglês (tempo verbal) e em português (morfema de número).',
        relatedConceptId: 'conc-tl2-morfologia',
        referenceId: 'ref-tl2-ricewexler1996',
      },
      {
        id: 'q-tl2-3',
        stem: 'O que caracteriza a diferença entre vocabulário e acesso lexical?',
        alternatives: [
          { id: 'q-tl2-3-a', text: 'Vocabulário é o conhecimento armazenado de uma palavra; acesso lexical é a capacidade de recuperar essa palavra no momento da fala — uma criança pode ter a palavra armazenada e, ainda assim, ter dificuldade de evocá-la espontaneamente.', isCorrect: true, feedback: 'Correto. Essa distinção explica por que uma criança pode compreender uma palavra, mas hesitar ou substituí-la ao tentar produzi-la espontaneamente.' },
          { id: 'q-tl2-3-b', text: 'Vocabulário e acesso lexical são sinônimos, sem qualquer diferença prática relevante.', isCorrect: false, feedback: 'Incorreto. São processos distintos: um é sobre o que está armazenado, o outro é sobre a recuperação desse conteúdo em tempo real.' },
          { id: 'q-tl2-3-c', text: 'Acesso lexical se refere apenas à compreensão de palavras, nunca à produção.', isCorrect: false, feedback: 'Incorreto. O acesso lexical é especialmente relevante para a produção espontânea, quando a palavra precisa ser recuperada ativamente.' },
          { id: 'q-tl2-3-d', text: 'Vocabulário reduzido sempre implica dificuldade de acesso lexical, e vice-versa.', isCorrect: false, feedback: 'Incorreto. Uma criança pode ter vocabulário adequado e ainda assim apresentar dificuldade específica de acesso lexical, ou o inverso.' },
        ],
        correctAlternativeId: 'q-tl2-3-a',
        explanation: 'Vocabulário é o conteúdo armazenado; acesso lexical é o processo de recuperação desse conteúdo durante a produção espontânea da fala.',
        hint: 'Pense em "saber" uma palavra versus "conseguir dizer" essa palavra na hora certa.',
        relatedConceptId: 'conc-tl2-acesso-lexical',
      },
      {
        id: 'q-tl2-4',
        stem: 'Qual é a principal diferença entre marcadores morfológicos verbais (como os estudados por Rice e Wexler em inglês) e o morfema de número estudado no português brasileiro?',
        alternatives: [
          { id: 'q-tl2-4-a', text: 'São manifestações linguísticas específicas de cada língua: em inglês, marcadores de tempo verbal (tense) se mostraram mais relevantes como candidato a marcador clínico; em português, a literatura destacou o morfema nominal de número (plural).', isCorrect: true, feedback: 'Correto. Essa diferença ilustra por que marcadores clínicos precisam ser validados separadamente para cada idioma.' },
          { id: 'q-tl2-4-b', text: 'Não há diferença real: qualquer marcador morfológico serve igualmente bem em qualquer língua.', isCorrect: false, feedback: 'Incorreto. A manifestação e a relevância clínica de marcadores morfológicos variam conforme a estrutura da língua.' },
          { id: 'q-tl2-4-c', text: 'O português não possui nenhum tipo de marcador morfológico relevante para o TDL.', isCorrect: false, feedback: 'Incorreto. O morfema de número, entre outros, tem sido estudado como marca clínica relevante em português.' },
          { id: 'q-tl2-4-d', text: 'O inglês não possui morfologia nominal, apenas verbal.', isCorrect: false, feedback: 'Incorreto. O inglês possui morfologia nominal (por exemplo, plural regular "-s"), mas a literatura de marcadores clínicos citada no módulo destacou principalmente os marcadores verbais de tempo.' },
        ],
        correctAlternativeId: 'q-tl2-4-a',
        explanation: 'A manifestação clínica da dificuldade morfológica é específica de cada língua, o que exige validação própria de marcadores clínicos para cada idioma, em vez de transposição direta.',
        hint: 'Pense em qual tipo de morfema (verbal ou nominal) cada estudo citado destacou como mais relevante.',
        relatedConceptId: 'conc-tl2-morfossintaxe',
        referenceId: 'ref-tl2-puglisibefilopes2016',
      },
      {
        id: 'q-tl2-5',
        stem: 'Qual é a diferença entre desempenho em tarefa estruturada e funcionamento cotidiano (funcional)?',
        alternatives: [
          { id: 'q-tl2-5-a', text: 'Desempenho em tarefa estruturada reflete o resultado em uma atividade controlada e previsível (como repetir frases); funcionamento cotidiano reflete o uso real e espontâneo da linguagem em contextos naturais, que pode ser melhor ou pior do que sugere o teste.', isCorrect: true, feedback: 'Correto. Essa distinção é central para não superestimar nem subestimar as reais dificuldades funcionais de uma criança com base apenas em testes estruturados.' },
          { id: 'q-tl2-5-b', text: 'São a mesma coisa: bom desempenho em teste estruturado sempre implica bom funcionamento cotidiano.', isCorrect: false, feedback: 'Incorreto. Uma criança pode ter bom desempenho em teste estruturado e, ainda assim, ter dificuldades reais em contextos espontâneos, como discutido no módulo.' },
          { id: 'q-tl2-5-c', text: 'Tarefas estruturadas sempre superestimam a competência da criança, e o funcionamento cotidiano é sempre pior.', isCorrect: false, feedback: 'Incorreto. A relação pode variar; não há uma direção fixa e universal entre os dois tipos de desempenho.' },
          { id: 'q-tl2-5-d', text: 'Funcionamento cotidiano só pode ser avaliado por meio de testes padronizados aplicados na clínica.', isCorrect: false, feedback: 'Incorreto. O funcionamento cotidiano é melhor avaliado por observação, relato de familiares/professores e contextos naturais, não apenas por testes clínicos estruturados.' },
        ],
        correctAlternativeId: 'q-tl2-5-a',
        explanation: 'Desempenho estruturado e funcionamento cotidiano são dimensões distintas; um bom resultado em um não garante automaticamente um bom resultado no outro.',
        hint: 'Pense no exemplo do módulo sobre repetir frases na clínica versus contar o que aconteceu no recreio.',
        relatedConceptId: 'conc-tl2-narrativa',
      },
      {
        id: 'q-tl2-6',
        stem: 'Por que uma dificuldade pragmática isolada não deve, por si só, motivar suspeita de transtorno do espectro autista (TEA)?',
        alternatives: [
          { id: 'q-tl2-6-a', text: 'Porque dificuldades pragmáticas e de comunicação social ocorrem ao longo de um espectro que atravessa diversas condições do neurodesenvolvimento, incluindo o TDL, e não são exclusivas nem suficientes isoladamente para caracterizar o TEA.', isCorrect: true, feedback: 'Correto. A sobreposição de dificuldades pragmáticas entre diferentes condições exige avaliação mais ampla antes de qualquer suspeita diagnóstica específica.' },
          { id: 'q-tl2-6-b', text: 'Porque dificuldades pragmáticas nunca ocorrem em crianças com TEA.', isCorrect: false, feedback: 'Incorreto. Dificuldades pragmáticas são, na verdade, frequentes no TEA, mas também ocorrem em outras condições, incluindo o TDL.' },
          { id: 'q-tl2-6-c', text: 'Porque a pragmática não é considerada parte da linguagem.', isCorrect: false, feedback: 'Incorreto. A pragmática é um subsistema linguístico legítimo, tratado neste módulo como tal.' },
          { id: 'q-tl2-6-d', text: 'Porque só crianças acima de 10 anos podem apresentar dificuldades pragmáticas.', isCorrect: false, feedback: 'Incorreto. Dificuldades pragmáticas podem se manifestar em diferentes idades, não havendo esse corte etário.' },
        ],
        correctAlternativeId: 'q-tl2-6-a',
        explanation: 'A sobreposição de dificuldades pragmáticas entre TDL, TEA e outras condições exige que a diferenciação diagnóstica considere o perfil completo, não apenas um achado pragmático isolado.',
        hint: 'Pense no conceito de espectro de dificuldades de comunicação social discutido no módulo.',
        relatedConceptId: 'conc-tl2-pragmatica',
        referenceId: 'ref-tl2-norbury2014',
      },
      {
        id: 'q-tl2-7',
        stem: 'Uma criança de 5 anos apresenta bom vocabulário expressivo e boa organização geral de narrativas (macroestrutura), mas comete erros marcantes e frequentes de concordância verbal e nominal. Qual é a interpretação mais coerente com o conteúdo deste módulo?',
        alternatives: [
          { id: 'q-tl2-7-a', text: 'O perfil sugere uma dificuldade predominantemente morfossintática, que deve ser investigada especificamente, sem presumir que os demais subsistemas (já relativamente preservados) também estejam comprometidos.', isCorrect: true, feedback: 'Correto. Reconhecer um perfil predominante em um subsistema não deve levar a generalizar comprometimento para os demais.' },
          { id: 'q-tl2-7-b', text: 'Como o vocabulário está bom, pode-se descartar totalmente qualquer transtorno de linguagem.', isCorrect: false, feedback: 'Incorreto. Um subsistema preservado não descarta dificuldade significativa em outro subsistema, como a morfossintaxe neste caso.' },
          { id: 'q-tl2-7-c', text: 'A dificuldade morfossintática implica necessariamente que a criança também terá dificuldades pragmáticas compatíveis com TEA.', isCorrect: false, feedback: 'Incorreto. Dificuldade morfossintática não implica automaticamente dificuldade pragmática, e muito menos TEA.' },
          { id: 'q-tl2-7-d', text: 'Esse padrão de erro é impossível, já que TDL sempre afeta todos os subsistemas igualmente.', isCorrect: false, feedback: 'Incorreto. Perfis com predominância em um subsistema são exatamente o tipo de heterogeneidade discutida neste módulo.' },
        ],
        correctAlternativeId: 'q-tl2-7-a',
        explanation: 'Reconhecer um perfil com predominância morfossintática, sem generalizar para outros subsistemas relativamente preservados, é coerente com a heterogeneidade discutida ao longo do módulo.',
        hint: 'Pense em como a heterogeneidade se aplica a um caso concreto: um subsistema afetado não implica todos afetados.',
        relatedConceptId: 'conc-tl2-morfossintaxe',
      },
      {
        id: 'q-tl2-8',
        stem: 'Uma criança apresenta bom desempenho em uma tarefa estruturada de repetição de sentenças na clínica, mas a professora relata que ela tem muita dificuldade para recontar espontaneamente, em sala, o que aconteceu em um passeio. Qual é a interpretação mais coerente?',
        alternatives: [
          { id: 'q-tl2-8-a', text: 'A discrepância sugere investigar especificamente habilidades de narrativa e discurso espontâneo, já que bom desempenho em tarefa estruturada não garante bom funcionamento em produção espontânea, que exige geração ativa de conteúdo e organização sem apoio externo.', isCorrect: true, feedback: 'Correto. Essa é justamente a distinção entre tarefa estruturada e funcionamento cotidiano discutida no módulo.' },
          { id: 'q-tl2-8-b', text: 'A professora deve estar enganada, já que o teste estruturado é sempre mais confiável do que qualquer relato de sala de aula.', isCorrect: false, feedback: 'Incorreto. O relato da professora traz informação funcional relevante que não deve ser descartada só porque diverge do teste estruturado.' },
          { id: 'q-tl2-8-c', text: 'Não há nada a investigar, já que o bom desempenho no teste estruturado é suficiente para descartar qualquer dificuldade.', isCorrect: false, feedback: 'Incorreto. Um bom desempenho estruturado não descarta dificuldades funcionais específicas de narrativa espontânea.' },
          { id: 'q-tl2-8-d', text: 'A criança certamente tem TEA, já que apresenta dificuldade de relatar eventos.', isCorrect: false, feedback: 'Incorreto. Dificuldade de narrativa espontânea isolada não sustenta esse diagnóstico específico.' },
        ],
        correctAlternativeId: 'q-tl2-8-a',
        explanation: 'A discrepância entre desempenho estruturado e relato funcional é um sinal para investigar especificamente narrativa e discurso espontâneo, não para descartar a queixa nem fechar um diagnóstico não relacionado.',
        hint: 'Pense na diferença entre repetir uma frase pronta e gerar espontaneamente um relato original.',
        relatedConceptId: 'conc-tl2-narrativa',
      },
      {
        id: 'q-tl2-9',
        stem: 'Uma criança de escola pública, em desenvolvimento típico segundo os pais e professores, apresenta vocabulário reduzido em comparação a colegas de escola particular no mesmo teste padronizado. Qual conduta é mais coerente com os princípios discutidos neste módulo?',
        alternatives: [
          { id: 'q-tl2-9-a', text: 'Considerar que o resultado pode refletir efeito de nível socioeconômico e tipo de escola, e não necessariamente um transtorno de linguagem, antes de qualquer conclusão diagnóstica.', isCorrect: true, feedback: 'Correto. O efeito de tipo de escola sobre o vocabulário foi documentado mesmo em crianças sem qualquer transtorno de linguagem.' },
          { id: 'q-tl2-9-b', text: 'Diagnosticar TDL imediatamente, já que o vocabulário está abaixo da média do teste.', isCorrect: false, feedback: 'Incorreto. Vocabulário reduzido isoladamente não deve ser tratado como diagnóstico, especialmente diante de efeito documentado de contexto socioeconômico/escolar.' },
          { id: 'q-tl2-9-c', text: 'Ignorar completamente o resultado do teste, já que testes padronizados nunca têm valor nesse contexto.', isCorrect: false, feedback: 'Incorreto. O teste tem valor como uma fonte de informação, mas deve ser interpretado à luz do contexto, não ignorado.' },
          { id: 'q-tl2-9-d', text: 'Orientar a família a trocar a criança de escola imediatamente como única conduta.', isCorrect: false, feedback: 'Incorreto. Essa não é uma conduta fonoaudiológica coerente com a situação descrita nem resolve a questão de avaliação linguística em si.' },
        ],
        correctAlternativeId: 'q-tl2-9-a',
        explanation: 'Vocabulário reduzido pode refletir efeito ambiental (tipo de escola, nível socioeconômico) e não deve ser interpretado automaticamente como sinal de transtorno.',
        hint: 'Pense no achado do estudo brasileiro sobre efeito de tipo de escola no vocabulário, mesmo em desenvolvimento típico.',
        relatedConceptId: 'conc-tl2-vocabulario',
        referenceId: 'ref-tl2-puglisibefilopes2016',
      },
      {
        id: 'q-tl2-10',
        stem: 'Durante uma avaliação inicial, uma criança de 6 anos com suspeita de TDL apresenta desempenho ruim em uma única tarefa de repetição de pseudopalavras. Qual é o raciocínio clínico inicial mais coerente com os princípios deste módulo?',
        alternatives: [
          { id: 'q-tl2-10-a', text: 'Considerar esse resultado como um dado relevante a ser combinado com outras medidas (vocabulário, morfossintaxe, narrativa, relato funcional), sem tratá-lo como diagnóstico fechado isolado.', isCorrect: true, feedback: 'Correto. Nenhum marcador psicolinguístico isolado deve ser tratado como suficiente para diagnóstico.' },
          { id: 'q-tl2-10-b', text: 'Fechar o diagnóstico de TDL imediatamente com base nesse único resultado.', isCorrect: false, feedback: 'Incorreto. Um único marcador isolado não deve determinar sozinho um diagnóstico.' },
          { id: 'q-tl2-10-c', text: 'Descartar totalmente o resultado, já que tarefas de repetição de pseudopalavras nunca têm valor clínico.', isCorrect: false, feedback: 'Incorreto. A tarefa tem valor como um dado complementar, mas não deve ser descartada nem usada isoladamente.' },
          { id: 'q-tl2-10-d', text: 'Repetir apenas a mesma tarefa de pseudopalavras várias vezes no mesmo dia para confirmar o resultado.', isCorrect: false, feedback: 'Incorreto. Repetir o mesmo instrumento não substitui a combinação de diferentes fontes e tarefas de avaliação.' },
        ],
        correctAlternativeId: 'q-tl2-10-a',
        explanation: 'Um resultado isolado em uma tarefa específica deve ser integrado a outras fontes de avaliação, não tratado como suficiente por si só para diagnóstico.',
        hint: 'Pense no princípio de que nenhum marcador psicolinguístico isolado é suficiente para diagnóstico.',
        relatedConceptId: 'conc-tl2-marcador-clinico',
        referenceId: 'ref-tl2-gathercolebaddeley1990',
      },
      {
        id: 'q-tl2-11',
        stem: 'Em uma tarefa de compreensão de sentenças, uma criança comete mais erros quando a frase tem uma cláusula adicional (maior exigência de memória de trabalho) do que quando a frase é mais simples. Qual é a interpretação mais coerente com os achados discutidos neste módulo?',
        alternatives: [
          { id: 'q-tl2-11-a', text: 'O desempenho da criança pode estar sendo afetado pela maior demanda de processamento da tarefa, e não apenas por uma limitação linguística fixa e estável; isso é consistente com achados de que crianças com e sem TDL cometem mais erros sob maior carga de memória de trabalho.', isCorrect: true, feedback: 'Correto. A demanda da tarefa interage com o desempenho observado, o que deve ser considerado na interpretação dos resultados.' },
          { id: 'q-tl2-11-b', text: 'Esse padrão é exclusivo de crianças com TDL e nunca ocorre em crianças em desenvolvimento típico.', isCorrect: false, feedback: 'Incorreto. O estudo citado mostrou esse efeito de carga de memória de trabalho em ambos os grupos, embora com magnitude possivelmente diferente.' },
          { id: 'q-tl2-11-c', text: 'Esse padrão comprova definitivamente a hipótese do déficit de ordenação hierárquica.', isCorrect: false, feedback: 'Incorreto. Essa hipótese teórica específica não foi confirmada no estudo citado, mesmo diante do efeito de carga de memória de trabalho.' },
          { id: 'q-tl2-11-d', text: 'O resultado não tem relevância clínica e deve ser ignorado na avaliação.', isCorrect: false, feedback: 'Incorreto. O efeito da demanda da tarefa é relevante para interpretar corretamente o desempenho da criança.' },
        ],
        correctAlternativeId: 'q-tl2-11-a',
        explanation: 'O desempenho linguístico interage com a demanda de processamento da tarefa; maior carga de memória de trabalho tende a produzir mais erros, tanto em crianças com TDL quanto em desenvolvimento típico.',
        hint: 'Pense no achado sobre carga de memória de trabalho e erros sintáticos discutido no módulo.',
        relatedConceptId: 'conc-tl2-memoria-trabalho',
        referenceId: 'ref-tl2-fortunatotavares2012',
      },
      {
        id: 'q-tl2-12',
        stem: 'Uma família pergunta se o fato de o filho de 5 anos ter "só" dificuldade de vocabulário, sem problemas aparentes de gramática, significa que o quadro é mais simples e não precisa de acompanhamento cuidadoso. Qual é a resposta mais coerente com os princípios discutidos neste módulo?',
        alternatives: [
          { id: 'q-tl2-12-a', text: 'Explicar que o vocabulário está relacionado ao desenvolvimento de outras habilidades linguísticas (como a morfologia), que o perfil pode mudar ao longo do tempo, e que por isso um acompanhamento cuidadoso continua sendo importante, mesmo que apenas um subsistema pareça afetado no momento.', isCorrect: true, feedback: 'Correto. O vocabulário se correlaciona com o desenvolvimento morfológico, e perfis linguísticos podem se modificar ao longo do desenvolvimento, o que justifica acompanhamento continuado.' },
          { id: 'q-tl2-12-b', text: 'Confirmar que, como apenas um subsistema está afetado, não há necessidade de qualquer acompanhamento futuro.', isCorrect: false, feedback: 'Incorreto. Um perfil aparentemente restrito no momento não garante que permanecerá assim, dado que perfis linguísticos mudam ao longo do desenvolvimento.' },
          { id: 'q-tl2-12-c', text: 'Informar que dificuldade de vocabulário nunca está relacionada a outras habilidades linguísticas.', isCorrect: false, feedback: 'Incorreto. O vocabulário mostrou correlação direta com o desenvolvimento morfológico e morfossintático em estudo citado no módulo.' },
          { id: 'q-tl2-12-d', text: 'Afirmar que, como há apenas uma dificuldade, o quadro certamente não é TDL.', isCorrect: false, feedback: 'Incorreto. Um perfil com comprometimento predominante em um único subsistema é compatível com a heterogeneidade do TDL, não a exclui.' },
        ],
        correctAlternativeId: 'q-tl2-12-a',
        explanation: 'O vocabulário se relaciona ao desenvolvimento de outras habilidades linguísticas, e o perfil de uma criança pode se modificar ao longo do tempo, o que sustenta a importância de acompanhamento continuado mesmo diante de um comprometimento aparentemente restrito.',
        hint: 'Pense na correlação entre vocabulário e morfologia, e na variação do perfil ao longo do desenvolvimento.',
        relatedConceptId: 'conc-tl2-vocabulario',
        referenceId: 'ref-tl2-puglisibefilopes2016',
      },
    ],
    associations: [
      {
        id: 'assoc-tl2-1',
        instruction: 'Associe cada subsistema linguístico à sua manifestação típica de dificuldade em crianças com TDL.',
        pairs: [
          { id: 'p-tl2-1', left: 'Fonologia', right: 'Simplificação ou substituição sistemática de sons da fala' },
          { id: 'p-tl2-2', left: 'Morfossintaxe', right: 'Omissão de marcadores gramaticais, como tempo verbal ou plural' },
          { id: 'p-tl2-3', left: 'Semântica / Vocabulário', right: 'Dificuldade em compreender ou nomear palavras' },
          { id: 'p-tl2-4', left: 'Pragmática', right: 'Dificuldade em manter tópicos ou fazer inferências sociais' },
          { id: 'p-tl2-5', left: 'Narrativa', right: 'Dificuldade em organizar a sequência de eventos de um relato' },
          { id: 'p-tl2-6', left: 'Memória de trabalho verbal', right: 'Dificuldade em repetir uma sentença longa e complexa' },
          { id: 'p-tl2-7', left: 'Processamento verbal', right: 'Mais erros sob maior carga cognitiva da tarefa' },
        ],
      },
      {
        id: 'assoc-tl2-2',
        instruction: 'Associe cada achado ou tarefa ao cuidado de interpretação correspondente.',
        pairs: [
          { id: 'p-tl2-8', left: 'Repetição de pseudopalavras', right: 'Não deve ser usada isoladamente como critério diagnóstico' },
          { id: 'p-tl2-9', left: 'Repetição de sentenças', right: 'Maior sensibilidade/especificidade entre os marcadores testados, mas não infalível' },
          { id: 'p-tl2-10', left: 'Vocabulário reduzido', right: 'Pode refletir nível socioeconômico, não apenas TDL' },
          { id: 'p-tl2-11', left: 'Erro em teste estruturado', right: 'Não equivale automaticamente a prejuízo funcional cotidiano' },
          { id: 'p-tl2-12', left: 'Dificuldade pragmática isolada', right: 'Não caracteriza TEA por si só' },
          { id: 'p-tl2-13', left: 'Mudança do padrão de erro com a idade', right: 'Pode refletir reorganização qualitativa, não regressão' },
          { id: 'p-tl2-14', left: 'Desempenho sob alta carga de memória de trabalho', right: 'Pode subestimar a competência linguística real da criança' },
        ],
      },
    ],
    decisionExercises: [
      {
        id: 'dec-tl2-1',
        situation:
          'Uma criança de 5 anos apresenta bom vocabulário expressivo e narrativa razoavelmente organizada, mas comete erros marcantes e frequentes de concordância verbal e nominal em uma avaliação estruturada. A equipe discute como interpretar esse perfil.',
        options: [
          { id: 'dec-tl2-1-o1', text: 'Reconhecer que o perfil é predominantemente morfossintático, planejar avaliação aprofundada especificamente desse domínio, e não presumir automaticamente comprometimento em vocabulário, narrativa ou pragmática.', consequence: 'Permite uma investigação e, futuramente, uma intervenção direcionadas ao domínio realmente comprometido, sem generalizações desnecessárias.', explanation: 'A heterogeneidade do TDL implica que um subsistema pode estar predominantemente comprometido, sem que os demais estejam necessariamente afetados na mesma medida.', isRecommended: true },
          { id: 'dec-tl2-1-o2', text: 'Concluir que, como o vocabulário e a narrativa estão bons, não há transtorno de linguagem a ser investigado.', consequence: 'Risco de deixar sem investigação e suporte uma dificuldade morfossintática real e potencialmente significativa.', explanation: 'Um subsistema preservado não descarta dificuldade relevante em outro; a morfossintaxe deve ser investigada por si só.', isRecommended: false },
          { id: 'dec-tl2-1-o3', text: 'Assumir que a dificuldade morfossintática indica também dificuldade pragmática compatível com TEA, e encaminhar diretamente para avaliação de TEA.', consequence: 'Encaminhamento precipitado, baseado em uma inferência não sustentada entre subsistemas diferentes.', explanation: 'Dificuldade morfossintática não implica automaticamente dificuldade pragmática, e muito menos suspeita de TEA, que exige critérios próprios.', isRecommended: false },
          { id: 'dec-tl2-1-o4', text: 'Fechar diagnóstico de TDL exclusivamente com base nesse único teste estruturado de morfossintaxe.', consequence: 'Diagnóstico baseado em uma única tarefa, sem integrar outras fontes de avaliação nem considerar o contexto da criança.', explanation: 'Nenhum subsistema ou tarefa isolada deve ser suficiente para fechar um diagnóstico.', isRecommended: false },
        ],
      },
      {
        id: 'dec-tl2-2',
        situation:
          'Uma criança tem bom desempenho em uma tarefa estruturada de repetição de sentenças aplicada na clínica, mas a mãe relata que, em casa, ele "não consegue contar direito o que aconteceu na escola", ficando confuso e desorganizado ao tentar explicar.',
        options: [
          { id: 'dec-tl2-2-o1', text: 'Investigar especificamente habilidades de narrativa e discurso espontâneo em contexto mais natural, reconhecendo que bom desempenho em tarefa estruturada não garante funcionamento espontâneo equivalente.', consequence: 'Permite identificar uma dificuldade funcional real que não seria detectada apenas pela tarefa estruturada de repetição.', explanation: 'Desempenho em tarefa estruturada e funcionamento cotidiano são dimensões distintas, e o relato funcional da família é uma fonte de informação legítima e relevante.', isRecommended: true },
          { id: 'dec-tl2-2-o2', text: 'Descartar o relato da mãe, já que o desempenho na tarefa estruturada foi bom.', consequence: 'Perde a oportunidade de investigar e endereçar uma dificuldade funcional real relatada pela família.', explanation: 'O relato funcional não deve ser descartado apenas porque diverge de um resultado estruturado específico.', isRecommended: false },
          { id: 'dec-tl2-2-o3', text: 'Concluir que a mãe está exagerando, já que testes clínicos são sempre mais confiáveis do que relatos familiares.', consequence: 'Desconsidera informação funcional relevante e pode prejudicar a aliança com a família.', explanation: 'Relatos familiares sobre funcionamento cotidiano são uma fonte de dados legítima, especialmente quando o ambiente clínico não reproduz as demandas do dia a dia.', isRecommended: false },
          { id: 'dec-tl2-2-o4', text: 'Repetir apenas a mesma tarefa estruturada de repetição de sentenças, sem investigar narrativa espontânea ou contextos naturais.', consequence: 'Não esclarece a discrepância relatada, já que a tarefa repetida não avalia a habilidade específica de gerar um relato espontâneo.', explanation: 'A repetição da mesma tarefa estruturada não substitui a investigação da habilidade específica de discurso espontâneo relatada como problemática.', isRecommended: false },
        ],
      },
    ],
    fictionalCases: [
      {
        id: 'case-tl2-1',
        title: 'Caso fictício: Marina, 6 anos',
        description:
          'Marina tem 6 anos e cursa o 1º ano do ensino fundamental. Em uma avaliação estruturada na clínica, nomeou corretamente a maioria das figuras de um teste de vocabulário expressivo e repetiu corretamente a maior parte das sentenças de complexidade crescente em uma tarefa de repetição de sentenças. A professora, porém, relata que Marina "se perde" ao tentar contar o que aconteceu no fim de semana para a turma, pulando partes importantes e confundindo a ordem dos eventos. Em uma atividade de compreensão de uma história curta lida em voz alta, Marina respondeu corretamente às perguntas sobre fatos explícitos do texto, mas errou a maioria das perguntas que exigiam deduzir a intenção ou o sentimento de um personagem. O pai de Marina não soube dizer se ela "muda de assunto" durante conversas familiares, e não há registro de avaliação da coordenação motora ou de triagem auditiva recente. Marina nunca recebeu diagnóstico de TEA ou de qualquer outra condição.',
        disclaimer:
          'Este é um caso fictício, construído exclusivamente para fins didáticos. Não representa nenhuma pessoa real e não deve ser utilizado como modelo de laudo, diagnóstico definitivo ou conduta clínica prescritiva. A avaliação e o diagnóstico diferencial reais exigem exame presencial completo, investigação complementar pertinente e julgamento clínico individualizado ao longo do tempo.',
        questions: [
          {
            id: 'case-tl2-1-q1',
            stem: 'Diante das informações apresentadas, qual é a interpretação mais coerente com os princípios discutidos neste módulo?',
            alternatives: [
              { id: 'case-tl2-1-q1-a', text: 'O bom desempenho de Marina em tarefas estruturadas de vocabulário e repetição de sentenças não descarta possíveis dificuldades específicas de narrativa espontânea e de compreensão de inferências, que devem ser investigadas separadamente.', isCorrect: true, feedback: 'Correto. O caso ilustra exatamente a distinção entre desempenho em tarefa estruturada e funcionamento em habilidades mais integradas, como narrativa e inferência.' },
              { id: 'case-tl2-1-q1-b', text: 'Como o desempenho em vocabulário e repetição de sentenças foi bom, pode-se descartar totalmente qualquer dificuldade de linguagem em Marina.', isCorrect: false, feedback: 'Incorreto. Bom desempenho em tarefas estruturadas específicas não garante ausência de dificuldade em narrativa espontânea ou inferência, como relatado pela professora e observado na atividade de compreensão.' },
              { id: 'case-tl2-1-q1-c', text: 'A dificuldade de Marina em compreender inferências já é suficiente, isoladamente, para fechar diagnóstico de TDL.', isCorrect: false, feedback: 'Incorreto. Um achado isolado não deve ser tratado como diagnóstico fechado; é necessário integrar múltiplas fontes de avaliação ao longo do tempo.' },
              { id: 'case-tl2-1-q1-d', text: 'A dificuldade relatada pela professora deve ser desconsiderada, já que testes estruturados são sempre mais confiáveis do que relatos escolares.', isCorrect: false, feedback: 'Incorreto. O relato da professora é uma fonte relevante de informação funcional, especialmente quando diverge do desempenho em tarefas estruturadas específicas.' },
            ],
            correctAlternativeId: 'case-tl2-1-q1-a',
            explanation: 'O caso de Marina ilustra que um bom desempenho em tarefas estruturadas específicas (vocabulário, repetição de sentenças) não garante ausência de dificuldade em habilidades mais integradas e espontâneas, como narrativa e compreensão de inferências.',
            hint: 'Compare os diferentes tipos de tarefa descritos no caso: quais são estruturadas e quais exigem geração espontânea ou inferência?',
            relatedConceptId: 'conc-tl2-inferencias',
          },
          {
            id: 'case-tl2-1-q2',
            stem: 'Qual investigação adicional é mais prioritária para esclarecer o perfil de Marina, considerando as informações disponíveis e as que estão faltando?',
            alternatives: [
              { id: 'case-tl2-1-q2-a', text: 'Avaliar de forma mais estruturada as habilidades de narrativa espontânea (macro e microestrutura) e de compreensão de inferências, além de obter mais informações sobre pragmática em contextos familiares e escolares.', isCorrect: true, feedback: 'Correto. Essas são justamente as áreas em que há indícios de dificuldade, mas ainda pouca informação sistemática disponível no caso.' },
              { id: 'case-tl2-1-q2-b', text: 'Repetir a mesma tarefa de repetição de sentenças em uma segunda sessão, já que essa tarefa teve o melhor resultado.', isCorrect: false, feedback: 'Incorreto. Repetir uma tarefa em que o desempenho já foi bom não esclarece as áreas de maior indício de dificuldade.' },
              { id: 'case-tl2-1-q2-c', text: 'Concluir que não é necessária nenhuma investigação adicional, já que os dados disponíveis já permitem fechar o quadro completo de Marina.', isCorrect: false, feedback: 'Incorreto. Faltam dados relevantes, como informações sobre pragmática em casa e sobre coordenação motora/audição, além de avaliação mais sistemática de narrativa e inferência.' },
              { id: 'case-tl2-1-q2-d', text: 'Encaminhar diretamente para avaliação de TEA, com base na dificuldade de compreensão de inferências.', isCorrect: false, feedback: 'Incorreto. Uma dificuldade isolada de compreensão de inferências não é suficiente, por si só, para justificar esse encaminhamento específico.' },
            ],
            correctAlternativeId: 'case-tl2-1-q2-a',
            explanation: 'As áreas com indícios de dificuldade (narrativa espontânea, inferência) ainda carecem de avaliação mais sistemática, e informações sobre pragmática em outros contextos e sobre audição/coordenação motora estão ausentes no caso.',
            hint: 'Releia o caso: quais informações são mencionadas como ausentes ou incertas?',
            relatedConceptId: 'conc-tl2-narrativa',
          },
          {
            id: 'case-tl2-1-q3',
            stem: 'Qual das alternativas representa uma conclusão diagnóstica adequada para o caso de Marina, a partir apenas das informações fornecidas?',
            alternatives: [
              { id: 'case-tl2-1-q3-a', text: 'Nenhum diagnóstico definitivo pode ser estabelecido apenas com as informações fornecidas; é necessário completar a avaliação com dados adicionais e acompanhamento ao longo do tempo.', isCorrect: true, feedback: 'Correto. As informações disponíveis levantam hipóteses relevantes, mas são insuficientes para qualquer conclusão diagnóstica fechada.' },
              { id: 'case-tl2-1-q3-b', text: 'Marina tem certamente Transtorno do Desenvolvimento da Linguagem, com perfil predominante em narrativa e inferência.', isCorrect: false, feedback: 'Incorreto. Ainda faltam dados essenciais (avaliação estruturada de narrativa/inferência, informações sobre audição, coordenação motora e pragmática em outros contextos) para essa conclusão.' },
              { id: 'case-tl2-1-q3-c', text: 'Marina tem certamente Transtorno do Espectro Autista, dado o relato sobre dificuldades de inferência.', isCorrect: false, feedback: 'Incorreto. Dificuldade de inferência isolada não sustenta esse diagnóstico específico, que exige critérios próprios e mais abrangentes.' },
              { id: 'case-tl2-1-q3-d', text: 'Marina não tem nenhuma dificuldade, já que teve bom desempenho em dois testes estruturados.', isCorrect: false, feedback: 'Incorreto. Há indícios relevantes de dificuldade em narrativa espontânea e inferência que não devem ser ignorados.' },
            ],
            correctAlternativeId: 'case-tl2-1-q3-a',
            explanation: 'As informações do caso levantam hipóteses relevantes sobre narrativa e inferência, mas não permitem, por si só, nenhuma conclusão diagnóstica fechada, exigindo avaliação complementar e acompanhamento.',
            hint: 'Pense nos limites de interpretação de um caso com dados incompletos e contraditórios.',
            relatedConceptId: 'conc-tl2-inferencias',
          },
        ],
      },
    ],
  },

  review: {
    flashcards: [
      { id: 'fc-tl2-f1', front: 'Por que não existe um "perfil típico" único de TDL?', back: 'Porque o TDL é heterogêneo: diferentes combinações e graus de comprometimento entre fonologia, morfossintaxe, semântica e pragmática são possíveis entre crianças com o mesmo diagnóstico.', tags: ['heterogeneidade'] },
      { id: 'fc-tl2-f2', front: 'Qual estudo brasileiro encontrou impacto do DEL em vocabulário, morfologia de número e compreensão morfossintática?', back: 'Puglisi e Befi-Lopes (2016), com 204 crianças de 4-6 anos, encontrando desempenho significativamente pior no grupo DEL em todas as três medidas.', tags: ['evidencia', 'brasil'] },
      { id: 'fc-tl2-f3', front: 'O que mostrou a curva ROC do estudo de Puglisi e Befi-Lopes (2016) sobre vocabulário e morfologia?', back: 'Um ponto de corte de vocabulário (≈83,5 no ABFW) associado ao domínio do morfema de número, com sensibilidade de 77,1% e especificidade de 76,3% nessa amostra específica.', tags: ['vocabulario', 'morfologia'] },
      { id: 'fc-tl2-f4', front: 'Como mudou o padrão de erro morfossintático das crianças com DEL entre 4 e 6 anos, no estudo brasileiro?', back: 'De um padrão pouco sistemático (todos os tipos de erro em proporções semelhantes) aos 4 anos, para um padrão qualitativamente mais parecido ao típico (predominância de erros morfológicos) aos 6 anos, embora ainda quantitativamente inferior.', tags: ['desenvolvimento', 'morfossintaxe'] },
      { id: 'fc-tl2-f5', front: 'O que são marcadores de tempo verbal (tense), segundo Rice e Wexler (1996)?', back: 'Morfemas gramaticais (como "-s" de terceira pessoa, "-ed" de passado, BE e DO em inglês) propostos como candidatos a marcador clínico do TDL em falantes de inglês.', tags: ['morfologia', 'ingles'] },
      { id: 'fc-tl2-f6', front: 'Por que marcadores de tempo verbal do inglês não devem ser transpostos diretamente para o português?', back: 'Porque cada língua marca informações gramaticais de forma diferente; no português, a literatura destaca o morfema nominal de número como mais estudado, não os marcadores verbais de tempo do inglês.', tags: ['morfologia', 'limitacoes'] },
      { id: 'fc-tl2-f7', front: 'O que testou o estudo de Fortunato-Tavares et al. (2012) com crianças brasileiras?', back: 'A compreensão de sentenças com relações sintáticas não adjacentes (hierárquicas), encontrando desempenho pior em crianças com TDL, especialmente sob maior carga de memória de trabalho.', tags: ['sintaxe', 'brasil'] },
      { id: 'fc-tl2-f8', front: 'A hipótese do déficit de ordenação hierárquica (HOD) foi confirmada no estudo de Fortunato-Tavares et al. (2012)?', back: 'Não. A dificuldade sintática foi confirmada, mas essa hipótese teórica específica sobre o mecanismo (representação "achatada" da frase) não foi confirmada.', tags: ['sintaxe', 'limitacoes'] },
      { id: 'fc-tl2-f9', front: 'Qual marcador psicolinguístico apresentou a melhor sensibilidade e especificidade entre os testados por Conti-Ramsden, Botting e Faragher (2001)?', back: 'A repetição de sentenças, com sensibilidade de 90% e especificidade de 85%, superior a repetição de pseudopalavras e marcadores morfológicos isolados.', tags: ['marcador-clinico', 'evidencia'] },
      { id: 'fc-tl2-f10', front: 'Por que a repetição de sentenças é considerada uma tarefa especialmente sensível?', back: 'Porque exige processar simultaneamente percepção da fala, vocabulário, conhecimento gramatical e planejamento da produção, integrando múltiplos subsistemas ao mesmo tempo.', tags: ['repeticao-sentencas'] },
      { id: 'fc-tl2-f11', front: 'A repetição de pseudopalavras deve ser usada isoladamente como diagnóstico de TDL?', back: 'Não. É um indicador complementar útil, mas nem toda criança com TDL apresenta esse padrão, e nenhum marcador isolado deve ser usado como critério único.', tags: ['memoria-trabalho', 'cuidado'] },
      { id: 'fc-tl2-f12', front: 'Qual é a diferença entre vocabulário e acesso lexical?', back: 'Vocabulário é o conhecimento armazenado de uma palavra; acesso lexical é a capacidade de recuperar essa palavra no momento da fala. Uma criança pode ter a palavra armazenada e ainda assim ter dificuldade de evocá-la espontaneamente.', tags: ['acesso-lexical'] },
      { id: 'fc-tl2-f13', front: 'Por que dificuldade pragmática isolada não deve motivar suspeita automática de TEA?', back: 'Porque dificuldades pragmáticas ocorrem ao longo de um espectro que atravessa diversas condições do neurodesenvolvimento, incluindo o TDL, e não são exclusivas nem suficientes isoladamente para o TEA (Norbury, 2014).', tags: ['pragmatica', 'diferenciacao'] },
      { id: 'fc-tl2-f14', front: 'O que diferencia macroestrutura de microestrutura narrativa?', back: 'Macroestrutura é a organização geral do relato (início, complicação, resolução); microestrutura é o vocabulário e a gramática usados dentro das frases do relato.', tags: ['narrativa'] },
      { id: 'fc-tl2-f15', front: 'Por que a compreensão de inferências costuma ser mais vulnerável do que a compreensão literal?', back: 'Porque exige deduzir informações não ditas explicitamente (intenções, causas), um processamento mais complexo do que apenas decodificar o que está dito diretamente.', tags: ['inferencias'] },
      { id: 'fc-tl2-f16', front: 'Bom desempenho em tarefa estruturada garante bom funcionamento cotidiano espontâneo?', back: 'Não. Desempenho em tarefa estruturada e funcionamento cotidiano são dimensões distintas; uma criança pode ir bem em uma e mal na outra.', tags: ['funcionalidade'] },
      { id: 'fc-tl2-f17', front: 'Por que o vocabulário reduzido não deve ser tratado como diagnóstico isolado de TDL?', back: 'Porque também é fortemente influenciado por nível socioeconômico e tipo de escola, como demonstrado em crianças em desenvolvimento típico de diferentes contextos escolares.', tags: ['vocabulario', 'contexto'] },
      { id: 'fc-tl2-f18', front: 'O que mostrou o estudo brasileiro sobre efeito de tipo de escola no desempenho linguístico?', back: 'Crianças de escola pública em desenvolvimento típico tiveram desempenho pior do que as de escola particular em vocabulário, morfologia e compreensão — um efeito ambiental, não orgânico.', tags: ['contexto', 'evidencia'] },
      { id: 'fc-tl2-f19', front: 'A carga de memória de trabalho de uma tarefa afeta o desempenho linguístico observado?', back: 'Sim. Tarefas com maior exigência de memória de trabalho produzem mais erros, tanto em crianças com TDL quanto em desenvolvimento típico, o que deve ser considerado na interpretação dos resultados.', tags: ['memoria-trabalho', 'processamento'] },
      { id: 'fc-tl2-f20', front: 'O perfil linguístico de uma criança é fixo ao longo do tempo?', back: 'Não. Muda com a idade (inclusive qualitativamente, não só quantitativamente) e conforme a demanda da tarefa; uma avaliação é um retrato daquele momento específico.', tags: ['variabilidade'] },
      { id: 'fc-tl2-f21', front: 'Por que nenhum subsistema linguístico isolado deve ser usado para diagnosticar TDL?', back: 'Porque o TDL é heterogêneo e pode afetar diferentes combinações de subsistemas; um único subsistema comprometido (ou preservado) não representa o quadro completo da criança.', tags: ['heterogeneidade', 'diagnostico'] },
      { id: 'fc-tl2-f22', front: 'O que é extensão média do enunciado (EMU)?', back: 'Medida do comprimento médio das frases produzidas por uma criança, usada como indicador do desenvolvimento morfossintático.', tags: ['morfossintaxe'] },
      { id: 'fc-tl2-f23', front: 'Linguagem receptiva e expressiva devem ser avaliadas juntas ou separadamente?', back: 'Separadamente. Estratégias compensatórias podem mascarar dificuldades de compreensão, e o desempenho em uma não deve ser inferido a partir da outra.', tags: ['receptiva', 'expressiva'] },
      { id: 'fc-tl2-f24', front: 'O que caracteriza um perfil linguístico "idiossincrático"?', back: 'Um padrão de erro ou desempenho que não é apenas um atraso em relação ao desenvolvimento típico, mas apresenta características qualitativamente distintas, como o padrão pouco sistemático encontrado em crianças de 4 anos com DEL.', tags: ['heterogeneidade', 'desenvolvimento'] },
      { id: 'fc-tl2-f25', front: 'Por que a fonologia isolada tende a ter prognóstico mais favorável no TDL?', back: 'Porque dificuldades restritas à fonologia, sem comprometimento de morfossintaxe e discurso, costumam ter evolução mais favorável do que quadros que envolvem múltiplos subsistemas (discutido também no Módulo 1).', tags: ['fonologia', 'prognostico'] },
      { id: 'fc-tl2-f26', front: 'Qual o cuidado ao comparar percentuais e pontos de corte entre diferentes estudos citados neste módulo?', back: 'Os estudos usam metodologias, idiomas, faixas etárias e amostras distintas; comparações diretas de números entre estudos diferentes devem ser feitas com cautela.', tags: ['metodologia', 'cuidado'] },
    ],
    finalSynthesis:
      'Os transtornos do desenvolvimento da linguagem podem afetar, em combinações e graus variados, fonologia, morfologia, sintaxe, semântica, pragmática, discurso e narrativa, sustentados por processos de memória de trabalho verbal e processamento linguístico — sem que exista um perfil único, típico ou universal. Estudos brasileiros com amostras robustas confirmaram que vocabulário, morfologia nominal e compreensão morfossintática são todos sensíveis ao efeito do transtorno, mas também a fatores ambientais como tipo de escola, reforçando que um resultado baixo isolado nunca deve ser interpretado fora do contexto de vida da criança (Puglisi; Befi-Lopes, 2016). A dificuldade sintática em estruturas complexas foi replicada em crianças brasileiras, ainda que a explicação teórica específica proposta para seu mecanismo não tenha sido confirmada (Fortunato-Tavares et al., 2012). Marcadores psicolinguísticos como repetição de pseudopalavras e de sentenças oferecem dados complementares relevantes — a repetição de sentenças mostrou-se particularmente sensível por integrar múltiplos processos —, mas nenhum marcador isolado deve ser tratado como suficiente para diagnóstico. A pragmática e a narrativa revelam a linguagem em uso integrado, e dificuldades nesses domínios não devem ser confundidas automaticamente com transtorno do espectro autista. Por fim, o perfil linguístico de uma criança muda com a idade, com a demanda da tarefa e com o contexto sociocultural, de modo que qualquer avaliação representa um retrato pontual, não uma descrição fixa e definitiva — reforçando, mais uma vez, que decisões clínicas responsáveis exigem integrar múltiplos subsistemas, múltiplas fontes de informação e o funcionamento real da criança em seu contexto de vida.',
  },

  references: [
    {
      id: 'ref-tl2-bishop2017',
      authors: 'BISHOP, Dorothy V. M.; SNOWLING, Margaret J.; THOMPSON, Paul A.; GREENHALGH, Trisha; CATALISE-2 consortium.',
      title: 'Phase 2 of CATALISE: A Multinational and Multidisciplinary Delphi Consensus Study of Problems with Language Development: Terminology',
      source: 'Journal of Child Psychology and Psychiatry, 58(10), 1068-1080, 2017. DOI: 10.1111/jcpp.12721. Acesso integral (já confirmado na auditoria do Módulo 1): artigo lido na íntegra.',
      year: 2017,
      doi: '10.1111/jcpp.12721',
      usedIn: ['learn.summary', 'learn.evidence'],
    },
    {
      id: 'ref-tl2-puglisibefilopes2016',
      authors: 'PUGLISI, Marina Leite; BEFI-LOPES, Debora Maria.',
      title: 'Impacto do Distúrbio Específico de Linguagem e do Tipo de Escola nos Diferentes Subsistemas da Linguagem',
      source: 'CoDAS, 28(4), 388-394, 2016. DOI: 10.1590/2317-1782/20162015242. Acesso integral nesta auditoria: artigo lido na íntegra (SciELO, acesso aberto), incluindo métodos, tabelas de resultados e discussão.',
      year: 2016,
      doi: '10.1590/2317-1782/20162015242',
      usedIn: ['learn.summary', 'learn.essentialConcepts', 'learn.evidence', 'learn.limitations', 'apply.questions'],
    },
    {
      id: 'ref-tl2-fortunatotavares2012',
      authors: 'FORTUNATO-TAVARES, Talita; ANDRADE, Claudia R. F.; BEFI-LOPES, Debora M.; HESTVIK, Arild; EPSTEIN, Baila.',
      title: 'Syntactic Structural Assignment in Brazilian Portuguese-Speaking Children With Specific Language Impairment',
      source: 'Journal of Speech, Language, and Hearing Research, 55(4), 1097-1111, 2012. DOI: 10.1044/1092-4388(2011/10-0215). Acesso integral nesta auditoria: artigo lido na íntegra (introdução, método, resultados dos dois experimentos, discussão e discussão geral), incluindo estatísticas exatas e comparação com hipóteses teóricas concorrentes (HOD e CGC).',
      year: 2012,
      doi: '10.1044/1092-4388(2011/10-0215)',
      usedIn: ['learn.summary', 'learn.evidence', 'learn.limitations', 'apply.questions'],
    },
    {
      id: 'ref-tl2-ricewexler1996',
      authors: 'RICE, Mabel L.; WEXLER, Kenneth.',
      title: 'Toward Tense as a Clinical Marker of Specific Language Impairment in English-Speaking Children',
      source: 'Journal of Speech, Language, and Hearing Research, 39(6), 1239-1257, 1996. REFERÊNCIA NÃO CONFIRMADA EM TEXTO INTEGRAL NESTA AUDITORIA — REVISÃO HUMANA NECESSÁRIA quanto aos resultados e à discussão completos: o artigo original é pago e o acesso direto (ASHA, Academia.edu) foi bloqueado nesta auditoria. Os dados quantitativos citados (37 crianças com TDL, grupos-controle de 40 e 45, acurácia abaixo de 60% vs. cerca de 80%) foram triangulados via múltiplas fontes secundárias que descrevem o estudo, não pela leitura direta do artigo.',
      year: 1996,
      usedIn: ['learn.summary', 'learn.evidence'],
    },
    {
      id: 'ref-tl2-contiramsden2001',
      authors: 'CONTI-RAMSDEN, Gina; BOTTING, Nicola; FARAGHER, Brian.',
      title: 'Psycholinguistic Markers for Specific Language Impairment (SLI)',
      source: 'Journal of Child Psychology and Psychiatry, 42(6), 741-748, 2001. DOI: 10.1111/1469-7610.00770. Acesso parcial nesta auditoria: metodologia e achados quantitativos (sensibilidade/especificidade) confirmados via busca; texto integral não lido.',
      year: 2001,
      doi: '10.1111/1469-7610.00770',
      usedIn: ['learn.summary', 'learn.essentialConcepts', 'learn.evidence', 'learn.limitations'],
    },
    {
      id: 'ref-tl2-gathercolebaddeley1990',
      authors: 'GATHERCOLE, Susan E.; BADDELEY, Alan D.',
      title: 'Phonological Memory Deficits in Language Disordered Children: Is There a Causal Connection?',
      source: 'Journal of Memory and Language, 29, 336-360, 1990. Acesso parcial (já reportado na auditoria do Módulo 1): achados gerais confirmados via busca; texto integral não lido.',
      year: 1990,
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-tl2-norbury2014',
      authors: 'NORBURY, Courtenay Frazier.',
      title: 'Practitioner Review: Social (Pragmatic) Communication Disorder Conceptualization, Evidence and Clinical Implications',
      source: 'Journal of Child Psychology and Psychiatry, 55(3), 204-216, 2014. DOI: 10.1111/jcpp.12154. Acesso parcial nesta auditoria: resumo e principais argumentos confirmados via busca; texto integral não lido.',
      year: 2014,
      doi: '10.1111/jcpp.12154',
      usedIn: ['learn.summary', 'learn.essentialConcepts', 'learn.evidence', 'learn.limitations', 'apply.questions'],
    },
  ],
}
