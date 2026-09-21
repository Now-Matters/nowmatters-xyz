import { sections } from "./sections"
import { sections2 } from "./sections2"
export type Lang = "en" | "es" | "de" | "ru"

export const languages: Record<Lang, string> = { en: "English", es: "Español", de: "Deutsch", ru: "Русский" }

// Keys are the English source strings. Anything missing falls back to English.
const base: Record<Lang, Record<string, string>> = {
  en: {},
  es: {
    "Language": "Idioma", "Open menu": "Abrir menú", "Close menu": "Cerrar menú",
    "About": "Acerca de", "Transparency": "Transparencia", "How to get": "Cómo conseguirlo", "Launch": "Lanzamiento",
    "Get $NOW": "Obtener $NOW", "Our philosophy": "Nuestra filosofía",
    "A different kind of memecoin": "Un tipo diferente de memecoin",
    "The present moment matters.": "El momento presente importa.",
    "You can hold $NOW in your wallet simply to see it on your balance": "Puedes tener $NOW en tu billetera solo para verlo en tu saldo",
    "and remember what really matters.": "y recordar lo que realmente importa.",
    "1,000,000 fixed supply": "Suministro fijo de 1 000 000", "0% tax": "0 % de impuestos", "No mint function": "Sin función de emisión",
    "Security notice": "Aviso de seguridad",
    "Blockaid, a wallet security provider, has flagged $NOW as malicious. We believe this is a mistake and are working with them to resolve it.":
      "Blockaid, un proveedor de seguridad para billeteras, ha marcado $NOW como malicioso. Creemos que se trata de un error y estamos trabajando con ellos para resolverlo.",
    "What this means": "Qué significa esto",
    "Some wallets and apps that use Blockaid may show a warning when you view or trade $NOW.":
      "Algunas billeteras y aplicaciones que usan Blockaid pueden mostrar una advertencia al ver o intercambiar $NOW.",
    "You can wait until the review is finished, or continue at your own discretion after checking the contract address yourself. This is not financial advice.":
      "Puedes esperar a que termine la revisión o continuar bajo tu propio criterio tras comprobar tú mismo la dirección del contrato. Esto no es asesoramiento financiero.",
    "View the contract on BaseScan ↗": "Ver el contrato en BaseScan ↗",
    "How to get $NOW": "Cómo conseguir $NOW", "Three simple steps.": "Tres sencillos pasos.",
    "Set up a wallet": "Crea una billetera", "Any wallet that supports Base and ERC-20 tokens will work.": "Sirve cualquier billetera compatible con Base y tokens ERC-20.",
    "Add ETH on Base": "Añade ETH en Base", "You need a little ETH on Base to cover network fees and the purchase.": "Necesitas algo de ETH en Base para pagar las comisiones de red y la compra.",
    "Use the official link": "Usa el enlace oficial", "Open the Uniswap auction from this website and check the contract before you confirm.": "Abre la subasta de Uniswap desde este sitio web y comprueba el contrato antes de confirmar.",
    "Stay safe": "Mantente seguro", "Only use links from this website, never share your seed phrase, and always check the contract address.": "Usa solo los enlaces de este sitio web, nunca compartas tu frase semilla y comprueba siempre la dirección del contrato.",
    "Copy": "Copiar", "Copied": "Copiado", "Copy address": "Copiar dirección",
  },
  de: {
    "Language": "Sprache", "Open menu": "Menü öffnen", "Close menu": "Menü schließen",
    "About": "Über uns", "Transparency": "Transparenz", "How to get": "So geht's", "Launch": "Launch",
    "Get $NOW": "$NOW holen", "Our philosophy": "Unsere Philosophie",
    "A different kind of memecoin": "Eine andere Art von Memecoin",
    "The present moment matters.": "Der gegenwärtige Moment zählt.",
    "You can hold $NOW in your wallet simply to see it on your balance": "Du kannst $NOW einfach in deiner Wallet halten, um es in deinem Guthaben zu sehen",
    "and remember what really matters.": "und dich daran zu erinnern, was wirklich zählt.",
    "1,000,000 fixed supply": "Feste Menge: 1.000.000", "0% tax": "0 % Steuern", "No mint function": "Keine Mint-Funktion",
    "Security notice": "Sicherheitshinweis",
    "Blockaid, a wallet security provider, has flagged $NOW as malicious. We believe this is a mistake and are working with them to resolve it.":
      "Blockaid, ein Sicherheitsanbieter für Wallets, hat $NOW als bösartig eingestuft. Wir glauben, dass es sich um einen Fehler handelt, und arbeiten mit ihnen an einer Lösung.",
    "What this means": "Was das bedeutet",
    "Some wallets and apps that use Blockaid may show a warning when you view or trade $NOW.":
      "Einige Wallets und Apps, die Blockaid nutzen, zeigen möglicherweise eine Warnung an, wenn du $NOW ansiehst oder handelst.",
    "You can wait until the review is finished, or continue at your own discretion after checking the contract address yourself. This is not financial advice.":
      "Du kannst warten, bis die Prüfung abgeschlossen ist, oder nach eigener Prüfung der Vertragsadresse auf eigene Verantwortung fortfahren. Dies ist keine Finanzberatung.",
    "View the contract on BaseScan ↗": "Vertrag auf BaseScan ansehen ↗",
    "How to get $NOW": "So erhältst du $NOW", "Three simple steps.": "Drei einfache Schritte.",
    "Set up a wallet": "Richte eine Wallet ein", "Any wallet that supports Base and ERC-20 tokens will work.": "Jede Wallet, die Base und ERC-20-Token unterstützt, funktioniert.",
    "Add ETH on Base": "ETH auf Base hinzufügen", "You need a little ETH on Base to cover network fees and the purchase.": "Du brauchst etwas ETH auf Base, um Netzwerkgebühren und den Kauf zu bezahlen.",
    "Use the official link": "Nutze den offiziellen Link", "Open the Uniswap auction from this website and check the contract before you confirm.": "Öffne die Uniswap-Auktion über diese Website und prüfe den Vertrag, bevor du bestätigst.",
    "Stay safe": "Bleib sicher", "Only use links from this website, never share your seed phrase, and always check the contract address.": "Nutze nur Links von dieser Website, teile niemals deine Seed-Phrase und prüfe stets die Vertragsadresse.",
    "Copy": "Kopieren", "Copied": "Kopiert", "Copy address": "Adresse kopieren",
  },
  ru: {
    "Language": "Язык", "Open menu": "Открыть меню", "Close menu": "Закрыть меню",
    "About": "О проекте", "Token": "Токен", "Transparency": "Прозрачность", "How to get": "Как купить", "Launch": "Запуск",
    "Get $NOW": "Купить $NOW", "Our philosophy": "Наша философия",
    "A different kind of memecoin": "Мемкоин другого рода",
    "The present moment matters.": "Важен настоящий момент.",
    "You can hold $NOW in your wallet simply to see it on your balance": "Вы можете просто держать $NOW в кошельке, чтобы видеть его в своём балансе",
    "and remember what really matters.": "и помнить о том, что действительно важно.",
    "1,000,000 fixed supply": "Фиксированный выпуск: 1 000 000", "0% tax": "Налог 0%", "No mint function": "Без функции эмиссии",
    "Security notice": "Уведомление о безопасности",
    "Blockaid, a wallet security provider, has flagged $NOW as malicious. We believe this is a mistake and are working with them to resolve it.":
      "Blockaid, провайдер безопасности для кошельков, пометил $NOW как вредоносный. Мы считаем, что это ошибка, и работаем с ними над её устранением.",
    "What this means": "Что это значит",
    "Some wallets and apps that use Blockaid may show a warning when you view or trade $NOW.":
      "Некоторые кошельки и приложения, использующие Blockaid, могут показывать предупреждение при просмотре или обмене $NOW.",
    "You can wait until the review is finished, or continue at your own discretion after checking the contract address yourself. This is not financial advice.":
      "Вы можете дождаться завершения проверки или продолжить на своё усмотрение, самостоятельно проверив адрес контракта. Это не финансовый совет.",
    "View the contract on BaseScan ↗": "Посмотреть контракт на BaseScan ↗",
    "How to get $NOW": "Как получить $NOW", "Three simple steps.": "Три простых шага.",
    "Set up a wallet": "Настройте кошелёк", "Any wallet that supports Base and ERC-20 tokens will work.": "Подойдёт любой кошелёк с поддержкой Base и токенов ERC-20.",
    "Add ETH on Base": "Пополните ETH в сети Base", "You need a little ETH on Base to cover network fees and the purchase.": "Вам понадобится немного ETH в сети Base для оплаты комиссий сети и покупки.",
    "Use the official link": "Используйте официальную ссылку", "Open the Uniswap auction from this website and check the contract before you confirm.": "Откройте аукцион Uniswap с этого сайта и проверьте контракт перед подтверждением.",
    "Stay safe": "Будьте осторожны", "Only use links from this website, never share your seed phrase, and always check the contract address.": "Используйте только ссылки с этого сайта, никогда не делитесь сид-фразой и всегда проверяйте адрес контракта.",
    "Copy": "Копировать", "Copied": "Скопировано", "Copy address": "Копировать адрес",
  },
}

export const translations: Record<Lang, Record<string, string>> = {
  en: {},
  es: { ...base.es, ...sections.es, ...sections2.es },
  de: { ...base.de, ...sections.de, ...sections2.de },
  ru: { ...base.ru, ...sections.ru, ...sections2.ru },
}
