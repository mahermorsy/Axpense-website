# Pricing system (30 Sep 2026)

Per-vehicle pricing. Every feature is included. Minimum 5 vehicles. Annual billing saves 20%. Fleets above 500 vehicles get custom pricing.

## Monthly price per vehicle

| Vehicles | EGP | USD (base) | SAR | AED | QAR | KWD | BHD | OMR | EUR |
|---|---|---|---|---|---|---|---|---|---|
| 5–10 | 350 | 10 | 38 | 37 | 36 | 3.1 | 3.75 | 3.85 | 8.75 |
| 11–25 | 320 | 9 | 34 | 33 | 33 | 2.75 | 3.4 | 3.45 | 8 |
| 26–50 | 290 | 8.25 | 31 | 30 | 30 | 2.55 | 3.1 | 3.15 | 7.25 |
| 51–100 | 260 | 7.5 | 28 | 28 | 27 | 2.3 | 2.8 | 2.9 | 6.5 |
| 101–250 | 230 | 6.5 | 24 | 24 | 24 | 2 | 2.45 | 2.5 | 5.75 |
| 251–500 | 200 | 5.75 | 22 | 21 | 21 | 1.75 | 2.15 | 2.2 | 5 |
| 500+ | Custom | | | | | | | | |

Non-EGP prices are rounded from USD using the 29 Sep 2026 rates: SAR 3.75, AED 3.6725, QAR 3.64, KWD 0.3077, BHD 0.376, OMR 0.3845, EUR 0.8801. The EGP prices are separate market prices; 350 EGP is about $6.80 at 51.50.

- **Annual price per vehicle:** monthly × 12 × (1 − discount).

## How it works

- **Frontend**
  - `lib/pricing.ts`: pure pricing maths.
  - `content/pricing.ts`: default config, also used as the fallback.
  - `lib/pricing-server.ts`: loads `/api/public/pricing` and revalidates every 5 minutes.
  - `components/pricing/*`: the calculator, the table and the page.
- **Start Free:** opens `/demo?vehicles&currency&billing`, where the form is pre-filled and the plan is sent with the lead.
- **Backend**
  - Tables: `PricingCurrencies` and `PricingTiers`.
  - Admin endpoints: `api/pricing` (Admin only).
  - Public endpoints: `api/public/pricing` and `api/public/pricing/quote`.
  - Seeded from `Seed/pricing.json`, which `scripts/export-seeds.ts` generates.
- **Admin:** `/admin/pricing` lets you edit tiers, discount and default currency, and shows a live preview.
- **Features:** Mobile Access is shown as "coming soon". Fuel, work orders and alerts are shown as confirmed.
