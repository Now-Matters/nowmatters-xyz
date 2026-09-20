import { config } from "../config"

function Founder() {
  return (
    <section className="info-section alt" id="founder">
      <div className="container two-col">
        <div>
          <p className="eyebrow">Founder</p>
          <h2 className="section-title">Open about who created it.</h2>
        </div>
        <div className="body-copy" style={{ marginTop: 0 }}>
          <p>NOW MATTERS was created by <span className="strong">Alexander Perechnev</span>.</p>
          <p>The project is independently created and operated under the NOW MATTERS name.</p>
          <div className="link-row">
            <a className="text-link" href="https://github.com/aperechnev" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            <a className="text-link" href={config.links.email}>alex@nowmatters.xyz</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder
