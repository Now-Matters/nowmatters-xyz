import { config } from "../config"
import { useState } from "react"
import { useI18n } from "../i18n/context"
import LanguageSwitcher from "./LanguageSwitcher"

function Navbar() {
  const { t } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#top">NOW MATTERS</a>

        <button
          className="mobile-menu"
          aria-label={isOpen ? t("Close menu") : t("Open menu")}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          ☰
        </button>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#philosophy" onClick={closeMenu}>{t("About")}</a>
          <a href="#token" onClick={closeMenu}>{t("Token")}</a>
          <a href="#transparency" onClick={closeMenu}>{t("Transparency")}</a>
          <a href="#how-to-get" onClick={closeMenu}>{t("How to get")}</a>
          <a href="#launch" onClick={closeMenu}>{t("Launch")}</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <LanguageSwitcher />
          <a className="button" target="_blank" rel="noopener noreferrer" href={config.links.uniswap} onClick={closeMenu}>
            {t("Get $NOW")}
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
