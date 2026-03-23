export default function MenuSection({ t }) {
  return (
    <section id="menu" className="menu-section">
      <div className="menu-overlay"></div>
      <div className="menu-inner">
        <div className="section-title" style={{ marginBottom: '40px' }}>
          <h2>{t.menu.title}</h2>
          <div className="title-divider" style={{ margin: '18px auto' }}></div>
        </div>
        <a href="#" className="btn-hero">{t.menu.btn}</a>
      </div>
    </section>
  )
}
