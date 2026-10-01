import type { BlogPost } from '@/lib/blog';

export const FLEET_TOTAL_COST_OF_OWNERSHIP: BlogPost = {
  slug: 'fleet-total-cost-of-ownership',
  language: 'en',
  title: 'Fleet Total Cost of Ownership: How to Calculate TCO and Compare Vehicles',
  excerpt: 'How to calculate fleet total cost of ownership, compare two vehicles on TCO, and use the numbers to decide when a vehicle should be replaced.',
  category: 'fleet-costs',
  status: 'published',
  publishedAt: '2026-09-29',
  updatedAt: '2026-09-29',
  seoTitle: 'Fleet Total Cost of Ownership (TCO) Explained',
  seoDescription: 'Fleet total cost of ownership explained: the TCO formula, a worked EGP example comparing two vans, and when to replace a vehicle. Book a demo.',
  primaryKeyword: 'fleet total cost of ownership',
  sections: [
    {
      heading: 'Quick answer',
      body: `Fleet total cost of ownership (TCO) is everything a vehicle costs your business from purchase to sale. TCO = purchase price + total operating costs over the ownership period + financing costs − resale value. Dividing TCO by the kilometres driven gives a cost per km you can use to compare models, plan budgets and decide when to replace a vehicle.`,
    },
    {
      heading: 'Why the purchase price is the wrong place to stop',
      body: `When a company buys vehicles, the quotation on the table is the purchase price. It is the easiest number to compare and the one most often used to decide. But over five years of daily work, a van's fuel, maintenance, parts, insurance and registration can cost as much as the van itself, sometimes more. The resale value at the end can also differ by hundreds of thousands of pounds between two models.

TCO puts all of that in one number. It answers the question the purchase price cannot: **which vehicle will cost us less over the time we own it?** A cheaper vehicle with higher running costs and weak resale value often loses to a more expensive one that is efficient, reliable and holds its value.`,
    },
    {
      heading: 'The TCO formula and its parts',
      body: `**TCO = purchase price + total operating costs over ownership + financing costs − resale value**

### Purchase price

The price paid for the vehicle, including any registration on delivery, body work, shelving or fit-out needed before it can work. If you buy a van and spend 60,000 EGP on shelving, the real purchase cost includes the shelving.

### Total operating costs over ownership

Everything spent to keep the vehicle working for the whole period: fuel, periodic maintenance, repairs, parts, tyres, insurance, registration and licensing, and periodic inspections. This is the same set of costs you use for [vehicle cost per km](/blog/vehicle-cost-per-km), added up over the years you keep the vehicle.

### Financing costs

If the vehicle is bought with a loan or instalments, the interest and fees are part of its cost. A cash purchase has no financing cost in this formula, although some finance teams add the opportunity cost of the cash.

### Resale value

What you expect to receive when you sell or trade in the vehicle. It is subtracted because it returns money to the business. Resale value depends on model, age, kilometres and how well the vehicle was maintained, which is one reason a complete service history matters.`,
    },
    {
      heading: 'Worked example: two vans over five years (EGP)',
      body: `For example, a distribution company is choosing between two vans for the same routes. Each will drive about 60,000 km a year and be kept for five years, so each will cover 300,000 km. All figures are illustrative.

| Item | Van A | Van B |
|---|---|---|
| Purchase price | 1,200,000 | 950,000 |
| Fuel per year | 150,000 | 165,000 |
| Maintenance, repairs and parts per year | 35,000 | 55,000 |
| Insurance per year | 30,000 | 24,000 |
| Registration and licence per year | 6,000 | 6,000 |
| **Operating costs per year** | **221,000** | **250,000** |
| Operating costs over 5 years | 1,105,000 | 1,250,000 |
| Financing costs (interest and fees) | 180,000 | 140,000 |
| Expected resale value after 5 years | 600,000 | 380,000 |

### Calculating TCO

**Van A: 1,200,000 + 1,105,000 + 180,000 − 600,000 = 1,885,000 EGP**

**Van B: 950,000 + 1,250,000 + 140,000 − 380,000 = 1,960,000 EGP**

### TCO per km

- Van A: 1,885,000 ÷ 300,000 = **6.28 EGP per km**
- Van B: 1,960,000 ÷ 300,000 = **6.53 EGP per km**

Van B is 250,000 EGP cheaper to buy, but it costs 75,000 EGP more over five years because it uses more fuel, needs more repairs and sells for less. Across a fleet of 20 vans, that difference is 1.5 million EGP. You can test your own assumptions with the [fleet cost calculator for cost per km and TCO](/resources/fleet-cost-calculator).`,
    },
    {
      heading: 'Depreciation: the largest cost you never pay in cash',
      body: `Depreciation is the loss in a vehicle's value over time. You do not write a cheque for it, but it is real: it is the difference between what you paid and what you get back. In the TCO formula it appears as purchase price minus resale value.

### Straight-line depreciation

The simplest method spreads the loss evenly:

**Depreciation per year = (purchase price − expected resale value) ÷ years of use**

For Van A: (1,200,000 − 600,000) ÷ 5 = 120,000 EGP per year. The book value falls from 1,200,000 to 1,080,000 after year one, 960,000 after year two, and so on down to 600,000.

### Why real depreciation is uneven

In practice, vehicles lose more value in their first years and less later. That matters for replacement timing: keeping a vehicle an extra year costs little in depreciation, but may cost a lot in repairs. Tracking book value over time lets you see both sides. Our page on [vehicle depreciation and lifecycle management](/features/asset-management) explains how book value is kept for each vehicle.`,
    },
    {
      heading: 'Using TCO to decide when to replace a vehicle',
      body: `As a vehicle ages, its yearly depreciation falls but its maintenance and repair costs rise. The best time to replace it is usually around the point where those two curves together are cheapest per year on average.

For example, here is a van's yearly ownership cost, combining depreciation and maintenance and repairs (EGP, illustrative):

| Year | Depreciation | Maintenance and repairs | Yearly total | Average per year so far |
|---|---|---|---|---|
| 1 | 200,000 | 20,000 | 220,000 | 220,000 |
| 2 | 160,000 | 28,000 | 188,000 | 204,000 |
| 3 | 130,000 | 40,000 | 170,000 | 192,667 |
| 4 | 100,000 | 60,000 | 160,000 | 184,500 |
| 5 | 80,000 | 90,000 | 170,000 | 181,600 |
| 6 | 60,000 | 125,000 | 185,000 | 182,167 |

The average cost per year is lowest after year 5. In year 6 the yearly total (185,000) is higher than the running average (181,600), so keeping the van longer starts to raise its average cost. A simple rule follows: **when a vehicle's yearly cost rises above its average so far, start planning its replacement.**

Other signals point the same way: repeated breakdowns, growing time in the workshop, and a cost per km that keeps climbing compared with similar vehicles.`,
    },
    {
      heading: 'Where TCO calculations go wrong',
      body: `- **Using estimates for operating costs.** Brochure fuel figures and dealer service quotes are rarely what you spend. Use your own history for similar vehicles where you have it.
- **Ignoring fit-out costs.** Shelving, refrigeration units or signage are part of the purchase.
- **Forgetting financing.** Interest over five years can be a meaningful share of the total.
- **Optimistic resale values.** A vehicle with high kilometres and gaps in its service history sells for less. Be conservative.
- **Comparing different periods or distances.** Compare vehicles over the same years and similar kilometres, or use TCO per km.
- **Never checking the forecast.** Compare actual costs with your TCO estimate each year. The gap is useful for your next purchase decision.`,
    },
    {
      heading: 'The data you need to keep',
      body: `A TCO calculation is only as good as the records behind it. For each vehicle, you need:

1. Purchase price and date, plus any fit-out cost.
2. Every operating cost, tied to the vehicle and grouped by category.
3. Regular odometer readings, so costs can be expressed per km.
4. Service history, which supports both reliability decisions and resale value.
5. Depreciation method, expected resale value and current book value.

Most companies have some of this in invoices and spreadsheets. The difficulty is having all of it per vehicle, over several years, without gaps.`,
    },
    {
      heading: 'How Axpense helps',
      body: `Axpense keeps the records a TCO calculation depends on in one place for each vehicle. The vehicle register holds odometer readings and history; expenses such as repairs, parts, insurance, registration and other costs are recorded per vehicle by category; service history is kept for every vehicle; and depreciation tracks book value over the vehicle's lifecycle. Reports show costs by vehicle and category, so you can see which vehicles are becoming expensive to keep.

Learn more about [fleet cost tracking](/fleet-cost-tracking) with Axpense, or book a demo to walk through it with your own fleet.`,
    },
  ],
  faqs: [
    {
      q: 'What is the difference between TCO and cost per km?',
      a: 'Cost per km usually measures operating costs over a short period, such as a month or quarter. TCO covers the whole ownership period and includes purchase price, financing and resale value. Dividing TCO by total kilometres gives a lifetime cost per km.',
    },
    {
      q: 'How do I estimate resale value before buying?',
      a: 'Look at current prices for the same model at the age and kilometres you plan to sell at, and ask dealers for trade-in estimates. Be conservative, and remember that a complete service history usually supports a better price.',
    },
    {
      q: 'Is leasing cheaper than buying on a TCO basis?',
      a: 'It depends on the lease terms and how long you would keep a bought vehicle. For a fair comparison, add up lease payments plus the running costs you still pay, and compare that with the TCO of buying over the same period and kilometres.',
    },
    {
      q: 'How often should I recalculate TCO for my fleet?',
      a: 'Once a year is a practical rhythm, and before any major repair or purchase decision. Updating it with actual costs shows whether vehicles are ageing as expected and improves your assumptions for the next purchase.',
    },
  ],
  relatedPages: ['/fleet-cost-tracking', '/features/asset-management', '/resources/fleet-cost-calculator', '/blog/vehicle-cost-per-km'],
};
