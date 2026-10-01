import type { BlogPost } from '@/lib/blog';

export const REDUCE_VEHICLE_DOWNTIME: BlogPost = {
  slug: 'reduce-vehicle-downtime',
  language: 'en',
  title: 'How to Reduce Vehicle Downtime in a Company Fleet',
  excerpt: 'How to reduce vehicle downtime: measure days off the road, work out what they cost, and cut them with maintenance, inspections, parts and workshop turnaround.',
  category: 'fleet-maintenance',
  status: 'published',
  publishedAt: '2026-09-29',
  updatedAt: '2026-09-29',
  seoTitle: 'How to Reduce Vehicle Downtime in Your Fleet',
  seoDescription: 'How to reduce vehicle downtime: measure days off the road, price the lost days, and cut them with km-based maintenance and early checks. Book a demo.',
  primaryKeyword: 'how to reduce vehicle downtime',
  sections: [
    {
      heading: 'Quick answer',
      body: `To reduce vehicle downtime, first measure it: count the days each vehicle is off the road and why. Then turn unplanned stops into planned ones with km-based preventive maintenance, catch problems early with daily inspections, keep the parts you replace most often available, and shorten the time each vehicle spends waiting at the workshop.`,
    },
    {
      heading: 'Planned vs unplanned downtime',
      body: `Not all downtime is a problem. A vehicle in for a scheduled oil change is off the road, but you chose the day, the job is short and the work was needed anyway. That is **planned downtime**.

**Unplanned downtime** is different. The vehicle stops on a delivery route, a driver reports a warning light at 7 a.m., or a failed part takes a week to arrive. You did not choose the day, the job is usually bigger, and there are knock-on costs: missed deliveries, a replacement vehicle, overtime, or a customer who waits.

The goal is not zero downtime. It is to move as much downtime as possible from unplanned to planned, and to make both kinds shorter.

### Typical causes of unplanned downtime
- Missed or late services that lead to bigger mechanical failures
- Tyre damage, battery failure and cooling system problems, especially in hot months
- Small faults that drivers noticed but did not report, or reported with no follow-up
- Parts that are not in stock when the vehicle arrives at the workshop
- Vehicles waiting in a queue at the workshop, or waiting for approval of the repair`,
    },
    {
      heading: 'How to measure days off the road',
      body: `You cannot reduce what you do not count. For every vehicle, record each time it goes out of service and each time it returns, with a reason. A simple rule: a vehicle is "down" when it cannot be assigned to work for a normal shift.

From those records you can calculate three numbers each month:

- **Days off the road per vehicle** = total days the vehicle was out of service in the period.
- **Availability** = (days in period − days off the road) ÷ days in period × 100.
- **Share of unplanned downtime** = unplanned days ÷ total days off the road × 100.

### A worked example
For example, a distribution company runs 20 vans on 26 working days in a month, so there are 520 van-days available. During the month the vans spent 34 days off the road: 12 days in planned services and 22 days in breakdowns and waiting for parts.

- Availability = (520 − 34) ÷ 520 × 100 = **93.5 %**
- Share of unplanned downtime = 22 ÷ 34 × 100 = **65 %**

Two thirds of the lost days were unplanned. That tells the fleet manager where to focus: not on shortening services, but on preventing the breakdowns and the waiting.`,
    },
    {
      heading: 'What a day of downtime costs',
      body: `Downtime rarely shows up as one line in the accounts, which is why it is easy to ignore. Put a price on it and the case for prevention becomes clear.

Here is an illustrative calculation for one van in Egypt. The numbers are an example only; use your own.

| Cost item | Per day off the road |
|---|---|
| Rental of a replacement van | 1,500 EGP |
| Driver paid while the van is idle (if no replacement) | 600 EGP |
| Lost or delayed deliveries (margin on orders not delivered) | 1,200 EGP |
| Extra towing or call-out cost, averaged over the breakdown days | 300 EGP |

If the company rents a replacement, the direct cost is about 1,500 EGP plus towing, around 1,800 EGP per day. If it does not, the cost is the idle driver plus lost margin plus towing, around 2,100 EGP per day.

Using the 22 unplanned days from the example above at roughly 2,000 EGP per day, unplanned downtime cost the company about **44,000 EGP in one month**, before counting the repair bills themselves. Halving the unplanned days would be worth about 22,000 EGP a month, which puts a figure on what better maintenance, faster parts and quicker workshop decisions are worth.

To see how downtime fits into total running costs, compare it with your [vehicle cost per km](/blog/vehicle-cost-per-km).`,
    },
    {
      heading: 'Preventive maintenance: turn breakdowns into appointments',
      body: `The single biggest lever is servicing vehicles on time. A service booked in advance takes a few hours on a day you choose; a failure caused by a skipped service can take a vehicle away for a week.

For fleets, the most reliable trigger is distance. Set a service interval in kilometres for each vehicle based on the manufacturer's schedule, for example an oil service every 5,000 to 10,000 km depending on the oil and the conditions, and track the km left until each service is due. Vehicles that run long daily routes reach their service far sooner than the calendar suggests.

Three habits make the difference:
- **Update odometer readings regularly**, at least weekly, so the km left is accurate.
- **Book vehicles in before they are due**, not when they are already overdue.
- **Group jobs**: when a vehicle is in for an oil service, handle brake pads, filters and small repairs in the same visit.

Our guide on [km-based preventive maintenance](/blog/km-based-preventive-maintenance) covers how to set intervals for different vehicle types.`,
    },
    {
      heading: 'Inspections: catch problems while they are small',
      body: `Many breakdowns start as something a driver could have seen: a bulging tyre, a coolant leak, a warning light, a soft brake pedal. A short daily walk-around, with every item marked pass or fail, gives you those early warnings.

What matters most is what happens next. A failed item should be reviewed the same day and end up either fixed, scheduled into the next service, or consciously accepted. If failed items are not followed up, drivers stop reporting them and you lose the early warning.

A [daily vehicle inspection checklist](/blog/daily-vehicle-inspection-checklist) is the practical starting point; it takes about five minutes per vehicle.`,
    },
    {
      heading: 'Spare parts: stop waiting for the part',
      body: `A two-hour repair becomes a four-day stop when the part is not available. Look at your repair history and list the parts you replace most often on each vehicle model: filters, brake pads, bulbs, wiper blades, batteries, belts and common tyre sizes.

For these fast-moving parts, keep a small minimum stock, or agree with a supplier to hold them for you. For slower, expensive parts, know in advance where you would source them and how long they take.

It also helps to record which part went into which vehicle and when. That shows you which parts fail early, which suppliers are reliable, and which vehicles keep consuming the same part. Our article on [fleet spare parts management](/blog/fleet-spare-parts-management) covers stock levels and parts lifecycle in detail.`,
    },
    {
      heading: 'Workshop turnaround: shorten the time in the bay',
      body: `Once a vehicle is at the workshop, most lost time is waiting rather than working: waiting for a diagnosis, for a quote to be approved, for a part, or for someone to collect the vehicle.

- **Set an approval limit.** Let the workshop proceed without calling you for repairs under an agreed amount.
- **Send the history with the vehicle.** A mechanic who knows the last service date, recent failed inspection items and parts already replaced diagnoses faster.
- **Track the time in and time out** for every workshop visit. Compare turnaround across workshops or between your own workshop and outside garages.
- **Plan collection.** A repaired vehicle sitting in the workshop yard for an extra day is still downtime.`,
    },
    {
      heading: 'How Axpense helps reduce downtime',
      body: `Axpense brings the records you need to manage downtime into one place. Each vehicle has its registry entry with odometer, status and history. **Km-based preventive maintenance** shows km left until the next service and flags vehicles that are overdue, so services are booked before they become breakdowns. **Inspections with configurable checklists** record pass or fail per item, with failed items recorded on the vehicle. **Spare parts** are tracked from purchase to installation, so you know which part went into which vehicle. **Expenses** for repairs and parts are recorded per vehicle, and reports show maintenance status and costs by vehicle.

See how these fit together on the [fleet maintenance software](/fleet-maintenance-software) page, or book a demo.`,
    },
  ],
  faqs: [
    {
      q: 'What is a good fleet availability rate?',
      a: 'It depends on vehicle age, duty and how you define "down", so there is no single benchmark. The most useful comparison is your own fleet month by month. Track availability and the share of unplanned downtime, and aim to move both in the right direction.',
    },
    {
      q: 'Does preventive maintenance increase downtime?',
      a: 'It adds short, planned stops, but it usually reduces total downtime because it prevents longer unplanned ones. Grouping several jobs into one scheduled visit keeps the planned time low.',
    },
    {
      q: 'How do I calculate the cost of vehicle downtime?',
      a: 'Add up what one day off the road costs you: a replacement vehicle or idle driver wages, margin on lost or delayed work, and any towing or call-out charges. Multiply by the number of downtime days, then add the repair bill itself.',
    },
    {
      q: 'Should we count weekends and holidays as downtime?',
      a: 'Count only the days a vehicle would normally have worked. If your fleet runs six days a week, measure against six-day weeks. Use the same rule every month so the numbers are comparable.',
    },
  ],
  relatedPages: ['/fleet-maintenance-software', '/features/preventive-maintenance', '/features/spare-parts', '/blog/km-based-preventive-maintenance'],
};
