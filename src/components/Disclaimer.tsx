import { config } from "../config"

function Disclaimer() {
  return (
    <section className="info-section alt" id="disclaimer">
      <div className="container disclaimer">
        <p className="eyebrow">Disclaimer</p>
        <h2 className="section-title">The coin has no value.<br />The moment does.</h2>
        <p>$NOW is a memecoin with no intrinsic financial value.</p>
        <p>
          It has no promised utility, no guaranteed value, no revenue rights,
          and no promise of profit.
        </p>
        <p>
          NOW MATTERS does not provide financial advice and does not guarantee
          that $NOW will increase in value or retain any value.
        </p>
        <p>
          Cryptocurrency assets are volatile and may lose some or all of their value.
          The project makes no promises about future price, exchange listings,
          market performance, or financial returns.
        </p>
        <p><strong>$NOW is simply a reminder: now matters.</strong></p>
        <div className="link-row centered-links">
          <a className="button secondary" href={config.links.uniswap} target="_blank" rel="noopener noreferrer">Get $NOW</a>
        </div>
      </div>
    </section>
  )
}

export default Disclaimer
