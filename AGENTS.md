# Bytek Website

Bytek is a new technology modern company specializing in software development and IT consulting. This repository contains the codebase for the Bytek website.

## Auto-invoke Skills

When performing these actions, ALWAYS invoke the corresponding skill FIRST:

| Action                                                                | Skill           |

| --------------------------------------------------------------------- | --------------- |
When you need something related with SEO OPTIMIZATION                        | `seo-expert`|



## Non-negotiables

- Never use barrel files 
- Always use path aliases instead of imports
- Always use pnpm as the package manager

## Tech Stack

| Component  | Location           | Technology                 |

| ---------- | ------------------ | -------------------------- |

| Website         | `src/`             | Astro, Tailwind, GSAP  |
| Error Monitoring | Sentry | Sentry SDK |



## The Scope Rule - Your Unbreakable Law

- Code used by 2+ features → MUST go in global/shared directories
- Code used by 1 feature → MUST stay local in that feature
- NO EXCEPTIONS - This rule is absolute and non-negotiable


## Directory Structure

```
src/
  pages/
    blog/
      [...slug].astro              # Dynamic blog routes
      index.astro                  # Blog listing page
      components/                  # Blog-specific components
        blog-card.astro           # Static blog preview
        blog-sidebar.astro        # Static sidebar
      utils/
        blog-helpers.ts           # Blog-specific utilities
    about/
      index.astro                 # About page
      components/                 # About section components
        team-member.astro         # Static team member cards
        contact-form.svelte       # Client island using Svelte
    (OTHERS PAGES LIKE SERVICES, CONTACT, ETC.)
    index.astro                   # Home page
    404.astro                     # 404 page
  components/                     # ONLY for 2+ page usage
    ui/                          # Reusable UI components
    layout/
      Header.astro               # Site header with navigation
      Footer.astro               # Site footer
      SEO.astro                  # SEO meta component
  layouts/                      # Page layouts
    BlogLayout.astro            # Layout for blog pages
    BaseLayout.astro            # Base layout template
  lib/                          # Utilities and configurations
    utils.ts                    # General utilities
    constants.ts                # Site constants
    api.ts                      # API helpers
  styles/                       # Global styles
    global.css                  # Global CSS
    components.css              # Component-specific styles
```