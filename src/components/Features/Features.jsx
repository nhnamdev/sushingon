import { useEffect, useRef } from 'react'

const FEATURE_ICONS = ['fas fa-bowl-food', 'fas fa-couch', 'fas fa-utensils']
const FEATURE_KEYS = ['quality', 'space', 'service']

function FeatureBox({ icon, title, text }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="feature-box" ref={ref}>
      <i className={`${icon} feature-icon`}></i>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default function Features({ t }) {
  return (
    <section className="features-section">
      <div className="features-inner">
        <div className="features-grid">
          {FEATURE_KEYS.map((key, i) => (
            <FeatureBox
              key={key}
              icon={FEATURE_ICONS[i]}
              title={t.features[key].title}
              text={t.features[key].text}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
