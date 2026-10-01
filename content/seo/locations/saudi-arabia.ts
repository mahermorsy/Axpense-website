// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const SAUDI_ARABIA: SeoPage = {
  path: '/locations/saudi-arabia',
  type: 'location',
  updatedAt: '2026-09-29',
  primaryKeyword: { en: 'fleet management software in Saudi Arabia', ar: 'نظام إدارة الأسطول في السعودية' },
  secondaryKeywords: {
    en: ['fleet management system Saudi Arabia', 'fleet management KSA', 'vehicle maintenance system Saudi Arabia', 'fleet management Riyadh', 'company vehicle management Saudi Arabia'],
    ar: ['نظام إدارة المركبات', 'نظام صيانة المركبات', 'إدارة أسطول الشركات في السعودية'],
  },
  meta: {
    en: {
      title: 'Fleet Management Software in Saudi Arabia',
      description: 'Fleet management software in Saudi Arabia: km-based servicing, inspections, per-vehicle costs and SAR pricing, in Arabic and English. Book a demo.',
    },
    ar: {
      title: 'نظام إدارة الأسطول في السعودية',
      description: 'نظام إدارة الأسطول في السعودية بالعربية والإنجليزية: صيانة المركبات حسب الكيلومترات، وفحوصات، وتكلفة كل مركبة، وأسعار بالريال. احجز عرضًا تجريبيًا.',
    },
  },
  h1: { en: 'Fleet Management Software for Saudi Businesses', ar: 'نظام إدارة أسطول المركبات للشركات في السعودية' },
  navLabel: { en: 'Fleet management in Saudi Arabia', ar: 'إدارة الأسطول في السعودية' },
  hero: {
    en: {
      badge: 'Saudi Arabia',
      intro: 'Axpense gives Saudi companies one system for their vehicles, drivers, km-based maintenance, inspections and costs, in Arabic and English, with prices in Saudi riyals. Onboarding is free and most teams are live in one day.',
    },
    ar: {
      badge: 'السعودية',
      intro: 'يمنح أكسبنس الشركات في السعودية نظامًا واحدًا لمركباتها وسائقيها وصيانتها حسب الكيلومترات وفحوصاتها وتكاليفها، بالعربية والإنجليزية، وبأسعار بالريال السعودي. التهيئة مجانية، ومعظم الفرق تبدأ العمل خلال يوم واحد.',
    },
  },
  heroImage: 'maintenance',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'Fleets in Saudi Arabia cover long distances in tough conditions',
        body: `Saudi fleets are defined by distance. The road from Riyadh to Jeddah is around 950 km, and Riyadh to Dammam is roughly 400 km, so a truck or pickup on regular intercity work can add tens of thousands of kilometres in a few months. Summer heat is hard on batteries, tyres, cooling systems and air conditioning, and sand and dust shorten the life of air filters.

At the same time, the economy is growing and diversifying. Construction, logistics, energy and retail distribution all depend on company vehicles, and many businesses are adding vehicles faster than their spreadsheets can keep up. When a fleet grows from twenty vehicles to eighty, tracking services by memory stops working.`,
      },
      {
        kind: 'text',
        heading: 'Maintenance planned by kilometres, not by the calendar',
        body: `Because Saudi vehicles rack up distance so quickly, a fixed-date service plan tends to be late for high-mileage vehicles and early for the ones parked most of the week. Axpense schedules preventive maintenance by kilometre: you set the interval for each service, following the manufacturer’s schedule, and the system shows the kilometres left until it is due and flags anything overdue.

For example, a pickup on the Riyadh to Dammam run that drives 800 km a day reaches a 10,000 km oil-change interval in under two weeks, while a manager’s car in Jeddah may take months. Each gets its reminder at the right time. The full maintenance workflow is covered on our [fleet maintenance software](/fleet-maintenance-software) page.`,
      },
      {
        kind: 'text',
        heading: 'Keeping periodic inspection details on the vehicle record',
        body: `Vehicles in Saudi Arabia go through the periodic technical inspection known as **الفحص الدوري**. Axpense helps teams record and keep track of inspection dates and related documents as part of each vehicle’s record, alongside its service history and expenses, so the information is in one place when someone needs it.

Separately, your own internal inspections run on Axpense checklists: drivers or supervisors check tyres, lights, brakes, fluids and body condition, and any failed item stays on the vehicle’s record for follow-up. See our [vehicle inspection software](/vehicle-inspection-software) for how checklists work.`,
      },
      {
        kind: 'cards',
        heading: 'What Saudi fleet teams manage in Axpense',
        columns: 3,
        items: [
          { icon: 'truck', title: 'Vehicle registry', desc: 'Plate, make, model, odometer, status and history for every vehicle in the fleet.' },
          { icon: 'users', title: 'Drivers', desc: 'Drivers assigned to vehicles, which matters when drivers rotate between shifts and sites.' },
          { icon: 'package', title: 'Spare parts', desc: 'Parts tracked from purchase to installation, with the vehicle each one went into.' },
          { icon: 'dollar', title: 'Expenses', desc: 'Repairs, parts, insurance, registration and other costs recorded per vehicle, by category.' },
          { icon: 'trending', title: 'Depreciation', desc: 'Book value over time for each vehicle, to plan replacements with finance.' },
          { icon: 'chart', title: 'Reports and dashboards', desc: 'Services due, costs by vehicle and category, and a fleet overview on one screen.' },
        ],
      },
      {
        kind: 'text',
        heading: 'Running costs, vehicle by vehicle',
        body: `Heavy use means heavy running costs, and they are rarely spread evenly. Axpense records every expense against the vehicle it belongs to, so you can see which vehicles cost the most, compare cost per kilometre across similar vehicles and decide which ones to replace. Depreciation (استهلاك or إهلاك, depending on who you ask in the finance team) is tracked as book value over time.

For formulas and a worked example in SAR, see [fleet cost tracking](/fleet-cost-tracking).`,
      },
      {
        kind: 'text',
        heading: 'Arabic and English on the same data',
        body: `Saudi fleet teams are often mixed: Arabic-speaking managers, drivers and technicians from many countries, and reports that go to management in English. Axpense runs in **Arabic and English**, and each person chooses their language while working on the same vehicle records.

The Arabic interface uses the terms Saudi teams expect, such as المركبات for vehicles, نظام إدارة المركبات for the system itself and صيانة المركبات for maintenance.`,
      },
      {
        kind: 'cards',
        heading: 'Industries in Saudi Arabia we work with',
        columns: 3,
        items: [
          { icon: 'truck', title: 'Logistics and transport', desc: 'Intercity trucking between Riyadh, Jeddah, Dammam and the regions.', href: '/industries/logistics' },
          { icon: 'hardhat', title: 'Construction', desc: 'Pickups, trucks and site vehicles on large, long-running projects.', href: '/industries/construction' },
          { icon: 'flame', title: 'Oil and gas', desc: 'Field vehicles in the Eastern Province that need strict pre-trip checks.', href: '/industries/oil-and-gas' },
          { icon: 'boxes', title: 'Distribution', desc: 'Delivery vans serving retail and wholesale customers in the major cities.', href: '/industries/distribution' },
          { icon: 'wrench', title: 'Field services', desc: 'Technician vehicles for facilities, maintenance and installation contracts.', href: '/industries/field-services' },
        ],
      },
      {
        kind: 'text',
        heading: 'Pricing in Saudi riyals',
        body: `Axpense is priced per vehicle per month in SAR, with every feature included. The price per vehicle falls as your fleet grows (minimum 5 vehicles):

| Vehicles | Per vehicle / month | Example |
|---|---|---|
| 5–10 | 38 SAR | 10 vehicles: 380 SAR/month |
| 11–25 | 34 SAR | 25 vehicles: 850 SAR/month |
| 26–50 | 31 SAR | 50 vehicles: 1,550 SAR/month |
| 51–100 | 28 SAR | 100 vehicles: 2,800 SAR/month |
| 101–250 | 24 SAR | 150 vehicles: 3,600 SAR/month |
| 251–500 | 22 SAR | 300 vehicles: 6,600 SAR/month |
| 500+ | Custom pricing | Talk to Sales |

Billing annually saves 20%: 25 vehicles cost 8,160 SAR a year instead of 10,200. You can start free with no credit card, and onboarding is free. See the [pricing page](/pricing) for details.`,
      },
      {
        kind: 'text',
        heading: 'Operating in Egypt or elsewhere in the region too?',
        body: `If your company also runs vehicles in Egypt or other Gulf countries, see [fleet management in Egypt](/locations/egypt) and [fleet management across the Middle East](/locations/mena). For a general overview, start with our [fleet management software](/fleet-management-software).`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'أساطيل تقطع مسافات طويلة في ظروف صعبة',
        body: `المسافة هي ما يميّز الأساطيل في السعودية. الطريق من الرياض إلى جدة نحو 950 كم، ومن الرياض إلى الدمام قرابة 400 كم، فالشاحنة أو البيك أب التي تعمل على خطوط بين المدن تضيف عشرات الآلاف من الكيلومترات في بضعة أشهر. وحرارة الصيف قاسية على البطاريات والإطارات وأنظمة التبريد والتكييف، والرمال والغبار تقصّر عمر فلاتر الهواء.

وفي الوقت نفسه ينمو الاقتصاد ويتنوّع. المقاولات والنقل والطاقة والتوزيع كلها تعتمد على مركبات الشركات، وكثير من الشركات تضيف مركبات أسرع مما تستوعبه جداول الإكسل. وعندما يكبر الأسطول من عشرين مركبة إلى ثمانين، تتوقف متابعة الصيانة من الذاكرة عن العمل.`,
      },
      {
        kind: 'text',
        heading: 'صيانة المركبات حسب الكيلومترات لا حسب التقويم',
        body: `لأن المركبات في السعودية تقطع المسافات بسرعة، فإن خطة الصيانة بتاريخ ثابت تتأخر غالبًا مع المركبات كثيرة الاستخدام وتسبق موعدها مع المركبات المتوقفة معظم الأسبوع. يجدول أكسبنس الصيانة الوقائية بالكيلومتر: تحدد فترة كل صيانة وفق جدول الشركة المصنّعة، ويعرض النظام الكيلومترات المتبقية حتى موعدها وينبّه إلى المتأخر منها.

مثلًا، بيك أب على خط الرياض والدمام يقطع 800 كم يوميًا يصل إلى فترة تغيير زيت كل 10,000 كم في أقل من أسبوعين، بينما قد تحتاج سيارة مدير في جدة شهورًا. وكلٌّ منهما يصله التنبيه في الوقت المناسب. التفاصيل الكاملة في صفحة [برنامج صيانة الأسطول](/fleet-maintenance-software).`,
      },
      {
        kind: 'text',
        heading: 'بيانات الفحص الدوري في سجل المركبة',
        body: `تخضع المركبات في السعودية لـ**الفحص الدوري**. يساعد أكسبنس الفرق على تسجيل مواعيد الفحص والمستندات المتعلقة به ومتابعتها ضمن سجل كل مركبة، بجوار سجل الصيانة والمصروفات، لتكون المعلومات في مكان واحد عند الحاجة.

وبشكل منفصل، تعمل فحوصاتك الداخلية بقوائم فحص في أكسبنس: يفحص السائقون أو المشرفون الإطارات والأنوار والفرامل والسوائل وحالة الهيكل، ويبقى أي بند غير مطابق في سجل المركبة للمتابعة. اطّلع على [برنامج فحص المركبات](/vehicle-inspection-software) لمعرفة طريقة عمل القوائم.`,
      },
      {
        kind: 'cards',
        heading: 'ما تديره فرق الأسطول في السعودية عبر أكسبنس',
        columns: 3,
        items: [
          { icon: 'truck', title: 'سجل المركبات', desc: 'رقم اللوحة والماركة والطراز والعداد والحالة والسجل لكل مركبة في الأسطول.' },
          { icon: 'users', title: 'السائقون', desc: 'تعيين السائقين على المركبات، وهو أمر مهم عند تناوب السائقين بين الورديات والمواقع.' },
          { icon: 'package', title: 'قطع الغيار', desc: 'متابعة القطع من الشراء حتى التركيب ومعرفة المركبة التي رُكّبت فيها كل قطعة.' },
          { icon: 'dollar', title: 'المصروفات', desc: 'الإصلاحات وقطع الغيار والتأمين والتسجيل وغيرها مسجلة لكل مركبة حسب الفئة.' },
          { icon: 'trending', title: 'الاستهلاك', desc: 'القيمة الدفترية لكل مركبة بمرور الوقت، للتخطيط للاستبدال مع الإدارة المالية.' },
          { icon: 'chart', title: 'التقارير ولوحات المتابعة', desc: 'الصيانة المستحقة والتكاليف حسب المركبة والفئة ونظرة عامة على الأسطول في شاشة واحدة.' },
        ],
      },
      {
        kind: 'text',
        heading: 'تكلفة تشغيل كل مركبة على حدة',
        body: `الاستخدام المكثف يعني تكاليف تشغيل مرتفعة، ونادرًا ما تتوزع بالتساوي. يسجّل أكسبنس كل مصروف على المركبة التي يخصها، فتعرف أي المركبات أعلى تكلفة، وتقارن تكلفة الكيلومتر بين المركبات المتشابهة، وتقرر أيها تستبدل. ويُتابَع الاستهلاك (أو الإهلاك كما تسميه بعض الإدارات المالية) كقيمة دفترية بمرور الوقت.

للمعادلات ومثال محلول بالريال، اطّلع على [إدارة تكاليف الأسطول](/fleet-cost-tracking).`,
      },
      {
        kind: 'text',
        heading: 'العربية والإنجليزية على البيانات نفسها',
        body: `فرق الأسطول في السعودية متنوعة غالبًا: مديرون يتحدثون العربية، وسائقون وفنيون من جنسيات مختلفة، وتقارير تُرفع للإدارة بالإنجليزية. يعمل أكسبنس **بالعربية والإنجليزية**، ويختار كل شخص لغته وهو يعمل على سجلات المركبات نفسها.

وتستخدم الواجهة العربية المصطلحات المألوفة للفرق في المملكة، مثل المركبات، ونظام إدارة المركبات، وصيانة المركبات.`,
      },
      {
        kind: 'cards',
        heading: 'قطاعات نخدمها في السعودية',
        columns: 3,
        items: [
          { icon: 'truck', title: 'النقل والشحن', desc: 'نقل بين المدن من الرياض وجدة والدمام إلى المناطق.', href: '/industries/logistics' },
          { icon: 'hardhat', title: 'المقاولات', desc: 'سيارات بيك أب وشاحنات ومركبات مواقع في مشروعات كبيرة طويلة المدة.', href: '/industries/construction' },
          { icon: 'flame', title: 'البترول والغاز', desc: 'مركبات ميدانية في المنطقة الشرقية تحتاج فحصًا صارمًا قبل كل رحلة.', href: '/industries/oil-and-gas' },
          { icon: 'boxes', title: 'التوزيع', desc: 'مركبات توصيل تخدم عملاء التجزئة والجملة في المدن الكبرى.', href: '/industries/distribution' },
          { icon: 'wrench', title: 'الخدمات الميدانية', desc: 'مركبات الفنيين لعقود تشغيل المرافق والصيانة والتركيب.', href: '/industries/field-services' },
        ],
      },
      {
        kind: 'text',
        heading: 'الأسعار بالريال السعودي',
        body: `يُسعَّر أكسبنس بالريال لكل مركبة شهريًا، ويشمل كل اشتراك جميع المزايا. وينخفض سعر المركبة كلما كبر أسطولك (الحد الأدنى 5 مركبات):

| عدد المركبات | السعر لكل مركبة شهريًا | مثال |
|---|---|---|
| 5–10 | 38 ر.س | 10 مركبات: 380 ر.س شهريًا |
| 11–25 | 34 ر.س | 25 مركبة: 850 ر.س شهريًا |
| 26–50 | 31 ر.س | 50 مركبة: 1,550 ر.س شهريًا |
| 51–100 | 28 ر.س | 100 مركبة: 2,800 ر.س شهريًا |
| 101–250 | 24 ر.س | 150 مركبة: 3,600 ر.س شهريًا |
| 251–500 | 22 ر.س | 300 مركبة: 6,600 ر.س شهريًا |
| أكثر من 500 | تسعير خاص | تحدث مع المبيعات |

الدفع السنوي يوفّر 20%: فتكلّف 25 مركبة 8,160 ر.س سنويًا بدلًا من 10,200. يمكنك البدء مجانًا دون بطاقة ائتمان، والتهيئة مجانية. التفاصيل في [صفحة الأسعار](/pricing).`,
      },
      {
        kind: 'text',
        heading: 'تعمل أيضًا في مصر أو في دول أخرى بالمنطقة؟',
        body: `إذا كانت شركتك تشغّل مركبات في مصر أو في دول الخليج الأخرى، اطّلع على [برنامج إدارة الأسطول في مصر](/locations/egypt) و[إدارة الأسطول في الشرق الأوسط](/locations/mena). وللنظرة العامة ابدأ بصفحة [نظام إدارة الأسطول](/fleet-management-software).`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'Is Axpense available for companies in Saudi Arabia?', a: 'Yes. Axpense serves companies in Saudi Arabia, Egypt and the wider Middle East, with an Arabic and English interface and prices in Saudi riyals.' },
      { q: 'How much does Axpense cost in Saudi Arabia?', a: 'Axpense is priced per vehicle per month with every feature included: 38 SAR per vehicle for 5–10 vehicles, falling to 22 SAR for 251–500 vehicles. For example, 25 vehicles cost 850 SAR a month, and billing annually saves 20%. Fleets above 500 vehicles get custom pricing, and you can start free with no credit card. See the [pricing page](/pricing).' },
      { q: 'Can we keep الفحص الدوري dates on each vehicle?', a: 'Yes. Teams can record and keep track of periodic inspection dates and related documents as part of each vehicle’s record, next to its service history and expenses.' },
      { q: 'Is Axpense suitable for high-mileage intercity fleets?', a: 'Yes. Maintenance is scheduled by kilometres driven, so vehicles that cover long distances are flagged for service when they reach their interval, not on a fixed date.' },
      { q: 'How long does it take to go live?', a: 'Most teams are live in one day. Onboarding is free, and we help you import your vehicles and set your first service intervals.' },
    ],
    ar: [
      { q: 'هل أكسبنس متاح للشركات في السعودية؟', a: 'نعم. يخدم أكسبنس الشركات في السعودية ومصر والشرق الأوسط، بواجهة عربية وإنجليزية وأسعار بالريال السعودي.' },
      { q: 'كم تكلفة أكسبنس في السعودية؟', a: 'يُسعَّر أكسبنس لكل مركبة شهريًا مع كل المزايا: 38 ريالًا للمركبة لأسطول من 5 إلى 10 مركبات، وينخفض إلى 22 ريالًا من 251 إلى 500 مركبة. فمثلًا تكلّف 25 مركبة 850 ريالًا شهريًا، والدفع السنوي يوفّر 20%. وللأساطيل الأكبر من 500 مركبة تسعير خاص، ويمكنك البدء مجانًا دون بطاقة ائتمان. التفاصيل في [صفحة الأسعار](/pricing).' },
      { q: 'هل يمكن حفظ مواعيد الفحص الدوري لكل مركبة؟', a: 'نعم. يمكن للفرق تسجيل مواعيد الفحص الدوري والمستندات المتعلقة به ومتابعتها ضمن سجل كل مركبة، بجوار سجل الصيانة والمصروفات.' },
      { q: 'هل يناسب النظام الأساطيل التي تقطع مسافات طويلة بين المدن؟', a: 'نعم. تُجدول الصيانة حسب الكيلومترات المقطوعة، فتظهر المركبات التي تقطع مسافات طويلة للصيانة عند بلوغ فترتها، لا في تاريخ ثابت.' },
      { q: 'كم يستغرق بدء العمل؟', a: 'تبدأ معظم الفرق العمل خلال يوم واحد. التهيئة مجانية، ونساعدك في إدخال مركباتك وضبط أول فترات صيانة.' },
    ],
  },
  relatedPages: ['/fleet-management-software', '/fleet-maintenance-software', '/fleet-cost-tracking', '/vehicle-inspection-software', '/pricing', '/locations/egypt', '/locations/mena'],
  relatedIndustries: ['/industries/logistics', '/industries/construction', '/industries/oil-and-gas', '/industries/distribution', '/industries/field-services'],
  relatedArticles: ['km-based-preventive-maintenance', 'daily-vehicle-inspection-checklist', 'fleet-total-cost-of-ownership'],
  hreflang: { en: 'en-SA', ar: 'ar-SA' },
  ogLocale: { en: 'en_US', ar: 'ar_SA' },
  parent: '/fleet-management-software',
};
