import type { LearningModule } from '@/types/platform'

export type ModuleLoader = () => Promise<LearningModule>

export const moduleLoaders: Record<string, ModuleLoader> = {
  // Unidade 1
  'avaliacao-linguagens-oral-escrita': async () => {
    const mod = await import('../data/areas/linguagem/units/unidade-01/modules/avaliacao-linguagens')
    return mod.moduloAvaliacaoLinguagens
  },
  'processo-diagnostico-linguagem': async () => {
    const mod = await import('../data/areas/linguagem/units/unidade-01/modules/processo-diagnostico')
    return mod.moduloProcessoDiagnostico
  },
  'planejamento-terapeutico-linguagem': async () => {
    const mod = await import('../data/areas/linguagem/units/unidade-01/modules/planejamento-terapeutico')
    return mod.moduloPlanejamentoTerapeutico
  },

  // Unidade 2
  'desenvolvimento-fonologico': async () => {
    const mod = await import('../data/areas/linguagem/units/unidade-02/modules/desenvolvimento-fonologico')
    return mod.moduloDesenvolvimentoFonologico
  },
  'alteracoes-fonologicas': async () => {
    const mod = await import('../data/areas/linguagem/units/unidade-02/modules/alteracoes-fonologicas')
    return mod.moduloAlteracoesFonologicas
  },
  'principios-intervencao-fonologica': async () => {
    const mod = await import('../data/areas/linguagem/units/unidade-02/modules/principios-intervencao-fonologica')
    return mod.moduloPrincipiosIntervencaoFonologica
  },
  'planejamento-terapeutico-transtornos-fonologicos': async () => {
    const mod = await import('../data/areas/linguagem/units/unidade-02/modules/planejamento-terapeutico-transtornos-fonologicos')
    return mod.moduloPlanejamentoTerapeuticoTranstornosFonologicos
  },

  // Unidade 3
  'caracteristicas-transtornos-especificos-linguagem': async () => {
    const mod = await import('../data/areas/linguagem/units/unidade-03/modules/caracteristicas-transtornos-linguagem')
    return mod.moduloCaracteristicasTranstornosLinguagem
  },
  'aspectos-linguisticos-transtornos-linguagem': async () => {
    const mod = await import('../data/areas/linguagem/units/unidade-03/modules/aspectos-linguisticos')
    return mod.moduloAspectosLinguisticos
  },
  'bases-neurobiologicas-transtornos-linguagem': async () => {
    const mod = await import('../data/areas/linguagem/units/unidade-03/modules/bases-neurobiologicas')
    return mod.moduloBasesNeurobiologicas
  },
  'avaliacao-intervencao-transtornos-linguagem': async () => {
    const mod = await import('../data/areas/linguagem/units/unidade-03/modules/avaliacao-intervencao')
    return mod.moduloAvaliacaoIntervencaoTL
  },

  // Unidade 6
  'afasias-neurolinguistica-adulto': async () => {
    const mod = await import('../data/areas/linguagem/units/unidade-06/modules/afasias-neurolinguistica')
    return mod.moduloAfasiasNeurolinguistica
  },
  'comunicacao-alternativa-ampliada': async () => {
    const mod = await import('../data/areas/linguagem/units/unidade-06/modules/comunicacao-alternativa')
    return mod.moduloComunicacaoAlternativa
  },
}
