import type { LearningPlatform } from '@/types/platform'
import { areaLinguagem } from './areas/linguagem'

// ─────────────────────────────────────────────────────────────────────────────
// RAIZ DA PLATAFORMA
// ─────────────────────────────────────────────────────────────────────────────

export const platform: LearningPlatform = {
  id: 'fonolab-v1',
  title: 'FonoLab',
  description: 'Plataforma modular de aprendizagem em Fonoaudiologia',
  version: '1.0.0',
  areas: [areaLinguagem],
}
