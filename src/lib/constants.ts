/**
 * Bytek — Site Constants
 *
 * Central place for all site-wide configuration.
 * Navigation and footer items are i18n-aware — they use t() for labels
 * and getLocalizedHref() for links.
 */

import {
  useTranslations,
  getLocalizedHref,
  type Lang,
} from "@/i18n/utils";

export const SITE = {
  name: "Bytek",
  url: "https://bytek.com",
} as const;

// ── Type Definitions ────────────────────────────────

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

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

// ── Navigation Items (i18n-aware) ───────────────────

export function getNavItems(lang: Lang): NavItem[] {
  const t = useTranslations(lang);
  const l = (href: string) => getLocalizedHref(href, lang);

  return [
    {
      label: t("nav.services"),
      href: l("/services"),
      megaMenu: {
        groups: [
          {
            title: t("nav.services.group.development"),
            links: [
              {
                label: t("nav.services.software-development"),
                href: l("/services/software-development"),
                description: t("nav.services.software-development.desc"),
                icon: "code",
              },
              {
                label: t("nav.services.ai-solutions"),
                href: l("/services/ai-solutions"),
                description: t("nav.services.ai-solutions.desc"),
                icon: "brain",
              },
              {
                label: t("nav.services.ux-ui-design"),
                href: l("/services/ux-ui-design"),
                description: t("nav.services.ux-ui-design.desc"),
                icon: "palette",
              },
            ],
          },
          {
            title: t("nav.services.group.infrastructure"),
            links: [
              {
                label: t("nav.services.cloud-devops"),
                href: l("/services/cloud-devops"),
                description: t("nav.services.cloud-devops.desc"),
                icon: "cloud",
              },
              {
                label: t("nav.services.consulting"),
                href: l("/services/consulting"),
                description: t("nav.services.consulting.desc"),
                icon: "lightbulb",
              },
            ],
          },
        ],
        sidebar: {
          title: t("nav.services.sidebar.title"),
          links: [
            {
              label: t("nav.services.sidebar.view-all"),
              href: l("/services"),
              description: t("nav.services.sidebar.view-all.desc"),
              icon: "arrow-right",
            },
            {
              label: t("nav.services.sidebar.cases"),
              href: l("/work"),
              description: t("nav.services.sidebar.cases.desc"),
              icon: "rocket",
            },
            {
              label: t("nav.services.sidebar.demo"),
              href: l("/contact"),
              description: t("nav.services.sidebar.demo.desc"),
              icon: "phone",
            },
          ],
        },
      },
    },
    {
      label: t("nav.industries"),
      href: l("/industries"),
      megaMenu: {
        groups: [
          {
            title: t("nav.industries.group.sectors"),
            links: [
              {
                label: t("nav.industries.fintech"),
                href: l("/industries/fintech"),
                description: t("nav.industries.fintech.desc"),
                icon: "banknote",
              },
              {
                label: t("nav.industries.healthcare"),
                href: l("/industries/healthcare"),
                description: t("nav.industries.healthcare.desc"),
                icon: "heart-pulse",
              },
              {
                label: t("nav.industries.retail"),
                href: l("/industries/retail-ecommerce"),
                description: t("nav.industries.retail.desc"),
                icon: "shopping-cart",
              },
              {
                label: t("nav.industries.saas"),
                href: l("/industries/saas-startups"),
                description: t("nav.industries.saas.desc"),
                icon: "rocket",
              },
            ],
          },
        ],
        sidebar: {
          title: t("nav.industries.sidebar.title"),
          links: [
            {
              label: t("nav.industries.sidebar.view-all"),
              href: l("/industries"),
              description: t("nav.industries.sidebar.view-all.desc"),
              icon: "building",
            },
            {
              label: t("nav.industries.sidebar.custom"),
              href: l("/contact"),
              description: t("nav.industries.sidebar.custom.desc"),
              icon: "lightbulb",
            },
          ],
        },
      },
    },
    {
      label: t("nav.work"),
      href: l("/work"),
    },
    {
      label: t("nav.about"),
      href: l("/about"),
    },
    {
      label: t("nav.blog"),
      href: l("/blog"),
    },
  ];
}

// ── Footer Items (i18n-aware) ───────────────────────

export function getFooterColumns(lang: Lang): FooterColumn[] {
  const t = useTranslations(lang);
  const l = (href: string) => getLocalizedHref(href, lang);

  return [
    {
      title: t("footer.col.services"),
      links: [
        { label: t("footer.col.services.software"), href: l("/services/software-development") },
        { label: t("footer.col.services.ai"), href: l("/services/ai-solutions") },
        { label: t("footer.col.services.cloud"), href: l("/services/cloud-devops") },
        { label: t("footer.col.services.consulting"), href: l("/services/consulting") },
        { label: t("footer.col.services.design"), href: l("/services/ux-ui-design") },
      ],
    },
    {
      title: t("footer.col.resources"),
      links: [
        { label: t("footer.col.resources.blog"), href: l("/blog") },
        { label: t("footer.col.resources.work"), href: l("/work") },
        { label: t("footer.col.resources.contact"), href: l("/contact") },
        { label: t("footer.col.resources.careers"), href: l("/careers") },
      ],
    },
    {
      title: t("footer.col.company"),
      links: [
        { label: t("footer.col.company.about"), href: l("/about") },
        { label: t("footer.col.company.partners"), href: l("/partners") },
        { label: t("footer.col.company.industries"), href: l("/industries") },
      ],
    },
  ];
}

export function getFooterLegalLinks(lang: Lang) {
  const t = useTranslations(lang);
  const l = (href: string) => getLocalizedHref(href, lang);

  return [
    { label: t("footer.legal.privacy"), href: l("/privacy") },
    { label: t("footer.legal.terms"), href: l("/terms") },
  ];
}

// ── Static constants (language-independent) ─────────

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/bytek", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/bytek", icon: "github" },
  { label: "X", href: "https://x.com/bytek", icon: "x" },
] as const;
