import { useState, useEffect } from 'react'
import { asset } from '../utils/asset'

const BOOK_URL = 'https://n1407247.alteg.io/company/1339749/personal/menu?utm_source=ig&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3&o='
const IG_URL   = 'https://www.instagram.com/razor.barbershop.kalush'

const links = [
  { href: '#about',    label: 'Про нас' },
  { href: '#services', label: 'Послуги' },
  { href: '#process',  label: 'Процес' },
  { href: '#book',     label: 'Контакти' },
]

function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={dark ? 'Світла тема' : 'Темна тема'}
      className="relative w-9 h-9 flex items-center justify-center rounded-full overflow-hidden
        text-ink/50 dark:text-bone/50
        hover:text-ink dark:hover:text-bone
        hover:bg-black/[0.06] dark:hover:bg-white/[0.07]
        transition-all duration-200"
    >
      <svg
        width="18" height="18" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
        className="absolute"
        style={{
          transform:  dark ? 'rotate(-90deg) scale(0)' : 'rotate(0deg) scale(1)',
          opacity:    dark ? 0 : 1,
          transition: 'transform 350ms, opacity 350ms',
        }}
      >
        <circle cx="12" cy="12" r="4.5"/>
        <line x1="12" y1="2"    x2="12" y2="4.5"/>
        <line x1="12" y1="19.5" x2="12" y2="22"/>
        <line x1="4.93"  y1="4.93"  x2="6.64"  y2="6.64"/>
        <line x1="17.36" y1="17.36" x2="19.07" y2="19.07"/>
        <line x1="2"    y1="12" x2="4.5" y2="12"/>
        <line x1="19.5" y1="12" x2="22"  y2="12"/>
        <line x1="4.93"  y1="19.07" x2="6.64"  y2="17.36"/>
        <line x1="17.36" y1="6.64"  x2="19.07" y2="4.93"/>
      </svg>
      <svg
        width="17" height="17" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
        className="absolute"
        style={{
          transform:  dark ? 'rotate(0deg) scale(1)' : 'rotate(90deg) scale(0)',
          opacity:    dark ? 1 : 0,
          transition: 'transform 350ms, opacity 350ms',
        }}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    </button>
  )
}

export default function Nav({ dark, onToggleTheme }) {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[5vw] h-16
        transition-all duration-300 backdrop-blur-sm
        bg-bone/95 dark:bg-dark
        border-b border-rule dark:border-white/[0.06]
        ${scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_32px_rgba(0,0,0,0.5)]' : ''}`}
      >
        <a href="#" className="flex items-center gap-2.5 no-underline group">
          <img
            src={asset('logo.jpg')}
            alt="Razor Barbershop"
            className="h-12 w-12 object-cover rounded-full brightness-90 dark:brightness-110 dark:mix-blend-screen transition-all duration-300"
          />
          <span className="font-mono text-[0.7rem] tracking-[0.18em] uppercase
            text-ink/40 dark:text-bone/50 group-hover:text-ink/70 dark:group-hover:text-bone/80
            transition-colors hidden sm:block">
            Razor
          </span>
        </a>

        <ul className="hidden md:flex gap-10 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="font-mono text-[0.68rem] tracking-[0.12em] uppercase
                text-ink/45 dark:text-bone/50 hover:text-ink dark:hover:text-bone transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={IG_URL} target="_blank" rel="noopener noreferrer"
            className="text-ink/45 dark:text-bone/50 hover:text-ink dark:hover:text-bone transition-colors"
            aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5.5"/>
              <circle cx="12" cy="12" r="4.5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>

          <ThemeToggle dark={dark} onToggle={onToggleTheme} />

          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer"
            className="hidden lg:block font-mono text-[0.65rem] tracking-[0.12em] uppercase px-5 py-2.5
              bg-ink text-bone dark:bg-bone dark:text-dark
              hover:bg-accent hover:text-bone dark:hover:bg-accent dark:hover:text-bone
              transition-colors duration-200">
            Записатись
          </a>

          <button onClick={() => setOpen(o => !o)}
            className="md:hidden flex flex-col justify-center gap-[5px] p-1.5 bg-transparent border-none cursor-pointer"
            aria-label="Меню">
            {[0, 1, 2].map(i => (
              <span key={i} className={`block w-[22px] h-[1.5px] bg-ink/60 dark:bg-bone/65 transition-all duration-250 origin-center
                ${i === 0 && open ? 'translate-y-[6.5px] rotate-45'   : ''}
                ${i === 1 && open ? 'opacity-0 scale-x-0'             : ''}
                ${i === 2 && open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
            ))}
          </button>
        </div>
      </nav>

      <div className={`fixed top-16 left-0 right-0 z-[99] md:hidden
        bg-bone dark:bg-dark border-b border-rule dark:border-white/[0.07]
        transition-all duration-250
        ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={close}
            className="block font-mono text-[0.72rem] tracking-[0.14em] uppercase
              text-ink/50 dark:text-bone/55 hover:text-ink dark:hover:text-bone
              hover:bg-black/[0.03] dark:hover:bg-white/[0.03]
              px-[5vw] py-4 border-b border-rule dark:border-white/[0.05] transition-colors">
            {l.label}
          </a>
        ))}
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" onClick={close}
          className="block font-mono text-[0.72rem] tracking-[0.14em] uppercase
            text-accent hover:text-ink dark:hover:text-bone px-[5vw] py-4 transition-colors">
          Онлайн запис →
        </a>
      </div>
    </>
  )
}
