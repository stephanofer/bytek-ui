# Estrategia de Internacionalización (i18n) — Bytek

## TL;DR

- **Español = idioma por defecto**, vive en la raíz (`/`, `/services/`, `/blog/`)
- **Inglés = prefijo `/en/`** (`/en/`, `/en/services/`, `/en/blog/`)
- **Sin detección automática de idioma por geolocalización** — el usuario siempre aterriza en español
- **Traducciones de UI** en un archivo TypeScript simple (diccionario key-value)
- **Contenido largo (blog, cases)** con Content Collections separadas por idioma
- **SEO** resuelto con `hreflang`, canonical URLs, y `@astrojs/sitemap`
- **Zero dependencias extra** — todo con el i18n built-in de Astro 5

---

## 1. Estrategia de URLs

### La decisión: `prefixDefaultLocale: false`

```
Español (default):     bytek.com/services/software-development
Inglés:                bytek.com/en/services/software-development
```

**¿Por qué esta estrategia y no otra?**

| Estrategia | Ejemplo | Veredicto |
|---|---|---|
| Sin prefijo en default + prefijo en otros | `bytek.com/services` + `bytek.com/en/services` | **✅ Elegida.** El idioma principal mantiene URLs limpias. El secundario se identifica claramente |

### Estructura de carpetas en `src/pages/`

```
src/pages/
├── index.astro                          # / (español)
├── services/
│   ├── index.astro                      # /services/
│   └── software-development.astro       # /services/software-development
├── about/
│   └── index.astro                      # /about/
├── contact/
│   └── index.astro                      # /contact/
├── blog/
│   ├── index.astro                      # /blog/
│   └── [...slug].astro                  # /blog/[slug]
│
├── en/                                  # ← Todo el contenido en inglés
│   ├── index.astro                      # /en/
│   ├── services/
│   │   ├── index.astro                  # /en/services/
│   │   └── software-development.astro   # /en/services/software-development
│   ├── about/
│   │   └── index.astro                  # /en/about/
│   ├── contact/
│   │   └── index.astro                  # /en/contact/
│   └── blog/
│       ├── index.astro                  # /en/blog/
│       └── [...slug].astro              # /en/blog/[slug]
```

> **Nota:** Las páginas en `/en/` NO son copias 1:1 del contenido. Importan los mismos componentes pero usan las traducciones del diccionario y/o content collections en inglés.

---

## 2. Configuración de Astro

### `astro.config.mjs`

```js
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://bytek.com",
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: cloudflare(),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-AR",
          en: "en",
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
    },
  },
});
```

**¿Qué hace cada cosa?**

- **`site`**: Necesario para generar URLs absolutas, canonical, y el sitemap
- **`i18n.defaultLocale: "es"`**: Español como idioma base (sin prefijo)
- **`i18n.routing.prefixDefaultLocale: false`**: Las páginas en español NO llevan `/es/`
- **`i18n.routing.redirectToDefaultLocale: true`**: Si alguien navega a `/es/services/`, redirige a `/services/`
- **`sitemap` con `i18n`**: Genera automáticamente `<xhtml:link rel="alternate" hreflang="...">` en el sitemap

---

## 3. Sistema de traducciones de UI

Para textos de interfaz (botones, navegación, labels, headings), usamos un diccionario TypeScript simple.

### `src/i18n/ui.ts`

```ts
export const languages = {
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es" as const;

// Solo las keys que necesitás. Crecen orgánicamente.
export const ui = {
  es: {
    // Navegación
    "nav.services": "Servicios",
    "nav.work": "Casos",
    "nav.about": "Nosotros",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
    "nav.cta": "Contáctanos",

    // Hero
    "hero.title": "Construimos productos digitales que transforman negocios",
    "hero.subtitle":
      "Somos tu equipo técnico. Diseñamos, desarrollamos y escalamos soluciones digitales con tecnología de punta.",
    "hero.cta.primary": "Hablemos de tu proyecto",
    "hero.cta.secondary": "Ver nuestro trabajo",

    // Footer
    "footer.cta.title": "¿Tenés un proyecto en mente?",
    "footer.cta.primary": "Hablemos",
    "footer.cta.secondary": "Ver nuestro trabajo",
    "footer.rights": "Todos los derechos reservados",

    // Common
    "common.read-more": "Leer más",
    "common.back": "Volver",
    "common.loading": "Cargando...",
  },
  en: {
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.cta": "Contact Us",

    "hero.title": "We build digital products that transform businesses",
    "hero.subtitle":
      "We are your tech team. We design, develop, and scale digital solutions with cutting-edge technology.",
    "hero.cta.primary": "Let's talk about your project",
    "hero.cta.secondary": "See our work",

    "footer.cta.title": "Have a project in mind?",
    "footer.cta.primary": "Let's Talk",
    "footer.cta.secondary": "See our work",
    "footer.rights": "All rights reserved",

    "common.read-more": "Read more",
    "common.back": "Go back",
    "common.loading": "Loading...",
  },
} as const;
```

### `src/i18n/utils.ts`

```ts
import { ui, defaultLang } from "./ui";

export type Lang = keyof typeof ui;

/**
 * Extrae el idioma del pathname de la URL.
 * /en/services → "en"
 * /services → "es" (default)
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

/**
 * Retorna una función `t()` para traducir keys de UI.
 *
 * Uso:
 *   const t = useTranslations(lang);
 *   t("nav.services") → "Servicios" o "Services"
 */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

/**
 * Genera la URL traducida para cambiar de idioma.
 *
 * Uso:
 *   translatePath("/services/", "en") → "/en/services/"
 *   translatePath("/en/services/", "es") → "/services/"
 */
export function getLocalizedPath(path: string, targetLang: Lang): string {
  // Remover el prefijo de idioma actual si existe
  const pathWithoutLang = path.replace(/^\/(en|es)\//, "/").replace(/^\/(en|es)$/, "/");

  if (targetLang === defaultLang) {
    return pathWithoutLang;
  }

  return `/${targetLang}${pathWithoutLang}`;
}
```

### Uso en componentes

```astro
---
// src/components/layout/Header.astro
import { getLangFromUrl, useTranslations } from "@/i18n/utils";

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<nav>
  <a href={lang === "es" ? "/services/" : "/en/services/"}>{t("nav.services")}</a>
  <a href={lang === "es" ? "/about/" : "/en/about/"}>{t("nav.about")}</a>
  <button>{t("nav.cta")}</button>
</nav>
```

**Esto es TODO lo que necesitás para traducir la UI.** Sin librerías, sin magia, sin overengineering. Un archivo de diccionario + 2 funciones helper.

---


## 5. SEO Multilingüe

Este es el tema MÁS IMPORTANTE. Podés tener las mejores traducciones del mundo, pero si Google no entiende la estructura, estás frito.

### 5.1 Tags `hreflang` (OBLIGATORIOS)

Cada página DEBE tener tags `hreflang` que apunten a TODAS las versiones lingüísticas de esa página, incluida ella misma.

```astro
---
// src/layouts/Layout.astro
import { getLangFromUrl } from "@/i18n/utils";

interface Props {
  title?: string;
  description?: string;
  /** Ruta de la versión alternativa en el otro idioma */
  alternateUrl?: string;
}

const lang = getLangFromUrl(Astro.url);
const { title, description, alternateUrl } = Astro.props;

const currentUrl = new URL(Astro.url.pathname, "https://bytek.com");
const canonicalUrl = currentUrl.href;

// Construir URLs alternativas
const esUrl = lang === "es"
  ? canonicalUrl
  : alternateUrl
    ? new URL(alternateUrl, "https://bytek.com").href
    : null;

const enUrl = lang === "en"
  ? canonicalUrl
  : alternateUrl
    ? new URL(alternateUrl, "https://bytek.com").href
    : null;
---

<html lang={lang}>
  <head>
    <!-- Canonical -->
    <link rel="canonical" href={canonicalUrl} />

    <!-- Hreflang: le dice a Google "esta página existe en estos idiomas" -->
    {esUrl && <link rel="alternate" hreflang="es" href={esUrl} />}
    {enUrl && <link rel="alternate" hreflang="en" href={enUrl} />}

    <!-- x-default: "si no matchea ningún idioma, mandalo acá" -->
    {esUrl && <link rel="alternate" hreflang="x-default" href={esUrl} />}

    <title>{title}</title>
    <meta name="description" content={description} />
  </head>
  <body>
    <slot />
  </body>
</html>
```

