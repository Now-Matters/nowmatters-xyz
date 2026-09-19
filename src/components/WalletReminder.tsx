function Wallet() {
  return (
    <>
      <section className="wallet" id="wallet">
        <div className="container wallet-grid">
          <div className="coin-wrap">
            <div className="coin">$NOW</div>
            <div className="coin-label">$NOW</div>
          </div>

          <div className="wallet-copy">
            <p className="eyebrow">Keep it in your wallet</p>
            <h2 className="section-title">A small reminder.<br />A big difference.</h2>

            <div className="body-copy">
              <p>
                You can hold $NOW in your wallet simply to see it on your balance
                and remember what really matters.
              </p>

              <p>
                Every time you see it, let it be a reminder:&nbsp;
                <span className="strong">the most important thing is happening now.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Wallet
