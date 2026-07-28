# Relatório de Status do Projeto — FonoLab

Este documento descreve o estado atual de desenvolvimento da plataforma fonoLab, o mapeamento de conteúdos criados e as pendências de implementação identificadas para as próximas etapas do projeto.

---

## 1. Visão Geral do Estado do Projeto

A plataforma fonoLab possui uma arquitetura modular por Área de Estudo, Unidade e Módulo. Recentemente, a plataforma passou por uma otimização estrutural de carregamento assíncrono (carregamento sob demanda) para dados clínicos, resultando em:
* **Tamanho do chunk inicial de produção:** 309,50 kB (dentro do limite recomendado pelo Rollup de 500 kB).
* **Validações automatizadas:** 337/337 testes passando com sucesso.
* **Compilação e Linter:** 100% limpos, sem erros ou warnings.

---

## 2. Mapa de Cobertura de Conteúdo (Área Linguagem)

Atualmente, o projeto possui apenas a **Área Linguagem** (`area-linguagem`) cadastrada. A sequência pedagógica curricular prevê um total de **8 unidades**, das quais **4 estão criadas** e integradas.

Abaixo está o detalhamento de status por unidade e módulo:

| Unidade / Módulo | Slug | Status | Conteúdo Clínico |
| :--- | :--- | :---: | :--- |
| **Unidade 1: Fundamentos, Avaliação e Diagnóstico** | `fundamentos-avaliacao-diagnostico` | **Criada** | **Completo** |
| ├─ Módulo 1: Avaliação das linguagens oral e escrita | `avaliacao-linguagens-oral-escrita` | `published` | Completo (15 atividades) |
| ├─ Módulo 2: Organização do processo diagnóstico | `processo-diagnostico-linguagem` | `published` | Completo (10 atividades) |
| ├─ Módulo 3: Relação avaliação, diagnóstico e plano | `planejamento-terapeutico-linguagem` | `published` | Completo (10 atividades) |
| **Unidade 2: Desenvolvimento fonológico e alterações de fala** | `desenvolvimento-fonologico-alteracoes-fala` | **Criada** | **Completo** |
| ├─ Módulo 1: Desenvolvimento fonológico | `desenvolvimento-fonologico` | `published` | Completo (35 atividades) |
| ├─ Módulo 2: Alterações fonológicas | `alteracoes-fonologicas` | `published` | Completo (41 atividades) |
| ├─ Módulo 3: Princípios de intervenção fonológica | `principios-intervencao-fonologica` | `published` | Completo (43 atividades) |
| ├─ Módulo 4: Planejamento terapêutico nos transtornos | `planejamento-terapeutico-transtornos-fonologicos`| `published` | Completo (43 atividades) |
| **Unidade 3: Desenvolvimento e Transtornos da Linguagem Oral** | `desenvolvimento-transtornos-linguagem-oral` | **Criada** | **Parcial (Pendente M4)** |
| ├─ Módulo 1: Características dos transtornos | `caracteristicas-transtornos-especificos-linguagem`| `published` | Completo (43 atividades) |
| ├─ Módulo 2: Aspectos linguísticos dos transtornos | `aspectos-linguisticos-transtornos-linguagem` | `published` | Completo (43 atividades) |
| ├─ Módulo 3: Bases neurobiológicas dos transtornos | `bases-neurobiologicas-transtornos-linguagem` | `published` | Completo (45 atividades) |
| ├─ Módulo 4: Avaliação e intervenção nos transtornos | `avaliacao-intervencao-transtornos-linguagem` | `draft` | **Pendente** (0 atividades / placeholders) |
| **Unidade 4: [Pendente de Mapeamento/Criação]** | - | **Não Criada** | Pendente |
| **Unidade 5: [Pendente de Mapeamento/Criação]** | - | **Não Criada** | Pendente |
| **Unidade 6: Neurolinguística, Afasias e CAA** | `neurolinguistica-comunicacao-alternativa` | **Criada** | **Completo (M4 e M5)** |
| ├─ Módulo 4: Afasias e neurolinguística no adulto | `afasias-neurolinguistica-adulto` | `published` | Completo (43 atividades) |
| ├─ Módulo 5: Comunicação Aumentativa e Alternativa | `comunicacao-alternativa-ampliada` | `published` | Completo (43 atividades) |
| **Unidade 7: [Pendente de Mapeamento/Criação]** | - | **Não Criada** | Pendente |
| **Unidade 8: [Pendente de Mapeamento/Criação]** | - | **Não Criada** | Pendente |

---

## 3. O que Falta Implementar no Projeto (Backlog)

### A. Conteúdo Clínico do Módulo 4 da Unidade 3 (Retomada Imediata)
O arquivo `src/data/areas/linguagem/units/unidade-03/modules/avaliacao-intervencao.ts` possui apenas placeholders de "Conteúdo em elaboração.". Falta escrever:
1. **Aprender (`learn`):**
   - Resumo teórico clínico autoral (`summary`).
   - Ideia principal (`mainIdea`) e Explicação em linguagem simples (`simpleExplanation`).
   - Conceitos essenciais (`essentialConcepts`), evidências científicas (`evidence`) e limitações (`limitations`).
   - Mapa conceitual completo (`conceptMap`) e glossário fonoaudiológico (`glossary`).
2. **Aplicar (`apply`):**
   - Banco de questões objetivas de múltipla escolha (`questions`).
   - Exercícios de associação (`associations`) e tomada de decisão clínica (`decisionExercises`).
   - Casos ficcionais complexos (`fictionalCases`).
3. **Revisar (`review`):**
   - Banco de flashcards de memorização ativa (`flashcards`).
   - Síntese final integradora (`finalSynthesis`).
4. **Referências bibliográficas** (`references`).
5. **Atualização de Metadados:**
   - Mudar status de `draft` para `published` no arquivo do módulo.
   - Atualizar a propriedade `totalActivities` no metadado da Unidade 3 (`src/data/areas/linguagem/units/unidade-03/index.ts`).

### B. Criação das Unidades Curriculares Faltantes
Devem ser criados os arquivos e pastas para as **Unidades 4, 5, 7 e 8**:
- Criar a pasta da unidade sob `src/data/areas/linguagem/units/unidade-XX/`.
- Criar a pasta de módulos dentro da unidade e declarar seus arquivos de conteúdo clínico.
- Cadastrar as unidades no array de unidades da Área Linguagem (`src/data/areas/linguagem/index.ts`).

### C. Mapeamento de Módulos da Unidade 6
A Unidade 6 atualmente inicia no **Módulo 4** e **Módulo 5**. Falta definir ou implementar os **Módulos 1, 2 e 3** correspondentes a essa unidade (ou reajustar a ordenação e os IDs pedagógicos caso a numeração tenha sido adaptada temporariamente).

---

## 4. Como Manter e Inserir Novos Conteúdos Clínicos

Ao criar um novo módulo clínico (ex: `moduloNovo`), siga estes passos para manter a otimização de bundle e a integridade de dados ativa:

1. **Criar o arquivo físico de conteúdo clínico:**
   Crie em `units/unidade-XX/modules/modulo-novo.ts` do tipo `LearningModule` contendo o conteúdo completo pesado.
2. **Declarar metadados leves na unidade:**
   Em `units/unidade-XX/index.ts`, declare o objeto de metadados correspondente diretamente no array `modules` da unidade (incluindo `totalActivities` e outros dados leves). Não importe o arquivo de conteúdo clínico aqui!
3. **Registrar no dicionário de loaders:**
   Adicione o slug do módulo no arquivo `src/services/moduleLoaders.ts` fazendo o import assíncrono:
   ```ts
   'slug-do-modulo': async () => {
     const mod = await import('../data/areas/linguagem/units/unidade-XX/modules/modulo-novo')
     return mod.moduloNovo
   }
   ```
4. **Executar Verificações:**
   Rode os testes e compilador:
   ```bash
   npm run test
   npm run typecheck
   npm run lint
   npm run build
   ```
   Os novos testes de integridade em `src/test/integrity.test.ts` acusarão automaticamente qualquer divergência de digitação, contagem de atividades ou arquivos de conteúdo clínico órfãos/esquecidos.
