import { useI18n } from "../i18n/context"
const questions = [
  ["What is $NOW?", "$NOW is a memecoin on Base built around a simple reminder: the present moment matters."],
  ["What is the purpose of $NOW?", "There is no financial or technological utility promised by the project. $NOW exists as a reminder to return your attention to the present moment."],
  ["Is $NOW an investment?", "NOW MATTERS does not present $NOW as an investment and makes no promise of profit or future value."],
  ["Is there a fixed supply?", "Yes. The total supply is 1,000,000 NOW."],
  ["Can more $NOW be minted?", "No additional minting function exists in the token contract."],
  ["Does $NOW have taxes?", "No. The token contract does not implement buy, sell, or transfer taxes."],
  ["Does the contract have a blacklist?", "No blacklist mechanism is implemented in the token contract."],
  ["Can the contract be upgraded?", "The deployed token is a standard ERC-20 contract and does not use an upgradeable proxy."],
  ["Where was $NOW launched?", "Through a Uniswap auction on Base."],
  ["Who created NOW MATTERS?", "NOW MATTERS was created by Alexander Perechnev."],
]

function FAQ() {
  const { t } = useI18n()
  return (
    <section className="quote-section" id="faq">
      <div className="container">
        <div className="section-intro centered">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">{t("Frequently asked.")}</h2>
        </div>
        <div className="faq-list">
          {questions.map(([question, answer]) => (
            <details className="faq-item" key={question}>
              <summary>{t(question)}</summary>
              <div className="faq-answer">{t(answer)}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
