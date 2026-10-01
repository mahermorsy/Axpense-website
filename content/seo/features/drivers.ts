// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const DRIVERS: SeoPage = {
  path: '/features/drivers',
  type: 'feature',
  updatedAt: '2026-09-29',
  primaryKeyword: { en: 'driver management software', ar: 'إدارة السائقين' },
  secondaryKeywords: {
    en: ['assign drivers to vehicles', 'driver vehicle assignment', 'fleet driver records', 'vehicle handover between drivers', 'driver accountability'],
    ar: ['تعيين السائقين على المركبات', 'سجل السائقين', 'تسليم واستلام المركبة', 'مسؤولية السائق عن المركبة', 'ربط السائق بالسيارة'],
  },
  meta: {
    en: {
      title: 'Driver Management Software for Company Fleets',
      description: 'Driver management software that assigns drivers to vehicles and links every inspection and expense to a person, so handovers stay clear. Book a demo.',
    },
    ar: {
      title: 'إدارة السائقين وتعيينهم على المركبات',
      description: 'إدارة السائقين بتعيين كل سائق على مركبته وربط كل فحص ومصروف بشخص محدد، لتبقى المسؤولية واضحة عند تسليم المركبة واستلامها. احجز عرضًا تجريبيًا الآن.',
    },
  },
  h1: { en: 'Driver Management Software: Clear Responsibility for Every Vehicle', ar: 'إدارة السائقين: مسؤولية واضحة عن كل مركبة' },
  navLabel: { en: 'Driver assignment', ar: 'تعيين السائقين' },
  hero: {
    en: {
      badge: 'Drivers',
      intro: 'Assign each driver to the vehicle they use, and Axpense keeps that link on the record. When a vehicle comes back with a problem or an unexpected cost, you know who had it and can follow up with the right person.',
    },
    ar: {
      badge: 'السائقون',
      intro: 'عيّن كل سائق على المركبة التي يستخدمها، ويحتفظ أكسبنس بهذا الربط في السجل. وعندما تعود المركبة بمشكلة أو بتكلفة غير متوقعة، تعرف من كان يقودها وتتابع مع الشخص الصحيح.',
    },
  },
  heroImage: 'vehicles',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'What is driver management software?',
        body: `**Driver management software keeps a record of the people who drive your company vehicles and which vehicle each one is responsible for.** It answers a simple but important question at any moment: who has this vehicle?

In many companies that answer lives in a WhatsApp message or in the memory of the transport supervisor. It works until a vehicle comes back with a dent, a missed inspection or a repair nobody approved. In Axpense, drivers are part of the vehicle record, so responsibility is written down rather than remembered.`,
      },
      {
        kind: 'text',
        heading: 'How driver assignment works in Axpense',
        body: `You add your drivers once, then assign each one to a vehicle. From that point the assignment shows on the vehicle’s record and on the vehicles list, so anyone can see who is responsible.

The assignment matters most for the records that follow:

- **Inspections** completed on the vehicle can be traced to the driver responsible for it, so a skipped weekly check has a name attached.
- **Expenses** recorded against the vehicle can be traced to the driver who had it, which helps when a repair or a cost needs an explanation.
- **Maintenance** reminders become easier to act on, because you know exactly whom to call to bring the vehicle in.

When a driver moves to another vehicle, you update the assignment and the new driver takes over responsibility from that point.`,
      },
      {
        kind: 'steps',
        heading: 'Driver management, step by step',
        intro: 'The workflow follows the way vehicles actually change hands in a working fleet.',
        steps: [
          { title: 'Add your drivers', desc: 'Create a record for each driver who uses company vehicles, including drivers who only cover shifts.' },
          { title: 'Assign drivers to vehicles', desc: 'Link each driver to the vehicle they are responsible for. The vehicle record now shows the assigned driver.' },
          { title: 'Let records build around the assignment', desc: 'Inspections and expenses on the vehicle are recorded while the driver is responsible for it.' },
          { title: 'Hand over properly', desc: 'When the vehicle changes hands, run an inspection, note the odometer, then update the assignment.' },
          { title: 'Follow up with the right person', desc: 'When a failed inspection item or an unusual cost appears, you already know whom to ask.' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'See who is responsible for each vehicle',
        image: 'vehicles',
        alt: 'Axpense vehicles list showing the driver assigned to each vehicle next to its plate number and odometer reading',
        caption: 'The vehicles list shows the assigned driver for each vehicle, next to its odometer reading.',
      },
      {
        kind: 'checklist',
        heading: 'A good vehicle handover between drivers',
        intro: 'Most disputes about damage and missing items start at a handover that was never recorded. This routine takes about ten minutes and protects both drivers.',
        items: [
          { text: 'Complete an inspection checklist with the outgoing driver present.' },
          { text: 'Record the odometer reading at the moment of handover.' },
          { text: 'Note any failed checklist items so they stay on the vehicle’s record.' },
          { text: 'Check that tools, spare wheel and vehicle papers are in the vehicle.' },
          { text: 'Update the driver assignment in Axpense before the vehicle leaves.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'Who uses driver management',
        columns: 2,
        items: [
          { icon: 'truck', title: 'Fleet and transport managers', desc: 'Plan who drives what, see every assignment in one list and handle changes when drivers are on leave.' },
          { icon: 'clipboard', title: 'Supervisors', desc: 'Check that each driver completes the inspections for their vehicle and follow up on failed items.' },
          { icon: 'dollar', title: 'Finance', desc: 'Trace a vehicle expense back to the driver who had the vehicle when it happened.' },
          { icon: 'users', title: 'Drivers', desc: 'Know exactly which vehicle they are responsible for, and have a record that protects them at handover.' },
        ],
      },
      {
        kind: 'text',
        heading: 'Built on records and responsibility',
        body: `Driver management in Axpense is about who is responsible for which vehicle and what happened while they had it. It works from the records your team keeps: assignments, inspections, odometer readings and expenses. That makes it practical for fleets of any size, without installing hardware in every vehicle.

Drivers are one part of Axpense [fleet management software](/fleet-management-software). Each assignment sits on the [vehicle record](/features/vehicle-management), and the checklists drivers complete are covered in [inspection management](/features/inspection-management).`,
      },
      {
        kind: 'text',
        heading: 'Driving licence expiry reminders',
        requires: 'documentExpiryReminders',
        body: `Keep each driver’s licence expiry date on their record, and Axpense reminds you before it runs out. That way no one is assigned to a vehicle with an expired licence, and renewals are handled before they become urgent.`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'ما هي إدارة السائقين؟',
        body: `**إدارة السائقين هي الاحتفاظ بسجل للأشخاص الذين يقودون مركبات الشركة وبالمركبة التي يتحمل كل منهم مسؤوليتها.** وهي تجيب في أي لحظة عن سؤال بسيط ومهم: مع من هذه المركبة؟

في كثير من الشركات تكون الإجابة في رسالة واتساب أو في ذاكرة مشرف الحركة. وينجح ذلك حتى تعود مركبة بخدش، أو فحص لم يُنفذ، أو إصلاح لم يوافق عليه أحد. في أكسبنس، السائقون جزء من سجل المركبة، فتكون المسؤولية مكتوبة لا محفوظة في الذاكرة.`,
      },
      {
        kind: 'text',
        heading: 'كيف يعمل تعيين السائقين على المركبات في أكسبنس',
        body: `تضيف سائقيك مرة واحدة، ثم تعيّن كلًّا منهم على مركبة. ومن تلك اللحظة يظهر التعيين في سجل المركبة وفي قائمة المركبات، فيرى الجميع من المسؤول.

وتظهر أهمية التعيين في السجلات التي تليه:

- **الفحوصات** التي تُنفذ على المركبة يمكن ربطها بالسائق المسؤول عنها، فيكون للفحص الأسبوعي الفائت اسم واضح.
- **المصروفات** المسجلة على المركبة يمكن ربطها بالسائق الذي كانت معه، وهذا يفيد عندما يحتاج إصلاح أو تكلفة إلى تفسير.
- **تنبيهات الصيانة** يصبح التعامل معها أسهل، لأنك تعرف بالضبط من تتصل به لإحضار المركبة.

وعندما ينتقل السائق إلى مركبة أخرى، تحدّث التعيين ويتسلّم السائق الجديد المسؤولية من تلك اللحظة.`,
      },
      {
        kind: 'steps',
        heading: 'إدارة السائقين خطوة بخطوة',
        intro: 'تتبع الخطوات الطريقة التي تنتقل بها المركبات فعليًا بين الأيدي في أسطول يعمل.',
        steps: [
          { title: 'أضف سائقيك', desc: 'أنشئ سجلًا لكل سائق يستخدم مركبات الشركة، بما في ذلك السائقون البدلاء.' },
          { title: 'عيّن السائقين على المركبات', desc: 'اربط كل سائق بالمركبة المسؤول عنها، فيظهر السائق المعيّن في سجل المركبة.' },
          { title: 'دع السجلات تُبنى حول التعيين', desc: 'تُسجَّل فحوصات المركبة ومصروفاتها خلال فترة مسؤولية السائق عنها.' },
          { title: 'سلّم المركبة بشكل صحيح', desc: 'عند انتقال المركبة، نفّذ فحصًا وسجّل قراءة العداد ثم حدّث التعيين.' },
          { title: 'تابع مع الشخص الصحيح', desc: 'عندما يظهر بند فحص غير مطابق أو تكلفة غير معتادة، تعرف مسبقًا من تسأل.' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'اعرف المسؤول عن كل مركبة',
        image: 'vehicles',
        alt: 'قائمة المركبات في أكسبنس تعرض السائق المعيّن لكل مركبة بجوار رقم اللوحة وقراءة العداد',
        caption: 'تعرض قائمة المركبات السائق المعيّن لكل مركبة بجوار قراءة عدادها.',
      },
      {
        kind: 'checklist',
        heading: 'تسليم واستلام المركبة بين السائقين',
        intro: 'معظم الخلافات حول التلفيات والأغراض المفقودة تبدأ عند تسليم لم يُسجَّل. هذا الروتين يستغرق نحو عشر دقائق ويحمي السائقين معًا.',
        items: [
          { text: 'أكمل قائمة فحص بحضور السائق المسلِّم.' },
          { text: 'سجّل قراءة العداد لحظة التسليم.' },
          { text: 'دوّن البنود غير المطابقة لتبقى في سجل المركبة.' },
          { text: 'تأكد من وجود العدة والإطار الاحتياطي وأوراق المركبة.' },
          { text: 'حدّث تعيين السائق في أكسبنس قبل خروج المركبة.' },
        ],
      },
      {
        kind: 'cards',
        heading: 'من يستخدم إدارة السائقين',
        columns: 2,
        items: [
          { icon: 'truck', title: 'مدير الأسطول والحركة', desc: 'يخطط من يقود أي مركبة، ويرى كل التعيينات في قائمة واحدة، ويتعامل مع التغييرات عند إجازات السائقين.' },
          { icon: 'clipboard', title: 'المشرفون', desc: 'يتأكدون من إكمال كل سائق لفحوصات مركبته ويتابعون البنود غير المطابقة.' },
          { icon: 'dollar', title: 'الإدارة المالية', desc: 'تربط مصروف المركبة بالسائق الذي كانت معه وقت حدوثه.' },
          { icon: 'users', title: 'السائقون', desc: 'يعرفون المركبة المسؤولين عنها بالضبط، ولديهم سجل يحميهم عند التسليم.' },
        ],
      },
      {
        kind: 'text',
        heading: 'مبنية على السجلات والمسؤولية',
        body: `إدارة السائقين في أكسبنس تدور حول من المسؤول عن أي مركبة وما الذي حدث أثناء وجودها معه. وهي تعتمد على السجلات التي يحتفظ بها فريقك: التعيينات والفحوصات وقراءات العداد والمصروفات. وهذا يجعلها عملية لأسطول بأي حجم، دون تركيب أجهزة في كل مركبة.

السائقون جزء من [برنامج إدارة الأسطول](/fleet-management-software) في أكسبنس. ويظهر كل تعيين في [سجل المركبة](/features/vehicle-management)، أما قوائم الفحص التي يُكملها السائقون فتجدها في [إدارة الفحوصات](/features/inspection-management).`,
      },
      {
        kind: 'text',
        heading: 'تنبيهات انتهاء رخصة القيادة',
        requires: 'documentExpiryReminders',
        body: `احفظ تاريخ انتهاء رخصة كل سائق في سجله، ويذكّرك أكسبنس قبل انتهائها. فلا يُعيَّن أحد على مركبة برخصة منتهية، وتُنجز التجديدات قبل أن تصبح عاجلة.`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'What is driver assignment in fleet management?', a: 'It is linking each driver to the vehicle they are responsible for. In Axpense the assignment shows on the vehicle record, so everyone can see who has which vehicle.' },
      { q: 'Can one driver use different vehicles over time?', a: 'Yes. When a driver moves to another vehicle, you update the assignment. The new driver is responsible from that point, and the records made before the change stay with the vehicle.' },
      { q: 'How does Axpense link inspections and expenses to a driver?', a: 'Inspections and expenses are recorded on the vehicle, and the vehicle has an assigned driver. That makes it possible to trace a failed check or a cost back to the person who was responsible for the vehicle.' },
      { q: 'What should happen when a vehicle is handed to another driver?', a: 'Run an inspection with both drivers present, record the odometer reading, note any failed items and then update the assignment. Our [daily vehicle inspection checklist](/blog/daily-vehicle-inspection-checklist) is a good starting point.' },
      { q: 'Do I need a tracking device in each vehicle to manage drivers?', a: 'No. Driver management in Axpense is built on assignments and the records linked to them, such as inspections, odometer readings and expenses, so it works without installing anything in the vehicle.' },
      { q: 'Can Axpense remind me when a driver’s licence is about to expire?', a: 'Yes. Store the licence expiry date on the driver record and Axpense reminds you before it expires.', requires: 'documentExpiryReminders' },
    ],
    ar: [
      { q: 'ما المقصود بتعيين السائقين على المركبات؟', a: 'هو ربط كل سائق بالمركبة المسؤول عنها. وفي أكسبنس يظهر التعيين في سجل المركبة، فيعرف الجميع من معه أي مركبة.' },
      { q: 'هل يمكن أن يستخدم السائق نفسه مركبات مختلفة بمرور الوقت؟', a: 'نعم. عندما ينتقل السائق إلى مركبة أخرى، تحدّث التعيين. ويصبح السائق الجديد مسؤولًا من تلك اللحظة، وتبقى السجلات السابقة مع المركبة.' },
      { q: 'كيف يربط أكسبنس الفحوصات والمصروفات بالسائق؟', a: 'تُسجَّل الفحوصات والمصروفات على المركبة، وللمركبة سائق معيّن. وهذا يتيح ربط الفحص غير المطابق أو التكلفة بالشخص الذي كان مسؤولًا عن المركبة.' },
      { q: 'ماذا يجب أن يحدث عند تسليم المركبة لسائق آخر؟', a: 'نفّذ فحصًا بحضور السائقين، وسجّل قراءة العداد، ودوّن البنود غير المطابقة، ثم حدّث التعيين. ويمكنك البدء من [قائمة فحص السيارة](/resources/vehicle-inspection-checklist).' },
      { q: 'هل أحتاج إلى جهاز في كل مركبة لإدارة السائقين؟', a: 'لا. تعتمد إدارة السائقين في أكسبنس على التعيينات والسجلات المرتبطة بها، مثل الفحوصات وقراءات العداد والمصروفات، فتعمل دون تركيب أي شيء في المركبة.' },
      { q: 'هل يذكّرني أكسبنس بقرب انتهاء رخصة السائق؟', a: 'نعم. احفظ تاريخ انتهاء الرخصة في سجل السائق، ويذكّرك أكسبنس قبل انتهائها.', requires: 'documentExpiryReminders' },
    ],
  },
  relatedPages: ['/fleet-management-software', '/features/vehicle-management', '/features/inspection-management', '/features/expense-management', '/resources/vehicle-inspection-checklist'],
  relatedIndustries: ['/industries/logistics', '/industries/distribution', '/industries/field-services', '/industries/oil-and-gas'],
  relatedArticles: ['daily-vehicle-inspection-checklist', 'what-is-fleet-management-software'],
  parent: '/fleet-management-software',
  schemaName: 'Axpense Driver Management',
};
