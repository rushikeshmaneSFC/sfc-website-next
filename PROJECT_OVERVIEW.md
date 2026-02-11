# SFC Website Next — Project Overview

This document describes the **sfc-website-next** project: its structure, routing, shared components, and how pieces fit together. The project is the St. Fox Consultancy marketing and product website built with **Next.js 16** (App Router), **React**, and **TypeScript**.

---

## 1. What This Project Is

- **Product:** Marketing and product site for **St. Fox** (Saint Fox Consultancy) — cybersecurity, managed services, cloud, data, and AI security.
- **Stack:** Next.js 16 (App Router), React, TypeScript, Tailwind CSS, Flowbite (light usage), Framer Motion (animations).
- **Deployment:** Static/SSG-friendly (most routes are static); supports middleware (e.g. www → non-www redirect).

---

## 2. Top-Level Project Structure

```
sfc-website-next/
├── app/                    # Next.js App Router — routes and layouts
├── components/             # React components (feature + shared)
├── constants/              # Data and config (copy, links, FAQs, etc.)
├── context/                # React context (e.g. Sidebar)
├── helpers/                # Pure helpers (browser, screen size)
├── hooks/                  # Custom React hooks
├── lib/                    # Third-party/config (e.g. axios, flowbite theme)
├── public/                 # Static assets (images, fonts, etc.)
├── middleware.ts           # Global middleware (e.g. www redirect)
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

**Path alias:** `@/*` maps to the project root (e.g. `@/components/...`, `@/constants/...`).

---

## 3. How Routing Works (App Router)

Next.js **App Router** is used: **file-system based routing** under `app/`.

### 3.1 Route → File Mapping

| URL path | File | Purpose |
|----------|------|---------|
| `/` | `app/page.tsx` | Home / Landing |
| `/managed-services` | `app/managed-services/page.tsx` | Managed Services page |
| `/vigile` | `app/vigile/page.tsx` | VIGILE framework |
| `/casestudies` | `app/casestudies/page.tsx` | Blog / Insights listing |
| `/casestudies/Crossroads` | `app/casestudies/Crossroads/page.tsx` | Single case study |
| `/privacy-policy` | `app/privacy-policy/page.tsx` | Legal |
| `/pages/404` | `app/pages/404/page.tsx` | Custom 404 |

- **No `pages/` directory** for routes; all routes live under `app/`.
- **One route segment ≈ one folder.** Nested path = nested folder (e.g. `app/casestudies/Crossroads/page.tsx` → `/casestudies/Crossroads`).
- **No dynamic segments** like `[slug]` in the current structure; each case study and service has its own folder and `page.tsx`.

### 3.2 Page File Pattern

Each route is a **page** that:

1. Exports **metadata** (title, description, OpenGraph, etc.) for SEO.
2. Exports a **default React component** that usually renders a single **“Client”** container from `components/`.

Example:

```tsx
// app/managed-services/page.tsx
import type { Metadata } from "next";
import ManagedServicesClient from "@/components/managed-services/ManagedServicesClient";

export const metadata: Metadata = { ... };

export default function ManagedServicesPage() {
  return <ManagedServicesClient />;
}
```

So:

- **`app/[route]/page.tsx`** = route + metadata + thin wrapper.
- **`components/[feature]/[Feature]Client.tsx`** = actual UI and behavior (often `"use client"`).

### 3.3 Special App Files

- **`app/layout.tsx`** — Root layout: HTML shell, global metadata, fonts, and **AppShell** (navbar + main + footer). Wraps every page.
- **`app/not-found.tsx`** — Default 404 UI when no route matches.
- **`app/globals.css`** — Global styles (Tailwind, etc.).
- **`app/robots.ts`** — Dynamic `robots.txt`.
- **`app/sitemap.ts`** — Dynamic sitemap (all public routes + priorities).

No `layout.tsx` per route by default; only the root layout is used for the whole site.

---

## 4. Layout and Shell (Where Common UI Lives)

### 4.1 Root Layout (`app/layout.tsx`)

- Sets **metadata** (title template, description, OpenGraph, Twitter, canonical, robots).
- Uses **`metadataBase`** so relative URLs (e.g. canonical, OG image) resolve to the production domain.
- Renders `<html>`, `<head>` (fonts, JSON-LD for Organization and WebSite), and `<body>`.
- **Wraps children in `<AppShell>`** so every page shares the same chrome.

### 4.2 AppShell (`components/layout/AppShell.tsx`)

- **Client component** (`"use client"`).
- Composes:
  - **SidebarProvider** (from `context/SidebarContext.tsx`) — sidebar open/close state.
  - **Navbar** — top navigation.
  - **MainContent** (from `navbar-sidebar.tsx`) — `<main>` that:
    - Renders **`children`** (the page content).
    - Optionally renders **footer** (e.g. `MainContentFooter` on desktop).

So: **Every page gets Navbar + (Main + optional Footer)**. Page content is the `children` passed into `AppShell` by the root layout.

### 4.3 FlowbiteWrapper

- **`components/layout/flowbite-wrapper.tsx`** — theme/dark-mode helper (e.g. reading `localStorage` and applying `dark` class).
- **Not** used in the root layout. It is used only where needed, e.g. **Landing page**: `LandingPageClient` wraps its content in `<FlowbiteWrapper>` so the home page can have its own theme behavior without affecting the rest of the app.

### 4.4 Summary

- **Common UI:** Navbar, main area, footer, and sidebar state come from **AppShell** and **navbar-sidebar**.
- **Routing** does not change the shell; only the `children` inside `<main>` change per route.

---

## 5. Where Components Live and How They’re Used

### 5.1 Component Folders (by role)

| Folder | Role | Used by |
|--------|------|--------|
| **`components/layout/`** | App shell: Navbar, footer, sidebar, Flowbite | Root layout and landing |
| **`components/atoms/`** | Small, reusable building blocks | Many feature components across the app |
| **`components/landing/`** | Home page sections | `LandingPageClient` only |
| **`components/home/`** | VIGILE / home-related content | `/vigile` page |
| **`components/managed-services/`** | Managed Services page | `/managed-services` |
| **`components/casestudies/`** | Blog listing + each case study | `/casestudies` and `/casestudies/[name]` |
| **`components/legal/`** | Privacy, Terms | `/privacy-policy`, `/terms-of-use` |
| **`components/[service]/`** | One folder per service (vapt, dspm, soc2, …) | Corresponding `app/[service]/page.tsx` |

So:

- **Layout** = global (navbar, main, footer).
- **Atoms** = shared across features.
- **Feature folders** = one per route or group of routes (e.g. `managed-services`, `vapt`, `casestudies`).

### 5.2 Flow: Route → Page → Client → Sections / Atoms

1. **Route** is defined by `app/[segment]/page.tsx` (or nested `app/[segment]/[sub]/page.tsx`).
2. **Page** imports a **Client** from `components/[feature]/[Feature]Client.tsx` and renders it.
3. **Client** composes **section components** (hero, cards, FAQ, etc.) from the same feature or from atoms.

Example for **Managed Services**:

- `app/managed-services/page.tsx` → `ManagedServicesClient`
- `ManagedServicesClient` → `ManagedServicesHeroSection` + `ManagedSerivesCard`
- `ManagedSerivesCard` → **atoms:** `ServiceCard`, `Wrapper`; **constants:** `ManagedServicesConstant`

So: **Routing** stays in `app/`; **UI composition** lives in `components/`; **data/copy** often in `constants/`.

---

## 6. Common Components (Atoms)

**Location:** `components/atoms/`

These are reused across many feature components (hero sections, cards, modals, etc.).

| Component | Purpose | Typical use |
|-----------|----------|-------------|
| **Wrapper** | Layout/width container | Sections that need consistent max-width/padding |
| **ReusableBtn** | Buttons (primary, secondary, etc.) | CTAs, modals, forms |
| **ReusableCard** | Card with icon, title, description | Service/feature cards, lists |
| **ServiceCard** | Card with link (e.g. to a service page) | Managed services, specialized services |
| **PreventionCard** | Card with optional link | Landing “Managed” section, feature grids |
| **ReusableDatasheet** | Datasheet CTA + modal | Many service pages (download datasheet) |
| **ScheduleModal** | “Schedule assessment” / contact modal | Hero sections, CTAs across site |
| **FAQItem** | Single FAQ row (accordion-style) | FAQ sections on service pages |
| **SubNavbar** | In-page nav (e.g. anchors) | Long service pages |
| **HeroSection** | Generic hero layout | Some service heroes |
| **Accordion** | Expand/collapse | FAQs, mobile menus |
| **Card** (e.g. ProductCard) | Blog/case study cards | Insights, case study grids |
| **PatchValidationCard**, **ImpcatCard**, etc. | Domain-specific cards | Specific service pages |

**Usage:** Feature components import atoms with `@/components/atoms/...`. There are many such imports across `components/` (managed-services, vapt, soc2, landing, dspm, etc.), so atoms are the main shared building blocks.

---

## 7. Constants (Data and Copy)

**Location:** `constants/`

Used to keep copy, links, and structured data out of components. One (or more) file per feature or domain.

| File | Purpose |
|------|---------|
| **ManagedServicesConstant** | Service list (title, description, link) for Managed Services cards |
| **LandingpageConstant** | Hero texts, tabs, threat data, services for landing |
| **homeConstant** | VIGILE / home page cards and copy |
| **BlogConstant** / **BLOGS** | Blog/case study list for Insights |
| **OptimizeDefenses** | Copy and data for Optimize Defenses page |
| **vaptConstant**, **DSPMConstant**, **SOC2Constant**, etc. | Service-specific FAQs, stats, features, links |
| **RouteConstant** | Central list of routes (e.g. for nav, sitemap) |

Components import from `@/constants/...` and map over arrays or pass objects into atoms (e.g. `ServiceCard`, `ReusableCard`).

---

## 8. Context and State

- **SidebarContext** (`context/SidebarContext.tsx`): Provides sidebar open/close state and a setter. Used by layout (navbar/sidebar) and any component that needs to close the sidebar (e.g. on navigation).
- **AppShell** wraps the app in `SidebarProvider`; **Navbar** and **MainContent** use `useSidebarContext()`.

No global routing state; navigation is via Next.js **Link** and **useRouter** from `next/navigation`.

---

## 9. Helpers and Hooks

- **helpers/is-browser.ts** — Detect if code runs in browser (e.g. for `window`, `localStorage`).
- **helpers/is-small-screen.ts** — Mobile/small screen check (e.g. for sidebar behavior).
- **hooks/useScrollonTop.tsx** — Scroll-to-top or scroll-related behavior (used where needed).

Used by layout, context, and some client components to avoid SSR issues or to adapt UI for mobile.

---

## 10. Middleware

**File:** `middleware.ts` (root)

- Runs on every request that matches the configured `matcher` (excludes static assets, `_next`, etc.).
- **Current use:** 301 redirect **www → non-www** so the site has a single canonical host for SEO.

You can add more rules (e.g. locale redirects, auth) in the same middleware.

---

## 11. Sitemap and SEO

- **`app/sitemap.ts`** — Builds sitemap from a list of **public routes** (home, about, services, case studies, legal, etc.) with priorities and change frequencies.
- **`app/robots.ts`** — Serves `robots.txt` (allow/disallow, sitemap URL).
- **Per-page SEO:** Each `app/[route]/page.tsx` exports `metadata` (title, description, OpenGraph, Twitter, etc.). Root `app/layout.tsx` sets defaults and `metadataBase`.

---

## 12. End-to-End Request Flow (Example)

1. User opens **`/managed-services`**.
2. Next.js matches **`app/managed-services/page.tsx`**.
3. Root **layout** runs: renders `<html>`, `<body>`, **AppShell** (Navbar + MainContent), and passes **page children** into AppShell.
4. **Page** renders `<ManagedServicesClient />`.
5. **ManagedServicesClient** (client component) renders:
   - `ManagedServicesHeroSection`
   - `ManagedSerivesCard` (which uses **Wrapper**, **ServiceCard**, and **ManagedServicesConstant**).
6. **Navbar** (from AppShell) shows global nav and uses **SidebarContext** for mobile menu.
7. **MainContent** renders footer (if enabled) and the main area where **ManagedServicesClient** sits.

So: **one route → one page component → one main Client component → many section/components and atoms, with data from constants.**

---

## 13. Quick Reference

| I want to… | Where to look |
|------------|----------------|
| Add a new page/route | Create `app/[your-route]/page.tsx` and export metadata + default component. |
| Change global nav/footer | `components/layout/navbar.tsx`, `components/layout/navbar-sidebar.tsx` (MainContentFooter). |
| Reuse a small UI piece | `components/atoms/` (or add a new atom). |
| Add page-specific content | Create or edit a `*Client.tsx` (and sections) under `components/[feature]/`. |
| Change copy or list data | `constants/` (e.g. ManagedServicesConstant, LandingpageConstant). |
| Change root metadata / layout | `app/layout.tsx`. |
| Change redirects (e.g. www) | `middleware.ts`. |
| Adjust sitemap/SEO | `app/sitemap.ts`, `app/robots.ts`, and each `app/.../page.tsx` metadata. |

---

This overview should be enough to understand project structure, how routing works, where common components live, and how to add or change pages and features in **sfc-website-next**.
