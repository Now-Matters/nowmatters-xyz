import { config } from "../config"
import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
          
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#top">NOW MATTERS</a>

          <button
            className="mobile-menu"
            id="menuButton"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            ☰
          </button>

          <nav className={`nav-links ${isOpen ? "open" : ""}`} id="navLinks">
            <a href="#philosophy" onClick={closeMenu}>About</a>
            <a href="#token" onClick={closeMenu}>Token</a>
            <a href="#wallet" onClick={closeMenu}>Reminder</a>
            <a href="#value" onClick={closeMenu}>Value</a>
            <a className="button" target="_blank" href={config.links.uniswap} onClick={closeMenu}>
              Get $NOW
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
