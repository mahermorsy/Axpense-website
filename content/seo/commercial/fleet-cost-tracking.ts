// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const FLEET_COST_TRACKING: SeoPage = {
  path: '/fleet-cost-tracking',
  type: 'commercial',
  updatedAt: '2026-09-29',
  primaryKeyword: { en: 'fleet cost tracking software', ar: 'إدارة تكاليف الأسطول' },
  secondaryKeywords: {
    en: ['fleet cost management', 'fleet expense tracking', 'vehicle cost tracking', 'vehicle expense tracking', 'fleet TCO', 'vehicle total cost of ownership', 'fleet cost per km', 'fleet operating costs'],
    ar: ['إدارة مصروفات السيارات', 'حساب تكلفة تشغيل السيارة', 'تكلفة الكيلومتر', 'التكلفة الإجمالية للملكية', 'إهلاك السيارات'],
  },
  meta: {
    en: {
      title: 'Fleet Cost Tracking Software: TCO & Cost per KM',
      description: 'Fleet cost tracking software that adds up maintenance, parts, insurance and other costs per vehicle, so you can see TCO and cost per km. Book a demo.',
    },
    ar: {
      title: 'إدارة تكاليف الأسطول وتكلفة الكيلومتر',
      description: 'إدارة تكاليف الأسطول بسجل واحد لكل مركبة يجمع الصيانة وقطع الغيار والتأمين وباقي المصروفات، لتعرف تكلفة الكيلومتر وقرار الاستبدال. احجز عرضًا تجريبيًا.',
    },
  },
  h1: { en: 'Fleet Cost Tracking Software: Know What Every Vehicle Costs', ar: 'برنامج إدارة تكاليف الأسطول ومصروفات السيارات' },
  navLabel: { en: 'Fleet cost tracking', ar: 'إدارة تكاليف الأسطول' },
  hero: {
    en: {
      badge: 'Fleet cost tracking',
      intro: 'How much is your fleet costing you, and how much is each vehicle costing you? Axpense records every repair, spare part, insurance payment and other expense against the vehicle it belongs to, so the answer is a report, not a week of collecting receipts.',
    },
    ar: {
      badge: 'إدارة تكاليف الأسطول',
      intro: 'كم يكلّفك الأسطول، وكم تكلّفك كل سيارة على حدة؟ يسجّل أكسبنس كل إصلاح وقطعة غيار وقسط تأمين وأي مصروف آخر على السيارة التي يخصها، فتصبح الإجابة تقريرًا جاهزًا بدلًا من أسبوع من جمع الإيصالات.',
    },
  },
  heroImage: 'dashboard',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'Why fleet costs are hard to see',
        body: `In most companies, the money a vehicle consumes is paid from several places. The workshop invoice goes through purchasing, the insurance renewal goes through finance, the registration fee is paid by an administrator and small costs like tyre repairs or parking are paid in cash by the driver. Each payment is recorded somewhere, but almost never against the vehicle.

The result is a fleet total that finance can report and a per-vehicle picture that nobody can. You know the fleet cost a lot last year. You don’t know that two of your forty vans account for a quarter of the repair bill, or that the pickup you planned to keep another three years already costs more per kilometre than a new one would.

**Fleet cost tracking software fixes the attachment problem.** Every cost is entered once, with a category and a vehicle, and from that point the totals, the comparisons and the cost per kilometre come from the same records.`,
      },
      {
        kind: 'cards',
        heading: 'The operating costs Axpense brings together',
        intro: 'Each expense is recorded against a vehicle and a category, so you can look at the fleet by type of cost or by vehicle.',
        columns: 3,
        items: [
          { icon: 'wrench', title: 'Maintenance and repairs', desc: 'Periodic services, breakdown repairs and workshop labour, linked to the vehicle’s service history.' },
          { icon: 'package', title: 'Spare parts', desc: 'Parts tracked from purchase to installation, so the cost lands on the vehicle the part went into.' },
          { icon: 'shield', title: 'Insurance', desc: 'Policy premiums recorded per vehicle, so an expensive-to-insure vehicle stands out in the totals.' },
          { icon: 'file', title: 'Registration and licensing', desc: 'Registration and licence fees kept with the vehicle rather than in a general admin budget.' },
          { icon: 'dollar', title: 'Other expenses', desc: 'Tyres, washing, tolls, parking, fines and anything else, each under a category you can report on.' },
          { icon: 'fuel', title: 'Fuel', desc: 'Fuel purchases recorded as an expense on the vehicle, so the largest running cost is part of every total.', requires: 'fuelAsExpense' },
        ],
      },
      {
        kind: 'text',
        heading: 'Vehicle cost tracking: the cost of each vehicle',
        body: `Vehicle cost tracking means keeping a running total for every vehicle rather than for the fleet as a whole. In Axpense, each vehicle record shows the expenses logged against it, grouped by category and period, next to its odometer reading, service history and assigned driver.

That per-vehicle view answers questions a fleet total never can:

- **Which vehicles cost the most to run this year?** Sort the fleet by total cost and the outliers are obvious.
- **Is a vehicle getting more expensive as it ages?** Compare its costs this year with last year, category by category.
- **Is the cost driven by the vehicle or by how it is used?** Because drivers are assigned to vehicles, you can see who was driving when the repair bills climbed.

Over time the per-vehicle record becomes the vehicle’s lifecycle cost: everything spent on it from the day it joined the fleet. Add the purchase price and the book value from depreciation, and you have the basis for per-vehicle total cost of ownership. The detail of how expenses are entered and categorised is on the [fleet expense management](/features/expense-management) page.`,
      },
      {
        kind: 'formula',
        heading: 'How to calculate cost per km',
        intro: 'Cost per kilometre is the fairest way to compare vehicles that drive very different distances. A truck that costs twice as much as a van may still be cheaper per kilometre if it drives three times as far.',
        formulas: [{ label: 'Cost per km', expression: 'Cost per km = total operating costs for the period ÷ km driven in the period' }],
        example: {
          title: 'Worked examples in EGP and SAR',
          body: `**Example 1: a delivery van in Cairo, one month (EGP).** The van drove 5,000 km during the month.

| Cost category | Amount (EGP) |
|---|---|
| Maintenance and repairs | 3,200 |
| Spare parts | 2,800 |
| Insurance (monthly share) | 1,500 |
| Registration (monthly share) | 400 |
| Other (tolls, washing, parking) | 600 |
| **Total operating costs** | **8,500** |

Cost per km = 8,500 ÷ 5,000 = **1.70 EGP per km**.

**Example 2: a pickup in Riyadh, one quarter (SAR).** The pickup drove 12,000 km in three months.

| Cost category | Amount (SAR) |
|---|---|
| Maintenance and repairs | 1,450 |
| Spare parts | 900 |
| Insurance (quarterly share) | 750 |
| Registration and other | 300 |
| **Total operating costs** | **3,400** |

Cost per km = 3,400 ÷ 12,000 = **0.28 SAR per km**.

> Use the same period for costs and kilometres, and spread annual costs such as insurance across the months they cover. Include fuel too: fuel records on the vehicle profile feed straight into the total. Axpense keeps both halves of the formula on the vehicle record: the costs logged against it and its odometer readings.`,
        },
      },
      {
        kind: 'formula',
        heading: 'Total cost of ownership (TCO) for a fleet vehicle',
        intro: 'Cost per km tells you what a vehicle costs to run. Total cost of ownership tells you what it cost to own, from purchase to sale, and is the number to use when comparing models or deciding how long to keep vehicles.',
        formulas: [{ label: 'Total cost of ownership', expression: 'TCO = purchase price + total operating costs over ownership + financing costs − resale value' }],
        example: {
          title: 'Worked example: a light truck kept for five years',
          body: `| Item | Amount (EGP) |
|---|---|
| Purchase price | 1,200,000 |
| Operating costs over 5 years (110,000 a year) | 550,000 |
| Financing costs (loan interest) | 150,000 |
| Expected resale value | − 450,000 |
| **Total cost of ownership** | **1,450,000** |

If the truck drives 200,000 km over the five years, its lifetime cost is 1,450,000 ÷ 200,000 = **7.25 EGP per km**, including the loss in value. That is the figure to compare against a different model, or against keeping the truck for a sixth year.

Operating costs come from the expenses logged in Axpense over the vehicle’s life; the purchase price and book value come from the vehicle record and its depreciation schedule.`,
        },
      },
      {
        kind: 'text',
        heading: 'Depreciation and the lifecycle cost of a vehicle',
        body: `Depreciation is the part of vehicle cost you never see on an invoice. A vehicle bought for 1,200,000 EGP and expected to sell for 450,000 EGP after five years loses value at roughly (1,200,000 − 450,000) ÷ 5 = 150,000 EGP a year on a straight-line basis. That is often larger than a year of repairs.

Axpense calculates book value over time for each vehicle, so finance and operations look at the same number. Put next to the running costs, it shows the full lifecycle cost: what the vehicle has cost so far and what it is still worth. How depreciation schedules are set up is covered on the [vehicle depreciation and lifecycle](/features/asset-management) page.`,
      },
      {
        kind: 'checklist',
        heading: 'Planning vehicle replacement with real numbers',
        intro: 'Replacement decisions are easier to make, and to defend to management, when they rest on the vehicle’s own history. Signals worth watching in the cost reports:',
        items: [
          { text: 'Repair and parts costs rising year on year while kilometres stay flat.' },
          { text: 'Cost per km well above similar vehicles doing similar work.' },
          { text: 'Book value falling towards the point where a major repair would cost more than the vehicle is worth.' },
          { text: 'The same components failing repeatedly, visible in the service and parts history.' },
          { text: 'Frequent unplanned repairs that take the vehicle off the road between scheduled services.' },
        ],
      },
      {
        kind: 'text',
        heading: 'Keeping maintenance costs predictable',
        body: `Unplanned repairs are the most expensive way to maintain a vehicle: the part costs more when it is urgent, the vehicle is off the road longer and a small fault often damages something else on the way. Servicing by kilometres driven keeps more of your maintenance spend planned.

Axpense schedules preventive maintenance by kilometre and records every service against the vehicle, so the cost reports show the split between routine servicing and repairs. How the maintenance side works is covered on the [fleet maintenance software](/fleet-maintenance-software) page.`,
      },
      {
        kind: 'text',
        heading: 'Fleet budgets vs actual spend',
        requires: 'budgets',
        body: `Set a monthly or annual budget for the fleet, by vehicle or by category, and Axpense compares it with what was actually spent. Overspending on repairs or parts shows up during the month, while there is still time to act, instead of at year-end.

Budgets can be built from last year’s actual costs per vehicle, so the plan reflects how each vehicle really behaves.`,
      },
      {
        kind: 'text',
        heading: 'Cost reports your finance team can use',
        body: `The reports turn the records your team already keeps into answers:

- **Costs by vehicle** for any period, to find the vehicles that cost the most.
- **Costs by category**, to see whether repairs, parts or insurance are driving the total.
- **Fleet overview**, with total spend next to maintenance status, so cost and condition are read together.

Managers can move from the fleet total to a single vehicle’s expense list in a click, which makes month-end questions quick to answer. More on the dashboards and report types is on the [fleet reporting](/features/reports-analytics) page, and cost tracking works alongside the rest of our [fleet management software](/fleet-management-software).`,
      },
      {
        kind: 'text',
        heading: 'Try the numbers before you set anything up',
        body: `> Want a quick answer for one vehicle? Enter its costs, kilometres, purchase price and resale value in our free [fleet cost per km and TCO calculator](/resources/fleet-cost-calculator). It uses the same formulas as this page.

When you are ready to track costs for the whole fleet, Axpense is priced per vehicle per month with every feature included: 350 EGP, 38 SAR or $10 per vehicle for 5–10 vehicles, and less per vehicle as the fleet grows. You can start free, and onboarding is free. See the [pricing page](/pricing) for details.`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'لماذا يصعب رؤية تكاليف الأسطول؟',
        body: `في أغلب الشركات تُدفع مصروفات السيارة من أكثر من جهة. فاتورة الورشة تمر عبر المشتريات، وتجديد التأمين عبر الإدارة المالية، ورسوم الترخيص يدفعها موظف إداري، والمصروفات الصغيرة مثل إصلاح الكاوتش أو الانتظار يدفعها السائق نقدًا. كل مبلغ مسجَّل في مكان ما، لكنه نادرًا ما يُسجَّل على السيارة نفسها.

النتيجة: رقم إجمالي للأسطول تستطيع الإدارة المالية عرضه، وصورة لكل سيارة لا يملكها أحد. تعرف أن الأسطول كلّف كثيرًا العام الماضي، لكنك لا تعرف أن سيارتين من أربعين تستحوذان على ربع فاتورة الإصلاح، أو أن سيارة البيك أب التي تنوي الاحتفاظ بها ثلاث سنوات أخرى تكلّف في الكيلومتر أكثر مما ستكلّفه سيارة جديدة.

**برنامج إدارة تكاليف الأسطول يحل مشكلة الربط.** يُسجَّل كل مصروف مرة واحدة مع فئته والسيارة التي يخصها، ومن هذه السجلات نفسها تأتي الإجماليات والمقارنات وتكلفة الكيلومتر.`,
      },
      {
        kind: 'cards',
        heading: 'تكاليف التشغيل التي يجمعها أكسبنس',
        intro: 'يُسجَّل كل مصروف على سيارة وفئة، فترى الأسطول حسب نوع التكلفة أو حسب السيارة.',
        columns: 3,
        items: [
          { icon: 'wrench', title: 'الصيانة والإصلاحات', desc: 'الصيانة الدورية وإصلاح الأعطال وأجور الورشة، مرتبطة بسجل صيانة السيارة.' },
          { icon: 'package', title: 'قطع الغيار', desc: 'تُتابَع القطع من الشراء حتى التركيب، فتُحسب تكلفتها على السيارة التي رُكّبت فيها.' },
          { icon: 'shield', title: 'التأمين', desc: 'أقساط التأمين مسجلة لكل سيارة، فتظهر السيارة مرتفعة التأمين في الإجماليات.' },
          { icon: 'file', title: 'الترخيص والتسجيل', desc: 'رسوم الترخيص والتسجيل محفوظة مع السيارة لا في بند إداري عام.' },
          { icon: 'dollar', title: 'مصروفات أخرى', desc: 'الإطارات والغسيل والرسوم والانتظار والمخالفات وغيرها، كلٌّ في فئة يمكن إعداد تقرير عنها.' },
          { icon: 'fuel', title: 'الوقود', desc: 'تُسجَّل مشتريات الوقود مصروفًا على السيارة، فيدخل أكبر بند تشغيل في كل إجمالي.', requires: 'fuelAsExpense' },
        ],
      },
      {
        kind: 'text',
        heading: 'تكلفة كل سيارة على حدة',
        body: `متابعة تكلفة السيارة تعني الاحتفاظ بإجمالي جارٍ لكل سيارة، لا للأسطول ككل فقط. في أكسبنس يعرض سجل كل سيارة المصروفات المسجلة عليها مجمّعة حسب الفئة والفترة، بجوار قراءة العداد وسجل الصيانة والسائق المعيّن.

وهذه النظرة لكل سيارة تجيب عن أسئلة لا يجيب عنها إجمالي الأسطول:

- **أي السيارات أعلى تكلفة تشغيل هذا العام؟** رتّب الأسطول حسب إجمالي التكلفة فتظهر الحالات الشاذة فورًا.
- **هل ترتفع تكلفة السيارة مع تقدّم عمرها؟** قارن مصروفاتها هذا العام بالعام الماضي، فئة بفئة.
- **هل السبب في السيارة أم في طريقة استخدامها؟** لأن السائقين معيّنون على السيارات، تعرف من كان يقودها عندما ارتفعت فواتير الإصلاح.

ومع الوقت يتحول سجل السيارة إلى تكلفة دورة حياتها: كل ما أُنفق عليها منذ دخولها الأسطول. أضف سعر الشراء والقيمة الدفترية من الإهلاك، فيصبح لديك أساس حساب التكلفة الإجمالية للملكية لكل سيارة. وتفاصيل تسجيل المصروفات وتصنيفها موجودة في صفحة [إدارة مصروفات الأسطول](/features/expense-management).`,
      },
      {
        kind: 'formula',
        heading: 'كيف تحسب تكلفة الكيلومتر',
        intro: 'تكلفة الكيلومتر هي الطريقة الأعدل لمقارنة سيارات تقطع مسافات مختلفة جدًا. شاحنة تكلّف ضعف سيارة التوزيع قد تكون أرخص في الكيلومتر إذا قطعت ثلاثة أضعاف المسافة.',
        formulas: [{ label: 'تكلفة الكيلومتر', expression: 'تكلفة الكيلومتر = إجمالي تكاليف التشغيل خلال الفترة ÷ الكيلومترات المقطوعة خلال الفترة' }],
        example: {
          title: 'مثالان محلولان بالجنيه والريال',
          body: `**المثال الأول: سيارة توزيع في القاهرة لمدة شهر (بالجنيه).** قطعت السيارة 5,000 كم خلال الشهر.

| فئة التكلفة | المبلغ (ج.م) |
|---|---|
| الصيانة والإصلاحات | 3,200 |
| قطع الغيار | 2,800 |
| التأمين (نصيب الشهر) | 1,500 |
| الترخيص (نصيب الشهر) | 400 |
| أخرى (رسوم طرق، غسيل، انتظار) | 600 |
| **إجمالي تكاليف التشغيل** | **8,500** |

تكلفة الكيلومتر = 8,500 ÷ 5,000 = **1.70 جنيه للكيلومتر**.

**المثال الثاني: سيارة بيك أب في الرياض لمدة ربع سنة (بالريال).** قطعت السيارة 12,000 كم في ثلاثة أشهر.

| فئة التكلفة | المبلغ (ر.س) |
|---|---|
| الصيانة والإصلاحات | 1,450 |
| قطع الغيار | 900 |
| التأمين (نصيب الربع) | 750 |
| التسجيل وأخرى | 300 |
| **إجمالي تكاليف التشغيل** | **3,400** |

تكلفة الكيلومتر = 3,400 ÷ 12,000 = **0.28 ريال للكيلومتر**.

> استخدم الفترة نفسها للتكاليف والكيلومترات، ووزّع التكاليف السنوية مثل التأمين على الأشهر التي تغطيها. ولا تنسَ الوقود: سجلات الوقود في ملف المركبة تدخل مباشرة في الإجمالي. يحتفظ أكسبنس بطرفي المعادلة في سجل السيارة: المصروفات المسجلة عليها وقراءات العداد.`,
        },
      },
      {
        kind: 'formula',
        heading: 'التكلفة الإجمالية للملكية (TCO) للسيارة',
        intro: 'تكلفة الكيلومتر تخبرك بتكلفة تشغيل السيارة، أما التكلفة الإجمالية للملكية فتخبرك بتكلفة امتلاكها من الشراء حتى البيع، وهي الرقم المناسب عند المقارنة بين الطرازات أو تحديد مدة الاحتفاظ بالسيارات.',
        formulas: [{ label: 'التكلفة الإجمالية للملكية', expression: 'التكلفة الإجمالية للملكية = سعر الشراء + إجمالي تكاليف التشغيل طوال مدة الملكية + تكاليف التمويل − قيمة إعادة البيع' }],
        example: {
          title: 'مثال محلول: شاحنة خفيفة لمدة خمس سنوات',
          body: `| البند | المبلغ (ج.م) |
|---|---|
| سعر الشراء | 1,200,000 |
| تكاليف التشغيل لخمس سنوات (110,000 سنويًا) | 550,000 |
| تكاليف التمويل (فوائد القرض) | 150,000 |
| قيمة إعادة البيع المتوقعة | − 450,000 |
| **التكلفة الإجمالية للملكية** | **1,450,000** |

إذا قطعت الشاحنة 200,000 كم خلال السنوات الخمس، فتكلفتها على مدى عمرها = 1,450,000 ÷ 200,000 = **7.25 جنيه للكيلومتر** شاملة الانخفاض في قيمتها. هذا هو الرقم الذي تقارن به طرازًا آخر، أو قرار الاحتفاظ بالشاحنة سنة سادسة.

تأتي تكاليف التشغيل من المصروفات المسجلة في أكسبنس طوال عمر السيارة، ويأتي سعر الشراء والقيمة الدفترية من سجل السيارة وجدول إهلاكها.`,
        },
      },
      {
        kind: 'text',
        heading: 'إهلاك السيارات وتكلفة دورة الحياة',
        body: `الإهلاك هو الجزء من تكلفة السيارة الذي لا يظهر في أي فاتورة. سيارة اشتُريت بمبلغ 1,200,000 جنيه ويُتوقع بيعها بمبلغ 450,000 جنيه بعد خمس سنوات تفقد من قيمتها تقريبًا (1,200,000 − 450,000) ÷ 5 = 150,000 جنيه سنويًا بطريقة القسط الثابت، وهو مبلغ يتجاوز غالبًا تكلفة الإصلاحات في سنة كاملة.

يحسب أكسبنس القيمة الدفترية لكل سيارة بمرور الوقت، فتنظر الإدارة المالية وإدارة التشغيل إلى الرقم نفسه. وعند وضعها بجوار تكاليف التشغيل تظهر تكلفة دورة الحياة كاملة: كم كلّفت السيارة حتى الآن، وكم تساوي اليوم. وطريقة إعداد جداول الإهلاك موضحة في صفحة [إهلاك المركبات ودورة حياتها](/features/asset-management).`,
      },
      {
        kind: 'checklist',
        heading: 'التخطيط لاستبدال السيارات بأرقام حقيقية',
        intro: 'قرار الاستبدال أسهل في اتخاذه والدفاع عنه أمام الإدارة عندما يستند إلى سجل السيارة نفسها. مؤشرات تستحق المتابعة في تقارير التكاليف:',
        items: [
          { text: 'ارتفاع تكاليف الإصلاح وقطع الغيار عامًا بعد عام مع ثبات الكيلومترات.' },
          { text: 'تكلفة كيلومتر أعلى بوضوح من سيارات مماثلة تؤدي عملًا مماثلًا.' },
          { text: 'اقتراب القيمة الدفترية من النقطة التي يتجاوز فيها إصلاح كبير قيمة السيارة نفسها.' },
          { text: 'تكرار تلف القطع نفسها، وهو ما يظهر في سجل الصيانة وقطع الغيار.' },
          { text: 'أعطال مفاجئة متكررة تُخرج السيارة من الخدمة بين مواعيد الصيانة المجدولة.' },
        ],
      },
      {
        kind: 'text',
        heading: 'تكاليف صيانة يمكن توقعها',
        body: `الإصلاح غير المخطط هو أغلى طريقة لصيانة السيارة: القطعة أغلى عندما تكون مطلوبة على عجل، والسيارة تتوقف مدة أطول، والعطل الصغير كثيرًا ما يُتلف شيئًا آخر في طريقه. الصيانة حسب الكيلومترات المقطوعة تجعل جزءًا أكبر من إنفاقك على الصيانة مخططًا.

يجدول أكسبنس الصيانة الوقائية بالكيلومتر ويسجّل كل صيانة على السيارة، فتُظهر تقارير التكاليف الفرق بين الصيانة الدورية والإصلاحات. التفاصيل في صفحة [برنامج صيانة الأسطول](/fleet-maintenance-software).`,
      },
      {
        kind: 'text',
        heading: 'ميزانية الأسطول مقابل الإنفاق الفعلي',
        requires: 'budgets',
        body: `حدّد ميزانية شهرية أو سنوية للأسطول، لكل سيارة أو لكل فئة، ويقارنها أكسبنس بما أُنفق فعلًا. يظهر تجاوز الإنفاق على الإصلاحات أو قطع الغيار خلال الشهر، والوقت ما زال متاحًا للتصرف، لا في نهاية العام.

ويمكن بناء الميزانية على التكاليف الفعلية لكل سيارة في العام الماضي، لتعكس الخطة سلوك كل سيارة الحقيقي.`,
      },
      {
        kind: 'text',
        heading: 'تقارير تكاليف تستفيد منها الإدارة المالية',
        body: `تحوّل التقارير السجلات التي يحتفظ بها فريقك أصلًا إلى إجابات:

- **التكاليف حسب السيارة** لأي فترة، لمعرفة السيارات الأعلى تكلفة.
- **التكاليف حسب الفئة**، لمعرفة إن كانت الإصلاحات أو قطع الغيار أو التأمين هي ما يرفع الإجمالي.
- **نظرة عامة على الأسطول** تضع الإنفاق بجوار حالة الصيانة، فتُقرأ التكلفة والحالة معًا.

يستطيع المدير الانتقال من إجمالي الأسطول إلى قائمة مصروفات سيارة واحدة بنقرة، فتصبح أسئلة نهاية الشهر سريعة الإجابة. المزيد عن اللوحات وأنواع التقارير في صفحة [تقارير الأسطول](/features/reports-analytics)، وتعمل إدارة التكاليف مع باقي [برنامج إدارة الأسطول](/fleet-management-software).`,
      },
      {
        kind: 'text',
        heading: 'جرّب الأرقام قبل أي إعداد',
        body: `> تريد إجابة سريعة لسيارة واحدة؟ أدخل تكاليفها وكيلومتراتها وسعر شرائها وقيمة إعادة بيعها في [حاسبة تكلفة الكيلومتر والتكلفة الإجمالية للملكية](/resources/fleet-cost-calculator) المجانية، وهي تستخدم المعادلات نفسها الموجودة في هذه الصفحة.

وعندما تكون جاهزًا لمتابعة تكاليف الأسطول كله، يُسعَّر أكسبنس لكل مركبة شهريًا مع كل المزايا: 350 جنيهًا أو 38 ريالًا أو 10 دولارات للمركبة لأسطول من 5 إلى 10 مركبات، ويقل سعر المركبة كلما كبر الأسطول. يمكنك البدء مجانًا، والتهيئة مجانية. التفاصيل في [صفحة الأسعار](/pricing).`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'Can Axpense show the cost of each vehicle?', a: 'Yes. Every expense is recorded against a vehicle and a category, so each vehicle record shows its own running total, and the reports rank vehicles by cost for any period.' },
      { q: 'How do I calculate cost per kilometre?', a: 'Divide the total operating costs for a period by the kilometres driven in the same period. For example, 8,500 EGP of costs over 5,000 km is 1.70 EGP per km. Our [cost per km guide](/blog/vehicle-cost-per-km) walks through it step by step.' },
      { q: 'What is total cost of ownership (TCO) for a fleet vehicle?', a: 'TCO is everything a vehicle costs from purchase to sale: purchase price plus operating costs over ownership plus financing costs, minus the resale value. It is the right number for comparing models or deciding when to replace. See [fleet total cost of ownership](/blog/fleet-total-cost-of-ownership).' },
      { q: 'What is the difference between cost per km and TCO?', a: 'Cost per km measures running costs over a period and is best for comparing vehicles week to week or month to month. TCO covers the whole ownership period, including purchase, financing and resale, and is best for buy, keep or replace decisions.' },
      { q: 'Which costs should we record for each vehicle?', a: 'At minimum: maintenance and repairs, spare parts, insurance, registration and licensing, and a catch-all for other costs such as tyres, tolls and washing. A short, fixed list of categories keeps reports comparable over time.' },
      { q: 'How does depreciation fit into fleet cost tracking?', a: 'Depreciation is the loss in a vehicle’s value over time. Axpense keeps each vehicle’s book value, which you need for TCO and for knowing when a major repair is no longer worth doing.' },
      { q: 'We have years of costs in spreadsheets. Do we need to import them all?', a: 'No. Most teams start recording from the current month and add past costs for the vehicles where history matters, such as older vehicles being considered for replacement. For monthly running-cost totals, see [how to calculate fleet costs](/blog/how-to-calculate-fleet-cost).' },
      { q: 'Can we record fuel costs in Axpense?', a: 'Yes. Fuel purchases can be recorded as an expense against the vehicle, so they are included in the vehicle’s totals and in cost per km.', requires: 'fuelAsExpense' },
    ],
    ar: [
      { q: 'هل يعرض أكسبنس تكلفة كل سيارة؟', a: 'نعم. يُسجَّل كل مصروف على سيارة وفئة، فيعرض سجل كل سيارة إجماليها الخاص، وترتّب التقارير السيارات حسب التكلفة لأي فترة.' },
      { q: 'كيف أحسب تكلفة الكيلومتر؟', a: 'اقسم إجمالي تكاليف التشغيل خلال فترة على الكيلومترات المقطوعة في الفترة نفسها. مثلًا 8,500 جنيه تكاليف على 5,000 كم تساوي 1.70 جنيه للكيلومتر. يشرح [دليل حساب تكلفة الكيلومتر](/blog/vehicle-cost-per-km) الخطوات بالتفصيل.' },
      { q: 'ما هي التكلفة الإجمالية للملكية (TCO) لسيارة الأسطول؟', a: 'هي كل ما تكلّفه السيارة من الشراء حتى البيع: سعر الشراء مضافًا إليه تكاليف التشغيل طوال مدة الملكية وتكاليف التمويل، مطروحًا منه قيمة إعادة البيع. وهي الرقم المناسب لمقارنة الطرازات أو تحديد موعد الاستبدال. اقرأ [التكلفة الإجمالية لملكية الأسطول](/blog/fleet-total-cost-of-ownership).' },
      { q: 'ما الفرق بين تكلفة الكيلومتر والتكلفة الإجمالية للملكية؟', a: 'تقيس تكلفة الكيلومتر تكاليف التشغيل خلال فترة، وهي الأنسب للمقارنة بين السيارات شهرًا بشهر. أما التكلفة الإجمالية للملكية فتغطي مدة الملكية كلها بما فيها الشراء والتمويل وإعادة البيع، وهي الأنسب لقرارات الشراء أو الاحتفاظ أو الاستبدال.' },
      { q: 'ما التكاليف التي يجب تسجيلها لكل سيارة؟', a: 'على الأقل: الصيانة والإصلاحات، وقطع الغيار، والتأمين، والترخيص والتسجيل، وفئة عامة للمصروفات الأخرى مثل الإطارات ورسوم الطرق والغسيل. القائمة القصيرة الثابتة تُبقي التقارير قابلة للمقارنة.' },
      { q: 'ما علاقة إهلاك السيارات بإدارة التكاليف؟', a: 'الإهلاك هو انخفاض قيمة السيارة بمرور الوقت. يحتفظ أكسبنس بالقيمة الدفترية لكل سيارة، وهي ما تحتاجه لحساب التكلفة الإجمالية للملكية ولمعرفة متى يصبح الإصلاح الكبير غير مجدٍ.' },
      { q: 'لدينا تكاليف سنوات في ملفات إكسل، هل يجب إدخالها كلها؟', a: 'لا. تبدأ معظم الفرق بالتسجيل من الشهر الحالي، ثم تضيف التكاليف السابقة للسيارات التي يهم تاريخها، مثل السيارات القديمة المرشحة للاستبدال.' },
      { q: 'هل يمكن تسجيل تكاليف الوقود في أكسبنس؟', a: 'نعم. يمكن تسجيل مشتريات الوقود مصروفًا على السيارة، فتدخل في إجمالياتها وفي تكلفة الكيلومتر.', requires: 'fuelAsExpense' },
    ],
  },
  relatedPages: ['/features/expense-management', '/features/asset-management', '/features/reports-analytics', '/resources/fleet-cost-calculator', '/fleet-maintenance-software', '/fleet-management-software', '/pricing'],
  relatedIndustries: ['/industries/logistics', '/industries/distribution', '/industries/construction'],
  relatedArticles: ['vehicle-cost-per-km', 'fleet-total-cost-of-ownership', 'how-to-calculate-fleet-cost'],
  schemaName: 'Axpense Fleet Cost Tracking',
};
