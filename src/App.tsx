import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Wallet from './components/WalletReminder'
import TokenInfo from './components/TokenInfo'
import Transparency from './components/Transparency'
import Launch from './components/Launch'
import BuiltOn from './components/BuiltOn'
import Founder from './components/Founder'
import OfficialLinks from './components/OfficialLinks'
import FAQ from './components/FAQ'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'

function App() {
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
