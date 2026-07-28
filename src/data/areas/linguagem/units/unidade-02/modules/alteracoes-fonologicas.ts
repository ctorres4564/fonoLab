import { defineFonoLabModule } from '@/methodology/fonolab'

export const moduloAlteracoesFonologicas = defineFonoLabModule({
  id: 'mod-alteracoes-fonologicas',
  slug: 'alteracoes-fonologicas',
  title: 'Alterações fonológicas',
  description:
    'Estudo das manifestações fonológicas, de sua identificação e de seus efeitos sobre a inteligibilidade e a comunicação.',
  order: 2,
  learningObjective:
    'Compreender as características das alterações fonológicas, reconhecer diferentes padrões de manifestação e interpretar os achados clínicos de forma contextualizada, sem estabelecer conclusões diagnósticas a partir de sinais isolados.',
  prerequisiteKnowledge: [
    'Módulo 1 desta unidade: Desenvolvimento fonológico',
    'Noções gerais de fonética articulatória',
  ],
  estimatedTimeMinutes: 130,
  difficulty: 'intermediate',
  status: 'published',

  learn: {
    summary: [
      {
        id: 'sum-1',
        text: 'No módulo anterior desta unidade, foi discutido como o desenvolvimento fonológico envolve ampla variabilidade individual, regional e sociolinguística, e como processos fonológicos de simplificação são esperados enquanto o sistema ainda está em consolidação. Este módulo parte desse ponto para discutir quando um padrão de fala deixa de ser compatível com a variação esperada e passa a configurar uma alteração fonológica — sem esgotar aqui os critérios diagnósticos completos ou os modelos de intervenção, tratados nos módulos seguintes. A distinção entre variação e alteração não é feita por um único critério isolado, mas pela análise conjunta de idade, consistência, tipo de processo, impacto funcional e contexto linguístico da criança.',
      },
      {
        id: 'sum-2',
        text: 'Antes de avançar, é importante esclarecer a terminologia, já que ela mudou ao longo do tempo e ainda convive, na prática clínica brasileira, com denominações históricas. O DSM-IV utilizava o termo "transtorno fonológico"; a tradução brasileira do DSM-5 substituiu essa nomenclatura por "transtorno da fala" (American Psychiatric Association, 2014), acompanhando a tendência internacional de adotar o termo guarda-chuva Speech Sound Disorders. Já a CID-10 ainda classifica o quadro como "transtorno específico da articulação da fala" (F80.0), nomenclatura anterior à distinção mais fina entre dificuldades articulatórias e fonológicas hoje reconhecida pela área (Wertzner; Pagan-Neves, 2014). Na prática fonoaudiológica brasileira, os termos "distúrbio fonológico" e "alteração fonológica" seguem amplamente utilizados como termos clínicos abrangentes, nem sempre correspondendo a uma única categoria diagnóstica formal. Por isso, este módulo utiliza "alteração fonológica" como termo guarda-chuva, ciente de que a nomenclatura formal deve ser definida durante o processo diagnóstico, e não presumida antecipadamente.',
      },
      {
        id: 'sum-3',
        text: 'A alteração fonológica pode ser definida como uma dificuldade de fala caracterizada pelo uso inadequado dos sons em relação à idade e às variações regionais da língua, envolvendo erros na produção, na percepção ou na organização dos sons (Wertzner; Pagan-Neves, 2014). Um aspecto central para a prática clínica é reconhecer que esse quadro é heterogêneo: diferentes crianças podem apresentar perfis de dificuldade muito distintos entre si, o que levou a área a propor diferentes modelos de classificação. Um deles, proposto por Shriberg e colaboradores, busca identificar a causa subjacente e classifica os casos com base na idade e no tipo de erro, ou na etiologia presumida. Outro modelo, de Broomfield e Dodd (2004), propõe a classificação com base nos sintomas presentes na fala, apoiada na teoria linguística, distinguindo subtipos como atraso fonológico, alteração fonológica consistente, alteração fonológica inconsistente e alteração articulatória. Nenhum desses modelos é universalmente adotado; conhecê-los serve, sobretudo, para entender que "alteração fonológica" não descreve um quadro único, e sim um conjunto heterogêneo de perfis clínicos que compartilham a dificuldade em produzir os sons da fala de forma esperada para a idade.',
      },
      {
        id: 'sum-4',
        text: 'Uma distinção terminológica e clínica importante, retomada do módulo anterior, é a diferença entre erro fonético e erro fonológico. Um erro fonético (ou distorção articulatória) envolve dificuldade motora na execução de um som específico, geralmente afetando um único fone de forma estável, sem comprometer o sistema de contrastes da língua como um todo. Já um erro fonológico envolve um padrão sistemático que afeta uma classe inteira de sons relacionados por traços distintivos, refletindo uma organização inadequada do sistema de contrastes, e não apenas uma dificuldade motora pontual. Essa distinção corresponde, em linhas gerais, à diferença que a área internacionalmente estabelece entre "articulation disorders" (erros na produção de sons individuais, como distorções e substituições) e "phonological disorders" (erros previsíveis e baseados em regras que afetam mais de um som, como anteriorização, plosivização ou apagamento de consoante final). Confundir os dois tipos de dificuldade pode levar a condutas avaliativas e terapêuticas inadequadas: uma distorção articulatória isolada de um som específico não deve ser tratada, automaticamente, como evidência de um padrão fonológico mais amplo, e vice-versa.',
      },
      {
        id: 'sum-5',
        text: 'Do ponto de vista descritivo, os erros observados na fala de crianças com alteração fonológica costumam ser classificados em três tipos principais: substituições (um som é trocado por outro, como dizer "tapo" no lugar de "sapo"), omissões (um som ou sílaba é apagado, como dizer "apo" no lugar de "sapo") e distorções (o som é produzido de forma imprecisa, sem corresponder exatamente a nenhum outro fonema da língua). Segundo a literatura consultada, a substituição tende a ser o tipo de erro mais recorrente em quadros de alteração fonológica, podendo coexistir com distorções de sons específicos que, em alguns casos, persistem mesmo após os 7 anos de idade (Wertzner; Pagan-Neves, 2014). O inventário fonético costuma estar reduzido nesses quadros, com as vogais, em geral, preservadas — sendo raros os casos em que vogais são substituídas ou omitidas.',
      },
      {
        id: 'sum-6',
        text: 'Assim como no desenvolvimento típico, discutido no módulo anterior, crianças com alteração fonológica utilizam processos fonológicos de simplificação. A diferença central não está na presença desses processos, mas em três aspectos: a persistência além da idade em que costumam desaparecer, a frequência elevada de ocorrência e a presença de processos incomuns ou idiossincráticos — padrões não descritos no repertório típico da língua. Estudos brasileiros de base populacional identificaram que os processos mais comuns em quadros de alteração fonológica incluem simplificação de líquidas, simplificação do encontro consonantal, simplificação da consoante final, ensurdecimento de plosivas e de fricativas e frontalização de palatais — combinando, em média, três processos diferentes, podendo mais de um incidir sobre a mesma palavra (Wertzner; Pagan-Neves, 2014). Uma análise de dados de aquisição típica e atípica no português brasileiro, com amostra de 866 crianças de 3 a 8 anos, identificou aquisição atípica em 15,26% dos casos, com substituição de líquida, anteriorização de fricativas, apagamento de sílaba e semivocalização de líquida mais frequentes nos desvios do que no desenvolvimento típico (Ceron et al., 2017).',
      },
      {
        id: 'sum-7',
        text: 'A consistência da produção — se a criança produz o mesmo som-alvo sempre da mesma forma, ou de maneiras diferentes em tentativas sucessivas — é outro aspecto relevante da análise fonológica. A inconsistência de fala caracteriza um possível déficit no planejamento fonológico, sugerindo um sistema instável que restringe a ampliação do inventário fonético. No Brasil, um instrumento específico foi validado em amostra de 101 crianças de 5 a 10 anos (51 com alteração fonológica e 50 com desenvolvimento típico), a partir da nomeação repetida de 25 figuras, três vezes cada; uma palavra é considerada inconsistente quando produzida de mais de uma forma nas três repetições (Castro; Wertzner, 2011). Nessa amostra, a média de inconsistência foi de 27,4% no grupo com alteração fonológica e de 9,8% no grupo típico, com valores de corte diferenciados por idade e sexo relatados na literatura da área (Wertzner; Pagan-Neves, 2014, citando Castro; Wertzner, 2011). Por ter sido validado especificamente na faixa de 5 a 10 anos, esse instrumento não deve ser aplicado, sem ressalvas, fora dessa faixa. A presença de inconsistência, isoladamente, não permite concluir por um quadro específico: é um dado a mais a integrar à análise, não um critério suficiente por si só, como discutido a seguir sobre o diagnóstico diferencial com a apraxia de fala na infância.',
      },
      {
        id: 'sum-8',
        text: 'Um erro comum na leitura de amostras de fala é concluir, isoladamente a partir da inconsistência observada, que uma criança apresenta apraxia de fala na infância (AFI) — transtorno motor relacionado ao planejamento e à programação dos movimentos articulatórios, e não a uma dificuldade de organização linguística dos contrastes fonológicos. A literatura aponta que a inconsistência é apenas um de três critérios que, em conjunto, contribuem para o diagnóstico diferencial da AFI, ao lado de transições coarticulatórias alongadas ou interrompidas e de alterações prosódicas — a presença isolada de inconsistência não é suficiente para sustentar esse diagnóstico (ASHA, 2007). Uma revisão sistemática brasileira sobre métodos de avaliação da AFI reforça esse ponto, destacando que a avaliação de mais de uma dimensão favorece a compreensão do desempenho de fala, já que a apraxia repercute em diferentes níveis linguísticos e motores (Oliveira et al., 2021). Diferenciar uma alteração fonológica de um transtorno motor de fala, de uma alteração estrutural (fissura labiopalatina) ou neuromotora (disartria) é, portanto, uma etapa central — e não automática — do processo diagnóstico.',
      },
      {
        id: 'sum-9',
        text: 'A gravidade da alteração fonológica e a inteligibilidade de fala estão relacionadas, mas não são idênticas, e ambas podem ser estimadas por índices quantitativos. O Percentage of Consonants Correct (PCC) calcula a proporção de consoantes corretas em uma amostra de fala espontânea, sendo historicamente classificado em faixas de gravidade — leve, levemente moderado, moderadamente grave e grave —, com valores de corte propostos originalmente para crianças de até 6 anos (Shriberg; Kwiatkowski, 1982). O índice foi posteriormente revisado (PCC-R), passando a não considerar distorções como erro, o que o tornou mais adequado para comparações entre perfis de fala variados (Shriberg et al., 1997). Outro índice, o Process Density Index (PDI), calcula o número total de processos fonológicos em relação ao número de palavras analisadas (Edwards, 1992). Esses índices são úteis para acompanhar a gravidade ao longo do tempo, mas nenhum deles, isoladamente, substitui a análise qualitativa do perfil fonológico da criança.',
      },
      {
        id: 'sum-10',
        text: 'Assim como no desenvolvimento típico, a idade da criança e sua exposição linguística continuam sendo variáveis centrais na interpretação de uma alteração fonológica — mas de forma contextualizada, não como limites universais. O diagnóstico ocorre predominantemente entre 4 e 8 anos, sendo mais frequente em meninos, embora quadros mais graves pareçam mais comuns em meninas (Wertzner; Pagan-Neves, 2014). Além disso, as variações regionais e sociolinguísticas do português brasileiro — discutidas no módulo anterior — continuam sendo fator obrigatório de análise: um padrão de fala compatível com a norma da comunidade linguística da criança não deve ser interpretado como alteração, independentemente da idade.',
      },
      {
        id: 'sum-11',
        text: 'O impacto funcional e comunicativo de uma alteração fonológica é outro aspecto central da avaliação, muitas vezes mais relevante clinicamente do que a simples contagem de sons alterados. A ininteligibilidade de fala pode interferir no rendimento escolar, no desempenho social e na comunicação cotidiana, sendo influenciada não apenas pelo tipo e pela quantidade de processos fonológicos presentes, mas também por variáveis pragmáticas e contextuais, como a familiaridade do interlocutor com a fala da criança (Wertzner; Pagan-Neves, 2014). Duas crianças com perfis fonológicos quantitativamente semelhantes podem ter necessidades clínicas diferentes, a depender do impacto sobre sua participação comunicativa e social — o que reforça a importância de a avaliação ir além da análise estritamente fonológica.',
      },
      {
        id: 'sum-12',
        text: 'A caracterização de uma possível alteração fonológica depende, em grande medida, da qualidade da amostra de fala coletada. Recomenda-se combinar diferentes tarefas — imitação de palavras, nomeação de figuras e fala espontânea —, já que cada uma exige habilidades distintas e revela aspectos diferentes do sistema fonológico (Wertzner; Pagan-Neves, 2014). Instrumentos normativos são ferramentas importantes, mas têm limites: refletem as amostras e os critérios usados em sua construção, podem não representar todas as variedades do português brasileiro, e não substituem a análise qualitativa da fala espontânea em situações comunicativas reais.',
      },
      {
        id: 'sum-13',
        text: 'Nenhuma avaliação fonológica está completa sem a investigação de fatores que podem explicar ou contribuir para o quadro observado. Episódios recorrentes de otite média, especialmente antes dos 2 anos de idade, podem interferir na percepção auditiva e na formação das regras fonológicas de um ou mais sons da língua, sendo recomendada a investigação auditiva sempre que uma alteração fonológica for suspeitada (Wertzner; Pagan-Neves, 2014). De forma semelhante, a avaliação das estruturas e funções motoras orais — tônus, mobilidade e coordenação dos órgãos fonoarticulatórios, além de provas como a diadococinesia oral e a taxa articulatória — contribui para diferenciar dificuldades de base motora das de base linguística-fonológica, e para identificar a coexistência de mais de um tipo de dificuldade em um mesmo caso.',
      },
      {
        id: 'sum-14',
        text: 'Por fim, a alteração fonológica deve ser diferenciada não apenas da apraxia de fala na infância, mas também de outros quadros que afetam a produção da fala por razões distintas — a disartria (de base neuromotora), as alterações estruturais do trato vocal (como fissuras labiopalatinas) e a perda auditiva não identificada. Cada quadro exige avaliação e conduta específicas, e a diferenciação entre eles não decorre de um único sinal, mas da análise conjunta de amostra de fala, história de desenvolvimento, avaliação auditiva, avaliação motora oral e, quando indicado, instrumentos complementares. Este módulo teve como objetivo apresentar as características que permitem reconhecer manifestações compatíveis com alteração fonológica e os cuidados necessários para essa leitura — sem avançar nos modelos de intervenção, tratados nos Módulos 3 e 4 desta unidade.',
      },
      {
        id: 'sum-15',
        text: 'Em síntese textual do mapa conceitual a seguir: a organização dos contrastes reflete-se no inventário fonológico, que se manifesta por processos persistentes ou atípicos; estes impactam a inteligibilidade e relacionam-se à consistência dos erros; ambas influenciam o impacto funcional, que deve ser integrado a uma avaliação contextualizada; esta sustenta o diagnóstico diferencial, que só então orienta a decisão clínica inicial.',
      },
    ],
    mainIdea:
      'A alteração fonológica é um quadro heterogêneo, caracterizado por processos fonológicos persistentes, atípicos ou de alto impacto na inteligibilidade, cuja identificação exige avaliação contextualizada — envolvendo amostra de fala, consistência, audição e estruturas motoras — e nunca deve decorrer de um único som alterado ou processo isolado.',
    essentialConcepts: [
      {
        id: 'conc-alt-fonologica',
        term: 'Alteração fonológica',
        definition:
          'Dificuldade de fala caracterizada pelo uso inadequado dos sons em relação à idade e às variações regionais da língua, envolvendo erros na produção, na percepção ou na organização dos sons.',
        example:
          'Uma criança de 6 anos cuja fala é pouco inteligível fora do ambiente familiar, com processos fonológicos persistentes além do esperado para a idade, pode apresentar uma alteração fonológica — hipótese a ser investigada, não presumida a partir de um único achado.',
      },
      {
        id: 'conc-transtorno-fala',
        term: 'Transtorno da fala (terminologia DSM-5)',
        definition:
          'Termo adotado pela tradução brasileira do DSM-5 para o quadro anteriormente denominado "transtorno fonológico" no DSM-IV, correspondendo ao termo internacional Speech Sound Disorder.',
        example:
          'Ao ler um relatório antigo que usa "transtorno fonológico", o fonoaudiólogo deve reconhecer que esse termo corresponde, na nomenclatura atual, a "transtorno da fala", sem que isso represente uma mudança no quadro clínico descrito.',
      },
      {
        id: 'conc-processo-persistente',
        term: 'Processo fonológico persistente',
        definition:
          'Processo de simplificação típico do desenvolvimento que permanece na fala da criança além da idade em que costuma desaparecer.',
        example:
          'A redução de encontro consonantal aos 3 anos é esperada; a mesma redução, com alta frequência, aos 6 anos é persistente e merece investigação.',
      },
      {
        id: 'conc-processo-atipico',
        term: 'Processo fonológico atípico ou idiossincrático',
        definition:
          'Padrão de simplificação não descrito como parte do repertório típico de processos fonológicos da língua, incomum mesmo em amostras de desenvolvimento atípico.',
        example:
          'Substituições incomuns, sem relação clara de traços entre o som-alvo e o som produzido, podem caracterizar um processo idiossincrático a ser investigado com atenção.',
      },
      {
        id: 'conc-erro-fonetico',
        term: 'Erro fonético (distorção articulatória)',
        definition:
          'Dificuldade motora na execução de um som específico, geralmente restrita a um único fone, sem comprometer o sistema de contrastes da língua como um todo.',
        example:
          'Uma distorção isolada do /s/, produzida de forma imprecisa em todas as posições mas sem afetar outros sons, é mais compatível com erro fonético do que com um padrão fonológico amplo.',
      },
      {
        id: 'conc-erro-fonologico',
        term: 'Erro fonológico',
        definition:
          'Padrão sistemático que afeta uma classe inteira de sons relacionados por traços distintivos, refletindo uma organização inadequada do sistema de contrastes da língua.',
        example:
          'Substituir todas as fricativas por plosivas correspondentes, em múltiplos contextos, caracteriza um erro fonológico, e não uma dificuldade motora isolada.',
      },
      {
        id: 'conc-consistencia',
        term: 'Consistência de fala',
        definition:
          'Grau em que a criança produz o mesmo som-alvo da mesma forma em tentativas sucessivas, avaliado por meio de provas específicas de nomeação repetida.',
        example:
          'Uma criança que produz a mesma palavra-alvo de três formas diferentes em três tentativas apresenta inconsistência de fala — um dado a mais a integrar à análise, não um critério diagnóstico isolado.',
      },
      {
        id: 'conc-inventario-fonetico-alt',
        term: 'Inventário fonético (em quadros de alteração)',
        definition:
          'Conjunto de sons que a criança consegue articular; em quadros de alteração fonológica, costuma estar reduzido, com preservação relativa das vogais.',
        example:
          'Um inventário fonético restrito a poucas consoantes, associado a processos persistentes, é um achado a integrar à análise de gravidade.',
      },
      {
        id: 'conc-inventario-fonologico-alt',
        term: 'Inventário fonológico (em quadros de alteração)',
        definition:
          'Conjunto de contrastes que a criança utiliza de forma estável para diferenciar significados; sua restrição está associada à presença de processos fonológicos persistentes.',
        example:
          'A ausência de contraste entre fricativas surdas e sonoras em toda a amostra sugere restrição do inventário fonológico, não apenas do fonético.',
      },
      {
        id: 'conc-erro-fonetico-vs-fonologico',
        term: 'Erro fonético versus erro fonológico',
        definition:
          'Distinção entre dificuldade motora restrita a um som (fonética) e padrão sistemático que afeta uma classe de sons (fonológico), central para orientar a leitura da amostra.',
        example:
          'Confundir uma distorção articulatória isolada com um padrão fonológico amplo pode levar a uma avaliação e a uma conduta inadequadas.',
      },
      {
        id: 'conc-impacto-funcional',
        term: 'Impacto funcional e comunicativo',
        definition:
          'Efeito da dificuldade de fala sobre a participação social, escolar e comunicativa da criança, nem sempre proporcional à quantidade de sons alterados.',
        example:
          'Uma criança pouco compreendida por colegas na escola, mesmo com poucos sons alterados, pode ter impacto funcional relevante que justifica atenção clínica.',
      },
      {
        id: 'conc-variacao-linguistica-alt',
        term: 'Variação linguística',
        definition:
          'Diferenças regionais e sociolinguísticas legítimas do português falado no Brasil, que não devem ser interpretadas como alteração fonológica.',
        example:
          'Uma realização regional do róticos, compartilhada pela comunidade linguística da criança, não deve ser registrada como erro na avaliação.',
      },
      {
        id: 'conc-diagnostico-diferencial',
        term: 'Diagnóstico diferencial',
        definition:
          'Processo de distinguir a alteração fonológica de outros quadros que também afetam a produção da fala, como apraxia de fala na infância, disartria, alterações estruturais e perda auditiva.',
        example:
          'Uma criança com fala inconsistente deve ter investigados, além do perfil fonológico, aspectos motores, prosódicos e auditivos antes de qualquer hipótese diagnóstica mais específica.',
      },
      {
        id: 'conc-pcc',
        term: 'Percentual de Consoantes Corretas (PCC)',
        definition:
          'Índice quantitativo que calcula a proporção de consoantes produzidas corretamente em uma amostra de fala espontânea, usado para estimar a gravidade de uma alteração fonológica.',
        example:
          'Um PCC de 55% é historicamente classificado como moderadamente grave, mas esse número deve sempre ser interpretado junto à análise qualitativa da amostra, nunca isoladamente.',
      },
    ],
    evidence: [
      {
        id: 'ev-alt-1',
        claim:
          'A alteração fonológica é um quadro heterogêneo; diferentes modelos (Shriberg et al.; Broomfield e Dodd, 2004) propõem classificações distintas com base na idade/tipo de erro, na etiologia ou nos sintomas presentes na fala, sem consenso único na área.',
        source: 'Wertzner; Pagan-Neves (2014), citando Shriberg et al. e Broomfield; Dodd (2004)',
        evidenceLevel: 'expert_opinion',
        clinicalImplication:
          'Nenhum modelo de classificação deve ser tratado como padrão-ouro universal; conhecer mais de um modelo ajuda a reconhecer a heterogeneidade dos perfis clínicos, evitando encaixar todo caso em uma única categoria.',
      },
      {
        id: 'ev-alt-2',
        claim:
          'A tradução brasileira do DSM-5 substituiu a nomenclatura "transtorno fonológico" (DSM-IV) por "transtorno da fala".',
        source: 'American Psychiatric Association (2014, tradução brasileira do DSM-5)',
        evidenceLevel: 'strong',
        clinicalImplication:
          'Relatórios e materiais mais antigos podem usar a terminologia do DSM-IV; o fonoaudiólogo deve reconhecer a equivalência sem tratar os termos como categorias diagnósticas diferentes.',
      },
      {
        id: 'ev-alt-3',
        claim:
          'Índices quantitativos (PCC, PCC-R, PDI) estimam a gravidade de uma alteração fonológica a partir de proporções de acerto ou de densidade de processos fonológicos na amostra de fala.',
        source: 'Shriberg; Kwiatkowski (1982); Shriberg et al. (1997); Edwards (1992)',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'Esses índices são complementares à análise qualitativa da amostra; usá-los como único critério de gravidade ou de diagnóstico é um risco de interpretação a ser evitado.',
      },
      {
        id: 'ev-alt-4',
        claim:
          'Em amostra brasileira de 866 crianças de 3 a 8 anos, 15,26% apresentaram aquisição fonológica atípica, com processos como substituição de líquida, anteriorização de fricativas, apagamento de sílaba e semivocalização de líquida mais frequentes nos casos de desvio do que no desenvolvimento típico.',
        source: 'Ceron; Gubiani; Oliveira; Gubiani; Keske-Soares (2017)',
        evidenceLevel: 'strong',
        clinicalImplication:
          'A presença de processos mais associados a quadros atípicos, especialmente com frequência elevada, é um dado relevante a ser integrado à análise — mas, isoladamente, ainda não permite uma conclusão diagnóstica fechada.',
      },
      {
        id: 'ev-alt-5',
        claim:
          'Em amostra brasileira de 101 crianças de 5 a 10 anos (51 com alteração fonológica e 50 com desenvolvimento típico), o índice de inconsistência de fala (nomeação repetida de 25 figuras, três vezes cada) apresentou média de 27,4% no grupo com alteração fonológica e de 9,8% no grupo com desenvolvimento típico.',
        source: 'Castro; Wertzner (2011)',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'O instrumento foi validado especificamente para a faixa de 5 a 10 anos; usá-lo fora dessa faixa etária, ou tomar isoladamente um valor de inconsistência elevado como diagnóstico, extrapola o que a evidência sustenta. Amostra de validação modesta (n=101): os valores devem ser interpretados como referência de grupo, não como ponto de corte individual absoluto.',
      },
      {
        id: 'ev-alt-6',
        claim:
          'A inconsistência de fala é apenas um de três critérios (ao lado de transições coarticulatórias alongadas/interrompidas e de alteração prosódica) que, em conjunto, contribuem para o diagnóstico diferencial da apraxia de fala na infância; isoladamente, não é suficiente.',
        source: 'American Speech-Language-Hearing Association (2007)',
        evidenceLevel: 'strong',
        clinicalImplication:
          'Concluir por apraxia de fala na infância apenas com base em inconsistência é um erro comum de interpretação; os demais critérios devem ser investigados antes dessa hipótese.',
      },
      {
        id: 'ev-alt-7',
        claim:
          'Revisão sistemática brasileira sobre métodos de avaliação da apraxia de fala na infância constatou que apenas 24% dos estudos analisados avaliaram aspectos prosódicos, apesar de a apraxia repercutir em múltiplos níveis linguísticos e motores.',
        source: 'Oliveira; Nunes; Cruz; Gurgel (2021)',
        evidenceLevel: 'strong',
        clinicalImplication:
          'Reforça a necessidade de avaliação multidimensional (não apenas articulatória/motora) diante de suspeita de apraxia de fala na infância, e de cautela ao interpretar estudos que avaliaram apenas parte das dimensões relevantes.',
      },
      {
        id: 'ev-alt-8',
        claim:
          'A área distingue "articulation disorders" (erros na produção de sons individuais) de "phonological disorders" (padrões previsíveis, baseados em regras, que afetam mais de um som).',
        source:
          'American Speech-Language-Hearing Association (ASHA). "Speech Sound Disorders: Articulation and Phonology" (Practice Portal). Disponível em: https://www.asha.org/practice-portal/clinical-topics/articulation-and-phonology/. Acesso em: 27 jul. 2026.',
        evidenceLevel: 'expert_opinion',
        clinicalImplication:
          'Página de orientação clínica institucional (ASHA), de atualização contínua; não foi possível confirmar nesta auditoria uma data específica de publicação ou de última revisão (acesso direto bloqueado por verificação de segurança do site). Usada apenas para terminologia e enquadramento profissional, nunca como evidência primária, e não incluída na lista formal de referências por não atender ao campo obrigatório de ano.',
      },
    ],
    limitations: [
      {
        id: 'lim-alt-1',
        description:
          'Variação individual: crianças da mesma idade podem apresentar perfis fonológicos distintos dentro do espectro do desenvolvimento típico, o que deve ser descartado antes de qualquer hipótese de alteração.',
      },
      {
        id: 'lim-alt-2',
        description:
          'Idade e exposição linguística: a idade cronológica deve sempre ser interpretada em conjunto com o tempo e a qualidade de exposição da criança à língua, e não como critério isolado.',
      },
      {
        id: 'lim-alt-3',
        description:
          'Diversidade regional: variações regionais e sociolinguísticas legítimas do português brasileiro não devem ser registradas como alteração fonológica.',
      },
      {
        id: 'lim-alt-4',
        description:
          'Diferenças entre amostras espontâneas e tarefas estruturadas: o desempenho da criança pode variar conforme o tipo de tarefa (imitação, nomeação, fala espontânea), exigindo combinação de instrumentos.',
      },
      {
        id: 'lim-alt-5',
        description:
          'Limites de instrumentos normativos: testes padronizados refletem as amostras e os critérios usados em sua construção, podendo não representar todas as variedades do português brasileiro.',
      },
      {
        id: 'lim-alt-6',
        description:
          'Necessidade de avaliação auditiva: nenhuma hipótese sobre a natureza de uma alteração fonológica deve ser formulada sem a investigação de possíveis alterações audiológicas.',
      },
      {
        id: 'lim-alt-7',
        description:
          'Análise das estruturas e funções motoras da fala: aspectos motores (tônus, mobilidade, coordenação, diadococinesia) devem ser avaliados para diferenciar dificuldades motoras de dificuldades linguístico-fonológicas.',
      },
      {
        id: 'lim-alt-8',
        description:
          'Limites das classificações de gravidade: classificações como leve, moderada ou grave dependem do índice e dos critérios utilizados, variando entre instrumentos e estudos.',
      },
      {
        id: 'lim-alt-9',
        description:
          'Risco de diagnóstico baseado apenas em percentual de consoantes corretas: um índice quantitativo isolado nunca deve substituir a análise qualitativa do perfil fonológico da criança.',
      },
      {
        id: 'lim-alt-10',
        description:
          'Impossibilidade de diferenciar quadros complexos por um único sinal: a distinção entre alteração fonológica, apraxia de fala, disartria, alterações estruturais e perda auditiva exige a integração de múltiplas fontes de informação, nunca um achado isolado.',
      },
    ],
    simpleExplanation:
      'No módulo anterior, vimos que toda criança passa por um processo natural de simplificação da fala enquanto está aprendendo a falar — trocando sons difíceis por outros mais fáceis, por exemplo. Este módulo explica quando esse processo deixa de ser apenas parte do caminho normal e passa a merecer um olhar mais atento. Imagine que o sistema de sons de uma língua é como uma caixa de ferramentas que a criança vai montando aos poucos. Na maioria das vezes, as ferramentas vão chegando na ordem esperada, mesmo que em ritmos diferentes para cada criança. Às vezes, porém, algumas coisas chamam a atenção: uma ferramenta que devia ter chegado há muito tempo continua faltando (processo persistente); aparece uma ferramenta muito estranha, que não é comum em nenhuma caixa (processo atípico); ou a criança usa a mesma ferramenta de um jeito diferente cada vez que tenta (inconsistência). Nenhum desses sinais, sozinho, permite concluir que algo não vai bem. É como montar um quebra-cabeça: uma peça fora do lugar pode não significar nada, mas várias peças fora do lugar, juntas, formam um quadro que merece atenção. Por isso, o fonoaudiólogo nunca decide algo importante olhando para apenas um som, uma palavra ou um teste isolado. Ele observa o conjunto: como a criança fala em diferentes situações, se ela é sempre entendida ou só por quem já está acostumado com sua fala, se já teve infecções de ouvido, se sua boca e língua se movem bem, e se a forma de falar é parecida com a da família e da região onde mora. Um erro muito comum — e que este módulo quer ajudar a evitar — é "pular para uma conclusão" rápido demais. Por exemplo: achar que qualquer inconsistência na fala já significa um problema motor sério (como a apraxia), sem investigar outros sinais; ou achar que um jeito diferente de falar, típico da região da família, é um erro que precisa ser corrigido. Os dois enganos podem prejudicar a criança: um por rotular algo que talvez nem seja um problema, o outro por ignorar algo que talvez precise de atenção. Por isso, a mensagem central deste módulo é: reconhecer os sinais é importante, mas concluir com responsabilidade exige olhar para o conjunto todo — fala, audição, movimento da boca, contexto familiar e escolar —, e não para uma única peça do quebra-cabeça isoladamente. Essa forma cuidadosa de olhar é o que prepara o caminho para os próximos módulos, que tratarão de como planejar a intervenção depois que esse quadro completo estiver bem compreendido.',
    conceptMap: {
      centralNode: 'Alterações fonológicas',
      nodes: [
        { id: 'n-central', label: 'Alterações fonológicas', type: 'central', description: 'Dificuldade de fala caracterizada pelo uso inadequado dos sons em relação à idade e às variações regionais, envolvendo erros de produção, percepção ou organização.' },
        { id: 'n-contrastes', label: 'Organização dos contrastes', type: 'primary', description: 'Forma como o sistema de contrastes fonológicos está (ou não) adequadamente organizado.' },
        { id: 'n-inventario', label: 'Inventário fonológico', type: 'primary', description: 'Conjunto de contrastes estáveis usados pela criança para diferenciar significados.' },
        { id: 'n-processos', label: 'Processos persistentes ou atípicos', type: 'secondary', description: 'Padrões de simplificação que ultrapassam a idade esperada ou fogem do repertório típico.' },
        { id: 'n-inteligibilidade', label: 'Inteligibilidade', type: 'secondary', description: 'Grau em que a fala da criança é compreendida por um ouvinte.' },
        { id: 'n-consistencia', label: 'Consistência dos erros', type: 'secondary', description: 'Estabilidade (ou variabilidade) da produção do mesmo som-alvo em tentativas repetidas.' },
        { id: 'n-impacto', label: 'Impacto funcional', type: 'application', description: 'Efeito da dificuldade de fala sobre a participação social, escolar e comunicativa.' },
        { id: 'n-avaliacao', label: 'Avaliação contextualizada', type: 'application', description: 'Integração de amostra de fala, audição, motricidade oral, história e contexto linguístico.' },
        { id: 'n-diagnostico', label: 'Diagnóstico diferencial', type: 'application', description: 'Distinção entre alteração fonológica e outros quadros (apraxia, disartria, alterações estruturais, perda auditiva).' },
        { id: 'n-decisao', label: 'Decisão clínica', type: 'application', description: 'Definição de hipóteses e próximos passos, sempre sujeita a confirmação e nunca baseada em achado isolado.' },
      ],
      edges: [
        { id: 'e-alt-1', from: 'n-central', to: 'n-contrastes', label: 'envolve' },
        { id: 'e-alt-2', from: 'n-contrastes', to: 'n-inventario', label: 'reflete-se em' },
        { id: 'e-alt-3', from: 'n-inventario', to: 'n-processos', label: 'manifesta-se por meio de' },
        { id: 'e-alt-4', from: 'n-processos', to: 'n-inteligibilidade', label: 'impacta' },
        { id: 'e-alt-5', from: 'n-processos', to: 'n-consistencia', label: 'relaciona-se com' },
        { id: 'e-alt-6', from: 'n-inteligibilidade', to: 'n-impacto', label: 'influencia' },
        { id: 'e-alt-7', from: 'n-consistencia', to: 'n-impacto', label: 'influencia' },
        { id: 'e-alt-8', from: 'n-impacto', to: 'n-avaliacao', label: 'deve integrar' },
        { id: 'e-alt-9', from: 'n-avaliacao', to: 'n-diagnostico', label: 'sustenta' },
        { id: 'e-alt-10', from: 'n-diagnostico', to: 'n-decisao', label: 'orienta' },
      ],
    },
    glossary: [
      { id: 'gl-alt-1', term: 'Alteração fonológica', definition: 'Dificuldade de fala caracterizada pelo uso inadequado dos sons em relação à idade e às variações regionais da língua.', example: 'Processos persistentes além do esperado para a idade, com impacto na inteligibilidade.' },
      { id: 'gl-alt-2', term: 'Transtorno da fala', definition: 'Termo atual do DSM-5 para o quadro antes denominado "transtorno fonológico" no DSM-IV.', example: 'Relatórios antigos podem usar "transtorno fonológico" referindo-se ao mesmo espectro de dificuldades.' },
      { id: 'gl-alt-3', term: 'Erro fonético', definition: 'Dificuldade motora na produção de um som específico, sem comprometer o sistema de contrastes como um todo.', example: 'Distorção isolada e estável de um único som.' },
      { id: 'gl-alt-4', term: 'Erro fonológico', definition: 'Padrão sistemático que afeta uma classe inteira de sons relacionados por traços distintivos.', example: 'Substituir todas as fricativas por plosivas em múltiplos contextos.' },
      { id: 'gl-alt-5', term: 'Processo fonológico atípico', definition: 'Padrão de simplificação não descrito no repertório típico de processos da língua.', example: 'Substituição incomum, sem relação clara de traços com o som-alvo.' },
      { id: 'gl-alt-6', term: 'Processo idiossincrático', definition: 'Sinônimo de processo atípico: padrão de simplificação próprio de uma criança específica, não descrito como típico.', example: 'Um padrão de troca de sons não relatado na literatura sobre desenvolvimento típico ou atípico.' },
      { id: 'gl-alt-7', term: 'Persistência', definition: 'Permanência de um processo fonológico típico além da idade em que costuma desaparecer.', example: 'Redução de encontro consonantal mantida aos 6 anos, quando já se espera domínio dessa estrutura.' },
      { id: 'gl-alt-8', term: 'Consistência de fala', definition: 'Grau em que o mesmo som-alvo é produzido da mesma forma em tentativas repetidas.', example: 'Produzir "sapato" sempre da mesma forma em diferentes tentativas indica consistência.' },
      { id: 'gl-alt-9', term: 'Inconsistência de fala', definition: 'Produção de formas diferentes para a mesma palavra-alvo em tentativas sucessivas.', example: 'Produzir "sapato" de três formas diferentes em três tentativas na mesma sessão.' },
      { id: 'gl-alt-10', term: 'Inventário fonético', definition: 'Conjunto de sons que a criança consegue articular, mesmo que de forma inconsistente.', example: 'Em quadros de alteração, costuma estar reduzido, com vogais geralmente preservadas.' },
      { id: 'gl-alt-11', term: 'Inventário fonológico', definition: 'Conjunto de contrastes que a criança usa de forma estável para diferenciar significados.', example: 'Restrição de contrastes entre fricativas surdas e sonoras em toda a amostra.' },
      { id: 'gl-alt-12', term: 'Inteligibilidade de fala', definition: 'Grau em que a produção de fala pode ser compreendida por um ouvinte.', example: 'Fala compreendida apenas por familiares próximos indica baixa inteligibilidade para outros interlocutores.' },
      { id: 'gl-alt-13', term: 'Percentual de Consoantes Corretas (PCC)', definition: 'Índice que estima a gravidade de uma alteração a partir da proporção de consoantes corretas em amostra espontânea.', example: 'PCC entre 65% e 85%: classificação historicamente descrita como levemente moderada.' },
      { id: 'gl-alt-14', term: 'Diagnóstico diferencial', definition: 'Processo de distinguir a alteração fonológica de outros quadros que também afetam a fala.', example: 'Diferenciar alteração fonológica de apraxia de fala, disartria, alteração estrutural ou perda auditiva.' },
      { id: 'gl-alt-15', term: 'Apraxia de fala na infância', definition: 'Transtorno motor de fala relacionado ao planejamento e à programação dos movimentos articulatórios.', example: 'Investigada a partir de três critérios: inconsistência, transições coarticulatórias e prosódia — nunca apenas um deles.' },
      { id: 'gl-alt-16', term: 'Impacto funcional', definition: 'Efeito da dificuldade de fala sobre a participação social, escolar e comunicativa da criança.', example: 'Criança que evita falar com pessoas menos familiares por não ser compreendida.' },
    ],
  },

  apply: {
    questions: [
      {
        id: 'q-alt-1',
        stem: 'Qual das alternativas melhor define uma alteração fonológica, segundo a literatura da área?',
        alternatives: [
          { id: 'q-alt-1-a', text: 'Dificuldade de fala caracterizada pelo uso inadequado dos sons em relação à idade e às variações regionais, envolvendo erros na produção, percepção ou organização dos sons.', isCorrect: true, feedback: 'Correto. Essa definição inclui explicitamente a idade e as variações regionais como parâmetros de comparação.' },
          { id: 'q-alt-1-b', text: 'Qualquer diferença entre a fala da criança e a fala do avaliador.', isCorrect: false, feedback: 'Incorreto. Usar a fala do avaliador como padrão de comparação ignora variações regionais e sociolinguísticas legítimas.' },
          { id: 'q-alt-1-c', text: 'Presença de qualquer processo fonológico na fala da criança.', isCorrect: false, feedback: 'Incorreto. Processos fonológicos fazem parte do desenvolvimento típico; sua mera presença não caracteriza alteração.' },
          { id: 'q-alt-1-d', text: 'Impossibilidade de a criança pronunciar corretamente palavras difíceis.', isCorrect: false, feedback: 'Incorreto. Essa definição é vaga e não considera idade, consistência ou variação linguística.' },
        ],
        correctAlternativeId: 'q-alt-1-a',
        explanation: 'A definição de alteração fonológica exige a consideração conjunta da idade da criança e das variações regionais da língua, além dos diferentes níveis em que o erro pode ocorrer (produção, percepção, organização).',
        hint: 'Pense em quais parâmetros de comparação são necessários para não confundir alteração com variação esperada.',
        relatedConceptId: 'conc-alt-fonologica',
        referenceId: 'ref-tratado2014-cap71',
      },
      {
        id: 'q-alt-2',
        stem: 'A tradução brasileira do DSM-5 substituiu o termo do DSM-IV "transtorno fonológico" por qual nomenclatura?',
        alternatives: [
          { id: 'q-alt-2-a', text: 'Transtorno da fala.', isCorrect: true, feedback: 'Correto. O DSM-5 (edição brasileira, 2014) adota "transtorno da fala", acompanhando a tendência internacional do termo guarda-chuva Speech Sound Disorder.' },
          { id: 'q-alt-2-b', text: 'Transtorno articulatório.', isCorrect: false, feedback: 'Incorreto. Esse não é o termo adotado pelo DSM-5; a articulação é apenas um dos aspectos possivelmente envolvidos.' },
          { id: 'q-alt-2-c', text: 'Transtorno específico da fala e linguagem.', isCorrect: false, feedback: 'Incorreto. Esse termo não corresponde à nomenclatura atual do DSM-5 para o quadro em questão.' },
          { id: 'q-alt-2-d', text: 'Dislalia.', isCorrect: false, feedback: 'Incorreto. "Dislalia" é uma denominação histórica, hoje pouco usada na literatura internacional, e não a terminologia atual do DSM-5.' },
        ],
        correctAlternativeId: 'q-alt-2-a',
        explanation: 'Reconhecer a atualização terminológica é importante para interpretar corretamente relatórios e materiais mais antigos, que podem usar "transtorno fonológico" (DSM-IV) referindo-se ao mesmo espectro de dificuldades hoje descrito como "transtorno da fala" (DSM-5).',
        hint: 'Pense na tendência internacional de usar termos guarda-chuva mais amplos para os transtornos que afetam os sons da fala.',
        relatedConceptId: 'conc-transtorno-fala',
        referenceId: 'ref-dsm5-2014',
      },
      {
        id: 'q-alt-3',
        stem: 'O que o índice PCC-R (Percentual de Consoantes Corretas – Revisado) acrescenta em relação ao PCC original?',
        alternatives: [
          { id: 'q-alt-3-a', text: 'Deixa de considerar distorções como erro, tornando-se mais adequado para comparações entre falantes de diferentes idades e perfis de fala.', isCorrect: true, feedback: 'Correto. Essa foi a principal revisão proposta, tornando o índice mais robusto para comparações entre estudos e perfis diversos.' },
          { id: 'q-alt-3-b', text: 'Passa a considerar apenas vogais na contagem.', isCorrect: false, feedback: 'Incorreto. O índice continua baseado em consoantes, não em vogais.' },
          { id: 'q-alt-3-c', text: 'Substitui completamente a necessidade de amostra de fala espontânea.', isCorrect: false, feedback: 'Incorreto. O índice ainda depende de uma amostra de fala para ser calculado.' },
          { id: 'q-alt-3-d', text: 'Elimina a necessidade de qualquer análise qualitativa da fala.', isCorrect: false, feedback: 'Incorreto. Nenhum índice quantitativo substitui a análise qualitativa do perfil fonológico.' },
        ],
        correctAlternativeId: 'q-alt-3-a',
        explanation: 'O PCC-R foi proposto para tornar o índice mais comparável entre estudos e perfis de fala variados, ao não penalizar distorções da mesma forma que substituições e omissões.',
        hint: 'Pense em qual tipo específico de erro deixou de ser contado como incorreto na versão revisada do índice.',
        relatedConceptId: 'conc-pcc',
        referenceId: 'ref-shriberg1997-pccr',
      },
      {
        id: 'q-alt-4',
        stem: 'Uma criança distorce de forma consistente apenas o som /s/ em todas as posições da palavra, sem qualquer outra alteração na fala. Os demais sons, incluindo outras fricativas, estão preservados. Esse achado é mais compatível com:',
        alternatives: [
          { id: 'q-alt-4-a', text: 'Um erro fonético (distorção articulatória) isolado, e não com um padrão fonológico amplo.', isCorrect: true, feedback: 'Correto. Uma distorção restrita a um único som, sem afetar uma classe de sons relacionados, é mais compatível com dificuldade motora isolada do que com um padrão fonológico sistemático.' },
          { id: 'q-alt-4-b', text: 'Um processo fonológico de ensurdecimento de fricativas.', isCorrect: false, feedback: 'Incorreto. Esse processo afetaria toda a classe de fricativas, não apenas um som isolado.' },
          { id: 'q-alt-4-c', text: 'Uma alteração fonológica grave, já que qualquer distorção indica gravidade elevada.', isCorrect: false, feedback: 'Incorreto. Gravidade não é definida pela presença de qualquer distorção isolada, mas pelo conjunto de achados da amostra.' },
          { id: 'q-alt-4-d', text: 'Evidência suficiente de apraxia de fala na infância.', isCorrect: false, feedback: 'Incorreto. Uma distorção isolada e consistente não constitui, isoladamente, critério para essa hipótese, que depende de múltiplos achados motores e prosódicos.' },
        ],
        correctAlternativeId: 'q-alt-4-a',
        explanation: 'A distinção entre erro fonético e padrão fonológico depende da abrangência do achado: quando restrito a um único som, sem afetar uma classe fonológica relacionada, é mais compatível com dificuldade motora isolada.',
        hint: 'Verifique se a dificuldade afeta apenas um som ou uma classe inteira de sons relacionados por traços.',
        relatedConceptId: 'conc-erro-fonetico',
        referenceId: 'ref-tratado2014-cap71',
      },
      {
        id: 'q-alt-5',
        stem: 'Qual das opções abaixo diferencia corretamente um processo fonológico persistente de um processo fonológico atípico/idiossincrático?',
        alternatives: [
          { id: 'q-alt-5-a', text: 'O processo persistente é um padrão de simplificação típico do desenvolvimento que permanece além da idade esperada; o atípico não corresponde a um padrão de simplificação típico descrito para a língua.', isCorrect: true, feedback: 'Correto. Essa é exatamente a distinção: um deles é "do repertório típico, mas fora de hora"; o outro é um padrão fora do repertório típico esperado.' },
          { id: 'q-alt-5-b', text: 'Ambos são a mesma coisa, apenas com nomes diferentes.', isCorrect: false, feedback: 'Incorreto. São conceitos distintos, com implicações clínicas diferentes.' },
          { id: 'q-alt-5-c', text: 'O processo persistente é sempre mais grave do que o atípico.', isCorrect: false, feedback: 'Incorreto. Gravidade depende de múltiplos fatores, não apenas do tipo de processo envolvido.' },
          { id: 'q-alt-5-d', text: 'O processo atípico é esperado em qualquer criança até os 8 anos.', isCorrect: false, feedback: 'Incorreto. Processos atípicos não são descritos como parte do desenvolvimento típico em nenhuma idade.' },
        ],
        correctAlternativeId: 'q-alt-5-a',
        explanation: 'A persistência refere-se à permanência de um processo típico além do esperado; a atipicidade refere-se à presença de um padrão não descrito no repertório típico de simplificação da língua — dois cuidados distintos e complementares na leitura da amostra.',
        hint: 'Um processo pode ser "normal, mas atrasado" ou pode ser "fora do padrão esperado" — são coisas diferentes.',
        relatedConceptId: 'conc-processo-atipico',
        referenceId: 'ref-tratado2014-cap71',
      },
      {
        id: 'q-alt-6',
        stem: 'Qual das alternativas caracteriza um padrão fonológico ("phonological disorder"), em oposição a uma dificuldade estritamente articulatória ("articulation disorder")?',
        alternatives: [
          { id: 'q-alt-6-a', text: 'Erros previsíveis e baseados em regras que afetam mais de um som, como anteriorização ou apagamento de consoante final.', isCorrect: true, feedback: 'Correto. Alterações fonológicas envolvem padrões sistemáticos, previsíveis e baseados em regras, que afetam mais de um som.' },
          { id: 'q-alt-6-b', text: 'Erros na produção de sons individuais, como distorções e substituições isoladas.', isCorrect: false, feedback: 'Incorreto. Essa descrição corresponde mais a uma dificuldade articulatória (motora), não a um padrão fonológico.' },
          { id: 'q-alt-6-c', text: 'Qualquer dificuldade relacionada à audição.', isCorrect: false, feedback: 'Incorreto. A distinção não se refere diretamente à audição, embora a audição deva sempre ser investigada.' },
          { id: 'q-alt-6-d', text: 'Apenas dificuldades relacionadas a encontros consonantais.', isCorrect: false, feedback: 'Incorreto. A distinção não se limita a um tipo específico de estrutura silábica.' },
        ],
        correctAlternativeId: 'q-alt-6-a',
        explanation: 'A distinção situa as dificuldades articulatórias no âmbito da produção motora de sons isolados e os padrões fonológicos no âmbito de regularidades sistemáticas e previsíveis que afetam mais de um som — reforçando a diferenciação já discutida entre erro fonético e erro fonológico.',
        hint: 'Pense na diferença entre um erro pontual em um som e um padrão que se repete em vários sons relacionados.',
        relatedConceptId: 'conc-erro-fonologico',
        referenceId: 'ref-broomfield2004',
      },
      {
        id: 'q-alt-7',
        stem: 'Uma criança apresenta inconsistência elevada na produção de palavras-alvo (produções diferentes em tentativas sucessivas da mesma palavra), mas a avaliação não investigou transições coarticulatórias nem aspectos prosódicos. Qual é a interpretação tecnicamente mais adequada?',
        alternatives: [
          { id: 'q-alt-7-a', text: 'A inconsistência é um dado relevante, mas isoladamente não é suficiente para sustentar uma hipótese de apraxia de fala na infância, que depende também da análise de transições coarticulatórias e de prosódia.', isCorrect: true, feedback: 'Correto. A literatura indica que a inconsistência é um de três critérios que, em conjunto, contribuem para o diagnóstico diferencial da apraxia de fala na infância — isoladamente, não é suficiente.' },
          { id: 'q-alt-7-b', text: 'A inconsistência isolada já confirma o diagnóstico de apraxia de fala na infância.', isCorrect: false, feedback: 'Incorreto. Esse é um erro comum de interpretação: a inconsistência é necessária, mas não suficiente, para essa hipótese diagnóstica.' },
          { id: 'q-alt-7-c', text: 'A inconsistência deve ser ignorada, já que não tem qualquer valor clínico.', isCorrect: false, feedback: 'Incorreto. A inconsistência é um marcador clinicamente relevante, mas deve ser integrada a outros achados, não ignorada nem tomada isoladamente.' },
          { id: 'q-alt-7-d', text: 'A inconsistência indica, com certeza, uma alteração fonológica de base exclusivamente linguística, descartando qualquer componente motor.', isCorrect: false, feedback: 'Incorreto. A inconsistência elevada é justamente um dos sinais que motivam a investigação de um possível componente motor, não o contrário.' },
        ],
        correctAlternativeId: 'q-alt-7-a',
        explanation: 'A inconsistência de fala é um marcador relevante, mas sua interpretação isolada — sem a investigação de transições coarticulatórias e prosódia — não permite sustentar ou descartar uma hipótese de apraxia de fala na infância.',
        hint: 'Lembre-se de que a literatura descreve três critérios que, juntos, contribuem para esse diagnóstico diferencial — não apenas um.',
        relatedConceptId: 'conc-consistencia',
        referenceId: 'ref-asha2007-cas',
      },
      {
        id: 'q-alt-8',
        stem: 'Em uma triagem, observa-se que uma criança de 5 anos altera apenas a produção do som /ʎ/ ("lh"), mantendo todos os demais sons e estruturas silábicas adequados para a idade. Qual conclusão é tecnicamente sustentável a partir exclusivamente desse achado?',
        alternatives: [
          { id: 'q-alt-8-a', text: 'O achado, isoladamente, não permite concluir por uma alteração fonológica; é necessário considerar a idade típica de consolidação desse som e reunir mais dados antes de qualquer hipótese.', isCorrect: true, feedback: 'Correto. Um único som alterado, especialmente um de aquisição mais tardia, não sustenta uma conclusão diagnóstica isolada.' },
          { id: 'q-alt-8-b', text: 'A criança certamente apresenta uma alteração fonológica, já que qualquer som alterado aos 5 anos é motivo de diagnóstico.', isCorrect: false, feedback: 'Incorreto. Esse é um erro comum: concluir por alteração a partir de um único som, sem considerar a idade típica de consolidação daquele som específico.' },
          { id: 'q-alt-8-c', text: 'Não há necessidade de qualquer registro, já que um único som nunca é relevante.', isCorrect: false, feedback: 'Incorreto. Ainda que não sustente uma conclusão isolada, o achado deve ser registrado e acompanhado.' },
          { id: 'q-alt-8-d', text: 'A criança certamente não tem qualquer dificuldade, já que apenas um som está alterado.', isCorrect: false, feedback: 'Incorreto. Não é possível fazer essa afirmação categórica sem investigação adicional; o dado deve ser acompanhado, não descartado nem superdimensionado.' },
        ],
        correctAlternativeId: 'q-alt-8-a',
        explanation: 'Concluir por uma alteração fonológica a partir de um único som alterado, isoladamente, é um erro comum de interpretação. É necessário considerar a idade típica de consolidação daquele som específico e reunir mais dados antes de qualquer hipótese.',
        hint: 'Pense em como a idade típica de consolidação de sons específicos, discutida no módulo anterior, deve ser considerada aqui.',
        relatedConceptId: 'conc-alt-fonologica',
        referenceId: 'ref-ceron2017codas',
      },
      {
        id: 'q-alt-9',
        stem: 'Uma criança de família nordestina realiza determinadas vogais átonas de forma diferente do padrão observado pelo avaliador, que é de outra região do Brasil. Não há qualquer outro achado alterado na fala da criança. Qual é a interpretação tecnicamente mais adequada?',
        alternatives: [
          { id: 'q-alt-9-a', text: 'Investigar se essa realização é compatível com a variedade regional da comunidade linguística da criança antes de considerá-la uma alteração fonológica.', isCorrect: true, feedback: 'Correto. Diferenças regionais legítimas do português brasileiro não devem ser registradas como alteração, e devem ser investigadas como possível variação antes de qualquer conclusão.' },
          { id: 'q-alt-9-b', text: 'Classificar automaticamente como processo fonológico atípico, já que difere do padrão do avaliador.', isCorrect: false, feedback: 'Incorreto. Esse é um erro comum: usar o próprio dialeto do avaliador como referência normativa, ignorando a variação linguística legítima.' },
          { id: 'q-alt-9-c', text: 'Concluir que se trata de uma alteração fonológica leve.', isCorrect: false, feedback: 'Incorreto. Não há dados suficientes para essa conclusão, e a hipótese mais consistente com o quadro descrito é a de variação regional.' },
          { id: 'q-alt-9-d', text: 'Recomendar encaminhamento terapêutico imediato para adequação à norma do avaliador.', isCorrect: false, feedback: 'Incorreto. Adequar a fala da criança à norma pessoal do avaliador, e não à norma da comunidade da criança, não é um objetivo terapêutico apropriado.' },
        ],
        correctAlternativeId: 'q-alt-9-a',
        explanation: 'Assim como discutido no módulo anterior, a caracterização de uma alteração fonológica deve sempre considerar as variações regionais e sociolinguísticas legítimas do português brasileiro, evitando o uso do dialeto pessoal do avaliador como padrão de comparação.',
        hint: 'Pense em qual deve ser o padrão de referência: a comunidade linguística da criança, ou o dialeto do avaliador?',
        relatedConceptId: 'conc-variacao-linguistica-alt',
        referenceId: 'ref-tratado2014-cap71',
      },
      {
        id: 'q-alt-10',
        stem: 'Uma criança de 4 anos é encaminhada com queixa de fala pouco compreensível. A anamnese revela três episódios de otite média antes dos 2 anos de idade, sem investigação audiológica posterior. Qual deve ser a conduta inicial mais adequada?',
        alternatives: [
          { id: 'q-alt-10-a', text: 'Encaminhar para avaliação audiológica antes de, ou em paralelo à, avaliação fonológica completa, já que alterações auditivas podem interferir na formação das regras fonológicas.', isCorrect: true, feedback: 'Correto. Episódios recorrentes de otite média antes dos 2 anos são um fator de risco relevante a ser investigado antes de qualquer conclusão sobre a natureza da dificuldade de fala.' },
          { id: 'q-alt-10-b', text: 'Iniciar diretamente a intervenção fonológica, já que a queixa é claramente de fala.', isCorrect: false, feedback: 'Incorreto. Iniciar intervenção sem investigar a audição ignora um fator de risco relevante relatado na própria anamnese.' },
          { id: 'q-alt-10-c', text: 'Concluir que a criança tem alteração fonológica de base exclusivamente linguística, já que a queixa é de fala.', isCorrect: false, feedback: 'Incorreto. Essa conclusão é precipitada diante de um histórico auditivo relevante ainda não investigado.' },
          { id: 'q-alt-10-d', text: 'Desconsiderar o histórico de otites, já que já se passaram mais de dois anos desde os episódios.', isCorrect: false, feedback: 'Incorreto. O histórico de otites recorrentes antes dos 2 anos é um dado relevante para a anamnese e para a hipótese diagnóstica, independentemente do tempo decorrido.' },
        ],
        correctAlternativeId: 'q-alt-10-a',
        explanation: 'A investigação auditiva é uma etapa obrigatória diante de queixas de fala, especialmente quando há histórico de otites recorrentes na primeira infância, um fator de risco documentado para dificuldades de percepção e organização fonológica.',
        hint: 'Lembre-se de que a integração da informação auditiva é apontada como essencial para a aquisição adequada da fonologia da língua.',
        relatedConceptId: 'conc-diagnostico-diferencial',
        referenceId: 'ref-tratado2014-cap71',
      },
      {
        id: 'q-alt-11',
        stem: 'Durante a avaliação de uma criança com queixa de fala, o fonoaudiólogo observa dificuldade na transição entre sons e variabilidade importante nos erros. Qual conduta de avaliação complementar é mais adequada para investigar essa hipótese de forma responsável?',
        alternatives: [
          { id: 'q-alt-11-a', text: 'Avaliar as estruturas e funções motoras orais, incluindo provas como diadococinesia oral e taxa articulatória, além de aprofundar a análise fonológica.', isCorrect: true, feedback: 'Correto. Dificuldades de transição entre sons e alta variabilidade justificam a investigação de aspectos motores da fala, complementando a análise fonológica.' },
          { id: 'q-alt-11-b', text: 'Concluir diretamente por apraxia de fala na infância com base apenas nesses dois achados.', isCorrect: false, feedback: 'Incorreto. Esses achados justificam investigação adicional, mas não são, isoladamente, suficientes para essa conclusão diagnóstica.' },
          { id: 'q-alt-11-c', text: 'Ignorar os achados motores e focar exclusivamente na contagem de processos fonológicos.', isCorrect: false, feedback: 'Incorreto. Ignorar aspectos motores relevantes pode levar a uma leitura incompleta do caso.' },
          { id: 'q-alt-11-d', text: 'Encerrar a avaliação, já que dificuldades de transição entre sons não têm relevância clínica.', isCorrect: false, feedback: 'Incorreto. Dificuldades de transição entre sons (coarticulação) são um dos aspectos considerados relevantes na literatura sobre diagnóstico diferencial de quadros motores de fala.' },
        ],
        correctAlternativeId: 'q-alt-11-a',
        explanation: 'Achados sugestivos de dificuldade motora (transições entre sons, variabilidade) justificam a ampliação da avaliação para incluir provas motoras específicas, sempre em conjunto com a análise fonológica — nunca como substituição uma da outra.',
        hint: 'Pense em quais provas complementares, discutidas na literatura, ajudam a investigar o componente motor da fala.',
        relatedConceptId: 'conc-diagnostico-diferencial',
        referenceId: 'ref-oliveira2021-afi',
      },
      {
        id: 'q-alt-12',
        stem: 'Reunidos os dados de uma amostra de fala, da anamnese, da avaliação auditiva e da avaliação motora oral de uma criança, qual é a conduta mais adequada para formular uma hipótese clínica inicial?',
        alternatives: [
          { id: 'q-alt-12-a', text: 'Integrar todos os achados disponíveis, buscando o padrão que melhor explica o conjunto de dados, e formular uma hipótese inicial sujeita a confirmação ao longo do acompanhamento.', isCorrect: true, feedback: 'Correto. A formulação de hipóteses clínicas responsáveis depende da integração de múltiplas fontes de informação, e não da priorização de um único achado.' },
          { id: 'q-alt-12-b', text: 'Priorizar exclusivamente o achado mais chamativo da amostra de fala, ignorando os demais dados coletados.', isCorrect: false, feedback: 'Incorreto. Focar em um único achado, por mais chamativo que seja, é o tipo de raciocínio que este módulo busca evitar.' },
          { id: 'q-alt-12-c', text: 'Aguardar a criança completar 7 anos antes de formular qualquer hipótese, independentemente dos achados já reunidos.', isCorrect: false, feedback: 'Incorreto. Uma hipótese inicial pode e deve ser formulada com base nos dados já reunidos, ainda que sujeita a revisão.' },
          { id: 'q-alt-12-d', text: 'Formular a hipótese com base apenas no relato da família, sem considerar os dados da avaliação direta.', isCorrect: false, feedback: 'Incorreto. O relato familiar é uma informação complementar importante, mas não substitui os dados da avaliação direta da criança.' },
        ],
        correctAlternativeId: 'q-alt-12-a',
        explanation: 'O raciocínio clínico responsável integra múltiplas fontes de informação — amostra de fala, história, audição, motricidade oral — para formular uma hipótese inicial, que permanece sujeita a confirmação e ajuste ao longo do processo avaliativo e terapêutico.',
        hint: 'Pense no princípio, já discutido neste módulo, de que nenhuma conclusão deve se basear em um único achado isolado.',
        relatedConceptId: 'conc-diagnostico-diferencial',
        referenceId: 'ref-tratado2014-cap71',
      },
    ],
    associations: [
      {
        id: 'assoc-alt-1',
        instruction: 'Associe cada manifestação clínica à interpretação mais adequada.',
        pairs: [
          { id: 'assoc-alt-1-p1', left: 'Redução de encontro consonantal persistente aos 6 anos', right: 'Processo típico que ultrapassou a idade esperada; merece investigação' },
          { id: 'assoc-alt-1-p2', left: 'Substituição incomum sem relação clara de traços com o som-alvo', right: 'Possível processo idiossincrático/atípico' },
          { id: 'assoc-alt-1-p3', left: 'Distorção isolada e estável de um único som', right: 'Mais compatível com erro fonético do que com padrão fonológico' },
          { id: 'assoc-alt-1-p4', left: 'Inconsistência elevada, sem avaliação de prosódia ou coarticulação', right: 'Dado relevante, mas insuficiente isoladamente para hipótese de apraxia' },
          { id: 'assoc-alt-1-p5', left: 'Padrão de fala compatível com a variedade regional da família', right: 'Variação linguística legítima, não alteração' },
          { id: 'assoc-alt-1-p6', left: 'PCC de 55% em amostra espontânea', right: 'Indicador quantitativo de gravidade, a integrar com análise qualitativa' },
          { id: 'assoc-alt-1-p7', left: 'Histórico de otites recorrentes antes dos 2 anos, sem avaliação auditiva', right: 'Investigação auditiva deve ser priorizada antes de conclusões' },
          { id: 'assoc-alt-1-p8', left: 'Único som alterado, de aquisição tardia, aos 5 anos', right: 'Não sustenta, isoladamente, conclusão de alteração fonológica' },
        ],
      },
      {
        id: 'assoc-alt-2',
        instruction: 'Associe cada termo à sua definição.',
        pairs: [
          { id: 'assoc-alt-2-p1', left: 'Erro fonético', right: 'Dificuldade motora na produção de um som específico' },
          { id: 'assoc-alt-2-p2', left: 'Erro fonológico', right: 'Padrão sistemático que afeta uma classe de sons relacionados' },
          { id: 'assoc-alt-2-p3', left: 'Transtorno da fala', right: 'Termo atual do DSM-5 para o quadro antes chamado de transtorno fonológico' },
          { id: 'assoc-alt-2-p4', left: 'Consistência de fala', right: 'Grau em que o mesmo som-alvo é produzido da mesma forma em tentativas repetidas' },
          { id: 'assoc-alt-2-p5', left: 'PCC-R', right: 'Índice de gravidade que não considera distorções como erro' },
          { id: 'assoc-alt-2-p6', left: 'Diagnóstico diferencial', right: 'Processo de distinguir a alteração fonológica de outros quadros que afetam a fala' },
          { id: 'assoc-alt-2-p7', left: 'Impacto funcional', right: 'Efeito da dificuldade de fala na participação social, escolar e comunicativa' },
        ],
      },
    ],
    decisionExercises: [
      {
        id: 'dec-alt-1',
        situation:
          'Uma criança de 5 anos é trazida à clínica com queixa de "fala infantilizada". Na amostra de fala coletada, você observa apenas a simplificação do encontro consonantal ("pato" por "prato"), sem qualquer outro achado alterado, e a família relata compreensão adequada por parte de todos os familiares. Qual conduta inicial é mais adequada?',
        options: [
          { id: 'dec-alt-1-o1', text: 'Concluir imediatamente que a criança tem alteração fonológica, já que qualquer simplificação relatada pela família deve ser tratada como alteração.', consequence: 'Pode gerar encaminhamento e expectativas familiares desnecessárias, já que o achado isolado é compatível com processo ainda em consolidação nessa idade.', explanation: 'Concluir por alteração a partir de um único processo, sem considerar a idade típica de consolidação da estrutura envolvida, é um erro comum de interpretação — não sustenta, isoladamente, uma conclusão diagnóstica.', isRecommended: false },
          { id: 'dec-alt-1-o2', text: 'Reconhecer que o achado isolado é compatível com processo ainda em consolidação para a idade, orientar a família sobre o desenvolvimento esperado e propor reavaliação ou acompanhamento, sem encerrar nem encaminhar prematuramente.', consequence: 'Evita tanto o encaminhamento precipitado quanto a perda de um eventual sinal relevante, mantendo a família informada e o caso acompanhado.', explanation: 'Diante de um único achado compatível com variação esperada, a conduta responsável é orientar e acompanhar, sem concluir por alteração nem descartar totalmente a necessidade de observação futura — evitando a conclusão diagnóstica precipitada.', isRecommended: true },
          { id: 'dec-alt-1-o3', text: 'Não fornecer nenhuma orientação à família, já que o caso não parece grave.', consequence: 'Deixa de esclarecer a família sobre o que é esperado, podendo gerar ansiedade desnecessária ou, ao contrário, descuido diante de eventuais sinais futuros.', explanation: 'Mesmo quando não há indicação de encaminhamento, orientar a família com informações baseadas em evidências é parte da conduta clínica responsável.', isRecommended: false },
          { id: 'dec-alt-1-o4', text: 'Recomendar início imediato de terapia intensiva para eliminar a simplificação o quanto antes.', consequence: 'Pode representar intervenção desnecessária para um processo compatível com o desenvolvimento típico, consumindo recursos da família sem benefício comprovado nesse momento.', explanation: 'Intervenção não deve ser iniciada apenas com base em um processo isolado compatível com a idade; a decisão terapêutica pertence aos módulos seguintes desta unidade e depende de avaliação completa.', isRecommended: false },
        ],
      },
      {
        id: 'dec-alt-2',
        situation:
          'Em uma reavaliação, você constata que uma criança de 7 anos mantém inconsistência elevada nas produções, com transições entre sons frequentemente alongadas e alterações no ritmo da fala. A família pergunta diretamente: "Isso é apraxia?". Qual é a conduta mais adequada?',
        options: [
          { id: 'dec-alt-2-o1', text: 'Responder afirmativamente, já que a inconsistência é um sinal clássico de apraxia de fala na infância.', consequence: 'Pode levar a um rótulo diagnóstico precipitado e a expectativas ou condutas terapêuticas inadequadas antes da conclusão da investigação.', explanation: 'A inconsistência é um de três critérios considerados no diagnóstico diferencial da apraxia de fala na infância; embora os demais achados relatados reforcem essa hipótese, uma resposta afirmativa direta antes da conclusão da avaliação completa seria uma conclusão diagnóstica precipitada.', isRecommended: false },
          { id: 'dec-alt-2-o2', text: 'Explicar à família que os achados (inconsistência, transições alongadas, alteração de ritmo) reúnem características que, em conjunto, sugerem a necessidade de investigação aprofundada dessa hipótese, sem afirmar um diagnóstico fechado antes de concluir a avaliação.', consequence: 'Mantém a família informada com transparência, sem antecipar uma conclusão que ainda depende de avaliação complementar e acompanhamento.', explanation: 'Os três achados relatados correspondem justamente aos critérios discutidos na literatura para a hipótese de apraxia de fala na infância; ainda assim, a formalização diagnóstica exige processo avaliativo completo, e a comunicação com a família deve refletir esse estágio do processo, evitando conclusão diagnóstica precipitada.', isRecommended: true },
          { id: 'dec-alt-2-o3', text: 'Negar categoricamente a possibilidade, informando à família que "certamente não é apraxia".', consequence: 'Pode descartar prematuramente uma hipótese relevante, atrasando encaminhamentos ou condutas apropriadas caso a hipótese se confirme.', explanation: 'Os achados relatados são justamente os que a literatura aponta como relevantes para essa hipótese; negá-la categoricamente, sem avaliação completa, também é uma conclusão precipitada, apenas na direção oposta.', isRecommended: false },
          { id: 'dec-alt-2-o4', text: 'Evitar qualquer comunicação com a família até que todos os exames complementares estejam prontos, sem explicar o motivo da investigação em andamento.', consequence: 'Pode gerar ansiedade e desconfiança por parte da família, prejudicando a adesão ao processo avaliativo.', explanation: 'A comunicação transparente sobre o processo em andamento, mesmo sem uma conclusão fechada, é parte da conduta ética e clínica responsável.', isRecommended: false },
        ],
      },
    ],
    fictionalCases: [
      {
        id: 'case-alt-1',
        title: 'Caso fictício: Davi, 6 anos e 3 meses',
        description:
          'Davi tem 6 anos e 3 meses, cursa o 1º ano do Ensino Fundamental e mora com os pais; não há relato de casos semelhantes na família. A queixa escolar e familiar é de que "poucas pessoas fora de casa entendem o que ele fala". Em uma amostra de fala coletada com nomeação de figuras e conversa espontânea, observou-se: produções diferentes para a mesma palavra-alvo em tentativas repetidas (por exemplo, a palavra "sapato" produzida de três formas distintas em três tentativas); transições entre sons ocasionalmente alongadas; simplificação persistente de encontros consonantais; substituição de fricativas por plosivas em posição inicial de palavra. Vocabulário e organização de frases foram considerados adequados para a idade pela professora. Não há registro de avaliação audiológica recente; os pais relatam "algumas otites" na primeira infância, sem maiores detalhes. Davi é uma criança sociável, participa das brincadeiras, mas evita falar em situações com pessoas menos familiares.',
        disclaimer:
          'Este é um caso fictício, construído exclusivamente para fins didáticos. Não representa nenhuma pessoa real e não deve ser utilizado como modelo de laudo, diagnóstico ou conduta clínica definitiva. A leitura de qualquer amostra de fala real exige avaliação fonoaudiológica presencial completa, incluindo investigação auditiva e motora, com instrumentos e critérios próprios.',
        questions: [
          {
            id: 'case-alt-1-q1',
            stem: 'Considerando exclusivamente os dados descritos, qual é a leitura mais adequada sobre o caso de Davi?',
            alternatives: [
              { id: 'case-alt-1-q1-a', text: 'O conjunto de achados (inconsistência, transições alongadas, processos persistentes e histórico auditivo não investigado) é compatível com a necessidade de investigação aprofundada, incluindo avaliação auditiva e motora oral, antes de qualquer conclusão diagnóstica.', isCorrect: true, feedback: 'Correto. A combinação desses achados sugere a necessidade de investigação ampliada, não uma conclusão diagnóstica isolada a partir dos dados disponíveis.' },
              { id: 'case-alt-1-q1-b', text: 'Os dados confirmam, de forma definitiva, um diagnóstico de apraxia de fala na infância.', isCorrect: false, feedback: 'Incorreto. Embora a inconsistência e as transições alongadas sejam achados relevantes para essa hipótese, uma conclusão definitiva exige avaliação completa, incluindo prosódia e demais critérios, não plenamente detalhados na descrição.' },
              { id: 'case-alt-1-q1-c', text: 'Os dados indicam apenas variação esperada do desenvolvimento, sem necessidade de qualquer investigação adicional.', isCorrect: false, feedback: 'Incorreto. A combinação de processos persistentes aos 6 anos, inconsistência e histórico auditivo não investigado ultrapassa o que seria compatível apenas com variação esperada, justificando investigação adicional.' },
              { id: 'case-alt-1-q1-d', text: 'O impacto funcional relatado (evitar falar com pessoas menos familiares) não deve ser considerado na leitura clínica do caso.', isCorrect: false, feedback: 'Incorreto. O impacto funcional e comunicativo é um dado clinicamente relevante e deve ser integrado à leitura do caso, não descartado.' },
            ],
            correctAlternativeId: 'case-alt-1-q1-a',
            explanation: 'O conjunto de achados descritos — inconsistência, transições alongadas, processos persistentes, histórico auditivo não esclarecido e impacto funcional relatado — não permite, isoladamente, nenhuma conclusão diagnóstica fechada, mas justifica claramente a ampliação da investigação (auditiva, motora oral e fonológica completa) antes de qualquer hipótese mais específica.',
            hint: 'Pense em quantas e quais dimensões diferentes (linguística, motora, auditiva, funcional) os achados descritos tocam, e no que isso indica sobre a necessidade de investigação.',
            relatedConceptId: 'conc-diagnostico-diferencial',
            referenceId: 'ref-asha2007-cas',
          },
          {
            id: 'case-alt-1-q2',
            stem: 'Qual é o próximo passo mais adequado na condução do caso de Davi?',
            alternatives: [
              { id: 'case-alt-1-q2-a', text: 'Encaminhar para avaliação audiológica, complementar a avaliação fonológica com provas motoras orais (como diadococinesia) e ampliar a amostra de fala, integrando todos os achados antes de qualquer conclusão.', isCorrect: true, feedback: 'Correto. Essa conduta integra as diferentes dimensões relevantes ao caso (auditiva, motora, fonológica) antes de qualquer conclusão diagnóstica, evitando tanto a omissão quanto a precipitação.' },
              { id: 'case-alt-1-q2-b', text: 'Iniciar diretamente um programa de intervenção fonológica padrão, já que a queixa principal é de inteligibilidade de fala.', isCorrect: false, feedback: 'Incorreto. Iniciar intervenção sem investigar adequadamente a audição e os aspectos motores pode direcionar mal a conduta terapêutica, especialmente diante dos achados relatados.' },
              { id: 'case-alt-1-q2-c', text: 'Aguardar sem qualquer conduta até os 8 anos, já que ainda está dentro da faixa etária de aquisição de alguns sons.', isCorrect: false, feedback: 'Incorreto. O conjunto de achados relatados (não apenas um som isolado) já justifica investigação ativa, não espera passiva.' },
              { id: 'case-alt-1-q2-d', text: 'Comunicar à família um diagnóstico fechado de transtorno fonológico, apraxia de fala ou ambos, para iniciar os encaminhamentos necessários.', isCorrect: false, feedback: 'Incorreto. Comunicar um diagnóstico fechado antes de concluir a investigação necessária é uma conclusão diagnóstica precipitada, incompatível com os dados disponíveis até este ponto.' },
            ],
            correctAlternativeId: 'case-alt-1-q2-a',
            explanation: 'Diante de achados que tocam múltiplas dimensões (linguística, motora e auditiva), a conduta responsável é ampliar a investigação de forma integrada, reunindo os dados necessários antes de qualquer conclusão — coerente com o princípio, discutido ao longo do módulo, de que nenhuma conclusão deve se basear em achados isolados.',
            hint: 'Pense em quais avaliações complementares, discutidas neste módulo, ajudariam a esclarecer cada uma das hipóteses em jogo.',
            relatedConceptId: 'conc-diagnostico-diferencial',
            referenceId: 'ref-oliveira2021-afi',
          },
        ],
      },
    ],
  },

  review: {
    flashcards: [
      { id: 'fc-alt-1', front: 'Qual a diferença central entre erro fonético e erro fonológico?', back: 'Erro fonético é dificuldade motora isolada na produção de um som específico; erro fonológico é um padrão sistemático que afeta uma classe inteira de sons relacionados por traços.', tags: ['erro-fonetico', 'erro-fonologico'] },
      { id: 'fc-alt-2', front: 'Qual termo o DSM-5 (tradução brasileira) usa no lugar de "transtorno fonológico" (DSM-IV)?', back: '"Transtorno da fala", acompanhando o termo internacional Speech Sound Disorder.', tags: ['terminologia'] },
      { id: 'fc-alt-3', front: 'O que caracteriza um processo fonológico persistente?', back: 'Um processo de simplificação típico do desenvolvimento que permanece além da idade em que costuma desaparecer.', tags: ['processo-persistente'] },
      { id: 'fc-alt-4', front: 'O que caracteriza um processo fonológico atípico/idiossincrático?', back: 'Um padrão de simplificação não descrito como parte do repertório típico de processos da língua.', tags: ['processo-atipico'] },
      { id: 'fc-alt-5', front: 'O que é consistência de fala?', back: 'O grau em que a criança produz o mesmo som-alvo da mesma forma em tentativas sucessivas.', tags: ['consistencia'] },
      { id: 'fc-alt-6', front: 'A inconsistência de fala, isoladamente, é suficiente para diagnosticar apraxia de fala na infância?', back: 'Não. A literatura aponta três critérios (inconsistência, transições coarticulatórias alongadas/interrompidas e alteração prosódica) que, em conjunto, contribuem para essa hipótese diagnóstica.', tags: ['consistencia', 'apraxia'] },
      { id: 'fc-alt-7', front: 'O que é o PCC (Percentual de Consoantes Corretas)?', back: 'Índice que calcula a proporção de consoantes produzidas corretamente em uma amostra de fala espontânea, usado para estimar gravidade.', tags: ['pcc', 'gravidade'] },
      { id: 'fc-alt-8', front: 'O que o PCC-R muda em relação ao PCC original?', back: 'Deixa de considerar distorções como erro, tornando-se mais adequado para comparações entre falantes diversos.', tags: ['pcc'] },
      { id: 'fc-alt-9', front: 'O que é o PDI (Process Density Index)?', back: 'Índice que calcula o número total de processos fonológicos em relação ao número de palavras analisadas na amostra.', tags: ['pdi', 'gravidade'] },
      { id: 'fc-alt-10', front: 'Cite três tipos de erro observados na fala de crianças com alteração fonológica.', back: 'Substituições, omissões e distorções.', tags: ['tipos-de-erro'] },
      { id: 'fc-alt-11', front: 'Por que um único som alterado geralmente não sustenta uma conclusão de alteração fonológica?', back: 'Porque é preciso considerar a idade típica de consolidação daquele som e reunir mais dados antes de qualquer conclusão.', tags: ['avaliacao'] },
      { id: 'fc-alt-12', front: 'Por que uma diferença regional de pronúncia não deve ser tratada como alteração fonológica?', back: 'Porque reflete a variação linguística legítima da comunidade da criança, e não um desvio do sistema fonológico.', tags: ['variacao-linguistica'] },
      { id: 'fc-alt-13', front: 'Por que episódios recorrentes de otite média antes dos 2 anos são relevantes na avaliação de uma queixa de fala?', back: 'Porque podem interferir na percepção auditiva e na formação das regras fonológicas, justificando investigação audiológica.', tags: ['avaliacao-auditiva'] },
      { id: 'fc-alt-14', front: 'Por que a avaliação das estruturas e funções motoras orais é importante diante de uma queixa de fala?', back: 'Porque ajuda a diferenciar dificuldades de base motora (como apraxia ou disartria) das de base linguística-fonológica.', tags: ['avaliacao-motora'] },
      { id: 'fc-alt-15', front: 'O que é diagnóstico diferencial, no contexto das alterações fonológicas?', back: 'O processo de distinguir a alteração fonológica de outros quadros que também afetam a fala, como apraxia, disartria, alterações estruturais e perda auditiva.', tags: ['diagnostico-diferencial'] },
      { id: 'fc-alt-16', front: 'Segundo estudo brasileiro, qual a prevalência de aquisição fonológica atípica encontrada em uma amostra de 866 crianças de 3 a 8 anos?', back: '15,26% da amostra apresentou aquisição fonológica atípica.', tags: ['prevalencia'] },
      { id: 'fc-alt-17', front: 'Cite processos mais frequentemente observados em quadros de alteração fonológica no português brasileiro.', back: 'Simplificação de líquidas, simplificação do encontro consonantal, simplificação da consoante final, ensurdecimento de plosivas e fricativas, frontalização de palatais.', tags: ['processos-fonologicos'] },
      { id: 'fc-alt-18', front: 'O que diferencia um "articulation disorder" de um "phonological disorder"?', back: 'O articulation disorder envolve erros na produção de sons individuais; o phonological disorder envolve padrões previsíveis e baseados em regras que afetam mais de um som.', tags: ['terminologia'] },
      { id: 'fc-alt-19', front: 'Por que nenhum índice quantitativo isolado (como o PCC) deve ser usado como único critério diagnóstico?', back: 'Porque índices quantitativos são complementares e nunca substituem a análise qualitativa do perfil fonológico da criança.', tags: ['gravidade', 'avaliacao'] },
      { id: 'fc-alt-20', front: 'O que é impacto funcional, no contexto das alterações fonológicas?', back: 'O efeito da dificuldade de fala sobre a participação social, escolar e comunicativa da criança, nem sempre proporcional à quantidade de sons alterados.', tags: ['impacto-funcional'] },
      { id: 'fc-alt-21', front: 'Que tipos de amostra de fala devem ser combinados para uma caracterização fonológica confiável?', back: 'Imitação de palavras, nomeação de figuras e fala espontânea, já que cada uma revela aspectos diferentes do sistema fonológico.', tags: ['amostra-de-fala'] },
      { id: 'fc-alt-22', front: 'Em que faixa etária o diagnóstico de alteração fonológica costuma ser mais frequente?', back: 'Predominantemente entre 4 e 8 anos de idade.', tags: ['idade'] },
      { id: 'fc-alt-23', front: 'Por que a apraxia de fala na infância exige avaliação de mais de uma dimensão da fala?', back: 'Porque repercute em diferentes níveis linguísticos e motores, exigindo avaliação de inconsistência, transições coarticulatórias e prosódia, não apenas aspectos articulatórios isolados.', tags: ['apraxia', 'avaliacao'] },
      { id: 'fc-alt-24', front: 'Qual é o princípio central deste módulo em relação à conclusão diagnóstica?', back: 'Nenhuma conclusão diagnóstica deve se basear em um único som alterado, processo isolado ou índice quantitativo isolado — é a análise conjunta de múltiplas fontes de informação que sustenta uma leitura clínica responsável.', tags: ['principio-central'] },
    ],
    finalSynthesis:
      'A alteração fonológica é um quadro heterogêneo de dificuldade de fala, caracterizado pelo uso inadequado dos sons em relação à idade e às variações regionais da língua. A terminologia mudou ao longo do tempo — do "transtorno fonológico" do DSM-IV ao atual "transtorno da fala" do DSM-5 —, e convive, na prática brasileira, com termos clínicos como "distúrbio fonológico", que devem ser compreendidos, e não presumidos como equivalentes automáticos entre diferentes sistemas de classificação. A identificação de uma possível alteração depende da análise conjunta de múltiplos aspectos: a persistência e a atipicidade dos processos fonológicos, a consistência das produções, o inventário fonético e fonológico, a inteligibilidade e a gravidade estimada por índices como o PCC, o impacto funcional sobre a comunicação da criança e o contexto linguístico e sociocultural em que ela está inserida. A distinção entre erro fonético e erro fonológico, assim como entre alteração fonológica e outros quadros — como apraxia de fala na infância, disartria, alterações estruturais e perda auditiva —, exige investigação específica e não deve ser presumida a partir de um único achado, por mais chamativo que pareça: a inconsistência de fala, por exemplo, é apenas um entre três critérios considerados na investigação diferencial da apraxia de fala na infância. A avaliação auditiva e a análise das estruturas e funções motoras da fala são etapas obrigatórias, e não complementares opcionais, desse processo. Compreender esses fundamentos prepara o caminho para os Módulos 3 e 4 desta unidade, que tratarão dos princípios de intervenção e do planejamento terapêutico a partir dos achados aqui discutidos — sempre com a mesma cautela contra conclusões apressadas.',
  },

  references: [
    {
      id: 'ref-tratado2014-cap71',
      authors: 'WERTZNER, Haydée Fiszbein; PAGAN-NEVES, Luciana de Oliveira.',
      title: 'Avaliação e Diagnóstico do Distúrbio Fonológico',
      source: 'In: MARCHESAN, Irene Queiroz; SILVA, Hilton Justino da; TOMÉ, Marileda Cattelan (org.). Tratado das Especialidades em Fonoaudiologia. São Paulo: Guanabara Koogan, 2014. cap. 71.',
      year: 2014,
      usedIn: ['learn.summary', 'learn.essentialConcepts', 'learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-dsm5-2014',
      authors: 'AMERICAN PSYCHIATRIC ASSOCIATION.',
      title: 'Manual Diagnóstico e Estatístico de Transtornos Mentais: DSM-5',
      source: 'Tradução da 5. ed. Porto Alegre: Artmed, 2014.',
      year: 2014,
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-shriberg1982-pcc',
      authors: 'SHRIBERG, Lawrence D.; KWIATKOWSKI, Joan.',
      title: 'Phonological Disorders III: A Procedure for Assessing Severity of Involvement',
      source: 'Journal of Speech and Hearing Disorders, v. 47, p. 256-270, 1982.',
      year: 1982,
      usedIn: ['learn.summary', 'learn.evidence'],
    },
    {
      id: 'ref-shriberg1997-pccr',
      authors: 'SHRIBERG, Lawrence D.; AUSTIN, Diane; LEWIS, Barbara A.; MCSWEENY, Jane L.; WILSON, David L.',
      title: 'The Percentage of Consonants Correct (PCC) Metric: Extensions and Reliability Data',
      source: 'Journal of Speech, Language, and Hearing Research, v. 40, p. 708-722, 1997.',
      year: 1997,
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
      id: 'ref-broomfield2004',
      authors: 'BROOMFIELD, Jan; DODD, Barbara.',
      title: 'The Nature of Referred Subtypes of Primary Speech Disability',
      source: 'Child Language Teaching and Therapy, v. 20, n. 2, p. 135-151, 2004.',
      year: 2004,
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
      id: 'ref-ceron2017codas',
      authors: 'CERON, Marizete Ilha; GUBIANI, Marileda Barichello; OLIVEIRA, Camila Rosa de; GUBIANI, Marieli Barichello; KESKE-SOARES, Márcia.',
      title: 'Ocorrência do Desvio Fonológico e de Processos Fonológicos em Aquisição Fonológica Típica e Atípica',
      source: 'CoDAS, v. 29, n. 3, 2017.',
      year: 2017,
      doi: '10.1590/2317-1782/20172015306',
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-oliveira2021-afi',
      authors: 'OLIVEIRA, Aline Mara de; NUNES, Isadora; CRUZ, Greicyhelen Santos da; GURGEL, Léia Gonçalves.',
      title: 'Métodos de Avaliação da Apraxia de Fala na Infância: Revisão Sistemática',
      source: 'Audiology - Communication Research, v. 26, e2524, 2021.',
      year: 2021,
      doi: '10.1590/2317-6431-2021-2524',
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions', 'apply.fictionalCases'],
    },
    {
      id: 'ref-asha2007-cas',
      authors: 'AMERICAN SPEECH-LANGUAGE-HEARING ASSOCIATION.',
      title: 'Childhood Apraxia of Speech [Technical Report]',
      source: 'ASHA, 2007.',
      year: 2007,
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions', 'apply.fictionalCases'],
    },
  ],
})
