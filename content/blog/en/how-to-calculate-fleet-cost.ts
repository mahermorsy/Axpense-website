import type { BlogPost } from '@/lib/blog';

export const HOW_TO_CALCULATE_FLEET_COST: BlogPost = {
  slug: 'how-to-calculate-fleet-cost',
  language: 'en',
  title: 'How to Calculate Fleet Costs and Build a Fleet Budget',
  excerpt: 'How to calculate fleet costs for the whole fleet: fixed vs variable costs, cost categories, a 20-vehicle monthly budget in EGP and a variance review routine.',
  category: 'fleet-costs',
  status: 'published',
  publishedAt: '2026-09-01',
  updatedAt: '2026-09-29',
  seoTitle: 'How to Calculate Fleet Costs and Build a Budget',
  seoDescription: 'How to calculate fleet costs: fixed vs variable costs, a 20-vehicle EGP budget and a monthly variance review. Book a demo to record costs per vehicle.',
  primaryKeyword: 'how to calculate fleet costs',
  sections: [
    {
      heading: 'Quick answer',
      body: `To calculate fleet costs, list every cost category, split them into fixed costs (depreciation, insurance, registration, financing) and variable costs (fuel, maintenance, repairs, tyres, tolls), then total them per vehicle and across the fleet for a month and a year. That total becomes your fleet budget, which you compare against actual spending every month.`,
    },
    {
      heading: 'Why a fleet-wide cost total matters',
      body: `Most companies know roughly what individual vehicles cost. Far fewer can answer a simple question from finance: **how much will the fleet cost us next year, and are we on track this month?**

A fleet cost total and budget answers that. It turns scattered invoices, insurance renewals and fuel receipts into one plan you can defend, and it gives you a baseline for spotting problems early: a repair bill that keeps growing, a category that is always over plan, or a vehicle group that costs more than expected.

This article focuses on the **whole-fleet running cost** over a month or a year. Two related calculations answer different questions:

- **Cost per km** divides operating costs by distance driven to compare vehicles and price work. See our guide on [how to calculate vehicle cost per km](/blog/vehicle-cost-per-km).
- **Total cost of ownership (TCO)** covers one vehicle from purchase to resale to support buy, lease or replace decisions. See our guide to [fleet total cost of ownership](/blog/fleet-total-cost-of-ownership).

A fleet budget uses the same raw cost data as both, so getting the categories right here makes the other two calculations easier.`,
    },
    {
      heading: 'Fixed vs variable fleet costs',
      body: `Every fleet cost falls into one of two groups. Separating them is the most useful step in building a budget, because they behave differently and you control them differently.

### Fixed costs

Fixed costs stay roughly the same each month whether a vehicle drives 500 km or 5,000 km:

- **Depreciation**: the loss in the vehicle's value over time, spread across its years of use
- **Insurance** premiums
- **Registration and licensing** fees
- **Financing or lease payments**
- **Parking, garaging or depot costs**

Fixed costs are mostly decided when you buy or lease a vehicle. You reduce them by right-sizing the fleet, not by driving less.

### Variable costs

Variable costs rise and fall with how much the vehicles are used:

- **Fuel**
- **Preventive maintenance** (services at km intervals)
- **Repairs** (unplanned work)
- **Tyres**
- **Tolls, parking fees and road charges**

Variable costs are where monthly surprises come from, and where good maintenance and driving habits make the biggest difference.

> Driver wages are a real cost of operating vehicles. Some companies include them in the fleet budget, others keep them in the payroll budget. Either is fine, as long as you are consistent every month.`,
    },
    {
      heading: 'Step by step: how to calculate fleet costs',
      body: `1. **List every vehicle** with its plate, model, age, typical monthly km and how it is financed.
2. **Collect twelve months of invoices** by category: fuel, services, repairs, parts, tyres, insurance, registration, tolls. If you do not have twelve months, use what you have and annualise carefully.
3. **Calculate depreciation** for each vehicle: (purchase price − expected resale value) ÷ years of use, then divide by 12 for a monthly figure.
4. **Convert annual fixed costs to monthly**: an insurance premium or registration fee paid once a year is divided by 12.
5. **Estimate variable costs from usage**: for fuel, monthly km × consumption per km × fuel price. For maintenance, use your service intervals and last year's repair history.
6. **Add a repair reserve**: unplanned repairs will happen. Base the reserve on past repair spend, not on hope.
7. **Total by category, then by fleet**: this gives a monthly and annual figure, plus a per-vehicle average.

Where a single vehicle's figures look very different from the others, check its history before averaging it in. One old vehicle with frequent breakdowns can distort the whole budget.`,
    },
    {
      heading: 'Worked example: a monthly budget for a 20-vehicle fleet',
      body: `The figures below are **hypothetical**, for illustration only. Assume 20 light commercial vans, each driving about 4,000 km a month, with an assumed fuel consumption of 12 litres per 100 km and an assumed fuel price of 18 EGP per litre.

| Category | Type | Basis | Monthly (EGP) |
|---|---|---|---|
| Depreciation | Fixed | 9,000 per van | 180,000 |
| Insurance | Fixed | 2,500 per van | 50,000 |
| Registration and licensing | Fixed | 6,000 per van per year ÷ 12 | 10,000 |
| Financing payments | Fixed | Interest on financed vans | 40,000 |
| Parking and depot | Fixed | Shared depot rent | 15,000 |
| Fuel | Variable | 480 litres × 18 EGP × 20 vans | 172,800 |
| Preventive maintenance | Variable | 1,500 per van | 30,000 |
| Repair reserve | Variable | Based on last year's repairs | 25,000 |
| Tyres | Variable | 800 per van (monthly accrual) | 16,000 |
| Tolls and parking fees | Variable | Route based | 8,000 |
| **Total** | | | **546,800** |

From this table:

- **Fixed costs**: 295,000 EGP a month (about 54 % of the total)
- **Variable costs**: 251,800 EGP a month (about 46 %)
- **Annual fleet budget**: 546,800 × 12 = **6,561,600 EGP**
- **Average per vehicle**: 546,800 ÷ 20 = **27,340 EGP a month**

If you want to break this down further into a cost per km figure for each van, the [fleet cost per km calculator](/resources/fleet-cost-calculator) does that from the same inputs.`,
    },
    {
      heading: 'Tracking actual costs against the budget',
      body: `A budget is only useful if you compare it with what actually happened. Budget vs actual is a practice, not a single report, and a spreadsheet is enough to start.

### Set up the comparison

Create one sheet with the budget categories as rows and months as columns. Next to each budget figure, record the actual spend for that month, and add two columns: the difference in EGP and the difference as a percentage.

### Record actuals per vehicle, not just per category

Totals by category tell you **that** repairs went over plan. Costs recorded per vehicle tell you **which** vehicle caused it. Record every invoice against a specific plate and a specific category when it happens, not at month end from memory.

### Example variance review

Continuing the hypothetical fleet, here is one month's comparison for four categories:

| Category | Budget (EGP) | Actual (EGP) | Variance | % |
|---|---|---|---|---|
| Fuel | 172,800 | 189,500 | +16,700 | +9.7 % |
| Preventive maintenance | 30,000 | 27,400 | −2,600 | −8.7 % |
| Repair reserve | 25,000 | 41,000 | +16,000 | +64 % |
| Tyres | 16,000 | 15,200 | −800 | −5 % |

The fuel overrun might come from longer routes or a price change. The repair overrun is bigger in percentage terms and deserves a closer look: in this example, suppose two vans accounted for most of it, both several thousand km past their oil service. That points to a maintenance scheduling problem, not a budgeting one.`,
    },
    {
      heading: 'How to review variances and adjust the plan',
      body: `Not every variance needs action. A simple routine keeps the review focused:

- **Set a threshold.** For example, investigate any category more than 10 % over plan, or any single vehicle whose monthly cost is well above the fleet average.
- **Separate price from usage.** A fuel overrun could be more km, worse consumption or a higher price. Each has a different fix.
- **Look for repeat offenders.** A vehicle that is over plan three months in a row may be approaching the point where replacement is cheaper than repair.
- **Check maintenance status.** Overdue services often show up later as repair overruns.
- **Re-forecast quarterly.** If fuel prices or fleet size change, update the remaining months rather than letting the whole year look wrong.

Keep a short note for each significant variance explaining the cause. Over a year, those notes become the best input for next year's budget.`,
    },
    {
      heading: 'Common mistakes when budgeting fleet costs',
      body: `- **Leaving out depreciation.** It does not appear as a monthly invoice, but it is often one of the largest costs in the fleet.
- **Budgeting repairs at zero.** Every fleet has unplanned repairs. Use last year's history as the starting point.
- **Mixing vehicles with very different usage.** A heavy truck and a pool car should not share one average. Group similar vehicles.
- **Recording costs weeks later.** Late entries lose details such as which vehicle, what km and what the work was.
- **Ignoring annual payments.** Insurance and registration paid once a year make individual months look distorted unless you spread them over twelve months.`,
    },
    {
      heading: 'How Axpense helps you calculate fleet costs',
      body: `Axpense gives you the per-vehicle cost data a fleet budget depends on. You record repairs, parts, insurance, registration and other costs as expenses against each vehicle, by category. Depreciation is tracked per vehicle so book value over time is part of the picture, and reports show costs by vehicle and by category across the fleet.

Km-based preventive maintenance with reminders and overdue alerts helps keep services on time, which is one of the most practical ways to keep the repair line close to plan. You can then use these recorded totals as the actuals in your budget spreadsheet each month.

See how it works on our [fleet cost tracking software](/fleet-cost-tracking) page and in [fleet expense management](/features/expense-management), or book a demo to walk through your own fleet's costs.`,
    },
  ],
  faqs: [
    {
      q: 'What costs should be included when calculating fleet costs?',
      a: 'Include fixed costs such as depreciation, insurance, registration and licensing, financing payments and parking or depot costs, plus variable costs such as fuel, preventive maintenance, repairs, tyres and tolls. Decide whether driver wages belong in the fleet budget or payroll, and apply that choice consistently.',
    },
    {
      q: 'How is a fleet budget different from cost per km?',
      a: 'A fleet budget totals what the whole fleet costs over a month or a year and compares it with actual spending. Cost per km divides operating costs by distance driven, which is useful for comparing vehicles and pricing work. Both use the same underlying cost records.',
    },
    {
      q: 'How often should we compare actual fleet costs with the budget?',
      a: 'Monthly is a practical rhythm for most fleets, with a deeper re-forecast every quarter. Monthly reviews catch problems such as overdue services or rising repair bills while there is still time to act, and quarterly updates keep the annual plan realistic when prices or fleet size change.',
    },
    {
      q: 'How do I budget for unplanned repairs?',
      a: 'Use your repair spending from the last twelve months as the starting point, adjusted for fleet size and vehicle age. Older vehicles usually need a larger reserve. Recording repairs per vehicle helps you see whether the reserve is being used evenly or by a few problem vehicles.',
    },
  ],
  relatedPages: ['/fleet-cost-tracking', '/resources/fleet-cost-calculator', '/blog/vehicle-cost-per-km', '/features/expense-management'],
};
