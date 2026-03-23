export default function About({ t }) {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <div className="about-grid">
          {/* Text column */}
          <div>
            <div className="section-title text-center">
              <h2>{t.about.title1}</h2>
              <h3>{t.about.title2}</h3>
              <div className="title-divider"></div>
            </div>
            <p className="about-text">{t.about.text}</p>
          </div>

          {/* Image 1 */}
          <img src="/assets/ganuong.jpeg" alt="Nhà hàng" className="about-img" />

          {/* Image 2 */}
          <img src="/assets/miudon.jpg" alt="Món ăn" className="about-img" />
        </div>
      </div>
    </section>
  )
}
