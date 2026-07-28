# Sistema de Design & Paleta de Cores (FonoLab)

Este documento descreve a arquitetura, estrutura visual e fluxo de aplicação do design system e da nova paleta de cores profissional e desaturada da plataforma **FonoLab**.

---

## 1. Diretrizes de Cores e Tokens do Tailwind

A paleta de cores principal é projetada para garantir alto contraste, sobriedade profissional e foco prolongado sem causar fadiga ocular. O mapeamento do Tailwind CSS (`tailwind.config.js`) e do CSS Global (`src/index.css`) está estruturado da seguinte forma:

### Cores de Base e Fundo
* **Geral**: `bg-slate-50` (corpo geral da página) e `bg-white` (fundo de cards, modais e containers).
* **Textos**:
  * `text-slate-800` ou `text-slate-700` para títulos e parágrafos de leitura.
  * `text-slate-500` ou `text-slate-400` para metadados, rodapés e descrições secundárias.
* **Bordas**: `border-slate-200` para bordas sutis de separação.

### Cor Primária e Identidade Visual (Índigo Profissional)
Representa a sobriedade científica do FonoLab e é a cor de maior peso visual:
* **Cabeçalho (Header)**: `bg-indigo-700` (`bg-primary-700`).
* **Subtítulos no Cabeçalho**: `text-indigo-200` (`text-primary-200`).
* **Abas/Navegação Ativa**: `bg-indigo-800` (`bg-primary-800`) com texto em branco puro.
* **Abas/Navegação Inativa**: `bg-indigo-600/60` com hover em `bg-indigo-600` e texto em `text-indigo-200`.

### Cores de Feedback (Muted)
* **Sucesso / Acerto**: Verde Esmeralda (`emerald-50` para fundo, `emerald-100` para bordas, `emerald-600` ou `emerald-700` para texto e ícones). Utilizado em feedbacks de acertos no quiz, botões de verificar e flashcards marcados como "Fácil".
* **Desafio / Erro / Alerta**: Vermelho/Rosa Suave (`rose-50` para fundo, `rose-100` para bordas, `rose-700` ou `rose-800` para texto e avisos). Utilizado para marcar erros no quiz, avisos de consequência no simulador e cards marcados como difíceis.

---

## 2. Acentos Temáticos por Unidade (Eixo Temático)

Para diferenciar visualmente as grandes áreas de conhecimento do aplicativo, o card de **Resumo** no `LearnMode` e o **Nó Central** no `ConceptMapView` recebem acentos visuais baseados na Unidade ativa:

| Unidade ID | Eixo Temático | Cor do Acento | Classe Tailwind |
| :--- | :--- | :--- | :--- |
| `unit-linguagem-01` | Fundamentos e Avaliação | Azul | `blue-500` / `blue-600` |
| `unit-linguagem-02` | Reabilitação e CAA | Esmeralda | `emerald-500` / `emerald-600` |
| Outras | Unidades Futuras | Âmbar | `amber-500` / `amber-600` |

---

## 3. Fluxo de Dados e Renderização Dinâmica

1. O componente principal da rota (`ModulePage.tsx`) recupera os dados da unidade correspondente e passa a propriedade `unitId` para o componente `<LearnMode />`.
2. O `LearnMode.tsx` computa a variável `themeColor` baseada na `unitId` por meio da função `getThemeColor(unitId)`.
3. A variável `themeColor` é aplicada localmente para adicionar classes dinâmicas de borda (`border-l-4 border-blue-500`, por exemplo) ao card de Resumo.
4. O `LearnMode.tsx` repassa `themeColor` via props para o componente `<ConceptMapView />`.
5. O `ConceptMapView.tsx` renderiza o nó do tipo `central` e a legenda dinamicamente aplicando o estilo temático associado à cor recebida (`bg-blue-600 shadow-blue-500/10` etc.).

---

## 4. Manutenção e Extensão

Para adicionar novos eixos temáticos ou novas unidades com cores específicas:
1. Adicione a nova cor no mapeamento `getThemeColor` dentro de `LearnMode.tsx`.
2. Adicione as variações de cores desejadas no mapeamento dinâmico de nós do `ConceptMapView.tsx` (ex: `themeColor === 'sua-cor'`).
3. Certifique-se de que a cor do acento possui correspondência nas paletas padrão do Tailwind CSS (caso contrário, defina-a no `tailwind.config.js`).
