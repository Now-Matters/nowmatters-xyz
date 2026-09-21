import { useState } from "react"
import Icon from "./Icons"
import { useI18n } from "../i18n/context"

function CopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch { /* clipboard unavailable */ }
  }
  return (
    <button type="button" className="copy-btn" onClick={copy} aria-label={`${label}: ${value}`}>
      <Icon name={copied ? "check" : "copy"} size={14} />
      {copied ? t("Copied") : t(label)}
    </button>
  )
}

export default CopyButton
