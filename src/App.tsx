import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Wallet from './components/WalletReminder'
import TokenInfo from './components/TokenInfo'
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
      </main>
      <Footer />
    </>
  )
}

export default App
