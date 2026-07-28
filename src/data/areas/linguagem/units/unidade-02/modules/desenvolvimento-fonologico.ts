import { defineFonoLabModule } from '@/methodology/fonolab'

export const moduloDesenvolvimentoFonologico = defineFonoLabModule({
  id: 'mod-desenvolvimento-fonologico',
  slug: 'desenvolvimento-fonologico',
  title: 'Desenvolvimento fonológico',
  description:
    'Introdução à aquisição e à organização progressiva do sistema fonológico durante o desenvolvimento da linguagem.',
  order: 1,
  learningObjective:
    'Compreender como o sistema fonológico se organiza e se desenvolve, reconhecendo os principais componentes envolvidos na aquisição dos sons da fala e os cuidados necessários para distinguir variabilidade do desenvolvimento de possíveis sinais de alteração.',
  prerequisiteKnowledge: [
    'Noções gerais de fonética articulatória',
    'Desenvolvimento típico da linguagem oral na primeira infância',
  ],
  estimatedTimeMinutes: 120,
  difficulty: 'introductory',
  status: 'published',

  learn: {
    summary: [
      {
        id: 'sum-1',
        text: 'O estudo do desenvolvimento fonológico começa por uma distinção conceitual que orienta toda a prática clínica em Fonoaudiologia: a diferença entre fonética e fonologia. A fonética descreve os sons da fala (fones) como eventos físicos, articulatórios e acústicos, produzidos por um aparelho fonador específico, sem levar em conta seu valor na língua. A fonologia, por sua vez, estuda a organização mental desses sons dentro de um sistema linguístico: como eles se agrupam em unidades que distinguem significados (fonemas), quais regras regem sua combinação e quais variações são permitidas sem alterar o sentido. Um mesmo som pode ser produzido de formas fisicamente diferentes (alofones) sem que isso mude o significado da palavra; é a fonologia que determina quando essa variação é irrelevante e quando ela é distintiva. Compreender essa distinção é decisivo na prática: um erro fonético (dificuldade motora de produzir um som isoladamente) e um padrão fonológico (uma regra sistemática que a criança aplica a uma classe de sons) exigem análises diferentes — tema que será aprofundado nos módulos seguintes desta unidade.',
      },
      {
        id: 'sum-2',
        text: 'O sistema fonológico de uma língua é organizado a partir de unidades mínimas capazes de distinguir significado, os fonemas. Dois fonemas se opõem quando a troca de um pelo outro, em um mesmo contexto, produz uma palavra diferente — o chamado par mínimo, como em "pato" e "bato", que se diferenciam por um único traço: a sonoridade. Os fonemas podem ser descritos por meio de traços distintivos — propriedades articulatórias e acústicas menores que o fonema, como ponto de articulação, modo de articulação e sonoridade, que permitem agrupar os sons em classes naturais. Essa organização em traços explica por que, durante a aquisição, uma criança frequentemente generaliza um mesmo padrão de simplificação a toda uma classe de sons relacionados, e não a um fonema isolado: é o sistema, e não cada som individualmente, que está em construção.',
      },
      {
        id: 'sum-3',
        text: 'Outro nível de organização é a estrutura silábica. A sílaba do português brasileiro admite diferentes composições, da mais simples (CV, consoante-vogal, como em "pá") a estruturas mais complexas, como CVC ("mar"), CCV, com encontro consonantal no onset ("prato"), e CCVC. A complexidade estrutural da sílaba tende a se relacionar com a ordem de aquisição: estruturas simples costumam ser dominadas antes de estruturas com encontros consonantais ou consoantes em posição de coda, que exigem maior planejamento motor e maior estabilidade do sistema fonológico como um todo (Ceron; De Simoni; Urrutia; Keske-Soares, 2022). Por isso, a análise fonológica de uma amostra de fala não deve se limitar a listar quais sons a criança produz, mas também observar em quais posições da sílaba e da palavra essa produção ocorre — a mesma consoante pode estar consolidada em onset simples e ainda ausente em posição de coda ou em encontro consonantal.',
      },
      {
        id: 'sum-4',
        text: 'O desenvolvimento fonológico tem início muito antes da primeira palavra. Um experimento clássico e amplamente replicado mostrou que bebês de apenas 1 a 4 meses de idade já discriminam categoricamente contrastes acústicos que, na fala adulta, distinguem fonemas — muito antes de serem capazes de produzir qualquer som de forma intencional (Eimas; Siqueland; Jusczyk; Vigorito, 1971). Esse achado é frequentemente citado como um dos primeiros indícios de que a sensibilidade perceptiva a contrastes da fala está presente muito cedo no desenvolvimento, o que sustenta a ideia geral, discutida na área, de que a percepção tende a se adiantar em relação à produção estável de um mesmo contraste — sem que isso signifique uma relação simples ou universal de causa e efeito para cada som e cada criança. É comum que a criança perceba distinções que ainda não consegue produzir motoramente; essa dissociação é um lembrete importante para a prática clínica: a ausência de um som no inventário produtivo da criança não implica, necessariamente, uma dificuldade perceptiva equivalente, e vice-versa; cada domínio deve ser considerado nas suas próprias bases, e a relação entre eles deve ser investigada, não presumida.',
      },
      {
        id: 'sum-5',
        text: 'À medida que a produção de fala se estabiliza, fala-se em inventário fonético — o conjunto de sons que a criança é capaz de articular, ainda que de forma inconsistente — e inventário fonológico, o conjunto de contrastes que ela já utiliza de modo estável e funcional para diferenciar significados. Estudos brasileiros de base populacional têm buscado descrever a sequência típica de expansão desse inventário. De modo consistente, consoantes plosivas e nasais tendem a ser dominadas mais cedo, seguidas pelas fricativas e, por último, pelas líquidas e pelos encontros consonantais (Ceron; Gubiani; Oliveira; Keske-Soares, 2017). Essa sequência descreve uma tendência de grupo, observada em amostras amplas, e não uma regra individual rígida: a ordem pode variar de criança para criança, e mesmo dentro de uma mesma classe de sons há variação relacionada à posição na palavra e ao contexto fonético vizinho.',
      },
      {
        id: 'sum-6',
        text: 'Um cuidado central neste módulo é o de não transformar idades médias em limites diagnósticos absolutos. Pesquisas brasileiras recentes ilustram bem esse ponto ao proporem três parâmetros distintos para descrever a aquisição de um mesmo fonema: a idade de produção habitual, a idade de aquisição propriamente dita e a idade de domínio, cada uma associada a um critério estatístico diferente de acerto na amostra de fala (Ceron; De Simoni; Keske-Soares, 2022). Dependendo do critério adotado, a "idade" atribuída a um mesmo som pode variar de forma expressiva. Isso significa que uma tabela cronológica isolada, sem informação sobre o critério que a originou, pode induzir a conclusões equivocadas — tanto no sentido de sinalizar uma alteração onde há apenas variação esperada, quanto no sentido inverso, de não perceber um atraso real.',
      },
      {
        id: 'sum-7',
        text: 'Durante esse percurso, é esperado que a criança utilize processos fonológicos — estratégias sistemáticas de simplificação da fala adulta, aplicadas enquanto o sistema ainda está em consolidação. Redução de encontro consonantal, apagamento de líquida e apagamento de sílaba átona pretônica estão entre os processos mais frequentemente relatados em amostras de desenvolvimento típico no português brasileiro (Ceron; Gubiani; Oliveira; Gubiani; Keske-Soares, 2017). A presença desses processos não é, isoladamente, um sinal de alteração: o que diferencia o desenvolvimento típico do atípico é, sobretudo, a persistência de um processo além da idade em que ele costuma desaparecer, sua alta frequência de ocorrência e a presença de processos incomuns ou idiossincráticos, não descritos no desenvolvimento típico. Essa distinção — que pertence, em profundidade, ao Módulo 2 desta unidade — já deve começar a ser compreendida aqui como princípio geral de leitura da amostra de fala.',
      },
      {
        id: 'sum-8',
        text: 'A inteligibilidade de fala — o quanto a produção da criança pode ser compreendida por um ouvinte — é outro conceito central. Ela não depende apenas do número de sons ainda não dominados, mas também do tipo de processo fonológico em uso, da quantidade de processos diferentes presentes simultaneamente e da frequência com que ocorrem na fala espontânea. Por isso, duas crianças com o mesmo número de sons ainda não dominados podem ter níveis de inteligibilidade bastante distintos. A inteligibilidade também é influenciada por fatores que não são estritamente fonológicos, como a familiaridade do ouvinte com a criança, o contexto da conversa e o apoio de gestos e de situação compartilhada — o que reforça a importância de observar a fala em situações comunicativas reais, e não apenas em tarefas estruturadas de nomeação.',
      },
      {
        id: 'sum-9',
        text: 'A variabilidade é a regra, não a exceção, no desenvolvimento fonológico. Existe variação entre crianças (ritmos de aquisição diferentes, mesmo dentro da normalidade) e variação dentro da fala de uma mesma criança, que pode produzir corretamente um som em uma palavra e não em outra, a depender da posição silábica, da frequência da palavra e do contexto fonético adjacente. A isso se somam diferenças sociolinguísticas e regionais do português falado no Brasil, que afetam, por exemplo, a realização do róticos (o "r") em diferentes posições. Um padrão de fala que reflete a variedade linguística da comunidade da criança não deve ser interpretado como alteração fonológica; ele reflete a norma do ambiente linguístico em que a criança está inserida, e o fonoaudiólogo precisa conhecer essa norma antes de qualificar qualquer produção como desviante (Wertzner; Pagan-Neves, 2014).',
      },
      {
        id: 'sum-10',
        text: 'A forma como a amostra de fala é coletada também interfere diretamente na interpretação dos dados. Uma amostra obtida por meio de nomeação de figuras isoladas pode não refletir o mesmo desempenho de uma amostra de fala espontânea, colhida em brincadeira ou conversa; algumas produções são facilitadas pelo modelo direto do avaliador (como na imitação), enquanto outras exigem que a própria criança organize a palavra sem apoio (como na nomeação e na fala espontânea). Por isso, recomenda-se o uso combinado de diferentes tipos de amostra, e não de um único instrumento, para caracterizar de forma confiável o sistema fonológico de uma criança (Wertzner; Pagan-Neves, 2014). Uma amostra pequena, coletada em um contexto pouco representativo do repertório comunicativo da criança, tende a subestimar ou superestimar suas reais possibilidades fonológicas.',
      },
      {
        id: 'sum-11',
        text: 'Diante desse conjunto de fatores, tabelas de idade de aquisição — incluindo a sequência geral apresentada mais adiante neste módulo — devem ser compreendidas como referências de tendência de grupo, construídas a partir de amostras e critérios estatísticos específicos, e não como critérios diagnósticos isolados. A ausência de um som esperado para a idade cronológica da criança é um dado a ser investigado, não uma conclusão pronta; ela deve ser interpretada à luz da história de desenvolvimento, do contexto linguístico e comunicativo, da consistência do erro ao longo de diferentes tarefas e da presença ou ausência de outros sinais de alerta. Um único achado isolado, por mais chamativo que pareça, raramente sustenta uma conclusão clínica: é o conjunto de informações — amostra de fala, história, contexto e, quando necessário, instrumentos padronizados — que fundamenta uma avaliação fonológica responsável.',
      },
      {
        id: 'sum-12',
        text: 'Este módulo tem, portanto, caráter propedêutico: seu objetivo é oferecer o vocabulário técnico e os princípios organizadores — fonética e fonologia, fonema e traço distintivo, estrutura silábica, inventário, processos fonológicos, inteligibilidade e variabilidade — que sustentam a leitura clínica de uma amostra de fala infantil. A descrição aprofundada das alterações fonológicas propriamente ditas, de seus critérios e de sua classificação será tratada no Módulo 2 desta unidade; os princípios de intervenção e o planejamento terapêutico, nos Módulos 3 e 4. Compreender primeiro o que é esperado — e por que a variabilidade faz parte do que é esperado — é o que torna possível, mais adiante, reconhecer com responsabilidade aquilo que foge do padrão.',
      },
    ],
    mainIdea:
      'O desenvolvimento fonológico é o processo pelo qual a criança constrói progressivamente o sistema de sons de sua língua — percebendo, produzindo e organizando fonemas em contrastes —, sendo marcado por ampla variabilidade individual, regional e sociolinguística que impede o uso de idades isoladas como critério diagnóstico.',
    essentialConcepts: [
      {
        id: 'conc-fonetica',
        term: 'Fonética',
        definition:
          'Ramo que estuda os sons da fala (fones) como eventos físicos — sua produção articulatória, suas propriedades acústicas e sua percepção — independentemente do papel que exercem na língua.',
        example:
          'Descrever que o som [t] em "tatu" é produzido com a língua tocando os alvéolos, seguido de uma pequena explosão de ar, é uma descrição fonética; na avaliação clínica, a fonética orienta a análise da execução motora do som.',
      },
      {
        id: 'conc-fonologia',
        term: 'Fonologia',
        definition:
          'Ramo que estuda a organização dos sons dentro do sistema mental de uma língua específica: quais sons funcionam como unidades que distinguem significado (fonemas) e quais regras regem sua combinação.',
        example:
          'Reconhecer que a troca de /p/ por /b/ muda o significado de "pato" para "bato" é uma constatação fonológica; é essa perspectiva que permite diferenciar um padrão sistemático de um erro motor isolado na avaliação.',
      },
      {
        id: 'conc-fonema',
        term: 'Fonema',
        definition:
          'Menor unidade sonora capaz de, isoladamente, distinguir significado entre duas palavras de uma língua; é uma unidade abstrata, representada entre barras.',
        example:
          'Em "faca" e "vaca", a alternância entre /f/ e /v/ é suficiente para gerar duas palavras diferentes, o que evidencia que ambos são fonemas do português — dado relevante ao montar provas de nomeação que testem contrastes específicos.',
      },
      {
        id: 'conc-alofone',
        term: 'Alofone',
        definition:
          'Variante fonética de um mesmo fonema, que não altera o significado da palavra quando substituída; a diferença é perceptível na produção, mas irrelevante para o sistema de contrastes da língua.',
        example:
          'Diferentes realizações do "r" em variedades regionais do português podem corresponder a alofones de um mesmo fonema; na avaliação, essa variação não deve ser registrada como erro, mas reconhecida como parte da norma da comunidade.',
      },
      {
        id: 'conc-traco-distintivo',
        term: 'Traço distintivo',
        definition:
          'Propriedade articulatória ou acústica mínima (como sonoridade, ponto e modo de articulação) usada para descrever e classificar os fonemas em classes naturais de sons.',
        example:
          'As fricativas surdas do português (/f, s, ʃ/) compartilham traços de modo e sonoridade, o que explica por que uma criança pode aplicar um mesmo padrão de simplificação a toda a classe, e não a um único fonema.',
      },
      {
        id: 'conc-estrutura-silabica',
        term: 'Estrutura silábica',
        definition:
          'Organização dos sons dentro da sílaba (por exemplo, CV, CVC, CCV), cuja complexidade tende a se relacionar com a ordem de aquisição fonológica.',
        example:
          'A palavra "prato" (com encontro consonantal no onset) tende a ser dominada, em sua forma completa, mais tardiamente do que "pato" (estrutura simples) — informação que orienta a escolha de itens em uma prova de fonologia.',
      },
      {
        id: 'conc-inventario-fonetico',
        term: 'Inventário fonético',
        definition:
          'Conjunto de sons que uma criança já é capaz de articular em algum contexto, ainda que de forma inconsistente ou sem uso contrastivo estável.',
        example:
          'Uma criança pode produzir o som [z] ocasionalmente, em imitação, sem ainda utilizá-lo de modo estável para diferenciar palavras — o que, na análise da amostra, é registrado como presença no inventário fonético.',
      },
      {
        id: 'conc-inventario-fonologico',
        term: 'Inventário fonológico',
        definition:
          'Conjunto de contrastes sonoros que a criança já utiliza de forma estável e funcional para diferenciar significados em sua fala espontânea.',
        example:
          'Quando a criança diferencia consistentemente "faca" de "vaca" em diferentes contextos, o contraste /f/–/v/ pode ser considerado parte de seu inventário fonológico, e não apenas do fonético.',
      },
      {
        id: 'conc-processo-fonologico',
        term: 'Processo fonológico',
        definition:
          'Padrão sistemático de simplificação da fala adulta, esperado durante a aquisição típica, que afeta uma classe de sons ou uma estrutura silábica, e não um som isolado.',
        example:
          'A redução do encontro consonantal (dizer "pato" no lugar de "prato") é um processo comum na fala infantil típica; sua simples presença, isoladamente, não deve ser registrada como sinal de alteração na avaliação.',
      },
      {
        id: 'conc-inteligibilidade',
        term: 'Inteligibilidade de fala',
        definition:
          'Grau em que a produção de fala de uma pessoa pode ser compreendida por um ouvinte; depende do tipo, da quantidade e da frequência dos processos fonológicos em uso, além de fatores contextuais.',
        example:
          'Duas crianças com o mesmo número de sons ainda não dominados podem apresentar inteligibilidade muito diferente, o que reforça a importância de observar a fala espontânea, e não apenas a produção de sons isolados, na avaliação.',
      },
    ],
    evidence: [
      {
        id: 'ev-fon-1',
        claim:
          'Em amostras brasileiras de grande porte, consoantes plosivas e nasais tendem a ser dominadas antes das fricativas, que por sua vez precedem as líquidas e os encontros consonantais.',
        source: 'Ceron; Gubiani; Oliveira; Keske-Soares (2017)',
        evidenceLevel: 'strong',
        clinicalImplication:
          'Essa sequência orienta a expectativa do avaliador sobre o que é típico em cada faixa etária, mas descreve uma tendência de grupo — não deve ser tomada como ordem obrigatória para cada criança individualmente.',
      },
      {
        id: 'ev-fon-2',
        claim:
          'A "idade de aquisição" de um mesmo fonema pode variar conforme o critério estatístico utilizado — produção habitual, aquisição ou domínio —, cada um definido por um percentual diferente de produções corretas na amostra.',
        source: 'Ceron; De Simoni; Keske-Soares (2022)',
        evidenceLevel: 'strong',
        clinicalImplication:
          'Antes de comparar a fala de uma criança a uma tabela cronológica, é preciso saber qual critério fundamenta aquela tabela; tabelas com critérios diferentes não são diretamente comparáveis entre si.',
      },
      {
        id: 'ev-fon-3',
        claim:
          'Estruturas silábicas mais complexas, como os encontros consonantais no onset e as consoantes em posição de coda, tendem a ser dominadas mais tardiamente do que consoantes em onset simples, em alguns casos apenas entre 5 e 6 anos de idade.',
        source: 'Ceron; De Simoni; Urrutia; Keske-Soares (2022)',
        evidenceLevel: 'strong',
        clinicalImplication:
          'A ausência de um encontro consonantal aos 4 anos, por exemplo, não deve ser interpretada isoladamente como sinal de alerta, já que essa estrutura costuma ainda estar em desenvolvimento nessa idade.',
      },
      {
        id: 'ev-fon-4',
        claim:
          'Revisão sistemática (33 estudos, de 1.381 identificados) sobre a aquisição consonantal do português brasileiro constatou aquisição entre aproximadamente 1 ano e 4 meses e 7 anos, a depender da classe de sons — plosivas e nasais entre 1;6 e 3;11, fricativas entre 1;8 e 4;5, líquidas entre 2;8 e 5;11 e onset complexo entre 3;0 e 7;5 —, com os estudos convergindo para critérios de acerto entre 75% e 85% das produções.',
        source: 'Ribas; Faleiro; Bernardi; Lemmertz (2022)',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'A amplitude dessa faixa etária reforça que idades pontuais e isoladas têm valor limitado como critério diagnóstico único. Os próprios autores da revisão apontam que nenhum dos 33 estudos incluídos atingiu classificação de qualidade metodológica "alta", o que soma mais um motivo de cautela: além da variação individual esperada, a base de evidências sobre idades exatas de aquisição ainda apresenta limitações metodológicas que recomendam o uso dessas faixas como referência de tendência, não como corte diagnóstico.',
      },
      {
        id: 'ev-fon-5',
        claim:
          'Em amostras de desenvolvimento fonológico típico, os processos fonológicos mais frequentemente observados incluem a redução de encontro consonantal, o apagamento de líquida e o apagamento de sílaba átona pretônica.',
        source: 'Ceron; Gubiani; Oliveira; Gubiani; Keske-Soares (2017)',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'A simples presença desses processos, isoladamente, não indica alteração; o que diferencia o quadro típico do atípico envolve persistência além da idade esperada, frequência de ocorrência e tipo de processo — aspectos aprofundados no Módulo 2 desta unidade.',
      },
      {
        id: 'ev-fon-6',
        claim:
          'O uso inadequado de sons da fala só pode ser caracterizado como alteração quando avaliado em relação à idade da criança e às variações regionais do português falado em sua comunidade.',
        source: 'Wertzner; Pagan-Neves (2014)',
        evidenceLevel: 'expert_opinion',
        clinicalImplication:
          'Antes de qualificar uma produção como desviante, o fonoaudiólogo precisa conhecer a norma linguística da comunidade da criança, sob risco de tratar diferença dialetal ou sociolinguística legítima como alteração.',
      },
      {
        id: 'ev-fon-7',
        claim:
          'Em experimento clássico, bebês de 1 a 4 meses de idade já discriminaram categoricamente contrastes acústicos relevantes para a fonologia da língua adulta, muito antes de serem capazes de produzir qualquer som de forma intencional.',
        source: 'Eimas; Siqueland; Jusczyk; Vigorito (1971)',
        evidenceLevel: 'strong',
        clinicalImplication:
          'Reforça que a ausência de produção de um som não deve ser interpretada, isoladamente, como ausência de percepção desse contraste; percepção e produção são domínios parcialmente independentes e devem ser investigados separadamente antes de qualquer conclusão sobre o desenvolvimento fonológico da criança.',
      },
    ],
    limitations: [
      {
        id: 'lim-fon-1',
        description:
          'Variação individual: mesmo dentro do desenvolvimento típico, crianças da mesma idade podem apresentar ritmos de aquisição fonológica distintos, sem que isso indique, por si só, qualquer alteração.',
      },
      {
        id: 'lim-fon-2',
        description:
          'Diferenças sociolinguísticas: variedades linguísticas associadas a grupos sociais, níveis de escolaridade familiar ou contextos comunitários específicos não devem ser interpretadas como erro fonológico.',
      },
      {
        id: 'lim-fon-3',
        description:
          'Diversidade regional: a realização de determinados sons — como as diferentes formas do róticos no português brasileiro — varia legitimamente entre regiões do país, sem valor patológico.',
      },
      {
        id: 'lim-fon-4',
        description:
          'Influência do contexto comunicativo: o desempenho fonológico pode variar conforme a tarefa (imitação, nomeação, fala espontânea), o interlocutor e o grau de familiaridade e apoio situacional disponíveis para a criança.',
      },
      {
        id: 'lim-fon-5',
        description:
          'Limites das normas cronológicas: tabelas de idade de aquisição são construídas a partir de amostras e critérios estatísticos específicos, que variam entre estudos; devem ser usadas como referência de tendência, não como ponto de corte rígido.',
      },
      {
        id: 'lim-fon-6',
        description:
          'Necessidade de análise conjunta: a leitura da fala de uma criança deve considerar, em conjunto, a história de desenvolvimento, a amostra de fala e o contexto linguístico — nunca um único dado isolado.',
      },
      {
        id: 'lim-fon-7',
        description:
          'Impossibilidade de diagnóstico por um único sinal: a ausência de um som ou a presença de um processo fonológico isolado não permite, por si só, qualquer conclusão diagnóstica; é o padrão global, e não um achado pontual, que orienta a interpretação clínica.',
      },
      {
        id: 'lim-fon-8',
        description:
          'Diferença entre erro fonético e padrão fonológico: uma dificuldade motora isolada na produção de um som específico tem natureza distinta de um padrão sistemático que afeta uma classe inteira de sons; confundir os dois pode levar a condutas avaliativas inadequadas.',
      },
    ],
    simpleExplanation:
      'Imagine que aprender a falar é como montar, aos poucos, um grande quebra-cabeça sonoro. No começo, o bebê nem sabe quais peças existem: ele só escuta a "música" da língua ao seu redor — o ritmo, a entonação, os sons que se repetem. Antes mesmo de conseguir falar, ele já é capaz de perceber diferenças finas entre sons, como um ouvinte atento que ainda não sabe tocar o instrumento. Com o tempo, a criança começa a experimentar produzir esses sons. No início, ela usa "atalhos": troca sons difíceis por outros mais fáceis, simplifica palavras longas, evita combinações complicadas de consoantes — como dizer "pato" no lugar de "prato". Esses atalhos são chamados de processos fonológicos, e não são erros no sentido negativo da palavra: são estratégias esperadas, usadas por praticamente todas as crianças enquanto o sistema ainda está em construção. Aos poucos, o quebra-cabeça vai se completando: primeiro entram as peças mais simples (como os sons de "p", "b", "m"), depois as intermediárias (como "f", "s", "l") e, por último, as mais complexas, como os encontros de duas consoantes ("pr", "cl") — processo que pode continuar até os 5 ou 6 anos de idade, sem que isso seja motivo de preocupação. O mais importante para quem estuda ou trabalha com desenvolvimento infantil é entender que não existe um cronômetro único e igual para todas as crianças. Duas crianças saudáveis, da mesma idade, podem estar em pontos diferentes desse quebra-cabeça — e isso é absolutamente normal. Além disso, a região do Brasil onde a criança mora, a forma de falar da sua família e até a situação em que ela está conversando também influenciam o que se ouve. Por isso, qualquer avaliação séria do desenvolvimento fonológico de uma criança nunca se baseia em um único som "errado" ou em uma tabela de idades isolada. Ela olha para o conjunto: como a criança fala em diferentes situações, há quanto tempo aquele padrão está presente, e se ele é parecido com o que se espera para a idade e para o contexto linguístico dela. Só assim é possível diferenciar, com responsabilidade, a variação saudável de um sinal que realmente merece atenção mais próxima — tema que será aprofundado no próximo módulo desta unidade.',
    conceptMap: {
      centralNode: 'Desenvolvimento fonológico',
      nodes: [
        { id: 'n-central', label: 'Desenvolvimento fonológico', type: 'central', description: 'Processo de construção progressiva do sistema de sons da língua, envolvendo percepção, produção e organização em contrastes.' },
        { id: 'n-percepcao', label: 'Percepção da fala', type: 'primary', description: 'Capacidade de discriminar e reconhecer contrastes sonoros da língua, que se desenvolve precocemente e, em geral, antecede a produção estável desses contrastes.' },
        { id: 'n-producao', label: 'Produção dos sons', type: 'primary', description: 'Realização motora dos sons da fala, que se expande progressivamente ao longo do desenvolvimento.' },
        { id: 'n-organizacao', label: 'Organização do sistema fonológico', type: 'primary', description: 'Forma como os sons se organizam mentalmente em unidades (fonemas) e regras que regem sua combinação.' },
        { id: 'n-fonema', label: 'Fonemas e contrastes', type: 'secondary', description: 'Unidades sonoras mínimas que distinguem significado, descritas por traços distintivos.' },
        { id: 'n-silaba', label: 'Estrutura silábica', type: 'secondary', description: 'Organização dos sons dentro da sílaba, cuja complexidade se relaciona com a ordem de aquisição.' },
        { id: 'n-processos', label: 'Processos fonológicos', type: 'secondary', description: 'Estratégias sistemáticas de simplificação da fala adulta, esperadas durante a aquisição típica.' },
        { id: 'n-inteligibilidade', label: 'Inteligibilidade', type: 'application', description: 'Grau em que a fala pode ser compreendida por um ouvinte, influenciado pelos processos fonológicos em uso e pelo contexto.' },
        { id: 'n-variabilidade', label: 'Variabilidade', type: 'secondary', description: 'Diferenças esperadas entre crianças e dentro da fala de uma mesma criança, incluindo variação regional e sociolinguística.' },
        { id: 'n-avaliacao', label: 'Avaliação contextualizada', type: 'application', description: 'Leitura da fala da criança que considera, em conjunto, amostra, história de desenvolvimento e contexto linguístico, evitando conclusões baseadas em um único dado.' },
      ],
      edges: [
        { id: 'e-fon-1', from: 'n-central', to: 'n-percepcao', label: 'envolve' },
        { id: 'e-fon-2', from: 'n-central', to: 'n-producao', label: 'envolve' },
        { id: 'e-fon-3', from: 'n-percepcao', to: 'n-producao', label: 'antecede, em geral' },
        { id: 'e-fon-4', from: 'n-central', to: 'n-organizacao', label: 'estrutura-se em' },
        { id: 'e-fon-5', from: 'n-organizacao', to: 'n-fonema', label: 'unidade mínima' },
        { id: 'e-fon-6', from: 'n-organizacao', to: 'n-silaba', label: 'organiza-se em' },
        { id: 'e-fon-7', from: 'n-producao', to: 'n-processos', label: 'manifesta-se por meio de' },
        { id: 'e-fon-8', from: 'n-processos', to: 'n-inteligibilidade', label: 'impacta' },
        { id: 'e-fon-9', from: 'n-central', to: 'n-variabilidade', label: 'é marcado por' },
        { id: 'e-fon-10', from: 'n-variabilidade', to: 'n-avaliacao', label: 'exige' },
        { id: 'e-fon-11', from: 'n-inteligibilidade', to: 'n-avaliacao', label: 'orienta' },
      ],
    },
    glossary: [
      { id: 'gl-fon-1', term: 'Fonética', definition: 'Ramo que estuda os sons da fala como eventos físicos, articulatórios e acústicos.', example: 'Descrever o ponto e o modo de articulação de um som produzido.' },
      { id: 'gl-fon-2', term: 'Fonologia', definition: 'Ramo que estuda a organização dos sons como sistema de contrastes que distinguem significado em uma língua.', example: 'Identificar que a troca de um som por outro altera o significado de uma palavra.' },
      { id: 'gl-fon-3', term: 'Fonema', definition: 'Menor unidade sonora capaz de, isoladamente, distinguir significado entre duas palavras.', example: 'O contraste entre /p/ e /b/ diferencia "pato" de "bato".' },
      { id: 'gl-fon-4', term: 'Alofone', definition: 'Variante de produção de um mesmo fonema que não altera o significado da palavra.', example: 'Diferentes realizações regionais de um mesmo som, sem mudança de significado.' },
      { id: 'gl-fon-5', term: 'Traço distintivo', definition: 'Propriedade articulatória ou acústica mínima usada para descrever e agrupar os sons em classes.', example: 'A sonoridade é o traço que diferencia /f/ de /v/.' },
      { id: 'gl-fon-6', term: 'Inventário fonético', definition: 'Conjunto de sons que a criança já consegue articular, mesmo que de forma inconsistente.', example: 'Produzir um som apenas por imitação, sem uso funcional estável.' },
      { id: 'gl-fon-7', term: 'Inventário fonológico', definition: 'Conjunto de contrastes sonoros que a criança já usa de forma estável para diferenciar significados.', example: 'Diferenciar consistentemente "faca" de "vaca" em diferentes contextos.' },
      { id: 'gl-fon-8', term: 'Contraste fonológico', definition: 'Oposição entre dois sons que, ao serem trocados em um mesmo contexto, geram palavras diferentes.', example: 'O contraste /s/–/z/ diferencia "aço" de "azo".' },
      { id: 'gl-fon-9', term: 'Processo fonológico', definition: 'Padrão sistemático de simplificação da fala adulta, esperado durante a aquisição típica.', example: 'Reduzir o encontro consonantal, dizendo "pato" no lugar de "prato".' },
      { id: 'gl-fon-10', term: 'Estrutura silábica', definition: 'Organização dos sons dentro da sílaba, como CV, CVC ou CCV.', example: '"Pá" é uma sílaba CV; "trans" envolve estrutura mais complexa.' },
      { id: 'gl-fon-11', term: 'Inteligibilidade de fala', definition: 'Grau em que a fala de uma pessoa pode ser compreendida por um ouvinte.', example: 'Duas crianças com os mesmos sons ausentes podem ter inteligibilidade diferente.' },
      { id: 'gl-fon-12', term: 'Aquisição fonológica', definition: 'Processo pelo qual a criança constrói progressivamente o sistema de sons de sua língua.', example: 'A expansão gradual do inventário de fonemas ao longo da infância.' },
      { id: 'gl-fon-13', term: 'Percepção da fala', definition: 'Capacidade de discriminar e reconhecer os contrastes sonoros de uma língua.', example: 'Um bebê que reage de forma diferente a dois sons distintos em teste de escuta.' },
      { id: 'gl-fon-14', term: 'Variabilidade individual', definition: 'Diferenças esperadas no ritmo e no padrão de aquisição fonológica entre crianças dentro do desenvolvimento típico.', example: 'Duas crianças da mesma idade em pontos diferentes da aquisição, ambas dentro do esperado.' },
      { id: 'gl-fon-15', term: 'Amostra de fala', definition: 'Conjunto de produções coletadas de uma criança (nomeação, imitação ou fala espontânea) usado para analisar seu sistema fonológico.', example: 'Gravar a criança contando uma história para analisar sua fala espontânea.' },
    ],
  },

  apply: {
    questions: [
      {
        id: 'q-fon-1',
        stem: 'Um fonoaudiólogo observa que uma criança realiza um som de forma diferente do padrão mais comum em algumas palavras, sem que essa variação produza qualquer palavra diferente ou prejudique a compreensão. Do ponto de vista teórico, essa variação de produção, sem valor contrastivo na língua, é objeto de estudo de qual área?',
        alternatives: [
          { id: 'q-fon-1-a', text: 'Da fonética, pois trata da produção física do som, independentemente de seu papel na distinção de significados.', isCorrect: true, feedback: 'Correto. A fonética descreve os sons como eventos articulatórios e acústicos; variações que não mudam o significado (alofones) são, primariamente, uma questão fonética.' },
          { id: 'q-fon-1-b', text: 'Da fonologia, pois toda variação sonora altera necessariamente o sistema de contrastes da língua.', isCorrect: false, feedback: 'Incorreto. A fonologia estuda os contrastes que distinguem significado; uma variação que não muda o significado da palavra não constitui, por si só, um fenômeno fonológico.' },
          { id: 'q-fon-1-c', text: 'Da morfologia, pois envolve a estrutura interna das palavras.', isCorrect: false, feedback: 'Incorreto. A morfologia trata da formação e estrutura das palavras, não da produção ou do valor distintivo dos sons.' },
          { id: 'q-fon-1-d', text: 'Da pragmática, pois depende do contexto comunicativo.', isCorrect: false, feedback: 'Incorreto. A pragmática estuda o uso da linguagem em contexto social; a variação descrita é uma questão de produção sonora, não de uso comunicativo.' },
        ],
        correctAlternativeId: 'q-fon-1-a',
        explanation: 'Sons que variam em sua realização física sem alterar o significado das palavras (alofones) são descritos pela fonética; a fonologia entra em cena quando essa variação é capaz de, sozinha, diferenciar duas palavras.',
        hint: 'Pergunte-se: essa variação muda o significado da palavra ou apenas sua forma de pronúncia?',
        relatedConceptId: 'conc-fonetica',
        referenceId: 'ref-tratado2014-cap71',
      },
      {
        id: 'q-fon-2',
        stem: 'As palavras "faca" e "vaca" diferem por apenas um contraste de fonemas (/f/ e /v/), que compartilham o mesmo ponto e modo de articulação, diferindo apenas quanto a um traço. Qual é esse traço distintivo?',
        alternatives: [
          { id: 'q-fon-2-a', text: 'Sonoridade (vozeamento).', isCorrect: true, feedback: 'Correto. /f/ é uma fricativa surda e /v/ é sua contraparte sonora; o traço que os distingue é a sonoridade.' },
          { id: 'q-fon-2-b', text: 'Ponto de articulação.', isCorrect: false, feedback: 'Incorreto. Ambos os sons são labiodentais; o ponto de articulação é o mesmo nos dois casos.' },
          { id: 'q-fon-2-c', text: 'Modo de articulação.', isCorrect: false, feedback: 'Incorreto. Ambos são fricativos; o modo de articulação é compartilhado pelos dois sons.' },
          { id: 'q-fon-2-d', text: 'Nasalidade.', isCorrect: false, feedback: 'Incorreto. Nenhum dos dois sons é nasal; a nasalidade não é o traço relevante neste par.' },
        ],
        correctAlternativeId: 'q-fon-2-a',
        explanation: '/f/ e /v/ compartilham ponto e modo de articulação, diferindo apenas quanto ao traço de sonoridade — o que os torna um par mínimo baseado nesse único traço distintivo.',
        hint: 'Compare os dois sons articulatoriamente: onde e como são produzidos, e o que muda entre eles.',
        relatedConceptId: 'conc-traco-distintivo',
        referenceId: 'ref-tratado2014-cap72',
      },
      {
        id: 'q-fon-3',
        stem: 'Em relação à estrutura silábica do português brasileiro, qual das afirmativas está mais alinhada com o que a literatura descreve sobre a ordem de aquisição fonológica?',
        alternatives: [
          { id: 'q-fon-3-a', text: 'Estruturas silábicas mais complexas, como encontros consonantais no onset e consoantes em posição de coda, tendem a ser dominadas mais tardiamente do que estruturas simples.', isCorrect: true, feedback: 'Correto. A complexidade estrutural da sílaba tende a se relacionar com uma consolidação mais tardia, exigindo maior estabilidade do sistema fonológico.' },
          { id: 'q-fon-3-b', text: 'Todas as estruturas silábicas são adquiridas simultaneamente, independentemente de sua complexidade.', isCorrect: false, feedback: 'Incorreto. Há uma tendência relativamente consistente de estruturas mais simples serem consolidadas antes das mais complexas.' },
          { id: 'q-fon-3-c', text: 'A posição da consoante na palavra nunca influencia sua produção.', isCorrect: false, feedback: 'Incorreto. A posição da consoante na palavra e na sílaba pode facilitar ou dificultar sua produção, sendo um dos aspectos observados na análise fonológica.' },
          { id: 'q-fon-3-d', text: 'Encontros consonantais costumam ser adquiridos antes dos sons em onset simples, por exigirem menos planejamento motor.', isCorrect: false, feedback: 'Incorreto. Ocorre o oposto: encontros consonantais geralmente exigem maior planejamento motor e tendem a ser consolidados depois dos sons em onset simples.' },
        ],
        correctAlternativeId: 'q-fon-3-a',
        explanation: 'A literatura brasileira sobre aquisição fonológica indica que estruturas silábicas mais complexas tendem a ser dominadas mais tardiamente do que estruturas simples, o que reforça a importância de observar não apenas quais sons a criança produz, mas em quais estruturas.',
        hint: 'Pense no esforço motor e organizacional necessário para produzir sílabas com mais de uma consoante em sequência.',
        relatedConceptId: 'conc-estrutura-silabica',
        referenceId: 'ref-ceron2022codas',
      },
      {
        id: 'q-fon-4',
        stem: 'Uma criança produz um som apenas uma vez, em imitação direta, sem conseguir utilizá-lo de forma estável para diferenciar palavras em sua fala espontânea. Essa produção isolada indica que esse som já faz parte de qual tipo de inventário da criança?',
        alternatives: [
          { id: 'q-fon-4-a', text: 'Do inventário fonético, mas ainda não necessariamente do inventário fonológico.', isCorrect: true, feedback: 'Correto. O inventário fonético reúne os sons que a criança já consegue articular, mesmo que de forma inconsistente; o inventário fonológico exige uso estável e funcional do contraste.' },
          { id: 'q-fon-4-b', text: 'Do inventário fonológico, pois qualquer produção do som já garante seu uso contrastivo.', isCorrect: false, feedback: 'Incorreto. Uma produção isolada e induzida por imitação não garante, por si só, uso estável e funcional do som para distinguir significados.' },
          { id: 'q-fon-4-c', text: 'De nenhum dos dois inventários, já que a produção não ocorreu espontaneamente.', isCorrect: false, feedback: 'Incorreto. A produção, mesmo que por imitação, já indica que o som está presente no inventário fonético da criança.' },
          { id: 'q-fon-4-d', text: 'Do inventário fonológico apenas, e nunca do inventário fonético.', isCorrect: false, feedback: 'Incorreto. Essa relação está invertida: o inventário fonético tende a anteceder o uso fonológico estável do som.' },
        ],
        correctAlternativeId: 'q-fon-4-a',
        explanation: 'O inventário fonético reúne os sons já articuláveis pela criança, ainda que de modo inconsistente ou apenas sob imitação; o inventário fonológico, mais restrito, reúne os contrastes já usados de forma estável para diferenciar significados na fala espontânea.',
        hint: 'Pense na diferença entre "conseguir produzir um som uma vez" e "usar esse som de forma consistente para diferenciar palavras".',
        relatedConceptId: 'conc-inventario-fonetico',
        referenceId: 'ref-tratado2014-cap71',
      },
      {
        id: 'q-fon-5',
        stem: 'Uma criança de família proveniente de uma região específica do Brasil produz o róticos de forma diferente da esperada pelo avaliador, que é de outra região do país. Não há qualquer outra alteração na fala da criança, que é plenamente inteligível. Qual é a interpretação tecnicamente mais adequada?',
        alternatives: [
          { id: 'q-fon-5-a', text: 'Investigar se essa realização corresponde a uma variação regional legítima antes de considerá-la uma alteração fonológica.', isCorrect: true, feedback: 'Correto. Diferenças na realização do róticos entre regiões do Brasil são amplamente descritas como variação dialetal, e devem ser investigadas como tal antes de qualquer conclusão.' },
          { id: 'q-fon-5-b', text: 'Classificar automaticamente como processo fonológico atípico, já que difere do padrão do avaliador.', isCorrect: false, feedback: 'Incorreto. O padrão de referência não deve ser o dialeto do avaliador, e sim a norma linguística da comunidade da criança.' },
          { id: 'q-fon-5-c', text: 'Ignorar completamente a observação, já que variações regionais nunca precisam ser registradas.', isCorrect: false, feedback: 'Incorreto. Registrar a observação é importante para documentação e acompanhamento, mesmo quando a hipótese mais provável é de variação dialetal.' },
          { id: 'q-fon-5-d', text: 'Concluir que se trata de um erro fonético isolado, sem qualquer relação com o sistema fonológico da criança.', isCorrect: false, feedback: 'Incorreto. Não há dados suficientes para essa conclusão; a hipótese mais consistente com o quadro descrito é a de variação regional.' },
        ],
        correctAlternativeId: 'q-fon-5-a',
        explanation: 'A caracterização de uma alteração fonológica deve sempre considerar as variações regionais e sociolinguísticas legítimas da língua; sem esse cuidado, o profissional corre o risco de tratar diferença dialetal como patologia.',
        hint: 'Lembre-se de que o padrão de comparação deve ser a comunidade linguística da criança, não o dialeto pessoal do avaliador.',
        relatedConceptId: 'conc-fonologia',
        referenceId: 'ref-tratado2014-cap71',
      },
      {
        id: 'q-fon-6',
        stem: 'Uma criança substitui sistematicamente todas as fricativas da língua por plosivas correspondentes ao mesmo ponto de articulação, em múltiplas palavras e contextos. Esse padrão é mais bem descrito como:',
        alternatives: [
          { id: 'q-fon-6-a', text: 'Um padrão fonológico (processo), pois afeta uma classe inteira de sons de forma sistemática, e não um único som isolado.', isCorrect: true, feedback: 'Correto. Quando a substituição segue um padrão sistemático que atinge uma classe de sons relacionados, trata-se de um processo fonológico, não de um erro fonético pontual.' },
          { id: 'q-fon-6-b', text: 'Um erro fonético isolado, já que envolve mais de um som.', isCorrect: false, feedback: 'Incorreto. Um erro fonético isolado tipicamente afeta a produção motora de um som específico, não um padrão sistemático que atinge toda uma classe de sons relacionados.' },
          { id: 'q-fon-6-c', text: 'Uma variação dialetal, pois todo padrão sistemático reflete a região de origem da criança.', isCorrect: false, feedback: 'Incorreto. Nem todo padrão sistemático é dialetal; é preciso investigar a origem e a consistência do padrão antes dessa conclusão.' },
          { id: 'q-fon-6-d', text: 'Impossível de classificar sem exame de imagem da língua.', isCorrect: false, feedback: 'Incorreto. A classificação inicial entre padrão fonético e fonológico é feita, sobretudo, pela análise da amostra de fala, não por exames de imagem.' },
        ],
        correctAlternativeId: 'q-fon-6-a',
        explanation: 'A distinção central entre erro fonético e padrão fonológico está na sistematicidade e na abrangência: um padrão que afeta uma classe inteira de sons relacionados por traços distintivos é descrito como processo fonológico.',
        hint: 'Observe se a dificuldade está restrita a um único som ou se segue um padrão que se repete em vários sons de uma mesma classe.',
        relatedConceptId: 'conc-processo-fonologico',
        referenceId: 'ref-tratado2014-cap72',
      },
      {
        id: 'q-fon-7',
        stem: 'Uma revisão sistemática sobre a aquisição consonantal do português brasileiro identificou que a aquisição das diferentes consoantes ocorre entre aproximadamente 1 ano e 4 meses e 7 anos de idade, a depender do fonema, com considerável variação individual. Qual conclusão pode ser adequadamente sustentada por esse achado?',
        alternatives: [
          { id: 'q-fon-7-a', text: 'Idades pontuais isoladas, sem qualificação sobre o fonema e o critério envolvidos, têm valor limitado como parâmetro diagnóstico único.', isCorrect: true, feedback: 'Correto. A amplitude e a variação relatadas reforçam que uma idade isolada, sem especificar qual som e qual critério estão sendo considerados, não deve ser usada como corte diagnóstico rígido.' },
          { id: 'q-fon-7-b', text: 'Toda criança deve ter dominado completamente o sistema fonológico até 1 ano e 4 meses.', isCorrect: false, feedback: 'Incorreto. Essa é a extremidade inferior da faixa relatada para os sons de aquisição mais precoce, não um marco geral para todo o sistema fonológico.' },
          { id: 'q-fon-7-c', text: 'Crianças que ainda apresentam alguma dificuldade fonológica aos 6 anos necessariamente têm um transtorno.', isCorrect: false, feedback: 'Incorreto. A faixa relatada chega a 7 anos para alguns fonemas dentro do desenvolvimento típico; a presença de dificuldade isolada aos 6 anos não permite, por si só, essa conclusão.' },
          { id: 'q-fon-7-d', text: 'A pesquisa não tem qualquer aplicação prática para a avaliação fonológica.', isCorrect: false, feedback: 'Incorreto. Ao contrário: esse tipo de achado alerta o avaliador sobre os limites do uso de idades isoladas como critério diagnóstico.' },
        ],
        correctAlternativeId: 'q-fon-7-a',
        explanation: 'Achados de revisões sistemáticas sobre faixas etárias amplas e variáveis reforçam a necessidade de cautela na interpretação de tabelas cronológicas, evitando o uso de idades isoladas como critério diagnóstico definitivo.',
        hint: 'Pense no que uma faixa etária ampla, com grande variação individual, permite e não permite concluir sobre um caso específico.',
        relatedConceptId: 'conc-inteligibilidade',
        referenceId: 'ref-ribas2022revisao',
      },
      {
        id: 'q-fon-8',
        stem: 'Um bebê ainda não produz corretamente um determinado contraste sonoro de sua língua, mas demonstra, em tarefas de escuta preferencial, ser capaz de discriminar esse mesmo contraste. Como esse achado deve ser interpretado?',
        alternatives: [
          { id: 'q-fon-8-a', text: 'Como uma dissociação esperada entre percepção e produção, já que a capacidade perceptiva costuma se desenvolver antes da produção motora estável do contraste.', isCorrect: true, feedback: 'Correto. Crianças frequentemente percebem contrastes sonoros antes de conseguirem produzi-los de forma estável, refletindo trajetórias parcialmente independentes entre os dois domínios.' },
          { id: 'q-fon-8-b', text: 'Como evidência de que a criança não tem qualquer capacidade fonológica ainda.', isCorrect: false, feedback: 'Incorreto. Pelo contrário: a discriminação perceptiva bem-sucedida é um indicador positivo do processamento fonológico em curso.' },
          { id: 'q-fon-8-c', text: 'Como um sinal de alteração, já que perceber sem produzir é sempre atípico.', isCorrect: false, feedback: 'Incorreto. Essa dissociação é esperada no desenvolvimento típico, não configurando, isoladamente, sinal de alteração.' },
          { id: 'q-fon-8-d', text: 'Como prova de que a produção sempre antecede a percepção no desenvolvimento típico.', isCorrect: false, feedback: 'Incorreto. A relação tende a ser a oposta: a percepção frequentemente antecede a produção estável.' },
        ],
        correctAlternativeId: 'q-fon-8-a',
        explanation: 'A percepção e a produção da fala seguem trajetórias parcialmente distintas durante o desenvolvimento; é esperado que uma criança perceba um contraste antes de conseguir produzi-lo de forma motora e consistente.',
        hint: 'Lembre-se de que perceber uma diferença sonora e produzi-la motoramente são habilidades relacionadas, mas não idênticas.',
        relatedConceptId: 'conc-fonema',
        referenceId: 'ref-eimas1971',
      },
      {
        id: 'q-fon-9',
        stem: 'Ao planejar a coleta de uma amostra de fala para caracterizar o sistema fonológico de uma criança, qual é a estratégia mais alinhada com as recomendações da área?',
        alternatives: [
          { id: 'q-fon-9-a', text: 'Combinar diferentes tipos de tarefa (nomeação de figuras, imitação de palavras e fala espontânea), já que cada uma pode revelar aspectos distintos do desempenho fonológico.', isCorrect: true, feedback: 'Correto. Diferentes tarefas impõem exigências distintas, e sua combinação oferece uma caracterização mais confiável do sistema fonológico.' },
          { id: 'q-fon-9-b', text: 'Utilizar exclusivamente uma lista curta de nomeação de figuras, pois é suficiente para qualquer conclusão sobre o sistema fonológico.', isCorrect: false, feedback: 'Incorreto. Uma única tarefa, especialmente se curta, tende a captar apenas parte do repertório fonológico da criança.' },
          { id: 'q-fon-9-c', text: 'Basear a avaliação apenas no relato dos pais sobre como a criança fala em casa, sem qualquer coleta direta de amostra.', isCorrect: false, feedback: 'Incorreto. O relato familiar é uma informação complementar valiosa, mas não substitui a coleta direta e sistemática de uma amostra de fala.' },
          { id: 'q-fon-9-d', text: 'Evitar a fala espontânea, por ser considerada uma tarefa pouco confiável para fins de avaliação fonológica.', isCorrect: false, feedback: 'Incorreto. A fala espontânea é, ao contrário, uma fonte importante de dados ecologicamente válidos sobre o uso funcional dos sons pela criança.' },
        ],
        correctAlternativeId: 'q-fon-9-a',
        explanation: 'A literatura da área recomenda a combinação de diferentes tipos de amostra — nomeação, imitação e fala espontânea — para obter uma caracterização mais completa e confiável do sistema fonológico de uma criança.',
        hint: 'Pense em quais habilidades cada tipo de tarefa exige: produção com modelo direto, produção sem modelo, ou fala livre em contexto natural.',
        relatedConceptId: 'conc-inventario-fonologico',
        referenceId: 'ref-tratado2014-cap71',
      },
      {
        id: 'q-fon-10',
        stem: 'Um estudo brasileiro descreveu a aquisição fonológica utilizando três parâmetros distintos para o mesmo fonema: idade de produção habitual, idade de aquisição e idade de domínio, cada uma associada a um critério estatístico diferente. Na prática da avaliação fonológica, qual é a implicação mais direta desse achado?',
        alternatives: [
          { id: 'q-fon-10-a', text: 'Ao consultar ou citar uma tabela de idades de aquisição, é necessário verificar qual critério a fundamenta, já que tabelas baseadas em critérios diferentes não são diretamente comparáveis.', isCorrect: true, feedback: 'Correto. Comparar tabelas construídas com critérios estatísticos diferentes, sem essa qualificação, pode levar a conclusões equivocadas sobre o que é esperado para determinada idade.' },
          { id: 'q-fon-10-b', text: 'Esse achado não tem qualquer implicação prática, servindo apenas para fins teóricos da pesquisa.', isCorrect: false, feedback: 'Incorreto. Esse achado tem implicação direta na prática clínica, ao alertar sobre os riscos de comparar tabelas com critérios diferentes.' },
          { id: 'q-fon-10-c', text: 'A partir desse achado, deve-se sempre adotar o critério mais rigoroso (domínio) como único parâmetro válido em qualquer contexto clínico.', isCorrect: false, feedback: 'Incorreto. Não há indicação de que um único critério deva ser universalmente adotado; o essencial é a transparência sobre qual critério está sendo utilizado.' },
          { id: 'q-fon-10-d', text: 'Esse achado prova que a aquisição fonológica não tem qualquer relação com a idade da criança.', isCorrect: false, feedback: 'Incorreto. A idade continua sendo uma variável relevante; o achado qualifica a forma como essa relação deve ser interpretada, não a invalida.' },
        ],
        correctAlternativeId: 'q-fon-10-a',
        explanation: 'Reconhecer que diferentes critérios estatísticos geram diferentes "idades" para o mesmo fonema é essencial para o uso responsável de tabelas cronológicas na prática clínica, evitando comparações inválidas entre estudos com metodologias distintas.',
        hint: 'Pense no que muda quando o critério de "ter adquirido um som" passa de "produzir corretamente na maior parte das vezes" para "produzir corretamente quase sempre".',
        relatedConceptId: 'conc-inteligibilidade',
        referenceId: 'ref-ceron2022ijlcd',
      },
    ],
    associations: [
      {
        id: 'assoc-fon-1',
        instruction: 'Associe cada termo ao seu conceito correspondente.',
        pairs: [
          { id: 'assoc-fon-1-p1', left: 'Fonema', right: 'Menor unidade sonora que distingue significado entre palavras' },
          { id: 'assoc-fon-1-p2', left: 'Alofone', right: 'Variante de um mesmo fonema, sem valor contrastivo' },
          { id: 'assoc-fon-1-p3', left: 'Traço distintivo', right: 'Propriedade mínima (ponto, modo, sonoridade) que caracteriza e agrupa os sons' },
          { id: 'assoc-fon-1-p4', left: 'Processo fonológico', right: 'Estratégia sistemática de simplificação da fala, esperada durante a aquisição' },
          { id: 'assoc-fon-1-p5', left: 'Inteligibilidade de fala', right: 'Grau em que a fala de uma pessoa pode ser compreendida por um ouvinte' },
          { id: 'assoc-fon-1-p6', left: 'Estrutura silábica', right: 'Organização dos sons dentro da sílaba (CV, CVC, CCV etc.)' },
        ],
      },
      {
        id: 'assoc-fon-2',
        instruction: 'Associe cada situação clínica à sua leitura mais adequada.',
        pairs: [
          { id: 'assoc-fon-2-p1', left: 'Criança usa redução de encontro consonantal aos 3 anos', right: 'Processo esperado nessa idade; não indica, isoladamente, alteração' },
          { id: 'assoc-fon-2-p2', left: 'Criança de outra região pronuncia o "r" de forma diferente do avaliador', right: 'Possível variação regional; deve ser investigada antes de ser tratada como erro' },
          { id: 'assoc-fon-2-p3', left: 'Amostra coletada apenas com nomeação de figuras isoladas', right: 'Pode não representar fielmente o desempenho da criança em fala espontânea' },
          { id: 'assoc-fon-2-p4', left: 'Som ausente do inventário aos 2 anos em estrutura com encontro consonantal', right: 'Compatível com desenvolvimento típico, já que essa estrutura costuma ser adquirida mais tardiamente' },
          { id: 'assoc-fon-2-p5', left: 'Mesmo processo fonológico presente de forma persistente muito além da idade esperada', right: 'Merece investigação mais aprofundada, podendo sinalizar alteração' },
          { id: 'assoc-fon-2-p6', left: 'Criança percebe mas ainda não produz corretamente um contraste sonoro', right: 'Dissociação esperada entre percepção e produção durante a aquisição' },
        ],
      },
    ],
    decisionExercises: [
      {
        id: 'dec-fon-1',
        situation:
          'Durante uma triagem escolar, você observa uma criança de 3 anos e 4 meses que simplifica alguns encontros consonantais (diz "pato" no lugar de "prato") e substitui algumas líquidas em certas palavras. A fala é, de modo geral, compreensível para familiares e professores. Qual conduta é mais adequada neste primeiro contato?',
        options: [
          { id: 'dec-fon-1-o1', text: 'Encaminhar imediatamente para diagnóstico de transtorno fonológico, orientando início de terapia intensiva.', consequence: 'Pode gerar encaminhamento e intervenção precoces desnecessários, além de preocupação familiar sem base suficiente, já que os dados isolados descritos são compatíveis com processos esperados para a idade.', explanation: 'Um encaminhamento definitivo não deve se basear em observações pontuais de triagem; requer avaliação fonológica completa, com amostra de fala representativa e análise da história de desenvolvimento.', isRecommended: false },
          { id: 'dec-fon-1-o2', text: 'Registrar as observações, coletar uma amostra de fala mais ampla e contextualizada (brincadeira, conversa) e comparar os achados com o que é esperado para a faixa etária antes de qualquer conclusão.', consequence: 'Permite reunir informações suficientes para diferenciar variação típica de possível alteração, evitando tanto o encaminhamento precipitado quanto a perda de um sinal relevante.', explanation: 'A leitura de uma amostra de fala exige contextualização: tipo de processo, frequência, idade e consistência ao longo de diferentes tarefas — não apenas a presença isolada de simplificações.', isRecommended: true },
          { id: 'dec-fon-1-o3', text: 'Concluir que não há nada a observar, já que a fala é compreensível para a família, e não registrar nenhuma informação.', consequence: 'Compreensibilidade para familiares próximos não equivale, necessariamente, a desenvolvimento fonológico dentro do esperado; deixar de registrar dados pode dificultar o acompanhamento longitudinal da criança.', explanation: 'Mesmo quando não há indicação de encaminhamento imediato, o registro sistemático das observações apoia o acompanhamento do desenvolvimento ao longo do tempo.', isRecommended: false },
          { id: 'dec-fon-1-o4', text: 'Orientar os pais a corrigirem verbalmente a criança sempre que ela simplificar uma palavra, para acelerar a superação dos processos fonológicos.', consequence: 'Correções verbais repetidas podem gerar frustração comunicativa e não têm respaldo como estratégia isolada para acelerar a aquisição fonológica típica.', explanation: 'Processos fonológicos típicos tendem a desaparecer espontaneamente com a maturação do sistema; a orientação a familiares deve focar em modelos linguísticos ricos e positivos, não em correção direta e repetitiva.', isRecommended: false },
        ],
      },
      {
        id: 'dec-fon-2',
        situation:
          'Você recebe o registro de fala de uma criança de 5 anos e 8 meses, coletado por outro profissional apenas com uma prova de nomeação de figuras, com pouca variedade de estruturas silábicas. O relatório conclui que "a fonologia está adequada para a idade". Como você avalia essa conclusão?',
        options: [
          { id: 'dec-fon-2-o1', text: 'Aceitar integralmente a conclusão, já que a nomeação de figuras é um instrumento amplamente utilizado na área.', consequence: 'Uma amostra pequena e pouco variada pode não captar dificuldades presentes em estruturas silábicas mais complexas ou em fala espontânea, levando a uma conclusão prematura.', explanation: 'O tipo, o tamanho e a variedade estrutural da amostra influenciam diretamente a confiabilidade da conclusão sobre o sistema fonológico da criança.', isRecommended: false },
          { id: 'dec-fon-2-o2', text: 'Considerar a conclusão como um dado inicial relevante, mas sugerir a complementação com fala espontânea e maior variedade de estruturas silábicas antes de confirmar a adequação fonológica.', consequence: 'Aumenta a confiabilidade da avaliação, permitindo verificar se o desempenho se mantém em diferentes contextos e estruturas, sem descartar o trabalho já realizado.', explanation: 'A literatura da área recomenda a combinação de diferentes tipos de amostra para caracterizar de forma confiável o sistema fonológico.', isRecommended: true },
          { id: 'dec-fon-2-o3', text: 'Descartar totalmente a avaliação anterior e refazer todo o processo do zero, sem aproveitar nenhuma informação já coletada.', consequence: 'Gera retrabalho desnecessário e desconsidera informações potencialmente úteis já registradas, além de poder desgastar a relação com a família e com o profissional anterior.', explanation: 'Ampliar ou complementar uma avaliação é, em geral, mais produtivo do que descartá-la por completo, desde que os dados existentes sejam interpretados com o devido cuidado metodológico.', isRecommended: false },
          { id: 'dec-fon-2-o4', text: 'Concluir que, como a criança tem 5 anos e 8 meses, qualquer avaliação complementar é dispensável, pois nessa idade a fonologia já deveria estar totalmente pronta.', consequence: 'Ignora a variabilidade individual e a existência de estruturas, como certos encontros consonantais, cuja consolidação pode se estender além dos 5 anos em desenvolvimento típico.', explanation: 'Mesmo em idades mais avançadas da aquisição, algumas estruturas silábicas complexas podem ainda estar em consolidação; presumir "prontidão total" sem dados é um risco metodológico.', isRecommended: false },
        ],
      },
    ],
    fictionalCases: [
      {
        id: 'case-fon-1',
        title: 'Caso fictício: Letícia, 4 anos e 2 meses',
        description:
          'Letícia tem 4 anos e 2 meses, frequenta a pré-escola e mora com os pais e um irmão mais velho. A família relata que ela é comunicativa, brinca com outras crianças e é compreendida pela maioria dos adultos próximos, embora às vezes precise repetir o que disse para pessoas menos familiarizadas com sua fala. Em uma amostra de fala espontânea durante uma brincadeira, observou-se: substituição de encontros consonantais por consoante simples (por exemplo, "pato" no lugar de "prato"); produção estável de diversas consoantes em posição de onset simples; instabilidade na produção do róticos em posição de coda em algumas palavras; vocabulário e organização de frases considerados adequados para a idade pelos responsáveis e pela professora.',
        disclaimer:
          'Este é um caso fictício, construído exclusivamente para fins didáticos. Não representa nenhuma pessoa real e não deve ser utilizado como modelo de laudo, diagnóstico ou conduta clínica definitiva. A leitura de qualquer amostra de fala real exige avaliação fonoaudiológica presencial, com instrumentos e critérios próprios.',
        questions: [
          {
            id: 'case-fon-1-q1',
            stem: 'Considerando exclusivamente os dados descritos, qual é a leitura mais adequada, à luz do que se sabe sobre o desenvolvimento fonológico típico do português brasileiro, sobre a fala de Letícia?',
            alternatives: [
              { id: 'case-fon-1-q1-a', text: 'Os achados descritos (redução de encontro consonantal e instabilidade do róticos em coda) são compatíveis com processos ainda esperados nessa faixa etária, considerando que essas estruturas costumam ser dominadas mais tardiamente.', isCorrect: true, feedback: 'Correto. Tanto os encontros consonantais quanto o róticos em coda estão, segundo estudos brasileiros, entre as estruturas de aquisição mais tardia, frequentemente ainda em consolidação por volta dos 4 anos.' },
              { id: 'case-fon-1-q1-b', text: 'Os achados indicam, de forma conclusiva, um transtorno fonológico, já que qualquer simplificação nessa idade deve ser tratada como alteração.', isCorrect: false, feedback: 'Incorreto. A presença isolada desses processos, sem outros dados, não permite uma conclusão diagnóstica definitiva; eles são, inclusive, esperados nessa faixa etária para essas estruturas específicas.' },
              { id: 'case-fon-1-q1-c', text: 'Não há necessidade de qualquer acompanhamento, pois a fala é compreendida pela maioria dos adultos.', isCorrect: false, feedback: 'Incorreto. Ainda que a inteligibilidade geral esteja preservada, o acompanhamento do desenvolvimento fonológico ao longo do tempo continua sendo uma boa prática.' },
              { id: 'case-fon-1-q1-d', text: 'Os dados indicam exclusivamente uma dificuldade motora (fonética) na produção do róticos, sem qualquer relação com o restante do sistema fonológico.', isCorrect: false, feedback: 'Incorreto. Não há dados suficientes na descrição para isolar uma causa exclusivamente motora; o padrão é mais compatível com um sistema fonológico ainda em consolidação do que com uma conclusão fonética isolada.' },
            ],
            correctAlternativeId: 'case-fon-1-q1-a',
            explanation: 'O conjunto de achados descritos é compatível com processos ainda esperados para a idade, segundo a literatura sobre aquisição fonológica do português brasileiro. Isso não significa que o caso deva ser encerrado sem acompanhamento: a interpretação apresentada é uma leitura inicial, baseada em dados limitados, e não substitui uma avaliação fonológica completa.',
            hint: 'Compare os sons e estruturas envolvidos com o que se sabe sobre a idade aproximada de consolidação de cada estrutura silábica.',
            relatedConceptId: 'conc-processo-fonologico',
            referenceId: 'ref-ceron2022codas',
          },
          {
            id: 'case-fon-1-q2',
            stem: 'Qual das alternativas a seguir representa o cuidado de interpretação mais importante a ser considerado antes de qualquer conclusão sobre o caso de Letícia?',
            alternatives: [
              { id: 'case-fon-1-q2-a', text: 'A amostra descrita é breve e foi obtida em um único contexto; uma leitura clínica responsável exigiria amostras adicionais, em diferentes situações, e informações sobre a história de desenvolvimento e o contexto sociolinguístico da família.', isCorrect: true, feedback: 'Correto. Uma única amostra, ainda que informativa, não é suficiente para uma conclusão diagnóstica; a triangulação de dados é essencial.' },
              { id: 'case-fon-1-q2-b', text: 'Como Letícia já tem mais de 4 anos, qualquer processo fonológico presente deve ser considerado imediatamente patológico.', isCorrect: false, feedback: 'Incorreto. A idade cronológica, isoladamente, não determina automaticamente um julgamento patológico; é preciso considerar qual estrutura está envolvida e o que se espera para ela nessa idade.' },
              { id: 'case-fon-1-q2-c', text: 'Não é necessário considerar o contexto familiar e escolar, já que o desenvolvimento fonológico depende exclusivamente de fatores biológicos internos à criança.', isCorrect: false, feedback: 'Incorreto. O contexto comunicativo, familiar e sociolinguístico influencia a forma como a fala se manifesta e deve ser considerado na leitura de qualquer amostra.' },
              { id: 'case-fon-1-q2-d', text: 'Como a professora e a família não relatam preocupação, o caso pode ser considerado encerrado, sem qualquer necessidade de nova observação futura.', isCorrect: false, feedback: 'Incorreto. A ausência de preocupação da família e da escola é uma informação relevante, mas não substitui o acompanhamento fonoaudiológico, sobretudo diante de estruturas ainda em consolidação.' },
            ],
            correctAlternativeId: 'case-fon-1-q2-a',
            explanation: 'A responsabilidade na leitura de um caso como o de Letícia está em reconhecer os limites dos dados disponíveis: uma amostra breve, em um único contexto, oferece apenas uma leitura inicial. Cuidado de interpretação e prudência são princípios centrais da prática fonoaudiológica baseada em evidências.',
            hint: 'Pense no que uma única amostra de fala, coletada em um único momento e contexto, consegue e não consegue revelar sobre o sistema fonológico de uma criança.',
            relatedConceptId: 'conc-inventario-fonologico',
          },
        ],
      },
    ],
  },

  review: {
    flashcards: [
      { id: 'fc-fon-1', front: 'Qual a diferença central entre fonética e fonologia?', back: 'Fonética estuda os sons da fala como eventos físicos (articulatórios/acústicos); fonologia estuda sua organização como sistema de contrastes que distinguem significado na língua.', tags: ['fonetica', 'fonologia'] },
      { id: 'fc-fon-2', front: 'O que é um fonema?', back: 'A menor unidade sonora capaz de, isoladamente, distinguir significado entre duas palavras de uma língua.', tags: ['fonema'] },
      { id: 'fc-fon-3', front: 'O que é um alofone?', back: 'Uma variante de produção de um mesmo fonema que não altera o significado da palavra.', tags: ['alofone', 'fonema'] },
      { id: 'fc-fon-4', front: 'O que é um traço distintivo?', back: 'Uma propriedade articulatória/acústica mínima (ponto, modo, sonoridade) usada para descrever e agrupar os sons em classes naturais.', tags: ['traco-distintivo'] },
      { id: 'fc-fon-5', front: 'Cite um exemplo de par mínimo em português.', back: '"Pato" e "bato": diferem por um único contraste de fonemas (/p/ e /b/), que se distinguem pelo traço de sonoridade.', tags: ['par-minimo', 'traco-distintivo'] },
      { id: 'fc-fon-6', front: 'O que é inventário fonético?', back: 'O conjunto de sons que a criança já é capaz de articular, ainda que de forma inconsistente ou sem uso contrastivo estável.', tags: ['inventario-fonetico'] },
      { id: 'fc-fon-7', front: 'O que é inventário fonológico?', back: 'O conjunto de contrastes sonoros que a criança já utiliza de forma estável e funcional para diferenciar significados.', tags: ['inventario-fonologico'] },
      { id: 'fc-fon-8', front: 'O que é um processo fonológico?', back: 'Um padrão sistemático de simplificação da fala adulta, esperado durante a aquisição típica, que afeta uma classe de sons ou estrutura silábica.', tags: ['processo-fonologico'] },
      { id: 'fc-fon-9', front: 'Cite três processos fonológicos frequentemente observados no desenvolvimento típico do português brasileiro.', back: 'Redução de encontro consonantal, apagamento de líquida e apagamento de sílaba átona pretônica.', tags: ['processo-fonologico'] },
      { id: 'fc-fon-10', front: 'O que diferencia, principalmente, um processo fonológico típico de um sinal de alerta?', back: 'A persistência além da idade esperada, a alta frequência de ocorrência e a presença de processos incomuns, e não a mera presença do processo.', tags: ['processo-fonologico', 'avaliacao'] },
      { id: 'fc-fon-11', front: 'Segundo estudos brasileiros, qual é a sequência geral de aquisição das classes de consoantes?', back: 'Plosivas e nasais primeiro, seguidas pelas fricativas e, por último, pelas líquidas e encontros consonantais.', tags: ['aquisicao-fonologica'] },
      { id: 'fc-fon-12', front: 'Por que uma "idade de aquisição" pode variar entre diferentes estudos para o mesmo fonema?', back: 'Porque estudos podem adotar critérios estatísticos diferentes (produção habitual, aquisição ou domínio), cada um exigindo um percentual diferente de acerto.', tags: ['aquisicao-fonologica', 'avaliacao'] },
      { id: 'fc-fon-13', front: 'O que é inteligibilidade de fala?', back: 'O grau em que a produção de fala de uma pessoa pode ser compreendida por um ouvinte; depende do tipo, da quantidade e da frequência dos processos fonológicos, além de fatores contextuais.', tags: ['inteligibilidade'] },
      { id: 'fc-fon-14', front: 'A percepção da fala se desenvolve antes ou depois da produção estável dos sons?', back: 'Em geral, antes: crianças frequentemente discriminam contrastes sonoros antes de conseguirem produzi-los de forma motora e consistente.', tags: ['percepcao-da-fala'] },
      { id: 'fc-fon-15', front: 'Por que a variação regional do "r" no português brasileiro não deve ser tratada, por si só, como alteração fonológica?', back: 'Porque reflete a norma linguística legítima da comunidade da criança; a caracterização de alteração deve considerar as variações regionais e sociolinguísticas da língua falada.', tags: ['variabilidade'] },
      { id: 'fc-fon-16', front: 'Por que uma amostra de fala coletada apenas com nomeação de figuras pode ser insuficiente?', back: 'Porque diferentes tarefas (nomeação, imitação, fala espontânea) impõem exigências distintas, e uma única tarefa pode não representar todo o repertório fonológico da criança.', tags: ['amostra-de-fala'] },
      { id: 'fc-fon-17', front: 'Qual é a diferença entre um erro fonético isolado e um padrão fonológico?', back: 'O erro fonético isolado afeta a produção motora de um som específico; o padrão fonológico é sistemático e afeta uma classe inteira de sons relacionados por traços.', tags: ['processo-fonologico', 'fonetica'] },
      { id: 'fc-fon-18', front: 'Que estruturas silábicas costumam ser dominadas mais tardiamente no português brasileiro?', back: 'Encontros consonantais no onset e consoantes em posição de coda, que podem continuar em consolidação até por volta dos 5-6 anos.', tags: ['estrutura-silabica'] },
      { id: 'fc-fon-19', front: 'Por que tabelas cronológicas de aquisição fonológica não devem ser usadas como critério diagnóstico isolado?', back: 'Porque são construídas a partir de amostras e critérios estatísticos específicos, que variam entre estudos, e porque há grande variabilidade individual dentro do desenvolvimento típico.', tags: ['avaliacao', 'variabilidade'] },
      { id: 'fc-fon-20', front: 'Cite dois exemplos de estrutura silábica do português, do mais simples ao mais complexo.', back: 'CV (consoante-vogal, como em "pá") é mais simples; estruturas com encontro consonantal e coda são mais complexas.', tags: ['estrutura-silabica'] },
    ],
    finalSynthesis:
      'O desenvolvimento fonológico é o processo pelo qual a criança constrói progressivamente o sistema de sons de sua língua — não apenas aprendendo a articular fones isolados, mas organizando-os em contrastes que distinguem significado. Esse processo envolve a percepção precoce dos sons da língua, a expansão gradual do inventário fonético e fonológico, a consolidação de estruturas silábicas de complexidade crescente e o uso temporário de processos fonológicos de simplificação, que tendem a desaparecer à medida que o sistema amadurece. A sequência típica — plosivas e nasais precedendo fricativas, que precedem líquidas e encontros consonantais — descreve tendências de grupo observadas em estudos brasileiros de base populacional, não uma regra fixa para cada criança. A própria noção de "idade de aquisição" varia conforme o critério estatístico adotado, o que reforça a necessidade de cautela ao interpretar tabelas cronológicas. A variabilidade individual, as diferenças regionais e sociolinguísticas do português falado no Brasil e o contexto em que a fala é observada influenciam diretamente o que se considera esperado. Por isso, nenhuma conclusão sobre o desenvolvimento fonológico de uma criança deve se apoiar em um único som ausente, em um único processo fonológico ou em uma tabela isolada: é a análise conjunta da amostra de fala, da história de desenvolvimento e do contexto linguístico que sustenta uma leitura clínica responsável. Compreender esses fundamentos é o que torna possível, nos próximos módulos desta unidade, reconhecer com rigor o que diferencia a variação esperada do desenvolvimento típico de sinais que efetivamente indicam uma alteração fonológica.',
  },

  references: [
    {
      id: 'ref-tratado2014-cap71',
      authors: 'WERTZNER, Haydée Fiszbein; PAGAN-NEVES, Luciana de Oliveira.',
      title: 'Avaliação e Diagnóstico do Distúrbio Fonológico',
      source: 'In: MARCHESAN, Irene Queiroz; SILVA, Hilton Justino da; TOMÉ, Marileda Cattelan (org.). Tratado das Especialidades em Fonoaudiologia. São Paulo: Guanabara Koogan, 2014. cap. 71.',
      year: 2014,
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-tratado2014-cap72',
      authors: 'MOTA, Helena Bolli; WIETHAN, Fernanda Marafiga.',
      title: 'Fonologia – Intervenção',
      source: 'In: MARCHESAN, Irene Queiroz; SILVA, Hilton Justino da; TOMÉ, Marileda Cattelan (org.). Tratado das Especialidades em Fonoaudiologia. São Paulo: Guanabara Koogan, 2014. cap. 72.',
      year: 2014,
      usedIn: ['learn.essentialConcepts', 'learn.glossary', 'apply.questions'],
    },
    {
      id: 'ref-lamprecht2004',
      authors: 'LAMPRECHT, Regina Ritter (org.).',
      title: 'Aquisição Fonológica do Português: Perfil de Desenvolvimento e Subsídios para Terapia',
      source: 'Porto Alegre: Artmed, 2004.',
      year: 2004,
      usedIn: ['learn.summary', 'learn.limitations'],
    },
    {
      id: 'ref-ceron2017jslhr',
      authors: 'CERON, Marizete Ilha; GUBIANI, Marileda Barichello; OLIVEIRA, Camila Rosa de; KESKE-SOARES, Márcia.',
      title: 'Factors Influencing Consonant Acquisition in Brazilian Portuguese-Speaking Children',
      source: 'Journal of Speech, Language, and Hearing Research, v. 60, n. 4, p. 759-771, 2017.',
      year: 2017,
      doi: '10.1044/2016_JSLHR-S-15-0208',
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-ceron2022ijlcd',
      authors: 'CERON, Marizete Ilha; DE SIMONI, Simone Nicolini; KESKE-SOARES, Márcia.',
      title: 'Phonological Acquisition of Brazilian Portuguese: Ages of Customary Production, Acquisition and Mastery',
      source: 'International Journal of Language & Communication Disorders, v. 57, n. 2, p. 274-287, 2022.',
      year: 2022,
      doi: '10.1111/1460-6984.12689',
      usedIn: ['learn.summary', 'learn.evidence', 'learn.limitations', 'apply.questions'],
    },
    {
      id: 'ref-ceron2022codas',
      authors: 'CERON, Marizete Ilha; DE SIMONI, Simone Nicolini; URRUTIA, Gabriel Agustín Urrutia; KESKE-SOARES, Márcia.',
      title: 'Segmental Acquisition of Brazilian Portuguese: Onset Simple, Complex and Coda',
      source: 'CoDAS, v. 34, n. 3, e20200439, 2022.',
      year: 2022,
      doi: '10.1590/2317-1782/20212020439',
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions', 'apply.fictionalCases'],
    },
    {
      id: 'ref-ceron2017codas',
      authors: 'CERON, Marizete Ilha; GUBIANI, Marileda Barichello; OLIVEIRA, Camila Rosa de; GUBIANI, Marieli Barichello; KESKE-SOARES, Márcia.',
      title: 'Ocorrência do Desvio Fonológico e de Processos Fonológicos em Aquisição Fonológica Típica e Atípica',
      source: 'CoDAS, v. 29, n. 3, 2017.',
      year: 2017,
      doi: '10.1590/2317-1782/20172015306',
      usedIn: ['learn.summary', 'learn.evidence'],
    },
    {
      id: 'ref-ribas2022revisao',
      authors: 'RIBAS, L. P.; FALEIRO, A.; BERNARDI, A. C. S.; LEMMERTZ, M. L. C.',
      title: 'Aquisição Fonológica do Português Brasileiro: Revisão Sistemática sobre o Desenvolvimento das Consoantes',
      source: 'Distúrbios da Comunicação, v. 34, n. 1, e53900, 2022.',
      year: 2022,
      doi: '10.23925/2176-2724.2022v34i1e53900',
      usedIn: ['learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-cffa-crefono6',
      authors: 'CONSELHO FEDERAL DE FONOAUDIOLOGIA; CREFONO 6.',
      title: 'Desenvolvimento da Linguagem da Criança',
      source: 'Material informativo. Disponível em: fonoaudiologia.org.br. Revisado em 2023.',
      year: 2023,
      url: 'https://fonoaudiologia.org.br/wp-content/uploads/2019/09/Prancha-de-Desenvolvimento-Revisada-em-2023.pdf',
      accessDate: '2026-07-27',
      usedIn: ['learn.summary'],
    },
    {
      id: 'ref-eimas1971',
      authors: 'EIMAS, Peter D.; SIQUELAND, Einar R.; JUSCZYK, Peter; VIGORITO, James.',
      title: 'Speech Perception in Infants',
      source: 'Science, v. 171, n. 3968, p. 303-306, 1971.',
      year: 1971,
      doi: '10.1126/science.171.3968.303',
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions'],
    },
  ],
})
