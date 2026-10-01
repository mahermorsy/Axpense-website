// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

// Whole page is gated on `workOrders` (noindex, out of sitemap and unlinked until confirmed).
export const WORK_ORDERS: SeoPage = {
  path: '/features/work-orders',
  type: 'feature',
  updatedAt: '2026-09-29',
  requires: ['workOrders'],
  primaryKeyword: { en: 'fleet work order software', ar: 'أوامر العمل للصيانة' },
  secondaryKeywords: {
    en: ['vehicle repair work orders', 'maintenance work order tracking', 'fleet repair tracking', 'work order history per vehicle', 'workshop job tracking'],
    ar: ['أوامر الصيانة', 'أمر إصلاح', 'متابعة الإصلاحات', 'أمر شغل للورشة', 'سجل الإصلاحات لكل مركبة'],
  },
  meta: {
    en: {
      title: 'Fleet Work Order Software for Maintenance Teams',
      description: 'Fleet work order software that takes each repair from request to completion, with parts, costs and status on one record per vehicle. Book a demo.',
    },
    ar: {
      title: 'أوامر العمل للصيانة: من الطلب حتى الإغلاق',
      description: 'أوامر العمل للصيانة في مكان واحد: افتح أمر الإصلاح وتابع حالته وقطع الغيار والتكلفة حتى الإغلاق، ليبقى سجل كل مركبة كاملًا. احجز عرضًا تجريبيًا الآن.',
    },
  },
  h1: { en: 'Fleet Work Order Software: Every Repair Tracked to Completion', ar: 'أوامر العمل للصيانة: كل إصلاح متابَع حتى إغلاقه' },
  navLabel: { en: 'Maintenance work orders', ar: 'أوامر الصيانة' },
  hero: {
    en: {
      badge: 'Work orders',
      intro: 'A work order turns "the van needs looking at" into a tracked job with an owner, a status, the parts used and the final cost. Axpense keeps each one on the vehicle’s record, so nothing stays half-finished and nobody has to chase the workshop for updates.',
    },
    ar: {
      badge: 'أوامر العمل',
      intro: 'أمر العمل يحوّل عبارة "السيارة تحتاج إلى كشف" إلى مهمة متابَعة لها مسؤول وحالة وقطع غيار مستخدمة وتكلفة نهائية. يحتفظ أكسبنس بكل أمر في سجل المركبة، فلا يبقى عمل معلقًا ولا يضطر أحد إلى ملاحقة الورشة لمعرفة الجديد.',
    },
  },
  heroImage: 'maintenance',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'What is fleet work order software?',
        body: `**Fleet work order software records each maintenance or repair job as a work order, tracks it through its stages until it is complete, and keeps it in the vehicle’s history.** A work order says what needs doing, on which vehicle, who is doing it, what it is costing and whether it is finished.

Without work orders, repairs are managed by phone calls and memory. The mechanic knows the job is waiting for a part; the fleet manager thinks the vehicle is ready; finance sees an invoice with no context. A work order gives everyone the same answer.`,
      },
      {
        kind: 'text',
        heading: 'How work orders fit into Axpense',
        body: `Work orders connect the parts of Axpense that already track your vehicles. A job usually starts from one of three places:

- **A service that is due.** The preventive maintenance screen shows a vehicle approaching or past its kilometre interval, and you open a work order for the service.
- **A problem found in an inspection.** A checklist item fails and needs a repair.
- **A breakdown or driver report.** Something went wrong on the road and needs fixing now.

Whatever the source, the work order lives on the vehicle. Parts used come from your [spare parts](/features/spare-parts) records, costs are added to the vehicle’s expenses, and the finished job becomes part of its service history.`,
      },
      {
        kind: 'workflow',
        heading: 'The life of a work order',
        intro: 'Every work order moves through the same stages, so anyone can see where a job stands.',
        nodes: [
          { label: 'Created' },
          { label: 'Assigned' },
          { label: 'In progress' },
          { label: 'Parts and costs added' },
          { label: 'Completed' },
          { label: 'Saved to vehicle history' },
        ],
        note: 'A work order stays open until someone marks it complete, so unfinished jobs remain visible.',
      },
      {
        kind: 'steps',
        heading: 'Working a job from start to finish',
        intro: 'Here is what happens at each stage.',
        steps: [
          { title: 'Create the work order', desc: 'Choose the vehicle, describe the job and note the odometer reading. Add whether it is a planned service or a repair.' },
          { title: 'Assign it', desc: 'Give the job to a mechanic or an outside workshop, so there is one clear owner.' },
          { title: 'Move it to in progress', desc: 'When work starts, update the status. The vehicle is now visibly off the road for this job.' },
          { title: 'Add parts and costs', desc: 'Record the parts installed and the labour or workshop invoice. Parts are linked to the vehicle and costs go to its expenses.' },
          { title: 'Complete it', desc: 'Close the work order when the vehicle is ready. If it was a planned service, the next kilometre countdown starts from here.' },
          { title: 'Keep the history', desc: 'The finished work order stays on the vehicle’s record for future diagnosis, warranty questions and cost reviews.' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'Where most work orders begin',
        image: 'maintenance',
        alt: 'Axpense maintenance screen listing vehicles with services due soon and overdue, with the kilometres left for each service',
        caption: 'Services that are due or overdue are the most common starting point for a work order.',
      },
      {
        kind: 'text',
        heading: 'Why a closed work order is worth keeping',
        body: `The value of a work order doesn’t end when the vehicle leaves the workshop. Over time, the list of completed work orders becomes the most honest description of each vehicle:

- **Repeat repairs** show up when the same job appears on the same vehicle again and again.
- **Real repair costs** are visible per vehicle and per job, not buried in a monthly workshop invoice.
- **Downtime** is easier to understand when you can see how long jobs stayed in progress.

That history is what lets you decide, with evidence, whether to keep repairing a vehicle or replace it. Read more on [reducing vehicle downtime](/blog/reduce-vehicle-downtime).`,
      },
      {
        kind: 'text',
        heading: 'Failed inspection items to work orders in one step',
        requires: 'inspectionToWorkOrder',
        body: `When an inspection item fails, Axpense can create a work order from it directly, with the vehicle and the failed item already filled in. The repair is linked to the inspection that found it, so you can see that every failed item was dealt with.`,
      },
      {
        kind: 'cards',
        heading: 'Who uses work orders',
        columns: 2,
        items: [
          { icon: 'wrench', title: 'Workshop supervisors', desc: 'See every open job, who owns it and what is waiting for parts.' },
          { icon: 'truck', title: 'Fleet managers', desc: 'Know which vehicles are off the road and when they are expected back.' },
          { icon: 'dollar', title: 'Finance', desc: 'Match each workshop invoice to a job and a vehicle before it is paid.' },
          { icon: 'users', title: 'Drivers', desc: 'Report a problem and know it has become a tracked job, not a forgotten message.' },
        ],
      },
      {
        kind: 'text',
        heading: 'Part of complete fleet maintenance',
        body: `Work orders are the execution side of [fleet maintenance software](/fleet-maintenance-software). [Km-based preventive maintenance](/features/preventive-maintenance) tells you what is due, [inspections](/features/inspection-management) tell you what is wrong, and work orders make sure the job is done and recorded.`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'ما هي أوامر العمل للصيانة؟',
        body: `**أوامر العمل للصيانة هي تسجيل كل مهمة صيانة أو إصلاح كأمر عمل، ومتابعته عبر مراحله حتى إتمامه، ثم حفظه في سجل المركبة.** يوضح أمر العمل ما المطلوب، وعلى أي مركبة، ومن ينفذه، وكم يكلّف، وهل انتهى.

بدون أوامر العمل تُدار الإصلاحات بالمكالمات والذاكرة. الفني يعرف أن المهمة تنتظر قطعة، ومدير الأسطول يظن أن المركبة جاهزة، والإدارة المالية ترى فاتورة بلا سياق. أمر العمل يعطي الجميع الإجابة نفسها.`,
      },
      {
        kind: 'text',
        heading: 'كيف تتكامل أوامر العمل مع أكسبنس',
        body: `تربط أوامر العمل بين أجزاء أكسبنس التي تتابع مركباتك أصلًا. وتبدأ المهمة عادةً من أحد ثلاثة مصادر:

- **صيانة مستحقة.** تُظهر شاشة الصيانة الوقائية مركبة تقترب من فترة الكيلومترات أو تجاوزتها، فتفتح أمر عمل للصيانة.
- **مشكلة في الفحص.** بند في قائمة الفحص غير مطابق ويحتاج إلى إصلاح.
- **عطل أو بلاغ من السائق.** حدث خلل على الطريق ويحتاج إلى إصلاح فوري.

وأيًّا كان المصدر، يبقى أمر العمل على المركبة. القطع المستخدمة تأتي من سجلات [قطع الغيار](/features/spare-parts)، والتكاليف تُضاف إلى مصروفات المركبة، والمهمة المنتهية تصبح جزءًا من سجل صيانتها.`,
      },
      {
        kind: 'workflow',
        heading: 'دورة حياة أمر العمل',
        intro: 'يمر كل أمر عمل بالمراحل نفسها، فيعرف أي شخص أين وصلت المهمة.',
        nodes: [
          { label: 'إنشاء' },
          { label: 'تعيين' },
          { label: 'قيد التنفيذ' },
          { label: 'إضافة القطع والتكاليف' },
          { label: 'إتمام' },
          { label: 'حفظ في سجل المركبة' },
        ],
        note: 'يبقى أمر العمل مفتوحًا حتى يغلقه أحد، فتظل المهام غير المنتهية ظاهرة.',
      },
      {
        kind: 'steps',
        heading: 'تنفيذ المهمة من البداية حتى النهاية',
        intro: 'هذا ما يحدث في كل مرحلة.',
        steps: [
          { title: 'أنشئ أمر العمل', desc: 'اختر المركبة، وصِف المهمة، وسجّل قراءة العداد، وحدد إن كانت صيانة مخططة أم إصلاحًا.' },
          { title: 'عيّن المسؤول', desc: 'أسند المهمة إلى فني أو ورشة خارجية، ليكون لها مسؤول واحد واضح.' },
          { title: 'حوّلها إلى قيد التنفيذ', desc: 'عند بدء العمل حدّث الحالة، فتظهر المركبة متوقفة بسبب هذه المهمة.' },
          { title: 'أضف القطع والتكاليف', desc: 'سجّل القطع المركّبة وأجر العمالة أو فاتورة الورشة. تُربط القطع بالمركبة وتذهب التكاليف إلى مصروفاتها.' },
          { title: 'أتمّ المهمة', desc: 'أغلق أمر العمل عندما تجهز المركبة. وإذا كانت صيانة مخططة، يبدأ عدّ الكيلومترات للصيانة التالية من هنا.' },
          { title: 'احتفظ بالسجل', desc: 'يبقى أمر العمل المنتهي في سجل المركبة للتشخيص لاحقًا ولأسئلة الضمان ومراجعة التكاليف.' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'من هنا تبدأ معظم أوامر العمل',
        image: 'maintenance',
        alt: 'شاشة الصيانة في أكسبنس تعرض المركبات ذات الصيانة المستحقة قريبًا والمتأخرة مع الكيلومترات المتبقية لكل صيانة',
        caption: 'الصيانة المستحقة أو المتأخرة هي أكثر نقطة بداية شيوعًا لأمر العمل.',
      },
      {
        kind: 'text',
        heading: 'لماذا يستحق أمر العمل المغلق أن يُحفظ',
        body: `قيمة أمر العمل لا تنتهي بخروج المركبة من الورشة. فمع الوقت تصبح قائمة أوامر العمل المنتهية أصدق وصف لكل مركبة:

- **الإصلاحات المتكررة** تظهر عندما تتكرر المهمة نفسها على المركبة نفسها.
- **تكاليف الإصلاح الحقيقية** تظهر لكل مركبة ولكل مهمة، لا مدفونة في فاتورة ورشة شهرية.
- **مدة التوقف** يسهل فهمها عندما ترى كم بقيت المهام قيد التنفيذ.

وهذا السجل هو ما يتيح لك أن تقرر، بالدليل، هل تستمر في إصلاح المركبة أم تستبدلها.`,
      },
      {
        kind: 'text',
        heading: 'من بند فحص غير مطابق إلى أمر عمل بخطوة واحدة',
        requires: 'inspectionToWorkOrder',
        body: `عندما يفشل بند في الفحص، يمكن لأكسبنس إنشاء أمر عمل منه مباشرة، مع تعبئة المركبة والبند غير المطابق مسبقًا. ويُربط الإصلاح بالفحص الذي اكتشفه، فتتأكد أن كل بند غير مطابق عولج.`,
      },
      {
        kind: 'cards',
        heading: 'من يستخدم أوامر العمل',
        columns: 2,
        items: [
          { icon: 'wrench', title: 'مشرف الورشة', desc: 'يرى كل المهام المفتوحة ومسؤول كل منها وما ينتظر قطع الغيار.' },
          { icon: 'truck', title: 'مدير الأسطول', desc: 'يعرف المركبات المتوقفة وموعد عودتها المتوقع.' },
          { icon: 'dollar', title: 'الإدارة المالية', desc: 'تطابق كل فاتورة ورشة مع مهمة ومركبة قبل صرفها.' },
          { icon: 'users', title: 'السائقون', desc: 'يبلّغون عن المشكلة ويعرفون أنها أصبحت مهمة متابَعة لا رسالة منسية.' },
        ],
      },
      {
        kind: 'text',
        heading: 'جزء من صيانة أسطول متكاملة',
        body: `أوامر العمل هي جانب التنفيذ في [برنامج صيانة الأسطول](/fleet-maintenance-software). تخبرك [الصيانة الوقائية حسب الكيلومترات](/features/preventive-maintenance) بما هو مستحق، وتخبرك [الفحوصات](/features/inspection-management) بما هو معطّل، وتضمن أوامر العمل أن المهمة نُفذت وسُجّلت.`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'What is a work order in fleet maintenance?', a: 'It is a record of one maintenance or repair job on one vehicle: what needs doing, who is doing it, its status, the parts used and the cost. It stays open until the job is complete.' },
      { q: 'What stages does a work order go through in Axpense?', a: 'Created, assigned, in progress, completed. Parts and costs are added while the job is in progress, and the completed work order is saved to the vehicle’s history.' },
      { q: 'Can a work order be created from a due service?', a: 'Yes. When the preventive maintenance screen shows a service due or overdue, you open a work order for that vehicle and service. Completing it restarts the kilometre countdown.' },
      { q: 'How are parts and costs handled?', a: 'Parts installed during the job are linked to the vehicle through your spare parts records, and the job’s costs are added to the vehicle’s expenses, so the vehicle’s total cost stays accurate.' },
      { q: 'Can an outside workshop be assigned to a work order?', a: 'Yes. You can assign a job to your own mechanic or to an outside workshop, and record its invoice as the job’s cost.' },
    ],
    ar: [
      { q: 'ما هو أمر العمل في صيانة الأسطول؟', a: 'هو سجل لمهمة صيانة أو إصلاح واحدة على مركبة واحدة: ما المطلوب، ومن ينفذه، وحالته، والقطع المستخدمة، والتكلفة. ويبقى مفتوحًا حتى تنتهي المهمة.' },
      { q: 'ما المراحل التي يمر بها أمر العمل في أكسبنس؟', a: 'الإنشاء، ثم التعيين، ثم قيد التنفيذ، ثم الإتمام. تُضاف القطع والتكاليف أثناء التنفيذ، ويُحفظ أمر العمل المنتهي في سجل المركبة.' },
      { q: 'هل يمكن إنشاء أمر عمل من صيانة مستحقة؟', a: 'نعم. عندما تُظهر شاشة الصيانة الوقائية صيانة مستحقة أو متأخرة، تفتح أمر عمل لتلك المركبة والصيانة. وإتمامه يعيد بدء عدّ الكيلومترات.' },
      { q: 'كيف تُعالج القطع والتكاليف؟', a: 'تُربط القطع المركّبة أثناء المهمة بالمركبة عبر سجلات قطع الغيار، وتُضاف تكاليف المهمة إلى مصروفات المركبة، فتبقى تكلفتها الإجمالية دقيقة.' },
      { q: 'هل يمكن إسناد أمر العمل إلى ورشة خارجية؟', a: 'نعم. يمكنك إسناد المهمة إلى فني لديك أو إلى ورشة خارجية، وتسجيل فاتورتها كتكلفة للمهمة.' },
    ],
  },
  relatedPages: ['/fleet-maintenance-software', '/features/preventive-maintenance', '/features/spare-parts', '/features/inspection-management', '/features/expense-management'],
  relatedIndustries: ['/industries/logistics', '/industries/construction', '/industries/oil-and-gas', '/industries/field-services'],
  relatedArticles: ['reduce-vehicle-downtime', 'preventive-vs-reactive-maintenance', 'km-based-preventive-maintenance'],
  parent: '/fleet-maintenance-software',
  schemaName: 'Axpense Work Orders',
};
