import { useFadeUpGroup } from '../hooks/useFadeUp'
import { asset } from '../utils/asset'

const BOOK_URL = 'https://n1407247.alteg.io/company/1339749/personal/menu?utm_source=ig&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3&o='

const services = [
  { name: 'Класична стрижка',    desc: 'Миття, стрижка ножицями або машинкою, укладання',  price: '350 ₴', dur: '60 хв', icon: '✂' },
  { name: 'Стрижка + борода',    desc: 'Повний грумінг: волосся та оформлення бороди',       price: '550 ₴', dur: '90 хв', icon: '⚡' },
  { name: 'Королівське гоління', desc: 'Гарячий рушник, пряме лезо, заспокійливі масла',    price: '400 ₴', dur: '45 хв', icon: '◈' },
  { name: 'Корекція бороди',     desc: 'Оформлення контуру, триммер, фінішний догляд',       price: '200 ₴', dur: '30 хв', icon: '◇' },
  { name: 'Дитяча стрижка',      desc: 'До 12 років, спокійна атмосфера, швидко',           price: '250 ₴', dur: '40 хв', icon: '★' },
]

function ServiceRow({ s, i }) {
  return (
    <div className={`fade-up grid sm:grid-cols-[1fr_auto] flex-col py-8 sm:py-7 border-b gap-4 sm:gap-8 cursor-default
      border-ink/10 dark:border-white/[0.08] transition-colors duration-500
      ${i === 0 ? 'border-t border-ink/10 dark:border-white/[0.08]' : ''}`}>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.7rem] text-accent/70">{s.icon}</span>
          <span className="font-serif text-[clamp(1.2rem,3vw,2.2rem)] font-bold leading-none text-ink dark:text-bone transition-colors duration-500">
            {s.name}
          </span>
        </div>
        <span className="text-[0.82rem] font-light tracking-[0.01em] ml-6 text-mid dark:text-bone/40 transition-colors duration-500">
          {s.desc}
        </span>
      </div>
      <div className="flex items-center sm:flex-col sm:items-end gap-3 sm:gap-1 ml-6 sm:ml-0">
        <span className="font-serif text-[1.8rem] font-black leading-none text-ink dark:text-bone transition-colors duration-500">
          {s.price}
        </span>
        <span className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-accent">{s.dur}</span>
      </div>
    </div>
  )
}

export default function Services() {
  const ref = useFadeUpGroup()

  return (
    <section id="services" className="relative py-[8rem] px-[5vw] sm:py-[4rem]"
      style={{ backgroundImage: `url(${asset('services-bg.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-bone/[0.88] dark:bg-dark/[0.84] pointer-events-none transition-colors duration-500" />

      <div ref={ref} className="relative z-[1]">
        <div className="flex items-start justify-between mb-16 sm:mb-10 flex-wrap gap-4">
          <div>
            <p className="fade-up mono-tag mb-4">02 — Послуги</p>
            <h2 className="fade-up font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-none text-ink dark:text-bone transition-colors duration-500">
              Що ми<br />робимо.
            </h2>
          </div>
          <p className="fade-up text-[0.9rem] max-w-[30ch] font-light leading-[1.7] pt-2 text-mid dark:text-bone/40 transition-colors duration-500">
            Усі послуги виконуються виключно за записом. Час включає консультацію та укладання.
          </p>
        </div>

        <div className="flex flex-col">
          {services.map((s, i) => <ServiceRow key={i} s={s} i={i} />)}
        </div>

        <div className="fade-up pt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
            className="inline-block font-mono text-[0.72rem] tracking-[0.14em] uppercase px-8 py-4
              bg-ink text-bone dark:bg-bone dark:text-dark
              hover:bg-accent hover:text-bone dark:hover:bg-accent dark:hover:text-bone transition-colors duration-200">
            Записатись онлайн
          </a>
          <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-ink/35 dark:text-bone/30 transition-colors duration-500">
            Або зателефонуйте: +380 98 970 70 07
          </span>
        </div>
      </div>
    </section>
  )
}
