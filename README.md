# FonoLab

Plataforma modular de aprendizagem em Fonoaudiologia, atualmente concentrada
na área de Linguagem. O projeto combina conteúdo fundamentado, atividades
aplicadas, feedback formativo e revisão espaçada em um percurso curricular
progressivo.

## Objetivo

O FonoLab foi criado para apoiar o estudo estruturado de Fonoaudiologia. Cada
módulo relaciona fundamentos conceituais, evidências, limitações, situações
simuladas e estratégias de revisão.

A plataforma é um recurso educacional. Ela não substitui formação universitária,
supervisão clínica, avaliação individual, diagnóstico, prescrição ou orientação
de conselhos profissionais.

## Metodologia

Os módulos seguem o ciclo **Aprender–Aplicar–Revisar**:

1. **Aprender:** síntese, ideia central, conceitos essenciais, evidências,
   limitações, mapa conceitual e glossário.
2. **Aplicar:** questões com feedback, associações, exercícios de decisão e
   casos fictícios identificados como pedagógicos.
3. **Revisar:** flashcards, síntese integradora e revisão espaçada.

A metodologia completa, os critérios de qualidade e as regras de progressão
estão documentados em [docs/METODOLOGIA.md](docs/METODOLOGIA.md).

## Arquitetura metodológica

O projeto utiliza uma generalização controlada em três camadas:

```text
Núcleo pedagógico
└── contratos universais de módulos, metadados e referências

Extensão para saúde
└── evidências, limitações, segurança e casos simulados

FonoLab
└── identidade, currículo e conteúdos de Fonoaudiologia
```

Os arquivos principais estão em:

```text
src/methodology/core/       Núcleo reutilizável
src/methodology/health/     Regras específicas para educação em saúde
src/methodology/fonolab/    Perfil especializado do FonoLab
src/data/methodology.ts     Plano curricular e critérios metodológicos
```

Essa separação permite reutilizar o mecanismo pedagógico sem reduzir a
especificidade clínica do FonoLab.

## Currículo

O plano curricular da área de Linguagem possui oito unidades:

1. Fundamentos, avaliação e diagnóstico da linguagem;
2. Desenvolvimento fonológico e alterações de fala;
3. Desenvolvimento e transtornos da linguagem oral;
4. Leitura, escrita e aprendizagem;
5. Linguagem em condições do desenvolvimento;
6. Neurolinguística, afasias e comunicação alternativa;
7. Linguagem, subjetividade, corpo e práticas terapêuticas;
8. Fluência e gagueira.

As unidades já disponíveis são registradas como `published`. As demais
permanecem no plano como `planned`, evitando que etapas ainda não implementadas
sejam confundidas com lacunas acidentais.

## Tecnologias

- React 18;
- TypeScript;
- Vite;
- React Router;
- Zustand;
- Zod;
- Tailwind CSS;
- Vitest e Testing Library;
- ESLint.

## Requisitos

- Node.js 20 ou superior;
- npm 10 ou superior.

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/ctorres4564/fonoLab.git
cd fonoLab
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação.

## Comandos

```bash
npm run dev        # inicia o servidor de desenvolvimento
npm run typecheck  # verifica os tipos TypeScript
npm run lint       # executa o ESLint
npm test           # executa todos os testes
npm run test:watch # executa testes em modo de observação
npm run build      # gera o build de produção
npm run preview    # visualiza localmente o build
```

Antes de publicar qualquer alteração, execute:

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Estrutura do projeto

```text
src/
├── components/          Componentes de Aprender, Aplicar e Revisar
├── data/
│   ├── areas/           Unidades e módulos de conteúdo
│   ├── methodology.ts   Plano metodológico e curricular
│   └── platform.ts      Configuração principal da plataforma
├── features/progress/   Estado de progresso do estudante
├── lib/
│   ├── progress/        Recomendações e revisão espaçada
│   └── validation/      Contratos e validações de qualidade
├── methodology/
│   ├── core/            Núcleo pedagógico genérico
│   ├── health/          Extensão para saúde
│   └── fonolab/         Perfil do produto
├── pages/               Páginas e navegação
├── services/            Carregamento e acesso ao conteúdo
├── test/                Testes unitários e de integridade
└── types/               Tipos de conteúdo, plataforma e metodologia
```

## Criação de módulos

Módulos do FonoLab devem ser definidos com o construtor especializado:

```ts
import { defineFonoLabModule } from '@/methodology/fonolab'

export const exemplo = defineFonoLabModule({
  id: 'mod-exemplo',
  slug: 'exemplo',
  title: 'Módulo de exemplo',
  description: 'Descrição do conteúdo.',
  order: 1,
  learningObjective: 'Resultado de aprendizagem observável e contextualizado.',
  prerequisiteKnowledge: ['Conhecimento prévio necessário'],
  estimatedTimeMinutes: 120,
  difficulty: 'introductory',
  status: 'draft',
  learn: {
    // Conteúdo da fase Aprender
  },
  apply: {
    // Atividades da fase Aplicar
  },
  review: {
    // Recursos da fase Revisar
  },
  references: [
    // Referências e indicação de uso
  ],
})
```

O módulo também deve ser registrado na unidade correspondente e em
`src/services/moduleLoaders.ts`.

## Garantia de qualidade

As validações automatizadas verificam, entre outros aspectos:

- compatibilidade entre metadados, loaders e módulos;
- sequência de unidades e módulos;
- presença de pré-requisitos;
- estrutura Aprender–Aplicar–Revisar;
- alternativas corretas e feedback;
- decisões com uma recomendação principal;
- integridade de mapas conceituais;
- navegação de casos ramificados;
- referências e indicação de uso;
- distinção entre unidades publicadas e planejadas.

## Estado atual

- versão: `1.0.0`;
- área implementada: Linguagem;
- metodologia: ciclo Aprender–Aplicar–Revisar;
- arquitetura: núcleo pedagógico + extensão para saúde + perfil FonoLab.

## Contribuição

Ao contribuir:

1. preserve a especificidade clínica e os limites educacionais;
2. não apresente casos fictícios como orientação individual;
3. indique fontes e limitações para afirmações clínicas;
4. mantenha objetivos, atividades e revisão alinhados;
5. execute toda a validação local antes do commit.

## Licença

O repositório ainda não declara uma licença de uso. Até que uma licença seja
adicionada, não presuma autorização para copiar, redistribuir ou reutilizar o
conteúdo fora das permissões concedidas pelo responsável pelo projeto.
