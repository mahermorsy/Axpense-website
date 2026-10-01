// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const PREVENTIVE_MAINTENANCE: SeoPage = {
  path: '/features/preventive-maintenance',
  type: 'feature',
  updatedAt: '2026-09-29',
  primaryKeyword: { en: 'preventive maintenance software for fleets', ar: 'برنامج الصيانة الوقائية للسيارات' },
  secondaryKeywords: {
    en: ['km-based maintenance schedule', 'vehicle service reminders', 'preventive maintenance schedule for vehicles', 'overdue service alerts', 'mileage-based maintenance'],
    ar: ['الصيانة الدورية للسيارات', 'تنبيهات الصيانة', 'جدول الصيانة حسب الكيلومترات', 'الصيانة الوقائية للأسطول', 'موعد الصيانة القادمة'],
  },
  meta: {
    en: {
      title: 'Preventive Maintenance Software for Fleets',
      description: 'Preventive maintenance software for fleets that counts the km left to each service and flags overdue vehicles before they break down. Book a demo.',
    },
    ar: {
      title: 'برنامج الصيانة الوقائية للسيارات حسب الكيلومترات',
      description: 'برنامج الصيانة الوقائية للسيارات يحسب الكيلومترات المتبقية حتى كل صيانة وينبّهك للمركبات المتأخرة قبل أن تتعطل في الطريق. احجز عرضًا تجريبيًا الآن.',
    },
  },
  h1: { en: 'Preventive Maintenance Software for Fleets, Driven by Kilometres', ar: 'برنامج الصيانة الوقائية للسيارات حسب الكيلومترات الفعلية' },
  navLabel: { en: 'Km-based preventive maintenance', ar: 'الصيانة الوقائية حسب الكيلومترات' },
  hero: {
    en: {
      badge: 'Preventive maintenance',
      intro: 'Set service intervals in kilometres, and Axpense counts down the distance left for every vehicle. Your team sees what is due soon and what is overdue, and plans the workshop around it instead of reacting to breakdowns.',
    },
    ar: {
      badge: 'الصيانة الوقائية',
      intro: 'حدد فترات الصيانة بالكيلومترات، ويعدّ أكسبنس المسافة المتبقية لكل مركبة. يرى فريقك ما يستحق قريبًا وما تأخر، فيخطط لعمل الورشة مسبقًا بدل انتظار الأعطال.',
    },
  },
  heroImage: 'maintenance',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'What is preventive maintenance software for fleets?',
        body: `**Preventive maintenance software for fleets schedules routine services, such as oil changes, filters and brake checks, before a vehicle fails, and reminds the team when each one is due.** The alternative, fixing vehicles only when they break, costs more in repairs, towing and lost working days.

For most company vehicles the honest trigger for a service is distance, not the calendar. A delivery van can cover in two months what a manager’s car covers in a year. That is why Axpense plans preventive maintenance in kilometres.`,
      },
      {
        kind: 'text',
        heading: 'How km-based intervals work in Axpense',
        body: `Each service item has an interval in kilometres. Axpense knows the odometer reading when the service was last done and the vehicle’s current reading, so it can tell you three things at any moment:

- **Km left until service:** how far the vehicle can go before the next service is due.
- **Due soon:** vehicles approaching their interval, so you can book the workshop in advance.
- **Overdue:** vehicles that have passed the interval and should be serviced first.

When the service is done, the team records it and the countdown restarts from the new reading. The completed service stays in the vehicle’s service history, with the kilometres at which it was carried out.`,
      },
      {
        kind: 'formula',
        heading: 'The calculation behind every reminder',
        intro: 'There is nothing hidden in the countdown. It uses two simple formulas.',
        formulas: [
          { label: 'Next service due at', expression: 'Odometer at last service + service interval (km)' },
          { label: 'Km left until service', expression: 'Next service due at − current odometer' },
        ],
        example: {
          title: 'Worked example',
          body: 'For example, a pickup had its oil changed at 48,000 km and uses a 10,000 km interval, so the next change is due at 58,000 km. With the odometer now at 55,500 km, it has 2,500 km left. If the reading goes past 58,000 km before the service is recorded, the vehicle shows as overdue.',
        },
      },
      {
        kind: 'text',
        heading: 'Different intervals for different vehicles',
        body: `A sedan, a light van and a heavy truck don’t share one schedule, and a vehicle working in heat, dust or short stop-start trips usually needs shorter intervals than one on the highway. In Axpense you set intervals per vehicle type, so each group of similar vehicles follows its own schedule.

The table below shows typical example intervals for light vehicles. They are a starting point only: **always follow the manufacturer’s schedule** for each model and your workshop’s advice for your operating conditions.

| Service item | Example interval (light vehicles) |
|---|---|
| Engine oil and filter | 5,000–10,000 km |
| Tyre rotation and pressure check | every 10,000 km |
| Brake pads and discs inspection | every 10,000–15,000 km |
| Air filter | 15,000–30,000 km |
| Cabin filter | 15,000–20,000 km |

For a complete list you can print and adapt, use our [fleet preventive maintenance checklist](/resources/preventive-maintenance-checklist).`,
      },
      {
        kind: 'steps',
        heading: 'The preventive maintenance routine',
        intro: 'Once intervals are set, the weekly routine takes minutes.',
        steps: [
          { title: 'Set intervals by vehicle type', desc: 'Enter the kilometre interval for each service item, based on the manufacturer’s schedule.' },
          { title: 'Record the last service', desc: 'For each vehicle, enter the odometer reading at which each item was last done so the countdown starts from the right point.' },
          { title: 'Keep odometer readings current', desc: 'Update readings on a fixed routine so the km left stays accurate.' },
          { title: 'Review due and overdue services', desc: 'Check the reminders, book overdue vehicles first and schedule those due soon.' },
          { title: 'Record the completed service', desc: 'Log the service with its date, odometer and cost. The next interval starts automatically.' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'Due soon and overdue, at a glance',
        image: 'maintenance',
        alt: 'Axpense maintenance screen listing vehicles with their service item, kilometres left until the service is due and overdue services highlighted',
        caption: 'The maintenance screen shows the kilometres left for each service and makes overdue vehicles stand out.',
      },
      {
        kind: 'cards',
        heading: 'Who uses preventive maintenance',
        columns: 2,
        items: [
          { icon: 'calendar', title: 'Fleet managers', desc: 'Plan the week’s services and see at once whether anything has slipped past its interval.' },
          { icon: 'wrench', title: 'Workshop supervisors', desc: 'Balance the workshop load by booking vehicles that are due soon before they become overdue.' },
          { icon: 'users', title: 'Drivers', desc: 'Keep odometer readings up to date and bring the vehicle in when its service is due.' },
          { icon: 'dollar', title: 'Finance', desc: 'See routine service costs recorded per vehicle, separate from breakdown repairs.' },
        ],
      },
      {
        kind: 'text',
        heading: 'Kilometres first, with the calendar as a backstop',
        body: `Some items age even when a vehicle barely moves, such as batteries, coolant and rubber parts. Many manufacturers therefore write intervals as "every X km or Y months, whichever comes first". Kilometres remain the main trigger for a working fleet, so keep time-based checks on your workshop checklist as a backstop for low-use vehicles.

Preventive maintenance is one part of [fleet maintenance software](/fleet-maintenance-software), which also covers service history, spare parts and inspections. To compare approaches, read [preventive vs reactive maintenance](/blog/preventive-vs-reactive-maintenance).`,
      },
      {
        kind: 'text',
        heading: 'Service intervals by engine hours',
        requires: 'hourBasedMaintenance',
        body: `Generators, forklifts and site machinery are serviced by engine hours rather than kilometres. In Axpense you can set intervals in hours for this equipment and see the hours left until the next service, on the same maintenance screen as your vehicles.`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'ما هو برنامج الصيانة الوقائية للسيارات؟',
        body: `**برنامج الصيانة الوقائية للسيارات يجدول الصيانة الدورية، مثل تغيير الزيت والفلاتر وفحص الفرامل، قبل أن تتعطل المركبة، وينبّه الفريق عند استحقاق كل صيانة.** أما البديل، أي إصلاح السيارة فقط عندما تتعطل، فيكلّف أكثر في الإصلاحات والونش وأيام العمل الضائعة.

في معظم سيارات الشركات، المحرك الحقيقي للصيانة هو المسافة لا التقويم. سيارة التوزيع قد تقطع في شهرين ما تقطعه سيارة المدير في عام كامل. لهذا يخطط أكسبنس الصيانة الوقائية بالكيلومترات.`,
      },
      {
        kind: 'text',
        heading: 'كيف تعمل فترات الكيلومترات في أكسبنس',
        body: `لكل بند صيانة فترة بالكيلومترات. يعرف أكسبنس قراءة العداد عند آخر صيانة والقراءة الحالية للمركبة، فيخبرك في أي لحظة بثلاثة أمور:

- **الكيلومترات المتبقية:** المسافة التي يمكن أن تقطعها المركبة قبل استحقاق الصيانة التالية.
- **مستحقة قريبًا:** المركبات التي تقترب من فترتها، لتحجز الورشة مسبقًا.
- **متأخرة:** المركبات التي تجاوزت الفترة ويجب صيانتها أولًا.

عند تنفيذ الصيانة يسجّلها الفريق، فيبدأ العدّ من القراءة الجديدة. وتبقى الصيانة المنفذة في سجل صيانة المركبة مع قراءة الكيلومترات وقت تنفيذها.`,
      },
      {
        kind: 'formula',
        heading: 'الحساب وراء كل تنبيه',
        intro: 'لا شيء غامض في العدّ التنازلي، فهو يعتمد على معادلتين بسيطتين.',
        formulas: [
          { label: 'موعد الصيانة القادمة عند', expression: 'قراءة العداد عند آخر صيانة + فترة الصيانة (كم)' },
          { label: 'الكيلومترات المتبقية', expression: 'موعد الصيانة القادمة − قراءة العداد الحالية' },
        ],
        example: {
          title: 'مثال عملي',
          body: 'مثلًا، سيارة بيك أب غُيّر زيتها عند 48,000 كم وفترة الزيت لديها 10,000 كم، فيستحق التغيير التالي عند 58,000 كم. إذا كان العداد الآن 55,500 كم، يتبقى 2,500 كم. وإذا تجاوزت القراءة 58,000 كم قبل تسجيل الصيانة، تظهر المركبة كمتأخرة.',
        },
      },
      {
        kind: 'text',
        heading: 'فترات مختلفة لمركبات مختلفة',
        body: `السيارة الملاكي وسيارة النقل الخفيف والشاحنة الثقيلة لا تتشارك جدولًا واحدًا، والمركبة التي تعمل في الحر والأتربة أو في مشاوير قصيرة متقطعة تحتاج عادةً فترات أقصر من مركبة تسير على الطرق السريعة. في أكسبنس تحدد الفترات حسب نوع المركبة، فتتبع كل مجموعة من المركبات المتشابهة جدولها الخاص.

يعرض الجدول التالي فترات نموذجية للمركبات الخفيفة على سبيل المثال فقط: **اتبع دائمًا جدول الشركة المصنّعة** لكل طراز ونصيحة الورشة حسب ظروف التشغيل لديك.

| بند الصيانة | فترة على سبيل المثال (مركبات خفيفة) |
|---|---|
| زيت المحرك والفلتر | 5,000–10,000 كم |
| تدوير الإطارات وفحص الضغط | كل 10,000 كم |
| فحص تيل وطنابير الفرامل | كل 10,000–15,000 كم |
| فلتر الهواء | 15,000–30,000 كم |
| فلتر التكييف | 15,000–20,000 كم |

وللحصول على قائمة كاملة قابلة للطباعة والتعديل، استخدم [جدول الصيانة الدورية للسيارات](/resources/preventive-maintenance-checklist).`,
      },
      {
        kind: 'steps',
        heading: 'روتين الصيانة الوقائية',
        intro: 'بعد ضبط الفترات، لا يستغرق الروتين الأسبوعي سوى دقائق.',
        steps: [
          { title: 'حدد الفترات حسب نوع المركبة', desc: 'أدخل فترة الكيلومترات لكل بند صيانة بناءً على جدول الشركة المصنّعة.' },
          { title: 'سجّل آخر صيانة', desc: 'أدخل لكل مركبة قراءة العداد عند آخر تنفيذ لكل بند، ليبدأ العدّ من النقطة الصحيحة.' },
          { title: 'حدّث قراءات العداد', desc: 'حدّث القراءات وفق روتين ثابت لتبقى الكيلومترات المتبقية دقيقة.' },
          { title: 'راجع الصيانة المستحقة والمتأخرة', desc: 'راجع التنبيهات، واحجز للمركبات المتأخرة أولًا، ثم جدول المستحقة قريبًا.' },
          { title: 'سجّل الصيانة المنفذة', desc: 'سجّل الصيانة بتاريخها وقراءة العداد وتكلفتها، فتبدأ الفترة التالية تلقائيًا.' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'المستحق قريبًا والمتأخر في لمحة',
        image: 'maintenance',
        alt: 'شاشة الصيانة في أكسبنس تعرض المركبات مع بند الصيانة والكيلومترات المتبقية حتى موعده وتمييز الصيانات المتأخرة',
        caption: 'تعرض شاشة الصيانة الكيلومترات المتبقية لكل بند وتُبرز المركبات المتأخرة.',
      },
      {
        kind: 'cards',
        heading: 'من يستخدم الصيانة الوقائية',
        columns: 2,
        items: [
          { icon: 'calendar', title: 'مدير الأسطول', desc: 'يخطط صيانات الأسبوع ويرى فورًا إن كانت أي مركبة قد تجاوزت فترتها.' },
          { icon: 'wrench', title: 'مشرف الورشة', desc: 'يوزّع حمل الورشة بحجز المركبات المستحقة قريبًا قبل أن تتأخر.' },
          { icon: 'users', title: 'السائقون', desc: 'يحدّثون قراءة العداد ويُحضرون المركبة عند استحقاق صيانتها.' },
          { icon: 'dollar', title: 'الإدارة المالية', desc: 'ترى تكاليف الصيانة الدورية مسجلة لكل مركبة، منفصلة عن إصلاح الأعطال.' },
        ],
      },
      {
        kind: 'text',
        heading: 'الكيلومترات أولًا، والتقويم كخط دفاع إضافي',
        body: `بعض البنود تتقادم حتى لو كانت المركبة قليلة الحركة، مثل البطارية وسائل التبريد والقطع المطاطية. لذلك يكتب كثير من المصنّعين الفترات بصيغة "كل كذا كيلومتر أو كذا شهرًا، أيهما أسبق". وتبقى الكيلومترات المحرك الأساسي لأسطول يعمل يوميًا، فاحتفظ بالفحوصات الزمنية في قائمة الورشة كخط دفاع إضافي للمركبات قليلة الاستخدام.

الصيانة الوقائية جزء من [برنامج صيانة الأسطول](/fleet-maintenance-software) الذي يشمل أيضًا سجل الصيانة وقطع الغيار والفحوصات. ولمعرفة كيف تُتابع القطع المستخدمة في كل صيانة، اطّلع على [قطع الغيار من الشراء حتى التركيب](/features/spare-parts).`,
      },
      {
        kind: 'text',
        heading: 'فترات الصيانة بساعات تشغيل المحرك',
        requires: 'hourBasedMaintenance',
        body: `المولدات والرافعات الشوكية ومعدات المواقع تُصان بساعات التشغيل لا بالكيلومترات. في أكسبنس يمكنك تحديد فترات بالساعات لهذه المعدات ورؤية الساعات المتبقية حتى الصيانة القادمة، في شاشة الصيانة نفسها مع مركباتك.`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'Why schedule maintenance by kilometres instead of dates?', a: 'Because wear follows distance. Two identical vans can drive very different kilometres in the same month, so a date-based schedule services one too early and the other too late. Kilometre intervals match service to real use.' },
      { q: 'How does Axpense know when a service is due?', a: 'It compares the vehicle’s current odometer reading with the reading at the last service plus the interval you set. The result is the kilometres left, and the service is flagged as overdue once that number passes zero.' },
      { q: 'Can different vehicles have different intervals?', a: 'Yes. You set intervals per vehicle type, so sedans, vans and trucks each follow a schedule that suits them. If some vehicles work in harder conditions, ask your workshop whether a shorter interval makes sense.' },
      { q: 'What interval should I use for oil changes?', a: 'Follow the manufacturer’s schedule for each model. As an example, many light vehicles fall in a 5,000–10,000 km range depending on the oil and the operating conditions. Our guide to [km-based preventive maintenance](/blog/km-based-preventive-maintenance) explains how to set a schedule.' },
      { q: 'What happens when a service is completed?', a: 'You record it with the date, odometer reading and cost. It is added to the vehicle’s service history and the countdown to the next service starts from the new reading.' },
      { q: 'Can Axpense schedule maintenance by engine hours?', a: 'Yes. For equipment that is serviced by running time, you can set intervals in engine hours alongside kilometre intervals for vehicles.', requires: 'hourBasedMaintenance' },
    ],
    ar: [
      { q: 'لماذا تُجدول الصيانة بالكيلومترات لا بالتواريخ؟', a: 'لأن التآكل يتبع المسافة. سيارتان متماثلتان قد تقطعان مسافات مختلفة جدًا في الشهر نفسه، فيصين الجدول الزمني إحداهما مبكرًا والأخرى متأخرًا. فترات الكيلومترات تربط الصيانة بالاستخدام الفعلي.' },
      { q: 'كيف يعرف أكسبنس موعد الصيانة؟', a: 'يقارن قراءة العداد الحالية بقراءة آخر صيانة مضافًا إليها الفترة التي حددتها. النتيجة هي الكيلومترات المتبقية، وتُميَّز الصيانة كمتأخرة بمجرد أن يتجاوز الرقم الصفر.' },
      { q: 'هل يمكن تحديد فترات مختلفة لمركبات مختلفة؟', a: 'نعم. تحدد الفترات حسب نوع المركبة، فتتبع السيارات الملاكي وسيارات النقل والشاحنات جدولًا يناسب كلًّا منها. وإذا كانت بعض المركبات تعمل في ظروف أقسى، فاستشر الورشة بشأن فترة أقصر.' },
      { q: 'ما الفترة المناسبة لتغيير الزيت؟', a: 'اتبع جدول الشركة المصنّعة لكل طراز. على سبيل المثال، تقع فترات كثير من المركبات الخفيفة بين 5,000 و10,000 كم حسب نوع الزيت وظروف التشغيل. ويشرح دليلنا عن [الصيانة الوقائية حسب الكيلومترات](/blog/km-based-preventive-maintenance) كيفية إعداد الجدول.' },
      { q: 'ماذا يحدث عند إتمام الصيانة؟', a: 'تسجّلها بالتاريخ وقراءة العداد والتكلفة، فتُضاف إلى سجل صيانة المركبة ويبدأ العدّ للصيانة التالية من القراءة الجديدة.' },
      { q: 'هل يجدول أكسبنس الصيانة بساعات تشغيل المحرك؟', a: 'نعم. للمعدات التي تُصان حسب وقت التشغيل، يمكنك تحديد فترات بساعات المحرك إلى جانب فترات الكيلومترات للمركبات.', requires: 'hourBasedMaintenance' },
    ],
  },
  relatedPages: ['/fleet-maintenance-software', '/resources/preventive-maintenance-checklist', '/features/vehicle-management', '/features/spare-parts', '/features/inspection-management', '/features/reports-analytics'],
  relatedIndustries: ['/industries/logistics', '/industries/distribution', '/industries/oil-and-gas', '/industries/field-services'],
  relatedArticles: ['km-based-preventive-maintenance', 'preventive-vs-reactive-maintenance', 'reduce-vehicle-downtime'],
  parent: '/fleet-maintenance-software',
  schemaName: 'Axpense Preventive Maintenance',
};
