import { useCart } from '../../context/CartContext'
import './CartDrawer.css'

export default function CartDrawer({ t }) {
  const { items, removeItem, changeQty, clearCart, totalPrice, isOpen, setIsOpen } = useCart()

  const label = {
    title: { vi: 'Giỏ Hàng', en: 'Your Cart', de: 'Warenkorb' },
    empty: { vi: 'Giỏ hàng trống', en: 'Your cart is empty', de: 'Ihr Warenkorb ist leer' },
    clear: { vi: 'Xóa tất cả', en: 'Clear all', de: 'Alle löschen' },
    order: { vi: 'ĐẶT HÀNG', en: 'ORDER', de: 'BESTELLEN' },
    total: { vi: 'Tổng cộng', en: 'Total', de: 'Gesamt' },
  }

  // Determine lang from translation object
  const lang = t?.nav?.home === 'Trang Chủ' ? 'vi' : t?.nav?.home === 'Home' ? 'en' : 'de'
  const L = (key) => label[key][lang] || label[key]['de']

  return (
    <>
      {/* overlay */}
      <div
        className={`cart-overlay${isOpen ? ' active' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      {/* drawer */}
      <div className={`cart-drawer${isOpen ? ' open' : ''}`}>
        <div className="cart-drawer-header">
          <h3 className="cart-drawer-title">
            <i className="fas fa-shopping-cart" style={{ marginRight: 8 }} />
            {L('title')}
          </h3>
          <button className="cart-drawer-close" onClick={() => setIsOpen(false)}>
            <i className="fas fa-times" />
          </button>
        </div>

        <div className="cart-drawer-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <i className="fas fa-shopping-bag cart-empty-icon" />
              <p>{L('empty')}</p>
            </div>
          ) : (
            <>
              <button className="cart-clear-btn" onClick={clearCart}>
                <i className="fas fa-trash-alt" /> {L('clear')}
              </button>

              <ul className="cart-item-list">
                {items.map(item => (
                  <li key={item.key} className="cart-item">
                    <div className="cart-item-info">
                      <span className="cart-item-name">{item.name}</span>
                      {item.variant && (
                        <span className="cart-item-variant">{item.variant}</span>
                      )}
                      <span className="cart-item-price">
                        {(item.price * item.quantity).toFixed(2)} €
                      </span>
                    </div>
                    <div className="cart-item-controls">
                      <button onClick={() => changeQty(item.key, -1)}>
                        <i className="fas fa-minus" />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => changeQty(item.key, 1)}>
                        <i className="fas fa-plus" />
                      </button>
                      <button className="cart-remove" onClick={() => removeItem(item.key)}>
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-total-row">
              <span>{L('total')}</span>
              <span className="cart-total-price">{totalPrice.toFixed(2)} €</span>
            </div>
            <button className="cart-order-btn">
              <i className="fas fa-check-circle" /> {L('order')}
            </button>
          </div>
        )}
      </div>
    </>
  )
}
