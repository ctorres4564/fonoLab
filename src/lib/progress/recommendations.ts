import type { LearningModuleMetadata } from '@/types/platform'
import type { ModuleProgress, NextActivityRecommendation } from '@/types/progress'
import { isDue } from './spacedReview'

// ─────────────────────────────────────────────────────────────────────────────
// RECOMENDAÇÃO DETERMINÍSTICA — Sem IA
// Prioridade: revisão atrasada > resposta incorreta > módulo iniciado >
//             próximo módulo > primeiro não iniciado
//
// `module.order` é local à unidade a que o módulo pertence (1, 2, 3... dentro
// de cada unidade), não uma chave global. Por isso esta função NÃO reordena
// `modules` por `order` — ela confia na sequência em que o chamador já
// forneceu a lista (ex.: `unit.modules`, já na ordem correta, ou
// `area.units.flatMap(u => u.modules)`, que preserva a ordem das unidades e,
// dentro de cada uma, a ordem dos módulos). Reordenar por `order` aqui
// agruparia módulos de unidades diferentes que compartilham o mesmo valor de
// `order` (ex.: o módulo 1 da Unidade 2 e o módulo 1 da Unidade 3),
// produzindo uma recomendação "próximo módulo" ambígua entre unidades.
// ─────────────────────────────────────────────────────────────────────────────

export function getNextActivityRecommendation(
  modules: LearningModuleMetadata[],
  progresses: Record<string, ModuleProgress>
): NextActivityRecommendation | null {
  const ordered = modules

  // 1. Revisão atrasada
  for (const mod of ordered) {
    const prog = progresses[mod.id]
    if (!prog) continue
    const overdue = prog.scheduledReviews.find(
      (r) => isDue(r) && r.reason === 'spaced_review'
    )
    if (overdue) {
      return {
        moduleId: mod.id,
        moduleTitle: mod.title,
        mode: 'review',
        reason: 'overdue_review',
        reasonLabel: `Revisão programada vencida para "${mod.title}".`,
      }
    }
  }

  // 2. Resposta incorreta
  for (const mod of ordered) {
    const prog = progresses[mod.id]
    if (!prog) continue
    const hasIncorrect = prog.answers.some((a) => !a.isCorrect)
    if (hasIncorrect) {
      return {
        moduleId: mod.id,
        moduleTitle: mod.title,
        mode: 'apply',
        reason: 'incorrect_answer',
        reasonLabel: `Você respondeu incorretamente questões em "${mod.title}".`,
      }
    }
  }

  // 3. Módulo iniciado e incompleto
  for (const mod of ordered) {
    const prog = progresses[mod.id]
    if (prog?.status === 'in_progress') {
      return {
        moduleId: mod.id,
        moduleTitle: mod.title,
        mode: 'learn',
        reason: 'module_in_progress',
        reasonLabel: `Continue de onde parou em "${mod.title}".`,
      }
    }
  }

  // 4. Próximo módulo disponível (após o último concluído)
  // Usa a posição do módulo na sequência recebida (não o campo `order`,
  // que é local à unidade e pode se repetir entre unidades diferentes).
  let lastCompletedIndex = -1
  ordered.forEach((m, idx) => {
    if (progresses[m.id]?.status === 'completed') lastCompletedIndex = idx
  })
  if (lastCompletedIndex !== -1) {
    const nextMod = ordered
      .slice(lastCompletedIndex + 1)
      .find((m) => progresses[m.id]?.status !== 'completed')
    if (nextMod) {
      return {
        moduleId: nextMod.id,
        moduleTitle: nextMod.title,
        mode: 'learn',
        reason: 'next_module',
        reasonLabel: `Próximo módulo disponível: "${nextMod.title}".`,
      }
    }
  }

  // 5. Primeiro módulo não iniciado
  const first = ordered.find((m) => !progresses[m.id] || progresses[m.id].status === 'not_started')
  if (first) {
    return {
      moduleId: first.id,
      moduleTitle: first.title,
      mode: 'learn',
      reason: 'first_module',
      reasonLabel: `Comece pelo módulo "${first.title}".`,
    }
  }

  return null
}
