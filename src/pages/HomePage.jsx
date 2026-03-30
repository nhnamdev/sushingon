import HeroSlider from '../components/HeroSlider/HeroSlider'
import About from '../components/About/About'
import Features from '../components/Features/Features'
import MenuSection from '../components/MenuSection/MenuSection'
import ReservationSection from '../components/ReservationSection/ReservationSection'
import Footer from '../components/Footer/Footer'

export default function HomePage({ t }) {
  return (
    <>
      <HeroSlider t={t} />
      <About t={t} />
      <Features t={t} />
      <MenuSection t={t} />
      <ReservationSection t={t} />
      <Footer />
    </>
  )
}
