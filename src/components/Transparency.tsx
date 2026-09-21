import Icon from "./Icons"

function Transparency() {
  return (
    <section className="info-section alt" id="transparency">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Transparency</p>
          <h2 className="section-title">Nothing hidden.</h2>
          <div className="body-copy">
            <p>
              NOW MATTERS is intentionally simple. The token contract does not contain
              project-specific mechanisms for changing balances, taking transfer taxes,
              blacklisting addresses, or minting additional tokens.
            </p>
          </div>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <span className="card-icon"><Icon name="layers" /></span>
            <h3>Supply</h3>
            <p>The initial and total supply is 1,000,000 NOW. The contract has no additional mint function.</p>
          </div>
          <div className="info-card">
            <span className="card-icon"><Icon name="percent" /></span>
            <h3>Taxes</h3>
            <p>There are no buy, sell, or transfer taxes in the token contract.</p>
          </div>
          <div className="info-card">
            <span className="card-icon"><Icon name="shield" /></span>
            <h3>Restrictions</h3>
            <p>No blacklist, trading-limit, or special transfer-restriction mechanism is implemented.</p>
          </div>
          <div className="info-card">
            <span className="card-icon"><Icon name="code" /></span>
            <h3>Contract design</h3>
            <p>The token uses a standard ERC-20 implementation based on OpenZeppelin and is not an upgradeable proxy.</p>
          </div>
        </div>

        <div className="transparency-note">
          <p className="stat-label">What $NOW does not promise</p>
          <p>
            NOW MATTERS does not promise profit, revenue, future utility, exchange listings,
            or any particular market value. $NOW is a memecoin and a reminder, not a promise of financial return.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Transparency
