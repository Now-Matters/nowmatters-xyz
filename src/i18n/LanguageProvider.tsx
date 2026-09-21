import { useEffect, useState, type ReactNode } from "react"
import { languages, type Lang } from "./translations"
import { LanguageContext } from "./context"

const PATH_LANG = /^\/(en|es|de|ru)(?:\/|$)/

function langFromPath(): Lang | null {
  const match = window.location.pathname.match(PATH_LANG)
  return match ? (match[1] as Lang) : null
}

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem("lang")
    if (saved && saved in languages) return saved as Lang
  } catch { /* storage unavailable */ }
  const browser = navigator.language.slice(0, 2)
  return browser in languages ? (browser as Lang) : "en"
}

const urlFor = (lang: Lang) => `/${lang}/${window.location.search}${window.location.hash}`

export function LanguageProvider({ children }: { children: ReactNode }) {
  // The URL wins (/es/, /de/, ...); on the bare root we fall back to the saved or browser language.
  const [lang, setLangState] = useState<Lang>(() => langFromPath() ?? detectLang())

  const setLang = (next: Lang) => {
    setLangState(next)
    try { localStorage.setItem("lang", next) } catch { /* ignore */ }
    window.history.pushState(null, "", urlFor(next))
  }

  useEffect(() => {
    document.documentElement.lang = lang
    if (!langFromPath()) window.history.replaceState(null, "", urlFor(lang))
  }, [lang])

  useEffect(() => {
    const onPop = () => {
      const fromUrl = langFromPath()
      if (fromUrl) setLangState(fromUrl)
    }
    window.addEventListener("popstate", onPop)
    return () => window.removeEventListener("popstate", onPop)
  }, [])

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}
