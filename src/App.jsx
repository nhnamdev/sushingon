import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import BackToTop from './components/BackToTop/BackToTop'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import translations from './data/translations'

function App() {
  const [lang, setLang] = useState('vi')
  const t = translations[lang]

  return (
    <Routes>
      {/* ── Trang chủ ── */}
      <Route
        path="/"
        element={
          <>
            <Header t={t} lang={lang} onLangChange={setLang} />
            <HomePage t={t} />
            <BackToTop />
          </>
        }
      />

      {/* ── Cửa hàng trực tuyến ── */}
      <Route
        path="/shop"
        element={
          <ShopPage t={t} lang={lang} onLangChange={setLang} />
        }
      />
    </Routes>
  )
}

export default App
