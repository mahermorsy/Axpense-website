# Axpense content brief (for writers of `content/seo/**` and `content/blog/**`)

Axpense (axpense.net) is a B2B SaaS platform for **fleet and asset management**, sold to companies in Egypt, Saudi Arabia and the wider Middle East, in English and Arabic. Primary CTA everywhere: **"Book a Demo"** (Arabic: "احجز عرضًا تجريبيًا"). Never "Request a Demo".

## 1. Hard rules

1. **Capability gate — never state an unconfirmed capability.** See `lib/capabilities.ts`.
   - Confirmed (state freely): vehicles registry (plate, make, model, odometer, status, history), **km-based preventive maintenance** (service intervals in kilometres; reminders; km left until service; overdue), **service history**, **spare parts** (tracked from purchase to installation, which part went into which vehicle — “parts lifecycle”), **drivers** (assignment of drivers to vehicles), **inspections with checklists** (configurable checklist items, pass/fail, failed items recorded on the vehicle), **expenses** (repairs, parts, insurance, registration and other costs recorded per vehicle, by category), **depreciation** (book value over time, lifecycle), **reports & dashboards** (maintenance status, costs by vehicle/category, fleet overview). Owner-supplied facts you may use: Arabic & English interface, free onboarding, "live in one day", pricing in `content/pricing.ts` (helpers in `lib/pricing.ts`): one price per vehicle per month by fleet size, every feature included, minimum 5 vehicles; tiers 5–10 / 11–25 / 26–50 / 51–100 / 101–250 / 251–500 vehicles at 350 / 320 / 290 / 260 / 230 / 200 EGP, $10 / $9 / $8.25 / $7.50 / $6.50 / $5.75 and 38 / 34 / 31 / 28 / 24 / 22 SAR per vehicle per month; above 500 vehicles custom pricing (Talk to Sales); annual billing saves 20%; start free with no credit card (do not state a trial length); prices are set per market, not converted daily.
   - Also confirmed by the owner on 30 Sep 2026: **work orders** (linked to maintenance), **fuel management** (fuel records on the vehicle profile, with analytics; fuel counts as a running cost), **alerts & notifications**. Mobile app: planned — only as "coming soon".
   - **Unconfirmed** (do NOT state as fact outside a gated block): inspection photos, inspection → work order automation, budgets / budget vs actual, document expiry reminders (licence/registration/insurance renewals), multi-currency inside the app, GPS / tracking, route optimisation, AI, public API, mobile app, white-label, SSO, non-vehicle equipment/assets (machines, forklifts, tools), hour-based (engine hours) maintenance, users & roles/permissions, a standalone issues list.
   - You MAY write content about an unconfirmed capability **only** inside an item/section/FAQ that carries `requires: 'capabilityName'` (or an array). It is hidden until confirmed. Keep every ungated sentence true without it.
   - Talking about a *business practice* is fine even if the app has no module for it (e.g. "include fuel in your cost-per-km calculation" in a blog guide), as long as you don't claim Axpense does it. On product pages, say what the user can record in Axpense only for confirmed things.
   - Avoid "تتبع المركبات" / "تتبع السيارات" and "vehicle tracking" as targets (implies GPS).
2. **Never fabricate**: no customer names, counts, logos, testimonials, ratings, awards, certifications, uptime, savings percentages, partnerships, or compliance/regulatory claims (no "compliant with …", no integration with any government system). Worked examples with made-up numbers are fine when clearly an example ("For example, a van that…").
3. **One URL owns each keyword** (map in §4). Don't use another page's primary keyword in your title or H1. When your page mentions a topic another page owns, explain it in 2–3 sentences from your own angle and link to the owner page.
4. **No thin pages.** Minimum words of visible body content (hero intro + sections + FAQs), EN: commercial 1,200 · feature 700 · industry 800 · location 800 · blog 1,200. Arabic twins must reach at least 70 % of the EN minimum. Aim 15–25 % above the minimum; don't pad.
5. **Don't reuse paragraphs** across pages. Each page answers its own question.
6. **Arabic is localised, not translated literally.** Natural Modern Standard Arabic for business readers. Egypt-focused copy prefers برنامج + السيارات; Gulf/Saudi copy prefers نظام + المركبات; general pages can mix naturally. Local examples: EGP for Egypt, SAR for Saudi. Put the comment `// needs-native-review: Arabic written by Claude` at the top of every file that contains Arabic.
7. Links: only internal English paths from §3 (they are localised automatically on Arabic pages). Descriptive anchors; never "click here" / "learn more". 2–5 contextual links per page body in addition to the data fields. Don't link to gated pages (`/features/work-orders`, `/features/fuel-management`) except inside gated items.
8. Meta descriptions: 140–155 characters (Arabic ≈ same length), unique, primary keyword once, one concrete benefit, soft CTA ("Book a demo" / "احجز عرضًا تجريبيًا"). Meta titles WITHOUT the brand (the template adds " | Axpense" / " | أكسبنس"); keep title + " | Axpense" ≤ 60 characters.
9. Tone: plain, specific, practical, confident. No hype words ("revolutionary", "cutting-edge", "seamless"). Short paragraphs. American spelling is fine but use "kilometres"/"km" consistently.

