// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const FLEET_MAINTENANCE_SOFTWARE: SeoPage = {
  path: '/fleet-maintenance-software',
  type: 'commercial',
  updatedAt: '2026-09-29',
  primaryKeyword: { en: 'fleet maintenance software', ar: 'برنامج صيانة الأسطول' },
  secondaryKeywords: {
    en: ['vehicle maintenance software', 'fleet maintenance management system', 'vehicle maintenance tracking', 'maintenance scheduling software', 'vehicle service history', 'fleet downtime'],
    ar: ['برنامج صيانة السيارات', 'نظام إدارة صيانة المركبات', 'الصيانة الوقائية للسيارات', 'جدول صيانة السيارات', 'سجل صيانة السيارة'],
  },
  meta: {
    en: {
      title: 'Fleet Maintenance Software: Preventive Service by KM',
      description: 'Fleet maintenance software that schedules services by kilometres driven, flags overdue vehicles and keeps every service history. Book a demo.',
    },
    ar: {
      title: 'برنامج صيانة الأسطول والصيانة الوقائية',
      description: 'برنامج صيانة الأسطول الذي يحدد موعد كل صيانة حسب الكيلومترات المقطوعة، وينبّهك قبل استحقاقها، ويحفظ سجل الصيانة الكامل لكل مركبة. احجز عرضًا تجريبيًا.',
    },
  },
  h1: { en: 'Fleet Maintenance Software for Preventive Vehicle Maintenance', ar: 'برنامج صيانة الأسطول: صيانة وقائية حسب الكيلومترات' },
  navLabel: { en: 'Fleet maintenance software', ar: 'برنامج صيانة الأسطول' },
  hero: {
    en: {
      badge: 'Fleet maintenance software',
      intro: 'Axpense schedules every service from the kilometres each vehicle actually drives, reminds your team before a service falls due, and keeps a complete service history per vehicle, so fewer services are missed and fewer vehicles break down between jobs.',
    },
    ar: {
      badge: 'برنامج صيانة الأسطول',
      intro: 'يحدد أكسبنس موعد كل صيانة من الكيلومترات التي تقطعها المركبة فعليًا، وينبّه فريقك قبل أن يحين موعدها، ويحفظ سجل صيانة كاملًا لكل مركبة، فتقل مواعيد الصيانة الفائتة والأعطال المفاجئة أثناء العمل.',
    },
  },
  heroImage: 'maintenance',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'What is fleet maintenance software?',
        body: `**Fleet maintenance software is a system that plans, reminds and records the servicing of a company’s vehicles.** It knows each vehicle’s odometer and service intervals, tells you which services are due or overdue, and keeps the full service history, spare parts and repair costs on the vehicle’s record.

The goal is simple: service vehicles before they fail, not after. Axpense does this for fleets in Egypt, Saudi Arabia and the Middle East, with intervals measured in kilometres rather than guessed from the calendar.`,
      },
      {
        kind: 'text',
        heading: 'Why kilometre-based preventive maintenance beats calendar-only schedules',
        body: `Most fleets start with a calendar: service every three or six months. The problem is that engines, brakes and tyres wear with distance, not with dates. Two identical pickups bought on the same day can be thousands of kilometres apart after a quarter.

For example, a delivery van in Cairo that drives 300 km a day covers about 7,500 km a month. If its oil service is due every 10,000 km, a quarterly calendar reminder arrives almost two services late. Meanwhile a pool car that sits in the car park most of the week gets serviced before it needs it, which wastes oil, parts and workshop time.

Kilometre-based preventive maintenance fixes both cases:

- **High-mileage vehicles** are serviced when their usage says so, before wear turns into a breakdown on the road.
- **Low-mileage vehicles** are not pulled off duty for work they don’t need yet.
- **The workshop** gets a predictable list of what is coming up, instead of a queue of emergencies.

Calendar limits still matter for some items, such as fluids that age even when a vehicle stands still, so follow the manufacturer’s guidance on both distance and time. The difference is that distance becomes the main trigger. Our feature page on [km-based preventive maintenance](/features/preventive-maintenance) shows the reminder logic in more detail.`,
      },
      {
        kind: 'steps',
        heading: 'How a service moves through Axpense',
        intro: 'Every service follows the same path, from the first odometer reading to a permanent line in the vehicle’s history. Nothing depends on one person remembering.',
        steps: [
          { title: 'Odometer reading is updated', desc: 'The vehicle’s current kilometres are recorded on its profile. Every calculation that follows starts from this number.' },
          { title: 'The interval comes due', desc: 'Axpense compares the odometer with the kilometres at the last service and the interval you set, and works out how many kilometres are left.' },
          { title: 'Your team gets a reminder', desc: 'As a vehicle approaches its service point, it appears as due soon; if it passes that point, it is marked as overdue so it cannot be quietly forgotten.' },
          { title: 'The vehicle is serviced', desc: 'The workshop or your service provider carries out the work, and the service is recorded against the vehicle with its date and odometer reading.' },
          { title: 'A work order tracks the job', desc: 'The service is opened as a work order with its status, assigned technician and tasks, and closed when the vehicle is back on the road.', requires: 'workOrders' },
          { title: 'Spare parts are linked', desc: 'Parts used in the service are recorded against the vehicle, so you know exactly which filter, pads or battery went into which vehicle.' },
          { title: 'The cost is recorded', desc: 'Labour and parts are logged as expenses on the vehicle, adding to its running cost by category.' },
          { title: 'History is updated and the next interval starts', desc: 'The service joins the vehicle’s history, and the countdown to the next service restarts from the new odometer reading.' },
        ],
      },
      {
        kind: 'text',
        heading: 'Maintenance intervals and reminders',
        body: `A good maintenance plan lists each service, the distance between services and what the service includes. In Axpense you set intervals in kilometres, and each vehicle shows the kilometres left until its next service. The table below gives typical ranges for light commercial vehicles as an example only; always **follow the manufacturer’s schedule** for your vehicles and adjust for heavy loads, heat and dust.

| Service | Example interval | Why it matters |
|---|---|---|
| Engine oil and filter | 5,000–10,000 km | Depends on oil type and driving conditions |
| Air filter | 15,000–30,000 km | Shorter on dusty roads and construction sites |
| Brake pads and discs check | 10,000–20,000 km | Wear rises with stop-start city driving |
| Tyre rotation and alignment | 10,000 km | Even wear extends tyre life |
| Major service | 40,000–60,000 km | Belts, fluids, plugs, full vehicle check |

Reminders work in two stages. A vehicle first shows as **due soon** as it gets close to the interval, which gives you time to book the workshop around its schedule. If the interval is passed, it shows as **overdue**, and it stays that way until the service is recorded. If you want a starting list of tasks for each service, use our free [preventive maintenance checklist](/resources/preventive-maintenance-checklist).`,
      },
      {
        kind: 'text',
        heading: 'A complete service history for every vehicle',
        body: `The service history is the record of everything that has been done to a vehicle: which service, on what date, at what odometer reading, with which parts and at what cost. It answers questions that paper files rarely can, such as when the timing belt was last changed or how often a particular truck has needed brake work this year.

In Axpense the history lives on the vehicle itself, next to its plate, make, model and assigned driver in [vehicle management](/features/vehicle-management). When a vehicle moves between branches or a fleet coordinator leaves, the history stays. It also helps at resale time, because a buyer can see that the vehicle was maintained on schedule.`,
      },
      {
        kind: 'screenshot',
        heading: 'Services due, overdue and done, per vehicle',
        image: 'maintenance',
        alt: 'Axpense maintenance screen listing vehicles with their next service, kilometres remaining and overdue status',
        caption: 'The maintenance screen shows each vehicle’s next service, the kilometres left and which services are already overdue.',
      },
      {
        kind: 'text',
        heading: 'Spare parts and their lifecycle',
        body: `Most services consume parts: filters, pads, belts, batteries, tyres. When parts are bought in bulk and fitted over weeks, it becomes hard to say which part went where, whether it failed early, or whether the stock is being used on the vehicles it was bought for.

Axpense tracks spare parts from purchase to installation, so each part is linked to the vehicle it went into and the service it was fitted in. Over time that gives you a lifecycle per part: when it was installed, at what kilometres, and when it had to be replaced. If a brand of brake pads keeps wearing out after half the expected distance, the pattern shows up in the records. See [spare parts management](/features/spare-parts) for how parts are recorded.`,
      },
      {
        kind: 'text',
        heading: 'Maintenance costs, on the vehicle they belong to',
        body: `Every service and repair recorded in Axpense can carry its cost, split into categories such as labour, parts and repairs, so maintenance spend adds up per vehicle without a separate spreadsheet. That makes it easy to spot the vehicle whose repair bills keep climbing. For cost per km, total cost of ownership and the wider cost picture, see [fleet cost tracking](/fleet-cost-tracking).`,
      },
      {
        kind: 'checklist',
        heading: 'How preventive maintenance reduces fleet downtime',
        intro: 'Downtime is the time a vehicle cannot work: waiting for a tow, a diagnosis, a part or a workshop slot. Most of it comes from failures nobody planned for. These are the practical ways a maintenance system cuts it down.',
        items: [
          { text: 'Services are done at the right distance, so fewer components wear out on the road.' },
          { text: 'Planned work is booked around the vehicle’s schedule, on a quiet day, instead of in the middle of a delivery run.' },
          { text: 'Overdue vehicles are visible to everyone, so a missed service is caught within days, not months.' },
          { text: 'Repeat problems on the same vehicle show up in its history, pointing to a root cause instead of another quick fix.' },
          { text: 'Knowing which parts are coming due helps you have them ready before the vehicle arrives at the workshop.' },
          { text: 'Findings from [vehicle inspections](/vehicle-inspection-software) are recorded on the same vehicle record, so small defects are followed up before they become breakdowns.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'Maintenance reports your managers will use',
        intro: 'Reports are built from the services, parts and costs your team already records, so nobody has to prepare them at month end.',
        columns: 2,
        items: [
          { icon: 'gauge', title: 'Maintenance status', desc: 'Which vehicles are due soon and which are overdue, based on each vehicle’s kilometres, on one screen.' },
          { icon: 'dollar', title: 'Maintenance cost by vehicle', desc: 'What each vehicle has cost in services and repairs, so expensive vehicles stand out.' },
          { icon: 'chart', title: 'Cost by category', desc: 'How spend splits between parts, labour and repairs across the fleet, and how it changes month to month.' },
          { icon: 'truck', title: 'Fleet overview', desc: 'The state of the whole fleet at a glance, with a drill-down into any single vehicle’s history.' },
        ],
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'ما هو برنامج صيانة الأسطول؟',
        body: `**برنامج صيانة الأسطول هو نظام يخطط لصيانة مركبات الشركة وينبّه بمواعيدها ويسجّل كل ما يتم فيها.** يعرف قراءة عداد كل مركبة وفترات صيانتها، ويوضح لك ما هو مستحق وما هو متأخر، ويحفظ سجل الصيانة وقطع الغيار وتكاليف الإصلاح على ملف المركبة.

الهدف بسيط: أن تُصان المركبة قبل أن تتعطل، لا بعد. يقدم أكسبنس ذلك للأساطيل في مصر والسعودية والشرق الأوسط، مع فترات صيانة تُحسب بالكيلومترات بدلًا من تقديرها بالتقويم.`,
      },
      {
        kind: 'text',
        heading: 'لماذا تتفوق الصيانة حسب الكيلومترات على الجدول الزمني وحده',
        body: `تبدأ أغلب الأساطيل بجدول زمني: صيانة كل ثلاثة أو ستة أشهر. لكن المحرك والفرامل والإطارات تتآكل مع المسافة لا مع التاريخ. سيارتا بيك أب متطابقتان اشترتهما الشركة في اليوم نفسه قد يفصل بينهما آلاف الكيلومترات بعد ربع سنة.

مثال: سيارة توزيع في القاهرة تقطع 300 كم يوميًا، أي نحو 7,500 كم شهريًا. إذا كان تغيير الزيت كل 10,000 كم، فالتذكير الربع سنوي يصل متأخرًا بما يقارب صيانتين. وفي المقابل، سيارة إدارية تقف في الموقف معظم الأسبوع تدخل الصيانة قبل حاجتها، فيضيع الزيت وقطع الغيار ووقت الورشة.

الصيانة حسب الكيلومترات تعالج الحالتين:

- **المركبات كثيرة الاستخدام** تُصان عندما يستدعي استخدامها ذلك، قبل أن يتحول التآكل إلى عطل على الطريق.
- **المركبات قليلة الاستخدام** لا تُسحب من العمل لأعمال لا تحتاجها بعد.
- **الورشة** تحصل على قائمة واضحة بما هو قادم بدلًا من طابور من الحالات الطارئة.

تبقى الحدود الزمنية مهمة لبعض البنود، مثل السوائل التي تتقادم حتى لو لم تتحرك السيارة، فاتبع توصيات الشركة المصنّعة في المسافة والمدة معًا. الفرق أن المسافة تصبح المحرك الأساسي. تشرح صفحة [الصيانة الوقائية للسيارات](/features/preventive-maintenance) منطق التنبيهات بتفصيل أكبر.`,
      },
      {
        kind: 'steps',
        heading: 'رحلة الصيانة داخل أكسبنس',
        intro: 'كل صيانة تمر بالمسار نفسه، من قراءة العداد حتى سطر دائم في سجل المركبة، دون الاعتماد على ذاكرة أحد.',
        steps: [
          { title: 'تحديث قراءة العداد', desc: 'تُسجَّل الكيلومترات الحالية على ملف المركبة، ومنها تبدأ كل الحسابات التالية.' },
          { title: 'اقتراب موعد الصيانة', desc: 'يقارن أكسبنس العداد بكيلومترات آخر صيانة وبالفترة المحددة، ويحسب الكيلومترات المتبقية.' },
          { title: 'تنبيه لفريقك', desc: 'عندما تقترب المركبة من موعدها تظهر كمستحقة قريبًا، وإذا تجاوزته تظهر كمتأخرة فلا تُنسى.' },
          { title: 'تنفيذ الصيانة', desc: 'تنفذ الورشة أو مقدم الخدمة العمل، وتُسجَّل الصيانة على المركبة بتاريخها وقراءة العداد.' },
          { title: 'أمر عمل لمتابعة المهمة', desc: 'تُفتح الصيانة كأمر عمل بحالته والفني المسؤول والمهام، ويُغلق عند عودة المركبة للعمل.', requires: 'workOrders' },
          { title: 'ربط قطع الغيار', desc: 'تُسجَّل القطع المستخدمة على المركبة، فتعرف أي فلتر أو تيل فرامل أو بطارية ركّبت في أي سيارة.' },
          { title: 'تسجيل التكلفة', desc: 'تُسجَّل تكلفة العمالة والقطع كمصروفات على المركبة حسب الفئة.' },
          { title: 'تحديث السجل وبدء الفترة التالية', desc: 'تنضم الصيانة إلى سجل المركبة، ويبدأ العد التنازلي للصيانة القادمة من القراءة الجديدة.' },
        ],
      },
      {
        kind: 'text',
        heading: 'فترات الصيانة والتنبيهات',
        body: `جدول صيانة السيارات الجيد يحدد كل نوع صيانة والمسافة بين كل مرة وما يشمله العمل. في أكسبنس تحدد الفترات بالكيلومترات، وتعرض كل مركبة الكيلومترات المتبقية حتى صيانتها القادمة. الجدول التالي يعرض نطاقات شائعة للمركبات التجارية الخفيفة كمثال فقط؛ **اتبع دائمًا جدول الشركة المصنّعة** لمركباتك، وعدّل حسب الأحمال والحرارة والأتربة.

| الصيانة | فترة على سبيل المثال | ملاحظة |
|---|---|---|
| زيت المحرك والفلتر | 5,000–10,000 كم | حسب نوع الزيت وظروف القيادة |
| فلتر الهواء | 15,000–30,000 كم | أقصر في الطرق الترابية ومواقع العمل |
| فحص تيل وأسطوانات الفرامل | 10,000–20,000 كم | يزيد التآكل مع القيادة داخل المدن |
| تبديل الإطارات وضبط الزوايا | 10,000 كم | لتآكل متساوٍ وعمر أطول |
| الصيانة الكبرى | 40,000–60,000 كم | السيور والسوائل والبواجي وفحص شامل |

يعمل التنبيه على مرحلتين: تظهر المركبة أولًا **مستحقة قريبًا** عند اقترابها من الفترة، فتجد وقتًا لحجز الورشة بما يناسب جدول عملها. وإذا تجاوزت الفترة تظهر **متأخرة**، وتبقى كذلك حتى تُسجَّل الصيانة. ولقائمة مهام جاهزة لكل صيانة، استخدم [جدول الصيانة الدورية للسيارات](/resources/preventive-maintenance-checklist) المجاني.`,
      },
      {
        kind: 'text',
        heading: 'سجل صيانة كامل لكل سيارة',
        body: `سجل صيانة السيارة هو كل ما نُفّذ عليها: نوع الصيانة وتاريخها وقراءة العداد والقطع المستخدمة والتكلفة. يجيب عن أسئلة نادرًا ما تجيب عنها الملفات الورقية، مثل متى غُيّر سير الكاتينة آخر مرة، أو كم مرة احتاجت شاحنة معينة لإصلاح الفرامل هذا العام.

في أكسبنس يعيش السجل على ملف المركبة نفسه، بجانب رقم اللوحة والماركة والطراز والسائق المعيّن في [إدارة المركبات](/features/vehicle-management). وإذا انتقلت المركبة بين الفروع أو ترك منسق الأسطول عمله، يبقى السجل كما هو. ويفيد أيضًا عند البيع، لأن المشتري يرى أن السيارة صينت في مواعيدها.`,
      },
      {
        kind: 'screenshot',
        heading: 'الصيانة المستحقة والمتأخرة والمنفّذة لكل مركبة',
        image: 'maintenance',
        alt: 'شاشة الصيانة في أكسبنس تعرض المركبات مع صيانتها القادمة والكيلومترات المتبقية وحالة التأخير',
        caption: 'تعرض شاشة الصيانة الصيانة القادمة لكل مركبة والكيلومترات المتبقية وما تأخر منها.',
      },
      {
        kind: 'text',
        heading: 'قطع الغيار ودورة حياتها',
        body: `أغلب أعمال الصيانة تستهلك قطعًا: فلاتر وتيل فرامل وسيور وبطاريات وإطارات. وعندما تُشترى القطع بالجملة وتُركّب على مدى أسابيع، يصعب معرفة أين ذهبت كل قطعة، وهل تلفت مبكرًا، وهل استُخدمت في المركبات التي اشتُريت لها.

يتابع أكسبنس قطع الغيار من الشراء حتى التركيب، فترتبط كل قطعة بالمركبة التي ركّبت فيها والصيانة التي تمت خلالها. ومع الوقت تتكوّن دورة حياة لكل قطعة: متى رُكّبت، وعند أي كيلومتر، ومتى احتاجت للاستبدال. فإذا كان نوع معين من تيل الفرامل يتآكل بعد نصف المسافة المتوقعة، يظهر ذلك في السجلات. اطّلع على [إدارة قطع الغيار](/features/spare-parts).`,
      },
      {
        kind: 'text',
        heading: 'تكاليف الصيانة على المركبة التي تخصها',
        body: `كل صيانة أو إصلاح يُسجَّل في أكسبنس يمكن أن يحمل تكلفته موزعة على فئات مثل العمالة وقطع الغيار والإصلاحات، فتُجمع مصروفات الصيانة لكل مركبة دون جدول منفصل، وتظهر بسرعة السيارة التي ترتفع فواتير إصلاحها باستمرار. ولتكلفة الكيلومتر والتكلفة الإجمالية للملكية، اطّلع على [إدارة تكاليف الأسطول](/fleet-cost-tracking).`,
      },
      {
        kind: 'checklist',
        heading: 'كيف تقلل الصيانة الوقائية توقف الأسطول',
        intro: 'التوقف هو الوقت الذي لا تستطيع فيه المركبة العمل: انتظار الونش أو التشخيص أو القطعة أو دور في الورشة. ومعظمه يأتي من أعطال لم يخطط لها أحد. هذه طرق عملية يقلله بها نظام الصيانة.',
        items: [
          { text: 'تُنفَّذ الصيانة عند المسافة الصحيحة، فيقل تعطل الأجزاء على الطريق.' },
          { text: 'تُحجز الأعمال المخططة في يوم هادئ يناسب جدول المركبة، لا في منتصف خط التوزيع.' },
          { text: 'المركبات المتأخرة ظاهرة للجميع، فتُكتشف الصيانة الفائتة خلال أيام لا أشهر.' },
          { text: 'تكرار المشكلة نفسها على المركبة يظهر في سجلها، فتعالج السبب بدلًا من إصلاح مؤقت آخر.' },
          { text: 'معرفة القطع التي اقترب موعد تغييرها تساعدك على تجهيزها قبل وصول المركبة للورشة.' },
          { text: 'ملاحظات [فحص المركبات](/vehicle-inspection-software) تُسجَّل على ملف المركبة نفسه، فتُتابَع العيوب الصغيرة قبل أن تصبح أعطالًا.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'تقارير صيانة تستخدمها الإدارة فعلًا',
        intro: 'تُبنى التقارير من الصيانة والقطع والتكاليف التي يسجلها فريقك أصلًا، فلا يحتاج أحد لإعدادها نهاية الشهر.',
        columns: 2,
        items: [
          { icon: 'gauge', title: 'حالة الصيانة', desc: 'المركبات المستحقة قريبًا والمتأخرة حسب كيلومترات كل منها، في شاشة واحدة.' },
          { icon: 'dollar', title: 'تكلفة الصيانة لكل مركبة', desc: 'ما كلّفته كل مركبة في الصيانة والإصلاح، لتظهر المركبات المكلفة.' },
          { icon: 'chart', title: 'التكلفة حسب الفئة', desc: 'توزيع الإنفاق بين القطع والعمالة والإصلاحات في الأسطول وتغيّره من شهر لآخر.' },
          { icon: 'truck', title: 'نظرة عامة على الأسطول', desc: 'حالة الأسطول كله بنظرة واحدة، مع إمكانية فتح سجل أي مركبة.' },
        ],
      },
    ],
  },
  faqs: {
    en: [
      { q: 'How does km-based preventive maintenance work in Axpense?', a: 'You set a service interval in kilometres, for example an oil service every 10,000 km. Axpense takes the odometer reading at the last service, compares it with the current reading and shows the kilometres left. As the vehicle gets close it shows as due soon, and once the interval is passed it shows as overdue.' },
      { q: 'What happens when a service is overdue?', a: 'The vehicle is marked as overdue on the maintenance screen and dashboard, and it stays there until the service is recorded. That keeps a missed service in front of the team instead of hidden in a spreadsheet row.' },
      { q: 'Can I set different intervals for different vehicle types?', a: 'Yes. Intervals are set in kilometres for the services each vehicle needs, so a heavy truck and a light van don’t have to share one schedule. Use the manufacturer’s schedule for each model as your starting point.' },
      { q: 'What is a vehicle service history?', a: 'It is the complete record of the work done on a vehicle: each service with its date, odometer reading, parts used and cost. In Axpense it sits on the vehicle’s record and stays there when drivers or staff change.' },
      { q: 'How does fleet maintenance software reduce downtime?', a: 'It moves work from unplanned to planned. Vehicles are serviced at the right distance, overdue services are visible straight away, and repeat faults show up in the history, so fewer vehicles stop working without warning.' },
      { q: 'Can I record the spare parts used in a service?', a: 'Yes. Parts are tracked from purchase to installation and linked to the vehicle they were fitted to, so every service shows which parts were used and each part has its own lifecycle.' },
      { q: 'Do I need a workshop system as well?', a: 'No. Whether you use your own workshop or outside service centres, you record the service, parts and cost in Axpense against the vehicle. The workshop does the work; Axpense keeps the plan and the history.' },
      { q: 'Can a service be tracked as a work order?', a: 'Yes. A service can be opened as a work order with its tasks, status and costs, and closed once the vehicle is back in use. See [work orders](/features/work-orders).', requires: 'workOrders' },
    ],
    ar: [
      { q: 'كيف تعمل الصيانة الوقائية حسب الكيلومترات في أكسبنس؟', a: 'تحدد فترة الصيانة بالكيلومترات، مثل تغيير الزيت كل 10,000 كم. يأخذ أكسبنس قراءة العداد عند آخر صيانة ويقارنها بالقراءة الحالية ويعرض الكيلومترات المتبقية. وعند الاقتراب تظهر المركبة مستحقة قريبًا، وبعد تجاوز الفترة تظهر متأخرة.' },
      { q: 'ماذا يحدث عندما تتأخر الصيانة؟', a: 'تظهر المركبة كمتأخرة في شاشة الصيانة ولوحة المتابعة، وتبقى كذلك حتى تُسجَّل الصيانة، فتظل أمام الفريق بدلًا من أن تختفي في صف من جدول إكسل.' },
      { q: 'هل يمكن تحديد فترات مختلفة لأنواع المركبات المختلفة؟', a: 'نعم. تُحدد الفترات بالكيلومترات حسب الصيانة التي تحتاجها كل مركبة، فلا تضطر الشاحنة الثقيلة وسيارة النقل الخفيفة لمشاركة جدول واحد. ابدأ بجدول الشركة المصنّعة لكل طراز.' },
      { q: 'ما هو سجل صيانة السيارة؟', a: 'هو السجل الكامل للأعمال التي نُفّذت على المركبة: كل صيانة بتاريخها وقراءة العداد والقطع والتكلفة. في أكسبنس يبقى على ملف المركبة حتى لو تغيّر السائقون أو الموظفون.' },
      { q: 'كيف يقلل برنامج صيانة الأسطول توقف المركبات؟', a: 'ينقل العمل من الطارئ إلى المخطط: تُصان المركبات عند المسافة الصحيحة، وتظهر الصيانة المتأخرة فورًا، وتنكشف الأعطال المتكررة في السجل، فيقل توقف المركبات دون إنذار.' },
      { q: 'هل يمكن تسجيل قطع الغيار المستخدمة في الصيانة؟', a: 'نعم. تُتابع القطع من الشراء حتى التركيب وترتبط بالمركبة التي ركّبت فيها، فتعرف القطع المستخدمة في كل صيانة ولكل قطعة دورة حياتها.' },
      { q: 'هل أحتاج نظامًا منفصلًا للورشة؟', a: 'لا. سواء كانت لديك ورشة داخلية أو تتعامل مع مراكز خدمة خارجية، تسجّل الصيانة والقطع والتكلفة في أكسبنس على المركبة. الورشة تنفذ العمل، وأكسبنس يحفظ الخطة والسجل.' },
      { q: 'هل يمكن متابعة الصيانة كأمر عمل؟', a: 'نعم. يمكن فتح الصيانة كأمر عمل بمهامه وحالته وتكاليفه، وإغلاقه عند عودة المركبة للعمل. اطّلع على [أوامر العمل للصيانة](/features/work-orders).', requires: 'workOrders' },
    ],
  },
  relatedPages: ['/features/preventive-maintenance', '/features/spare-parts', '/features/vehicle-management', '/fleet-cost-tracking', '/vehicle-inspection-software', '/resources/preventive-maintenance-checklist', '/fleet-management-software'],
  relatedIndustries: ['/industries/logistics', '/industries/distribution', '/industries/construction', '/industries/oil-and-gas', '/industries/field-services'],
  relatedArticles: ['km-based-preventive-maintenance', 'reduce-vehicle-downtime', 'preventive-vs-reactive-maintenance'],
  schemaName: 'Axpense Fleet Maintenance Software',
};
