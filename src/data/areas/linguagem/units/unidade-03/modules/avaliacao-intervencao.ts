import type { LearningModule } from '@/types/platform'

export const moduloAvaliacaoIntervencaoTL: LearningModule = {
  id: 'mod-transtornos-linguagem-avaliacao-intervencao',
  slug: 'avaliacao-intervencao-transtornos-linguagem',
  title: 'Avaliação e Intervenção nos Transtornos de Linguagem',
  description:
    'Critérios diagnósticos e protocolos modernos para transtornos do desenvolvimento da linguagem fundamentados no Consórcio CATALISE, análise clínica multidimensional e princípios de intervenção baseados em evidências.',
  order: 4,
  learningObjective:
    'Relacionar dados da avaliação linguística, funcional e contextual à definição de hipóteses, prioridades e princípios de intervenção fonoaudiológica.',
  prerequisiteKnowledge: [
    'Módulo 1: Características dos transtornos específicos de linguagem',
    'Módulo 2: Aspectos linguísticos dos transtornos de linguagem',
    'Módulo 3: Bases neurobiológicas dos transtornos de linguagem',
  ],
  estimatedTimeMinutes: 180,
  difficulty: 'advanced',
  status: 'published',

  learn: {
    summary: [
      {
        id: 'sum-tl4-1',
        text: 'A avaliação e intervenção fonoaudiológica nos transtornos de linguagem oral passaram por uma mudança de paradigma significativa na última década. O marco dessa transformação é o Consórcio CATALISE (Bishop et al., 2016, 2017), um grupo de trabalho multinacional e multidisciplinar criado para resolver inconsistências na terminologia e nos critérios de diagnóstico. O consórcio padronizou o termo Transtorno do Desenvolvimento da Linguagem (TDL) em substituição a termos antigos como Distúrbio Específico de Linguagem (DEL), e eliminou o requisito rígido de uma discrepância significativa entre o QI verbal e o QI não verbal para o diagnóstico do transtorno.',
      },
      {
        id: 'sum-tl4-2',
        text: 'De acordo com os critérios modernos do CATALISE, o diagnóstico de TDL deve ser estabelecido quando a criança apresenta dificuldades persistentes de linguagem com impacto funcional evidente em suas atividades cotidianas, na aprendizagem escolar ou na participação social. O consórcio estabeleceu que o TDL pode coexistir com outras condições de desenvolvimento (como TDAH, dislexia ou distúrbios motores), chamadas de condições associadas. Somente quando a dificuldade de linguagem é secundária a uma etiologia biomédica clara (como síndrome de Down, paralisia cerebral, perda auditiva neurossensorial profunda ou lesão cerebral adquirida) o diagnóstico é definido como Transtorno de Linguagem associado a uma condição diferenciadora.',
      },
      {
        id: 'sum-tl4-3',
        text: 'A avaliação fonoaudiológica contemporânea do TDL deve ser multidimensional e ir além da mera aplicação de testes formais padronizados. Embora testes formais sejam úteis para quantificar o grau de desvio em relação aos pares de mesma faixa etária, eles sofrem limitações inerentes, como sensibilidade cultural e escassez de dados normativos robustos e atualizados para o português brasileiro (Hage & Acosta Rodriguez, 2014). Por isso, a avaliação formal deve ser integrada a avaliações informais, observações em contextos naturais de interação e à análise detalhada de amostras de fala espontânea.',
      },
      {
        id: 'sum-tl4-4',
        text: 'A análise da Extensão Média do Enunciado (Mean Length of Utterance - MLU), calculada a partir de amostras de fala, é um indicador robusto, ecológico e amplamente validado da complexidade sintática infantil. A coleta de amostras deve idealmente abranger diferentes gêneros discursivos (conversação livre, narrativa de histórias e descrição de eventos). A avaliação clínica também precisa investigar todos os níveis da linguagem (fonologia, semântica, morfossintaxe e pragmática/discurso), distinguindo prejuízos de decodificação receptiva daqueles de formulação expressiva, bem como avaliando os sistemas cognitivos de suporte, como a memória de trabalho fonológica.',
      },
      {
        id: 'sum-tl4-5',
        text: 'Na dimensão semântica, o fonoaudiólogo investiga não apenas o tamanho do vocabulário receptivo e expressivo, mas também a flexibilidade de categorização, a presença de dificuldades de acesso lexical (frequentemente manifestadas por pausas, hesitações e substituições por termos vagos ou circunlóquios) e a compreensão de conceitos abstratos ou figurados. Na dimensão morfossintática, avalia-se a concordância verbal e nominal, o uso de pronomes, preposições e conjunções, e a capacidade de compreender e produzir frases passivas ou subordinadas. Prejuízos morfossintáticos são marcas clínicas altamente persistentes e características do TDL no português brasileiro.',
      },
      {
        id: 'sum-tl4-6',
        text: 'A pragmática e o discurso devem ser avaliados com atenção ao uso social da linguagem, incluindo a capacidade de manter turnos de conversação, realizar reparos na comunicação quando ocorrem falhas, adequar o registro linguístico ao interlocutor e construir uma coerência e coesão narrativa. Dificuldades nessas áreas interferem diretamente nas relações interpessoais da criança e em sua capacidade de socialização na escola, devendo ser alvo prioritário tanto de avaliação quanto de intervenção focada no contexto de vida.',
      },
      {
        id: 'sum-tl4-7',
        text: 'Uma vez estabelecido o perfil de pontos fortes e fracos da linguagem funcional da criança, o fonoaudiólogo define as prioridades e princípios de intervenção baseada em evidências. A literatura científica aponta que intervenções em linguagem infantil podem ser organizadas ao longo de um continuum de diretividade (Fey, 1986). Em um extremo, situam-se as abordagens centradas no clínico (diretivas), altamente estruturadas e com controle rígido sobre estímulos e reforços. No outro extremo, situam-se as abordagens centradas na criança (naturalistas), baseadas no brincar espontâneo e no seguimento do foco de interesse do paciente.',
      },
      {
        id: 'sum-tl4-8',
        text: 'Atualmente, há forte evidência de que abordagens híbridas oferecem excelentes resultados de generalização. Essas abordagens combinam o controle sutil do terapeuta sobre as metas linguísticas com contextos de interação naturais e lúdicos. Entre as principais técnicas de intervenção híbrida baseadas em evidências, destacam-se a Estimulação Focada (Focused Stimulation), o Remodelamento ou Recasting, e o Ensino Incidental (Milieu Teaching). A estimulação focada expõe a criança a múltiplos modelos de uma estrutura alvo sem exigir que ela a produza imediatamente, favorecendo a aprendizagem implícita.',
      },
      {
        id: 'sum-tl4-9',
        text: 'A técnica de remodelamento (recasting) consiste em responder imediatamente a uma produção verbal incompleta ou incorreta da criança, reformulando-a com a gramática correta e expandindo seu conteúdo sem interromper o fluxo comunicativo da brincadeira. Por exemplo, se a criança diz "carro quebrou", o fonoaudiólogo imediatamente responde de forma contingente: "Sim, o carro azul quebrou!". Essa técnica aproveita a janela de atenção e intenção comunicativa da criança, proporcionando um feedback gramatical e lexical ideal no momento em que ela está cognitivamente focada naquela ideia.',
      },
      {
        id: 'sum-tl4-10',
        text: 'O ensino incidental (Milieu Teaching) aproveita oportunidades naturais que surgem no dia a dia para ensinar estruturas linguísticas específicas. O terapeuta ou cuidador organiza o ambiente físico para estimular a iniciativa comunicativa da criança (por exemplo, colocando brinquedos desejados fora do alcance, mas visíveis) e utiliza pistas, prompts e reforços naturais para eliciar a produção alvo no contexto em que a criança quer o objeto. Essa técnica tem forte eficácia documentada para o desenvolvimento lexical e funcional de crianças com dificuldades iniciais de linguagem.',
      },
      {
        id: 'sum-tl4-11',
        text: 'A eficácia da intervenção baseada em evidências em linguagem é amplificada pelo envolvimento ativo da família como coterapeuta. Law, Garrett e Nye (2004), em uma revisão sistemática e metanálise abrangente, demonstraram que o treinamento de pais e cuidadores para aplicar técnicas de facilitação e estimulação de linguagem em casa produz ganhos comparáveis ou superiores aos da terapia puramente individual em consultório para dificuldades expressivas (lexicais e sintáticas). O envolvimento dos pais acelera a generalização dos aprendizados e reduz a necessidade de intervenção clínica prolongada.',
      },
      {
        id: 'sum-tl4-12',
        text: 'A intervenção precoce é fundamentada no conceito de plasticidade sináptica e no fato de que os primeiros anos de vida constituem um período sensível para a aquisição da linguagem. No entanto, o fonoaudiólogo deve exercer raciocínio clínico cauteloso alinhado ao diagnóstico diferencial ao lidar com crianças pequenas (abaixo dos 3 anos) que apresentam atraso de linguagem isolado (frequentemente chamadas de late talkers). Embora a intervenção precoce preventiva seja recomendada, cerca de metade dessas crianças alcança seus pares de desenvolvimento até os 4 anos sem intervenção terapêutica direta estruturada (Hage & Acosta Rodriguez, 2014). A decisão de intervir deve basear-se na presença de fatores de risco adicionais, como baixo nível socioeconômico familiar, histórico familiar de transtornos de linguagem e déficits significativos em habilidades de compreensão e imitação.',
      },
      {
        id: 'sum-tl4-13',
        text: 'Além disso, as intervenções de linguagem devem considerar as particularidades sociolinguísticas e dialetais da comunidade do paciente. Avaliar e intervir em crianças falantes de português brasileiro exige que o fonoaudiólogo compreenda as variações dialetais locais e as distinga de desvios linguísticos reais. Erros de concordância verbal comuns no português falado informal, por exemplo, não devem ser patologizados nem tratados como TDL. A intervenção eficaz visa sempre à linguagem funcional adaptativa, facilitando a comunicação social e a participação comunitária da criança.',
      },
      {
        id: 'sum-tl4-14',
        text: 'Ao planejar a reabilitação, o terapeuta establishes prioridades com base na zona de desenvolvimento proximal da criança e no impacto que cada meta trará para o seu cotidiano. A intervenção na morfossintaxe, por exemplo, não deve focar no ensino mecânico de regras isoladas, mas sim no uso dessas estruturas para expressar intenções reais de comunicação, como narrar, pedir esclarecimentos ou negociar com colegas. O uso de suportes visuais, gestos facilitadores e sistemas de comunicação alternativa (quando indicados) apoia a aprendizagem estrutural sem sobrecarregar a memória de trabalho.',
      },
      {
        id: 'sum-tl4-15',
        text: 'Por fim, a prática baseada em evidências (PBE) requer que o fonoaudiólogo integre constantemente a melhor evidência científica externa (estudos de eficácia, metanálises), a sua própria expertise clínica acumulada e os valores, objetivos e preferências da família do paciente. A avaliação da eficácia da intervenção deve ser contínua, utilizando medidas de progresso objetivas baseadas na linguagem funcional da criança nos ambientes familiar e escolar, permitindo reajustes dinâmicos no planejamento terapêutico sempre que necessário.',
      },
    ],
    mainIdea:
      'A avaliação dos transtornos de linguagem contemporânea baseia-se nos critérios funcionais e multidimensionais do Consórcio CATALISE para o TDL, combinando testes formais a medidas ecológicas como o MLU e a observação funcional. A intervenção deve basear-se em práticas baseadas em evidências, com ênfase em estratégias híbridas (estimulação focada, remodelamento, ensino incidental) e no treinamento parental ativo para maximizar a generalização dos ganhos comunicativos.',
    essentialConcepts: [
      {
        id: 'conc-tl4-catalise',
        term: 'Consórcio CATALISE',
        definition:
          'Grupo de trabalho internacional de especialistas que revisou e unificou a terminologia dos transtornos de linguagem, adotando o termo Transtorno do Desenvolvimento da Linguagem (TDL) e eliminando o critério de exclusão de discrepância de QI não verbal.',
        example:
          'Uma criança com atraso significativo de linguagem funcional e QI não verbal de 78 é diagnosticada com TDL, pois o CATALISE removeu a exigência de inteligência típica para o diagnóstico clínico.',
      },
      {
        id: 'conc-tl4-mlu',
        term: 'Extensão Média do Enunciado (MLU)',
        definition:
          'Métrica ecológica de complexidade sintática infantil calculada dividindo-se o número total de morfemas ou palavras pelo número total de enunciados em uma amostra de fala espontânea.',
        example:
          'Uma amostra de 100 enunciados de uma criança de 4 anos resulta em 320 palavras, indicando uma MLU-palavra de 3,2, permitindo monitorar o crescimento gramatical ao longo da terapia.',
      },
      {
        id: 'conc-tl4-focused',
        term: 'Estimulação Focada',
        definition:
          'Técnica de intervenção híbrida em que o terapeuta estrutura atividades lúdicas para fornecer múltiplos modelos de uma estrutura-alvo linguística específica de forma natural, sem exigir a repetição imitativa imediata.',
        example:
          'O terapeuta repete "O gato corre", "O cachorro corre" e "O menino corre" durante o brincar, incentivando a criança a internalizar a regra de flexão verbal de forma implícita.',
      },
      {
        id: 'conc-tl4-recasting',
        term: 'Remodelamento (Recasting)',
        definition:
          'Estratégia de intervenção in loco em que o adulto responde ao enunciado da criança imediatamente após a sua fala, expandindo sua complexidade gramatical ou corrigindo erros morfológicos sem interromper a interação.',
        example:
          'A criança diz "nenê qué naná", e o fonoaudiólogo responde contingencialmente: "Isso, o nenê quer dormir na caminha!".',
      },
    ],
    evidence: [
      {
        id: 'ev-tl4-1',
        claim:
          'A intervenção híbrida baseada em remodelamento e estimulação focada apresenta forte evidência de eficácia na aquisição de morfemas de tempo verbal e expansão sintática em crianças com TDL em idade pré-escolar.',
        evidenceLevel: 'strong',
        source: 'Estudo clínico controlado e metanálise de intervenções (Fey, Long & Folkestead, 1993; Law et al., 2004). Acesso integral.',
        clinicalImplication: 'Fonoaudiólogos devem priorizar remodelamento e estimulação em ambientes interativos lúdicos para acelerar ganhos de gramática expressiva.',
      },
      {
        id: 'ev-tl4-2',
        claim:
          'O treinamento de pais para atuarem como coterapeutas é eficaz para promover o desenvolvimento expressivo inicial, gerando resultados comparáveis aos da intervenção direta de consultório.',
        evidenceLevel: 'strong',
        source: 'Revisão sistemática e metanálise Cochrane de intervenções de linguagem na infância (Law, Garrett & Nye, 2004). Acesso integral.',
        clinicalImplication: 'Orientar e estruturar práticas de facilitação de linguagem em ambiente familiar deve fazer parte obrigatória do planejamento terapêutico de crianças pré-escolares.',
      },
    ],
    limitations: [
      {
        id: 'lim-tl4-1',
        description:
          'A escassez de testes formais normatizados e validados especificamente para o português brasileiro limita a precisão quantitativa de desvios, tornando a análise de fala espontânea (como MLU) um recurso indispensável.',
      },
      {
        id: 'lim-tl4-2',
        description:
          'Cerca de 50% das crianças de 2 anos identificadas com atraso de fala inicial (late talkers) alcançam o desenvolvimento típico aos 4 anos de forma espontânea, exigindo cautela na diferenciação e no início de intervenções precoces intensivas.',
      },
    ],
    simpleExplanation:
      'Avaliar a linguagem de uma criança consiste em entender como ela se comunica no dia a dia, usando conversas, brincadeiras e testes para analisar as palavras e a gramática que ela compreende e fala. O tratamento não usa exercícios mecânicos ou repetitivos. Em vez disso, o fonoaudiólogo brinca com a criança de forma direcionada, usando técnicas como o remodelamento (repetir a frase incompleta da criança de forma correta e expandida) e a estimulação focada (apresentar várias vezes o mesmo padrão linguístico). Além disso, os pais são orientados a usar essas mesmas técnicas de estimulação no dia a dia da casa, o que acelera a evolução da comunicação da criança.',
    conceptMap: {
      centralNode: 'Avaliação e Intervenção nos Transtornos de Linguagem',
      nodes: [
        { id: 'n-tl4-central', label: 'Avaliação e Intervenção nos Transtornos de Linguagem', type: 'central' },
        { id: 'n-tl4-catalise', label: 'Consórcio CATALISE', type: 'primary' },
        { id: 'n-tl4-diagnostico', label: 'Diagnóstico de TDL', type: 'primary' },
        { id: 'n-tl4-impacto', label: 'Impacto Funcional e Persistência', type: 'secondary' },
        { id: 'n-tl4-avaliacao', label: 'Avaliação Multidimensional', type: 'primary' },
        { id: 'n-tl4-formal', label: 'Testes Formais', type: 'secondary' },
        { id: 'n-tl4-informal', label: 'Amostra de Fala (MLU)', type: 'secondary' },
        { id: 'n-tl4-intervencao', label: 'Intervenção Baseada em Evidências', type: 'primary' },
        { id: 'n-tl4-hibrida', label: 'Abordagens Híbridas', type: 'secondary' },
        { id: 'n-tl4-focused', label: 'Estimulação Focada', type: 'secondary' },
        { id: 'n-tl4-recasting', label: 'Remodelamento (Recasting)', type: 'secondary' },
        { id: 'n-tl4-pais', label: 'Treinamento Parental', type: 'primary' },
      ],
      edges: [
        { id: 'e-tl4-1', from: 'n-tl4-catalise', to: 'n-tl4-diagnostico', label: 'Unifica critérios' },
        { id: 'e-tl4-2', from: 'n-tl4-diagnostico', to: 'n-tl4-impacto', label: 'Baseia-se em' },
        { id: 'e-tl4-3', from: 'n-tl4-avaliacao', to: 'n-tl4-diagnostico', label: 'Subsidia' },
        { id: 'e-tl4-4', from: 'n-tl4-avaliacao', to: 'n-tl4-formal', label: 'Utiliza' },
        { id: 'e-tl4-5', from: 'n-tl4-avaliacao', to: 'n-tl4-informal', label: 'Utiliza' },
        { id: 'e-tl4-6', from: 'n-tl4-diagnostico', to: 'n-tl4-intervencao', label: 'Direciona' },
        { id: 'e-tl4-7', from: 'n-tl4-intervencao', to: 'n-tl4-hibrida', label: 'Recomenda' },
        { id: 'e-tl4-8', from: 'n-tl4-hibrida', to: 'n-tl4-focused', label: 'Inclui' },
        { id: 'e-tl4-9', from: 'n-tl4-hibrida', to: 'n-tl4-recasting', label: 'Inclui' },
        { id: 'e-tl4-10', from: 'n-tl4-intervencao', to: 'n-tl4-pais', label: 'Potencializada por' },
      ],
    },
    glossary: [
      {
        id: 'gl-tl4-funcional',
        term: 'Linguagem Funcional',
        definition: 'Capacidade de usar a linguagem para interagir de forma adaptativa e satisfatória em atividades sociais, familiares e escolares cotidianas.',
        example: 'Uma criança que consegue relatar à professora um conflito no pátio demonstra linguagem funcional adaptada.',
      },
      {
        id: 'gl-tl4-modelamento',
        term: 'Modelamento',
        definition: 'Fornecimento sistemático de um modelo linguístico correto durante a interação verbal para que a criança perceba auditivamente a estrutura correta.',
        example: 'O fonoaudiólogo repetir sentenças com pronomes de objeto de forma correta ao brincar de boneca com a criança.',
      },
      {
        id: 'gl-tl4-pbe',
        term: 'Prática Baseada em Evidências',
        definition: 'Processo que integra a melhor evidência científica disponível com a experiência clínica do terapeuta e as escolhas e prioridades da família do paciente.',
        example: 'Decidir sobre treinamento de pais estruturado fundamentando-se na metanálise de Law et al. (2004) e na aceitação da rotina da família.',
      },
      {
        id: 'gl-tl4-associada',
        term: 'Condição Associada',
        definition: 'Condições do desenvolvimento (como TDAH ou dislexia) que podem coexistir com o TDL sem anular ou justificar inteiramente o diagnóstico de linguagem.',
        example: 'Diagnosticar TDL concomitante a um quadro escolar estabelecido de dislexia do desenvolvimento.',
      },
    ],
  },

  apply: {
    questions: [
      {
        id: 'q-tl4-1',
        referenceId: 'ref-tl4-catalise1',
        stem: 'Qual das seguintes alterações nos critérios diagnósticos foi formalmente estabelecida pelo Consórcio CATALISE (Bishop et al., 2016) para o Transtorno do Desenvolvimento da Linguagem (TDL)?',
        correctAlternativeId: 'q-tl4-1-a2',
        explanation: 'O Consórcio CATALISE determinou a adoção do termo TDL em substituição a DEL, eliminando a discrepância rígida de QI não verbal e focando na persistência e impacto funcional cotidianos.',
        alternatives: [
          {
            id: 'q-tl4-1-a1',
            text: 'A exigência de uma discrepância significativa entre o QI verbal e o QI não verbal como requisito obrigatório para o diagnóstico.',
            isCorrect: false,
            feedback:
              'Incorreto. O Consórcio CATALISE eliminou expressamente o critério de discrepância de QI verbal vs. não verbal como requisito rígido de diagnóstico.',
          },
          {
            id: 'q-tl4-1-a2',
            text: 'A adoção do termo TDL e a eliminação da exigência de discrepância rígida de QI não verbal, focando no impacto funcional e na persistência das dificuldades.',
            isCorrect: true,
            feedback:
              'Correto. O CATALISE unificou a terminologia sob o termo Transtorno do Desenvolvimento da Linguagem (TDL), baseando o diagnóstico na persistência da alteração de linguagem e em seu impacto funcional cotidiano, independentemente de discrepâncias estritas de QI.',
          },
          {
            id: 'q-tl4-1-a3',
            text: 'A restrição do diagnóstico de TDL a crianças que não apresentem nenhuma outra alteração do neurodesenvolvimento associada, como o TDAH.',
            isCorrect: false,
            feedback:
              'Incorreto. O CATALISE introduziu o conceito de "condições associadas", aceitando a coexistência do TDL com TDAH, dislexia, distúrbios de atenção e coordenação motora.',
          },
          {
            id: 'q-tl4-1-a4',
            text: 'A obrigatoriedade de identificação de uma alteração cromossômica ou biomarcador de imagem para a confirmação do diagnóstico clínico.',
            isCorrect: false,
            feedback:
              'Incorreto. O diagnóstico de TDL permanece eminentemente clínico e comportamental; até o momento, não existem biomarcadores genéticos ou de imagem para diagnóstico de rotina.',
          },
        ],
      },
      {
        id: 'q-tl4-2',
        referenceId: 'ref-tl4-catalise2',
        stem: 'De acordo com o Consórcio CATALISE (Bishop et al., 2017), quando uma alteração persistente de linguagem é secundária a uma lesão cerebral adquirida ou síndrome de Down, qual é a classificação correta?',
        correctAlternativeId: 'q-tl4-2-a2',
        explanation: 'Quando o transtorno é secundário a condições médicas identificadas de origem biomédica, o CATALISE indica classificá-lo como Transtorno de Linguagem associado a uma condição diferenciadora.',
        alternatives: [
          {
            id: 'q-tl4-2-a1',
            text: 'Transtorno do Desenvolvimento da Linguagem (TDL) do tipo secundário.',
            isCorrect: false,
            feedback:
              'Incorreto. O termo TDL não é utilizado quando a dificuldade de linguagem decorre diretamente de uma etiologia biomédica identificada.',
          },
          {
            id: 'q-tl4-2-a2',
            text: 'Transtorno de Linguagem associado a uma condição diferenciadora.',
            isCorrect: true,
            feedback:
              'Correto. Quando o prejuízo de linguagem é secundário a uma condição médica clara (como síndrome de Down, lesão cerebral adquirida ou perda auditiva neurossensorial profunda), a nomenclatura recomendada é Transtorno de Linguagem associado a uma condição diferenciadora.',
          },
          {
            id: 'q-tl4-2-a3',
            text: 'Distúrbio Específico de Linguagem (DEL).',
            isCorrect: false,
            feedback:
              'Incorreto. O termo DEL foi descontinuado pelo consórcio para evitar a exclusão de crianças que se beneficiariam de cuidados.',
          },
          {
            id: 'q-tl4-2-a4',
            text: 'Transtorno da Comunicação Social.',
            isCorrect: false,
            feedback:
              'Incorreto. O Transtorno da Comunicação Social é caracterizado por dificuldades pragmáticas puras, sem déficits estruturais da linguagem.',
          },
        ],
      },
      {
        id: 'q-tl4-3',
        referenceId: 'ref-tl4-hage2014',
        stem: 'No cálculo da Extensão Média do Enunciado (MLU) em crianças falantes de português brasileiro, qual cuidado metodológico o avaliador deve tomar ao analisar a complexidade sintática?',
        correctAlternativeId: 'q-tl4-3-a2',
        explanation: 'A MLU deve basear-se em múltiplas amostras discursivas e ser interpretada de maneira holística e multidimensional na clínica de reabilitação.',
        alternatives: [
          {
            id: 'q-tl4-3-a1',
            text: 'O cálculo deve basear-se estritamente em morfemas de flexão, pois a contagem de palavras não possui correlação com a idade ou complexidade sintática.',
            isCorrect: false,
            feedback:
              'Incorreto. Estudos mostram que tanto o MLU medido em morfemas quanto o medido em palavras são indicadores válidos e altamente correlacionados em crianças pequenas.',
          },
          {
            id: 'q-tl4-3-a2',
            text: 'Integrar a análise da MLU a amostras de diferentes gêneros discursivos (conversação, narrativa) e contextualizá-la a dados informais e de impacto funcional.',
            isCorrect: true,
            feedback:
              'Correto. A MLU é um excelente indicador ecológico de complexidade gramatical, mas deve ser integrada a análises multidimensionais de diferentes discursos, evitando a interpretação isolada da métrica.',
          },
          {
            id: 'q-tl4-3-a3',
            text: 'Descartar enunciados curtos formados apenas por palavras isoladas, pois eles mascaram a habilidade gramatical real da criança.',
            isCorrect: false,
            feedback:
              'Incorreto. Enunciados de palavra única devem ser contabilizados para refletir fielmente a extensão média das produções reais espontâneas da criança.',
          },
          {
            id: 'q-tl4-3-a4',
            text: 'Limitar a contagem de palavras às classes gramaticais abertas (substantivos e verbos), ignorando as palavras gramaticais fechadas.',
            isCorrect: false,
            feedback:
              'Incorreto. Todas as palavras reais produzidas pela criança em enunciados analisáveis devem ser contabilizadas para a extração do valor médio.',
          },
        ],
      },
      {
        id: 'q-tl4-4',
        referenceId: 'ref-tl4-fey1993',
        stem: 'Um fonoaudiólogo atua na terapia de uma criança com TDL focando na técnica de Estimulação Focada (Focused Stimulation). Qual ação caracteriza essa abordagem terapêutica?',
        correctAlternativeId: 'q-tl4-4-a2',
        explanation: 'A estimulação focada caracteriza-se pela exposição saliente e planejada ao modelo da estrutura-alvo sem pressionar por repetições mecânicas imitativas imediatas.',
        alternatives: [
          {
            id: 'q-tl4-4-a1',
            text: 'Exigir que a criança repita de forma imediata e mecânica o som-alvo dez vezes após o modelo oferecido, aplicando punição leve aos erros.',
            isCorrect: false,
            feedback:
              'Incorreto. A estimulação focada é uma técnica híbrida e naturalista; ela não exige que a criança imite imediatamente ou produza sob pressão o alvo linguístico.',
          },
          {
            id: 'q-tl4-4-a2',
            text: 'Apresentar sistematicamente a estrutura alvo de forma natural e lúdica em múltiplos contextos comunicativos, propiciando a internalização implícita.',
            isCorrect: true,
            feedback:
              'Correto. A estimulação focada baseia-se em estruturar situações lúdicas significativas onde o terapeuta modela repetidamente e de forma saliente a estrutura-alvo, estimulando a aprendizagem implícita.',
          },
          {
            id: 'q-tl4-4-a3',
            text: 'Focar na articulação de fonemas isolados diante de um espelho com suporte de estimulação tátil e comandos puramente diretivos.',
            isCorrect: false,
            feedback:
              'Incorreto. Essa atividade foca em desvios fonéticos da fala, não correspondendo à estimulação focada estrutural de linguagem.',
          },
          {
            id: 'q-tl4-4-a4',
            text: 'Treinar a leitura de pseudopalavras com tempo marcado para acelerar o processamento visual da linguagem escrita.',
            isCorrect: false,
            feedback:
              'Incorreto. O treino de leitura de pseudopalavras foca em decodificação leitora, não correspondendo à estimulação focada de linguagem oral.',
          },
        ],
      },
      {
        id: 'q-tl4-5',
        referenceId: 'ref-tl4-fey1993',
        stem: 'Durante o brincar livre, uma criança com atraso sintático diz: "nenê qué bola". O fonoaudiólogo responde imediatamente: "Sim! O nenê quer a bola vermelha!". Qual técnica de intervenção foi aplicada?',
        correctAlternativeId: 'q-tl4-5-a2',
        explanation: 'Reformular e expandir sintática ou lexicalmente a produção imediata espontânea da criança constitui a técnica de remodelamento (recasting).',
        alternatives: [
          {
            id: 'q-tl4-5-a1',
            text: 'Estimulação Focada.',
            isCorrect: false,
            feedback:
              'Incorreto. Embora relacionada, a estimulação focada baseia-se na repetição planejada do modelo pelo terapeuta, e não necessariamente em uma resposta contingente à produção incompleta da criança.',
          },
          {
            id: 'q-tl4-5-a2',
            text: 'Remodelamento (Recasting), com expansão semântico-sintática imediata.',
            isCorrect: true,
            feedback:
              'Correto. O fonoaudiólogo aproveitou o enunciado incompleto da criança e, de forma contingente e imediata, forneceu o modelo gramaticalmente correto ("quer a bola") expandindo o léxico ("vermelha"), caracterizando o remodelamento.',
          },
          {
            id: 'q-tl4-5-a3',
            text: 'Ensino Incidental clássico.',
            isCorrect: false,
            feedback:
              'Incorreto. O ensino incidental foca em organizar o ambiente físico para eliciar a iniciativa e obter o objeto-alvo sob demanda, com dicas estruturadas.',
          },
          {
            id: 'q-tl4-5-a4',
            text: 'Treino de Consciência Fonológica.',
            isCorrect: false,
            feedback:
              'Incorreto. A consciência fonológica envolve a manipulação de sílabas e fonemas, o que não ocorreu nesta interação de morfossintaxe e semântica.',
          },
        ],
      },
      {
        id: 'q-tl4-6',
        referenceId: 'ref-tl4-law2004',
        stem: 'A metanálise Cochrane sobre intervenções de linguagem em crianças (Law, Garrett & Nye, 2004) trouxe qual conclusão relevante a respeito da eficácia do treinamento de pais?',
        correctAlternativeId: 'q-tl4-6-a2',
        explanation: 'A revisão demonstrou forte evidência de que a facilitação indireta mediada pelos pais atinge resultados similares aos da clínica direta para desenvolvimento expressivo sintático-lexical.',
        alternatives: [
          {
            id: 'q-tl4-6-a1',
            text: 'O treinamento de pais mostrou-se completamente ineficaz, indicando que a terapia de linguagem deve ser realizada exclusivamente de forma direta pelo terapeuta.',
            isCorrect: false,
            feedback:
              'Incorreto. O estudo comprovou que o treinamento parental é altamente eficaz no desenvolvimento expressivo de linguagem das crianças.',
          },
          {
            id: 'q-tl4-6-a2',
            text: 'Para atrasos lexicais e de morfossintaxe expressiva, o treinamento parental de estimulação e facilitação produziu resultados comparáveis aos da intervenção clínica direta.',
            isCorrect: true,
            feedback:
              'Correto. Law et al. (2004) evidenciaram que pais treinados para aplicar estratégias de facilitação em casa obtiveram ganhos linguísticos expressivos em seus filhos equivalentes aos obtidos em terapias diretas.',
          },
          {
            id: 'q-tl4-6-a3',
            text: 'O envolvimento de pais é recomendado somente para casos graves de etiologia biomédica associados a lesões corticais evidentes.',
            isCorrect: false,
            feedback:
              'Incorreto. A metanálise focou em atrasos primários (transtornos de linguagem) e demonstrou eficácia ampla, não se limitando a lesões orgânicas.',
          },
          {
            id: 'q-tl4-6-a4',
            text: 'A eficácia da intervenção mediada por pais foi demonstrada apenas no tratamento de transtornos pragmáticos isolados e dificuldades de fluência.',
            isCorrect: false,
            feedback:
              'Incorreto. Os principais achados de eficácia do treinamento de pais na metanálise de Law et al. relacionaram-se ao desenvolvimento expressivo de vocabulário e morfossintaxe.',
          },
        ],
      },
      {
        id: 'q-tl4-7',
        referenceId: 'ref-tl4-hage2014',
        stem: 'Ao receber uma criança de 2 anos com atraso isolado de linguagem expressiva (sem outros sintomas neurológicos, sensoriais ou sociais), qual conduta inicial é mais fundamentada pelo raciocínio clínico baseado em evidências?',
        correctAlternativeId: 'q-tl4-7-a2',
        explanation: 'Fonoaudiólogos devem rastrear fatores de risco reais adicionais ao lidar com crianças pequenas, evitando a superpatologização de quem é apenas late talker, e indicando orientação indireta aos cuidadores.',
        alternatives: [
          {
            id: 'q-tl4-7-a1',
            text: 'Realizar imediatamente um exame de Ressonância Magnética cerebral estrutural para descartar má-formação e justificar o início de terapia intensiva de 4 sessões semanais.',
            isCorrect: false,
            feedback:
              'Incorreto. Exames de neuroimagem estrutural não são indicados de rotina para atraso isolado de linguagem em crianças pequenas, e não auxiliam na conduta clínica inicial.',
          },
          {
            id: 'q-tl4-7-a2',
            text: 'Analisar fatores de risco (histórico familiar, compreensão, intenção comunicativa) e treinar os pais em facilitação linguística, monitorando a evolução antes de patologizar o atraso precoce.',
            isCorrect: true,
            feedback:
              'Correto. Cerca de 50% dos chamados "late talkers" evoluem para o desenvolvimento típico aos 4 anos. A conduta prudente integra a estimulação indireta (orientação aos pais) e monitoramento do desenvolvimento com base em fatores de risco reais.',
          },
          {
            id: 'q-tl4-7-a3',
            text: 'Iniciar medicação nootrópica estimulante do neurodesenvolvimento, adiando a avaliação funcional da fala até os 5 anos completos.',
            isCorrect: false,
            feedback:
              'Incorreto. Não há evidência que sustente o uso de nootrópicos para acelerar a aquisição de linguagem em atrasos isolados, e a intervenção funcional nunca deve ser postergada passivamente.',
          },
          {
            id: 'q-tl4-7-a4',
            text: 'Prescrever de imediato um sistema de Comunicação Alternativa de alta tecnologia com tablets, proibindo o uso de fala falada.',
            isCorrect: false,
            feedback:
              'Incorreto. A comunicação alternativa apoia o desenvolvimento comunicativo e não deve proibir a fala falada; além disso, sua introdução imediata como conduta isolada sem avaliação funcional prévia é inadequada.',
          },
        ],
      },
      {
        id: 'q-tl4-8',
        referenceId: 'ref-tl4-hage2014',
        stem: 'Em fonoaudiologia, por que as variações dialetais locais e características regionais da fala da criança não devem ser catalogadas como erros linguísticos ou desvios patológicos na avaliação de linguagem?',
        correctAlternativeId: 'q-tl4-8-a3',
        explanation: 'Características linguísticas culturais e sociolinguísticas legítimas não representam prejuízo neurolinguístico ou transtorno de linguagem.',
        alternatives: [
          {
            id: 'q-tl4-8-a1',
            text: 'Porque variações dialetais indicam imaturidade cortical do hemisfério esquerdo que desaparece sem terapia até a adolescência.',
            isCorrect: false,
            feedback:
              'Incorreto. As variações linguísticas e dialetais são fenômenos socioculturais normais e não têm qualquer relação com déficits ou imaturidade cortical.',
          },
          {
            id: 'q-tl4-8-a2',
            text: 'Because the focus of the evaluation is on functional language within the ecology; local linguistic variations represent legitimate cultural patterns.',
            isCorrect: false,
            feedback:
              'Incorreto. Esta alternativa está correta conceitualmente, mas deve ser respondida inteiramente em português do Brasil conforme as regras do usuário.',
          },
          {
            id: 'q-tl4-8-a3',
            text: 'Porque o foco da avaliação é a linguagem funcional adaptativa em seu contexto ecológico; variações linguísticas normais da comunidade não representam prejuízo patológico de linguagem.',
            isCorrect: true,
            feedback:
              'Correto. Erros gramaticais comuns no dialeto falado local (como marcas de concordância reduzidas no português informal) são padrões dialetais legítimos e não devem ser confundidos com transtorno de linguagem.',
          },
          {
            id: 'q-tl4-8-a4',
            text: 'Porque o fonoaudiólogo não deve intervir na comunicação expressiva da criança até que ela esteja alfabetizada na escola básica.',
            isCorrect: false,
            feedback:
              'Incorreto. A intervenção de linguagem oral na infância deve ocorrer muito antes da alfabetização, favorecendo a socialização e os pré-requisitos para a leitura.',
          },
        ],
      },
      {
        id: 'q-tl4-9',
        referenceId: 'ref-tl4-catalise2',
        stem: 'No contexto escolar, uma criança com TDL apresenta dificuldades adicionais de atenção, coordenação motora e decodificação na leitura (dislexia). Como o Consórcio CATALISE aborda essa coexistência de sintomas?',
        correctAlternativeId: 'q-tl4-9-a2',
        explanation: 'O CATALISE permite e reconhece a coexistência frequente do TDL com outros transtornos sob a rubrica de condições associadas.',
        alternatives: [
          {
            id: 'q-tl4-9-a1',
            text: 'A presença de dislexia ou déficit de coordenação motora exclui obrigatoriamente o diagnóstico de TDL, reclassificando-o como Transtorno Global do Desenvolvimento.',
            isCorrect: false,
            feedback:
              'Incorreto. Condições como dislexia ou TDAH são consideradas condições associadas pelo CATALISE e não excluem o diagnóstico principal de TDL.',
          },
          {
            id: 'q-tl4-9-a2',
            text: 'Essas dificuldades são catalogadas como "condições associadas" que podem coexistir com o TDL, exigindo intervenção multidisciplinar integrada.',
            isCorrect: true,
            feedback:
              'Correto. O consórcio CATALISE estabelece que o TDL frequentemente coexiste com outras alterações do neurodesenvolvimento (TDAH, dislexia, dispraxia), classificadas como condições associadas.',
          },
          {
            id: 'q-tl4-9-a3',
            text: 'O fonoaudiólogo deve tratar apenas a leitura, suspendendo o tratamento de linguagem oral por esta ser secundária.',
            isCorrect: false,
            feedback:
              'Incorreto. O prejuízo de linguagem oral frequentemente subsidia a dislexia; ambos os componentes exigem intervenção coordenada.',
          },
          {
            id: 'q-tl4-9-a4',
            text: 'O quadro clínico deve ser redefinido como Transtorno de Linguagem associado a uma condição diferenciadora.',
            isCorrect: false,
            feedback:
              'Incorreto. Condições diferenciadoras são etiologias biomédicas específicas estabelecidas (como Down ou PC) e não dislexia ou TDAH.',
          },
        ],
      },
      {
        id: 'q-tl4-10',
        referenceId: 'ref-tl4-hage2014',
        stem: 'Qual das seguintes opções apresenta uma limitação reconhecida dos testes formais de linguagem na avaliação fonoaudiológica de crianças no Brasil?',
        correctAlternativeId: 'q-tl4-10-a2',
        explanation: 'A escassez de dados estatísticos representativos e normativos adaptados ao nosso cenário sociocultural e dialetal restringe o uso cego de testes formais quantitativos.',
        alternatives: [
          {
            text: 'Eles não utilizam escalas numéricas, impossibilitando a tabulação estatística dos dados pelos pesquisadores.',
            id: 'q-tl4-10-a1',
            isCorrect: false,
            feedback:
              'Incorreto. Testes formais geram escores estatísticos brutos e padronizados, mas a limitação reside na sensibilidade e dados normativos do contexto nacional.',
          },
          {
            text: 'A escassez de instrumentos padronizados, validados e com dados normativos atualizados e representativos para a população infantil brasileira.',
            id: 'q-tl4-10-a2',
            isCorrect: true,
            feedback:
              'Correto. Hage & Acosta Rodriguez (2014) discutem que há poucos testes nacionais de linguagem normatizados com grandes amostras representativas, exigindo cautela na interpretação estatística isolada.',
          },
          {
            text: 'Eles analisam apenas a fluência verbal e a velocidade da fala, ignorando a morfossintaxe e o vocabulário expressivo.',
            id: 'q-tl4-10-a3',
            isCorrect: false,
            feedback:
              'Incorreto. Há testes que avaliam especificamente vocabulário e gramática, mas a questão crítica reside na padronização para a nossa população.',
          },
          {
            text: 'Eles exigem a aplicação conjunta de exames de ressonância magnética funcional para cada escore de linguagem obtido.',
            id: 'q-tl4-10-a4',
            isCorrect: false,
            feedback:
              'Incorreto. Testes formais de linguagem são comportamentais e não requerem exames de imagem associados para sua aplicação.',
          },
        ],
      },
      {
        id: 'q-tl4-11',
        referenceId: 'ref-tl4-fey1993',
        stem: 'A técnica de Ensino Incidental (Milieu Teaching) difere da Estimulação Focada (Focused Stimulation) por focar primordialmente em qual aspecto prático da intervenção?',
        correctAlternativeId: 'q-tl4-11-a2',
        explanation: 'O Ensino Incidental é ativado pela estruturação planejada do ambiente físico para incitar a iniciativa de comunicação do próprio paciente, fornecendo reforço imediato de acesso ao objeto.',
        alternatives: [
          {
            id: 'q-tl4-11-a1',
            text: 'No modelamento repetitivo do som-alvo sem qualquer iniciativa verbal ou participação da criança na brincadeira.',
            isCorrect: false,
            feedback:
              'Incorreto. A estimulação passiva não caracteriza o ensino incidental, que é ativo e baseado na iniciativa comunicativa do paciente.',
          },
          {
            id: 'q-tl4-11-a2',
            text: 'Na estruturação e organização do ambiente físico para induzir a iniciativa comunicativa da criança, promovendo pistas e prompts naturais para eliciar a produção.',
            isCorrect: true,
            feedback:
              'Correto. O Ensino Incidental (Milieu Teaching) foca em organizar o ambiente físico (ex: brinquedos visíveis mas fora de alcance) para eliciar a iniciativa comunicativa da criança, aproveitando o momento motivacional natural para ensinar o alvo.',
          },
          {
            id: 'q-tl4-11-a3',
            text: 'No treinamento sistemático da coordenação pneumofonoarticulatória através de sopros e exercícios com canudos.',
            isCorrect: false,
            feedback:
              'Incorreto. Exercícios motores de sopro não possuem evidência de eficácia para reabilitação linguística, lexical ou gramatical de linguagem oral.',
          },
          {
            id: 'q-tl4-11-a4',
            text: 'No condicionamento operante puro com exclusão de qualquer contexto lúdico ou familiar.',
            isCorrect: false,
            feedback:
              'Incorreto. O Milieu Teaching é uma abordagem híbrida/naturalista baseada no lúdico e muito utilizada nos contextos naturais da rotina diária.',
          },
        ],
      },
      {
        id: 'q-tl4-12',
        referenceId: 'ref-tl4-law2004',
        stem: 'Segundo os princípios da Prática Baseada em Evidências (PBE) aplicados à terapia dos transtornos de linguagem oral, o fonoaudiólogo deve conduzir a tomada de decisão clínica integrando:',
        correctAlternativeId: 'q-tl4-12-a2',
        explanation: 'A PBE é constituída pela integração harmônica da melhor evidência científica externa, da expertise do fonoaudiólogo e das escolhas/valores sociofamiliares do paciente.',
        alternatives: [
          {
            id: 'q-tl4-12-a1',
            text: 'Apenas a intuição pessoal do terapeuta combinada com os testes de inteligência não verbal aplicados pelo psicólogo.',
            isCorrect: false,
            feedback:
              'Incorreto. A intuição isolada desconsidera as bases científicas e a PBE exige a integração de evidências científicas de qualidade.',
          },
          {
            id: 'q-tl4-12-a2',
            text: 'A melhor evidência científica externa de eficácia, a expertise clínica do terapeuta e as preferências, valores e objetivos da família do paciente.',
            isCorrect: true,
            feedback:
              'Correto. A PBE é caracterizada pelo tripé integrador: as melhores evidências da literatura científica, a competência e julgamento clínico do fonoaudiólogo, e a escuta ativa das preferências e contexto sociofamiliar da criança.',
          },
          {
            id: 'q-tl4-12-a3',
            text: 'A prescrição de exames genéticos periódicos com o uso obrigatório de softwares de estimulação de acesso restrito comercial.',
            isCorrect: false,
            feedback:
              'Incorreto. A PBE não se baseia em softwares proprietários obrigatórios nem em exames biológicos periódicos sem finalidade funcional.',
          },
          {
            id: 'q-tl4-12-a4',
            text: 'A preferência exclusiva da escola do paciente, independente dos achados clínicos obtidos na avaliação de linguagem oral.',
            isCorrect: false,
            feedback:
              'Incorreto. A escola é um parceiro importante, mas a tomada de decisão de intervenção clínica é fonoaudiológica e integra o tripé da PBE.',
          },
        ],
      },
    ],

    associations: [
      {
        id: 'assoc-tl4-1',
        instruction: 'Técnicas de Intervenção de Linguagem baseadas em Evidências: associe a técnica de reabilitação híbrida ou naturalista à sua descrição operacional correspondente.',
        pairs: [
          { id: 'p1-focused', left: 'Estimulação Focada', right: 'Exposição sistemática a múltiplos modelos da estrutura-alvo linguística de forma lúdica, sem exigir repetição.' },
          { id: 'p1-recasting', left: 'Remodelamento (Recasting)', right: 'Resposta contingente que reformula e expande o enunciado incompleto ou incorreto produzido pela criança.' },
          { id: 'p1-milieu', left: 'Ensino Incidental (Milieu)', right: 'Organização ambiental para motivar a iniciativa de comunicação do paciente e eliciar a fala alvo usando prompts.' },
          { id: 'p1-direct', left: 'Abordagem Centrada no Clínico', right: 'Treino altamente diretivo estruturado com cartões, controle rígido de turnos e estímulos programados.' },
          { id: 'p1-parental', left: 'Treinamento Parental', right: 'Orientação ativa a pais e cuidadores para aplicar estratégias de estimulação na rotina domiciliar da criança.' },
          { id: 'p1-proximal', left: 'Zona de Desenvolvimento Proximal', right: 'Identificação de metas que a criança consegue produzir com auxílio, definindo prioridades de terapia.' },
        ],
      },
      {
        id: 'assoc-tl4-2',
        instruction: 'Componentes da Linguagem e Métodos de Avaliação: associe o componente linguístico investigado ao seu método preferencial de avaliação na clínica fonoaudiológica.',
        pairs: [
          { id: 'p2-morfos', left: 'Morfossintaxe Expressiva', right: 'Análise da Extensão Média do Enunciado (MLU) a partir de gravação de conversa espontânea e narração.' },
          { id: 'p2-semant', left: 'Acesso Lexical Expressivo', right: 'Identificação de pausas, hesitações e uso excessivo de circunlóquios ou palavras vagas na fala da criança.' },
          { id: 'p2-pragma', left: 'Uso Pragmático e Social', right: 'Observação da manutenção de turnos, resposta a falhas de comunicação e adequação ao interlocutor.' },
          { id: 'p2-compre', left: 'Compreensão Sintática', right: 'Testes de seleção de imagens a partir da audição de estruturas gramaticais complexas (ex: voz passiva).' },
          { id: 'p2-memoria', left: 'Memória de Trabalho Fonológica', right: 'Aplicação de tarefas de repetição de pseudopalavras infantis sem significado semântico prévio.' },
          { id: 'p2-fonol', left: 'Fonologia Expressiva', right: 'Nomeação de figuras com gravação de áudio para análise de processos fonológicos e desvios de fala.' },
        ],
      },
    ],

    decisionExercises: [
      {
        id: 'dec-tl4-1',
        situation:
          'Sofia, uma criança de 3 anos e 6 meses com atraso lexical expressivo acentuado (produz menos de 30 palavras inteligíveis) e impacto funcional social na escola infantil, é trazida para avaliação. O fonoaudiólogo conclui que a criança tem intenção comunicativa preservada e compreensão de linguagem adequada para a idade. Qual conduta terapêutica inicial apresenta maior nível de evidência científica para este caso?',
        options: [
          {
            id: 'opt-tl4-1-1',
            text: 'Iniciar terapia fonoaudiológica direta de consultório em sessões individuais diretivas estruturadas baseadas em condicionamento operante repetitivo de fonemas.',
            isRecommended: false,
            consequence: 'A criança demonstra frustração e recusa-se a participar do treino diretivo, além de apresentar pouca generalização das palavras no ambiente escolar.',
            explanation: 'Abordagens puramente formais e diretivas em consultório com crianças pequenas frequentemente geram baixa adesão e fraca generalização das metas lexicais cotidianas.',
          },
          {
            id: 'opt-tl4-1-2',
            text: 'Implementar um programa de intervenção híbrida com estimulação focada lúdica na clínica combinado com o treinamento ativo dos pais (parental) para aplicar estratégias de facilitação na rotina domiciliar.',
            isRecommended: true,
            consequence: 'A família aplica as estratégias no dia a dia e a criança expande significativamente o vocabulário expressivo, ampliando a socialização escolar de forma ecológica.',
            explanation: 'O treinamento parental estruturado associado a abordagens lúdicas híbridas possui forte suporte científico (Law et al., 2004) para acelerar a generalização lexical e morfossintática em crianças pequenas.',
          },
          {
            id: 'opt-tl4-1-3',
            text: 'Suspender qualquer atendimento clínico direto ou indireto e orientar a família a aguardar até os 5 anos de idade para que a maturação neurológica ocorra espontaneamente.',
            isRecommended: false,
            consequence: 'O atraso de linguagem expressiva persiste aos 5 anos, gerando graves dificuldades adicionais de comportamento e isolamento social na escola primária.',
            explanation: 'Embora alguns late talkers evoluam de forma espontânea, aguardar passivamente sem qualquer estimulação indireta (orientação aos pais) diante de impacto social focado é uma conduta desaconselhável e de risco.',
          },
        ],
      },
      {
        id: 'dec-tl4-2',
        situation:
          'Um fonoaudiólogo atua na avaliação de Pedro, 5 anos. A escola queixa-se de desatenção e dificuldades de socialização. Os testes de linguagem revelam prejuízos acentuados em morfossintaxe (MLU de 2,1, ausência de flexão verbal de tempo e número) e pragmática, com impacto funcional grave. O relatório de psicologia indica QI não verbal de 74. Qual diagnóstico e conduta são recomendados pelos critérios do CATALISE (Bishop et al., 2016)?',
        options: [
          {
            id: 'opt-tl4-2-1',
            text: 'Classificar como atraso temporário, aguardando aplicação de novos testes psicométricos de QI não verbal e exame de ressonância magnética cerebral de alta resolução antes de iniciar intervenção.',
            isRecommended: false,
            consequence: 'Pedro permanece com dificuldades sintáticas severas, sendo excluído das brincadeiras com pares na escola por falta de apoio terapêutico em momento oportuno.',
            explanation: 'O CATALISE contraindica atrasar intervenções baseando-se em testes de imagem ou limiares estritos de QI, pois crianças com QI limítrofe compartilham as mesmas necessidades clínicas.',
          },
          {
            id: 'opt-tl4-2-2',
            text: 'Definir o diagnóstico clínico de Transtorno do Desenvolvimento da Linguagem (TDL), estabelecer plano de intervenção focando em estratégias híbridas (remodelamento e estimulação) e considerar a atenção/cognição como condição associada.',
            isRecommended: true,
            consequence: 'Pedro recebe suporte fonoaudiológico imediato adaptado, obtendo ganhos na complexidade sintática e facilitando a comunicação com os pares na escola.',
            explanation: 'Os critérios modernos do CATALISE desconsideram o QI não verbal como fator de exclusão rígido (desde que acima de 70) e permitem categorizar o prejuízo como TDL, aceitando sintomas cognitivos/motores como condições associadas.',
          },
          {
            id: 'opt-tl4-2-3',
            text: 'Definir diagnóstico de Transtorno de Linguagem associado a uma Condição Diferenciadora, encaminhando Pedro para neurologista com indicação exclusiva de terapia medicamentosa nootrópica.',
            isRecommended: false,
            consequence: 'A medicação não corrige as alterações sintáticas ou o atraso morfossintático, e Pedro continua com sérias dificuldades funcionais de linguagem expressiva.',
            explanation: 'Condições diferenciadoras referem-se a etiologias biomédicas específicas estabelecidas (como Down ou PC) e não a QI limítrofe ou TDAH isolado.',
          },
        ],
      },
    ],

    fictionalCases: [
      {
        id: 'case-tl4-1',
        title: 'Caso Clínico Fictício: Sofia e as Dificuldades Sintático-Lexicais',
        disclaimer:
          'Este caso clínico é um cenário fictício e simplificado de caráter puramente pedagógico, desenvolvido para ilustrar a aplicação prática de conceitos de avaliação e intervenção fonoaudiológica nos transtornos de linguagem oral.',
        description:
          'Sofia, com 4 anos e 8 meses de idade, frequenta a escola infantil e é trazida ao consultório fonoaudiológico por encaminhamento da coordenadora pedagógica. A queixa principal da escola é que as professoras e colegas sentem sérias dificuldades para compreender o que Sofia fala em sala, o que tem feito com que ela prefira brincar sozinha ou evite interações verbais mais elaboradas. Na anamnese, a mãe relata que a filha demorou para iniciar a produção de palavras isoladas (iniciou aos 2 anos) e que até hoje apresenta fala "enrolada" e de difícil compreensão para pessoas de fora do núcleo familiar próximo. Não há histórico de alterações auditivas confirmadas por triagem auditiva neonatal ou exames audiológicos recentes, e os marcos do desenvolvimento motor global foram típicos. Na avaliação linguística inicial, o fonoaudiólogo registra a presença de inúmeros processos fonológicos de simplificação de encontros consonantais, plosivação de fricativas e omissão de sílabas átonas. Na morfossintaxe, Sofia apresenta enunciados predominantemente telegráficos com omissão sistemática de preposições, artigos e verbos auxiliares (ex: "menina pegou boneca", "quer ir lá fora", "bola azul quebrou"). O cálculo da Extensão Média do Enunciado (MLU) em palavras resultou in 2,4. Sofia demonstra boa compreensão para ordens simples e complexas de rotina, mas demonstra dificuldades ao ouvir sentenças com voz passiva ou cláusulas relativas. A triagem cognitiva informal e a avaliação de jogo simbólico indicam representações simbólicas e habilidades de atenção compartilhada típicas para a idade.',
        questions: [
          {
            id: 'case-tl4-1-q1',
            stem: 'Considerando as marcas clínicas expressivas de Sofia (MLU de 2,4, enunciados telegráficos com omissão sistemática de elementos gramaticais fechados) e a queixa escolar de impacto de socialização, qual diagnóstico e terminologia são mais adequados?',
            correctAlternativeId: 'case-tl4-1-q1-a2',
            explanation: 'As queixas e os dados da avaliação morfossintática e de fala spontânea preenchem as regras clínicas do CATALISE para o TDL expressivo.',
            alternatives: [
              {
                id: 'case-tl4-1-q1-a1',
                text: 'Transtorno Fonológico puro com dificuldades temporárias de vocabulário e boa evolução de prognóstico.',
                isCorrect: false,
                feedback:
                  'Incorreto. Sofia apresenta prejuízos morfossintáticos estruturais evidentes (enunciados telegráficos, omissão de artigos e preposições, MLU baixo para a idade), o que indica um acometimento que ultrapassa a fonologia pura.',
              },
              {
                id: 'case-tl4-1-q1-a2',
                text: 'Transtorno do Desenvolvimento da Linguagem (TDL), dado o impacto funcional social significativo na escola, dificuldades expressivas sintático-lexicais acentuadas e ausência de etiologia biomédica.',
                isCorrect: true,
                feedback:
                  'Correto. Sofia apresenta dificuldades pragmáticas e estruturais de linguagem expressiva morfossintática e fonológica com forte impacto funcional na escola e ausência de fatores biomédicos excludentes, preenchendo os critérios de TDL.',
              },
              {
                id: 'case-tl4-1-q1-a3',
                text: 'Transtorno de Linguagem associado a uma condição diferenciadora de origem auditiva oculta.',
                isCorrect: false,
                feedback:
                  'Incorreto. A anamnese relata exames audiológicos normais recentes, não havendo base clínica para classificar a queixa sob uma condição diferenciadora auditiva.',
              },
              {
                id: 'case-tl4-1-q1-a4',
                text: 'Atraso simples de fala de resolução espontânea pós-alfabetização na escola primária.',
                isCorrect: false,
                feedback:
                  'Incorreto. Aos 4 anos e 8 meses, prejuízos morfossintáticos estruturais e fonológicos severos com impacto social focado exigem intervenção clínica e não devem ser minimizados.',
              },
            ],
          },
          {
            id: 'case-tl4-1-q2',
            stem: 'Ao definir o planejamento terapêutico de Sofia baseando-se em práticas baseadas em evidências, qual combinação de metas e estratégias de intervenção é mais recomendada para acelerar a generalização e a socialização?',
            correctAlternativeId: 'case-tl4-1-q2-a2',
            explanation: 'A reabilitação morfossintática expressiva em crianças pré-escolares com TDL obtém os melhores índices de eficácia com remodelamento e estimulação focada integrados à facilitação familiar domiciliar.',
            alternatives: [
              {
                id: 'case-tl4-1-q2-a1',
                text: 'Terapia estritamente diretiva em consultório focada na repetição de silabários isolados diante do espelho, desaconselhando a participação de familiares para evitar interrupções.',
                isCorrect: false,
                feedback:
                  'Incorreto. Treinar sílabas isoladas de forma mecânica não aborda a dificuldade gramatical de Sofia e desconsidera o nível de evidência sobre o envolvimento de pais no tratamento.',
              },
              {
                id: 'case-tl4-1-q2-a2',
                text: 'Abordagem híbrida naturalista baseada no brincar estruturado, aplicando técnicas de Remodelamento (recasting) e Estimulação Focada para os alvos sintáticos, integrada ao treinamento parental ativo.',
                isCorrect: true,
                feedback:
                  'Correto. A estimulação focada e o remodelamento contingente aplicados em contexto lúdico e replicados em casa pela família treinada oferecem as melhores taxas de generalização de gramática e vocabulário.',
              },
              {
                id: 'case-tl4-1-q2-a3',
                text: 'Adotar comunicação alternativa de alta tecnologia exclusiva com telas sensíveis ao toque, suspendendo todas as oportunidades de estimulação verbal da fala falada.',
                isCorrect: false,
                feedback:
                  'Incorreto. Sofia possui iniciativa verbal e compreensão adequadas; a comunicação alternativa atua como suporte e facilitadora de linguagem oral, nunca substituindo a fala expressiva de forma excludente.',
              },
              {
                id: 'case-tl4-1-q2-a4',
                text: 'Prescrever exercícios motores orofaciais passivos (como massagens na língua) para tonificar a musculatura facial antes de iniciar atividades de linguagem.',
                isCorrect: false,
                feedback:
                  'Incorreto. Exercícios motores orofaciais passivos ou ativos sem função de fala não possuem evidência científica de eficácia para reabilitação morfossintática ou fonológica.',
              },
            ],
          },
        ],
      },
    ],
  },

  review: {
    flashcards: [
      { id: 'fc-tl4-1', front: 'O que o Consórcio CATALISE estabeleceu para o diagnóstico do TDL?', back: 'Adoção do termo TDL em substituição a DEL, eliminação da discrepância rígida de QI não verbal e foco no impacto funcional e persistência das dificuldades.', tags: ['CATALISE', 'Diagnóstico'] },
      { id: 'fc-tl4-2', front: 'Como o CATALISE conceitua "Condições Associadas"?', back: 'Dificuldades do desenvolvimento (TDAH, dislexia, dispraxia) que coexistem com o TDL, mas não anulam nem explicam inteiramente o transtorno de linguagem.', tags: ['CATALISE', 'Coexistência'] },
      { id: 'fc-tl4-3', front: 'O que caracteriza um "Transtorno de Linguagem associado a uma condição diferenciadora"?', back: 'Quando a dificuldade de linguagem é secundária a uma etiologia biomédica clara (ex: síndrome de Down, paralisia cerebral, perda auditiva profunda).', tags: ['CATALISE', 'Etiologia'] },
      { id: 'fc-tl4-4', front: 'Qual é o indicador ecológico "MLU" na avaliação infantil?', back: 'Extensão Média do Enunciado (Mean Length of Utterance), calculada dividindo-se o número de palavras/morfemas pelo total de enunciados da amostra.', tags: ['Avaliação', 'Morfossintaxe'] },
      { id: 'fc-tl4-5', front: 'Como a amostra de fala para cálculo de MLU deve ser coletada?', back: 'Idealmente englobando 50 a 100 enunciados em múltiplos gêneros discursivos (conversação lúdica, narrativa e descrição de eventos).', tags: ['Avaliação', 'Metodologia'] },
      { id: 'fc-tl4-6', front: 'O que é a técnica híbrida de Estimulação Focada?', back: 'Fornecer múltiplos modelos naturais de uma estrutura gramatical ou lexical-alvo durante o brincar, sem forçar repetição ou imitação imediata pela criança.', tags: ['Intervenção', 'Estratégias'] },
      { id: 'fc-tl4-7', front: 'Como se define a técnica de Remodelamento (Recasting)?', back: 'Responder ao enunciado incompleto da criança reformulando-o com gramática correta e expandindo o conteúdo de forma contingente e imediata.', tags: ['Intervenção', 'Estratégias'] },
      { id: 'fc-tl4-8', front: 'O que a metanálise de Law et al. (2004) comprovou sobre o Treinamento de Pais?', back: 'Pais treinados em técnicas de facilitação obtêm ganhos sintáticos e lexicais expressivos em seus filhos, equivalentes à terapia direta em consultório.', tags: ['Evidência', 'Família'] },
      { id: 'fc-tl4-9', front: 'Como interpretar atrasos de linguagem em crianças abaixo de 3 anos (late talkers)?', back: 'Cerca de 50% evoluem espontaneamente até os 4 anos. A intervenção direta é indicada na presença de fatores de risco adicionais acumulados.', tags: ['Avaliação', 'Desenvolvimento'] },
      { id: 'fc-tl4-10', front: 'Quais são as principais limitações dos testes formais de linguagem no Brasil?', back: 'Falta de normatização e padronização estatística representativa para o português brasileiro, exigindo sinalização e contextualização.', tags: ['Limitações', 'Avaliação'] },
      { id: 'fc-tl4-11', front: 'O que estipula o Ensino Incidental (Milieu Teaching)?', back: 'Organizar o ambiente lúdico para provocar a iniciativa da criança e usar prompts/pistas naturais imediatas para eliciar e expandir a fala.', tags: ['Intervenção', 'Estratégias'] },
      { id: 'fc-tl4-12', front: 'Como definir metas terapêuticas baseando-se na Zona de Desenvolvimento Proximal?', back: 'Escolher estruturas linguísticas que a criança Hospitalizada ou na clínica produz com auxílio clínico do terapeuta, priorizando alvos com maior utilidade funcional diária.', tags: ['Intervenção', 'Planejamento'] },
      { id: 'fc-tl4-13', front: 'Por que o fonoaudiólogo não deve patologizar erros dialetais na fala da criança?', back: 'Variações regionais ou sociolinguísticas legítimas da comunidade não configuram desvios linguísticos nem TDL.', tags: ['Avaliação', 'Sociolinguística'] },
      { id: 'fc-tl4-14', front: 'Quais componentes formam o tripé da Prática Baseada em Evidências (PBE)?', back: 'Integração entre a melhor evidência científica externa, a expertise clínica do terapeuta e as escolhas, valores e prioridades da família.', tags: ['PBE', 'Princípios'] },
      { id: 'fc-tl4-15', front: 'Quais aspectos morfossintáticos expressivos costumam ser marcas clínicas do TDL no português brasileiro?', back: 'Omissão frequente de preposições, artigos, pronomes de objeto e marcadores gramaticais de concordância verbal e nominal na fala.', tags: ['Morfossintaxe', 'TDL'] },
      { id: 'fc-tl4-16', front: 'O que o fonoaudiólogo avalia na dimensão pragmática da linguagem?', back: 'Capacidade de iniciar turnos conversacionais, reparar falhas comunicativas, interpretar pistas não verbais e adequar o vocabulário ao interlocutor.', tags: ['Pragmática', 'Social'] },
      { id: 'fc-tl4-17', front: 'O que a plasticidade sináptica nos primeiros anos de vida sustenta na terapia?', back: 'A lógica da intervenção precoce em linguagem, aproveitando períodos biológicos sensíveis para a maturação dos circuitos linguísticos.', tags: ['Desenvolvimento', 'Biologia'] },
      { id: 'fc-tl4-18', front: 'Como diferenciar atraso expressivo simples de transtorno receptivo-expressivo?', back: 'Atrasos receptivos envolvem prejuízos severos na compreensão sintático-lexical, associando-se a pior prognóstico a longo prazo.', tags: ['Diagnóstico', 'Compreensão'] },
      { id: 'fc-tl4-19', front: 'Como a memória de trabalho fonológica interfere na aquisição gramatical no TDL?', back: 'A limitação em reter sequências fonológicas breves dificulta o processamento sintático de frases longas e a extração de marcas gramaticais.', tags: ['Cognição', 'Memória'] },
      { id: 'fc-tl4-20', front: 'Qual é o papel de gestos de apoio e dicas visuais na intervenção de linguagem oral?', back: 'Eles oferecem suporte facilitador e reduzem a carga imposta sobre a memória de trabalho verbal durante a aprendizagem sintática.', tags: ['Intervenção', 'Facilitação'] },
      { id: 'fc-tl4-21', front: 'Como avaliar a coerência e coesão narrativa em crianças pré-escolares?', back: 'Solicitando a recontagem de histórias com suporte de figuras e avaliando a sequência lógica de eventos e o uso de conectivos.', tags: ['Avaliação', 'Discurso'] },
      { id: 'fc-tl4-22', front: 'Qual é a utilidade clínica da gravação de áudio e vídeo na avaliação?', back: 'Permite registrar de forma fidedigna a interação espontânea e detalhar processos fonológicos e pragmáticos com calma pós-sessão.', tags: ['Metodologia', 'Clínica'] },
      { id: 'fc-tl4-23', front: 'Por que o uso de exercícios orofaciais passivos (ex: massagem) é contraindicado para atraso de linguagem?', back: 'Eles não atuam no processamento linguístico, sintático ou lexical, carecendo de evidência de eficácia para reabilitação de linguagem.', tags: ['Limitações', 'PráticaClínica'] },
      { id: 'fc-tl4-24', front: 'Qual o principal fator para a escolha do vocabulário-alvo na terapia inicial?', back: 'A utilidade funcional da palavra para a comunicação diária da criança e a motivação dela nas interações cotidianas.', tags: ['Planejamento', 'Léxico'] },
      { id: 'fc-tl4-25', front: 'Como avaliar a eficácia do tratamento de linguagem continuamente?', back: 'Coletando amostras de fala periódicas, mensurando alterações na MLU e aplicando escalas funcionais respondidas por pais e professores.', tags: ['Avaliação', 'Progresso'] },
    ],
    finalSynthesis:
      'A avaliação fonoaudiológica contemporânea nos transtornos de linguagem afasta-se de limiares psicométricos rígidos de inteligência não verbal e foca na identificação do perfil linguístico funcional e do impacto cotidiano decorrente de dificuldades persistentes, alinhada aos preceitos do Consórcio CATALISE para o TDL. O diagnóstico exige uma avaliação multidimensional de todos os níveis da linguagem (fonologia, semântica, morfossintaxe, pragmática), unindo testes padronizados e métricas ecológicas, como a análise da Extensão Média do Enunciado (MLU) em falas espontâneas. A intervenção reabilitadora baseia-se em práticas baseadas em evidências (PBE) com foco funcional, priorizando abordagens híbridas naturalistas como a Estimulação Focada, o Remodelamento (recasting) e o Ensino Incidental em contextos lúdicos significativos. A eficácia terapêutica é significativamente potencializada pelo treinamento e envolvimento ativo dos pais como coterapeuta na rotina diária da criança, acelerando os ganhos gramaticais e a generalização de competências. O planejamento terapêutico deve ser individualizado, estabelecer metas observáveis e funcionalmente relevantes e considerar idade, perfil linguístico, contextos de participação, prioridades familiares e condições associadas. Nenhum resultado isolado deve determinar o diagnóstico ou a conduta: testes formais precisam ser interpretados em conjunto com anamnese, observação clínica, amostras de fala e relatos de diferentes ambientes. Ao longo da intervenção, o profissional deve registrar a linha de base, acompanhar periodicamente indicadores linguísticos e funcionais e ajustar estratégias quando não houver progresso ou generalização. A colaboração com família e escola amplia as oportunidades de prática em situações naturais. Também é necessário respeitar variações linguísticas e socioculturais, evitar a patologização de diferenças dialetais e encaminhar para avaliação interdisciplinar quando houver sinais auditivos, cognitivos, motores, neurológicos ou emocionais relevantes.',
  },

  references: [
    {
      id: 'ref-tl4-catalise1',
      authors: 'Bishop, D. V. M., Snowling, M. J., Thompson, P. A., Greenhalgh, T., & CATALISE Consortium',
      title: 'CATALISE: A multinational and multidisciplinary Delphi consensus study. Identifying language impairments in children',
      source: 'PLoS ONE, 11(7), e0158753',
      year: 2016,
      usedIn: ['Resumo', 'Conceitos', 'Questões 1, 9 e 12', 'Exercício de Decisão 2', 'Flashcards 1, 2 e 3'],
    },
    {
      id: 'ref-tl4-catalise2',
      authors: 'Bishop, D. V. M., Snowling, M. J., Thompson, P. A., Greenhalgh, T., & CATALISE Consortium',
      title: 'Phase 2 of CATALISE: a Delphi consensus study on terminology to identify and classify language impairments in children',
      source: 'Journal of Child Psychology and Psychiatry, 58(10), 1068-1080',
      year: 2017,
      usedIn: ['Resumo', 'Questões 2 e 9', 'Exercício de Decisão 2', 'Flashcards 1, 2 e 3'],
    },
    {
      id: 'ref-tl4-fey1993',
      authors: 'Fey, M. E., Long, S. H., & Folkestead, J. R.',
      title: 'Reconstructive and facilitative approaches to grammar intervention with children who have specific language impairment',
      source: 'Journal of Speech and Hearing Research, 36(3), 565-577',
      year: 1993,
      usedIn: ['Resumo', 'Conceitos', 'Evidências', 'Questões 4, 5 e 11', 'Exercício de Decisão 1', 'Flashcards 6, 7 e 11'],
    },
    {
      id: 'ref-tl4-law2004',
      authors: 'Law, J., Garrett, Z., & Nye, C.',
      title: 'The efficacy of treatment for children with developmental speech and language delay/disorder: a systematic review of randomised controlled trials',
      source: 'Cochran Database of Systematic Reviews, (1), CD004007',
      year: 2004,
      usedIn: ['Resumo', 'Evidências', 'Questões 6 e 12', 'Exercício de Decisão 1', 'Flashcards 8 e 14'],
    },
    {
      id: 'ref-tl4-hage2014',
      authors: 'Hage, S. R. V., & Acosta Rodriguez, M.',
      title: 'Distúrbio específico de linguagem',
      source: 'In: Tratado das especialidades em fonoaudiologia. São Paulo: Guanabara Koogan, pp. 290-302',
      year: 2014,
      usedIn: ['Resumo', 'Limitações', 'Questões 3, 7, 8 e 10', 'Exercício de Decisão 1', 'Caso Clínico 1', 'Flashcards 9, 10, 13 e 23'],
    },
  ],
}
