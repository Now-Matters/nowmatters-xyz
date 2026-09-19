function Philosophy() {
  return (
    <>
      <section className="philosophy" id="philosophy">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Our philosophy</p>
            <h2 className="section-title">Live in the now.</h2>

            <div className="body-copy">
              <p>
                It's a huge trap to live in the past or in the future.
                The only moment we experience is now.
                The goal is to make living better at this moment,
                so the past wasn't vain and the future is full of optimism.
              </p>

              <p>
                If you catch yourself regretting the past or waiting for a better future,
                it's a flag to move your focus back and put more effort into this particular moment.
              </p>

              <div className="accent-line"></div>
              <p className="strong">Now matters.</p>
            </div>
          </div>

          <div className="stats" id="token">
            <div className="stat">
              <div className="stat-icon">◎</div>
              <div>
                <span className="stat-label">Token name</span>
                <span className="stat-value">Now Matters</span>
              </div>
            </div>

            <div className="stat">
              <div className="stat-icon">#</div>
              <div>
                <span className="stat-label">Ticker</span>
                <span className="stat-value">$NOW</span>
              </div>
            </div>

            <div className="stat">
              <div className="stat-icon">◉</div>
              <div>
                <span className="stat-label">Fixed supply</span>
                <span className="stat-value">1,000,000 NOW</span>
              </div>
            </div>

            <div className="stat">
              <div className="stat-icon">⌑</div>
              <div>
                <span className="stat-label">Contract</span>
                <a
                  className="stat-value stat-link"
                  href="https://basescan.org/address/0x059112ec4c72c4e131b84F4B3Ecb6bF5CF12D597"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on BaseScan ↗
                </a>
              </div>
            </div>

            <div className="stat">
              <div className="stat-icon">⊘</div>
              <div>
                <span className="stat-label">Tax</span>
                <span className="stat-value">0%</span>
              </div>
            </div>

            <div className="stat">
              <div className="stat-icon">◇</div>
              <div>
                <span className="stat-label">Utility</span>
                <span className="stat-value">None</span>
              </div>
            </div>

            <div className="stat">
              <div className="stat-icon">↗</div>
              <div>
                <span className="stat-label">Roadmap</span>
                <span className="stat-value">None</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Philosophy
