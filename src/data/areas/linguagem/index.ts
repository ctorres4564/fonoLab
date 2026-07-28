import type { LearningArea } from '@/types/platform'
import { unidade01 } from './units/unidade-01'
import { unidade02 } from './units/unidade-02'
import { unidade03 } from './units/unidade-03'
import { unidade06 } from './units/unidade-06'

// A ordem deste array reflete a sequência pedagógica oficial da Área
// Linguagem (unit.order: 1, 2, 3, ..., 6). Componentes como HomePage e a
// recomendação de próxima atividade (getNextActivityRecommendation) usam
// `area.units.flatMap(u => u.modules)` diretamente, sem reordenar por
// `unit.order` — por isso a posição física neste array precisa acompanhar
// a numeração pedagógica. Unidades 4, 5, 7 e 8 ainda não foram criadas.
export const areaLinguagem: LearningArea = {
  id: 'area-linguagem',
  slug: 'linguagem',
  title: 'Linguagem',
  description:
    'Estudo dos fundamentos teóricos, processos de avaliação, diagnóstico e intervenção nos transtornos de linguagem oral e escrita ao longo do desenvolvimento.',
  units: [unidade01, unidade02, unidade03, unidade06],
}
