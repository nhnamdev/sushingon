import { useCart } from '../../context/CartContext'
import './CartButton.css'

export default function CartButton() {
  const { totalItems, setIsOpen } = useCart()

  return (
    <button
      className={`cart-fab${totalItems > 0 ? ' has-items' : ''}`}
      onClick={() => setIsOpen(true)}
      aria-label="Open cart"
    >
      <i className="fas fa-shopping-cart" />
      {totalItems > 0 && (
        <span className="cart-fab-badge">{totalItems > 99 ? '99+' : totalItems}</span>
      )}
    </button>
  )
}
