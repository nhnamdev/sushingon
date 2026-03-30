import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './ShopHeader.css'

const LANGS = [
  { code: 'vi', label: 'VI', flag: 'https://flagcdn.com/w20/vn.png' },
  { code: 'en', label: 'EN', flag: 'https://flagcdn.com/w20/gb.png' },
  { code: 'de', label: 'DE', flag: 'https://flagcdn.com/w20/de.png' },
]

export default function ShopHeader({ t, lang, onLangChange }) {
  const { totalItems, setIsOpen } = useCart()

  const homeLabel =
    lang === 'vi' ? 'Trang Chủ' :
      lang === 'en' ? 'Home' :
        'Startseite'

  const shopLabel =
    lang === 'vi' ? 'Cửa Hàng Trực Tuyến' :
      lang === 'en' ? 'Online Store' :
        'Online Shop'

  return (
    <header className="shop-header">
      <div className="shop-header-inner">
        {/* Logo + back link */}
        <div className="shop-header-left">
          <Link to="/" className="shop-back-link">
            <i className="fas fa-arrow-left" />
            <span>{homeLabel}</span>
          </Link>
          <div className="shop-header-divider" />
          <Link to="/shop">
            <img src="/assets/sushingon_logo.png" alt="Sushi Ngon" className="shop-header-logo" />
          </Link>
        </div>

        {/* Title */}
        <span className="shop-header-title">{shopLabel}</span>

        {/* Right: lang + cart */}
        <div className="shop-header-right">
          {/* Language switcher */}
          <div className="shop-lang-switcher">
            {LANGS.map(l => (
              <button
                key={l.code}
                className={`shop-lang-btn${lang === l.code ? ' active' : ''}`}
                onClick={() => onLangChange(l.code)}
              >
                <img src={l.flag} alt={l.label} />
                {l.label}
              </button>
            ))}
          </div>

          {/* Cart toggle */}
          <button className="shop-header-cart" onClick={() => setIsOpen(true)}>
            <i className="fas fa-shopping-cart" />
            {totalItems > 0 && (
              <span className="shop-header-cart-badge">{totalItems}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
