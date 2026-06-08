import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import GatePage from './pages/GatePage'
import MainPage from './pages/MainPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GatePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
