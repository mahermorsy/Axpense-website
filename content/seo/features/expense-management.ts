// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const EXPENSE_MANAGEMENT: SeoPage = {
  path: '/features/expense-management',
  type: 'feature',
  updatedAt: '2026-09-29',
  primaryKeyword: { en: 'fleet expense management software', ar: 'إدارة مصروفات الأسطول' },
  secondaryKeywords: {
    en: ['vehicle expense tracking', 'fleet expense categories', 'cost by vehicle', 'monthly fleet expenses'],
    ar: ['مصروفات السيارات', 'تسجيل مصروفات المركبات', 'تكلفة كل سيارة', 'مصروفات الأسطول الشهرية'],
  },
  meta: {
    en: {
      title: 'Fleet Expense Management Software by Vehicle',
      description: 'Fleet expense management software that records repairs, parts, insurance and registration per vehicle, so monthly totals are always ready. Book a demo.',
    },
    ar: {
      title: 'إدارة مصروفات الأسطول لكل مركبة',
      description: 'إدارة مصروفات الأسطول بتسجيل الإصلاحات وقطع الغيار والتأمين والترخيص على كل مركبة، لتكون الإجماليات الشهرية جاهزة دائمًا دون جداول. احجز عرضًا تجريبيًا.',
    },
  },
  h1: { en: 'Fleet Expense Management Software That Puts Every Cost on the Right Vehicle', ar: 'إدارة مصروفات الأسطول: كل تكلفة على المركبة الصحيحة' },
  navLabel: { en: 'Expense management', ar: 'إدارة المصروفات' },
  hero: {
    en: {
      badge: 'Expense management',
      intro: 'Record repairs, spare parts, insurance, registration and other costs against the vehicle they belong to, in the category they belong in. Axpense adds them up for you, so the monthly total and the cost of each vehicle are ready without a spreadsheet.',
    },
    ar: {
      badge: 'إدارة المصروفات',
      intro: 'سجّل الإصلاحات وقطع الغيار والتأمين والترخيص وباقي التكاليف على المركبة التي تخصها وفي الفئة المناسبة لها. يجمعها أكسبنس نيابة عنك، فيكون إجمالي الشهر وتكلفة كل مركبة جاهزين دون أي جدول إكسل.',
    },
  },
  heroImage: 'dashboard',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'What is fleet expense management software?',
        body: `**Fleet expense management software is where a company records what it spends on each vehicle, so running costs can be added up by vehicle, by category and by month.** It replaces the mix of invoices, petty-cash notes and accounting entries that rarely say which vehicle a cost belonged to.

In most companies, vehicle costs are paid correctly but recorded badly. Finance knows the company spent 180,000 EGP on repairs last quarter; nobody can say that 60,000 EGP of it went into two old pickups. Recording each expense against its vehicle is what turns a ledger total into a decision you can act on.`,
      },
      {
        kind: 'text',
        heading: 'How expense recording works in Axpense',
        body: `Every expense in Axpense is linked to **one vehicle** and **one category**, with its date and amount. The standard categories cover the costs fleets record most often:

- **Repairs**: workshop labour, breakdown repairs, bodywork.
- **Spare parts**: tyres, batteries, filters and other parts bought for a vehicle.
- **Insurance**: annual or instalment premiums for each vehicle.
- **Registration**: licensing and registration fees.
- **Other**: anything that doesn’t fit above, such as towing or parking fines.

Because the expense sits on the vehicle, it shows up in that vehicle’s history next to its services and inspections. Opening a vehicle tells you what has been done to it and what it has cost, in one place.

Parts bought through the [spare parts](/features/spare-parts) module keep their own purchase-to-installation history, so you can see both what a part cost and which vehicle it went into.`,
      },
      {
        kind: 'steps',
        heading: 'A simple monthly expense routine',
        intro: 'The routine below keeps the numbers current with a few minutes of work each week.',
        steps: [
          { title: 'Record the expense when the invoice arrives', desc: 'Choose the vehicle, pick the category and enter the date and amount. Recording as you go is faster than a month-end catch-up.' },
          { title: 'Keep the paper trail in order', desc: 'As a practice, file each receipt by month and plate number so any recorded expense can be checked against its original.' },
          { title: 'Record fuel spend per vehicle', desc: 'Log fuel purchases as expenses on the vehicle, so fuel sits alongside repairs and parts in the vehicle’s total.', requires: 'fuelAsExpense' },
          { title: 'Review the month’s totals', desc: 'Check the total for the month and the breakdown by category on the dashboard, and look for anything unusual.' },
          { title: 'Compare vehicles', desc: 'Look at cost by vehicle to find the vehicles that cost the most to run, then ask why.' },
          { title: 'Compare spend with the budget', desc: 'Set a monthly budget per category and see actual spend against it.', requires: 'budgets' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'Monthly totals and costs by category at a glance',
        image: 'dashboard',
        alt: 'Axpense dashboard showing total fleet expenses for the month with a breakdown by category such as repairs, spare parts and insurance',
        caption: 'The dashboard adds up recorded expenses by category and by vehicle, with no spreadsheet to maintain.',
      },
      {
        kind: 'text',
        heading: 'Example: what cost by vehicle reveals',
        body: `Here is an example of one month for three delivery vans in a small fleet. The numbers are illustrative.

| Vehicle | Repairs | Spare parts | Insurance | Other | Total (EGP) |
|---|---|---|---|---|---|
| Van A (2018) | 14,500 | 6,200 | 2,400 | 300 | 23,400 |
| Van B (2021) | 1,200 | 2,100 | 2,900 | 0 | 6,200 |
| Van C (2022) | 0 | 1,800 | 3,100 | 150 | 5,050 |

The fleet total of 34,650 EGP looks unremarkable. The per-vehicle view tells a different story: the oldest van accounts for about two thirds of the month’s spend, mostly on repairs. One month proves nothing, but if the same pattern repeats for a quarter, it is a strong case for replacing that van. The [depreciation and lifecycle](/features/asset-management) module helps you weigh that cost against the vehicle’s remaining book value.`,
      },
      {
        kind: 'text',
        heading: 'Who uses expense records',
        body: `- **Fleet managers** record expenses and review cost by vehicle to spot vehicles that are becoming expensive.
- **Finance and accounting teams** get monthly totals by category without chasing the operations team for a spreadsheet.
- **Branch or site managers** see what the vehicles under their responsibility cost.
- **Management** gets a clear answer to “what does our fleet cost us each month?”

For cost per kilometre and total cost of ownership, the calculations that build on these records, see our [fleet cost tracking](/fleet-cost-tracking) page and the free [fleet cost per km calculator](/resources/fleet-cost-calculator).`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'ما هي إدارة مصروفات الأسطول؟',
        body: `**إدارة مصروفات الأسطول تعني تسجيل ما تنفقه الشركة على كل مركبة، لتُجمع تكاليف التشغيل حسب المركبة والفئة والشهر.** وهي تحل محل خليط الفواتير وإيصالات العهدة والقيود المحاسبية التي نادرًا ما تذكر المركبة التي تخصها التكلفة.

في أغلب الشركات تُدفع تكاليف السيارات بشكل صحيح لكنها تُسجَّل بشكل سيئ. الإدارة المالية تعرف أن الشركة أنفقت 180,000 جنيه على الإصلاحات في الربع الماضي، لكن لا أحد يستطيع القول إن 60,000 جنيه منها ذهبت إلى سيارتي بيك أب قديمتين. تسجيل كل مصروف على مركبته هو ما يحوّل الرقم الإجمالي في الدفاتر إلى قرار يمكن تنفيذه.`,
      },
      {
        kind: 'text',
        heading: 'كيف يعمل تسجيل المصروفات في أكسبنس',
        body: `كل مصروف في أكسبنس مرتبط **بمركبة واحدة** و**فئة واحدة**، مع تاريخه ومبلغه. وتغطي الفئات الأساسية التكاليف الأكثر تكرارًا في الأساطيل:

- **الإصلاحات**: مصنعية الورشة وإصلاح الأعطال وأعمال السمكرة.
- **قطع الغيار**: الإطارات والبطاريات والفلاتر وغيرها من القطع المشتراة للمركبة.
- **التأمين**: أقساط التأمين السنوية أو الدورية لكل مركبة.
- **الترخيص**: رسوم الترخيص والتسجيل.
- **أخرى**: أي تكلفة لا تندرج تحت ما سبق، مثل الونش أو مخالفات الانتظار.

ولأن المصروف مسجل على المركبة، فهو يظهر في سجلها بجوار الصيانة والفحوصات. فتح سجل المركبة يخبرك بما أُجري لها وكم كلّفت، في مكان واحد.

والقطع المشتراة من خلال وحدة [قطع الغيار](/features/spare-parts) تحتفظ بسجلها من الشراء حتى التركيب، فتعرف ثمن القطعة والمركبة التي رُكّبت فيها معًا.`,
      },
      {
        kind: 'steps',
        heading: 'روتين شهري بسيط للمصروفات',
        intro: 'هذا الروتين يُبقي الأرقام محدّثة بدقائق قليلة من العمل كل أسبوع.',
        steps: [
          { title: 'سجّل المصروف عند وصول الفاتورة', desc: 'اختر المركبة والفئة وأدخل التاريخ والمبلغ. التسجيل أولًا بأول أسرع من محاولة اللحاق بكل شيء في آخر الشهر.' },
          { title: 'رتّب المستندات الورقية', desc: 'كممارسة عملية، احفظ كل إيصال حسب الشهر ورقم اللوحة، ليمكن مطابقة أي مصروف مسجل مع أصله.' },
          { title: 'سجّل مصروف الوقود لكل مركبة', desc: 'سجّل مشتريات الوقود كمصروف على المركبة، ليظهر الوقود بجوار الإصلاحات وقطع الغيار في إجمالي تكلفتها.', requires: 'fuelAsExpense' },
          { title: 'راجع إجماليات الشهر', desc: 'راجع إجمالي الشهر وتوزيعه حسب الفئة في لوحة المتابعة، وابحث عن أي رقم غير معتاد.' },
          { title: 'قارن بين المركبات', desc: 'راجع التكلفة حسب المركبة لتعرف أي المركبات هي الأعلى تكلفة في التشغيل، ثم اسأل عن السبب.' },
          { title: 'قارن الإنفاق بالميزانية', desc: 'حدد ميزانية شهرية لكل فئة واطّلع على الإنفاق الفعلي مقارنة بها.', requires: 'budgets' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'إجماليات الشهر والتكاليف حسب الفئة في لمحة',
        image: 'dashboard',
        alt: 'لوحة متابعة أكسبنس تعرض إجمالي مصروفات الأسطول للشهر موزعة حسب الفئة مثل الإصلاحات وقطع الغيار والتأمين',
        caption: 'تجمع لوحة المتابعة المصروفات المسجلة حسب الفئة وحسب المركبة، دون جدول تحتاج إلى تحديثه.',
      },
      {
        kind: 'text',
        heading: 'مثال: ما الذي تكشفه تكلفة كل مركبة',
        body: `هذا مثال لشهر واحد لثلاث سيارات توزيع في أسطول صغير، والأرقام للتوضيح فقط.

| المركبة | الإصلاحات | قطع الغيار | التأمين | أخرى | الإجمالي (جنيه) |
|---|---|---|---|---|---|
| سيارة أ (2018) | 14,500 | 6,200 | 2,400 | 300 | 23,400 |
| سيارة ب (2021) | 1,200 | 2,100 | 2,900 | 0 | 6,200 |
| سيارة ج (2022) | 0 | 1,800 | 3,100 | 150 | 5,050 |

إجمالي الأسطول 34,650 جنيهًا يبدو رقمًا عاديًا. لكن النظرة لكل مركبة تحكي قصة مختلفة: أقدم سيارة مسؤولة عن نحو ثلثي إنفاق الشهر، ومعظمه إصلاحات. شهر واحد لا يثبت شيئًا، لكن إذا تكرر النمط نفسه طوال ربع سنة، فهذه حجة قوية لاستبدال السيارة. وتساعدك وحدة [الإهلاك ودورة الحياة](/features/asset-management) على مقارنة هذه التكلفة بالقيمة الدفترية المتبقية للمركبة.`,
      },
      {
        kind: 'text',
        heading: 'من يستفيد من سجل المصروفات',
        body: `- **مدير الأسطول** يسجل المصروفات ويراجع تكلفة كل مركبة ليكتشف المركبات التي بدأت تكلفتها في الارتفاع.
- **الإدارة المالية والمحاسبة** تحصل على إجماليات الشهر حسب الفئة دون مطاردة فريق التشغيل لإرسال جدول.
- **مديرو الفروع والمواقع** يعرفون تكلفة المركبات التي تحت مسؤوليتهم.
- **الإدارة العليا** تحصل على إجابة واضحة عن سؤال «كم يكلفنا الأسطول كل شهر؟».

ولحساب تكلفة الكيلومتر والتكلفة الإجمالية للملكية، وهي حسابات تُبنى على هذه السجلات، اطّلع على صفحة [إدارة تكاليف الأسطول](/fleet-cost-tracking) وأداة [حساب تكلفة الكيلومتر للسيارة](/resources/fleet-cost-calculator) المجانية.`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'Which expense categories can I record?', a: 'Repairs, spare parts, insurance, registration and an “other” category for costs that don’t fit elsewhere. Every expense is recorded against a specific vehicle.' },
      { q: 'Can I see the total cost of each vehicle?', a: 'Yes. Because every expense is linked to a vehicle, Axpense adds them up per vehicle and shows cost by vehicle on the dashboard, while each expense also appears in the vehicle’s history.' },
      { q: 'Can I see monthly fleet expenses by category?', a: 'Yes. The dashboard shows spend by category and the cost trend over time, so a rise in repair spending is visible early.' },
      { q: 'Should I keep paper receipts?', a: 'Yes, as good practice and for your accountant. We suggest filing receipts by month and plate number so each recorded expense can be matched to its original.' },
      { q: 'How is this different from our accounting system?', a: 'Your accounting system records what the company paid. Axpense records which vehicle the money went to and why, which is what you need to manage the fleet. Many teams use both.' },
      { q: 'Can I record fuel as an expense?', a: 'Yes. Fuel purchases can be recorded as expenses per vehicle, so fuel is included in each vehicle’s running cost. See [fuel expense tracking](/features/fuel-management).', requires: ['fuelAsExpense', 'fuelModule'] },
      { q: 'Can I set budgets for fleet expenses?', a: 'Yes. You can set budgets by category and compare them with actual spend each month.', requires: 'budgets' },
    ],
    ar: [
      { q: 'ما فئات المصروفات التي يمكنني تسجيلها؟', a: 'الإصلاحات وقطع الغيار والتأمين والترخيص، وفئة «أخرى» للتكاليف التي لا تندرج تحت ما سبق. ويُسجَّل كل مصروف على مركبة محددة.' },
      { q: 'هل أستطيع معرفة التكلفة الإجمالية لكل مركبة؟', a: 'نعم. لأن كل مصروف مرتبط بمركبة، يجمع أكسبنس المصروفات لكل مركبة ويعرض التكلفة حسب المركبة في لوحة المتابعة، كما يظهر كل مصروف في سجل المركبة.' },
      { q: 'هل أرى مصروفات الأسطول الشهرية حسب الفئة؟', a: 'نعم. تعرض لوحة المتابعة الإنفاق حسب الفئة واتجاه التكاليف بمرور الوقت، فيظهر أي ارتفاع في الإصلاحات مبكرًا.' },
      { q: 'هل أحتفظ بالإيصالات الورقية؟', a: 'نعم، كممارسة جيدة ومن أجل المحاسب. ننصح بحفظ الإيصالات حسب الشهر ورقم اللوحة لمطابقة كل مصروف مسجل مع أصله.' },
      { q: 'ما الفرق بين هذا والنظام المحاسبي؟', a: 'النظام المحاسبي يسجل ما دفعته الشركة. أما أكسبنس فيسجل المركبة التي ذهب إليها المال وسبب الإنفاق، وهذا ما تحتاجه لإدارة الأسطول. وكثير من الفرق تستخدم الاثنين.' },
      { q: 'هل يمكنني تسجيل الوقود كمصروف؟', a: 'نعم. يمكن تسجيل مشتريات الوقود كمصروفات لكل مركبة، ليدخل الوقود في تكلفة تشغيلها. اطّلع على [مصروفات الوقود](/features/fuel-management).', requires: ['fuelAsExpense', 'fuelModule'] },
      { q: 'هل يمكنني تحديد ميزانيات لمصروفات الأسطول؟', a: 'نعم. يمكنك تحديد ميزانية لكل فئة ومقارنتها بالإنفاق الفعلي كل شهر.', requires: 'budgets' },
    ],
  },
  relatedPages: ['/fleet-cost-tracking', '/features/asset-management', '/features/spare-parts', '/features/reports-analytics', '/resources/fleet-cost-calculator'],
  relatedIndustries: ['/industries/distribution', '/industries/logistics', '/industries/field-services', '/industries/construction'],
  relatedArticles: ['how-to-calculate-fleet-cost', 'vehicle-cost-per-km', 'fleet-total-cost-of-ownership'],
  parent: '/fleet-cost-tracking',
  schemaName: 'Axpense Fleet Expense Management',
};
