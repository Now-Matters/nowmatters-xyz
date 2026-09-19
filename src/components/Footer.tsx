function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="footer-brand">NOW MATTERS</div>
            <div className="footer-meta">$NOW &nbsp;/&nbsp; nowmatters.xyz</div>
          </div>

          <div className="socials">
            <a href="https://t.me/nowmatterscoin" aria-label="Telegram" target="_blank">Telegram</a>
            <a href="https://github.com/Now-Matters" aria-label="GitHub" target="_blank">GitHub</a>
          </div>

          <div className="footer-tagline">
            Not tomorrow.<br />
            Not yesterday.<br />
            <strong>Now.</strong>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
