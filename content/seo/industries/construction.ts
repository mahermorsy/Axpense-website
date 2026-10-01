// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const CONSTRUCTION: SeoPage = {
  path: '/industries/construction',
  type: 'industry',
  updatedAt: '2026-09-29',
  parent: '/fleet-management-software',
  primaryKeyword: { en: 'construction fleet and equipment management', ar: 'إدارة معدات ومركبات المقاولات' },
  secondaryKeywords: {
    en: ['construction fleet management software', 'construction vehicle maintenance', 'contractor fleet management', 'site vehicle inspection', 'construction vehicle depreciation'],
    ar: ['إدارة أسطول شركات المقاولات', 'صيانة مركبات المقاولات', 'فحص مركبات المواقع', 'إهلاك سيارات المقاولات', 'برنامج إدارة سيارات المشروعات'],
  },
  meta: {
    en: {
      title: 'Construction Fleet and Equipment Management',
      description: 'Construction fleet and equipment management for pickups, tippers and mixers across sites: km-based servicing, site checks and depreciation. Book a demo.',
    },
    ar: {
      title: 'إدارة معدات ومركبات المقاولات',
      description: 'إدارة معدات ومركبات المقاولات في كل المواقع: صيانة البيك أب والقلابات والخلاطات بالكيلومتر وفحص الموقع وإهلاك كل مركبة في نظام واحد. احجز عرضًا تجريبيًا.',
    },
  },
  h1: {
    en: 'Construction Fleet and Equipment Management Across Every Site',
    ar: 'إدارة معدات ومركبات المقاولات في كل مواقع المشروعات',
  },
  navLabel: { en: 'Construction fleet management', ar: 'إدارة معدات ومركبات المقاولات' },
  hero: {
    en: {
      badge: 'Construction & contracting',
      intro: 'Contractors run vehicles on rough ground, far from the head office workshop and spread across projects that start and finish every few months. Axpense keeps each pickup, tipper, mixer truck and site vehicle on one record, with servicing by kilometre, site inspections and depreciation, so you know what every vehicle costs and what it is still worth.',
    },
    ar: {
      badge: 'المقاولات والإنشاءات',
      intro: 'تعمل مركبات المقاولين على أرض وعرة بعيدًا عن ورشة الإدارة، وتتوزع على مشروعات تبدأ وتنتهي كل بضعة أشهر. يحفظ أكسبنس كل بيك أب وقلاب وخلاطة ومركبة موقع في سجل واحد، مع صيانة بالكيلومتر وفحص في الموقع وإهلاك، لتعرف تكلفة كل مركبة وقيمتها الحالية.',
    },
  },
  heroImage: 'vehicles',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'Why construction fleets are hard to keep under control',
        body: `A construction company’s fleet moves with its projects. Vehicles are sent to a new site, lent to another project manager, and come back months later with no clear record of what happened to them.

- **Vehicles are scattered.** Pickups and trucks sit on sites in different cities, and head office often doesn’t know which vehicle is where or who has it.
- **Conditions are harsh.** Dust, heat, unpaved roads and overloading shorten the life of tyres, filters, suspension and brakes.
- **Costs land on projects, not vehicles.** A repair is charged to the project that paid for it, so no one sees the total cost of one tipper across three projects.
- **Asset values are guessed.** When finance asks what the fleet is worth, or when a vehicle should be sold, the answer comes from memory rather than records.`,
      },
      {
        kind: 'text',
        heading: 'Vehicles and equipment in a construction fleet',
        body: `A contractor’s road-going fleet usually includes **double-cab pickups** for engineers and foremen, **tipper trucks** for earth and aggregates, **concrete mixer trucks**, **flatbeds and low-loaders**, **water tankers** and **crew buses**. All of these have odometers and plates, and Axpense manages them as vehicles: one record each with make, model, odometer, status and assigned driver.

Most contractors also own site machinery such as excavators, loaders and generators. Those usually follow a different service logic, based on running time rather than distance. If machinery is a large part of your fleet, raise it in your demo so we can show you what fits today.`,
      },
      {
        kind: 'text',
        requires: 'equipmentAssets',
        heading: 'Heavy equipment on the same system as your vehicles',
        body: `Excavators, wheel loaders, rollers, cranes and generators can be registered in Axpense alongside your trucks, each with its own record, assigned operator, expenses and depreciation. Head office sees vehicles and machinery together, and project managers see what is on their site.`,
      },
      {
        kind: 'text',
        requires: ['equipmentAssets', 'hourBasedMaintenance'],
        heading: 'Hour-based maintenance for machinery',
        body: `Machinery that barely moves still wears out. For excavators, loaders and generators, Axpense lets you set service intervals in engine hours, for example every 250 or 500 hours, and shows the hours left until each service, so machines are serviced on their real usage just like trucks are serviced by kilometre.`,
      },
      {
        kind: 'text',
        heading: 'Maintenance needs: shorter intervals for severe conditions',
        body: `Most manufacturers publish a separate, shorter schedule for severe duty: dusty environments, short trips, heavy loads and unpaved roads. Construction vehicles usually qualify. That means air filters, oil and brake checks come round sooner than on the same model used in town.

In Axpense you set each vehicle’s service intervals in kilometres, and the system shows the kilometres left to each service and flags the overdue ones. Because every service is kept in the vehicle’s history, a truck that moves from one project to another keeps its records with it. Parts fitted on site, such as tyres and filters, can be recorded through [spare parts](/features/spare-parts) so you see which vehicle they went into. For the maintenance side in depth, see [fleet maintenance software](/fleet-maintenance-software).`,
      },
      {
        kind: 'formula',
        heading: 'Cost needs: running cost and depreciation per vehicle',
        intro: 'Construction vehicles are capital assets. Axpense records repairs, parts, insurance and registration per vehicle and calculates book value over time, so you can weigh what a vehicle costs to run against what it is still worth.',
        formulas: [
          { label: 'Straight-line depreciation per year', expression: '(Purchase price − expected resale value) ÷ years of use' },
          { label: 'Cost per km', expression: 'Total operating costs for the period ÷ km driven in the period' },
        ],
        example: {
          title: 'Example: a tipper truck',
          body: `A tipper bought for 3,200,000 EGP, expected to resell for 800,000 EGP after 6 years, loses 400,000 EGP of book value a year. If its repairs and parts cost 450,000 EGP this year and are rising, it now costs more to keep running than it loses in value, which is a signal to plan its replacement. See [vehicle depreciation and lifecycle](/features/asset-management) for how Axpense shows book value.`,
        },
      },
      {
        kind: 'checklist',
        heading: 'Inspection needs: site checks when vehicles arrive and every week',
        intro: 'A vehicle arriving on site should be checked before it starts work, and again at a regular interval. A typical construction checklist covers:',
        items: [
          { text: 'Tyres and wheels for cuts, damage and wear from rough ground.' },
          { text: 'Brakes, lights, reversing alarm and beacon.' },
          { text: 'Tipper body, hydraulics or mixer drum for leaks and damage.' },
          { text: 'Load restraints, tailgate locks and mirrors.' },
          { text: 'Seat belts, fire extinguisher and first-aid kit present.' },
        ],
      },
      {
        kind: 'steps',
        heading: 'A construction workflow in Axpense',
        steps: [
          { title: 'Register every road-going vehicle', desc: 'Pickups, tippers, mixers, tankers and buses, with plate, odometer and status.' },
          { title: 'Assign drivers and foremen', desc: 'Link each vehicle to the person responsible for it on site.' },
          { title: 'Set severe-duty km intervals', desc: 'Use the manufacturer’s severe-duty schedule; Axpense tracks km left and overdue services.' },
          { title: 'Set hour-based intervals for machinery', desc: 'Excavators and loaders follow engine-hour service intervals alongside your trucks.', requires: ['equipmentAssets', 'hourBasedMaintenance'] },
          { title: 'Inspect on arrival and weekly', desc: 'Checklists record pass or fail per item; failed items stay on the vehicle record.' },
          { title: 'Record costs and review book value', desc: 'Log repairs and parts per vehicle, then compare running cost with depreciation.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'Modules contractors use',
        items: [
          { icon: 'truck', title: 'Vehicle management', desc: 'Every pickup, tipper and mixer on one list with odometer and status.', href: '/features/vehicle-management' },
          { icon: 'calendar', title: 'Preventive maintenance', desc: 'Km-based intervals, suited to severe-duty schedules.', href: '/features/preventive-maintenance' },
          { icon: 'clipboard', title: 'Inspections', desc: 'Site arrival and weekly checklists with results on the vehicle.', href: '/features/inspection-management' },
          { icon: 'trending', title: 'Depreciation and lifecycle', desc: 'Book value per vehicle to plan replacements and disposals.', href: '/features/asset-management' },
          { icon: 'dollar', title: 'Expenses', desc: 'Repairs, parts, insurance and registration per vehicle.', href: '/features/expense-management' },
          { icon: 'chart', title: 'Reports', desc: 'Cost by vehicle and category across all projects.', href: '/features/reports-analytics' },
          { icon: 'hardhat', title: 'Equipment register', desc: 'Excavators, loaders and generators recorded alongside your vehicles.', href: '/features/asset-management', requires: 'equipmentAssets' },
        ],
      },
      {
        kind: 'checklist',
        heading: 'KPIs to watch on a construction fleet',
        intro: 'Common practice for contractors, built from the records you keep.',
        items: [
          { text: 'Running cost per vehicle against its yearly depreciation.' },
          { text: 'Services overdue, especially on vehicles at remote sites.' },
          { text: 'Days off the road per vehicle, by project.' },
          { text: 'Tyre spend per vehicle, a direct measure of site conditions.' },
          { text: 'Engine hours since last service for each machine.', requires: 'hourBasedMaintenance' },
        ],
      },
      {
        kind: 'text',
        heading: 'Example: a contractor with 35 vehicles on four sites',
        body: `Consider a hypothetical contractor running 12 pickups, 10 tippers, 6 mixer trucks, 4 water tankers and 3 crew buses across four projects. Each project manager keeps their own notes; costs are charged to projects; the finance team estimates vehicle values once a year.

The fleet team registers all 35 vehicles in Axpense with purchase prices and odometer readings, sets severe-duty intervals and assigns a responsible foreman to each vehicle. Site checklists begin on arrival at each project. When a tipper moves from one project to another, its service history, inspections and costs move with it, because they belong to the vehicle rather than the project.

At the end of the year, finance has book values from records instead of estimates, and the fleet manager can point to the few tippers whose repair costs now exceed their yearly depreciation as the first candidates for replacement.`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'لماذا يصعب ضبط أسطول المقاولات',
        body: `أسطول شركة المقاولات يتحرك مع مشروعاتها. تُرسل المركبة إلى موقع جديد، أو تُعار لمدير مشروع آخر، ثم تعود بعد أشهر دون سجل واضح لما حدث لها.

- **المركبات متفرقة.** سيارات البيك أب والشاحنات في مواقع بمدن مختلفة، وكثيرًا ما لا تعرف الإدارة أي مركبة في أي موقع ومع من.
- **الظروف قاسية.** الغبار والحرارة والطرق غير الممهدة والحمولة الزائدة تقصّر عمر الإطارات والفلاتر والعفشة والفرامل.
- **التكلفة تُحمّل على المشروع لا المركبة.** يُحمَّل الإصلاح على المشروع الذي دفعه، فلا يرى أحد التكلفة الكاملة لقلاب عمل في ثلاثة مشروعات.
- **قيمة الأصول تقديرية.** عندما تسأل الإدارة المالية عن قيمة الأسطول أو موعد بيع مركبة، تأتي الإجابة من الذاكرة لا من السجلات.`,
      },
      {
        kind: 'text',
        heading: 'المركبات والمعدات في أسطول المقاولات',
        body: `يضم أسطول المقاول على الطرق عادةً **سيارات بيك أب دبل كابينة** للمهندسين والملاحظين، و**قلابات** للردم والركام، و**خلاطات خرسانة**، و**شاحنات مسطحة ولوبد**، و**فناطيس مياه**، و**أتوبيسات نقل العمال**. كلها لها عدادات ولوحات، ويديرها أكسبنس كمركبات: سجل لكل منها بالماركة والطراز والعداد والحالة والسائق المعيّن.

ويمتلك معظم المقاولين أيضًا معدات موقع مثل الحفارات واللوادر والمولدات، وهذه تتبع منطق صيانة مختلفًا يعتمد على ساعات التشغيل لا المسافة. إذا كانت المعدات جزءًا كبيرًا من أسطولك، اذكر ذلك في العرض التجريبي لنوضح لك ما يناسبك اليوم.`,
      },
      {
        kind: 'text',
        requires: 'equipmentAssets',
        heading: 'المعدات الثقيلة في النظام نفسه مع المركبات',
        body: `يمكن تسجيل الحفارات واللوادر والهراسات والأوناش والمولدات في أكسبنس بجانب الشاحنات، لكل منها سجل ومشغّل معيّن ومصروفات وإهلاك. فترى الإدارة المركبات والمعدات معًا، ويرى مدير المشروع ما في موقعه.`,
      },
      {
        kind: 'text',
        requires: ['equipmentAssets', 'hourBasedMaintenance'],
        heading: 'صيانة المعدات بساعات التشغيل',
        body: `المعدة التي لا تتحرك كثيرًا تستهلك أيضًا. للحفارات واللوادر والمولدات يتيح أكسبنس تحديد فترات الصيانة بساعات تشغيل المحرك، مثل كل 250 أو 500 ساعة، ويعرض الساعات المتبقية حتى كل صيانة، فتُصان المعدات حسب استخدامها الفعلي كما تُصان الشاحنات بالكيلومتر.`,
      },
      {
        kind: 'text',
        heading: 'احتياجات الصيانة: فترات أقصر لظروف التشغيل الشاق',
        body: `تنشر معظم الشركات المصنّعة جدولًا أقصر للتشغيل الشاق: الغبار، والرحلات القصيرة، والأحمال الثقيلة، والطرق غير الممهدة. ومركبات المقاولات تنطبق عليها هذه الظروف غالبًا، فيأتي موعد فلتر الهواء والزيت وفحص الفرامل أسرع من الطراز نفسه داخل المدينة.

في أكسبنس تحدد فترات صيانة كل مركبة بالكيلومترات، ويعرض النظام المتبقي حتى كل صيانة وينبّه للمتأخر. ولأن كل صيانة محفوظة في سجل المركبة، تنتقل سجلات الشاحنة معها من مشروع لآخر. ويمكن تسجيل القطع المركّبة في الموقع مثل الإطارات والفلاتر عبر [قطع الغيار](/features/spare-parts). وللتفاصيل، اطّلع على [برنامج صيانة الأسطول](/fleet-maintenance-software).`,
      },
      {
        kind: 'formula',
        heading: 'احتياجات التكلفة: تكلفة التشغيل والإهلاك لكل مركبة',
        intro: 'مركبات المقاولات أصول رأسمالية. يسجّل أكسبنس الإصلاحات والقطع والتأمين والترخيص لكل مركبة ويحسب القيمة الدفترية بمرور الوقت، لتوازن بين تكلفة تشغيل المركبة وقيمتها الحالية.',
        formulas: [
          { label: 'الإهلاك السنوي بطريقة القسط الثابت', expression: '(سعر الشراء − قيمة البيع المتوقعة) ÷ سنوات الاستخدام' },
          { label: 'تكلفة الكيلومتر', expression: 'إجمالي تكاليف التشغيل في الفترة ÷ الكيلومترات المقطوعة في الفترة' },
        ],
        example: {
          title: 'مثال: قلاب',
          body: `قلاب اشتُري بـ3,200,000 جنيه ويُتوقع بيعه بـ800,000 جنيه بعد 6 سنوات، يفقد 400,000 جنيه من قيمته الدفترية سنويًا. فإذا بلغت إصلاحاته وقطعه 450,000 جنيه هذا العام وهي في ازدياد، فتشغيله يكلّف أكثر مما يفقده من قيمة، وهذه إشارة للتخطيط لاستبداله. اطّلع على [إهلاك المركبات ودورة حياتها](/features/asset-management).`,
        },
      },
      {
        kind: 'checklist',
        heading: 'احتياجات الفحص: فحص عند الوصول للموقع وأسبوعيًا',
        intro: 'يجب فحص المركبة عند وصولها للموقع قبل بدء العمل، ثم بشكل دوري. تشمل قائمة المقاولات المعتادة:',
        items: [
          { text: 'الإطارات والجنوط من القطوع والتلف والتآكل بسبب الأرض الوعرة.' },
          { text: 'الفرامل والأنوار وجرس الرجوع والفلاشر.' },
          { text: 'صندوق القلاب والهيدروليك أو برميل الخلاطة من التسريب والتلف.' },
          { text: 'أحزمة تثبيت الحمولة وأقفال الباب الخلفي والمرايا.' },
          { text: 'وجود أحزمة الأمان وطفاية الحريق وحقيبة الإسعافات.' },
        ],
      },
      {
        kind: 'steps',
        heading: 'سير عمل المقاولات في أكسبنس',
        steps: [
          { title: 'سجّل كل مركبات الطرق', desc: 'البيك أب والقلابات والخلاطات والفناطيس والأتوبيسات، باللوحة والعداد والحالة.' },
          { title: 'عيّن السائقين والملاحظين', desc: 'اربط كل مركبة بالشخص المسؤول عنها في الموقع.' },
          { title: 'حدد فترات التشغيل الشاق بالكيلومتر', desc: 'استخدم جدول التشغيل الشاق من المصنّع، ويتابع أكسبنس المتبقي والمتأخر.' },
          { title: 'حدد فترات المعدات بساعات التشغيل', desc: 'تتبع الحفارات واللوادر فترات بساعات المحرك بجانب الشاحنات.', requires: ['equipmentAssets', 'hourBasedMaintenance'] },
          { title: 'افحص عند الوصول وأسبوعيًا', desc: 'تسجّل القوائم مطابق أو غير مطابق لكل بند، وتبقى البنود غير المطابقة على المركبة.' },
          { title: 'سجّل التكاليف وراجع القيمة الدفترية', desc: 'سجّل الإصلاحات والقطع لكل مركبة، ثم قارن تكلفة التشغيل بالإهلاك.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'الوحدات التي يستخدمها المقاولون',
        items: [
          { icon: 'truck', title: 'إدارة المركبات', desc: 'كل بيك أب وقلاب وخلاطة في قائمة واحدة بالعداد والحالة.', href: '/features/vehicle-management' },
          { icon: 'calendar', title: 'الصيانة الوقائية', desc: 'فترات بالكيلومتر تناسب جداول التشغيل الشاق.', href: '/features/preventive-maintenance' },
          { icon: 'clipboard', title: 'الفحوصات', desc: 'قوائم فحص عند الوصول وأسبوعية بنتائج على المركبة.', href: '/features/inspection-management' },
          { icon: 'trending', title: 'الإهلاك ودورة الحياة', desc: 'القيمة الدفترية لكل مركبة لتخطيط الاستبدال والبيع.', href: '/features/asset-management' },
          { icon: 'dollar', title: 'المصروفات', desc: 'الإصلاحات والقطع والتأمين والترخيص لكل مركبة.', href: '/features/expense-management' },
          { icon: 'chart', title: 'التقارير', desc: 'التكلفة حسب المركبة والفئة في كل المشروعات.', href: '/features/reports-analytics' },
          { icon: 'hardhat', title: 'سجل المعدات', desc: 'الحفارات واللوادر والمولدات مسجلة بجانب المركبات.', href: '/features/asset-management', requires: 'equipmentAssets' },
        ],
      },
      {
        kind: 'checklist',
        heading: 'مؤشرات تستحق المتابعة في أسطول المقاولات',
        intro: 'ممارسات شائعة لدى المقاولين، مبنية على السجلات التي تحتفظ بها.',
        items: [
          { text: 'تكلفة تشغيل كل مركبة مقابل إهلاكها السنوي.' },
          { text: 'الصيانات المتأخرة، خاصة في المواقع البعيدة.' },
          { text: 'أيام توقف كل مركبة حسب المشروع.' },
          { text: 'إنفاق الإطارات لكل مركبة، وهو مقياس مباشر لظروف الموقع.' },
          { text: 'ساعات التشغيل منذ آخر صيانة لكل معدة.', requires: 'hourBasedMaintenance' },
        ],
      },
      {
        kind: 'text',
        heading: 'مثال: مقاول لديه 35 مركبة في أربعة مواقع',
        body: `لنتخيل مقاولًا افتراضيًا يشغّل 12 بيك أب و10 قلابات و6 خلاطات و4 فناطيس مياه و3 أتوبيسات في أربعة مشروعات. لكل مدير مشروع ملاحظاته، والتكاليف تُحمَّل على المشروعات، والإدارة المالية تقدّر قيمة المركبات مرة في السنة.

يسجّل فريق الأسطول المركبات الـ35 في أكسبنس بأسعار شرائها وقراءات عداداتها، ويحدد فترات التشغيل الشاق، ويعيّن ملاحظًا مسؤولًا عن كل مركبة. ويبدأ الفحص عند الوصول لكل موقع. وعندما ينتقل قلاب من مشروع لآخر، تنتقل معه صيانته وفحوصاته وتكاليفه لأنها تخص المركبة لا المشروع.

في نهاية العام تكون لدى الإدارة المالية قيم دفترية من السجلات بدل التقديرات، ويستطيع مدير الأسطول تحديد القلابات القليلة التي تجاوزت تكلفة إصلاحها إهلاكها السنوي كأول المرشحين للاستبدال.`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'Which construction vehicles can I manage in Axpense?', a: 'Any road-going vehicle with an odometer: pickups, tipper trucks, concrete mixer trucks, flatbeds, water tankers and crew buses. Each gets a vehicle record with km-based maintenance, inspections, expenses and depreciation.' },
      { q: 'Can Axpense manage excavators, loaders and generators?', a: 'Yes. Machinery can be registered alongside vehicles, with its own record, operator, expenses and depreciation.', requires: 'equipmentAssets' },
      { q: 'Can I schedule maintenance by engine hours?', a: 'Yes. For machinery you can set service intervals in engine hours and see the hours left until each service.', requires: 'hourBasedMaintenance' },
      { q: 'How do I keep records when vehicles move between projects?', a: 'Services, inspections and expenses are stored on the vehicle, not the project, so the full history stays with the vehicle wherever it works.' },
      { q: 'Does Axpense calculate depreciation?', a: 'Yes. Axpense shows each vehicle’s book value over time, so you can compare running costs with the value it is losing. Read more in [what is asset management](/blog/what-is-asset-management).' },
      { q: 'What should a site vehicle inspection include?', a: 'Tyres and wheels, brakes and lights, reversing alarm, body or hydraulics, load restraints and safety equipment on board. In Axpense you build the checklist to match your sites. See our [vehicle inspection software](/vehicle-inspection-software).' },
      { q: 'How quickly can we get started?', a: 'Most teams are live in one day with free onboarding. See plans on the [pricing page](/pricing).' },
    ],
    ar: [
      { q: 'ما مركبات المقاولات التي يمكن إدارتها في أكسبنس؟', a: 'أي مركبة طرق لها عداد: البيك أب والقلابات وخلاطات الخرسانة والشاحنات المسطحة وفناطيس المياه وأتوبيسات العمال. لكل منها سجل بصيانة بالكيلومتر وفحوصات ومصروفات وإهلاك.' },
      { q: 'هل يدير أكسبنس الحفارات واللوادر والمولدات؟', a: 'نعم. يمكن تسجيل المعدات بجانب المركبات، لكل منها سجل ومشغّل ومصروفات وإهلاك.', requires: 'equipmentAssets' },
      { q: 'هل يمكن جدولة الصيانة بساعات التشغيل؟', a: 'نعم. للمعدات يمكنك تحديد فترات الصيانة بساعات المحرك ومتابعة الساعات المتبقية حتى كل صيانة.', requires: 'hourBasedMaintenance' },
      { q: 'كيف أحافظ على السجلات عند نقل المركبات بين المشروعات؟', a: 'الصيانة والفحوصات والمصروفات محفوظة على المركبة لا المشروع، فيبقى السجل الكامل معها أينما عملت.' },
      { q: 'هل يحسب أكسبنس الإهلاك؟', a: 'نعم. يعرض أكسبنس القيمة الدفترية لكل مركبة بمرور الوقت، لتقارن تكلفة التشغيل بالقيمة التي تفقدها. اطّلع على [إهلاك المركبات ودورة حياتها](/features/asset-management).' },
      { q: 'ماذا يشمل فحص مركبة الموقع؟', a: 'الإطارات والجنوط، والفرامل والأنوار، وجرس الرجوع، والصندوق أو الهيدروليك، وتثبيت الحمولة، ومعدات السلامة. في أكسبنس تبني القائمة لتناسب مواقعك. اطّلع على [برنامج فحص المركبات](/vehicle-inspection-software).' },
      { q: 'ما سرعة بدء العمل؟', a: 'تبدأ معظم الفرق خلال يوم واحد مع تهيئة مجانية. الأسعار في [صفحة الأسعار](/pricing).' },
    ],
  },
  relatedPages: ['/fleet-maintenance-software', '/vehicle-inspection-software', '/features/asset-management', '/features/preventive-maintenance', '/fleet-cost-tracking'],
  relatedIndustries: ['/industries/oil-and-gas', '/industries/logistics', '/industries/manufacturing'],
  relatedArticles: ['what-is-asset-management', 'fleet-total-cost-of-ownership', 'preventive-vs-reactive-maintenance'],
};
