import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el  = document.documentElement
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setPct(pct)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="scroll-progress"
      style={{ width: `${pct}%` }}
      aria-hidden="true"
    />
  )
}
