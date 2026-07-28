import { defineFonoLabModule } from '@/methodology/fonolab'

export const moduloBasesNeurobiologicas = defineFonoLabModule({
  id: 'mod-transtornos-linguagem-bases-neurobiologicas',
  slug: 'bases-neurobiologicas-transtornos-linguagem',
  title: 'Bases Neurobiológicas dos Transtornos de Linguagem',
  description:
    'Modelos neurobiológicos, genéticos e cognitivos associados aos transtornos do desenvolvimento da linguagem, reconhecendo a heterogeneidade dos achados, os limites das evidências disponíveis e a impossibilidade de explicar o quadro por uma única causa.',
  order: 3,
  learningObjective:
    'Compreender os principais modelos neurobiológicos, genéticos e cognitivos associados aos transtornos do desenvolvimento da linguagem, reconhecendo a heterogeneidade dos achados, os limites das evidências disponíveis e a impossibilidade de explicar o quadro por uma única causa.',
  prerequisiteKnowledge: [
    'Módulo 1: Características dos transtornos específicos de linguagem',
    'Módulo 2: Aspectos linguísticos dos transtornos de linguagem',
  ],
  estimatedTimeMinutes: 180,
  difficulty: 'advanced',
  status: 'published',

  learn: {
    summary: [
      {
        id: 'sum-tl3-1',
        text: 'O Transtorno do Desenvolvimento da Linguagem (TDL) não decorre de uma única causa identificável: é o resultado de múltiplos fatores biológicos, genéticos, cognitivos e ambientais que interagem entre si ao longo do desenvolvimento. Este módulo revisa o que a literatura científica atualmente sustenta sobre as bases neurobiológicas do TDL, com atenção especial aos limites de cada tipo de evidência, à heterogeneidade dos achados entre estudos e à distinção entre achado de grupo (que descreve padrões estatísticos em amostras) e marcador individual (que permitiria decidir sobre uma criança específica).',
      },
      {
        id: 'sum-tl3-2',
        text: 'Um ponto de partida importante é a genética comportamental. Estudos com gêmeos mostram que o TDL tem um componente hereditário substancial: Bishop (2006) relata estimativas de herdabilidade tipicamente entre 0,5 e 0,75 em crianças em idade escolar, o que indica que uma parcela relevante da variação no risco de TDL entre indivíduos é explicada por fatores genéticos. Esse valor, no entanto, está longe de 1,0: ele deixa espaço substancial para influências ambientais e para a própria imprecisão da medida em populações clínicas heterogêneas.',
      },
      {
        id: 'sum-tl3-3',
        text: 'A busca por um "gene do TDL" foi historicamente motivada pela descoberta do gene FOXP2 na família KE, um grupo de três gerações com um transtorno grave e específico de fala e linguagem associado a uma mutação nesse gene. Contudo, como destaca Bishop (2006), o FOXP2 não é "um gene para a linguagem": trata-se de um fator de transcrição que regula a atividade de outros genes, e a mutação da família KE está associada também a alterações em núcleos caudados e cerebelo, além da área de Broca. Mais importante ainda: a grande maioria das pessoas com TDL não apresenta qualquer alteração no gene FOXP2.',
      },
      {
        id: 'sum-tl3-4',
        text: 'Por isso, a compreensão atual do TDL se afasta de um modelo de causa única e se aproxima de um modelo poligênico e multifatorial, semelhante ao de outras condições geneticamente complexas, como asma ou diabetes (Bishop, 2006). Nesse modelo, múltiplas variantes genéticas comuns, cada uma de efeito pequeno, interagem entre si e com fatores ambientais para determinar o risco final de um indivíduo desenvolver o transtorno. Não existe, portanto, um único "gene candidato" cuja identificação permitiria diagnosticar ou explicar isoladamente o TDL.',
      },
      {
        id: 'sum-tl3-5',
        text: 'Revisando estudos de associação genética, Newbury e Monaco (2010) descrevem variantes nos genes CNTNAP2 (no cromossomo 7q36) e, em outro estudo, nos genes ATP2C2 e CMIP (no cromossomo 16q24), associadas a medidas de linguagem e, no caso de ATP2C2/CMIP, especialmente ao desempenho em tarefas de memória fonológica de curto prazo. Os próprios autores, porém, são explícitos quanto às limitações: essas associações "ainda requerem replicação externa", e um mecanismo funcional para essas variantes "ainda não foi identificado".',
      },
      {
        id: 'sum-tl3-6',
        text: 'Newbury e Monaco (2010) também descrevem estudos de varredura genômica (linkage) conduzidos pelo SLI Consortium, que identificaram regiões candidatas nos cromossomos 13, 16 e 19. Os autores ressaltam que esses estudos "envolveram um número relativamente pequeno de famílias afetadas e produziram valores de p limítrofes", ainda que replicações subsequentes tenham reforçado alguns desses achados. Achados de varredura genômica com significância limítrofe exigem cautela redobrada antes de qualquer aplicação clínica.',
      },
      {
        id: 'sum-tl3-7',
        text: 'Um conceito central para interpretar essa literatura é o da "herdabilidade perdida" (missing heritability): mesmo somando todas as variantes genéticas específicas já identificadas em estudos de associação, elas explicam apenas uma pequena fração da agregação familiar observada para o TDL. Isso significa que a maior parte do componente genético do TDL ainda não foi mapeada em genes específicos, e que "gene candidato" não deve ser confundido com "causa comprovada e suficiente".',
      },
      {
        id: 'sum-tl3-8',
        text: 'Newbury e Monaco (2010) chamam atenção ainda para o fenômeno da pleiotropia: um mesmo gene, como o FOXP1, já foi associado a condições tão distintas quanto vitiligo, sobrevida em certos cânceres e resposta à hepatite. Isso ilustra por que a presença de uma variante genética associada ao TDL em um estudo não implica que ela seja específica da linguagem, nem que sua função no cérebro já seja bem compreendida — os próprios autores notam que "pouco se sabe sobre as funções das proteínas CMIP e ATP2C2 no cérebro".',
      },
      {
        id: 'sum-tl3-9',
        text: 'A agregação familiar — a observação de que o TDL é mais comum entre parentes de primeiro grau de uma criança afetada do que na população geral — é um dado consistente e clinicamente relevante como fator de risco a ser levantado na anamnese. Contudo, agregação familiar não equivale a um padrão de herança mendeliana simples nem permite, isoladamente, prever se uma criança específica desenvolverá ou não o transtorno; ela deve ser interpretada como um entre vários fatores de risco, nunca como prognóstico fechado.',
      },
      {
        id: 'sum-tl3-10',
        text: 'Fatores ambientais também contribuem, e de forma específica: Bishop (2006) reporta que, em certas tarefas de percepção auditiva não verbal usadas em estudos com gêmeos, efeitos ambientais compartilhados explicaram cerca de 60% da variância, e que a experiência musical respondia por quase metade desse efeito. Isso demonstra que a proporção entre influência genética e ambiental não é fixa: ela varia conforme a habilidade específica examinada, o que reforça a necessidade de interpretar cada achado dentro do seu próprio domínio, sem generalizar para "o TDL" como um bloco único.',
      },
      {
        id: 'sum-tl3-11',
        text: 'Essa interação entre biologia e ambiente também aparece em modelos que postulam múltiplos "caminhos" cognitivos contribuindo para a linguagem: crianças com apenas um processo cognitivo comprometido podem manter um desenvolvimento linguístico relativamente preservado graças à redundância do sistema, mas o comprometimento simultâneo de duas ou mais dessas rotas está associado a quadros de linguagem mais graves (Bishop, 2006). Isso ajuda a explicar por que o TDL se manifesta com tamanha variação de gravidade e perfil entre crianças com o mesmo diagnóstico.',
      },
      {
        id: 'sum-tl3-12',
        text: 'No campo da neuroimagem estrutural, os achados também são heterogêneos entre estudos, em parte por causa de amostras pequenas e de diferenças metodológicas. Badcock, Bishop, Hardiman, Barry e Watkins (2012), em um estudo com morfometria baseada em voxel, encontraram em crianças e adultos com TDL aumento de substância cinzenta no giro frontal inferior esquerdo e redução no núcleo caudado direito e no córtex temporal superior bilateral, com o volume do caudado correlacionando-se ao desempenho em repetição de pseudopalavras e praxia oral.',
      },
      {
        id: 'sum-tl3-13',
        text: 'Esse mesmo estudo, no entanto, envolveu amostras muito pequenas — 10 participantes com TDL para a análise estrutural, 6 irmãos não afetados e 16 controles típicos —, o que limita fortemente a generalização dos achados e reforça a necessidade de replicação em amostras maiores antes de qualquer aplicação clínica. Achados de neuroimagem com essa magnitude amostral devem ser lidos como hipóteses a investigar, não como descrições definitivas do "cérebro do TDL".',
      },
      {
        id: 'sum-tl3-14',
        text: 'No contexto brasileiro, o capítulo sobre Distúrbio Específico de Linguagem do Tratado das Especialidades em Fonoaudiologia (Hage & Acosta Rodriguez, 2014) descreve que estudos de neuroimagem sugerem um substrato neuroanatômico diferente entre o DEL e o Transtorno do Espectro Autista, incluindo redução de estruturas em regiões corticais e anomalias na formação de padrões giriais, com relatos de polimicrogiria bilateral difusa em quadros mais graves e polimicrogiria parietal posterior bilateral em quadros menos graves. Os próprios autores, contudo, tratam esses achados como variações observadas entre estudos, não como um padrão estrutural único e obrigatório do DEL.',
      },
      {
        id: 'sum-tl3-15',
        text: 'A lateralização hemisférica da linguagem é outro achado heterogêneo e não universal. Whitehouse e Bishop (2008), usando Doppler transcraniano funcional, encontraram que, entre adultos com TDL persistente, a lateralização atípica (bilateral ou predominantemente à direita) era significativamente mais comum do que entre controles típicos e do que entre adultos que tiveram TDL na infância mas não preenchiam mais os critérios na vida adulta. Os autores são cautelosos ao afirmar que a lateralização atípica não está presente em todos os casos de TDL, podendo funcionar mais como um marcador biológico associado à persistência do quadro do que como sua causa comprovada.',
      },
      {
        id: 'sum-tl3-16',
        text: 'Essa distinção entre marcador e causa é crucial: nenhum desses achados de neuroimagem — estrutural ou de lateralização — é utilizado, na prática clínica atual, como exame diagnóstico de rotina para o TDL. O diagnóstico continua sendo eminentemente clínico e comportamental, baseado na avaliação da linguagem em si, e não em exames de imagem cerebral, cuja principal contribuição até o momento é científica: ajudar a entender mecanismos, não substituir a avaliação fonoaudiológica.',
      },
      {
        id: 'sum-tl3-17',
        text: 'Krishnan, Watkins e Bishop (2016) propõem uma perspectiva complementar, deslocando parte do foco das áreas corticais tradicionalmente associadas à linguagem para sistemas subcorticais de aprendizagem. Os autores descrevem circuitos corticostriatais (envolvendo o estriado, dentro dos gânglios da base) e conexões com o lobo temporal medial e o hipocampo, argumentando que dificuldades no aprendizado de sequências e estruturas complexas em crianças com TDL podem refletir imaturidade ou comprometimento desses circuitos de aprendizagem implícita, e não apenas de áreas corticais "da linguagem" propriamente ditas.',
      },
      {
        id: 'sum-tl3-18',
        text: 'Essa proposta retoma a hipótese do déficit procedural de Ullman e Pierpont, segundo a qual crianças com TDL têm dificuldade especificamente no sistema de aprendizagem procedural (implícito), responsável por aprender regularidades e sequências, enquanto o sistema de memória declarativa (explícito), usado para aprender itens arbitrários como o vocabulário, permaneceria relativamente preservado. Essa hipótese ajudaria a explicar por que crianças com TDL frequentemente têm mais dificuldade com regras gramaticais complexas do que com a aprendizagem de palavras isoladas.',
      },
      {
        id: 'sum-tl3-19',
        text: 'Krishnan, Watkins e Bishop (2016) relatam que uma metanálise de oito estudos usando uma tarefa clássica de aprendizagem sequencial implícita (tempo de reação serial) encontrou um efeito pequeno, porém significativo, do TDL sobre o desempenho (0,33 desvio-padrão), enquanto uma metanálise de nove estudos com dislexia encontrou um efeito moderado (0,45 desvio-padrão). São efeitos reais, mas de magnitude modesta — nem toda criança com TDL apresenta prejuízo evidente nessas tarefas, e o efeito varia conforme a idade e a complexidade da sequência testada.',
      },
      {
        id: 'sum-tl3-20',
        text: 'Os mesmos autores destacam que a aprendizagem declarativa tende a ser uma área de força relativa nessas crianças, embora estudos mostrem que, em tarefas de memorização de listas de palavras, o desempenho de crianças com TDL ainda seja inferior ao de controles pareados por idade — e que diferenças individuais na memória de trabalho parecem explicar boa parte dessa diferença, mais do que um déficit declarativo em si. Ou seja, mesmo um sistema de aprendizagem tido como "preservado" pode ser indiretamente afetado por limitações na capacidade de reter informação por curtos períodos.',
      },
      {
        id: 'sum-tl3-21',
        text: 'A memória de trabalho verbal (fonológica) aparece, assim, como um constructo cognitivo transversal a vários achados: relaciona-se ao desempenho em tarefas de repetição de pseudopalavras (usadas como candidato a marcador clínico, como discutido no Módulo 2), correlaciona-se com o volume do núcleo caudado no estudo de Badcock et al. (2012), e é especificamente associada às variantes genéticas de ATP2C2/CMIP descritas por Newbury e Monaco (2010). Ainda assim, nenhuma dessas associações, isoladamente, é suficiente para diagnosticar o TDL ou para explicar todos os seus casos.',
      },
      {
        id: 'sum-tl3-22',
        text: 'Outro modelo cognitivo influente historicamente é a hipótese do processamento auditivo temporal rápido, segundo a qual dificuldades linguísticas decorreriam de uma limitação em processar rapidamente estímulos acústicos breves e sequenciais. Essa hipótese, no entanto, foi diretamente testada e qualificada por Bishop, Carlyon, Deeks e Bishop (1999) em um estudo com gêmeos, cujo próprio título é uma advertência direta ao leitor: o comprometimento do processamento temporal auditivo não é "nem necessário, nem suficiente" para causar transtorno de linguagem em crianças.',
      },
      {
        id: 'sum-tl3-23',
        text: 'Essa conclusão é importante porque ilustra um padrão recorrente na neurobiologia do TDL: hipóteses de causa única — seja um gene, uma região cerebral, um padrão de lateralização, ou um processo cognitivo isolado como o processamento auditivo — tendem a explicar apenas parte dos casos, encontram exceções relevantes e não resistem bem à replicação em amostras independentes. A velocidade de processamento, de forma semelhante, é frequentemente reduzida em crianças com TDL em diferentes tarefas, mas também não deve ser tratada como explicação completa e isolada do quadro.',
      },
      {
        id: 'sum-tl3-24',
        text: 'A heterogeneidade observada em todos esses níveis — genético, estrutural, funcional e cognitivo — não é um problema metodológico a ser eventualmente resolvido por um estudo definitivo, mas parece refletir a própria natureza multifatorial do TDL. Modelos atuais de múltiplos déficits (como o descrito por Bishop, 2006) sugerem que diferentes crianças podem chegar a um perfil linguístico clinicamente semelhante por meio de combinações distintas de fatores de risco genéticos, neurobiológicos e ambientais — o que é coerente com a heterogeneidade de perfis linguísticos já discutida no Módulo 2.',
      },
      {
        id: 'sum-tl3-25',
        text: 'Para a prática fonoaudiológica, a principal implicação dessas evidências é negativa por definição, mas nem por isso menos importante: não existe, até o momento, biomarcador genético ou de neuroimagem que sirva como critério diagnóstico do TDL, tampouco um exame que permita prever, isoladamente, o prognóstico de uma criança específica a partir de um achado biológico. O diagnóstico e o acompanhamento continuam dependendo da avaliação clínica da linguagem, da história do desenvolvimento e do funcionamento observado ao longo do tempo — temas que serão retomados com profundidade no Módulo 4.',
      },
      {
        id: 'sum-tl3-26',
        text: 'Por fim, é importante lembrar que praticamente toda a base genética e de neuroimagem revisada aqui provém de estudos com falantes de inglês, e que a maior parte dos estudos citados neste módulo trabalhou com amostras pequenas e predominantemente de países de alta renda. A plasticidade do desenvolvimento cerebral infantil sustenta a lógica da intervenção precoce, mas não implica que qualquer achado estrutural, funcional ou genético relatado nesses estudos se aplique automaticamente, sem verificação empírica própria, a crianças falantes de português brasileiro.',
      },
    ],
    mainIdea:
      'O Transtorno do Desenvolvimento da Linguagem tem base neurobiológica multifatorial — envolvendo genética poligênica, circuitos corticais e subcorticais, e processos cognitivos como memória de trabalho e aprendizagem procedural —, mas nenhum achado genético, estrutural ou funcional isolado constitui, até o momento, um biomarcador diagnóstico; os achados são de grupo, heterogêneos entre estudos, e devem ser interpretados como fatores de risco ou hipóteses explicativas, nunca como causa única, exame diagnóstico ou prognóstico individual.',
    essentialConcepts: [
      {
        id: 'conc-tl3-heterogeneidade',
        term: 'Heterogeneidade neurobiológica',
        definition:
          'Padrão em que diferentes crianças com o mesmo diagnóstico de TDL apresentam achados genéticos, estruturais e funcionais distintos entre si, sem um perfil biológico único e obrigatório.',
        example:
          'Duas crianças com TDL podem apresentar, uma delas, alteração estrutural no giro frontal inferior, e a outra, achados de neuroimagem dentro da normalidade — ambas ainda assim com o mesmo diagnóstico clínico.',
      },
      {
        id: 'conc-tl3-herdabilidade',
        term: 'Herdabilidade',
        definition:
          'Estimativa estatística, obtida por estudos com gêmeos ou famílias, da proporção da variação de uma característica numa população que é explicada por fatores genéticos.',
        example:
          'Uma herdabilidade de 0,5 a 0,75 para o TDL (Bishop, 2006) indica influência genética substancial, mas não determinismo: uma parte relevante da variação continua sendo explicada por fatores não genéticos.',
      },
      {
        id: 'conc-tl3-agregacaofamiliar',
        term: 'Agregação familiar',
        definition:
          'Tendência de um transtorno ser mais frequente entre parentes de primeiro grau de uma pessoa afetada do que na população geral, sem que isso indique, por si só, um padrão de herança simples.',
        example:
          'Uma criança com TDL cujo irmão mais velho também apresentou atraso de linguagem ilustra agregação familiar, mas não permite prever com certeza o desfecho de outros parentes.',
      },
      {
        id: 'conc-tl3-genecandidato',
        term: 'Gene candidato',
        definition:
          'Gene identificado em estudos de associação como estatisticamente relacionado a uma característica ou transtorno, sem que isso comprove, isoladamente, uma relação causal comprovada e funcional.',
        example:
          'CNTNAP2, ATP2C2 e CMIP foram descritos como genes candidatos para o TDL (Newbury & Monaco, 2010), mas os próprios autores apontam que essas associações ainda carecem de replicação e de mecanismo funcional identificado.',
      },
      {
        id: 'conc-tl3-arquiteturapoligenica',
        term: 'Arquitetura poligênica',
        definition:
          'Modelo em que uma característica ou transtorno resulta da ação combinada de muitas variantes genéticas comuns, cada uma com efeito pequeno, em vez de um único gene determinante.',
        example:
          'O TDL é descrito por Bishop (2006) como assemelhando-se, nesse aspecto, a doenças complexas como asma ou diabetes, e não a um transtorno de herança mendeliana simples.',
      },
      {
        id: 'conc-tl3-herdabilidadeperdida',
        term: 'Herdabilidade perdida (missing heritability)',
        definition:
          'Diferença entre a herdabilidade estimada por estudos com gêmeos/famílias e a proporção da variação genética efetivamente explicada pelos genes específicos já identificados.',
        example:
          'Mesmo somando os efeitos de genes candidatos como CNTNAP2, ATP2C2 e CMIP, esses achados explicam apenas uma pequena parte da agregação familiar observada para o TDL (Newbury & Monaco, 2010).',
      },
      {
        id: 'conc-tl3-pleiotropia',
        term: 'Pleiotropia',
        definition:
          'Fenômeno em que um mesmo gene influencia múltiplas características ou condições aparentemente não relacionadas entre si.',
        example:
          'O gene FOXP1 já foi associado a vitiligo, sobrevida em certos cânceres e resposta à hepatite, além de fenótipos de linguagem (Newbury & Monaco, 2010), o que mostra que um achado genético não é automaticamente específico da linguagem.',
      },
      {
        id: 'conc-tl3-redeneural',
        term: 'Rede neural distribuída da linguagem',
        definition:
          'Concepção segundo a qual a linguagem depende da atividade integrada de múltiplas regiões corticais (frontais, temporais e parietais) e subcorticais, e não de um único "centro" isolado.',
        example:
          'Dificuldades sintáticas, lexicais e de discurso podem envolver diferentes nós dessa rede, o que ajuda a explicar a variedade de perfis linguísticos possíveis no TDL.',
      },
      {
        id: 'conc-tl3-lateralizacao',
        term: 'Lateralização hemisférica da linguagem',
        definition:
          'Predominância relativa de um hemisfério cerebral (tipicamente o esquerdo) no processamento da linguagem, avaliada por técnicas como o Doppler transcraniano funcional.',
        example:
          'Whitehouse e Bishop (2008) encontraram lateralização atípica (bilateral ou à direita) mais frequente entre adultos com TDL persistente do que entre controles, sem que isso ocorresse em todos os casos.',
      },
      {
        id: 'conc-tl3-corticostriatal',
        term: 'Circuito corticostriatal',
        definition:
          'Conjunto de conexões entre o córtex cerebral e o estriado (parte dos gânglios da base), implicado na aprendizagem de sequências, hábitos e regularidades.',
        example:
          'Krishnan, Watkins e Bishop (2016) propõem que dificuldades de aprendizagem sequencial em crianças com TDL podem refletir imaturidade desses circuitos, além de (ou em vez de) alterações puramente corticais.',
      },
      {
        id: 'conc-tl3-aprendizagemprocedural',
        term: 'Aprendizagem procedural',
        definition:
          'Sistema de aprendizagem implícita, dependente de circuitos corticostriatais, responsável por extrair regularidades e sequências, como as da gramática.',
        example:
          'Em tarefas de tempo de reação serial, crianças com TDL mostram, em média, desempenho pior do que seus pares, com efeito de magnitude pequena a moderada (Krishnan, Watkins & Bishop, 2016).',
      },
      {
        id: 'conc-tl3-memoriadeclarativa',
        term: 'Memória declarativa',
        definition:
          'Sistema de aprendizagem explícita, dependente do lobo temporal medial e do hipocampo, envolvido no aprendizado de fatos e associações arbitrárias, como itens de vocabulário.',
        example:
          'Crianças com TDL tendem a ter esse sistema relativamente preservado, embora seu desempenho em tarefas declarativas ainda possa ser limitado por dificuldades de memória de trabalho.',
      },
      {
        id: 'conc-tl3-memoriadetrabalho',
        term: 'Memória de trabalho verbal',
        definition:
          'Capacidade de reter e manipular temporariamente informação verbal/fonológica, frequentemente avaliada por tarefas de repetição de pseudopalavras ou de sentenças.',
        example:
          'O volume do núcleo caudado correlacionou-se com o desempenho em repetição de pseudopalavras no estudo de Badcock et al. (2012), sugerindo uma ponte entre estrutura cerebral e esse constructo cognitivo.',
      },
      {
        id: 'conc-tl3-processamentotemporal',
        term: 'Processamento temporal auditivo',
        definition:
          'Capacidade de processar rapidamente estímulos acústicos breves e sequenciais, proposta como possível base para dificuldades linguísticas, mas com suporte empírico limitado como explicação isolada.',
        example:
          'Bishop, Carlyon, Deeks e Bishop (1999) concluíram que o comprometimento do processamento temporal auditivo não é nem necessário nem suficiente para causar transtorno de linguagem em crianças.',
      },
      {
        id: 'conc-tl3-biomarcador',
        term: 'Biomarcador',
        definition:
          'Indicador biológico mensurável que se propõe a refletir, prever ou confirmar uma condição clínica; para ser considerado diagnóstico, precisa de validação robusta em amostras representativas.',
        example:
          'Nenhum achado genético ou de neuroimagem discutido neste módulo atingiu, até o momento, o status de biomarcador diagnóstico validado para o TDL.',
      },
      {
        id: 'conc-tl3-fatorderisco',
        term: 'Fator de risco',
        definition:
          'Variável associada a maior probabilidade de um desfecho, sem que sua presença determine o desfecho de forma inevitável nem sua ausência o exclua.',
        example:
          'Histórico familiar de TDL é um fator de risco relevante a levantar na anamnese, mas não permite, por si só, prever se uma criança específica desenvolverá o transtorno.',
      },
      {
        id: 'conc-tl3-achadodegrupo',
        term: 'Achado de grupo',
        definition:
          'Padrão estatístico observado na comparação entre grupos (por exemplo, TDL versus controles), que descreve tendências médias e não se aplica automaticamente a cada indivíduo do grupo.',
        example:
          'A redução média de volume do caudado direito relatada por Badcock et al. (2012) não significa que toda criança com TDL apresente essa alteração estrutural.',
      },
      {
        id: 'conc-tl3-interacaogeneambiente',
        term: 'Interação gene-ambiente',
        definition:
          'Fenômeno em que o efeito de fatores genéticos sobre um desfecho depende do ambiente em que o indivíduo se desenvolve, e vice-versa.',
        example:
          'Em tarefas de percepção auditiva não verbal, efeitos ambientais compartilhados (incluindo experiência musical) explicaram cerca de 60% da variância em um estudo com gêmeos (Bishop, 2006).',
      },
    ],
    evidence: [
      {
        id: 'ev-tl3-1',
        claim:
          'Estudos com gêmeos indicam herdabilidade do TDL tipicamente entre 0,5 e 0,75 em crianças em idade escolar, evidenciando influência genética substancial, mas não determinismo.',
        source:
          'Bishop, D. V. M. (2006). What Causes Specific Language Impairment in Children? Current Directions in Psychological Science, 15(5), 217-221. Acesso integral nesta auditoria: artigo lido na íntegra (PubMed Central, acesso aberto).',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'Histórico familiar de dificuldades de linguagem é uma informação relevante na anamnese, mas a herdabilidade estimada deixa espaço substancial para fatores ambientais; não deve ser interpretada como determinismo genético.',
      },
      {
        id: 'ev-tl3-2',
        claim:
          'A mutação do gene FOXP2 na família KE está associada a um transtorno grave de fala e linguagem, mas o FOXP2 é um fator de transcrição que regula outros genes — não "um gene para a linguagem" — e a grande maioria das pessoas com TDL não apresenta qualquer alteração nesse gene.',
        source:
          'Bishop, D. V. M. (2006). What Causes Specific Language Impairment in Children? Current Directions in Psychological Science, 15(5), 217-221. Acesso integral nesta auditoria.',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'A descoberta do FOXP2 não deve ser usada para sugerir uma explicação genética única e simples do TDL; ela ilustra, ao contrário, a complexidade e a raridade de mutações de efeito único e grande nesse quadro.',
      },
      {
        id: 'ev-tl3-3',
        claim:
          'Variantes nos genes CNTNAP2 e, em outro estudo, ATP2C2/CMIP, foram associadas a medidas de linguagem e de memória fonológica de curto prazo, mas os próprios autores da revisão afirmam que essas associações ainda requerem replicação externa e que um mecanismo funcional não foi identificado.',
        source:
          'Newbury, D. F.; Monaco, A. P. (2010). Genetic Advances in the Study of Speech and Language Disorders. Neuron, 68(2), 309-320. DOI: 10.1016/j.neuron.2010.10.001. Acesso integral nesta auditoria: texto completo obtido via PubMed Central (PMC2977079), com citações diretas conferidas.',
        evidenceLevel: 'emerging',
        clinicalImplication:
          'Genes candidatos ainda não replicados não devem ser comunicados a famílias como causa estabelecida do TDL; a testagem genética, quando realizada, deve ser conduzida e interpretada por profissionais de genética clínica, com essas limitações explicitadas.',
      },
      {
        id: 'ev-tl3-4',
        claim:
          'Estudos de varredura genômica (linkage) do SLI Consortium identificaram regiões candidatas nos cromossomos 13, 16 e 19, mas envolveram número relativamente pequeno de famílias e produziram valores de p limítrofes, exigindo cautela na interpretação mesmo com replicações parciais subsequentes.',
        source:
          'Newbury, D. F.; Monaco, A. P. (2010). Genetic Advances in the Study of Speech and Language Disorders. Neuron, 68(2), 309-320. Acesso integral nesta auditoria.',
        evidenceLevel: 'emerging',
        clinicalImplication:
          'Resultados de estudos de ligação gênica com significância limítrofe não sustentam, isoladamente, qualquer aplicação diagnóstica ou de aconselhamento genético definitivo.',
      },
      {
        id: 'ev-tl3-5',
        claim:
          'Em morfometria baseada em voxel, crianças e adultos com TDL apresentaram aumento de substância cinzenta no giro frontal inferior esquerdo e redução no núcleo caudado direito e no córtex temporal superior bilateral, com o volume do caudado correlacionando-se ao desempenho em repetição de pseudopalavras e praxia oral — porém em uma amostra pequena (10 casos de TDL, 6 irmãos não afetados, 16 controles).',
        source:
          'Badcock, N. A.; Bishop, D. V. M.; Hardiman, M. J.; Barry, J. G.; Watkins, K. E. (2012). Co-localisation of abnormal brain structure and function in specific language impairment. Brain and Language, 120(3-4), 310-320. DOI: 10.1016/j.bandl.2011.10.006. Acesso integral nesta auditoria: texto completo obtido via PubMed Central (PMC3315677), com citações diretas conferidas; amostra pequena reconhecida pelos próprios autores.',
        evidenceLevel: 'emerging',
        clinicalImplication:
          'Esses achados estruturais são hipóteses de pesquisa sobre mecanismos, não critérios diagnósticos; uma criança com TDL pode ter neuroimagem estrutural dentro da normalidade, o que não invalida o diagnóstico clínico.',
      },
      {
        id: 'ev-tl3-6',
        claim:
          'Estudos de neuroimagem sugerem substrato neuroanatômico distinto entre o Distúrbio Específico de Linguagem e o Transtorno do Espectro Autista, incluindo redução de estruturas corticais e anomalias na formação de padrões giriais (com relatos de polimicrogiria bilateral difusa em quadros mais graves e polimicrogiria parietal posterior bilateral em quadros menos graves), ainda que esses achados variem entre estudos.',
        source:
          'Hage, S. R. V.; Acosta Rodriguez, V. M. (2014). Distúrbio Específico de Linguagem – Aspectos Clínicos e Educacionais. In: MARCHESAN, I. Q.; SILVA, H. J.; TOMÉ, M. C. (orgs.). Tratado das Especialidades em Fonoaudiologia. Rio de Janeiro: Guanabara Koogan, cap. 75, p. 1069-1076. Acesso integral nesta auditoria: capítulo lido na íntegra em cópia física/digital do Tratado disponível no projeto.',
        evidenceLevel: 'emerging',
        clinicalImplication:
          'Achados de neuroimagem podem ajudar a diferenciar grupos em pesquisa, mas não substituem a avaliação comportamental na diferenciação clínica individual entre TDL e TEA, que continua dependendo de critérios comportamentais e de comunicação social.',
      },
      {
        id: 'ev-tl3-7',
        claim:
          'Usando Doppler transcraniano funcional (fTCD) em uma tarefa de geração de palavras, adultos com TDL persistente (n=11) apresentaram lateralização atípica — 54,5% com predomínio à direita, 27,3% bilateral e apenas 18,2% com predomínio à esquerda —, enquanto praticamente todos os participantes dos grupos de comparação apresentaram predomínio à esquerda (100% no grupo com histórico de TDL sem persistência, n=9; 81,8% no grupo com TEA e comprometimento de linguagem, n=11; 90,9% no grupo típico, n=11); a diferença entre grupos foi estatisticamente significativa (χ²=21,83; gl=6; p<0,001).',
        source:
          'Whitehouse, A. J. O.; Bishop, D. V. M. (2008). Cerebral dominance for language function in adults with specific language impairment or autism. Brain, 131(12), 3193-3200. DOI: 10.1093/brain/awn266. Acesso integral nesta auditoria: artigo lido na íntegra (acesso aberto, Oxford University Research Archive), incluindo métodos, tabela de características da amostra, resultados estatísticos completos e discussão.',
        evidenceLevel: 'emerging',
        clinicalImplication:
          'A lateralização atípica não está presente em todos os casos de TDL (na própria amostra, 18,2% dos adultos com TDL persistente mantinham predomínio típico à esquerda) e não deve ser usada isoladamente como exame diagnóstico; os próprios autores são explícitos ao afirmar que não pretendem sugerir que a lateralização atípica seja, em si, patológica, mas sim um possível indicador de processos que também comprometem o desenvolvimento da linguagem — ou seja, um marcador associado, não uma causa comprovada. A amostra também é pequena (n=11 por grupo clínico), o que os próprios autores reconhecem como limitação, ainda que os efeitos relatados sejam estatisticamente robustos.',
      },
      {
        id: 'ev-tl3-8',
        claim:
          'Em um estudo com pares de gêmeos, avaliando limiares de processamento temporal auditivo (incluindo detecção de tom mascarado e modulação de frequência), os próprios autores concluíram — já no título do artigo — que o comprometimento do processamento temporal auditivo não é nem necessário nem suficiente para causar transtorno de linguagem em crianças. Esta afirmação é qualificada aqui pelo próprio nível de confiança da fonte: os detalhes metodológicos completos (desenho estatístico, tamanho exato de efeito) não puderam ser verificados em texto integral nesta auditoria, apenas a conclusão central, expressa no título e no resumo, localizados via busca.',
        source:
          'Bishop, D. V. M.; Carlyon, R. P.; Deeks, J. M.; Bishop, S. J. (1999). Auditory Temporal Processing Impairment: Neither Necessary nor Sufficient for Causing Language Impairment in Children. Journal of Speech, Language, and Hearing Research, 42(6), 1295-1310. REFERÊNCIA NÃO CONFIRMADA EM TEXTO INTEGRAL NESTA AUDITORIA — REVISÃO HUMANA NECESSÁRIA quanto aos resultados e à discussão completos: buscas legítimas em PubMed, Europe PMC e no repositório institucional de Oxford (ORA) não localizaram versão de acesso aberto; o periódico é pago e não foi lido na íntegra. Apenas o desenho geral do estudo, o tamanho da amostra e a conclusão central (expressa no próprio título) foram confirmados via busca.',
        evidenceLevel: 'emerging',
        clinicalImplication:
          'Esta é uma fonte de acesso parcial: a conclusão de que o processamento auditivo temporal não é causa única nem suficiente do TDL é coerente com o padrão mais amplo discutido neste módulo (nenhuma hipótese de causa única resiste isoladamente), mas não deve ser tomada como prova estatística detalhada, apenas como suporte adicional e qualificado a essa conclusão mais geral. A hipótese de processamento auditivo temporal não deve, em nenhum caso, ser apresentada como explicação isolada e suficiente do TDL, nem usada como critério diagnóstico único.',
      },
      {
        id: 'ev-tl3-9',
        claim:
          'Metanálises de tarefas de aprendizagem sequencial implícita (tempo de reação serial) mostram efeito pequeno e significativo do TDL sobre o desempenho (0,33 desvio-padrão em 8 estudos) e efeito moderado da dislexia (0,45 desvio-padrão em 9 estudos), com a aprendizagem declarativa relativamente mais preservada, embora ainda influenciada pela capacidade de memória de trabalho.',
        source:
          'Krishnan, S.; Watkins, K. E.; Bishop, D. V. M. (2016). Neurobiological Basis of Language Learning Difficulties. Trends in Cognitive Sciences, 20(9), 701-714. DOI: 10.1016/j.tics.2016.06.012. Acesso integral nesta auditoria: artigo lido na íntegra (acesso aberto, CC BY).',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'Dificuldades em aprender regularidades e sequências gramaticais podem refletir imaturidade dos sistemas de aprendizagem procedural, mas o efeito é de magnitude modesta: nem toda criança com TDL apresenta prejuízo evidente nessas tarefas, e a avaliação clínica não deve se apoiar apenas nesse constructo.',
      },
      {
        id: 'ev-tl3-10',
        claim:
          'Crianças com transtornos do neurodesenvolvimento de origem genética conhecida (por exemplo, síndrome de Down, síndrome do X frágil, síndrome de Williams, del22q11.2) apresentam perfis cognitivos e comportamentais associados a diagnósticos genéticos específicos e mensuráveis, o que as diferencia, por definição, do TDL, cujo diagnóstico exclui a presença de uma condição biomédica diferenciadora conhecida.',
        source:
          'Giachetti, C. M. (2014). Diagnóstico Fonoaudiológico em Genética. In: MARCHESAN, I. Q.; SILVA, H. J.; TOMÉ, M. C. (orgs.). Tratado das Especialidades em Fonoaudiologia. Rio de Janeiro: Guanabara Koogan, cap. 64, p. 958-968. Acesso integral nesta auditoria: capítulo lido na íntegra em cópia física/digital do Tratado disponível no projeto.',
        evidenceLevel: 'expert_opinion',
        clinicalImplication:
          'Ao investigar a história familiar e do desenvolvimento, o fonoaudiólogo deve estar atento a sinais que sugiram uma síndrome genética identificável (a "condição diferenciadora" do consenso CATALISE), encaminhando para avaliação genética quando pertinente, sem que isso implique que todo TDL tenha uma causa genética sindrômica equivalente.',
      },
    ],
    limitations: [
      { id: 'lim-tl3-1', description: 'Muitos dos estudos de neuroimagem revisados (por exemplo, Badcock et al., 2012) envolvem amostras muito pequenas (dezenas de participantes), o que limita a potência estatística e a generalização dos achados estruturais e funcionais.' },
      { id: 'lim-tl3-2', description: 'Os achados estruturais e funcionais de neuroimagem são heterogêneos entre estudos, com diferenças de regiões, direção (aumento ou redução) e magnitude dos efeitos relatados, sem consenso sobre um padrão único do "cérebro do TDL".' },
      { id: 'lim-tl3-3', description: 'Estudos de associação genética frequentemente não são replicados em amostras independentes, como reconhecido pelos próprios autores das revisões (Newbury & Monaco, 2010) para variantes em CNTNAP2, ATP2C2 e CMIP.' },
      { id: 'lim-tl3-4', description: 'A "herdabilidade perdida" indica que os genes específicos identificados até o momento explicam apenas uma fração pequena da agregação familiar do TDL, deixando a maior parte do componente genético ainda não mapeada.' },
      { id: 'lim-tl3-5', description: 'A maioria dos estudos citados neste módulo foi conduzida com falantes de inglês; a aplicabilidade direta desses achados genéticos e neurobiológicos a crianças falantes de português brasileiro não pode ser assumida sem verificação empírica própria.' },
      { id: 'lim-tl3-6', description: 'Estudos transversais (que comparam grupos em um único momento) não permitem, isoladamente, estabelecer relações de causa e efeito nem descrever a trajetória de desenvolvimento de um achado biológico ao longo do tempo.' },
      { id: 'lim-tl3-7', description: 'Correlação entre um achado biológico (por exemplo, volume do caudado) e uma medida cognitiva (por exemplo, repetição de pseudopalavras) não comprova causalidade nem direção do efeito.' },
      { id: 'lim-tl3-8', description: 'Achados de grupo (diferenças médias entre TDL e controles) não devem ser generalizados para o nível individual: uma criança com TDL pode não apresentar o achado típico do grupo, e uma criança sem TDL pode eventualmente apresentá-lo.' },
      { id: 'lim-tl3-9', description: 'Não existe, até o momento, biomarcador genético, estrutural ou funcional validado como critério diagnóstico do TDL; todos os achados revisados têm função explicativa/hipotética, não diagnóstica.' },
      { id: 'lim-tl3-10', description: 'A eficácia de tarefas de aprendizagem procedural (como o tempo de reação serial) em diferenciar TDL de desenvolvimento típico é influenciada pela idade dos participantes e pela complexidade da sequência utilizada, dificultando comparações diretas entre estudos.' },
      { id: 'lim-tl3-11', description: 'A hipótese do processamento auditivo temporal, embora historicamente influente, foi diretamente qualificada por evidência empírica (Bishop, Carlyon, Deeks & Bishop, 1999) mostrando que não é necessária nem suficiente para explicar o transtorno de linguagem.' },
      { id: 'lim-tl3-12', description: 'A lateralização atípica da linguagem não é encontrada em todos os casos de TDL, e sua interpretação como marcador (em vez de causa) ainda depende de mais pesquisa longitudinal.' },
      { id: 'lim-tl3-13', description: 'Fatores genéticos e ambientais interagem de formas que variam conforme a habilidade específica avaliada (por exemplo, percepção auditiva não verbal), o que impede generalizar uma única proporção de herdabilidade para "o TDL" como um todo.' },
      { id: 'lim-tl3-14', description: 'A pleiotropia (um mesmo gene associado a múltiplas condições não relacionadas) exige cautela adicional antes de interpretar qualquer variante genética associada ao TDL como especificamente ligada à linguagem.' },
    ],
    simpleExplanation:
      'Por que uma criança tem dificuldade para aprender a falar e a entender a língua? A ciência ainda não tem uma resposta simples e única para essa pergunta, e é importante que os pais e os profissionais saibam disso. Estudos mostram que os genes têm um papel importante: crianças cujos pais ou irmãos tiveram dificuldades parecidas de linguagem correm um risco maior. Mas isso não quer dizer que existe "um gene" responsável, nem que essa criança certamente vai ter o mesmo problema. É mais parecido com o risco de ter pressão alta ou diabetes: muitos genes pequenos, somados a fatores do ambiente, aumentam ou diminuem o risco aos poucos, sem que nenhum deles, sozinho, decida o resultado. Da mesma forma, alguns estudos usam aparelhos de imagem para olhar o cérebro de crianças com esse tipo de dificuldade, e às vezes encontram diferenças pequenas em certas regiões, comparando grupos de crianças. Só que essas diferenças aparecem em alguns estudos e não em outros, e nem toda criança com dificuldade de linguagem tem essas diferenças no cérebro. Por isso, hoje em dia, nenhum exame de imagem ou de genética consegue, sozinho, dizer se uma criança tem ou não esse transtorno: quem faz esse diagnóstico é o fonoaudiólogo, observando como a criança fala, entende e usa a linguagem no dia a dia, não observando o cérebro dela num exame. Também se estuda como a criança aprende: parece que crianças com dificuldade de linguagem aprendem bem palavras novas (que são meio "decoradas"), mas têm mais dificuldade para aprender regras e padrões, como as regras de gramática, que precisam ser captadas pouco a pouco, de forma mais automática. Isso pode ter relação com partes mais profundas do cérebro, ligadas ao aprendizado de hábitos e sequências, e não só com as áreas mais conhecidas da linguagem. Também vale lembrar que quase todos esses estudos foram feitos com crianças que falam inglês, então nem tudo o que se descobre lá se aplica automaticamente a uma criança brasileira. Por fim, o cérebro de uma criança pequena ainda está se formando e é bastante capaz de se adaptar — e é justamente por isso que intervir cedo faz tanta diferença, mesmo sem sabermos exatamente qual foi a causa biológica específica daquela criança.',
    conceptMap: {
      centralNode: 'Bases Neurobiológicas dos Transtornos de Linguagem',
      nodes: [
        { id: 'n-tl3-central', label: 'Bases Neurobiológicas dos Transtornos de Linguagem', type: 'central' },
        { id: 'n-tl3-redes', label: 'Redes distribuídas da linguagem', type: 'primary', description: 'Regiões frontais, temporais e parietais atuando de forma integrada.' },
        { id: 'n-tl3-lateralizacao', label: 'Lateralização hemisférica', type: 'secondary', description: 'Predominância relativa de um hemisfério; achado heterogêneo, não universal no TDL.' },
        { id: 'n-tl3-conectividade', label: 'Conectividade e substância branca', type: 'secondary', description: 'Conexões entre córtex e estruturas subcorticais relevantes para a aprendizagem.' },
        { id: 'n-tl3-corticostriatal', label: 'Circuitos corticostriatais', type: 'secondary', description: 'Conexões córtex-estriado implicadas na aprendizagem procedural.' },
        { id: 'n-tl3-genetica', label: 'Genética e herdabilidade', type: 'primary', description: 'Componente hereditário substancial, mas poligênico e multifatorial.' },
        { id: 'n-tl3-genecandidato', label: 'Genes candidatos', type: 'secondary', description: 'FOXP2, CNTNAP2, ATP2C2, CMIP — associações ainda não plenamente replicadas.' },
        { id: 'n-tl3-poligenica', label: 'Arquitetura poligênica', type: 'secondary', description: 'Muitas variantes de efeito pequeno, semelhante a doenças complexas.' },
        { id: 'n-tl3-cognicao', label: 'Modelos cognitivos explicativos', type: 'primary', description: 'Hipóteses sobre processos cognitivos subjacentes ao TDL.' },
        { id: 'n-tl3-memoriatrabalho', label: 'Memória de trabalho verbal', type: 'secondary', description: 'Capacidade de reter/manipular informação fonológica temporariamente.' },
        { id: 'n-tl3-aprendizagemprocedural', label: 'Aprendizagem procedural', type: 'secondary', description: 'Sistema implícito de aprendizagem de sequências e regularidades.' },
        { id: 'n-tl3-processamentotemporal', label: 'Processamento temporal/auditivo', type: 'secondary', description: 'Hipótese qualificada como não necessária nem suficiente isoladamente.' },
        { id: 'n-tl3-ambiente', label: 'Fatores ambientais', type: 'primary', description: 'Interagem com a genética; efeito varia conforme a habilidade avaliada.' },
        { id: 'n-tl3-heterogeneidade', label: 'Heterogeneidade neurobiológica', type: 'primary', description: 'Ausência de um perfil biológico único entre crianças com o mesmo diagnóstico.' },
        { id: 'n-tl3-limites', label: 'Limites clínicos', type: 'application', description: 'Nenhum achado isolado serve como biomarcador diagnóstico ou prognóstico individual.' },
      ],
      edges: [
        { id: 'e-tl3-1', from: 'n-tl3-central', to: 'n-tl3-redes', label: 'envolve' },
        { id: 'e-tl3-2', from: 'n-tl3-central', to: 'n-tl3-genetica', label: 'envolve' },
        { id: 'e-tl3-3', from: 'n-tl3-central', to: 'n-tl3-cognicao', label: 'envolve' },
        { id: 'e-tl3-4', from: 'n-tl3-central', to: 'n-tl3-ambiente', label: 'envolve' },
        { id: 'e-tl3-5', from: 'n-tl3-central', to: 'n-tl3-heterogeneidade', label: 'caracteriza-se por' },
        { id: 'e-tl3-6', from: 'n-tl3-redes', to: 'n-tl3-lateralizacao', label: 'inclui' },
        { id: 'e-tl3-7', from: 'n-tl3-redes', to: 'n-tl3-conectividade', label: 'depende de' },
        { id: 'e-tl3-8', from: 'n-tl3-conectividade', to: 'n-tl3-corticostriatal', label: 'inclui' },
        { id: 'e-tl3-9', from: 'n-tl3-genetica', to: 'n-tl3-genecandidato', label: 'busca identificar' },
        { id: 'e-tl3-10', from: 'n-tl3-genetica', to: 'n-tl3-poligenica', label: 'é explicada por' },
        { id: 'e-tl3-11', from: 'n-tl3-genetica', to: 'n-tl3-ambiente', label: 'interage com' },
        { id: 'e-tl3-12', from: 'n-tl3-cognicao', to: 'n-tl3-memoriatrabalho', label: 'inclui' },
        { id: 'e-tl3-13', from: 'n-tl3-cognicao', to: 'n-tl3-aprendizagemprocedural', label: 'inclui' },
        { id: 'e-tl3-14', from: 'n-tl3-cognicao', to: 'n-tl3-processamentotemporal', label: 'inclui hipótese' },
        { id: 'e-tl3-15', from: 'n-tl3-corticostriatal', to: 'n-tl3-aprendizagemprocedural', label: 'sustenta' },
        { id: 'e-tl3-16', from: 'n-tl3-heterogeneidade', to: 'n-tl3-limites', label: 'implica' },
        { id: 'e-tl3-17', from: 'n-tl3-genecandidato', to: 'n-tl3-limites', label: 'ainda não sustenta' },
        { id: 'e-tl3-18', from: 'n-tl3-lateralizacao', to: 'n-tl3-limites', label: 'não é universal, logo' },
      ],
    },
    glossary: [
      { id: 'gl-tl3-1', term: 'Herdabilidade', definition: 'Proporção da variação de uma característica numa população explicada por fatores genéticos, estimada por estudos de gêmeos/famílias.', example: 'Herdabilidade entre 0,5 e 0,75 para o TDL em crianças escolares (Bishop, 2006).' },
      { id: 'gl-tl3-2', term: 'FOXP2', definition: 'Gene identificado na família KE, que codifica um fator de transcrição regulador da atividade de outros genes; não constitui "o gene da linguagem".', example: 'Mutação do FOXP2 associada a transtorno grave de fala/linguagem numa família específica, mas ausente na maioria das pessoas com TDL.' },
      { id: 'gl-tl3-3', term: 'CNTNAP2', definition: 'Gene no cromossomo 7q36 associado, em estudos de Newbury e Monaco (2010), a medidas de linguagem, com achados ainda não plenamente replicados.', example: 'Variantes comuns nesse gene correlacionadas a desempenho reduzido em medidas linguísticas em uma amostra específica.' },
      { id: 'gl-tl3-4', term: 'ATP2C2 e CMIP', definition: 'Genes no cromossomo 16q24 associados a desempenho em memória fonológica de curto prazo, com função cerebral ainda pouco conhecida.', example: 'Associação predominante com tarefas de memória fonológica, e não com todas as medidas de linguagem (Newbury & Monaco, 2010).' },
      { id: 'gl-tl3-5', term: 'SLI Consortium', definition: 'Consórcio de pesquisa responsável por estudos de varredura genômica (linkage) que identificaram regiões candidatas nos cromossomos 13, 16 e 19 para o TDL.', example: 'Regiões com significância estatística limítrofe nas análises originais, parcialmente reforçadas por estudos posteriores.' },
      { id: 'gl-tl3-6', term: 'Herdabilidade perdida (missing heritability)', definition: 'Lacuna entre a herdabilidade estimada por estudos com gêmeos e a proporção efetivamente explicada por genes específicos identificados.', example: 'Genes candidatos conhecidos explicam apenas parte da agregação familiar do TDL.' },
      { id: 'gl-tl3-7', term: 'Pleiotropia', definition: 'Fenômeno em que um mesmo gene afeta múltiplos fenótipos não relacionados entre si.', example: 'FOXP1 associado tanto a fenótipos de linguagem quanto a vitiligo e outras condições (Newbury & Monaco, 2010).' },
      { id: 'gl-tl3-8', term: 'Morfometria baseada em voxel (VBM)', definition: 'Técnica de neuroimagem estrutural que compara o volume de substância cinzenta/branca entre grupos, voxel a voxel.', example: 'Usada por Badcock et al. (2012) para comparar volumes cerebrais entre crianças/adultos com TDL, irmãos e controles.' },
      { id: 'gl-tl3-9', term: 'Doppler transcraniano funcional (fTCD)', definition: 'Técnica que mede o fluxo sanguíneo cerebral para inferir a lateralização hemisférica durante tarefas de linguagem.', example: 'Utilizada por Whitehouse e Bishop (2008) para comparar lateralização entre adultos com TDL, TEA e controles.' },
      { id: 'gl-tl3-10', term: 'Tempo de reação serial (SRT)', definition: 'Tarefa comportamental usada para avaliar aprendizagem sequencial implícita (procedural), medindo a redução do tempo de resposta a sequências repetidas.', example: 'Metanálise de 8 estudos com essa tarefa encontrou efeito pequeno do TDL sobre o desempenho (Krishnan, Watkins & Bishop, 2016).' },
      { id: 'gl-tl3-11', term: 'Aprendizagem declarativa', definition: 'Sistema de memória explícita, dependente do lobo temporal medial, envolvido no aprendizado de fatos e associações arbitrárias.', example: 'Aprendizagem de itens de vocabulário novos, relativamente preservada em crianças com TDL.' },
      { id: 'gl-tl3-12', term: 'Hipótese do déficit procedural', definition: 'Proposta de Ullman e Pierpont segundo a qual o TDL envolveria principalmente comprometimento do sistema de aprendizagem procedural, com preservação relativa do sistema declarativo.', example: 'Usada para explicar por que crianças com TDL têm mais dificuldade com regras gramaticais do que com vocabulário isolado.' },
      { id: 'gl-tl3-13', term: 'Processamento temporal auditivo', definition: 'Capacidade de processar rapidamente estímulos acústicos breves e sequenciais; hipótese histórica de causa do TDL, hoje considerada nem necessária nem suficiente isoladamente.', example: 'Testada em estudo com gêmeos por Bishop, Carlyon, Deeks e Bishop (1999).' },
      { id: 'gl-tl3-14', term: 'Polimicrogiria', definition: 'Anomalia do desenvolvimento cortical caracterizada por formação excessiva de pequenas circunvoluções (giros) cerebrais.', example: 'Relatada, em graus variados, em alguns estudos de neuroimagem sobre DEL descritos no Tratado das Especialidades em Fonoaudiologia (Hage & Acosta Rodriguez, 2014).' },
      { id: 'gl-tl3-15', term: 'Condição diferenciadora', definition: 'No consenso CATALISE, condição biomédica conhecida (por exemplo, uma síndrome genética identificável) que, quando presente, muda a nomenclatura para "transtorno de linguagem associado a X", em vez de TDL.', example: 'Uma criança com síndrome de Down e dificuldade de linguagem não recebe o diagnóstico de TDL, pois a síndrome é a condição diferenciadora.' },
      { id: 'gl-tl3-16', term: 'Achado de grupo', definition: 'Diferença estatística observada entre grupos (por exemplo, TDL versus controles) que não se aplica automaticamente a cada indivíduo do grupo.', example: 'Redução média de volume do caudado direito no grupo com TDL não implica que toda criança do grupo apresente essa alteração.' },
      { id: 'gl-tl3-17', term: 'Biomarcador diagnóstico', definition: 'Indicador biológico validado para uso na confirmação ou exclusão de um diagnóstico em um indivíduo, com sensibilidade e especificidade estabelecidas.', example: 'Até o momento, nenhum achado genético ou de neuroimagem revisado neste módulo atingiu esse status para o TDL.', },
      { id: 'gl-tl3-18', term: 'Núcleo caudado', definition: 'Estrutura subcortical que faz parte do estriado, envolvida em circuitos corticostriatais relevantes para a aprendizagem procedural.', example: 'Volume reduzido no núcleo caudado direito correlacionou-se a pior desempenho em repetição de pseudopalavras em Badcock et al. (2012).' },
      { id: 'gl-tl3-19', term: 'Teste genético direto ao consumidor', definition: 'Painel genético comercializado diretamente a famílias, sem acompanhamento obrigatório de aconselhamento genético profissional; apresenta limitações importantes de interpretação, incluindo variantes de significado clínico incerto e ausência de validação como critério diagnóstico do TDL.', example: 'Um teste comercial que relata uma "variante associada a dificuldades de linguagem" não substitui avaliação fonoaudiológica nem aconselhamento genético qualificado, e uma variante ausente no exame não exclui a possibilidade de TDL.' },
    ],
  },

  apply: {
    questions: [
      {
        id: 'q-tl3-1',
        stem: 'Segundo a literatura revisada neste módulo, qual afirmação melhor descreve a base genética do TDL?',
        alternatives: [
          { id: 'q-tl3-1-a', text: 'O TDL tem herdabilidade substancial (tipicamente entre 0,5 e 0,75), mas segue um modelo poligênico e multifatorial, semelhante a outras condições geneticamente complexas, e não um padrão de herança de gene único.', isCorrect: true, feedback: 'Correto. Essa é exatamente a caracterização de Bishop (2006): herdabilidade relevante, mas multifatorial, comparável a asma ou diabetes.' },
          { id: 'q-tl3-1-b', text: 'O TDL é causado por uma mutação específica no gene FOXP2 na maioria dos casos.', isCorrect: false, feedback: 'Incorreto. A mutação do FOXP2 foi descrita em uma família específica (KE); a maioria das pessoas com TDL não apresenta alteração nesse gene.' },
          { id: 'q-tl3-1-c', text: 'A herdabilidade do TDL é próxima de 1,0, o que significa que o ambiente tem pouca influência.', isCorrect: false, feedback: 'Incorreto. As estimativas de herdabilidade (0,5 a 0,75) deixam espaço substancial para influência ambiental.' },
          { id: 'q-tl3-1-d', text: 'Não há qualquer evidência de componente genético no TDL; a causa é exclusivamente ambiental.', isCorrect: false, feedback: 'Incorreto. Estudos com gêmeos mostram influência genética substancial, ainda que não exclusiva.' },
        ],
        correctAlternativeId: 'q-tl3-1-a',
        explanation: 'O modelo poligênico e multifatorial é o que melhor descreve a base genética do TDL segundo a literatura revisada, evitando tanto o determinismo genético quanto a negação da influência genética.',
        hint: 'Pense na comparação feita por Bishop (2006) entre o TDL e outras doenças complexas.',
        relatedConceptId: 'conc-tl3-arquiteturapoligenica',
        referenceId: 'ref-tl3-bishop2006',
      },
      {
        id: 'q-tl3-2',
        stem: 'O que significa dizer que os achados de neuroimagem sobre o TDL são "achados de grupo"?',
        alternatives: [
          { id: 'q-tl3-2-a', text: 'Que descrevem diferenças médias estatísticas entre grupos (por exemplo, TDL versus controles), sem que isso implique que todo indivíduo do grupo apresente exatamente esse padrão.', isCorrect: true, feedback: 'Correto. Achados de grupo são padrões estatísticos populacionais, não garantias sobre cada indivíduo.' },
          { id: 'q-tl3-2-b', text: 'Que o exame de neuroimagem deve ser aplicado em grupos de crianças, nunca individualmente, por razões de custo.', isCorrect: false, feedback: 'Incorreto. A expressão não se refere a uma limitação prática de aplicação do exame, mas ao tipo de conclusão estatística que ele permite.' },
          { id: 'q-tl3-2-c', text: 'Que toda criança com TDL apresentará, com certeza, as mesmas alterações estruturais relatadas nos estudos.', isCorrect: false, feedback: 'Incorreto. É exatamente o oposto do que "achado de grupo" significa: a alteração é uma média, não uma regra individual.' },
          { id: 'q-tl3-2-d', text: 'Que os achados servem exclusivamente para fins de pesquisa acadêmica, sem qualquer relação com a prática clínica.', isCorrect: false, feedback: 'Incorreto. Achados de grupo podem informar hipóteses e mecanismos relevantes clinicamente, desde que não sejam usados como critério diagnóstico individual.' },
        ],
        correctAlternativeId: 'q-tl3-2-a',
        explanation: 'Distinguir achado de grupo de marcador individual é central para evitar o uso indevido de achados de neuroimagem como se fossem exames diagnósticos.',
        hint: 'Pense na diferença entre uma média estatística de uma amostra e uma característica garantida de cada pessoa.',
        relatedConceptId: 'conc-tl3-achadodegrupo',
      },
      {
        id: 'q-tl3-3',
        stem: 'De acordo com Krishnan, Watkins e Bishop (2016), qual é a principal contribuição de se considerar circuitos corticostriatais (subcorticais) na compreensão do TDL?',
        alternatives: [
          { id: 'q-tl3-3-a', text: 'Complementar o foco tradicional em áreas corticais da linguagem, sugerindo que dificuldades de aprendizagem sequencial/procedural podem envolver também estruturas subcorticais como o estriado.', isCorrect: true, feedback: 'Correto. Os autores propõem essa perspectiva complementar, sem substituir o papel das redes corticais.' },
          { id: 'q-tl3-3-b', text: 'Provar que a linguagem depende exclusivamente dos gânglios da base, e não do córtex cerebral.', isCorrect: false, feedback: 'Incorreto. Os autores não afirmam exclusividade subcortical; propõem uma rede interconectada entre córtex e subcórtex.' },
          { id: 'q-tl3-3-c', text: 'Demonstrar que toda criança com TDL tem lesão no núcleo estriado, visível em exame de rotina.', isCorrect: false, feedback: 'Incorreto. Não há afirmação de lesão universal nem de uso diagnóstico rotineiro desse achado.' },
          { id: 'q-tl3-3-d', text: 'Substituir completamente a hipótese de processamento auditivo como explicação do TDL.', isCorrect: false, feedback: 'Incorreto. São hipóteses distintas discutidas na literatura, não uma substituição direta uma da outra.' },
        ],
        correctAlternativeId: 'q-tl3-3-a',
        explanation: 'A proposta de Krishnan, Watkins e Bishop (2016) é ampliar o olhar sobre os sistemas envolvidos na aprendizagem da linguagem, incluindo circuitos subcorticais, sem abandonar o papel das redes corticais.',
        hint: 'Releia o resumo sobre circuitos corticostriatais e aprendizagem procedural.',
        relatedConceptId: 'conc-tl3-corticostriatal',
        referenceId: 'ref-tl3-krishnanwatkinsbishop2016',
      },
      {
        id: 'q-tl3-4',
        stem: 'Uma criança de 5 anos com TDL tem irmão mais velho que também apresentou atraso de linguagem. Qual interpretação é mais coerente com o conceito de agregação familiar discutido neste módulo?',
        alternatives: [
          { id: 'q-tl3-4-a', text: 'A agregação familiar é um fator de risco relevante a ser levantado na anamnese, mas não permite prever com certeza o desfecho de outros parentes nem substitui a avaliação individual da criança.', isCorrect: true, feedback: 'Correto. Agregação familiar é informação de risco, não prognóstico determinístico.' },
          { id: 'q-tl3-4-b', text: 'Como há dois casos na família, o padrão de herança é necessariamente mendeliano simples (autossômico dominante).', isCorrect: false, feedback: 'Incorreto. O TDL segue um modelo poligênico complexo, não um padrão mendeliano simples, mesmo havendo mais de um caso na família.' },
          { id: 'q-tl3-4-c', text: 'A presença de um caso anterior na família torna desnecessária qualquer avaliação da linguagem da criança, já que o diagnóstico pode ser presumido.', isCorrect: false, feedback: 'Incorreto. O diagnóstico continua dependendo da avaliação clínica individual, independentemente do histórico familiar.' },
          { id: 'q-tl3-4-d', text: 'A agregação familiar prova que o ambiente domiciliar, e não a genética, é a causa do quadro em ambos os irmãos.', isCorrect: false, feedback: 'Incorreto. Agregação familiar é compatível com influência genética compartilhada, não a exclui em favor do ambiente.' },
        ],
        correctAlternativeId: 'q-tl3-4-a',
        explanation: 'Agregação familiar deve ser tratada como fator de risco a considerar, sem determinismo e sem dispensar a avaliação individual.',
        hint: 'Diferencie "fator de risco relevante" de "prognóstico certo".',
        relatedConceptId: 'conc-tl3-agregacaofamiliar',
      },
      {
        id: 'q-tl3-5',
        stem: 'Um estudo relata que crianças com TDL apresentam, em média, redução de volume no núcleo caudado direito comparadas a controles. Qual é a leitura clinicamente mais adequada desse achado?',
        alternatives: [
          { id: 'q-tl3-5-a', text: 'Trata-se de um achado de grupo, relevante para entender possíveis mecanismos neurobiológicos, mas que não deve ser usado como critério diagnóstico individual nem esperado em toda criança com TDL.', isCorrect: true, feedback: 'Correto. Essa é a leitura coerente com a distinção entre achado de grupo e marcador individual.' },
          { id: 'q-tl3-5-b', text: 'Toda criança com TDL deveria, a partir de agora, realizar ressonância magnética para confirmar essa redução antes do diagnóstico fonoaudiológico.', isCorrect: false, feedback: 'Incorreto. Não há recomendação de uso rotineiro de neuroimagem como critério diagnóstico do TDL.' },
          { id: 'q-tl3-5-c', text: 'Uma criança com TDL cujo exame de imagem não mostra essa redução provavelmente não tem TDL de verdade.', isCorrect: false, feedback: 'Incorreto. A ausência do achado de grupo em um indivíduo não invalida o diagnóstico clínico.' },
          { id: 'q-tl3-5-d', text: 'Esse achado prova que o núcleo caudado é a causa única do TDL.', isCorrect: false, feedback: 'Incorreto. Um achado correlacional em um estudo com amostra pequena não estabelece causa única.' },
        ],
        correctAlternativeId: 'q-tl3-5-a',
        explanation: 'A leitura correta reconhece o valor científico do achado sem transformá-lo indevidamente em critério diagnóstico ou causa comprovada isolada.',
        hint: 'Lembre-se do tamanho amostral do estudo de Badcock et al. (2012) e da distinção achado de grupo/indivíduo.',
        relatedConceptId: 'conc-tl3-achadodegrupo',
        referenceId: 'ref-tl3-badcock2012',
      },
      {
        id: 'q-tl3-6',
        stem: 'Qual é a diferença central entre a hipótese do déficit procedural e a hipótese do processamento auditivo temporal como explicações do TDL, considerando o que foi discutido neste módulo?',
        alternatives: [
          { id: 'q-tl3-6-a', text: 'Ambas são hipóteses cognitivas parciais, com suporte empírico limitado quando tomadas isoladamente; a segunda, em particular, foi diretamente qualificada por um estudo mostrando que não é necessária nem suficiente para causar o transtorno.', isCorrect: true, feedback: 'Correto. Nenhuma das duas hipóteses, isoladamente, explica todos os casos de TDL, e a hipótese auditiva foi especificamente testada e qualificada.' },
          { id: 'q-tl3-6-b', text: 'A hipótese do processamento auditivo temporal foi definitivamente confirmada como causa única do TDL, enquanto a do déficit procedural foi refutada.', isCorrect: false, feedback: 'Incorreto. É o oposto: a hipótese auditiva foi qualificada como não necessária nem suficiente; nenhuma das duas foi "confirmada como causa única".' },
          { id: 'q-tl3-6-c', text: 'As duas hipóteses são idênticas e usam os mesmos testes comportamentais.', isCorrect: false, feedback: 'Incorreto. São hipóteses distintas, com paradigmas de teste diferentes (aprendizagem sequencial vs. discriminação auditiva temporal).' },
          { id: 'q-tl3-6-d', text: 'A hipótese do déficit procedural não tem qualquer base empírica e foi abandonada pela literatura.', isCorrect: false, feedback: 'Incorreto. Ela segue sendo discutida e parcialmente sustentada por metanálises, ainda que com efeito de magnitude modesta.' },
        ],
        correctAlternativeId: 'q-tl3-6-a',
        explanation: 'O padrão geral discutido no módulo é que hipóteses cognitivas de causa única tendem a explicar apenas parte dos casos e a não resistir bem à replicação, o que se aplica a ambas as hipóteses citadas.',
        hint: 'Releia a conclusão do estudo de Bishop, Carlyon, Deeks e Bishop (1999).',
        relatedConceptId: 'conc-tl3-processamentotemporal',
        referenceId: 'ref-tl3-bishopetal1999',
      },
      {
        id: 'q-tl3-7',
        stem: 'Uma família traz um estudo publicado em outro país afirmando que "o gene X foi encontrado em crianças com TDL" e pergunta se isso significa que o filho, com TDL, certamente tem esse gene. Qual é a resposta tecnicamente mais correta?',
        alternatives: [
          { id: 'q-tl3-7-a', text: 'Não necessariamente: genes candidatos são identificados em associações estatísticas em amostras específicas, frequentemente não replicadas, e a maioria das pessoas com TDL não apresenta qualquer variante genética específica já identificada como "a" causa.', isCorrect: true, feedback: 'Correto. É importante comunicar a diferença entre associação em estudo e presença garantida no indivíduo.' },
          { id: 'q-tl3-7-b', text: 'Sim, esse gene está presente em praticamente todos os casos de TDL, incluindo o do filho da família.', isCorrect: false, feedback: 'Incorreto. Nenhum gene candidato revisado neste módulo está presente na maioria dos casos de TDL.' },
          { id: 'q-tl3-7-c', text: 'É impossível responder, pois a genética não tem qualquer relação com o TDL.', isCorrect: false, feedback: 'Incorreto. Há evidência real de influência genética (herdabilidade), mas isso não equivale a um gene específico presente em todos os casos.' },
          { id: 'q-tl3-7-d', text: 'A família deveria buscar imediatamente um teste genético comercial para confirmar ou descartar o diagnóstico de TDL.', isCorrect: false, feedback: 'Incorreto. Não existe teste genético validado como critério diagnóstico do TDL; a orientação apropriada é encaminhar dúvidas genéticas a um profissional de genética clínica, sem prometer diagnóstico por essa via.' },
        ],
        correctAlternativeId: 'q-tl3-7-a',
        explanation: 'Essa questão trata do raciocínio clínico inicial ao lidar com informações genéticas trazidas por famílias, evitando tanto o alarmismo quanto a promessa de diagnóstico genético definitivo.',
        hint: 'Pense em como comunicar incerteza científica de forma responsável a uma família leiga.',
        relatedConceptId: 'conc-tl3-genecandidato',
      },
      {
        id: 'q-tl3-8',
        stem: 'Um relatório de avaliação neuropsicológica menciona "lateralização atípica da linguagem" em um adolescente com TDL. Qual conduta é mais coerente com a evidência revisada neste módulo?',
        alternatives: [
          { id: 'q-tl3-8-a', text: 'Considerar essa informação como um possível marcador associado à persistência do quadro, sem tratá-la como causa comprovada nem como critério diagnóstico isolado, e manter o foco da avaliação fonoaudiológica na linguagem funcional.', isCorrect: true, feedback: 'Correto. Essa conduta reflete a cautela de Whitehouse e Bishop (2008) ao interpretarem seus próprios achados.' },
          { id: 'q-tl3-8-b', text: 'Concluir que o adolescente terá, obrigatoriamente, TDL para o resto da vida, já que a lateralização atípica prova isso.', isCorrect: false, feedback: 'Incorreto. Lateralização atípica é um achado associado, não uma prova causal ou prognóstica definitiva.' },
          { id: 'q-tl3-8-c', text: 'Descartar a avaliação fonoaudiológica funcional, já que o achado de neuroimagem já é suficiente para o acompanhamento.', isCorrect: false, feedback: 'Incorreto. A avaliação funcional da linguagem continua sendo central e não deve ser substituída por achados de neuroimagem.' },
          { id: 'q-tl3-8-d', text: 'Rejeitar totalmente o achado por considerá-lo irrelevante e sem qualquer base científica.', isCorrect: false, feedback: 'Incorreto. O achado tem base em pesquisa (Whitehouse & Bishop, 2008); o problema é a extrapolação indevida, não a existência do achado.' },
        ],
        correctAlternativeId: 'q-tl3-8-a',
        explanation: 'A conduta correta equilibra o reconhecimento do achado científico com a cautela quanto às suas implicações causais e diagnósticas.',
        hint: 'Pense na distinção entre marcador associado e causa comprovada.',
        relatedConceptId: 'conc-tl3-lateralizacao',
        referenceId: 'ref-tl3-whitehousebishop2008',
      },
      {
        id: 'q-tl3-9',
        stem: 'Por que a hipótese de que "o TDL é causado por um único déficit cognitivo" (seja ele processamento auditivo, memória de trabalho, ou processamento de velocidade) é considerada insuficiente pela literatura revisada?',
        alternatives: [
          { id: 'q-tl3-9-a', text: 'Porque estudos mostram que nenhum desses déficits isolados está presente em todas as crianças com TDL, nem é suficiente, sozinho, para explicar a diversidade de perfis observados, sendo mais coerente um modelo de múltiplos fatores interagindo.', isCorrect: true, feedback: 'Correto. É essa a conclusão geral discutida no módulo, incluindo o caso específico do processamento auditivo temporal.' },
          { id: 'q-tl3-9-b', text: 'Porque nenhum desses déficits cognitivos jamais foi observado em nenhuma criança com TDL.', isCorrect: false, feedback: 'Incorreto. Esses déficits são observados em subgrupos de crianças com TDL; o problema é tratá-los como explicação única e universal.' },
          { id: 'q-tl3-9-c', text: 'Porque esses déficits cognitivos são exclusivos de crianças com dislexia, nunca ocorrendo no TDL.', isCorrect: false, feedback: 'Incorreto. Vários desses achados (por exemplo, aprendizagem procedural) foram estudados tanto em TDL quanto em dislexia.' },
          { id: 'q-tl3-9-d', text: 'Porque a avaliação cognitiva não tem qualquer relevância para a compreensão do TDL.', isCorrect: false, feedback: 'Incorreto. Esses constructos cognitivos são relevantes cientificamente; o problema é tratá-los como causa única.' },
        ],
        correctAlternativeId: 'q-tl3-9-a',
        explanation: 'O padrão observado na literatura é de múltiplos fatores contribuindo de forma variável entre crianças, e não de um único déficit cognitivo universal e suficiente.',
        hint: 'Pense no modelo de múltiplos déficits mencionado a partir de Bishop (2006).',
        relatedConceptId: 'conc-tl3-heterogeneidade',
      },
      {
        id: 'q-tl3-10',
        stem: 'Uma criança com TDL realiza exame de neuroimagem estrutural, cujo laudo não aponta nenhuma alteração. Diante disso, qual é a conduta clinicamente mais adequada?',
        alternatives: [
          { id: 'q-tl3-10-a', text: 'Manter o diagnóstico clínico de TDL com base na avaliação da linguagem, já que a ausência de achados estruturais em exame de imagem não invalida o diagnóstico comportamental.', isCorrect: true, feedback: 'Correto. Nenhum achado estrutural é necessário para o diagnóstico de TDL, que continua sendo clínico e comportamental.' },
          { id: 'q-tl3-10-b', text: 'Revisar o diagnóstico, já que a ausência de alteração estrutural contraria o diagnóstico de TDL.', isCorrect: false, feedback: 'Incorreto. Muitas crianças com TDL têm neuroimagem estrutural dentro da normalidade; isso não contradiz o diagnóstico clínico.' },
          { id: 'q-tl3-10-c', text: 'Solicitar imediatamente teste genético para explicar a ausência de achados estruturais.', isCorrect: false, feedback: 'Incorreto. Não há indicação, apenas por esse motivo, de investigação genética adicional.' },
          { id: 'q-tl3-10-d', text: 'Concluir que a criança não tem, na verdade, nenhuma dificuldade de linguagem.', isCorrect: false, feedback: 'Incorreto. O exame de imagem não é o critério que define a presença ou ausência de dificuldade de linguagem.' },
        ],
        correctAlternativeId: 'q-tl3-10-a',
        explanation: 'Essa questão exercita o raciocínio clínico central deste módulo: a neuroimagem não é exame diagnóstico do TDL, e um resultado normal não invalida o quadro clínico.',
        hint: 'Releia o trecho sobre o papel científico, e não diagnóstico, da neuroimagem no TDL.',
        relatedConceptId: 'conc-tl3-biomarcador',
      },
      {
        id: 'q-tl3-11',
        stem: 'Ao comparar os efeitos relatados por Krishnan, Watkins e Bishop (2016) para aprendizagem sequencial implícita, qual afirmação é mais precisa?',
        alternatives: [
          { id: 'q-tl3-11-a', text: 'A metanálise encontrou efeito pequeno e significativo para o TDL (0,33 desvio-padrão em 8 estudos) e efeito moderado para a dislexia (0,45 desvio-padrão em 9 estudos), indicando prejuízo real, porém de magnitude modesta e variável.', isCorrect: true, feedback: 'Correto. Esses são os valores relatados pelos próprios autores, que também alertam para a variação conforme idade e complexidade da sequência.' },
          { id: 'q-tl3-11-b', text: 'A metanálise não encontrou nenhuma diferença estatisticamente significativa entre TDL e controles nessas tarefas.', isCorrect: false, feedback: 'Incorreto. O efeito foi pequeno, mas estatisticamente significativo.' },
          { id: 'q-tl3-11-c', text: 'O efeito encontrado foi tão grande que essa tarefa poderia, isoladamente, ser usada como teste diagnóstico do TDL.', isCorrect: false, feedback: 'Incorreto. Um efeito de 0,33 desvio-padrão é pequeno e não sustenta uso diagnóstico isolado.' },
          { id: 'q-tl3-11-d', text: 'O efeito foi maior no TDL do que na dislexia.', isCorrect: false, feedback: 'Incorreto. O efeito relatado foi maior na dislexia (0,45) do que no TDL (0,33).' },
        ],
        correctAlternativeId: 'q-tl3-11-a',
        explanation: 'Interpretar corretamente o tamanho de efeito de uma metanálise é essencial para evitar tanto a negação quanto a superestimação de um achado real, mas modesto.',
        hint: 'Compare os dois valores de desvio-padrão mencionados no resumo.',
        relatedConceptId: 'conc-tl3-aprendizagemprocedural',
        referenceId: 'ref-tl3-krishnanwatkinsbishop2016',
      },
      {
        id: 'q-tl3-12',
        stem: 'Uma criança apresenta dificuldade de linguagem e possui diagnóstico confirmado de síndrome de Williams. Segundo a distinção discutida neste módulo (e no consenso CATALISE, já visto no Módulo 1), qual é a classificação mais adequada?',
        alternatives: [
          { id: 'q-tl3-12-a', text: 'Não se trata de TDL isolado, pois a síndrome de Williams é uma condição biomédica diferenciadora conhecida; a dificuldade de linguagem deve ser descrita como associada a essa síndrome, não como TDL — mas isso muda apenas a nomenclatura e o enquadramento etiológico, não elimina a necessidade de descrever o perfil linguístico individual da criança nem permite presumir a gravidade do quadro apenas pelo diagnóstico sindrômico, já que crianças com a mesma síndrome podem apresentar perfis linguísticos bastante diferentes entre si.', isCorrect: true, feedback: 'Correto. Isso é coerente com a distinção entre TDL e transtorno de linguagem associado a uma condição diferenciadora, e com o catálogo de síndromes genéticas discutido no capítulo de genética do Tratado; o diagnóstico sindrômico não substitui o diagnóstico funcional da linguagem.' },
          { id: 'q-tl3-12-b', text: 'Trata-se de TDL clássico, já que qualquer dificuldade de linguagem em uma criança deve ser chamada de TDL.', isCorrect: false, feedback: 'Incorreto. O TDL é definido, por consenso, pela ausência de uma condição biomédica diferenciadora conhecida.' },
          { id: 'q-tl3-12-c', text: 'A presença de uma síndrome genética exclui qualquer necessidade de avaliação ou intervenção fonoaudiológica, e já permite presumir a gravidade da dificuldade de linguagem sem avaliação individual.', isCorrect: false, feedback: 'Incorreto. A intervenção fonoaudiológica continua sendo necessária, e o perfil linguístico individual ainda precisa ser descrito: crianças com a mesma síndrome podem ter graus de comprometimento de linguagem muito diferentes entre si.' },
          { id: 'q-tl3-12-d', text: 'A classificação depende exclusivamente do resultado de um exame de neuroimagem, não do diagnóstico genético.', isCorrect: false, feedback: 'Incorreto. Nesse caso, é o diagnóstico genético/sindrômico confirmado que define a condição diferenciadora, não a neuroimagem.' },
        ],
        correctAlternativeId: 'q-tl3-12-a',
        explanation: 'Essa questão retoma, no contexto neurobiológico, a diferenciação terminológica do consenso CATALISE entre TDL e transtorno de linguagem associado a uma condição diferenciadora conhecida: a mudança é de nomenclatura e enquadramento etiológico, não de necessidade de avaliação — o diagnóstico sindrômico não determina automaticamente a gravidade nem substitui a descrição do perfil linguístico funcional, que pode variar bastante entre crianças com a mesma síndrome.',
        hint: 'Releia a definição de "condição diferenciadora" no glossário deste módulo.',
        relatedConceptId: 'conc-tl3-agregacaofamiliar',
        referenceId: 'ref-tl3-giachetti2014',
      },
    ],
    associations: [
      {
        id: 'assoc-tl3-1',
        instruction: 'Associe cada conceito à sua definição correta.',
        pairs: [
          { id: 'p-tl3-1', left: 'Herdabilidade', right: 'Proporção da variação populacional de uma característica explicada por fatores genéticos' },
          { id: 'p-tl3-2', left: 'Gene candidato', right: 'Gene associado estatisticamente a um transtorno, sem relação causal comprovada isoladamente' },
          { id: 'p-tl3-3', left: 'Herdabilidade perdida', right: 'Lacuna entre herdabilidade estimada e a explicada por genes específicos já identificados' },
          { id: 'p-tl3-4', left: 'Pleiotropia', right: 'Um mesmo gene influenciando múltiplos fenótipos não relacionados' },
          { id: 'p-tl3-5', left: 'Agregação familiar', right: 'Maior frequência de um transtorno entre parentes de primeiro grau de afetados' },
          { id: 'p-tl3-6', left: 'Arquitetura poligênica', right: 'Muitas variantes genéticas comuns de efeito pequeno atuando em conjunto' },
          { id: 'p-tl3-7', left: 'Condição diferenciadora', right: 'Condição biomédica conhecida que muda a nomenclatura diagnóstica do transtorno de linguagem' },
          { id: 'p-tl3-8', left: 'Achado de grupo', right: 'Diferença estatística média entre grupos, não aplicável automaticamente a cada indivíduo' },
        ],
      },
      {
        id: 'assoc-tl3-2',
        instruction: 'Associe cada achado ou método de pesquisa ao cuidado de interpretação mais relevante para ele.',
        pairs: [
          { id: 'p-tl3-9', left: 'Estudo de Badcock et al. (2012) sobre estrutura cerebral', right: 'Amostra pequena (10 casos de TDL); resultado deve ser visto como hipótese, não conclusão definitiva' },
          { id: 'p-tl3-10', left: 'Genes candidatos CNTNAP2, ATP2C2, CMIP', right: 'Associações ainda não plenamente replicadas em amostras independentes' },
          { id: 'p-tl3-11', left: 'Lateralização atípica (Whitehouse & Bishop, 2008)', right: 'Não está presente em todos os casos; pode ser marcador de persistência, não causa comprovada' },
          { id: 'p-tl3-12', left: 'Hipótese do processamento auditivo temporal', right: 'Testada diretamente e considerada nem necessária nem suficiente para causar o transtorno' },
          { id: 'p-tl3-13', left: 'Metanálise de tempo de reação serial', right: 'Efeito estatisticamente significativo, porém de magnitude pequena a moderada' },
          { id: 'p-tl3-14', left: 'Correlação entre volume do caudado e repetição de pseudopalavras', right: 'Correlação não implica, por si só, relação de causa e efeito' },
          { id: 'p-tl3-15', left: 'Estudos majoritariamente com falantes de inglês', right: 'Generalização direta para o português exige verificação empírica própria' },
        ],
      },
    ],
    decisionExercises: [
      {
        id: 'dec-tl3-1',
        situation:
          'Os pais de uma criança de 7 anos com TDL trazem o laudo de uma ressonância magnética, solicitada por outro profissional, que descreve "discreta assimetria em região temporal, sem significado patológico definido segundo o radiologista". Eles perguntam se isso "explica" o TDL do filho e se muda a conduta fonoaudiológica.',
        options: [
          { id: 'dec-tl3-1-o1', text: 'Explicar que achados de neuroimagem descritos como discretos e sem significado patológico definido não confirmam nem afastam o diagnóstico de TDL, que continua sendo clínico; manter o plano de avaliação e intervenção fonoaudiológica com base no perfil linguístico e funcional da criança, e orientar os pais a discutir o achado incidental com o médico solicitante (ou um neurologista/neuropediatra), já que a interpretação clínica de um achado estrutural está fora da competência do fonoaudiólogo.', consequence: 'Orientação tecnicamente correta, que evita alarmismo, mantém o foco na avaliação funcional e respeita os limites da atuação fonoaudiológica ao encaminhar a interpretação médica do achado para o profissional competente.', explanation: 'Nenhum achado isolado de neuroimagem, especialmente um descrito como incidental e sem significado patológico claro pelo próprio radiologista, deve redirecionar a conduta fonoaudiológica nem ser reinterpretado por um profissional fora de sua competência; o acompanhamento médico do achado é um cuidado paralelo, não um pré-requisito para a intervenção fonoaudiológica.', isRecommended: true },
          { id: 'dec-tl3-1-o2', text: 'Afirmar aos pais que esse achado explica definitivamente a causa do TDL do filho.', consequence: 'Comunicação imprecisa, que atribui causalidade a um achado que o próprio radiologista descreveu como sem significado patológico definido.', explanation: 'Isso contraria tanto o laudo original quanto a evidência científica sobre achados de neuroimagem no TDL, que são de grupo e não causais em nível individual.', isRecommended: false },
          { id: 'dec-tl3-1-o3', text: 'Recomendar a suspensão da terapia fonoaudiológica até que exames adicionais de imagem "confirmem" a causa exata do TDL.', consequence: 'Atraso desnecessário na intervenção, baseado na premissa incorreta de que a fonoaudiologia depende de uma causa neurobiológica confirmada por imagem.', explanation: 'A intervenção fonoaudiológica é indicada com base no perfil funcional e diagnóstico clínico, independentemente da elucidação completa da causa neurobiológica.', isRecommended: false },
          { id: 'dec-tl3-1-o4', text: 'Desconsiderar totalmente o laudo, orientando os pais a nunca mais realizarem exames de neuroimagem para o filho.', consequence: 'Postura excessivamente rígida, que pode negar informação clinicamente útil em outros contextos (por exemplo, se houver suspeita de outra condição neurológica concomitante).', explanation: 'O ponto não é rejeitar a neuroimagem em si, mas evitar que um achado incidental e inespecífico seja usado como explicação causal do TDL.', isRecommended: false },
        ],
      },
      {
        id: 'dec-tl3-2',
        situation:
          'Uma mãe relata que um teste genético comercial, feito por iniciativa própria da família, "encontrou uma variante associada a dificuldades de linguagem" no exame do filho, e pergunta se isso significa que o irmão mais novo, ainda bebê, certamente terá o mesmo problema.',
        options: [
          { id: 'dec-tl3-2-o1', text: 'Explicar que uma variante genética associada estatisticamente a dificuldades de linguagem em estudos de população não é o mesmo que uma causa determinística e individual, que testes genéticos diretos ao consumidor têm limitações de interpretação (incluindo variantes de significado clínico incerto), e que o risco do irmão mais novo deve ser acompanhado pelo desenvolvimento observado, não previsto por esse resultado isolado; caso a família queira aprofundar a interpretação genética, o encaminhamento apropriado é a um profissional de genética clínica, já que o aconselhamento genético não é uma função exclusiva do fonoaudiólogo.', consequence: 'Orientação tecnicamente adequada, que reduz ansiedade familiar desnecessária, reconhece os limites da própria atuação profissional e mantém o foco no acompanhamento do desenvolvimento real da criança.', explanation: 'Genes candidatos associados ao TDL têm, segundo a literatura revisada, efeito pequeno, replicação incerta e não funcionam como preditores individuais certeiros; da mesma forma, a ausência de uma variante associada em um exame genético não exclui a possibilidade de a criança vir a apresentar TDL, já que a maior parte do componente genético do transtorno ainda não foi mapeada em genes específicos.', isRecommended: true },
          { id: 'dec-tl3-2-o2', text: 'Confirmar que o irmão mais novo certamente desenvolverá TDL, já que "está no gene da família".', consequence: 'Afirmação alarmista e cientificamente incorreta, que pode gerar ansiedade familiar e expectativas negativas desnecessárias sobre o desenvolvimento do bebê.', explanation: 'Nenhuma variante genética associada ao TDL discutida na literatura tem poder preditivo individual dessa magnitude.', isRecommended: false },
          { id: 'dec-tl3-2-o3', text: 'Descartar totalmente a informação genética como irrelevante, sem recomendar nenhum tipo de acompanhamento preventivo do desenvolvimento do irmão mais novo.', consequence: 'Perde a oportunidade de usar a informação de risco familiar (agregação familiar) para orientar um acompanhamento atento, ainda que não determinístico, do desenvolvimento do bebê.', explanation: 'A agregação familiar é um fator de risco legítimo a ser considerado no acompanhamento, mesmo que não determine o desfecho.', isRecommended: false },
          { id: 'dec-tl3-2-o4', text: 'Encaminhar a família para repetir o teste genético em outro laboratório na esperança de obter um resultado diferente.', consequence: 'Não resolve o problema conceitual de interpretação do resultado e pode gerar gastos e expectativas desnecessárias.', explanation: 'O problema não é a confiabilidade laboratorial do teste, mas a interpretação clínica do que um gene candidato associado realmente significa.', isRecommended: false },
        ],
      },
    ],
    fictionalCases: [
      {
        id: 'case-tl3-1',
        title: 'Caso fictício: Enzo, 4 anos',
        description:
          'Enzo tem 4 anos e apresenta atraso perceptível na linguagem expressiva, com vocabulário reduzido para a idade e dificuldade em formar frases com mais de duas palavras. Seu pai também teve, na infância, acompanhamento fonoaudiológico por dificuldades de fala e linguagem, embora não tenha registro detalhado do diagnóstico da época. Um exame neurológico de rotina, solicitado pelo pediatra, não identificou alterações estruturais relevantes. A família, muito ansiosa, trouxe para a consulta fonoaudiológica um artigo de divulgação científica, encontrado na internet, que menciona "genes ligados à linguagem" e pergunta se seria útil fazer um teste genético para "descobrir logo a causa" e assim saber "se o problema vai ser leve ou grave". Enzo ainda não passou por avaliação fonoaudiológica estruturada completa.',
        disclaimer:
          'Este é um caso fictício, construído exclusivamente para fins didáticos. Não representa nenhuma pessoa real e não deve ser utilizado como modelo de laudo, diagnóstico definitivo, indicação de exame complementar ou conduta clínica prescritiva. A avaliação e o diagnóstico reais exigem exame presencial completo, investigação complementar pertinente e julgamento clínico individualizado ao longo do tempo.',
        questions: [
          {
            id: 'case-tl3-1-q1',
            stem: 'Diante do histórico familiar (pai com dificuldades de fala/linguagem na infância) e do exame neurológico sem alterações estruturais relevantes, qual é a interpretação mais coerente com os princípios discutidos neste módulo?',
            alternatives: [
              { id: 'case-tl3-1-q1-a', text: 'O histórico familiar é um fator de risco relevante a registrar, e o exame neurológico normal não descarta nem confirma um transtorno de linguagem, já que o diagnóstico depende da avaliação funcional da linguagem, não de achados estruturais.', isCorrect: true, feedback: 'Correto. Nem a agregação familiar nem um exame neurológico normal substituem a avaliação clínica da linguagem em si.' },
              { id: 'case-tl3-1-q1-b', text: 'Como o exame neurológico não encontrou alterações, pode-se descartar qualquer possibilidade de transtorno de linguagem em Enzo.', isCorrect: false, feedback: 'Incorreto. Muitas crianças com TDL têm exames estruturais dentro da normalidade; isso não descarta o diagnóstico clínico.' },
              { id: 'case-tl3-1-q1-c', text: 'O histórico do pai já é suficiente, isoladamente, para fechar o diagnóstico de TDL em Enzo, sem necessidade de avaliação da criança.', isCorrect: false, feedback: 'Incorreto. Agregação familiar é um fator de risco, não um substituto para a avaliação individual da criança.' },
              { id: 'case-tl3-1-q1-d', text: 'A ausência de registro detalhado do diagnóstico do pai invalida qualquer relevância desse dado para o caso atual.', isCorrect: false, feedback: 'Incorreto. Mesmo sem detalhamento diagnóstico formal, um histórico de dificuldades de fala/linguagem no pai é uma informação de risco familiar relevante a considerar.' },
            ],
            correctAlternativeId: 'case-tl3-1-q1-a',
            explanation: 'O caso ilustra que fatores de risco familiares e exames neurológicos normais devem ser integrados à história, mas não substituem a avaliação funcional da linguagem para o diagnóstico.',
            hint: 'Pense na diferença entre "fator de risco a registrar" e "critério que fecha ou descarta diagnóstico".',
            relatedConceptId: 'conc-tl3-agregacaofamiliar',
          },
          {
            id: 'case-tl3-1-q2',
            stem: 'Como responder, de forma tecnicamente correta e responsável, ao pedido da família por um teste genético para "descobrir logo a causa" e prever a gravidade do quadro de Enzo?',
            alternatives: [
              { id: 'case-tl3-1-q2-a', text: 'Explicar que, segundo a literatura atual, não existe teste genético validado como critério diagnóstico do TDL nem capaz de prever isoladamente a gravidade do quadro, e que a prioridade é completar a avaliação fonoaudiológica estruturada de Enzo; dúvidas específicas sobre genética podem ser discutidas com um profissional de genética clínica, se a família assim desejar.', isCorrect: true, feedback: 'Correto. Essa resposta é honesta quanto aos limites da genética atual e mantém o foco na avaliação fonoaudiológica.' },
              { id: 'case-tl3-1-q2-b', text: 'Concordar que um teste genético comercial vai revelar exatamente a causa e a gravidade esperada do quadro de Enzo.', isCorrect: false, feedback: 'Incorreto. Isso superestima o poder preditivo dos testes genéticos atualmente disponíveis para o TDL.' },
              { id: 'case-tl3-1-q2-c', text: 'Recusar-se a conversar sobre o assunto, alegando que genética não tem nenhuma relação com transtornos de linguagem.', isCorrect: false, feedback: 'Incorreto. Há evidência real de influência genética (herdabilidade); o problema é a expectativa de um teste diagnóstico definitivo, não a relevância do tema em si.' },
              { id: 'case-tl3-1-q2-d', text: 'Adiar toda e qualquer avaliação fonoaudiológica até que a família decida se fará ou não o teste genético.', isCorrect: false, feedback: 'Incorreto. A avaliação fonoaudiológica funcional não depende de resultado genético para ser iniciada.' },
            ],
            correctAlternativeId: 'case-tl3-1-q2-a',
            explanation: 'A resposta adequada equilibra honestidade científica sobre os limites da genética atual com o encaminhamento apropriado da avaliação fonoaudiológica.',
            hint: 'Pense em como comunicar, sem alarmismo nem falsas promessas, os limites reais da genética para o TDL.',
            relatedConceptId: 'conc-tl3-genecandidato',
          },
          {
            id: 'case-tl3-1-q3',
            stem: 'Com base apenas nas informações fornecidas sobre Enzo, qual conclusão é diagnosticamente adequada neste momento?',
            alternatives: [
              { id: 'case-tl3-1-q3-a', text: 'Nenhum diagnóstico definitivo pode ser estabelecido apenas com as informações disponíveis; é necessário completar a avaliação fonoaudiológica estruturada da linguagem de Enzo antes de qualquer conclusão diagnóstica.', isCorrect: true, feedback: 'Correto. As informações levantam hipóteses relevantes (atraso perceptível, fator de risco familiar), mas não substituem a avaliação completa.' },
              { id: 'case-tl3-1-q3-b', text: 'Enzo certamente tem TDL, com a mesma gravidade que o pai teve na infância.', isCorrect: false, feedback: 'Incorreto. Ainda falta a avaliação fonoaudiológica estruturada, e a gravidade não pode ser inferida do histórico do pai.' },
              { id: 'case-tl3-1-q3-c', text: 'Enzo não tem nenhuma dificuldade real, já que se trata apenas de "atraso de fala" que qualquer criança pode ter.', isCorrect: false, feedback: 'Incorreto. Vocabulário reduzido e dificuldade em formar frases aos 4 anos são sinais que merecem investigação, não devendo ser minimizados sem avaliação.' },
              { id: 'case-tl3-1-q3-d', text: 'O exame neurológico normal já é suficiente para fechar o diagnóstico de TDL.', isCorrect: false, feedback: 'Incorreto. O exame neurológico não é o critério diagnóstico do TDL, que é eminentemente clínico e comportamental.' },
            ],
            correctAlternativeId: 'case-tl3-1-q3-a',
            explanation: 'O caso reforça que hipóteses relevantes levantadas por fatores de risco e sinais de alerta não substituem a conclusão diagnóstica, que depende de avaliação fonoaudiológica completa.',
            hint: 'Pense nos limites de qualquer conclusão baseada em dados parciais e incompletos.',
            relatedConceptId: 'conc-tl3-heterogeneidade',
          },
        ],
      },
    ],
  },

  review: {
    flashcards: [
      { id: 'fc-tl3-f1', front: 'Qual é a estimativa de herdabilidade do TDL relatada por Bishop (2006)?', back: 'Tipicamente entre 0,5 e 0,75 em crianças em idade escolar, indicando influência genética substancial, mas não determinística.', tags: ['genetica', 'herdabilidade'] },
      { id: 'fc-tl3-f2', front: 'O FOXP2 é "o gene da linguagem"?', back: 'Não. É um fator de transcrição que regula outros genes; a mutação da família KE está associada a alterações em múltiplas estruturas, e a maioria das pessoas com TDL não tem alteração nesse gene.', tags: ['genetica', 'foxp2'] },
      { id: 'fc-tl3-f3', front: 'Que modelo genético melhor descreve o TDL, segundo Bishop (2006)?', back: 'Um modelo poligênico e multifatorial, com múltiplos genes de efeito pequeno interagindo com fatores ambientais — semelhante a doenças complexas como asma ou diabetes.', tags: ['genetica', 'poligenica'] },
      { id: 'fc-tl3-f4', front: 'Quais genes candidatos foram discutidos por Newbury e Monaco (2010) além do FOXP2?', back: 'CNTNAP2 (associado a medidas de linguagem) e ATP2C2/CMIP (associados a memória fonológica de curto prazo), com replicação ainda incerta.', tags: ['genetica', 'genes-candidatos'] },
      { id: 'fc-tl3-f5', front: 'O que é "herdabilidade perdida" (missing heritability)?', back: 'A diferença entre a herdabilidade estimada por estudos com gêmeos e a proporção efetivamente explicada pelos genes específicos já identificados.', tags: ['genetica', 'limitacoes'] },
      { id: 'fc-tl3-f6', front: 'O que é pleiotropia, e por que é relevante para interpretar genes candidatos do TDL?', back: 'É quando um mesmo gene influencia múltiplos fenótipos não relacionados (ex: FOXP1 e vitiligo); mostra que um achado genético não é automaticamente específico da linguagem.', tags: ['genetica', 'cuidado'] },
      { id: 'fc-tl3-f7', front: 'O que o SLI Consortium encontrou em seus estudos de varredura genômica?', back: 'Regiões candidatas nos cromossomos 13, 16 e 19, com amostras pequenas e valores de p limítrofes nos estudos originais.', tags: ['genetica', 'linkage'] },
      { id: 'fc-tl3-f8', front: 'Que achados estruturais Badcock et al. (2012) relataram em crianças/adultos com TDL?', back: 'Aumento de substância cinzenta no giro frontal inferior esquerdo e redução no núcleo caudado direito e córtex temporal superior bilateral, em uma amostra pequena (10 casos de TDL).', tags: ['neuroimagem', 'estrutura'] },
      { id: 'fc-tl3-f9', front: 'Com que medida cognitiva o volume do núcleo caudado se correlacionou no estudo de Badcock et al. (2012)?', back: 'Com o desempenho em repetição de pseudopalavras e praxia oral.', tags: ['neuroimagem', 'memoria-trabalho'] },
      { id: 'fc-tl3-f10', front: 'Por que o achado de Badcock et al. (2012) deve ser interpretado com cautela?', back: 'Porque a amostra foi pequena (10 casos de TDL, 6 irmãos, 16 controles), o que limita a generalização até que haja replicação em amostras maiores.', tags: ['limitacoes', 'amostra'] },
      { id: 'fc-tl3-f11', front: 'O que Whitehouse e Bishop (2008) encontraram sobre lateralização em adultos com TDL persistente?', back: 'Lateralização atípica (bilateral ou à direita) significativamente mais comum do que em controles típicos e do que em adultos com histórico de TDL sem persistência.', tags: ['lateralizacao', 'neuroimagem'] },
      { id: 'fc-tl3-f12', front: 'A lateralização atípica é encontrada em todos os casos de TDL?', back: 'Não. É um achado de grupo, mais frequente no TDL persistente, mas não universal, e deve ser vista como possível marcador, não como causa comprovada.', tags: ['lateralizacao', 'cuidado'] },
      { id: 'fc-tl3-f13', front: 'O que concluíram Bishop, Carlyon, Deeks e Bishop (1999) sobre processamento temporal auditivo e transtorno de linguagem?', back: 'Que o comprometimento do processamento temporal auditivo não é nem necessário nem suficiente para causar transtorno de linguagem em crianças.', tags: ['processamento-auditivo', 'cuidado'] },
      { id: 'fc-tl3-f14', front: 'O que propõem Krishnan, Watkins e Bishop (2016) sobre circuitos corticostriatais no TDL?', back: 'Que dificuldades de aprendizagem sequencial no TDL podem envolver imaturidade de circuitos subcorticais (estriado), complementando o foco tradicional em áreas corticais da linguagem.', tags: ['corticostriatal', 'aprendizagem'] },
      { id: 'fc-tl3-f15', front: 'O que é a hipótese do déficit procedural (Ullman & Pierpont)?', back: 'A proposta de que o TDL envolve principalmente comprometimento do sistema de aprendizagem procedural (implícito), com relativa preservação do sistema declarativo (explícito).', tags: ['aprendizagem-procedural'] },
      { id: 'fc-tl3-f16', front: 'Qual foi o tamanho de efeito da metanálise de 8 estudos de tempo de reação serial no TDL?', back: '0,33 desvio-padrão — um efeito pequeno, porém estatisticamente significativo.', tags: ['aprendizagem-procedural', 'metanalise'] },
      { id: 'fc-tl3-f17', front: 'Qual foi o tamanho de efeito da metanálise equivalente na dislexia?', back: '0,45 desvio-padrão (9 estudos) — um efeito moderado, maior do que o encontrado no TDL.', tags: ['metanalise', 'dislexia'] },
      { id: 'fc-tl3-f18', front: 'A aprendizagem declarativa está totalmente preservada em crianças com TDL?', back: 'Não totalmente: embora seja uma área de força relativa, o desempenho em tarefas declarativas (como memorização de listas) ainda pode ser inferior a controles, em parte por limitações de memória de trabalho.', tags: ['memoria-declarativa'] },
      { id: 'fc-tl3-f19', front: 'Que efeito ambiental Bishop (2006) relata sobre percepção auditiva não verbal em estudos com gêmeos?', back: 'Efeitos ambientais compartilhados explicaram cerca de 60% da variância nessa tarefa específica, com a experiência musical respondendo por quase metade desse efeito.', tags: ['ambiente', 'interacao'] },
      { id: 'fc-tl3-f20', front: 'O que significa dizer que um achado de neuroimagem é um "achado de grupo"?', back: 'Que descreve uma diferença estatística média entre grupos, sem implicar que todo indivíduo do grupo apresente exatamente esse padrão.', tags: ['achado-de-grupo', 'cuidado'] },
      { id: 'fc-tl3-f21', front: 'Existe, atualmente, algum biomarcador genético ou de neuroimagem validado como critério diagnóstico do TDL?', back: 'Não. Nenhum achado revisado neste módulo atingiu esse status; o diagnóstico continua sendo clínico e comportamental.', tags: ['biomarcador', 'diagnostico'] },
      { id: 'fc-tl3-f22', front: 'O que é "condição diferenciadora", no contexto da genética discutida neste módulo?', back: 'Uma condição biomédica conhecida (ex.: síndrome genética identificável) que, quando presente, muda a nomenclatura diagnóstica para "transtorno de linguagem associado a X", em vez de TDL.', tags: ['catalise', 'terminologia'] },
      { id: 'fc-tl3-f23', front: 'Por que a maioria dos achados deste módulo não deve ser generalizada diretamente para crianças brasileiras?', back: 'Porque a maior parte dos estudos de genética e neuroimagem revisados foi conduzida com falantes de inglês e amostras específicas, exigindo verificação empírica própria antes de generalizar.', tags: ['limitacoes', 'portugues'] },
      { id: 'fc-tl3-f24', front: 'Correlação entre um achado cerebral e uma medida cognitiva comprova causalidade?', back: 'Não. Correlação não implica, por si só, relação de causa e efeito nem direção do efeito.', tags: ['correlacao', 'cuidado'] },
      { id: 'fc-tl3-f25', front: 'Qual é a relevância clínica da agregação familiar do TDL na anamnese?', back: 'É um fator de risco relevante a registrar, mas não permite prever com certeza o desfecho de um parente específico nem substitui a avaliação individual.', tags: ['agregacao-familiar', 'anamnese'] },
      { id: 'fc-tl3-f26', front: 'Por que a plasticidade cerebral infantil é mencionada neste módulo?', back: 'Porque sustenta a lógica da intervenção precoce, mesmo sem uma causa biológica específica totalmente elucidada para cada criança.', tags: ['plasticidade', 'intervencao-precoce'] },
      { id: 'fc-tl3-f27', front: 'O que caracteriza um "gene candidato" em oposição a uma causa comprovada?', back: 'Um gene identificado por associação estatística com um transtorno, sem que isso comprove, isoladamente, relação causal funcional já estabelecida.', tags: ['genetica', 'terminologia'] },
      { id: 'fc-tl3-f28', front: 'A hipótese de múltiplos déficits (Bishop, 2006) explica o quê sobre a gravidade do TDL?', back: 'Que o comprometimento simultâneo de duas ou mais rotas cognitivas/neurobiológicas está associado a quadros mais graves, enquanto o comprometimento de apenas uma rota pode ser compensado.', tags: ['heterogeneidade', 'multiplos-deficits'] },
    ],
    finalSynthesis:
      'O Transtorno do Desenvolvimento da Linguagem tem base neurobiológica real, mas multifatorial: estudos com gêmeos mostram herdabilidade substancial (0,5 a 0,75), porém segundo um modelo poligênico, comparável a doenças complexas como asma ou diabetes, e não a um padrão de gene único. Genes candidatos como FOXP2, CNTNAP2, ATP2C2 e CMIP mostram associações relevantes, mas ainda carecem de replicação robusta e não estão presentes na maioria dos casos — a chamada "herdabilidade perdida" lembra que boa parte do componente genético permanece por mapear. No plano neurobiológico, achados estruturais (como no estudo de Badcock et al., 2012) e de lateralização (Whitehouse & Bishop, 2008) são heterogêneos entre estudos, obtidos em amostras pequenas, e configuram achados de grupo — não critérios diagnósticos individuais. Modelos cognitivos como a hipótese do déficit procedural e os circuitos corticostriatais (Krishnan, Watkins & Bishop, 2016) ampliam a compreensão sobre como crianças com TDL aprendem sequências e regularidades, com efeitos reais, porém modestos. A hipótese histórica do processamento auditivo temporal foi diretamente testada e qualificada como nem necessária nem suficiente (Bishop, Carlyon, Deeks & Bishop, 1999), ilustrando um padrão recorrente: nenhuma causa única — genética, estrutural, funcional ou cognitiva — explica todos os casos de TDL. Por isso, não existe, até o momento, biomarcador genético ou de neuroimagem validado como critério diagnóstico ou prognóstico individual; o diagnóstico do TDL continua sendo eminentemente clínico e comportamental. Para a prática fonoaudiológica, isso significa comunicar às famílias, com honestidade científica, os limites reais da genética e da neuroimagem atuais, sem prometer respostas definitivas que a ciência ainda não tem, e sem deixar de valorizar a intervenção precoce, sustentada pela plasticidade do desenvolvimento infantil. A maior parte dessa base de evidências vem de estudos com falantes de inglês, o que exige cautela adicional antes de generalizar diretamente para crianças brasileiras — tema que será retomado, já com foco na avaliação e na intervenção, no Módulo 4.',
  },

  references: [
    {
      id: 'ref-tl3-bishop2006',
      authors: 'BISHOP, Dorothy V. M.',
      title: 'What Causes Specific Language Impairment in Children?',
      source: 'Current Directions in Psychological Science, 15(5), 217-221, 2006. Acesso integral nesta auditoria: artigo lido na íntegra via PubMed Central (PMC2582396, acesso aberto).',
      year: 2006,
      doi: '10.1111/j.1467-8721.2006.00439.x',
      usedIn: ['learn.summary', 'learn.essentialConcepts', 'learn.evidence', 'learn.limitations', 'apply.questions'],
    },
    {
      id: 'ref-tl3-newburymonaco2010',
      authors: 'NEWBURY, Dianne F.; MONACO, Anthony P.',
      title: 'Genetic Advances in the Study of Speech and Language Disorders',
      source: 'Neuron, 68(2), 309-320, 2010. Acesso integral nesta auditoria: texto completo obtido via PubMed Central (PMC2977079, acesso aberto), com citações diretas conferidas.',
      year: 2010,
      doi: '10.1016/j.neuron.2010.10.001',
      usedIn: ['learn.summary', 'learn.essentialConcepts', 'learn.evidence', 'learn.limitations', 'apply.questions'],
    },
    {
      id: 'ref-tl3-krishnanwatkinsbishop2016',
      authors: 'KRISHNAN, Saloni; WATKINS, Kate E.; BISHOP, Dorothy V. M.',
      title: 'Neurobiological Basis of Language Learning Difficulties',
      source: 'Trends in Cognitive Sciences, 20(9), 701-714, 2016. Acesso integral nesta auditoria: artigo lido na íntegra (acesso aberto, licença CC BY), incluindo metanálises de aprendizagem sequencial e discussão de sistemas corticostriatais.',
      year: 2016,
      doi: '10.1016/j.tics.2016.06.012',
      usedIn: ['learn.summary', 'learn.essentialConcepts', 'learn.evidence', 'learn.limitations', 'apply.questions'],
    },
    {
      id: 'ref-tl3-badcock2012',
      authors: 'BADCOCK, Nicholas A.; BISHOP, Dorothy V. M.; HARDIMAN, Mervyn J.; BARRY, Johanna G.; WATKINS, Kate E.',
      title: 'Co-localisation of Abnormal Brain Structure and Function in Specific Language Impairment',
      source: 'Brain and Language, 120(3-4), 310-320, 2012. Acesso integral nesta auditoria: texto completo obtido via PubMed Central (PMC3315677, acesso aberto), com citações diretas conferidas; amostra pequena reconhecida pelos próprios autores (10 casos de TDL, 6 irmãos, 16 controles).',
      year: 2012,
      doi: '10.1016/j.bandl.2011.10.006',
      usedIn: ['learn.summary', 'learn.evidence', 'learn.limitations', 'apply.questions'],
    },
    {
      id: 'ref-tl3-whitehousebishop2008',
      authors: 'WHITEHOUSE, Andrew J. O.; BISHOP, Dorothy V. M.',
      title: 'Cerebral Dominance for Language Function in Adults with Specific Language Impairment or Autism',
      source: 'Brain, 131(12), 3193-3200, 2008. DOI: 10.1093/brain/awn266. Acesso integral nesta auditoria: artigo lido na íntegra (acesso aberto, licença Creative Commons, obtido via Oxford University Research Archive), incluindo métodos, amostra (n=11 SLI; n=9 SLI-history; n=11 TEA; n=11 típico), resultados estatísticos completos (percentuais de lateralização por grupo, teste qui-quadrado) e discussão, com as limitações e ressalvas reconhecidas pelos próprios autores.',
      year: 2008,
      doi: '10.1093/brain/awn266',
      usedIn: ['learn.summary', 'learn.essentialConcepts', 'learn.evidence', 'learn.limitations', 'apply.questions'],
    },
    {
      id: 'ref-tl3-bishopetal1999',
      authors: 'BISHOP, Dorothy V. M.; CARLYON, Robert P.; DEEKS, John M.; BISHOP, Sarah J.',
      title: 'Auditory Temporal Processing Impairment: Neither Necessary nor Sufficient for Causing Language Impairment in Children',
      source: 'Journal of Speech, Language, and Hearing Research, 42(6), 1295-1310, 1999. REFERÊNCIA NÃO CONFIRMADA EM TEXTO INTEGRAL NESTA AUDITORIA — REVISÃO HUMANA NECESSÁRIA quanto aos resultados e à discussão completos: buscas legítimas em PubMed, Europe PMC e no repositório institucional de Oxford (ORA) não localizaram versão de acesso aberto; o periódico (ASHA) é pago e o artigo não foi lido na íntegra. O desenho do estudo (gêmeos), o tamanho da amostra e a conclusão central (expressa já no próprio título) foram confirmados via busca; nenhuma afirmação central deste módulo depende exclusivamente desta fonte.',
      year: 1999,
      usedIn: ['learn.summary', 'learn.essentialConcepts', 'learn.evidence', 'learn.limitations', 'apply.questions'],
    },
    {
      id: 'ref-tl3-giachetti2014',
      authors: 'GIACHETTI, Célia Maria.',
      title: 'Diagnóstico Fonoaudiológico em Genética',
      source: 'In: MARCHESAN, Irene Q.; SILVA, Hilton J.; TOMÉ, Marileda C. (orgs.). Tratado das Especialidades em Fonoaudiologia. Rio de Janeiro: Guanabara Koogan, 2014, cap. 64, p. 958-968. Acesso integral nesta auditoria: capítulo lido na íntegra em cópia do Tratado disponível no acervo do projeto.',
      year: 2014,
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-tl3-hageacosta2014',
      authors: 'HAGE, Simone Rocha de Vasconcellos; ACOSTA RODRIGUEZ, Victor Manoel.',
      title: 'Distúrbio Específico de Linguagem – Aspectos Clínicos e Educacionais',
      source: 'In: MARCHESAN, Irene Q.; SILVA, Hilton J.; TOMÉ, Marileda C. (orgs.). Tratado das Especialidades em Fonoaudiologia. Rio de Janeiro: Guanabara Koogan, 2014, cap. 75, p. 1069-1076. Acesso integral nesta auditoria: capítulo lido na íntegra em cópia do Tratado disponível no acervo do projeto.',
      year: 2014,
      usedIn: ['learn.summary', 'learn.evidence', 'learn.glossary'],
    },
    {
      id: 'ref-tl3-befilopesetal2014',
      authors: 'BEFI-LOPES, Débora Maria; GIUSTI, Elisabete; GÂNDARA, Juliana Perina; PUGLISI, Marina Leite.',
      title: 'Avanços no Diagnóstico Diferencial dos Distúrbios Específicos de Linguagem',
      source: 'In: MARCHESAN, Irene Q.; SILVA, Hilton J.; TOMÉ, Marileda C. (orgs.). Tratado das Especialidades em Fonoaudiologia. Rio de Janeiro: Guanabara Koogan, 2014, cap. 76, p. 1079-1086. Acesso integral nesta auditoria: capítulo lido na íntegra em cópia do Tratado disponível no acervo do projeto.',
      year: 2014,
      usedIn: ['learn.summary', 'learn.limitations'],
    },
  ],
})
