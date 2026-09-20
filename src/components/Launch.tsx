import { config } from "../config"

function Launch() {
  return (
    <section className="info-section" id="launch">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Launch</p>
          <h2 className="section-title">Launched through Uniswap.</h2>
          <div className="body-copy">
            <p>
              $NOW launched through a Uniswap auction on Base. The token allocation
              and launch configuration are publicly verifiable on-chain.
            </p>
          </div>
        </div>

        <div className="launch-box">
          <p className="eyebrow">Uniswap auction</p>
          <h3>$NOW / Base</h3>

          <div className="launch-meta">
            <div className="launch-meta-item"><span className="stat-label">Launch mechanism</span><span className="stat-value">Uniswap Auction</span></div>
            <div className="launch-meta-item"><span className="stat-label">Token allocation</span><span className="stat-value">50% auction · 50% future LP</span></div>
            <div className="launch-meta-item"><span className="stat-label">LP withdrawal</span><span className="stat-value">Unavailable for 1 month after auction</span></div>
          </div>

          <div className="body-copy" style={{ marginTop: 28 }}>
            <p>
              The entire token supply was allocated to the Uniswap launch configuration.
              Uniswap locked the token allocations according to the auction setup. The
              liquidity withdrawal is configured to be unavailable for one month after the auction ends.
            </p>
          </div>

          <div className="link-row">
            <a className="button" href={config.links.uniswap} target="_blank" rel="noopener noreferrer">View Uniswap Auction</a>
            <a className="button secondary" href={config.links.basescan} target="_blank" rel="noopener noreferrer">View on BaseScan</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Launch
