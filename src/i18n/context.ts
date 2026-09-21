import { createContext, useContext } from "react"
import { translations, type Lang } from "./translations"

export const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "en", setLang: () => {} })

export function useI18n() {
  const { lang, setLang } = useContext(LanguageContext)
  const t = (text: string) => translations[lang][text] ?? text
  return { lang, setLang, t }
}
