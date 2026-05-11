import { useState, useCallback } from 'react'
import { useTheme }      from './hooks/useTheme'
import ScrollProgress    from './components/ScrollProgress'
import Loader            from './components/Loader'
import Nav               from './components/Nav'
import Hero              from './components/Hero'
import About             from './components/About'
import Services          from './components/Services'
import Process           from './components/Process'
import Contacts          from './components/Contacts'
import Footer            from './components/Footer'
import FabBook           from './components/FabBook'

export default function App() {
  const [dark, toggleTheme] = useTheme()
  const [loaded, setLoaded] = useState(false)

  const handleLoaded = useCallback(() => setLoaded(true), [])

  return (
    <>
      {!loaded && <Loader onDone={handleLoaded} />}

      <div
        className="transition-opacity duration-700"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <ScrollProgress />
        <Nav dark={dark} onToggleTheme={toggleTheme} />

        <main>
          <Hero />
          <hr className="border-0 border-t border-rule dark:border-white/[0.07] m-0 transition-colors duration-500" />
          <About />
          <hr className="border-0 border-t border-rule dark:border-white/[0.07] m-0 transition-colors duration-500" />
          <Services />
          <hr className="border-0 border-t border-rule dark:border-white/[0.07] m-0 transition-colors duration-500" />
          <Process />
          <Contacts />
        </main>

        <Footer />
        <FabBook />
      </div>
    </>
  )
}
