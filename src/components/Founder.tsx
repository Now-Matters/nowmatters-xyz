import { useI18n } from "../i18n/context"
import { config } from "../config"

function Founder() {
  const { t } = useI18n()
  const created = t("NOW MATTERS was created by {name}.").split("{name}")
  return (
    <section className="info-section alt" id="founder">
      <div className="container two-col">
        <div>
          <p className="eyebrow">{t("Founder")}</p>
          <h2 className="section-title">{t("Open about who created it.")}</h2>
        </div>
        <div className="body-copy" style={{ marginTop: 0 }}>
          <p>{created[0]}<span className="strong">Alexander Perechnev</span>{created[1]}</p>
          <p>{t("The project is independently created and operated under the NOW MATTERS name.")}</p>
          <div className="link-row">
            <a className="text-link" href="https://github.com/aperechnev" target="_blank" rel="noopener noreferrer">{t("GitHub Profile")}</a>
            <a className="text-link" href={config.links.email}>alex@nowmatters.xyz</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder
