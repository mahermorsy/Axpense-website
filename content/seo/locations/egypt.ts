// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const EGYPT: SeoPage = {
  path: '/locations/egypt',
  type: 'location',
  updatedAt: '2026-09-29',
  primaryKeyword: { en: 'fleet management software in Egypt', ar: 'برنامج إدارة الأسطول في مصر' },
  secondaryKeywords: {
    en: ['fleet management system Egypt', 'vehicle maintenance software Egypt', 'fleet management Cairo', 'company car management Egypt', 'fleet expense management Egypt'],
    ar: ['برنامج إدارة السيارات للشركات في مصر', 'برنامج صيانة السيارات في مصر', 'إدارة مصروفات السيارات'],
  },
  meta: {
    en: {
      title: 'Fleet Management Software in Egypt',
      description: 'Fleet management software in Egypt with km-based service reminders, per-vehicle costs, EGP pricing and an Arabic interface. Live in one day. Book a demo.',
    },
    ar: {
      title: 'برنامج إدارة الأسطول في مصر',
      description: 'برنامج إدارة الأسطول في مصر بالعربية: تنبيهات صيانة حسب الكيلومترات، ومصروفات كل سيارة وأسعار بالجنيه، وتشغيل خلال يوم واحد. احجز عرضًا تجريبيًا.',
    },
  },
  h1: { en: 'Fleet Management Software for Companies in Egypt', ar: 'برنامج إدارة أسطول السيارات للشركات في مصر' },
  navLabel: { en: 'Fleet management in Egypt', ar: 'إدارة الأسطول في مصر' },
  hero: {
    en: {
      badge: 'Egypt',
      intro: 'Axpense helps Egyptian companies keep every vehicle, service, driver and expense in one system, in Arabic or English, with prices in Egyptian pounds. Most teams are live in one day, and onboarding is free.',
    },
    ar: {
      badge: 'مصر',
      intro: 'يساعد أكسبنس الشركات في مصر على جمع كل سيارة وكل صيانة وكل سائق وكل مصروف في برنامج واحد، بالعربية أو الإنجليزية، وبأسعار بالجنيه المصري. معظم الفرق تبدأ العمل خلال يوم واحد، والتهيئة مجانية.',
    },
  },
  heroImage: 'vehicles',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'Running a company fleet in Egypt',
        body: `Egyptian company fleets work hard. Distribution vans cover Greater Cairo in heavy traffic every day, pickups (ربع نقل and نص نقل) carry goods between the capital, Alexandria and the Delta, and trucks run the long roads to Upper Egypt and the Red Sea. Stop-start city driving and long highway runs wear vehicles differently, so a service plan based on the calendar alone rarely matches reality.

Costs are the other pressure. Many spare parts are imported, and their prices can change quickly, so a repair that cost one amount last year may cost much more today. Finance teams want to know which vehicles are worth keeping, and operations teams need vehicles on the road tomorrow morning. Both need the same records, and in many companies those records still live in an Excel sheet, a paper logbook at the workshop and the memory of one fleet supervisor.`,
      },
      {
        kind: 'text',
        heading: 'A typical scenario: one fleet, several branches',
        body: `Take a distribution company with a head office in Cairo and branches in Alexandria, Tanta and Mansoura. Each branch runs its own vans and pickups, books its own workshop visits and pays its own small expenses. Head office gets a monthly summary, often late and in a different format from each branch.

With Axpense, every vehicle across the company sits in one registry with its plate, odometer and assigned driver. Services are due by kilometre, so the Alexandria van that drives 350 km a day shows up for its oil change before the Cairo van that drives 120. Expenses are logged against the vehicle whatever branch paid them, so the fleet manager in Cairo sees the cost of every vehicle without waiting for the month-end sheet.

This is a description of how companies commonly organise their fleet, not a separate multi-branch module: the value comes from everyone working in the same system on the same vehicle records.`,
      },
      {
        kind: 'cards',
        heading: 'What Egyptian fleet teams manage in Axpense',
        columns: 3,
        items: [
          { icon: 'truck', title: 'Vehicle registry', desc: 'Plate, make, model, odometer, status and full history for every car, van, pickup and truck.' },
          { icon: 'calendar', title: 'Km-based maintenance', desc: 'Service intervals in kilometres, with the distance left until each service and overdue alerts. See our [fleet maintenance software](/fleet-maintenance-software).' },
          { icon: 'users', title: 'Drivers', desc: 'Drivers assigned to vehicles, so every inspection and expense has a responsible person.' },
          { icon: 'package', title: 'Spare parts', desc: 'Parts followed from purchase to installation, with the vehicle each part went into.' },
          { icon: 'dollar', title: 'Vehicle expenses', desc: 'Repairs, parts, insurance, licence fees and other costs recorded per vehicle, in categories.' },
          { icon: 'clipboard', title: 'Inspections', desc: 'Checklist inspections with pass and fail results kept on the vehicle record.' },
        ],
      },
      {
        kind: 'text',
        heading: 'Costs, depreciation and the numbers finance asks for',
        body: `When spare-parts prices move, the per-vehicle view matters more. Axpense adds up every expense against the vehicle it belongs to, so you can compare what each vehicle costs to run and calculate its cost per kilometre. Depreciation (إهلاك) is calculated as book value over time, which helps when deciding whether an older pickup is worth another major repair.

For the full method, including worked examples in EGP, see [fleet cost tracking](/fleet-cost-tracking).`,
      },
      {
        kind: 'text',
        heading: 'Arabic and English, in the words your team uses',
        body: `Axpense has a full **Arabic and English interface**. Drivers and workshop staff can work in Arabic while management reviews reports in English, or the other way round, on the same data.

Egyptian teams talk about إدارة الأسطول (fleet management), صيانة السيارات (vehicle maintenance), مصروفات السيارات (vehicle expenses) and إهلاك (depreciation). Those are the ideas Axpense is organised around, so the system reads like the way your team already works rather than a translated manual.`,
      },
      {
        kind: 'cards',
        heading: 'Industries in Egypt that run on vehicles',
        columns: 3,
        items: [
          { icon: 'boxes', title: 'Distribution and FMCG', desc: 'Large fleets of light vans and pickups serving shops across Cairo, Alexandria and the Delta.', href: '/industries/distribution' },
          { icon: 'truck', title: 'Logistics and transport', desc: 'Trucks on long intercity routes, where downtime directly delays deliveries.', href: '/industries/logistics' },
          { icon: 'hardhat', title: 'Construction and contracting', desc: 'Pickups, trucks and site vehicles spread across projects in new cities and infrastructure sites.', href: '/industries/construction' },
          { icon: 'factory', title: 'Manufacturing', desc: 'Factory vehicles and staff buses in industrial zones such as 10th of Ramadan and 6th of October.', href: '/industries/manufacturing' },
          { icon: 'wrench', title: 'Field services', desc: 'Technician vans for maintenance, installation and after-sales teams.', href: '/industries/field-services' },
        ],
      },
      {
        kind: 'text',
        heading: 'Pricing in Egyptian pounds',
        body: `Axpense is priced per vehicle per month in EGP, with every feature included. The price per vehicle falls as your fleet grows (minimum 5 vehicles):

| Vehicles | Per vehicle / month | Example |
|---|---|---|
| 5–10 | 350 EGP | 10 vehicles: 3,500 EGP/month |
| 11–25 | 320 EGP | 25 vehicles: 8,000 EGP/month |
| 26–50 | 290 EGP | 50 vehicles: 14,500 EGP/month |
| 51–100 | 260 EGP | 100 vehicles: 26,000 EGP/month |
| 101–250 | 230 EGP | 150 vehicles: 34,500 EGP/month |
| 251–500 | 200 EGP | 300 vehicles: 60,000 EGP/month |
| 500+ | Custom pricing | Talk to Sales |

Billing annually saves 20%: 350 EGP a vehicle becomes 3,360 EGP a year instead of 4,200. You can start free with no credit card, and onboarding is free. See the [pricing page](/pricing) for details.`,
      },
      {
        kind: 'steps',
        heading: 'Getting started, usually in one day',
        steps: [
          { title: 'Share your vehicle list', desc: 'Send the Excel sheet you already have; we help you import plates, models and odometer readings.' },
          { title: 'Set service intervals', desc: 'Agree the kilometre intervals for oil changes and periodic services, following each manufacturer’s schedule.' },
          { title: 'Assign drivers and start logging', desc: 'Link drivers to vehicles and start recording expenses and inspections from the first day.' },
        ],
      },
      {
        kind: 'text',
        heading: 'Also operating in Saudi Arabia or the Gulf?',
        body: `Many Egyptian companies also run vehicles in Saudi Arabia or elsewhere in the region. See [fleet management in Saudi Arabia](/locations/saudi-arabia) and [fleet management across the Middle East](/locations/mena), or start with an overview of our [fleet management software](/fleet-management-software) and [vehicle inspection software](/vehicle-inspection-software).`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'تشغيل أسطول شركة في مصر',
        body: `أساطيل الشركات في مصر تعمل تحت ضغط كبير. سيارات التوزيع تجوب القاهرة الكبرى في زحام يومي، وسيارات الربع نقل والنص نقل تنقل البضائع بين القاهرة والإسكندرية والدلتا، والشاحنات تقطع الطرق الطويلة إلى الصعيد والبحر الأحمر. القيادة المتقطعة داخل المدن والرحلات الطويلة على الطرق السريعة تستهلك السيارة بطرق مختلفة، لذلك نادرًا ما تناسب خطة صيانة مبنية على التاريخ وحده الواقع الفعلي.

والتكاليف هي الضغط الآخر. كثير من قطع الغيار مستورد وأسعاره قد تتغير بسرعة، فالإصلاح الذي كلّف مبلغًا معينًا العام الماضي قد يكلّف أكثر بكثير اليوم. الإدارة المالية تريد أن تعرف أي السيارات تستحق الاحتفاظ بها، وإدارة التشغيل تحتاج السيارات جاهزة صباح الغد. والطرفان يحتاجان السجلات نفسها، وهي في شركات كثيرة ما زالت في ملف إكسل ودفتر ورقي في الورشة وذاكرة مشرف أسطول واحد.`,
      },
      {
        kind: 'text',
        heading: 'مثال شائع: أسطول واحد وعدة فروع',
        body: `تخيّل شركة توزيع مقرها الرئيسي في القاهرة ولها فروع في الإسكندرية وطنطا والمنصورة. كل فرع يشغّل سياراته، ويحجز زيارات الورشة بنفسه، ويدفع مصروفاته الصغيرة. ويصل للمقر الرئيسي ملخص شهري، غالبًا متأخر وبشكل مختلف من كل فرع.

مع أكسبنس تكون كل سيارات الشركة في سجل واحد برقم اللوحة وقراءة العداد والسائق المعيّن. الصيانة مستحقة بالكيلومتر، فسيارة الإسكندرية التي تقطع 350 كم يوميًا تظهر لتغيير الزيت قبل سيارة القاهرة التي تقطع 120 كم. والمصروفات تُسجَّل على السيارة أيًّا كان الفرع الذي دفعها، فيرى مدير الأسطول في القاهرة تكلفة كل سيارة دون انتظار جدول نهاية الشهر.

هذا وصف لطريقة تنظيم الشركات لأساطيلها عادةً، لا وحدة خاصة بالفروع: القيمة تأتي من عمل الجميع على البرنامج نفسه وسجلات السيارات نفسها.`,
      },
      {
        kind: 'cards',
        heading: 'ما تديره فرق الأسطول في مصر عبر أكسبنس',
        columns: 3,
        items: [
          { icon: 'truck', title: 'سجل السيارات', desc: 'رقم اللوحة والماركة والطراز والعداد والحالة والسجل الكامل لكل سيارة ملاكي أو نقل أو بيك أب.' },
          { icon: 'calendar', title: 'صيانة السيارات بالكيلومتر', desc: 'فترات صيانة بالكيلومترات مع المسافة المتبقية لكل صيانة وتنبيه بالمتأخر. اطّلع على [برنامج صيانة الأسطول](/fleet-maintenance-software).' },
          { icon: 'users', title: 'السائقون', desc: 'تعيين السائقين على السيارات، ليكون لكل فحص ومصروف شخص مسؤول.' },
          { icon: 'package', title: 'قطع الغيار', desc: 'متابعة القطع من الشراء حتى التركيب ومعرفة السيارة التي رُكّبت فيها كل قطعة.' },
          { icon: 'dollar', title: 'مصروفات السيارات', desc: 'الإصلاحات وقطع الغيار والتأمين ورسوم الترخيص وغيرها مسجلة لكل سيارة في فئات.' },
          { icon: 'clipboard', title: 'الفحوصات', desc: 'فحوصات بقوائم محددة تُحفظ نتائجها في سجل السيارة.' },
        ],
      },
      {
        kind: 'text',
        heading: 'التكاليف والإهلاك والأرقام التي تطلبها الإدارة المالية',
        body: `عندما تتحرك أسعار قطع الغيار تزداد أهمية النظر إلى كل سيارة على حدة. يجمع أكسبنس كل مصروف على السيارة التي يخصها، فتقارن تكلفة تشغيل كل سيارة وتحسب تكلفة الكيلومتر لكل منها. ويُحسب الإهلاك كقيمة دفترية بمرور الوقت، وهو ما يساعد عند تقرير ما إذا كانت سيارة بيك أب قديمة تستحق إصلاحًا كبيرًا آخر.

للطريقة الكاملة مع أمثلة محلولة بالجنيه المصري، اطّلع على [إدارة تكاليف الأسطول](/fleet-cost-tracking).`,
      },
      {
        kind: 'text',
        heading: 'بالعربية والإنجليزية، وبالمصطلحات التي يستخدمها فريقك',
        body: `واجهة أكسبنس متاحة **بالعربية والإنجليزية**. يستطيع السائقون وفريق الورشة العمل بالعربية بينما تراجع الإدارة التقارير بالإنجليزية، أو العكس، على البيانات نفسها.

فرق العمل في مصر تتحدث عن إدارة الأسطول، وصيانة السيارات، ومصروفات السيارات، والإهلاك. وهذه هي المفاهيم التي بُني حولها أكسبنس، فيبدو البرنامج قريبًا من طريقة عمل فريقك لا دليلًا مترجمًا.`,
      },
      {
        kind: 'cards',
        heading: 'قطاعات في مصر تعتمد على السيارات',
        columns: 3,
        items: [
          { icon: 'boxes', title: 'التوزيع والسلع الاستهلاكية', desc: 'أساطيل كبيرة من سيارات النقل الخفيف تخدم المحلات في القاهرة والإسكندرية والدلتا.', href: '/industries/distribution' },
          { icon: 'truck', title: 'النقل والشحن', desc: 'شاحنات على خطوط طويلة بين المحافظات، وأي توقف يؤخر التسليم مباشرة.', href: '/industries/logistics' },
          { icon: 'hardhat', title: 'المقاولات', desc: 'سيارات بيك أب وشاحنات ومركبات مواقع موزعة على مشروعات المدن الجديدة والبنية التحتية.', href: '/industries/construction' },
          { icon: 'factory', title: 'المصانع', desc: 'سيارات المصانع وأتوبيسات نقل العاملين في المناطق الصناعية مثل العاشر من رمضان و6 أكتوبر.', href: '/industries/manufacturing' },
          { icon: 'wrench', title: 'الخدمات الميدانية', desc: 'سيارات الفنيين لفرق الصيانة والتركيب وخدمة ما بعد البيع.', href: '/industries/field-services' },
        ],
      },
      {
        kind: 'text',
        heading: 'الأسعار بالجنيه المصري',
        body: `يُسعَّر أكسبنس بالجنيه لكل مركبة شهريًا، ويشمل كل اشتراك جميع المزايا. وينخفض سعر المركبة كلما كبر أسطولك (الحد الأدنى 5 مركبات):

| عدد المركبات | السعر لكل مركبة شهريًا | مثال |
|---|---|---|
| 5–10 | 350 ج.م | 10 مركبات: 3,500 ج.م شهريًا |
| 11–25 | 320 ج.م | 25 مركبة: 8,000 ج.م شهريًا |
| 26–50 | 290 ج.م | 50 مركبة: 14,500 ج.م شهريًا |
| 51–100 | 260 ج.م | 100 مركبة: 26,000 ج.م شهريًا |
| 101–250 | 230 ج.م | 150 مركبة: 34,500 ج.م شهريًا |
| 251–500 | 200 ج.م | 300 مركبة: 60,000 ج.م شهريًا |
| أكثر من 500 | تسعير خاص | تحدث مع المبيعات |

الدفع السنوي يوفّر 20%: فالمركبة بسعر 350 ج.م شهريًا تكلّف 3,360 ج.م سنويًا بدلًا من 4,200. يمكنك البدء مجانًا دون بطاقة ائتمان، والتهيئة مجانية. التفاصيل في [صفحة الأسعار](/pricing).`,
      },
      {
        kind: 'steps',
        heading: 'البداية، غالبًا خلال يوم واحد',
        steps: [
          { title: 'أرسل قائمة سياراتك', desc: 'أرسل ملف الإكسل الموجود لديك، ونساعدك في إدخال أرقام اللوحات والطرازات وقراءات العدادات.' },
          { title: 'حدد فترات الصيانة', desc: 'اتفق على فترات تغيير الزيت والصيانة الدورية بالكيلومتر وفق جدول الشركة المصنّعة لكل سيارة.' },
          { title: 'عيّن السائقين وابدأ التسجيل', desc: 'اربط السائقين بالسيارات وابدأ تسجيل المصروفات والفحوصات من اليوم الأول.' },
        ],
      },
      {
        kind: 'text',
        heading: 'تعمل أيضًا في السعودية أو الخليج؟',
        body: `كثير من الشركات المصرية تشغّل سيارات في السعودية أو في دول أخرى بالمنطقة. اطّلع على [نظام إدارة الأسطول في السعودية](/locations/saudi-arabia) و[إدارة الأسطول في الشرق الأوسط](/locations/mena)، أو ابدأ بنظرة عامة على [برنامج إدارة الأسطول](/fleet-management-software) و[برنامج فحص المركبات](/vehicle-inspection-software).`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'Is Axpense available for companies in Egypt?', a: 'Yes. Axpense is built for companies in Egypt, Saudi Arabia and the wider Middle East, with an Arabic and English interface and prices in Egyptian pounds.' },
      { q: 'How much does Axpense cost in Egypt?', a: 'Axpense is priced per vehicle per month with every feature included: 350 EGP per vehicle for 5–10 vehicles, falling to 200 EGP for 251–500 vehicles. For example, 25 vehicles cost 8,000 EGP a month, or 76,800 EGP a year billed annually (20% less). Fleets above 500 vehicles get custom pricing, and you can start free with no credit card. See the [pricing page](/pricing).' },
      { q: 'Can our drivers and workshop staff use Axpense in Arabic?', a: 'Yes. Each person can use Arabic or English, and both languages work on the same vehicle records, so reports in English and entries in Arabic stay in one place.' },
      { q: 'We run vehicles from several branches. Can one team see them all?', a: 'Yes. All of the company’s vehicles sit in one registry, so the fleet team sees every vehicle, service and expense regardless of which city it runs in.' },
      { q: 'How quickly can we get started?', a: 'Most teams are live in one day. Onboarding is free: we help you import your vehicle list, set the first service intervals and show your team the daily routine.' },
    ],
    ar: [
      { q: 'هل أكسبنس متاح للشركات في مصر؟', a: 'نعم. صُمم أكسبنس للشركات في مصر والسعودية والشرق الأوسط، بواجهة عربية وإنجليزية وأسعار بالجنيه المصري.' },
      { q: 'كم تكلفة أكسبنس في مصر؟', a: 'يُسعَّر أكسبنس لكل مركبة شهريًا مع كل المزايا: 350 جنيهًا للمركبة لأسطول من 5 إلى 10 مركبات، وينخفض إلى 200 جنيه من 251 إلى 500 مركبة. فمثلًا تكلّف 25 مركبة 8,000 جنيه شهريًا، أو 76,800 جنيه سنويًا عند الدفع السنوي (أقل بنسبة 20%). وللأساطيل الأكبر من 500 مركبة تسعير خاص، ويمكنك البدء مجانًا دون بطاقة ائتمان. التفاصيل في [صفحة الأسعار](/pricing).' },
      { q: 'هل يستطيع السائقون وفريق الورشة استخدام البرنامج بالعربية؟', a: 'نعم. يستطيع كل شخص استخدام العربية أو الإنجليزية، واللغتان تعملان على سجلات السيارات نفسها، فتبقى التقارير الإنجليزية والإدخالات العربية في مكان واحد.' },
      { q: 'لدينا سيارات في عدة فروع، هل يراها فريق واحد كلها؟', a: 'نعم. كل سيارات الشركة في سجل واحد، فيرى فريق الأسطول كل سيارة وكل صيانة وكل مصروف أيًّا كانت المدينة التي تعمل فيها.' },
      { q: 'متى نستطيع البدء؟', a: 'تبدأ معظم الفرق العمل خلال يوم واحد. التهيئة مجانية: نساعدك في إدخال قائمة السيارات وضبط أول فترات صيانة وتعريف فريقك بالروتين اليومي.' },
    ],
  },
  relatedPages: ['/fleet-management-software', '/fleet-maintenance-software', '/fleet-cost-tracking', '/vehicle-inspection-software', '/pricing', '/locations/saudi-arabia', '/locations/mena'],
  relatedIndustries: ['/industries/distribution', '/industries/logistics', '/industries/construction', '/industries/manufacturing', '/industries/field-services'],
  relatedArticles: ['what-is-fleet-management-software', 'km-based-preventive-maintenance', 'vehicle-cost-per-km'],
  hreflang: { en: 'en-EG', ar: 'ar-EG' },
  ogLocale: { en: 'en_US', ar: 'ar_EG' },
  parent: '/fleet-management-software',
};
