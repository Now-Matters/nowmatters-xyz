import { config } from "../config"

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="coin hero-coin" aria-hidden="true">$NOW</div>
        <p className="eyebrow">A different kind of memecoin</p>
        <h1>NOW MATTERS</h1>
        <div className="subtitle">The present moment matters.</div>

        <p className="hero-copy">
          You can hold $NOW in your wallet simply to see it on your balance<br />
          and remember what really matters.
        </p>

        <div className="hero-actions">
          <a className="button" target="_blank" rel="noopener noreferrer" href={config.links.uniswap}>Get $NOW</a>
          <a className="button secondary" href="#philosophy">Our philosophy</a>
        </div>

        <ul className="hero-facts">
          <li>Base · ERC-20</li>
          <li>1,000,000 fixed supply</li>
          <li>0% tax</li>
          <li>No mint function</li>
        </ul>
      </div>
    </section>
  )
}

export default Hero
