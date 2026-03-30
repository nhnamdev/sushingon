import OnlineShop from '../components/OnlineShop/OnlineShop'
import CartDrawer from '../components/CartDrawer/CartDrawer'
import { CartProvider } from '../context/CartContext'
import ShopHeader from '../components/ShopHeader/ShopHeader'
import ShopFooter from '../components/ShopFooter/ShopFooter'
import './ShopPage.css'

export default function ShopPage({ t, lang, onLangChange }) {
  return (
    <CartProvider>
      <ShopHeader t={t} lang={lang} onLangChange={onLangChange} />
      <main className="shop-page-main">
        <OnlineShop t={t} />
      </main>
      <ShopFooter />
      <CartDrawer t={t} />
    </CartProvider>
  )
}
