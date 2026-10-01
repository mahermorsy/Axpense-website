// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const VEHICLE_MANAGEMENT: SeoPage = {
  path: '/features/vehicle-management',
  type: 'feature',
  updatedAt: '2026-09-29',
  primaryKeyword: { en: 'vehicle management software', ar: 'برنامج إدارة المركبات' },
  secondaryKeywords: {
    en: ['vehicle management system', 'company vehicle records', 'vehicle register', 'vehicle history record', 'odometer tracking for fleets'],
    ar: ['نظام إدارة المركبات', 'سجل المركبات', 'إدارة سيارات الشركة', 'سجل السيارة', 'بيانات المركبات'],
  },
  meta: {
    en: {
      title: 'Vehicle Management Software: One Vehicle Record',
      description: 'Vehicle management software that keeps odometer, status, driver, services, inspections and costs on one record per vehicle. See it live: book a demo.',
    },
    ar: {
      title: 'برنامج إدارة المركبات: سجل واحد لكل مركبة',
      description: 'برنامج إدارة المركبات الذي يجمع العداد والحالة والسائق والصيانة والفحوصات والتكاليف في سجل واحد لكل مركبة، بدل الملفات المتفرقة. احجز عرضًا تجريبيًا.',
    },
  },
  h1: { en: 'Vehicle Management Software: Every Vehicle on One Record', ar: 'برنامج إدارة المركبات: كل مركبة في سجل واحد' },
  navLabel: { en: 'Vehicle records and history', ar: 'سجلات المركبات وتاريخها' },
  hero: {
    en: {
      badge: 'Vehicle management',
      intro: 'Axpense gives every vehicle in your fleet a single record: who drives it, how far it has gone, what was serviced, what failed inspection and what it has cost so far. Anyone on the team can open it and get the full picture in seconds.',
    },
    ar: {
      badge: 'إدارة المركبات',
      intro: 'يمنح أكسبنس كل مركبة في أسطولك سجلًا واحدًا: من يقودها، وكم قطعت، وما الذي صُين فيها، وما البنود التي لم تجتز الفحص، وكم كلّفت حتى الآن. يستطيع أي فرد في الفريق فتحه ورؤية الصورة الكاملة خلال ثوانٍ.',
    },
  },
  heroImage: 'vehicles',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'What is vehicle management software?',
        body: `**Vehicle management software is a system that keeps one complete, shared record for each company vehicle, from its identification details to its service history and running costs.** It replaces the registration folder, the workshop notebook and the spreadsheet column that someone forgot to update.

The point is not to store data for its own sake. When a manager asks "Can this pickup go to the site tomorrow?" or "Why did this van cost so much last quarter?", the answer should be one screen away. In Axpense, the vehicle record is that screen, and every other module (maintenance, inspections, spare parts, expenses and depreciation) writes into it.`,
      },
      {
        kind: 'text',
        heading: 'What a vehicle record in Axpense holds',
        body: `Each vehicle you register becomes the anchor for everything that happens to it. A typical record brings together:

- **Identification:** plate number, make, model and the purchase details you use to tell vehicles apart and value them.
- **Odometer:** the latest kilometre reading, which drives the service schedule for that vehicle.
- **Status:** whether the vehicle is working or off the road, so planners can see what is actually available.
- **Assigned driver:** the person currently responsible for the vehicle.
- **Service history:** every preventive and corrective service, with the kilometres at which it was done.
- **Inspections:** checklist results, with failed items kept on the vehicle until they are dealt with.
- **Spare parts:** which parts were installed in this vehicle, and when.
- **Expenses:** repairs, parts, insurance, registration and other costs, grouped by category.
- **Depreciation:** book value over time, so you can see what the vehicle is worth on paper today.`,
      },
      {
        kind: 'steps',
        heading: 'How the vehicle record works day to day',
        intro: 'Most teams set up their vehicle list on the first day and let the record build itself from normal work after that.',
        steps: [
          { title: 'Register the fleet', desc: 'Add each vehicle with its plate, make, model, current odometer and purchase details. Our free onboarding helps you bring an existing spreadsheet across.' },
          { title: 'Assign a driver', desc: 'Link the vehicle to the driver who uses it, so responsibility is visible from the start.' },
          { title: 'Set its service intervals', desc: 'Make sure the kilometre intervals for this type of vehicle are set, so Axpense can count down to the next service.' },
          { title: 'Keep the odometer current', desc: 'Update the reading at a fixed routine, for example during the weekly inspection, so the countdown stays accurate.' },
          { title: 'Let work flow into the record', desc: 'Services, inspections, installed parts and expenses are all recorded against the vehicle as they happen.' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'The whole fleet on one list',
        image: 'vehicles',
        alt: 'Axpense vehicles list with plate number, model, odometer reading, assigned driver and kilometres left until the next service for each vehicle',
        caption: 'The vehicles list shows each vehicle’s odometer and how many kilometres remain before its next service.',
      },
      {
        kind: 'text',
        heading: 'Why the odometer reading matters so much',
        body: `In most fleets the odometer is the single most useful number on the record. Service intervals are set in kilometres, cost per km is calculated from kilometres, and a vehicle that suddenly drives far less than usual is often a sign of a problem.

That is why it pays to agree on one routine for updating readings: at the weekly inspection, at each service, or at the end of each month. Pick the one your team will actually follow. For a deeper look at using kilometres to plan servicing, see [km-based preventive maintenance](/features/preventive-maintenance).`,
      },
      {
        kind: 'cards',
        heading: 'Who uses the vehicle record',
        intro: 'The same record answers different questions for different people.',
        columns: 2,
        items: [
          { icon: 'truck', title: 'Fleet managers', desc: 'See which vehicles are available, which are due for service and which are costing more than they should.' },
          { icon: 'wrench', title: 'Workshop supervisors', desc: 'Check the service history and installed parts before starting a job, instead of asking the driver what was done last time.' },
          { icon: 'dollar', title: 'Finance', desc: 'Find every cost and the current book value of a vehicle without collecting receipts from three departments.' },
          { icon: 'users', title: 'Drivers', desc: 'Know which vehicle they are responsible for and complete its inspections against the right record.' },
        ],
      },
      {
        kind: 'text',
        heading: 'One part of a complete fleet system',
        body: `The vehicle record is the foundation of [fleet management software](/fleet-management-software): drivers, maintenance, inspections and costs all hang from it. If your first goal is to stop missing services, start with vehicles and intervals, then add inspections and expenses as the team settles in.

When a vehicle gets older, the same record feeds replacement decisions. Its [depreciation and lifecycle](/features/asset-management) view shows book value, while the expense history shows what it costs to keep running.`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'ما هو برنامج إدارة المركبات؟',
        body: `**برنامج إدارة المركبات هو نظام يحتفظ بسجل واحد كامل ومشترك لكل مركبة في الشركة، من بيانات التعريف إلى سجل الصيانة وتكاليف التشغيل.** وهو يحل محل ملف الترخيص الورقي ودفتر الورشة وعمود الإكسل الذي نسي أحدهم تحديثه.

الهدف ليس تخزين البيانات لذاتها. عندما يسأل المدير: "هل يمكن أن تذهب سيارة البيك أب هذه إلى الموقع غدًا؟" أو "لماذا كلّفتنا هذه السيارة كل هذا في الربع الماضي؟"، يجب أن تكون الإجابة على بعد شاشة واحدة. في أكسبنس، سجل المركبة هو هذه الشاشة، وكل وحدة أخرى (الصيانة والفحوصات وقطع الغيار والمصروفات والإهلاك) تكتب فيه.`,
      },
      {
        kind: 'text',
        heading: 'ماذا يحتوي سجل المركبة في أكسبنس',
        body: `كل مركبة تسجّلها تصبح المرجع لكل ما يحدث لها. ويجمع السجل عادةً:

- **بيانات التعريف:** رقم اللوحة والماركة والطراز وبيانات الشراء التي تميّز بها المركبات وتقيّمها.
- **العداد:** آخر قراءة بالكيلومتر، وهي التي تحدد جدول صيانة المركبة.
- **الحالة:** هل المركبة تعمل أم متوقفة، ليرى المخططون ما هو متاح فعلًا.
- **السائق المعيّن:** الشخص المسؤول عن المركبة حاليًا.
- **سجل الصيانة:** كل صيانة وقائية أو إصلاح، مع قراءة الكيلومترات وقت تنفيذها.
- **الفحوصات:** نتائج قوائم الفحص، مع بقاء البنود غير المطابقة على المركبة حتى تُعالج.
- **قطع الغيار:** القطع التي رُكّبت في هذه المركبة ومتى.
- **المصروفات:** الإصلاحات وقطع الغيار والتأمين والترخيص وباقي التكاليف، مقسمة حسب الفئة.
- **الإهلاك:** القيمة الدفترية بمرور الوقت، لتعرف قيمة المركبة على الورق اليوم.

ولأن كل ذلك في سجل واحد، لن تحتاج إلى مطابقة ثلاثة ملفات لتفهم مركبة واحدة.`,
      },
      {
        kind: 'steps',
        heading: 'كيف يعمل سجل المركبة يومًا بيوم',
        intro: 'تجهّز معظم الفرق قائمة المركبات في اليوم الأول، ثم يُبنى السجل تلقائيًا من العمل المعتاد.',
        steps: [
          { title: 'سجّل الأسطول', desc: 'أضف كل مركبة برقم اللوحة والماركة والطراز وقراءة العداد الحالية وبيانات الشراء. تساعدك التهيئة المجانية على نقل جدول الإكسل الحالي.' },
          { title: 'عيّن سائقًا', desc: 'اربط المركبة بالسائق الذي يستخدمها، لتكون المسؤولية واضحة من البداية.' },
          { title: 'حدد فترات الصيانة', desc: 'تأكد من ضبط فترات الكيلومترات لهذا النوع من المركبات، ليعدّ أكسبنس المسافة المتبقية حتى الصيانة القادمة.' },
          { title: 'حدّث قراءة العداد', desc: 'حدّث القراءة وفق روتين ثابت، مثل الفحص الأسبوعي، ليبقى العدّ التنازلي دقيقًا.' },
          { title: 'دع العمل يُسجَّل في السجل', desc: 'الصيانة والفحوصات والقطع المركّبة والمصروفات تُسجَّل كلها على المركبة عند حدوثها.' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'الأسطول كله في قائمة واحدة',
        image: 'vehicles',
        alt: 'قائمة المركبات في أكسبنس تعرض رقم اللوحة والطراز وقراءة العداد والسائق المعيّن والكيلومترات المتبقية حتى الصيانة القادمة لكل مركبة',
        caption: 'تعرض قائمة المركبات عداد كل مركبة وعدد الكيلومترات المتبقية قبل صيانتها القادمة.',
      },
      {
        kind: 'text',
        heading: 'لماذا تهم قراءة العداد إلى هذا الحد',
        body: `في معظم الأساطيل، العداد هو أهم رقم في سجل المركبة. فترات الصيانة تُحدَّد بالكيلومترات، وتكلفة الكيلومتر تُحسب من الكيلومترات، والمركبة التي تنخفض مسافتها فجأة عن المعتاد كثيرًا ما تشير إلى مشكلة.

لذلك من المفيد الاتفاق على روتين واحد لتحديث القراءات: في الفحص الأسبوعي، أو عند كل صيانة، أو في نهاية كل شهر. اختر الروتين الذي سيلتزم به فريقك فعلًا. ولمعرفة المزيد عن تخطيط الصيانة بالكيلومترات، اطّلع على [الصيانة الوقائية حسب الكيلومترات](/features/preventive-maintenance).`,
      },
      {
        kind: 'cards',
        heading: 'من يستخدم سجل المركبة',
        intro: 'السجل نفسه يجيب عن أسئلة مختلفة لأشخاص مختلفين.',
        columns: 2,
        items: [
          { icon: 'truck', title: 'مدير الأسطول', desc: 'يرى المركبات المتاحة، والمستحقة للصيانة، والتي تكلّف أكثر مما ينبغي.' },
          { icon: 'wrench', title: 'مشرف الورشة', desc: 'يراجع سجل الصيانة والقطع المركّبة قبل بدء العمل، بدل سؤال السائق عمّا نُفّذ آخر مرة.' },
          { icon: 'dollar', title: 'الإدارة المالية', desc: 'تجد كل تكلفة والقيمة الدفترية الحالية للمركبة دون جمع الإيصالات من ثلاث إدارات.' },
          { icon: 'users', title: 'السائقون', desc: 'يعرفون المركبة المسؤولين عنها ويُكملون فحوصاتها على السجل الصحيح.' },
        ],
      },
      {
        kind: 'text',
        heading: 'جزء من نظام أسطول متكامل',
        body: `سجل المركبة هو أساس [برنامج إدارة الأسطول](/fleet-management-software): السائقون والصيانة والفحوصات والتكاليف كلها مرتبطة به. إذا كان هدفك الأول ألا تفوتك مواعيد الصيانة، فابدأ بالمركبات وفترات الصيانة، ثم أضف الفحوصات والمصروفات مع تعوّد الفريق.

ومع تقدّم عمر المركبة، يغذّي السجل نفسه قرارات الاستبدال. تعرض صفحة [إهلاك المركبات ودورة حياتها](/features/asset-management) القيمة الدفترية، بينما يوضح سجل المصروفات تكلفة إبقائها في العمل.`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'What is the difference between vehicle management and fleet management?', a: 'Vehicle management is about the record of each individual vehicle: its details, odometer, driver, history and costs. Fleet management is the wider job of running all vehicles together, including maintenance planning, inspections and cost control across the fleet. In Axpense the vehicle record is the base the rest is built on.' },
      { q: 'What details do I need to add a vehicle?', a: 'The plate number, make, model and current odometer reading are enough to start. Adding purchase details lets Axpense calculate depreciation, and assigning a driver makes responsibility clear.' },
      { q: 'Can I import my existing vehicle list?', a: 'Yes. Onboarding is free and we help you bring your current spreadsheet into Axpense, so most teams are working with their full fleet on the first day.' },
      { q: 'How is the next service calculated for each vehicle?', a: 'From the latest odometer reading and the kilometre interval set for that vehicle. Axpense shows the kilometres left until the service is due and flags it as overdue once the interval is passed.' },
      { q: 'Can I see the total cost of a single vehicle?', a: 'Yes. Every expense recorded against the vehicle, including repairs, parts, insurance and registration, adds up on its record by category. You can use that total to work out [cost per km](/blog/vehicle-cost-per-km).' },
      { q: 'Does Axpense remind me before a vehicle’s registration or insurance expires?', a: 'Yes. Renewal dates for registration and insurance are kept on the vehicle, and Axpense reminds the responsible person before each one expires.', requires: 'documentExpiryReminders' },
    ],
    ar: [
      { q: 'ما الفرق بين إدارة المركبات وإدارة الأسطول؟', a: 'إدارة المركبات تخص سجل كل مركبة على حدة: بياناتها وعدادها وسائقها وتاريخها وتكاليفها. أما إدارة الأسطول فهي المهمة الأوسع لتشغيل كل المركبات معًا، بما في ذلك تخطيط الصيانة والفحوصات وضبط التكاليف على مستوى الأسطول. وفي أكسبنس، سجل المركبة هو الأساس الذي يُبنى عليه الباقي.' },
      { q: 'ما البيانات المطلوبة لإضافة مركبة؟', a: 'يكفي للبدء رقم اللوحة والماركة والطراز وقراءة العداد الحالية. وإضافة بيانات الشراء تتيح لأكسبنس حساب الإهلاك، وتعيين سائق يوضح المسؤولية.' },
      { q: 'هل يمكنني استيراد قائمة مركباتي الحالية؟', a: 'نعم. التهيئة مجانية ونساعدك على نقل جدولك الحالي إلى أكسبنس، فتعمل معظم الفرق بأسطولها كاملًا من اليوم الأول.' },
      { q: 'كيف تُحسب الصيانة القادمة لكل مركبة؟', a: 'من آخر قراءة للعداد وفترة الكيلومترات المحددة لتلك المركبة. يعرض أكسبنس الكيلومترات المتبقية حتى موعد الصيانة، ويميّزها كمتأخرة بمجرد تجاوز الفترة.' },
      { q: 'هل يمكنني رؤية التكلفة الإجمالية لمركبة واحدة؟', a: 'نعم. كل مصروف يُسجَّل على المركبة، من إصلاحات وقطع غيار وتأمين وترخيص، يُجمع في سجلها حسب الفئة. ويمكنك استخدام هذا الإجمالي لحساب [تكلفة الكيلومتر](/blog/vehicle-cost-per-km).' },
      { q: 'هل يذكّرني أكسبنس قبل انتهاء ترخيص المركبة أو تأمينها؟', a: 'نعم. تُحفظ مواعيد تجديد الترخيص والتأمين على المركبة، ويذكّر أكسبنس المسؤول قبل انتهاء كل منها.', requires: 'documentExpiryReminders' },
    ],
  },
  relatedPages: ['/fleet-management-software', '/features/drivers', '/features/preventive-maintenance', '/features/expense-management', '/features/asset-management', '/features/inspection-management'],
  relatedIndustries: ['/industries/logistics', '/industries/distribution', '/industries/construction', '/industries/field-services'],
  relatedArticles: ['what-is-fleet-management-software', 'fleet-management-excel-vs-software', 'vehicle-cost-per-km'],
  parent: '/fleet-management-software',
  schemaName: 'Axpense Vehicle Management',
};
