import { config } from "../config"

function OfficialLinks() {
  const links = [
    ["Website", "Official project website.", "https://nowmatters.xyz/"],
    ["GitHub", "Official project organization and source code.", config.links.github],
    ["Telegram", "Official NOW MATTERS Telegram channel.", config.links.telegram],
    ["BaseScan", "Publicly verifiable token and transaction data.", config.links.basescan],
    ["Uniswap Auction", "Official $NOW launch auction.", config.links.uniswap],
  ]

  return (
    <section className="info-section" id="links">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Official links</p>
          <h2 className="section-title">One place for the real links.</h2>
        </div>
        <div className="info-grid">
          {links.map(([name, description, href]) => (
            <div className="info-card" key={name}>
              <h3>{name}</h3>
              <p>{description}</p>
              <div className="link-row">
                <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">Open ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OfficialLinks
