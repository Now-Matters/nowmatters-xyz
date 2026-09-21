import { config } from "../config"
import CopyButton from "./CopyButton"

function TokenInfo() {
  return (
    <section className="info-section" id="token-details">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">The $NOW token</p>
          <h2 className="section-title">Simple and transparent.</h2>
          <div className="body-copy">
            <p>
              $NOW is an ERC-20 token deployed on Base. The contract is intentionally simple:
              a fixed initial supply, four decimals, and no project-specific tax or blacklist logic.
            </p>
          </div>
        </div>

        <div className="token-table-wrap">
          <table className="token-table">
            <tbody>
              <tr><th>Name</th><td>Now Matters</td></tr>
              <tr><th>Symbol</th><td>$NOW</td></tr>
              <tr><th>Network</th><td>Base</td></tr>
              <tr><th>Standard</th><td>ERC-20</td></tr>
              <tr><th>Total supply</th><td>1,000,000 NOW</td></tr>
              <tr><th>Decimals</th><td>4</td></tr>
              <tr><th>Contract</th><td><span className="mono">{config.token.contract}</span> <CopyButton value={config.token.contract} /></td></tr>
            </tbody>
          </table>
        </div>

        <div className="link-row">
          <a className="text-link" href={config.links.basescan} target="_blank" rel="noopener noreferrer">View contract on BaseScan</a>
          <a className="text-link" href={config.links.github} target="_blank" rel="noopener noreferrer">Project GitHub</a>
        </div>
      </div>
    </section>
  )
}

export default TokenInfo
