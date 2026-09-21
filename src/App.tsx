import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Wallet from './components/WalletReminder'
import TokenInfo from './components/TokenInfo'
import Transparency from './components/Transparency'
import Launch from './components/Launch'
import HowToGet from './components/HowToGet'
import BuiltOn from './components/BuiltOn'
import Founder from './components/Founder'
import OfficialLinks from './components/OfficialLinks'
import FAQ from './components/FAQ'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('main section:not(.hero) .container')
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.08 })
    els.forEach((el) => { el.classList.add('reveal'); io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Philosophy />
        <Wallet />
        <TokenInfo />
        <Transparency />
        <Launch />
        <HowToGet />
        <BuiltOn />
        <Founder />
        <OfficialLinks />
        <FAQ />
        <Disclaimer />
      </main>
      <Footer />
    </>
  )
}

export default App
