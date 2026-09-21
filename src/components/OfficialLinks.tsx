import { useI18n } from "../i18n/context"
import { config } from "../config"

function OfficialLinks() {
  const { t } = useI18n()
  const links = [
    ["Website", "Official project website.", "https://nowmatters.xyz/"],
    ["GitHub", "Official project organization and source code.", config.links.github],
    ["X", "Official X (formerly Twitter) account.", config.links.x],
    ["Telegram", "Official NOW MATTERS Telegram channel.", config.links.telegram],
    ["BaseScan", "Publicly verifiable token and transaction data.", config.links.basescan],
    ["Uniswap Auction", "Official $NOW launch auction.", config.links.uniswap],
  ]

  return (
    <section className="info-section" id="links">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">{t("Official links")}</p>
          <h2 className="section-title">{t("One place for the real links.")}</h2>
        </div>
        <div className="info-grid">
          {links.map(([name, description, href]) => (
            <div className="info-card" key={name}>
              <h3>{t(name)}</h3>
              <p>{t(description)}</p>
              <div className="link-row">
                <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">{t("Open ↗")}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OfficialLinks
