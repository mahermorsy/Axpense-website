// needs-native-review: Arabic written by Claude
import type { ToolPage } from '@/lib/seo-page';

export const FLEET_COST_CALCULATOR: ToolPage = {
  path: '/resources/fleet-cost-calculator',
  updatedAt: '2026-09-29',
  primaryKeyword: { en: 'fleet cost per km calculator', ar: 'حساب تكلفة الكيلومتر للسيارة' },
  meta: {
    en: {
      title: 'Fleet Cost per KM Calculator (with TCO)',
      description: 'Free fleet cost per km calculator: enter price, resale value, km and running costs to get cost per km, annual cost and lifecycle TCO for each vehicle.',
    },
    ar: {
      title: 'حاسبة تكلفة الكيلومتر وإجمالي تكلفة الملكية',
      description: 'أداة مجانية لحساب تكلفة الكيلومتر للسيارة: أدخل سعر الشراء وقيمة البيع والمسافة السنوية والمصروفات لتعرف التكلفة السنوية وإجمالي تكلفة الملكية لكل مركبة.',
    },
  },
  h1: { en: 'Fleet Cost per KM Calculator', ar: 'حساب تكلفة الكيلومتر للسيارة وإجمالي تكلفة الملكية' },
  navLabel: { en: 'Fleet cost per km calculator', ar: 'حاسبة تكلفة الكيلومتر للأسطول' },
  hero: {
    en: {
      badge: 'Free tool',
      intro: 'Work out what one vehicle really costs to run, per kilometre and over its whole life. Enter the purchase price, expected resale value, kilometres per year and yearly running costs, and the calculator returns cost per km, total annual cost and lifecycle TCO, plus a total for the whole fleet.',
    },
    ar: {
      badge: 'أداة مجانية',
      intro: 'اعرف التكلفة الحقيقية لتشغيل المركبة لكل كيلومتر وعلى امتداد عمرها كاملًا. أدخل سعر الشراء وقيمة البيع المتوقعة والكيلومترات السنوية ومصروفات التشغيل، وستعرض لك الحاسبة تكلفة الكيلومتر والتكلفة السنوية الإجمالية وإجمالي تكلفة الملكية، مع إجمالي للأسطول كله.',
    },
  },
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'What this calculator works out',
        body: `**The calculator turns a vehicle’s purchase price, resale value and yearly running costs into one number you can compare: cost per kilometre.** It also shows the total annual cost, how much value the vehicle loses each year (depreciation) and the total cost of ownership (TCO) over the years you plan to keep it.

Cost per km answers "what does every kilometre this van drives cost us?". TCO answers "what will this vehicle cost us from the day we buy it to the day we sell it?". Fleet managers need both: the first for pricing deliveries and comparing vehicles in service, the second for buying and replacement decisions.`,
      },
      {
        kind: 'steps',
        heading: 'How to use the calculator',
        intro: 'Use figures for one typical vehicle. If your fleet mixes vans, pickups and trucks, run the calculator once per vehicle type.',
        steps: [
          { title: 'Choose your currency and fleet size', desc: 'Pick EGP, SAR, AED, QAR, JOD, IQD or USD and enter how many vehicles of this type you run.' },
          { title: 'Enter the ownership figures', desc: 'Purchase price, the resale value you expect at the end, and how many years you plan to keep the vehicle.' },
          { title: 'Enter kilometres per year', desc: 'Use real odometer readings where you have them: the difference between two readings a year apart is better than a guess.' },
          { title: 'Enter yearly running costs', desc: 'Maintenance and repairs including spare parts, fuel, insurance and registration, financing if the vehicle is financed, and any other costs such as tolls, parking or washing.' },
          { title: 'Read the results', desc: 'Cost per km and per mile, annual operating cost, annual depreciation, total annual cost, lifecycle TCO and the annual total for the fleet.' },
        ],
      },
      {
        kind: 'formula',
        heading: 'The formulas behind the results',
        intro: 'The calculator uses straight-line depreciation and simple yearly averages, so you can check every number by hand.',
        formulas: [
          { label: 'Annual operating cost', expression: 'maintenance & repairs + fuel + insurance & registration + other costs' },
          { label: 'Annual depreciation', expression: '(purchase price − resale value) ÷ years of ownership' },
          { label: 'Total annual cost', expression: 'annual operating cost + annual financing cost + annual depreciation' },
          { label: 'Lifecycle TCO', expression: 'purchase price + (annual operating cost + annual financing cost) × years − resale value' },
          { label: 'Cost per km', expression: 'total annual cost ÷ km driven per year' },
          { label: 'Cost per mile', expression: 'cost per km × 1.609' },
          { label: 'Fleet annual total', expression: 'total annual cost × number of vehicles' },
        ],
        example: {
          title: 'Worked example: a delivery van in Egypt (EGP)',
          body: `For example, a company runs 10 delivery vans. Each van costs EGP 1,200,000, is kept for 5 years and is expected to sell for EGP 480,000.

| Input | Value |
|---|---|
| Purchase price | EGP 1,200,000 |
| Expected resale value | EGP 480,000 |
| Years of ownership | 5 |
| Km driven per year | 40,000 |
| Maintenance & repairs (incl. parts) | EGP 60,000 |
| Fuel | EGP 120,000 |
| Insurance & registration | EGP 45,000 |
| Financing cost | EGP 36,000 |
| Other costs | EGP 15,000 |

| Result | Value |
|---|---|
| Annual operating cost | EGP 240,000 |
| Annual depreciation | EGP 144,000 |
| Total annual cost | EGP 420,000 |
| Lifecycle TCO (5 years) | EGP 2,100,000 |
| Cost per km | EGP 10.50 |
| Cost per mile | EGP 16.89 |
| Fleet annual total (10 vans) | EGP 4,200,000 |

Depreciation is (1,200,000 − 480,000) ÷ 5 = 144,000. TCO is 1,200,000 + (240,000 + 36,000) × 5 − 480,000 = 2,100,000, which is the same as 420,000 × 5.`,
        },
      },
      {
        kind: 'text',
        heading: 'Second example: a pickup in Saudi Arabia (SAR)',
        body: `For example, a field team runs 20 pickups bought for SAR 95,000 each, kept for 4 years and resold for SAR 35,000. Each drives 50,000 km a year, with SAR 6,000 of maintenance and repairs, SAR 9,000 of fuel, SAR 3,500 of insurance and registration, SAR 1,500 of other costs and no financing.

| Result | Value |
|---|---|
| Annual operating cost | SAR 20,000 |
| Annual depreciation | SAR 15,000 |
| Total annual cost | SAR 35,000 |
| Lifecycle TCO (4 years) | SAR 140,000 |
| Cost per km | SAR 0.70 |
| Fleet annual total (20 pickups) | SAR 700,000 |

Note how high mileage spreads depreciation over more kilometres: the pickup’s cost per km is low even though its yearly costs are real money.`,
      },
      {
        kind: 'text',
        heading: 'How to read your result and what to do next',
        body: `A single cost per km figure means little on its own. It becomes useful when you compare:

- **Vehicle against vehicle.** Run the calculator for two models you are considering. A cheaper vehicle with higher repair costs or a weak resale value can end up costing more per km.
- **Year against year.** If maintenance and repairs keep rising while the vehicle’s value keeps falling, the replacement point is getting closer.
- **Against what you charge.** If you bill customers per trip or per km, your cost per km is the floor under your price.

For a step-by-step method with more detail, read our guide on [how to calculate vehicle cost per km](/blog/vehicle-cost-per-km), and for the long-term view see [fleet total cost of ownership](/blog/fleet-total-cost-of-ownership).`,
      },
      {
        kind: 'text',
        heading: 'Limitations of this estimate',
        body: `This is an estimate, not a quote or an accounting valuation. It assumes costs are the same every year, uses straight-line depreciation and ignores inflation, currency changes and tax treatment. Real repair costs usually rise as a vehicle ages, and resale values depend on the market when you sell.

> Treat the result as a planning figure. Your finance team may use a different depreciation method for the books.`,
      },
      {
        kind: 'text',
        heading: 'Keep these numbers up to date from real records',
        body: `The calculator is only as good as the numbers you type in. In Axpense, those numbers come from records your team already keeps:

- **Expenses per vehicle.** Repairs, spare parts, insurance, registration and other costs are recorded against the vehicle, by category.
- **Odometer readings.** Each vehicle’s kilometres are on its record, so the distance side of cost per km is real rather than estimated.
- **Depreciation.** Book value over time is tracked for each vehicle, giving you the depreciation figure without a separate spreadsheet.

See how it fits together on our [fleet cost tracking](/fleet-cost-tracking) page, or [book a demo](/demo) to see it with your own vehicles.`,
      },
      {
        kind: 'text',
        heading: 'Fuel costs in the same record',
        requires: 'fuelAsExpense',
        body: 'Fuel can be recorded as an expense on each vehicle alongside repairs and insurance, so the fuel line in your cost per km comes from actual spend.',
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'ماذا تحسب هذه الأداة؟',
        body: `**تحوّل الحاسبة سعر شراء المركبة وقيمة بيعها ومصروفات تشغيلها السنوية إلى رقم واحد يمكن مقارنته: تكلفة الكيلومتر.** كما تعرض التكلفة السنوية الإجمالية، والقيمة التي تفقدها المركبة كل عام (الإهلاك)، وإجمالي تكلفة الملكية طوال السنوات التي تنوي الاحتفاظ بها.

تكلفة الكيلومتر تجيب عن سؤال: كم يكلفنا كل كيلومتر تقطعه هذه السيارة؟ أما إجمالي تكلفة الملكية فيجيب عن سؤال: كم ستكلفنا المركبة من يوم شرائها حتى يوم بيعها؟ ويحتاج مدير الأسطول إلى الرقمين معًا؛ الأول لتسعير خدمات التوصيل والمقارنة بين المركبات العاملة، والثاني لقرارات الشراء والاستبدال.`,
      },
      {
        kind: 'steps',
        heading: 'طريقة استخدام الحاسبة',
        intro: 'استخدم أرقام مركبة واحدة نموذجية. وإذا كان أسطولك يضم فانات ونصف نقل وشاحنات، فاحسب كل نوع على حدة.',
        steps: [
          { title: 'اختر العملة وعدد المركبات', desc: 'اختر الجنيه المصري أو الريال السعودي أو غيرهما من العملات المتاحة، وأدخل عدد المركبات من هذا النوع.' },
          { title: 'أدخل بيانات الملكية', desc: 'سعر الشراء، وقيمة البيع المتوقعة في النهاية، وعدد سنوات الاحتفاظ بالمركبة.' },
          { title: 'أدخل الكيلومترات السنوية', desc: 'اعتمد على قراءات العداد الفعلية إن توفرت؛ فالفرق بين قراءتين بينهما عام أدق من التقدير.' },
          { title: 'أدخل المصروفات السنوية', desc: 'الصيانة والإصلاحات شاملة قطع الغيار، والوقود، والتأمين والترخيص، وتكلفة التمويل إن وُجدت، وأي مصروفات أخرى كالرسوم والمواقف والغسيل.' },
          { title: 'اقرأ النتائج', desc: 'تكلفة الكيلومتر والميل، وتكلفة التشغيل السنوية، والإهلاك السنوي، والتكلفة السنوية الإجمالية، وإجمالي تكلفة الملكية، وإجمالي الأسطول السنوي.' },
        ],
      },
      {
        kind: 'formula',
        heading: 'المعادلات المستخدمة في الحساب',
        intro: 'تعتمد الحاسبة على الإهلاك بطريقة القسط الثابت ومتوسطات سنوية بسيطة، لتتمكن من مراجعة كل رقم بنفسك.',
        formulas: [
          { label: 'تكلفة التشغيل السنوية', expression: 'الصيانة والإصلاحات + الوقود + التأمين والترخيص + المصروفات الأخرى' },
          { label: 'الإهلاك السنوي', expression: '(سعر الشراء − قيمة البيع) ÷ عدد سنوات الملكية' },
          { label: 'التكلفة السنوية الإجمالية', expression: 'تكلفة التشغيل السنوية + تكلفة التمويل السنوية + الإهلاك السنوي' },
          { label: 'إجمالي تكلفة الملكية', expression: 'سعر الشراء + (تكلفة التشغيل + تكلفة التمويل) × عدد السنوات − قيمة البيع' },
          { label: 'تكلفة الكيلومتر', expression: 'التكلفة السنوية الإجمالية ÷ الكيلومترات المقطوعة سنويًا' },
          { label: 'تكلفة الميل', expression: 'تكلفة الكيلومتر × 1.609' },
          { label: 'إجمالي الأسطول السنوي', expression: 'التكلفة السنوية الإجمالية × عدد المركبات' },
        ],
        example: {
          title: 'مثال محلول: سيارة توزيع في مصر (بالجنيه)',
          body: `على سبيل المثال، شركة لديها 10 سيارات توزيع، سعر الواحدة 1,200,000 جنيه، وتحتفظ بها 5 سنوات ثم تبيعها بنحو 480,000 جنيه.

| البند | القيمة |
|---|---|
| سعر الشراء | 1,200,000 جنيه |
| قيمة البيع المتوقعة | 480,000 جنيه |
| سنوات الملكية | 5 |
| الكيلومترات سنويًا | 40,000 |
| الصيانة والإصلاحات وقطع الغيار | 60,000 جنيه |
| الوقود | 120,000 جنيه |
| التأمين والترخيص | 45,000 جنيه |
| تكلفة التمويل | 36,000 جنيه |
| مصروفات أخرى | 15,000 جنيه |

| النتيجة | القيمة |
|---|---|
| تكلفة التشغيل السنوية | 240,000 جنيه |
| الإهلاك السنوي | 144,000 جنيه |
| التكلفة السنوية الإجمالية | 420,000 جنيه |
| إجمالي تكلفة الملكية (5 سنوات) | 2,100,000 جنيه |
| تكلفة الكيلومتر | 10.50 جنيه |
| إجمالي الأسطول السنوي (10 سيارات) | 4,200,000 جنيه |

الإهلاك = (1,200,000 − 480,000) ÷ 5 = 144,000، وإجمالي تكلفة الملكية = 1,200,000 + (240,000 + 36,000) × 5 − 480,000 = 2,100,000، وهو نفسه 420,000 × 5.`,
        },
      },
      {
        kind: 'text',
        heading: 'مثال ثانٍ: مركبة نصف نقل في السعودية (بالريال)',
        body: `على سبيل المثال، فريق ميداني يشغّل 20 مركبة نصف نقل، سعر الواحدة 95,000 ريال، ويحتفظ بها 4 سنوات ثم يبيعها بـ 35,000 ريال. تقطع كل مركبة 50,000 كم سنويًا، بمصروفات صيانة وإصلاح 6,000 ريال، ووقود 9,000 ريال، وتأمين وترخيص 3,500 ريال، ومصروفات أخرى 1,500 ريال، دون تمويل.

| النتيجة | القيمة |
|---|---|
| تكلفة التشغيل السنوية | 20,000 ريال |
| الإهلاك السنوي | 15,000 ريال |
| التكلفة السنوية الإجمالية | 35,000 ريال |
| إجمالي تكلفة الملكية (4 سنوات) | 140,000 ريال |
| تكلفة الكيلومتر | 0.70 ريال |
| إجمالي الأسطول السنوي (20 مركبة) | 700,000 ريال |

لاحظ أن المسافة الكبيرة توزّع الإهلاك على عدد أكبر من الكيلومترات، فتنخفض تكلفة الكيلومتر رغم أن المصروفات السنوية ليست قليلة.`,
      },
      {
        kind: 'text',
        heading: 'كيف تقرأ النتيجة وما الخطوة التالية؟',
        body: `رقم تكلفة الكيلومتر وحده لا يقول الكثير، لكنه يصبح مفيدًا عند المقارنة:

- **بين مركبة وأخرى:** احسب طرازين تفكر في شرائهما. فالمركبة الأرخص سعرًا قد تكلّف أكثر لكل كيلومتر إذا كانت إصلاحاتها أعلى أو قيمة بيعها ضعيفة.
- **بين عام وآخر:** إذا استمرت تكاليف الصيانة في الارتفاع بينما تنخفض قيمة المركبة، فقد اقترب موعد استبدالها.
- **مقارنة بما تتقاضاه:** إذا كنت تحاسب عملاءك بالرحلة أو بالكيلومتر، فتكلفة الكيلومتر هي الحد الأدنى لسعرك.

للتفاصيل خطوة بخطوة، اقرأ دليلنا عن [طريقة حساب تكلفة الكيلومتر](/blog/vehicle-cost-per-km)، وللصورة الأشمل راجع [إجمالي تكلفة ملكية الأسطول](/blog/fleet-total-cost-of-ownership).`,
      },
      {
        kind: 'text',
        heading: 'حدود هذا التقدير',
        body: `النتيجة تقدير للتخطيط، وليست عرض سعر ولا تقييمًا محاسبيًا. فالحاسبة تفترض ثبات التكاليف كل عام، وتستخدم الإهلاك بالقسط الثابت، ولا تحتسب التضخم أو تغيّر أسعار الصرف أو المعاملة الضريبية. وفي الواقع ترتفع تكاليف الإصلاح غالبًا مع تقدّم عمر المركبة، وتتوقف قيمة البيع على حالة السوق وقت البيع.

> قد يستخدم فريقك المالي طريقة إهلاك مختلفة في الدفاتر المحاسبية.`,
      },
      {
        kind: 'text',
        heading: 'أرقام محدّثة من سجلاتك الفعلية',
        body: `دقة الحاسبة من دقة الأرقام التي تدخلها. وفي أكسبنس تأتي هذه الأرقام من السجلات التي يحتفظ بها فريقك أصلًا:

- **المصروفات لكل مركبة:** تُسجَّل الإصلاحات وقطع الغيار والتأمين والترخيص وغيرها على المركبة نفسها حسب الفئة.
- **قراءات العداد:** كيلومترات كل مركبة موجودة في سجلها، فيصبح جانب المسافة في المعادلة حقيقيًا لا تقديريًا.
- **الإهلاك:** تُتابَع القيمة الدفترية لكل مركبة عبر الزمن دون جدول منفصل.

تعرّف على الصورة كاملة في صفحة [إدارة تكاليف الأسطول](/fleet-cost-tracking)، أو [احجز عرضًا تجريبيًا](/demo) لتراها على مركباتك.`,
      },
      {
        kind: 'text',
        heading: 'الوقود ضمن السجل نفسه',
        requires: 'fuelAsExpense',
        body: 'يمكن تسجيل الوقود كمصروف على كل مركبة إلى جانب الإصلاحات والتأمين، فيأتي بند الوقود في تكلفة الكيلومتر من الإنفاق الفعلي.',
      },
    ],
  },
  faqs: {
    en: [
      { q: 'What is a good cost per km for a fleet vehicle?', a: 'There is no single benchmark. It depends on the vehicle type, fuel prices, how far it drives and how long you keep it. A van that drives 60,000 km a year will usually cost less per km than the same van driving 20,000 km, because fixed costs are spread over more distance. Compare against your own vehicles and against the alternatives you are considering.' },
      { q: 'Is TCO the same as total annual cost?', a: 'No. Total annual cost is what the vehicle costs in one average year. TCO covers the whole ownership period: purchase price plus all operating and financing costs, minus what you get back when you sell. In this calculator, TCO equals total annual cost multiplied by the years of ownership.' },
      { q: 'Should I include the driver’s salary?', a: 'The calculator focuses on the vehicle. If you want a full cost per km for pricing, you can add driver costs under "other costs", but keep it consistent when you compare vehicles.' },
      { q: 'Why is depreciation included in cost per km?', a: 'Because the value a vehicle loses is a real cost, even though no invoice is paid for it each month. Leaving it out makes expensive vehicles look cheaper to run than they are.' },
      { q: 'How is this different from a monthly fleet budget?', a: 'A budget adds up running costs for a month or year. This tool divides costs by kilometres and spreads the purchase over the ownership period. For building a budget, see our guide on [how to calculate fleet costs](/blog/how-to-calculate-fleet-cost).' },
    ],
    ar: [
      { q: 'ما التكلفة المناسبة للكيلومتر في مركبات الأسطول؟', a: 'لا يوجد رقم مرجعي واحد؛ فالأمر يتوقف على نوع المركبة وأسعار الوقود والمسافة المقطوعة ومدة الاحتفاظ بها. السيارة التي تقطع 60,000 كم سنويًا تكلّف غالبًا أقل لكل كيلومتر من مثيلتها التي تقطع 20,000 كم، لأن التكاليف الثابتة تتوزع على مسافة أكبر. قارن بمركباتك أنت وبالبدائل المطروحة.' },
      { q: 'هل إجمالي تكلفة الملكية هو نفسه التكلفة السنوية؟', a: 'لا. التكلفة السنوية هي تكلفة المركبة في عام متوسط واحد، أما إجمالي تكلفة الملكية فيشمل فترة الملكية كلها: سعر الشراء مضافًا إليه مصروفات التشغيل والتمويل، مطروحًا منه ما تسترده عند البيع.' },
      { q: 'هل أضيف راتب السائق؟', a: 'تركز الحاسبة على المركبة نفسها. وإذا أردت تكلفة كاملة للتسعير، يمكنك إضافة تكاليف السائق ضمن المصروفات الأخرى، مع الالتزام بالطريقة نفسها عند المقارنة.' },
      { q: 'لماذا يدخل الإهلاك في تكلفة الكيلومتر؟', a: 'لأن القيمة التي تفقدها المركبة تكلفة حقيقية حتى لو لم تُدفع لها فاتورة شهرية، وتجاهلها يجعل المركبات الغالية تبدو أرخص تشغيلًا مما هي عليه.' },
      { q: 'ما الفرق بين هذه الحاسبة وميزانية الأسطول الشهرية؟', a: 'الميزانية تجمع مصروفات التشغيل لشهر أو سنة، أما هذه الأداة فتقسم التكاليف على الكيلومترات وتوزّع سعر الشراء على سنوات الملكية.' },
    ],
  },
  relatedPages: ['/fleet-cost-tracking', '/features/expense-management', '/features/asset-management'],
  relatedArticles: ['vehicle-cost-per-km', 'fleet-total-cost-of-ownership', 'how-to-calculate-fleet-cost'],
  schemaName: { en: 'Axpense Fleet Cost per KM Calculator', ar: 'حاسبة تكلفة الكيلومتر للأسطول من أكسبنس' },
};
