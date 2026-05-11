import { useEffect, useRef } from 'react'

const steps = [
  {
    num:   '01',
    title: 'Запис онлайн',
    body:  'Оберіть майстра, послугу та зручний час. Жодних черг, жодного очікування.',
  },
  {
    num:   '02',
    title: 'Консультація',
    body:  'Майстер обговорить ваші побажання — від форми до фінішу. Разом знайдемо рішення.',
  },
  {
    num:   '03',
    title: 'Процедура',
    body:  'Точна робота без поспіху. Кожен рух — навмисний, кожна деталь — врахована.',
  },
  {
    num:   '04',
    title: 'Результат',
    body:  'Ви виходите з чітким образом та знанням, як підтримувати його вдома.',
  },
]

function useAnimGroup() {
  const ref = useRef(null)
  useEffect(() => {
    const container = ref.current
    if (!container) return
    const items = container.querySelectorAll('.fade-up, .scale-in')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.08 })
    items.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function Process() {
  const ref = useAnimGroup()

  return (
    <section
      id="process"
      className="bg-bone dark:bg-[#141412] py-[8rem] px-[5vw] sm:py-[4rem] transition-colors duration-500"
    >
      <div ref={ref}>
        <div className="flex items-start justify-between mb-16 sm:mb-10 flex-wrap gap-4">
          <div>
            <p className="fade-up mono-tag mb-4">03 — Процес</p>
            <h2 className="fade-up font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-none
              text-ink dark:text-bone transition-colors duration-500">
              Як це<br />працює.
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px
          bg-rule dark:bg-white/[0.07] border border-rule dark:border-white/[0.07] transition-colors duration-500">
          {steps.map((s, i) => (
            <div
              key={i}
              className="scale-in bg-bone dark:bg-[#1a1a18] p-10 sm:p-8 flex flex-col gap-6
                group hover:bg-ink dark:hover:bg-dark transition-colors duration-300"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="font-mono text-[0.65rem] tracking-[0.12em] text-accent group-hover:text-accent/70">
                {s.num}
              </span>
              <h3 className="font-serif text-[1.35rem] font-bold leading-[1.2]
                text-ink dark:text-bone group-hover:text-bone transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-[0.84rem] text-mid dark:text-bone/45 font-light leading-[1.7]
                group-hover:text-bone/50 transition-colors duration-300">
                {s.body}
              </p>

              {i < steps.length - 1 && (
                <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A89070" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="fade-up mt-8 flex items-center overflow-hidden">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center flex-1">
              <div className="flex items-center gap-2 shrink-0">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-accent hidden sm:block">
                  {s.title}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 h-px bg-rule dark:bg-white/[0.08] mx-2 transition-colors duration-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
