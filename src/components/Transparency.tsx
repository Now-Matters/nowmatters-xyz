import { useI18n } from "../i18n/context"
import Icon from "./Icons"

function Transparency() {
  const { t } = useI18n()
  return (
    <section className="info-section alt" id="transparency">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">{t("Transparency")}</p>
          <h2 className="section-title">{t("Nothing hidden.")}</h2>
          <div className="body-copy">
            <p>{t("NOW MATTERS is intentionally simple. The token contract does not contain project-specific mechanisms for changing balances, taking transfer taxes, blacklisting addresses, or minting additional tokens.")}</p>
          </div>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <span className="card-icon"><Icon name="layers" /></span>
            <h3>{t("Supply")}</h3>
            <p>{t("The initial and total supply is 1,000,000 NOW. The contract has no additional mint function.")}</p>
          </div>
          <div className="info-card">
            <span className="card-icon"><Icon name="percent" /></span>
            <h3>{t("Taxes")}</h3>
            <p>{t("There are no buy, sell, or transfer taxes in the token contract.")}</p>
          </div>
          <div className="info-card">
            <span className="card-icon"><Icon name="shield" /></span>
            <h3>{t("Restrictions")}</h3>
            <p>{t("No blacklist, trading-limit, or special transfer-restriction mechanism is implemented.")}</p>
          </div>
          <div className="info-card">
            <span className="card-icon"><Icon name="code" /></span>
            <h3>{t("Contract design")}</h3>
            <p>{t("The token uses a standard ERC-20 implementation based on OpenZeppelin and is not an upgradeable proxy.")}</p>
          </div>
        </div>

        <div className="transparency-note">
          <p className="stat-label">{t("What $NOW does not promise")}</p>
          <p>{t("NOW MATTERS does not promise profit, revenue, future utility, exchange listings, or any particular market value. $NOW is a memecoin and a reminder, not a promise of financial return.")}</p>
        </div>
      </div>
    </section>
  )
}

export default Transparency
