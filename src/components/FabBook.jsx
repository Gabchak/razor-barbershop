import { useState, useEffect } from 'react'

const BOOK_URL = 'https://n1407247.alteg.io/company/1339749/personal/menu?utm_source=ig&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3&o='

export default function FabBook() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={BOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Онлайн запис"
      className={`fixed bottom-10 right-10 z-[200]
        hidden sm:flex flex-col items-center justify-center
        w-[90px] h-[90px] rounded-full bg-ink text-bone
        font-mono text-[0.55rem] tracking-[0.12em] uppercase text-center leading-[1.5]
        shadow-[0_8px_32px_rgba(0,0,0,0.35)]
        hover:bg-accent hover:scale-110 transition-all duration-250
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}
      style={{ transition: 'background 0.25s, transform 0.25s, opacity 0.3s' }}
    >
      <span>Онлайн</span>
      <span>запис</span>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full border border-accent/30 animate-ping" style={{ animationDuration: '2.5s' }} />
    </a>
  )
}