### 5.2. Uso del Layout con alternativas

```astro
---
// src/pages/services/index.astro
import Layout from "@layouts/Layout.astro";
---

<Layout
  title="Servicios — Bytek"
  description="Conocé nuestros servicios de desarrollo de software."
  alternateUrl="/en/services/"
>
  <!-- contenido en español -->
</Layout>
```

```astro
---
// src/pages/en/services/index.astro
import Layout from "@layouts/Layout.astro";
---

<Layout
  title="Services — Bytek"
  description="Discover our software development services."
  alternateUrl="/services/"
>
  <!-- contenido en inglés -->
</Layout>
```

### 5.3. Sitemap automático con hreflang

El plugin `@astrojs/sitemap` con la config i18n (sección 2) genera automáticamente el sitemap con las relaciones hreflang. No hay nada más que hacer.

Ejemplo de output:

```xml
<url>
  <loc>https://bytek.com/services/</loc>
  <xhtml:link rel="alternate" hreflang="es-AR" href="https://bytek.com/services/"/>
  <xhtml:link rel="alternate" hreflang="en" href="https://bytek.com/en/services/"/>
</url>
```

### 5.4. Checklist SEO multilingüe

| Item | Detalle |
|---|---|
| ✅ `<html lang="xx">` | Dinámico según la página |
| ✅ `<link rel="canonical">` | Apunta a sí misma (NUNCA al otro idioma) |
| ✅ `hreflang` tags | En TODAS las páginas, apuntando a TODAS las versiones |
| ✅ `hreflang="x-default"` | Apunta a la versión en español (nuestro default) |
| ✅ Sitemap con `xhtml:link` | Generado automáticamente por `@astrojs/sitemap` |
| ✅ URLs consistentes | Misma estructura de rutas en ambos idiomas |
| ✅ Meta tags traducidos | Title y description en el idioma de la página |
| ✅ OG tags traducidos | `og:title`, `og:description`, `og:locale` |

---

#### ¿Qué hacer entonces?

**Lo que hacen los que saben (Google, Stripe, Vercel, Remote):**

1. **El usuario SIEMPRE aterriza en la versión default** (español en nuestro caso)
2. **Language switcher visible** en el header para cambiar manualmente
3. **Opcional — Banner suave** (NO redirect): detectar `Accept-Language` del browser y mostrar un banner tipo:
   > "🌐 It looks like you prefer English. [Switch to English](/en/) | [Stay in Spanish](#)"
4. **Guardar preferencia en cookie** para futuras visitas

#### Implementación del banner suave (opcional, para el futuro)

```astro
---
// Solo se muestra si el idioma del browser no matchea el de la página
const browserLang = Astro.request.headers.get("accept-language");
const prefersEnglish = browserLang?.startsWith("en") && getLangFromUrl(Astro.url) === "es";
---

{prefersEnglish && (
  <div class="bg-blue-50 text-center py-2 text-sm" id="lang-banner">
    🌐 It looks like you prefer English.
    <a href="/en/" class="underline font-medium">Switch to English</a>
    <button onclick="this.parentElement.remove()" class="ml-2">✕</button>
  </div>
)}
```

> **Importante:** Esto NO es un redirect. Es un banner informativo que el usuario puede cerrar. Google sigue viendo ambas versiones sin problemas.

