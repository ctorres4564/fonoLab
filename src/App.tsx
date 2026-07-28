import { Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout } from '@/components/platform/AppLayout'
import { HomePage } from '@/pages/HomePage'
import { AreaPage } from '@/pages/AreaPage'
import { UnitPage } from '@/pages/UnitPage'
import { ModulePage } from '@/pages/ModulePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="areas/:areaSlug" element={<AreaPage />} />
        <Route path="areas/:areaSlug/units/:unitSlug" element={<UnitPage />} />
        <Route path="modules/:moduleSlug" element={<ModulePage />} />
        <Route path="modules/:moduleSlug/:mode" element={<ModulePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
