import { useI18n } from "../i18n/context"
import { config } from "../config"

function Launch() {
  const { t } = useI18n()
  return (
    <section className="info-section" id="launch">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">{t("Launch")}</p>
          <h2 className="section-title">{t("Launched through Uniswap.")}</h2>
          <div className="body-copy">
            <p>{t("$NOW launched through a Uniswap auction on Base. The token allocation and launch configuration are publicly verifiable on-chain.")}</p>
          </div>
        </div>

        <div className="launch-box">
          <p className="eyebrow">{t("Uniswap auction")}</p>
          <h3>$NOW / Base</h3>

          <div className="launch-meta">
            <div className="launch-meta-item"><span className="stat-label">{t("Launch mechanism")}</span><span className="stat-value">{t("Uniswap Auction")}</span></div>
            <div className="launch-meta-item"><span className="stat-label">{t("Token allocation")}</span><span className="stat-value">{t("50% auction · 50% future LP")}</span></div>
            <div className="launch-meta-item"><span className="stat-label">{t("LP withdrawal")}</span><span className="stat-value">{t("Unavailable for 1 month after auction")}</span></div>
          </div>

          <div className="body-copy" style={{ marginTop: 28 }}>
            <p>{t("The entire token supply was allocated to the Uniswap launch configuration. Uniswap locked the token allocations according to the auction setup. The liquidity withdrawal is configured to be unavailable for one month after the auction ends.")}</p>
          </div>

          <div className="link-row">
            <a className="button" href={config.links.uniswap} target="_blank" rel="noopener noreferrer">{t("View Uniswap Auction")}</a>
            <a className="button secondary" href={config.links.basescan} target="_blank" rel="noopener noreferrer">{t("View on BaseScan")}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Launch
