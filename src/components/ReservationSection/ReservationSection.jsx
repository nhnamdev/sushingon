import ReservationForm from '../ReservationForm/ReservationForm'

export default function ReservationSection({ t }) {
  return (
    <section id="reservation" className="reservation-section">
      <div className="reservation-overlay"></div>
      <div className="reservation-inner">

        {/* Feature highlights */}
        <div className="reservation-grid">
          <div className="feature-box" style={{ opacity: 1, transform: 'none' }}>
            <i className="fas fa-bowl-food feature-icon"></i>
            <h3>{t.reservation.feature1.title}</h3>
            <p>{t.reservation.feature1.text}</p>
          </div>
          <div className="feature-box" style={{ opacity: 1, transform: 'none' }}>
            <i className="fas fa-couch feature-icon"></i>
            <h3>{t.reservation.feature2.title}</h3>
            <p>{t.reservation.feature2.text}</p>
          </div>
        </div>

        {/* Booking form */}
        <div id="reservation-form">
          <div className="section-title text-center" style={{ marginTop: '48px' }}>
            <h2>{t.form.formTitle}</h2>
            <div className="title-divider" style={{ margin: '18px auto 0' }}></div>
          </div>
          <ReservationForm t={t} />
        </div>

      </div>
    </section>
  )
}
