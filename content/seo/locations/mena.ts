// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const MENA: SeoPage = {
  path: '/locations/mena',
  type: 'location',
  updatedAt: '2026-09-29',
  primaryKeyword: { en: 'fleet management software for the Middle East', ar: 'برنامج إدارة الأسطول في الشرق الأوسط' },
  secondaryKeywords: {
    en: ['fleet management software UAE', 'fleet management system Qatar', 'fleet management Kuwait', 'fleet management software GCC', 'fleet management Jordan', 'fleet management Iraq'],
    ar: ['نظام إدارة الأسطول في قطر', 'نظام إدارة الأسطول في الأردن', 'برنامج إدارة الأسطول في العراق', 'إدارة الأسطول في الخليج'],
  },
  meta: {
    en: {
      title: 'Fleet Management Software for the Middle East',
      description: 'Middle East fleet management software: km-based maintenance, inspections and costs in Arabic and English, from $5.75 per vehicle a month. Book a demo.',
    },
    ar: {
      title: 'برنامج إدارة الأسطول في الشرق الأوسط',
      description: 'برنامج إدارة الأسطول في الشرق الأوسط بالعربية والإنجليزية: صيانة بالكيلومتر وفحوصات وتكلفة كل مركبة، من 5.75 دولار للمركبة شهريًا. احجز عرضًا تجريبيًا.',
    },
  },
  h1: { en: 'Fleet Management Software Across the Middle East & North Africa', ar: 'برنامج إدارة الأسطول في الشرق الأوسط وشمال أفريقيا' },
  navLabel: { en: 'Fleet management in the Middle East', ar: 'إدارة الأسطول في الشرق الأوسط' },
  hero: {
    en: {
      badge: 'Middle East & North Africa',
      intro: 'Axpense is fleet and asset management built for this region: one system for vehicles, drivers, km-based maintenance, inspections and costs, in Arabic and English. Companies across the Gulf, Jordan and Iraq can start free, with prices from $5.75 per vehicle a month and free onboarding.',
    },
    ar: {
      badge: 'الشرق الأوسط وشمال أفريقيا',
      intro: 'أكسبنس منصة لإدارة الأسطول والأصول صُممت لهذه المنطقة: نظام واحد للمركبات والسائقين والصيانة حسب الكيلومترات والفحوصات والتكاليف، بالعربية والإنجليزية. تستطيع الشركات في الخليج والأردن والعراق البدء مجانًا، بأسعار تبدأ من 5.75 دولار لكل مركبة شهريًا وتهيئة مجانية.',
    },
  },
  heroImage: 'dashboard',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'What fleets across the region have in common',
        body: `The Middle East and North Africa is not one market, but company fleets here share a lot. Vehicles work in high heat for much of the year, which is hard on batteries, tyres, cooling systems and air conditioning. Many fleets mix long highway runs with dense city driving. Teams are bilingual or multilingual, with Arabic-speaking managers, drivers from several countries and reports that often go to head office in English.

Most global fleet tools were designed for Europe or North America and added Arabic later, if at all. Axpense is built for companies in Egypt, Saudi Arabia and the wider region, works natively in **Arabic and English**, and is built around the questions fleet teams in the region actually ask: which vehicles are due for service, which inspections failed and what each vehicle costs to run.`,
      },
      {
        kind: 'text',
        heading: 'Fleet management in the Gulf',
        body: `### United Arab Emirates

Fleets in the UAE serve logistics, retail distribution and facilities management across Dubai, Abu Dhabi and the northern emirates, often with long daily distances between free zones, warehouses and customers. Costs are paid in UAE dirhams (AED). Planning services by the kilometres each van actually drives keeps high-utilisation vehicles from running past their intervals.

### Qatar

Qatar’s fleets are concentrated in and around Doha, with construction, facilities services and distribution as major users of company vehicles. Costs are in Qatari riyals (QAR). Short urban trips and long idling in traffic mean the odometer tells you more about wear than the calendar does.

### Kuwait

In Kuwait, oil-sector contractors, construction companies and distributors run pickups and trucks through some of the hottest summers anywhere. Costs are in Kuwaiti dinars (KWD). Checklist inspections of tyres, coolant and air conditioning before the summer season are a common practice worth building into your routine.

### Oman

Oman’s fleets cover long distances: Muscat to Salalah is roughly 1,000 km, and routes to Sohar and the interior cross mountain and desert roads. Costs are in Omani rials (OMR). Km-based maintenance matters most on these long runs, where a vehicle can pass its service interval between two trips to head office.

### Bahrain

Bahrain is compact, so company vehicles such as service vans and delivery cars drive shorter distances but many stops a day. Costs are in Bahraini dinars (BHD). With a smaller fleet, the gain is usually in having one clean record per vehicle instead of a spreadsheet that one person maintains.`,
      },
      {
        kind: 'text',
        heading: 'Fleet management in Jordan and Iraq',
        body: `### Jordan

Jordanian fleets are centred on Amman, with the Desert Highway to Aqaba (around 330 km) carrying much of the freight to and from the port. Hilly terrain in and around Amman is hard on brakes and clutches. Costs are in Jordanian dinars (JOD). Service records and failed inspection items kept on each vehicle make it easier to spot the ones wearing faster than the rest.

### Iraq

In Iraq, oil and gas, construction and distribution companies run vehicles across Baghdad, Basra, Erbil and long intercity routes, often on roads that are tough on suspension and tyres. Costs are in Iraqi dinars (IQD). Recording spare parts from purchase to installation helps teams see which vehicles consume the most parts and why.`,
      },
      {
        kind: 'cards',
        heading: 'What fleet teams in the region manage in Axpense',
        columns: 3,
        items: [
          { icon: 'truck', title: 'Vehicles and drivers', desc: 'One record per vehicle with plate, odometer, status and history, and drivers assigned to each vehicle.' },
          { icon: 'calendar', title: 'Km-based maintenance', desc: 'Service intervals in kilometres with the distance left and overdue alerts. See our [fleet maintenance software](/fleet-maintenance-software).' },
          { icon: 'clipboard', title: 'Inspections', desc: 'Configurable checklists with pass and fail results kept on the vehicle. See our [vehicle inspection software](/vehicle-inspection-software).' },
          { icon: 'package', title: 'Spare parts', desc: 'Parts followed from purchase to installation, so you know which part went into which vehicle.' },
          { icon: 'dollar', title: 'Costs and depreciation', desc: 'Expenses per vehicle by category, and book value over time. See [fleet cost tracking](/fleet-cost-tracking).' },
          { icon: 'chart', title: 'Reports', desc: 'Maintenance status, costs by vehicle and category, and a fleet overview on one dashboard.' },
        ],
      },
      {
        kind: 'text',
        heading: 'Arabic and English, for mixed teams',
        body: `The Axpense interface is available in **Arabic and English**. A supervisor in Doha can log an inspection in Arabic while the operations director in Dubai reads the same vehicle history in English. The Arabic interface uses clear Modern Standard Arabic that reads naturally whether your team says السيارات or المركبات.`,
      },
      {
        kind: 'cards',
        heading: 'Industries across the region',
        columns: 3,
        items: [
          { icon: 'truck', title: 'Logistics', desc: 'Trucks and vans moving freight between ports, free zones and cities.', href: '/industries/logistics' },
          { icon: 'flame', title: 'Oil and gas', desc: 'Field vehicles in Kuwait, Iraq, Oman and the Gulf that need strict checks.', href: '/industries/oil-and-gas' },
          { icon: 'hardhat', title: 'Construction', desc: 'Site pickups and trucks on large projects across the Gulf.', href: '/industries/construction' },
          { icon: 'boxes', title: 'Distribution', desc: 'Delivery fleets serving retail and wholesale customers.', href: '/industries/distribution' },
          { icon: 'wrench', title: 'Field services', desc: 'Facilities and maintenance vans that must be ready for every job.', href: '/industries/field-services' },
        ],
      },
      {
        kind: 'text',
        heading: 'Pricing in US dollars',
        body: `Axpense is priced per vehicle per month, with every feature included. The price per vehicle falls as your fleet grows (minimum 5 vehicles). In US dollars:

| Vehicles | Per vehicle / month | Example |
|---|---|---|
| 5–10 | $10 | 10 vehicles: $100/month |
| 11–25 | $9 | 25 vehicles: $225/month |
| 26–50 | $8.25 | 50 vehicles: $412.50/month |
| 51–100 | $7.50 | 100 vehicles: $750/month |
| 101–250 | $6.50 | 150 vehicles: $975/month |
| 251–500 | $5.75 | 300 vehicles: $1,725/month |
| 500+ | Custom pricing | Talk to Sales |

Billing annually saves 20%: $10 a vehicle becomes $96 a year instead of $120. Prices are set for each market rather than converted daily, and local prices are also available in AED, QAR, KWD, BHD and OMR on the [pricing page](/pricing). You can start free with no credit card, onboarding is free, and most teams are live in one day.`,
      },
      {
        kind: 'text',
        heading: 'Egypt and Saudi Arabia',
        body: `Egypt and Saudi Arabia have their own pages with local pricing and examples: [fleet management software in Egypt](/locations/egypt), priced in Egyptian pounds, and [fleet management in Saudi Arabia](/locations/saudi-arabia), priced in Saudi riyals. For how the platform works overall, see our [fleet management software](/fleet-management-software) page.`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'ما يجمع أساطيل المنطقة',
        body: `الشرق الأوسط وشمال أفريقيا ليس سوقًا واحدة، لكن أساطيل الشركات فيه تتشابه كثيرًا. تعمل المركبات في حرارة مرتفعة معظم العام، وهو ما يرهق البطاريات والإطارات وأنظمة التبريد والتكييف. وتجمع أساطيل كثيرة بين رحلات طويلة على الطرق السريعة وقيادة مزدحمة داخل المدن. والفرق ثنائية اللغة أو متعددة اللغات: مديرون يتحدثون العربية، وسائقون من جنسيات مختلفة، وتقارير تُرفع غالبًا للمقر الرئيسي بالإنجليزية.

معظم أدوات إدارة الأسطول العالمية صُممت لأوروبا أو أمريكا الشمالية وأُضيفت إليها العربية لاحقًا إن أُضيفت. أما أكسبنس فمصمم للشركات في مصر والسعودية وباقي المنطقة، ويعمل **بالعربية والإنجليزية** بشكل أصيل، وبُني حول الأسئلة التي تطرحها فرق الأسطول في المنطقة فعلًا: أي المركبات مستحقة للصيانة، وأي الفحوصات لم تجتز، وكم تكلّف كل مركبة.`,
      },
      {
        kind: 'text',
        heading: 'إدارة الأسطول في دول الخليج',
        body: `### الإمارات

تخدم الأساطيل في الإمارات النقل والتوزيع وإدارة المرافق في دبي وأبوظبي والإمارات الشمالية، وغالبًا بمسافات يومية طويلة بين المناطق الحرة والمستودعات والعملاء. وتُدفع التكاليف بالدرهم الإماراتي. تخطيط الصيانة حسب الكيلومترات الفعلية لكل مركبة يمنع المركبات كثيفة الاستخدام من تجاوز موعد صيانتها.

### قطر

تتركز أساطيل قطر في الدوحة وما حولها، وتُعد المقاولات وخدمات المرافق والتوزيع من أكبر مستخدمي مركبات الشركات. والتكاليف بالريال القطري. الرحلات القصيرة داخل المدينة والتوقف الطويل في الزحام تجعل العداد أصدق من التقويم في الدلالة على الاستهلاك.

### الكويت

في الكويت يشغّل مقاولو القطاع النفطي وشركات المقاولات والتوزيع سيارات بيك أب وشاحنات في صيف من الأشد حرارة. والتكاليف بالدينار الكويتي. فحص الإطارات وسائل التبريد والتكييف بقوائم فحص قبل الصيف ممارسة شائعة تستحق أن تكون جزءًا من روتينك.

### عُمان

تقطع أساطيل عُمان مسافات طويلة: من مسقط إلى صلالة نحو 1,000 كم، والطرق إلى صحار والداخلية تعبر جبالًا وصحراء. والتكاليف بالريال العُماني. الصيانة حسب الكيلومترات أهم ما تكون في هذه الرحلات الطويلة، حيث قد تتجاوز المركبة موعد صيانتها بين زيارتين للمقر.

### البحرين

البحرين صغيرة المساحة، فمركبات الشركات مثل سيارات الخدمة والتوصيل تقطع مسافات أقصر لكنها تتوقف مرات كثيرة يوميًا. والتكاليف بالدينار البحريني. ومع الأسطول الأصغر تكون الفائدة غالبًا في سجل واضح لكل مركبة بدلًا من جدول يعتمد على شخص واحد.`,
      },
      {
        kind: 'text',
        heading: 'إدارة الأسطول في الأردن والعراق',
        body: `### الأردن

تتمركز الأساطيل الأردنية في عمّان، ويحمل الطريق الصحراوي إلى العقبة (نحو 330 كم) جزءًا كبيرًا من الشحن من الميناء وإليه. والطبيعة الجبلية في عمّان وما حولها ترهق الفرامل والدبرياج. والتكاليف بالدينار الأردني. سجلات الصيانة وبنود الفحص غير المطابقة المحفوظة على كل مركبة تسهّل اكتشاف المركبات التي تُستهلك أسرع من غيرها.

### العراق

في العراق تشغّل شركات النفط والغاز والمقاولات والتوزيع مركبات في بغداد والبصرة وأربيل وعلى طرق طويلة بين المدن، وكثير منها طرق ترهق نظام التعليق والإطارات. والتكاليف بالدينار العراقي. تسجيل قطع الغيار من الشراء حتى التركيب يساعد الفرق على معرفة المركبات الأكثر استهلاكًا للقطع وسبب ذلك.`,
      },
      {
        kind: 'cards',
        heading: 'ما تديره فرق الأسطول في المنطقة عبر أكسبنس',
        columns: 3,
        items: [
          { icon: 'truck', title: 'المركبات والسائقون', desc: 'سجل لكل مركبة برقم اللوحة والعداد والحالة والسجل، مع تعيين السائقين على المركبات.' },
          { icon: 'calendar', title: 'صيانة حسب الكيلومترات', desc: 'فترات صيانة بالكيلومتر مع المسافة المتبقية وتنبيه بالمتأخر. اطّلع على [برنامج صيانة الأسطول](/fleet-maintenance-software).' },
          { icon: 'clipboard', title: 'الفحوصات', desc: 'قوائم فحص قابلة للتخصيص تُحفظ نتائجها في سجل المركبة. اطّلع على [برنامج فحص المركبات](/vehicle-inspection-software).' },
          { icon: 'package', title: 'قطع الغيار', desc: 'متابعة القطع من الشراء حتى التركيب لمعرفة أي قطعة رُكّبت في أي مركبة.' },
          { icon: 'dollar', title: 'التكاليف والإهلاك', desc: 'مصروفات كل مركبة حسب الفئة، والقيمة الدفترية بمرور الوقت. اطّلع على [إدارة تكاليف الأسطول](/fleet-cost-tracking).' },
          { icon: 'chart', title: 'التقارير', desc: 'حالة الصيانة والتكاليف حسب المركبة والفئة ونظرة عامة على الأسطول في لوحة واحدة.' },
        ],
      },
      {
        kind: 'text',
        heading: 'العربية والإنجليزية لفرق متنوعة',
        body: `واجهة أكسبنس متاحة **بالعربية والإنجليزية**. يستطيع مشرف في الدوحة تسجيل فحص بالعربية، بينما يقرأ مدير العمليات في دبي سجل المركبة نفسها بالإنجليزية. وتستخدم الواجهة العربية فصحى واضحة تناسب فريقك سواء كان يقول السيارات أو المركبات.`,
      },
      {
        kind: 'cards',
        heading: 'قطاعات في أنحاء المنطقة',
        columns: 3,
        items: [
          { icon: 'truck', title: 'النقل والشحن', desc: 'شاحنات وسيارات نقل بين الموانئ والمناطق الحرة والمدن.', href: '/industries/logistics' },
          { icon: 'flame', title: 'البترول والغاز', desc: 'مركبات ميدانية في الكويت والعراق وعُمان والخليج تحتاج فحصًا صارمًا.', href: '/industries/oil-and-gas' },
          { icon: 'hardhat', title: 'المقاولات', desc: 'سيارات بيك أب وشاحنات في مشروعات كبيرة في أنحاء الخليج.', href: '/industries/construction' },
          { icon: 'boxes', title: 'التوزيع', desc: 'أساطيل توصيل تخدم عملاء التجزئة والجملة.', href: '/industries/distribution' },
          { icon: 'wrench', title: 'الخدمات الميدانية', desc: 'سيارات المرافق والصيانة التي يجب أن تكون جاهزة لكل مهمة.', href: '/industries/field-services' },
        ],
      },
      {
        kind: 'text',
        heading: 'الأسعار بالدولار الأمريكي',
        body: `يُسعَّر أكسبنس لكل مركبة شهريًا، ويشمل كل اشتراك جميع المزايا. وينخفض سعر المركبة كلما كبر أسطولك (الحد الأدنى 5 مركبات). بالدولار الأمريكي:

| عدد المركبات | السعر لكل مركبة شهريًا | مثال |
|---|---|---|
| 5–10 | 10 دولارات | 10 مركبات: 100 دولار شهريًا |
| 11–25 | 9 دولارات | 25 مركبة: 225 دولارًا شهريًا |
| 26–50 | 8.25 دولار | 50 مركبة: 412.50 دولار شهريًا |
| 51–100 | 7.50 دولار | 100 مركبة: 750 دولارًا شهريًا |
| 101–250 | 6.50 دولار | 150 مركبة: 975 دولارًا شهريًا |
| 251–500 | 5.75 دولار | 300 مركبة: 1,725 دولارًا شهريًا |
| أكثر من 500 | تسعير خاص | تحدث مع المبيعات |

الدفع السنوي يوفّر 20%: فالمركبة بسعر 10 دولارات شهريًا تكلّف 96 دولارًا سنويًا بدلًا من 120. والأسعار محددة لكل سوق ولا تُحوَّل يوميًا، وتتوفر أيضًا أسعار محلية بالدرهم الإماراتي والريال القطري والدينار الكويتي والدينار البحريني والريال العماني في [صفحة الأسعار](/pricing). يمكنك البدء مجانًا دون بطاقة ائتمان، والتهيئة مجانية، ومعظم الفرق تبدأ العمل خلال يوم واحد.`,
      },
      {
        kind: 'text',
        heading: 'مصر والسعودية',
        body: `لمصر والسعودية صفحات خاصة بأسعار وأمثلة محلية: [برنامج إدارة الأسطول في مصر](/locations/egypt) بالجنيه المصري، و[نظام إدارة الأسطول في السعودية](/locations/saudi-arabia) بالريال السعودي. ولمعرفة طريقة عمل المنصة ككل، اطّلع على صفحة [برنامج إدارة الأسطول](/fleet-management-software).`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'Which countries can use Axpense?', a: 'Axpense is available to companies across the Middle East and North Africa, including the UAE, Qatar, Kuwait, Oman, Bahrain, Jordan and Iraq, as well as Egypt and Saudi Arabia, which have their own pages.' },
      { q: 'How much does Axpense cost outside Egypt and Saudi Arabia?', a: 'Axpense is priced per vehicle per month with every feature included: $10 per vehicle for 5–10 vehicles, falling to $5.75 for 251–500 vehicles, and billing annually saves 20%. Local prices are also available in AED, QAR, KWD, BHD and OMR on the [pricing page](/pricing). Fleets above 500 vehicles get custom pricing, and you can start free with no credit card.' },
      { q: 'Can a team with Arabic and English speakers share one system?', a: 'Yes. Each person chooses Arabic or English, and everyone works on the same vehicle records, inspections and reports.' },
      { q: 'How fast can a company in the Gulf get started?', a: 'Most teams are live in one day. Onboarding is free: we help you import your vehicles, set your first service intervals and show your team the routine.' },
      { q: 'Does Axpense suit fleets that drive very long distances?', a: 'Yes. Maintenance is scheduled by kilometres, so vehicles on long routes, such as Muscat to Salalah or Amman to Aqaba, are flagged for service when they reach their interval rather than on a fixed date.' },
      { q: 'Can we record expenses in our local currency?', a: 'Yes. Expenses can be recorded in dirhams, riyals or dinars, and reports show totals in the currency you choose.', requires: 'multiCurrency' },
    ],
    ar: [
      { q: 'ما الدول التي يمكنها استخدام أكسبنس؟', a: 'أكسبنس متاح للشركات في أنحاء الشرق الأوسط وشمال أفريقيا، ومنها الإمارات وقطر والكويت وعُمان والبحرين والأردن والعراق، إضافة إلى مصر والسعودية ولكلٍّ منهما صفحة خاصة.' },
      { q: 'كم تكلفة أكسبنس خارج مصر والسعودية؟', a: 'يُسعَّر أكسبنس لكل مركبة شهريًا مع كل المزايا: 10 دولارات للمركبة لأسطول من 5 إلى 10 مركبات، وينخفض إلى 5.75 دولار من 251 إلى 500 مركبة، والدفع السنوي يوفّر 20%. وتتوفر أيضًا أسعار محلية بالدرهم الإماراتي والريال القطري والدينار الكويتي والدينار البحريني والريال العماني في [صفحة الأسعار](/pricing). وللأساطيل الأكبر من 500 مركبة تسعير خاص، ويمكنك البدء مجانًا دون بطاقة ائتمان.' },
      { q: 'هل يمكن لفريق يتحدث العربية والإنجليزية العمل على نظام واحد؟', a: 'نعم. يختار كل شخص العربية أو الإنجليزية، ويعمل الجميع على سجلات المركبات والفحوصات والتقارير نفسها.' },
      { q: 'متى تستطيع شركة في الخليج بدء العمل؟', a: 'تبدأ معظم الفرق العمل خلال يوم واحد. التهيئة مجانية: نساعدك في إدخال مركباتك وضبط أول فترات صيانة وتعريف فريقك بالروتين.' },
      { q: 'هل يناسب أكسبنس الأساطيل التي تقطع مسافات طويلة جدًا؟', a: 'نعم. تُجدول الصيانة حسب الكيلومترات، فتظهر المركبات على الطرق الطويلة، مثل مسقط إلى صلالة أو عمّان إلى العقبة، للصيانة عند بلوغ فترتها لا في تاريخ ثابت.' },
      { q: 'هل يمكن تسجيل المصروفات بالعملة المحلية؟', a: 'نعم. يمكن تسجيل المصروفات بالدرهم أو الريال أو الدينار، وتعرض التقارير الإجماليات بالعملة التي تختارها.', requires: 'multiCurrency' },
    ],
  },
  relatedPages: ['/fleet-management-software', '/fleet-maintenance-software', '/fleet-cost-tracking', '/vehicle-inspection-software', '/pricing', '/locations/egypt', '/locations/saudi-arabia'],
  relatedIndustries: ['/industries/logistics', '/industries/oil-and-gas', '/industries/construction', '/industries/distribution', '/industries/field-services'],
  relatedArticles: ['what-is-fleet-management-software', 'fleet-management-excel-vs-software', 'reduce-vehicle-downtime'],
  ogLocale: { en: 'en_US', ar: 'ar_AR' },
  parent: '/fleet-management-software',
};
