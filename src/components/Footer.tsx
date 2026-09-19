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
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="Telegram">Telegram</a>
            <a href="#" aria-label="Discord">Discord</a>
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
