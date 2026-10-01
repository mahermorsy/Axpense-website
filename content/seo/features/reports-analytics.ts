// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const REPORTS_ANALYTICS: SeoPage = {
  path: '/features/reports-analytics',
  type: 'feature',
  updatedAt: '2026-09-29',
  primaryKeyword: { en: 'fleet reporting software', ar: 'تقارير الأسطول' },
  secondaryKeywords: {
    en: ['fleet dashboard', 'fleet KPIs', 'fleet maintenance report', 'fleet cost report'],
    ar: ['لوحة متابعة الأسطول', 'مؤشرات أداء الأسطول', 'تقرير صيانة السيارات', 'تقرير تكاليف الأسطول'],
  },
  meta: {
    en: {
      title: 'Fleet Reporting Software and Dashboards',
      description: 'Fleet reporting software with dashboards for services due and overdue, cost by vehicle and category, and cost trends. No spreadsheets. Book a demo.',
    },
    ar: {
      title: 'تقارير الأسطول ولوحات المتابعة',
      description: 'تقارير الأسطول ولوحات متابعة تعرض الصيانة المستحقة والمتأخرة حسب الكيلومترات والتكاليف لكل مركبة وفئة واتجاهها، دون أي جداول. احجز عرضًا تجريبيًا.',
    },
  },
  h1: { en: 'Fleet Reporting Software: Maintenance and Cost Dashboards Without Spreadsheets', ar: 'تقارير الأسطول ولوحات متابعة الصيانة والتكاليف دون جداول إكسل' },
  navLabel: { en: 'Reports and dashboards', ar: 'التقارير ولوحات المتابعة' },
  hero: {
    en: {
      badge: 'Reports and dashboards',
      intro: 'Axpense turns the records your team already keeps, services, inspections and expenses, into dashboards that show what is due, what is overdue and where the money goes. Nobody has to build the report at month-end, because it is already there.',
    },
    ar: {
      badge: 'التقارير ولوحات المتابعة',
      intro: 'يحوّل أكسبنس السجلات التي يحتفظ بها فريقك أصلًا، من صيانة وفحوصات ومصروفات، إلى لوحات متابعة توضح ما المستحق وما المتأخر وأين تذهب الأموال. لا أحد يحتاج إلى إعداد التقرير في آخر الشهر، لأنه جاهز بالفعل.',
    },
  },
  heroImage: 'dashboard',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'What is fleet reporting software?',
        body: `**Fleet reporting software turns day-to-day fleet records into dashboards and reports that show the state of the fleet and what it costs.** It answers the questions management asks every month without someone spending a day copying numbers between spreadsheets.

The quality of a fleet report depends on the records behind it. In Axpense, reports are built from the same vehicle records the team uses every day, so they are only as old as the last service or expense someone entered.`,
      },
      {
        kind: 'cards',
        heading: 'The reports and dashboards in Axpense',
        intro: 'Each view answers one question a fleet manager is regularly asked.',
        columns: 2,
        items: [
          { icon: 'gauge', title: 'Maintenance status', desc: 'Services due soon and overdue, calculated from each vehicle’s kilometres and its service intervals. The first place to look every morning.' },
          { icon: 'dollar', title: 'Cost by vehicle', desc: 'What each vehicle has cost, from the expenses recorded against it. Shows at once which vehicles are the most expensive to run.' },
          { icon: 'layers', title: 'Cost by category', desc: 'Spend split into repairs, spare parts, insurance, registration and other, so you can see where the money actually goes.' },
          { icon: 'trending', title: 'Cost trend', desc: 'How fleet spend moves month to month, so a steady rise in repair costs is visible before the year-end review.' },
          { icon: 'truck', title: 'Fleet overview', desc: 'The whole fleet at a glance: vehicles, their status and the headline numbers management asks for first.' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'One dashboard for maintenance and costs',
        image: 'dashboard',
        alt: 'Axpense fleet dashboard showing services due and overdue by kilometre, costs by category and the monthly cost trend',
        caption: 'The dashboard combines maintenance status and cost figures, updated from the records your team enters.',
      },
      {
        kind: 'text',
        heading: 'How the numbers get there',
        body: `There is no separate reporting data to prepare. Every figure comes from something recorded in daily work:

- A vehicle’s **odometer reading** and its **service intervals in kilometres** drive the due and overdue list. See [preventive maintenance](/features/preventive-maintenance) for how intervals are set.
- Every **expense** recorded on a vehicle, in its category, feeds cost by vehicle, cost by category and the trend. See [expense management](/features/expense-management).
- The **vehicle registry** provides the fleet overview.

Because the data is shared, the maintenance view and the cost view always refer to the same vehicles, which is rarely true when each lives in a separate spreadsheet.`,
      },
      {
        kind: 'steps',
        heading: 'A 20-minute monthly fleet review',
        intro: 'A simple routine many fleet managers follow with the dashboard open.',
        steps: [
          { title: 'Clear the overdue list', desc: 'Start with services overdue by kilometre. Each one is a vehicle running past its interval and should be booked this week.' },
          { title: 'Look ahead at services due', desc: 'Check which vehicles will reach their interval soon and plan workshop time so several don’t land on the same day.' },
          { title: 'Check this month’s spend by category', desc: 'Compare with last month. A jump in repairs is worth a question; a jump in spare parts may simply be a round of tyres.' },
          { title: 'Find the top-cost vehicles', desc: 'Look at cost by vehicle and note the three most expensive. If the same vehicles appear month after month, review them for replacement.' },
          { title: 'Share the headline numbers', desc: 'Give management the fleet total, the overdue count and the top-cost vehicles, with the reason behind each.' },
        ],
      },
      {
        kind: 'text',
        heading: 'KPIs worth tracking from your dashboard',
        body: `These are practical measures you can read from Axpense or work out from its figures. Pick a few and track them every month:

| KPI | Why it matters |
|---|---|
| Services overdue | Every overdue service is a risk of breakdown and extra wear. The target is zero. |
| Monthly cost per vehicle | Fleet spend ÷ number of vehicles. Useful for budgeting and comparing branches. |
| Repairs as a share of total cost | A rising share usually means an ageing fleet or maintenance being skipped. |
| Top-cost vehicles | The same names every month point to replacement candidates. |
| Cost per km | Total cost ÷ km driven. Use our [fleet cost per km calculator](/resources/fleet-cost-calculator). |

Keep the list short. Three numbers reviewed every month do more than twenty that nobody reads.`,
      },
      {
        kind: 'text',
        heading: 'Who uses fleet reports',
        body: `- **Fleet and operations managers** use the maintenance status daily and the cost views monthly.
- **Finance teams** use cost by category and the trend for month-end and budgeting.
- **General managers and owners** use the fleet overview to understand the fleet in a few minutes.
- **Workshop supervisors** use the due list to plan their week.

Reporting is one part of running a fleet well. For the full picture of vehicles, drivers, maintenance and costs working together, see our [fleet management software](/fleet-management-software) page.`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'ما هي تقارير الأسطول؟',
        body: `**تقارير الأسطول هي لوحات متابعة وتقارير تحوّل سجلات العمل اليومي إلى صورة واضحة لحالة الأسطول وتكلفته.** وهي تجيب عن الأسئلة التي تطرحها الإدارة كل شهر دون أن يقضي أحد يومًا كاملًا في نقل الأرقام بين الجداول.

جودة أي تقرير تعتمد على السجلات التي خلفه. وفي أكسبنس، تُبنى التقارير من سجلات المركبات نفسها التي يستخدمها الفريق يوميًا، فلا تكون أقدم من آخر صيانة أو مصروف أدخله أحد.`,
      },
      {
        kind: 'cards',
        heading: 'التقارير ولوحات المتابعة في أكسبنس',
        intro: 'كل عرض يجيب عن سؤال يُطرح على مدير الأسطول باستمرار.',
        columns: 2,
        items: [
          { icon: 'gauge', title: 'حالة الصيانة', desc: 'الصيانة المستحقة قريبًا والمتأخرة، محسوبة من كيلومترات كل مركبة وفترات صيانتها. أول ما تنظر إليه كل صباح.' },
          { icon: 'dollar', title: 'التكلفة حسب المركبة', desc: 'كم كلّفت كل مركبة من واقع المصروفات المسجلة عليها، فتعرف فورًا أي المركبات هي الأعلى تكلفة في التشغيل.' },
          { icon: 'layers', title: 'التكلفة حسب الفئة', desc: 'الإنفاق موزعًا على الإصلاحات وقطع الغيار والتأمين والترخيص وغيرها، لترى أين يذهب المال فعلًا.' },
          { icon: 'trending', title: 'اتجاه التكاليف', desc: 'كيف يتغير إنفاق الأسطول من شهر لآخر، فيظهر الارتفاع التدريجي في الإصلاحات قبل مراجعة نهاية العام.' },
          { icon: 'truck', title: 'نظرة عامة على الأسطول', desc: 'الأسطول كله في لمحة: المركبات وحالتها والأرقام الرئيسية التي تسأل عنها الإدارة أولًا.' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'لوحة واحدة للصيانة والتكاليف',
        image: 'dashboard',
        alt: 'لوحة متابعة الأسطول في أكسبنس تعرض الصيانة المستحقة والمتأخرة حسب الكيلومترات والتكاليف حسب الفئة واتجاه التكاليف الشهري',
        caption: 'تجمع اللوحة حالة الصيانة وأرقام التكاليف، وتتحدث من السجلات التي يدخلها فريقك.',
      },
      {
        kind: 'text',
        heading: 'من أين تأتي الأرقام',
        body: `لا توجد بيانات منفصلة تحتاج إلى تجهيز للتقارير. كل رقم يأتي من شيء سُجّل في العمل اليومي:

- **قراءة عداد المركبة** و**فترات الصيانة بالكيلومتر** تحدد قائمة الصيانة المستحقة والمتأخرة. اطّلع على [الصيانة الوقائية](/features/preventive-maintenance) لمعرفة طريقة ضبط الفترات.
- كل **مصروف** مسجل على مركبة في فئته يغذي التكلفة حسب المركبة وحسب الفئة واتجاه التكاليف. اطّلع على [إدارة المصروفات](/features/expense-management).
- **سجل المركبات** يوفر النظرة العامة على الأسطول.

ولأن البيانات مشتركة، يشير عرض الصيانة وعرض التكاليف دائمًا إلى المركبات نفسها، وهو أمر نادرًا ما يتحقق حين يعيش كل منهما في جدول منفصل.`,
      },
      {
        kind: 'steps',
        heading: 'مراجعة شهرية للأسطول في 20 دقيقة',
        intro: 'روتين بسيط يتبعه كثير من مديري الأساطيل ولوحة المتابعة مفتوحة أمامهم.',
        steps: [
          { title: 'أنهِ قائمة الصيانة المتأخرة', desc: 'ابدأ بالصيانة المتأخرة حسب الكيلومترات. كل واحدة منها مركبة تعمل بعد تجاوز موعدها، ويجب حجزها هذا الأسبوع.' },
          { title: 'انظر إلى الصيانة المستحقة قريبًا', desc: 'اعرف أي المركبات ستصل إلى موعدها قريبًا، ونظّم وقت الورشة حتى لا تأتي عدة مركبات في اليوم نفسه.' },
          { title: 'راجع إنفاق الشهر حسب الفئة', desc: 'قارنه بالشهر الماضي. قفزة في الإصلاحات تستحق السؤال، أما قفزة في قطع الغيار فقد تكون مجرد تغيير إطارات.' },
          { title: 'حدد المركبات الأعلى تكلفة', desc: 'راجع التكلفة حسب المركبة وسجّل أعلى ثلاث. إذا تكررت الأسماء نفسها كل شهر، فراجعها للاستبدال.' },
          { title: 'شارك الأرقام الرئيسية', desc: 'قدّم للإدارة إجمالي الأسطول وعدد الصيانات المتأخرة والمركبات الأعلى تكلفة، مع سبب كل منها.' },
        ],
      },
      {
        kind: 'text',
        heading: 'مؤشرات تستحق المتابعة من لوحتك',
        body: `هذه مقاييس عملية يمكنك قراءتها من أكسبنس أو حسابها من أرقامه. اختر بعضها وتابعها كل شهر:

| المؤشر | لماذا يهم |
|---|---|
| عدد الصيانات المتأخرة | كل صيانة متأخرة تعني خطر عطل وتآكلًا إضافيًا. والهدف صفر. |
| التكلفة الشهرية لكل مركبة | إنفاق الأسطول ÷ عدد المركبات. مفيد للميزانية وللمقارنة بين الفروع. |
| نسبة الإصلاحات من إجمالي التكلفة | ارتفاع النسبة يعني غالبًا أسطولًا يتقدم في العمر أو صيانة يجري تجاهلها. |
| المركبات الأعلى تكلفة | تكرار الأسماء نفسها كل شهر يشير إلى مرشحين للاستبدال. |
| تكلفة الكيلومتر | إجمالي التكلفة ÷ الكيلومترات المقطوعة. استخدم أداة [حساب تكلفة الكيلومتر للسيارة](/resources/fleet-cost-calculator). |

اجعل القائمة قصيرة. ثلاثة أرقام تُراجع كل شهر أنفع من عشرين رقمًا لا يقرؤها أحد.`,
      },
      {
        kind: 'text',
        heading: 'من يستخدم تقارير الأسطول',
        body: `- **مديرو الأسطول والتشغيل** يستخدمون حالة الصيانة يوميًا وعروض التكاليف شهريًا.
- **الإدارة المالية** تستخدم التكلفة حسب الفئة واتجاه التكاليف لإقفال الشهر وإعداد الميزانيات.
- **المديرون العامون وأصحاب الشركات** يستخدمون النظرة العامة لفهم وضع الأسطول في دقائق.
- **مشرفو الورش** يستخدمون قائمة الصيانة المستحقة لتخطيط أسبوعهم.

التقارير جزء واحد من إدارة الأسطول بشكل جيد. وللصورة الكاملة التي تعمل فيها المركبات والسائقون والصيانة والتكاليف معًا، اطّلع على [برنامج إدارة الأسطول](/fleet-management-software).`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'What reports does Axpense include?', a: 'Maintenance status (services due and overdue by kilometre), cost by vehicle, cost by category, the cost trend over time and a fleet overview, all on the dashboard.' },
      { q: 'Do I need to prepare data for the reports?', a: 'No. Reports are built from the vehicles, services and expenses your team records in daily work, so they stay current without a separate reporting step.' },
      { q: 'How does Axpense know which services are overdue?', a: 'Each vehicle has service intervals in kilometres and an odometer reading. When the distance since the last service passes the interval, the service shows as overdue.' },
      { q: 'Which KPIs should a fleet manager track?', a: 'Start with services overdue, monthly cost per vehicle, repairs as a share of total cost and the top-cost vehicles. Add cost per km once your odometer readings are reliable.' },
      { q: 'Can finance use these reports for month-end?', a: 'Yes. Cost by category and the monthly trend give finance a vehicle-level view of spend that complements the accounting system.' },
    ],
    ar: [
      { q: 'ما التقارير الموجودة في أكسبنس؟', a: 'حالة الصيانة (المستحقة والمتأخرة حسب الكيلومترات)، والتكلفة حسب المركبة، والتكلفة حسب الفئة، واتجاه التكاليف بمرور الوقت، ونظرة عامة على الأسطول، وكلها في لوحة المتابعة.' },
      { q: 'هل أحتاج إلى تجهيز بيانات للتقارير؟', a: 'لا. تُبنى التقارير من المركبات والصيانة والمصروفات التي يسجلها فريقك في العمل اليومي، فتبقى محدّثة دون خطوة منفصلة لإعداد التقارير.' },
      { q: 'كيف يعرف أكسبنس أي صيانة متأخرة؟', a: 'لكل مركبة فترات صيانة بالكيلومتر وقراءة عداد. وعندما تتجاوز المسافة منذ آخر صيانة الفترة المحددة، تظهر الصيانة كمتأخرة.' },
      { q: 'ما المؤشرات التي يجب أن يتابعها مدير الأسطول؟', a: 'ابدأ بعدد الصيانات المتأخرة، والتكلفة الشهرية لكل مركبة، ونسبة الإصلاحات من إجمالي التكلفة، والمركبات الأعلى تكلفة. وأضف تكلفة الكيلومتر حين تصبح قراءات العداد موثوقة.' },
      { q: 'هل تستفيد الإدارة المالية من هذه التقارير في إقفال الشهر؟', a: 'نعم. التكلفة حسب الفئة واتجاه التكاليف الشهري يمنحان الإدارة المالية صورة للإنفاق على مستوى المركبة تكمّل النظام المحاسبي.' },
    ],
  },
  relatedPages: ['/fleet-management-software', '/fleet-cost-tracking', '/features/preventive-maintenance', '/features/expense-management', '/resources/fleet-cost-calculator'],
  relatedIndustries: ['/industries/logistics', '/industries/distribution', '/industries/manufacturing', '/industries/field-services'],
  relatedArticles: ['fleet-management-excel-vs-software', 'how-to-calculate-fleet-cost', 'vehicle-cost-per-km'],
  parent: '/fleet-management-software',
  schemaName: 'Axpense Fleet Reports',
};