## 2. Data model

- SEO pages: type `SeoPage` in `lib/seo-page.ts`. **Read the exemplar `content/seo/commercial.ts` (FLEET_MANAGEMENT_SOFTWARE) first** and follow its structure and quality.
- Section kinds: `text` (heading + markdown-lite body), `steps`, `cards` (icon names in `IconName`), `checklist`, `formula` (label + expression, optional worked example body), `screenshot` (image: 'dashboard' | 'vehicles' | 'maintenance'; write a specific alt text), `workflow` (ordered nodes, each can be gated). Every section / step / card / checklist item / workflow node / FAQ accepts `requires`.
- Markdown-lite in `body`, `desc`, FAQ answers, hero intro: blank line between paragraphs; `### ` H3; `- ` bullets; `1. ` numbered; pipe tables (`| a | b |` then `|---|---|`); `> ` note; `**bold**`; `[anchor](/path)`. Section `heading` is rendered as H2 — the page has exactly one H1 (the `h1` field), so never put `#`/`##` in bodies.
- Blog posts: type `BlogPost` in `lib/blog.ts`. `sections[0]` is the direct answer: heading "Quick answer" / "الإجابة المختصرة", body = the answer in the first 2–3 sentences (40–70 words). Then H2 sections (with `### ` H3s inside where useful), worked examples/calculations, and a closing section. `excerpt` ≤ 160 chars. `seoTitle` (≤ 52 chars, no brand), `seoDescription` (140–155). `relatedPages[0]` = the commercial page the article supports, then 2–3 related paths. Add 3–5 `faqs`. `status: 'published'`. Arabic twin files reuse the English slug and set `language: 'ar'`.
- `updatedAt` / `publishedAt`: use '2026-09-29' for new/updated content unless told otherwise.
- `relatedArticles` on SEO pages: blog slugs from §3 (max 3 shown).

## 3. URL inventory (English paths; Arabic twin = `/ar` + path)

Commercial: `/fleet-management-software` · `/fleet-maintenance-software` · `/fleet-cost-tracking` · `/vehicle-inspection-software`

Features: `/features/vehicle-management` · `/features/preventive-maintenance` · `/features/work-orders` (GATED: workOrders) · `/features/inspection-management` · `/features/spare-parts` · `/features/drivers` · `/features/expense-management` · `/features/asset-management` (= depreciation & lifecycle) · `/features/reports-analytics` · `/features/fuel-management` (GATED: fuelModule)

Industries: `/industries/logistics` · `/industries/distribution` · `/industries/construction` · `/industries/oil-and-gas` · `/industries/manufacturing` · `/industries/field-services`

Locations: `/locations/egypt` · `/locations/saudi-arabia` · `/locations/mena`

Tools: `/resources/fleet-cost-calculator` (cost per km + TCO) · `/resources/vehicle-inspection-checklist` · `/resources/preventive-maintenance-checklist`

Other: `/pricing` · `/demo` · `/solutions` · `/features` · `/industries` · `/resources` · `/blog`

