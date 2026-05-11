import { useEffect, useRef, useState } from 'react'
import { asset } from '../utils/asset'

const BOOK_URL = 'https://n1407247.alteg.io/company/1339749/personal/menu?utm_source=ig&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3&o='

const slides = [
  { img: asset('hero-1.jpg'), pos: 'center 30%' },
  { img: asset('hero-2.jpg'), pos: 'center 20%' },
  { img: asset('hero-3.jpg'), pos: 'center top'  },
]

const stats = [
  { value: 4000, suffix: '+',  label: 'Задоволених клієнтів' },
  { value: 7,    suffix: '',   label: 'Майстрів' },
  { value: 6,    suffix: ' р.', label: 'Досвіду' },
  { value: 4.9,  suffix: ' ★', label: 'Google Reviews' },
]

function useCounter(target, duration = 1600, decimals = 0) {
  const [val, setVal] = useState(0)
  const started = useRef(false)

  const start = () => {
    if (started.current) return
    started.current = true
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(+(eased * target).toFixed(decimals))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  return [val, start]
}

function StatCounter({ value, suffix, label }) {
  const ref = useRef(null)
  const decimals = Number.isInteger(value) ? 0 : 1
  const [count, startCount] = useCounter(value, 1600, decimals)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { startCount(); obs.disconnect() } },
      { threshold: 0.5 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const display = decimals === 0 ? Math.round(count) : count.toFixed(1)

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <strong className="font-serif font-black text-bone leading-none text-[1.7rem] sm:text-[2.2rem]">
        {display}{suffix}
      </strong>
      <span className="font-mono text-[0.64rem] tracking-[0.1em] uppercase text-bone/35">
        {label}
      </span>
    </div>
  )
}

export default function Hero() {
  const bodyRef = useRef(null)

  useEffect(() => {
    const items = bodyRef.current?.querySelectorAll('.fade-up') ?? []
    items.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 200 + i * 120)
    })
  }, [])

  return (
    <section
      id="hero"
      className="min-h-[100dvh] bg-dark grid grid-rows-[1fr_auto] px-[5vw] pt-16 relative overflow-hidden"
    >
      {/* Ken Burns slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover opacity-0 [filter:grayscale(40%)_brightness(0.55)]
              ${i === 0 ? 'slide-1' : i === 1 ? 'slide-2' : 'slide-3'}`}
            style={{ backgroundImage: `url(${s.img})`, backgroundPosition: s.pos }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-dark z-[1]" />
      </div>

      {/* Body */}
      <div ref={bodyRef} className="relative z-[2] flex flex-col justify-center py-[8vh] sm:py-[6vh]">
        <p className="fade-up mono-tag mb-8">Barbershop · Калуш · пр. Лесі Українки 66</p>
        <h1 className="fade-up text-bone text-[clamp(2.8rem,10vw,9rem)] max-w-[12ch] mb-10 leading-[1.0]">
          Мистецтво<br />
          <em className="italic text-accent">чистого</em><br />
          зрізу.
        </h1>
        <p className="fade-up text-bone/45 text-[1rem] max-w-[36ch] leading-[1.7] font-light mb-12">
          Ми не просто стрижемо. Ми відточуємо образ до деталі — з точністю леза та повагою до вашого часу.
        </p>
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
          className="fade-up w-full sm:w-fit inline-block bg-bone text-dark text-center
            font-mono text-[0.72rem] tracking-[0.14em] uppercase px-9 py-4
            hover:bg-accent hover:text-bone transition-colors duration-200">
          Забронювати візит
        </a>
      </div>

      {/* Stats footer */}
      <div className="relative z-[2] grid grid-cols-2 sm:flex sm:justify-between gap-5 sm:gap-2
        pb-8 border-t border-white/[0.07] pt-6">
        {stats.map((s, i) => <StatCounter key={i} {...s} />)}
      </div>
    </section>
  )
}
