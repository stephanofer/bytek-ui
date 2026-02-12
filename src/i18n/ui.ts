/**
 * Bytek — UI Translation Dictionary
 *
 * All user-facing UI strings live here. Content grows organically
 * as new components/pages are built.
 *
 * Convention:
 *   "section.element" → e.g. "nav.services", "hero.title"
 *
 * Rules:
 *   - Spanish (es) is the SOURCE OF TRUTH — every key MUST exist in `es`
 *   - English (en) mirrors the same keys
 *   - If a key is missing in `en`, it falls back to `es` automatically
 */

export const languages = {
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es" as const;

export const ui = {
  es: {
    // ── Navigation ──────────────────────────────────
    "nav.services": "Servicios",
    "nav.industries": "Industrias",
    "nav.work": "Casos de éxito",
    "nav.about": "Nosotros",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
    "nav.cta": "Contáctanos",

    // ── Navigation — Mega Menu: Services ────────────
    "nav.services.group.development": "Desarrollo",
    "nav.services.software-development": "Desarrollo de Software",
    "nav.services.software-development.desc":
      "Aplicaciones web y móviles escalables con las mejores tecnologías.",
    "nav.services.ai-solutions": "Soluciones de IA",
    "nav.services.ai-solutions.desc":
      "Inteligencia artificial integrada en el ADN de tu producto.",
    "nav.services.ux-ui-design": "Diseño UX/UI",
    "nav.services.ux-ui-design.desc":
      "Interfaces intuitivas que convierten usuarios en clientes.",

    "nav.services.group.infrastructure": "Infraestructura",
    "nav.services.cloud-devops": "Cloud & DevOps",
    "nav.services.cloud-devops.desc":
      "Arquitectura cloud moderna, CI/CD y escalabilidad automática.",
    "nav.services.consulting": "Consultoría",
    "nav.services.consulting.desc":
      "Estrategia técnica y acompañamiento para decisiones clave.",

    "nav.services.sidebar.title": "Recursos",
    "nav.services.sidebar.view-all": "Ver todos los servicios",
    "nav.services.sidebar.view-all.desc":
      "Explorá el catálogo completo de soluciones que ofrecemos.",
    "nav.services.sidebar.cases": "Casos de éxito",
    "nav.services.sidebar.cases.desc":
      "Mirá cómo ayudamos a empresas reales a crecer.",
    "nav.services.sidebar.demo": "Solicitar una demo",
    "nav.services.sidebar.demo.desc":
      "Agendá una reunión y te mostramos todo en vivo.",

    // ── Navigation — Mega Menu: Industries ──────────
    "nav.industries.group.sectors": "Sectores",
    "nav.industries.fintech": "Fintech",
    "nav.industries.fintech.desc":
      "Soluciones que entienden PCI-DSS, regulaciones y pagos.",
    "nav.industries.healthcare": "Healthcare",
    "nav.industries.healthcare.desc":
      "Plataformas compatibles con HIPAA, HL7 y FHIR.",
    "nav.industries.retail": "Retail & E-commerce",
    "nav.industries.retail.desc":
      "Experiencias de compra que convierten y escalan.",
    "nav.industries.saas": "SaaS & Startups",
    "nav.industries.saas.desc": "De la idea al MVP en tiempo récord.",

    "nav.industries.sidebar.title": "Más información",
    "nav.industries.sidebar.view-all": "Ver todas las industrias",
    "nav.industries.sidebar.view-all.desc":
      "Descubrí todos los sectores donde tenemos experiencia.",
    "nav.industries.sidebar.custom": "¿No ves tu industria?",
    "nav.industries.sidebar.custom.desc":
      "Contanos tu caso y armamos una solución a medida.",

    // ── Hero ────────────────────────────────────────
    "hero.title": "Construimos productos digitales que transforman negocios",
    "hero.subtitle":
      "Somos tu equipo técnico. Desde la idea hasta el producto en producción, te acompañamos con desarrollo de software, soluciones de IA y consultoría de alto impacto.",
    "hero.cta.primary": "Hablemos de tu proyecto",
    "hero.cta.secondary": "Ver nuestro trabajo",

    // ── Footer ──────────────────────────────────────
    "footer.cta.title": "¿Tenés un proyecto en mente?",
    "footer.cta.description":
      "Contanos tu idea y te ayudamos a convertirla en un producto digital de alto impacto. Sin compromiso.",
    "footer.cta.primary": "Hablemos",
    "footer.cta.secondary": "Ver nuestro trabajo",
    "footer.brand.description":
      "Construimos productos digitales escalables y de alto rendimiento. Software development & IT consulting.",
    "footer.contact.title": "Contacto",
    "footer.rights": "Todos los derechos reservados",

    // ── Footer Columns ──────────────────────────────
    "footer.col.services": "Servicios",
    "footer.col.services.software": "Desarrollo de Software",
    "footer.col.services.ai": "Soluciones de IA",
    "footer.col.services.cloud": "Cloud & DevOps",
    "footer.col.services.consulting": "Consultoría",
    "footer.col.services.design": "Diseño UX/UI",

    "footer.col.resources": "Recursos",
    "footer.col.resources.blog": "Blog",
    "footer.col.resources.work": "Casos de éxito",
    "footer.col.resources.contact": "Contacto",
    "footer.col.resources.careers": "Carreras",

    "footer.col.company": "Compañía",
    "footer.col.company.about": "Sobre nosotros",
    "footer.col.company.partners": "Partners",
    "footer.col.company.industries": "Industrias",

    // ── Footer Legal ────────────────────────────────
    "footer.legal.privacy": "Política de Privacidad",
    "footer.legal.terms": "Términos de Servicio",

    // ── Common ──────────────────────────────────────
    "common.read-more": "Leer más",
    "common.back": "Volver",
    "common.loading": "Cargando...",

    // ── Accessibility ───────────────────────────────
    "a11y.nav.main": "Navegación principal",
    "a11y.nav.mobile": "Navegación móvil",
    "a11y.nav.open-menu": "Abrir menú de navegación",
    "a11y.nav.close-menu": "Cerrar menú de navegación",
    "a11y.nav.submenu": "Submenú de",
    "a11y.lang.select": "Seleccionar idioma",
    "a11y.lang.available": "Idiomas disponibles",
    "a11y.logo": "Bytek — Ir al inicio",
    "a11y.lang.label": "Idioma",

    // ── Language Selector ───────────────────────────
    "lang.switch-to": "Cambiar a",
  },
  en: {
    // ── Navigation ──────────────────────────────────
    "nav.services": "Services",
    "nav.industries": "Industries",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.cta": "Contact Us",

    // ── Navigation — Mega Menu: Services ────────────
    "nav.services.group.development": "Development",
    "nav.services.software-development": "Software Development",
    "nav.services.software-development.desc":
      "Scalable web and mobile applications with best-in-class technologies.",
    "nav.services.ai-solutions": "AI Solutions",
    "nav.services.ai-solutions.desc":
      "Artificial intelligence woven into the DNA of your product.",
    "nav.services.ux-ui-design": "UX/UI Design",
    "nav.services.ux-ui-design.desc":
      "Intuitive interfaces that turn users into customers.",

    "nav.services.group.infrastructure": "Infrastructure",
    "nav.services.cloud-devops": "Cloud & DevOps",
    "nav.services.cloud-devops.desc":
      "Modern cloud architecture, CI/CD and auto-scaling.",
    "nav.services.consulting": "Consulting",
    "nav.services.consulting.desc":
      "Technical strategy and guidance for key decisions.",

    "nav.services.sidebar.title": "Resources",
    "nav.services.sidebar.view-all": "View all services",
    "nav.services.sidebar.view-all.desc":
      "Explore the full catalog of solutions we offer.",
    "nav.services.sidebar.cases": "Case studies",
    "nav.services.sidebar.cases.desc":
      "See how we helped real companies grow.",
    "nav.services.sidebar.demo": "Request a demo",
    "nav.services.sidebar.demo.desc":
      "Schedule a meeting and we'll show you everything live.",

    // ── Navigation — Mega Menu: Industries ──────────
    "nav.industries.group.sectors": "Sectors",
    "nav.industries.fintech": "Fintech",
    "nav.industries.fintech.desc":
      "Solutions built for PCI-DSS, regulations and payments.",
    "nav.industries.healthcare": "Healthcare",
    "nav.industries.healthcare.desc":
      "HIPAA, HL7 and FHIR-compliant platforms.",
    "nav.industries.retail": "Retail & E-commerce",
    "nav.industries.retail.desc":
      "Shopping experiences that convert and scale.",
    "nav.industries.saas": "SaaS & Startups",
    "nav.industries.saas.desc": "From idea to MVP in record time.",

    "nav.industries.sidebar.title": "More info",
    "nav.industries.sidebar.view-all": "View all industries",
    "nav.industries.sidebar.view-all.desc":
      "Discover every sector where we have experience.",
    "nav.industries.sidebar.custom": "Don't see your industry?",
    "nav.industries.sidebar.custom.desc":
      "Tell us about your case and we'll build a custom solution.",

    // ── Hero ────────────────────────────────────────
    "hero.title": "We build digital products that transform businesses",
    "hero.subtitle":
      "We are your tech team. From idea to production, we partner with you on software development, AI solutions and high-impact consulting.",
    "hero.cta.primary": "Let's talk about your project",
    "hero.cta.secondary": "See our work",

    // ── Footer ──────────────────────────────────────
    "footer.cta.title": "Have a project in mind?",
    "footer.cta.description":
      "Tell us your idea and we'll help you turn it into a high-impact digital product. No commitment.",
    "footer.cta.primary": "Let's Talk",
    "footer.cta.secondary": "See our work",
    "footer.brand.description":
      "We build scalable, high-performance digital products. Software development & IT consulting.",
    "footer.contact.title": "Contact",
    "footer.rights": "All rights reserved",

    // ── Footer Columns ──────────────────────────────
    "footer.col.services": "Services",
    "footer.col.services.software": "Software Development",
    "footer.col.services.ai": "AI Solutions",
    "footer.col.services.cloud": "Cloud & DevOps",
    "footer.col.services.consulting": "Consulting",
    "footer.col.services.design": "UX/UI Design",

    "footer.col.resources": "Resources",
    "footer.col.resources.blog": "Blog",
    "footer.col.resources.work": "Case Studies",
    "footer.col.resources.contact": "Contact",
    "footer.col.resources.careers": "Careers",

    "footer.col.company": "Company",
    "footer.col.company.about": "About Us",
    "footer.col.company.partners": "Partners",
    "footer.col.company.industries": "Industries",

    // ── Footer Legal ────────────────────────────────
    "footer.legal.privacy": "Privacy Policy",
    "footer.legal.terms": "Terms of Service",

    // ── Common ──────────────────────────────────────
    "common.read-more": "Read more",
    "common.back": "Go back",
    "common.loading": "Loading...",

    // ── Accessibility ───────────────────────────────
    "a11y.nav.main": "Main navigation",
    "a11y.nav.mobile": "Mobile navigation",
    "a11y.nav.open-menu": "Open navigation menu",
    "a11y.nav.close-menu": "Close navigation menu",
    "a11y.nav.submenu": "Submenu for",
    "a11y.lang.select": "Select language",
    "a11y.lang.available": "Available languages",
    "a11y.logo": "Bytek — Go to home",
    "a11y.lang.label": "Language",

    // ── Language Selector ───────────────────────────
    "lang.switch-to": "Switch to",
  },
} as const;
