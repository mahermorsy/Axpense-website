import type { BlogPost } from '@/lib/blog';

export const FLEET_SPARE_PARTS_MANAGEMENT: BlogPost = {
  slug: 'fleet-spare-parts-management',
  language: 'en',
  title: 'Fleet Spare Parts Management: A Practical Guide for Fleet Managers',
  excerpt: 'Fleet spare parts management in practice: which parts to stock, how much, how to record which part went into which vehicle, and how to track cost.',
  category: 'fleet-maintenance',
  status: 'published',
  publishedAt: '2026-09-29',
  updatedAt: '2026-09-29',
  seoTitle: 'Fleet Spare Parts Management: A Practical Guide',
  seoDescription: 'Fleet spare parts management made practical: what to stock, minimum levels, part-to-vehicle records, warranty and cost per vehicle. Book a demo.',
  primaryKeyword: 'fleet spare parts management',
  sections: [
    {
      heading: 'Quick answer',
      body: `Fleet spare parts management means knowing which parts your vehicles use most, keeping a sensible minimum stock of them, and recording every part from purchase to installation in a specific vehicle. Done well, it shortens repairs, stops parts from disappearing, lets you claim warranties, and shows the real parts cost of each vehicle.`,
    },
    {
      heading: 'Why spare parts need their own process',
      body: `In many fleets, parts are bought when a vehicle breaks and paid for from a petty cash box or a supplier account. That works until one of three things happens: a vehicle waits days for a part nobody stocked, a box of brake pads disappears from the store, or the finance team asks why parts spending doubled and nobody can say which vehicles consumed them.

A parts process answers three questions at any time:
- **What do we have?** Parts in stock, by type and vehicle model.
- **Where did it go?** Which part was installed in which vehicle, on what date and at what odometer reading.
- **What did it cost?** Parts spending per vehicle, per category and per supplier.

Parts availability also has a direct effect on how long vehicles stay off the road. If you are working on [how to reduce vehicle downtime](/blog/reduce-vehicle-downtime), parts are usually one of the first bottlenecks to fix.`,
    },
    {
      heading: 'Common parts by vehicle type',
      body: `Start with your own repair history, but the list below covers the parts most fleets replace regularly.

| Vehicle type | Fast-moving parts | Slower, higher-value parts |
|---|---|---|
| Sedans and pool cars | Oil, oil and air filters, cabin filter, wiper blades, bulbs, brake pads | Batteries, tyres, brake discs, shock absorbers |
| Vans and light commercial | Oil and filters, brake pads, bulbs, fan belt, wiper blades | Tyres, batteries, clutch kit, suspension parts |
| Pickups (site and field use) | Oil and filters, air filter (dusty conditions), brake pads, bulbs | Tyres, batteries, leaf springs, clutch kit |
| Light and medium trucks | Oil and fuel filters, air filter, brake linings, bulbs, belts | Tyres, batteries, brake drums, starter and alternator |

Two patterns matter in hot and dusty conditions common across Egypt and the Gulf: air filters and batteries usually need replacing sooner than a temperate-climate schedule suggests, and tyres suffer from heat and poor road surfaces. Follow the manufacturer's schedule, then adjust based on what your own records show.

### Group parts by model
Stock parts by vehicle model, not just by part name. A fleet with three van models may need three different brake pad part numbers. Standardising on fewer vehicle models over time is one of the easiest ways to simplify parts management.`,
    },
    {
      heading: 'Minimum stock thinking',
      body: `You do not need a warehouse. You need enough of the right parts that a routine job never waits. A simple way to set a minimum level for each fast-moving part:

**Minimum stock = average monthly use × supplier lead time in months + a safety buffer**

For example, a fleet of 30 vans uses on average 6 sets of front brake pads a month. The supplier needs about two weeks (0.5 months) to deliver. With a buffer of 2 sets:

- Minimum stock = 6 × 0.5 + 2 = **5 sets**
- When stock falls to 5, reorder enough to cover roughly a month, around 6 sets.

### What not to stock
- **Slow, expensive parts** such as gearboxes or turbochargers. Know where you would buy them and the lead time instead.
- **Parts for vehicles you plan to sell soon.**
- **Tyres in large numbers** unless you have proper storage away from heat and sunlight; many fleets agree a call-off arrangement with a tyre supplier instead.

Review minimum levels every quarter. As services are completed and your records grow, average use becomes more accurate and you can lower buffers on parts that turn out to be predictable.`,
    },
    {
      heading: 'Record which part went into which vehicle',
      body: `This is the step most fleets skip, and it is the one that pays back most. Every time a part is installed, record:

1. The vehicle (plate number)
2. The part and part number, and the supplier
3. The date and the odometer reading at installation
4. The cost
5. Who installed it (your workshop or an outside garage)

With this record you can answer questions that are impossible otherwise. Did this battery really fail after eight months? Which vehicle has had four sets of brake pads this year? Are parts from supplier A lasting as long as parts from supplier B?

It also discourages leakage. When every part leaving the store must be linked to a vehicle, parts cannot quietly disappear without it showing up in the records.`,
    },
    {
      heading: 'Warranty and parts lifecycle',
      body: `Many parts carry a warranty measured in time, kilometres or both. A battery might be covered for a set number of months; some tyres and components carry a km limit. Without a record of the installation date and odometer reading, you cannot prove the part failed within the warranty, and the replacement is paid in full.

Tracking the lifecycle of a part, from purchase to installation to removal, also shows you the actual life you get from each part type:

- **Expected life**: what the supplier or manufacturer says.
- **Actual life**: km or months between installation and replacement in your fleet.

If brake pads on one model last 25,000 km on average but on one vehicle only 12,000 km, that is worth a conversation with the driver or a check of the brakes. Parts life also feeds your service planning: if a part reliably lasts a certain distance, replace it during the scheduled service before that point instead of waiting for it to fail on the road.`,
    },
    {
      heading: 'Genuine vs aftermarket parts',
      body: `There is no single right answer. Each option has trade-offs, and most fleets use a mix.

| | Genuine (OEM) parts | Aftermarket parts |
|---|---|---|
| Price | Usually higher | Usually lower, with a wide range |
| Fit and quality | Consistent, matches the original | Varies by brand and supplier |
| Availability | Through dealers; lead times can be long for some models | Often easier to find locally |
| Warranty | May be required to keep the vehicle warranty intact during the warranty period | Supplier warranty varies |

A practical policy:
- Use genuine parts on vehicles still under manufacturer warranty, and for safety-critical items where you have had problems with alternatives.
- Allow approved aftermarket brands for routine consumables such as filters, bulbs and wiper blades.
- Compare actual life, not just price. A cheaper part that lasts half as long costs more per kilometre.

Your installation records are what make this comparison possible.`,
    },
    {
      heading: 'Parts cost per vehicle',
      body: `Once every part is linked to a vehicle, you can see the parts cost of each vehicle over any period. For example:

| Vehicle | Parts cost (12 months) | Km driven | Parts cost per km |
|---|---|---|---|
| Van A | 18,000 EGP | 45,000 km | 0.40 EGP |
| Van B | 31,500 EGP | 42,000 km | 0.75 EGP |

Van B drives slightly less but costs almost twice as much in parts per km. That is a signal to look at its repair history, its driver and its age, and possibly a reason to replace it.

Parts are one line in a vehicle's running costs, alongside fuel, insurance, registration and labour. To bring them together, see [fleet cost tracking](/fleet-cost-tracking) or use the [fleet cost per km calculator](/resources/fleet-cost-calculator).`,
    },
    {
      heading: 'How Axpense helps with spare parts',
      body: `Axpense tracks [spare parts management for fleets](/features/spare-parts) from purchase to installation. Each part is recorded, and when it is installed you link it to the vehicle it went into, building a parts lifecycle history per vehicle. Parts and repair costs are recorded as expenses per vehicle and by category, and reports show costs by vehicle and category so the expensive vehicles stand out.

Because parts sit next to km-based maintenance, service history and inspections, the full picture of each vehicle is in one place, in Arabic or English. See how it works on the [fleet maintenance software](/fleet-maintenance-software) page, or book a demo.`,
    },
  ],
  faqs: [
    {
      q: 'How many spare parts should a fleet keep in stock?',
      a: 'Only fast-moving parts for the vehicle models you run. A simple rule is average monthly use multiplied by the supplier lead time in months, plus a small safety buffer. Slow, expensive parts are usually better sourced when needed.',
    },
    {
      q: 'Why record which part went into which vehicle?',
      a: 'It shows you parts cost per vehicle, lets you check how long each part actually lasts, supports warranty claims with an installation date and odometer reading, and makes it much harder for parts to disappear from the store unnoticed.',
    },
    {
      q: 'Are aftermarket parts safe for fleet vehicles?',
      a: 'Good-quality aftermarket parts from reputable brands are widely used for routine items. For vehicles under manufacturer warranty and for safety-critical parts, many fleets prefer genuine parts. Compare parts by their actual life in your fleet, not only by price.',
    },
    {
      q: 'Do we need a separate inventory system for fleet parts?',
      a: 'Not necessarily. For most fleets the important thing is that parts are linked to vehicles and costs. A fleet system that tracks parts from purchase to installation often covers what a small or medium fleet needs.',
    },
  ],
  relatedPages: ['/fleet-maintenance-software', '/features/spare-parts', '/fleet-cost-tracking', '/blog/reduce-vehicle-downtime'],
};
