import type { BlogPost } from '@/lib/blog';

export const KM_BASED_PREVENTIVE_MAINTENANCE: BlogPost = {
  slug: 'km-based-preventive-maintenance',
  language: 'en',
  title: 'How to Build a Preventive Maintenance Schedule for Fleets Based on Kilometres',
  excerpt: 'Why kilometre-based service intervals beat calendar-only schedules, and how to build a preventive maintenance schedule your fleet will actually follow.',
  category: 'fleet-maintenance',
  status: 'published',
  publishedAt: '2026-09-29',
  updatedAt: '2026-09-29',
  seoTitle: 'Preventive Maintenance Schedule for Fleets (km)',
  seoDescription: 'Build a preventive maintenance schedule for fleets around kilometres driven, with example intervals and severe-duty tips. Book a demo to see reminders.',
  primaryKeyword: 'preventive maintenance schedule for fleets',
  sections: [
    {
      heading: 'Quick answer',
      body: `A preventive maintenance schedule for fleets lists each service a vehicle needs and the interval at which it is due, measured mainly in kilometres driven. Start from the manufacturer's schedule, shorten intervals for heavy or dusty duty, record odometer readings regularly, and service each vehicle when its km reading reaches the next interval rather than on a fixed calendar date.`,
    },
    {
      heading: 'Why kilometres, not just the calendar',
      body: `Engines, brakes, tyres and suspension wear with use. A van that drives 400 km a day in city traffic puts more load on its oil and brake pads in a month than a manager's car does in a season. A schedule that says "service every three months" treats both the same, so one is serviced too late and the other too early.

Kilometre-based intervals fix that. Each vehicle is serviced when it has actually done the work that causes wear. The benefits are practical:

- **Fewer breakdowns on high-use vehicles.** Busy vehicles reach their service point sooner, and the schedule reflects it.
- **Less money wasted on low-use vehicles.** A pool car that drives 800 km a month does not need an oil change every eight weeks.
- **A schedule that matches the service book.** Manufacturers write most intervals in kilometres, so your plan speaks the same language as the workshop.

Calendar limits still matter as a backstop. Oil ages, rubber hardens and batteries weaken even when a vehicle sits in the yard. Most manufacturers say "every X km or Y months, whichever comes first". Use kilometres as the main trigger and keep the time limit so rarely used vehicles are not forgotten.`,
    },
    {
      heading: 'Step 1: Group your vehicles',
      body: `You do not need a unique schedule for every vehicle, but you do need one for every type. Group vehicles that share the same make, model and engine, and that do similar work. A typical mid-size fleet ends up with a few groups, for example:

- Light passenger cars used by sales and management staff.
- Small vans and pickups used for deliveries or technician visits.
- Medium or heavy trucks used for distribution or site work.

For each group, find the manufacturer's service schedule in the owner's manual or from the dealer. That schedule is your starting point. Everything else in this guide is about adjusting it to your conditions and making sure it is followed.`,
    },
    {
      heading: 'Step 2: Write the interval table',
      body: `List every service task for the group and the kilometre interval at which it is due. The table below is an **example only** for a light commercial van in normal use. Your numbers must come from the manufacturer's schedule for your specific model.

| Service task | Example interval | Notes |
|---|---|---|
| Engine oil and oil filter | Every 5,000–10,000 km | Depends on oil grade and conditions |
| Tyre rotation and pressure check | Every 10,000 km | Check pressure weekly in daily inspections |
| Air filter | Every 15,000–20,000 km | Shorter in dusty areas |
| Brake pads and discs inspection | Every 20,000 km | Replace by wear, not by schedule |
| Cabin filter | Every 20,000 km | Affects AC performance |
| Coolant check and top-up | Every 20,000 km | Replace per manufacturer |
| Fuel filter | Every 30,000–40,000 km | Diesel engines often need it sooner |
| Spark plugs (petrol) | Every 40,000–60,000 km | Model-specific |
| Transmission fluid | Every 60,000 km | Check the service book |
| Timing belt (if fitted) | Per manufacturer | Failure can destroy the engine |

Keep the table short enough to act on. If your team has to read ten pages to know what is due, it will not be used. For a printable version to work from, see our [fleet preventive maintenance checklist](/resources/preventive-maintenance-checklist).`,
    },
    {
      heading: 'Step 3: Adjust for severe duty',
      body: `Most service books have two schedules: normal and severe. Many fleets in the Middle East operate in conditions that count as severe, so read that part of the manual carefully. Typical severe-duty conditions include:

- **Heat.** Long periods above 40 °C stress engine oil, coolant, batteries and tyres.
- **Dust and sand.** Air filters clog faster, and fine sand accelerates wear on brakes and suspension.
- **Stop-and-go city traffic.** Short trips and idling mean the engine rarely reaches steady operating conditions.
- **Heavy loads and towing.** Transmission, brakes and tyres carry more stress on every kilometre.
- **Rough roads and site access.** Suspension, steering and tyres wear faster on unpaved routes.

### How to adjust

A common approach is to shorten the relevant intervals rather than all of them. For example, if the normal oil interval for your van is 10,000 km, the severe schedule might say 5,000 km. If your vans drive dusty desert roads, you might also halve the air filter interval while keeping the spark plug interval unchanged. Document the change and the reason, so the next fleet manager understands why the numbers differ from the book.`,
    },
    {
      heading: 'Step 4: Record odometer readings reliably',
      body: `A km-based schedule is only as good as the odometer readings behind it. If the last reading on file is six weeks old, the "km left until service" figure is a guess.

### How often to record

For vehicles that drive every day, a weekly reading is a good minimum. High-mileage vehicles, such as long-haul trucks, benefit from readings every few days. Low-use vehicles can be updated monthly, as long as the time-based backstop is also watched.

### Where readings come from

Good sources are the ones that already happen: a daily or weekly inspection, a service visit, or an expense entry such as a repair. Tie the reading to something the driver or supervisor is already doing, and it gets recorded without an extra task.

### Watch for bad data

A reading lower than the previous one, or a jump of 10,000 km in a week for a vehicle that drives 200 km a day, is almost always a typing error. Correct it quickly, because a wrong reading can hide an overdue service.`,
    },
    {
      heading: 'Step 5: Turn the schedule into reminders',
      body: `With intervals and current readings, you can calculate the next due point for every vehicle:

**Next service due = km at last service + interval**

**Km left = next service due − current odometer reading**

For example, a van was last serviced at 84,000 km with a 10,000 km oil interval. Its next oil service is due at 94,000 km. If today's reading is 91,500 km, it has 2,500 km left. At 250 km a day, that is about 10 working days, which is enough time to book the workshop.

Set a warning threshold, such as 1,000 or 1,500 km before the due point, so services are booked in advance. Vehicles past their due point should be flagged as overdue and handled first. If you want the reasoning behind servicing before failure, our comparison of [preventive vs reactive maintenance](/blog/preventive-vs-reactive-maintenance) covers the cost side.`,
    },
    {
      heading: 'Common mistakes to avoid',
      body: `- **Copying one schedule for every vehicle.** A diesel truck and a petrol sedan do not share service intervals.
- **Ignoring the time limit.** A vehicle parked for months still needs its oil and battery checked.
- **Resetting the counter to the wrong point.** Always calculate the next due point from the km at which the service was actually done, not from when it was due.
- **Not recording what was done.** A service with no record cannot prove the interval was met and leaves the next person guessing.
- **Letting overdue vehicles keep running.** Overdue services should have a clear owner and a date.`,
    },
    {
      heading: 'How Axpense helps you run the schedule',
      body: `Axpense is built around km-based preventive maintenance. You set service intervals in kilometres for each vehicle, record odometer readings, and the system shows km left until each service, sends reminders as vehicles approach their interval and flags overdue vehicles. Every completed service goes into the vehicle's service history, and parts fitted during the service are linked to the vehicle they went into.

Inspections with configurable checklists feed failed items onto the vehicle record, so problems found between services are not lost. The interface is available in Arabic and English, and onboarding is free. See how it fits your fleet on our [fleet maintenance software](/fleet-maintenance-software) page, or book a demo.`,
    },
  ],
  faqs: [
    {
      q: 'What is a good oil change interval for fleet vehicles?',
      a: 'For light vehicles, typical examples range from 5,000 to 10,000 km, depending on the oil grade, engine and operating conditions. Always follow the manufacturer\'s schedule for your model and use the severe-duty interval if your vehicles work in heat, dust or heavy traffic.',
    },
    {
      q: 'Should I use kilometres or months for maintenance intervals?',
      a: 'Use both, with kilometres as the main trigger. Most service books state "every X km or Y months, whichever comes first". Kilometres match actual wear on busy vehicles, while the month limit protects vehicles that are rarely driven.',
    },
    {
      q: 'How often should drivers report odometer readings?',
      a: 'Weekly is a sensible minimum for vehicles in daily use, and every few days for high-mileage vehicles. The easiest way is to collect the reading during an activity that already happens, such as a routine inspection or a service visit.',
    },
    {
      q: 'What counts as severe-duty driving?',
      a: 'Manufacturers usually list high temperatures, dusty or sandy roads, frequent short trips, long idling, heavy loads, towing and rough roads. Many fleets in the region meet at least one of these conditions, so check the severe schedule in your service book.',
    },
  ],
  relatedPages: ['/fleet-maintenance-software', '/resources/preventive-maintenance-checklist', '/features/preventive-maintenance', '/blog/preventive-vs-reactive-maintenance'],
};
