import { config } from "../config"
import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#top">NOW MATTERS</a>

        <button
          className="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          ☰
        </button>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#philosophy" onClick={closeMenu}>About</a>
          <a href="#token" onClick={closeMenu}>Token</a>
          <a href="#transparency" onClick={closeMenu}>Transparency</a>
          <a href="#how-to-get" onClick={closeMenu}>How to get</a>
          <a href="#launch" onClick={closeMenu}>Launch</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a className="button" target="_blank" rel="noopener noreferrer" href={config.links.uniswap} onClick={closeMenu}>
            Get $NOW
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
