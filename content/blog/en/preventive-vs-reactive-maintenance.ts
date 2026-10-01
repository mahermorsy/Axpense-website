import type { BlogPost } from '@/lib/blog';

export const PREVENTIVE_VS_REACTIVE_MAINTENANCE: BlogPost = {
  slug: 'preventive-vs-reactive-maintenance',
  language: 'en',
  title: 'Preventive vs Reactive Maintenance: Costs, Trade-offs and How to Switch',
  excerpt: 'Preventive vs reactive maintenance for vehicle fleets: what each costs, when fixing on failure is acceptable, and how to move to planned servicing in stages.',
  category: 'fleet-maintenance',
  status: 'published',
  publishedAt: '2026-09-01',
  updatedAt: '2026-09-29',
  seoTitle: 'Preventive vs Reactive Maintenance for Fleets',
  seoDescription: 'Preventive vs reactive maintenance compared: costs, a worked EGP example, when reactive is fine and how to switch in stages. Book a demo to plan services.',
  primaryKeyword: 'preventive vs reactive maintenance',
  sections: [
    {
      heading: 'Quick answer',
      body: `Reactive maintenance means repairing a vehicle only after something fails. Preventive maintenance means servicing it at planned intervals, usually by kilometres driven, before parts wear out. Reactive looks cheaper month to month, but breakdowns bring towing, rush parts, lost trips and secondary damage. For most working fleets, preventive maintenance costs less overall and makes downtime predictable.`,
    },
    {
      heading: 'What reactive and preventive maintenance actually mean',
      body: `The difference between the two is not whether you spend money on maintenance. Every fleet does. The difference is **when** you decide to spend it, and who decides: you, or the vehicle.

### Reactive maintenance (run to failure)

Under a reactive approach, a vehicle keeps working until a driver reports a problem or it stops on the road. Then it goes to the workshop, gets diagnosed and gets repaired. There is no schedule, no service calendar and very little record-keeping beyond the invoice.

Reactive maintenance is common in growing companies because it needs no planning. A manager with ten vehicles and a trusted mechanic can run this way for years without noticing the cost, because the cost is spread across random breakdowns rather than sitting in one line.

### Preventive maintenance (planned servicing)

Under a preventive approach, each vehicle has service intervals: change the engine oil every set number of kilometres, inspect brakes at another interval, replace filters, belts and tyres before they reach the end of their useful life. The work happens at a time you choose, usually when the vehicle is least needed.

For vehicles, the most practical trigger is **distance**. Wear on oil, brakes, tyres and suspension tracks kilometres driven far more closely than calendar time. A van doing 6,000 km a month and a pool car doing 800 km a month should not share one calendar schedule. We explain how to set these intervals in our guide to a [preventive maintenance schedule for fleets](/blog/km-based-preventive-maintenance).`,
    },
    {
      heading: 'Side-by-side comparison',
      body: `The table below summarises how the two approaches behave in a typical commercial fleet.

| Factor | Reactive maintenance | Preventive maintenance |
|---|---|---|
| When work happens | After a failure | At planned km intervals |
| Downtime | Unplanned, often mid-route | Planned, usually off-peak |
| Cost per job | Higher (towing, urgent parts, overtime) | Lower (routine parts, scheduled labour) |
| Spending pattern | Unpredictable spikes | Steady and easy to forecast |
| Secondary damage | Common (one failure damages other parts) | Rare |
| Admin effort | Low up front | Needs intervals, odometer readings and records |
| Vehicle lifespan | Usually shorter | Usually longer |
| Safety risk | Higher (brakes, tyres fail in use) | Lower |

The one column where reactive wins is **admin effort**. That is the real reason many fleets stay reactive: not because it is cheaper, but because preventive maintenance requires someone to know each vehicle's odometer reading and what is due next.`,
    },
    {
      heading: 'The real cost of a breakdown: a worked example in EGP',
      body: `The numbers below are **hypothetical** and meant only to show the structure of the comparison. Use your own workshop invoices and trip values when you run it.

Imagine a delivery van whose oil and filter change is skipped. Weeks later, the engine overheats on a delivery route and needs a repair.

### Scenario A: planned service

| Item | Cost (EGP) |
|---|---|
| Oil, oil filter and air filter | 2,200 |
| Labour at the regular workshop | 500 |
| Half a day off the road, scheduled on a quiet afternoon | 0 lost revenue |
| **Total** | **2,700** |

### Scenario B: breakdown on the route

| Item | Cost (EGP) |
|---|---|
| Towing to the workshop | 1,500 |
| Engine repair (parts and labour) | 18,000 |
| Three days off the road: lost or subcontracted deliveries at 2,500 per day | 7,500 |
| Overtime for another driver to cover urgent orders | 1,200 |
| **Total** | **28,200** |

In this example, one avoided breakdown pays for roughly ten planned services. The exact ratio will differ in your fleet, but the pattern holds: the invoice for the repair is usually only part of the cost. Lost trips, customer penalties and the knock-on effect on other vehicles are what make reactive maintenance expensive.

> Tip: when you compare the two approaches, count days off the road, not just workshop invoices. Our guide on [how to reduce vehicle downtime](/blog/reduce-vehicle-downtime) covers how to measure that.`,
    },
    {
      heading: 'When reactive maintenance is acceptable',
      body: `Preventive maintenance is not the right answer for every item on every vehicle. A deliberate "run to failure" policy is reasonable when:

- **The asset is low value.** An old pool car worth less than a major repair may not justify a full service programme. Keep it safe and roadworthy, then replace it when it fails.
- **You have redundancy.** If you have spare vehicles that can cover a breakdown immediately, the cost of downtime drops sharply.
- **The component fails without warning or damage.** Bulbs, wiper blades and some electrical parts can simply be replaced when they fail, as long as a failure is not a safety risk.
- **The vehicle is close to disposal.** Spending heavily on preventive work in the last few months before sale can be wasteful.

Reactive should never apply to safety-critical items. Brakes, tyres, steering and lights need regular checks regardless of vehicle value. A short pre-trip inspection routine, like our [daily vehicle inspection checklist](/blog/daily-vehicle-inspection-checklist), catches many of these issues before they become failures.

The practical goal is not zero reactive repairs. It is to make reactive work a conscious choice for specific vehicles and parts, rather than the default for the whole fleet.`,
    },
    {
      heading: 'Predictive maintenance: the third option',
      body: `You will also see **predictive maintenance** discussed alongside the other two. The idea is to service a part based on its measured condition rather than a fixed interval: for example, analysing engine data, oil samples or vibration readings to estimate when a component is likely to fail.

In principle, predictive maintenance avoids both extremes: you do not replace parts too early, and you do not wait for them to fail. In practice, it needs reliable sensor or diagnostic data, enough history to spot patterns, and people who can interpret the results. That makes it more common in large fleets and heavy industry than in typical commercial vehicle fleets.

For most companies in the region, the sensible order is: first get clean records and a working km-based preventive programme, then consider condition-based methods for your most expensive vehicles. Predictive methods built on messy or missing service history will not be reliable.`,
    },
    {
      heading: 'How to move from reactive to preventive in stages',
      body: `You do not need to change the whole fleet overnight. A staged approach keeps the workload manageable.

### Stage 1: build the vehicle list and current odometer readings

List every vehicle with plate, make, model, current odometer reading and status. Record when and at what km each vehicle was last serviced, even if you have to estimate from old invoices.

### Stage 2: start with the most critical vehicles

Pick the vehicles whose breakdowns hurt most: those on customer routes, those with no backup, or the heaviest units. Set km-based intervals for engine oil, filters, brakes and tyres using the manufacturer's schedule as the baseline.

### Stage 3: record every job, planned or not

Log each service and each repair against the vehicle, with date, km reading, work done and cost. Without this history you cannot tell whether the programme is working.

### Stage 4: extend to the rest of the fleet

Once the first group runs smoothly, add the remaining vehicles. Decide consciously which low-value units stay on a run-to-failure policy.

### Stage 5: review every quarter

Compare breakdowns, days off the road and maintenance spend before and after. If a vehicle keeps breaking down between services, shorten its intervals or look at replacement. A ready-made [fleet preventive maintenance checklist](/resources/preventive-maintenance-checklist) helps keep each service consistent.`,
    },
    {
      heading: 'Common mistakes when switching',
      body: `- **Using calendar-only intervals.** Monthly schedules over-service low-use vehicles and under-service busy ones. Base intervals on km.
- **Not updating odometer readings.** A km-based schedule is only as accurate as the latest reading. Make updating the odometer part of the routine.
- **Skipping records for "small" repairs.** Small repeated repairs are often the first sign that a vehicle is becoming expensive to keep.
- **Treating the schedule as fixed.** Heat, dust, heavy loads and city stop-start driving are hard on vehicles. Many fleets in hot, dusty conditions shorten intervals compared with the standard schedule, always within the manufacturer's guidance.
- **Measuring success by workshop spend alone.** Preventive programmes can raise routine spend slightly while reducing breakdowns and downtime. Look at the total.`,
    },
    {
      heading: 'How Axpense helps you run preventive maintenance',
      body: `Axpense is built around km-based preventive maintenance. You add each vehicle with its plate, make, model and odometer reading, set service intervals in kilometres, and Axpense shows how many km are left until each service and which vehicles are overdue, with reminders so nothing is missed.

Every service and repair is recorded in the vehicle's service history, and the costs are recorded as expenses per vehicle by category, so you can see how much each vehicle's maintenance really costs. Spare parts are tracked from purchase to installation, and inspection checklists record failed items on the vehicle.

To see how this fits a whole maintenance operation, read about our [fleet maintenance software](/fleet-maintenance-software), or book a demo to walk through your own fleet.`,
    },
  ],
  faqs: [
    {
      q: 'Is preventive maintenance always cheaper than reactive maintenance?',
      a: 'Not for every single vehicle or part. For low-value vehicles with spare capacity, or parts that fail harmlessly, repairing on failure can be reasonable. For vehicles that carry customer work, preventive maintenance is usually cheaper overall once you count towing, downtime, lost trips and secondary damage, not just the workshop invoice.',
    },
    {
      q: 'What is the difference between preventive and predictive maintenance?',
      a: 'Preventive maintenance services a vehicle at fixed intervals, such as every set number of kilometres. Predictive maintenance tries to service parts based on their measured condition, using diagnostic data or analysis to estimate when they will fail. Predictive methods need good data and history, so most fleets start with a solid preventive programme first.',
    },
    {
      q: 'Should fleet maintenance intervals be based on kilometres or time?',
      a: 'For most road vehicles, kilometres are the better primary trigger because wear tracks distance driven. Many manufacturers also give a time limit, such as a maximum number of months between oil changes, for vehicles that are rarely driven. Follow the manufacturer schedule and adjust it for heavy loads, heat and dust.',
    },
    {
      q: 'How long does it take to move a fleet from reactive to preventive maintenance?',
      a: 'It depends on fleet size and how good your current records are. A practical approach is to start with the most critical vehicles, set km-based intervals, record every job, then extend to the rest of the fleet. The first group can be running on a schedule within days once odometer readings and last service dates are collected.',
    },
  ],
  relatedPages: ['/fleet-maintenance-software', '/features/preventive-maintenance', '/blog/km-based-preventive-maintenance', '/blog/reduce-vehicle-downtime'],
};
