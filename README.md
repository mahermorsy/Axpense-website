# Axpense.net marketing website

Production-oriented Next.js marketing website for Axpense fleet, vehicle, asset, equipment, maintenance, fuel and expense management software.

## Implemented in this build

- Next.js 14 App Router + TypeScript + Tailwind CSS
- Axpense visual design system using the product/logo palette
- Responsive navigation with mobile menu
- Homepage structured around search intent, product visualization and conversion
- Real Axpense dashboard screenshot supplied in the project at `/public/axpense-dashboard.webp`
- Four requested missing feature pages:
  - `/features/vehicle-management/`
  - `/features/fuel-management/`
  - `/features/work-orders/`
  - `/features/preventive-maintenance/`
- Arabic counterparts for those four features
- Missing industry pages:
  - `/industries/transportation/`
  - `/industries/energy-utilities/`
- Four campaign landing pages:
  - `/landing/fleet-management-egypt`
  - `/landing/fleet-maintenance-egypt`
  - `/landing/vehicle-expense-management`
  - `/landing/equipment-management`
- MENA market SEO architecture with localized English/Arabic market hubs for:
  - Egypt
  - Saudi Arabia
  - UAE
  - Qatar
  - Jordan
  - Iraq
  - MENA
- Country pages use genuine market-specific copy rather than city-level keyword variants or duplicated doorway pages
- Canonicals, Open Graph, Twitter metadata and reciprocal hreflang for localized market pairs
- Organization, WebSite, SoftwareApplication, BreadcrumbList and Article JSON-LD where applicable
- Dynamic `sitemap.xml` covering English, Arabic, market and landing pages
- `robots.txt`
- Real lead API endpoint at `/api/leads`
- Lead forms now fail honestly if `LEADS_WEBHOOK_URL` is not configured; they do not show fake success
- GTM/dataLayer event plumbing through `NEXT_PUBLIC_GTM_ID`
- Security response headers
- WebP dashboard asset for lower page weight
- Accessibility basics: semantic labels, focus states, responsive controls and reduced-motion handling
- No fabricated customer logos, testimonials, review counts, savings percentages or unsupported pricing figures

## SEO architecture

The site keeps the stable product URLs such as `/features/fleet-management/` as the main product architecture. Local market intent is handled through dedicated market hubs such as:

```text
/en-eg
/ar-eg
/en-sa
/ar-sa
/en-ae
/ar-ae
/en-qa
/ar-qa
/en-jo
/ar-jo
/en-iq
/ar-iq
/en-mena
/ar-mena
```

This avoids creating hundreds of near-identical country/city pages. Market pages should only be expanded when there is enough unique product, industry, commercial or localization value to justify them.

## Lead delivery

Set this server environment variable in production:

```env
LEADS_WEBHOOK_URL=https://your-approved-endpoint.example/leads
```

The endpoint receives JSON containing the form fields plus `source` and `receivedAt`.

The form also provides `info@axpense.net` as a manual fallback.

## Analytics

Set:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

The code pushes conversion events to `dataLayer`, including:

- `form_start`
- `generate_lead`

Additional CTA/event tracking can be added without changing page components.

## SEO launch checklist

1. Point the production domain to the deployed app and enforce HTTPS.
2. Set the real `LEADS_WEBHOOK_URL`.
3. Set the real GTM container ID.
4. Connect Google Search Console to `https://www.axpense.net`.
5. Submit `/sitemap.xml`.
6. Verify canonical URLs and hreflang pairs in Search Console/URL Inspection.
7. Validate JSON-LD with Google's Rich Results Test.
8. Confirm every indexable page has one useful H1 and unique metadata.
9. Confirm no country page is published unless its content is materially useful for that market.
10. Review legal pages before indexing them.

## Build

```bash
npm install
npm run dev
npm run build
```

## Validation note

The source was syntax-checked after implementation. A full production build could not be completed in this environment because the uploaded project dependencies were not fully available and package installation timed out / lacked cached packages. Run `npm ci` or `npm install` in a normal development or CI environment, then run `npm run build`.

## Review fixes (Sept 2026)

