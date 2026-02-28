# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 (App Router) multi-page marketing website for a web design business (Greyson Grogan / grogan.dev) serving the Tri-Cities, Washington area (Kennewick, Pasco, Richland, West Richland). The site features service pages, industry-specific landing pages, city landing pages, a blog, pricing pages, and contact functionality.

## Tech Stack

- **Framework**: Next.js 16.1.6 with App Router
- **React**: 19.2.3
- **Styling**: Custom CSS with CSS variables (Premium Midnight Theme) in `globals.css` - NOT Tailwind
- **Icons**: Lucide React
- **Language**: TypeScript (strict mode)
- **Linting**: ESLint 9 with eslint-config-next (flat config)
- **Package Manager**: NPM (package-lock.json present)

## Commands

```bash
# Development (uses NPM)
npm run dev         # Start development server on http://localhost:3000

# Production
npm run build       # Build for production
npm run start       # Start production server

# Linting
npm run lint        # Run ESLint
```

## Architecture

### Directory Structure

```
app/                              # Next.js App Router pages
├── page.tsx                    # Homepage
├── layout.tsx                  # Root layout with SEO metadata, JSON-LD schemas, fonts
├── globals.css                  # Custom CSS with CSS variables (Premium Midnight Theme)
├── sitemap.ts                   # Dynamic sitemap.xml
├── not-found.tsx                # 404 page
│
├── about/                       # About page
├── blog/                        # Blog listing and dynamic [slug] routes
│   ├── page.tsx
│   └── [slug]/page.tsx
├── contact/                     # Contact page
├── privacy/                     # Privacy policy
├── terms/                       # Terms of service
│
├── pricing/                     # Pricing pages
│   ├── page.tsx                 # Main pricing
│   └── get-started/             # Get started flow
│       ├── layout.tsx
│       └── page.tsx
│
├── portfolio/                   # Portfolio page
├── services/                    # Service pages (web-design, ecommerce, local-seo, managed-hosting)
│   ├── page.tsx
│   ├── web-design/page.tsx
│   ├── ecommerce/page.tsx
│   ├── local-seo/page.tsx
│   └── managed-hosting/page.tsx
│
├── industries/                  # Industries overview page
│
├── seo-tri-cities/             # SEO services landing page
│
├── web-design-kennewick/       # Primary service landing page
│
├── medical-website-design/      # Industry: Healthcare/Dental
├── real-estate/                 # Industry: Real Estate
├── web-design-for-contractors/  # Industry: Contractors/Home Services
├── restaurants/                 # Industry: Restaurants
├── winery-website-design/       # Industry: Wineries
├── professional-services/       # Industry: Professional Services
│
└── [city]/                     # City landing pages (kennewick, pasco, richland, west-pasco)

components/                      # Reusable React components
├── Header.tsx                  # Site header with navigation
├── Footer.tsx                  # Site footer with contact info
├── ContactForm.tsx            # Contact form component
├── FAQAccordion.tsx           # FAQ accordion component
├── CityLandingPage.tsx        # Reusable city landing page template
├── LazyMap.tsx                # Lazy-loaded map component
└── Logo.tsx                   # Logo component

lib/                            # Data and utilities
├── data.ts                     # Site config, FAQs, services, industries, pricing packages
└── blog-data.tsx              # Blog posts with full content

public/
├── images/                     # Static images
│   ├── industries/            # Industry-specific images
│   └── about/
└── robots.txt
```

### Key Patterns

**Page Structure:**
- Each page exports metadata for SEO using Next.js `Metadata` type
- Root layout (`app/layout.tsx`) contains global SEO, JSON-LD schemas for LocalBusiness and Service

**Styling:**
- Custom CSS in `app/globals.css` using CSS variables (NOT Tailwind)
- "Premium Midnight Theme" with dark surfaces (`--color-dark`, `--color-dark-surface`)
- Brand accents: Primary blue (`--color-primary`), amber accent (`--color-accent`)
- Fonts: Outfit (headings via `--font-display`), Plus Jakarta Sans (body via `--font-sans`)

**Data Management:**
- `lib/data.ts` - Central source of truth for site config, FAQs, services, industries, pricing
- `lib/blog-data.tsx` - Blog posts with full JSX content
- Components import data from `lib/` using `@/` path alias

**SEO:**
- JSON-LD structured data in layout.tsx (LocalBusiness schema, Service schema)
- Per-page metadata exports
- robots.txt in public/

**Components:**
- Located in `/components`, imported with `@/*` path alias
- City pages use `CityLandingPage` component with city-specific props

**Route Patterns:**
- Static service pages: `/services/[service-name]`
- Industry pages: `/[industry-name]` (e.g., medical-website-design, real-estate)
- City landing pages: `/[city-name]` (e.g., kennewick, pasco, richland)
- Blog: `/blog` and `/blog/[slug]`
- Pricing: `/pricing` and `/pricing/get-started`

### Configuration Files

- `next.config.ts` - Compression, image formats (avif, webp), device sizes, experimental optimizeCss
- `eslint.config.mjs` - Flat config with next/core-web-vitals and next/typescript
- `tsconfig.json` - Strict mode, `@/*` path alias to project root

### Author

Zackariah Grogan - the site owner and content author (see blog posts in lib/blog-data.tsx)
