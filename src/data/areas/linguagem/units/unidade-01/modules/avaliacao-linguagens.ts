import type { LearningModule } from '@/types/platform'

export const moduloAvaliacaoLinguagens: LearningModule = {
  id: 'mod-avaliacao-linguagens',
  slug: 'avaliacao-linguagens-oral-escrita',
  title: 'Avaliação das linguagens oral e escrita',
  description:
    'Fundamentos dos subsistemas da linguagem oral e sua interdependência com leitura e escrita, orientando a avaliação clínica fonoaudiológica.',
  order: 1,
  learningObjective:
    'Compreender e mapear os subsistemas da linguagem oral (fonologia, morfossintaxe, semântica e pragmática) e sua interdependência com as habilidades de leitura e escrita, utilizando modelos teóricos fundamentados em evidências para estruturar a avaliação clínica.',
  prerequisiteKnowledge: [
    'Neurodesenvolvimento típico da criança',
    'Anatomia e fisiologia da audição e do sistema nervoso central',
    'Fonética articulatória',
  ],
  estimatedTimeMinutes: 210,
  difficulty: 'intermediate',
  status: 'published',

  learn: {
    summary: [
      {
        id: 'sum-1',
        text: 'A avaliação clínica fonoaudiológica da linguagem é um processo sistemático de investigação do comportamento simbólico humano. Avaliar a linguagem requer o abandono de uma visão estritamente sintomatológica em favor de uma análise funcional e estrutural do neurodesenvolvimento.',
      },
      {
        id: 'sum-2',
        text: 'O modelo de Bloom e Lahey (1978) esquematiza a linguagem em três dimensões interdependentes: Forma (Fonologia e Morfossintaxe), Conteúdo (Semântica) e Uso (Pragmática). Avaliar a inter-relação dessas dimensões é fundamental para determinar se um quadro clínico representa um desvio global, um atraso maturacional ou um déficit restrito a um subsistema.',
      },
      {
        id: 'sum-3',
        text: 'A Fonologia transcende a mera articulação motora; diz respeito à organização e representação mental dos sons da língua. A Morfossintaxe engloba as regras de estruturação gramatical, mensurada pelo cálculo da Extensão Média do Enunciado (EME) e análise de marcadores gramaticais.',
      },
      {
        id: 'sum-4',
        text: 'A avaliação semântica contemporânea não se limita à contagem de palavras; investiga as redes semânticas, a velocidade de acesso lexical e a compreensão de inferências. A Pragmática avalia a funcionalidade da linguagem no contexto sociointeracional e é o pilar do diagnóstico diferencial entre TDL e TEA.',
      },
      {
        id: 'sum-5',
        text: 'A linguagem escrita é um produto cultural dependente da integridade da linguagem oral. O Modelo de Dupla Rota (Coltheart et al., 2001) prevê duas vias: a Rota Fonológica, testada por pseudopalavras, e a Rota Lexical, avaliada por palavras irregulares e de alta frequência.',
      },
      {
        id: 'sum-6',
        text: 'A Consciência Fonológica — capacidade metalinguística de refletir sobre os constituintes sonoros da fala — aliada à Memória de Trabalho Verbal forma o núcleo preditor do sucesso em leitura (Navas et al., 2014; Snowling, 2013).',
      },
    ],
    mainIdea:
      'A avaliação fonoaudiológica da linguagem é um processo investigativo pautado em modelos teóricos que correlacionam as dimensões forma, conteúdo e uso na oralidade com a estruturação e decodificação do sistema simbólico escrito.',
    essentialConcepts: [
      {
        id: 'conc-cf',
        term: 'Consciência Fonológica',
        definition:
          'Habilidade metalinguística de refletir e manipular intencionalmente os segmentos sonoros da fala (sílabas, rimas e fonemas).',
        example:
          'Identificar que "bola" e "boca" começam com o mesmo som, ou contar os fonemas da palavra "cão".',
      },
      {
        id: 'conc-mtv',
        term: 'Memória de Trabalho Verbal',
        definition:
          'Sistema cognitivo de capacidade limitada que retém e manipula informações fonológicas temporariamente para execução de tarefas complexas.',
        example:
          'Manter os grafemas lidos na memória enquanto realiza a fusão fonológica para decodificar uma palavra nova.',
      },
      {
        id: 'conc-ddr',
        term: 'Modelo de Dupla Rota',
        definition:
          'Teoria de processamento de leitura que descreve duas vias independentes: rota fonológica (conversão grafema-fonema) e rota lexical (reconhecimento visual direto).',
        example:
          'A leitura de "psicologia" aciona a rota lexical; a leitura de "praloca" exige a rota fonológica.',
      },
      {
        id: 'conc-coe',
        term: 'Contínuo Oral-Escrito',
        definition:
          'Paradigma científico que estabelece a dependência neurobiológica e processual da linguagem escrita em relação à integridade da linguagem oral.',
        example:
          'Criança com TDL e déficit morfossintático tende a apresentar erros de concordância na escrita.',
      },
      {
        id: 'conc-al',
        term: 'Acesso Lexical',
        definition:
          'Velocidade e eficiência com que o cérebro recupera a representação fonológica correspondente a um conceito armazenado no léxico mental.',
        example:
          'Anomias e uso de palavras genéricas ("aquilo", "o negócio") são sinais de dificuldade de acesso lexical.',
      },
    ],
    evidence: [
      {
        id: 'ev-1',
        claim:
          'Déficits no processamento fonológico oral precedem e causam dificuldades na leitura alfabética.',
        source: 'Snowling (2013); Navas et al. (2014)',
        evidenceLevel: 'strong',
        clinicalImplication:
          'A avaliação de crianças em risco para dislexia deve incluir rastreio de consciência fonológica desde a pré-escola.',
      },
      {
        id: 'ev-2',
        claim:
          'A avaliação estrutural isolada é insuficiente; a pragmática é determinante no diagnóstico diferencial.',
        source: 'Bishop et al. (2017)',
        evidenceLevel: 'strong',
        clinicalImplication:
          'Baterias de testes padronizados devem ser acompanhadas de observação ecológica da pragmática.',
      },
    ],
    limitations: [
      {
        id: 'lim-1',
        description:
          'Testes formais padronizados no Brasil frequentemente possuem amostras normativas defasadas ou com limitação regional. Escores quantitativos não substituem a análise qualitativa do perfil clínico.',
      },
      {
        id: 'lim-2',
        description:
          'Uma avaliação descontextualizada do ambiente escolar e familiar perde validade ecológica e pode classificar diferenças sociolinguísticas como patologia.',
      },
      {
        id: 'lim-3',
        description:
          'A alta transparência ortográfica inicial do português pode mascarar déficits leves na rota lexical nos primeiros anos escolares.',
      },
    ],
    simpleExplanation:
      'Imagine que a linguagem oral é a fundação de uma casa, enquanto a leitura e escrita são o telhado. O fonoaudiólogo verifica os sons (Fonologia), a ordem das palavras nas frases (Sintaxe), o vocabulário (Semântica) e a comunicação social (Pragmática). Depois, avalia como a criança transforma letras em sons (rota fonológica) e reconhece palavras inteiras (rota lexical). Se alguma etapa da fundação falhou, o telhado corre risco — e a avaliação precisa identificar exatamente onde.',
    conceptMap: {
      centralNode: 'Avaliação da Linguagem',
      nodes: [
        { id: 'n-central', label: 'Avaliação da Linguagem', type: 'central', description: 'Processo investigativo sistemático para analisar o desenvolvimento e o uso dos diferentes subsistemas linguísticos orais e escritos.' },
        { id: 'n-bloom', label: 'Modelo Bloom & Lahey', type: 'primary', description: 'Modelo teórico (1978) que divide a linguagem em três dimensões integradas: Forma, Conteúdo e Uso.' },
        { id: 'n-forma', label: 'Forma', type: 'secondary', description: 'Dimensão estrutural da linguagem que engloba a Fonologia (organização dos sons) e a Morfossintaxe (regras gramaticais e estruturação das frases).' },
        { id: 'n-conteudo', label: 'Conteúdo', type: 'secondary', description: 'Dimensão que engloba a Semântica, relacionada ao vocabulário, significado das palavras e estruturação de redes de sentido.' },
        { id: 'n-uso', label: 'Uso (Pragmática)', type: 'secondary', description: 'Dimensão pragmática, referente à funcionalidade e adequação da linguagem no contexto sociointeracional.' },
        { id: 'n-escrita', label: 'Linguagem Escrita', type: 'primary', description: 'Sistema simbólico secundário que depende intimamente da integridade das habilidades e processamento da linguagem oral (contínuo oral-escrito).' },
        { id: 'n-cf', label: 'Consciência Fonológica', type: 'secondary', description: 'Habilidade metalinguística de refletir e manipular intencionalmente os segmentos sonoros da fala (sílabas, rimas e fonemas).' },
        { id: 'n-mtv', label: 'Memória de Trabalho', type: 'secondary', description: 'Sistema cognitivo que retém e manipula informações fonológicas temporariamente, essencial para fusão silábica na decodificação.' },
        { id: 'n-ddr', label: 'Modelo Dupla Rota', type: 'secondary', description: 'Teoria de processamento de leitura (Coltheart) que prevê duas vias de reconhecimento e leitura de palavras: fonológica e lexical.' },
        { id: 'n-rf', label: 'Rota Fonológica', type: 'application', description: 'Via de decodificação por conversão grafema-fonema. Essencial para leitura de palavras novas ou pseudopalavras.' },
        { id: 'n-rl', label: 'Rota Lexical', type: 'application', description: 'Via de decodificação por reconhecimento visual direto da palavra. Essencial para palavras frequentes e irregulares.' },
      ],
      edges: [
        { id: 'e-1', from: 'n-central', to: 'n-bloom', label: 'fundamentado em' },
        { id: 'e-2', from: 'n-bloom', to: 'n-forma', label: 'dimensão' },
        { id: 'e-3', from: 'n-bloom', to: 'n-conteudo', label: 'dimensão' },
        { id: 'e-4', from: 'n-bloom', to: 'n-uso', label: 'dimensão' },
        { id: 'e-5', from: 'n-central', to: 'n-escrita', label: 'avalia também' },
        { id: 'e-6', from: 'n-escrita', to: 'n-cf', label: 'preditor' },
        { id: 'e-7', from: 'n-escrita', to: 'n-mtv', label: 'preditor' },
        { id: 'e-8', from: 'n-escrita', to: 'n-ddr', label: 'avaliada por' },
        { id: 'e-9', from: 'n-ddr', to: 'n-rf', label: 'via' },
        { id: 'e-10', from: 'n-ddr', to: 'n-rl', label: 'via' },
      ],
    },
    glossary: [
      {
        id: 'gl-pseudo',
        term: 'Pseudopalavra',
        definition:
          'Sequência pronunciável que obedece às regras fonológicas da língua, mas sem significado.',
        example: 'Usar "praloca" para testar a rota fonológica sem apoio da memória visual.',
      },
      {
        id: 'gl-eme',
        term: 'Extensão Média do Enunciado (EME)',
        definition: 'Métrica que calcula a média de morfemas ou palavras por frase produzida.',
        example: 'Avaliar se o desenvolvimento sintático acompanha a maturação cronológica.',
      },
      {
        id: 'gl-pf',
        term: 'Processo Fonológico',
        definition: 'Estratégia de simplificação que crianças usam ao produzir sons adultos.',
        example: 'Falar "cabo" no lugar de "sapo" (plosivização).',
      },
      {
        id: 'gl-lex',
        term: 'Lexicalização',
        definition:
          'Erro de leitura em que uma pseudopalavra é lida como palavra real semelhante.',
        example: 'Ler "floco" no lugar da pseudopalavra "floca".',
      },
      {
        id: 'gl-eco',
        term: 'Validade Ecológica',
        definition:
          'Grau em que os resultados da avaliação refletem o comportamento real no ambiente natural.',
        example: 'Analisar o caderno escolar como complemento ao teste padronizado.',
      },
    ],
  },

  apply: {
    questions: [
      {
        id: 'q-m1-1',
        stem: 'Segundo o modelo de Bloom e Lahey (1978), qual dimensão da linguagem é avaliada quando o fonoaudiólogo analisa a habilidade de iniciar e manter turnos conversacionais?',
        alternatives: [
          { id: 'alt-a', text: 'Forma', isCorrect: false, feedback: 'A Forma engloba Fonologia e Morfossintaxe — a estrutura dos sons e frases, não seu uso social.' },
          { id: 'alt-b', text: 'Conteúdo', isCorrect: false, feedback: 'O Conteúdo refere-se à Semântica — o significado e o vocabulário.' },
          { id: 'alt-c', text: 'Uso (Pragmática)', isCorrect: true, feedback: 'Correto. A Pragmática avalia a funcionalidade da linguagem no contexto sociocomunicativo, incluindo turnos, intenções e funções comunicativas.' },
          { id: 'alt-d', text: 'Morfossintaxe', isCorrect: false, feedback: 'A Morfossintaxe é um subcomponente da dimensão Forma e avalia a estrutura gramatical das frases.' },
        ],
        correctAlternativeId: 'alt-c',
        explanation: 'A dimensão Uso, correspondente à Pragmática, avalia como o indivíduo emprega a linguagem em contextos sociais reais, incluindo iniciativa comunicativa, manutenção de tópico e turnos conversacionais.',
        hint: 'Pense na funcionalidade social da comunicação e nas regras de interação que regem o diálogo interpessoal, e não na gramática ou no vocabulário isolados.',
        relatedConceptId: 'conc-cf',
      },
      {
        id: 'q-m1-2',
        stem: 'Uma criança lê corretamente palavras regulares e irregulares, mas tem desempenho muito abaixo do esperado na leitura de pseudopalavras. Qual hipótese clínica esse perfil sugere?',
        alternatives: [
          { id: 'alt-a', text: 'Déficit predominante na rota lexical', isCorrect: false, feedback: 'A rota lexical envolve o reconhecimento visual de palavras inteiras. Um déficit nessa via comprometeria especialmente palavras irregulares, não pseudopalavras.' },
          { id: 'alt-b', text: 'Déficit predominante na rota fonológica', isCorrect: true, feedback: 'Correto. A rota fonológica é responsável pela conversão grafema-fonema e é testada especificamente por pseudopalavras. O baixo desempenho nessa tarefa com preservação de palavras reais aponta para comprometimento dessa via.' },
          { id: 'alt-c', text: 'Dificuldade de vocabulário receptivo', isCorrect: false, feedback: 'O vocabulário receptivo é avaliado pela compreensão auditiva de palavras, não pela leitura de pseudopalavras.' },
          { id: 'alt-d', text: 'Atraso de linguagem oral', isCorrect: false, feedback: 'O atraso de linguagem oral se manifesta na expressão e compreensão oral, não necessariamente na decodificação de pseudopalavras.' },
        ],
        correctAlternativeId: 'alt-b',
        explanation: 'No Modelo de Dupla Rota, pseudopalavras exigem exclusivamente a rota fonológica (conversão grafema-fonema), pois não existem no léxico mental. Um déficit isolado nessa tarefa com preservação de palavras reais indica comprometimento da via fonológica, padrão frequentemente associado à dislexia de desenvolvimento.',
        hint: 'Pseudopalavras são palavras inventadas que não existem no nosso cérebro (léxico mental). Portanto, não há como lê-las olhando para a palavra inteira de uma vez.',
      },
      {
        id: 'q-m1-3',
        stem: 'Durante a avaliação da consciência fonológica em um paciente de 6 anos, qual das seguintes tarefas avalia o nível de maior complexidade cognitiva e metalinguística?',
        alternatives: [
          { id: 'alt-a', text: 'Segmentação silábica (separar "boneca" em bo-ne-ca)', isCorrect: false, feedback: 'A segmentação silábica é uma habilidade inicial e mais simples, adquirida precocemente no desenvolvimento.' },
          { id: 'alt-b', text: 'Identificação de rimas (saber se "café" rima com "pé")', isCorrect: false, feedback: 'A rima é uma habilidade de nível silábico médio, sendo mais simples do que a manipulação fonêmica.' },
          { id: 'alt-c', text: 'Exclusão fonêmica (dizer como fica "sapo" sem o som /s/)', isCorrect: true, feedback: 'Correto. A manipulação de fonemas individuais (exclusão, adição, substituição) exige o nível mais avançado da consciência fonológica (consciência fonêmica) e alta demanda de memória de trabalho.' },
          { id: 'alt-d', text: 'Aliteração (identificar palavras que começam com o mesmo som)', isCorrect: false, feedback: 'A aliteração é uma habilidade silábica/fonêmica inicial e menos complexa do que a exclusão de fonemas.' },
        ],
        correctAlternativeId: 'alt-c',
        explanation: 'A consciência fonêmica (capacidade de isolar, excluir ou substituir fonemas individuais) é o nível mais complexo e tardio da consciência fonológica, sendo fortemente correlacionada com o sucesso na alfabetização.',
        hint: 'Lembre-se da hierarquia das habilidades metalinguísticas: primeiro a sílaba, depois a rima/aliteração e, por fim, a manipulação de fonemas individuais.',
      },
      {
        id: 'q-m1-4',
        stem: 'Um fonoaudiólogo aplica o teste de repetição de pseudopalavras. Esse instrumento avalia predominantemente qual habilidade subjacente à linguagem?',
        alternatives: [
          { id: 'alt-a', text: 'Vocabulário expressivo', isCorrect: false, feedback: 'O vocabulário expressivo envolve a busca de palavras reais armazenadas no léxico, o que não ocorre com pseudopalavras.' },
          { id: 'alt-b', text: 'Alça fonológica da memória de trabalho verbal', isCorrect: true, feedback: 'Correto. Pseudopalavras não possuem representação lexical prévia, exigindo que o cérebro armazene temporariamente a sequência de fonemas na alça fonológica para reproduzi-la fielmente.' },
          { id: 'alt-c', text: 'Rota lexical de leitura', isCorrect: false, feedback: 'A tarefa é de repetição oral (escutar e falar), não envolvendo leitura ou processamento visual ortográfico.' },
          { id: 'alt-d', text: 'Semântica e pragmática', isCorrect: false, feedback: 'Pseudopalavras não possuem significado semântico ou adequação contextual pragmática.' },
        ],
        correctAlternativeId: 'alt-b',
        explanation: 'A repetição de pseudopalavras é um marcador clínico clássico da alça fonológica da memória de trabalho, essencial para a aquisição de novas palavras e o processamento de sentenças.',
        hint: 'A tarefa exige ouvir um som desconhecido, retê-lo temporariamente sem apoio semântico e repeti-lo. Qual estrutura de memória gerencia esse fluxo temporário?',
      },
      {
        id: 'q-m1-5',
        stem: 'Ao avaliar um menino de 5 anos, você observa que ele produz enunciados como "bola cair" e "neném quer papa", omitindo preposições, artigos e flexões verbais de tempo. No modelo de Bloom e Lahey, esse comprometimento está em qual dimensão?',
        alternatives: [
          { id: 'alt-a', text: 'Forma', isCorrect: true, feedback: 'Correto. A omissão de morfemas gramaticais e a estruturação inadequada das frases afetam diretamente a sintaxe e a morfologia, que compõem a dimensão Forma de Bloom & Lahey.' },
          { id: 'alt-b', text: 'Conteúdo', isCorrect: false, feedback: 'O conteúdo refere-se ao significado e vocabulário, que parecem adequados ao contexto comunicativo da criança.' },
          { id: 'alt-c', text: 'Uso', isCorrect: false, feedback: 'O uso refere-se à intenção e função comunicativa social, que parecem ativas e preservadas.' },
          { id: 'alt-d', text: 'Apenas Fonologia', isCorrect: false, feedback: 'O erro é estrutural sintático (gramática) e morfêmico, e não na articulação ou organização dos sons da fala (fonologia).' },
        ],
        correctAlternativeId: 'alt-a',
        explanation: 'Erros na estruturação de frases, omissão de conectivos e flexões afetam a morfossintaxe, componente estrutural que pertence à dimensão Forma de Bloom & Lahey.',
        hint: 'A gramática, a ordem das palavras e as flexões verbais dizem respeito à estrutura da linguagem física.',
      },
      {
        id: 'q-m1-6',
        stem: 'O conceito de "Contínuo Oral-Escrito" na fonoaudiologia fundamenta-se em qual princípio?',
        alternatives: [
          { id: 'alt-a', text: 'A escrita e a fala são processos independentes e processados em hemisférios cerebrais opostos.', isCorrect: false, feedback: 'A fala e a escrita são altamente integradas e compartilham redes neurais de linguagem, predominantemente no hemisfério esquerdo.' },
          { id: 'alt-b', text: 'O aprendizado da linguagem escrita depende neurobiologicamente da integridade e do desenvolvimento prévio da linguagem oral.', isCorrect: true, feedback: 'Correto. A escrita é uma representação gráfica da linguagem oral. Transtornos e atrasos na fala frequentemente se projetam como dificuldades na leitura e escrita na idade escolar.' },
          { id: 'alt-c', text: 'A fala depende do aprendizado da escrita para se desenvolver plenamente.', isCorrect: false, feedback: 'A linguagem oral se desenvolve naturalmente muito antes da instrução formal de leitura e escrita.' },
          { id: 'alt-d', text: 'Apenas a consciência fonológica conecta a fala à escrita, sem relação com outros aspectos da linguagem oral.', isCorrect: false, feedback: 'Outros fatores como vocabulário, sintaxe e compreensão narrativa oral também são determinantes para a aquisição da escrita.' },
        ],
        correctAlternativeId: 'alt-b',
        explanation: 'O contínuo oral-escrito descreve a interdependência entre a fala e a escrita, destacando que déficits na linguagem oral constituem fatores de risco primários para transtornos de leitura e escrita.',
        hint: 'A linguagem escrita é um sistema secundário que se constrói por cima do sistema biológico primário da fala.',
      },
      {
        id: 'q-m1-7',
        stem: 'Durante a leitura, o reconhecimento rápido e automático de palavras familiares sem a necessidade de decodificar letra por letra ocorre através de qual via?',
        alternatives: [
          { id: 'alt-a', text: 'Rota fonológica', isCorrect: false, feedback: 'A rota fonológica realiza a decodificação sequencial letra por letra (conversão grafema-fonema).' },
          { id: 'alt-b', text: 'Rota lexical', isCorrect: true, feedback: 'Correto. A rota lexical permite o reconhecimento direto e global da palavra através do confronto da representação ortográfica visual com o léxico mental.' },
          { id: 'alt-c', text: 'Rota auditiva', isCorrect: false, feedback: 'Não existe "rota auditiva" no processamento de leitura de palavras escritas no modelo de dupla rota.' },
          { id: 'alt-d', text: 'Rota motora', isCorrect: false, feedback: 'A rota motora está envolvida na produção da fala ou escrita, não no reconhecimento de leitura visual de palavras.' },
        ],
        correctAlternativeId: 'alt-b',
        explanation: 'A rota lexical permite leitura rápida e fluida de palavras conhecidas (regulares e irregulares) através do mapeamento ortográfico direto no léxico mental.',
        hint: 'Pense na leitura rápida por "reconhecimento visual" de palavras que você já viu centenas de vezes e não precisa mais soletrar.',
      },
    ],
    associations: [
      {
        id: 'assoc-m1-1',
        instruction: 'Associe cada componente do Modelo de Dupla Rota ao tipo de tarefa que o avalia preferencialmente.',
        pairs: [
          { id: 'p1', left: 'Rota Fonológica', right: 'Leitura de pseudopalavras' },
          { id: 'p2', left: 'Rota Lexical', right: 'Leitura de palavras irregulares' },
          { id: 'p3', left: 'Consciência Fonológica', right: 'Segmentação e manipulação de fonemas' },
          { id: 'p4', left: 'Memória de Trabalho Verbal', right: 'Repetição de pseudopalavras ininterrupta' },
        ],
      },
    ],
    branchingCases: [
      {
        id: 'bc-m1-1',
        title: 'Tomada de Decisão Clínica: O Caso de Pedro',
        description: 'Pedro, 4 anos e 6 meses, foi trazido para avaliação por queixa de "fala muito errada e enrolada". Os pais e a escola mostram-se bastante ansiosos.',
        startSceneId: 'scene-pedro-start',
        scenes: [
          {
            id: 'scene-pedro-start',
            title: '1. Acolhimento e Entrevista Inicial (Anamnese)',
            text: 'Você recebe a família de Pedro na clínica. Os pais relatam que ele fala poucas palavras compreensíveis, tem dificuldade para narrar fatos simples do seu dia a dia e se isola na escola. Ao interagir inicialmente com Pedro, você nota que ele aponta bastante para objetos em vez de falar.\n\nQual é a sua primeira conduta de avaliação?',
            choices: [
              {
                text: 'Iniciar imediatamente a aplicação de um teste formal de vocabulário e articulação para obter escores objetivos.',
                feedback: 'Pedro fica assustado com a formalidade dos testes em uma primeira sessão, chora e recusa-se a cooperar. Você obtém poucos dados úteis.',
                nextSceneId: 'scene-pedro-test-fail',
                isRecommended: false
              },
              {
                text: 'Realizar uma sessão de observação lúdica livre para avaliar a pragmática (Uso) e o comportamento comunicativo em contexto natural.',
                feedback: 'Pedro se sente confortável brincando e você observa boa intenção comunicativa, contato ocular adequado, mas com emissões silábicas simplificadas e falta de flexão gramatical (Forma e Conteúdo).',
                nextSceneId: 'scene-pedro-ludic',
                isRecommended: true
              }
            ]
          },
          {
            id: 'scene-pedro-test-fail',
            title: 'Recuperando a sessão',
            text: 'Como os testes falharam no acolhimento, Pedro está resistente. Para continuar com a avaliação diagnóstica de forma produtiva, o que você faz?',
            choices: [
              {
                text: 'Mudar a abordagem para uma observação lúdica interativa, brincando no chão e reduzindo a exigência de testes formais.',
                feedback: 'Pedro se acalma gradualmente e passa a interagir de forma natural, revelando o seu verdadeiro comportamento comunicativo.',
                nextSceneId: 'scene-pedro-ludic',
                isRecommended: true
              },
              {
                text: 'Insistir na aplicação dos testes para não perder tempo clínico, tentando subornar a criança com brinquedos do consultório.',
                feedback: 'A insistência aumenta a aversão de Pedro e a sessão termina sem nenhum dado avaliativo confiável.',
                nextSceneId: 'scene-pedro-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'scene-pedro-ludic',
            title: '2. Seleção de Instrumentos de Avaliação',
            text: 'Com base na observação lúdica, você percebeu problemas na estruturação de frases (Morfossintaxe) e simplificações de fala (Fonologia), caracterizando a dimensão Forma, enquanto a Pragmática (Uso) está preservada. Agora você precisa testar a linguagem de forma estruturada.\n\nQual combinação de testes você escolhe?',
            choices: [
              {
                text: 'Teste de Imitação de Palavras e Nomeação para avaliar o sistema fonológico oral, aliado ao cálculo da EME (Extensão Média do Enunciado).',
                feedback: 'Excelente escolha. A imitação e nomeação isolam o sistema fonológico, enquanto a EME quantifica a maturidade sintática da fala de Pedro de forma ecológica.',
                nextSceneId: 'scene-pedro-results',
                isRecommended: true
              },
              {
                text: 'Apenas uma triagem rápida de leitura e escrita com cartões de letras.',
                feedback: 'Pedro tem apenas 4 anos e meio. Uma triagem de leitura e escrita formal é inadequada e precoce para o nível neurodesenvolvimental dele.',
                nextSceneId: 'scene-pedro-early-write',
                isRecommended: false
              }
            ]
          },
          {
            id: 'scene-pedro-early-write',
            title: 'Ajustando ao Neurodesenvolvimento',
            text: 'Você percebe que Pedro não está alfabetizado e os testes de escrita não geram dados relevantes. Para redirecionar e obter dados reais sobre a linguagem oral dele, o que decide?',
            choices: [
              {
                text: 'Aplicar testes de processamento fonológico oral e calcular a EME a partir de uma amostra de fala espontânea.',
                feedback: 'Pedro responde muito bem aos estímulos orais lúdicos e você consegue coletar os dados necessários.',
                nextSceneId: 'scene-pedro-results',
                isRecommended: true
              },
              {
                text: 'Continuar insistindo em tarefas de escrita, pedindo para ele desenhar as letras do nome.',
                feedback: 'Isso gera frustração e não responde à queixa inicial de fala enrolada de Pedro.',
                nextSceneId: 'scene-pedro-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'scene-pedro-results',
            title: '3. Análise de Resultados e Diagnóstico',
            text: 'A avaliação formal e qualitativa revelou:\n- Dificuldade acentuada na estruturação morfossintática (fala em estilo telegráfico, sem verbos auxiliares ou preposições);\n- EME significativamente abaixo do esperado para 4 anos e meio;\n- Diversos processos fonológicos (plosivização e simplificação de encontro);\n- Vocabulário (Semântica) e Pragmática adequados.\n\nQual é a sua conclusão diagnóstica provável?',
            choices: [
              {
                text: 'Transtorno do Desenvolvimento da Linguagem (TDL), com comprometimento na dimensão Forma (Fonologia e Morfossintaxe).',
                feedback: 'Correto! O TDL com comprometimento na Forma é caracterizado por déficits de gramática e fonologia persistentes na fala, com inteligência e socialização não verbais preservadas.',
                nextSceneId: 'scene-pedro-success',
                isRecommended: true
              },
              {
                text: 'Transtorno do Espectro Autista (TEA), devido à preferência por apontar e isolamento escolar.',
                feedback: 'Incorreto. A observação lúdica demonstrou intenção comunicativa, contato visual de qualidade e pragmática preservada. O isolamento escolar deve-se à frustração de não ser compreendido na fala, e não por déficit de interação social primário.',
                nextSceneId: 'scene-pedro-tea-error',
                isRecommended: false
              }
            ]
          },
          {
            id: 'scene-pedro-tea-error',
            title: 'Refletindo sobre o Diagnóstico Diferencial',
            text: 'Rotular Pedro com TEA sem preencher os critérios de comunicação social e padrões comportamentais repetitivos pode levar a condutas inadequadas. Sabendo que o contato visual e a interação lúdica são adequados, qual conduta diagnóstica alternativa você adota?',
            choices: [
              {
                text: 'Concluir pela hipótese de Transtorno do Desenvolvimento da Linguagem (TDL) e planejar a intervenção focada em Forma.',
                feedback: 'Excelente. Essa hipótese clínica direciona a terapia para o desenvolvimento de fala e gramática de maneira específica.',
                nextSceneId: 'scene-pedro-success',
                isRecommended: true
              },
              {
                text: 'Manter a suspeita de TEA e encaminhar para intervenção comportamental intensiva baseada em autismo.',
                feedback: 'A conduta inadequada atrasa a estimulação focada de fala de Pedro e estressa desnecessariamente a família.',
                nextSceneId: 'scene-pedro-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'scene-pedro-success',
            title: 'Sucesso Clínico',
            text: 'Parabéns! Você estruturou uma avaliação acolhedora, escolheu os testes baseando-se no desenvolvimento de Pedro e fez o diagnóstico diferencial correto (TDL vs TEA), garantindo uma intervenção fonoaudiológica focada em suas necessidades reais de comunicação.',
            choices: []
          },
          {
            id: 'scene-pedro-end-fail',
            title: 'Fim de Simulação — Conduta Inadequada',
            text: 'A avaliação foi encerrada sem dados clínicos consistentes ou com diagnósticos equivocados. Lembre-se de priorizar o vínculo, o desenvolvimento da criança e o diagnóstico diferencial com base nas dimensões de Bloom & Lahey.',
            choices: []
          }
        ]
      },
      {
        id: 'bc-m1-2',
        title: 'Caso de Arthur (Atraso de Fala)',
        description: 'Arthur, 3 anos, fala pouquíssimas palavras isoladas. Os pais demonstram grande preocupação e questionam se ele deve iniciar a terapia imediatamente ou esperar.',
        startSceneId: 'arthur-s1',
        scenes: [
          {
            id: 'arthur-s1',
            title: '1. Acolhimento e Entrevista Inicial',
            text: 'Os pais relatam que Arthur aponta para o que quer e diz apenas "mama" e "papa". A escola sugeriu esperar até os 4 anos. Qual sua conduta de avaliação inicial?',
            choices: [
              {
                text: 'Investigar detalhadamente os marcos de desenvolvimento global, o histórico de infecções de ouvido e solicitar avaliação auditiva periférica imediata.',
                feedback: 'Excelente. Afastar comprometimento auditivo é a primeira regra diante de atraso de fala, e a anamnese contextualiza o neurodesenvolvimento.',
                nextSceneId: 'arthur-s2',
                isRecommended: true
              },
              {
                text: 'Orientar os pais a aguardarem mais 6 meses na escola, conforme recomendação pedagógica, antes de iniciar testes estressantes.',
                feedback: 'A conduta de "espera vigilante" sem avaliação auditiva e clínica pode atrasar intervenções preciosas em uma janela crucial de plasticidade cerebral.',
                nextSceneId: 'arthur-wait-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'arthur-wait-fail',
            title: 'Refletindo sobre Intervenção Precoce',
            text: 'Os pais insistem que gostariam de uma opinião profissional agora para não perderem tempo. O que você faz?',
            choices: [
              {
                text: 'Acolher a preocupação familiar, iniciar a avaliação clínica lúdica e solicitar o exame de audição.',
                feedback: 'Muito bem. A família deve ser parceira ativa, e a avaliação precoce previne o agravamento de possíveis transtornos.',
                nextSceneId: 'arthur-s2',
                isRecommended: true
              },
              {
                text: 'Indicar um neuropediatra diretamente para medicar a criança para falar, pulando a avaliação auditiva.',
                feedback: 'Medicamentos não substituem a estimulação de linguagem e o diagnóstico de audição. Conduta inadequada.',
                nextSceneId: 'arthur-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'arthur-s2',
            title: '2. Avaliação do Brincar Simbólico e Comunicação',
            text: 'O exame auditivo mostra audição normal. Na sessão lúdica, você avalia o brincar simbólico de Arthur. Ele usa carrinhos para fazer pistas, alimenta um boneco de forma imaginativa, faz contato visual de qualidade e usa gestos comunicativos abundantes. Qual hipótese inicial isso favorece?',
            choices: [
              {
                text: 'Atraso de Linguagem Expressiva simples, pois a intenção comunicativa, a pragmática e o simbolismo cognitivo estão preservados.',
                feedback: 'Correto. A presença de brincar simbólico rico e bom contato visual aponta para um desenvolvimento sociocomunicativo adequado, estando a dificuldade restrita à expressão verbal.',
                nextSceneId: 'arthur-s3',
                isRecommended: true
              },
              {
                text: 'Autismo leve, pois ele prefere brincar sozinho com os carrinhos em vez de interagir verbalmente com você.',
                feedback: 'Incorreto. O brincar simbólico funcional estruturado e a presença de contato visual dinâmico com uso de gestos compartilhados reduzem muito a probabilidade de TEA.',
                nextSceneId: 'arthur-tea-error',
                isRecommended: false
              }
            ]
          },
          {
            id: 'arthur-tea-error',
            title: 'Retomando a Análise Diagnóstica',
            text: 'Para diferenciar atraso de fala de TEA em crianças de 3 anos, qual aspecto da comunicação você deve focar na observação?',
            choices: [
              {
                text: 'A presença de Atenção Compartilhada (apontar para mostrar algo de interesse mútuo) e o uso social dos gestos.',
                feedback: 'Exatamente. A atenção compartilhada é o principal marcador diferencial e estava preservada em Arthur.',
                nextSceneId: 'arthur-s3',
                isRecommended: true
              },
              {
                text: 'O número de palavras faladas de forma isolada.',
                feedback: 'O vocabulário isolado quantifica o atraso expressivo, mas não diferencia qualitativamente a intenção comunicativa.',
                nextSceneId: 'arthur-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'arthur-s3',
            title: '3. Planejamento Terapêutico e Alta',
            text: 'Confirmado o atraso simples de linguagem expressiva. Qual deve ser o foco da sua primeira etapa de intervenção com a família?',
            choices: [
              {
                text: 'Treinamento parental para implementar estratégias de estimulação naturalística diária (expansão de enunciados, modelagem sem pressão e leitura dialogada).',
                feedback: 'Excelente. A capacitação dos pais no ambiente natural da criança é a estratégia com maior nível de evidência para atraso de linguagem expressiva nessa idade.',
                nextSceneId: 'arthur-success',
                isRecommended: true
              },
              {
                text: 'Treino intensivo de repetição mecânica de fonemas na clínica com cartões de figuras (flashcards).',
                feedback: 'O treino descontextualizado e repetitivo bloqueia o engajamento de crianças de 3 anos e prejudica o desenvolvimento da pragmática natural.',
                nextSceneId: 'arthur-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'arthur-success',
            title: 'Arthur Evoluindo',
            text: 'Parabéns! Com a intervenção precoce centrada na família e estimulação naturalística, Arthur começou a produzir frases simples de duas palavras em 3 meses, demonstrando excelente progresso.',
            choices: []
          },
          {
            id: 'arthur-end-fail',
            title: 'Fim de Simulação — Conduta Inadequada',
            text: 'A conduta clínica adotada foi ineficaz ou inadequada para o quadro de Arthur. Lembre-se de valorizar o brincar simbólico e a orientação familiar na intervenção precoce.',
            choices: []
          }
        ]
      },
      {
        id: 'bc-m1-3',
        title: 'Caso de Mariana (Apraxia de Fala na Infância)',
        description: 'Mariana, 4 anos, apresenta fala pouco compreensível. Ela tenta falar a mesma palavra de várias formas diferentes (inconsistência) e exibe procura articulatória com os lábios ao iniciar enunciados.',
        startSceneId: 'mariana-s1',
        scenes: [
          {
            id: 'mariana-s1',
            title: '1. Identificação de Sinais de Alerta',
            text: 'Durante a avaliação fonológica, você nota que Mariana produz "pato" como "tato", depois "bato" e depois "pado" na mesma sessão. Ela demonstra esforço e frustração ao tentar se fazer entender. Qual sinal motor você investiga a seguir?',
            choices: [
              {
                text: 'A integridade do planejamento motor avaliando a procura articulatória (tateio oral) e a consistência na repetição múltipla de palavras.',
                feedback: 'Excelente. A inconsistência articulatória na ausência de déficit neuromuscular primário e o tateio oral (groping) são marcadores fundamentais da Apraxia de Fala na Infância (AFI).',
                nextSceneId: 'mariana-s2',
                isRecommended: true
              },
              {
                text: 'O tônus e a força muscular da língua e bochechas usando exercícios de resistência com espátula.',
                feedback: 'Exercícios de força muscular não ajudam no diagnóstico da apraxia, já que o problema está na programação neurológica do movimento, e não na fraqueza muscular.',
                nextSceneId: 'mariana-tone-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'mariana-tone-fail',
            title: 'Reavaliando o Foco Motor',
            text: 'Mariana tem força muscular normal na mastigação e deglutição, descartando disartria ou fraqueza severa. Como prosseguir?',
            choices: [
              {
                text: 'Avaliar a transição entre fonemas em palavras de extensão crescente (curtas vs. longas) e observar a diadococinesia oral.',
                feedback: 'Muito bem. A coarticulação (transição entre sons) e a velocidade de movimentos sequenciais são fundamentais no diagnóstico de planejamento motor.',
                nextSceneId: 'mariana-s2',
                isRecommended: true
              },
              {
                text: 'Insistir que ela faça exercícios de sopro e estalo de língua por 15 minutos.',
                feedback: 'Esses exercícios não possuem correlação científica com a reabilitação da fala e frustram a paciente.',
                nextSceneId: 'mariana-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'mariana-s2',
            title: '2. Escolha da Abordagem de Intervenção',
            text: 'O diagnóstico de Apraxia de Fala na Infância (AFI) é estabelecido. Qual modelo de intervenção você deve selecionar para iniciar a reabilitação?',
            choices: [
              {
                text: 'Métodos baseados em pistas multissensoriais e princípios de aprendizagem motora (ex: PROMPT, DTTC), focando na transição entre sílabas e repetição de palavras funcionais.',
                feedback: 'Correto. Abordagens motoras com apoio visual, auditivo e tátil auxiliam o cérebro a consolidar os mapas de planejamento motor de fala necessários para a coarticulação.',
                nextSceneId: 'mariana-s3',
                isRecommended: true
              },
              {
                text: 'Terapia fonológica tradicional baseada em ciclos e bombardeio auditivo passivo de fonemas individuais.',
                feedback: 'Em casos de apraxia, apenas o treino fonológico/auditivo é insuficiente, pois a dificuldade reside na execução/planejamento motor dos gestos articulatórios na fala.',
                nextSceneId: 'mariana-trad-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'mariana-trad-fail',
            title: 'Ajustando a Terapia Motora',
            text: 'Mariana não demonstra melhoras com o bombardeio auditivo e continua inconsistente. O que fazer?',
            choices: [
              {
                text: 'Integrar pistas táteis-cinestésicas e visuais na produção de sílabas funcionais (ex: "dá", "mais", "tchau").',
                feedback: 'Excelente. A transição para o foco motor multissensorial estimula a reorganização proprioceptiva da fala.',
                nextSceneId: 'mariana-s3',
                isRecommended: true
              },
              {
                text: 'Aumentar a lista de palavras para 50 itens sem dar apoio visual ou tátil.',
                feedback: 'Isso sobrecarrega o sistema de planejamento e aumenta o número de erros e a frustração de Mariana.',
                nextSceneId: 'mariana-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'mariana-s3',
            title: '3. Dosagem e Frequência Terapêutica',
            text: 'Para otimizar a plasticidade cerebral e a retention motora na AFI, qual deve ser a frequência recomendada para as sessões de fonoaudiologia?',
            choices: [
              {
                text: 'Sessões frequentes e mais curtas (ex: 2 a 3 vezes por semana, com alta intensidade de repetições articulatórias ativas por sessão).',
                feedback: 'Excelente. A alta frequência com sessões focadas é o padrão ouro recomendado pela literatura científica para distúrbios motores de fala.',
                nextSceneId: 'mariana-success',
                isRecommended: true
              },
              {
                text: 'Uma sessão semanal de 1 hora para dar tempo de a musculatura descansar e não sobrecarregar a rotina dos pais.',
                feedback: 'Uma sessão semanal espaçada demonstra pouquíssima eficácia para consolidar novos esquemas motores de fala na infância.',
                nextSceneId: 'mariana-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'mariana-success',
            title: 'Mariana Comunicando',
            text: 'Parabéns! O foco no planejamento motor de fala, o uso de pistas multissensoriais e a alta dosagem semanal permitiram que Mariana estabilizasse a produção de sílabas e ganhasse inteligibilidade na fala.',
            choices: []
          },
          {
            id: 'mariana-end-fail',
            title: 'Fim de Simulação — Conduta Inadequada',
            text: 'A intervenção falhou em focar no planejamento motor ou na intensidade de tratamento necessária para reabilitar a apraxia de fala.',
            choices: []
          }
        ]
      },
      {
        id: 'bc-m1-4',
        title: 'Caso de Lucas (Disfonia Infantil)',
        description: 'Lucas, 7 anos, apresenta rouquidão persistente há mais de 3 meses. A professora relata que ele grita muito no recreio e tem dificuldades para ser ouvido na sala.',
        startSceneId: 'lucas-s1',
        scenes: [
          {
            id: 'lucas-s1',
            title: '1. Conduta Inicial de Avaliação',
            text: 'Ao receber Lucas e sua mãe, você percebe desvio vocal evidente de grau moderado (rugosidade e soprosidade). Qual deve ser o primeiro passo antes de iniciar a reabilitação vocal?',
            choices: [
              {
                text: 'Encaminhar o paciente para avaliação médica otorrinolaringológica para realização de laringoscopia e aguardar o laudo físico.',
                feedback: 'Perfeito. A fonoaudiologia exige o diagnóstico anatômico e funcional da laringe (descartar cistos, nódulos ou alterações estruturais mínimas) antes de aplicar exercícios fonatórios.',
                nextSceneId: 'lucas-s2',
                isRecommended: true
              },
              {
                text: 'Prescrever imediatamente exercícios de vibração de lábios e técnica de sopro e som agudo para reabilitar a musculatura pregas vocais.',
                feedback: 'Perigoso. Aplicar exercícios de fonação sem conhecer a laringe pode piorar lesões pré-existentes se houver, por exemplo, um cisto ou fenda inadequada.',
                nextSceneId: 'lucas-medical-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'lucas-medical-fail',
            title: 'Ajustando a Conduta Ética',
            text: 'A mãe de Lucas questiona o motivo de precisar ir ao médico se a queixa é "só rouquidão de grito". Como você responde?',
            choices: [
              {
                text: 'Explicar de forma clara que precisamos visualizar as pregas vocais para garantir que os exercícios sejam seguros e específicos para o tipo de alteração na laringe.',
                feedback: 'Excelente. O esclarecimento ético e técnico gera confiança e garante a segurança do tratamento.',
                nextSceneId: 'lucas-s2',
                isRecommended: true
              },
              {
                text: 'Concordar e começar a terapia de voz sem o exame médico para poupar custos para a família.',
                feedback: 'Conduta antiética e de risco clínico que viola as diretrizes de reabilitação vocal.',
                nextSceneId: 'lucas-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'lucas-s2',
            title: '2. Interpretação do Exame e Terapia',
            text: 'Lucas realiza a laringoscopia, que revela "Nódulos vocais bilaterais simétricos em terço anterior e fenda em ampulheta". Com base nesse achado clínico de sobrecarga mecânica na fonação, qual abordagem terapêutica você adota?',
            choices: [
              {
                text: 'Terapia baseada em conscientização de higiene vocal de forma lúdica, melhora do padrão respiratório costodifragmático e suavização do ataque vocal usando técnicas como ETVSO (Exercícios de Trato Vocal Semiocluído com canudo ou som fricativo).',
                feedback: 'Excelente. Os exercícios de trato vocal semiocluído reduzem a colisão traumática das pregas vocais, auxiliando na regressão dos nódulos com segurança.',
                nextSceneId: 'lucas-s3',
                isRecommended: true
              },
              {
                text: 'Prescrever repouso vocal absoluto (proibir Lucas de falar por 30 dias) associado a exercícios intensivos de força laríngea.',
                feedback: 'O repouso vocal absoluto é psicologicamente inviável e ineficaz para crianças. Exercícios de força laríngea podem agravar a hiperconstrição dos nódulos.',
                nextSceneId: 'lucas-force-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'lucas-force-fail',
            title: 'Suavização Vocal',
            text: 'Lucas começa a demonstrar dor ao falar após os exercícios de força. Como você redireciona o plano de terapia?',
            choices: [
              {
                text: 'Interromper exercícios de força, priorizando fonação suave e técnicas de ressonância para transferir a energia sonora para a cavidade oral.',
                feedback: 'Muito bem. A suavização do ataque vocal e o foco na ressonância reduzem o esforço laríngeo imediato.',
                nextSceneId: 'lucas-s2',
                isRecommended: true
              },
              {
                text: 'Aumentar a intensidade dos exercícios laríngeos alegando que a dor é parte do processo de fortalecimento.',
                feedback: 'A dor vocal indica fadiga muscular ou trauma prega vocal. Insistir é negligência clínica.',
                nextSceneId: 'lucas-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'lucas-s3',
            title: '3. Atuação no Ambiente Ecológico',
            text: 'A reabilitação vocal em crianças exige generalização no dia a dia. Como trabalhar a voz de Lucas de forma ecológica no ambiente escolar e familiar?',
            choices: [
              {
                text: 'Orientar pais e professores a reduzirem o ruído competitivo na casa e na sala, criar um sistema de "pontuação lúdica" para evitar gritos e sugerir pausas de hidratação sistemáticas.',
                feedback: 'Excelente. Mudar o meio físico e criar hábitos saudáveis de forma positiva garante a sustentabilidade e o sucesso do tratamento a longo prazo.',
                nextSceneId: 'lucas-success',
                isRecommended: true
              },
              {
                text: 'Sugerir que a escola impeça Lucas de ir ao recreio e proibi-lo de brincar com amigos barulhentos.',
                feedback: 'A punição social gera depressão e frustração e não ensina regulação vocal funcional.',
                nextSceneId: 'lucas-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'lucas-success',
            title: 'Voz Saudável',
            text: 'Parabéns! Com o diagnóstico ORL adequado, aplicação de técnicas de fonação suave com ETVSO e modificações ambientais lúdicas, os nódulos vocais de Lucas regrediram e ele desenvolveu uma voz limpa e sem esforço.',
            choices: []
          },
          {
            id: 'lucas-end-fail',
            title: 'Fim de Simulação — Conduta Inadequada',
            text: 'A reabilitação causou dor ou foi ineficaz por falta de suporte médico e de suporte ecológico familiar e escolar.',
            choices: []
          }
        ]
      },
      {
        id: 'bc-m1-5',
        title: 'Caso de Sofia (Desvio Fonológico Oposicional)',
        description: 'Sofia, 5 anos, apresenta trocas sistemáticas na fala: ensurdece todas as consoantes sonoras (ex: "bola" vira "pola", "zebra" vira "sepa", "gato" vira "kato").',
        startSceneId: 'sofia-s1',
        scenes: [
          {
            id: 'sofia-s1',
            title: '1. Diagnóstico Diferencial de Fala',
            text: 'Sofia apresenta trocas na classe das plosivas e fricativas baseadas no traço de sonoridade. Qual o primeiro passo avaliativo para definir se o problema é de base fonética (motora) ou fonológica (cognitivo-linguística)?',
            choices: [
              {
                text: 'Avaliar o inventário fonético para verificar se Sofia consegue produzir os sons sonoros (/b, d, g, v, z, ʒ/) isoladamente ou sob imitação direta.',
                feedback: 'Excelente. Se ela consegue produzir os sons sonoros sob imitação ou isolados, a dificuldade não é motora (fonética), mas sim de organização mental das regras fonológicas (fonológica).',
                nextSceneId: 'sofia-s2',
                isRecommended: true
              },
              {
                text: 'Prescrever exercícios de sopro e fortalecimento de bochechas para melhorar a musculatura articulatória responsável pelo som.',
                feedback: 'Exercícios musculares não tratam a sonoridade, pois o ensurdecimento é tipicamente uma alteração fonológica de contraste de traços distintivos, e não de fraqueza orofacial.',
                nextSceneId: 'sofia-motor-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'sofia-motor-fail',
            title: 'Investigando a Capacidade Fonética',
            text: 'Sofia sopra e estala a língua perfeitamente, mas continua ensurdecendo a fala. Qual a conduta recomendada para testar a capacidade física de produzir o traço?',
            choices: [
              {
                text: 'Realizar testes de imitação de sílabas isoladas (ex: "ba", "da", "za") prestando atenção à vibração das pregas vocais.',
                feedback: 'Muito bem. A imitação silábica isola a capacidade motora fonética da criança.',
                nextSceneId: 'sofia-s2',
                isRecommended: true
              },
              {
                text: 'Continuar com massagens na face e alongamento lingual.',
                feedback: 'Massagens faciais não têm aplicabilidade clínica para corrigir regras fonológicas e fonêmicas da língua.',
                nextSceneId: 'sofia-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'sofia-s2',
            title: '2. Seleção de Modelo Terapêutico',
            text: 'A avaliação confirmou que Sofia tem o inventário fonético completo (consegue produzir os sons sonoros de forma isolada se solicitada), mas seu sistema fonológico mental não utiliza o traço de sonoridade para diferenciar palavras. Qual modelo terapêutico fonoaudiológico é o mais indicado?',
            choices: [
              {
                text: 'Modelos de base fonológica com foco cognitivo-linguístico, como o Modelo de Contrastes Mínimos ou Oposições Máximas, utilizando pares mínimos (ex: faca/vaca, pata/bada) para reorganizar o sistema fonológico da criança.',
                feedback: 'Perfeito. O uso de pares mínimos força o cérebro a perceber que a mudança de sonoridade altera o significado da palavra, reorganizando a representação mental do fonema.',
                nextSceneId: 'sofia-s3',
                isRecommended: true
              },
              {
                text: 'Modelo tradicional fonético de repetição isolada de sílabas e treino de posicionamento da língua usando espátula por várias semanas.',
                feedback: 'Embora o treino tradicional funcione para desvios fonéticos (como distorções motoras do /r/), ele é ineficiente e lento para desvios fonológicos sistemáticos de contraste de traços como o ensurdecimento.',
                nextSceneId: 'sofia-trad-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'sofia-trad-fail',
            title: 'Reorganização do Sistema Fonológico',
            text: 'Sofia demonstra tédio e não generaliza as produções de sílabas isoladas para a fala espontânea. Como acelerar a generalização?',
            choices: [
              {
                text: 'Introduzir jogos com cartas ilustradas de pares mínimos (ex: "pote" vs "bode") onde a troca do som impede o andamento correto do jogo de forma divertida.',
                feedback: 'Excelente. A atividade com valor comunicativo imediato estimula o processamento fonológico superior.',
                nextSceneId: 'sofia-s3',
                isRecommended: true
              },
              {
                text: 'Repetir a lista de palavras isoladas 50 vezes adicionando punições leves a cada erro.',
                feedback: 'A punição inibe a comunicação espontânea e gera trauma psicológico na infância.',
                nextSceneId: 'sofia-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'sofia-s3',
            title: '3. Critérios de Alta Terapêutica',
            text: 'Após 3 meses de terapia de contrastes mínimos, Sofia atinge 90% de precisão no uso dos fonemas sonoros em fala espontânea durante sessões lúdicas e interações cotidianas reportadas pela família. Qual a sua conduta?',
            choices: [
              {
                text: 'Realizar uma reavaliação fonológica de fala completa para comprovar a eliminação dos processos fonológicos ativos e planejar a alta da fonoterapia.',
                feedback: 'Excelente conduta. A reavaliação documenta cientificamente a eficácia do tratamento e a alta com acompanhamento posterior garante a alta responsável.',
                nextSceneId: 'sofia-success',
                isRecommended: true
              },
              {
                text: 'Manter a terapia por mais 6 meses preventivamente para garantir que ela nunca mais cometa nenhum erro na idade escolar.',
                feedback: 'Manter a terapia sem justificativa clínica gera custos desnecessários e dependência no tratamento.',
                nextSceneId: 'sofia-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'sofia-success',
            title: 'Alta Conquistada',
            text: 'Parabéns! Ao focar no diagnóstico fonológico e intervir com o modelo de contrastes mínimos, você reorganizou o sistema fonológico de Sofia com rapidez e precisão, dando alta clínica a uma fala perfeitamente inteligível.',
            choices: []
          },
          {
            id: 'sofia-end-fail',
            title: 'Fim de Simulação — Conduta Inadequada',
            text: 'A terapia focou em exercícios motores inadequados ou se estendeu sem critérios objetivos de alta.',
            choices: []
          }
        ]
      },
      {
        id: 'bc-m1-6',
        title: 'Caso de Gabriel (Dislexia do Desenvolvimento)',
        description: 'Gabriel, 8 anos (3º ano), apresenta leitura lenta, silabada, com muitos erros de decodificação e recusa em ler na escola, apesar de excelente desempenho e vocabulário oral.',
        startSceneId: 'gabriel-s1',
        scenes: [
          {
            id: 'gabriel-s1',
            title: '1. Rastreio de Processamento Fonológico',
            text: 'Gabriel é encaminhado com suspeita de dificuldades de leitura. Ao avaliar a leitura, você nota que ele falha muito na decodificação de pseudopalavras (rota fonológica), mas tem melhor desempenho em palavras familiares. Qual habilidade de base da linguagem oral você deve investigar?',
            choices: [
              {
                text: 'O processamento fonológico oral: consciência fonológica (principalmente consciência fonêmica), acesso lexical rápido (nomeação rápida) e memória de trabalho fonológica.',
                feedback: 'Excelente. A dislexia é um transtorno do neurodesenvolvimento de base linguística. O déficit no processamento fonológico é o principal marcador preditivo e causador de dificuldades de decodificação ortográfica.',
                nextSceneId: 'gabriel-s2',
                isRecommended: true
              },
              {
                text: 'O processamento visual periférico aplicando testes de rastreamento ocular e indicando o uso de lentes coloridas filtrantes.',
                feedback: 'Incorreto. A dislexia não é um problema visual primário de rastreamento ocular. O uso de lentes coloridas (lentes de Irlen) não possui comprovação científica sólida na reabilitação da leitura e escrita.',
                nextSceneId: 'gabriel-visual-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'gabriel-visual-fail',
            title: 'Redirecionando a Avaliação',
            text: 'Os testes visuais deram normais, mas a leitura lenta e silabada persiste. Qual teste de linguagem você prioriza agora?',
            choices: [
              {
                text: 'Aplicar testes de consciência fonológica e repetição de pseudopalavras.',
                feedback: 'Muito bem. A consciência fonológica e a memória fonológica de trabalho são as chaves para mapear as habilidades de processamento fonológico de base.',
                nextSceneId: 'gabriel-s2',
                isRecommended: true
              },
              {
                text: 'Aplicar testes de coordenação motora grossa e equilíbrio em prancha.',
                feedback: 'Dificuldades motoras gerais não explicam a falha específica na rota fonológica da decodificação de leitura.',
                nextSceneId: 'gabriel-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'gabriel-s2',
            title: '2. Escolha do Método de Intervenção',
            text: 'Gabriel apresenta dificuldades acentuadas em consciência fonêmica e memória de trabalho verbal, confirmando o perfil de Dislexia do Desenvolvimento. Qual abordagem de intervenção para alfabetização/leitura é recomendada pela literatura de alta evidência?',
            choices: [
              {
                text: 'Método fônico sistemático, associando instrução explícita de correspondência grafema-fonema de forma multissensorial (visuo-auditivo-tátil-cinestésica).',
                feedback: 'Correto. A instrução fônica explícita e estruturada é a abordagem de maior eficácia científica para reabilitar dislexia, ajudando a criar e consolidar a via de decodificação fonológica.',
                nextSceneId: 'gabriel-s3',
                isRecommended: true
              },
              {
                text: 'Método global (olhar a palavra inteira e tentar adivinhar pelo contexto visual ou imagens ao redor do texto).',
                feedback: 'O método global força o uso de adivinhação sem fixar a rota fonológica. Isso acentua as dificuldades e frustrações do paciente disléxico a longo prazo.',
                nextSceneId: 'gabriel-global-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'gabriel-global-fail',
            title: 'Instrução Explícita de Grafema-Fonema',
            text: 'Gabriel continua errando na leitura de palavras de baixa frequência e travando na escrita de novas palavras. Como intervir?',
            choices: [
              {
                text: 'Iniciar treino sistemático de segmentação de fonemas associado à escrita simultânea das letras correspondentes (fusão e exclusão fonêmica).',
                feedback: 'Excelente. A associação direta do treino de consciência fonêmica com letras (grafemas) acelera a transferência das habilidades para a escrita real.',
                nextSceneId: 'gabriel-s3',
                isRecommended: true
              },
              {
                text: 'Dobrar o tempo de leitura passiva de livros escolares durante a sessão sem focar nas correspondências grafofônicas.',
                feedback: 'A leitura passiva sem instrução explícita e segmentada não desenvolve a rota fonológica deficitária no disléxico.',
                nextSceneId: 'gabriel-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'gabriel-s3',
            title: '3. Adaptações e Acessibilidade Escolar',
            text: 'Além da clínica, a reabilitação de um paciente com dislexia requer intervenção na rotina escolar para reduzir a sobrecarga emocional. Qual orientação você envia para a coordenação pedagógica da escola de Gabriel?',
            choices: [
              {
                text: 'Fornecer tempo adicional nas avaliações escritas, ler os enunciados de provas em voz alta para ele (ledor), evitar a leitura em voz alta sob pressão diante dos colegas e diminuir a penalização por erros puramente ortográficos na correção das disciplinas.',
                feedback: 'Excelente. Essas adaptações de acessibilidade garantem a equidade pedagógica, permitindo que Gabriel demonstre seu conhecimento conceitual sem ser penalizado por suas dificuldades neurológicas de processamento de decodificação.',
                nextSceneId: 'gabriel-success',
                isRecommended: true
              },
              {
                text: 'Recomendar que a escola retenha Gabriel de ano letivo sucessivamente até que ele consiga ler na mesma velocidade mecânica que a média da turma.',
                feedback: 'Reprovar o aluno disléxico por velocidade de leitura não reabilita o distúrbio e gera sérios danos psicológicos e emocionais ao estudante.',
                nextSceneId: 'gabriel-end-fail',
                isRecommended: false
              }
            ]
          },
          {
            id: 'gabriel-success',
            title: 'Gabriel Lendo com Confiança',
            text: 'Parabéns! Com o mapeamento fonológico correto, reabilitação sistemática baseada no método fônico multissensorial e suporte de acessibilidade escolar, Gabriel superou o medo de ler e conquistou excelente autonomia acadêmica.',
            choices: []
          },
          {
            id: 'gabriel-end-fail',
            title: 'Fim de Simulação — Conduta Inadequada',
            text: 'A condução falhou no tratamento pedagógico ou não forneceu as adaptações necessárias para preservar o bem-estar escolar do paciente.',
            choices: []
          }
        ]
      }
    ],
    transcriptActivities: [
      {
        id: 'ta-m1-1',
        title: 'Análise de Desvios Fonológicos de Júlia',
        instruction: 'Leia a transcrição da fala de Júlia (5 anos e 2 meses) e clique nas palavras que apresentam desvios fonológicos (erros na pronúncia) a serem analisados.',
        tokens: [
          { id: 't-1', text: 'Eu', isInteractive: false, correctAnswer: false },
          { id: 't-2', text: 'tenho', isInteractive: false, correctAnswer: false },
          { id: 't-3', text: 'um', isInteractive: false, correctAnswer: false },
          { id: 't-4', text: 'gato', isInteractive: false, correctAnswer: false },
          { id: 't-5', text: 'peto', isInteractive: true, correctAnswer: true, errorType: 'Simplificação de Encontro Consonantal', feedback: 'Júlia produziu "peto" em vez de "preta/preto", omitindo a consoante líquida /r/ no encontro consonantal /pr/.' },
          { id: 't-6', text: 'que', isInteractive: false, correctAnswer: false },
          { id: 't-7', text: 'gosta', isInteractive: false, correctAnswer: false },
          { id: 't-8', text: 'de', isInteractive: false, correctAnswer: false },
          { id: 't-9', text: 'comer', isInteractive: false, correctAnswer: false },
          { id: 't-10', text: 'pexe', isInteractive: true, correctAnswer: true, errorType: 'Monotongação', feedback: 'Júlia reduziu o ditongo "ei" para a vogal simples "e" ("pexe" em vez de "peixe").' },
          { id: 't-11', text: 'e', isInteractive: false, correctAnswer: false },
          { id: 't-12', text: 'brincar', isInteractive: false, correctAnswer: false },
          { id: 't-13', text: 'no', isInteractive: false, correctAnswer: false },
          { id: 't-14', text: 'dadin.', isInteractive: true, correctAnswer: true, errorType: 'Plosivização', feedback: 'Júlia substituiu a fricativa palatal sonora /ʒ/ de "jardim" pela plosiva alveolar sonora /d/ ("dadin"), caracterizando uma Plosivização, além de simplificar a sílaba final.' }
        ],
        explanation: 'A análise de desvios fonológicos em crianças acima de 4 anos exige atenção aos processos fonológicos ativos. Identificar se os desvios são ensurdecimentos ou plosivizações é crítico, pois esses desvios sistemáticos ou assistemáticos na fala tendem a repercutir diretamente na escrita alfabética na fase de alfabetização.'
      },
      {
        id: 'ta-m1-2',
        title: 'Análise de Desvios Fonológicos de Arthur',
        instruction: 'Leia a transcrição da fala de Arthur (4 anos e 2 meses) e clique nas palavras que apresentam desvios fonológicos (erros na pronúncia) a serem analisados.',
        tokens: [
          { id: 'ta-1', text: 'O', isInteractive: false, correctAnswer: false },
          { id: 'ta-2', text: 'tapo', isInteractive: true, correctAnswer: true, errorType: 'Plosivização', feedback: 'Arthur produziu "tapo" em vez de "sapo", substituindo a fricativa alveolar surda /s/ pela plosiva alveolar surda /t/.' },
          { id: 'ta-3', text: 'gosta', isInteractive: false, correctAnswer: false },
          { id: 'ta-4', text: 'de', isInteractive: false, correctAnswer: false },
          { id: 'ta-5', text: 'comer', isInteractive: false, correctAnswer: false },
          { id: 'ta-6', text: 'moca', isInteractive: true, correctAnswer: true, errorType: 'Redução de Coda Consonantal', feedback: 'Arthur omitiu o fonema /s/ em coda silábica (final de sílaba), produzindo "moca" em vez de "mosca".' },
          { id: 'ta-7', text: 'na', isInteractive: false, correctAnswer: false },
          { id: 'ta-8', text: 'feta', isInteractive: true, correctAnswer: true, errorType: 'Redução de Coda Consonantal', feedback: 'Arthur omitiu o fonema /s/ em coda silábica, produzindo "feta" em vez de "festa".' },
          { id: 'ta-9', text: 'de', isInteractive: false, correctAnswer: false },
          { id: 'ta-10', text: 'aniversário.', isInteractive: false, correctAnswer: false }
        ],
        explanation: 'O processo de plosivização (substituição de fricativas por plosivas) e a redução de coda silábica (omissão de sibilantes como /s/ em fim de sílaba) são desvios fonológicos comuns que afetam a inteligibilidade da fala. A identificação precoce ajuda a traçar metas terapêuticas específicas para a aquisição da classe das fricativas e estruturação silábica.'
      }
    ],
    decisionExercises: [
      {
        id: 'dec-m1-1',
        situation: 'Uma criança de 7 anos apresenta dificuldade para aprender a ler. Os pais relatam que ela confunde letras, lê muito devagar e evita atividades escritas. A avaliação informal revela boa compreensão oral e boa pragmática. Qual seria a prioridade avaliativa?',
        options: [
          {
            id: 'opt-a',
            text: 'Avaliar diretamente a escrita espontânea e encerrar a avaliação.',
            consequence: 'Dados insuficientes para hipótese diagnóstica.',
            explanation: 'A escrita espontânea fornece dados importantes, mas isolada não permite distinguir entre dislexia, baixa instrução ou outros transtornos.',
            isRecommended: false,
          },
          {
            id: 'opt-b',
            text: 'Aplicar testes de consciência fonológica, leitura de palavras e pseudopalavras e avaliar a memória de trabalho verbal.',
            consequence: 'Perfil diagnóstico robusto para hipótese de dislexia.',
            explanation: 'Essa bateria permite mapear o substituto fonológico, a integridade das duas rotas de leitura e a capacidade de retenção verbal — eixos centrais para o diagnóstico diferencial de dislexia.',
            isRecommended: true,
          },
          {
            id: 'opt-c',
            text: 'Encaminhar diretamente para neurologia sem avaliar.',
            consequence: 'Encaminhamento precoce sem dados clínicos suficientes.',
            explanation: 'A avaliação fonoaudiológica deve preceder ou acompanhar encaminhamentos médicos, fornecendo dados objetivos para a equipe interdisciplinar.',
            isRecommended: false,
          },
        ],
      },
    ],
    fictionalCases: [
      {
        id: 'case-m1-1',
        title: 'Perfil de leitura — caso fictício',
        disclaimer: 'Este caso é inteiramente fictício e destina-se exclusivamente a fins educacionais. Não representa nenhum paciente real.',
        description: 'L.M., 8 anos, foi encaminhada por queixa de dificuldade de leitura. Apresenta boa compreensão oral, vocabulário expressivo adequado para a idade, interação social preservada e boa pragmática. Na avaliação formal, lê palavras regulares com precisão, mas comete erros sistemáticos na leitura de pseudopalavras (taxas de acerto de 40%) e de palavras irregulares (acerto de 55%). A professora relata leitura "silabada e lenta".',
        questions: [
          {
            id: 'q-case-1',
            stem: 'Com base no perfil descrito, qual é a hipótese diagnóstica mais consistente com os dados?',
            alternatives: [
              { id: 'alt-a', text: 'Transtorno do Desenvolvimento da Linguagem (TDL)', isCorrect: false, feedback: 'O TDL envolve déficit persistente nas habilidades linguísticas orais. L.M. apresenta linguagem oral preservada, o que torna o TDL menos provável como diagnóstico principal.' },
              { id: 'alt-b', text: 'Dislexia de desenvolvimento com déficit nas duas rotas de leitura', isCorrect: true, feedback: 'Correto. O baixo desempenho em pseudopalavras indica comprometimento da rota fonológica; o baixo desempenho em palavras irregulares indica comprometimento da rota lexical. Com linguagem oral preservada, o perfil é consistente com dislexia.' },
              { id: 'alt-c', text: 'Dificuldade escolar por baixa instrução', isCorrect: false, feedback: 'Dificuldade por baixa instrução tende a responder mais rapidamente à intervenção pedagógica e não apresenta o padrão duplo de déficit fonológico e lexical descrito.' },
              { id: 'alt-d', text: 'Transtorno do Espectro Autista (TEA)', isCorrect: false, feedback: 'O caso descreve interação social e pragmática preservadas, o que contradiz os critérios centrais do TEA.' },
            ],
            correctAlternativeId: 'alt-b',
            explanation: 'O padrão de baixo desempenho em pseudopalavras (rota fonológica) e em palavras irregulares (rota lexical), com linguagem oral preservada, é característico da dislexia de desenvolvimento. A avaliação da consciência fonológica e da memória de trabalho verbal complementaria a hipótese diagnóstica.',
          },
        ],
      },
    ],
  },

  review: {
    flashcards: [
      { id: 'fc-m1-1', front: 'O que avalia a dimensão "Forma" no modelo de Bloom e Lahey?', back: 'Fonologia (organização dos sons) e Morfossintaxe (estrutura gramatical das frases).', tags: ['bloom-lahey', 'fonologia', 'morfossintaxe'] },
      { id: 'fc-m1-2', front: 'Para que serve a leitura de pseudopalavras na avaliação clínica?', back: 'Testar a rota fonológica (conversão grafema-fonema) sem apoio do léxico mental, pois pseudopalavras não existem como palavras conhecidas.', tags: ['dupla-rota', 'fonologia'] },
      { id: 'fc-m1-3', front: 'O que é Consciência Fonológica?', back: 'Habilidade metalinguística de refletir e manipular os segmentos sonoros da fala (sílabas, rimas, fonemas). É o principal preditor de sucesso na alfabetização.', tags: ['consciencia-fonologica', 'leitura'] },
      { id: 'fc-m1-4', front: 'Qual dimensão do modelo de Bloom e Lahey é o pilar do diagnóstico diferencial entre TDL e TEA?', back: 'Uso (Pragmática) — avalia a funcionalidade sociocomunicativa, preservada no TDL e comprometida no TEA.', tags: ['bloom-lahey', 'pragmatica', 'TDL', 'TEA'] },
      { id: 'fc-m1-5', front: 'Defina "contínuo oral-escrito".', back: 'Paradigma que estabelece que a linguagem escrita depende neurobiologicamente da integridade da linguagem oral; déficits orais tendem a repercutir no aprendizado da leitura e escrita.', tags: ['continuo-oral-escrito'] },
    ],
    finalSynthesis:
      'A avaliação fonoaudiológica das linguagens oral e escrita é um processo multidimensional que integra os modelos de Bloom e Lahey (Forma, Conteúdo e Uso) com os modelos de processamento da leitura (Dupla Rota). Consciência Fonológica e Memória de Trabalho Verbal são os principais preditores do sucesso na decodificação. Uma avaliação clínica rigorosa combina instrumentos formais e informais, preserva a validade ecológica e evita simplificações diagnósticas.',
  },

  references: [
    {
      id: 'ref-bloom1978',
      authors: 'BLOOM, L.; LAHEY, M.',
      title: 'Language Development and Language Disorders',
      source: 'New York: Wiley',
      year: 1978,
      usedIn: ['learn.summary', 'learn.essentialConcepts'],
    },
    {
      id: 'ref-coltheart2001',
      authors: 'COLTHEART, M. et al.',
      title: 'DRC: A dual route cascaded model of visual word recognition and reading aloud',
      source: 'Psychological Review, 108(1), 204–256',
      year: 2001,
      doi: '10.1037/0033-295X.108.1.204',
      usedIn: ['learn.summary', 'apply.questions'],
    },
    {
      id: 'ref-snowling2013',
      authors: 'SNOWLING, M. J.',
      title: 'Early identification and interventions for dyslexia: a contemporary view',
      source: 'Journal of Research in Special Educational Needs, 13(1), 7–14',
      year: 2013,
      doi: '10.1111/j.1471-3802.2012.01262.x',
      usedIn: ['learn.evidence', 'apply.questions'],
    },
    {
      id: 'ref-navas2014',
      authors: 'NAVAS, A. L. G. P.; PINTO, J. C. B. R.; DELLISA, P. R. R.',
      title: 'Avaliação da leitura e da escrita',
      source: 'In: SBFa. Tratado das Especialidades em Fonoaudiologia. São Paulo: Roca',
      year: 2014,
      usedIn: ['learn.summary', 'learn.evidence'],
    },
  ],
}
