import { useEffect, useRef } from 'react'

const BOOK_URL = 'https://n1407247.alteg.io/company/1339749/personal/menu?utm_source=ig&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3&o='
const IG_URL   = 'https://www.instagram.com/razor.barbershop.kalush'
const MAP_URL  = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.4562!2d24.3558!3d49.0083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473265e0b0b0b0b1%3A0xabcdef1234!2z0L_RgNC-0YHQv9C10LrRgiDQm9C10YHRliDQo9C60YDQsNGX0L3QutC4IDY2LCDQmtCw0LvRg9GILCDQhtCy0LDQvdC-LdCk0YDQsNC90LrRltCy0YHRjNC60LAgMDc2MDA!5e0!3m2!1suk!2sua!4v1717000000000!5m2!1suk!2sua'

const hours = [
  { days: 'Понеділок — Субота', time: '10:00 — 20:00' },
  { days: 'Неділя',             time: 'Вихідний' },
]

function useAnimGroup() {
  const ref = useRef(null)
  useEffect(() => {
    const container = ref.current
    if (!container) return
    const items = container.querySelectorAll('.fade-up')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    items.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function Contacts() {
  const ref = useAnimGroup()

  return (
    <section id="book" className="p-0">
      {/* Header bar */}
      <div className="bg-dark py-[1.6rem] px-[5vw] text-center border-b border-white/[0.07]">
        <p className="font-mono text-[clamp(0.75rem,1.5vw,0.9rem)] tracking-[0.22em] uppercase text-bone font-medium">
          Контакти барбершопу
        </p>
      </div>

      {/* Info */}
      <div
        ref={ref}
        className="bg-bone dark:bg-[#141412] py-[6rem] px-[5vw] sm:py-[3.5rem] transition-colors duration-500"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 sm:gap-8">

          {/* Hours */}
          <div className="fade-up flex flex-col gap-4">
            <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase font-medium
              text-ink dark:text-bone transition-colors duration-500">
              Графік роботи
            </p>
            <div className="w-10 h-px bg-rule dark:bg-white/[0.12] transition-colors duration-500" />
            <div className="flex flex-col gap-4">
              {hours.map((h, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase
                    text-mid dark:text-bone/45 transition-colors duration-500">
                    {h.days}
                  </span>
                  <span className="font-serif text-[1.1rem] font-bold
                    text-ink dark:text-bone transition-colors duration-500">
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="fade-up flex flex-col gap-4" style={{ transitionDelay: '0.08s' }}>
            <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase font-medium
              text-ink dark:text-bone transition-colors duration-500">
              Адреса
            </p>
            <div className="w-10 h-px bg-rule dark:bg-white/[0.12] transition-colors duration-500" />
            <div className="flex flex-col gap-2">
              <p className="font-mono text-[0.72rem] tracking-[0.08em] leading-[1.7]
                text-mid dark:text-bone/55 transition-colors duration-500">
                пр. Лесі Українки 66,<br />
                корпус 4, м. Калуш
              </p>
              <a
                href="tel:+380989707007"
                className="font-mono text-[0.72rem] tracking-[0.08em]
                  text-ink dark:text-bone hover:text-accent transition-colors duration-200"
              >
                +380 (98) 970 70 07
              </a>
            </div>
          </div>

          {/* Social + CTA */}
          <div className="fade-up flex flex-col gap-4" style={{ transitionDelay: '0.16s' }}>
            <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase font-medium
              text-ink dark:text-bone transition-colors duration-500">
              Соціальні мережі
            </p>
            <div className="w-10 h-px bg-rule dark:bg-white/[0.12] transition-colors duration-500" />
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-mid dark:text-bone/45 hover:text-ink dark:hover:text-bone transition-colors group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0">
                <rect x="2" y="2" width="20" height="20" rx="5.5"/>
                <circle cx="12" cy="12" r="4.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              <span className="font-mono text-[0.7rem] tracking-[0.06em]">
                @razor.barbershop.kalush
              </span>
            </a>
            <div className="mt-2">
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-ink dark:bg-bone text-bone dark:text-ink
                  font-mono text-[0.7rem] tracking-[0.14em] uppercase
                  px-6 py-3.5 hover:bg-accent dark:hover:bg-accent dark:hover:text-bone
                  transition-colors duration-200"
              >
                Записатись онлайн
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <iframe
        src={MAP_URL}
        className="w-full h-[420px] sm:h-[260px] border-0 block"
        style={{ filter: 'grayscale(25%)' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Razor Barbershop на карті"
      />
    </section>
  )
}
