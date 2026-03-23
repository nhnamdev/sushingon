import { useState } from 'react'
import './ReservationForm.css'

const TIMES = [
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
]

const GUEST_OPTIONS = ['1', '2', '3', '4', '5', '6', '7', '8+']

const INITIAL_STATE = {
  date: '',
  time: '',
  guests: '',
  name: '',
  email: '',
  phone: '',
  note: '',
}

export default function ReservationForm({ t }) {
  const [form, setForm] = useState(INITIAL_STATE)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const today = new Date().toISOString().split('T')[0]

  const validate = () => {
    const e = {}
    if (!form.date) e.date = true
    if (!form.time) e.time = true
    if (!form.guests) e.guests = true
    if (!form.name.trim()) e.name = true
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = true
    if (!form.phone.trim()) e.phone = true
    return e
  }

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: false }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  const handleReset = () => {
    setForm(INITIAL_STATE)
    setErrors({})
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div className="res-form-success">
        <i className="fas fa-check-circle res-success-icon"></i>
        <h3>{t.form.successTitle}</h3>
        <p>{t.form.successText}</p>
        <button className="btn-hero" onClick={handleReset}>
          {t.form.bookAgain}
        </button>
      </div>
    )
  }

  return (
    <form className="res-form" onSubmit={handleSubmit} noValidate>
      {/* ── Row 1: Ngày · Giờ · Số người ── */}
      <div className="res-form-row res-form-row-3">
        {/* Ngày */}
        <div className={`res-field${errors.date ? ' res-field--error' : ''}`}>
          <label className="res-label">
            <i className="far fa-calendar-alt"></i>
            {t.form.date}
          </label>
          <input
            type="date"
            className="res-input"
            min={today}
            value={form.date}
            onChange={e => handleChange('date', e.target.value)}
          />
          {errors.date && <span className="res-error">{t.form.errRequired}</span>}
        </div>

        {/* Giờ */}
        <div className={`res-field${errors.time ? ' res-field--error' : ''}`}>
          <label className="res-label">
            <i className="far fa-clock"></i>
            {t.form.time}
          </label>
          <select
            className="res-input"
            value={form.time}
            onChange={e => handleChange('time', e.target.value)}
          >
            <option value="">{t.form.selectTime}</option>
            {TIMES.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.time && <span className="res-error">{t.form.errRequired}</span>}
        </div>

        {/* Số người */}
        <div className={`res-field${errors.guests ? ' res-field--error' : ''}`}>
          <label className="res-label">
            <i className="fas fa-users"></i>
            {t.form.guests}
          </label>
          <select
            className="res-input"
            value={form.guests}
            onChange={e => handleChange('guests', e.target.value)}
          >
            <option value="">{t.form.selectGuests}</option>
            {GUEST_OPTIONS.map(g => (
              <option key={g} value={g}>
                {g} {g === '8+' ? t.form.guestPlus : t.form.guestUnit}
              </option>
            ))}
          </select>
          {errors.guests && <span className="res-error">{t.form.errRequired}</span>}
        </div>
      </div>

      <div className="res-form-divider">
        <span>{t.form.contactInfo}</span>
      </div>

      {/* ── Row 2: Tên · Email · SĐT ── */}
      <div className="res-form-row res-form-row-3">
        <div className={`res-field${errors.name ? ' res-field--error' : ''}`}>
          <label className="res-label">
            <i className="far fa-user"></i>
            {t.form.name}
          </label>
          <input
            type="text"
            className="res-input"
            placeholder="Enter Name"
            value={form.name}
            onChange={e => handleChange('name', e.target.value)}
          />
          {errors.name && <span className="res-error">{t.form.errRequired}</span>}
        </div>

        <div className={`res-field${errors.email ? ' res-field--error' : ''}`}>
          <label className="res-label">
            <i className="far fa-envelope"></i>
            {t.form.email}
          </label>
          <input
            type="email"
            className="res-input"
            placeholder="example@email.com"
            value={form.email}
            onChange={e => handleChange('email', e.target.value)}
          />
          {errors.email && <span className="res-error">{t.form.errEmail}</span>}
        </div>

        <div className={`res-field${errors.phone ? ' res-field--error' : ''}`}>
          <label className="res-label">
            <i className="fas fa-phone"></i>
            {t.form.phone}
          </label>
          <input
            type="tel"
            className="res-input"
            placeholder="+49 30 ..."
            value={form.phone}
            onChange={e => handleChange('phone', e.target.value)}
          />
          {errors.phone && <span className="res-error">{t.form.errRequired}</span>}
        </div>
      </div>

      {/* ── Ghi chú ── */}
      <div className="res-field">
        <label className="res-label">
          <i className="far fa-comment-dots"></i>
          {t.form.note}{' '}
          <span className="res-optional">(Optional)</span>
        </label>
        <textarea
          className="res-input res-textarea"
          placeholder="Enter Note"
          rows={3}
          value={form.note}
          onChange={e => handleChange('note', e.target.value)}
        />
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <button type="submit" className="btn-hero">
          <i className="far fa-calendar-check" style={{ marginRight: '8px' }}></i>
          {t.form.submit}
        </button>
      </div>
    </form>
  )
}
