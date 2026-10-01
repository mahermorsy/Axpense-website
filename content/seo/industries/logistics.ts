// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const LOGISTICS: SeoPage = {
  path: '/industries/logistics',
  type: 'industry',
  updatedAt: '2026-09-29',
  parent: '/fleet-management-software',
  primaryKeyword: { en: 'logistics fleet management software', ar: 'برنامج إدارة أسطول النقل والشحن' },
  secondaryKeywords: {
    en: ['transport fleet management software', 'truck fleet maintenance', 'trucking fleet cost per km', 'logistics vehicle maintenance schedule', 'haulage fleet management'],
    ar: ['نظام إدارة أسطول الشاحنات', 'صيانة شاحنات النقل', 'تكلفة الكيلومتر للشاحنة', 'إدارة أسطول شركات الشحن', 'برنامج صيانة سيارات النقل'],
  },
  meta: {
    en: {
      title: 'Logistics Fleet Management Software for Trucks',
      description: 'Logistics fleet management software that schedules truck and van servicing by km and shows cost per vehicle, so fewer break down mid-route. Book a demo.',
    },
    ar: {
      title: 'برنامج إدارة أسطول النقل والشحن',
      description: 'برنامج إدارة أسطول النقل والشحن يجدول صيانة الشاحنات وسيارات النقل حسب الكيلومترات ويعرض تكلفة كل مركبة لتقل الأعطال على الطريق. احجز عرضًا تجريبيًا.',
    },
  },
  h1: {
    en: 'Logistics Fleet Management Software for High-Mileage Trucks and Vans',
    ar: 'برنامج إدارة أسطول النقل والشحن للشاحنات وسيارات النقل كثيرة الحركة',
  },
  navLabel: { en: 'Logistics fleet management', ar: 'إدارة أسطول النقل والشحن' },
  hero: {
    en: {
      badge: 'Logistics & transportation',
      intro: 'A logistics truck can cover more kilometres in a month than a company car covers in a year. Axpense plans each vehicle’s servicing around the kilometres it actually drives and adds up what it costs to run, so trucks stay on the road and you can see which ones are still worth keeping.',
    },
    ar: {
      badge: 'النقل والشحن',
      intro: 'قد تقطع شاحنة النقل في شهر واحد ما تقطعه سيارة الشركة في عام كامل. يخطط أكسبنس صيانة كل مركبة حسب الكيلومترات التي تقطعها فعلًا، ويجمع تكلفة تشغيلها، لتبقى الشاحنات على الطريق وتعرف أيها ما زال يستحق الاحتفاظ به.',
    },
  },
  heroImage: 'maintenance',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'Why logistics fleets outgrow spreadsheets quickly',
        body: `In logistics the vehicles are the product. When a truck is off the road the load still has to move, so a replacement is hired, another driver works overtime or the customer waits. Every missed service costs far more than the workshop invoice suggests.

- **Mileage runs ahead of the calendar.** An intercity truck can reach its next service in two or three weeks, so a sheet that says “service in March” is wrong by mid-February.
- **The fleet is mixed.** Tractor units, rigid trucks and vans each have their own intervals, parts and costs.
- **Costs are split across depots.** Repairs are paid at one branch, tyres at another and insurance at head office, so nobody sees the full cost of one truck.
- **Drivers rotate between shifts**, so it is hard to know who reported a problem and whether it was fixed.`,
      },
      {
        kind: 'text',
        heading: 'The vehicles a logistics fleet usually runs',
        body: `Most transport companies run **heavy trucks and tractor units** on long-haul routes, **rigid trucks** for regional distribution, **light vans** for last-mile work with many stops, and **pickups or cars** for supervisors and yard staff.

In Axpense each one is a vehicle record with plate, make, model, odometer reading and status. Keeping the type on the record lets you compare vans with vans and tractor units with tractor units, instead of averaging the whole fleet into one misleading number.`,
      },
      {
        kind: 'text',
        heading: 'Maintenance needs: service by kilometre, not by date',
        body: `For high-mileage vehicles, kilometres are the only reliable service trigger. Axpense stores each interval in kilometres, shows how many are left before each vehicle is due, and lists the vehicles already overdue.

The table is only an example of why date-based schedules fail in transport; always follow the manufacturer’s schedule.

| Vehicle (example) | Daily km | Example oil interval | Due roughly every |
|---|---|---|---|
| Intercity tractor unit | 600 | 30,000 km | 7 weeks |
| Regional rigid truck | 250 | 20,000 km | 11 weeks |
| Last-mile van | 150 | 10,000 km | 9 weeks |

Tyres, brake pads and filters wear fastest. Record them as [spare parts](/features/spare-parts) and Axpense keeps track of which part went into which truck. For the wider picture, see our [fleet maintenance software](/fleet-maintenance-software).`,
      },
      {
        kind: 'formula',
        heading: 'Cost needs: cost per km by route type, and the price of a day off the road',
        intro: 'Axpense records repairs, spare parts, insurance, registration and other costs against each vehicle by category, which gives you the cost side of these figures for every truck.',
        formulas: [
          { label: 'Cost per km', expression: 'Total operating costs for the period ÷ km driven in the period' },
          { label: 'Cost of one day off the road', expression: 'Replacement hire + extra overtime + penalties or lost revenue for the day' },
        ],
        example: {
          title: 'Example: two route types',
          body: `Suppose long-haul trucks cost 1,650,000 EGP last quarter over 550,000 km (3.0 EGP per km), while city vans cost 360,000 EGP over 90,000 km (4.0 EGP per km) because stop-start driving wears brakes and tyres faster. Grouping vehicles by route type makes that gap visible.

Fuel is usually the biggest single truck cost; record fill-ups on each truck’s profile in Axpense so it is part of the figure. See [fuel expense tracking](/features/fuel-management). The [fleet cost calculator](/resources/fleet-cost-calculator) walks through the arithmetic, and [fleet cost tracking](/fleet-cost-tracking) shows how Axpense builds each vehicle’s cost.`,
        },
      },
      {
        kind: 'text',
        heading: 'Inspection needs: checks before every long trip',
        body: `A defect found in the yard costs a repair; the same defect on the highway costs a tow and a late load. Logistics fleets rely on pre-trip checks of tyres and wheel nuts, brakes, lights, mirrors, fluid leaks, coupling and load securing.

In Axpense you build the checklist once and drivers or yard supervisors complete it per vehicle. Each item is marked pass or fail, and failed items are recorded on the vehicle so the workshop and fleet manager see the same list.`,
      },
      {
        kind: 'steps',
        heading: 'How a logistics team runs its fleet in Axpense',
        steps: [
          { title: 'Register trucks, vans and support vehicles', desc: 'Plate, make, model, current odometer and status for each, grouped by type.' },
          { title: 'Assign drivers', desc: 'Link each driver to their truck, so every inspection and expense has an owner across shifts.' },
          { title: 'Set km intervals per vehicle type', desc: 'Axpense counts down the kilometres left and flags vehicles that go overdue.' },
          { title: 'Run pre-trip inspections', desc: 'Failed items stay on the vehicle record for the workshop to follow up.' },
          { title: 'Record every cost against the vehicle', desc: 'Repairs, tyres, parts, insurance and registration, by vehicle and category.' },
          { title: 'Review monthly', desc: 'Check overdue services, cost by vehicle and category, and the trucks that cost most to keep running.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'Axpense modules logistics teams use most',
        items: [
          { icon: 'truck', title: 'Vehicle management', desc: 'One record per truck or van with odometer, status, driver and history.', href: '/features/vehicle-management' },
          { icon: 'calendar', title: 'Km-based preventive maintenance', desc: 'Intervals in kilometres, km left to each service and a clear overdue list.', href: '/features/preventive-maintenance' },
          { icon: 'clipboard', title: 'Inspections', desc: 'Pre-trip checklists with pass and fail results stored on the vehicle.', href: '/features/inspection-management' },
          { icon: 'package', title: 'Spare parts', desc: 'Tyres, pads and filters traced from purchase to the truck they were fitted to.', href: '/features/spare-parts' },
          { icon: 'dollar', title: 'Expenses', desc: 'Every repair and running cost recorded per vehicle and category.', href: '/features/expense-management' },
          { icon: 'chart', title: 'Reports and dashboards', desc: 'Costs and maintenance status across all depots on one screen.', href: '/features/reports-analytics' },
        ],
      },
      {
        kind: 'checklist',
        heading: 'KPIs worth watching in a logistics fleet',
        intro: 'Common practice in transport companies. Some come straight from Axpense reports; others you calculate from its records.',
        items: [
          { text: 'Cost per km by route type: long-haul, regional and last-mile.' },
          { text: 'Services overdue, and by how many kilometres.' },
          { text: 'Days off the road per vehicle each month, and what they cost.' },
          { text: 'Repair and parts spend per vehicle against others of the same type.' },
          { text: 'Book value against yearly running cost, to time replacements.' },
        ],
      },
      {
        kind: 'text',
        heading: 'Example: a regional carrier with 45 trucks',
        body: `Consider a hypothetical carrier with 20 tractor units, 15 rigid trucks and 10 city vans across two depots. Services are tracked by date in a spreadsheet, and most breakdowns are reported by a driver’s phone call.

The team registers all 45 vehicles in Axpense with current odometer readings and sets intervals per type. On the first review, several tractor units show as overdue in kilometres even though the spreadsheet said “next month”, so those are booked first. Pre-trip checklists start catching worn tyres and faulty lights before departure.

After a quarter of recording costs per vehicle, the manager can compare cost per km between the three groups and see which older trucks cost most to run. With book values from [vehicle depreciation and lifecycle management](/features/asset-management), that becomes a replacement plan backed by numbers.`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'لماذا تضيق جداول الإكسل بأسطول النقل بسرعة',
        body: `في شركات النقل والشحن، المركبة هي أداة الإنتاج نفسها. وعندما تتوقف شاحنة تبقى الشحنة مطلوبة: تُستأجر شاحنة بديلة، أو يعمل سائق آخر ساعات إضافية، أو ينتظر العميل. لذلك تكلّف كل صيانة فائتة أكثر بكثير من فاتورة الورشة.

- **الكيلومترات تسبق التقويم.** شاحنة على خط بين المدن قد تصل لموعد صيانتها خلال أسبوعين أو ثلاثة، فيصبح الجدول الذي يقول «صيانة في مارس» خاطئًا من منتصف فبراير.
- **الأسطول متنوع.** رؤوس القاطرات والشاحنات والفانات لكل منها فترات وقطع وتكاليف مختلفة.
- **التكاليف موزعة على الفروع.** الإصلاح في فرع، والإطارات في آخر، والتأمين في الإدارة، فلا يرى أحد التكلفة الكاملة لشاحنة واحدة.
- **السائقون يتبدلون بين الورديات**، فيصعب معرفة من أبلغ عن المشكلة وهل أُصلحت.`,
      },
      {
        kind: 'text',
        heading: 'المركبات المعتادة في أسطول النقل والشحن',
        body: `تشغّل معظم شركات النقل **شاحنات ثقيلة ورؤوس قاطرات** على الخطوط الطويلة، و**شاحنات متوسطة** للتوزيع الإقليمي، و**فانات خفيفة** للتوصيل داخل المدن بتوقفات كثيرة، و**سيارات بيك أب وسيارات صغيرة** للمشرفين وموظفي الساحات.

في أكسبنس، كل واحدة منها سجل مركبة برقم اللوحة والماركة والطراز وقراءة العداد والحالة. ووجود النوع على السجل يتيح مقارنة الفان بالفان والقاطرة بالقاطرة، بدلًا من متوسط واحد للأسطول كله لا يعبّر عن شيء.`,
      },
      {
        kind: 'text',
        heading: 'احتياجات الصيانة: بالكيلومتر لا بالتاريخ',
        body: `في المركبات كثيرة الحركة، الكيلومترات هي المؤشر الموثوق للصيانة. يحفظ أكسبنس فترة كل صيانة بالكيلومترات، ويعرض المتبقي حتى موعد كل مركبة، ويُظهر المركبات التي تجاوزت موعدها.

الجدول مثال فقط يوضح لماذا يفشل الجدول الزمني في النقل؛ اتبع دائمًا جدول الشركة المصنّعة.

| المركبة (مثال) | كم يوميًا | فترة الزيت (مثال) | تستحق كل |
|---|---|---|---|
| رأس قاطرة بين المدن | 600 | 30,000 كم | 7 أسابيع تقريبًا |
| شاحنة توزيع إقليمي | 250 | 20,000 كم | 11 أسبوعًا تقريبًا |
| فان توصيل داخل المدينة | 150 | 10,000 كم | 9 أسابيع تقريبًا |

الإطارات وتيل الفرامل والفلاتر هي الأسرع استهلاكًا. سجّلها في [قطع الغيار](/features/spare-parts) ليعرف أكسبنس أي قطعة رُكّبت في أي شاحنة. وللصورة الأوسع، اطّلع على [برنامج صيانة الأسطول](/fleet-maintenance-software).`,
      },
      {
        kind: 'formula',
        heading: 'احتياجات التكلفة: تكلفة الكيلومتر حسب نوع الخط وثمن يوم التوقف',
        intro: 'يسجّل أكسبنس الإصلاحات وقطع الغيار والتأمين والترخيص وباقي التكاليف على كل مركبة حسب الفئة، فيوفر جانب التكلفة في هذه الأرقام لكل شاحنة.',
        formulas: [
          { label: 'تكلفة الكيلومتر', expression: 'إجمالي تكاليف التشغيل في الفترة ÷ الكيلومترات المقطوعة في الفترة' },
          { label: 'تكلفة يوم توقف واحد', expression: 'إيجار البديل + الساعات الإضافية + الغرامات أو الإيراد الضائع في ذلك اليوم' },
        ],
        example: {
          title: 'مثال: نوعان من الخطوط',
          body: `لنفترض أن شاحنات الخطوط الطويلة كلّفت 1,650,000 جنيه في الربع الماضي على 550,000 كم (3 جنيهات للكيلومتر)، بينما كلّفت فانات المدينة 360,000 جنيه على 90,000 كم (4 جنيهات للكيلومتر)، لأن القيادة المتقطعة تستهلك الفرامل والإطارات أسرع. تجميع المركبات حسب نوع الخط يُظهر هذا الفرق.

الوقود غالبًا أكبر بند في تكلفة الشاحنات؛ سجّل التزوّد بالوقود في ملف كل شاحنة على أكسبنس ليدخل في الرقم. اطّلع على [مصروفات الوقود](/features/fuel-management). تشرح [حاسبة تكلفة الكيلومتر](/resources/fleet-cost-calculator) الحساب، وتوضح [إدارة تكاليف الأسطول](/fleet-cost-tracking) كيف يبني أكسبنس تكلفة كل مركبة.`,
        },
      },
      {
        kind: 'text',
        heading: 'احتياجات الفحص: فحص قبل كل رحلة طويلة',
        body: `العيب الذي يُكتشف في الساحة يكلّف إصلاحًا، أما على الطريق السريع فيكلّف ونشًا وشحنة متأخرة. لهذا تعتمد أساطيل النقل على الفحص قبل الرحلة: الإطارات وصواميل العجل، والفرامل، والأنوار، والمرايا، وتسريب السوائل، والوصلة وتثبيت الحمولة.

في أكسبنس تبني قائمة الفحص مرة واحدة، ويكملها السائق أو مشرف الساحة لكل مركبة. يُحدَّد كل بند بمطابق أو غير مطابق، وتُسجَّل البنود غير المطابقة على المركبة ليرى فريق الورشة ومدير الأسطول القائمة نفسها.`,
      },
      {
        kind: 'steps',
        heading: 'كيف يدير فريق النقل أسطوله في أكسبنس',
        steps: [
          { title: 'سجّل الشاحنات والفانات والمركبات المساندة', desc: 'اللوحة والماركة والطراز والعداد الحالي والحالة لكل مركبة، مجمعة حسب النوع.' },
          { title: 'عيّن السائقين', desc: 'اربط كل سائق بشاحنته ليكون لكل فحص ومصروف مسؤول واضح بين الورديات.' },
          { title: 'حدد فترات الصيانة بالكيلومتر لكل نوع', desc: 'يحسب أكسبنس الكيلومترات المتبقية وينبّه للمركبات المتأخرة.' },
          { title: 'نفّذ الفحص قبل الرحلة', desc: 'تبقى البنود غير المطابقة في سجل المركبة لتتابعها الورشة.' },
          { title: 'سجّل كل تكلفة على المركبة', desc: 'الإصلاحات والإطارات والقطع والتأمين والترخيص، حسب المركبة والفئة.' },
          { title: 'راجع شهريًا', desc: 'الصيانة المتأخرة، والتكلفة حسب المركبة والفئة، والشاحنات الأعلى تكلفة في التشغيل.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'وحدات أكسبنس الأكثر استخدامًا في النقل',
        items: [
          { icon: 'truck', title: 'إدارة المركبات', desc: 'سجل لكل شاحنة أو فان بالعداد والحالة والسائق والسجل الكامل.', href: '/features/vehicle-management' },
          { icon: 'calendar', title: 'الصيانة الوقائية بالكيلومتر', desc: 'فترات بالكيلومترات، والمتبقي حتى كل صيانة، وقائمة واضحة بالمتأخر.', href: '/features/preventive-maintenance' },
          { icon: 'clipboard', title: 'الفحوصات', desc: 'قوائم فحص قبل الرحلة بنتائج مطابق وغير مطابق محفوظة على المركبة.', href: '/features/inspection-management' },
          { icon: 'package', title: 'قطع الغيار', desc: 'الإطارات والتيل والفلاتر من الشراء حتى الشاحنة التي رُكّبت فيها.', href: '/features/spare-parts' },
          { icon: 'dollar', title: 'المصروفات', desc: 'كل إصلاح وتكلفة تشغيل مسجلة لكل مركبة وفئة.', href: '/features/expense-management' },
          { icon: 'chart', title: 'التقارير ولوحات المتابعة', desc: 'التكاليف وحالة الصيانة في كل الفروع على شاشة واحدة.', href: '/features/reports-analytics' },
        ],
      },
      {
        kind: 'checklist',
        heading: 'مؤشرات تستحق المتابعة في أسطول النقل',
        intro: 'ممارسات شائعة في شركات النقل. بعضها يظهر مباشرة في تقارير أكسبنس، وبعضها تحسبه من سجلاته.',
        items: [
          { text: 'تكلفة الكيلومتر حسب نوع الخط: طويل وإقليمي وداخل المدينة.' },
          { text: 'الصيانات المتأخرة، وبكم كيلومتر تأخرت.' },
          { text: 'أيام التوقف لكل مركبة شهريًا وتكلفتها.' },
          { text: 'إنفاق الإصلاح والقطع لكل مركبة مقارنة بمثيلاتها من النوع نفسه.' },
          { text: 'القيمة الدفترية مقابل تكلفة التشغيل السنوية لتوقيت الاستبدال.' },
        ],
      },
      {
        kind: 'text',
        heading: 'مثال: شركة نقل إقليمي لديها 45 مركبة',
        body: `لنتخيل شركة نقل افتراضية لديها 20 رأس قاطرة و15 شاحنة و10 فانات للمدينة، تعمل من فرعين. تُتابع الصيانة بالتاريخ في جدول إكسل، ويعرف المدير بمعظم الأعطال من مكالمة السائق.

يسجّل الفريق المركبات الـ45 في أكسبنس بقراءات عداداتها الحالية ويحدد الفترات لكل نوع. في أول مراجعة تظهر عدة قاطرات متأخرة بالكيلومترات رغم أن الجدول كان يقول «الشهر القادم»، فتُحجز صيانتها أولًا. ويبدأ الفحص قبل الرحلة في اكتشاف الإطارات المتآكلة والأنوار المعطلة قبل التحرك.

بعد ربع سنة من تسجيل التكاليف على كل مركبة، يقارن المدير تكلفة الكيلومتر بين المجموعات الثلاث ويعرف أي الشاحنات القديمة الأعلى تكلفة. ومع القيمة الدفترية من [إهلاك المركبات ودورة حياتها](/features/asset-management)، تصبح لديه خطة استبدال مبنية على أرقام.`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'Can Axpense handle trucks and vans with different service intervals?', a: 'Yes. Intervals are set in kilometres per vehicle, so tractor units, rigid trucks and vans each follow their own schedule, with the km left and overdue vehicles shown clearly.' },
      { q: 'How do I calculate cost per km for my trucks?', a: 'Divide total operating costs for a period by the kilometres driven in it. Axpense adds up fuel, repairs, parts, insurance and other costs per vehicle. See our guide to [vehicle cost per km](/blog/vehicle-cost-per-km).' },
      { q: 'Can drivers complete a pre-trip inspection?', a: 'Yes. You define the checklist once; each inspection records pass or fail per item, and failed items are saved on the vehicle record.' },
      { q: 'Does it work for fleets spread across several depots?', a: 'Yes. All vehicles sit in one system, so head office and each depot see the same maintenance status and costs.' },
      { q: 'How fast can a transport company get started?', a: 'Most teams are live in one day, and onboarding is free. Prices are listed on the [pricing page](/pricing).' },
    ],
    ar: [
      { q: 'هل يدعم أكسبنس شاحنات وفانات بفترات صيانة مختلفة؟', a: 'نعم. تُحدَّد الفترات بالكيلومترات لكل مركبة، فتتبع القاطرة والشاحنة والفان كلٌّ جدولها، مع عرض المتبقي والمتأخر بوضوح.' },
      { q: 'كيف أحسب تكلفة الكيلومتر لشاحناتي؟', a: 'اقسم إجمالي تكاليف التشغيل في الفترة على الكيلومترات المقطوعة فيها. يجمع أكسبنس الوقود والإصلاحات والقطع والتأمين وباقي التكاليف لكل مركبة. اقرأ دليل [تكلفة الكيلومتر للسيارة](/blog/vehicle-cost-per-km).' },
      { q: 'هل يستطيع السائق إجراء الفحص قبل الرحلة؟', a: 'نعم. تحدد القائمة مرة واحدة، ويُسجّل كل فحص مطابق أو غير مطابق لكل بند، وتُحفظ البنود غير المطابقة في سجل المركبة.' },
      { q: 'هل يناسب أسطولًا موزعًا على عدة فروع؟', a: 'نعم. كل المركبات في نظام واحد، فترى الإدارة وكل فرع حالة الصيانة والتكاليف نفسها.' },
      { q: 'ما المدة اللازمة لبدء العمل؟', a: 'تبدأ معظم الفرق خلال يوم واحد، والتهيئة مجانية. الأسعار في [صفحة الأسعار](/pricing).' },
    ],
  },
  relatedPages: ['/fleet-maintenance-software', '/fleet-cost-tracking', '/features/preventive-maintenance', '/resources/fleet-cost-calculator', '/features/spare-parts'],
  relatedIndustries: ['/industries/distribution', '/industries/oil-and-gas', '/industries/construction'],
  relatedArticles: ['vehicle-cost-per-km', 'km-based-preventive-maintenance', 'reduce-vehicle-downtime'],
};
