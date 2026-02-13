/**
 * Bytek — Site Constants
 * Central place for all site-wide configuration
 */

export const SITE = {
  name: "Bytek",
  description:
    "Bytek — Software development and IT consulting company. We build scalable, high-performance digital products.",
  url: "https://bytek.com",
  defaultLanguage: "es",
  supportedLanguages: ["es", "en"] as const,
} as const;

export type SupportedLanguage = (typeof SITE.supportedLanguages)[number];

/**
 * Navigation items for the header
 *
 * - Simple items: just `label` + `href`
 * - Mega menu items: have `megaMenu` with grouped links + optional sidebar
 */
export interface NavLink {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface NavGroup {
  title: string;
  links: NavLink[];
}

export interface MegaMenu {
  groups: NavGroup[];
  sidebar?: {
    title: string;
    links: NavLink[];
  };
}

export interface NavItem {
  label: string;
  href: string;
  megaMenu?: MegaMenu;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Servicios",
    href: "/services",
    megaMenu: {
      groups: [
        {
          title: "Desarrollo",
          links: [
            {
              label: "Desarrollo de Software",
              href: "/services/software-development",
              description: "Aplicaciones web y móviles escalables con las mejores tecnologías.",
              icon: "code",
            },
            {
              label: "Soluciones de IA",
              href: "/services/ai-solutions",
              description: "Inteligencia artificial integrada en el ADN de tu producto.",
              icon: "brain",
            },
            {
              label: "Diseño UX/UI",
              href: "/services/ux-ui-design",
              description: "Interfaces intuitivas que convierten usuarios en clientes.",
              icon: "palette",
            },
          ],
        },
        {
          title: "Infraestructura",
          links: [
            {
              label: "Cloud & DevOps",
              href: "/services/cloud-devops",
              description: "Arquitectura cloud moderna, CI/CD y escalabilidad automática.",
              icon: "cloud",
            },
            {
              label: "Consultoría",
              href: "/services/consulting",
              description: "Estrategia técnica y acompañamiento para decisiones clave.",
              icon: "lightbulb",
            },
          ],
        },
      ],
      sidebar: {
        title: "Recursos",
        links: [
          {
            label: "Ver todos los servicios",
            href: "/services",
            description: "Explorá el catálogo completo de soluciones que ofrecemos.",
            icon: "arrow-right",
          },
          {
            label: "Casos de éxito",
            href: "/work",
            description: "Mirá cómo ayudamos a empresas reales a crecer.",
            icon: "rocket",
          },
          {
            label: "Solicitar una demo",
            href: "/contact",
            description: "Agendá una reunión y te mostramos todo en vivo.",
            icon: "phone",
          },
        ],
      },
    },
  },
  {
    label: "Industrias",
    href: "/industries",
    megaMenu: {
      groups: [
        {
          title: "Sectores",
          links: [
            {
              label: "Fintech",
              href: "/industries/fintech",
              description: "Soluciones que entienden PCI-DSS, regulaciones y pagos.",
              icon: "banknote",
            },
            {
              label: "Healthcare",
              href: "/industries/healthcare",
              description: "Plataformas compatibles con HIPAA, HL7 y FHIR.",
              icon: "heart-pulse",
            },
            {
              label: "Retail & E-commerce",
              href: "/industries/retail-ecommerce",
              description: "Experiencias de compra que convierten y escalan.",
              icon: "shopping-cart",
            },
            {
              label: "SaaS & Startups",
              href: "/industries/saas-startups",
              description: "De la idea al MVP en tiempo récord.",
              icon: "rocket",
            },
          ],
        },
      ],
      sidebar: {
        title: "Más información",
        links: [
          {
            label: "Ver todas las industrias",
            href: "/industries",
            description: "Descubrí todos los sectores donde tenemos experiencia.",
            icon: "building",
          },
          {
            label: "¿No ves tu industria?",
            href: "/contact",
            description: "Contanos tu caso y armamos una solución a medida.",
            icon: "lightbulb",
          },
        ],
      },
    },
  },
  {
    label: "Casos de éxito",
    href: "/work",
  },
  {
    label: "Nosotros",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

/**
 * Footer link columns
 */
export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Servicios",
    links: [
      { label: "Desarrollo de Software", href: "/services/software-development" },
      { label: "Soluciones de IA", href: "/services/ai-solutions" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "Consultoría", href: "/services/consulting" },
      { label: "Diseño UX/UI", href: "/services/ux-ui-design" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Casos de éxito", href: "/work" },
      { label: "Contacto", href: "/contact" },
      { label: "Carreras", href: "/careers" },
    ],
  },
  {
    title: "Compañía",
    links: [
      { label: "Sobre nosotros", href: "/about" },
      { label: "Partners", href: "/partners" },
      { label: "Industrias", href: "/industries" },
    ],
  },
];

export const FOOTER_LEGAL_LINKS = [
  { label: "Política de Privacidad", href: "/privacy" },
  { label: "Términos de Servicio", href: "/terms" },
] as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/bytek", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/bytek", icon: "github" },
  { label: "X", href: "https://x.com/bytek", icon: "x" },
] as const;
