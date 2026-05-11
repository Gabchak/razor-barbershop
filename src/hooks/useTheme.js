import { useState, useEffect } from 'react'

export function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('razor-theme') === 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('razor-theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('razor-theme', 'light')
    }
  }, [dark])

  return [dark, () => setDark(d => !d)]
}
