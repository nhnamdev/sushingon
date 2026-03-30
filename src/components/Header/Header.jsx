import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NAV_KEYS = ['home', 'about', 'menu', 'contact']
const NAV_HREFS = ['#home', '#about', '#menu', '#contact']
const NAV_HIGHLIGHTS = [false, false, false, false]

const LANGS = [
  { code: 'vi', label: 'VI', flag: 'https://flagcdn.com/w20/vn.png' },
  { code: 'en', label: 'EN', flag: 'https://flagcdn.com/w20/gb.png' },
  { code: 'de', label: 'DE', flag: 'https://flagcdn.com/w20/de.png' },
]

export default function Header({ t, lang, onLangChange }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  // Header solid on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active nav on scroll
  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0
      window.scrollTo({ top: target.offsetTop - headerHeight, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  const navLinks = (
    <ul className="nav-menu">
      {NAV_KEYS.map((key, i) => (
        <li key={key}>
          <a
            href={NAV_HREFS[i]}
            className={`nav-link${NAV_HIGHLIGHTS[i] ? ' nav-highlight' : ''}${activeSection === key ? ' active' : ''}`}
            onClick={e => handleNavClick(e, NAV_HREFS[i])}
          >
            {t.nav[key]}
          </a>
        </li>
      ))}
      <li>
        <Link to="/shop" className="nav-link nav-highlight ">
          {t.nav.order}
        </Link>
      </li>
    </ul>
  )

  const langSwitcher = (
    <div className="lang-switcher">
      {LANGS.map(l => (
        <button
          key={l.code}
          className={`lang-btn${lang === l.code ? ' active' : ''}`}
          onClick={() => onLangChange(l.code)}
        >
          <img src={l.flag} alt={l.label} />
          {l.label}
        </button>
      ))}
    </div>
  )

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      {/* Top bar: logo + socials + phone */}
      <div className="header-top-bar">
        <div className="header-top-inner">
          <a href="#home" onClick={e => handleNavClick(e, '#home')}>
            <img src="/assets/sushingon_logo.png" alt="Sushi Ngon" className="logo-img" />
          </a>
          <div className="header-right">
            <div className="header-socials">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-yelp"></i></a>
              <a href="#"><i className="fab fa-tripadvisor"></i></a>
            </div>
            <div className="header-divider"></div>
            <span className="header-phone">+49 30 63965331</span>
          </div>
        </div>
      </div>

      {/* Nav bar */}
      <div className="header-nav-bar">
        <div className="header-nav-inner">
          {/* Desktop nav */}
          <div className="desktop-nav">
            {navLinks}
            {langSwitcher}
          </div>

          {/* Mobile hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        {navLinks}
        {langSwitcher}
      </div>
    </header>
  )
}
