import { config } from "../config"

function StatusBanner() {
  if (!config.notice.enabled) return null

  return (
    <div className="notice" role="status">
      <div className="container notice-inner">
        <span className="notice-badge">Security notice</span>
        <p>
          Blockaid, a wallet security provider, has flagged $NOW as malicious. We believe this is a
          mistake and are working with them to resolve it.
        </p>
        <details className="notice-details">
          <summary>What this means</summary>
          <div>
            <p>
              Some wallets and apps that use Blockaid may show a warning when you view or trade $NOW.
              The contract is public and can be verified on{" "}
              <a href={config.links.basescan} target="_blank" rel="noopener noreferrer">BaseScan</a>.
            </p>
            <p>
              You can wait until the review is finished, or continue at your own discretion after
              checking the contract address yourself. This is not financial advice.
            </p>
          </div>
        </details>
      </div>
    </div>
  )
}

export default StatusBanner
