import { config } from "../config"

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="eyebrow">A different kind of memecoin</p>
        <h1>NOW MATTERS</h1>
        <div className="subtitle">The present moment matters.</div>

        <p className="hero-copy">
          You can hold $NOW in your wallet simply to see it on your balance<br />
          and remember what really matters.
        </p>

        <a className="button" target="_blank" rel="noopener noreferrer" href={config.links.uniswap}>
          Get $NOW
        </a>
      </div>
    </section>
  )
}

export default Hero
