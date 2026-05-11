import { asset } from '../utils/asset'

const BOOK_URL = 'https://n1407247.alteg.io/company/1339749/personal/menu?utm_source=ig&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3&o='

export default function Footer() {
  return (
    <footer className="border-t transition-colors duration-500
      bg-bone dark:bg-dark border-rule dark:border-white/[0.06]
      py-10 px-[5vw] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 flex-wrap">
      <a href="#" className="shrink-0">
        <img
          src={asset('logo.jpg')}
          alt="Razor Barbershop"
          className="h-14 w-14 object-cover rounded-full brightness-90 dark:brightness-110 dark:mix-blend-screen transition-all duration-300"
        />
      </a>
      <ul className="flex flex-wrap gap-6 sm:gap-8 list-none">
        {[
          { href: '#about',    label: 'Про нас'  },
          { href: '#services', label: 'Послуги'  },
          { href: '#process',  label: 'Процес'   },
          { href: BOOK_URL,    label: 'Запис', external: true },
        ].map(l => (
          <li key={l.label}>
            <a href={l.href}
              {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="font-mono text-[0.62rem] tracking-[0.1em] uppercase transition-colors duration-200
                text-ink/30 dark:text-bone/30 hover:text-ink dark:hover:text-bone">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <span className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-ink/25 dark:text-bone/25 transition-colors duration-500">
        © 2026 Razor Barbershop. Калуш.
      </span>
    </footer>
  )
}
