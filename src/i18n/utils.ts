/**
 * Bytek — i18n Utility Functions
 *
 * Three simple functions that power the entire i18n system:
 *   - getLangFromUrl()    → detects language from the URL pathname
 *   - useTranslations()   → returns a t() function for UI strings
 *   - getLocalizedPath()  → builds the equivalent URL in another language
 */

import { ui, defaultLang, languages } from "./ui";

export type Lang = keyof typeof ui;
export type TranslationKey = keyof (typeof ui)[typeof defaultLang];

/**
 * Extracts the language from a URL pathname.
 *
 * @example
 *   getLangFromUrl(new URL("https://bytek.com/en/services")) → "en"
 *   getLangFromUrl(new URL("https://bytek.com/services"))    → "es"
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

/**
 * Returns a `t()` function bound to a specific language.
 * Falls back to the default language if a key is missing.
 *
 * @example
 *   const t = useTranslations("en");
 *   t("nav.services") → "Services"
 */
export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

/**
 * Generates the equivalent URL path for a target language.
 *
 * @example
 *   getLocalizedPath("/services/", "en") → "/en/services/"
 *   getLocalizedPath("/en/services/", "es") → "/services/"
 *   getLocalizedPath("/en/about/", "en") → "/en/about/" (no change)
 */
export function getLocalizedPath(path: string, targetLang: Lang): string {
  // Strip any existing language prefix
  const pathWithoutLang = path
    .replace(/^\/(en|es)\//, "/")
    .replace(/^\/(en|es)$/, "/");

  if (targetLang === defaultLang) {
    return pathWithoutLang;
  }

  return `/${targetLang}${pathWithoutLang}`;
}

/**
 * Generates a localized href for navigation items.
 * Prepends the language prefix for non-default languages.
 *
 * @example
 *   getLocalizedHref("/services", "en") → "/en/services"
 *   getLocalizedHref("/services", "es") → "/services"
 */
export function getLocalizedHref(href: string, lang: Lang): string {
  if (lang === defaultLang) return href;
  return `/${lang}${href}`;
}

// Re-export for convenience
export { languages, defaultLang } from "./ui";
