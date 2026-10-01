// needs-native-review: Arabic written by Claude
import type { ToolPage } from '@/lib/seo-page';

export const VEHICLE_INSPECTION_CHECKLIST: ToolPage = {
  path: '/resources/vehicle-inspection-checklist',
  updatedAt: '2026-09-29',
  primaryKeyword: { en: 'vehicle inspection checklist', ar: 'قائمة فحص السيارة' },
  meta: {
    en: {
      title: 'Free Vehicle Inspection Checklist (PDF)',
      description: 'Free vehicle inspection checklist for fleets: tyres, lights, fluids, brakes, safety kit and documents. Tick it online or print the PDF for your drivers.',
    },
    ar: {
      title: 'قائمة فحص السيارة المجانية (PDF)',
      description: 'قائمة فحص السيارة مجانًا لأساطيل الشركات: الإطارات والأنوار والسوائل والفرامل ومعدات السلامة والمستندات. استخدمها على الشاشة أو اطبعها للسائقين.',
    },
  },
  h1: { en: 'Free Vehicle Inspection Checklist', ar: 'قائمة فحص السيارة المجانية للأساطيل' },
  navLabel: { en: 'Free vehicle inspection checklist', ar: 'قائمة فحص السيارة المجانية' },
  hero: {
    en: {
      badge: 'Free checklist',
      intro: 'A practical vehicle inspection checklist for company cars, vans, pickups and light trucks. Tick the items on screen or download the PDF, print it and keep a copy in every vehicle. It covers the body, tyres, lights, fluids, brakes, safety equipment and the documents a driver should carry.',
    },
    ar: {
      badge: 'قائمة مجانية',
      intro: 'قائمة عملية لفحص سيارات الشركة والفانات ومركبات النصف نقل والشاحنات الخفيفة. حدّد البنود على الشاشة أو نزّل ملف PDF واطبعه واحتفظ بنسخة في كل مركبة. تشمل القائمة الهيكل والإطارات والأنوار والسوائل والفرامل ومعدات السلامة والمستندات التي يجب أن يحملها السائق.',
    },
  },
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'What the checklist covers and who should use it',
        body: `**This checklist groups the checks a driver or supervisor can do without tools into seven areas: exterior and body, tyres and wheels, lights and signals, fluids and engine bay, brakes and steering, cab and safety equipment, and documents.** Each item is a yes-or-no check, so two people inspecting the same vehicle should reach the same result.

It is written for companies that run their own vehicles: delivery and distribution fleets, field service teams, sales cars and site pickups. Drivers use it before they set off; supervisors and fleet coordinators use it for spot checks and when a vehicle changes hands between drivers. It does not replace a workshop inspection or the official periodic inspection your vehicles may need, but it catches most visible problems before they turn into breakdowns.`,
      },
      {
        kind: 'steps',
        heading: 'How to use it',
        intro: 'Use the same list every time, in the same order, so the check becomes a routine rather than a chore.',
        steps: [
          { title: 'Walk around the vehicle', desc: 'Start at the driver’s door and walk around once, checking body, glass, mirrors, plates and tyres. With practice this takes about five minutes.' },
          { title: 'Open the bonnet', desc: 'With the engine cool and the vehicle on level ground, check oil, coolant, brake fluid and washer fluid, and look for leaks.' },
          { title: 'Check from the driver’s seat', desc: 'Start the engine, look for warning lights, test lights, indicators, horn, wipers and the parking brake.' },
          { title: 'Confirm safety kit and documents', desc: 'Fire extinguisher, first-aid kit, warning triangle, spare tyre and jack, vehicle licence, driver’s licence and insurance.' },
          { title: 'Record and sign', desc: 'Write down the odometer reading, mark any failed item with a short note, and sign and date the sheet.' },
        ],
      },
      {
        kind: 'text',
        heading: 'Quick pre-trip checks and deeper periodic checks',
        body: `Not every item needs the same attention every day. A sensible split is:

- **Before each shift or trip:** the walk-around, tyres, lights, warning lights, brakes and safety kit. These are the items most likely to change from one day to the next.
- **Weekly or every few hundred kilometres:** fluid levels, tyre pressure with a gauge, wipers and washer fluid, battery terminals.
- **Monthly, by a supervisor:** the full list including documents, plus a look at tread depth and any items that failed earlier in the month.

If you want a short daily version for drivers, our guide to the [daily vehicle inspection checklist](/blog/daily-vehicle-inspection-checklist) explains how to build one.`,
      },
      {
        kind: 'text',
        heading: 'What to do when an item fails',
        body: `A checklist only helps if a failed item leads to action. A common practice in fleets is to sort failures into three levels:

1. **Stop.** Anything that makes the vehicle unsafe to drive: brakes, steering, tyre damage, a leak of brake fluid or fuel, a missing seat belt. The vehicle stays parked until it is repaired.
2. **Repair soon.** Problems that don’t stop the trip but get worse: a blown bulb, low washer fluid, an expired fire extinguisher, a small oil leak. Fix within a day or two.
3. **Escalate.** Anything the driver isn’t sure about goes to the supervisor or workshop the same day, with a note of what was seen.

Deciding early is what [reduces vehicle downtime](/blog/reduce-vehicle-downtime): a warning light reported on Monday is a planned repair, the same fault ignored until Friday is often a breakdown.`,
      },
      {
        kind: 'text',
        heading: 'Keep a record of every inspection',
        body: `Keep completed sheets per vehicle, in date order, for at least a year. The record shows which problems keep coming back, whether drivers are actually doing the checks, and what state the vehicle was in when something went wrong. Always write the odometer reading on the sheet: it links the inspection to the vehicle’s maintenance schedule.`,
      },
      {
        kind: 'text',
        heading: 'Turn this checklist into a digital inspection',
        body: `Paper works, but sheets get lost and failed items rarely reach the person who books the repair. In Axpense you set up your own checklist items, drivers or supervisors complete the inspection with a pass or fail for each item, and the result is recorded on the vehicle’s history. Failed items stay visible on the vehicle until someone deals with them.

See how it works on our [vehicle inspection software](/vehicle-inspection-software) page.`,
      },
      {
        kind: 'text',
        heading: 'Add photos to failed items',
        requires: 'inspectionPhotos',
        body: 'Inspectors can attach a photo to a failed item, so the workshop sees the damage before the vehicle arrives.',
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'ماذا تشمل القائمة ومن يستخدمها؟',
        body: `**تجمع هذه القائمة الفحوصات التي يستطيع السائق أو المشرف القيام بها دون أدوات في سبعة أقسام: الهيكل الخارجي، والإطارات، والأنوار والإشارات، والسوائل وحجرة المحرك، والفرامل والتوجيه، والمقصورة ومعدات السلامة، والمستندات.** وكل بند إجابته نعم أو لا، حتى يصل شخصان يفحصان المركبة نفسها إلى النتيجة ذاتها.

القائمة موجهة للشركات التي تدير مركباتها بنفسها: أساطيل التوزيع والتوصيل، وفرق الخدمة الميدانية، وسيارات المبيعات، ومركبات المواقع. يستخدمها السائق قبل التحرك، ويستخدمها المشرف في الفحص المفاجئ وعند تسليم المركبة من سائق لآخر. وهي لا تغني عن فحص الورشة ولا عن الفحص الدوري الرسمي، لكنها تكشف معظم المشكلات الظاهرة قبل أن تتحول إلى أعطال.`,
      },
      {
        kind: 'steps',
        heading: 'طريقة الاستخدام',
        intro: 'استخدم القائمة نفسها في كل مرة وبالترتيب نفسه، ليصبح الفحص عادة لا عبئًا.',
        steps: [
          { title: 'دُر حول المركبة', desc: 'ابدأ من باب السائق ودُر حول المركبة مرة واحدة لفحص الهيكل والزجاج والمرايا واللوحات والإطارات. مع التعود يستغرق ذلك نحو خمس دقائق.' },
          { title: 'افتح غطاء المحرك', desc: 'والمحرك بارد والمركبة على أرض مستوية، افحص الزيت وسائل التبريد وزيت الفرامل وماء المساحات، وابحث عن أي تسريب.' },
          { title: 'افحص من مقعد السائق', desc: 'شغّل المحرك وراقب لمبات التحذير، واختبر الأنوار والإشارات والكلاكس والمساحات وفرامل اليد.' },
          { title: 'تأكد من معدات السلامة والمستندات', desc: 'طفاية الحريق، وحقيبة الإسعافات، ومثلث التحذير، والإطار الاحتياطي والكريك، ورخصة السيارة أو الاستمارة، ورخصة القيادة، ووثيقة التأمين.' },
          { title: 'سجّل ووقّع', desc: 'اكتب قراءة العداد، وضع ملاحظة قصيرة أمام أي بند غير سليم، ثم وقّع وأضف التاريخ.' },
        ],
      },
      {
        kind: 'text',
        heading: 'فحص سريع قبل الرحلة وفحص دوري أعمق',
        body: `لا تحتاج كل البنود الاهتمام نفسه يوميًا. وتقسيم معقول يكون كالتالي:

- **قبل كل وردية أو رحلة:** الجولة حول المركبة، والإطارات، والأنوار، ولمبات التحذير، والفرامل، ومعدات السلامة.
- **أسبوعيًا:** مستويات السوائل، وضغط الإطارات بالمقياس، والمساحات، وأطراف البطارية.
- **شهريًا بواسطة المشرف:** القائمة كاملة بما فيها المستندات، مع مراجعة عمق النقشة والبنود التي فشلت خلال الشهر.

ولنسخة يومية مختصرة للسائقين، راجع دليل [الفحص اليومي للمركبة](/blog/daily-vehicle-inspection-checklist).`,
      },
      {
        kind: 'text',
        heading: 'ماذا تفعل عند فشل أحد البنود؟',
        body: `القائمة لا تفيد إلا إذا أدى البند الفاشل إلى إجراء. والممارسة الشائعة في الأساطيل تقسيم الأعطال إلى ثلاثة مستويات:

1. **إيقاف:** كل ما يجعل القيادة غير آمنة، كالفرامل أو التوجيه أو تلف الإطار أو تسريب زيت الفرامل أو الوقود. تبقى المركبة متوقفة حتى الإصلاح.
2. **إصلاح قريب:** مشكلات لا تمنع الرحلة لكنها تتفاقم، كلمبة محروقة أو طفاية منتهية الصلاحية أو تسريب زيت بسيط. تُصلَح خلال يوم أو يومين.
3. **تصعيد:** أي شيء لا يتأكد منه السائق يُرفع للمشرف أو الورشة في اليوم نفسه مع وصف ما رآه.

القرار المبكر هو ما [يقلل توقف المركبات](/blog/reduce-vehicle-downtime)؛ فلمبة التحذير التي يُبلَّغ عنها يوم الأحد إصلاح مخطط، وتجاهلها حتى الخميس قد ينتهي بعطل على الطريق.`,
      },
      {
        kind: 'text',
        heading: 'احتفظ بسجل لكل فحص',
        body: `احفظ الأوراق المكتملة لكل مركبة بترتيب التاريخ لمدة عام على الأقل. فالسجل يكشف المشكلات المتكررة، ويبيّن هل يلتزم السائقون بالفحص فعلًا، وما حالة المركبة عند وقوع أي مشكلة. واكتب دائمًا قراءة العداد، فهي التي تربط الفحص بجدول صيانة المركبة.`,
      },
      {
        kind: 'text',
        heading: 'حوّل القائمة إلى فحص رقمي',
        body: `الورق يؤدي الغرض، لكن الأوراق تضيع ونادرًا ما تصل البنود الفاشلة إلى الشخص المسؤول عن الإصلاح. في أكسبنس تُعِدّ بنود قائمتك الخاصة، ويُكمل السائق أو المشرف الفحص بتحديد سليم أو غير سليم لكل بند، وتُسجَّل النتيجة في سجل المركبة، وتبقى البنود الفاشلة ظاهرة عليها حتى تُعالَج.

تعرّف على التفاصيل في صفحة [برنامج فحص المركبات](/vehicle-inspection-software).`,
      },
      {
        kind: 'text',
        heading: 'إرفاق صور بالبنود الفاشلة',
        requires: 'inspectionPhotos',
        body: 'يمكن للفاحص إرفاق صورة بالبند الفاشل، لترى الورشة الضرر قبل وصول المركبة.',
      },
    ],
  },
  faqs: {
    en: [
      { q: 'How long does a vehicle inspection take?', a: 'A pre-trip walk-around with this list takes about five minutes once a driver is used to it. The full list including fluids and documents takes 10–15 minutes.' },
      { q: 'Who should do the inspection, the driver or a supervisor?', a: 'Both. The driver does the quick check before each trip because they are the one driving the vehicle. A supervisor does the full check periodically and whenever a vehicle moves to another driver.' },
      { q: 'Can I change the items on the checklist?', a: 'Yes. Print it as it is, or use it as a starting point and add items specific to your vehicles, such as a tail lift, refrigeration unit or roof rack.' },
      { q: 'Does this replace the official periodic inspection?', a: 'No. Official inspections, such as الفحص الدوري in Saudi Arabia, are carried out at authorised centres. This checklist is for your own day-to-day checks between those inspections.' },
      { q: 'What should I do with completed sheets?', a: 'File them per vehicle and review failed items weekly. If you want results recorded on each vehicle automatically, a digital checklist in [inspection management](/features/inspection-management) saves the filing.' },
    ],
    ar: [
      { q: 'كم يستغرق فحص المركبة؟', a: 'الفحص السريع قبل الرحلة باستخدام هذه القائمة يستغرق نحو خمس دقائق بعد أن يعتاد عليه السائق، أما القائمة الكاملة بما فيها السوائل والمستندات فتستغرق من 10 إلى 15 دقيقة.' },
      { q: 'من يقوم بالفحص: السائق أم المشرف؟', a: 'كلاهما. السائق يجري الفحص السريع قبل كل رحلة لأنه من يقود المركبة، والمشرف يجري الفحص الكامل دوريًا وعند انتقال المركبة إلى سائق آخر.' },
      { q: 'هل يمكنني تعديل بنود القائمة؟', a: 'نعم. اطبعها كما هي أو اتخذها نقطة بداية وأضف بنودًا خاصة بمركباتك، مثل الرافعة الخلفية أو وحدة التبريد أو حامل السقف.' },
      { q: 'هل تغني القائمة عن الفحص الدوري الرسمي؟', a: 'لا. الفحص الدوري الرسمي يُجرى في المراكز المعتمدة، أما هذه القائمة فللفحوصات اليومية التي تجريها بنفسك بين مواعيده.' },
      { q: 'ماذا أفعل بالأوراق المكتملة؟', a: 'احفظها لكل مركبة وراجع البنود الفاشلة أسبوعيًا. وإذا أردت تسجيل النتائج على كل مركبة تلقائيًا، فالقوائم الرقمية في [إدارة الفحوصات](/features/inspection-management) توفّر عليك الحفظ الورقي.' },
    ],
  },
  relatedPages: ['/vehicle-inspection-software', '/features/inspection-management', '/fleet-maintenance-software'],
  relatedArticles: ['daily-vehicle-inspection-checklist', 'reduce-vehicle-downtime'],
  schemaName: { en: 'Axpense Vehicle Inspection Checklist', ar: 'قائمة فحص السيارة من أكسبنس' },
};
