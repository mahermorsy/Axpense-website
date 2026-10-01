// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const ASSET_MANAGEMENT: SeoPage = {
  path: '/features/asset-management',
  type: 'feature',
  updatedAt: '2026-09-29',
  primaryKeyword: { en: 'vehicle depreciation and lifecycle management', ar: 'إهلاك المركبات ودورة حياتها' },
  secondaryKeywords: {
    en: ['vehicle depreciation calculation', 'vehicle book value', 'fleet replacement planning', 'vehicle lifecycle stages'],
    ar: ['دورة حياة المركبة', 'استبدال السيارات', 'حساب إهلاك السيارات', 'القيمة الدفترية للسيارة'],
  },
  meta: {
    en: {
      title: 'Vehicle Depreciation & Lifecycle Management',
      description: 'Vehicle depreciation and lifecycle management that shows each vehicle’s book value over time, so replacement plans rest on numbers. Book a demo today.',
    },
    ar: {
      title: 'إهلاك المركبات ودورة حياتها',
      description: 'إهلاك المركبات ودورة حياتها في مكان واحد: القيمة الدفترية لكل مركبة بمرور الوقت بجوار تكاليف تشغيلها، لتخطط للاستبدال بالأرقام. احجز عرضًا تجريبيًا.',
    },
  },
  h1: { en: 'Vehicle Depreciation and Asset Lifecycle Management', ar: 'إهلاك المركبات وإدارة دورة حياتها من الشراء حتى البيع' },
  navLabel: { en: 'Depreciation and lifecycle', ar: 'الإهلاك ودورة الحياة' },
  hero: {
    en: {
      badge: 'Depreciation and lifecycle',
      intro: 'Every vehicle loses value from the day it is bought. Axpense shows each vehicle’s book value over time, next to what it costs to maintain, so you can see where it is in its lifecycle and plan replacements before an ageing fleet starts costing more than it earns.',
    },
    ar: {
      badge: 'الإهلاك ودورة الحياة',
      intro: 'تفقد كل مركبة جزءًا من قيمتها منذ يوم شرائها. يعرض أكسبنس القيمة الدفترية لكل مركبة بمرور الوقت بجوار تكلفة صيانتها، فتعرف أين تقف في دورة حياتها وتخطط للاستبدال قبل أن يصبح الأسطول القديم عبئًا يكلّف أكثر مما يحقق.',
    },
  },
  heroImage: 'dashboard',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'What is vehicle depreciation and lifecycle management?',
        body: `**Vehicle depreciation and lifecycle management means tracking how much each vehicle is worth as it ages, and using that together with its running costs to decide when to replace it.** Depreciation is the fall in a vehicle’s value over its years of use; the lifecycle is the path from purchase to sale.

Most companies know the purchase price of their vehicles and little else. Without the current book value, replacement decisions are made on gut feel, often only after a major breakdown. With it, the fleet manager and the finance team can talk about the same numbers.`,
      },
      {
        kind: 'text',
        heading: 'How depreciation works in Axpense',
        body: `Each vehicle in Axpense carries its purchase details, and Axpense shows its **book value over time**: what the vehicle is worth on paper today, and how that value will fall over the rest of its planned life.

Because depreciation sits on the same vehicle record as maintenance history and [expenses](/features/expense-management), you can read the two sides together. A vehicle with a low book value and rising repair costs is a very different case from one with plenty of value left and low running costs.

> Axpense is an operational tool. Your accountant decides the depreciation method used in your official books; the figures in Axpense are for planning fleet decisions.`,
      },
      {
        kind: 'formula',
        heading: 'Straight-line depreciation, with a worked example',
        intro: 'Straight-line is the simplest and most widely used method: the vehicle loses the same amount of value each year of its planned life.',
        formulas: [
          { label: 'Annual depreciation', expression: '(Purchase price − Expected resale value) ÷ Years of use' },
          { label: 'Book value at end of year N', expression: 'Purchase price − (Annual depreciation × N)' },
        ],
        example: {
          title: 'Example: a delivery van over five years',
          body: `A company buys a van for 900,000 EGP, plans to use it for 5 years and expects to sell it for 300,000 EGP. Annual depreciation = (900,000 − 300,000) ÷ 5 = **120,000 EGP per year**.

| Year | Depreciation (EGP) | Book value at year end (EGP) |
|---|---|---|
| 0 (purchase) | — | 900,000 |
| 1 | 120,000 | 780,000 |
| 2 | 120,000 | 660,000 |
| 3 | 120,000 | 540,000 |
| 4 | 120,000 | 420,000 |
| 5 | 120,000 | 300,000 |

If this van’s repair and parts costs climb to 90,000 EGP a year by year four, you are spending most of its annual depreciation again just to keep it running. That is the signal to start planning its replacement.`,
        },
      },
      {
        kind: 'workflow',
        heading: 'The four stages of a vehicle’s lifecycle',
        intro: 'Every vehicle moves through the same stages. Axpense keeps the record for each one on a single vehicle file.',
        nodes: [
          { label: 'Acquisition: purchase price and date recorded' },
          { label: 'Service life: maintenance, inspections and expenses build up' },
          { label: 'Replacement: book value and costs reviewed' },
          { label: 'Disposal: vehicle sold or retired' },
        ],
        note: 'Before you dispose of a vehicle, review its full cost and service history: it is the best guide to whether the same model is worth buying again.',
      },
      {
        kind: 'text',
        heading: 'Planning replacements with numbers, not guesses',
        body: `There is no single right age to replace a vehicle; a van driving 60,000 km a year wears out long before a manager’s car. A practical review looks at three things for each vehicle:

1. **Book value**: how much value is left to lose.
2. **Running cost trend**: whether repairs and parts are rising year on year, from the [cost records](/fleet-cost-tracking) Axpense already keeps.
3. **Reliability**: how often the vehicle is off the road for unplanned repairs, visible in its service history.

When value is low, costs are rising and breakdowns are frequent, replacement usually costs less than keeping the vehicle. Our [fleet total cost of ownership](/blog/fleet-total-cost-of-ownership) guide explains how to put purchase, running costs and resale into one figure.`,
      },
      {
        kind: 'cards',
        heading: 'Beyond vehicles',
        intro: 'Many fleets also own equipment that loses value and needs care in the same way.',
        requires: 'equipmentAssets',
        items: [
          { icon: 'layers', title: 'Machines and equipment', desc: 'Track generators, compressors and site machines with their own book value and lifecycle.', requires: 'equipmentAssets' },
          { icon: 'boxes', title: 'Forklifts', desc: 'Keep warehouse forklifts on the same system as your vehicles, with depreciation and service history.', requires: 'equipmentAssets' },
          { icon: 'wrench', title: 'Tools', desc: 'Record high-value tools and assign them, so their value and location are always known.', requires: 'equipmentAssets' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'Fleet value and costs on one dashboard',
        image: 'dashboard',
        alt: 'Axpense dashboard with a fleet overview and costs by vehicle, used alongside each vehicle’s book value to plan replacements',
        caption: 'Read book value and running costs together to decide which vehicles to replace first.',
      },
      {
        kind: 'text',
        heading: 'Who uses depreciation and lifecycle data',
        body: `- **Fleet managers** build the replacement list for next year with evidence behind each vehicle on it.
- **Finance teams** see the current book value of the fleet and can plan purchase budgets for the coming years in advance.
- **General managers** get a clear view of the fleet’s age and value when approving capital spending.

Depreciation is one part of the full cost picture. For how it combines with running costs, cost per kilometre and ownership cost, see [fleet cost tracking](/fleet-cost-tracking).`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'ما المقصود بإهلاك المركبات وإدارة دورة حياتها؟',
        body: `**إهلاك المركبات وإدارة دورة حياتها يعني متابعة قيمة كل مركبة مع تقدّم عمرها، واستخدام ذلك مع تكاليف تشغيلها لتحديد موعد استبدالها.** الإهلاك هو انخفاض قيمة المركبة على مدار سنوات استخدامها، ودورة الحياة هي الطريق من الشراء حتى البيع.

معظم الشركات تعرف سعر شراء سياراتها ولا تعرف الكثير بعد ذلك. ودون القيمة الدفترية الحالية، تُتخذ قرارات الاستبدال بالإحساس، وغالبًا بعد عطل كبير فقط. أما مع وجودها، فيتحدث مدير الأسطول والإدارة المالية بالأرقام نفسها.`,
      },
      {
        kind: 'text',
        heading: 'كيف يعمل الإهلاك في أكسبنس',
        body: `تحمل كل مركبة في أكسبنس بيانات شرائها، ويعرض أكسبنس **قيمتها الدفترية بمرور الوقت**: كم تساوي المركبة دفتريًا اليوم، وكيف ستنخفض قيمتها خلال ما تبقى من عمرها المخطط.

ولأن الإهلاك موجود في سجل المركبة نفسه مع سجل الصيانة و[المصروفات](/features/expense-management)، يمكنك قراءة الجانبين معًا. فالمركبة ذات القيمة الدفترية المنخفضة وتكاليف الإصلاح المتزايدة حالة مختلفة تمامًا عن مركبة ما زالت لها قيمة كبيرة وتكاليف تشغيلها منخفضة.

> أكسبنس أداة تشغيلية. المحاسب هو من يحدد طريقة الإهلاك المعتمدة في دفاترك الرسمية، والأرقام في أكسبنس للتخطيط لقرارات الأسطول.`,
      },
      {
        kind: 'formula',
        heading: 'طريقة القسط الثابت، مع مثال محسوب',
        intro: 'القسط الثابت هو الطريقة الأبسط والأكثر استخدامًا: تفقد المركبة المبلغ نفسه من قيمتها كل سنة من عمرها المخطط.',
        formulas: [
          { label: 'الإهلاك السنوي', expression: '(سعر الشراء − قيمة البيع المتوقعة) ÷ سنوات الاستخدام' },
          { label: 'القيمة الدفترية في نهاية السنة ن', expression: 'سعر الشراء − (الإهلاك السنوي × ن)' },
        ],
        example: {
          title: 'مثال: سيارة توزيع على مدى خمس سنوات',
          body: `اشترت شركة سيارة نقل خفيف بسعر 900,000 جنيه، وتخطط لاستخدامها 5 سنوات وتتوقع بيعها بسعر 300,000 جنيه. الإهلاك السنوي = (900,000 − 300,000) ÷ 5 = **120,000 جنيه سنويًا**.

| السنة | الإهلاك (جنيه) | القيمة الدفترية في نهاية السنة (جنيه) |
|---|---|---|
| 0 (الشراء) | — | 900,000 |
| 1 | 120,000 | 780,000 |
| 2 | 120,000 | 660,000 |
| 3 | 120,000 | 540,000 |
| 4 | 120,000 | 420,000 |
| 5 | 120,000 | 300,000 |

إذا ارتفعت تكاليف الإصلاح وقطع الغيار لهذه السيارة إلى 90,000 جنيه سنويًا في السنة الرابعة، فأنت تنفق معظم إهلاكها السنوي مرة أخرى لمجرد إبقائها في الخدمة. وهذه إشارة لبدء التخطيط لاستبدالها.`,
        },
      },
      {
        kind: 'workflow',
        heading: 'المراحل الأربع في دورة حياة المركبة',
        intro: 'تمر كل مركبة بالمراحل نفسها، ويحتفظ أكسبنس بسجل كل مرحلة في ملف واحد للمركبة.',
        nodes: [
          { label: 'الاقتناء: تسجيل سعر الشراء وتاريخه' },
          { label: 'فترة الخدمة: تتراكم الصيانة والفحوصات والمصروفات' },
          { label: 'الاستبدال: مراجعة القيمة الدفترية والتكاليف' },
          { label: 'التخلص: بيع المركبة أو إخراجها من الخدمة' },
        ],
        note: 'قبل التخلص من أي مركبة، راجع سجل تكاليفها وصيانتها كاملًا: فهو أفضل دليل على ما إذا كان الطراز نفسه يستحق الشراء مرة أخرى.',
      },
      {
        kind: 'text',
        heading: 'التخطيط لاستبدال السيارات بالأرقام لا بالتخمين',
        body: `لا يوجد عمر واحد صحيح لاستبدال المركبة، فسيارة توزيع تقطع 60,000 كم سنويًا تُستهلك قبل سيارة المدير بكثير. والمراجعة العملية تنظر إلى ثلاثة أمور لكل مركبة:

1. **القيمة الدفترية**: كم تبقى من القيمة التي يمكن أن تُفقد.
2. **اتجاه تكلفة التشغيل**: هل تزيد الإصلاحات وقطع الغيار سنة بعد سنة، من [سجلات التكاليف](/fleet-cost-tracking) التي يحتفظ بها أكسبنس أصلًا.
3. **الاعتمادية**: كم مرة تتوقف المركبة لإصلاحات غير مخططة، وهو ما يظهر في سجل صيانتها.

عندما تكون القيمة منخفضة والتكاليف متزايدة والأعطال متكررة، يكون الاستبدال غالبًا أقل تكلفة من الاحتفاظ بالمركبة. ويشرح دليل [التكلفة الإجمالية لملكية الأسطول](/blog/fleet-total-cost-of-ownership) كيف تجمع الشراء والتشغيل وقيمة البيع في رقم واحد.`,
      },
      {
        kind: 'cards',
        heading: 'أبعد من المركبات',
        intro: 'كثير من الأساطيل تمتلك أيضًا معدات تفقد قيمتها وتحتاج رعاية بالطريقة نفسها.',
        requires: 'equipmentAssets',
        items: [
          { icon: 'layers', title: 'الماكينات والمعدات', desc: 'تابع المولدات والضواغط ومعدات المواقع بقيمتها الدفترية ودورة حياتها.', requires: 'equipmentAssets' },
          { icon: 'boxes', title: 'الرافعات الشوكية', desc: 'أبقِ رافعات المخازن على النظام نفسه مع مركباتك، بإهلاكها وسجل صيانتها.', requires: 'equipmentAssets' },
          { icon: 'wrench', title: 'العِدد والأدوات', desc: 'سجّل الأدوات مرتفعة القيمة وعيّنها، لتعرف قيمتها ومكانها دائمًا.', requires: 'equipmentAssets' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'قيمة الأسطول وتكاليفه في لوحة واحدة',
        image: 'dashboard',
        alt: 'لوحة متابعة أكسبنس تعرض نظرة عامة على الأسطول والتكاليف حسب المركبة، وتُقرأ مع القيمة الدفترية لكل مركبة للتخطيط للاستبدال',
        caption: 'اقرأ القيمة الدفترية وتكاليف التشغيل معًا لتقرر أي المركبات تستبدل أولًا.',
      },
      {
        kind: 'text',
        heading: 'من يستخدم بيانات الإهلاك ودورة الحياة',
        body: `- **مدير الأسطول** يُعد قائمة الاستبدال للعام القادم مع دليل واضح وراء كل مركبة فيها.
- **الإدارة المالية** ترى القيمة الدفترية الحالية للأسطول وتخطط لميزانيات الشراء للسنوات القادمة مسبقًا.
- **المدير العام** يحصل على صورة واضحة لعمر الأسطول وقيمته عند اعتماد الإنفاق الرأسمالي.

الإهلاك جزء واحد من صورة التكلفة الكاملة. ولمعرفة كيف يجتمع مع تكاليف التشغيل وتكلفة الكيلومتر وتكلفة الملكية، اطّلع على [إدارة تكاليف الأسطول](/fleet-cost-tracking).`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'How is vehicle depreciation calculated?', a: 'The most common method is straight-line: (purchase price − expected resale value) ÷ years of use gives the value lost each year. A 900,000 EGP van expected to sell for 300,000 EGP after 5 years depreciates by 120,000 EGP a year.' },
      { q: 'What does Axpense show for each vehicle?', a: 'Its book value over time, on the same record as its maintenance history and expenses, so you can see both what the vehicle is worth and what it costs to keep.' },
      { q: 'Can Axpense replace our accounting depreciation schedule?', a: 'No. Axpense is built for fleet decisions. Your accountant sets the method for the official books; Axpense gives the fleet team a clear view of value over time for planning.' },
      { q: 'When should a company vehicle be replaced?', a: 'When its remaining value is low, its running costs are rising and it breaks down more often. Reviewing book value, cost trend and service history together gives a defensible answer for each vehicle.' },
      { q: 'What are the stages of a vehicle’s lifecycle?', a: 'Acquisition, service life, replacement and disposal. Axpense keeps the purchase details, maintenance, expenses and book value for each stage on one vehicle record.' },
      { q: 'Can I track depreciation for equipment and machines, not just vehicles?', a: 'Yes. Machines, forklifts and tools can be recorded as assets with their own book value and lifecycle.', requires: 'equipmentAssets' },
    ],
    ar: [
      { q: 'كيف يُحسب إهلاك المركبة؟', a: 'الطريقة الأكثر شيوعًا هي القسط الثابت: (سعر الشراء − قيمة البيع المتوقعة) ÷ سنوات الاستخدام، فتحصل على القيمة التي تُفقد كل سنة. سيارة بسعر 900,000 جنيه يُتوقع بيعها بـ 300,000 جنيه بعد 5 سنوات تُهلك بمقدار 120,000 جنيه سنويًا.' },
      { q: 'ماذا يعرض أكسبنس لكل مركبة؟', a: 'قيمتها الدفترية بمرور الوقت، في السجل نفسه مع سجل صيانتها ومصروفاتها، فترى كم تساوي المركبة وكم يكلّف الاحتفاظ بها.' },
      { q: 'هل يغني أكسبنس عن جدول الإهلاك المحاسبي؟', a: 'لا. أكسبنس مصمم لقرارات الأسطول. المحاسب يحدد الطريقة المعتمدة في الدفاتر الرسمية، وأكسبنس يمنح فريق الأسطول صورة واضحة للقيمة بمرور الوقت للتخطيط.' },
      { q: 'متى يجب استبدال سيارة الشركة؟', a: 'عندما تنخفض قيمتها المتبقية وترتفع تكاليف تشغيلها وتتكرر أعطالها. مراجعة القيمة الدفترية واتجاه التكاليف وسجل الصيانة معًا تعطي إجابة يمكن الدفاع عنها لكل مركبة.' },
      { q: 'ما مراحل دورة حياة المركبة؟', a: 'الاقتناء، ثم فترة الخدمة، ثم الاستبدال، ثم التخلص. ويحتفظ أكسبنس ببيانات الشراء والصيانة والمصروفات والقيمة الدفترية لكل مرحلة في سجل واحد للمركبة.' },
      { q: 'هل يمكن متابعة إهلاك المعدات والماكينات وليس المركبات فقط؟', a: 'نعم. يمكن تسجيل الماكينات والرافعات الشوكية والأدوات كأصول لها قيمتها الدفترية ودورة حياتها.', requires: 'equipmentAssets' },
    ],
  },
  relatedPages: ['/fleet-cost-tracking', '/features/expense-management', '/features/vehicle-management', '/resources/fleet-cost-calculator', '/features/reports-analytics'],
  relatedIndustries: ['/industries/logistics', '/industries/construction', '/industries/manufacturing', '/industries/distribution'],
  relatedArticles: ['fleet-total-cost-of-ownership', 'what-is-asset-management', 'vehicle-cost-per-km'],
  parent: '/fleet-cost-tracking',
  schemaName: 'Axpense Vehicle Depreciation',
};
