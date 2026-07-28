import { defineFonoLabModule } from '@/methodology/fonolab'

export const moduloCaracteristicasTranstornosLinguagem = defineFonoLabModule({
  id: 'mod-transtornos-linguagem-caracteristicas',
  slug: 'caracteristicas-transtornos-especificos-linguagem',
  title: 'Características dos Transtornos Específicos de Linguagem',
  description:
    'Fundamentos sobre os transtornos do desenvolvimento da linguagem oral: evolução terminológica, heterogeneidade de perfis, persistência, impacto funcional e os cuidados necessários para diferenciar atraso, variação e transtorno persistente.',
  order: 1,
  learningObjective:
    'Compreender as características centrais dos transtornos do desenvolvimento da linguagem, sua heterogeneidade, seus impactos funcionais e os cuidados necessários para diferenciar atraso, variação e transtorno persistente.',
  prerequisiteKnowledge: [
    'Desenvolvimento típico da linguagem oral na infância',
    'Unidade 1: Fundamentos, avaliação e diagnóstico da linguagem',
  ],
  estimatedTimeMinutes: 180,
  difficulty: 'advanced',
  status: 'published',

  learn: {
    summary: [
      {
        id: 'sum-tl-1',
        text: 'O TDL não é uma condição recente: as primeiras descrições de crianças com dificuldade para adquirir linguagem na ausência de outras doenças datam de 1822 (Reilly et al., 2014, citados por Cáceres-Assenço et al., 2020). Ainda assim, só em 2016 se chegou a um consenso internacional sobre critérios e terminologia. Ao longo desses quase dois séculos, o campo acumulou uma sucessão de rótulos — afasia congênita, atraso de linguagem, distúrbio de linguagem, prejuízo de linguagem — até que, em 1981, Leonard cunhasse o termo specific language impairment (SLI) (Leonard, 1981), que passou a predominar entre pesquisadores, ainda que sistemas classificatórios como a CID-10 e o DSM-IV não o tenham incorporado (Cáceres-Assenço et al., 2020).',
      },
      {
        id: 'sum-tl-2',
        text: 'No Brasil, a tradução consolidada de SLI foi Distúrbio Específico de Linguagem (DEL), termo difundido sobretudo por dois grupos de pesquisadores: o dos foniatras Alfredo Tabith Junior e Mauro Spinelli (PUC-SP) e o da fonoaudióloga Debora Maria Befi-Lopes (USP-SP), com produção científica mais expressiva neste segundo grupo (Cáceres-Assenço et al., 2020). O diagnóstico de DEL exigia desempenho abaixo de 1,25 desvio-padrão da média (10º percentil) em ao menos duas medidas de linguagem, além de critérios de exclusão rígidos: nenhuma deficiência intelectual ou auditiva, alteração neurológica, síndrome ou transtorno psiquiátrico associado, e QI não-verbal superior a 85 — o que deixava crianças com desempenho cognitivo limítrofe (70-85) sem qualquer diagnóstico, nem DEL nem deficiência intelectual (Cáceres-Assenço et al., 2020).',
      },
      {
        id: 'sum-tl-2b',
        text: 'Mais de 20 anos de pesquisa mostraram problemas com esses critérios: crianças que preenchiam completamente os critérios de DEL apresentavam, em média, pior funcionamento executivo do que crianças com desenvolvimento típico (Henry; Messer; Nash, 2012, citados por Cáceres-Assenço et al., 2020) e mais sintomas compatíveis com TDAH ou transtorno do desenvolvimento da coordenação, sugerindo comorbidade — o que colocou em xeque justamente o caráter "específico" do DEL. Isso motivou, a partir de um número especial do International Journal of Language & Communication Disorders em 2014, o desenvolvimento do consenso CATALISE: um painel de 57 especialistas de dez áreas profissionais e seis países, reunido por técnica Delphi em duas fases, para redefinir critérios (Fase 1) e terminologia (Fase 2) (Bishop et al., 2016, 2017; Cáceres-Assenço et al., 2020).',
      },
      {
        id: 'sum-tl-3',
        text: 'Distinguir atraso de transtorno persistente é uma das tarefas mais delicadas da prática com crianças pequenas. Muitos bebês com vocabulário reduzido aos 18-24 meses ("late talkers") alcançam desempenho típico até os 4-5 anos; uma parcela, porém, mantém dificuldades até a adolescência, sobretudo quando o atraso envolve compreensão, poucos gestos comunicativos ou combinação tardia de palavras (Rescorla, 2009). Não existe, antes dos 3 anos, um preditor isolado capaz de separar com precisão quem vai ou não superar o atraso — o que exige cautela redobrada antes de qualquer prognóstico precoce.',
      },
      {
        id: 'sum-tl-4',
        text: 'Segundo o consenso CATALISE, "Transtorno de Linguagem" é o termo proposto para dificuldades que tendem a persistir além da infância, com impacto significativo nas interações sociais cotidianas ou no progresso educacional; quando esse transtorno ocorre sem uma condição biomédica diferenciadora conhecida, o termo específico recomendado é Transtorno do Desenvolvimento da Linguagem (Bishop et al., 2017). É importante entender o TDL como uma categoria de utilidade clínica, que orienta o encaminhamento a serviços, e não como uma entidade única e bem delimitada.',
      },
      {
        id: 'sum-tl-5',
        text: 'O TDL não corresponde a um perfil único e homogêneo. Duas crianças com o mesmo diagnóstico podem apresentar combinações muito diferentes de dificuldades — uma com maior comprometimento em morfossintaxe, outra em vocabulário ou em discurso narrativo —, e a gravidade também varia amplamente (Leonard, 2014; Bishop et al., 2017). Tratar o TDL como perfil homogêneo leva a expectativas equivocadas sobre o quadro de uma criança específica e a condutas de avaliação e intervenção pouco individualizadas.',
      },
      {
        id: 'sum-tl-6',
        text: 'Quanto mais tarde a dificuldade permanece evidente, maior a probabilidade de persistência: problemas ainda presentes aos 5 anos tendem a se manter, sobretudo quando envolvem compreensão receptiva ou um padrão difuso em múltiplas áreas da linguagem, e não restrito a um único aspecto isolado, como a fonologia expressiva (Bishop et al., 2017). Isso não significa que o quadro seja estático: a linguagem continua se desenvolvendo, ainda que a defasagem em relação aos pares possa se manter.',
      },
      {
        id: 'sum-tl-7',
        text: 'O critério central para caracterizar o transtorno não é apenas o desempenho abaixo da média em testes padronizados, mas o impacto funcional — prejuízo real e persistente na participação social e no progresso educacional da criança (Bishop et al., 2016). Dificuldades de linguagem podem passar despercebidas quando se manifestam por meio de comportamento: uma criança que reage com frustração, isolamento ou dificuldades de conduta pode estar enfrentando um transtorno de linguagem não identificado, o que justifica investigar a linguagem diante de queixas comportamentais ou psiquiátricas.',
      },
      {
        id: 'sum-tl-8',
        text: 'A linguagem receptiva — a capacidade de compreender o que é dito — é um domínio frequentemente subestimado na avaliação, porque a criança pode desenvolver estratégias compensatórias (uso do contexto, de pistas visuais, de rotinas) que mascaram a real dificuldade de compreensão. Prejuízos significativos na compreensão estão associados a pior prognóstico e devem ser investigados ativamente, não apenas inferidos a partir da expressão (Bishop et al., 2017).',
      },
      {
        id: 'sum-tl-9',
        text: 'A linguagem expressiva abrange desde a articulação e a fonologia até a formulação de frases gramaticalmente complexas e a organização do discurso. Dificuldades restritas à fonologia expressiva, isoladamente, tendem a ter prognóstico mais favorável do que dificuldades que também envolvem morfossintaxe e discurso — mais um motivo para não tratar "ter TDL" como uma condição de gravidade única (Bishop et al., 2017).',
      },
      {
        id: 'sum-tl-10',
        text: 'A memória de trabalho verbal, sobretudo o componente fonológico, é um dos processos cognitivos mais estudados em associação ao TDL. Crianças com o transtorno frequentemente apresentam desempenho reduzido em tarefas de repetição de pseudopalavras, o que já foi proposto como possível mecanismo para as dificuldades de aquisição vocabular e gramatical (Gathercole; Baddeley, 1990). Ainda assim, esse achado não deve ser tomado como marcador definitivo isolado: nem toda criança com TDL apresenta esse padrão, e o estatuto causal da relação permanece em debate.',
      },
      {
        id: 'sum-tl-11',
        text: 'Além da memória de trabalho, dificuldades de processamento — velocidade de processamento auditivo e linguístico, integração de informações sintáticas em tempo real, automatização de regras gramaticais — têm sido descritas como parte do quadro cognitivo mais amplo associado ao TDL, sem que exista, até o momento, um único mecanismo cognitivo explicativo aceito de forma consensual (Leonard, 2014).',
      },
      {
        id: 'sum-tl-12',
        text: 'Fatores de risco associados ao TDL incluem histórico familiar de dificuldades de linguagem ou leitura, sexo masculino, posição de irmão mais novo em famílias numerosas e menor escolaridade parental (Bishop et al., 2017). Esses fatores são estatisticamente associados ao transtorno, mas nenhum deles, isoladamente, prediz com segurança o desenvolvimento de um quadro persistente em uma criança específica — daí a diferença entre fator de risco e critério diagnóstico.',
      },
      {
        id: 'sum-tl-13',
        text: 'O consenso CATALISE propõe distinguir "condições diferenciadoras" de "condições coocorrentes". Condições diferenciadoras são quadros biomédicos — lesão cerebral, afasia epiléptica adquirida na infância, certas condições neurodegenerativas, paralisia cerebral, perda auditiva sensorioneural, síndromes genéticas como a síndrome de Down, transtorno do espectro autista e deficiência intelectual — que, quando presentes, mudam a nomenclatura para "Transtorno de Linguagem associado a X", indicando também uma via de intervenção mais específica (Bishop et al., 2017).',
      },
      {
        id: 'sum-tl-14',
        text: 'Na prática, os critérios de exclusão rígidos do DEL funcionavam mais como barreira de acesso a serviços do que como validadores da natureza do problema: o próprio consenso reconheceu que a evidência disponível não sustenta a exigência de discrepância com habilidade não-verbal como critério diagnóstico (Bishop et al., 2016, 2017). É importante notar que essa mudança não é unânime: pesquisadoras como Mabel Rice contestam publicamente a amplitude do termo TDL, por considerá-lo inespecífico e por dificultar a identificação de crianças cujo comprometimento é predominantemente verbal — debate promovido pela própria ASHA em simpósio de 2019 e em número especial de 2020 (Cáceres-Assenço et al., 2020). A terminologia, portanto, deve ser tratada como uma convenção clínica útil e em evolução, não como uma verdade definitiva e consensual sem contestação.',
      },
      {
        id: 'sum-tl-15',
        text: 'Quando não há nenhuma condição diferenciadora identificável, o termo recomendado é justamente Transtorno do Desenvolvimento da Linguagem — o qualificador "desenvolvimental" indica que a condição surge ao longo do desenvolvimento, sem causa biomédica conhecida, e não que a criança vá necessariamente "superar" o problema com o tempo (Bishop et al., 2017). Confundir os dois grupos — TDL e Transtorno de Linguagem associado a uma condição diferenciadora — pode levar a expectativas de intervenção e prognóstico equivocadas.',
      },
      {
        id: 'sum-tl-16',
        text: 'Ao contrário do critério de exclusão tradicional, o consenso estabelece explicitamente que o TDL pode coexistir com outros quadros do neurodesenvolvimento — como TDAH, transtorno do desenvolvimento da coordenação motora e dislexia — sem que essa coocorrência afaste o diagnóstico (Bishop et al., 2017). Um mesmo quadro pode, na prática, receber rótulos diferentes conforme o profissional que o observa, o que reforça a necessidade de comunicação integrada entre a equipe.',
      },
      {
        id: 'sum-tl-17',
        text: 'A variabilidade não se limita ao perfil linguístico: abrange também o ritmo de desenvolvimento, a resposta à intervenção e a forma como o transtorno se manifesta em diferentes contextos e faixas etárias. Um mesmo indicador de risco pode ter peso muito diferente conforme a idade da criança — vocabulário reduzido aos 18 meses tem valor preditivo bem mais fraco do que dificuldades de compreensão ou ausência de gestos na mesma idade (Rescorla, 2009; Bishop et al., 2017).',
      },
      {
        id: 'sum-tl-18',
        text: 'Qualquer afirmação de prognóstico deve ser cautelosa e vinculada aos dados disponíveis sobre aquele perfil específico, não a uma expectativa genérica sobre "o TDL". Crianças identificadas como late talkers aos 24-31 meses tendem a apresentar desempenho mais fraco em habilidades de linguagem mesmo na adolescência, comparadas a pares sem esse histórico, ainda que a maioria atinja valores médios em testes formais já em idade escolar (Rescorla, 2009). Isso ilustra por que prognóstico determinista — otimista ou pessimista — não é sustentado pela evidência disponível.',
      },
      {
        id: 'sum-tl-19',
        text: 'O contexto linguístico e cultural da criança deve sempre ser considerado antes de qualquer conclusão diagnóstica. Crianças multilíngues, ou expostas de forma limitada à língua da escola, podem apresentar desempenho baixo em testes nessa língua sem que isso configure transtorno; a orientação do consenso é considerar transtorno de linguagem apenas quando há evidência de dificuldade em todas as línguas faladas pela criança, não apenas naquela testada (Bishop et al., 2017).',
      },
      {
        id: 'sum-tl-20',
        text: 'Dada a dificuldade de prever, num único momento, quais crianças pequenas terão dificuldades persistentes, o acompanhamento longitudinal — e não uma avaliação pontual — é o que permite distinguir com mais segurança atraso transitório de transtorno persistente, sobretudo antes dos 4 anos de idade (Rescorla, 2009; Bishop et al., 2017).',
      },
      {
        id: 'sum-tl-21',
        text: 'É importante distinguir três níveis de certeza clínica: um sinal (um achado isolado, como vocabulário reduzido em uma única avaliação), uma hipótese diagnóstica (uma suspeita fundamentada, que orienta investigação adicional) e um diagnóstico (uma conclusão que integra múltiplas fontes de dados ao longo do tempo). Tratar um sinal isolado como diagnóstico fechado é um dos erros mais comuns na prática com crianças pequenas.',
      },
      {
        id: 'sum-tl-22',
        text: 'Nenhum teste padronizado isolado é suficiente para estabelecer ou descartar um diagnóstico de TDL. O consenso CATALISE recomenda que múltiplas fontes de informação sejam combinadas na avaliação — entrevista com pais ou cuidadores, observação direta da criança e testes padronizados normatizados por idade —, e não a aplicação de um único instrumento (Bishop et al., 2016).',
      },
      {
        id: 'sum-tl-23',
        text: 'Este módulo tratou das características gerais do TDL — terminologia, heterogeneidade, impacto funcional e os cuidados necessários para não confundir atraso, variação e transtorno. Os módulos seguintes aprofundarão, respectivamente, os aspectos linguísticos específicos por subsistema, as bases neurobiológicas propostas na literatura e os princípios de avaliação e intervenção, sempre reforçando que nenhuma dessas dimensões deve ser tratada isoladamente na tomada de decisão clínica.',
      },
    ],
    mainIdea:
      'O Transtorno do Desenvolvimento da Linguagem (TDL) — termo que substitui, por consenso internacional (CATALISE), o antigo Distúrbio Específico de Linguagem — designa dificuldades de linguagem persistentes, com impacto funcional real, que ocorrem sem uma condição biomédica diferenciadora conhecida. É um quadro heterogêneo, sem perfil único, que pode coexistir com outras condições do neurodesenvolvimento, exige avaliação longitudinal e múltiplas fontes de informação, e não deve ser reduzido a atraso transitório, a um único teste isolado ou a critérios de exclusão rígidos como discrepância de QI.',
    essentialConcepts: [
      {
        id: 'conc-tdl',
        term: 'Transtorno do Desenvolvimento da Linguagem (TDL)',
        definition:
          'Termo recomendado pelo consenso CATALISE (Bishop et al., 2017) para dificuldades de linguagem persistentes, com impacto funcional significativo, que ocorrem sem uma condição biomédica diferenciadora conhecida; tradução adotada no Brasil para Developmental Language Disorder (DLD).',
        example: 'Uma criança de 6 anos com dificuldades persistentes de gramática e vocabulário, sem perda auditiva, deficiência intelectual ou TEA identificados.',
      },
      {
        id: 'conc-tel-historico',
        term: 'Transtorno/Distúrbio Específico de Linguagem (termo histórico)',
        definition:
          'Termo predominante entre 1981 e 2017, que exigia frequentemente discrepância entre habilidade verbal e não-verbal e ausência de qualquer condição associada; foi abandonado pelo consenso CATALISE por excluir crianças com necessidades reais de atendimento.',
        example: 'Um relatório de 2005 que nega atendimento a uma criança por seu QI não-verbal estar levemente abaixo da média, mesmo com graves dificuldades de linguagem.',
      },
      {
        id: 'conc-atraso',
        term: 'Atraso de Linguagem',
        definition:
          'Desenvolvimento mais lento da linguagem em relação aos pares, que pode ser transitório (a criança alcança desempenho típico) ou evoluir para um quadro persistente; não é sinônimo automático de transtorno.',
        example: 'Um "late talker" de 20 meses que, aos 4 anos, já apresenta vocabulário e gramática dentro da média.',
      },
      {
        id: 'conc-persistencia',
        term: 'Persistência',
        definition:
          'Manutenção das dificuldades de linguagem além da primeira infância, especialmente quando ainda evidentes aos 5 anos ou mais, ou quando envolvem compreensão receptiva e múltiplos domínios linguísticos.',
        example: 'Uma criança que, aos 6 anos, ainda apresenta dificuldades de compreensão de frases complexas iniciadas aos 3 anos.',
      },
      {
        id: 'conc-heterogeneidade',
        term: 'Heterogeneidade',
        definition:
          'Ausência de um perfil único de dificuldades no TDL: duas crianças com o mesmo diagnóstico podem apresentar comprometimentos muito diferentes entre fonologia, morfossintaxe, vocabulário e discurso.',
        example: 'Uma criança com TDL de perfil predominantemente gramatical e outra com perfil predominantemente lexical, ambas com o mesmo diagnóstico.',
      },
      {
        id: 'conc-impacto-funcional',
        term: 'Impacto Funcional',
        definition:
          'Prejuízo real e persistente na participação social e no progresso educacional causado pela dificuldade de linguagem; critério central do consenso CATALISE para caracterizar transtorno, além do desempenho abaixo da média em testes.',
        example: 'Uma criança evitando interações com colegas por não conseguir acompanhar conversas em grupo.',
      },
      {
        id: 'conc-condicao-diferenciadora',
        term: 'Condição Diferenciadora',
        definition:
          'Condição biomédica (lesão cerebral, perda auditiva sensorioneural, síndromes genéticas, TEA, deficiência intelectual, entre outras) que, quando presente, muda a nomenclatura de TDL para "Transtorno de Linguagem associado a X" (Bishop et al., 2017).',
        example: 'Uma criança com síndrome de Down e dificuldades de linguagem é descrita como tendo "transtorno de linguagem associado à síndrome de Down", não TDL.',
      },
      {
        id: 'conc-comorbidade',
        term: 'Comorbidade / Condição Coocorrente',
        definition:
          'Transtorno do neurodesenvolvimento (TDAH, transtorno do desenvolvimento da coordenação, dislexia, entre outros) que pode coexistir com o TDL sem que essa coocorrência afaste o diagnóstico.',
        example: 'Uma criança com TDL e TDAH concomitantes, ambos os diagnósticos mantidos.',
      },
      {
        id: 'conc-ling-receptiva',
        term: 'Linguagem Receptiva',
        definition:
          'Capacidade de compreender a linguagem oral; domínio frequentemente subestimado na avaliação por poder ser mascarado por estratégias compensatórias baseadas em contexto e rotina.',
        example: 'Uma criança que parece compreender ordens simples porque observa os colegas antes de agir, não porque processou a instrução verbal.',
      },
      {
        id: 'conc-ling-expressiva',
        term: 'Linguagem Expressiva',
        definition:
          'Capacidade de produzir linguagem oral, da articulação e fonologia à formulação gramatical e organização do discurso; dificuldades restritas à fonologia tendem a ter prognóstico mais favorável do que dificuldades também morfossintáticas e discursivas.',
        example: 'Uma criança que troca sons na fala, mas forma frases gramaticalmente completas e organiza bem uma narrativa.',
      },
      {
        id: 'conc-memoria-trabalho',
        term: 'Memória de Trabalho Verbal',
        definition:
          'Capacidade de manter e manipular temporariamente informação fonológica; frequentemente reduzida em crianças com TDL, avaliada por tarefas como repetição de pseudopalavras (Gathercole; Baddeley, 1990), sem ser um marcador definitivo isolado.',
        example: 'Dificuldade em repetir uma pseudopalavra de quatro sílabas nunca ouvida antes.',
      },
      {
        id: 'conc-processamento',
        term: 'Processamento Linguístico',
        definition:
          'Conjunto de operações cognitivas envolvidas na compreensão e produção da linguagem em tempo real, incluindo velocidade de processamento auditivo e automatização de regras gramaticais, sem mecanismo cognitivo único consensualmente aceito como explicação do TDL.',
        example: 'Uma criança que demora perceptivelmente mais para responder a perguntas orais complexas do que seus pares.',
      },
      {
        id: 'conc-fator-risco',
        term: 'Fator de Risco',
        definition:
          'Variável estatisticamente associada ao TDL (histórico familiar, sexo masculino, posição de irmão mais novo, menor escolaridade parental), mas que não prediz, isoladamente, o desenvolvimento do transtorno em uma criança específica.',
        example: 'Um pai com histórico de dificuldades de leitura, o que aumenta a probabilidade, mas não garante, dificuldades de linguagem no filho.',
      },
      {
        id: 'conc-prognostico',
        term: 'Prognóstico',
        definition:
          'Expectativa de evolução do quadro, que deve ser formulada com cautela e vinculada a dados específicos do perfil da criança, nunca de forma determinista (nem otimista nem pessimista).',
        example: 'Informar à família que a maioria dos late talkers evolui bem, mas que alguns mantêm dificuldades mais sutis até a adolescência.',
      },
      {
        id: 'conc-avaliacao-longitudinal',
        term: 'Avaliação Longitudinal',
        definition:
          'Acompanhamento da criança ao longo do tempo, e não apenas em um único momento, essencial para distinguir atraso transitório de transtorno persistente, sobretudo antes dos 4 anos.',
        example: 'Reavaliar uma criança identificada como late talker aos 24 meses novamente aos 36 e aos 48 meses antes de qualquer conclusão diagnóstica.',
      },
      {
        id: 'conc-participacao',
        term: 'Participação (escolar e social)',
        definition:
          'Envolvimento efetivo da criança em atividades educacionais e sociais cotidianas; sua restrição, por dificuldade de linguagem, é parte do critério de impacto funcional do consenso CATALISE.',
        example: 'Uma criança que para de levantar a mão em sala por não conseguir formular respostas com a rapidez esperada.',
      },
      {
        id: 'conc-variabilidade',
        term: 'Variabilidade Individual',
        definition:
          'Diferenças entre crianças (e na mesma criança ao longo do tempo) quanto a perfil linguístico, ritmo de desenvolvimento, resposta à intervenção e manifestação do transtorno em diferentes contextos e idades.',
        example: 'O mesmo sinal (vocabulário reduzido aos 18 meses) tendo valor preditivo bem mais fraco do que a ausência de gestos comunicativos na mesma idade.',
      },
      {
        id: 'conc-diagnostico-diferencial',
        term: 'Diagnóstico Diferencial',
        definition:
          'Processo de distinguir entre atraso transitório, variação típica, TDL e Transtorno de Linguagem associado a uma condição diferenciadora, integrando múltiplas fontes de informação ao longo do tempo.',
        example: 'Diferenciar uma criança bilíngue com baixa exposição ao português de uma criança com TDL genuíno, verificando o desempenho em ambas as línguas faladas.',
      },
    ],
    evidence: [
      {
        id: 'ev-tl-1',
        claim: 'O consenso Delphi CATALISE (Fase 1) estabeleceu que a identificação de transtorno de linguagem deve se basear em severidade, persistência e impacto funcional educacional/social, combinando múltiplas fontes de informação (entrevista, observação direta e testes normatizados), e não em um único instrumento.',
        source: 'Bishop; Snowling; Thompson; Greenhalgh; CATALISE consortium (2016). PLOS ONE, 11(7), e0158753. DOI: 10.1371/journal.pone.0158753. Acesso integral nesta auditoria: artigo lido na íntegra.',
        evidenceLevel: 'strong',
        clinicalImplication:
          'A avaliação de linguagem deve sempre combinar múltiplas fontes de dados; nenhum teste isolado deve determinar sozinho a identificação de um transtorno.',
      },
      {
        id: 'ev-tl-2',
        claim: 'O consenso Delphi CATALISE (Fase 2) recomendou o termo "Transtorno do Desenvolvimento da Linguagem" (TDL) para casos sem condição biomédica diferenciadora, e "Transtorno de Linguagem associado a X" quando há uma condição diferenciadora identificável; estabeleceu ainda que condições coocorrentes (TDAH, dislexia, transtorno do desenvolvimento da coordenação) não excluem o diagnóstico de TDL.',
        source: 'Bishop; Snowling; Thompson; Greenhalgh; CATALISE-2 consortium (2017). Journal of Child Psychology and Psychiatry, 58(10), 1068-1080. DOI: 10.1111/jcpp.12721. Acesso integral nesta auditoria: artigo lido na íntegra (Statements 1-10).',
        evidenceLevel: 'strong',
        clinicalImplication:
          'Diante de comorbidades, o fonoaudiólogo não deve descartar automaticamente o diagnóstico de TDL nem atribuir todas as dificuldades de linguagem exclusivamente à condição coocorrente.',
      },
      {
        id: 'ev-tl-3',
        claim: 'O painel de especialistas do CATALISE concluiu que a exigência de discrepância entre habilidade verbal e não-verbal (QI) não é sustentada pela evidência disponível como critério diagnóstico, e recomendou seu abandono.',
        source: 'Bishop et al. (2016, 2017); Bishop (2017), International Journal of Language & Communication Disorders, 52(6), 671-680. DOI: 10.1111/1460-6984.12335. Acesso integral nesta auditoria: os três artigos foram lidos na íntegra.',
        evidenceLevel: 'strong',
        clinicalImplication:
          'Um QI não-verbal na média não deve ser exigido, nem sua ausência deve ser usada para negar diagnóstico ou encaminhamento a serviços de fonoaudiologia.',
      },
      {
        id: 'ev-tl-4',
        claim: 'Um estudo epidemiológico de base populacional com crianças de jardim de infância (monolíngues, falantes de inglês americano) estimou a prevalência de transtorno de linguagem em cerca de 7,4% (8% em meninos, 6% em meninas); estimativas de prevalência em torno de 7% foram posteriormente corroboradas por outros estudos populacionais independentes.',
        source: 'Tomblin et al. (1997). Journal of Speech, Language, and Hearing Research, 40, 1245-1260. Acesso parcial nesta auditoria: metadados e achados quantitativos confirmados via busca (PubMed); texto integral não lido. Triangulação: a estimativa de ~7% é citada de forma convergente por Norbury et al. (2016) e por Lindsay e Strand (2016), conforme confirmado em leitura integral de Cáceres-Assenço et al. (2020), que cita as três fontes lado a lado.',
        evidenceLevel: 'strong',
        clinicalImplication:
          'O transtorno de linguagem é relativamente prevalente e deve ser considerado sistematicamente na triagem infantil, não apenas diante de queixa espontânea da família; a convergência entre estudos independentes reduz o risco de essa estimativa refletir uma particularidade isolada da amostra de Tomblin et al.',
      },
      {
        id: 'ev-tl-5',
        claim: 'Um acompanhamento longitudinal de crianças identificadas como late talkers aos 24-31 meses encontrou desempenho mais fraco em habilidades relacionadas à linguagem e à leitura aos 17 anos, comparado a pares sem esse histórico, ainda que a maioria dos late talkers atinja valores médios em testes formais já em idade escolar.',
        source: 'Rescorla (2009). Journal of Speech, Language, and Hearing Research. DOI: 10.1044/1092-4388(2008/07-0171). Acesso parcial nesta auditoria: achados gerais confirmados via busca; texto integral não lido.',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'O prognóstico de late talkers não deve ser tratado como uniformemente favorável nem uniformemente desfavorável; diferenças sutis podem persistir mesmo quando o desempenho geral parece normalizado.',
      },
      {
        id: 'ev-tl-6',
        claim: 'Crianças com TDL apresentam frequentemente desempenho reduzido em tarefas de repetição de pseudopalavras, o que foi proposto como possível relação causal entre memória de trabalho fonológica e dificuldades de aquisição de vocabulário e gramática.',
        source: 'Gathercole; Baddeley (1990). Journal of Memory and Language, 29, 336-360. Acesso parcial nesta auditoria: achados gerais confirmados via busca; texto integral não lido.',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'Tarefas de repetição de pseudopalavras podem ser um indicador útil na avaliação, mas não devem ser usadas como teste único e definitivo para diagnóstico ou exclusão de TDL.',
      },
      {
        id: 'ev-tl-7',
        claim: 'A literatura acadêmica de síntese descreve o TDL como uma condição heterogênea quanto ao perfil linguístico, ao processamento cognitivo envolvido e à resposta à intervenção, sem um mecanismo cognitivo único aceito como explicação central.',
        source: 'Leonard (2014). Children with Specific Language Impairment (2. ed.). Cambridge: MIT Press. Acesso parcial nesta auditoria: dados bibliográficos e escopo confirmados via busca; texto integral não lido.',
        evidenceLevel: 'expert_opinion',
        clinicalImplication:
          'Modelos explicativos únicos (por exemplo, baseados apenas em memória de trabalho) não devem ser adotados como suficientes para explicar todos os casos de TDL.',
      },
      {
        id: 'ev-tl-8',
        claim: 'A terminologia para transtornos de linguagem em português brasileiro evoluiu de Distúrbio Específico de Linguagem (DEL, termo consolidado no Brasil por dois grupos de pesquisa — PUC-SP e USP-SP — a partir do SLI cunhado por Leonard em 1981) para Transtorno do Desenvolvimento da Linguagem (TDL), acompanhando o consenso internacional CATALISE (2016-2017); a adoção do novo termo não é isenta de controvérsia, havendo pesquisadores (como Mabel Rice) que contestam sua amplitude.',
        source: 'Cáceres-Assenço et al. (2020). Audiology - Communication Research, 25, e2342. DOI: 10.1590/2317-6431-2020-2342. Acesso integral nesta auditoria: carta ao editor lida na íntegra (incluindo lista de referências completa), confirmando data de 1822 para as primeiras descrições, os critérios diagnósticos do DEL, os dois grupos de pesquisa brasileiros e o debate com o grupo liderado por Mabel Rice.',
        evidenceLevel: 'moderate',
        clinicalImplication:
          'Ao consultar literatura brasileira anterior a 2017, o termo DEL deve ser interpretado à luz da terminologia atual, sem presumir equivalência automática de critérios diagnósticos; a comunicação com famílias e equipes deve reconhecer que a terminologia ainda é objeto de debate acadêmico, não um consenso fechado e definitivo.',
      },
      {
        id: 'ev-tl-9',
        claim: 'Uma reflexão do próprio grupo CATALISE reconhece que o TDL é uma categoria de utilidade clínica, e não uma condição única e bem definida, com etiologia multifatorial e heterogênea em características e sobreposição com outros transtornos do neurodesenvolvimento.',
        source: 'Bishop (2017). International Journal of Language & Communication Disorders, 52(6), 671-680. DOI: 10.1111/1460-6984.12335. Acesso integral nesta auditoria: artigo lido na íntegra.',
        evidenceLevel: 'expert_opinion',
        clinicalImplication:
          'A comunicação com famílias e outros profissionais deve evitar apresentar o TDL como uma entidade fechada e uniforme; explicações devem ser adaptadas ao perfil específico da criança.',
      },
    ],
    limitations: [
      {
        id: 'lim-tl-1',
        description:
          'O TDL é reconhecido pelo próprio grupo que propôs o termo como uma categoria heterogênea e de utilidade clínica, não uma condição única e bem definida (Bishop, 2017); isso limita generalizações sobre "o" perfil ou "o" prognóstico do TDL.',
      },
      {
        id: 'lim-tl-2',
        description:
          'A ausência de exigência de discrepância entre habilidade verbal e não-verbal não elimina a relevância de considerar o perfil cognitivo global da criança no planejamento da avaliação e da intervenção.',
      },
      {
        id: 'lim-tl-3',
        description:
          'Não existe, antes dos 3 anos, um preditor único e confiável o suficiente para distinguir com segurança atraso transitório de transtorno persistente (Rescorla, 2009).',
      },
      {
        id: 'lim-tl-4',
        description:
          'A estimativa de prevalência de 7,4% (Tomblin et al., 1997) foi obtida em amostra monolíngue de língua inglesa americana; deve-se ter cautela ao extrapolar diretamente esse valor para a população brasileira ou para contextos multilíngues.',
      },
      {
        id: 'lim-tl-5',
        description:
          'A relação causal entre memória de trabalho fonológica e TDL, proposta por Gathercole e Baddeley (1990), permanece em debate na literatura; nem toda criança com TDL apresenta déficit de repetição de pseudopalavras.',
      },
      {
        id: 'lim-tl-6',
        description:
          'O estudo longitudinal de Rescorla (2009) sobre desfechos aos 17 anos envolveu amostra relativamente pequena (26 late talkers e 23 controles), o que limita a generalização direta e imediata dos achados.',
      },
      {
        id: 'lim-tl-7',
        description:
          'O próprio consenso CATALISE reconhece haver pouca pesquisa comparando diretamente abordagens de intervenção entre diferentes condições diferenciadoras, de modo que recomendações de via de intervenção específica por condição baseiam-se mais em julgamento clínico do que em evidência comparativa direta.',
      },
      {
        id: 'lim-tl-8',
        description:
          'Critérios de exclusão históricos do DEL ainda aparecem em instrumentos, relatórios e literatura anteriores a 2017 — incluindo a exigência de QI não-verbal acima de 85, que deixava crianças com desempenho cognitivo limítrofe (70-85) sem qualquer diagnóstico formal (nem DEL, nem deficiência intelectual). É necessário contextualizar esses materiais à luz da terminologia e dos critérios atuais, sem presumir equivalência automática.',
      },
      {
        id: 'lim-tl-9',
        description:
          'A terminologia em língua portuguesa ainda não é totalmente uniforme: termos como DEL e Alteração Específica do Desenvolvimento da Linguagem (AEDL) coexistem, na literatura brasileira, com o termo atual TDL (Cáceres-Assenço et al., 2020).',
      },
      {
        id: 'lim-tl-10',
        description:
          'O desempenho baixo em um teste de linguagem aplicado em apenas uma das línguas de uma criança multilíngue não deve ser interpretado como evidência de transtorno, conforme orientação explícita do consenso CATALISE (Bishop et al., 2017).',
      },
      {
        id: 'lim-tl-11',
        description:
          'Uma avaliação pontual, sem acompanhamento longitudinal, tem validade preditiva limitada para crianças com menos de 4 anos, dada a alta variabilidade de trajetórias nessa faixa etária.',
      },
      {
        id: 'lim-tl-12',
        description:
          'A presença de uma comorbidade (por exemplo, TDAH) não deve ser automaticamente interpretada como causa das dificuldades de linguagem, nem como prova de que não há TDL concomitante; as duas hipóteses exigem investigação independente.',
      },
    ],
    simpleExplanation:
      'Imagine que "aprender a falar" é como aprender a andar: a grande maioria das crianças caminha dentro de uma janela ampla de idades, sem que isso seja motivo de preocupação. Só que, de vez em quando, uma criança demora bem mais do que o esperado para começar a falar frases, para entender o que os adultos dizem, ou para ser compreendida por pessoas de fora da família. Às vezes isso é só um "atraso" — a criança vai destravar sozinha, como quem anda um pouco mais tarde, mas anda bem. Só que, em outros casos, essa dificuldade persiste: a criança continua, anos depois, com problemas reais para se comunicar, entender instruções na escola ou participar de brincadeiras com outras crianças. Quando isso acontece, sem que exista nenhuma outra condição médica que explique a dificuldade — como perda auditiva, autismo ou uma síndrome genética —, os especialistas chamam esse quadro de Transtorno do Desenvolvimento da Linguagem, ou TDL. Esse nome é recente: até 2017, era comum usar outro termo, "Distúrbio Específico de Linguagem", que exigia coisas complicadas — por exemplo, que a criança tivesse uma inteligência não-verbal "normal" e nenhuma outra dificuldade associada. Só que isso deixava muitas crianças que realmente precisavam de ajuda de fora do diagnóstico e, portanto, sem acesso a atendimento. Por isso, um grande grupo de especialistas do mundo todo se reuniu para repensar esses critérios, e chegou a um consenso: o que importa de verdade é se a dificuldade de linguagem atrapalha a vida real da criança — na escola, com os amigos, no dia a dia —, e não se ela também tem outra condição, como TDAH ou dificuldades de coordenação motora. É importante saber, também, que não existe "um tipo" de TDL: cada criança tem uma combinação diferente de dificuldades, e por isso ninguém deveria esperar que duas crianças com o mesmo diagnóstico sejam parecidas. E como é difícil, principalmente antes dos 3-4 anos, saber com certeza se uma dificuldade vai passar ou vai continuar, os profissionais preferem acompanhar a criança ao longo do tempo, em vez de decidir tudo com base em um único teste feito num único dia.',
    conceptMap: {
      centralNode: 'Transtornos do Desenvolvimento da Linguagem',
      nodes: [
        { id: 'n-tl-central', label: 'Transtornos do Desenvolvimento da Linguagem', type: 'central', description: 'Dificuldades de linguagem persistentes com impacto funcional, terminologia atualizada pelo consenso CATALISE.' },
        { id: 'n-tl-terminologia', label: 'Terminologia', type: 'primary', description: 'Evolução de DEL para TDL, por consenso internacional.' },
        { id: 'n-tl-tdl', label: 'TDL (sem condição diferenciadora)', type: 'secondary', description: 'Termo para transtorno de linguagem sem causa biomédica conhecida.' },
        { id: 'n-tl-condicao-dif', label: 'Condição diferenciadora', type: 'secondary', description: 'Quadros biomédicos que mudam a nomenclatura para "associado a X".' },
        { id: 'n-tl-caracteristicas', label: 'Características centrais', type: 'primary', description: 'Heterogeneidade, persistência e impacto funcional.' },
        { id: 'n-tl-heterogeneidade', label: 'Heterogeneidade', type: 'secondary', description: 'Perfis muito distintos entre crianças com o mesmo diagnóstico.' },
        { id: 'n-tl-persistencia', label: 'Persistência', type: 'secondary', description: 'Manutenção das dificuldades além da primeira infância.' },
        { id: 'n-tl-impacto', label: 'Impacto funcional', type: 'secondary', description: 'Prejuízo real na participação social e educacional.' },
        { id: 'n-tl-fatores-risco', label: 'Fatores de risco e condições associadas', type: 'primary', description: 'Histórico familiar, comorbidades — associação estatística, não determinismo.' },
        { id: 'n-tl-comorbidade', label: 'Comorbidade', type: 'secondary', description: 'Coexistência com TDAH, dislexia, DCD, sem exclusão do diagnóstico.' },
        { id: 'n-tl-avaliacao', label: 'Avaliação longitudinal', type: 'application', description: 'Acompanhamento ao longo do tempo, não teste único.' },
        { id: 'n-tl-participacao', label: 'Participação escolar e social', type: 'application', description: 'Critério funcional central para caracterizar o transtorno.' },
      ],
      edges: [
        { id: 'e-tl-1', from: 'n-tl-central', to: 'n-tl-terminologia', label: 'reorganizado por' },
        { id: 'e-tl-2', from: 'n-tl-terminologia', to: 'n-tl-tdl', label: 'inclui' },
        { id: 'e-tl-3', from: 'n-tl-terminologia', to: 'n-tl-condicao-dif', label: 'distingue de' },
        { id: 'e-tl-4', from: 'n-tl-central', to: 'n-tl-caracteristicas', label: 'apresenta' },
        { id: 'e-tl-5', from: 'n-tl-caracteristicas', to: 'n-tl-heterogeneidade', label: 'inclui' },
        { id: 'e-tl-6', from: 'n-tl-caracteristicas', to: 'n-tl-persistencia', label: 'inclui' },
        { id: 'e-tl-7', from: 'n-tl-caracteristicas', to: 'n-tl-impacto', label: 'define-se por' },
        { id: 'e-tl-8', from: 'n-tl-central', to: 'n-tl-fatores-risco', label: 'associado a' },
        { id: 'e-tl-9', from: 'n-tl-fatores-risco', to: 'n-tl-comorbidade', label: 'inclui' },
        { id: 'e-tl-10', from: 'n-tl-central', to: 'n-tl-avaliacao', label: 'requer' },
        { id: 'e-tl-11', from: 'n-tl-impacto', to: 'n-tl-participacao', label: 'medido por' },
      ],
    },
    glossary: [
      { id: 'gl-tl-1', term: 'Late Talker', definition: 'Criança de 18-30 meses com vocabulário expressivo significativamente reduzido em relação aos pares, sem que isso implique necessariamente transtorno persistente.', example: 'Um bebê de 22 meses que produz menos de 50 palavras.' },
      { id: 'gl-tl-2', term: 'Técnica Delphi', definition: 'Método estruturado e iterativo de construção de consenso entre especialistas, com rodadas anônimas de avaliação e revisão de afirmações.', example: 'Painelistas avaliando o mesmo conjunto de afirmações em duas rodadas sucessivas, ajustando posições conforme o feedback do grupo.' },
      { id: 'gl-tl-3', term: 'CATALISE', definition: '"Criteria and Terminology Applied to Language Impairments: Synthesising the Evidence" — projeto internacional em duas fases que produziu consenso sobre critérios (Fase 1) e terminologia (Fase 2) para transtornos de linguagem na infância.', example: 'A recomendação do termo TDL é um dos produtos da Fase 2 do CATALISE.' },
      { id: 'gl-tl-4', term: 'Discrepância Verbal-Não-Verbal', definition: 'Critério histórico que exigia diferença significativa entre habilidade verbal (linguagem) e não-verbal (QI de desempenho) para diagnóstico; abandonado por falta de sustentação empírica.', example: 'Negar diagnóstico a uma criança porque seu QI não-verbal também está levemente reduzido.' },
      { id: 'gl-tl-5', term: 'Repetição de Pseudopalavras', definition: 'Tarefa que avalia a memória de trabalho fonológica pedindo à criança que repita palavras inventadas, sem significado prévio.', example: 'Pedir que a criança repita "blofinaste" imediatamente após ouvi-la.' },
      { id: 'gl-tl-6', term: 'Discurso Narrativo', definition: 'Capacidade de organizar e relatar uma sequência de eventos de forma coerente e coesa.', example: 'Contar o que aconteceu em um passeio ao zoológico de forma ordenada e compreensível para o ouvinte.' },
      { id: 'gl-tl-7', term: 'Morfossintaxe', definition: 'Conjunto de regras que regem a formação de palavras (morfologia) e sua combinação em frases (sintaxe).', example: 'Uso correto da concordância verbal e da ordem das palavras em uma frase.' },
      { id: 'gl-tl-8', term: 'Perfil Linguístico Irregular ("Spiky")', definition: 'Padrão de desempenho em que a criança apresenta grande disparidade entre diferentes habilidades linguísticas, em vez de um comprometimento uniforme.', example: 'Vocabulário dentro da média, mas gramática muito abaixo do esperado para a idade.' },
      { id: 'gl-tl-9', term: 'Teste de Rastreio (Screening) de Linguagem', definition: 'Instrumento rápido usado para identificar crianças que precisam de avaliação mais aprofundada, sem função diagnóstica definitiva.', example: 'Um questionário breve aplicado a todas as crianças de uma turma para sinalizar casos a investigar.' },
      { id: 'gl-tl-10', term: 'Teste Normatizado por Idade', definition: 'Instrumento padronizado cujos resultados são comparados a dados de referência de uma população de mesma faixa etária.', example: 'Um teste de vocabulário com tabela de pontuação esperada para cada idade.' },
      { id: 'gl-tl-11', term: 'Afasia Epiléptica Adquirida na Infância', definition: 'Condição neurológica rara (síndrome de Landau-Kleffner) em que uma criança com desenvolvimento típico perde habilidades de linguagem associada a atividade epileptiforme; exemplo de condição diferenciadora.', example: 'Uma criança de 5 anos com desenvolvimento normal que perde subitamente a compreensão da fala, associada a alterações no eletroencefalograma.' },
      { id: 'gl-tl-12', term: 'Transtorno do Desenvolvimento da Coordenação (TDC)', definition: 'Transtorno do neurodesenvolvimento caracterizado por dificuldades motoras significativas, considerado uma condição coocorrente (não diferenciadora) em relação ao TDL.', example: 'Uma criança com TDL que também apresenta dificuldade acentuada para amarrar os próprios sapatos ou recortar com tesoura.' },
      { id: 'gl-tl-13', term: 'Dislexia do Desenvolvimento', definition: 'Transtorno específico de aprendizagem da leitura e escrita, frequentemente coocorrente com o TDL, sem relação de exclusão mútua.', example: 'Uma criança com TDL na pré-escola que, anos depois, também recebe diagnóstico de dislexia.' },
      { id: 'gl-tl-14', term: 'Multilinguismo', definition: 'Exposição e uso de mais de uma língua pela criança; por si só não constitui fator de risco para transtorno de linguagem.', example: 'Uma criança que fala uma língua em casa e português na escola, com desempenho adequado em ambas quando avaliadas separadamente.' },
      { id: 'gl-tl-15', term: 'Validade Preditiva', definition: 'Grau em que uma medida ou sinal, obtido em um momento, prediz corretamente um desfecho futuro.', example: 'A ausência de gestos comunicativos aos 18 meses tem validade preditiva maior do que o vocabulário reduzido isoladamente na mesma idade.' },
      { id: 'gl-tl-16', term: 'DSM-5 e CID-11', definition: 'Sistemas de classificação diagnóstica (Manual Diagnóstico e Estatístico de Transtornos Mentais e Classificação Internacional de Doenças) com os quais a terminologia do consenso CATALISE busca compatibilidade.', example: 'A nomenclatura "transtorno da linguagem" alinhada à categoria correspondente no DSM-5.' },
      { id: 'gl-tl-17', term: 'Encaminhamento Especializado', definition: 'Direcionamento da criança para avaliação por profissionais ou serviços específicos diante de sinais de alerta (por exemplo, suspeita de perda auditiva, TEA ou deficiência intelectual).', example: 'Encaminhar para avaliação audiológica uma criança com atraso de linguagem e histórico de otites de repetição.' },
      { id: 'gl-tl-18', term: 'Prognóstico Dimensional', definition: 'Abordagem que descreve o prognóstico em termos de graus e probabilidades, e não de categorias fechadas ("vai" ou "não vai" superar a dificuldade).', example: 'Explicar à família que a chance de resolução espontânea diminui conforme mais domínios de linguagem estão comprometidos, em vez de dar uma resposta binária.' },
    ],
  },

  apply: {
    questions: [
      {
        id: 'q-tl-1',
        stem: 'Segundo o consenso CATALISE, o que caracteriza centralmente um "Transtorno de Linguagem" (independentemente de haver ou não uma condição diferenciadora)?',
        alternatives: [
          { id: 'q-tl-1-a', text: 'Dificuldades de linguagem que tendem a persistir além da infância, com impacto significativo nas interações sociais cotidianas ou no progresso educacional.', isCorrect: true, feedback: 'Correto. Esse é o critério central proposto pelo consenso: persistência e impacto funcional, não apenas desempenho abaixo da média em um teste.' },
          { id: 'q-tl-1-b', text: 'A existência de uma discrepância mínima de 15 pontos entre QI verbal e não-verbal.', isCorrect: false, feedback: 'Incorreto. Esse critério de discrepância foi explicitamente rejeitado pelo consenso CATALISE por falta de sustentação empírica.' },
          { id: 'q-tl-1-c', text: 'A ausência total de qualquer outra condição do neurodesenvolvimento associada.', isCorrect: false, feedback: 'Incorreto. O consenso estabelece que condições coocorrentes não excluem o diagnóstico.' },
          { id: 'q-tl-1-d', text: 'Um único escore abaixo de dois desvios-padrão em qualquer teste padronizado de linguagem.', isCorrect: false, feedback: 'Incorreto. Um único teste isolado não deve determinar sozinho a identificação do transtorno.' },
        ],
        correctAlternativeId: 'q-tl-1-a',
        explanation: 'O consenso CATALISE define transtorno de linguagem pela persistência e pelo impacto funcional real na vida da criança, não por critérios isolados de discrepância cognitiva ou por um único teste.',
        hint: 'Pense no que realmente importa para a vida cotidiana da criança, além da pontuação em um teste.',
        relatedConceptId: 'conc-impacto-funcional',
        referenceId: 'ref-bishop2016',
      },
      {
        id: 'q-tl-2',
        stem: 'Por que o consenso CATALISE recomendou o abandono do critério de discrepância entre habilidade verbal e não-verbal (QI) para diagnóstico de transtorno de linguagem?',
        alternatives: [
          { id: 'q-tl-2-a', text: 'Porque a evidência disponível não sustenta esse critério, e sua exigência arriscava negar serviços justamente às crianças com necessidades mais graves e extensas.', isCorrect: true, feedback: 'Correto. O painel concluiu que a habilidade não-verbal não prediz resposta à intervenção e que a discrepância é um critério instável e pouco sustentado.' },
          { id: 'q-tl-2-b', text: 'Porque testes de QI não-verbal deixaram de existir na prática clínica atual.', isCorrect: false, feedback: 'Incorreto. Os testes continuam existindo; o que mudou foi a exigência de discrepância como critério diagnóstico.' },
          { id: 'q-tl-2-c', text: 'Porque a habilidade não-verbal nunca deve ser avaliada em crianças com suspeita de transtorno de linguagem.', isCorrect: false, feedback: 'Incorreto. A habilidade não-verbal pode ser relevante para o planejamento da intervenção, mas não como critério de exclusão diagnóstica.' },
          { id: 'q-tl-2-d', text: 'Porque o critério de discrepância era usado apenas fora do contexto da fonoaudiologia.', isCorrect: false, feedback: 'Incorreto. O critério foi amplamente usado na prática fonoaudiológica sob o antigo DEL.' },
        ],
        correctAlternativeId: 'q-tl-2-a',
        explanation: 'A exigência de discrepância verbal/não-verbal carecia de sustentação empírica e, na prática, excluía do atendimento crianças com dificuldades reais e extensas de linguagem.',
        hint: 'Pense em quem ficava de fora do diagnóstico quando esse critério era exigido.',
        relatedConceptId: 'conc-tel-historico',
        referenceId: 'ref-bishop2017-terminology',
      },
      {
        id: 'q-tl-3',
        stem: 'O que diferencia, segundo o consenso CATALISE, uma "condição diferenciadora" de uma "condição coocorrente" (comorbidade)?',
        alternatives: [
          { id: 'q-tl-3-a', text: 'A condição diferenciadora é um quadro biomédico (como perda auditiva, TEA ou síndrome genética) que muda a nomenclatura para "transtorno de linguagem associado a X"; a condição coocorrente (como TDAH ou dislexia) não muda a nomenclatura nem exclui o diagnóstico de TDL.', isCorrect: true, feedback: 'Correto. Essa distinção evita tanto a exclusão indevida quanto a confusão entre causas conhecidas e comorbidades sem relação causal clara com a linguagem.' },
          { id: 'q-tl-3-b', text: 'Não há diferença relevante entre os dois termos; ambos excluem automaticamente o diagnóstico de TDL.', isCorrect: false, feedback: 'Incorreto. Apenas a condição diferenciadora muda a nomenclatura; a condição coocorrente não exclui o diagnóstico de TDL.' },
          { id: 'q-tl-3-c', text: 'A condição coocorrente é sempre mais grave do que a condição diferenciadora.', isCorrect: false, feedback: 'Incorreto. A distinção não é sobre gravidade, mas sobre relação causal presumida com a origem do transtorno de linguagem.' },
          { id: 'q-tl-3-d', text: 'A condição diferenciadora se refere apenas a fatores familiares de risco, como histórico parental.', isCorrect: false, feedback: 'Incorreto. Fatores de risco são uma categoria separada, distinta tanto de condições diferenciadoras quanto de condições coocorrentes.' },
        ],
        correctAlternativeId: 'q-tl-3-a',
        explanation: 'Condições diferenciadoras têm origem biomédica conhecida e mudam a nomenclatura diagnóstica; condições coocorrentes compartilham o quadro com o TDL sem estabelecer uma relação causal clara e sem excluir o diagnóstico.',
        hint: 'Pense em qual das duas categorias muda o nome do diagnóstico, e qual apenas coexiste com ele.',
        relatedConceptId: 'conc-condicao-diferenciadora',
        referenceId: 'ref-bishop2017-terminology',
      },
      {
        id: 'q-tl-4',
        stem: 'Qual é a principal diferença entre "atraso de linguagem" e "transtorno persistente"?',
        alternatives: [
          { id: 'q-tl-4-a', text: 'O atraso pode ser transitório, com a criança alcançando desempenho típico com o tempo; o transtorno persistente se mantém além da primeira infância, com impacto funcional continuado.', isCorrect: true, feedback: 'Correto. Essa é a distinção central discutida neste módulo, com base nos dados de acompanhamento longitudinal de late talkers.' },
          { id: 'q-tl-4-b', text: 'O atraso afeta apenas a fala, e o transtorno persistente afeta apenas a escrita.', isCorrect: false, feedback: 'Incorreto. Ambos os termos se referem à linguagem oral neste contexto, não a uma distinção entre fala e escrita.' },
          { id: 'q-tl-4-c', text: 'Não existe diferença real entre os dois termos; são sinônimos na literatura atual.', isCorrect: false, feedback: 'Incorreto. A distinção é clinicamente relevante, sobretudo para orientar a necessidade de acompanhamento longitudinal.' },
          { id: 'q-tl-4-d', text: 'O atraso é sempre mais grave do que o transtorno persistente.', isCorrect: false, feedback: 'Incorreto. A diferença central não é de gravidade momentânea, mas de trajetória ao longo do tempo.' },
        ],
        correctAlternativeId: 'q-tl-4-a',
        explanation: 'Atraso pode ser transitório; transtorno persistente se mantém além da primeira infância, com impacto funcional real — por isso a importância do acompanhamento longitudinal antes de rotular um quadro como definitivo.',
        hint: 'Pense no fator tempo: o que muda entre os dois quadros conforme a criança cresce?',
        relatedConceptId: 'conc-persistencia',
        referenceId: 'ref-rescorla2009',
      },
      {
        id: 'q-tl-5',
        stem: 'Como se diferenciam "Transtorno do Desenvolvimento da Linguagem (TDL)" e "Transtorno de Linguagem associado a X"?',
        alternatives: [
          { id: 'q-tl-5-a', text: 'TDL é usado quando não há condição biomédica diferenciadora identificável; "associado a X" é usado quando há uma condição diferenciadora conhecida (por exemplo, perda auditiva ou síndrome genética).', isCorrect: true, feedback: 'Correto. Essa é exatamente a lógica proposta pelo consenso CATALISE para orientar tanto a pesquisa quanto a prática clínica.' },
          { id: 'q-tl-5-b', text: 'TDL é usado em crianças, e "associado a X" é usado exclusivamente em adultos.', isCorrect: false, feedback: 'Incorreto. A distinção não depende da idade, mas da presença ou ausência de uma condição diferenciadora.' },
          { id: 'q-tl-5-c', text: 'Os dois termos são intercambiáveis e podem ser usados sem distinção clínica.', isCorrect: false, feedback: 'Incorreto. A distinção tem implicações para pesquisa sobre etiologia, prognóstico e via de intervenção.' },
          { id: 'q-tl-5-d', text: '"Associado a X" é usado apenas quando a família recusa o diagnóstico de TDL.', isCorrect: false, feedback: 'Incorreto. A escolha do termo depende da presença de uma condição biomédica diferenciadora, não da preferência familiar.' },
        ],
        correctAlternativeId: 'q-tl-5-a',
        explanation: 'A presença de uma condição diferenciadora (biomédica, com origem conhecida) determina o uso de "Transtorno de Linguagem associado a X"; sua ausência mantém o termo TDL.',
        hint: 'Pense no que "diferencia" fisicamente os dois grupos de crianças.',
        relatedConceptId: 'conc-tdl',
        referenceId: 'ref-bishop2017-terminology',
      },
      {
        id: 'q-tl-6',
        stem: 'Qual é a diferença entre um "sinal", uma "hipótese diagnóstica" e um "diagnóstico" no contexto dos transtornos de linguagem?',
        alternatives: [
          { id: 'q-tl-6-a', text: 'Um sinal é um achado isolado; uma hipótese diagnóstica é uma suspeita fundamentada que orienta investigação adicional; um diagnóstico integra múltiplas fontes de dados ao longo do tempo.', isCorrect: true, feedback: 'Correto. Confundir esses três níveis é um dos erros mais comuns na prática com crianças pequenas.' },
          { id: 'q-tl-6-b', text: 'Os três termos são sinônimos e podem ser usados de forma intercambiável em qualquer contexto clínico.', isCorrect: false, feedback: 'Incorreto. Representam níveis diferentes de certeza clínica, com implicações práticas distintas.' },
          { id: 'q-tl-6-c', text: 'Um sinal só pode ser identificado por exame de neuroimagem.', isCorrect: false, feedback: 'Incorreto. Um sinal, neste contexto, é qualquer achado clínico isolado, como um resultado de teste ou uma observação pontual.' },
          { id: 'q-tl-6-d', text: 'Uma hipótese diagnóstica só pode ser formulada após o fechamento do diagnóstico.', isCorrect: false, feedback: 'Incorreto. A hipótese diagnóstica precede e orienta a investigação que pode levar (ou não) a um diagnóstico.' },
        ],
        correctAlternativeId: 'q-tl-6-a',
        explanation: 'Distinguir sinal, hipótese e diagnóstico evita a conclusão precipitada de um diagnóstico fechado a partir de um único achado isolado.',
        hint: 'Pense na ordem em que essas três coisas normalmente aparecem no raciocínio clínico.',
        relatedConceptId: 'conc-diagnostico-diferencial',
        referenceId: 'ref-bishop2016',
      },
      {
        id: 'q-tl-7',
        stem: 'Uma criança de 20 meses apresenta vocabulário expressivo reduzido (menos de 20 palavras), mas boa compreensão de ordens simples, uso frequente de gestos comunicativos e histórico familiar sem outras dificuldades relatadas. Qual é a interpretação mais coerente com a evidência disponível?',
        alternatives: [
          { id: 'q-tl-7-a', text: 'O quadro é compatível com o perfil de "late talker", que frequentemente evolui para desempenho típico; recomenda-se monitoramento e reavaliação ao longo do tempo, sem diagnóstico fechado nesse momento.', isCorrect: true, feedback: 'Correto. A boa compreensão e o uso de gestos são indicadores associados a melhor prognóstico nesse perfil.' },
          { id: 'q-tl-7-b', text: 'A criança já preenche critérios definitivos de TDL e deve ser rotulada como tal imediatamente.', isCorrect: false, feedback: 'Incorreto. Aos 20 meses, com boa compreensão e gestos presentes, não há sustentação para um diagnóstico fechado; a idade e o perfil favorecem observação longitudinal.' },
          { id: 'q-tl-7-c', text: 'A ausência de outras dificuldades familiares descarta totalmente qualquer risco futuro.', isCorrect: false, feedback: 'Incorreto. A ausência de histórico familiar reduz, mas não elimina, a possibilidade de dificuldades futuras; fatores de risco não são determinísticos em nenhuma direção.' },
          { id: 'q-tl-7-d', text: 'Deve-se aguardar até os 6 anos sem qualquer reavaliação, já que a fala provavelmente vai se resolver sozinha.', isCorrect: false, feedback: 'Incorreto. O acompanhamento periódico (não a ausência total de reavaliação) é o que permite identificar precocemente uma eventual persistência.' },
        ],
        correctAlternativeId: 'q-tl-7-a',
        explanation: 'Boa compreensão, uso de gestos comunicativos e ausência de histórico familiar de risco são indicadores associados a prognóstico mais favorável em late talkers, mas exigem monitoramento, não uma conclusão fechada imediata.',
        hint: 'Pense em quais indicadores, discutidos no módulo, favorecem um prognóstico mais tranquilo nessa idade.',
        relatedConceptId: 'conc-atraso',
        referenceId: 'ref-rescorla2009',
      },
      {
        id: 'q-tl-8',
        stem: 'Uma criança bilíngue (fala uma língua em casa e português na escola) apresenta desempenho abaixo da média em um teste de vocabulário aplicado apenas em português. Qual é a conduta mais coerente com o consenso CATALISE?',
        alternatives: [
          { id: 'q-tl-8-a', text: 'Investigar o desempenho da criança também na língua falada em casa antes de considerar qualquer hipótese de transtorno, já que baixo desempenho em apenas uma língua pode refletir exposição limitada, não transtorno.', isCorrect: true, feedback: 'Correto. O consenso recomenda considerar transtorno apenas quando há evidência de dificuldade em todas as línguas faladas pela criança.' },
          { id: 'q-tl-8-b', text: 'Concluir imediatamente que há transtorno de linguagem, já que o desempenho em português está abaixo da média.', isCorrect: false, feedback: 'Incorreto. O desempenho em uma única língua, isoladamente, não é suficiente para essa conclusão em crianças multilíngues.' },
          { id: 'q-tl-8-c', text: 'Orientar a família a abandonar a língua falada em casa para acelerar a aquisição do português.', isCorrect: false, feedback: 'Incorreto. Não há sustentação para essa recomendação; multilinguismo não é, por si, fator de risco para transtorno de linguagem.' },
          { id: 'q-tl-8-d', text: 'Ignorar completamente o resultado do teste, já que testes em português nunca são aplicáveis a crianças bilíngues.', isCorrect: false, feedback: 'Incorreto. O teste não deve ser ignorado, mas interpretado à luz do desempenho da criança em todas as línguas que fala.' },
        ],
        correctAlternativeId: 'q-tl-8-a',
        explanation: 'O consenso CATALISE orienta que se considere transtorno de linguagem apenas quando há evidência de dificuldade em todas as línguas faladas pela criança, não apenas na língua testada.',
        hint: 'Pense no motivo pelo qual testar apenas uma língua pode levar a uma conclusão equivocada.',
        relatedConceptId: 'conc-diagnostico-diferencial',
        referenceId: 'ref-bishop2017-terminology',
      },
      {
        id: 'q-tl-9',
        stem: 'Uma criança de 7 anos tem diagnóstico prévio de TDAH e também apresenta dificuldades marcantes de vocabulário e compreensão de instruções complexas. Qual conduta é mais coerente com os princípios discutidos neste módulo?',
        alternatives: [
          { id: 'q-tl-9-a', text: 'Investigar a linguagem de forma independente, já que o TDAH é uma condição coocorrente que não exclui, por si só, um diagnóstico concomitante de TDL.', isCorrect: true, feedback: 'Correto. O consenso CATALISE estabelece explicitamente que a presença de TDAH (ou outra condição coocorrente) não afasta a possibilidade de TDL.' },
          { id: 'q-tl-9-b', text: 'Atribuir automaticamente todas as dificuldades de linguagem ao TDAH, sem investigação adicional.', isCorrect: false, feedback: 'Incorreto. Atribuir automaticamente as dificuldades à comorbidade, sem investigação, pode deixar um TDL concomitante sem diagnóstico nem atendimento.' },
          { id: 'q-tl-9-c', text: 'Descartar a possibilidade de TDL apenas porque já existe um diagnóstico de TDAH.', isCorrect: false, feedback: 'Incorreto. Um diagnóstico não exclui automaticamente o outro; ambos podem coexistir.' },
          { id: 'q-tl-9-d', text: 'Aguardar a resolução completa do TDAH antes de considerar qualquer avaliação de linguagem.', isCorrect: false, feedback: 'Incorreto. Não há motivo para postergar a investigação da linguagem à espera da resolução de outra condição.' },
        ],
        correctAlternativeId: 'q-tl-9-a',
        explanation: 'Condições coocorrentes, como o TDAH, não excluem o diagnóstico de TDL; ambas as hipóteses devem ser investigadas de forma independente.',
        hint: 'Pense no que o consenso CATALISE estabelece sobre condições coocorrentes.',
        relatedConceptId: 'conc-comorbidade',
        referenceId: 'ref-bishop2017-terminology',
      },
      {
        id: 'q-tl-10',
        stem: 'A professora de uma criança de 6 anos relata "problemas de comportamento" e dificuldade de seguir instruções em sala, mas não menciona qualquer suspeita de dificuldade de linguagem. Qual é o raciocínio clínico inicial mais coerente com o conteúdo deste módulo?',
        alternatives: [
          { id: 'q-tl-10-a', text: 'Considerar a hipótese de uma dificuldade de linguagem subjacente não identificada, já que problemas comportamentais podem ser a forma como um transtorno de linguagem se manifesta.', isCorrect: true, feedback: 'Correto. O consenso CATALISE recomenda investigar a linguagem diante de queixas comportamentais ou psiquiátricas, já que o transtorno pode passar despercebido nesse contexto.' },
          { id: 'q-tl-10-b', text: 'Descartar totalmente qualquer avaliação de linguagem, já que a queixa é exclusivamente comportamental.', isCorrect: false, feedback: 'Incorreto. Queixas comportamentais podem mascarar dificuldades de linguagem não identificadas.' },
          { id: 'q-tl-10-c', text: 'Concluir automaticamente que a criança tem TDAH, sem qualquer investigação adicional.', isCorrect: false, feedback: 'Incorreto. Um diagnóstico não deve ser presumido sem avaliação; a hipótese de dificuldade de linguagem também deve ser considerada.' },
          { id: 'q-tl-10-d', text: 'Aguardar que a própria professora sugira explicitamente uma avaliação de linguagem antes de considerar essa hipótese.', isCorrect: false, feedback: 'Incorreto. O profissional de fonoaudiologia deve considerar essa hipótese ativamente, independentemente de a queixa inicial mencionar linguagem.' },
        ],
        correctAlternativeId: 'q-tl-10-a',
        explanation: 'Dificuldades de linguagem podem se manifestar como problemas de comportamento; por isso, o raciocínio clínico inicial deve incluir essa hipótese mesmo quando a queixa não menciona linguagem diretamente.',
        hint: 'Pense em como uma criança que não entende bem as instruções pode reagir em sala de aula.',
        relatedConceptId: 'conc-impacto-funcional',
        referenceId: 'ref-bishop2016',
      },
      {
        id: 'q-tl-11',
        stem: 'Um único teste padronizado de vocabulário aplicado a uma criança de 5 anos resultou em escore abaixo da média. Qual é a conduta inicial mais coerente com os princípios discutidos neste módulo?',
        alternatives: [
          { id: 'q-tl-11-a', text: 'Tratar esse resultado como um sinal a ser investigado, combinando-o com outras fontes de informação (entrevista com pais, observação direta, outros testes) antes de qualquer conclusão diagnóstica.', isCorrect: true, feedback: 'Correto. Um teste isolado deve ser tratado como um sinal, não como diagnóstico fechado, conforme recomenda o consenso CATALISE.' },
          { id: 'q-tl-11-b', text: 'Fechar o diagnóstico de TDL imediatamente com base nesse único resultado.', isCorrect: false, feedback: 'Incorreto. Nenhum teste isolado deve determinar sozinho um diagnóstico.' },
          { id: 'q-tl-11-c', text: 'Descartar totalmente o resultado, já que testes padronizados nunca têm valor clínico.', isCorrect: false, feedback: 'Incorreto. O teste tem valor como uma das fontes de informação, mas não deve ser a única.' },
          { id: 'q-tl-11-d', text: 'Repetir apenas o mesmo teste, no mesmo dia, para confirmar o resultado.', isCorrect: false, feedback: 'Incorreto. Repetir o mesmo instrumento no mesmo dia não substitui a combinação de múltiplas fontes de informação distintas.' },
        ],
        correctAlternativeId: 'q-tl-11-a',
        explanation: 'Um resultado isolado deve ser tratado como um sinal que orienta investigação adicional, integrando múltiplas fontes de informação, e não como diagnóstico fechado.',
        hint: 'Pense na diferença entre "sinal" e "diagnóstico" discutida neste módulo.',
        relatedConceptId: 'conc-diagnostico-diferencial',
        referenceId: 'ref-bishop2016',
      },
      {
        id: 'q-tl-12',
        stem: 'A família de uma criança de 5 anos, recém-identificada com TDL, pergunta qual é o prognóstico esperado. Qual resposta é mais coerente com os princípios discutidos neste módulo?',
        alternatives: [
          { id: 'q-tl-12-a', text: 'Explicar que o prognóstico varia conforme o perfil específico da criança (quais domínios estão comprometidos, gravidade, resposta à intervenção) e que acompanhamento longitudinal será necessário, evitando previsões definitivas em qualquer direção.', isCorrect: true, feedback: 'Correto. Essa resposta reflete a cautela recomendada quanto a prognóstico, evitando tanto otimismo quanto pessimismo determinista.' },
          { id: 'q-tl-12-b', text: 'Garantir à família que a criança vai superar completamente as dificuldades até a alfabetização.', isCorrect: false, feedback: 'Incorreto. Prometer resolução total contraria a cautela recomendada quanto a prognóstico determinista.' },
          { id: 'q-tl-12-c', text: 'Informar que, por ter TDL identificado aos 5 anos, a criança terá dificuldades graves e permanentes por toda a vida.', isCorrect: false, feedback: 'Incorreto. Prognóstico pessimista fechado também não é sustentado pela evidência disponível, dada a heterogeneidade do quadro.' },
          { id: 'q-tl-12-d', text: 'Recusar-se a comentar qualquer aspecto do prognóstico até que a criança complete 18 anos.', isCorrect: false, feedback: 'Incorreto. É possível e recomendável orientar a família com base nos dados disponíveis, sem prometer certezas absolutas.' },
        ],
        correctAlternativeId: 'q-tl-12-a',
        explanation: 'O prognóstico do TDL deve ser comunicado com cautela, vinculado ao perfil específico da criança e sujeito a reavaliação longitudinal, evitando previsões deterministas em qualquer direção.',
        hint: 'Pense no princípio de que o TDL é heterogêneo e não tem um prognóstico único.',
        relatedConceptId: 'conc-prognostico',
        referenceId: 'ref-rescorla2009',
      },
    ],
    associations: [
      {
        id: 'assoc-tl-1',
        instruction: 'Associe cada termo ou conceito à sua respectiva descrição.',
        pairs: [
          { id: 'p-tl-1', left: 'TDL', right: 'Transtorno de linguagem sem condição biomédica diferenciadora conhecida' },
          { id: 'p-tl-2', left: 'Transtorno de Linguagem associado a X', right: 'Transtorno de linguagem com condição biomédica diferenciadora identificada' },
          { id: 'p-tl-3', left: 'Condição coocorrente', right: 'Comorbidade que não exclui o diagnóstico de TDL (ex.: TDAH)' },
          { id: 'p-tl-4', left: 'Fator de risco', right: 'Variável associada estatisticamente, mas sem valor preditivo individual garantido' },
          { id: 'p-tl-5', left: 'Late Talker', right: 'Criança pequena com vocabulário expressivo reduzido, prognóstico variável' },
          { id: 'p-tl-6', left: 'CATALISE', right: 'Projeto internacional de consenso sobre critérios e terminologia' },
          { id: 'p-tl-7', left: 'Discrepância verbal-não-verbal', right: 'Critério diagnóstico histórico, hoje rejeitado por falta de evidência' },
        ],
      },
      {
        id: 'assoc-tl-2',
        instruction: 'Associe cada situação clínica ao nível de certeza diagnóstica ou ao domínio de linguagem correspondente.',
        pairs: [
          { id: 'p-tl-8', left: 'Um único escore baixo em teste de vocabulário', right: 'Sinal isolado, não diagnóstico' },
          { id: 'p-tl-9', left: 'Suspeita fundamentada após observação e relato dos pais', right: 'Hipótese diagnóstica' },
          { id: 'p-tl-10', left: 'Conclusão após múltiplas fontes de dados ao longo do tempo', right: 'Diagnóstico' },
          { id: 'p-tl-11', left: 'Dificuldade em compreender ordens de dois passos', right: 'Linguagem receptiva' },
          { id: 'p-tl-12', left: 'Dificuldade em formular frases gramaticalmente completas', right: 'Linguagem expressiva' },
          { id: 'p-tl-13', left: 'Dificuldade em repetir uma pseudopalavra longa', right: 'Memória de trabalho verbal' },
          { id: 'p-tl-14', left: 'Baixo desempenho em português, mas bom desempenho na língua falada em casa', right: 'Diferença de exposição, não transtorno' },
        ],
      },
    ],
    decisionExercises: [
      {
        id: 'dec-tl-1',
        situation:
          'Um menino de 2 anos e 6 meses apresenta vocabulário expressivo de aproximadamente 30 palavras, boa compreensão de ordens simples e uso frequente de gestos comunicativos. Os pais perguntam se ele "vai simplesmente crescer e resolver sozinho" essa dificuldade.',
        options: [
          { id: 'dec-tl-1-o1', text: 'Explicar que boa parte das crianças com esse perfil evolui bem, mas orientar reavaliação periódica (não uma única checagem final), já que não há, nessa idade, um preditor isolado totalmente confiável.', consequence: 'Permite acompanhar a trajetória real da criança sem alarmismo nem garantias indevidas, possibilitando intervenção precoce se a dificuldade persistir.', explanation: 'A ausência de preditor único confiável antes dos 3 anos torna o acompanhamento longitudinal a conduta mais coerente com a evidência disponível (Rescorla, 2009).', isRecommended: true },
          { id: 'dec-tl-1-o2', text: 'Garantir aos pais que, com certeza, ele vai "resolver sozinho" e que nenhuma reavaliação é necessária.', consequence: 'Risco de deixar passar despercebido um quadro que evolui para persistente, atrasando o início de intervenção quando ela seria útil.', explanation: 'Prometer resolução espontânea garantida contraria a evidência de que uma parcela dos late talkers mantém dificuldades.', isRecommended: false },
          { id: 'dec-tl-1-o3', text: 'Diagnosticar TDL imediatamente, com base apenas na idade e no vocabulário reduzido.', consequence: 'Rotula precocemente uma criança cujo perfil (boa compreensão, uso de gestos) é associado a prognóstico mais favorável, antes do tempo mínimo necessário de observação.', explanation: 'Um diagnóstico fechado nessa idade, com esses indicadores, não é sustentado pela evidência sobre trajetória de late talkers.', isRecommended: false },
          { id: 'dec-tl-1-o4', text: 'Orientar os pais a não se preocuparem e não buscarem qualquer acompanhamento fonoaudiológico até que a criança complete 6 anos.', consequence: 'Perde a janela de acompanhamento que permitiria identificar precocemente sinais de persistência antes da entrada na alfabetização.', explanation: 'Adiar todo acompanhamento contraria a recomendação de reavaliação periódica em crianças pequenas com sinais de risco.', isRecommended: false },
        ],
      },
      {
        id: 'dec-tl-2',
        situation:
          'Uma criança de 8 anos, já com diagnóstico de Transtorno do Espectro Autista (TEA), apresenta também dificuldades marcantes de vocabulário e de compreensão de frases complexas, discutidas em reunião de equipe multiprofissional.',
        options: [
          { id: 'dec-tl-2-o1', text: 'Investigar as dificuldades de linguagem de forma independente, reconhecendo o TEA como possível condição diferenciadora (o que levaria à nomenclatura "Transtorno de Linguagem associado ao TEA"), sem presumir automaticamente que a linguagem "já está explicada" pelo TEA.', consequence: 'Garante que as dificuldades de linguagem recebam atenção e intervenção específicas, com nomenclatura tecnicamente adequada, sem serem invisibilizadas pelo diagnóstico de TEA.', explanation: 'O TEA é listado como uma condição diferenciadora no consenso CATALISE, mas isso não significa que a linguagem deva deixar de ser avaliada e tratada especificamente.', isRecommended: true },
          { id: 'dec-tl-2-o2', text: 'Concluir que, por já ter diagnóstico de TEA, a criança não precisa de avaliação de linguagem específica, já que "isso já faz parte do autismo".', consequence: 'Risco de negligenciar aspectos linguísticos específicos que poderiam se beneficiar de intervenção direcionada, tratando a linguagem como um detalhe secundário do TEA.', explanation: 'Mesmo quando há uma condição diferenciadora, as dificuldades de linguagem continuam merecendo avaliação e intervenção específicas.', isRecommended: false },
          { id: 'dec-tl-2-o3', text: 'Retirar o diagnóstico de TEA para poder classificar a criança como tendo TDL "puro".', consequence: 'Conduta tecnicamente incoerente: o TEA é uma condição diferenciadora que deve ser documentada, não removida para simplificar a nomenclatura.', explanation: 'A presença de uma condição diferenciadora não deve ser descartada; ela deve ser incorporada à nomenclatura ("associado a X"), não eliminada.', isRecommended: false },
          { id: 'dec-tl-2-o4', text: 'Adiar qualquer avaliação de linguagem até que a equipe decida, em consenso, se o TEA "conta" ou não como explicação suficiente.', consequence: 'Atraso desnecessário no início de uma avaliação que poderia orientar intervenção específica para as dificuldades de linguagem.', explanation: 'A avaliação de linguagem não deve depender de uma decisão prévia sobre "contar" ou não o TEA como explicação; ambas as investigações podem correr em paralelo.', isRecommended: false },
        ],
      },
    ],
    fictionalCases: [
      {
        id: 'case-tl-1',
        title: 'Caso fictício: Vitor, 4 anos e 3 meses',
        description:
          'Vitor tem 4 anos e 3 meses e frequenta a pré-escola. Os pais o descrevem como uma criança carinhosa e brincalhona, mas relatam que "ele fala como um bebê" e que pessoas de fora da família frequentemente não entendem o que ele diz. Vitor é o segundo filho; seu pai relata dificuldades de leitura na própria infância, ainda não totalmente investigadas. Na pré-escola, a professora relata que Vitor tem dificuldade em seguir instruções dadas ao grupo (como "guardem os brinquedos e sentem em roda"), embora pareça compreender bem quando alguém repete a instrução individualmente, olhando diretamente para ele. Não há registro de avaliação auditiva formal, nem informações sobre eventuais outras línguas faladas em casa. Vitor ainda não passou por avaliação fonoaudiológica formal.',
        disclaimer:
          'Este é um caso fictício, construído exclusivamente para fins didáticos. Não representa nenhuma pessoa real e não deve ser utilizado como modelo de laudo, diagnóstico definitivo ou conduta clínica prescritiva. A avaliação e o diagnóstico diferencial reais exigem exame presencial completo, investigação complementar pertinente (incluindo avaliação auditiva) e julgamento clínico individualizado ao longo do tempo.',
        questions: [
          {
            id: 'case-tl-1-q1',
            stem: 'Diante das informações apresentadas, qual é a interpretação mais coerente com os princípios discutidos neste módulo?',
            alternatives: [
              { id: 'case-tl-1-q1-a', text: 'Há sinais que justificam investigação fonoaudiológica formal (incluindo avaliação auditiva), mas as informações disponíveis ainda são insuficientes para qualquer diagnóstico fechado.', isCorrect: true, feedback: 'Correto. Há sinais relevantes (fala pouco inteligível, dificuldade em instruções de grupo, histórico familiar de dificuldades de leitura), mas faltam dados essenciais — avaliação auditiva, avaliação formal de linguagem, informação sobre outras línguas faladas em casa — para qualquer conclusão.' },
              { id: 'case-tl-1-q1-b', text: 'Como Vitor compreende bem quando a instrução é repetida individualmente, pode-se descartar totalmente qualquer dificuldade de linguagem.', isCorrect: false, feedback: 'Incorreto. Compreender melhor em contexto individualizado (com apoio de contato visual e repetição) não descarta dificuldade; pode até refletir uma estratégia compensatória.' },
              { id: 'case-tl-1-q1-c', text: 'O histórico paterno de dificuldades de leitura já é suficiente, isoladamente, para fechar o diagnóstico de TDL em Vitor.', isCorrect: false, feedback: 'Incorreto. Histórico familiar é um fator de risco estatístico, não um critério diagnóstico suficiente isoladamente.' },
              { id: 'case-tl-1-q1-d', text: 'Como Vitor tem apenas 4 anos, deve-se aguardar até os 7 anos antes de qualquer avaliação, já que nada pode ser concluído tão cedo.', isCorrect: false, feedback: 'Incorreto. Aos 4 anos já é possível e recomendável iniciar avaliação; a prudência está em não fechar diagnóstico prematuramente, não em evitar toda avaliação.' },
            ],
            correctAlternativeId: 'case-tl-1-q1-a',
            explanation: 'Os dados apresentados justificam avaliação formal, mas não permitem, por si só, qualquer diagnóstico fechado, pois faltam informações essenciais (audição, avaliação padronizada, exposição linguística em casa).',
            hint: 'Liste o que já se sabe e o que ainda precisa ser investigado antes de qualquer conclusão.',
            relatedConceptId: 'conc-diagnostico-diferencial',
            referenceId: 'ref-bishop2016',
          },
          {
            id: 'case-tl-1-q2',
            stem: 'Qual investigação adicional é prioritária antes de qualquer conclusão diagnóstica sobre Vitor?',
            alternatives: [
              { id: 'case-tl-1-q2-a', text: 'Avaliação auditiva, para descartar perda auditiva sensorioneural como possível condição diferenciadora, além de avaliação formal e normatizada da linguagem receptiva e expressiva.', isCorrect: true, feedback: 'Correto. A perda auditiva é uma condição diferenciadora relevante que deve ser descartada antes de qualquer conclusão sobre transtorno de linguagem.' },
              { id: 'case-tl-1-q2-b', text: 'Um exame de neuroimagem de rotina, indicado para toda criança com queixa de fala pouco inteligível.', isCorrect: false, feedback: 'Incorreto. Neuroimagem de rotina não é indicada nesse cenário; a investigação prioritária é auditiva e linguística.' },
              { id: 'case-tl-1-q2-c', text: 'Nenhuma investigação adicional é necessária; a descrição da família já é suficiente para diagnóstico.', isCorrect: false, feedback: 'Incorreto. O relato familiar é uma fonte importante, mas insuficiente isoladamente, conforme discutido neste módulo.' },
              { id: 'case-tl-1-q2-d', text: 'Um teste de QI não-verbal isolado, para verificar discrepância com a linguagem antes de qualquer outra investigação.', isCorrect: false, feedback: 'Incorreto. A discrepância QI-linguagem não é mais um critério diagnóstico exigido; essa não é a prioridade investigativa.' },
            ],
            correctAlternativeId: 'case-tl-1-q2-a',
            explanation: 'Descartar uma condição diferenciadora auditiva e obter dados formais e normatizados sobre a linguagem receptiva e expressiva são passos prioritários antes de qualquer conclusão.',
            hint: 'Pense em qual condição diferenciadora é mais diretamente sugerida pela queixa de fala pouco compreendida por pessoas de fora da família.',
            relatedConceptId: 'conc-condicao-diferenciadora',
            referenceId: 'ref-bishop2017-terminology',
          },
          {
            id: 'case-tl-1-q3',
            stem: 'Qual informação, se obtida, mudaria significativamente a interpretação do caso de Vitor?',
            alternatives: [
              { id: 'case-tl-1-q3-a', text: 'A informação de que a família fala predominantemente outra língua em casa, o que exigiria avaliar o desempenho de Vitor em todas as línguas às quais é exposto antes de considerar qualquer transtorno.', isCorrect: true, feedback: 'Correto. Essa informação está ausente no caso e é essencial, já que o consenso recomenda considerar transtorno apenas diante de dificuldade em todas as línguas faladas pela criança.' },
              { id: 'case-tl-1-q3-b', text: 'A cor dos olhos de Vitor.', isCorrect: false, feedback: 'Incorreto. Essa informação não tem relevância clínica para o raciocínio diagnóstico em questão.' },
              { id: 'case-tl-1-q3-c', text: 'O time de futebol favorito do pai de Vitor.', isCorrect: false, feedback: 'Incorreto. Essa informação não tem relevância clínica para o caso.' },
              { id: 'case-tl-1-q3-d', text: 'O número exato de brinquedos que Vitor possui em casa.', isCorrect: false, feedback: 'Incorreto. Essa informação não tem relevância direta para a investigação diagnóstica descrita.' },
            ],
            correctAlternativeId: 'case-tl-1-q3-a',
            explanation: 'A informação sobre exposição a outras línguas está ausente no caso e é diretamente relevante, já que poderia mudar completamente a interpretação do quadro de Vitor.',
            hint: 'Releia a descrição do caso: que informação relevante, discutida no módulo, não foi fornecida?',
            relatedConceptId: 'conc-diagnostico-diferencial',
            referenceId: 'ref-bishop2017-terminology',
          },
        ],
      },
    ],
  },

  review: {
    flashcards: [
      { id: 'fc-tl-f1', front: 'Qual termo o consenso CATALISE recomendou em substituição a "Distúrbio Específico de Linguagem"?', back: 'Transtorno do Desenvolvimento da Linguagem (TDL), equivalente a Developmental Language Disorder (DLD).', tags: ['terminologia'] },
      { id: 'fc-tl-f2', front: 'Por que o critério de discrepância verbal/não-verbal (QI) foi abandonado?', back: 'Porque a evidência não o sustenta: a habilidade não-verbal não prediz resposta à intervenção, e a exigência excluía crianças com necessidades reais de atendimento.', tags: ['terminologia', 'criterios'] },
      { id: 'fc-tl-f3', front: 'O que é uma "condição diferenciadora"?', back: 'Uma condição biomédica (perda auditiva, TEA, deficiência intelectual, síndromes genéticas, entre outras) que, quando presente, muda a nomenclatura para "Transtorno de Linguagem associado a X".', tags: ['condicao-diferenciadora'] },
      { id: 'fc-tl-f4', front: 'O TDAH exclui o diagnóstico de TDL?', back: 'Não. TDAH é uma condição coocorrente, não uma condição diferenciadora, e não exclui o diagnóstico de TDL.', tags: ['comorbidade'] },
      { id: 'fc-tl-f5', front: 'Qual é o critério central do consenso CATALISE para caracterizar transtorno de linguagem?', back: 'Persistência e impacto funcional significativo na participação social e no progresso educacional, não apenas desempenho abaixo da média em um teste.', tags: ['impacto-funcional'] },
      { id: 'fc-tl-f6', front: 'O que caracteriza um "late talker"?', back: 'Criança de 18-30 meses com vocabulário expressivo significativamente reduzido, sem que isso implique necessariamente transtorno persistente.', tags: ['atraso'] },
      { id: 'fc-tl-f7', front: 'Existe um preditor único confiável antes dos 3 anos para saber se um atraso vai persistir?', back: 'Não. Não há, antes dos 3 anos, um preditor isolado suficientemente confiável (Rescorla, 2009).', tags: ['prognostico', 'atraso'] },
      { id: 'fc-tl-f8', front: 'Por que o TDL é descrito como uma condição heterogênea?', back: 'Porque crianças com o mesmo diagnóstico podem apresentar combinações muito diferentes de dificuldades (fonologia, morfossintaxe, vocabulário, discurso) e gravidades variadas.', tags: ['heterogeneidade'] },
      { id: 'fc-tl-f9', front: 'Qual é a relação entre memória de trabalho fonológica e TDL?', back: 'Crianças com TDL frequentemente têm desempenho reduzido em repetição de pseudopalavras, mas essa relação não é um marcador definitivo isolado, e seu estatuto causal é debatido (Gathercole; Baddeley, 1990).', tags: ['memoria-trabalho'] },
      { id: 'fc-tl-f10', front: 'Qual foi a prevalência de transtorno de linguagem estimada por Tomblin et al. (1997)?', back: 'Aproximadamente 7,4% em crianças de jardim de infância monolíngues de língua inglesa (8% em meninos, 6% em meninas).', tags: ['prevalencia', 'evidencia'] },
      { id: 'fc-tl-f11', front: 'A dificuldade de linguagem pode se manifestar como problema de comportamento?', back: 'Sim. Dificuldades de linguagem não identificadas podem se manifestar como frustração, isolamento ou dificuldades de conduta, justificando investigação da linguagem diante de queixas comportamentais.', tags: ['impacto-funcional'] },
      { id: 'fc-tl-f12', front: 'Por que a linguagem receptiva costuma ser subestimada na avaliação?', back: 'Porque a criança pode desenvolver estratégias compensatórias (uso de contexto, pistas visuais, rotina) que mascaram a real dificuldade de compreensão.', tags: ['linguagem-receptiva'] },
      { id: 'fc-tl-f13', front: 'Dificuldades restritas à fonologia expressiva têm o mesmo prognóstico que dificuldades morfossintáticas e discursivas?', back: 'Não. Dificuldades restritas à fonologia expressiva tendem a ter prognóstico mais favorável.', tags: ['linguagem-expressiva', 'prognostico'] },
      { id: 'fc-tl-f14', front: 'Cite três fatores de risco associados ao TDL.', back: 'Histórico familiar de dificuldades de linguagem/leitura, sexo masculino, e posição de irmão mais novo em família numerosa (entre outros, como menor escolaridade parental).', tags: ['fator-risco'] },
      { id: 'fc-tl-f15', front: 'Um fator de risco garante que a criança desenvolverá TDL?', back: 'Não. Fatores de risco são associados estatisticamente ao transtorno, mas não predizem, isoladamente, o desenvolvimento do quadro em uma criança específica.', tags: ['fator-risco'] },
      { id: 'fc-tl-f16', front: 'Como deve ser conduzida a avaliação de uma criança multilíngue?', back: 'Deve-se considerar transtorno de linguagem apenas quando há evidência de dificuldade em todas as línguas faladas pela criança, não apenas na língua testada.', tags: ['multilinguismo'] },
      { id: 'fc-tl-f17', front: 'Por que a avaliação longitudinal é recomendada, sobretudo antes dos 4 anos?', back: 'Porque uma avaliação pontual tem validade preditiva limitada nessa faixa etária; o acompanhamento ao longo do tempo permite distinguir com mais segurança atraso transitório de transtorno persistente.', tags: ['avaliacao-longitudinal'] },
      { id: 'fc-tl-f18', front: 'Qual é a diferença entre sinal, hipótese diagnóstica e diagnóstico?', back: 'Sinal é um achado isolado; hipótese diagnóstica é uma suspeita fundamentada que orienta investigação; diagnóstico integra múltiplas fontes de dados ao longo do tempo.', tags: ['diagnostico-diferencial'] },
      { id: 'fc-tl-f19', front: 'Um único teste padronizado é suficiente para diagnosticar ou descartar TDL?', back: 'Não. O consenso CATALISE recomenda combinar múltiplas fontes de informação: entrevista com pais/cuidadores, observação direta e testes normatizados.', tags: ['avaliacao'] },
      { id: 'fc-tl-f20', front: 'O que significa o qualificador "desenvolvimental" no termo TDL?', back: 'Que a condição surge ao longo do desenvolvimento, sem causa biomédica conhecida — não que a criança necessariamente vá "superar" o problema com o tempo.', tags: ['terminologia'] },
      { id: 'fc-tl-f21', front: 'Quais são exemplos de condições diferenciadoras listadas pelo consenso CATALISE?', back: 'Lesão cerebral, afasia epiléptica adquirida na infância, certas condições neurodegenerativas, paralisia cerebral, perda auditiva sensorioneural, síndromes genéticas (ex.: síndrome de Down), TEA e deficiência intelectual.', tags: ['condicao-diferenciadora'] },
      { id: 'fc-tl-f22', front: 'Late talkers identificados aos 24-31 meses apresentam diferenças aos 17 anos em relação a pares sem esse histórico?', back: 'Sim, em média apresentam desempenho mais fraco em habilidades de linguagem e leitura, ainda que a maioria atinja valores médios em testes formais já em idade escolar (Rescorla, 2009).', tags: ['prognostico', 'evidencia'] },
      { id: 'fc-tl-f23', front: 'A terminologia para transtornos de linguagem é uniforme na literatura brasileira?', back: 'Não totalmente. Termos como DEL e AEDL ainda coexistem, na literatura brasileira, com o termo atual TDL (Cáceres-Assenço et al., 2020).', tags: ['terminologia', 'brasil'] },
      { id: 'fc-tl-f24', front: 'Por que se deve evitar tratar o TDL como perfil homogêneo?', back: 'Porque isso gera expectativas equivocadas sobre o quadro de uma criança específica e leva a condutas de avaliação e intervenção pouco individualizadas.', tags: ['heterogeneidade'] },
      { id: 'fc-tl-f25', front: 'O que caracteriza a técnica Delphi usada no CATALISE?', back: 'Um processo iterativo e anônimo de avaliação de afirmações por um painel de especialistas, em rodadas sucessivas, até se atingir consenso.', tags: ['catalise', 'metodologia'] },
      { id: 'fc-tl-f26', front: 'Por que prognóstico determinista (otimista ou pessimista) deve ser evitado?', back: 'Porque o TDL é heterogêneo e a trajetória de cada criança depende de múltiplos fatores específicos; previsões fechadas em qualquer direção não são sustentadas pela evidência disponível.', tags: ['prognostico'] },
    ],
    finalSynthesis:
      'Os Transtornos do Desenvolvimento da Linguagem (TDL) — termo que substituiu, por consenso internacional (CATALISE), o antigo Distúrbio Específico de Linguagem — designam dificuldades de linguagem persistentes, com impacto funcional real na participação social e educacional, que ocorrem sem uma condição biomédica diferenciadora conhecida. O consenso rejeitou explicitamente a exigência histórica de discrepância entre habilidade verbal e não-verbal como critério diagnóstico, por falta de sustentação empírica, e estabeleceu que condições coocorrentes — como TDAH, dislexia e transtorno do desenvolvimento da coordenação — não excluem o diagnóstico de TDL, ao contrário de condições diferenciadoras (perda auditiva, TEA, síndromes genéticas, entre outras), que mudam a nomenclatura para "Transtorno de Linguagem associado a X". O TDL é uma condição heterogênea, sem perfil único, envolvendo com frequência dificuldades de memória de trabalho verbal e de processamento linguístico, associada a fatores de risco estatísticos (histórico familiar, sexo masculino, escolaridade parental) que não determinam, isoladamente, o desenvolvimento do quadro em uma criança específica. Distinguir atraso transitório de transtorno persistente exige avaliação longitudinal, já que não existe, antes dos 3-4 anos, um preditor isolado plenamente confiável; multilinguismo deve ser considerado antes de qualquer conclusão diagnóstica. Por fim, um único teste padronizado nunca deve ser tratado como diagnóstico fechado, e é essencial distinguir sinal, hipótese diagnóstica e diagnóstico — reforçando, mais uma vez, que decisões clínicas responsáveis nascem da integração de múltiplas fontes de informação ao longo do tempo, nunca de um critério isolado ou de um rótulo aplicado precocemente.',
  },

  references: [
    {
      id: 'ref-bishop2016',
      authors: 'BISHOP, Dorothy V. M.; SNOWLING, Margaret J.; THOMPSON, Paul A.; GREENHALGH, Trisha; CATALISE consortium.',
      title: 'CATALISE: A Multinational and Multidisciplinary Delphi Consensus Study. Identifying Language Impairments in Children',
      source: 'PLOS ONE, 11(7), e0158753, 2016. DOI: 10.1371/journal.pone.0158753. Acesso integral nesta auditoria: artigo lido na íntegra (open access).',
      year: 2016,
      doi: '10.1371/journal.pone.0158753',
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions', 'apply.fictionalCases'],
    },
    {
      id: 'ref-bishop2017-terminology',
      authors: 'BISHOP, Dorothy V. M.; SNOWLING, Margaret J.; THOMPSON, Paul A.; GREENHALGH, Trisha; CATALISE-2 consortium.',
      title: 'Phase 2 of CATALISE: A Multinational and Multidisciplinary Delphi Consensus Study of Problems with Language Development: Terminology',
      source: 'Journal of Child Psychology and Psychiatry, 58(10), 1068-1080, 2017. DOI: 10.1111/jcpp.12721. Acesso integral nesta auditoria: artigo lido na íntegra (open access, Statements 1-10).',
      year: 2017,
      doi: '10.1111/jcpp.12721',
      usedIn: ['learn.summary', 'learn.essentialConcepts', 'learn.evidence', 'apply.questions', 'apply.fictionalCases'],
    },
    {
      id: 'ref-bishop2017-discussion',
      authors: 'BISHOP, Dorothy V. M.',
      title: 'Why is it so hard to reach agreement on terminology? The case of developmental language disorder (DLD)',
      source: 'International Journal of Language & Communication Disorders, 52(6), 671-680, 2017. DOI: 10.1111/1460-6984.12335. Acesso integral nesta auditoria: artigo lido na íntegra (open access).',
      year: 2017,
      doi: '10.1111/1460-6984.12335',
      usedIn: ['learn.summary', 'learn.evidence'],
    },
    {
      id: 'ref-tomblin1997',
      authors: 'TOMBLIN, J. Bruce; RECORDS, Nancy L.; BUCKWALTER, Paula; ZHANG, Xuyang; SMITH, Elaine; O\'BRIEN, Marlea.',
      title: 'Prevalence of Specific Language Impairment in Kindergarten Children',
      source: 'Journal of Speech, Language, and Hearing Research, 40, 1245-1260, 1997. Acesso parcial nesta auditoria: metadados e achados quantitativos confirmados via busca (PubMed); texto integral não lido.',
      year: 1997,
      usedIn: ['learn.summary', 'learn.evidence'],
    },
    {
      id: 'ref-rescorla2009',
      authors: 'RESCORLA, Leslie.',
      title: 'Age 17 Language and Reading Outcomes in Late-Talking Toddlers: Support for a Dimensional Perspective on Language Delay',
      source: 'Journal of Speech, Language, and Hearing Research, 2009. DOI: 10.1044/1092-4388(2008/07-0171). Acesso parcial nesta auditoria: achados gerais confirmados via busca; texto integral não lido.',
      year: 2009,
      doi: '10.1044/1092-4388(2008/07-0171)',
      usedIn: ['learn.summary', 'learn.evidence', 'apply.questions', 'apply.decisionExercises'],
    },
    {
      id: 'ref-gathercolebaddeley1990',
      authors: 'GATHERCOLE, Susan E.; BADDELEY, Alan D.',
      title: 'Phonological Memory Deficits in Language Disordered Children: Is There a Causal Connection?',
      source: 'Journal of Memory and Language, 29, 336-360, 1990. Acesso parcial nesta auditoria: achados gerais confirmados via busca; texto integral não lido.',
      year: 1990,
      usedIn: ['learn.summary', 'learn.essentialConcepts', 'learn.evidence'],
    },
    {
      id: 'ref-leonard2014',
      authors: 'LEONARD, Laurence B.',
      title: 'Children with Specific Language Impairment',
      source: '2. ed. Cambridge, MA: MIT Press, 2014. Acesso parcial nesta auditoria: dados bibliográficos e escopo confirmados via busca; texto integral não lido.',
      year: 2014,
      usedIn: ['learn.summary', 'learn.evidence'],
    },
    {
      id: 'ref-caceresassenco2020',
      authors: 'CÁCERES-ASSENÇO, Ana Manhani; GIUSTI, Elisabete; GÂNDARA, Juliana Perina; PUGLISI, Marina Leite; TAKIUCHI, Noemi.',
      title: 'Por que Devemos Falar Sobre Transtorno do Desenvolvimento da Linguagem',
      source: 'Audiology - Communication Research, 25, e2342, 2020. DOI: 10.1590/2317-6431-2020-2342. Carta ao Editor, de livre acesso. Acesso integral nesta auditoria: artigo lido na íntegra, incluindo as 30 referências citadas.',
      year: 2020,
      doi: '10.1590/2317-6431-2020-2342',
      usedIn: ['learn.summary', 'learn.evidence', 'learn.limitations'],
    },
    {
      id: 'ref-leonard1981',
      authors: 'LEONARD, Laurence B.',
      title: 'Facilitating Linguistic Skills in Children with Specific Language Impairment',
      source: 'Applied Psycholinguistics, 2(2), 89-118, 1981. DOI: 10.1017/S0142716400000886. Acesso parcial nesta auditoria: existência, ano e o fato de cunhar o termo "specific language impairment" confirmados via leitura integral de Cáceres-Assenço et al. (2020), que cita este artigo diretamente; texto original de Leonard (1981) não lido.',
      year: 1981,
      doi: '10.1017/S0142716400000886',
      usedIn: ['learn.summary'],
    },
  ],
})