---

## 7. Language Selector (actualización)

El `LanguageSelector.astro` que ya tenemos necesita una actualización mínima:

```astro
---
import { languages } from "@/i18n/ui";
import { getLangFromUrl, getLocalizedPath } from "@/i18n/utils";

const lang = getLangFromUrl(Astro.url);
const currentPath = Astro.url.pathname;
---

<ul>
  {Object.entries(languages).map(([code, label]) => (
    <li>
      <a
        href={getLocalizedPath(currentPath, code)}
        aria-current={code === lang ? "true" : undefined}
      >
        {label}
      </a>
    </li>
  ))}
</ul>
```

**Lo clave:** el selector construye la URL de la página ACTUAL en el otro idioma. Si estás en `/services/`, te lleva a `/en/services/`. Si estás en `/en/about/`, te lleva a `/about/`.

---

## 8. Cómo reutilizar páginas sin duplicar código

El pattern principal para evitar duplicación masiva entre `/pages/` y `/pages/en/`:

### Pattern: Componentes compartidos + props de idioma

```astro
---
// src/pages/services/components/services-hero.astro
import { useTranslations, type Lang } from "@/i18n/utils";

interface Props {
  lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);
---

<section>
  <h1>{t("services.hero.title")}</h1>
  <p>{t("services.hero.description")}</p>
</section>
```

```astro
---
// src/pages/services/index.astro (español)
import Layout from "@layouts/Layout.astro";
import ServicesHero from "./components/services-hero.astro";
---

<Layout title="Servicios — Bytek" alternateUrl="/en/services/">
  <ServicesHero lang="es" />
</Layout>
```

```astro
---
// src/pages/en/services/index.astro (inglés)
import Layout from "@layouts/Layout.astro";
import ServicesHero from "../../services/components/services-hero.astro";
---

<Layout title="Services — Bytek" alternateUrl="/services/">
  <ServicesHero lang="en" />
</Layout>
```

**Las páginas en `/en/` son shells livianos** que importan los mismos componentes con `lang="en"`. El contenido real vive en los componentes compartidos que usan `t()`.

---

## 9. Resumen de archivos a crear/modificar

| Archivo | Acción | Propósito |
|---|---|---|
| `astro.config.mjs` | Modificar | Agregar config `i18n` y `sitemap` |
| `src/i18n/ui.ts` | Crear | Diccionario de traducciones |
| `src/i18n/utils.ts` | Crear | Helpers `getLangFromUrl`, `useTranslations`, `getLocalizedPath` |
| `src/layouts/Layout.astro` | Modificar | `lang` dinámico, hreflang tags, canonical |
| `src/components/layout/Header.astro` | Modificar | Usar `t()` para textos |
| `src/components/layout/Footer.astro` | Modificar | Usar `t()` para textos |
| `src/components/layout/LanguageSelector.astro` | Modificar | Navegación real entre idiomas |
| `src/lib/constants.ts` | Modificar | Limpiar strings hardcodeados |
| `src/pages/en/` | Crear | Shell pages para versión inglés |
| `package.json` | Modificar | Agregar `@astrojs/sitemap` |

---

## 10. Orden de implementación

1. **Instalar sitemap:** `pnpm add @astrojs/sitemap`
2. **Actualizar `astro.config.mjs`** con la config i18n + sitemap
3. **Crear `src/i18n/ui.ts` y `src/i18n/utils.ts`**
4. **Actualizar `Layout.astro`** (lang dinámico, hreflang, canonical)
5. **Migrar `Header.astro` y `Footer.astro`** a usar `t()`
6. **Migrar `constants.ts`** — extraer strings al diccionario
7. **Actualizar `LanguageSelector.astro`** con navegación real
8. **Crear `src/pages/en/index.astro`** como primera página en inglés
9. **Testear** que ambas versiones renderizan correctamente
10. **Verificar** hreflang tags y sitemap output
