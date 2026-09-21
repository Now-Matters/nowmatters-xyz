import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

const ORIGIN = 'https://nowmatters.xyz'

// Per-language <head> metadata for the generated /en/, /es/, /de/ and /ru/ pages.
const pages = {
  en: {
    description: 'NOW MATTERS — $NOW, a memecoin on Base with a simple reminder: the present moment matters.',
    ogDescription: 'A memecoin about one simple idea: NOW MATTERS.',
  },
  es: {
    description: 'NOW MATTERS — $NOW, una memecoin en Base con un recordatorio sencillo: el momento presente importa.',
    ogDescription: 'Una memecoin sobre una idea simple: NOW MATTERS.',
  },
  de: {
    description: 'NOW MATTERS — $NOW, ein Memecoin auf Base mit einer einfachen Erinnerung: Der gegenwärtige Moment zählt.',
    ogDescription: 'Ein Memecoin über eine einfache Idee: NOW MATTERS.',
  },
  ru: {
    description: 'NOW MATTERS — $NOW, мемкоин в сети Base с простым напоминанием: важен настоящий момент.',
    ogDescription: 'Мемкоин об одной простой идее: NOW MATTERS.',
  },
} as const

// Builds real static pages (dist/es/index.html, ...) so every language URL works on any static host.
function languagePages(): Plugin {
  let outDir = 'dist'
  const swap = (html: string, pattern: RegExp, value: string) =>
    html.replace(pattern, (_m, a: string, b: string) => a + value + b)

  return {
    name: 'language-pages',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    transformIndexHtml() {
      return [
        ...Object.keys(pages).map((lang) => ({
          tag: 'link', injectTo: 'head' as const,
          attrs: { rel: 'alternate', hreflang: lang, href: `${ORIGIN}/${lang}/` },
        })),
        { tag: 'link', injectTo: 'head' as const, attrs: { rel: 'alternate', hreflang: 'x-default', href: `${ORIGIN}/` } },
        { tag: 'link', injectTo: 'head' as const, attrs: { rel: 'canonical', href: `${ORIGIN}/` } },
      ]
    },
    closeBundle() {
      const source = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
      for (const [lang, meta] of Object.entries(pages)) {
        let html = source.replace('<html lang="en">', `<html lang="${lang}">`)
        html = swap(html, /(<meta name="description" content=")[^"]*(")/, meta.description)
        html = swap(html, /(<meta property="og:description" content=")[^"]*(")/, meta.ogDescription)
        html = swap(html, /(<meta property="og:url" content=")[^"]*(")/, `${ORIGIN}/${lang}/`)
        html = swap(html, /(<link rel="canonical" href=")[^"]*(")/, `${ORIGIN}/${lang}/`)
        fs.mkdirSync(path.join(outDir, lang), { recursive: true })
        fs.writeFileSync(path.join(outDir, lang, 'index.html'), html)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), languagePages()],
})
