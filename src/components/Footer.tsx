import { useI18n } from "../i18n/context"
import { config } from "../config"

function Footer() {
  const { t } = useI18n()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">NOW MATTERS</div>
          <div className="footer-meta">$NOW &nbsp;/&nbsp; nowmatters.xyz &nbsp;/&nbsp; Base</div>
          <div className="footer-contract">{config.token.contract}</div>
        </div>

        <div className="socials">
          <a href={config.links.x} aria-label="X" target="_blank" rel="noopener noreferrer">X</a>
          <a href={config.links.telegram} aria-label="Telegram" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href={config.links.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={config.links.basescan} aria-label="BaseScan" target="_blank" rel="noopener noreferrer">BaseScan</a>
          <a href={config.links.email} aria-label="Email">Email</a>
        </div>

        <div className="footer-tagline">
          {t("Not tomorrow.")}<br />
          {t("Not yesterday.")}<br />
          <strong>{t("Now.")}</strong>
        </div>
      </div>
    </footer>
  )
}

export default Footer
