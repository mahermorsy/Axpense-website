// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const VEHICLE_INSPECTION_SOFTWARE: SeoPage = {
  path: '/vehicle-inspection-software',
  type: 'commercial',
  updatedAt: '2026-09-29',
  primaryKeyword: { en: 'vehicle inspection software', ar: 'برنامج فحص المركبات' },
  secondaryKeywords: {
    en: ['fleet inspection software', 'digital vehicle inspection', 'vehicle inspection app', 'fleet inspection checklist', 'vehicle defect tracking'],
    ar: ['نظام فحص السيارات', 'قائمة فحص السيارة', 'نموذج فحص المركبات', 'الفحص اليومي للسيارات', 'فحص السيارات إلكترونيًا'],
  },
  meta: {
    en: {
      title: 'Vehicle Inspection Software & Digital Checklists',
      description: 'Vehicle inspection software with your own checklists, pass/fail results and failed items kept on each vehicle’s record for follow-up. Book a demo.',
    },
    ar: {
      title: 'برنامج فحص المركبات وقوائم الفحص',
      description: 'برنامج فحص المركبات بقوائم فحص تضعها بنفسك ونتائج مطابق وغير مطابق، مع حفظ البنود غير المطابقة في سجل كل مركبة لمتابعتها. احجز عرضًا تجريبيًا.',
    },
  },
  h1: { en: 'Vehicle Inspection Software for Digital Fleet Inspections', ar: 'برنامج فحص المركبات إلكترونيًا' },
  navLabel: { en: 'Vehicle inspection software', ar: 'برنامج فحص المركبات' },
  hero: {
    en: {
      badge: 'Vehicle inspection software',
      intro: 'Axpense replaces paper inspection forms with digital checklists you design yourself. Every inspection is saved on the vehicle, every failed item stays on its record, and your fleet team can see what was found and what still needs attention.',
    },
    ar: {
      badge: 'برنامج فحص المركبات',
      intro: 'يستبدل أكسبنس نماذج الفحص الورقية بقوائم فحص إلكترونية تصممها بنفسك. يُحفظ كل فحص على المركبة، ويبقى كل بند غير مطابق في سجلها، فيعرف فريق الأسطول ما الذي اكتُشف وما الذي ما زال يحتاج إلى متابعة.',
    },
  },
  heroImage: 'vehicles',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'What is vehicle inspection software?',
        body: `**Vehicle inspection software is a system for running vehicle checks from a standard checklist and keeping the results on each vehicle’s record.** Instead of paper forms that end up in a drawer, each item is marked pass or fail, failed items are recorded against the vehicle, and the full inspection history is available to anyone on the fleet team.

Axpense gives fleets in Egypt, Saudi Arabia and the Middle East digital inspections that sit alongside maintenance, drivers and costs in one system.`,
      },
      {
        kind: 'text',
        heading: 'Paper inspections vs digital inspections',
        body: `Paper checklists are cheap and familiar, which is why most fleets start with them. The trouble begins after the form is filled in: someone has to read it, notice the failed items, pass them on and file the sheet. When that chain breaks, a defect a driver spotted on Sunday becomes a breakdown on Thursday.

| | Paper forms | Digital inspections in Axpense |
|---|---|---|
| Checklist | Printed copies, often out of date | One checklist you edit once and everyone uses |
| Results | Ticks that are hard to read or incomplete | Clear pass or fail for each item |
| Failed items | Depend on someone reading the form | Recorded on the vehicle’s record for follow-up |
| History | Filed in folders, rarely looked at again | Every inspection on the vehicle, searchable |
| Link to maintenance | Separate, if at all | Same vehicle record as services and costs |
| Spotting problems | Reading every form by hand | Failed items visible on each vehicle’s record |

Moving to digital inspections doesn’t mean the inspection itself changes. Drivers and supervisors still walk around the vehicle and check the same things. What changes is that the result goes somewhere useful.`,
      },
      {
        kind: 'text',
        heading: 'Checklists you configure for your fleet',
        body: `No two fleets inspect exactly the same things. A refrigerated distribution truck needs a check on its cooling unit; a construction pickup needs its load restraints and reverse alarm checked; a company sedan needs little more than tyres, lights and fluids. In Axpense you set up your own checklist items, so the inspection matches the vehicles you actually run.

A few principles make checklists work in practice:

- **Keep items specific and checkable.** “Tyres OK” invites a guess; “Tyre tread above the wear indicator on all tyres” can be answered pass or fail.
- **Order items as people walk around the vehicle.** Front, driver side, rear, passenger side, cab. It is faster and fewer items get skipped.
- **Keep the daily check short.** A pre-trip check that takes ten minutes gets done; one that takes forty gets rushed.
- **Review the list every few months.** If an item never fails and never matters, remove it. If breakdowns keep coming from something not on the list, add it.

For a ready-made starting point, download our free [vehicle inspection checklist](/resources/vehicle-inspection-checklist) and adapt it. More on how checklists are set up is on the [inspection management](/features/inspection-management) feature page.`,
      },
      {
        kind: 'text',
        heading: 'Pass and fail results, and why an item failed',
        body: `Each item on an Axpense checklist is marked **pass** or **fail**. A clear binary result is what makes inspections useful at scale: across a fleet of 80 vehicles, you can see at a glance which inspections came back clean and which found problems.

When an item fails, it is recorded on the vehicle’s record, so the problem does not depend on anyone remembering to pass on a message. That record is what the fleet coordinator or workshop works from when deciding what to fix and when.

Most of the “why” of a failure can be built into the checklist itself. An item written as “Brake fluid level between min and max marks” tells the reader exactly what was wrong when it fails. Write items with the failure condition in mind and your inspection records will explain themselves.`,
      },
      {
        kind: 'text',
        heading: 'Photo evidence for failed items',
        requires: 'inspectionPhotos',
        body: `A photo removes most of the back-and-forth about a defect. Inspectors can attach photos to an inspection item, so the workshop sees the cracked mirror or the worn tyre before the vehicle arrives, and the record shows the vehicle’s condition on that date.

Photos also help when vehicles change hands between drivers or return from a rental or a subcontractor: the condition at each inspection is on record.`,
      },
      {
        kind: 'workflow',
        heading: 'From inspection to follow-up',
        intro: 'An inspection is only worth doing if what it finds gets dealt with. This is the path a failed item takes in Axpense.',
        nodes: [
          { label: 'Inspection completed from the checklist' },
          { label: 'Item marked as failed' },
          { label: 'Failed item recorded on the vehicle’s record' },
          { label: 'Work order created from the failed item', requires: ['inspectionToWorkOrder', 'workOrders'] },
          { label: 'Maintenance carried out', requires: 'inspectionToWorkOrder' },
          { label: 'Item resolved and closed', requires: 'inspectionToWorkOrder' },
        ],
        note: 'Failed items stay on the vehicle’s record, so the fleet team can see what was found and follow it up with the workshop.',
      },
      {
        kind: 'text',
        heading: 'Inspection history and records for every vehicle',
        body: `Every inspection completed in Axpense is saved on the vehicle, next to its services, parts, expenses and assigned driver. Over months that history becomes a picture of how a vehicle is really holding up.

- **Recurring failures** stand out. If the same van fails its lights check every fortnight, the fix is probably an electrical fault rather than another bulb.
- **Driver responsibility** is clearer, because inspections are tied to the vehicle and the driver assigned to it through [driver management](/features/drivers).
- **Maintenance planning** improves when inspection findings and service history sit on the same record. Our [fleet maintenance software](/fleet-maintenance-software) page explains how services are scheduled by kilometres from that same vehicle record.

When a manager, insurer or auditor asks how a vehicle has been checked, the answer is a list of dated inspections, not a hunt through filing cabinets.`,
      },
      {
        kind: 'cards',
        heading: 'Pre-trip, periodic and handover inspections',
        intro: 'Most fleets run more than one kind of inspection. Each has a different purpose and a different checklist length.',
        columns: 3,
        items: [
          { icon: 'clipboard', title: 'Pre-trip (daily) checks', desc: 'A short walk-around by the driver before the vehicle leaves: tyres, lights, fluids, brakes, mirrors, warning lights. It catches problems before they reach the road.' },
          { icon: 'calendar', title: 'Periodic inspections', desc: 'A longer check by a supervisor or technician, weekly or monthly, covering items a driver can’t assess: suspension, underbody, belts, battery condition.' },
          { icon: 'users', title: 'Handover inspections', desc: 'A check when a vehicle moves to a new driver or branch, so both sides agree on its condition at the moment of handover.' },
        ],
      },
      {
        kind: 'text',
        heading: 'Official periodic inspection in Saudi Arabia',
        body: `Separate from your internal checks, vehicles in Saudi Arabia go through the official periodic technical inspection known as الفحص الدوري. Many fleet teams keep the date and result of these official inspections on the vehicle record alongside their own inspections, so the full picture of the vehicle is in one place.

Your internal inspections are what keep a vehicle ready for those official ones: a vehicle that passes a thorough periodic check every month rarely surprises you at the government test.`,
      },
      {
        kind: 'checklist',
        heading: 'What changes when inspections go digital',
        items: [
          { text: 'Everyone inspects against the same, current checklist.' },
          { text: 'Failed items are recorded on the vehicle instead of being lost on paper.' },
          { text: 'The inspection history for each vehicle is available in seconds.' },
          { text: 'Maintenance and inspection records sit together, so defects and services can be compared.' },
          { text: 'Managers can see which inspections found problems without reading every form.' },
        ],
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'ما هو برنامج فحص المركبات؟',
        body: `**برنامج فحص المركبات هو نظام لإجراء فحوصات المركبات وفق قائمة فحص موحدة وحفظ النتائج في سجل كل مركبة.** بدلًا من نماذج ورقية ينتهي بها المطاف في درج، يُعلَّم كل بند بأنه مطابق أو غير مطابق، وتُسجَّل البنود غير المطابقة على المركبة، ويكون سجل الفحوصات كاملًا متاحًا لفريق الأسطول.

يقدم أكسبنس للأساطيل في مصر والسعودية والشرق الأوسط فحصًا إلكترونيًا يعمل جنبًا إلى جنب مع الصيانة والسائقين والتكاليف في نظام واحد.`,
      },
      {
        kind: 'text',
        heading: 'الفحص الورقي مقابل الفحص الإلكتروني',
        body: `قوائم الفحص الورقية رخيصة ومألوفة، ولذلك تبدأ بها أغلب الأساطيل. لكن المشكلة تبدأ بعد تعبئة النموذج: يجب أن يقرأه أحد، وينتبه للبنود غير المطابقة، ويبلّغ عنها، ثم يحفظ الورقة. وإذا انقطعت هذه السلسلة، يتحول عيب لاحظه السائق يوم الأحد إلى عطل يوم الخميس.

| | النماذج الورقية | الفحص الإلكتروني في أكسبنس |
|---|---|---|
| قائمة الفحص | نسخ مطبوعة قد تكون قديمة | قائمة واحدة تعدّلها مرة ويستخدمها الجميع |
| النتائج | علامات غير واضحة أو ناقصة | مطابق أو غير مطابق لكل بند |
| البنود غير المطابقة | تعتمد على قراءة أحدهم للنموذج | تُسجَّل في سجل المركبة للمتابعة |
| السجل | ملفات نادرًا ما يعود إليها أحد | كل فحص محفوظ على المركبة |
| الربط بالصيانة | منفصل غالبًا | ملف المركبة نفسه الذي يحوي الصيانة والتكاليف |
| اكتشاف المشكلات | قراءة كل نموذج يدويًا | البنود غير المطابقة ظاهرة في سجل كل مركبة |

الانتقال للفحص الإلكتروني لا يغيّر الفحص نفسه؛ فالسائق أو المشرف ما زال يدور حول المركبة ويفحص البنود نفسها. ما يتغير هو أن النتيجة تصل إلى مكان مفيد.`,
      },
      {
        kind: 'text',
        heading: 'قوائم فحص تضبطها حسب أسطولك',
        body: `لا يفحص أسطولان الأشياء نفسها تمامًا. شاحنة التوزيع المبردة تحتاج فحص وحدة التبريد، وسيارة البيك أب في موقع إنشاءات تحتاج فحص أحزمة تثبيت الحمولة وجرس الرجوع، وسيارة الشركة الصالون لا تحتاج أكثر من الإطارات والأنوار والسوائل. في أكسبنس تضع بنود قائمة الفحص بنفسك، فيطابق نموذج فحص المركبات ما تشغّله فعلًا.

مبادئ تجعل القائمة عملية:

- **اجعل البند محددًا وقابلًا للحكم.** عبارة «الإطارات سليمة» تفتح باب التخمين، أما «عمق مداس جميع الإطارات أعلى من مؤشر التآكل» فإجابتها مطابق أو غير مطابق.
- **رتّب البنود حسب مسار الدوران حول المركبة:** الأمام، جهة السائق، الخلف، الجهة الأخرى، الكابينة.
- **اجعل الفحص اليومي للسيارات قصيرًا.** فحص يستغرق عشر دقائق يُنفَّذ، وفحص يستغرق أربعين دقيقة يُنجز على عجل.
- **راجع القائمة كل بضعة أشهر.** احذف ما لا يفشل أبدًا ولا يؤثر، وأضف ما تتكرر منه الأعطال.

وكبداية جاهزة، حمّل [قائمة فحص السيارة](/resources/vehicle-inspection-checklist) المجانية وعدّلها. وتفاصيل إعداد القوائم في صفحة [تطبيق قوائم فحص الأسطول](/features/inspection-management).`,
      },
      {
        kind: 'text',
        heading: 'نتائج مطابق وغير مطابق وسبب عدم المطابقة',
        body: `يُعلَّم كل بند في قائمة أكسبنس بأنه **مطابق** أو **غير مطابق**. هذه النتيجة الواضحة هي ما يجعل الفحص مفيدًا على مستوى الأسطول: في أسطول من 80 مركبة ترى بنظرة واحدة أي الفحوصات سليمة وأيها كشف مشكلات.

وعندما يفشل بند، يُسجَّل في سجل المركبة، فلا تعتمد المشكلة على تذكّر أحد لإبلاغها. ومن هذا السجل يعمل منسق الأسطول أو الورشة لتحديد ما يُصلح ومتى.

ويمكن بناء معظم «سبب» الفشل داخل القائمة نفسها: بند مكتوب مثل «مستوى زيت الفرامل بين علامتي الحد الأدنى والأقصى» يوضح بالضبط ما الخطأ عندما يفشل. اكتب البنود وحالة الفشل في ذهنك، وستشرح سجلات الفحص نفسها.`,
      },
      {
        kind: 'text',
        heading: 'صور توثّق البنود غير المطابقة',
        requires: 'inspectionPhotos',
        body: `الصورة تختصر معظم النقاش حول العيب. يمكن للفاحص إرفاق صور ببند الفحص، فترى الورشة المرآة المكسورة أو الإطار المتآكل قبل وصول المركبة، ويوثّق السجل حالة المركبة في ذلك التاريخ.

وتفيد الصور أيضًا عند انتقال المركبة بين السائقين أو عودتها من مقاول، إذ تبقى حالتها عند كل فحص مسجلة.`,
      },
      {
        kind: 'workflow',
        heading: 'من الفحص إلى المتابعة',
        intro: 'لا قيمة للفحص إلا إذا عولج ما يكشفه. هذا هو المسار الذي يسلكه البند غير المطابق في أكسبنس.',
        nodes: [
          { label: 'إتمام الفحص وفق القائمة' },
          { label: 'تعليم البند كغير مطابق' },
          { label: 'تسجيل البند غير المطابق في سجل المركبة' },
          { label: 'إنشاء أمر عمل من البند غير المطابق', requires: ['inspectionToWorkOrder', 'workOrders'] },
          { label: 'تنفيذ الصيانة', requires: 'inspectionToWorkOrder' },
          { label: 'حل البند وإغلاقه', requires: 'inspectionToWorkOrder' },
        ],
        note: 'تبقى البنود غير المطابقة في سجل المركبة، فيرى فريق الأسطول ما اكتُشف ويتابعه مع الورشة.',
      },
      {
        kind: 'text',
        heading: 'سجل الفحوصات لكل مركبة',
        body: `كل فحص يُنجز في أكسبنس يُحفظ على المركبة، بجانب صيانتها وقطع غيارها ومصروفاتها والسائق المعيّن عليها. ومع الأشهر يصبح هذا السجل صورة حقيقية لحالة المركبة.

- **الأعطال المتكررة تظهر بوضوح.** إذا فشلت السيارة نفسها في فحص الأنوار كل أسبوعين، فالمشكلة غالبًا كهربائية وليست لمبة أخرى.
- **مسؤولية السائق أوضح**، لأن الفحص مرتبط بالمركبة والسائق المعيّن عليها عبر [إدارة السائقين](/features/drivers).
- **تخطيط الصيانة أفضل** عندما تكون نتائج الفحص وسجل الصيانة على الملف نفسه. تشرح صفحة [برنامج صيانة الأسطول](/fleet-maintenance-software) كيف تُجدول الصيانة بالكيلومترات من ملف المركبة ذاته.

وعندما تسألك الإدارة أو شركة التأمين عن طريقة فحص مركبة ما، تكون الإجابة قائمة فحوصات مؤرخة، لا بحثًا في الأدراج.`,
      },
      {
        kind: 'cards',
        heading: 'فحص قبل الرحلة وفحص دوري وفحص عند التسليم',
        intro: 'تجري أغلب الأساطيل أكثر من نوع فحص، ولكل نوع هدف وطول قائمة مختلف.',
        columns: 3,
        items: [
          { icon: 'clipboard', title: 'الفحص اليومي قبل الرحلة', desc: 'جولة قصيرة يجريها السائق قبل خروج المركبة: الإطارات والأنوار والسوائل والفرامل والمرايا ولمبات التحذير.' },
          { icon: 'calendar', title: 'الفحص الدوري الداخلي', desc: 'فحص أطول يجريه مشرف أو فني أسبوعيًا أو شهريًا، يشمل ما لا يستطيع السائق تقييمه: التعليق وأسفل السيارة والسيور والبطارية.' },
          { icon: 'users', title: 'فحص التسليم', desc: 'فحص عند انتقال المركبة لسائق أو فرع جديد، ليتفق الطرفان على حالتها لحظة التسليم.' },
        ],
      },
      {
        kind: 'text',
        heading: 'الفحص الدوري الرسمي في السعودية',
        body: `بعيدًا عن فحوصاتك الداخلية، تخضع المركبات في السعودية لـ**الفحص الدوري** الرسمي. كثير من فرق الأسطول تحتفظ بتاريخ هذه الفحوصات الرسمية ونتيجتها في سجل المركبة بجانب فحوصاتها الداخلية، لتكون صورة المركبة كاملة في مكان واحد.

والفحوصات الداخلية هي ما يجهّز المركبة للفحص الرسمي: المركبة التي تجتاز فحصًا دوريًا دقيقًا كل شهر نادرًا ما تفاجئك في الفحص الحكومي.`,
      },
      {
        kind: 'checklist',
        heading: 'ما الذي يتغير عند فحص السيارات إلكترونيًا',
        items: [
          { text: 'الجميع يفحص وفق القائمة نفسها المحدّثة.' },
          { text: 'البنود غير المطابقة تُسجَّل على المركبة بدلًا من أن تضيع على الورق.' },
          { text: 'سجل الفحوصات لكل مركبة متاح في ثوانٍ.' },
          { text: 'سجلات الصيانة والفحص معًا، فتسهل مقارنة العيوب بالصيانة.' },
          { text: 'ترى الإدارة الفحوصات التي كشفت مشكلات دون قراءة كل نموذج.' },
        ],
      },
    ],
  },
  faqs: {
    en: [
      { q: 'Can I set up my own inspection checklist?', a: 'Yes. You configure the checklist items yourself, so the inspection matches your vehicles and the way your team works. Many fleets start from our free [vehicle inspection checklist](/resources/vehicle-inspection-checklist) and adapt it.' },
      { q: 'What happens when an inspection item fails?', a: 'The failed item is recorded on the vehicle’s history, so the fleet team can see it and follow it up with the workshop. It does not depend on someone passing on a paper form.' },
      { q: 'Can a failed inspection item create a work order automatically?', a: 'Yes. A failed item can be turned into a work order, which is tracked through maintenance until the item is resolved. See [work orders](/features/work-orders).', requires: ['inspectionToWorkOrder', 'workOrders'] },
      { q: 'Can inspectors attach photos?', a: 'Yes. Photos can be attached to inspection items, so the condition of the vehicle and any defect is documented on the inspection record.', requires: 'inspectionPhotos' },
      { q: 'Is there a vehicle inspection app for drivers?', a: 'Yes. Drivers can complete inspections from the Axpense mobile app, and the results are saved on the vehicle straight away.', requires: 'mobileApp' },
      { q: 'How often should fleet vehicles be inspected?', a: 'A common approach is a short pre-trip check by the driver every working day, plus a longer periodic inspection by a supervisor or technician weekly or monthly. Heavy-use vehicles and those on rough roads usually need the tighter end of that range.' },
      { q: 'Where can I see a vehicle’s past inspections?', a: 'On the vehicle’s record in Axpense. Each inspection is saved with its date and results, next to the vehicle’s services, expenses and assigned driver.' },
      { q: 'Does Axpense replace the official periodic inspection (الفحص الدوري)?', a: 'No. Official inspections are carried out by the authorised inspection centres. Axpense handles your internal inspections, and many teams also keep the date of the official inspection on the vehicle record.' },
      { q: 'How are inspections connected to maintenance?', a: 'Inspections and services are saved on the same vehicle record, so a defect found in an inspection and the service that follows sit side by side. See [fleet maintenance software](/fleet-maintenance-software).' },
    ],
    ar: [
      { q: 'هل يمكنني إعداد قائمة الفحص الخاصة بي؟', a: 'نعم. تضع بنود القائمة بنفسك، فيطابق الفحص مركباتك وطريقة عمل فريقك. وتبدأ فرق كثيرة من [قائمة فحص السيارة](/resources/vehicle-inspection-checklist) المجانية ثم تعدّلها.' },
      { q: 'ماذا يحدث عندما يفشل أحد بنود الفحص؟', a: 'يُسجَّل البند غير المطابق في سجل المركبة، فيراه فريق الأسطول ويتابعه مع الورشة، دون الاعتماد على انتقال نموذج ورقي من يد إلى يد.' },
      { q: 'هل ينشئ البند غير المطابق أمر عمل تلقائيًا؟', a: 'نعم. يمكن تحويل البند غير المطابق إلى أمر عمل يُتابع خلال الصيانة حتى حل المشكلة. اطّلع على [أوامر العمل للصيانة](/features/work-orders).', requires: ['inspectionToWorkOrder', 'workOrders'] },
      { q: 'هل يمكن للفاحص إرفاق صور؟', a: 'نعم. يمكن إرفاق صور ببنود الفحص، فتُوثَّق حالة المركبة وأي عيب في سجل الفحص.', requires: 'inspectionPhotos' },
      { q: 'هل يوجد تطبيق فحص للسائقين؟', a: 'نعم. يستطيع السائقون إجراء الفحص من تطبيق أكسبنس على الجوال، وتُحفظ النتائج على المركبة فورًا.', requires: 'mobileApp' },
      { q: 'كم مرة يجب فحص مركبات الأسطول؟', a: 'الشائع فحص قصير يجريه السائق قبل الرحلة كل يوم عمل، إضافة إلى فحص دوري أطول يجريه مشرف أو فني أسبوعيًا أو شهريًا. والمركبات كثيرة الاستخدام أو التي تعمل على طرق وعرة تحتاج الفحص الأكثر تكرارًا.' },
      { q: 'أين أرى الفحوصات السابقة للمركبة؟', a: 'في سجل المركبة داخل أكسبنس. يُحفظ كل فحص بتاريخه ونتائجه بجانب صيانة المركبة ومصروفاتها والسائق المعيّن عليها.' },
      { q: 'هل يغني أكسبنس عن الفحص الدوري الرسمي؟', a: 'لا. الفحص الرسمي تجريه مراكز الفحص المعتمدة. أكسبنس مخصص لفحوصاتك الداخلية، وتحتفظ فرق كثيرة أيضًا بتاريخ الفحص الرسمي في سجل المركبة.' },
      { q: 'كيف يرتبط الفحص بالصيانة؟', a: 'تُحفظ الفحوصات والصيانة على ملف المركبة نفسه، فيظهر العيب المكتشف في الفحص والصيانة التي تليه جنبًا إلى جنب. اطّلع على [برنامج صيانة الأسطول](/fleet-maintenance-software).' },
    ],
  },
  relatedPages: ['/features/inspection-management', '/fleet-maintenance-software', '/resources/vehicle-inspection-checklist', '/features/drivers', '/fleet-management-software', '/features/vehicle-management'],
  relatedIndustries: ['/industries/logistics', '/industries/distribution', '/industries/construction', '/industries/oil-and-gas', '/industries/field-services'],
  relatedArticles: ['daily-vehicle-inspection-checklist', 'reduce-vehicle-downtime', 'what-is-fleet-management-software'],
  schemaName: 'Axpense Vehicle Inspection Software',
};
