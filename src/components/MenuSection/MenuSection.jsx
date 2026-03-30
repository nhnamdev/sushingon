import { useState, useRef, useEffect } from 'react'
import './MenuSection.css'

const MENU_PAGES = [
  {
    src: 'https://hirsch-asia.de/wp-content/uploads/2024/07/1-2.png',
    alt: 'Speisekarte Seite 1',
  },
  {
    src: 'https://hirsch-asia.de/wp-content/uploads/2024/07/2-1.png',
    alt: 'Speisekarte Seite 2',
  },
]

export default function MenuSection({ t }) {
  const [lightbox, setLightbox] = useState(null) // index of enlarged image
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const bookLabel =
    t?.nav?.home === 'Trang Chủ' ? 'ĐẶT BÀN NGAY' :
    t?.nav?.home === 'Home'      ? 'BOOK A TABLE' :
                                   'TISCH RESERVIEREN'

  const menuLabel =
    t?.nav?.home === 'Trang Chủ' ? 'Thực Đơn' :
    t?.nav?.home === 'Home'      ? 'Our Menu' :
                                   'Unsere Speisekarte'

  const subLabel =
    t?.nav?.home === 'Trang Chủ' ? 'Nhấp vào ảnh để phóng to' :
    t?.nav?.home === 'Home'      ? 'Click image to enlarge' :
                                   'Bild anklicken zum Vergrößern'

  return (
    <section id="menu" className="menu-section-new" ref={sectionRef}>
      {/* Background overlay */}
      <div className="msn-bg" />

      <div className="msn-inner">
        {/* Heading */}
        <div className={`msn-heading${visible ? ' visible' : ''}`}>
          <p className="msn-eyebrow">SPEISEKARTE</p>
          <h2 className="msn-title">{menuLabel}</h2>
          <div className="msn-divider" />
          <p className="msn-hint"><i className="fas fa-search-plus" /> {subLabel}</p>
        </div>

        {/* Menu pages */}
        <div className={`msn-pages${visible ? ' visible' : ''}`}>
          {MENU_PAGES.map((page, i) => (
            <div
              key={i}
              className="msn-page-wrap"
              onClick={() => setLightbox(i)}
            >
              <img
                src={page.src}
                alt={page.alt}
                className="msn-page-img"
                loading="lazy"
              />
              <div className="msn-page-overlay">
                <i className="fas fa-expand-alt" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className={`msn-cta${visible ? ' visible' : ''}`}>
          <a href="#reservation-form" className="msn-btn">
            <i className="fas fa-calendar-check" />
            {bookLabel}
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="msn-lightbox" onClick={() => setLightbox(null)}>
          <button className="msn-lb-close" onClick={() => setLightbox(null)}>
            <i className="fas fa-times" />
          </button>
          <div className="msn-lb-nav">
            <button
              className="msn-lb-arrow left"
              onClick={e => { e.stopPropagation(); setLightbox(i => (i - 1 + MENU_PAGES.length) % MENU_PAGES.length) }}
            >
              <i className="fas fa-chevron-left" />
            </button>
            <img
              src={MENU_PAGES[lightbox].src}
              alt={MENU_PAGES[lightbox].alt}
              className="msn-lb-img"
              onClick={e => e.stopPropagation()}
            />
            <button
              className="msn-lb-arrow right"
              onClick={e => { e.stopPropagation(); setLightbox(i => (i + 1) % MENU_PAGES.length) }}
            >
              <i className="fas fa-chevron-right" />
            </button>
          </div>
          <div className="msn-lb-dots">
            {MENU_PAGES.map((_, i) => (
              <span
                key={i}
                className={`msn-lb-dot${lightbox === i ? ' active' : ''}`}
                onClick={e => { e.stopPropagation(); setLightbox(i) }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
