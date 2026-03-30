import './ShopFooter.css'

export default function ShopFooter() {
  return (
    <footer className="shop-footer">
      <div className="shop-footer-inner">
        <span>© {new Date().getFullYear()}  SushiNgon</span>
        <div className="shop-footer-socials">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
        </div>
      </div>
    </footer>
  )
}
