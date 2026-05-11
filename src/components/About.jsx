import { useEffect, useRef } from 'react'
import { asset } from '../utils/asset'

const pillars = [
  'Точність у кожному русі',
  'Лише якісна косметика',
  'Повага до вашого часу',
  'Атмосфера без зайвого шуму',
]

function useAnimGroup() {
  const ref = useRef(null)
  useEffect(() => {
    const container = ref.current
    if (!container) return
    const items = container.querySelectorAll('.fade-up, .fade-left, .fade-right')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    items.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function About() {
  const ref = useAnimGroup()

  return (
    <section id="about"
      className="bg-bone dark:bg-[#141412] py-[8rem] px-[5vw] sm:py-[4rem] transition-colors duration-500">
      <div ref={ref}>
        <div className="flex items-start justify-between mb-16 sm:mb-10 flex-wrap gap-4">
          <p className="fade-up mono-tag">01 — Про нас</p>
        </div>

        <div className="grid md:grid-cols-2 gap-[6vw] items-center">
          {/* Image */}
          <div className="fade-left relative overflow-hidden bg-ink
            aspect-[3/4] md:aspect-[3/4] sm:aspect-square order-first md:order-none group">
            <div
              className="absolute inset-0 bg-cover bg-[center_top] transition-transform duration-[6s] ease-in-out group-hover:scale-105"
              style={{ backgroundImage: `url(${asset('about-bg.jpg')})` }}
            />
            <div className="absolute inset-0 bg-dark/18" />
            <span className="absolute bottom-6 left-6 bg-bone dark:bg-[#1c1c1a] dark:text-bone
              px-4 py-2 font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ink z-10 transition-colors duration-500">
              Калуш · 2018
            </span>
            <div className="absolute top-6 right-6 w-3 h-24 rounded-full overflow-hidden z-10 barber-pole opacity-80" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8">
            <p className="fade-up mono-tag">Наша філософія</p>
            <p className="fade-right font-serif text-[clamp(1.4rem,2.5vw,2.2rem)] leading-[1.3] font-normal
              text-ink dark:text-bone transition-colors duration-500">
              Razor — це простір, де <em className="italic text-accent">точність</em> зустрічає стиль.
            </p>
            <p className="fade-right text-[0.95rem] text-mid dark:text-bone/55 leading-[1.8] font-light transition-colors duration-500"
              style={{ transitionDelay: '0.08s' }}>
              Ми віримо, що хороша стрижка — це не послуга, а ритуал. Кожен клієнт отримує повну увагу майстра,
              індивідуальний підхід і результат, який говорить сам за себе. Без поспіху. Без компромісів.
            </p>

            <div className="fade-up flex flex-col">
              {pillars.map((text, i) => (
                <div key={i} className={`flex items-center gap-6 py-[1.2rem]
                  border-b border-rule dark:border-white/[0.08] transition-colors duration-500
                  ${i === 0 ? 'border-t border-rule dark:border-white/[0.08]' : ''}`}>
                  <span className="font-mono text-[0.65rem] tracking-[0.1em] text-accent w-6 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[0.88rem] font-medium tracking-[0.01em] text-ink dark:text-bone/80 transition-colors duration-500">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Reviews */}
            <div className="fade-up flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(n => (
                  <div key={n} className="w-9 h-9 rounded-full bg-rule border-2 border-bone dark:border-[#141412] overflow-hidden transition-colors duration-500">
                    <img src={asset(`hero-${n}.jpg`)} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#A89070">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="font-mono text-[0.62rem] tracking-[0.08em] text-mid dark:text-bone/45 uppercase transition-colors duration-500">
                  4.9 · Google Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
