import { useState } from 'react'
import Header from './components/Header/Header'
import HeroSlider from './components/HeroSlider/HeroSlider'
import About from './components/About/About'
import Features from './components/Features/Features'
import MenuSection from './components/MenuSection/MenuSection'
import ReservationSection from './components/ReservationSection/ReservationSection'
import Footer from './components/Footer/Footer'
import BackToTop from './components/BackToTop/BackToTop'
import translations from './data/translations'

function App() {
  const [lang, setLang] = useState('vi')
  const t = translations[lang]

  return (
    <>
      <Header t={t} lang={lang} onLangChange={setLang} />
      <HeroSlider t={t} />
      <About t={t} />
      <Features t={t} />
      <MenuSection t={t} />
      <ReservationSection t={t} />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
