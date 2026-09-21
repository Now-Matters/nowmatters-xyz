import { config } from "../config"
import Icon from "./Icons"
import CopyButton from "./CopyButton"
import { useI18n } from "../i18n/context"

const steps = [
  { icon: "wallet", title: "Set up a wallet", text: "Any wallet that supports Base and ERC-20 tokens will work." },
  { icon: "globe", title: "Add ETH on Base", text: "You need a little ETH on Base to cover network fees and the purchase." },
  { icon: "swap", title: "Use the official link", text: "Open the Uniswap auction from this website and check the contract before you confirm." },
]

function HowToGet() {
  const { t } = useI18n()
  return (
    <section className="info-section alt" id="how-to-get">
      <div className="container">
        <div className="section-intro centered">
          <p className="eyebrow">{t("How to get $NOW")}</p>
          <h2 className="section-title">{t("Three simple steps.")}</h2>
        </div>

        <div className="steps">
          {steps.map((s, i) => (
            <div className="step" key={s.title}>
              <span className="step-num">{i + 1}</span>
              <span className="card-icon"><Icon name={s.icon} /></span>
              <h3>{t(s.title)}</h3>
              <p>{t(s.text)}</p>
            </div>
          ))}
        </div>

        <div className="verify-box">
          <span className="card-icon"><Icon name="shield" /></span>
          <div>
            <p className="stat-label">{t("Stay safe")}</p>
            <p>{t("Only use links from this website, never share your seed phrase, and always check the contract address.")}</p>
            <div className="verify-address">
              <code className="mono">{config.token.contract}</code>
              <CopyButton value={config.token.contract} label="Copy address" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToGet
