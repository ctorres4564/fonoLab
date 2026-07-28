import { platform as rawPlatform } from '../data/platform'
import type { LearningModule } from '@/types/platform'

// Interfaces estendidas exclusivas para compatibilidade estática do TypeScript nos testes
export interface TestLearningUnit {
  id: string
  slug: string
  title: string
  description: string
  objective: string
  order: number
  modules: LearningModule[] // Tipagem de testes completa
}

export interface TestLearningArea {
  id: string
  slug: string
  title: string
  description: string
  icon?: string
  units: TestLearningUnit[]
}

export interface TestLearningPlatform {
  id: string
  title: string
  description: string
  version: string
  areas: TestLearningArea[]
}

// Imports estáticos de todos os módulos estruturais clínicos
import { moduloAvaliacaoLinguagens } from '../data/areas/linguagem/units/unidade-01/modules/avaliacao-linguagens'
import { moduloProcessoDiagnostico } from '../data/areas/linguagem/units/unidade-01/modules/processo-diagnostico'
import { moduloPlanejamentoTerapeutico } from '../data/areas/linguagem/units/unidade-01/modules/planejamento-terapeutico'

import { moduloDesenvolvimentoFonologico } from '../data/areas/linguagem/units/unidade-02/modules/desenvolvimento-fonologico'
import { moduloAlteracoesFonologicas } from '../data/areas/linguagem/units/unidade-02/modules/alteracoes-fonologicas'
import { moduloPrincipiosIntervencaoFonologica } from '../data/areas/linguagem/units/unidade-02/modules/principios-intervencao-fonologica'
import { moduloPlanejamentoTerapeuticoTranstornosFonologicos } from '../data/areas/linguagem/units/unidade-02/modules/planejamento-terapeutico-transtornos-fonologicos'

import { moduloCaracteristicasTranstornosLinguagem } from '../data/areas/linguagem/units/unidade-03/modules/caracteristicas-transtornos-linguagem'
import { moduloAspectosLinguisticos } from '../data/areas/linguagem/units/unidade-03/modules/aspectos-linguisticos'
import { moduloBasesNeurobiologicas } from '../data/areas/linguagem/units/unidade-03/modules/bases-neurobiologicas'
import { moduloAvaliacaoIntervencaoTL } from '../data/areas/linguagem/units/unidade-03/modules/avaliacao-intervencao'

import { moduloAfasiasNeurolinguistica } from '../data/areas/linguagem/units/unidade-06/modules/afasias-neurolinguistica'
import { moduloComunicacaoAlternativa } from '../data/areas/linguagem/units/unidade-06/modules/comunicacao-alternativa'

const modulesMap: Record<string, LearningModule> = {
  'avaliacao-linguagens-oral-escrita': moduloAvaliacaoLinguagens,
  'processo-diagnostico-linguagem': moduloProcessoDiagnostico,
  'planejamento-terapeutico-linguagem': moduloPlanejamentoTerapeutico,
  'desenvolvimento-fonologico': moduloDesenvolvimentoFonologico,
  'alteracoes-fonologicas': moduloAlteracoesFonologicas,
  'principios-intervencao-fonologica': moduloPrincipiosIntervencaoFonologica,
  'planejamento-terapeutico-transtornos-fonologicos': moduloPlanejamentoTerapeuticoTranstornosFonologicos,
  'caracteristicas-transtornos-especificos-linguagem': moduloCaracteristicasTranstornosLinguagem,
  'aspectos-linguisticos-transtornos-linguagem': moduloAspectosLinguisticos,
  'bases-neurobiologicas-transtornos-linguagem': moduloBasesNeurobiologicas,
  'avaliacao-intervencao-transtornos-linguagem': moduloAvaliacaoIntervencaoTL,
  'afasias-neurolinguistica-adulto': moduloAfasiasNeurolinguistica,
  'comunicacao-alternativa-ampliada': moduloComunicacaoAlternativa,
}

// Plataforma completamente populada com conteúdo clínico para os testes
export const platform: TestLearningPlatform = {
  ...rawPlatform,
  areas: rawPlatform.areas.map((area) => ({
    ...area,
    units: area.units.map((unit) => ({
      ...unit,
      modules: unit.modules.map((meta) => {
        const fullMod = modulesMap[meta.slug]
        if (!fullMod) {
          throw new Error(`Módulo clínico completo não encontrado para slug: "${meta.slug}" no helper de testes.`)
        }
        return fullMod
      }),
    })),
  })),
}
