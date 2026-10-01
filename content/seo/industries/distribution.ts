// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const DISTRIBUTION: SeoPage = {
  path: '/industries/distribution',
  type: 'industry',
  updatedAt: '2026-09-29',
  parent: '/fleet-management-software',
  primaryKeyword: { en: 'distribution fleet management', ar: 'إدارة أسطول سيارات التوزيع' },
  secondaryKeywords: {
    en: ['FMCG fleet management', 'delivery van fleet maintenance', 'route sales vehicle management', 'distribution vehicle cost per branch', 'van fleet driver assignment'],
    ar: ['إدارة سيارات التوزيع', 'صيانة سيارات التوزيع', 'أسطول شركات السلع الاستهلاكية', 'نظام إدارة مركبات التوزيع', 'تعيين السائقين على سيارات التوزيع'],
  },
  meta: {
    en: {
      title: 'Distribution Fleet Management for FMCG Vans',
      description: 'Distribution fleet management for vans across many branches: km-based servicing, clear driver assignment and cost per branch in one system. Book a demo.',
    },
    ar: {
      title: 'إدارة أسطول سيارات التوزيع للفروع',
      description: 'إدارة أسطول سيارات التوزيع في كل الفروع من نظام واحد: صيانة حسب الكيلومترات وتعيين واضح للسائقين وتكلفة كل فرع أمامك. احجز عرضًا تجريبيًا الآن.',
    },
  },
  h1: {
    en: 'Distribution Fleet Management for Vans and Light Trucks Across Every Branch',
    ar: 'إدارة أسطول سيارات التوزيع في كل الفروع من نظام واحد',
  },
  navLabel: { en: 'Distribution fleet management', ar: 'إدارة أسطول سيارات التوزيع' },
  hero: {
    en: {
      badge: 'Distribution & FMCG',
      intro: 'A distribution fleet is dozens of light vehicles doing short, busy routes from several branches, with drivers who change more often than the vans do. Axpense gives head office one view of every vehicle, who drives it, what service is due and what each branch spends to keep its routes running.',
    },
    ar: {
      badge: 'التوزيع والسلع الاستهلاكية',
      intro: 'أسطول التوزيع هو عشرات المركبات الخفيفة التي تخدم خطوطًا قصيرة ومزدحمة من عدة فروع، مع سائقين يتغيرون أكثر مما تتغير السيارات. يمنح أكسبنس الإدارة رؤية واحدة لكل سيارة: من يقودها، وما الصيانة المستحقة، وكم ينفق كل فرع لتستمر خطوطه في العمل.',
    },
  },
  heroImage: 'vehicles',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'What makes a distribution fleet hard to manage',
        body: `FMCG and wholesale distributors don’t usually run the biggest vehicles, but they run a lot of them, in many places at once. The difficulty is scale and spread rather than any single truck.

- **Branches work differently.** Each branch keeps its own sheet, uses its own workshop and reports in its own format, so head office compares numbers that don’t match.
- **Drivers change routes and vans.** Salesmen-drivers move between routes, cover leave and swap vehicles, and nobody is sure who had a van when a dent or fault appeared.
- **Stop-start wear is invisible.** A van making 40 drops a day wears brakes and tyres much faster than its kilometres alone suggest.
- **Small costs add up.** A tyre here and a brake job there never look serious until someone totals them per vehicle.`,
      },
      {
        kind: 'text',
        heading: 'Vehicles in a typical distribution fleet',
        body: `Most distributors run **panel vans and refrigerated vans** for route sales and deliveries to shops, **light trucks** for bulk drops to wholesalers and supermarkets, **pickups** for smaller branches and rural routes, and **cars** for supervisors and merchandisers.

In Axpense every vehicle has one record with its plate, make, model, odometer, status and assigned driver. The whole fleet sits in one system, so head office sees all branches together while each branch still works on its own vehicles.`,
      },
      {
        kind: 'text',
        heading: 'Maintenance needs: brakes, tyres and km-based services',
        body: `Distribution routes are hard on consumables. Frequent stops, short trips and heavy loads mean brake pads, tyres, clutches and suspension parts need attention sooner than on a highway vehicle with the same kilometres.

Axpense schedules preventive maintenance by kilometre, so each van shows the distance left to its next service and the overdue ones stand out. For the parts that wear fastest, the [spare parts module](/features/spare-parts) records which tyres and pads went into which van, so if one vehicle keeps needing brakes, you can see it and ask whether it is the route, the driver or the part.

As an example only, many light vans run oil services somewhere between 5,000 and 10,000 km; always follow the manufacturer’s schedule for your vehicles and conditions. More on building the schedule in our [fleet maintenance software](/fleet-maintenance-software) overview.`,
      },
      {
        kind: 'text',
        heading: 'Cost needs: cost per van and per branch',
        body: `Distribution managers need two views of cost: per vehicle, to spot the vans that cost too much, and per branch, to compare how each location runs its fleet. Axpense records repairs, parts, insurance, registration and other expenses against the vehicle and category, and reports roll them up so you can compare.

An example of what that comparison can reveal:

| Branch (example) | Vans | Repairs & parts last quarter | Per van |
|---|---|---|---|
| Branch A | 25 | 75,000 SAR | 3,000 SAR |
| Branch B | 20 | 92,000 SAR | 4,600 SAR |

A gap like this is a prompt to look closer: older vans, harder routes, a different workshop or missed services. See [fleet cost tracking](/fleet-cost-tracking) for the full cost picture.`,
      },
      {
        kind: 'checklist',
        heading: 'Inspection needs: quick daily checks at the branch',
        intro: 'Route vans leave early and come back late, so checks need to be short. A typical daily list covers:',
        items: [
          { text: 'Tyre condition and pressure, including the spare.' },
          { text: 'Brakes, lights, indicators and horn.' },
          { text: 'Mirrors, doors, shutters and cargo area locks.' },
          { text: 'Refrigeration unit running and at temperature, for chilled vans.' },
          { text: 'Visible damage, noted with the driver who has the van.' },
        ],
      },
      {
        kind: 'steps',
        heading: 'A distribution workflow in Axpense',
        steps: [
          { title: 'Add every vehicle from every branch', desc: 'One record per van, truck and car, with odometer and status.' },
          { title: 'Assign drivers to vans', desc: 'When a driver changes route or covers leave, update the assignment so responsibility follows the vehicle.' },
          { title: 'Set km service intervals', desc: 'Axpense tracks km left to each service and flags overdue vehicles.' },
          { title: 'Run daily checklists', desc: 'Pass or fail per item; failed items are recorded on the van for the branch to fix.' },
          { title: 'Log costs as they happen', desc: 'Tyres, brake jobs, repairs and insurance recorded per vehicle and category.' },
          { title: 'Compare branches monthly', desc: 'Use reports to compare cost and maintenance status across locations.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'Modules distributors rely on',
        items: [
          { icon: 'truck', title: 'Vehicle management', desc: 'Every van and truck across all branches in one searchable list.', href: '/features/vehicle-management' },
          { icon: 'users', title: 'Driver management', desc: 'Clear driver-to-vehicle assignment, even with frequent route changes.', href: '/features/drivers' },
          { icon: 'calendar', title: 'Preventive maintenance', desc: 'Km-based service reminders and a visible overdue list.', href: '/features/preventive-maintenance' },
          { icon: 'package', title: 'Spare parts', desc: 'Tyres and brake parts traced to the van they were fitted to.', href: '/features/spare-parts' },
          { icon: 'clipboard', title: 'Inspections', desc: 'Short daily checklists with failed items kept on record.', href: '/features/inspection-management' },
          { icon: 'chart', title: 'Reports', desc: 'Cost by vehicle and category, rolled up for branch comparison.', href: '/features/reports-analytics' },
        ],
      },
      {
        kind: 'checklist',
        heading: 'KPIs distribution managers track',
        intro: 'Standard practice for route-based fleets; you can build each one from the records kept in Axpense.',
        items: [
          { text: 'Repair and parts cost per van, and per branch.' },
          { text: 'Tyre and brake spend per 10,000 km, to spot hard routes or hard drivers.' },
          { text: 'Services overdue per branch.' },
          { text: 'Vans off the road on a given morning, against vans needed for the routes.' },
          { text: 'Open failed inspection items older than a week.' },
        ],
      },
      {
        kind: 'text',
        heading: 'Example: a distributor with 60 vans across three branches',
        body: `Consider a hypothetical food distributor with 60 vans split across three branches. Each branch manager keeps a spreadsheet; drivers swap vans when someone is on leave; head office sees costs only as a monthly total from finance.

The fleet coordinator registers all 60 vans in Axpense with odometers and current drivers, and sets service intervals by kilometre. Branch supervisors start short daily checklists. Within the first weeks, a handful of vans show as overdue and are booked in, and a failed brake item recorded on one van reaches the workshop the same day instead of waiting for the driver’s next visit to the office.

After a few months of recording tyres, brake jobs and repairs per van, the coordinator can compare branches like for like and see which routes wear vehicles fastest. Keeping [driver assignments](/features/drivers) up to date links each van to a named driver, which makes the conversation with branch managers factual rather than personal.`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'ما الذي يجعل أسطول التوزيع صعب الإدارة',
        body: `شركات التوزيع والسلع الاستهلاكية لا تشغّل عادةً أكبر المركبات، لكنها تشغّل عددًا كبيرًا منها في أماكن كثيرة في الوقت نفسه. الصعوبة في الحجم والانتشار لا في شاحنة بعينها.

- **كل فرع يعمل بطريقته.** لكل فرع جدوله وورشته وطريقة تقاريره، فتقارن الإدارة أرقامًا غير متطابقة.
- **السائقون يغيّرون الخطوط والسيارات.** مندوب التوزيع ينتقل بين الخطوط ويغطي الإجازات ويبدّل السيارة، فلا يُعرف من كانت معه السيارة عند ظهور العطل.
- **استهلاك التوقف والانطلاق غير ظاهر.** سيارة تقف 40 مرة يوميًا تستهلك الفرامل والإطارات أسرع بكثير مما توحي به كيلومتراتها.
- **المصروفات الصغيرة تتراكم.** إطار هنا وتغيير تيل هناك لا يبدو مهمًا حتى تُجمع لكل سيارة.`,
      },
      {
        kind: 'text',
        heading: 'المركبات في أسطول التوزيع المعتاد',
        body: `يشغّل معظم الموزعين **سيارات فان مغلقة وفانات مبردة** للبيع على الخطوط والتوصيل للمحلات، و**شاحنات خفيفة** للتوريد إلى تجار الجملة والسوبر ماركت، و**سيارات بيك أب** للفروع الصغيرة والخطوط الريفية، و**سيارات صغيرة** للمشرفين ومنسقي العرض.

في أكسبنس لكل سيارة سجل واحد برقم اللوحة والماركة والطراز والعداد والحالة والسائق المعيّن. والأسطول كله في نظام واحد، فترى الإدارة كل الفروع معًا بينما يعمل كل فرع على سياراته.`,
      },
      {
        kind: 'text',
        heading: 'احتياجات الصيانة: الفرامل والإطارات والصيانة بالكيلومتر',
        body: `خطوط التوزيع قاسية على المستهلكات. التوقفات الكثيرة والرحلات القصيرة والحمولة الثقيلة تجعل تيل الفرامل والإطارات والدبرياج وأجزاء العفشة تحتاج تدخلًا أسرع من سيارة طرق سريعة بالكيلومترات نفسها.

يجدول أكسبنس الصيانة الوقائية بالكيلومتر، فتعرض كل سيارة المسافة المتبقية حتى صيانتها القادمة ويظهر المتأخر بوضوح. وللقطع الأسرع استهلاكًا، تسجّل [وحدة قطع الغيار](/features/spare-parts) أي إطارات وتيل رُكّبت في أي سيارة، فإذا تكرر تغيير فرامل سيارة بعينها عرفت ذلك وسألت: هل السبب الخط أم السائق أم القطعة؟

على سبيل المثال فقط، كثير من الفانات الخفيفة تُغيّر زيتها بين 5,000 و10,000 كم؛ اتبع دائمًا جدول الشركة المصنّعة. المزيد في [برنامج صيانة الأسطول](/fleet-maintenance-software).`,
      },
      {
        kind: 'text',
        heading: 'احتياجات التكلفة: تكلفة كل سيارة وكل فرع',
        body: `يحتاج مدير التوزيع نظرتين للتكلفة: لكل سيارة لاكتشاف الأعلى تكلفة، ولكل فرع لمقارنة إدارة المواقع لسياراتها. يسجّل أكسبنس الإصلاحات والقطع والتأمين والترخيص وباقي المصروفات على السيارة والفئة، وتجمعها التقارير للمقارنة.

مثال على ما قد تكشفه هذه المقارنة:

| الفرع (مثال) | السيارات | إصلاحات وقطع الربع الماضي | لكل سيارة |
|---|---|---|---|
| الفرع أ | 25 | 75,000 ريال | 3,000 ريال |
| الفرع ب | 20 | 92,000 ريال | 4,600 ريال |

فرق كهذا دعوة للتدقيق: سيارات أقدم، أو خطوط أصعب، أو ورشة مختلفة، أو صيانة فائتة. اطّلع على [إدارة تكاليف الأسطول](/fleet-cost-tracking).`,
      },
      {
        kind: 'checklist',
        heading: 'احتياجات الفحص: فحص يومي سريع في الفرع',
        intro: 'سيارات التوزيع تخرج مبكرًا وتعود متأخرة، لذا يجب أن يكون الفحص قصيرًا. تشمل القائمة اليومية المعتادة:',
        items: [
          { text: 'حالة الإطارات وضغطها، بما فيها الاستبن.' },
          { text: 'الفرامل والأنوار والإشارات والكلاكس.' },
          { text: 'المرايا والأبواب وأقفال صندوق البضاعة.' },
          { text: 'تشغيل وحدة التبريد ووصولها للحرارة المطلوبة في الفانات المبردة.' },
          { text: 'أي تلفيات ظاهرة، مع تسجيل السائق الذي معه السيارة.' },
        ],
      },
      {
        kind: 'steps',
        heading: 'سير عمل التوزيع في أكسبنس',
        steps: [
          { title: 'أضف كل سيارات كل الفروع', desc: 'سجل لكل فان وشاحنة وسيارة بالعداد والحالة.' },
          { title: 'عيّن السائقين على السيارات', desc: 'عند تغيير الخط أو تغطية إجازة، حدّث التعيين لتتبع المسؤولية السيارة.' },
          { title: 'حدد فترات الصيانة بالكيلومتر', desc: 'يتابع أكسبنس المتبقي حتى كل صيانة وينبّه للمتأخر.' },
          { title: 'نفّذ الفحص اليومي', desc: 'مطابق أو غير مطابق لكل بند، والبنود غير المطابقة تُسجَّل على السيارة ليصلحها الفرع.' },
          { title: 'سجّل التكاليف لحظة حدوثها', desc: 'الإطارات والفرامل والإصلاحات والتأمين لكل سيارة وفئة.' },
          { title: 'قارن الفروع شهريًا', desc: 'استخدم التقارير لمقارنة التكلفة وحالة الصيانة بين المواقع.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'الوحدات التي يعتمد عليها الموزعون',
        items: [
          { icon: 'truck', title: 'إدارة المركبات', desc: 'كل الفانات والشاحنات في كل الفروع في قائمة واحدة.', href: '/features/vehicle-management' },
          { icon: 'users', title: 'إدارة السائقين', desc: 'تعيين واضح للسائق على السيارة حتى مع كثرة تغيير الخطوط.', href: '/features/drivers' },
          { icon: 'calendar', title: 'الصيانة الوقائية', desc: 'تنبيهات بالكيلومتر وقائمة ظاهرة بالمتأخر.', href: '/features/preventive-maintenance' },
          { icon: 'package', title: 'قطع الغيار', desc: 'الإطارات وقطع الفرامل مرتبطة بالسيارة التي رُكّبت فيها.', href: '/features/spare-parts' },
          { icon: 'clipboard', title: 'الفحوصات', desc: 'قوائم يومية قصيرة مع حفظ البنود غير المطابقة.', href: '/features/inspection-management' },
          { icon: 'chart', title: 'التقارير', desc: 'التكلفة حسب السيارة والفئة، مجمعة لمقارنة الفروع.', href: '/features/reports-analytics' },
        ],
      },
      {
        kind: 'checklist',
        heading: 'مؤشرات يتابعها مديرو التوزيع',
        intro: 'ممارسات معتادة لأساطيل الخطوط، ويمكن بناء كل منها من سجلات أكسبنس.',
        items: [
          { text: 'تكلفة الإصلاح والقطع لكل سيارة ولكل فرع.' },
          { text: 'إنفاق الإطارات والفرامل لكل 10,000 كم، لكشف الخطوط أو القيادة القاسية.' },
          { text: 'الصيانات المتأخرة في كل فرع.' },
          { text: 'السيارات المتوقفة صباح كل يوم مقابل السيارات المطلوبة للخطوط.' },
          { text: 'بنود الفحص غير المطابقة المفتوحة منذ أكثر من أسبوع.' },
        ],
      },
      {
        kind: 'text',
        heading: 'مثال: موزع لديه 60 سيارة في ثلاثة فروع',
        body: `لنتخيل شركة توزيع أغذية افتراضية لديها 60 فانًا موزعة على ثلاثة فروع. لكل مدير فرع جدوله، ويتبادل السائقون السيارات في الإجازات، ولا ترى الإدارة التكاليف إلا كإجمالي شهري من الحسابات.

يسجّل منسق الأسطول السيارات الستين في أكسبنس بعداداتها وسائقيها الحاليين، ويحدد فترات الصيانة بالكيلومتر. ويبدأ مشرفو الفروع الفحص اليومي القصير. في الأسابيع الأولى تظهر بضع سيارات متأخرة فتُحجز صيانتها، ويصل بند فرامل غير مطابق في إحدى السيارات إلى الورشة في اليوم نفسه بدلًا من انتظار زيارة السائق التالية للمكتب.

بعد بضعة أشهر من تسجيل الإطارات والفرامل والإصلاحات لكل سيارة، يقارن المنسق الفروع بشكل عادل ويعرف أي الخطوط تستهلك السيارات أسرع. ومع تحديث [تعيين السائقين](/features/drivers) باستمرار ترتبط كل سيارة بسائق محدد، فيصبح النقاش مع مديري الفروع مبنيًا على وقائع.`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'Can we manage vans from several branches in one account?', a: 'Yes. All vehicles sit in one system, so head office sees every branch together, and reports let you compare cost and maintenance status across locations.' },
      { q: 'How does Axpense handle drivers who switch vans?', a: 'You update the driver assignment on the vehicle whenever a driver changes van, so the current driver is always clear and inspections and expenses can be linked to the right person.' },
      { q: 'Why do our vans need brakes more often than the kilometres suggest?', a: 'Stop-start routes with many drops wear brakes, tyres and clutches faster than steady driving. Tracking those parts per van, as Axpense does, shows which vehicles and routes are hardest on them.' },
      { q: 'Can we use a short daily checklist for route vans?', a: 'Yes. You choose the checklist items, so a daily check can be as short as your routes need. Our [daily vehicle inspection checklist](/blog/daily-vehicle-inspection-checklist) article suggests a starting list.' },
      { q: 'How much does it cost for a fleet of 50–100 vans?', a: 'Axpense is priced per vehicle per month with every feature included. Fleets of 51–100 vehicles pay 260 EGP or 28 SAR per vehicle a month, so 60 vans cost 15,600 EGP (1,680 SAR) a month; a fleet of exactly 50 falls in the 26–50 tier at 290 EGP or 31 SAR per vehicle. Billing annually saves 20%, and you can start free with no credit card. See the [pricing page](/pricing).' },
    ],
    ar: [
      { q: 'هل يمكن إدارة سيارات عدة فروع من حساب واحد؟', a: 'نعم. كل المركبات في نظام واحد، فترى الإدارة كل الفروع معًا، وتتيح التقارير مقارنة التكلفة وحالة الصيانة بين المواقع.' },
      { q: 'كيف يتعامل أكسبنس مع السائقين الذين يبدّلون السيارات؟', a: 'تحدّث تعيين السائق على السيارة كلما غيّر السائق سيارته، فيبقى السائق الحالي واضحًا ويمكن ربط الفحوصات والمصروفات بالشخص الصحيح.' },
      { q: 'لماذا تحتاج سياراتنا فرامل أكثر مما توحي به الكيلومترات؟', a: 'الخطوط كثيرة التوقف تستهلك الفرامل والإطارات والدبرياج أسرع من القيادة المستقرة. متابعة هذه القطع لكل سيارة في أكسبنس تكشف أي السيارات والخطوط الأكثر استهلاكًا لها.' },
      { q: 'هل يمكن استخدام فحص يومي قصير لسيارات التوزيع؟', a: 'نعم. أنت تختار بنود القائمة، فيكون الفحص اليومي قصيرًا بقدر ما تحتاجه خطوطك. ابدأ بنموذج [قائمة فحص السيارة](/resources/vehicle-inspection-checklist).' },
      { q: 'كم التكلفة لأسطول من 50 إلى 100 سيارة؟', a: 'يُسعَّر أكسبنس لكل مركبة شهريًا مع كل المزايا. الأساطيل من 51 إلى 100 مركبة تدفع 260 جنيهًا أو 28 ريالًا لكل مركبة شهريًا، فتكلّف 60 سيارة 15,600 جنيه (1,680 ريالًا) شهريًا، أما الأسطول من 50 سيارة بالضبط فيقع في شريحة 26 إلى 50 بسعر 290 جنيهًا أو 31 ريالًا للمركبة. الدفع السنوي يوفّر 20%، ويمكنك البدء مجانًا دون بطاقة ائتمان. التفاصيل في [صفحة الأسعار](/pricing).' },
    ],
  },
  relatedPages: ['/fleet-management-software', '/fleet-cost-tracking', '/features/drivers', '/features/spare-parts', '/features/preventive-maintenance'],
  relatedIndustries: ['/industries/logistics', '/industries/field-services', '/industries/manufacturing'],
  relatedArticles: ['daily-vehicle-inspection-checklist', 'fleet-spare-parts-management', 'how-to-calculate-fleet-cost'],
};
