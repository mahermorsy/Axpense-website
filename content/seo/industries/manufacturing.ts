// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const MANUFACTURING: SeoPage = {
  path: '/industries/manufacturing',
  type: 'industry',
  updatedAt: '2026-09-29',
  parent: '/fleet-management-software',
  primaryKeyword: { en: 'manufacturing fleet management', ar: 'إدارة أسطول المصانع' },
  secondaryKeywords: {
    en: ['factory vehicle management', 'staff bus fleet maintenance', 'company car management for manufacturers', 'vehicle utilisation', 'vehicle spare parts inventory'],
    ar: ['إدارة سيارات المصنع', 'صيانة أتوبيسات نقل العاملين', 'إدارة سيارات الشركة', 'استغلال المركبات', 'مخزون قطع غيار السيارات'],
  },
  meta: {
    en: {
      title: 'Manufacturing Fleet Management for Factories',
      description: 'Manufacturing fleet management for delivery trucks, staff buses and company cars: km-based servicing, parts tracking and cost per vehicle. Book a demo.',
    },
    ar: {
      title: 'إدارة أسطول المصانع ومركباتها',
      description: 'إدارة أسطول المصانع من شاحنات التوزيع إلى أتوبيسات العاملين وسيارات الإدارة: صيانة بالكيلومتر ومتابعة قطع الغيار وتكلفة كل مركبة. احجز عرضًا تجريبيًا.',
    },
  },
  h1: {
    en: 'Manufacturing Fleet Management for Delivery Trucks, Staff Buses and Company Cars',
    ar: 'إدارة أسطول المصانع: شاحنات التوزيع وأتوبيسات العاملين وسيارات الشركة',
  },
  navLabel: { en: 'Manufacturing fleet management', ar: 'إدارة أسطول المصانع' },
  hero: {
    en: {
      badge: 'Manufacturing',
      intro: 'For a manufacturer, vehicles are a support function that nobody owns full time: trucks move goods out, buses bring shifts in and cars carry sales and management. Axpense gives that mixed fleet one owner and one system, with services planned by kilometre, parts tracked into each vehicle and the cost of every vehicle visible to finance.',
    },
    ar: {
      badge: 'المصانع',
      intro: 'المركبات في المصنع وظيفة مساندة لا يتفرغ لها أحد: الشاحنات تنقل البضاعة للخارج، والأتوبيسات تنقل الورديات، والسيارات تخدم المبيعات والإدارة. يمنح أكسبنس هذا الأسطول المتنوع نظامًا واحدًا ومسؤولًا واضحًا، مع صيانة بالكيلومتر ومتابعة القطع المركّبة في كل مركبة وتكلفة كل مركبة أمام الإدارة المالية.',
    },
  },
  heroImage: 'dashboard',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'Why fleets inside manufacturing companies drift',
        body: `In a factory, attention goes to the production line. The vehicles that keep it supplied and staffed are usually looked after by an administration or logistics team as one job among many.

- **Nobody owns the fleet.** Trucks are with logistics, buses with HR or administration, cars with each department, and each group keeps its own records.
- **Parts go missing.** Vehicle parts are bought through the plant store alongside production spares, and it is hard to tell which ones went into which truck.
- **Utilisation is unknown.** Some vehicles run every day while others sit in the car park, but without kilometres per vehicle there is no evidence to reassign or sell them.
- **Finance sees one line.** Vehicle costs are booked into general overheads, so the real cost of the delivery fleet or the staff buses never appears.`,
      },
      {
        kind: 'text',
        heading: 'Vehicles a manufacturer typically runs',
        body: `A manufacturing fleet usually combines **delivery trucks** taking finished goods to distributors and customers, **light trucks and pickups** moving materials between plants or warehouses, **staff buses and minibuses** for shift workers in industrial zones, and **company cars** for sales, purchasing and management.

Each of these is a vehicle record in Axpense with plate, make, model, odometer, status and assigned driver, so the whole fleet sits in one register even when different departments use it.`,
      },
      {
        kind: 'text',
        requires: 'equipmentAssets',
        heading: 'Forklifts and plant equipment',
        body: `Forklifts, reach trucks, yard tractors and other non-road equipment can be registered in Axpense next to your road vehicles, each with its own record, operator, expenses and depreciation, so the plant has one place for everything that moves.`,
      },
      {
        kind: 'text',
        requires: ['equipmentAssets', 'hourBasedMaintenance'],
        heading: 'Hour-based servicing for forklifts',
        body: `Forklifts are serviced by running hours, not kilometres. Axpense lets you set hour-based intervals for plant equipment and shows the hours left until each service, alongside the km-based schedules for your trucks and buses.`,
      },
      {
        kind: 'text',
        heading: 'Maintenance needs: keeping shifts and deliveries on time',
        body: `When a staff bus breaks down, a shift starts late. When a delivery truck breaks down, an order ships late. Both show up as production problems, even though the cause is maintenance.

Axpense schedules preventive maintenance by kilometre for each vehicle, shows the distance left to the next service and lists overdue vehicles, so services can be booked on weekends or between shifts instead of after a breakdown. Buses on fixed daily routes are easy to plan this way because their kilometres are predictable. The full service history stays on each vehicle. For the wider maintenance approach, see [fleet maintenance software](/fleet-maintenance-software).`,
      },
      {
        kind: 'text',
        heading: 'Parts inventory for vehicles',
        body: `Manufacturers already understand inventory, but vehicle parts are often mixed in with production spares. The [spare parts module](/features/spare-parts) tracks vehicle parts from purchase to installation and shows which part went into which vehicle.

That answers questions the plant store cannot: how many sets of brake pads the bus fleet used this year, whether a battery that failed early was fitted three months or three years ago, and which vehicle took the last set of filters.`,
      },
      {
        kind: 'text',
        heading: 'Cost needs: utilisation and cost per vehicle',
        body: `A vehicle that is rarely used still costs insurance, registration and depreciation. Comparing kilometres driven with total cost per vehicle shows which ones earn their place.

| Vehicle (example) | km last year | Total cost | Cost per km |
|---|---|---|---|
| Delivery truck | 60,000 | 240,000 EGP | 4.0 EGP |
| Pool car | 6,000 | 90,000 EGP | 15.0 EGP |

In this example, the pool car costs almost four times as much per km as the truck, which raises the question of whether it is needed at all. Axpense records repairs, parts, insurance, registration and other expenses per vehicle and category, and [fleet cost tracking](/fleet-cost-tracking) shows how those roll up for finance.`,
      },
      {
        kind: 'text',
        heading: 'Inspection needs: buses and trucks leaving the gate',
        body: `Staff buses carry many people every day and delivery trucks leave through the factory gate with full loads, so both benefit from a short check before departure: tyres, brakes, lights, doors and emergency exits on buses, and load securing on trucks. In Axpense you build the checklist once, each item is marked pass or fail, and failed items are recorded on the vehicle for follow-up.`,
      },
      {
        kind: 'steps',
        heading: 'A manufacturing fleet workflow in Axpense',
        steps: [
          { title: 'Bring every department’s vehicles into one register', desc: 'Trucks, buses, pickups and cars, each with odometer, status and assigned driver.' },
          { title: 'Set km service intervals', desc: 'Axpense tracks km left per service so work can be booked between shifts.' },
          { title: 'Record vehicle parts', desc: 'Track parts from purchase to the vehicle they were fitted to.' },
          { title: 'Check buses and trucks before departure', desc: 'Checklist results, with failed items kept on the vehicle.' },
          { title: 'Record expenses per vehicle', desc: 'Repairs, insurance and registration by category.' },
          { title: 'Review utilisation and cost quarterly', desc: 'Compare cost per vehicle with kilometres driven to decide what to keep, move or sell.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'Modules manufacturers use',
        items: [
          { icon: 'truck', title: 'Vehicle management', desc: 'One register for trucks, buses and cars across departments.', href: '/features/vehicle-management' },
          { icon: 'package', title: 'Spare parts', desc: 'Vehicle parts traced from purchase to installation.', href: '/features/spare-parts' },
          { icon: 'calendar', title: 'Preventive maintenance', desc: 'Km-based services planned around shifts and deliveries.', href: '/features/preventive-maintenance' },
          { icon: 'dollar', title: 'Expenses', desc: 'Every cost recorded per vehicle and category.', href: '/features/expense-management' },
          { icon: 'trending', title: 'Depreciation and lifecycle', desc: 'Book value per vehicle for finance and replacement plans.', href: '/features/asset-management' },
          { icon: 'chart', title: 'Reports', desc: 'Cost by vehicle and category and maintenance status on one screen.', href: '/features/reports-analytics' },
          { icon: 'factory', title: 'Plant equipment', desc: 'Forklifts and yard equipment recorded alongside vehicles.', href: '/features/asset-management', requires: 'equipmentAssets' },
        ],
      },
      {
        kind: 'checklist',
        heading: 'KPIs for a manufacturing fleet',
        intro: 'Practical measures you can build from the records kept in Axpense.',
        items: [
          { text: 'Kilometres per vehicle per month, to spot under-used vehicles.' },
          { text: 'Cost per km for delivery trucks, and cost per vehicle for buses and cars.' },
          { text: 'Services overdue, especially on staff buses.' },
          { text: 'Parts used per vehicle compared with similar vehicles.' },
          { text: 'Days a bus or truck was off the road and not replaced.' },
        ],
      },
      {
        kind: 'text',
        heading: 'Example: a factory with 30 vehicles and three owners',
        body: `Consider a hypothetical food manufacturer with 12 delivery trucks managed by logistics, 8 staff buses managed by administration and 10 company cars spread across departments. Each group keeps its own sheet, and vehicle parts are drawn from the main plant store.

The company names one fleet coordinator and registers all 30 vehicles in Axpense, with km-based service intervals and assigned drivers. Vehicle parts are recorded as they are fitted. After a quarter, the coordinator can show which buses are due for service before the next shift change, which parts each truck has used, and that two company cars drove very little while carrying the same fixed costs as the others. That gives management a clear, documented basis for reassigning or selling them.`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'لماذا يخرج أسطول المصنع عن السيطرة',
        body: `في المصنع يتجه الاهتمام إلى خط الإنتاج، أما المركبات التي تمده بالمواد والعاملين فيتولاها غالبًا فريق الشؤون الإدارية أو اللوجستيات كمهمة ضمن مهام كثيرة.

- **لا مالك للأسطول.** الشاحنات مع اللوجستيات، والأتوبيسات مع الموارد البشرية أو الشؤون الإدارية، والسيارات مع كل إدارة، ولكل مجموعة سجلاتها.
- **القطع تضيع.** تُشترى قطع السيارات من مخزن المصنع مع قطع الإنتاج، ويصعب معرفة أي قطعة رُكّبت في أي شاحنة.
- **الاستغلال غير معروف.** بعض المركبات تعمل يوميًا وأخرى واقفة في الجراج، وبدون كيلومترات لكل مركبة لا دليل لإعادة توزيعها أو بيعها.
- **المالية ترى بندًا واحدًا.** تُسجَّل تكاليف المركبات في المصروفات العامة، فلا تظهر التكلفة الحقيقية لشاحنات التوزيع أو الأتوبيسات.`,
      },
      {
        kind: 'text',
        heading: 'المركبات المعتادة في المصانع',
        body: `يجمع أسطول المصنع عادةً **شاحنات التوزيع** التي تنقل المنتج النهائي للموزعين والعملاء، و**شاحنات خفيفة وسيارات بيك أب** لنقل المواد بين المصانع والمخازن، و**أتوبيسات وميني باصات العاملين** للورديات في المناطق الصناعية، و**سيارات الشركة** للمبيعات والمشتريات والإدارة.

كل منها سجل مركبة في أكسبنس باللوحة والماركة والطراز والعداد والحالة والسائق المعيّن، فيكون الأسطول كله في سجل واحد حتى لو استخدمته إدارات مختلفة.`,
      },
      {
        kind: 'text',
        requires: 'equipmentAssets',
        heading: 'الرافعات الشوكية ومعدات المصنع',
        body: `يمكن تسجيل الرافعات الشوكية وجرارات الساحة وغيرها من المعدات في أكسبنس بجانب مركبات الطرق، لكل منها سجل ومشغّل ومصروفات وإهلاك، ليكون للمصنع مكان واحد لكل ما يتحرك.`,
      },
      {
        kind: 'text',
        requires: ['equipmentAssets', 'hourBasedMaintenance'],
        heading: 'صيانة الرافعات الشوكية بساعات التشغيل',
        body: `تُصان الرافعات الشوكية حسب ساعات التشغيل لا الكيلومترات. يتيح أكسبنس تحديد فترات بالساعات لمعدات المصنع ويعرض الساعات المتبقية حتى كل صيانة، بجانب جداول الكيلومتر للشاحنات والأتوبيسات.`,
      },
      {
        kind: 'text',
        heading: 'احتياجات الصيانة: الورديات والشحنات في موعدها',
        body: `عندما يتعطل أتوبيس العاملين تبدأ الوردية متأخرة، وعندما تتعطل شاحنة التوزيع تتأخر الطلبية. كلاهما يظهر كمشكلة إنتاج رغم أن السبب صيانة.

يجدول أكسبنس الصيانة الوقائية بالكيلومتر لكل مركبة، ويعرض المسافة المتبقية حتى الصيانة القادمة والمركبات المتأخرة، فتُحجز الصيانة في العطلات أو بين الورديات لا بعد العطل. والأتوبيسات على خطوط يومية ثابتة سهلة التخطيط لأن كيلومتراتها متوقعة. ويبقى سجل الصيانة الكامل على كل مركبة. اطّلع على [برنامج صيانة الأسطول](/fleet-maintenance-software).`,
      },
      {
        kind: 'text',
        heading: 'مخزون قطع غيار المركبات',
        body: `المصانع تفهم المخزون جيدًا، لكن قطع السيارات تختلط غالبًا بقطع الإنتاج. تتابع [وحدة قطع الغيار](/features/spare-parts) قطع المركبات من الشراء حتى التركيب، وتُظهر أي قطعة ذهبت لأي مركبة.

وهذا يجيب عن أسئلة لا يجيب عنها مخزن المصنع: كم طقم تيل استهلكت الأتوبيسات هذا العام، وهل البطارية التي تعطلت مبكرًا رُكّبت منذ ثلاثة أشهر أم ثلاث سنوات، وأي مركبة أخذت آخر طقم فلاتر.`,
      },
      {
        kind: 'text',
        heading: 'احتياجات التكلفة: الاستغلال وتكلفة كل مركبة',
        body: `المركبة قليلة الاستخدام تكلّف تأمينًا وترخيصًا وإهلاكًا رغم ذلك. ومقارنة الكيلومترات المقطوعة بالتكلفة الإجمالية لكل مركبة تُظهر أيها يستحق مكانه.

| المركبة (مثال) | كم العام الماضي | التكلفة الإجمالية | تكلفة الكيلومتر |
|---|---|---|---|
| شاحنة توزيع | 60,000 | 240,000 جنيه | 4 جنيهات |
| سيارة مشتركة | 6,000 | 90,000 جنيه | 15 جنيهًا |

في هذا المثال تكلّف السيارة المشتركة نحو أربعة أضعاف الشاحنة للكيلومتر، فيُطرح سؤال: هل نحتاجها أصلًا؟ يسجّل أكسبنس الإصلاحات والقطع والتأمين والترخيص وباقي المصروفات لكل مركبة وفئة، وتوضح [إدارة تكاليف الأسطول](/fleet-cost-tracking) كيف تُجمع للإدارة المالية.`,
      },
      {
        kind: 'text',
        heading: 'احتياجات الفحص: الأتوبيسات والشاحنات عند البوابة',
        body: `أتوبيسات العاملين تنقل عددًا كبيرًا من الأشخاص يوميًا، وشاحنات التوزيع تخرج من البوابة بحمولة كاملة، وكلاهما يستفيد من فحص قصير قبل التحرك: الإطارات والفرامل والأنوار والأبواب ومخارج الطوارئ في الأتوبيسات، وتثبيت الحمولة في الشاحنات. في أكسبنس تبني القائمة مرة واحدة، ويُحدَّد كل بند بمطابق أو غير مطابق، وتُسجَّل البنود غير المطابقة على المركبة للمتابعة.`,
      },
      {
        kind: 'steps',
        heading: 'سير عمل أسطول المصنع في أكسبنس',
        steps: [
          { title: 'اجمع مركبات كل الإدارات في سجل واحد', desc: 'الشاحنات والأتوبيسات والبيك أب والسيارات، بالعداد والحالة والسائق.' },
          { title: 'حدد فترات الصيانة بالكيلومتر', desc: 'يتابع أكسبنس المتبقي لكل صيانة لتُحجز بين الورديات.' },
          { title: 'سجّل قطع المركبات', desc: 'تابع القطع من الشراء حتى المركبة التي رُكّبت فيها.' },
          { title: 'افحص الأتوبيسات والشاحنات قبل الخروج', desc: 'نتائج القائمة مع حفظ البنود غير المطابقة على المركبة.' },
          { title: 'سجّل المصروفات لكل مركبة', desc: 'الإصلاحات والتأمين والترخيص حسب الفئة.' },
          { title: 'راجع الاستغلال والتكلفة كل ربع سنة', desc: 'قارن تكلفة كل مركبة بكيلومتراتها لتقرر ما تحتفظ به أو تنقله أو تبيعه.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'الوحدات التي تستخدمها المصانع',
        items: [
          { icon: 'truck', title: 'إدارة المركبات', desc: 'سجل واحد للشاحنات والأتوبيسات والسيارات في كل الإدارات.', href: '/features/vehicle-management' },
          { icon: 'package', title: 'قطع الغيار', desc: 'قطع المركبات من الشراء حتى التركيب.', href: '/features/spare-parts' },
          { icon: 'calendar', title: 'الصيانة الوقائية', desc: 'صيانة بالكيلومتر مخططة حول الورديات والشحنات.', href: '/features/preventive-maintenance' },
          { icon: 'dollar', title: 'المصروفات', desc: 'كل تكلفة مسجلة لكل مركبة وفئة.', href: '/features/expense-management' },
          { icon: 'trending', title: 'الإهلاك ودورة الحياة', desc: 'القيمة الدفترية لكل مركبة للمالية وخطط الاستبدال.', href: '/features/asset-management' },
          { icon: 'chart', title: 'التقارير', desc: 'التكلفة حسب المركبة والفئة وحالة الصيانة في شاشة واحدة.', href: '/features/reports-analytics' },
          { icon: 'factory', title: 'معدات المصنع', desc: 'الرافعات الشوكية ومعدات الساحة بجانب المركبات.', href: '/features/asset-management', requires: 'equipmentAssets' },
        ],
      },
      {
        kind: 'checklist',
        heading: 'مؤشرات أسطول المصنع',
        intro: 'مقاييس عملية يمكن بناؤها من السجلات المحفوظة في أكسبنس.',
        items: [
          { text: 'الكيلومترات الشهرية لكل مركبة لكشف المركبات قليلة الاستخدام.' },
          { text: 'تكلفة الكيلومتر لشاحنات التوزيع، وتكلفة كل مركبة للأتوبيسات والسيارات.' },
          { text: 'الصيانات المتأخرة، خاصة في أتوبيسات العاملين.' },
          { text: 'القطع المستهلكة لكل مركبة مقارنة بمثيلاتها.' },
          { text: 'الأيام التي توقف فيها أتوبيس أو شاحنة دون بديل.' },
        ],
      },
      {
        kind: 'text',
        heading: 'مثال: مصنع لديه 30 مركبة وثلاث جهات مسؤولة',
        body: `لنتخيل مصنع أغذية افتراضيًا لديه 12 شاحنة توزيع تديرها اللوجستيات، و8 أتوبيسات تديرها الشؤون الإدارية، و10 سيارات موزعة على الإدارات. لكل مجموعة جدولها، وقطع السيارات تُصرف من مخزن المصنع الرئيسي.

تعيّن الشركة منسقًا واحدًا للأسطول وتسجّل المركبات الثلاثين في أكسبنس بفترات صيانة بالكيلومتر وسائقين معيّنين، وتُسجَّل القطع عند تركيبها. بعد ربع سنة يستطيع المنسق أن يوضح أي الأتوبيسات مستحقة للصيانة قبل تغيير الوردية القادم، وأي القطع استهلكتها كل شاحنة، وأن سيارتين قطعتا مسافات قليلة جدًا مع أنهما تحملان التكاليف الثابتة نفسها. وهذا يعطي الإدارة أساسًا موثقًا لإعادة توزيعهما أو بيعهما.`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'Can one system hold vehicles managed by different departments?', a: 'Yes. Trucks, buses and cars all sit in one register with their assigned drivers, so the fleet coordinator and each department see the same records.' },
      { q: 'How does Axpense help with vehicle parts inventory?', a: 'The spare parts module tracks vehicle parts from purchase to installation and shows which part went into which vehicle. Our guide to [fleet spare parts management](/blog/fleet-spare-parts-management) covers good practice.' },
      { q: 'Can Axpense manage forklifts?', a: 'Yes. Forklifts and other plant equipment can be registered alongside vehicles with their own records, costs and depreciation.', requires: 'equipmentAssets' },
      { q: 'How can we measure vehicle utilisation?', a: 'Compare kilometres driven per vehicle over a period with its total cost. Vehicles with low kilometres and high fixed costs are candidates to reassign or sell.' },
      { q: 'Does Axpense show depreciation for finance?', a: 'Yes. Each vehicle has a book value over time, so finance can see the value of the fleet alongside its running costs. See [vehicle depreciation and lifecycle](/features/asset-management).' },
      { q: 'How long does setup take?', a: 'Most teams are live in one day with free onboarding. Prices are on the [pricing page](/pricing).' },
    ],
    ar: [
      { q: 'هل يمكن لنظام واحد أن يضم مركبات تديرها إدارات مختلفة؟', a: 'نعم. الشاحنات والأتوبيسات والسيارات كلها في سجل واحد مع سائقيها، فيرى منسق الأسطول وكل إدارة السجلات نفسها.' },
      { q: 'كيف يساعد أكسبنس في مخزون قطع غيار المركبات؟', a: 'تتابع وحدة قطع الغيار قطع المركبات من الشراء حتى التركيب، وتُظهر أي قطعة رُكّبت في أي مركبة. اطّلع على [إدارة قطع الغيار](/features/spare-parts).' },
      { q: 'هل يدير أكسبنس الرافعات الشوكية؟', a: 'نعم. يمكن تسجيل الرافعات الشوكية ومعدات المصنع بجانب المركبات بسجلاتها وتكاليفها وإهلاكها.', requires: 'equipmentAssets' },
      { q: 'كيف نقيس استغلال المركبات؟', a: 'قارن الكيلومترات المقطوعة لكل مركبة في فترة ما بتكلفتها الإجمالية. المركبات قليلة الكيلومترات مرتفعة التكاليف الثابتة مرشحة لإعادة التوزيع أو البيع.' },
      { q: 'هل يعرض أكسبنس الإهلاك للإدارة المالية؟', a: 'نعم. لكل مركبة قيمة دفترية بمرور الوقت، فترى المالية قيمة الأسطول بجانب تكاليف تشغيله. اطّلع على [إهلاك المركبات ودورة حياتها](/features/asset-management).' },
      { q: 'كم يستغرق الإعداد؟', a: 'تبدأ معظم الفرق خلال يوم واحد مع تهيئة مجانية. الأسعار في [صفحة الأسعار](/pricing).' },
    ],
  },
  relatedPages: ['/fleet-cost-tracking', '/fleet-maintenance-software', '/features/spare-parts', '/features/asset-management', '/features/expense-management'],
  relatedIndustries: ['/industries/distribution', '/industries/logistics', '/industries/construction'],
  relatedArticles: ['fleet-spare-parts-management', 'what-is-asset-management', 'how-to-calculate-fleet-cost'],
};
