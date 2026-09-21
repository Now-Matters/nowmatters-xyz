import { config } from "../config"
import { useI18n } from "../i18n/context"

function StatusBanner() {
  const { t } = useI18n()
  if (!config.notice.enabled) return null

  return (
    <div className="notice" role="status">
      <div className="container notice-inner">
        <span className="notice-badge">{t("Security notice")}</span>
        <p>{t("Blockaid, a wallet security provider, has flagged $NOW as malicious. We believe this is a mistake and are working with them to resolve it.")}</p>
        <details className="notice-details">
          <summary>{t("What this means")}</summary>
          <div>
            <p>{t("Some wallets and apps that use Blockaid may show a warning when you view or trade $NOW.")}</p>
            <p>{t("You can wait until the review is finished, or continue at your own discretion after checking the contract address yourself. This is not financial advice.")}</p>
            <p><a href={config.links.basescan} target="_blank" rel="noopener noreferrer">{t("View the contract on BaseScan ↗")}</a></p>
          </div>
        </details>
      </div>
    </div>
  )
}

export default StatusBanner
