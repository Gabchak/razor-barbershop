import { useState, useEffect } from 'react'

function ScissorsSVG() {
  return (
    <svg
      width="280"
      height="140"
      viewBox="0 0 280 140"
      fill="none"
      aria-hidden="true"
      style={{ animation: 'scissorsAppear 0.5s 0.15s cubic-bezier(0.22,1,0.36,1) both' }}
    >
      {/* ── Upper blade group – rotates around pivot (140,70) ── */}
      <g style={{ transformOrigin: '140px 70px', animation: 'bladeOpen 1.1s 0.55s ease-in-out both' }}>
        {/* Handle ring */}
        <circle cx="30" cy="34" r="24" stroke="#A89070" strokeWidth="2.5" fill="none" />
        <circle cx="30" cy="34" r="8"  fill="#A89070" opacity="0.35" />
        {/* Finger loop detail */}
        <path d="M14,20 Q6,34 14,48" stroke="#A89070" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Shank */}
        <line x1="54" y1="34" x2="140" y2="70" stroke="#C8B89A" strokeWidth="3.5" strokeLinecap="round" />
        {/* Blade */}
        <path d="M140,70 L258,28 C263,26 265,30 263,33 L250,39 L140,70Z" fill="#F7F6F3" />
        {/* Blade edge shine */}
        <path d="M145,68 L258,29" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      </g>

      {/* ── Lower blade group – rotates around pivot (140,70) ── */}
      <g style={{ transformOrigin: '140px 70px', animation: 'bladeClose 1.1s 0.55s ease-in-out both' }}>
        {/* Handle ring */}
        <circle cx="30" cy="106" r="24" stroke="#A89070" strokeWidth="2.5" fill="none" />
        <circle cx="30" cy="106" r="8"  fill="#A89070" opacity="0.35" />
        {/* Finger loop detail */}
        <path d="M14,92 Q6,106 14,120" stroke="#A89070" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Shank */}
        <line x1="54" y1="106" x2="140" y2="70" stroke="#C8B89A" strokeWidth="3.5" strokeLinecap="round" />
        {/* Blade */}
        <path d="M140,70 L258,112 C263,114 265,110 263,107 L250,101 L140,70Z" fill="#F7F6F3" />
        {/* Blade edge shine */}
        <path d="M145,72 L258,111" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      </g>

      {/* ── Pivot rivet ── */}
      <circle cx="140" cy="70" r="9"  fill="#2a2a28" />
      <circle cx="140" cy="70" r="5"  fill="#444" />
      <circle cx="138" cy="68" r="1.5" fill="#666" />
    </svg>
  )
}

export default function Loader({ onDone }) {
  const [phase, setPhase] = useState('show')   // 'show' | 'split'
  const [gone,  setGone]  = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('split'), 2200)
    const t2 = setTimeout(() => setGone(true),     3100)
    const t3 = setTimeout(onDone,                  3000)
    return () => [t1, t2, t3].forEach(clearTimeout)
  }, [onDone])

  if (gone) return null

  const splitting = phase === 'split'

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      {/* ── Top curtain ── */}
      <div
        className="absolute inset-x-0 top-0 h-1/2 bg-dark flex flex-col items-center justify-end"
        style={{
          transition: splitting ? 'transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
          transform: splitting ? 'translateY(-100%)' : 'translateY(0)',
        }}
      >
        {/* Accent line at cut */}
        <div
          className="w-full h-px bg-accent origin-left"
          style={{ animation: 'lineGrow 0.6s 1.6s ease-out both' }}
        />
      </div>

      {/* ── Bottom curtain ── */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-dark"
        style={{
          transition: splitting ? 'transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
          transform: splitting ? 'translateY(100%)' : 'translateY(0)',
        }}
      />

      {/* ── Center content ── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-7 pointer-events-none"
        style={{
          transition: 'opacity 0.25s ease',
          opacity: splitting ? 0 : 1,
        }}
      >
        <ScissorsSVG />

        {/* RAZOR wordmark */}
        <div style={{ overflow: 'hidden' }}>
          <h1
            className="font-serif font-black text-bone tracking-[0.18em] select-none"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              animation: 'loaderTextReveal 0.65s 1.1s cubic-bezier(0.22,1,0.36,1) both',
              clipPath: 'inset(0 100% 0 0)',
            }}
          >
            RAZOR
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="font-mono text-[0.65rem] tracking-[0.28em] uppercase text-bone/40"
          style={{ animation: 'loaderSubFade 0.5s 1.55s ease-out both', opacity: 0 }}
        >
          Barbershop · Калуш
        </p>

        {/* Loading dots */}
        <div
          className="flex gap-1.5"
          style={{ animation: 'loaderSubFade 0.4s 1.7s ease-out both', opacity: 0 }}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="w-1 h-1 rounded-full bg-accent"
              style={{
                animation: `loaderSubFade 0.6s ${1.8 + i * 0.15}s ease-in-out infinite alternate`,
                opacity: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
