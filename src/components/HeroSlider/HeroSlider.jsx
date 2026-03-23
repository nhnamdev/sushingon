import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const SLIDES = [
  { bg: '/assets/logo-large.jpg' },
  { bg: 'https://www.gloryduck.de/wp-content/uploads/2019/10/glory-duck-hintergrund-2.jpg' },
  { bg: 'https://www.gloryduck.de/wp-content/uploads/2019/10/glory-duck-hintergrund-3.jpg' },
]

export default function HeroSlider({ t }) {
  return (
    <section id="home" className="hero-section">
      <Swiper
        className="hero-swiper"
        modules={[Autoplay, Pagination, EffectFade]}
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide
            key={i}
            style={{ backgroundImage: `url('${slide.bg}')` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <img src="/assets/sushingon_logo.png" alt="Sushi Ngon" className="hero-logo" />
              <p className="hero-text">{t.hero.text}</p>
              <p className="hero-subtext">{t.hero.subtext}</p>
              <div className="hero-buttons">
                <a href="#order" className="btn-hero">{t.hero.btn1}</a>
                <a href="#reservation-form" className="btn-hero btn-hero-outline">{t.hero.btn2}</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
