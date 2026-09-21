import { useI18n } from "../i18n/context"
const stack = [
  {
    name: "Base",
    role: "Network",
    description: "The Ethereum layer 2 network where $NOW is deployed.",
    logo: "/brands/base.svg",
    href: "https://base.org",
  },
  {
    name: "Ethereum",
    role: "Standard",
    description: "The ecosystem and the ERC-20 token standard $NOW is built on.",
    logo: "/brands/ethereum.svg",
    href: "https://ethereum.org",
  },
  {
    name: "OpenZeppelin",
    role: "Contract library",
    description: "The open-source smart contract library the $NOW token is based on.",
    logo: "/brands/openzeppelin.svg",
    href: "https://www.openzeppelin.com/contracts",
  },
  {
    name: "Uniswap",
    role: "Launch protocol",
    description: "The protocol $NOW was launched through, with an auction on Base.",
    logo: "/brands/uniswap.svg",
    href: "https://uniswap.org",
  },
]

function BuiltOn() {
  const { t } = useI18n()
  return (
    <section className="info-section stack-section" id="built-on">
      <div className="container">
        <div className="section-intro centered">
          <p className="eyebrow">{t("Built on")}</p>
          <h2 className="section-title">{t("Built on open infrastructure.")}</h2>
          <div className="body-copy" style={{ marginInline: "auto" }}>
            <p>{t("$NOW does not reinvent anything. It is built on top of established, open technologies: the network it lives on, the standard it follows, the library its contract is based on, and the protocol it launched through.")}</p>
          </div>
        </div>

        <div className="stack-grid">
          {stack.map(({ name, role, description, logo, href }) => (
            <a
              className="stack-card"
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} — ${t(role)}`}
            >
              <span className="stack-logo">
                <img src={logo} alt="" width={32} height={32} loading="lazy" />
              </span>
              <span className="stack-role">{t(role)}</span>
              <h3>{name}</h3>
              <p>{t(description)}</p>
              <span className="stack-visit">{t("Visit {name} ↗").replace("{name}", name)}</span>
            </a>
          ))}
        </div>

        <p className="stack-note">{t("These are the technologies $NOW is built with. No partnership, affiliation, or endorsement is implied. Logos and trademarks belong to their respective owners.")}</p>
      </div>
    </section>
  )
}

export default BuiltOn
