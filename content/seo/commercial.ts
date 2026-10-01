import type { SeoPage } from '@/lib/seo-page';
import { FLEET_MAINTENANCE_SOFTWARE } from './commercial/fleet-maintenance-software';
import { FLEET_COST_TRACKING } from './commercial/fleet-cost-tracking';
import { VEHICLE_INSPECTION_SOFTWARE } from './commercial/vehicle-inspection-software';

// Arabic strings in this file were written by Claude — needs-native-review.

export const FLEET_MANAGEMENT_SOFTWARE: SeoPage = {
  path: '/fleet-management-software',
  type: 'commercial',
  updatedAt: '2026-09-29',
  primaryKeyword: { en: 'fleet management software', ar: 'برنامج إدارة الأسطول' },
  secondaryKeywords: {
    en: ['fleet management system', 'fleet management platform', 'vehicle fleet management software', 'fleet management solution for businesses', 'fleet management dashboard'],
    ar: ['نظام إدارة الأسطول', 'برنامج إدارة أسطول السيارات', 'نظام إدارة المركبات', 'إدارة سيارات الشركة'],
  },
  meta: {
    en: {
      title: 'Fleet Management Software for MENA Businesses',
      description: 'Fleet management software that puts vehicles, drivers, km-based maintenance, inspections and costs in one dashboard. Arabic & English. Book a demo.',
    },
    ar: {
      title: 'برنامج إدارة الأسطول للشركات',
      description: 'برنامج إدارة الأسطول الذي يجمع المركبات والسائقين والصيانة حسب الكيلومترات والفحوصات والتكاليف في لوحة واحدة، بالعربية والإنجليزية. احجز عرضًا تجريبيًا.',
    },
  },
  h1: { en: 'Fleet Management Software for Complete Fleet Control', ar: 'برنامج إدارة الأسطول للتحكم الكامل في مركبات شركتك' },
  navLabel: { en: 'Fleet management software', ar: 'برنامج إدارة الأسطول' },
  hero: {
    en: {
      badge: 'Fleet management software',
      intro: 'Axpense brings every company vehicle, driver, service, inspection and expense into one system, so your operations team always knows what each vehicle needs next and what it costs to run.',
    },
    ar: {
      badge: 'برنامج إدارة الأسطول',
      intro: 'يجمع أكسبنس كل مركبات الشركة وسائقيها وصيانتها وفحوصاتها ومصروفاتها في نظام واحد، ليعرف فريق التشغيل دائمًا ما تحتاجه كل مركبة بعد ذلك وكم تكلّف تشغيلها.',
    },
  },
  heroImage: 'dashboard',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'What is fleet management software?',
        body: `**Fleet management software is a system that keeps the records, maintenance and costs of a company’s vehicles in one place.** Instead of a spreadsheet for services, a WhatsApp group for problems and a folder of receipts for expenses, the fleet team works from one shared record per vehicle, with reminders for the work that is due.

For a business that runs 10, 50 or 500 vehicles, that single record is the difference between reacting to breakdowns and planning around them. Axpense is built for companies in Egypt, Saudi Arabia and the wider Middle East that run vans, trucks, pickups, company cars and service vehicles as part of their daily operations.`,
      },
      {
        kind: 'text',
        heading: 'The problems fleet teams run into without a system',
        body: `Most fleets don’t start with software. They start with an Excel sheet that one person updates, and it works until the fleet grows or that person goes on leave. The same problems show up in almost every company we speak to:

- **Services get missed.** Oil changes and periodic services are tracked from memory or a calendar, while the real trigger is how many kilometres the vehicle has driven. A van that drives 400 km a day reaches its service interval long before the date on the sheet.
- **Nobody knows what a vehicle really costs.** Repairs, spare parts, insurance and other expenses are paid from different budgets and never added up per vehicle, so it is hard to tell which vehicles should be replaced.
- **Records are scattered.** The service history is on paper at the workshop, the inspection forms are in a drawer and the driver assignment is in a message thread. When something goes wrong, rebuilding what happened takes days.
- **Problems found in inspections are lost.** A driver reports worn brakes, but the note never reaches the person who books the repair.

Fleet management software exists to close these gaps: one record per vehicle, reminders based on real usage, and costs attached to the vehicle they belong to.`,
      },
      {
        kind: 'steps',
        heading: 'How Axpense works, from vehicle to report',
        intro: 'You can set up the basics in a day. Each step builds on the one before it, so the data you enter once keeps paying off.',
        steps: [
          { title: 'Add your vehicles', desc: 'Register each vehicle with its plate, make, model, odometer reading and purchase details. This becomes the single record everything else attaches to.' },
          { title: 'Assign drivers', desc: 'Link drivers to the vehicles they use, so responsibility is clear and every inspection or expense can be traced to a person.' },
          { title: 'Set maintenance intervals by kilometre', desc: 'Define service intervals in kilometres (for example every 10,000 km for an oil change). Axpense tracks the distance left until each service is due.' },
          { title: 'Run inspections with checklists', desc: 'Drivers and supervisors complete checklist inspections, and failed items are recorded against the vehicle for follow-up.' },
          { title: 'Record expenses as they happen', desc: 'Repairs, spare parts, insurance and other costs are logged against the vehicle, so the cost of each vehicle builds up automatically.' },
          { title: 'Review reports and dashboards', desc: 'See services due, costs by vehicle and category, and the state of the fleet on one dashboard, without building a spreadsheet.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'Everything a fleet team works with, in one platform',
        intro: 'Each module does one job well and shares its data with the others. Open a module to see how it works in detail.',
        items: [
          { icon: 'truck', title: 'Vehicle management', desc: 'One searchable record per vehicle: identification, odometer, status, assigned driver and full history.', href: '/features/vehicle-management' },
          { icon: 'users', title: 'Driver management', desc: 'Assign drivers to vehicles and keep responsibility visible for every trip, inspection and expense.', href: '/features/drivers' },
          { icon: 'calendar', title: 'Km-based preventive maintenance', desc: 'Service reminders triggered by the kilometres each vehicle actually drives, not just by date.', href: '/features/preventive-maintenance' },
          { icon: 'package', title: 'Spare parts', desc: 'Track spare parts from purchase to installation, and see which parts went into which vehicle.', href: '/features/spare-parts' },
          { icon: 'clipboard', title: 'Inspections', desc: 'Checklist-based inspections with pass and fail results recorded on the vehicle’s history.', href: '/features/inspection-management' },
          { icon: 'dollar', title: 'Expenses', desc: 'Repairs, parts, insurance and other costs recorded against the vehicle they belong to.', href: '/features/expense-management' },
          { icon: 'trending', title: 'Depreciation and lifecycle', desc: 'Book value over time for each vehicle, to plan replacements and keep finance informed.', href: '/features/asset-management' },
          { icon: 'chart', title: 'Reports and dashboards', desc: 'Costs, maintenance status and fleet overview on one screen, ready to share with management.', href: '/features/reports-analytics' },
          { icon: 'wrench', title: 'Work orders', desc: 'Turn a service or a failed inspection into a tracked work order with status and costs.', href: '/features/work-orders', requires: 'workOrders' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'Every vehicle, and the distance left to its next service',
        image: 'vehicles',
        alt: 'Axpense vehicles list showing each vehicle’s odometer reading and the kilometres left until its next service',
        caption: 'The vehicles screen shows the odometer and the kilometres remaining until the next service for every vehicle.',
      },
      {
        kind: 'text',
        heading: 'Dashboards that answer the questions managers actually ask',
        body: `Fleet managers are asked the same questions every month: which vehicles are due for service, which ones are overdue, what the fleet cost this month and where the money went. The Axpense dashboard is built around those questions.

- **Maintenance status** shows services due soon and overdue, based on each vehicle’s kilometres.
- **Cost overview** shows total fleet spend and a breakdown by category, so a rise in repair costs is visible early.
- **Vehicle drill-down** takes you from the fleet total to the history of a single vehicle in one click.

Because every number comes from the records your team already keeps, the dashboard stays current without anyone preparing it. For the cost side in depth, see [fleet cost tracking](/fleet-cost-tracking).`,
      },
      {
        kind: 'checklist',
        heading: 'What changes when your fleet runs on one system',
        intro: 'We don’t promise percentages we can’t prove for your business. These are the practical changes teams see in day-to-day work.',
        items: [
          { text: 'Services are planned from real kilometres, so fewer are missed or done too late.' },
          { text: 'Each vehicle has one complete history that anyone on the team can open.' },
          { text: 'The cost of every vehicle is visible, which makes replacement decisions easier to justify.' },
          { text: 'Problems found in inspections stay on record until someone deals with them.' },
          { text: 'Month-end reporting takes minutes instead of a day of collecting receipts and sheets.' },
          { text: 'New team members can pick up the fleet without relying on one person’s memory.' },
        ],
      },
      {
        kind: 'text',
        heading: 'Fleet management, maintenance, costs and inspections: how the pieces fit',
        body: `Fleet management is the umbrella. Underneath it, three jobs take most of a fleet team’s time, and each has its own page with more detail:

- **Maintenance** keeps vehicles available. Axpense schedules preventive maintenance by kilometre and keeps the full service history. Read more about our [fleet maintenance software](/fleet-maintenance-software).
- **Costs** tell you whether each vehicle is still worth running. Axpense adds up every expense per vehicle and supports cost-per-km and total cost of ownership analysis. See [fleet cost tracking](/fleet-cost-tracking).
- **Inspections** catch problems early. Checklists record the condition of each vehicle and keep failed items visible. See our [vehicle inspection software](/vehicle-inspection-software).

You can start with the part that hurts most, usually missed services, and switch on the rest as your team gets comfortable.`,
      },
      {
        kind: 'cards',
        heading: 'Built for fleets across industries',
        intro: 'Different industries run different vehicles, but they all need to know what is due, what is broken and what it costs.',
        columns: 3,
        items: [
          { icon: 'truck', title: 'Logistics and transportation', desc: 'High-mileage trucks and vans where every day off the road costs money.', href: '/industries/logistics' },
          { icon: 'boxes', title: 'Distribution and FMCG', desc: 'Many light vehicles across branches, with drivers changing between routes.', href: '/industries/distribution' },
          { icon: 'hardhat', title: 'Construction', desc: 'Pickups, trucks and site vehicles spread across projects.', href: '/industries/construction' },
          { icon: 'flame', title: 'Oil and gas', desc: 'Field vehicles that need strict pre-trip inspections and heavy-duty servicing.', href: '/industries/oil-and-gas' },
          { icon: 'factory', title: 'Manufacturing', desc: 'Plant vehicles and company cars supporting production and delivery.', href: '/industries/manufacturing' },
          { icon: 'wrench', title: 'Field services', desc: 'Technician vans that have to be available when a job is booked.', href: '/industries/field-services' },
        ],
      },
      {
        kind: 'text',
        heading: 'Made for companies in Egypt, Saudi Arabia and the Middle East',
        body: `Axpense works in **Arabic and English**, so drivers, workshop staff and management can each use the language they are comfortable with. Pricing is available in Egyptian pounds, Saudi riyals and US dollars on our [pricing page](/pricing).

Onboarding is free and most teams are live in one day: we help you import your vehicles, set your first maintenance intervals and show your team the daily routine. Read more about [fleet management software in Egypt](/locations/egypt), [fleet management in Saudi Arabia](/locations/saudi-arabia) and [fleet management across the Middle East](/locations/mena).`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'ما هو برنامج إدارة الأسطول؟',
        body: `**برنامج إدارة الأسطول هو نظام يحفظ بيانات مركبات الشركة وصيانتها وتكاليفها في مكان واحد.** بدلًا من جدول إكسل للصيانة، ومجموعة واتساب للأعطال، وملف مليء بالإيصالات للمصروفات، يعمل فريق الأسطول من سجل واحد مشترك لكل مركبة، مع تنبيهات بالأعمال المستحقة.

للشركة التي تشغّل 10 أو 50 أو 500 مركبة، هذا السجل الموحد هو الفرق بين التعامل مع الأعطال بعد وقوعها والتخطيط لتجنبها. صُمم أكسبنس للشركات في مصر والسعودية ومنطقة الشرق الأوسط التي تشغّل سيارات نقل وشاحنات وسيارات بيك أب وسيارات شركة ومركبات خدمة ضمن عملها اليومي.`,
      },
      {
        kind: 'text',
        heading: 'مشكلات يواجهها فريق الأسطول بدون نظام',
        body: `معظم الأساطيل لا تبدأ ببرنامج. تبدأ بملف إكسل يحدّثه شخص واحد، وينجح الأمر حتى يكبر الأسطول أو يأخذ هذا الشخص إجازة. وتتكرر المشكلات نفسها في أغلب الشركات:

- **مواعيد صيانة تفوت.** تُتابع تغييرات الزيت والصيانة الدورية من الذاكرة أو التقويم، بينما المحرك الحقيقي هو عدد الكيلومترات التي قطعتها المركبة. سيارة توزيع تقطع 400 كم يوميًا تصل لموعد صيانتها قبل التاريخ المكتوب في الجدول بكثير.
- **لا أحد يعرف التكلفة الحقيقية للمركبة.** الإصلاحات وقطع الغيار والتأمين والمصروفات الأخرى تُدفع من ميزانيات مختلفة ولا تُجمع لكل مركبة، فيصعب معرفة أي المركبات حان وقت استبدالها.
- **السجلات متفرقة.** سجل الصيانة ورقي في الورشة، واستمارات الفحص في درج، وتعيين السائق في محادثة. وعندما يحدث خطأ، تستغرق إعادة تجميع ما حدث أيامًا.
- **مشكلات الفحص تضيع.** يبلّغ السائق عن تآكل الفرامل، لكن الملاحظة لا تصل لمن يحجز الإصلاح.

وُجد برنامج إدارة الأسطول لسد هذه الفجوات: سجل واحد لكل مركبة، وتنبيهات مبنية على الاستخدام الفعلي، وتكاليف مرتبطة بالمركبة التي تخصها.`,
      },
      {
        kind: 'steps',
        heading: 'كيف يعمل أكسبنس، من المركبة إلى التقرير',
        intro: 'يمكنك تجهيز الأساسيات في يوم واحد. كل خطوة تبني على ما قبلها، فالبيانات التي تدخلها مرة واحدة تستمر في إفادتك.',
        steps: [
          { title: 'أضف مركباتك', desc: 'سجّل كل مركبة برقم اللوحة والماركة والطراز وقراءة العداد وبيانات الشراء. هذا هو السجل الذي يرتبط به كل شيء آخر.' },
          { title: 'عيّن السائقين', desc: 'اربط السائقين بالمركبات التي يستخدمونها، لتكون المسؤولية واضحة ويمكن ربط كل فحص أو مصروف بشخص محدد.' },
          { title: 'حدد فترات الصيانة بالكيلومتر', desc: 'حدد فترات الصيانة بالكيلومترات (مثلًا تغيير الزيت كل 10,000 كم). يتابع أكسبنس المسافة المتبقية حتى موعد كل صيانة.' },
          { title: 'نفّذ الفحوصات بقوائم فحص', desc: 'يُكمل السائقون والمشرفون فحوصات بقوائم محددة، وتُسجَّل البنود غير المطابقة على المركبة للمتابعة.' },
          { title: 'سجّل المصروفات لحظة حدوثها', desc: 'الإصلاحات وقطع الغيار والتأمين وباقي التكاليف تُسجَّل على المركبة، فتتكوّن تكلفة كل مركبة تلقائيًا.' },
          { title: 'راجع التقارير ولوحات المتابعة', desc: 'اطّلع على الصيانة المستحقة والتكاليف حسب المركبة والفئة وحالة الأسطول في لوحة واحدة، دون إعداد جدول إكسل.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'كل ما يعمل به فريق الأسطول في منصة واحدة',
        intro: 'كل وحدة تؤدي مهمة واحدة بإتقان وتشارك بياناتها مع الوحدات الأخرى. افتح أي وحدة لترى تفاصيلها.',
        items: [
          { icon: 'truck', title: 'إدارة المركبات', desc: 'سجل واحد قابل للبحث لكل مركبة: بيانات التعريف والعداد والحالة والسائق المعيّن والسجل الكامل.', href: '/features/vehicle-management' },
          { icon: 'users', title: 'إدارة السائقين', desc: 'عيّن السائقين على المركبات وأبقِ المسؤولية واضحة في كل رحلة وفحص ومصروف.', href: '/features/drivers' },
          { icon: 'calendar', title: 'صيانة وقائية حسب الكيلومترات', desc: 'تنبيهات صيانة تعتمد على الكيلومترات التي تقطعها كل مركبة فعليًا، لا على التاريخ فقط.', href: '/features/preventive-maintenance' },
          { icon: 'package', title: 'قطع الغيار', desc: 'تتبّع قطع الغيار من الشراء حتى التركيب، واعرف أي قطعة ركّبت في أي مركبة.', href: '/features/spare-parts' },
          { icon: 'clipboard', title: 'الفحوصات', desc: 'فحوصات بقوائم محددة تُسجَّل نتائجها (مطابق وغير مطابق) في سجل المركبة.', href: '/features/inspection-management' },
          { icon: 'dollar', title: 'المصروفات', desc: 'الإصلاحات وقطع الغيار والتأمين وباقي التكاليف مسجلة على المركبة التي تخصها.', href: '/features/expense-management' },
          { icon: 'trending', title: 'الإهلاك ودورة الحياة', desc: 'القيمة الدفترية لكل مركبة بمرور الوقت، للتخطيط للاستبدال وإطلاع الإدارة المالية.', href: '/features/asset-management' },
          { icon: 'chart', title: 'التقارير ولوحات المتابعة', desc: 'التكاليف وحالة الصيانة ونظرة عامة على الأسطول في شاشة واحدة جاهزة للعرض على الإدارة.', href: '/features/reports-analytics' },
          { icon: 'wrench', title: 'أوامر العمل', desc: 'حوّل الصيانة أو بند الفحص غير المطابق إلى أمر عمل متابع بحالته وتكلفته.', href: '/features/work-orders', requires: 'workOrders' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'كل مركبة، والمسافة المتبقية حتى صيانتها القادمة',
        image: 'vehicles',
        alt: 'قائمة المركبات في أكسبنس تعرض قراءة العداد والكيلومترات المتبقية حتى الصيانة القادمة لكل مركبة',
        caption: 'تعرض شاشة المركبات قراءة العداد والكيلومترات المتبقية حتى الصيانة القادمة لكل مركبة.',
      },
      {
        kind: 'text',
        heading: 'لوحات متابعة تجيب عن أسئلة الإدارة الفعلية',
        body: `يُسأل مدير الأسطول الأسئلة نفسها كل شهر: أي المركبات مستحقة للصيانة، وأيها متأخرة، وكم كلّف الأسطول هذا الشهر، وأين ذهبت الأموال. بُنيت لوحة أكسبنس حول هذه الأسئلة.

- **حالة الصيانة** تعرض الصيانة المستحقة قريبًا والمتأخرة، بناءً على كيلومترات كل مركبة.
- **نظرة على التكاليف** تعرض إجمالي إنفاق الأسطول وتوزيعه حسب الفئة، فيظهر ارتفاع تكاليف الإصلاح مبكرًا.
- **التفاصيل لكل مركبة** تنقلك من إجمالي الأسطول إلى سجل مركبة واحدة بنقرة.

ولأن كل رقم يأتي من السجلات التي يحتفظ بها فريقك أصلًا، تبقى اللوحة محدّثة دون أن يُعدّها أحد. ولمزيد من التفاصيل عن التكاليف، اطّلع على [إدارة تكاليف الأسطول](/fleet-cost-tracking).`,
      },
      {
        kind: 'checklist',
        heading: 'ما الذي يتغير عندما يعمل أسطولك على نظام واحد',
        intro: 'لا نعد بنسب لا نستطيع إثباتها لشركتك. هذه هي التغييرات العملية التي تلاحظها الفرق في العمل اليومي.',
        items: [
          { text: 'تُخطَّط الصيانة من الكيلومترات الفعلية، فيقل ما يفوت منها أو ما يُنفَّذ متأخرًا.' },
          { text: 'لكل مركبة سجل كامل واحد يستطيع أي فرد في الفريق فتحه.' },
          { text: 'تكلفة كل مركبة ظاهرة، فيسهل تبرير قرارات الاستبدال.' },
          { text: 'المشكلات التي تُكتشف في الفحص تبقى مسجلة حتى يتعامل معها أحد.' },
          { text: 'تقارير نهاية الشهر تستغرق دقائق بدلًا من يوم كامل لجمع الإيصالات والجداول.' },
          { text: 'يستطيع الموظف الجديد استلام ملف الأسطول دون الاعتماد على ذاكرة شخص واحد.' },
        ],
      },
      {
        kind: 'text',
        heading: 'الإدارة والصيانة والتكاليف والفحص: كيف تتكامل الأجزاء',
        body: `إدارة الأسطول هي المظلة الكبيرة. وتحتها ثلاث مهام تستهلك معظم وقت فريق الأسطول، ولكل منها صفحة بتفاصيل أكثر:

- **الصيانة** تُبقي المركبات جاهزة للعمل. يجدول أكسبنس الصيانة الوقائية حسب الكيلومترات ويحتفظ بسجل الصيانة كاملًا. اقرأ المزيد عن [برنامج صيانة الأسطول](/fleet-maintenance-software).
- **التكاليف** توضح لك إن كانت كل مركبة ما زالت تستحق التشغيل. يجمع أكسبنس كل مصروف لكل مركبة ويدعم تحليل تكلفة الكيلومتر والتكلفة الإجمالية للملكية. اطّلع على [إدارة تكاليف الأسطول](/fleet-cost-tracking).
- **الفحوصات** تكشف المشكلات مبكرًا. تسجّل قوائم الفحص حالة كل مركبة وتُبقي البنود غير المطابقة ظاهرة. اطّلع على [برنامج فحص المركبات](/vehicle-inspection-software).

يمكنك البدء بالجزء الأكثر إزعاجًا، وغالبًا ما يكون الصيانة الفائتة، ثم تفعيل الباقي مع تعوّد فريقك.`,
      },
      {
        kind: 'cards',
        heading: 'مصمم لأساطيل مختلف القطاعات',
        intro: 'تختلف المركبات من قطاع لآخر، لكن الجميع يحتاج أن يعرف ما المستحق وما المعطّل وكم التكلفة.',
        columns: 3,
        items: [
          { icon: 'truck', title: 'النقل والشحن', desc: 'شاحنات وسيارات نقل تقطع مسافات طويلة، وكل يوم توقف له تكلفة.', href: '/industries/logistics' },
          { icon: 'boxes', title: 'التوزيع والسلع الاستهلاكية', desc: 'عدد كبير من المركبات الخفيفة في الفروع، مع سائقين يتنقلون بين الخطوط.', href: '/industries/distribution' },
          { icon: 'hardhat', title: 'المقاولات', desc: 'سيارات بيك أب وشاحنات ومركبات مواقع موزعة على المشروعات.', href: '/industries/construction' },
          { icon: 'flame', title: 'البترول والغاز', desc: 'مركبات ميدانية تحتاج فحصًا صارمًا قبل الرحلة وصيانة للخدمة الشاقة.', href: '/industries/oil-and-gas' },
          { icon: 'factory', title: 'المصانع', desc: 'مركبات المصنع وسيارات الشركة التي تخدم الإنتاج والتوزيع.', href: '/industries/manufacturing' },
          { icon: 'wrench', title: 'الخدمات الميدانية', desc: 'سيارات الفنيين التي يجب أن تكون جاهزة عند حجز أي مهمة.', href: '/industries/field-services' },
        ],
      },
      {
        kind: 'text',
        heading: 'مصمم للشركات في مصر والسعودية والشرق الأوسط',
        body: `يعمل أكسبنس **بالعربية والإنجليزية**، ليستخدم السائقون وفريق الورشة والإدارة اللغة التي تناسب كلًّا منهم. والأسعار متاحة بالجنيه المصري والريال السعودي والدولار الأمريكي في [صفحة الأسعار](/pricing).

التهيئة مجانية، ومعظم الفرق تبدأ العمل خلال يوم واحد: نساعدك في إدخال مركباتك وضبط أول فترات صيانة وتعريف فريقك بالروتين اليومي. اقرأ المزيد عن [برنامج إدارة الأسطول في مصر](/locations/egypt) و[نظام إدارة الأسطول في السعودية](/locations/saudi-arabia) و[إدارة الأسطول في الشرق الأوسط](/locations/mena).`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'What is fleet management software?', a: 'It is a system that keeps every company vehicle’s records, maintenance, inspections and costs in one place, with reminders for work that is due. Axpense does this for businesses in Egypt, Saudi Arabia and the Middle East.' },
      { q: 'What does Axpense track?', a: 'Vehicles, drivers and their assignments, km-based preventive maintenance and service history, spare parts, checklist inspections, expenses, depreciation, and dashboards and reports built from those records.' },
      { q: 'How is Axpense different from managing the fleet in Excel?', a: 'A spreadsheet only knows what someone typed into it. Axpense links every service, inspection and expense to the vehicle, calculates when the next service is due from the kilometres driven, and keeps the history even when people change. See [fleet management in Excel vs software](/blog/fleet-management-excel-vs-software).' },
      { q: 'Does Axpense work in Arabic and English?', a: 'Yes. The platform is available in Arabic and English, so each person on your team can use the language they prefer.' },
      { q: 'How long does onboarding take?', a: 'Most teams are live in one day. Onboarding is free: we help you add your vehicles, set your first maintenance intervals and show your team the daily routine.' },
      { q: 'How much does Axpense cost?', a: 'Axpense is priced per vehicle per month, with every feature included. A fleet of 5–10 vehicles pays 350 EGP, 38 SAR or $10 per vehicle a month, and the price per vehicle falls as the fleet grows; for example, 25 vehicles cost 8,000 EGP a month. Billing annually saves 20%, and you can start free with no credit card. Every tier is on the [pricing page](/pricing).' },
      { q: 'Which industries use Axpense?', a: 'Logistics and transportation, distribution, construction, oil and gas, manufacturing and field services, as well as any company that runs its own vehicles. See [industries](/industries).' },
    ],
    ar: [
      { q: 'ما هو برنامج إدارة الأسطول؟', a: 'هو نظام يحفظ بيانات كل مركبات الشركة وصيانتها وفحوصاتها وتكاليفها في مكان واحد، مع تنبيهات بالأعمال المستحقة. يقدم أكسبنس ذلك للشركات في مصر والسعودية والشرق الأوسط.' },
      { q: 'ماذا يتابع أكسبنس؟', a: 'المركبات، والسائقين وتعييناتهم، والصيانة الوقائية حسب الكيلومترات وسجل الصيانة، وقطع الغيار، والفحوصات بقوائم محددة، والمصروفات، والإهلاك، ولوحات المتابعة والتقارير المبنية على هذه السجلات.' },
      { q: 'ما الفرق بين أكسبنس وإدارة الأسطول على إكسل؟', a: 'الجدول لا يعرف إلا ما كتبه أحدهم فيه. أما أكسبنس فيربط كل صيانة وفحص ومصروف بالمركبة، ويحسب موعد الصيانة القادمة من الكيلومترات المقطوعة، ويحتفظ بالسجل حتى لو تغيّر الأشخاص. اقرأ [إدارة الأسطول بالإكسل أم ببرنامج](/blog/fleet-management-excel-vs-software).' },
      { q: 'هل يعمل أكسبنس بالعربية والإنجليزية؟', a: 'نعم. المنصة متاحة بالعربية والإنجليزية، ليستخدم كل فرد في فريقك اللغة التي يفضّلها.' },
      { q: 'كم تستغرق التهيئة؟', a: 'تبدأ معظم الفرق العمل خلال يوم واحد. التهيئة مجانية: نساعدك في إضافة مركباتك وضبط أول فترات صيانة وتعريف فريقك بالروتين اليومي.' },
      { q: 'كم تبلغ تكلفة أكسبنس؟', a: 'يُسعَّر أكسبنس لكل مركبة شهريًا، ويشمل كل اشتراك جميع المزايا. الأسطول من 5 إلى 10 مركبات يدفع 350 جنيهًا مصريًا أو 38 ريالًا سعوديًا أو 10 دولارات لكل مركبة شهريًا، وينخفض سعر المركبة كلما كبر الأسطول؛ فمثلًا تكلّف 25 مركبة 8,000 جنيه شهريًا. الدفع السنوي يوفّر 20%، ويمكنك البدء مجانًا دون بطاقة ائتمان. كل الشرائح في [صفحة الأسعار](/pricing).' },
      { q: 'ما القطاعات التي تستخدم أكسبنس؟', a: 'النقل والشحن، والتوزيع، والمقاولات، والبترول والغاز، والمصانع، والخدمات الميدانية، وأي شركة تشغّل مركباتها الخاصة. اطّلع على [القطاعات](/industries).' },
    ],
  },
  relatedPages: ['/fleet-maintenance-software', '/fleet-cost-tracking', '/vehicle-inspection-software', '/features/vehicle-management', '/features/drivers', '/features/reports-analytics', '/locations/egypt', '/locations/saudi-arabia', '/locations/mena', '/pricing'],
  relatedIndustries: ['/industries/logistics', '/industries/distribution', '/industries/construction', '/industries/oil-and-gas', '/industries/manufacturing', '/industries/field-services'],
  relatedArticles: ['what-is-fleet-management-software', 'fleet-management-excel-vs-software', 'km-based-preventive-maintenance'],
  schemaName: 'Axpense Fleet Management Software',
};

export const COMMERCIAL_PAGES: SeoPage[] = [FLEET_MANAGEMENT_SOFTWARE, FLEET_MAINTENANCE_SOFTWARE, FLEET_COST_TRACKING, VEHICLE_INSPECTION_SOFTWARE];
