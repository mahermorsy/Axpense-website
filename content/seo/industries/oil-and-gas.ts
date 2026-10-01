// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const OIL_AND_GAS: SeoPage = {
  path: '/industries/oil-and-gas',
  type: 'industry',
  updatedAt: '2026-09-29',
  parent: '/fleet-management-software',
  primaryKeyword: { en: 'oil and gas fleet management', ar: 'إدارة أسطول شركات البترول والغاز' },
  secondaryKeywords: {
    en: ['oilfield vehicle management', 'oil and gas vehicle inspection', 'field vehicle maintenance', 'pre-trip inspection for field vehicles', 'oilfield services fleet'],
    ar: ['إدارة أسطول شركات النفط والغاز', 'فحص مركبات الحقول', 'صيانة مركبات حقول البترول', 'فحص ما قبل الرحلة', 'مركبات شركات خدمات البترول'],
  },
  meta: {
    en: {
      title: 'Oil and Gas Fleet Management for Field Vehicles',
      description: 'Oil and gas fleet management for remote field vehicles: pre-trip checklists, heavy-duty km service intervals and a full record per vehicle. Book a demo.',
    },
    ar: {
      title: 'إدارة أسطول شركات البترول والغاز',
      description: 'إدارة أسطول شركات البترول والغاز لمركبات الحقول البعيدة: فحص قبل كل رحلة، وصيانة شاقة بالكيلومتر، وسجل كامل لكل مركبة في مكان واحد. احجز عرضًا تجريبيًا.',
    },
  },
  h1: {
    en: 'Oil and Gas Fleet Management for Remote Field Vehicles',
    ar: 'إدارة أسطول شركات البترول والغاز لمركبات الحقول والمواقع البعيدة',
  },
  navLabel: { en: 'Oil and gas fleet management', ar: 'إدارة أسطول البترول والغاز' },
  hero: {
    en: {
      badge: 'Oil & gas',
      intro: 'Field vehicles in oil and gas drive long desert distances to sites where a breakdown is a safety problem, not just a delay. Axpense keeps each vehicle’s pre-trip inspections, heavy-duty service schedule and costs on one record, so supervisors can see that a vehicle is fit to go before it leaves.',
    },
    ar: {
      badge: 'البترول والغاز',
      intro: 'تقطع مركبات الحقول في قطاع البترول والغاز مسافات صحراوية طويلة إلى مواقع يكون فيها العطل مشكلة سلامة لا مجرد تأخير. يحفظ أكسبنس فحوصات ما قبل الرحلة وجدول الصيانة الشاقة وتكاليف كل مركبة في سجل واحد، ليتأكد المشرف أن المركبة جاهزة قبل تحركها.',
    },
  },
  heroImage: 'maintenance',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'The fleet challenges specific to oil and gas',
        body: `Operators and oilfield service companies in Egypt’s Western Desert, the Gulf of Suez, Saudi Arabia’s Eastern Province and across the Gulf share the same fleet problems:

- **Remote routes.** A vehicle may drive hundreds of kilometres on desert tracks to reach a rig or camp. A failure out there puts the crew at risk and can take a day to recover.
- **Strict checks before every journey.** Most operators require a documented vehicle check before a vehicle is allowed to leave base, and supervisors need to know it was actually done.
- **Heavy-duty operation.** Heat, sand, corrugated tracks and full loads push vehicles into the manufacturer’s severe-duty category.
- **Audits and incident reviews.** After an incident, the first questions are about the vehicle: when was it last serviced, when was it last inspected, and what was found.`,
      },
      {
        kind: 'text',
        heading: 'Vehicles used in oil and gas operations',
        body: `A typical oil and gas fleet includes **4x4 pickups and SUVs** for engineers and supervisors, **crew buses** between camps and sites, **water and vacuum tankers**, **service trucks** carrying tools and equipment, and **heavy trucks** for rig moves and materials.

Each one is a vehicle record in Axpense with plate, make, model, odometer, status and assigned driver. Vehicles leased from contractors can be registered too, so the company sees the full fleet working on its sites.`,
      },
      {
        kind: 'text',
        heading: 'Maintenance needs: heavy-duty intervals by kilometre',
        body: `Desert operation usually means following the manufacturer’s severe-duty schedule: shorter oil and air filter intervals, and more frequent checks of brakes, suspension, cooling and tyres. Using the normal schedule is one of the most common reasons field vehicles break down.

In Axpense you set each interval in kilometres, per vehicle. The system shows kilometres left to each service and lists the vehicles that are overdue, so a supervisor can hold back a vehicle that should not go out on a long trip. Each completed service stays in the vehicle’s history. Filters, tyres and other parts fitted in the field can be recorded through [spare parts](/features/spare-parts), so you can see what went into which vehicle. Read more on our [fleet maintenance software](/fleet-maintenance-software) page.`,
      },
      {
        kind: 'text',
        heading: 'Inspection needs: pre-trip checks with a record behind them',
        body: `In oil and gas, a pre-trip inspection is usually part of journey management, not an optional form. Typical items for a desert trip include tyres and spare, wheel nuts, brakes, lights, seat belts, fire extinguisher, first-aid kit, recovery equipment, water and communication equipment on board.

In Axpense you define the checklist items once. Each inspection records pass or fail per item against the vehicle and the driver assigned to it, and failed items are kept on the vehicle record for the workshop and supervisor to follow up. Over time, the completed checklists and service records form a clear history for each vehicle that you can show in an audit or incident review. Axpense keeps the vehicle side of that record; your own HSE system and policies still define what is required. See our [vehicle inspection software](/vehicle-inspection-software) for more.`,
      },
      {
        kind: 'text',
        requires: 'documentExpiryReminders',
        heading: 'Reminders for licences, permits and registrations',
        body: `Vehicle registration, insurance and site entry permits can be recorded with their expiry dates, and Axpense reminds the fleet team before each one runs out, so no vehicle is sent to site with lapsed papers.`,
      },
      {
        kind: 'text',
        heading: 'Cost needs: what each field vehicle really costs',
        body: `Field vehicles are expensive to run and their costs are often spread across contracts and cost centres. Axpense records repairs, parts, tyres, insurance, registration and other costs per vehicle and category, so you can see the total for each vehicle and compare vehicles doing similar work.

For example, if two identical pickups on similar routes show very different repair totals over a year, that difference points to something worth checking: driving style, a recurring fault or a vehicle past its economic life. Depreciation in [vehicle lifecycle management](/features/asset-management) adds book value to that comparison, and [fleet cost tracking](/fleet-cost-tracking) explains the cost reports.`,
      },
      {
        kind: 'steps',
        heading: 'How an oil and gas fleet team works in Axpense',
        steps: [
          { title: 'Register field vehicles', desc: 'Own and contractor vehicles with plate, odometer, status and assigned driver.' },
          { title: 'Set severe-duty km intervals', desc: 'Axpense tracks km left per service and flags overdue vehicles before a trip is planned.' },
          { title: 'Build the pre-trip checklist', desc: 'Include the safety and recovery items your procedures require.' },
          { title: 'Inspect before each journey', desc: 'Pass or fail per item; failed items stay on the vehicle record for follow-up.' },
          { title: 'Record costs per vehicle', desc: 'Repairs, parts, tyres and insurance by category.' },
          { title: 'Review the fleet weekly', desc: 'Overdue services, open failed items and cost by vehicle on one dashboard.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'Modules used by oil and gas fleet teams',
        items: [
          { icon: 'clipboard', title: 'Inspections', desc: 'Pre-trip checklists with pass and fail results on the vehicle history.', href: '/features/inspection-management' },
          { icon: 'calendar', title: 'Preventive maintenance', desc: 'Heavy-duty km intervals with a clear overdue list.', href: '/features/preventive-maintenance' },
          { icon: 'truck', title: 'Vehicle management', desc: 'Own and contractor vehicles in one register.', href: '/features/vehicle-management' },
          { icon: 'users', title: 'Driver management', desc: 'Each vehicle linked to its assigned driver.', href: '/features/drivers' },
          { icon: 'dollar', title: 'Expenses', desc: 'Every repair and running cost recorded per vehicle.', href: '/features/expense-management' },
          { icon: 'chart', title: 'Reports', desc: 'Maintenance status and costs across all sites.', href: '/features/reports-analytics' },
        ],
      },
      {
        kind: 'checklist',
        heading: 'KPIs oil and gas fleet managers watch',
        intro: 'Common practice in the sector, calculated from the records you keep.',
        items: [
          { text: 'Vehicles overdue for service, which should be zero for vehicles on long trips.' },
          { text: 'Pre-trip inspections completed against trips made.' },
          { text: 'Failed inspection items open for more than a few days.' },
          { text: 'Days off the road per vehicle and breakdowns in the field.' },
          { text: 'Running cost per vehicle compared with similar vehicles.' },
        ],
      },
      {
        kind: 'text',
        heading: 'Example: a service company with 50 field vehicles',
        body: `Consider a hypothetical oilfield service company with 30 4x4 pickups, 8 crew buses, 7 water tankers and 5 service trucks working across several desert sites. Pre-trip checks are paper forms kept at each camp; services are booked when a driver says the vehicle is due.

The fleet team registers all 50 vehicles in Axpense, sets severe-duty intervals and builds a pre-trip checklist from the company’s journey management procedure. Supervisors start checking the overdue list before approving long trips, and failed items such as a worn spare tyre or a missing extinguisher are recorded on the vehicle instead of on a loose form.

When the operator asks for a vehicle’s service and inspection history during a site audit, the team opens that vehicle’s record rather than searching camp files.`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'تحديات الأسطول الخاصة بقطاع البترول والغاز',
        body: `تتشارك شركات الإنتاج وشركات خدمات البترول في الصحراء الغربية وخليج السويس بمصر، وفي المنطقة الشرقية بالسعودية ودول الخليج، مشكلات الأسطول نفسها:

- **طرق بعيدة.** قد تقطع المركبة مئات الكيلومترات على مدقات صحراوية لتصل إلى جهاز حفر أو معسكر، والعطل هناك يعرّض الطاقم للخطر وقد يستغرق يومًا لاستعادته.
- **فحص صارم قبل كل رحلة.** تشترط معظم الشركات فحصًا موثقًا للمركبة قبل خروجها من القاعدة، ويحتاج المشرف أن يتأكد أنه تم فعلًا.
- **تشغيل شاق.** الحرارة والرمال والمدقات المتموجة والأحمال الكاملة تضع المركبات في فئة التشغيل الشاق لدى المصنّع.
- **التدقيق ومراجعة الحوادث.** بعد أي حادث تكون الأسئلة الأولى عن المركبة: متى صيانتها الأخيرة، ومتى فحصها الأخير، وماذا وُجد فيه.`,
      },
      {
        kind: 'text',
        heading: 'المركبات المستخدمة في عمليات النفط والغاز',
        body: `يضم أسطول النفط والغاز المعتاد **سيارات بيك أب ودفع رباعي** للمهندسين والمشرفين، و**أتوبيسات نقل الأطقم** بين المعسكرات والمواقع، و**فناطيس المياه وشاحنات الشفط**، و**شاحنات الخدمة** التي تحمل العدد والمعدات، و**الشاحنات الثقيلة** لنقل أجهزة الحفر والمواد.

كل منها سجل مركبة في أكسبنس باللوحة والماركة والطراز والعداد والحالة والسائق المعيّن. ويمكن تسجيل المركبات المستأجرة من المقاولين أيضًا، لترى الشركة الأسطول الكامل العامل في مواقعها.`,
      },
      {
        kind: 'text',
        heading: 'احتياجات الصيانة: فترات التشغيل الشاق بالكيلومتر',
        body: `التشغيل في الصحراء يعني غالبًا اتباع جدول التشغيل الشاق من المصنّع: فترات أقصر للزيت وفلتر الهواء، وفحص أكثر للفرامل والعفشة والتبريد والإطارات. واتباع الجدول العادي من أكثر أسباب تعطل مركبات الحقول.

في أكسبنس تحدد كل فترة بالكيلومترات لكل مركبة، ويعرض النظام المتبقي حتى كل صيانة والمركبات المتأخرة، فيستطيع المشرف إيقاف مركبة لا ينبغي أن تخرج في رحلة طويلة. وتبقى كل صيانة في سجل المركبة، ويمكن تسجيل الفلاتر والإطارات والقطع المركّبة في الموقع عبر [قطع الغيار](/features/spare-parts). المزيد في [برنامج صيانة الأسطول](/fleet-maintenance-software).`,
      },
      {
        kind: 'text',
        heading: 'احتياجات الفحص: فحص قبل الرحلة وخلفه سجل',
        body: `في قطاع البترول، فحص ما قبل الرحلة جزء من إدارة الرحلات لا استمارة اختيارية. تشمل البنود المعتادة لرحلة صحراوية: الإطارات والاستبن، وصواميل العجل، والفرامل، والأنوار، وأحزمة الأمان، وطفاية الحريق، وحقيبة الإسعافات، ومعدات السحب، والمياه، ووسائل الاتصال.

في أكسبنس تحدد بنود القائمة مرة واحدة، ويسجّل كل فحص مطابق أو غير مطابق لكل بند على المركبة والسائق المعيّن عليها، وتبقى البنود غير المطابقة في سجل المركبة لمتابعة الورشة والمشرف. ومع الوقت تكوّن قوائم الفحص وسجلات الصيانة تاريخًا واضحًا لكل مركبة يمكن عرضه في التدقيق أو مراجعة الحوادث. يحفظ أكسبنس جانب المركبة من هذا السجل، بينما يبقى نظام السلامة والصحة المهنية لديك هو المرجع لما هو مطلوب. اطّلع على [برنامج فحص المركبات](/vehicle-inspection-software).`,
      },
      {
        kind: 'text',
        requires: 'documentExpiryReminders',
        heading: 'تنبيهات الرخص والتصاريح والترخيص',
        body: `يمكن تسجيل ترخيص المركبة والتأمين وتصاريح دخول المواقع بتواريخ انتهائها، وينبّه أكسبنس فريق الأسطول قبل انتهاء كل منها، فلا تُرسل مركبة إلى الموقع بأوراق منتهية.`,
      },
      {
        kind: 'text',
        heading: 'احتياجات التكلفة: التكلفة الحقيقية لكل مركبة ميدانية',
        body: `تشغيل مركبات الحقول مكلف، وتكاليفها موزعة غالبًا على العقود ومراكز التكلفة. يسجّل أكسبنس الإصلاحات والقطع والإطارات والتأمين والترخيص وباقي التكاليف لكل مركبة وفئة، فترى الإجمالي لكل مركبة وتقارن المركبات ذات العمل المتشابه.

على سبيل المثال، إذا أظهرت سيارتا بيك أب متطابقتان على خطوط متشابهة إجمالي إصلاح مختلفًا جدًا خلال عام، فالفرق يستحق الفحص: أسلوب القيادة، أو عطل متكرر، أو مركبة تجاوزت عمرها الاقتصادي. ويضيف [إهلاك المركبات ودورة حياتها](/features/asset-management) القيمة الدفترية إلى المقارنة، وتشرح [إدارة تكاليف الأسطول](/fleet-cost-tracking) تقارير التكلفة.`,
      },
      {
        kind: 'steps',
        heading: 'كيف يعمل فريق أسطول البترول في أكسبنس',
        steps: [
          { title: 'سجّل مركبات الحقول', desc: 'المركبات المملوكة والمستأجرة باللوحة والعداد والحالة والسائق.' },
          { title: 'حدد فترات التشغيل الشاق بالكيلومتر', desc: 'يتابع أكسبنس المتبقي لكل صيانة وينبّه للمتأخر قبل التخطيط للرحلة.' },
          { title: 'ابنِ قائمة الفحص قبل الرحلة', desc: 'ضمّنها بنود السلامة والسحب التي تشترطها إجراءاتك.' },
          { title: 'افحص قبل كل رحلة', desc: 'مطابق أو غير مطابق لكل بند، والبنود غير المطابقة تبقى على المركبة للمتابعة.' },
          { title: 'سجّل التكاليف لكل مركبة', desc: 'الإصلاحات والقطع والإطارات والتأمين حسب الفئة.' },
          { title: 'راجع الأسطول أسبوعيًا', desc: 'الصيانة المتأخرة والبنود المفتوحة والتكلفة لكل مركبة في لوحة واحدة.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'الوحدات التي تستخدمها فرق أسطول البترول والغاز',
        items: [
          { icon: 'clipboard', title: 'الفحوصات', desc: 'قوائم ما قبل الرحلة بنتائج محفوظة في سجل المركبة.', href: '/features/inspection-management' },
          { icon: 'calendar', title: 'الصيانة الوقائية', desc: 'فترات تشغيل شاق بالكيلومتر مع قائمة واضحة بالمتأخر.', href: '/features/preventive-maintenance' },
          { icon: 'truck', title: 'إدارة المركبات', desc: 'المركبات المملوكة والمستأجرة في سجل واحد.', href: '/features/vehicle-management' },
          { icon: 'users', title: 'إدارة السائقين', desc: 'كل مركبة مرتبطة بسائقها المعيّن.', href: '/features/drivers' },
          { icon: 'dollar', title: 'المصروفات', desc: 'كل إصلاح وتكلفة تشغيل مسجلة لكل مركبة.', href: '/features/expense-management' },
          { icon: 'chart', title: 'التقارير', desc: 'حالة الصيانة والتكاليف في كل المواقع.', href: '/features/reports-analytics' },
        ],
      },
      {
        kind: 'checklist',
        heading: 'مؤشرات يتابعها مديرو أساطيل البترول',
        intro: 'ممارسات شائعة في القطاع، تُحسب من السجلات التي تحتفظ بها.',
        items: [
          { text: 'المركبات المتأخرة عن الصيانة، ويجب أن تكون صفرًا للرحلات الطويلة.' },
          { text: 'فحوصات ما قبل الرحلة المنفذة مقابل الرحلات الفعلية.' },
          { text: 'بنود الفحص غير المطابقة المفتوحة لأكثر من بضعة أيام.' },
          { text: 'أيام توقف كل مركبة والأعطال في الموقع.' },
          { text: 'تكلفة تشغيل كل مركبة مقارنة بمثيلاتها.' },
        ],
      },
      {
        kind: 'text',
        heading: 'مثال: شركة خدمات لديها 50 مركبة ميدانية',
        body: `لنتخيل شركة خدمات بترولية افتراضية لديها 30 سيارة دفع رباعي و8 أتوبيسات و7 فناطيس مياه و5 شاحنات خدمة تعمل في عدة مواقع صحراوية. الفحص قبل الرحلة استمارات ورقية في كل معسكر، والصيانة تُحجز عندما يقول السائق إن موعدها حان.

يسجّل فريق الأسطول المركبات الخمسين في أكسبنس، ويحدد فترات التشغيل الشاق، ويبني قائمة فحص من إجراء إدارة الرحلات في الشركة. ويبدأ المشرفون مراجعة قائمة المتأخر قبل اعتماد الرحلات الطويلة، وتُسجَّل البنود غير المطابقة مثل استبن متآكل أو طفاية مفقودة على المركبة بدل استمارة منفصلة.

وعندما تطلب الشركة المشغّلة سجل صيانة وفحص مركبة أثناء تدقيق الموقع، يفتح الفريق سجل تلك المركبة بدل البحث في ملفات المعسكر.`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'Can drivers complete a pre-trip inspection in Axpense?', a: 'Yes. You define the checklist items, and each inspection records pass or fail per item on the vehicle. Failed items stay on the vehicle record until the workshop deals with them.' },
      { q: 'Can we use severe-duty service intervals?', a: 'Yes. Intervals are set in kilometres for each vehicle, so you can enter the manufacturer’s severe-duty schedule and Axpense will show km left and overdue services.' },
      { q: 'Does Axpense make us compliant with HSE or operator requirements?', a: 'No software makes a company compliant on its own. Axpense keeps each vehicle’s inspections, services and costs on one record, which gives your HSE process the vehicle history it needs.' },
      { q: 'Can we include contractor vehicles?', a: 'Yes. Any vehicle can be registered with its details and assigned driver, so contractor vehicles working on your sites can follow the same inspection and maintenance routine.' },
      { q: 'Will Axpense remind us before licences and permits expire?', a: 'Yes. Registration, insurance and permit expiry dates can be recorded, and the fleet team is reminded before each one expires.', requires: 'documentExpiryReminders' },
      { q: 'Is Axpense available in Arabic?', a: 'Yes. The platform works in Arabic and English, and onboarding is free. Prices are on the [pricing page](/pricing).' },
    ],
    ar: [
      { q: 'هل يستطيع السائق إجراء فحص ما قبل الرحلة في أكسبنس؟', a: 'نعم. تحدد بنود القائمة، ويسجّل كل فحص مطابق أو غير مطابق لكل بند على المركبة، وتبقى البنود غير المطابقة في سجلها حتى تعالجها الورشة.' },
      { q: 'هل يمكن استخدام فترات صيانة التشغيل الشاق؟', a: 'نعم. تُحدَّد الفترات بالكيلومترات لكل مركبة، فتُدخل جدول التشغيل الشاق من المصنّع ويعرض أكسبنس المتبقي والمتأخر.' },
      { q: 'هل يجعلنا أكسبنس ملتزمين بمتطلبات السلامة أو الشركة المشغّلة؟', a: 'لا يوجد برنامج يحقق الالتزام وحده. يحفظ أكسبنس فحوصات كل مركبة وصيانتها وتكاليفها في سجل واحد، فيوفر لإجراءات السلامة لديك تاريخ المركبة الذي تحتاجه.' },
      { q: 'هل يمكن إضافة مركبات المقاولين؟', a: 'نعم. يمكن تسجيل أي مركبة ببياناتها وسائقها، لتتبع مركبات المقاولين العاملة في مواقعك روتين الفحص والصيانة نفسه.' },
      { q: 'هل ينبّهنا أكسبنس قبل انتهاء الرخص والتصاريح؟', a: 'نعم. يمكن تسجيل تواريخ انتهاء الترخيص والتأمين والتصاريح، ويُنبَّه فريق الأسطول قبل انتهاء كل منها.', requires: 'documentExpiryReminders' },
      { q: 'هل أكسبنس متاح بالعربية؟', a: 'نعم. تعمل المنصة بالعربية والإنجليزية، والتهيئة مجانية. الأسعار في [صفحة الأسعار](/pricing).' },
    ],
  },
  relatedPages: ['/vehicle-inspection-software', '/fleet-maintenance-software', '/features/inspection-management', '/features/preventive-maintenance', '/resources/vehicle-inspection-checklist'],
  relatedIndustries: ['/industries/construction', '/industries/logistics', '/industries/field-services'],
  relatedArticles: ['daily-vehicle-inspection-checklist', 'preventive-vs-reactive-maintenance', 'reduce-vehicle-downtime'],
};
