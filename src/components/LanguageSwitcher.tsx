import { useI18n } from "../i18n/context"
import { languages, type Lang } from "../i18n/translations"

function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n()
  return (
    <select className="lang-select" value={lang} aria-label={t("Language")} onChange={(e) => setLang(e.target.value as Lang)}>
      {(Object.keys(languages) as Lang[]).map((code) => (
        <option key={code} value={code}>{languages[code]}</option>
      ))}
    </select>
  )
}

export default LanguageSwitcher
