import type { BlogPost } from '@/lib/blog';

export const VEHICLE_COST_PER_KM: BlogPost = {
  slug: 'vehicle-cost-per-km',
  language: 'en',
  title: 'How to Calculate Vehicle Cost per km: Formula and Worked Examples',
  excerpt: 'The formula for vehicle cost per km, which costs to include, worked examples in EGP and SAR, and the mistakes that make the number misleading.',
  category: 'fleet-costs',
  status: 'published',
  publishedAt: '2026-09-29',
  updatedAt: '2026-09-29',
  seoTitle: 'How to Calculate Vehicle Cost per km',
  seoDescription: 'How to calculate vehicle cost per km step by step, with worked EGP and SAR examples and the costs most teams forget. Book a demo to see costs per vehicle.',
  primaryKeyword: 'how to calculate vehicle cost per km',
  sections: [
    {
      heading: 'Quick answer',
      body: `To calculate vehicle cost per km, add up all operating costs for a period, such as maintenance, parts, fuel, insurance and registration, then divide by the kilometres the vehicle drove in the same period. For example, 69,500 EGP of costs over 18,000 km gives about 3.86 EGP per km. Add depreciation if you want the full cost of owning the vehicle.`,
    },
    {
      heading: 'Why cost per km is the number to watch',
      body: `A monthly cost total tells you how much a vehicle consumed. It does not tell you whether that was good value. A van that cost 20,000 EGP last month might be your cheapest vehicle if it drove 6,000 km, or your most expensive if it drove 1,500 km.

Cost per km puts every vehicle on the same scale. It lets you:

- **Compare vehicles fairly**, even when they drive very different distances.
- **Spot a problem vehicle early**, because its cost per km rises before it breaks down completely.
- **Price your services**, if you charge customers for deliveries, transport or site visits.
- **Decide when to replace**, by watching the trend over months rather than reacting to one large repair bill.

If you need a monthly running-cost total for budgeting rather than a per-km figure, our guide on [how to calculate fleet costs](/blog/how-to-calculate-fleet-cost) covers that angle.`,
    },
    {
      heading: 'The formula',
      body: `**Cost per km = total operating costs for the period ÷ km driven in the period**

Two rules make the result reliable:

1. **Use the same period for both numbers.** If costs are for the quarter, kilometres must be for the quarter too.
2. **Take kilometres from odometer readings**, not estimates. Km driven = odometer reading at the end of the period − odometer reading at the start.

Choose a period long enough to smooth out lumpy costs. A single month can look expensive because the vehicle happened to get new tyres. A quarter or a year gives a more honest picture, and you can still track the monthly figure as a trend.`,
    },
    {
      heading: 'Which costs to include',
      body: `The most common reason two people get different cost-per-km figures for the same vehicle is that they included different costs. Agree on a list and use it for every vehicle.

### Variable costs (rise with distance)

- **Fuel.** Usually the largest single item for vehicles in daily use.
- **Maintenance and servicing.** Oil changes, filters, periodic services and labour.
- **Parts and repairs.** Brake pads, batteries, belts, suspension parts and unplanned repairs.
- **Tyres.** Either as a parts cost or as their own category.

### Fixed costs (paid regardless of distance)

- **Insurance.** Spread the annual premium across the months it covers.
- **Registration and licensing.** Spread annual fees the same way.
- **Periodic inspection fees**, where they apply.
- **Parking, permits and tolls**, if they are significant for your operation.

### Ownership cost (optional)

- **Depreciation.** The loss of value over time. Including it turns an operating figure into a fuller cost of owning and running the vehicle. Straight-line depreciation per year = (purchase price − expected resale value) ÷ years of use.

Driver salaries are usually kept out of vehicle cost per km and tracked separately, because they depend on staffing decisions rather than on the vehicle. If you include them, do it for every vehicle and label the figure clearly.`,
    },
    {
      heading: 'Worked example in Egyptian pounds',
      body: `For example, a delivery van in Cairo drove from 142,000 km to 160,000 km over one quarter, so it covered 18,000 km. Its costs for the quarter were:

| Cost item | Amount (EGP) |
|---|---|
| Fuel | 45,000 |
| Maintenance and servicing | 9,000 |
| Parts and repairs | 6,500 |
| Insurance (quarter share) | 7,500 |
| Registration and licence (quarter share) | 1,500 |
| **Total operating costs** | **69,500** |

**Operating cost per km = 69,500 ÷ 18,000 = 3.86 EGP per km**

Now add depreciation. The van cost 1,200,000 EGP and is expected to sell for 600,000 EGP after five years. Straight-line depreciation is (1,200,000 − 600,000) ÷ 5 = 120,000 EGP a year, or 30,000 EGP a quarter.

| | Amount (EGP) |
|---|---|
| Operating costs | 69,500 |
| Depreciation (quarter) | 30,000 |
| **Total including depreciation** | **99,500** |

**Full cost per km = 99,500 ÷ 18,000 = 5.53 EGP per km**

Both numbers are useful. The first tells operations what it costs to keep the van running. The second tells finance what the van really costs the business per kilometre.`,
    },
    {
      heading: 'Worked example in Saudi riyals',
      body: `For example, a technician's pickup in Riyadh drove 4,500 km in one month.

| Cost item | Amount (SAR) |
|---|---|
| Fuel | 1,350 |
| Maintenance and servicing | 400 |
| Parts and repairs | 250 |
| Insurance (monthly share) | 300 |
| Registration and periodic inspection (monthly share) | 50 |
| **Total operating costs** | **2,350** |

**Operating cost per km = 2,350 ÷ 4,500 = 0.52 SAR per km**

The pickup cost 110,000 SAR and is expected to sell for 50,000 SAR after five years. Depreciation is (110,000 − 50,000) ÷ 5 = 12,000 SAR a year, or 1,000 SAR a month.

**Full cost per km = (2,350 + 1,000) ÷ 4,500 = 0.74 SAR per km**

You can run your own numbers through the [fleet cost per km calculator](/resources/fleet-cost-calculator) to check the arithmetic.`,
    },
    {
      heading: 'Comparing vehicles with cost per km',
      body: `The real value appears when you line up several vehicles. For example, three identical vans on the same routes over the same quarter:

| Van | Km driven | Operating costs (EGP) | Cost per km (EGP) |
|---|---|---|---|
| Van A | 18,000 | 69,500 | 3.86 |
| Van B | 17,200 | 66,800 | 3.88 |
| Van C | 12,500 | 71,300 | 5.70 |

Van C drove less but cost more. That is a signal to look at its expense history: repeated repairs, a part replaced twice, or a vehicle that spends days in the workshop and so drives fewer kilometres. One quarter is not proof, but if the gap stays for two or three quarters, Van C is a candidate for a major repair decision or replacement. For the replacement side of that question, see our guide to [fleet total cost of ownership](/blog/fleet-total-cost-of-ownership).`,
    },
    {
      heading: 'Common mistakes',
      body: `- **Mixing periods.** Annual insurance against one month of kilometres makes the month look terrible and the rest of the year look cheap.
- **Estimating kilometres.** A guess of "about 5,000 km a month" can be off by 20 % or more. Use real odometer readings.
- **Leaving out small costs.** Individually small items such as wipers, bulbs and batteries add up over a year.
- **Counting a cost twice.** A service invoice that includes parts should not also appear as a separate parts cost.
- **Recording costs without the vehicle.** An expense filed only as "fleet maintenance" cannot be used for cost per km. Every cost needs to be tied to a vehicle.
- **Judging on one month.** A single large repair can distort a month. Watch the trend over several periods.`,
    },
    {
      heading: 'How Axpense helps',
      body: `The hardest part of cost per km is not the division. It is having complete costs and reliable kilometres for each vehicle. Axpense keeps both in the vehicle record: odometer readings in the vehicle register, and expenses such as repairs, parts, insurance, registration and other costs recorded per vehicle by category. Depreciation and book value are tracked over the vehicle's life, and reports show costs by vehicle and by category, so you can see which vehicles are costing more than the rest.

Read how it works on our [fleet cost tracking](/fleet-cost-tracking) page, or book a demo to see it with your own vehicles.`,
    },
  ],
  faqs: [
    {
      q: 'Should depreciation be included in cost per km?',
      a: 'It depends on the question you are answering. Leave it out when you want the cost of keeping a vehicle running; include it when you want the full cost of owning and running it, for example when pricing services or comparing buying with leasing. Label which version you report.',
    },
    {
      q: 'What period should I use to calculate cost per km?',
      a: 'A quarter or a year gives the most stable result, because it smooths out lumpy costs such as tyres or a large repair. Monthly figures are still useful for spotting trends, as long as fixed costs are spread evenly across the months they cover.',
    },
    {
      q: 'Why is one vehicle much more expensive per km than identical vehicles?',
      a: 'Common reasons are repeated repairs, low kilometres because the vehicle spends time in the workshop, a harder route, or a driver with a heavier driving style. Check the vehicle\'s expense and service history before deciding whether to repair or replace it.',
    },
    {
      q: 'Should driver salaries be part of vehicle cost per km?',
      a: 'Most fleets keep driver costs separate, because they depend on staffing rather than the vehicle. If you do include them, include them for every vehicle and report the result as a cost per km including driver, so it is not compared with figures that exclude it.',
    },
  ],
  relatedPages: ['/fleet-cost-tracking', '/resources/fleet-cost-calculator', '/blog/fleet-total-cost-of-ownership', '/features/expense-management'],
};
