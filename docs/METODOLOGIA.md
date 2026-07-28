# Metodologia pedagógica do FonoLab

## Finalidade

O FonoLab organiza conteúdos de Fonoaudiologia em um percurso curricular progressivo e verificável. A plataforma não substitui formação universitária, supervisão clínica, avaliação individual ou diretrizes profissionais. Seu objetivo é apoiar estudo estruturado, raciocínio clínico e revisão ativa.

## Unidade de organização

A hierarquia oficial é:

1. **Área:** campo amplo de formação.
2. **Unidade:** conjunto de competências relacionadas e posicionado no percurso curricular.
3. **Módulo:** experiência completa de aprendizagem com objetivo, pré-requisitos e três fases obrigatórias.
4. **Atividade:** elemento formativo usado para aprender, aplicar ou revisar.

“Módulo”, “tema” e “tópico” não são sinônimos. Um módulo sempre contém o ciclo completo; temas e tópicos são partes internas.

## Ciclo Aprender–Aplicar–Revisar

### Aprender

Constrói o modelo conceitual do estudante. Deve apresentar síntese, ideia central, conceitos essenciais, evidências, limitações, explicação acessível, mapa conceitual e glossário.

### Aplicar

Promove transferência para situações novas. Deve incluir questões com feedback, associações, exercícios de decisão e casos fictícios claramente identificados. A atividade avalia raciocínio, não apenas memorização.

### Revisar

Consolida a aprendizagem por recuperação ativa. Deve conter flashcards, síntese integradora e integração com o sistema de revisão espaçada.

## Progressão curricular

O percurso avança por quatro estágios:

1. fundamentos;
2. desenvolvimento e condições clínicas;
3. raciocínio clínico;
4. integração ao longo da vida.

As oito unidades permanecem registradas no plano, mesmo quando ainda não foram implementadas. Dessa forma, a ausência temporária das unidades 4, 5, 7 e 8 é tratada como estado de desenvolvimento, e não como lacuna inexplicada.

## Alinhamento construtivo

Cada módulo deve manter correspondência entre:

- objetivo de aprendizagem;
- conceitos e evidências apresentados;
- atividades utilizadas;
- feedback fornecido;
- síntese e revisão;
- referências bibliográficas.

Metadados e conteúdo clínico completo devem usar o mesmo identificador, título, ordem, objetivo, dificuldade e estado editorial.

## Avaliação

- **Diagnóstica:** conhecimentos prévios orientam o ponto de entrada.
- **Formativa:** atividades fornecem feedback explicativo imediato.
- **Integradora:** casos e decisões articulam conhecimento, evidência, contexto e consequência.
- **Retenção:** flashcards e revisão espaçada retomam os conceitos após a conclusão.

A conclusão de um módulo não equivale a competência profissional autônoma.

## Evidência e segurança

Afirmações clínicas devem explicitar fonte, força da evidência, implicação e limitações. Casos simulados devem possuir aviso pedagógico. Variações linguísticas e socioculturais não devem ser patologizadas. Nenhuma atividade pode apresentar uma única técnica como universal ou produzir diagnóstico individual.

## Garantia de qualidade

A metodologia é protegida por validações automatizadas que verificam:

- sequência e unicidade de unidades e módulos;
- registro das unidades publicadas e planejadas;
- presença de pré-requisitos em módulos não introdutórios;
- especificidade mínima dos objetivos;
- integridade das fases Aprender–Aplicar–Revisar;
- consistência entre metadados, loaders e módulos;
- estrutura de questões, decisões, mapas conceituais e referências.

Toda mudança curricular deve passar por TypeScript, ESLint, testes automatizados e build de produção.

## Arquitetura reutilizável

A metodologia é implementada em três camadas:

1. `methodology/core`: contratos universais de módulo, metadados, ciclo e referências;
2. `methodology/health`: extensão para evidência, segurança e casos simulados em saúde;
3. `methodology/fonolab`: perfil do produto e criação dos módulos de Fonoaudiologia.

O núcleo não conhece a Fonoaudiologia. A extensão de saúde acrescenta as
salvaguardas necessárias, e o FonoLab fornece identidade, área e conteúdo. Essa
separação permite reutilização sem reduzir a especificidade clínica do projeto.
