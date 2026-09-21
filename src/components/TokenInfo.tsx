import { useI18n } from "../i18n/context"
import { config } from "../config"
import CopyButton from "./CopyButton"

function TokenInfo() {
  const { t } = useI18n()
  return (
    <section className="info-section" id="token-details">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">{t("The $NOW token")}</p>
          <h2 className="section-title">{t("Simple and transparent.")}</h2>
          <div className="body-copy">
            <p>{t("$NOW is an ERC-20 token deployed on Base. The contract is intentionally simple: a fixed initial supply, four decimals, and no project-specific tax or blacklist logic.")}</p>
          </div>
        </div>

        <div className="token-table-wrap">
          <table className="token-table">
            <tbody>
              <tr><th>{t("Name")}</th><td>Now Matters</td></tr>
              <tr><th>{t("Symbol")}</th><td>$NOW</td></tr>
              <tr><th>{t("Network")}</th><td>Base</td></tr>
              <tr><th>{t("Standard")}</th><td>ERC-20</td></tr>
              <tr><th>{t("Total supply")}</th><td>1,000,000 NOW</td></tr>
              <tr><th>{t("Decimals")}</th><td>4</td></tr>
              <tr><th>{t("Contract")}</th><td><span className="mono">{config.token.contract}</span> <CopyButton value={config.token.contract} /></td></tr>
            </tbody>
          </table>
        </div>

        <div className="link-row">
          <a className="text-link" href={config.links.basescan} target="_blank" rel="noopener noreferrer">{t("View contract on BaseScan")}</a>
          <a className="text-link" href={config.links.github} target="_blank" rel="noopener noreferrer">{t("Project GitHub")}</a>
        </div>
      </div>
    </section>
  )
}

export default TokenInfo
