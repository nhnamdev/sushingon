import { useState, useRef, useEffect, useCallback } from 'react'
import { categories, menuItems } from '../../data/menuData'
import { useCart } from '../../context/CartContext'
import './OnlineShop.css'

/* ── helpers ─────────────────────────────────────────────── */
function SpicyIcons({ level }) {
  return (
    <span className="shop-spicy">
      {Array.from({ length: level }).map((_, i) => (
        <i key={i} className="fas fa-pepper-hot" />
      ))}
    </span>
  )
}

function VeganBadge() {
  return <span className="shop-badge vegan"><i className="fas fa-leaf" /> Vegan</span>
}

/* ── Single item card ────────────────────────────────────── */
function ItemCard({ item }) {
  const { addItem } = useCart()
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const hasVariants = item.variants && item.variants.length > 0
  const currentVariant = hasVariants ? item.variants[selectedVariantIdx] : null
  const currentPrice = hasVariants ? currentVariant.price : item.price

  const handleAdd = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: currentPrice,
      variant: currentVariant ? currentVariant.label : null,
      quantity: qty,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
    setQty(1)
  }

  return (
    <div className="shop-item-card">
      <div className="shop-item-top">
        <div className="shop-item-left">
          <h4 className="shop-item-name">
            {item.name}
            {item.allergens && <sup className="shop-allergens">{item.allergens}</sup>}
            {item.spicy > 0 && <SpicyIcons level={item.spicy} />}
            {item.vegan && <VeganBadge />}
          </h4>
          <p className="shop-item-desc">{item.description}</p>
        </div>

        {!hasVariants && (
          <div className="shop-item-right">
            <span className="shop-price">{currentPrice.toFixed(2)} €</span>
            <button
              className={`shop-add-btn${added ? ' added' : ''}`}
              onClick={handleAdd}
            >
              {added ? <i className="fas fa-check" /> : '+'}
            </button>
          </div>
        )}
      </div>

      {/* Variants */}
      {hasVariants && (
        <div className="shop-variants">
          <select
            className="shop-variant-select"
            value={selectedVariantIdx}
            onChange={e => setSelectedVariantIdx(Number(e.target.value))}
          >
            {item.variants.map((v, i) => (
              <option key={i} value={i}>
                {v.label} — {v.price.toFixed(2)} €
              </option>
            ))}
          </select>

          <div className="shop-variant-actions">
            <div className="shop-qty">
              <button onClick={() => setQty(q => Math.max(1, q - 1))}>
                <i className="fas fa-minus" />
              </button>
              <span>{qty}</span>
              <button onClick={() => setQty(q => q + 1)}>
                <i className="fas fa-plus" />
              </button>
            </div>
            <button
              className={`shop-add-btn variant-add${added ? ' added' : ''}`}
              onClick={handleAdd}
            >
              {added
                ? <><i className="fas fa-check" /> OK</>
                : <><i className="fas fa-cart-plus" /> {currentPrice.toFixed(2)} €</>
              }
            </button>
          </div>
        </div>
      )}

      {/* Extras */}
      {item.extras && item.extras.length > 0 && (
        <div className="shop-extras">
          <span className="shop-extras-label">Extras:</span>
          {item.extras.map((ex, i) => (
            <button
              key={i}
              className="shop-extra-btn"
              onClick={() => addItem({ id: `${item.id}_extra_${i}`, name: ex.label, price: ex.price, quantity: 1 })}
            >
              + {ex.label} (+{ex.price.toFixed(2)} €)
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Search bar ──────────────────────────────────────────── */
function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="shop-searchbar">
      <i className="fas fa-search shop-search-icon" />
      <input
        type="text"
        className="shop-search-input"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      {value && (
        <button className="shop-search-clear" onClick={() => onChange('')}>
          <i className="fas fa-times" />
        </button>
      )}
    </div>
  )
}

/* ── Main OnlineShop ─────────────────────────────────────── */
export default function OnlineShop({ t }) {
  const [activeCat, setActiveCat] = useState(categories[0].id)
  const [search, setSearch] = useState('')
  const catRefs = useRef({})
  const sectionRef = useRef(null)
  const isScrollingProgrammatically = useRef(false)

  // Filter items by search
  const filtered = search.trim()
    ? menuItems.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
      )
    : null

  // Scroll to category
  const scrollToCat = useCallback((catId) => {
    const el = catRefs.current[catId]
    if (!el) return
    isScrollingProgrammatically.current = true
    const offset = 140
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
    setActiveCat(catId)
    setTimeout(() => { isScrollingProgrammatically.current = false }, 800)
  }, [])

  // Update active cat on user scroll
  useEffect(() => {
    const onScroll = () => {
      if (isScrollingProgrammatically.current) return
      const offset = 160
      let current = categories[0].id
      for (const cat of categories) {
        const el = catRefs.current[cat.id]
        if (el && el.getBoundingClientRect().top <= offset) {
          current = cat.id
        }
      }
      setActiveCat(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const searchPlaceholder =
    t?.nav?.home === 'Trang Chủ' ? 'Tìm kiếm món ăn...' :
    t?.nav?.home === 'Home'      ? 'Search dishes...' :
                                   'Suche...'

  const shopTitle =
    t?.nav?.home === 'Trang Chủ' ? 'Cửa Hàng Trực Tuyến' :
    t?.nav?.home === 'Home'      ? 'Online Store' :
                                   'Online Shop'

  return (
    <section id="order" className="shop-section" ref={sectionRef}>
      {/* shop hero bar */}
      <div className="shop-hero-bar">
        <div className="shop-hero-inner">
          <h2 className="shop-hero-title">{shopTitle}</h2>
          <div className="shop-notice">
            <i className="fas fa-info-circle" />
            <span>Derzeit sind nur Vorbestellungen möglich! · Mo–So 12–23 Uhr</span>
          </div>
          <SearchBar value={search} onChange={setSearch} placeholder={searchPlaceholder} />
        </div>
      </div>

      <div className="shop-layout">
        {/* ── Sidebar ── */}
        <aside className="shop-sidebar">
          <nav className="shop-cat-nav">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`shop-cat-btn${activeCat === cat.id && !search ? ' active' : ''}`}
                onClick={() => { setSearch(''); scrollToCat(cat.id) }}
              >
                {cat.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* ── Item list ── */}
        <main className="shop-main">
          {search.trim() ? (
            /* Search results */
            <div className="shop-search-results">
              <h3 className="shop-cat-heading">
                <i className="fas fa-search" style={{ marginRight: 8 }} />
                {filtered.length} Ergebnis{filtered.length !== 1 ? 'se' : ''}
              </h3>
              {filtered.length === 0 ? (
                <p className="shop-no-result">Keine Artikel gefunden.</p>
              ) : (
                <div className="shop-item-list">
                  {filtered.map(item => <ItemCard key={item.id} item={item} />)}
                </div>
              )}
            </div>
          ) : (
            /* Category groups */
            categories.map(cat => {
              const catItems = menuItems.filter(i => i.catId === cat.id)
              if (catItems.length === 0) return null
              return (
                <div
                  key={cat.id}
                  id={`cat-${cat.id}`}
                  ref={el => (catRefs.current[cat.id] = el)}
                  className="shop-cat-group"
                >
                  <h3 className="shop-cat-heading">{cat.name}</h3>
                  <div className="shop-item-list">
                    {catItems.map(item => <ItemCard key={item.id} item={item} />)}
                  </div>
                </div>
              )
            })
          )}
        </main>
      </div>
    </section>
  )
}
