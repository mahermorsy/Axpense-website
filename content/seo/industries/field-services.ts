// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const FIELD_SERVICES: SeoPage = {
  path: '/industries/field-services',
  type: 'industry',
  updatedAt: '2026-09-29',
  parent: '/fleet-management-software',
  primaryKeyword: { en: 'field service vehicle management', ar: 'إدارة سيارات فرق الخدمة الميدانية' },
  secondaryKeywords: {
    en: ['technician van fleet management', 'service van maintenance', 'field service fleet', 'vehicle handover checklist', 'maintenance company vehicles'],
    ar: ['إدارة سيارات الفنيين', 'صيانة سيارات الخدمة', 'أسطول شركات الصيانة', 'فحص تسليم واستلام السيارة', 'سيارات فرق الصيانة'],
  },
  meta: {
    en: {
      title: 'Field Service Vehicle Management for Van Fleets',
      description: 'Field service vehicle management that keeps technician vans available: km-based servicing planned around jobs and clear handovers. Book a demo.',
    },
    ar: {
      title: 'إدارة سيارات فرق الخدمة الميدانية',
      description: 'إدارة سيارات فرق الخدمة الميدانية لتبقى سيارات الفنيين جاهزة: صيانة بالكيلومتر تُخطط حول المهام، وفحص عند التسليم، وسجل لكل سيارة. احجز عرضًا تجريبيًا.',
    },
  },
  h1: {
    en: 'Field Service Vehicle Management That Keeps Technician Vans Ready for the Next Job',
    ar: 'إدارة سيارات فرق الخدمة الميدانية لتبقى سيارة الفني جاهزة للمهمة القادمة',
  },
  navLabel: { en: 'Field service vehicle management', ar: 'إدارة سيارات الخدمة الميدانية' },
  hero: {
    en: {
      badge: 'Field services',
      intro: 'For a field service company, a technician without a working van is a technician who can’t reach the customer. Axpense keeps every service van on one record, with maintenance planned by kilometre, clear driver assignment for handovers and the cost of each van in view, so vehicles are ready when jobs are booked.',
    },
    ar: {
      badge: 'الخدمات الميدانية',
      intro: 'في شركات الخدمة الميدانية، الفني الذي بلا سيارة صالحة فني لا يصل إلى العميل. يحفظ أكسبنس كل سيارة خدمة في سجل واحد، مع صيانة مخططة بالكيلومتر وتعيين واضح للسائق عند التسليم وتكلفة كل سيارة أمامك، لتكون السيارات جاهزة عند حجز المهام.',
    },
  },
  heroImage: 'vehicles',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'The vehicle problems field service teams face',
        body: `HVAC contractors, elevator and lift companies, telecom installers, facility maintenance firms, pest control and security companies all depend on vans to get technicians to customers. The vehicle side of the business tends to break in the same places:

- **A broken van cancels jobs.** If a technician’s van is off the road, their appointments are moved or given to someone else, and the customer notices.
- **Services clash with the job schedule.** Maintenance gets postponed because the van is always “needed today”, until it breaks down on a day it was needed more.
- **Vans change hands.** Technicians go on leave, swap shifts or move teams, and the next person inherits damage and faults nobody wrote down.
- **Costs are hidden in operations.** Repairs and tyres are paid through petty cash or branch budgets, so the true cost of running each van is unknown.`,
      },
      {
        kind: 'text',
        heading: 'Vehicles in a field service fleet',
        body: `Most field service fleets are made of **panel vans** fitted with shelving for tools and stock, **pickups** for heavier equipment and outdoor work, **small cars** for supervisors and inspectors, and sometimes a few **light trucks** for larger installations.

In Axpense each vehicle has one record with plate, make, model, odometer, status and assigned technician. The status field makes it easy to see which vans are in service and which are in the workshop.`,
      },
      {
        kind: 'text',
        heading: 'Maintenance needs: planned around the job schedule',
        body: `The trick in field service is to service vans before they fail, on a day the planner chooses. Km-based maintenance makes that possible. Axpense stores each van’s service intervals in kilometres and shows how far each one is from its next service, so a planner looking at next week can see which vans will reach their interval and book them on a lighter day or pair them with a spare van.

Service vans do lots of city driving with frequent stops and heavy loads of tools, so brakes, tyres and suspension deserve attention. Record those parts through [spare parts](/features/spare-parts) to see what went into each van. For more on scheduling, see our [fleet maintenance software](/fleet-maintenance-software) page and the [preventive maintenance checklist](/resources/preventive-maintenance-checklist).`,
      },
      {
        kind: 'text',
        heading: 'Inspection needs: a check at every handover',
        body: `Whenever a van passes from one technician to another, a short handover inspection protects both of them: tyres, lights, body damage, mirrors, cargo doors and shelving, and warning lights on the dashboard.

In Axpense you build a handover checklist once. Each item is marked pass or fail and recorded on the vehicle, and updating the driver assignment at the same time makes it clear who is responsible from that moment on. Faults found at handover stay on the vehicle record, rather than being discovered by the next technician in front of a customer. Our [vehicle inspection software](/vehicle-inspection-software) page explains the inspection module in detail.`,
      },
      {
        kind: 'text',
        heading: 'Cost needs: cost per van and per technician team',
        body: `Field service margins depend on how many jobs each technician completes, and the van is part of that cost. Axpense records repairs, parts, tyres, insurance, registration and other expenses per vehicle and category, and reports roll them up by vehicle.

As an example, if a van costs 36,000 SAR a year to run and the technician completes 1,200 jobs with it, the vehicle cost is 30 SAR per job. If an older van’s repairs push that to 45 SAR per job, replacing it may cost less than keeping it. Add depreciation from [vehicle lifecycle management](/features/asset-management) to see the whole picture, and see [fleet cost tracking](/fleet-cost-tracking) for the cost reports.`,
      },
      {
        kind: 'steps',
        heading: 'A field service workflow in Axpense',
        steps: [
          { title: 'Register every service van', desc: 'Plate, make, model, odometer and status, with the technician assigned to it.' },
          { title: 'Set km intervals', desc: 'Axpense shows km left to each service, so planners can book vans on quieter days.' },
          { title: 'Inspect at every handover', desc: 'A short checklist whenever a van changes technician, with failed items recorded on the vehicle.' },
          { title: 'Update the driver assignment', desc: 'Responsibility moves with the van, so later expenses and inspections are linked to the right person.' },
          { title: 'Record costs as they happen', desc: 'Repairs, tyres and insurance per van and category.' },
          { title: 'Check availability and cost weekly', desc: 'See vans due soon, overdue services and cost per van on the dashboard.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'Modules field service companies use',
        items: [
          { icon: 'truck', title: 'Vehicle management', desc: 'Every van with its status, odometer and assigned technician.', href: '/features/vehicle-management' },
          { icon: 'users', title: 'Driver management', desc: 'Assign technicians to vans and keep handovers clear.', href: '/features/drivers' },
          { icon: 'calendar', title: 'Preventive maintenance', desc: 'Km-based intervals so services can be planned around jobs.', href: '/features/preventive-maintenance' },
          { icon: 'clipboard', title: 'Inspections', desc: 'Handover and routine checklists recorded on each van.', href: '/features/inspection-management' },
          { icon: 'dollar', title: 'Expenses', desc: 'Every repair and running cost recorded per van.', href: '/features/expense-management' },
          { icon: 'chart', title: 'Reports', desc: 'Maintenance status and cost per van on one screen.', href: '/features/reports-analytics' },
        ],
      },
      {
        kind: 'checklist',
        heading: 'KPIs for field service fleets',
        intro: 'Common measures in field service, built from the records you keep in Axpense and your job numbers.',
        items: [
          { text: 'Vans available each morning against technicians scheduled.' },
          { text: 'Services due in the next 1,000 km, to plan the coming week.' },
          { text: 'Services overdue, which should be rare in a planned fleet.' },
          { text: 'Vehicle cost per job or per technician.' },
          { text: 'Handover inspections with failed items, by van.' },
        ],
      },
      {
        kind: 'text',
        heading: 'Example: an HVAC company with 25 technician vans',
        body: `Consider a hypothetical air-conditioning maintenance company with 25 vans, two spare vans and a peak season every summer. Services are booked when a technician complains, and vans change hands whenever someone goes on leave.

The operations team registers every van in Axpense, assigns each to its technician and sets km-based service intervals. Before the summer peak, the planner checks which vans will reach their next service in the coming weeks and books them in during the quieter spring months. A handover checklist is introduced, so when a technician goes on leave, the van’s condition is recorded before the colleague takes it over.

By the end of the season, the team has a cost history for every van and can see which vans needed the most repairs during the busiest months, which feeds directly into next year’s replacement decisions.`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'مشكلات المركبات التي تواجه فرق الخدمة الميدانية',
        body: `شركات التكييف والمصاعد وتركيبات الاتصالات وصيانة المرافق ومكافحة الحشرات والأمن كلها تعتمد على السيارات لإيصال الفنيين إلى العملاء. ويتعطل جانب المركبات فيها عادةً في المواضع نفسها:

- **السيارة المعطلة تلغي المهام.** إذا توقفت سيارة الفني تُؤجَّل مواعيده أو تُحوَّل لغيره، ويلاحظ العميل ذلك.
- **الصيانة تتعارض مع جدول المهام.** تؤجَّل الصيانة لأن السيارة «مطلوبة اليوم» دائمًا، حتى تتعطل في يوم كانت مطلوبة فيه أكثر.
- **السيارات تنتقل من يد ليد.** يأخذ الفني إجازة أو يبدّل ورديته أو ينتقل لفريق آخر، فيرث الفني التالي تلفيات وأعطالًا لم يسجّلها أحد.
- **التكاليف مخفية في التشغيل.** الإصلاحات والإطارات تُدفع من العهدة أو ميزانيات الفروع، فلا تُعرف التكلفة الحقيقية لكل سيارة.`,
      },
      {
        kind: 'text',
        heading: 'المركبات في أسطول الخدمة الميدانية',
        body: `تتكون معظم أساطيل الخدمة الميدانية من **سيارات فان** مجهزة برفوف للعدد والمخزون، و**سيارات بيك أب** للمعدات الأثقل والعمل الخارجي، و**سيارات صغيرة** للمشرفين والمفتشين، وأحيانًا **شاحنات خفيفة** للتركيبات الأكبر.

في أكسبنس لكل سيارة سجل واحد باللوحة والماركة والطراز والعداد والحالة والفني المعيّن. وحقل الحالة يُظهر بسهولة أي السيارات في الخدمة وأيها في الورشة.`,
      },
      {
        kind: 'text',
        heading: 'احتياجات الصيانة: مخططة حول جدول المهام',
        body: `السر في الخدمة الميدانية أن تُصان السيارة قبل أن تتعطل، في يوم يختاره المخطط. والصيانة بالكيلومتر تجعل ذلك ممكنًا. يحفظ أكسبنس فترات صيانة كل سيارة بالكيلومترات ويعرض المسافة المتبقية حتى صيانتها القادمة، فيرى المخطط أي السيارات ستصل لموعدها الأسبوع القادم ويحجزها في يوم أخف أو يوفر لها سيارة احتياطية.

سيارات الخدمة تسير كثيرًا داخل المدن بتوقفات متكررة وحمولة عدد ثقيلة، فتستحق الفرامل والإطارات والعفشة الاهتمام. سجّل هذه القطع عبر [قطع الغيار](/features/spare-parts) لتعرف ما رُكّب في كل سيارة. المزيد في [برنامج صيانة الأسطول](/fleet-maintenance-software) و[جدول الصيانة الدورية للسيارات](/resources/preventive-maintenance-checklist).`,
      },
      {
        kind: 'text',
        heading: 'احتياجات الفحص: فحص عند كل تسليم واستلام',
        body: `كلما انتقلت السيارة من فني لآخر، يحمي فحص التسليم القصير الطرفين: الإطارات، والأنوار، وتلفيات الهيكل، والمرايا، والأبواب الخلفية والرفوف، ولمبات التحذير في التابلوه.

في أكسبنس تبني قائمة التسليم مرة واحدة. يُحدَّد كل بند بمطابق أو غير مطابق ويُسجَّل على السيارة، وتحديث تعيين السائق في الوقت نفسه يوضح المسؤول من تلك اللحظة. وتبقى الأعطال المكتشفة عند التسليم في سجل السيارة بدل أن يكتشفها الفني التالي أمام العميل. اطّلع على [برنامج فحص المركبات](/vehicle-inspection-software).`,
      },
      {
        kind: 'text',
        heading: 'احتياجات التكلفة: تكلفة كل سيارة وكل فريق',
        body: `ربحية الخدمة الميدانية تعتمد على عدد المهام التي ينجزها كل فني، والسيارة جزء من هذه التكلفة. يسجّل أكسبنس الإصلاحات والقطع والإطارات والتأمين والترخيص وباقي المصروفات لكل سيارة وفئة، وتجمعها التقارير لكل سيارة.

على سبيل المثال، إذا كانت تكلفة تشغيل سيارة 36,000 ريال سنويًا وأنجز بها الفني 1,200 مهمة، فتكلفة السيارة 30 ريالًا للمهمة. وإذا رفعت إصلاحات سيارة أقدم هذا الرقم إلى 45 ريالًا، فقد يكون استبدالها أرخص من الاحتفاظ بها. أضف الإهلاك من [إهلاك المركبات ودورة حياتها](/features/asset-management) للصورة الكاملة، واطّلع على [إدارة تكاليف الأسطول](/fleet-cost-tracking).`,
      },
      {
        kind: 'steps',
        heading: 'سير عمل الخدمة الميدانية في أكسبنس',
        steps: [
          { title: 'سجّل كل سيارات الخدمة', desc: 'اللوحة والماركة والطراز والعداد والحالة مع الفني المعيّن.' },
          { title: 'حدد الفترات بالكيلومتر', desc: 'يعرض أكسبنس المتبقي لكل صيانة ليحجزها المخطط في الأيام الأهدأ.' },
          { title: 'افحص عند كل تسليم', desc: 'قائمة قصيرة كلما تغيّر فني السيارة، مع تسجيل البنود غير المطابقة عليها.' },
          { title: 'حدّث تعيين السائق', desc: 'تنتقل المسؤولية مع السيارة، فترتبط المصروفات والفحوصات اللاحقة بالشخص الصحيح.' },
          { title: 'سجّل التكاليف لحظة حدوثها', desc: 'الإصلاحات والإطارات والتأمين لكل سيارة وفئة.' },
          { title: 'راجع الجاهزية والتكلفة أسبوعيًا', desc: 'السيارات المستحقة قريبًا والمتأخرة والتكلفة لكل سيارة في لوحة المتابعة.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'الوحدات التي تستخدمها شركات الخدمة الميدانية',
        items: [
          { icon: 'truck', title: 'إدارة المركبات', desc: 'كل سيارة بحالتها وعدادها والفني المعيّن عليها.', href: '/features/vehicle-management' },
          { icon: 'users', title: 'إدارة السائقين', desc: 'عيّن الفنيين على السيارات واجعل التسليم واضحًا.', href: '/features/drivers' },
          { icon: 'calendar', title: 'الصيانة الوقائية', desc: 'فترات بالكيلومتر لتُخطط الصيانة حول المهام.', href: '/features/preventive-maintenance' },
          { icon: 'clipboard', title: 'الفحوصات', desc: 'قوائم التسليم والفحص الدوري مسجلة على كل سيارة.', href: '/features/inspection-management' },
          { icon: 'dollar', title: 'المصروفات', desc: 'كل إصلاح وتكلفة تشغيل مسجلة لكل سيارة.', href: '/features/expense-management' },
          { icon: 'chart', title: 'التقارير', desc: 'حالة الصيانة وتكلفة كل سيارة في شاشة واحدة.', href: '/features/reports-analytics' },
        ],
      },
      {
        kind: 'checklist',
        heading: 'مؤشرات أساطيل الخدمة الميدانية',
        intro: 'مقاييس شائعة في الخدمة الميدانية، مبنية على سجلات أكسبنس وأرقام المهام لديك.',
        items: [
          { text: 'السيارات الجاهزة صباح كل يوم مقابل الفنيين المجدولين.' },
          { text: 'الصيانات المستحقة خلال 1,000 كم القادمة لتخطيط الأسبوع.' },
          { text: 'الصيانات المتأخرة، ويجب أن تكون نادرة في أسطول مخطط.' },
          { text: 'تكلفة السيارة لكل مهمة أو لكل فني.' },
          { text: 'فحوصات التسليم التي بها بنود غير مطابقة لكل سيارة.' },
        ],
      },
      {
        kind: 'text',
        heading: 'مثال: شركة تكييف لديها 25 سيارة فنيين',
        body: `لنتخيل شركة صيانة تكييف افتراضية لديها 25 سيارة فان وسيارتان احتياطيتان وموسم ذروة كل صيف. تُحجز الصيانة عندما يشتكي الفني، وتنتقل السيارات من يد ليد كلما أخذ أحدهم إجازة.

يسجّل فريق التشغيل كل السيارات في أكسبنس، ويعيّن كل سيارة لفنيها، ويحدد فترات الصيانة بالكيلومتر. وقبل ذروة الصيف يراجع المخطط السيارات التي ستصل لموعد صيانتها في الأسابيع القادمة ويحجزها في أشهر الربيع الأهدأ. ويُطبَّق فحص التسليم، فعندما يأخذ فني إجازة تُسجَّل حالة السيارة قبل أن يستلمها زميله.

وفي نهاية الموسم يكون لدى الفريق سجل تكلفة لكل سيارة، ويعرف أي السيارات احتاجت أكبر قدر من الإصلاحات في أكثر الأشهر ضغطًا، وهذا يدخل مباشرة في قرارات الاستبدال للعام التالي.`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'How does Axpense help keep technician vans available?', a: 'Km-based maintenance shows how far each van is from its next service, so planners can book services on quieter days instead of waiting for a breakdown. The status on each vehicle record shows which vans are in the workshop.' },
      { q: 'How should we handle a van changing technicians?', a: 'Run a short handover inspection and update the driver assignment at the same time. The checklist result is recorded on the van, so the condition at handover is clear to both technicians.' },
      { q: 'Does Axpense dispatch jobs or show where vans are?', a: 'No. Axpense manages the vehicles themselves: records, maintenance, inspections, parts and costs. Keep using your job scheduling tools for dispatch.' },
      { q: 'Can we see what each van costs to run?', a: 'Yes. Repairs, parts, insurance and other expenses are recorded per van and category, and reports show the total per vehicle. Our guide on [how to calculate fleet costs](/blog/how-to-calculate-fleet-cost) helps you build the full monthly figure.' },
      { q: 'What does it cost for a small field service fleet?', a: 'Axpense is priced per vehicle per month with every feature included. A small fleet of 5–10 vehicles pays 350 EGP, 38 SAR or $10 per vehicle a month, and larger fleets pay less per vehicle. You can start free with no credit card, and onboarding is free. See the [pricing page](/pricing).' },
    ],
    ar: [
      { q: 'كيف يساعد أكسبنس في إبقاء سيارات الفنيين جاهزة؟', a: 'تُظهر الصيانة بالكيلومتر المسافة المتبقية حتى صيانة كل سيارة، فيحجزها المخطط في الأيام الأهدأ بدل انتظار العطل. وحالة كل سيارة في سجلها تُظهر ما في الورشة.' },
      { q: 'كيف نتعامل مع انتقال السيارة بين الفنيين؟', a: 'نفّذ فحص تسليم قصيرًا وحدّث تعيين السائق في الوقت نفسه. تُسجَّل نتيجة الفحص على السيارة، فتكون حالتها عند التسليم واضحة للفنيين كليهما.' },
      { q: 'هل يوزّع أكسبنس المهام أو يعرض مواقع السيارات؟', a: 'لا. يدير أكسبنس المركبات نفسها: السجلات والصيانة والفحوصات والقطع والتكاليف. استمر في استخدام أدوات جدولة المهام لديك لتوزيع العمل.' },
      { q: 'هل نستطيع معرفة تكلفة تشغيل كل سيارة؟', a: 'نعم. تُسجَّل الإصلاحات والقطع والتأمين وباقي المصروفات لكل سيارة وفئة، وتعرض التقارير الإجمالي لكل مركبة. اطّلع على [إدارة تكاليف الأسطول](/fleet-cost-tracking).' },
      { q: 'كم التكلفة لأسطول خدمة ميدانية صغير؟', a: 'يُسعَّر أكسبنس لكل مركبة شهريًا مع كل المزايا. الأسطول الصغير من 5 إلى 10 سيارات يدفع 350 جنيهًا أو 38 ريالًا أو 10 دولارات لكل سيارة شهريًا، ويقل سعر السيارة كلما كبر الأسطول. يمكنك البدء مجانًا دون بطاقة ائتمان، والتهيئة مجانية. اطّلع على [صفحة الأسعار](/pricing).' },
    ],
  },
  relatedPages: ['/fleet-maintenance-software', '/vehicle-inspection-software', '/features/drivers', '/features/preventive-maintenance', '/resources/preventive-maintenance-checklist'],
  relatedIndustries: ['/industries/distribution', '/industries/oil-and-gas', '/industries/manufacturing'],
  relatedArticles: ['reduce-vehicle-downtime', 'km-based-preventive-maintenance', 'how-to-calculate-fleet-cost'],
};
