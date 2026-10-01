// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const INSPECTION_MANAGEMENT: SeoPage = {
  path: '/features/inspection-management',
  type: 'feature',
  updatedAt: '2026-09-29',
  primaryKeyword: { en: 'fleet inspection checklist app', ar: 'تطبيق قوائم فحص الأسطول' },
  secondaryKeywords: {
    en: ['vehicle inspection checklist template', 'pre-trip inspection checklist', 'daily vehicle check', 'digital inspection checklist for fleets'],
    ar: ['قائمة فحص السيارة قبل الرحلة', 'الفحص اليومي للمركبات', 'نموذج فحص المركبات', 'قوائم فحص رقمية للأسطول'],
  },
  meta: {
    en: {
      title: 'Fleet Inspection Checklist App for Daily Checks',
      description: 'A fleet inspection checklist app for daily, pre-trip and periodic checks, with pass/fail results saved on each vehicle’s history. Book a demo today.',
    },
    ar: {
      title: 'تطبيق قوائم فحص الأسطول اليومية والدورية',
      description: 'تطبيق قوائم فحص الأسطول للفحص اليومي وقبل الرحلة والدوري، مع حفظ نتيجة كل بند (مطابق أو غير مطابق) وسببه في سجل المركبة. احجز عرضًا تجريبيًا الآن.',
    },
  },
  h1: { en: 'Fleet Inspection Checklist App for Daily, Pre-Trip and Periodic Checks', ar: 'تطبيق قوائم فحص الأسطول للفحص اليومي وقبل الرحلة والدوري' },
  navLabel: { en: 'Inspection checklists', ar: 'قوائم الفحص' },
  hero: {
    en: {
      badge: 'Inspection checklists',
      intro: 'Build your inspection checklists once, as daily, pre-trip or periodic templates, and have drivers and supervisors complete them in Axpense. Every pass, every failed item and the reason it failed is saved on the vehicle’s history, so a problem spotted in the yard is still on record when someone plans the repair.',
    },
    ar: {
      badge: 'قوائم الفحص',
      intro: 'جهّز قوائم الفحص مرة واحدة في صورة نماذج للفحص اليومي وقبل الرحلة والفحص الدوري، ودع السائقين والمشرفين يكملونها في أكسبنس. تُحفظ نتيجة كل بند، وكل بند غير مطابق وسببه، في سجل المركبة، فتبقى المشكلة التي اكتُشفت في الساحة مسجلة حين يأتي وقت تخطيط الإصلاح.',
    },
  },
  heroImage: 'vehicles',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'What is a fleet inspection checklist app?',
        body: `**A fleet inspection checklist app replaces paper check sheets with digital checklists that are completed against a specific vehicle and saved to its record.** Each checklist is a list of items such as tyres, brakes, lights, fluid levels and seat belts, and each item is marked as pass or fail.

The point is not the form itself. A paper form tells you that someone looked at the vehicle; a digital checklist tells you which items failed, why, on which vehicle, when, and who did the check. That record is what lets a fleet team act on problems instead of filing them.`,
      },
      {
        kind: 'text',
        heading: 'How inspections work in Axpense',
        body: `Inspections in Axpense are built around **checklist templates** and **results on the vehicle**.

### Templates you configure

You decide which items belong on each checklist. Most fleets keep a short daily or pre-trip template for drivers and a longer periodic template for supervisors or the workshop.

### Pass or fail for every item

The person doing the inspection goes through the list and marks each item. A pass needs no extra work. A fail is recorded with **the reason it failed**, for example “front left tyre below minimum tread” rather than just “tyres”, so whoever reads it later knows what to look at.

### Results saved on the vehicle history

Each completed inspection is stored on the vehicle it was done on, next to its service history and expenses. Failed items stay visible on the record, which means a recurring fault on one van is easy to spot when you open that van, instead of being buried in a pile of forms.

### A clear record of who inspected what

Every inspection shows who completed it and when. Combined with [driver assignment](/features/drivers), that gives supervisors a simple way to see whether daily checks are actually being done, and by whom.`,
      },
      {
        kind: 'steps',
        heading: 'The inspection workflow, from template to follow-up',
        intro: 'A typical routine takes a few minutes per vehicle once the templates are in place.',
        steps: [
          { title: 'Create your checklist templates', desc: 'Set up the daily, pre-trip and periodic checklists your fleet needs, with the items that matter for your vehicle types.' },
          { title: 'Start an inspection on a vehicle', desc: 'The driver or supervisor picks the vehicle and the right template, so the result is tied to that vehicle from the start.' },
          { title: 'Mark each item pass or fail', desc: 'Every item gets a result. Failed items are recorded with a short reason that explains what is wrong.' },
          { title: 'Attach a photo to a failed item', desc: 'Add a photo of the worn tyre or cracked light so the workshop sees the problem before the vehicle arrives.', requires: 'inspectionPhotos' },
          { title: 'Save the inspection to the vehicle', desc: 'The completed checklist is stored on the vehicle history with the date and the name of the person who did it.' },
          { title: 'Turn failed items into work orders', desc: 'A failed item can create a work order automatically, so the repair is tracked until it is closed.', requires: 'inspectionToWorkOrder' },
          { title: 'Review failed items and follow up', desc: 'The fleet manager reviews open failures on the vehicle record and arranges the repair or service.' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'Every inspection lives on the vehicle record',
        image: 'vehicles',
        alt: 'Axpense vehicles screen listing each company vehicle with its plate, odometer and status, the records where completed inspection checklists are saved',
        caption: 'Open any vehicle to see its completed inspections alongside its service history and expenses.',
      },
      {
        kind: 'cards',
        heading: 'Checklist templates most fleets start with',
        intro: 'You can build any checklist you need. These three cover most operations. For a ready-made item list, use our free [vehicle inspection checklist](/resources/vehicle-inspection-checklist).',
        items: [
          { icon: 'clock', title: 'Daily check', desc: 'Ten to fifteen quick items a driver can check at the start of a shift: tyres, lights, mirrors, fluid warnings, visible leaks.' },
          { icon: 'truck', title: 'Pre-trip inspection', desc: 'A stricter list before long or high-risk trips, common for heavy trucks and field vehicles that travel to remote sites.' },
          { icon: 'calendar', title: 'Periodic inspection', desc: 'A detailed weekly or monthly check by a supervisor or technician, covering brakes, suspension, belts and body condition.' },
        ],
      },
      {
        kind: 'text',
        heading: 'Who uses inspection checklists in Axpense',
        body: `- **Drivers** complete the daily and pre-trip checks on the vehicle they are assigned to. Short, clear items keep this to a few minutes.
- **Supervisors and site managers** run periodic inspections and check that daily inspections are being completed across their team.
- **Fleet managers** read failed items across the fleet, decide what needs a repair and when, and watch for vehicles that fail the same item again and again.
- **Workshop staff** use the failure reasons to prepare before a vehicle comes in, and the inspection history to confirm a fault was fixed.

Inspections complement kilometre-based servicing rather than replacing it. A service booked through [preventive maintenance](/features/preventive-maintenance) handles the wear you can predict; a checklist catches the damage and faults you can’t.`,
      },
      {
        kind: 'text',
        heading: 'Part of a complete inspection process',
        body: `Checklists are the day-to-day tool. Scheduling, follow-up and reporting on inspections across the whole fleet are covered on our [vehicle inspection software](/vehicle-inspection-software) page, which explains how inspections connect with maintenance and costs in Axpense. For a deeper guide to writing a daily check, read our [daily vehicle inspection checklist](/blog/daily-vehicle-inspection-checklist) article.`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'ما هو تطبيق قوائم فحص الأسطول؟',
        body: `**تطبيق قوائم فحص الأسطول يستبدل استمارات الفحص الورقية بقوائم رقمية تُكمَل على مركبة محددة وتُحفظ في سجلها.** كل قائمة تتكون من بنود مثل الإطارات والفرامل والأنوار ومستويات السوائل وأحزمة الأمان، ويُحدَّد لكل بند إن كان مطابقًا أو غير مطابق.

القيمة ليست في الاستمارة نفسها. الاستمارة الورقية تقول إن أحدهم نظر إلى المركبة، أما القائمة الرقمية فتقول أي البنود لم تطابق، ولماذا، وعلى أي مركبة، ومتى، ومن أجرى الفحص. هذا السجل هو ما يسمح لفريق الأسطول بالتصرف في المشكلات بدلًا من حفظها في ملف.`,
      },
      {
        kind: 'text',
        heading: 'كيف تعمل الفحوصات في أكسبنس',
        body: `تقوم الفحوصات في أكسبنس على عنصرين: **نماذج قوائم الفحص** و**النتائج المسجلة على المركبة**.

### نماذج تضبطها بنفسك

أنت من يحدد البنود في كل قائمة. أغلب الأساطيل تحتفظ بقائمة قصيرة للفحص اليومي أو قبل الرحلة يكملها السائق، وقائمة أطول للفحص الدوري يكملها المشرف أو الورشة.

### مطابق أو غير مطابق لكل بند

يمر من يجري الفحص على القائمة ويحدد نتيجة كل بند. البند المطابق لا يحتاج أي إجراء إضافي. أما البند غير المطابق فيُسجَّل معه **سبب عدم المطابقة**، مثل «الإطار الأمامي الأيسر أقل من الحد الأدنى للنقشة» بدلًا من كلمة «الإطارات» فقط، ليعرف من يقرأه لاحقًا أين ينظر.

### النتائج محفوظة في سجل المركبة

يُحفظ كل فحص مكتمل على المركبة التي أُجري عليها، بجوار سجل صيانتها ومصروفاتها. وتبقى البنود غير المطابقة ظاهرة في السجل، فيسهل ملاحظة عطل يتكرر في سيارة بعينها بمجرد فتح سجلها، بدلًا من ضياعه وسط كومة من الاستمارات.

### سجل واضح لمن فحص ماذا

يظهر مع كل فحص اسم من أكمله وتاريخه. ومع [تعيين السائقين](/features/drivers) على المركبات، يصبح لدى المشرف طريقة بسيطة لمعرفة هل يُجرى الفحص اليومي فعلًا، ومن يجريه.`,
      },
      {
        kind: 'steps',
        heading: 'خطوات الفحص، من النموذج حتى المتابعة',
        intro: 'بعد تجهيز النماذج، يستغرق الروتين المعتاد دقائق قليلة لكل مركبة.',
        steps: [
          { title: 'أنشئ نماذج قوائم الفحص', desc: 'جهّز قوائم الفحص اليومي وقبل الرحلة والدوري التي يحتاجها أسطولك، بالبنود المناسبة لأنواع مركباتك.' },
          { title: 'ابدأ الفحص على مركبة محددة', desc: 'يختار السائق أو المشرف المركبة والنموذج المناسب، فترتبط النتيجة بالمركبة من البداية.' },
          { title: 'حدد نتيجة كل بند', desc: 'يحصل كل بند على نتيجة، ويُسجَّل مع البند غير المطابق سبب مختصر يوضح المشكلة.' },
          { title: 'أرفق صورة بالبند غير المطابق', desc: 'أضف صورة للإطار المتآكل أو الكشاف المكسور لترى الورشة المشكلة قبل وصول المركبة.', requires: 'inspectionPhotos' },
          { title: 'احفظ الفحص على المركبة', desc: 'تُحفظ القائمة المكتملة في سجل المركبة مع التاريخ واسم من أجرى الفحص.' },
          { title: 'حوّل البنود غير المطابقة إلى أوامر عمل', desc: 'يمكن أن يُنشئ البند غير المطابق أمر عمل تلقائيًا، فيُتابَع الإصلاح حتى إغلاقه.', requires: 'inspectionToWorkOrder' },
          { title: 'راجع البنود غير المطابقة وتابعها', desc: 'يراجع مدير الأسطول البنود المفتوحة في سجل المركبة ويرتب الإصلاح أو الصيانة.' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'كل فحص محفوظ في سجل المركبة',
        image: 'vehicles',
        alt: 'شاشة المركبات في أكسبنس تعرض مركبات الشركة برقم اللوحة وقراءة العداد والحالة، وهي السجلات التي تُحفظ فيها قوائم الفحص المكتملة',
        caption: 'افتح أي مركبة لترى فحوصاتها المكتملة بجوار سجل صيانتها ومصروفاتها.',
      },
      {
        kind: 'cards',
        heading: 'نماذج الفحص التي تبدأ بها أغلب الأساطيل',
        intro: 'يمكنك بناء أي قائمة تحتاجها، وهذه الثلاثة تغطي معظم العمليات. ولقائمة بنود جاهزة، استخدم [قائمة فحص السيارة](/resources/vehicle-inspection-checklist) المجانية.',
        items: [
          { icon: 'clock', title: 'الفحص اليومي', desc: 'من عشرة إلى خمسة عشر بندًا سريعًا يراجعها السائق في بداية الوردية: الإطارات والأنوار والمرايا ولمبات التحذير وأي تسريب ظاهر.' },
          { icon: 'truck', title: 'الفحص قبل الرحلة', desc: 'قائمة أدق قبل الرحلات الطويلة أو عالية المخاطر، وهي شائعة للشاحنات الثقيلة والمركبات التي تتجه إلى مواقع بعيدة.' },
          { icon: 'calendar', title: 'الفحص الدوري', desc: 'فحص تفصيلي أسبوعي أو شهري يجريه مشرف أو فني، يشمل الفرامل والعفشة والسيور وحالة الهيكل.' },
        ],
      },
      {
        kind: 'text',
        heading: 'من يستخدم قوائم الفحص في أكسبنس',
        body: `- **السائقون** يكملون الفحص اليومي وقبل الرحلة على المركبة المعيّنة لهم، والبنود القصيرة الواضحة تجعل ذلك لا يتجاوز دقائق.
- **المشرفون ومديرو المواقع** يجرون الفحص الدوري ويتأكدون من إتمام الفحص اليومي في فرقهم.
- **مديرو الأسطول** يقرؤون البنود غير المطابقة في الأسطول كله، ويقررون ما يحتاج إصلاحًا ومتى، ويلاحظون المركبات التي تفشل في البند نفسه مرة بعد مرة.
- **فريق الورشة** يستخدم أسباب عدم المطابقة للاستعداد قبل دخول المركبة، ويرجع إلى سجل الفحوصات للتأكد من إصلاح العطل.

الفحص يكمّل الصيانة المبنية على الكيلومترات ولا يحل محلها. [الصيانة الوقائية](/features/preventive-maintenance) تتعامل مع التآكل الذي يمكن توقعه، أما قائمة الفحص فتلتقط الأضرار والأعطال التي لا يمكن توقعها.`,
      },
      {
        kind: 'text',
        heading: 'جزء من منظومة فحص متكاملة',
        body: `قوائم الفحص هي أداة العمل اليومية. أما جدولة الفحوصات ومتابعتها وتقاريرها على مستوى الأسطول كله فتجدها في صفحة [برنامج فحص المركبات](/vehicle-inspection-software)، التي تشرح كيف ترتبط الفحوصات بالصيانة والتكاليف في أكسبنس.`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'Can I create my own inspection checklists?', a: 'Yes. Checklist items are configurable, so you can build separate templates for daily, pre-trip and periodic inspections and adjust them as your fleet changes.' },
      { q: 'What happens when an item fails?', a: 'The item is marked as failed with a reason, and the result is saved on the vehicle’s history, where the fleet manager can see it and arrange the repair.' },
      { q: 'Can I see who completed each inspection?', a: 'Yes. Each inspection records who completed it and when, so supervisors can check that daily inspections are being done across the team.' },
      { q: 'How is this different from a paper check sheet?', a: 'A paper sheet has to be collected, read and filed. In Axpense the result is on the vehicle record as soon as it is saved, failed items stay visible, and you can look back at every past inspection of a vehicle.' },
      { q: 'Does an inspection checklist replace scheduled maintenance?', a: 'No. Kilometre-based services cover predictable wear; inspections catch damage and faults between services. Axpense keeps both on the same vehicle record.' },
      { q: 'Can drivers attach photos to failed items?', a: 'Yes. A photo can be added to a failed item so the workshop sees the problem before the vehicle arrives.', requires: 'inspectionPhotos' },
      { q: 'Can a failed inspection item create a work order?', a: 'Yes. Failed items can generate a work order automatically, which is then tracked until the repair is closed. See [work orders](/features/work-orders).', requires: ['inspectionToWorkOrder', 'workOrders'] },
    ],
    ar: [
      { q: 'هل يمكنني إنشاء قوائم فحص خاصة بي؟', a: 'نعم. بنود قوائم الفحص قابلة للضبط، فيمكنك إنشاء نماذج منفصلة للفحص اليومي وقبل الرحلة والدوري، وتعديلها مع تغيّر أسطولك.' },
      { q: 'ماذا يحدث عندما يكون البند غير مطابق؟', a: 'يُسجَّل البند غير مطابق مع سببه، وتُحفظ النتيجة في سجل المركبة حيث يراها مدير الأسطول ويرتب الإصلاح.' },
      { q: 'هل أستطيع معرفة من أكمل كل فحص؟', a: 'نعم. يُسجَّل مع كل فحص اسم من أكمله وتاريخه، فيتأكد المشرف من إتمام الفحص اليومي في فريقه.' },
      { q: 'ما الفرق بين هذا واستمارة الفحص الورقية؟', a: 'الاستمارة الورقية يجب جمعها وقراءتها وحفظها. أما في أكسبنس فتظهر النتيجة في سجل المركبة بمجرد الحفظ، وتبقى البنود غير المطابقة ظاهرة، ويمكنك الرجوع إلى كل فحص سابق للمركبة.' },
      { q: 'هل تغني قائمة الفحص عن الصيانة المجدولة؟', a: 'لا. الصيانة حسب الكيلومترات تغطي التآكل المتوقع، والفحص يلتقط الأضرار والأعطال بين مواعيد الصيانة. ويحتفظ أكسبنس بالاثنين في سجل المركبة نفسه.' },
      { q: 'هل يمكن للسائق إرفاق صور بالبنود غير المطابقة؟', a: 'نعم. يمكن إضافة صورة للبند غير المطابق لترى الورشة المشكلة قبل وصول المركبة.', requires: 'inspectionPhotos' },
      { q: 'هل يُنشئ البند غير المطابق أمر عمل؟', a: 'نعم. يمكن أن تُنشئ البنود غير المطابقة أمر عمل تلقائيًا يُتابَع حتى إغلاق الإصلاح. اطّلع على [أوامر العمل](/features/work-orders).', requires: ['inspectionToWorkOrder', 'workOrders'] },
    ],
  },
  relatedPages: ['/vehicle-inspection-software', '/resources/vehicle-inspection-checklist', '/features/preventive-maintenance', '/features/drivers', '/features/vehicle-management'],
  relatedIndustries: ['/industries/oil-and-gas', '/industries/logistics', '/industries/construction', '/industries/distribution'],
  relatedArticles: ['daily-vehicle-inspection-checklist', 'reduce-vehicle-downtime', 'preventive-vs-reactive-maintenance'],
  parent: '/vehicle-inspection-software',
  schemaName: 'Axpense Fleet Inspections',
};