- **Per-language root layouts.** `app/(en)/layout.tsx` and `app/(ar)/layout.tsx` now render `<html lang="en" dir="ltr">` / `<html lang="ar" dir="rtl">` on the server. The client-side lang/dir script and `app/ar/layout.tsx` are gone. Arabic market hubs (`/ar-eg`, `/ar-sa`, …) moved into `app/(ar)/` and now load IBM Plex Sans Arabic. URLs are unchanged. Switching between English and Arabic triggers a full page load (expected with multiple root layouts).
- **404s.** `app/(en)/[notFound]` sends unknown top-level URLs to the branded `app/(en)/not-found.tsx`.
- **Market pages.** Removed visitor-facing SEO notes ("local search intent", "thin keyword pages") from `CountryLandingPage` and the MENA FAQ.
- **CTAs.** `lib/cta.ts` controls the primary CTA. While `NEXT_PUBLIC_SIGNUP_URL` is unset, it reads "Request Access" / "اطلب الوصول" and goes to the lead form, so there's no false "Start Free / No credit card" promise. Set that variable once self-serve sign-up exists and every CTA switches to "Start Free".
- **Log in.** A header link (EN and AR) points to `NEXT_PUBLIC_APP_URL` (default `https://axpense.lovable.app`).
- **Arabic pricing** now matches the English page. It previously showed $49/$149 and features (GPS, API, mobile app, AI, 24/7 phone, white-label) that aren't on the English page or in the app.
- **Messaging.** Homepage (EN and AR) and pricing now lead with kilometre-based preventive maintenance, spare parts lifecycle, driver assignment, inspection checklists and depreciation.
- **Lead API.** Field allow-list, length limits, honeypot, basic per-IP rate limit, and error codes (the Arabic form shows Arabic errors). `form_start` now fires on first focus. Company size is a dropdown and the phone placeholder isn't Egypt-only.
- **Campaign landing pages** (`/landing/*`) are `noindex`, removed from the sitemap, and have a footer with Privacy and Terms links.
- **Fleet cost calculator** has a currency selector (EGP, SAR, AED, QAR, JOD, IQD, USD) and labelled inputs.

### Env vars
- `LEADS_WEBHOOK_URL`: where form submissions are posted (required for forms to work)
- `NEXT_PUBLIC_GTM_ID`: Google Tag Manager
- `NEXT_PUBLIC_APP_URL`: app login URL
- `NEXT_PUBLIC_SIGNUP_URL`: optional; turns CTAs into "Start Free"

### Still open (needs your input)
- Final Privacy, Terms and Cookie policies, plus a consent banner before enabling GTM.
- Real pricing numbers (or "from" prices).
- Module screenshots (km-based PM, inspections, spare parts) and an Arabic dashboard screenshot.
- Fuel Management page: the app has no fuel module yet (fuel is an expense category). Either build it or reword the page.
- Hide the "Edit with Lovable" badge in the app and confirm `/dashboard` requires login.

## English and Arabic: one layout, two languages

Every marketing page exists in both languages with the same layout: `/path` in English and `/ar/path` in Arabic (RTL). Country hubs are `/en-xx` ↔ `/ar-xx`.

- Both languages render the **same components** (`Header`, `Footer`, `components/home/*`, `FeaturePage`, `IndustryPage`, `SolutionPage`, `components/pages/*`) with a `lang` prop. Each component keeps its English and Arabic strings side by side, so a layout change applies to both languages at once.
- Feature, industry and solution copy lives in `content/features.ts`, `content/industries.ts` and `content/solutions.ts` (`en` + `ar` per page).
- `lib/i18n.ts` → `lhref(lang, '/features')` gives `/ar/features` in Arabic. Blog articles and legal pages are English only; Arabic pages link to them directly, and the Arabic blog list shows Arabic titles and summaries.
- The old Arabic feature URLs (`/ar/fleet-management`, …) redirect permanently to `/ar/features/…` (see `next.config.js`).
- To add a page: build a view that takes `lang`, then add a thin `page.tsx` in `app/(en)/(marketing)/…` and `app/(ar)/ar/…` with the metadata for each language.

## Admin dashboard (/admin) + backend

- **Frontend:** `app/(admin)` + `components/admin` + `lib/admin`.
- **Backend:** `backend/` — .NET 8 Clean Architecture (Domain · Core · Infrastructure · Api · Tests), CQRS with MediatR,
  EF Core on SQL Server, ASP.NET Core Identity + JWT with roles (Admin / Editor / Sales). See `backend/README.md`.
- **Two modes:**
  - `NEXT_PUBLIC_API_URL` set → real sign-in (email + password) and all data from the API / SQL Server.
  - not set → demo mode with sample data in the browser (what the Vercel site shows today).
- **Lead form:** `/api/leads` saves each submission to the API (`API_INTERNAL_URL` or `NEXT_PUBLIC_API_URL`),
  and/or posts it to `LEADS_WEBHOOK_URL`.
- **Docker:** `cp .env.example .env && docker compose up --build` runs SQL Server + API + website.
- **CI:** `.github/workflows/ci.yml` builds and tests the backend, builds the website and both Docker images on every push.

| Section | What it does |
|---|---|
| Analytics (`/admin`) | New leads, demo-booked rate, won deals, unassigned leads (vs. previous period); leads per day/week; pipeline; source pages; industries; countries/channels; latest leads; top articles. Filters: 7/30/90 days + country. |
| Leads | Search, filters, bulk status/assign/delete, CSV export, drawer with status, owner, contact details, message and notes. |
| Blog articles | List + editor (sections, slug, category, publish date, SEO + Google preview), preview, publish/draft, delete. |
| FAQs | Per-page FAQ lists (homepage, pricing, each market EN/AR): add, edit, hide, delete, reorder. |
| Users | Add users (temporary password shown once), change role, disable/enable, reset password, remove. |
