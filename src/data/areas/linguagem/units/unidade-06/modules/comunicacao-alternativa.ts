import type { LearningModule } from '@/types/platform'

export const moduloComunicacaoAlternativa: LearningModule = {
  id: 'mod-comunicacao-alternativa',
  slug: 'comunicacao-alternativa-ampliada',
  title: 'Comunicação Aumentativa e Alternativa (CAA)',
  description:
    'Fundamentos da Comunicação Aumentativa e Alternativa: recursos sem apoio e com apoio, seleção de vocabulário, métodos de acesso, avaliação centrada na participação, treinamento de parceiros de comunicação e implementação em contextos naturais, em crianças e adultos.',
  order: 5,
  learningObjective:
    'Compreender os fundamentos da Comunicação Aumentativa e Alternativa, seus recursos, indicações, princípios de avaliação, seleção e implementação, considerando funcionalidade, participação, comunicação multimodal e tomada de decisão centrada na pessoa.',
  prerequisiteKnowledge: [
    'Desenvolvimento típico da intenção comunicativa',
    'Noções de motricidade, acessibilidade física e comunicação multimodal',
    'Conceitos básicos de avaliação fonoaudiológica da linguagem',
  ],
  estimatedTimeMinutes: 180,
  difficulty: 'advanced',
  status: 'published',

  learn: {
    summary: [
      {
        id: 'sum-caa-1',
        text: 'A Comunicação Aumentativa e Alternativa (CAA) reúne um conjunto de recursos, estratégias e sistemas destinados a pessoas sem fala funcional ou cuja fala não é suficiente para atender às suas necessidades comunicativas cotidianas (ASHA, 2024). O termo "alternativa" refere-se a formas de comunicação que substituem a fala ausente; "ampliada" (ou aumentativa), a recursos que complementam uma fala existente, mas limitada. Um mesmo sistema pode, ao longo do tempo, cumprir as duas funções para a mesma pessoa, conforme sua fala evolui, se mantém estável ou regride.',
      },
      {
        id: 'sum-caa-2',
        text: 'A decisão de introduzir CAA não deve depender de diagnóstico isolado, idade mínima ou da constatação de que "não há mais nada a fazer" pela fala oral. Segundo o Modelo de Participação de Beukelman e Mirenda, a avaliação compara a participação atual da pessoa em suas rotinas com a de pares sem deficiência nos mesmos contextos, distinguindo barreiras de oportunidade (impostas pelo ambiente, pelos parceiros ou por políticas) de barreiras de acesso (motoras, sensoriais, cognitivas e linguísticas da própria pessoa) (Beukelman; Mirenda, 2013).',
      },
      {
        id: 'sum-caa-3',
        text: 'Na prática, a comunicação de quem usa CAA raramente se limita a um único canal: fala residual, vocalizações, expressões faciais, gestos, apontar, olhar, símbolos gráficos e voz sintetizada frequentemente coexistem em uma mesma interação, de forma complementar. Essa comunicação multimodal deve ser reconhecida como legítima e eficaz, e não como sinal de que o sistema de CAA está mal ajustado: o objetivo da intervenção é ampliar o repertório expressivo total da pessoa, não fazê-la abandonar outros canais (von Tetzchner; Martinsen, 2000).',
      },
      {
        id: 'sum-caa-4',
        text: 'Os sistemas de CAA são classificados em sem apoio (unaided) — que dependem exclusivamente do corpo da pessoa, como gestos naturais, expressões faciais ou sinais — e com apoio (aided) — que exigem algum recurso externo, de uma fotografia impressa a um dispositivo eletrônico complexo (Beukelman; Mirenda, 2013). É importante não confundir CAA com língua de sinais formal: esta é uma língua natural com gramática própria, usada sobretudo por pessoas surdas, e nem sempre é o recurso mais adequado diante de comprometimento motor ou cognitivo associado.',
      },
      {
        id: 'sum-caa-5',
        text: 'Recursos de baixa tecnologia — pranchas de papel, livros de comunicação, cartões plastificados, quadros de rotina — não exigem energia elétrica, têm custo reduzido e funcionam como ponto de partida quase universal, além de servirem como retaguarda confiável quando um recurso eletrônico falha ou está indisponível. O PECS (Picture Exchange Communication System), estruturado em seis fases progressivas com base na análise do comportamento aplicada, iniciando pela troca física de um cartão por um item desejado, é um exemplo amplamente estudado dessa categoria, com evidência acumulada em diferentes países (Bondy; Frost, 1994).',
      },
      {
        id: 'sum-caa-6',
        text: 'Recursos de alta tecnologia incluem dispositivos geradores de fala (DGF) dedicados ou aplicativos em tablets, com vocabulário estático (símbolos fixos por página) ou dinâmico (telas que se reorganizam conforme a navegação). Esses recursos ampliam o volume de vocabulário disponível e a autonomia de saída de voz em ambientes públicos, mas dependem de energia, manutenção técnica, suporte para atualização e, com frequência, de recursos financeiros elevados — o que exige que sua indicação considere a sustentabilidade real do suporte no contexto de vida da pessoa, e não apenas a adequação teórica do recurso ao perfil comunicativo.',
      },
      {
        id: 'sum-caa-7',
        text: 'Os sistemas de símbolos gráficos variam quanto ao grau de iconicidade — da fotografia realista, mais transparente para iniciantes, a sistemas pictográficos convencionalizados e a sistemas logográficos mais abstratos, que exigem maior tempo de aprendizagem, mas permitem maior densidade de vocabulário na mesma prancha. A escolha do sistema deve considerar o perfil cognitivo e visual da pessoa, sem presumir que o sistema mais simples seja sempre o mais adequado a longo prazo.',
      },
      {
        id: 'sum-caa-8',
        text: 'Uma prancha ou livro de comunicação é considerado robusto quando oferece vocabulário e estrutura suficientes para a geração de enunciados originais, e não apenas respostas pré-fabricadas: isso inclui pronomes, verbos, negação, marcadores de pergunta e conceitos descritivos, organizados de forma consistente entre páginas, para reduzir a carga de busca visual e de memória motora. A chamada "armadilha dos substantivos" — pranchas compostas quase exclusivamente por nomes de objetos — limita a pessoa a pedidos pontuais e a impede de protestar, comentar, perguntar ou relatar.',
      },
      {
        id: 'sum-caa-9',
        text: 'A seleção de vocabulário costuma equilibrar o vocabulário nuclear (core vocabulary) — um conjunto relativamente pequeno de palavras de alta frequência (pronomes, verbos, preposições, negação, conceitos como "mais", "parar", "diferente") que se repete em praticamente qualquer contexto e é responsável por cerca de 80% do que uma pessoa fala no cotidiano (Beukelman; Yorkston; Poblete; Naranjo, 1984) — e o vocabulário periférico (fringe vocabulary), formado majoritariamente por substantivos específicos, de baixa frequência e fortemente dependentes do contexto. Pranchas iniciais compostas só de vocabulário periférico, por mais familiar que pareça, tendem a restringir a expressão a pedidos concretos, sem sustentar frases funcionais mais complexas.',
      },
      {
        id: 'sum-caa-10',
        text: 'A avaliação de necessidades comunicativas, sob o Modelo de Participação, examina os ambientes em que a pessoa transita (casa, escola, trabalho, comunidade), os parceiros de comunicação disponíveis em cada um, as demandas comunicativas específicas de cada rotina e as oportunidades reais de participação oferecidas — ou negadas — pelo entorno. Essa avaliação não se reduz a testes formais isolados de linguagem: envolve observação direta em contexto natural, entrevista com familiares e outros parceiros, e identificação conjunta de prioridades junto à própria pessoa, sempre que sua participação na decisão for possível.',
      },
      {
        id: 'sum-caa-11',
        text: 'A avaliação de acesso complementa a avaliação de necessidades ao examinar as capacidades motoras (controle de cabeça, tronco, membros, fadiga), sensoriais (acuidade visual e auditiva), cognitivas (atenção, memória, associação símbolo-referente) e linguísticas (compreensão, alfabetização) relevantes para operar cada tipo de sistema. Essa análise orienta o chamado feature matching: cruzar as características de cada recurso candidato com o perfil específico da pessoa, em vez de indicar um sistema por ser o mais comum ou o mais usado por outra pessoa com diagnóstico semelhante.',
      },
      {
        id: 'sum-caa-12',
        text: 'As barreiras que limitam o uso efetivo da CAA não residem apenas na pessoa: barreiras motoras, sensoriais, cognitivas e linguísticas coexistem com barreiras de atitude e de oportunidade, como parceiros que não esperam tempo suficiente de resposta, ambientes que não disponibilizam o recurso o tempo todo, ou a crença de que a pessoa "não tem capacidade" de se beneficiar do sistema. Reconhecer essas barreiras externas evita atribuir a falta de comunicação unicamente ao indivíduo, deslocando parte da intervenção para o ambiente e os parceiros.',
      },
      {
        id: 'sum-caa-13',
        text: 'Quanto aos métodos de acesso, a seleção direta permite que a pessoa toque, aponte ou pressione diretamente o símbolo desejado — com o dedo, um ponteiro de cabeça, um apontador de luz ou outro meio —, sendo geralmente mais rápida e cognitivamente mais simples do que métodos indiretos, quando a condição motora da pessoa permite. Quando a coordenação motora fina ou a amplitude de movimento estão comprometidas, adaptações como colmeias (guias físicas) sobre a prancha ou o dispositivo podem reduzir ativações acidentais de símbolos adjacentes.',
      },
      {
        id: 'sum-caa-14',
        text: 'A varredura (scanning) é um método indireto indicado quando a seleção direta não é viável: um indicador percorre as opções disponíveis — em padrão linear, por linhas e colunas, ou outros arranjos — e a pessoa aciona um comando no momento em que a opção desejada está destacada. Existe também a varredura assistida por parceiro, em que outra pessoa nomeia ou aponta as opções em voz alta. A velocidade e o padrão de varredura devem ser ajustados individualmente, não copiados de uma configuração padrão de fábrica.',
      },
      {
        id: 'sum-caa-15',
        text: 'O acesso por rastreamento ocular (eye-gaze) permite selecionar símbolos apenas com o movimento dos olhos, captado por sensores infravermelhos, sendo especialmente relevante para comprometimento motor grave e generalizado, como em estágios avançados de esclerose lateral amiotrófica (ELA). Esse acesso exige calibração periódica, boa iluminação, controle postural da cabeça e tolerância à fadiga visual, fatores que devem ser reavaliados ao longo do tempo.',
      },
      {
        id: 'sum-caa-16',
        text: 'A participação da família é determinante para o sucesso da CAA: sistemas bem projetados tendem ao abandono quando não há uso consistente do recurso nas rotinas domésticas, ainda que a pessoa o utilize de forma cooperativa nas sessões terapêuticas. Isso não significa transferir à família a responsabilidade técnica de "aplicar terapia" em casa, mas capacitá-la a reconhecer e responder às tentativas de comunicação da pessoa, a manter o recurso fisicamente acessível em todos os momentos do dia e a valorizar qualquer canal de comunicação usado, mesmo antes de o uso do sistema formal se consolidar.',
      },
      {
        id: 'sum-caa-17',
        text: 'A participação da escola segue princípio semelhante: a inclusão de um estudante que usa CAA depende de professores e colegas terem orientações práticas sobre o sistema, de o recurso acompanhar a pessoa em todos os ambientes escolares (sala de aula, recreio, refeitório), e de as atividades pedagógicas incorporarem oportunidades reais de uso do vocabulário disponível — não apenas posicionar o estudante como espectador passivo da turma.',
      },
      {
        id: 'sum-caa-18',
        text: 'O treinamento de parceiros de comunicação — familiares, professores, cuidadores e profissionais — é um dos componentes mais eficazes da intervenção em CAA, não um complemento opcional. Um modelo citado na literatura é o de instrução estratégica em etapas de Kent-Walsh e McNaughton (2005) — combinando, de forma geral, explicação, demonstração e prática guiada com feedback, descrição confirmada aqui apenas por fontes secundárias —; uma metanálise sobre instrução de parceiros relatou tamanho de efeito muito elevado sobre o comportamento deles (Kent-Walsh; Murza; Malani; Binger, 2015). Parceiros mais competentes criam mais oportunidades de comunicação, não apenas respondem às tentativas já iniciadas pela pessoa.',
      },
      {
        id: 'sum-caa-19',
        text: 'Entre as estratégias específicas de treinamento de parceiros, destaca-se a modelagem em CAA (aided language stimulation), técnica descrita por Goossens\', Crain e Elder (1992), na qual o parceiro aponta para os símbolos correspondentes no sistema da própria pessoa enquanto fala com ela, aumentando a linguagem falada com o apoio visual do sistema, sem exigir resposta imediata. A lógica é comparável à exposição receptiva massiva que qualquer criança recebe antes de produzir suas primeiras palavras faladas: a pessoa vê o sistema sendo usado de forma significativa antes de passar a utilizá-lo ativamente.',
      },
      {
        id: 'sum-caa-20',
        text: 'A implementação da CAA deve ocorrer preferencialmente em contextos naturais — durante o brincar, as refeições, o trajeto para a escola —, e não restrita a sessões clínicas estruturadas, para favorecer a generalização a diferentes pessoas, ambientes e situações comunicativas. Quando o ensino ocorre apenas em contexto artificial, é comum que a pessoa demonstre competência na terapia, mas não generalize esse uso para casa ou escola — o que indica falha de planejamento da generalização, não incapacidade da pessoa.',
      },
      {
        id: 'sum-caa-21',
        text: 'O monitoramento contínuo do uso do sistema — quais símbolos são efetivamente usados, em quais contextos, com qual autonomia, e quais barreiras persistem — permite ajustes ao longo do tempo. A CAA não é uma solução estática definida uma única vez: o vocabulário deve crescer com o desenvolvimento da pessoa, o método de acesso deve ser reavaliado diante de mudanças motoras ou sensoriais, e o sistema deve evoluir de recursos simples a mais complexos (ou o inverso, em quadros progressivos), orientado pela função comunicativa real, não pela sofisticação tecnológica.',
      },
      {
        id: 'sum-caa-22',
        text: 'O abandono de dispositivos de CAA está associado a treinamento insuficiente dos parceiros, mau ajuste entre exigências do recurso e perfil da pessoa, baixa eficiência de resposta frente a outras formas de comunicação já disponíveis (como gestos, mais rápidos em certas situações) e falta de suporte técnico contínuo (Johnston; Evans, 2005). Antecipar esses fatores na seleção do recurso — não apenas depois que o abandono já ocorreu — é responsabilidade da equipe que indica o sistema.',
      },
      {
        id: 'sum-caa-23',
        text: 'Do ponto de vista ético, a introdução da CAA deve ser entendida como direito à comunicação, e não como recurso concedido condicionalmente após o esgotamento de outras tentativas. O modelo de competência comunicativa de Light e McNaughton (2014) situa essa autonomia em quatro domínios inter-relacionados — linguístico, operacional, social e estratégico —, sublinhando que a competência no uso da CAA depende tanto das habilidades da pessoa quanto do apoio e das oportunidades do ambiente. Respeitar preferências pessoais e o ritmo de adesão da pessoa é parte constitutiva dessa competência, não um obstáculo a ela.',
      },
      {
        id: 'sum-caa-24',
        text: 'Diversos mitos ainda circulam sobre a CAA e devem ser explicitamente combatidos na prática clínica: o de que ela atrasa a fala oral — quando, na verdade, a evidência disponível indica que a CAA não atrasa, e pode inclusive favorecer, a emergência da fala (Millar; Light; Schlosser, 2006); que deve ser reservada como "último recurso"; que exigiria pré-requisitos cognitivos mínimos (como noção fixa de causa e efeito); e que existiria uma idade mínima para seu uso — os seis mitos listados e revisados criticamente por Romski e Sevcik (2005) na intervenção precoce.',
      },
      {
        id: 'sum-caa-25',
        text: 'Em crianças, a CAA acompanha frequentemente o desenvolvimento típico ou atípico da intenção comunicativa, sendo indicada em quadros como transtorno do espectro autista, paralisia cerebral, síndromes genéticas associadas a comprometimento de fala e apraxia de fala infantil grave. Nesses casos, a CAA não substitui o trabalho sobre outras habilidades linguísticas e sociais, mas oferece um canal de expressão enquanto essas habilidades se desenvolvem — e, quando a fala se torna funcional, o sistema tende a se reorganizar naturalmente para um papel complementar, sem que isso represente fracasso da intervenção anterior.',
      },
      {
        id: 'sum-caa-26',
        text: 'Em adultos, a CAA é relevante tanto em condições adquiridas — afasias globais ou graves pós-AVE, traumatismo cranioencefálico, doenças neurodegenerativas progressivas como a ELA — quanto em condições do neurodesenvolvimento que acompanham a pessoa até a vida adulta. Nas condições progressivas, o planejamento da CAA deve antecipar mudanças motoras e de fala esperadas, introduzindo o sistema antes que a comunicação por fala se torne inviável, para que a pessoa participe ativamente do próprio processo de seleção do recurso, enquanto ainda dispõe de meios mais amplos de expressar suas preferências.',
      },
      {
        id: 'sum-caa-27',
        text: 'O fio condutor deste módulo é o mesmo que atravessa toda esta plataforma: a decisão sobre CAA nunca deve derivar automaticamente de um diagnóstico, de uma idade ou de um protocolo comercial específico, mas de uma avaliação funcional individualizada, centrada na participação real da pessoa em sua vida cotidiana, na escuta de suas preferências e na articulação constante entre pessoa, família, escola e equipe terapêutica.',
      },
    ],
    mainIdea:
      'A Comunicação Aumentativa e Alternativa reúne recursos, estratégias e sistemas — de gestos naturais a dispositivos com acesso por rastreamento ocular — para ampliar a participação comunicativa de pessoas sem fala funcional ou com fala insuficiente, guiada por avaliação individualizada de necessidades e de acesso, nunca por diagnóstico, idade ou protocolo único. O sucesso depende tanto da seleção criteriosa do sistema quanto do treinamento consistente de parceiros de comunicação em contextos naturais da vida da pessoa.',
    essentialConcepts: [
      {
        id: 'conc-caa',
        term: 'Comunicação Aumentativa e Alternativa (CAA)',
        definition:
          'Conjunto de recursos, estratégias e sistemas destinados a pessoas sem fala funcional ou cuja fala não é suficiente para suas necessidades comunicativas cotidianas; "alternativa" refere-se a recursos que substituem a fala ausente, e "ampliada" (ou aumentativa), a recursos que complementam uma fala existente, porém limitada.',
        example: 'Um adulto com afasia grave que usa uma prancha de símbolos para complementar as poucas palavras que ainda consegue falar.',
      },
      {
        id: 'conc-multimodal',
        term: 'Comunicação Multimodal',
        definition:
          'Uso combinado e simultâneo de diferentes canais — fala residual, vocalizações, gestos, expressões faciais, olhar, símbolos gráficos, voz sintetizada — em uma mesma interação comunicativa, sem que isso indique um sistema mal ajustado.',
        example: 'Uma criança que aponta para um símbolo de "mais" enquanto vocaliza e olha para o adulto, combinando três canais na mesma mensagem.',
      },
      {
        id: 'conc-semapoio',
        term: 'Recurso Sem Apoio (Unaided)',
        definition:
          'Recurso de comunicação que depende exclusivamente do corpo da pessoa, sem exigir nenhum elemento externo, como gestos naturais, expressões faciais ou sinais.',
        example: 'Balançar a cabeça para indicar "sim" ou "não".',
      },
      {
        id: 'conc-comapoio',
        term: 'Recurso Com Apoio (Aided)',
        definition:
          'Recurso de comunicação que exige algum elemento externo ao corpo da pessoa, de uma fotografia impressa a um dispositivo eletrônico complexo.',
        example: 'Uma prancha de papel com símbolos que a pessoa aponta para se comunicar.',
      },
      {
        id: 'conc-baixatec',
        term: 'Baixa Tecnologia',
        definition:
          'Recursos de CAA que não exigem eletricidade ou processamento eletrônico, como pranchas de papel, livros de comunicação e cartões plastificados; têm custo reduzido e servem como retaguarda confiável quando recursos eletrônicos falham.',
        example: 'Um livro de comunicação com páginas temáticas (rotina, alimentação, escola) usado no dia a dia.',
      },
      {
        id: 'conc-altatec',
        term: 'Alta Tecnologia',
        definition:
          'Recursos de CAA eletrônicos, como dispositivos geradores de fala dedicados ou aplicativos em tablets, que ampliam o volume de vocabulário e a saída de voz, mas dependem de energia, manutenção e suporte técnico contínuo.',
        example: 'Um tablet com aplicativo de comunicação que fala em voz alta a frase montada pelo usuário.',
      },
      {
        id: 'conc-pecs',
        term: 'PECS (Picture Exchange Communication System)',
        definition:
          'Sistema de comunicação por troca de figuras, estruturado em seis fases progressivas, baseado na análise do comportamento aplicada (ABA), iniciando pela troca física de um cartão por um item desejado.',
        example: 'Uma criança retira o cartão de "suco" e o entrega ao adulto para receber a bebida.',
      },
      {
        id: 'conc-nuclear',
        term: 'Vocabulário Nuclear (Core Vocabulary)',
        definition:
          'Conjunto relativamente pequeno de palavras de alta frequência (pronomes, verbos, negação, preposições, conceitos como "mais" e "parar") responsável por cerca de 80% do que se fala no cotidiano, aplicável a praticamente qualquer contexto.',
        example: 'Palavras como "eu", "quero", "não", "ir", "diferente", usadas para pedir, protestar, comentar ou perguntar.',
      },
      {
        id: 'conc-periferico',
        term: 'Vocabulário Periférico (Fringe Vocabulary)',
        definition: 'Palavras de baixa frequência, majoritariamente substantivos específicos, dependentes de um tópico ou contexto delimitado.',
        example: 'Nomes de brinquedos específicos ou de pratos favoritos da pessoa.',
      },
      {
        id: 'conc-robustez',
        term: 'Robustez Linguística',
        definition:
          'Característica de uma prancha ou sistema que oferece vocabulário e estrutura suficientes (verbos, pronomes, negação, marcadores de pergunta) para a geração de enunciados originais, e não apenas respostas pré-fabricadas.',
        example: 'Uma prancha com mais de 50 símbolos organizados por categoria gramatical, e não apenas 5 figuras de comida.',
      },
      {
        id: 'conc-dgf',
        term: 'Dispositivo Gerador de Fala (DGF)',
        definition:
          'Recurso de alta tecnologia que produz saída de voz sintetizada ou digitalizada a partir da seleção de símbolos, podendo ter vocabulário estático (símbolos fixos) ou dinâmico (telas que se reorganizam).',
        example: 'Um aplicativo que fala em voz alta "eu quero água" quando o usuário seleciona os símbolos correspondentes em sequência.',
      },
      {
        id: 'conc-selecaodireta',
        term: 'Seleção Direta',
        definition:
          'Método de acesso em que a pessoa toca, aponta ou pressiona diretamente o símbolo desejado, com o dedo ou outro apontador, geralmente mais rápido que métodos indiretos quando a condição motora permite.',
        example: 'Apontar diretamente para um símbolo em uma prancha com o dedo indicador.',
      },
      {
        id: 'conc-varredura',
        term: 'Varredura (Scanning)',
        definition:
          'Método de acesso indireto em que um indicador visual ou sonoro percorre as opções disponíveis, e a pessoa aciona um comando (geralmente um acionador) no momento em que a opção desejada está destacada.',
        example: 'Um cursor que percorre linhas e colunas de símbolos na tela até que o usuário pressione um acionador para selecionar.',
      },
      {
        id: 'conc-eyegaze',
        term: 'Acesso por Rastreamento Ocular (Eye-Gaze)',
        definition:
          'Método de acesso que permite selecionar símbolos apenas pelo movimento dos olhos, captado por sensores infravermelhos; relevante em comprometimento motor grave e generalizado.',
        example: 'Uma pessoa com ELA avançada que seleciona símbolos apenas olhando fixamente para eles na tela por um tempo determinado.',
      },
      {
        id: 'conc-participacao',
        term: 'Modelo de Participação',
        definition:
          'Modelo de avaliação e intervenção em CAA (Beukelman; Mirenda) que compara a participação atual da pessoa em suas rotinas com a de pares sem deficiência nos mesmos contextos, identificando separadamente barreiras de oportunidade e de acesso.',
        example: 'Observar que um estudante participa menos das discussões em sala não por incapacidade linguística, mas porque o professor não espera tempo suficiente para sua resposta.',
      },
      {
        id: 'conc-parceiro',
        term: 'Parceiro de Comunicação',
        definition:
          'Familiar, professor, cuidador ou profissional que interage cotidianamente com a pessoa que usa CAA, podendo ser capacitado em estratégias específicas para facilitar e ampliar essa comunicação.',
        example: 'Uma mãe treinada para apontar símbolos na prancha do filho enquanto conversa com ele durante o café da manhã.',
      },
      {
        id: 'conc-modelagem',
        term: 'Modelagem em CAA (Aided Language Stimulation)',
        definition:
          "Estratégia em que o parceiro aponta para os símbolos correspondentes no sistema da própria pessoa enquanto fala com ela, aumentando a linguagem falada com apoio visual, sem exigir resposta imediata (Goossens'; Crain; Elder, 1992).",
        example: 'Dizer "vamos comer" enquanto aponta para os símbolos de "ir" e "comer" na prancha da criança.',
      },
      {
        id: 'conc-competencia',
        term: 'Competência Comunicativa (em CAA)',
        definition:
          'Conjunto de conhecimentos, julgamentos e habilidades em quatro domínios inter-relacionados — linguístico, operacional, social e estratégico — que sustentam o uso eficaz da CAA, influenciados também por fatores psicossociais e pelo ambiente (Light; McNaughton, 2014).',
        example: 'Um usuário de CAA que, além de operar bem o dispositivo (competência operacional), também sabe iniciar e encerrar conversas de forma socialmente adequada (competência social).',
      },
    ],
    evidence: [
      {
        id: 'ev-caa-1',
        claim: 'A introdução precoce de CAA não inibe, e pode inclusive favorecer, o desenvolvimento da fala natural: em uma síntese de 23 estudos (67 participantes), nenhum dos casos de melhor evidência (27 casos, 6 estudos) mostrou redução da fala após intervenção em CAA, e a maioria demonstrou ganhos.',
        source: 'Millar; Light; Schlosser (2006). Journal of Speech, Language, and Hearing Research, 49(2), 248-264. REFERÊNCIA NÃO CONFIRMADA EM TEXTO INTEGRAL NESTA AUDITORIA — REVISÃO HUMANA NECESSÁRIA: achado quantitativo (89% de aumento, 11% sem mudança, 0% de redução, entre os 27 casos de melhor evidência de 23 estudos/67 participantes) triangulado em três fontes secundárias independentes (PubMed, NCBI Bookshelf/DARE e uma planilha de síntese de pesquisa em CAA), mas métodos e discussão completos do artigo não lidos. População revisada: crianças e adultos (2–60 anos) com deficiência intelectual, autismo e outras deficiências do desenvolvimento — não inclui condições neurológicas adquiridas do adulto (ex.: ELA), o que limita a extrapolação direta desse achado a esse público.',
        evidenceLevel: 'strong',
        clinicalImplication:
          'Não se deve atrasar a introdução de sistemas de CAA na esperança de que a fala "apareça sozinha"; a CAA deve ser usada de forma concomitante ao trabalho de estimulação de fala, quando indicado.',
      },
      {
        id: 'ev-caa-2',
        claim: 'Uma revisão sistemática de evidência (best-evidence) sobre modelagem em CAA encontrou ganhos linguísticos consistentes (pragmáticos, semânticos, sintáticos e morfológicos) em dez estudos que envolveram diferentes parceiros de comunicação — pais, fonoaudiólogos e auxiliares educacionais — em contextos de casa, escola e clínica, com participantes de perfis heterogêneos (paralisia cerebral, síndrome de Down, autismo, entre outros), não restritos a autistas não-verbais.',
        source: "Sennott; Light; McNaughton (2016). \"AAC Modeling Intervention Research Review\". Research and Practice for Persons with Severe Disabilities, 41(2), 101-115. DOI: 10.1177/1540796916638822. Acesso integral nesta auditoria: artigo lido na íntegra (10 estudos, 31 participantes em desenhos de caso único + 63 em desenho de grupo quase-experimental; PND geral de 90,6%).",
        evidenceLevel: 'strong',
        clinicalImplication:
          'O fonoaudiólogo deve dedicar parte relevante da intervenção à capacitação prática de parceiros (pais, professores, auxiliares) para realizar modelagem em contextos naturais, e não apenas à prática clínica isolada com a criança; a evidência não se restringe a autistas nem apenas a parceiros parentais.',
      },
      {
        id: 'ev-caa-3',
        claim: 'Uma metanálise sobre instrução de parceiros de comunicação em CAA indica que abordagens de instrução estratégica estruturada produzem tamanho de efeito muito elevado sobre o comportamento dos parceiros.',
        source: 'Kent-Walsh; Murza; Malani; Binger (2015). Augmentative and Alternative Communication, v. 31, n. 4, p. 271-284 (paginação definitiva do fascículo impresso, confirmada nesta auditoria; a numeração "1-14" vista em algumas fontes secundárias refere-se à publicação eletrônica antecipada). Acesso parcial nesta auditoria: metodologia (17 estudos de caso único, 53 participantes) e achado geral confirmados via busca; texto integral não lido.',
        evidenceLevel: 'strong',
        clinicalImplication:
          'Priorizar programas estruturados de treinamento de parceiros (explicação, demonstração, prática guiada com feedback e prática independente), e não apenas orientações verbais pontuais.',
      },
      {
        id: 'ev-caa-4',
        claim: 'A modelagem em CAA (aided language stimulation) aumenta a exposição da pessoa ao uso funcional do sistema antes de exigir produção ativa, favorecendo a compreensão e o uso posterior dos símbolos.',
        source: "Goossens'; Crain; Elder (1992). Clinician Series, Southeast Augmentative Communication Conference Publications. Acesso parcial nesta auditoria: descrição da técnica confirmada via fontes secundárias (busca); texto integral não lido.",
        evidenceLevel: 'moderate',
        clinicalImplication:
          'Parceiros devem ser orientados a modelar o sistema rotineiramente durante a fala natural, sem exigir resposta imediata da pessoa a cada modelagem.',
      },
      {
        id: 'ev-caa-5',
        claim: 'Cerca de 80% da comunicação cotidiana é composta por um conjunto relativamente pequeno de palavras de alta frequência (vocabulário nuclear), estável entre diferentes usuários de CAA.',
        source: 'Beukelman; Yorkston; Poblete; Naranjo (1984). Journal of Speech and Hearing Disorders, 49, 360-367. Acesso parcial nesta auditoria: metadados e achado geral confirmados via busca; texto integral não lido.',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'Pranchas iniciais devem priorizar vocabulário nuclear multifuncional, e não apenas substantivos de interesse imediato da pessoa.',
      },
      {
        id: 'ev-caa-6',
        claim: 'Revisões e metanálises sobre o PECS relatam que muitas crianças adquirem rapidamente o uso de troca de figuras para comunicação, com resultados heterogêneos quanto à generalização para fala espontânea.',
        source: 'Bondy; Frost (1994); síntese de revisões posteriores sobre PECS. Acesso parcial nesta auditoria: descrição do sistema e de achados gerais confirmada via busca; texto integral não lido.',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'O PECS pode ser eficaz para estabelecer troca comunicativa inicial, mas seu efeito sobre o desenvolvimento de fala não deve ser prometido à família como resultado garantido.',
      },
      {
        id: 'ev-caa-7',
        claim: 'Fatores como treinamento insuficiente de parceiros, baixa eficiência de resposta do recurso e mau ajuste entre as exigências do dispositivo e o perfil da pessoa estão associados ao abandono de tecnologia assistiva, incluindo sistemas de CAA.',
        source: 'Johnston; Evans (2005). Journal of Special Education Technology, 20(3), 45-50. Acesso parcial nesta auditoria: resumo confirmado via busca; texto integral não lido.',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'A equipe deve antecipar o risco de abandono já no momento da seleção do recurso, e não apenas reagir a ele depois que já ocorreu.',
      },
      {
        id: 'ev-caa-8',
        claim: 'Os autores identificam e refutam, com base na literatura de intervenção precoce, ao menos seis mitos sobre CAA: que é "último recurso"; que impede o desenvolvimento da fala; que exige um conjunto mínimo de habilidades (pré-requisitos cognitivos); que dispositivos geradores de fala servem só a crianças com cognição intacta; que existe idade mínima para se beneficiar da CAA; e que há uma hierarquia representacional obrigatória de símbolos (de objetos a palavras escritas).',
        source: 'Romski; Sevcik (2005). Infants & Young Children, v. 18, n. 3, p. 174-185. Acesso integral nesta auditoria: artigo lido na íntegra (seis mitos listados na Tabela 1 do artigo, com revisão de literatura para cada um).',
        evidenceLevel: 'expert_opinion',
        clinicalImplication:
          'Não se deve postergar a introdução da CAA à espera de habilidades cognitivas específicas nem de uma idade mínima.',
      },
      {
        id: 'ev-caa-9',
        claim: 'A competência comunicativa de quem usa CAA depende de quatro domínios inter-relacionados (linguístico, operacional, social e estratégico), além de fatores psicossociais e do ambiente, e não apenas de habilidades individuais isoladas.',
        source: 'Light; McNaughton (2014). Augmentative and Alternative Communication, v. 30, n. 1, p. 1-18. DOI: 10.3109/07434618.2014.885080. Acesso integral nesta auditoria: artigo lido na íntegra, confirmando a definição original de Light (1989) e sua expansão em 2003 para incluir fatores psicossociais e barreiras/apoios ambientais.',
        evidenceLevel: 'expert_opinion',
        clinicalImplication:
          'Metas de intervenção devem contemplar os quatro domínios de competência, e não se restringir ao domínio operacional (manuseio técnico do dispositivo).',
      },
    ],
    limitations: [
      {
        id: 'lim-caa-1',
        description:
          'A CAA não é uma cura para a ausência de fala, mas uma ferramenta de acessibilidade; a aquisição de linguagem e a expansão de frases exigem tempo e estimulação consistente, sem resultado automático garantido.',
      },
      {
        id: 'lim-caa-2',
        description:
          'Dispositivos de alta tecnologia dependem de suporte financeiro, manutenção e atualização constantes; a indicação deve considerar a sustentabilidade real no contexto de vida da pessoa, não apenas a adequação teórica do recurso.',
      },
      {
        id: 'lim-caa-3',
        description:
          'O abandono do sistema de CAA pela família é frequente quando os parceiros de comunicação não são treinados ativamente, ou quando a prancha contém apenas vocabulário de cobrança imediata.',
      },
      {
        id: 'lim-caa-4',
        description:
          'A pesquisa de frequência de vocabulário nuclear (Beukelman et al., 1984) foi realizada com uma amostra específica de usuários adultos de CAA; a composição exata do vocabulário nuclear pode variar conforme idade, cultura e contexto, e não deve ser copiada rigidamente de uma lista fixa e universal.',
      },
      {
        id: 'lim-caa-5',
        description:
          'A revisão de Sennott, Light e McNaughton (2016) baseia-se majoritariamente em desenhos de caso único (nove estudos, 31 participantes) e um único desenho de grupo quase-experimental (63 participantes); embora robusta para o padrão de pesquisa em CAA, essa base ainda é pequena e heterogênea quanto a diagnósticos, o que exige cautela antes de generalizar os ganhos a qualquer perfil específico de usuário.',
      },
      {
        id: 'lim-caa-6',
        description:
          'Revisões sobre o PECS mostram heterogeneidade de resultados quanto à generalização para fala espontânea; nem toda criança que aprende a trocar figuras desenvolve fala subsequente, e isso não deve ser prometido à família como expectativa.',
      },
      {
        id: 'lim-caa-7',
        description:
          'O modelo de instrução de parceiros em etapas (Kent-Walsh; McNaughton, 2005) exige tempo e capacitação do próprio profissional para ser aplicado com fidelidade; orientações pontuais e informais tendem a ter efeito mais limitado que um programa estruturado completo. A descrição detalhada das etapas específicas do modelo não foi confirmada em texto integral nesta auditoria, apenas por fontes secundárias.',
      },
      {
        id: 'lim-caa-8',
        description:
          'Métodos de acesso por varredura e por rastreamento ocular exigem calibração, ajuste de velocidade/padrão e reavaliação periódica; nenhum dos dois é uma solução definitiva configurada uma única vez.',
      },
      {
        id: 'lim-caa-9',
        description:
          'Em condições neurodegenerativas progressivas, o perfil motor e sensorial da pessoa se modifica ao longo do tempo, exigindo reavaliação periódica do método de acesso, e não apenas do vocabulário disponível.',
      },
      {
        id: 'lim-caa-10',
        description:
          'O reconhecimento da comunicação multimodal como legítima não deve ser usado como justificativa para deixar de estruturar um sistema robusto de símbolos, sob risco de a pessoa permanecer limitada a gestos idiossincráticos pouco compreendidos por parceiros novos.',
      },
      {
        id: 'lim-caa-11',
        description:
          'A literatura brasileira sobre CAA, embora crescente, ainda é proporcionalmente menor que a literatura internacional (majoritariamente em inglês), o que exige cautela ao transpor diretamente achados de populações e sistemas de saúde diferentes para a realidade brasileira.',
      },
      {
        id: 'lim-caa-12',
        description:
          'Nenhuma abordagem específica (PECS, modelagem, dispositivo gerador de fala, sistema sem apoio) deve ser tratada como indicação universal; a escolha depende sempre de avaliação funcional individualizada de necessidades e de acesso, não do diagnóstico isolado.',
      },
      {
        id: 'lim-caa-13',
        description:
          'A terminologia da área não é uniforme na literatura brasileira: Cesa e Mota (2015), em levantamento de periódicos nacionais (texto integral confirmado nesta auditoria), identificaram termos como "Comunicação Alternativa e Suplementar", "Comunicação Suplementar e/ou Alternativa", "Sistemas Alternativos e Facilitadores de Comunicação" e "Comunicação Alternativa e Ampliada" — este último usado na versão anterior deste módulo — e adotaram "Comunicação Aumentativa e Alternativa" por ser a nomenclatura preconizada pela International Society for Augmentative and Alternative Communication (ISAAC). Este módulo segue a mesma escolha; a sigla CAA permanece válida para qualquer uma dessas variantes.',
      },
    ],
    simpleExplanation:
      'Imagine que você está viajando por um país onde ninguém fala a sua língua, e você também não sabe falar a língua local. Para pedir água, indicar que está com fome, ou perguntar o caminho, provavelmente você vai apontar para figuras em um cardápio, mostrar fotos no celular, fazer gestos ou desenhar no ar. Você não fica em silêncio: usa qualquer recurso disponível para se fazer entender. É exatamente essa a ideia por trás da Comunicação Aumentativa e Alternativa (CAA): oferecer, a quem não fala ou fala pouco, ferramentas para expressar o que quer, sente e pensa, sem depender apenas da voz. Essas ferramentas podem ser bem simples, como uma prancha de papel cheia de desenhos que a pessoa aponta, ou bem sofisticadas, como um tablet que fala em voz alta o que a pessoa seleciona na tela, inclusive só olhando para os símbolos, no caso de pessoas que não conseguem mais mover as mãos. Nenhuma dessas opções é "melhor" de forma absoluta: a escolha depende de como estão as mãos, os olhos, a atenção e a compreensão de cada pessoa, e disso cuida uma avaliação cuidadosa, não um pacote pronto. Um erro comum é montar essas pranchas só com nomes de coisas — "bola", "suco", "boneca" — achando que assim fica mais fácil. Mas, se só existem nomes de objetos, a pessoa só consegue pedir coisas; não consegue dizer "não quero", "de novo", "está diferente" ou contar o que aconteceu no passeio. Por isso os especialistas priorizam também palavras "coringa", que servem para quase tudo — como "mais", "parar", "eu", "ajuda" — mesmo que pareçam menos óbvias à primeira vista. Outro ponto essencial é que a família e a escola precisam usar o sistema também, apontando os símbolos enquanto conversam com a pessoa no dia a dia — como fazemos, sem perceber, ao repetir palavras várias vezes para um bebê antes de ele começar a falar. Se o sistema só aparece na terapia, ele tende a ser esquecido em casa. E, ao contrário do que muita gente pensa, usar CAA não atrapalha, nem atrasa, o desenvolvimento da fala — pelo contrário, várias pesquisas mostram que pode até ajudar. Também não é preciso esperar a pessoa "entender tudo" antes de oferecer o recurso: o direito de se comunicar não deveria depender de passar em nenhum teste antes.',
    conceptMap: {
      centralNode: 'Comunicação Aumentativa e Alternativa',
      nodes: [
        { id: 'n-caa-central', label: 'Comunicação Aumentativa e Alternativa', type: 'central', description: 'Recursos, estratégias e sistemas para ampliar a participação comunicativa de quem não fala ou fala de forma insuficiente.' },
        { id: 'n-caa-avaliacao', label: 'Avaliação de necessidades e de acesso', type: 'primary', description: 'Modelo de Participação: compara participação atual com a de pares, distingue barreiras de oportunidade e de acesso.' },
        { id: 'n-caa-barreiras', label: 'Barreiras de oportunidade e de acesso', type: 'secondary', description: 'Barreiras motoras, sensoriais, cognitivas, linguísticas e de atitude/ambiente.' },
        { id: 'n-caa-selecao', label: 'Seleção de recursos', type: 'primary', description: 'Feature matching entre perfil da pessoa e características do recurso candidato.' },
        { id: 'n-caa-semapoio', label: 'Sem apoio', type: 'secondary', description: 'Gestos, sinais, expressões — dependem do corpo da pessoa.' },
        { id: 'n-caa-comapoio', label: 'Com apoio (baixa e alta tecnologia)', type: 'secondary', description: 'Pranchas, livros, PECS, dispositivos geradores de fala.' },
        { id: 'n-caa-vocabulario', label: 'Seleção de vocabulário', type: 'primary', description: 'Equilíbrio entre vocabulário nuclear e periférico, evitando a armadilha dos substantivos.' },
        { id: 'n-caa-nuclear', label: 'Vocabulário nuclear', type: 'secondary', description: 'Palavras de alta frequência, multifuncionais.' },
        { id: 'n-caa-periferico', label: 'Vocabulário periférico', type: 'secondary', description: 'Substantivos específicos, de baixa frequência.' },
        { id: 'n-caa-acesso', label: 'Métodos de acesso', type: 'primary', description: 'Seleção direta, varredura e rastreamento ocular.' },
        { id: 'n-caa-parceiros', label: 'Parceiros de comunicação', type: 'primary', description: 'Família, escola, cuidadores capacitados em estratégias específicas.' },
        { id: 'n-caa-modelagem', label: 'Modelagem (aided language stimulation)', type: 'application', description: 'Parceiro aponta símbolos enquanto fala, sem exigir resposta imediata.' },
        { id: 'n-caa-participacao', label: 'Participação em família, escola e comunidade', type: 'application', description: 'Implementação em contextos naturais para favorecer generalização.' },
        { id: 'n-caa-monitoramento', label: 'Monitoramento e adaptação', type: 'application', description: 'Ajuste contínuo de vocabulário e método de acesso ao longo do tempo, prevenindo abandono.' },
      ],
      edges: [
        { id: 'e-caa-1', from: 'n-caa-central', to: 'n-caa-avaliacao', label: 'fundamenta-se em' },
        { id: 'e-caa-2', from: 'n-caa-avaliacao', to: 'n-caa-barreiras', label: 'identifica' },
        { id: 'e-caa-3', from: 'n-caa-central', to: 'n-caa-selecao', label: 'orienta' },
        { id: 'e-caa-4', from: 'n-caa-selecao', to: 'n-caa-semapoio', label: 'inclui' },
        { id: 'e-caa-5', from: 'n-caa-selecao', to: 'n-caa-comapoio', label: 'inclui' },
        { id: 'e-caa-6', from: 'n-caa-central', to: 'n-caa-vocabulario', label: 'requer' },
        { id: 'e-caa-7', from: 'n-caa-vocabulario', to: 'n-caa-nuclear', label: 'prioriza' },
        { id: 'e-caa-8', from: 'n-caa-vocabulario', to: 'n-caa-periferico', label: 'complementa com' },
        { id: 'e-caa-9', from: 'n-caa-central', to: 'n-caa-acesso', label: 'depende de' },
        { id: 'e-caa-10', from: 'n-caa-avaliacao', to: 'n-caa-acesso', label: 'orienta escolha de' },
        { id: 'e-caa-11', from: 'n-caa-central', to: 'n-caa-parceiros', label: 'depende de' },
        { id: 'e-caa-12', from: 'n-caa-parceiros', to: 'n-caa-modelagem', label: 'capacitados em' },
        { id: 'e-caa-13', from: 'n-caa-central', to: 'n-caa-participacao', label: 'busca' },
        { id: 'e-caa-14', from: 'n-caa-central', to: 'n-caa-monitoramento', label: 'exige' },
      ],
    },
    glossary: [
      { id: 'gl-caa-1', term: 'Feature Matching', definition: 'Processo de cruzar as características específicas de cada recurso candidato de CAA com o perfil motor, sensorial, cognitivo e linguístico da pessoa, em vez de indicar por popularidade ou modernidade do recurso.', example: 'Escolher um sistema de varredura, e não de seleção direta, para uma pessoa com controle motor voluntário muito reduzido nas mãos.' },
      { id: 'gl-caa-2', term: 'Iconicidade', definition: 'Grau de semelhança visual entre um símbolo gráfico e o que ele representa; fotografias são mais icônicas (transparentes), enquanto símbolos logográficos são mais abstratos.', example: 'Uma fotografia real de um copo é mais icônica do que um símbolo pictográfico estilizado do mesmo objeto.' },
      { id: 'gl-caa-3', term: 'Vocabulário Dinâmico', definition: 'Organização de vocabulário em telas eletrônicas que se reorganizam conforme a navegação, permitindo acesso a um volume maior de palavras do que caberia em uma única página fixa.', example: 'Tocar no símbolo de "comida" abre uma nova tela com opções específicas de alimentos.' },
      { id: 'gl-caa-4', term: 'Vocabulário Estático', definition: 'Organização de vocabulário em símbolos fixos por página, sem reorganização automática, comum em pranchas de papel e em alguns dispositivos simples.', example: 'Uma prancha impressa com os mesmos 20 símbolos sempre visíveis na mesma posição.' },
      { id: 'gl-caa-5', term: 'Colmeia (Guia Física)', definition: 'Estrutura física sobreposta à prancha ou ao dispositivo, com aberturas correspondentes a cada símbolo, usada para reduzir ativações acidentais em pessoas com dificuldade de coordenação motora fina.', example: 'Uma grade de acrílico com furos posicionados sobre cada símbolo do dispositivo.' },
      { id: 'gl-caa-6', term: 'Varredura Linear', definition: 'Padrão de varredura em que o indicador percorre as opções uma a uma, em sequência, item por item.', example: 'O cursor destaca cada símbolo, um de cada vez, até o usuário acionar o comando de seleção.' },
      { id: 'gl-caa-7', term: 'Varredura por Linha-Coluna', definition: 'Padrão de varredura em que o indicador percorre primeiro as linhas e, após a seleção de uma linha, percorre as colunas dentro dela, tornando a busca mais rápida do que a varredura linear em grades grandes.', example: 'O usuário seleciona a linha 3 e depois a coluna 2 para chegar ao símbolo desejado.' },
      { id: 'gl-caa-8', term: 'Varredura Assistida por Parceiro', definition: 'Modalidade de varredura em que outra pessoa nomeia ou aponta as opções em voz alta ou fisicamente, e o usuário sinaliza (com um movimento, som ou expressão) qual opção deseja.', example: 'Um cuidador aponta cartões um a um perguntando "é este?", até o usuário confirmar com um piscar de olhos.' },
      { id: 'gl-caa-9', term: 'Calibração (Rastreamento Ocular)', definition: 'Procedimento inicial necessário para ajustar um sistema de eye-gaze à posição, ao movimento e às características oculares específicas de cada usuário antes do uso.', example: 'Pedir para o usuário olhar para pontos específicos na tela para o sistema aprender a rastrear seus olhos.' },
      { id: 'gl-caa-10', term: 'Fadiga Visual', definition: 'Cansaço ocular decorrente do uso prolongado de sistemas de acesso por rastreamento ocular, que pode reduzir a precisão da seleção ao longo do tempo e exige pausas programadas.', example: 'Um usuário que comete mais erros de seleção após 40 minutos contínuos de uso do rastreador ocular.' },
      { id: 'gl-caa-11', term: 'Generalização', definition: 'Uso funcional e espontâneo de um sistema de CAA em contextos, pessoas e situações diferentes daqueles em que ele foi originalmente ensinado.', example: 'Uma criança que aprendeu a pedir "mais" na terapia passa a usar o mesmo símbolo em casa e na escola.' },
      { id: 'gl-caa-12', term: 'Ensino Incidental', definition: 'Estratégia de ensino que aproveita oportunidades espontâneas do cotidiano, em vez de sessões estruturadas isoladas, para promover o uso funcional da CAA.', example: 'Aproveitar o momento em que a criança olha para o suco na geladeira para modelar o símbolo correspondente.' },
      { id: 'gl-caa-13', term: 'Eficiência de Resposta (Response Efficiency)', definition: 'Relação entre o esforço exigido por uma forma de comunicação e a rapidez/eficácia com que ela atinge seu objetivo; formas mais eficientes tendem a competir com sistemas de CAA mais lentos ou complexos.', example: 'Uma criança que prefere puxar a mão do adulto em vez de navegar por várias telas do dispositivo para pedir a mesma coisa.' },
      { id: 'gl-caa-14', term: 'Competência Operacional', definition: 'Domínio da competência comunicativa relacionado às habilidades motoras específicas para produzir gestos/sinais ou para acessar e navegar em um sistema de CAA com apoio.', example: 'Saber operar corretamente o padrão de varredura por linha-coluna de um dispositivo.' },
      { id: 'gl-caa-15', term: 'Competência Estratégica', definition: 'Domínio da competência comunicativa relacionado à capacidade de contornar as limitações da CAA ou do ambiente, como usar uma estratégia alternativa quando o parceiro não compreende a mensagem inicial.', example: 'Repetir a mensagem de forma diferente, ou apontar um símbolo complementar, quando o parceiro não entende a primeira tentativa.' },
      { id: 'gl-caa-16', term: 'Abandono de Dispositivo', definition: 'Descontinuação do uso de um recurso de CAA, frequentemente associada a treinamento insuficiente de parceiros, mau ajuste entre exigências do recurso e perfil do usuário, ou falta de suporte técnico contínuo.', example: 'Uma família que para de usar um tablet de comunicação após poucos meses, por falta de orientação sobre como incorporá-lo à rotina.' },
      { id: 'gl-caa-17', term: 'Prancha de Comunicação', definition: 'Recurso de baixa tecnologia com apoio, geralmente de papel ou plástico, com símbolos organizados para a pessoa apontar durante a comunicação.', example: 'Uma prancha temática de "hora do lanche" com símbolos de diferentes alimentos e bebidas.' },
      { id: 'gl-caa-18', term: 'Livro de Comunicação', definition: 'Recurso de baixa tecnologia com apoio, organizado em páginas ou seções temáticas, permitindo maior volume de vocabulário do que uma única prancha.', example: 'Um livro com seções separadas para rotina escolar, alimentação, sentimentos e lazer.' },
    ],
  },

  apply: {
    questions: [
      {
        id: 'q-caa-1',
        stem: 'O que distingue, na definição de CAA, os termos "alternativa" e "ampliada" (ou aumentativa)?',
        alternatives: [
          { id: 'q-caa-1-a', text: '"Alternativa" refere-se a recursos que substituem uma fala ausente; "aumentativa" (também traduzida por alguns autores como "ampliada"), a recursos que complementam uma fala existente, porém insuficiente.', isCorrect: true, feedback: 'Correto. Essa distinção orienta como cada recurso pode ser usado conforme a evolução da fala da pessoa ao longo do tempo.' },
          { id: 'q-caa-1-b', text: 'São sinônimos, sem qualquer diferença conceitual entre eles.', isCorrect: false, feedback: 'Incorreto. Os termos descrevem funções diferentes: substituir versus complementar a fala.' },
          { id: 'q-caa-1-c', text: '"Alternativa" refere-se apenas a sistemas eletrônicos, e "aumentativa" apenas a recursos de papel.', isCorrect: false, feedback: 'Incorreto. A distinção não é sobre o tipo de tecnologia, mas sobre a função em relação à fala existente.' },
          { id: 'q-caa-1-d', text: '"Aumentativa" refere-se ao uso exclusivo por crianças, e "alternativa" ao uso exclusivo por adultos.', isCorrect: false, feedback: 'Incorreto. Ambos os termos se aplicam a qualquer idade, conforme a função comunicativa do recurso.' },
        ],
        correctAlternativeId: 'q-caa-1-a',
        explanation: 'A CAA é "alternativa" quando substitui a fala ausente e "ampliada" quando complementa uma fala existente, mas limitada; um mesmo sistema pode cumprir as duas funções ao longo do tempo.',
        hint: 'Pense na diferença entre "substituir" e "complementar" a fala.',
        relatedConceptId: 'conc-caa',
        referenceId: 'ref-asha-aac',
      },
      {
        id: 'q-caa-2',
        stem: 'Segundo a pesquisa de frequência de vocabulário em usuários de CAA, por que o vocabulário nuclear é priorizado em pranchas iniciais?',
        alternatives: [
          { id: 'q-caa-2-a', text: 'Porque um conjunto relativamente pequeno de palavras de alta frequência (pronomes, verbos, negação, conceitos) é responsável por cerca de 80% do que se fala no cotidiano, servindo a múltiplas funções comunicativas.', isCorrect: true, feedback: 'Correto. Esse achado sustenta a priorização do vocabulário nuclear multifuncional nas pranchas iniciais.' },
          { id: 'q-caa-2-b', text: 'Porque são as palavras mais fáceis de representar em símbolos gráficos realistas.', isCorrect: false, feedback: 'Incorreto. A priorização não se baseia na facilidade de representação gráfica, mas na frequência e versatilidade de uso.' },
          { id: 'q-caa-2-c', text: 'Porque substantivos específicos são sempre mais difíceis de aprender do que verbos e pronomes.', isCorrect: false, feedback: 'Incorreto. A questão não é a dificuldade de aprendizagem, e sim a frequência e a versatilidade funcional das palavras.' },
          { id: 'q-caa-2-d', text: 'Porque crianças pequenas não conseguem compreender verbos ou pronomes.', isCorrect: false, feedback: 'Incorreto. Crianças pequenas compreendem verbos e pronomes desde cedo; a priorização decorre da frequência de uso, não da capacidade de compreensão.' },
        ],
        correctAlternativeId: 'q-caa-2-a',
        explanation: 'A pesquisa de Beukelman, Yorkston, Poblete e Naranjo (1984) mostrou que uma pequena quantidade de palavras de alta frequência compõe a maior parte da comunicação cotidiana, sustentando a priorização do vocabulário nuclear.',
        hint: 'Pense em quais palavras servem para pedir, protestar, comentar e perguntar ao mesmo tempo.',
        relatedConceptId: 'conc-nuclear',
        referenceId: 'ref-beukelman1984',
      },
      {
        id: 'q-caa-3',
        stem: 'Por que a comunicação multimodal (combinação de fala residual, gestos, olhar e símbolos gráficos) não deve ser interpretada como sinal de que o sistema de CAA está mal ajustado?',
        alternatives: [
          { id: 'q-caa-3-a', text: 'Porque o objetivo da CAA é ampliar o repertório expressivo total da pessoa, e não eliminar outros canais de comunicação já eficazes.', isCorrect: true, feedback: 'Correto. A combinação de canais é esperada e legítima, não um sinal de falha do sistema.' },
          { id: 'q-caa-3-b', text: 'Porque, na verdade, o uso de múltiplos canais é sempre proibido pelas diretrizes de CAA.', isCorrect: false, feedback: 'Incorreto. Não há tal proibição; a comunicação multimodal é reconhecida como legítima.' },
          { id: 'q-caa-3-c', text: 'Porque a comunicação multimodal indica que a pessoa não precisa de nenhum sistema formal de CAA.', isCorrect: false, feedback: 'Incorreto. A presença de múltiplos canais não elimina a necessidade de um sistema estruturado e robusto.' },
          { id: 'q-caa-3-d', text: 'Porque apenas crianças pequenas usam comunicação multimodal, o que não se aplica a adultos.', isCorrect: false, feedback: 'Incorreto. A comunicação multimodal ocorre em qualquer idade e perfil de usuário de CAA.' },
        ],
        correctAlternativeId: 'q-caa-3-a',
        explanation: 'A comunicação multimodal deve ser reconhecida como legítima e eficaz; o objetivo da CAA é ampliar o repertório expressivo total da pessoa, não fazê-la abandonar outros canais.',
        hint: 'Pense no objetivo geral da intervenção: ampliar ou restringir canais de expressão?',
        relatedConceptId: 'conc-multimodal',
        referenceId: 'ref-vontetzchner2000',
      },
      {
        id: 'q-caa-4',
        stem: 'Qual é a principal diferença entre seleção direta e varredura (scanning) como métodos de acesso à CAA?',
        alternatives: [
          { id: 'q-caa-4-a', text: 'Na seleção direta, a pessoa toca ou aponta diretamente o símbolo desejado; na varredura, um indicador percorre as opções e a pessoa aciona um comando no momento em que a opção desejada é destacada.', isCorrect: true, feedback: 'Correto. Essa é a distinção central entre método de acesso direto e indireto.' },
          { id: 'q-caa-4-b', text: 'Ambas exigem exatamente os mesmos requisitos motores, sem qualquer diferença prática entre elas.', isCorrect: false, feedback: 'Incorreto. Os requisitos motores diferem: a varredura é indicada justamente quando a seleção direta não é viável.' },
          { id: 'q-caa-4-c', text: 'A varredura é usada apenas com recursos de baixa tecnologia, nunca com dispositivos eletrônicos.', isCorrect: false, feedback: 'Incorreto. A varredura é amplamente utilizada em dispositivos eletrônicos com acionadores.' },
          { id: 'q-caa-4-d', text: 'A seleção direta é usada apenas por adultos, e a varredura apenas por crianças.', isCorrect: false, feedback: 'Incorreto. A escolha do método de acesso depende do perfil motor da pessoa, não da idade.' },
        ],
        correctAlternativeId: 'q-caa-4-a',
        explanation: 'A seleção direta é um método de acesso direto ao símbolo; a varredura é um método indireto, no qual a pessoa aciona um comando no momento em que a opção desejada é destacada por um indicador.',
        hint: 'Pense em "apontar diretamente" versus "esperar o indicador chegar à opção certa".',
        relatedConceptId: 'conc-varredura',
        referenceId: 'ref-beukelman-mirenda',
      },
      {
        id: 'q-caa-5',
        stem: 'Como se diferenciam recursos sem apoio (unaided) e recursos com apoio (aided) na CAA?',
        alternatives: [
          { id: 'q-caa-5-a', text: 'Recursos sem apoio dependem exclusivamente do corpo da pessoa (gestos, sinais); recursos com apoio exigem algum elemento externo, de uma prancha de papel a um dispositivo eletrônico.', isCorrect: true, feedback: 'Correto. Essa é a classificação central quanto à dependência ou não de um recurso externo ao corpo.' },
          { id: 'q-caa-5-b', text: 'Recursos sem apoio são sempre mais avançados tecnologicamente que os recursos com apoio.', isCorrect: false, feedback: 'Incorreto. A classificação não diz respeito ao grau de avanço tecnológico, e sim à dependência de um recurso externo.' },
          { id: 'q-caa-5-c', text: 'Recursos com apoio dispensam qualquer treinamento de parceiros de comunicação.', isCorrect: false, feedback: 'Incorreto. O treinamento de parceiros é relevante independentemente do tipo de recurso utilizado.' },
          { id: 'q-caa-5-d', text: 'Não há diferença relevante entre essas duas categorias.', isCorrect: false, feedback: 'Incorreto. A distinção é central para a classificação e a seleção de recursos de CAA.' },
        ],
        correctAlternativeId: 'q-caa-5-a',
        explanation: 'Recursos sem apoio dependem exclusivamente do corpo da pessoa; recursos com apoio exigem algum elemento externo ao corpo, de uma prancha simples a um dispositivo eletrônico complexo.',
        hint: 'Pense em o que a pessoa precisa (ou não) além do próprio corpo para se comunicar.',
        relatedConceptId: 'conc-semapoio',
        referenceId: 'ref-beukelman-mirenda',
      },
      {
        id: 'q-caa-6',
        stem: 'Qual é a diferença funcional entre vocabulário nuclear e vocabulário periférico em um sistema de CAA?',
        alternatives: [
          { id: 'q-caa-6-a', text: 'O vocabulário nuclear é composto por palavras versáteis de alta frequência aplicáveis a quase qualquer contexto; o periférico é composto majoritariamente por substantivos específicos, de baixa frequência e dependentes do tópico.', isCorrect: true, feedback: 'Correto. Essa diferença orienta o equilíbrio necessário na seleção de vocabulário de uma prancha.' },
          { id: 'q-caa-6-b', text: 'O vocabulário periférico deve sempre ocupar a maior parte de uma prancha inicial de comunicação.', isCorrect: false, feedback: 'Incorreto. Pranchas compostas majoritariamente de vocabulário periférico tendem a restringir a expressão a pedidos concretos.' },
          { id: 'q-caa-6-c', text: 'O vocabulário nuclear é usado apenas em dispositivos de alta tecnologia, nunca em pranchas de papel.', isCorrect: false, feedback: 'Incorreto. O vocabulário nuclear pode e deve estar presente também em recursos de baixa tecnologia.' },
          { id: 'q-caa-6-d', text: 'Não há diferença relevante entre esses dois tipos de vocabulário.', isCorrect: false, feedback: 'Incorreto. A diferença de frequência e função é central para o design de um sistema robusto.' },
        ],
        correctAlternativeId: 'q-caa-6-a',
        explanation: 'O vocabulário nuclear é multifuncional e de alta frequência; o periférico é específico, de baixa frequência e dependente de contexto. Um sistema robusto combina os dois.',
        hint: 'Pense em quais palavras servem "para tudo" e quais servem só "para aquele assunto específico".',
        relatedConceptId: 'conc-periferico',
        referenceId: 'ref-beukelman1984',
      },
      {
        id: 'q-caa-7',
        stem: 'Uma prancha de comunicação inicial foi montada apenas com substantivos (comida, brinquedos, roupas), sem verbos, pronomes ou marcadores de negação. Qual é a limitação mais provável desse design?',
        alternatives: [
          { id: 'q-caa-7-a', text: 'A pessoa provavelmente conseguirá apenas pedir itens específicos, sem conseguir protestar, comentar, perguntar ou relatar eventos.', isCorrect: true, feedback: 'Correto. Essa é a chamada "armadilha dos substantivos", que restringe a expressão a pedidos pontuais.' },
          { id: 'q-caa-7-b', text: 'Não há limitação relevante, pois substantivos são suficientes para qualquer interação comunicativa.', isCorrect: false, feedback: 'Incorreto. Substantivos isolados não sustentam funções comunicativas como protestar, comentar ou relatar.' },
          { id: 'q-caa-7-c', text: 'A limitação seria apenas estética, sem impacto funcional na comunicação da pessoa.', isCorrect: false, feedback: 'Incorreto. O impacto é funcional: a pessoa fica restrita a pedidos concretos de itens.' },
          { id: 'q-caa-7-d', text: 'O problema seria resolvido automaticamente assim que a pessoa aprendesse a ler.', isCorrect: false, feedback: 'Incorreto. A alfabetização não resolve a ausência estrutural de vocabulário nuclear na prancha.' },
        ],
        correctAlternativeId: 'q-caa-7-a',
        explanation: 'Pranchas compostas quase exclusivamente por substantivos limitam a pessoa a pedidos pontuais, sem sustentar protesto, comentário, pergunta ou relato — a chamada "armadilha dos substantivos".',
        hint: 'Pense em quais funções comunicativas dependem de verbos, pronomes e negação, e não apenas de nomes de objetos.',
        relatedConceptId: 'conc-robustez',
        referenceId: 'ref-beukelman1984',
      },
      {
        id: 'q-caa-8',
        stem: 'Uma criança usa seu dispositivo de CAA de forma consistente nas sessões de terapia, mas a família relata que, em casa, ela praticamente não usa o recurso, preferindo puxar as pessoas pelo braço. O que essa diferença sugere com mais probabilidade?',
        alternatives: [
          { id: 'q-caa-8-a', text: 'Falta de modelagem e de acesso constante ao recurso no ambiente doméstico, e não necessariamente incapacidade da criança de usar o sistema.', isCorrect: true, feedback: 'Correto. A ausência de generalização geralmente indica falha de planejamento da implementação em contexto natural, não incapacidade da criança.' },
          { id: 'q-caa-8-b', text: 'Que a criança não tem capacidade cognitiva para usar CAA fora de ambientes estruturados.', isCorrect: false, feedback: 'Incorreto. O desempenho na terapia já demonstra capacidade de uso; o problema está na generalização ao ambiente doméstico.' },
          { id: 'q-caa-8-c', text: 'Que o dispositivo deve ser retirado de circulação até que a criança demonstre motivação espontânea em casa.', isCorrect: false, feedback: 'Incorreto. Retirar o recurso priva a criança de um canal de comunicação e não resolve a falta de modelagem em casa.' },
          { id: 'q-caa-8-d', text: 'Que a família deve ignorar as tentativas de comunicação por gestos para forçar o uso do dispositivo.', isCorrect: false, feedback: 'Incorreto. Ignorar tentativas de comunicação gera frustração e não substitui o treinamento de modelagem.' },
        ],
        correctAlternativeId: 'q-caa-8-a',
        explanation: 'A ausência de uso em casa, apesar do bom desempenho na terapia, costuma indicar falta de modelagem e de acesso constante ao recurso no ambiente doméstico, não incapacidade da criança.',
        hint: 'Pense na diferença entre "não conseguir usar" e "não ter tido oportunidade de aprender a usar em outro contexto".',
        relatedConceptId: 'conc-modelagem',
        referenceId: 'ref-goossens1992',
      },
      {
        id: 'q-caa-9',
        stem: 'Uma pessoa com esclerose lateral amiotrófica (ELA) apresenta perda progressiva de força e coordenação nos membros superiores, mas mantém bom controle do movimento ocular. Qual método de acesso deve ser antecipado no planejamento da CAA?',
        alternatives: [
          { id: 'q-caa-9-a', text: 'Acesso por rastreamento ocular (eye-gaze), planejado antes que a seleção direta manual se torne inviável.', isCorrect: true, feedback: 'Correto. Antecipar essa transição permite que a pessoa participe ativamente da escolha e adaptação do sistema enquanto ainda tem meios amplos de se expressar.' },
          { id: 'q-caa-9-b', text: 'Seleção direta manual, mantida indefinidamente sem qualquer plano de transição.', isCorrect: false, feedback: 'Incorreto. Em quadro progressivo, a seleção direta manual tende a se tornar inviável, exigindo planejamento antecipado de transição.' },
          { id: 'q-caa-9-c', text: 'Varredura assistida por parceiro como única opção permanente, sem considerar tecnologia de rastreamento ocular.', isCorrect: false, feedback: 'Incorreto. O bom controle ocular preservado favorece o uso de rastreamento ocular, que tende a oferecer maior autonomia do que a varredura assistida.' },
          { id: 'q-caa-9-d', text: 'Suspensão de qualquer sistema de CAA até que a fala se torne completamente inviável.', isCorrect: false, feedback: 'Incorreto. Em condições progressivas, o planejamento antecipado é justamente o que permite a participação ativa da pessoa na escolha do sistema.' },
        ],
        correctAlternativeId: 'q-caa-9-a',
        explanation: 'Em condições progressivas como a ELA, o planejamento da CAA deve antecipar mudanças motoras esperadas, introduzindo o rastreamento ocular antes que a seleção direta se torne inviável.',
        hint: 'Pense no que muda ao longo do tempo em uma condição progressiva, e no que precisa ser antecipado.',
        relatedConceptId: 'conc-eyegaze',
        referenceId: 'ref-beukelman-mirenda',
      },
      {
        id: 'q-caa-10',
        stem: 'Os pais de uma criança de 3 anos com atraso de linguagem perguntam se introduzir a CAA vai "atrapalhar" o desenvolvimento da fala oral do filho. Qual é a resposta mais coerente com a evidência disponível?',
        alternatives: [
          { id: 'q-caa-10-a', text: 'Explicar que a evidência disponível indica que a introdução da CAA não atrasa, e pode até favorecer, o desenvolvimento da fala oral, podendo ser usada de forma concomitante ao trabalho de estimulação de fala.', isCorrect: true, feedback: 'Correto. Essa resposta reflete a evidência disponível e combate diretamente um dos mitos mais recorrentes sobre a CAA.' },
          { id: 'q-caa-10-b', text: 'Confirmar a preocupação e recomendar adiar qualquer recurso de CAA até que a criança tente falar por mais alguns anos.', isCorrect: false, feedback: 'Incorreto. Adiar a CAA não é sustentado pela evidência disponível e priva a criança de um canal de comunicação enquanto se aguarda o desenvolvimento da fala.' },
          { id: 'q-caa-10-c', text: 'Informar que a CAA deve substituir totalmente qualquer tentativa de estimular a fala oral a partir de agora.', isCorrect: false, feedback: 'Incorreto. A CAA pode ser usada de forma concomitante ao trabalho sobre a fala oral, não como substituição total automática.' },
          { id: 'q-caa-10-d', text: 'Dizer que essa é uma pergunta sem fundamento e que não há qualquer pesquisa sobre o tema.', isCorrect: false, feedback: 'Incorreto. Há pesquisa relevante sobre o tema, e a pergunta dos pais deve ser respondida com base nela, não descartada.' },
        ],
        correctAlternativeId: 'q-caa-10-a',
        explanation: 'A evidência disponível (Millar; Light; Schlosser, 2006) indica que a CAA não atrasa o desenvolvimento da fala, podendo inclusive favorecê-lo; ela deve ser usada de forma concomitante à estimulação de fala, quando indicado.',
        hint: 'Pense no que a pesquisa sobre esse mito específico já mostrou.',
        relatedConceptId: 'conc-caa',
        referenceId: 'ref-millar2006',
      },
      {
        id: 'q-caa-11',
        stem: 'Uma equipe precisa decidir entre indicar o PECS ou um dispositivo gerador de fala (DGF) para uma criança não-verbal com TEA, boa coordenação motora fina e forte interesse visual por telas. Qual conduta é mais coerente com os princípios de seleção de recursos discutidos neste módulo?',
        alternatives: [
          { id: 'q-caa-11-a', text: 'Avaliar as características específicas da criança (motoras, sensoriais, cognitivas e de interesse) e do contexto disponível (suporte familiar, manutenção) para decidir por feature matching, em vez de assumir que um dos dois sistemas é universalmente superior.', isCorrect: true, feedback: 'Correto. A seleção de recursos deve seguir feature matching, cruzando perfil da pessoa e contexto com as características de cada recurso candidato.' },
          { id: 'q-caa-11-b', text: 'Indicar automaticamente o DGF, já que é tecnologicamente mais avançado que o PECS.', isCorrect: false, feedback: 'Incorreto. Sofisticação tecnológica não é critério suficiente de indicação; é preciso considerar o perfil da pessoa e o contexto de suporte.' },
          { id: 'q-caa-11-c', text: 'Indicar automaticamente o PECS, já que tem mais estudos publicados no total.', isCorrect: false, feedback: 'Incorreto. Volume de publicações sobre um sistema não substitui a avaliação individualizada do perfil da pessoa.' },
          { id: 'q-caa-11-d', text: 'Recusar-se a indicar qualquer recurso até que a criança "demonstre querer" se comunicar sozinha.', isCorrect: false, feedback: 'Incorreto. Essa conduta reproduz o mito de pré-requisitos para a introdução da CAA, sem sustentação na evidência disponível.' },
        ],
        correctAlternativeId: 'q-caa-11-a',
        explanation: 'A escolha entre recursos como PECS e DGF deve seguir o princípio de feature matching, avaliando o perfil específico da pessoa e o contexto de suporte disponível, sem presumir superioridade universal de um sistema sobre o outro.',
        hint: 'Pense no princípio de cruzar características do recurso com o perfil da pessoa, e não em qual sistema é "mais moderno".',
        relatedConceptId: 'conc-pecs',
        referenceId: 'ref-bondyfrost1994',
      },
      {
        id: 'q-caa-12',
        stem: 'A família de um paciente adulto com afasia global recente, sem fala funcional, pergunta se ele "vai ficar assim para sempre" e se ainda vale a pena investir em comunicação. Qual conduta é mais coerente com os princípios éticos discutidos neste módulo?',
        alternatives: [
          { id: 'q-caa-12-a', text: 'Explicar que o prognóstico de fala varia e não pode ser garantido, mas que a comunicação é um direito independente desse prognóstico, e que a CAA pode ampliar a participação do paciente desde já, sem esperar por uma definição total do quadro.', isCorrect: true, feedback: 'Correto. Essa resposta trata a comunicação como direito, coerente com o modelo de competência comunicativa e com os princípios éticos discutidos.' },
          { id: 'q-caa-12-b', text: 'Informar que, sem fala funcional, não há mais nada a ser feito em termos de comunicação.', isCorrect: false, feedback: 'Incorreto. A ausência de fala funcional não elimina a possibilidade de comunicação por meio de CAA.' },
          { id: 'q-caa-12-c', text: 'Prometer à família que o uso de CAA vai garantir a recuperação total da fala em pouco tempo.', isCorrect: false, feedback: 'Incorreto. Prometer recuperação total contraria a variabilidade real de prognóstico e pode gerar expectativas irreais.' },
          { id: 'q-caa-12-d', text: 'Adiar qualquer discussão sobre comunicação até que o prognóstico neurológico esteja definitivamente fechado.', isCorrect: false, feedback: 'Incorreto. Adiar a introdução de CAA reproduz o mito de que ela deve ser reservada como último recurso.' },
        ],
        correctAlternativeId: 'q-caa-12-a',
        explanation: 'A comunicação é um direito independente do prognóstico de fala; a CAA pode ampliar a participação da pessoa desde já, sem que se prometa recuperação nem se adie a intervenção à espera de um prognóstico fechado.',
        hint: 'Pense no princípio de que a comunicação é um direito, não um recurso condicionado ao esgotamento de outras tentativas.',
        relatedConceptId: 'conc-competencia',
        referenceId: 'ref-lightmcnaughton2014',
      },
    ],
    associations: [
      {
        id: 'assoc-caa-1',
        instruction: 'Associe cada recurso ou método de CAA à sua respectiva categoria ou característica.',
        pairs: [
          { id: 'p-caa-1', left: 'PECS', right: 'Sistema de baixa tecnologia estruturado em seis fases, com base na análise do comportamento aplicada' },
          { id: 'p-caa-2', left: 'Dispositivo Gerador de Fala', right: 'Recurso de alta tecnologia com saída de voz sintetizada ou digitalizada' },
          { id: 'p-caa-3', left: 'Gestos naturais', right: 'Recurso sem apoio (unaided), dependente exclusivamente do corpo' },
          { id: 'p-caa-4', left: 'Prancha de papel', right: 'Recurso com apoio de baixa tecnologia' },
          { id: 'p-caa-5', left: 'Rastreamento ocular', right: 'Método de acesso indicado para comprometimento motor grave e generalizado' },
          { id: 'p-caa-6', left: 'Varredura por linha-coluna', right: 'Método de acesso indireto acionado por um comando/acionador' },
          { id: 'p-caa-7', left: 'Colmeia (guia física)', right: 'Adaptação para reduzir ativação acidental na seleção direta' },
        ],
      },
      {
        id: 'assoc-caa-2',
        instruction: 'Associe cada conceito de avaliação e implementação da CAA à sua respectiva descrição prática.',
        pairs: [
          { id: 'p-caa-8', left: 'Modelagem (Aided Language Stimulation)', right: 'Apontar símbolos no sistema enquanto fala com a pessoa, sem exigir resposta imediata' },
          { id: 'p-caa-9', left: 'Vocabulário nuclear', right: 'Palavras de alta frequência aplicáveis a quase qualquer contexto' },
          { id: 'p-caa-10', left: 'Vocabulário periférico', right: 'Substantivos específicos de baixa frequência, dependentes do tópico' },
          { id: 'p-caa-11', left: 'Modelo de Participação', right: 'Compara a participação atual da pessoa com a de pares sem deficiência' },
          { id: 'p-caa-12', left: 'Treinamento de parceiros', right: 'Capacitação estruturada de familiares, professores e cuidadores' },
          { id: 'p-caa-13', left: 'Generalização', right: 'Uso funcional do sistema em novos contextos, pessoas e situações' },
          { id: 'p-caa-14', left: 'Abandono de dispositivo', right: 'Descontinuação do uso associada a mau ajuste ou falta de suporte' },
        ],
      },
    ],
    decisionExercises: [
      {
        id: 'dec-caa-1',
        situation:
          'Uma criança de 4 anos com paralisia cerebral apresenta controle motor voluntário reduzido nos membros superiores, com movimentos involuntários frequentes, mas bom controle ocular e ausência de comprometimento cognitivo aparente na avaliação inicial. A equipe precisa decidir o método de acesso inicial ao sistema de CAA.',
        options: [
          { id: 'dec-caa-1-o1', text: 'Testar diferentes opções de acesso (seleção direta com adaptações como colmeia, varredura assistida por parceiro, rastreamento ocular), observando desempenho, fadiga e preferência da criança antes de decidir.', consequence: 'Permite indicação baseada em desempenho real e tolerância da criança, coerente com o processo de avaliação de acesso e com o princípio de feature matching.', explanation: 'A avaliação de acesso preconiza comparar opções antes de decidir, considerando controle motor, fadiga e contexto, em vez de presumir a melhor opção a priori.', isRecommended: true },
          { id: 'dec-caa-1-o2', text: 'Indicar diretamente um sistema de rastreamento ocular de alta tecnologia, sem testar outras opções, por ser a alternativa mais moderna disponível.', consequence: 'Risco de indicação por sofisticação tecnológica, e não por adequação real testada; o sistema pode ter custo e complexidade desnecessários se a seleção direta adaptada for viável.', explanation: 'A escolha deve seguir feature matching e testagem real, não a "opção mais avançada" disponível no mercado.', isRecommended: false },
          { id: 'dec-caa-1-o3', text: 'Adiar qualquer indicação de CAA até que um neuropsicólogo confirme ausência total de comprometimento cognitivo.', consequence: 'Atraso desnecessário na introdução de um canal de comunicação, contrariando o princípio de ausência de pré-requisitos cognitivos rígidos.', explanation: 'Não há exigência de confirmação cognitiva formal prévia para iniciar a introdução da CAA.', isRecommended: false },
          { id: 'dec-caa-1-o4', text: 'Escolher a prancha de papel mais simples possível, com poucos símbolos, para "não confundir" a criança, mesmo limitando bastante o vocabulário.', consequence: 'Risco de armadilha dos substantivos e de vocabulário insuficiente, limitando o desenvolvimento linguístico da criança.', explanation: 'Simplificação excessiva do vocabulário não é sinônimo de acessibilidade adequada; a prancha precisa ser robusta o suficiente para sustentar diferentes funções comunicativas.', isRecommended: false },
        ],
      },
      {
        id: 'dec-caa-2',
        situation:
          'Um adolescente de 13 anos, com paralisia cerebral e ausência de fala funcional, usa um dispositivo gerador de fala de forma consistente durante as sessões de terapia, mas a escola relata que ele fica a maior parte do tempo sem o dispositivo por perto, e os colegas não sabem como interagir com ele.',
        options: [
          { id: 'dec-caa-2-o1', text: 'Orientar a escola a manter o dispositivo sempre acessível ao estudante em todos os ambientes escolares, e oferecer uma breve capacitação prática a professores e colegas sobre como esperar a resposta e interagir usando o sistema.', consequence: 'Aumenta as oportunidades reais de uso e participação, alinhado ao princípio de que a CAA deve acompanhar a pessoa em todos os contextos.', explanation: 'A participação escolar depende de acesso constante ao recurso e de parceiros capacitados, não apenas do desempenho demonstrado em terapia.', isRecommended: true },
          { id: 'dec-caa-2-o2', text: 'Sugerir que o estudante frequente apenas a sala de recursos, evitando a sala regular até "dominar" o uso do dispositivo.', consequence: 'Reduz oportunidades de comunicação com pares e reforça a exclusão, contrariando o princípio de participação.', explanation: 'Restringir o ambiente não ensina o uso funcional do sistema; a generalização depende de contextos reais e variados.', isRecommended: false },
          { id: 'dec-caa-2-o3', text: 'Manter o dispositivo apenas na sala de terapia, para evitar risco de dano ao equipamento na escola.', consequence: 'Impede a generalização do uso a contextos naturais e reduz a autonomia comunicativa do estudante fora da terapia.', explanation: 'Um recurso indisponível na maior parte do dia contraria o princípio de acesso constante ao sistema de CAA.', isRecommended: false },
          { id: 'dec-caa-2-o4', text: 'Aguardar que os colegas "aprendam sozinhos" a interagir com o estudante, sem qualquer orientação formal da equipe.', consequence: 'Sem orientação, os colegas tendem a manter padrões de interação anteriores (ignorar tentativas ou falar por ele), prejudicando a participação social.', explanation: 'O treinamento de parceiros — incluindo colegas — favorece interações mais competentes e recíprocas.', isRecommended: false },
        ],
      },
    ],
    fictionalCases: [
      {
        id: 'case-caa-1',
        title: 'Caso fictício: Sr. Ivo, 58 anos',
        description:
          'Sr. Ivo tem 58 anos e foi diagnosticado com esclerose lateral amiotrófica (ELA) há cerca de um ano. Apresenta disartria progressiva, com fala ainda parcialmente inteligível, porém com fadiga vocal perceptível ao final do dia. A cognição encontra-se preservada na avaliação atual. Há redução progressiva de força e coordenação nos membros superiores, mas o controle do movimento ocular permanece preservado. Sr. Ivo deseja continuar participando de reuniões de família e de um grupo de leitura semanal.',
        disclaimer:
          'Este é um caso fictício, construído exclusivamente para fins didáticos. Não representa nenhuma pessoa real e não deve ser utilizado como modelo de laudo, indicação definitiva de recurso ou conduta clínica prescritiva. A avaliação e a seleção de recursos reais exigem avaliação presencial completa, equipe multiprofissional e julgamento clínico individualizado.',
        questions: [
          {
            id: 'case-caa-1-q1',
            stem: 'Qual estratégia de planejamento de CAA é mais coerente com o quadro progressivo do Sr. Ivo?',
            alternatives: [
              { id: 'case-caa-1-q1-a', text: 'Introduzir precocemente um sistema de CAA multimodal, incluindo a possibilidade futura de acesso por rastreamento ocular, enquanto o Sr. Ivo ainda pode participar ativamente da escolha e configuração do sistema.', isCorrect: true, feedback: 'Correto. Em condições progressivas, antecipar a introdução da CAA permite que a pessoa participe da decisão enquanto ainda dispõe de meios amplos de se expressar.' },
              { id: 'case-caa-1-q1-b', text: 'Esperar até que a fala se torne totalmente ininteligível para introduzir qualquer recurso, já que ele "ainda fala bem o suficiente".', isCorrect: false, feedback: 'Incorreto. Adiar a introdução até a perda total da fala contraria o princípio de planejamento antecipado em condições progressivas.' },
              { id: 'case-caa-1-q1-c', text: 'Indicar apenas comunicação por escrita manual, já que ele ainda tem alguma força nos membros superiores, sem considerar a progressão esperada da doença.', isCorrect: false, feedback: 'Incorreto. A força nos membros superiores tende a diminuir progressivamente na ELA, exigindo planejamento de métodos de acesso alternativos desde já.' },
              { id: 'case-caa-1-q1-d', text: 'Restringir a intervenção a exercícios para "fortalecer a fala", sem qualquer discussão sobre CAA, para não gerar sofrimento antecipado.', isCorrect: false, feedback: 'Incorreto. Evitar a discussão sobre CAA priva o paciente da oportunidade de planejar e participar da escolha do sistema enquanto ainda é viável.' },
            ],
            correctAlternativeId: 'case-caa-1-q1-a',
            explanation: 'Em condições neurodegenerativas progressivas, o planejamento da CAA deve antecipar as mudanças motoras e de fala esperadas, permitindo que a pessoa participe ativamente da escolha do sistema.',
            hint: 'Pense no que muda ao longo do tempo em uma doença progressiva e no momento certo de antecipar essa mudança.',
            relatedConceptId: 'conc-eyegaze',
            referenceId: 'ref-beukelman-mirenda',
          },
          {
            id: 'case-caa-1-q2',
            stem: 'A esposa do Sr. Ivo pergunta se, ao introduzir o dispositivo de CAA, ele vai "desistir mais rápido de tentar falar". Qual é a resposta mais coerente com a evidência disponível?',
            alternatives: [
              { id: 'case-caa-1-q2-a', text: 'Explicar que a perda de fala na ELA decorre da degeneração progressiva dos neurônios motores responsáveis pela fala, um processo neurológico que não é acelerado pelo uso de CAA; a CAA amplia canais de comunicação e pode ser usada de forma concomitante à fala residual, enquanto ela for funcional.', isCorrect: true, feedback: 'Correto. É importante não confundir esta situação com o mito de que a CAA "atrasa a fala" em crianças em desenvolvimento (Millar; Light; Schlosser, 2006): naquele caso, discute-se a aquisição da fala; aqui, discute-se a perda de uma fala já adquirida por causa neurodegenerativa, um mecanismo diferente, mas para o qual também não há evidência de que a CAA acelere o declínio.' },
              { id: 'case-caa-1-q2-b', text: 'Confirmar a preocupação, recomendando adiar a CAA o máximo possível para preservar a motivação de Sr. Ivo para falar.', isCorrect: false, feedback: 'Incorreto. Adiar a CAA não é sustentado pela evidência disponível e pode reduzir a participação comunicativa do paciente, além de dificultar seu envolvimento na escolha do sistema enquanto ainda tem meios amplos de se expressar.' },
              { id: 'case-caa-1-q2-c', text: 'Afirmar que o uso do dispositivo é obrigatório a partir de agora e que ele deve parar de tentar falar.', isCorrect: false, feedback: 'Incorreto. A CAA complementa a fala residual enquanto ela for funcional; não deve ser imposta como substituição total imediata.' },
              { id: 'case-caa-1-q2-d', text: 'Dizer que não há relação alguma entre fala e CAA, portanto a pergunta da esposa não faz sentido.', isCorrect: false, feedback: 'Incorreto. A pergunta é legítima e deve ser respondida com base no mecanismo real de perda de fala na ELA, não descartada.' },
            ],
            correctAlternativeId: 'case-caa-1-q2-a',
            explanation: 'Na ELA, a perda de fala decorre de degeneração neuromotora progressiva, não de um mecanismo comportamental que a CAA poderia "acelerar"; esse raciocínio é distinto do mito de que a CAA atrasa a aquisição da fala em crianças (Millar; Light; Schlosser, 2006), mas leva à mesma conduta prática: usar a CAA de forma concomitante à fala residual, sem adiar sua introdução.',
            hint: 'Pense na diferença entre "atrasar a aquisição" da fala (contexto infantil) e "acelerar a perda" de uma fala já adquirida (contexto neurodegenerativo) — são mecanismos diferentes.',
            relatedConceptId: 'conc-caa',
            referenceId: 'ref-beukelman-mirenda',
          },
          {
            id: 'case-caa-1-q3',
            stem: 'Qual conduta é mais coerente com os princípios éticos discutidos quanto à autonomia do Sr. Ivo na escolha do sistema de CAA?',
            alternatives: [
              { id: 'case-caa-1-q3-a', text: 'Envolver o Sr. Ivo ativamente nas decisões sobre o sistema (símbolos, voz sintetizada, prioridades de vocabulário) enquanto ele ainda tem meios amplos de expressar preferências, documentando essas escolhas para orientar ajustes futuros.', isCorrect: true, feedback: 'Correto. Essa conduta respeita a autonomia do paciente e é coerente com o modelo de competência comunicativa centrado na pessoa.' },
              { id: 'case-caa-1-q3-b', text: 'Decidir todo o sistema apenas com a família, sem consultar diretamente o Sr. Ivo, para "não sobrecarregá-lo".', isCorrect: false, feedback: 'Incorreto. Excluir o paciente da decisão sobre seu próprio sistema de comunicação contraria o princípio de autonomia.' },
              { id: 'case-caa-1-q3-c', text: 'Adotar o sistema mais usado por outros pacientes com ELA no serviço, independentemente das preferências do Sr. Ivo.', isCorrect: false, feedback: 'Incorreto. A seleção deve seguir feature matching e as preferências individuais, não a popularidade do sistema entre outros pacientes.' },
              { id: 'case-caa-1-q3-d', text: 'Deixar a decisão inteiramente a cargo do fabricante do dispositivo.', isCorrect: false, feedback: 'Incorreto. A decisão deve envolver a equipe terapêutica, a família e, sobretudo, o próprio Sr. Ivo, não terceiros externos ao cuidado.' },
            ],
            correctAlternativeId: 'case-caa-1-q3-a',
            explanation: 'Respeitar a autonomia do Sr. Ivo significa envolvê-lo ativamente nas decisões sobre seu próprio sistema de comunicação, enquanto ele ainda dispõe de meios amplos de expressar suas preferências.',
            hint: 'Pense em quem deveria estar no centro da decisão sobre o próprio sistema de comunicação da pessoa.',
            relatedConceptId: 'conc-competencia',
            referenceId: 'ref-lightmcnaughton2014',
          },
        ],
      },
    ],
    branchingCases: [
      {
        id: 'bc-caa-enzo',
        title: 'Decisão Clínicas: Enzo e a Introdução da CAA',
        description: 'Enzo, 6 anos, diagnóstico de TEA, é não-verbal. Apresenta comportamento irritável, grita e morde as mãos quando quer obter brinquedos ou comida, pois não consegue se fazer entender.',
        startSceneId: 'scene-enzo-start',
        scenes: [
          {
            id: 'scene-enzo-start',
            title: '1. Acolhimento e Primeira Escolha de Recurso',
            text: 'Dona Clara, mãe de Enzo, traz o menino à clínica. Ela relata que a rotina doméstica é caótica devido às crises de choro e mordaças. Enzo não faz contato visual sustentado e ignora ordens verbais simples. Qual é a sua conduta inicial em relação à comunicação alternativa?',
            choices: [
              {
                text: 'Aplicar testes cognitivos rígidos para garantir que Enzo compreende causa-efeito e permanência de objeto antes de apresentar qualquer símbolo.',
                feedback: 'Enzo se recusa a realizar as tarefas cognitivas descontextualizadas de empilhar blocos ou achar brinquedos escondidos. Ele chora intensamente e morde a própria mão de frustração.',
                nextSceneId: 'scene-enzo-cognition-fail',
                isRecommended: false
              },
              {
                text: 'Introduzir imediatamente uma atividade lúdica motivadora (ex: bolhas de sabão) associada a uma prancha visual simples para que ele possa solicitar "mais" ou "parar".',
                feedback: 'Muito bem! Enzo demonstra interesse pelas bolhas. Ao ver você apontar para a prancha e liberar o brinquedo, ele rapidamente entende a associação prática e começa a olhar para os símbolos.',
                nextSceneId: 'scene-enzo-vocab-design',
                isRecommended: true
              }
            ]
          },
          {
            id: 'scene-enzo-cognition-fail',
            title: 'Redirecionando Diante da Crise',
            text: 'Após a crise provocada pelos testes cognitivos formais, Enzo está sob alto estresse. Para restaurar o vínculo e abrir um canal de comunicação, qual o seu próximo passo?',
            choices: [
              {
                text: 'Abandonar os testes de pré-requisito e propor uma brincadeira de causa-efeito natural (como empurrar um carrinho de fricção), usando uma imagem simples de "IR" para ativar o movimento.',
                feedback: 'Excelente escolha. Enzo se acalma brincando com o carrinho e passa a apontar para a imagem de "IR" para fazer o brinquedo andar, estabelecendo a comunicação funcional sem pré-requisitos formais.',
                nextSceneId: 'scene-enzo-vocab-design',
                isRecommended: true
              },
              {
                text: 'Orientar a mãe a levá-lo de volta para casa e remarcar a sessão apenas quando ele estiver medicado ou mais calmo.',
                feedback: 'Conduta inadequada. A frustração de Enzo é de base comunicativa; suspender a terapia atrasa o suporte e mantém o comportamento autolesivo ativo.',
                nextSceneId: 'scene-enzo-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'scene-enzo-vocab-design',
            title: '2. Estruturação do Vocabulário da Prancha',
            text: 'Enzo já aprendeu a solicitar itens preferidos. Agora você precisa projetar a prancha definitiva de comunicação dele para uso cotidiano na escola e em casa. Qual design de vocabulário você adota?',
            choices: [
              {
                text: 'Criar uma prancha baseada em Vocabulário Essencial (Core Vocabulary), contendo verbos, pronomes e interações (quero, não, mais, ajudar, olhar, ir).',
                feedback: 'Escolha correta! Esse vocabulário dá a Enzo ferramentas flexíveis para se expressar em qualquer lugar, não apenas pedindo coisas, mas protestando, chamando a atenção e comentando.',
                nextSceneId: 'scene-enzo-family-integration',
                isRecommended: true
              },
              {
                text: 'Desenhar uma prancha baseada estritamente em substantivos categorizados (comidas, brinquedos, cômodos da casa), ocultando verbos para evitar confusão.',
                feedback: 'Decisão limitada. Enzo aprende a pedir coisas físicas específicas, mas não consegue expressar ações, sentimentos ou protestar ("não quero"), mantendo crises quando contrariado.',
                nextSceneId: 'scene-enzo-nouns-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'scene-enzo-nouns-fail',
            title: 'Expandindo Além dos Substantivos',
            text: 'Enzo ficou restrito aos pedidos de comida e brinquedos com a prancha de substantivos, mantendo crises de agressividade quando quer sair de um ambiente ou rejeitar algo. Como contornar?',
            choices: [
              {
                text: 'Substituir a prancha por um design centrado em Vocabulário Essencial (Core), adicionando conceitos de protesto ("não", "diferente", "parar") de forma visível.',
                feedback: 'Perfeito. Ao ter acesso ao símbolo "NÃO", Enzo passa a apontar para ele em vez de morder a mão para rejeitar uma atividade física, diminuindo as crises.',
                nextSceneId: 'scene-enzo-family-integration',
                isRecommended: true
              },
              {
                text: 'Manter a prancha de substantivos e acrescentar mais fotos de objetos e comidas para mantê-lo ocupado.',
                feedback: 'O aumento de substantivos não resolve a carência de funções pragmáticas da linguagem. Enzo continua frustrado e agressivo diante de atividades escolares abstratas.',
                nextSceneId: 'scene-enzo-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'scene-enzo-family-integration',
            title: '3. Treinamento Familiar e Generalização',
            text: 'A prancha de Enzo está bem estruturada. Contudo, Dona Clara relata que ele a usa na clínica, mas em casa a ignora e continua puxando-a pelo braço para conseguir o que quer. Qual orientação você dá para garantir a generalização em casa?',
            choices: [
              {
                text: 'Ensinar Dona Clara a realizar a Modelagem (Aided Language Input), apontando para a prancha de Enzo enquanto conversa com ele no dia a dia, sem obrigá-lo a responder na prancha de imediato.',
                feedback: 'Excelente! Ao ver a mãe usando os símbolos na rotina doméstica, Enzo passa a imitar e a usar a prancha espontaneamente em casa para expressar seus desejos.',
                nextSceneId: 'scene-enzo-success',
                isRecommended: true
              },
              {
                text: 'Instruir Dona Clara a trancar a prancha no armário e só entregá-la quando Enzo fizer um pedido verbal ou contato visual perfeito.',
                feedback: 'Punição ineficaz. Sem modelo doméstico e sem acesso físico contínuo ao seu sistema de comunicação ("sua voz"), as crises de morder a mão reaparecem com severidade.',
                nextSceneId: 'scene-enzo-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'scene-enzo-success',
            title: 'Fim de Simulação — Sucesso Clínico',
            text: 'Parabéns! Você introduziu a Comunicação Alternativa com base no direito básico de Enzo se fazer compreender, sem barreiras cognitivas artificiais de pré-requisito. Ao projetar o vocabulário centrado em palavras essenciais (Core) e treinar Dona Clara na técnica de modelagem natural, você garantiu autonomia comunicativa real e a redução drástica das crises comportamentais do paciente.',
            choices: []
          },
          {
            id: 'scene-enzo-end-fail',
            title: 'Fim de Simulação — Conduta Inadequada',
            text: 'A introdução da CAA falhou por atraso injustificado devido a testes de pré-requisitos cognitivos descontextualizados ou por imposição rígida sem treinamento de modelagem familiar. Lembre-se de que a comunicação deve ser acessível e modelada naturalmente por parceiros reais.',
            choices: []
          }
        ]
      }
    ],
  },

  review: {
    flashcards: [
      { id: 'fc-caa-f1', front: 'A CAA atrasa o desenvolvimento da fala espontânea?', back: 'Não. A evidência disponível (Millar; Light; Schlosser, 2006) indica que a introdução da CAA não atrasa e pode até favorecer a emergência da fala.', tags: ['mitos', 'desenvolvimento'] },
      { id: 'fc-caa-f2', front: 'É necessário confirmar habilidades cognitivas mínimas antes de introduzir a CAA?', back: 'Não. Romski e Sevcik (2005), em revisão de literatura lida na íntegra nesta auditoria, rejeitam a exigência de pré-requisitos cognitivos fixos, como noção de causa e efeito, para iniciar a CAA.', tags: ['mitos', 'avaliacao'] },
      { id: 'fc-caa-f3', front: 'O que é vocabulário nuclear (core vocabulary)?', back: 'Um conjunto relativamente pequeno de palavras de alta frequência (pronomes, verbos, negação, conceitos) responsável por cerca de 80% da comunicação cotidiana (Beukelman et al., 1984).', tags: ['vocabulario'] },
      { id: 'fc-caa-f4', front: 'O que é vocabulário periférico (fringe)?', back: 'Palavras de baixa frequência, majoritariamente substantivos específicos, dependentes de contexto e tópico.', tags: ['vocabulario'] },
      { id: 'fc-caa-f5', front: 'Por que a "armadilha dos substantivos" limita a comunicação?', back: 'Porque restringe a pessoa a pedidos de itens específicos, sem permitir protestar, comentar, perguntar ou relatar eventos.', tags: ['vocabulario', 'design'] },
      { id: 'fc-caa-f6', front: 'O que caracteriza um recurso sem apoio (unaided)?', back: 'Depende exclusivamente do corpo da pessoa, como gestos, expressões faciais ou sinais, sem exigir nenhum recurso externo.', tags: ['classificacao'] },
      { id: 'fc-caa-f7', front: 'O que caracteriza um recurso com apoio (aided)?', back: 'Exige algum recurso externo ao corpo, de uma prancha de papel a um dispositivo eletrônico complexo.', tags: ['classificacao'] },
      { id: 'fc-caa-f8', front: 'O que é o PECS e em que princípio se baseia?', back: 'Sistema de comunicação por troca de figuras, estruturado em seis fases progressivas, baseado na análise do comportamento aplicada (Bondy; Frost, 1994).', tags: ['pecs'] },
      { id: 'fc-caa-f9', front: 'O que é modelagem em CAA (aided language stimulation)?', back: "Técnica em que o parceiro aponta para os símbolos do sistema da pessoa enquanto fala com ela, sem exigir resposta imediata (Goossens'; Crain; Elder, 1992).", tags: ['modelagem'] },
      { id: 'fc-caa-f10', front: 'Por que a modelagem é comparada à aquisição da fala falada?', back: 'Porque, assim como uma criança ouve milhares de palavras antes de falar, a pessoa que usa CAA se beneficia de ver o sistema sendo usado de forma significativa antes de utilizá-lo ativamente.', tags: ['modelagem'] },
      { id: 'fc-caa-f11', front: 'O que propõe o Modelo de Participação de Beukelman e Mirenda?', back: 'Compara a participação atual da pessoa em suas rotinas com a de pares sem deficiência, identificando barreiras de oportunidade e de acesso separadamente.', tags: ['avaliacao'] },
      { id: 'fc-caa-f12', front: 'Qual a diferença entre barreiras de oportunidade e barreiras de acesso?', back: 'Barreiras de oportunidade são impostas pelo ambiente, por parceiros ou políticas; barreiras de acesso decorrem das capacidades motoras, sensoriais, cognitivas e linguísticas da própria pessoa.', tags: ['avaliacao', 'barreiras'] },
      { id: 'fc-caa-f13', front: 'O que é feature matching na seleção de recursos de CAA?', back: 'Cruzar as características de cada recurso candidato com o perfil específico da pessoa, em vez de indicar por popularidade ou modernidade do recurso.', tags: ['selecao'] },
      { id: 'fc-caa-f14', front: 'O que é seleção direta como método de acesso?', back: 'Método em que a pessoa toca, aponta ou pressiona diretamente o símbolo desejado, geralmente mais rápido quando a condição motora permite.', tags: ['acesso'] },
      { id: 'fc-caa-f15', front: 'O que é varredura (scanning) e quando é indicada?', back: 'Método indireto em que um indicador percorre as opções e a pessoa aciona um comando no momento certo; indicada quando a seleção direta não é viável.', tags: ['acesso'] },
      { id: 'fc-caa-f16', front: 'O que é acesso por rastreamento ocular (eye-gaze)?', back: 'Método que permite selecionar símbolos pelo movimento dos olhos, captado por sensores infravermelhos; relevante em comprometimento motor grave e generalizado, como na ELA avançada.', tags: ['acesso'] },
      { id: 'fc-caa-f17', front: 'Quais fatores estão associados ao abandono de dispositivos de CAA?', back: 'Treinamento insuficiente de parceiros, mau ajuste entre exigências do recurso e perfil da pessoa, baixa eficiência de resposta e falta de suporte técnico contínuo (Johnston; Evans, 2005).', tags: ['abandono'] },
      { id: 'fc-caa-f18', front: 'O que caracteriza, de forma geral, o modelo de instrução de parceiros de Kent-Walsh e McNaughton (2005)?', back: 'Uma sequência estruturada que combina explicação, demonstração e prática guiada com feedback para capacitar parceiros de comunicação (descrição detalhada confirmada apenas por fontes secundárias, não pelo texto integral do artigo).', tags: ['treino-parceiro'] },
      { id: 'fc-caa-f19', front: 'Qual foi o achado da metanálise de Kent-Walsh et al. (2015) sobre instrução de parceiros?', back: 'A instrução estratégica estruturada apresentou tamanho de efeito muito elevado sobre o comportamento dos parceiros de comunicação.', tags: ['treino-parceiro', 'evidencia'] },
      { id: 'fc-caa-f20', front: 'Quais são os quatro domínios da competência comunicativa em CAA segundo Light e McNaughton (2014)?', back: 'Competência linguística, operacional, social e estratégica.', tags: ['competencia'] },
      { id: 'fc-caa-f21', front: 'Por que a competência comunicativa não depende só de habilidades individuais?', back: 'Porque também é influenciada por fatores psicossociais (motivação, confiança) e por barreiras e apoios do ambiente.', tags: ['competencia'] },
      { id: 'fc-caa-f22', front: 'Por que a implementação da CAA deve ocorrer em contextos naturais?', back: 'Para favorecer a generalização do uso a diferentes pessoas, ambientes e situações comunicativas, evitando que o uso fique restrito à sala de terapia.', tags: ['generalizacao'] },
      { id: 'fc-caa-f23', front: 'Por que dispositivos de alta tecnologia exigem cautela na indicação?', back: 'Porque dependem de energia, manutenção, suporte técnico contínuo e recursos financeiros, o que exige avaliar a sustentabilidade real no contexto de vida da pessoa.', tags: ['altatec'] },
      { id: 'fc-caa-f24', front: 'Por que a CAA deve ser planejada precocemente em doenças neurodegenerativas progressivas, como a ELA?', back: 'Para que a pessoa participe ativamente da escolha do sistema enquanto ainda dispõe de meios amplos de expressar suas preferências, antes que a comunicação por fala se torne inviável.', tags: ['caa-adultos'] },
      { id: 'fc-caa-f25', front: 'Comunicação multimodal deve ser vista como sinal de sistema mal ajustado?', back: 'Não. O uso combinado de fala residual, gestos, olhar e símbolos gráficos é legítimo e esperado; o objetivo da CAA é ampliar o repertório expressivo total, não eliminar outros canais.', tags: ['multimodal'] },
      { id: 'fc-caa-f26', front: 'Por que a CAA não deve ser tratada como "último recurso"?', back: 'Porque a comunicação é um direito, e postergar a introdução da CAA priva a pessoa de meios de participação social enquanto se aguarda o esgotamento de tentativas com a fala oral.', tags: ['etica', 'mitos'] },
    ],
    finalSynthesis:
      'A Comunicação Aumentativa e Alternativa (CAA) reúne recursos, estratégias e sistemas — de gestos naturais a dispositivos geradores de fala com acesso por rastreamento ocular — voltados a pessoas sem fala funcional ou com fala insuficiente para suas necessidades comunicativas. Sua indicação não deve depender de diagnóstico isolado, idade mínima ou pré-requisitos cognitivos fixos, mas de uma avaliação funcional que, seguindo o Modelo de Participação de Beukelman e Mirenda, compara a participação atual da pessoa à de pares sem deficiência, distinguindo barreiras de oportunidade das barreiras de acesso motoras, sensoriais, cognitivas e linguísticas. A seleção de recursos deve equilibrar vocabulário nuclear e periférico, evitar a armadilha dos substantivos e considerar cuidadosamente o método de acesso — seleção direta, varredura ou rastreamento ocular — mais compatível com o perfil da pessoa, sem presumir indicação universal de nenhum sistema. O sucesso da CAA depende decisivamente do treinamento de parceiros de comunicação — família, escola, cuidadores — em estratégias como a modelagem (aided language stimulation), e da manutenção do recurso acessível em todos os contextos naturais da vida da pessoa, para favorecer a generalização e prevenir o abandono do dispositivo. A evidência disponível refuta mitos recorrentes: a CAA não atrasa a fala, não deve ser reservada como último recurso, e a competência comunicativa de quem a utiliza depende tanto de suas habilidades quanto do apoio e das oportunidades oferecidas pelo ambiente. Em crianças e em adultos, em condições do neurodesenvolvimento ou adquiridas, o fio condutor permanece o mesmo desta plataforma: decisões responsáveis nascem da avaliação individualizada, da escuta das preferências da pessoa e da integração entre pessoa, família e equipe — nunca da aplicação automática de um protocolo ou de um dispositivo específico.',
  },

  references: [
    {
      id: 'ref-asha-aac',
      authors: 'American Speech-Language-Hearing Association (ASHA)',
      title: 'Augmentative and Alternative Communication (AAC) — Practice Portal',
      source: 'Documento institucional contínuo, sem edição datada fixa. REFERÊNCIA NÃO CONFIRMADA EM TEXTO INTEGRAL NESTA AUDITORIA — REVISÃO HUMANA NECESSÁRIA: o acesso direto à página (asha.org) foi bloqueado (HTTP 403) em todas as tentativas desta auditoria; usada neste módulo apenas como referência geral e institucional para a definição de CAA (recursos de baixa a alta tecnologia, sem exigir substituição total da fala), não como sustentação principal de nenhuma afirmação normativa específica. A afirmação sobre ausência de pré-requisitos cognitivos para introduzir a CAA é sustentada, nesta versão do módulo, por Romski e Sevcik (2005), confirmado em texto integral — não mais por esta referência. Ano refere-se à data de acesso desta auditoria (2026), não à data de publicação/revisão original do documento.',
      year: 2026,
      usedIn: ['learn.summary', 'apply.questions'],
    },
    {
      id: 'ref-beukelman-mirenda',
      authors: 'BEUKELMAN, David R.; MIRENDA, Pat.',
      title: 'Augmentative and Alternative Communication: Supporting Children and Adults with Complex Communication Needs',
      source: '4. ed. Baltimore: Paul H. Brookes Publishing, 2013. Acesso parcial nesta auditoria: descrição do Modelo de Participação e da classificação sem apoio/com apoio confirmada via busca; texto integral não lido.',
      year: 2013,
      usedIn: ['learn.summary', 'learn.essentialConcepts', 'apply.questions', 'apply.fictionalCases'],
    },
    {
      id: 'ref-beukelman1984',
      authors: 'BEUKELMAN, David R.; YORKSTON, Kathryn M.; POBLETE, Marcela; NARANJO, Carlos.',
      title: 'Frequency of Word Occurrence in Communication Samples Produced by Adult Communication Aid Users',
      source: 'Journal of Speech and Hearing Disorders, v. 49, p. 360-367, 1984. Acesso parcial nesta auditoria: achado geral confirmado via busca; texto integral não lido.',
      year: 1984,
      usedIn: ['learn.summary', 'learn.evidence', 'learn.limitations', 'apply.questions'],
    },
    {
      id: 'ref-goossens1992',
      authors: "GOOSSENS', Carol; CRAIN, Sharon; ELDER, Pamela.",
      title: 'Engineering the Preschool Environment for Interactive, Symbolic Communication (Aided Language Stimulation)',
      source: 'Clinician Series. Birmingham: Southeast Augmentative Communication Conference Publications, 1992. Acesso parcial nesta auditoria: descrição da técnica confirmada via fontes secundárias (busca); texto integral não lido.',
      year: 1992,
      usedIn: ['learn.summary', 'learn.essentialConcepts', 'learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-lightmcnaughton2014',
      authors: 'LIGHT, Janice; MCNAUGHTON, David.',
      title: 'Communicative Competence for Individuals who Require Augmentative and Alternative Communication: A New Definition for a New Era of Communication?',
      source: 'Augmentative and Alternative Communication, v. 30, n. 1, p. 1-18, 2014. Acesso integral nesta auditoria: artigo lido na íntegra (definição original de Light, 1989, e sua expansão em 2003 para fatores psicossociais e barreiras/apoios ambientais, confirmadas).',
      year: 2014,
      doi: '10.3109/07434618.2014.885080',
      usedIn: ['learn.summary', 'learn.essentialConcepts', 'learn.evidence', 'apply.questions', 'apply.fictionalCases'],
    },
    {
      id: 'ref-bondyfrost1994',
      authors: 'BONDY, Andy S.; FROST, Lori A.',
      title: 'The Picture Exchange Communication System',
      source: 'Focus on Autistic Behavior, v. 9, n. 3, p. 1-19, 1994. Acesso parcial nesta auditoria: descrição das seis fases e base em ABA confirmadas via busca; texto integral não lido.',
      year: 1994,
      usedIn: ['learn.summary', 'learn.essentialConcepts', 'learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-kentwalsh2004',
      authors: 'KENT-WALSH, Jennifer; MCNAUGHTON, David.',
      title: 'Communication Partner Instruction in AAC: Present Practices and Future Directions',
      source: 'Augmentative and Alternative Communication, v. 21, n. 3, p. 195-204, 2005. Data resolvida nesta auditoria: o "2004" que aparecia em citações anteriores é apenas um artefato do número do DOI (10.1080/07434610400006646), não o ano de publicação; ano de publicação 2005, volume 21, fascículo 3, páginas 195-204, confirmados de forma independente em duas fontes institucionais (página do periódico via Tandfonline e repositório institucional Penn State PURE). REFERÊNCIA NÃO CONFIRMADA EM TEXTO INTEGRAL NESTA AUDITORIA — REVISÃO HUMANA NECESSÁRIA quanto à descrição detalhada do modelo de oito etapas: o artigo é pago e o acesso direto (Tandfonline, Academia.edu) foi bloqueado nesta auditoria; a descrição do modelo (explicação, demonstração, prática guiada com feedback, prática independente) baseia-se em paráfrase de fontes secundárias, não na leitura direta do texto integral.',
      year: 2005,
      usedIn: ['learn.summary'],
    },
    {
      id: 'ref-kentwalsh2015meta',
      authors: 'KENT-WALSH, Jennifer; MURZA, Kimberly A.; MALANI, Manisha D.; BINGER, Cathy.',
      title: 'Effects of Communication Partner Instruction on the Communication of Individuals Using AAC: A Meta-Analysis',
      source: 'Augmentative and Alternative Communication, v. 31, n. 4, p. 271-284, 2015. Paginação resolvida nesta auditoria: a numeração "1-14", vista em algumas citações secundárias, corresponde à publicação eletrônica antecipada (ahead-of-print); a paginação definitiva do fascículo impresso — 31(4), 271-284 — foi confirmada de forma independente na própria página do periódico (Tandfonline, título "Vol 31, No 4") e em base de citação de referência. Acesso parcial nesta auditoria: metodologia (17 estudos de caso único, 53 participantes) confirmada via busca; texto integral não lido.',
      year: 2015,
      usedIn: ['learn.summary', 'learn.evidence'],
    },
    {
      id: 'ref-johnstonevans2005',
      authors: 'JOHNSTON, Susan S.; EVANS, Joanna.',
      title: 'Considering Response Efficiency as a Strategy to Prevent Assistive Technology Abandonment',
      source: 'Journal of Special Education Technology, v. 20, n. 3, p. 45-50, 2005. Acesso parcial nesta auditoria: resumo e fatores de abandono confirmados via busca; texto integral não lido.',
      year: 2005,
      usedIn: ['learn.summary', 'learn.evidence', 'learn.glossary'],
    },
    {
      id: 'ref-romskisevcik2005',
      authors: 'ROMSKI, MaryAnn; SEVCIK, Rose A.',
      title: 'Augmentative Communication and Early Intervention: Myths and Realities',
      source: 'Infants & Young Children, v. 18, n. 3, p. 174-185, 2005. Acesso integral nesta auditoria: artigo lido na íntegra. Os seis mitos listados pelos autores (Tabela 1) são: (1) CAA é "último recurso"; (2) CAA impede/interrompe o desenvolvimento da fala; (3) a criança precisa de um conjunto mínimo de habilidades para se beneficiar da CAA; (4) dispositivos geradores de fala servem só a crianças com cognição intacta; (5) existe idade mínima para se beneficiar da CAA; (6) há uma hierarquia representacional obrigatória de símbolos (de objetos a palavras escritas).',
      year: 2005,
      usedIn: ['learn.summary', 'learn.evidence'],
    },
    {
      id: 'ref-millar2006',
      authors: 'MILLAR, D. C.; LIGHT, J. C.; SCHLOSSER, R. W.',
      title: 'The Impact of Augmentative and Alternative Communication Intervention on the Speech Production of Individuals With Developmental Disabilities: A Research Review',
      source: 'Journal of Speech, Language, and Hearing Research, 49(2), 248-264, 2006. REFERÊNCIA NÃO CONFIRMADA EM TEXTO INTEGRAL NESTA AUDITORIA — REVISÃO HUMANA NECESSÁRIA: o artigo original é pago (ASHA/JSLHR) e não foi possível acessá-lo diretamente (bloqueios de acesso em pubs.asha.org e ResearchGate). O achado quantitativo central (23 estudos, 67 participantes; entre os 27 casos de melhor evidência: 89% com aumento de fala, 11% sem mudança, 0% com redução) foi triangulado de forma consistente em três fontes secundárias independentes (resumo estruturado do PubMed; resumo estruturado NCBI Bookshelf/DARE; e uma planilha de síntese de pesquisa em CAA que cita a mesma tríade de percentuais) — mas os métodos e a discussão completos do artigo permanecem não lidos.',
      year: 2006,
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions', 'apply.fictionalCases'],
    },
    {
      id: 'ref-sennott2016',
      authors: 'SENNOTT, Samuel C.; LIGHT, Janice C.; MCNAUGHTON, David.',
      title: 'AAC Modeling Intervention Research Review',
      source: 'Research and Practice for Persons with Severe Disabilities, v. 41, n. 2, p. 101-115, 2016. DOI: 10.1177/1540796916638822. Correção desta auditoria: o título, periódico e páginas citados em versão anterior deste módulo ("AAC modeling with individuals with autism spectrum disorder", American Journal of Speech-Language Pathology, 25(2), 129-141) estavam incorretos e foram substituídos pela citação correta, confirmada em leitura integral do artigo. Acesso integral nesta auditoria: artigo lido na íntegra (10 estudos: 9 de caso único, 31 participantes, 70 réplicas; 1 desenho de grupo quase-experimental, 63 participantes; PND geral de 90,6%; parceiros incluíram fonoaudiólogos, pais e auxiliares educacionais; diagnósticos heterogêneos — paralisia cerebral, síndrome de Down, autismo, entre outros).',
      year: 2016,
      usedIn: ['learn.summary', 'learn.evidence'],
    },
    {
      id: 'ref-panorama-caa-brasil',
      authors: 'CESA, Carla Ciceri; MOTA, Helena Bolli.',
      title: 'Comunicação Aumentativa e Alternativa: Panorama dos Periódicos Brasileiros',
      source: 'Revista CEFAC, 2015 Jan-Fev; 17(1):264-269. DOI: 10.1590/1982-021620150114. Acesso integral nesta auditoria: artigo lido na íntegra. Cita literalmente (p. 266): "Para fins metodológicos, o presente estudo adotada a nômina Comunicação Aumentativa e Alternativa, preconizada pela ISAAC". O artigo confirma, na íntegra, a lista de variantes terminológicas em uso na literatura brasileira (Comunicação Alternativa e Suplementar, Comunicação Alternativa, Comunicação Suplementar e/ou Alternativa, Sistemas Alternativos e Facilitadores de Comunicação, Comunicação Suplementar, Comunicação Alternativa e Ampliada — este último usado na versão anterior deste módulo).',
      year: 2015,
      doi: '10.1590/1982-021620150114',
      usedIn: ['learn.limitations'],
    },
    {
      id: 'ref-vontetzchner2000',
      authors: 'VON TETZCHNER, Stephen; MARTINSEN, Harald.',
      title: 'Introdução à Comunicação Aumentativa e Alternativa',
      source: 'Trad. Ana André. Porto: Porto Editora, 2000. (Coleção Educação Especial, 10). Acesso parcial nesta auditoria: dados bibliográficos confirmados via busca (Google Livros, catálogo de biblioteca); texto integral não lido.',
      year: 2000,
      usedIn: ['learn.summary', 'apply.questions'],
    },
  ],
}