Blog slugs (`/blog/<slug>`; ★ = also has an Arabic twin):
- ★ `what-is-fleet-management-software` — what is fleet management software
- ★ `km-based-preventive-maintenance` — preventive maintenance schedule for fleets
- ★ `vehicle-cost-per-km` — how to calculate vehicle cost per km
- ★ `fleet-total-cost-of-ownership` — fleet total cost of ownership
- `daily-vehicle-inspection-checklist` — daily vehicle inspection checklist
- `reduce-vehicle-downtime` — how to reduce vehicle downtime
- `fleet-spare-parts-management` — fleet spare parts management
- `fleet-management-excel-vs-software` — fleet management excel template vs software
- `preventive-vs-reactive-maintenance` — preventive vs reactive maintenance
- `how-to-calculate-fleet-cost` — how to calculate fleet costs / build a fleet budget (monthly running-cost total, not per-km, not TCO)
- `what-is-asset-management` — what is asset management (physical assets, lifecycle, depreciation)

## 4. Keyword ownership (title/H1 keyword → one URL)

| URL | EN primary | AR primary |
|---|---|---|
| `/` | Axpense; fleet and asset management platform | — |
| `/fleet-management-software` | fleet management software | برنامج إدارة الأسطول |
| `/fleet-maintenance-software` | fleet maintenance software | برنامج صيانة الأسطول |
| `/fleet-cost-tracking` | fleet cost tracking software | إدارة تكاليف الأسطول |
| `/vehicle-inspection-software` | vehicle inspection software | برنامج فحص المركبات |
| `/features/vehicle-management` | vehicle management software | برنامج إدارة المركبات |
| `/features/preventive-maintenance` | preventive maintenance software for fleets | برنامج الصيانة الوقائية للسيارات |
| `/features/work-orders` | fleet work order software | أوامر العمل للصيانة |
| `/features/inspection-management` | fleet inspection checklist app | تطبيق قوائم فحص الأسطول |
| `/features/spare-parts` | spare parts management for fleets | إدارة قطع الغيار |
| `/features/drivers` | driver management software | إدارة السائقين |
| `/features/expense-management` | fleet expense management software | إدارة مصروفات الأسطول |
| `/features/asset-management` | vehicle depreciation and lifecycle management | إهلاك المركبات ودورة حياتها |
| `/features/reports-analytics` | fleet reporting software | تقارير الأسطول |
| `/features/fuel-management` | fuel expense tracking | مصروفات الوقود |
| `/industries/logistics` | logistics fleet management software | برنامج إدارة أسطول النقل والشحن |
| `/industries/distribution` | distribution fleet management | إدارة أسطول سيارات التوزيع |
| `/industries/construction` | construction fleet and equipment management | إدارة معدات ومركبات المقاولات |
| `/industries/oil-and-gas` | oil and gas fleet management | إدارة أسطول شركات البترول والغاز |
| `/industries/manufacturing` | manufacturing fleet management | إدارة أسطول المصانع |
| `/industries/field-services` | field service vehicle management | إدارة سيارات فرق الخدمة الميدانية |
| `/locations/egypt` | fleet management software in Egypt | برنامج إدارة الأسطول في مصر |
| `/locations/saudi-arabia` | fleet management software in Saudi Arabia | نظام إدارة الأسطول في السعودية |
| `/locations/mena` | fleet management software for the Middle East | برنامج إدارة الأسطول في الشرق الأوسط |
| `/resources/fleet-cost-calculator` | fleet cost per km calculator | حساب تكلفة الكيلومتر للسيارة |
| `/resources/vehicle-inspection-checklist` | vehicle inspection checklist | قائمة فحص السيارة |
| `/resources/preventive-maintenance-checklist` | fleet preventive maintenance checklist | جدول الصيانة الدورية للسيارات |

Country keywords ("in Egypt", "في السعودية") belong only to location pages.

## 5. Useful facts and formulas

- Cost per km = total operating costs for the period ÷ km driven in the period.
- TCO = purchase price + total operating costs over ownership + financing costs − resale value.
- Straight-line depreciation per year = (purchase price − expected resale value) ÷ years of use.
- Typical light-vehicle oil service interval examples: 5,000–10,000 km depending on oil and conditions (always present as an example and say "follow the manufacturer's schedule").
- Saudi Arabia: periodic vehicle inspection is called الفحص الدوري — you may say Axpense helps teams **record and keep track of** inspection dates and documents as part of the vehicle record only in general terms; don't claim reminders for them (documentExpiryReminders is unconfirmed) and don't claim any government integration.
- Currencies: Egyptian pound (EGP, ج.م / جنيه), Saudi riyal (SAR, ر.س / ريال).
