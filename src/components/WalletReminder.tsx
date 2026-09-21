import { useI18n } from "../i18n/context"
function Wallet() {
  const { t } = useI18n()
  return (
    <>
      <section className="wallet" id="wallet">
        <div className="container wallet-grid">
          <div className="coin-wrap">
            <div className="coin">$NOW</div>
            <div className="coin-label">$NOW</div>
          </div>

          <div className="wallet-copy">
            <p className="eyebrow">{t("Keep it in your wallet")}</p>
            <h2 className="section-title">{t("A small reminder.")}<br />{t("A big difference.")}</h2>

            <div className="body-copy">
              <p>{t("You can hold $NOW in your wallet simply to see it on your balance")} {t("and remember what really matters.")}</p>

              <p>
                {t("Every time you see it, let it be a reminder:")}&nbsp;
                <span className="strong">{t("the most important thing is happening now.")}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Wallet
