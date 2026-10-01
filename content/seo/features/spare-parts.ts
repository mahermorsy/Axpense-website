// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

export const SPARE_PARTS: SeoPage = {
  path: '/features/spare-parts',
  type: 'feature',
  updatedAt: '2026-09-29',
  primaryKeyword: { en: 'spare parts management for fleets', ar: 'إدارة قطع الغيار' },
  secondaryKeywords: {
    en: ['fleet spare parts tracking', 'vehicle parts lifecycle', 'parts installed per vehicle', 'spare parts cost per vehicle', 'fleet parts records'],
    ar: ['قطع غيار السيارات', 'تتبع قطع الغيار', 'دورة حياة قطع الغيار', 'تكلفة قطع الغيار لكل مركبة', 'سجل قطع الغيار'],
  },
  meta: {
    en: {
      title: 'Spare Parts Management for Fleets',
      description: 'Spare parts management for fleets: follow each part from purchase to installation, see which vehicle it went into and what it added to cost. Book a demo.',
    },
    ar: {
      title: 'إدارة قطع الغيار لأسطول المركبات',
      description: 'إدارة قطع الغيار من الشراء حتى التركيب: اعرف أي قطعة رُكّبت في أي مركبة وكم أضافت إلى تكلفتها، دون دفاتر المخزن المتفرقة. احجز عرضًا تجريبيًا الآن.',
    },
  },
  h1: { en: 'Spare Parts Management for Fleets, from Purchase to Installation', ar: 'إدارة قطع الغيار من الشراء حتى التركيب في المركبة' },
  navLabel: { en: 'Spare parts lifecycle', ar: 'دورة حياة قطع الغيار' },
  hero: {
    en: {
      badge: 'Spare parts',
      intro: 'Every part your fleet buys has a story: when it was bought, what it cost and which vehicle it ended up in. Axpense keeps that story, so the workshop, the store and finance all work from the same record.',
    },
    ar: {
      badge: 'قطع الغيار',
      intro: 'لكل قطعة يشتريها أسطولك قصة: متى اشتُريت، وكم كلّفت، وفي أي مركبة انتهى بها المطاف. يحتفظ أكسبنس بهذه القصة، فتعمل الورشة والمخزن والإدارة المالية من سجل واحد.',
    },
  },
  heroImage: 'maintenance',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'What is spare parts management for fleets?',
        body: `**Spare parts management for fleets is the practice of recording every part from the moment it is purchased to the moment it is installed in a vehicle, so you know where each part went and what it cost.** Without it, parts disappear into the workshop, invoices sit with purchasing, and nobody can say which truck received the new alternator.

For a fleet, parts are not just stock on a shelf. They are part of each vehicle’s cost and part of its maintenance history. That is the angle Axpense takes: the parts record connects purchasing to the vehicle.`,
      },
      {
        kind: 'text',
        heading: 'How the parts lifecycle works in Axpense',
        body: `Axpense tracks each part through two moments that matter: **purchase** and **installation**.

- **When a part is bought,** you record it with its purchase date and cost. From then on it is on record, even while it waits on the shelf.
- **When a part is installed,** you link it to the vehicle it went into. The part now appears in that vehicle’s history, next to the services and inspections around it.
- **Its cost moves with it.** Once installed, the part’s cost counts towards that vehicle’s total, so the vehicle’s running cost reflects what was actually spent on it.`,
      },
      {
        kind: 'steps',
        heading: 'From invoice to vehicle: the workflow',
        intro: 'The routine is short, and each step is done by the person who is already handling the part.',
        steps: [
          { title: 'Record the purchase', desc: 'When parts arrive, enter each one with its purchase date and cost.' },
          { title: 'Keep it on record until it is used', desc: 'Parts bought for later stay visible, so the workshop can see what is already available before ordering again.' },
          { title: 'Install and link to the vehicle', desc: 'When the mechanic fits the part, record the installation against the vehicle it went into.' },
          { title: 'Cost flows to the vehicle', desc: 'The part’s cost is added to that vehicle’s expenses, under the spare parts category.' },
          { title: 'Review in reports', desc: 'See parts spending per vehicle and across the fleet alongside every other cost category.' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'Parts spending next to every other cost',
        image: 'dashboard',
        alt: 'Axpense dashboard showing fleet costs broken down by category, with spare parts shown alongside repairs, insurance and other expenses',
        caption: 'Spare parts costs appear on the dashboard with the fleet’s other expense categories.',
      },
      {
        kind: 'text',
        heading: 'Why it matters which part went into which vehicle',
        body: `Knowing where each part was installed answers questions that come up every week in a busy workshop:

- **Repeat failures:** if the same vehicle needs a new part again soon after the last one, the history shows it and points to a deeper problem.
- **Warranty claims:** suppliers usually ask when and where a part was fitted. The installation record gives you the answer.
- **Quality of parts:** when one batch or brand keeps failing early, you can see which vehicles received it.`,
      },
      {
        kind: 'text',
        heading: 'Parts cost is part of the vehicle’s cost',
        body: `For example, a delivery van receives new brake pads worth 1,800 EGP and a battery worth 3,500 EGP in the same quarter. Both are installed and linked to the van, so its spare parts total for the quarter is 5,300 EGP, added to its repairs and other expenses.

That total feeds cost per km and replacement decisions. For the full picture of running costs, see [fleet expense management](/features/expense-management) and our [fleet cost tracking](/fleet-cost-tracking) page.`,
      },
      {
        kind: 'text',
        heading: 'Using the history to plan reorders',
        body: `Axpense gives you the history; the reorder decision stays with your team. A simple practice works well for most fleets: look at which parts were installed most often over the last few months, keep a small buffer of those on the shelf, and order slow-moving parts only when a job needs them.

Service reminders help too. When several vehicles of the same type are due for the same service, you know which filters and oils to have ready. Our guide to [fleet spare parts management](/blog/fleet-spare-parts-management) covers this in more depth.`,
      },
      {
        kind: 'cards',
        heading: 'Who uses the parts record',
        columns: 2,
        items: [
          { icon: 'wrench', title: 'Workshop supervisors', desc: 'Check what is already in stock and record each installation against the right vehicle.' },
          { icon: 'package', title: 'Storekeepers and purchasing', desc: 'Record purchases as they arrive and see what has been used before ordering more.' },
          { icon: 'truck', title: 'Fleet managers', desc: 'Spot vehicles that consume parts faster than the rest of the fleet.' },
          { icon: 'dollar', title: 'Finance', desc: 'Match parts invoices to vehicles and see parts spending per vehicle and category.' },
        ],
      },
      {
        kind: 'text',
        heading: 'Part of your maintenance system',
        body: `Spare parts sit between preventive maintenance and costs. They are one module of Axpense [fleet maintenance software](/fleet-maintenance-software), together with [km-based preventive maintenance](/features/preventive-maintenance), service history and inspections, so a part, the service it was fitted in and the vehicle it belongs to are always connected.`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'ما هي إدارة قطع الغيار للأسطول؟',
        body: `**إدارة قطع الغيار للأسطول هي تسجيل كل قطعة منذ لحظة شرائها حتى لحظة تركيبها في المركبة، لتعرف أين ذهبت كل قطعة وكم كلّفت.** وبدونها تختفي القطع داخل الورشة، وتبقى الفواتير لدى المشتريات، ولا يستطيع أحد أن يقول أي شاحنة حصلت على الدينامو الجديد.

قطع الغيار في الأسطول ليست مجرد مخزون على الرف. إنها جزء من تكلفة كل مركبة وجزء من سجل صيانتها. وهذه هي الزاوية التي يعمل منها أكسبنس: سجل القطع يربط المشتريات بالمركبة.`,
      },
      {
        kind: 'text',
        heading: 'كيف تعمل دورة حياة القطعة في أكسبنس',
        body: `يتابع أكسبنس كل قطعة في لحظتين مهمتين: **الشراء** و**التركيب**.

- **عند شراء القطعة** تسجّلها بتاريخ الشراء والتكلفة، فتصبح مسجلة حتى وهي تنتظر على الرف.
- **عند تركيب القطعة** تربطها بالمركبة التي رُكّبت فيها، فتظهر في سجل تلك المركبة بجوار الصيانات والفحوصات.
- **وتنتقل تكلفتها معها.** بعد التركيب تُحسب تكلفة القطعة ضمن إجمالي المركبة، فتعكس تكلفة التشغيل ما أُنفق عليها فعلًا.

ولأن الشراء والتركيب في سجل واحد، لا يوجد جدول ثانٍ تحتاج إلى مطابقته في نهاية الشهر.`,
      },
      {
        kind: 'steps',
        heading: 'من الفاتورة إلى المركبة: خطوات العمل',
        intro: 'الروتين قصير، وكل خطوة ينفذها الشخص الذي يتعامل مع القطعة أصلًا.',
        steps: [
          { title: 'سجّل الشراء', desc: 'عند وصول القطع، أدخل كل قطعة بتاريخ شرائها وتكلفتها.' },
          { title: 'تبقى مسجلة حتى الاستخدام', desc: 'القطع المشتراة للاستخدام لاحقًا تبقى ظاهرة، فترى الورشة المتاح قبل طلب المزيد.' },
          { title: 'ركّب القطعة واربطها بالمركبة', desc: 'عندما يركّب الفني القطعة، سجّل التركيب على المركبة التي رُكّبت فيها.' },
          { title: 'تنتقل التكلفة إلى المركبة', desc: 'تُضاف تكلفة القطعة إلى مصروفات تلك المركبة تحت فئة قطع الغيار.' },
          { title: 'راجع التقارير', desc: 'اطّلع على إنفاق قطع الغيار لكل مركبة وعلى مستوى الأسطول بجانب باقي فئات التكلفة.' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'إنفاق قطع الغيار بجانب باقي التكاليف',
        image: 'dashboard',
        alt: 'لوحة متابعة أكسبنس تعرض تكاليف الأسطول موزعة حسب الفئة، مع قطع الغيار بجانب الإصلاحات والتأمين وباقي المصروفات',
        caption: 'تظهر تكاليف قطع الغيار في لوحة المتابعة مع باقي فئات مصروفات الأسطول.',
      },
      {
        kind: 'text',
        heading: 'لماذا يهم أي قطعة رُكّبت في أي مركبة',
        body: `معرفة مكان تركيب كل قطعة تجيب عن أسئلة تتكرر كل أسبوع في الورشة:

- **الأعطال المتكررة:** إذا احتاجت المركبة نفسها قطعة جديدة بعد وقت قصير من سابقتها، يُظهر السجل ذلك ويشير إلى مشكلة أعمق.
- **مطالبات الضمان:** يسأل المورد عادةً متى وأين رُكّبت القطعة، وسجل التركيب يعطيك الإجابة.
- **جودة القطع:** عندما تتعطل دفعة أو ماركة معينة مبكرًا، ترى المركبات التي حصلت عليها.
- **تكلفة حقيقية للمركبة:** الشاحنة التي تستهلك الدبرياج باستمرار مكلفة في التشغيل، ويجب أن يُظهر سجلها ذلك.`,
      },
      {
        kind: 'text',
        heading: 'تكلفة القطعة جزء من تكلفة المركبة',
        body: `مثلًا، تحصل سيارة توزيع على تيل فرامل جديد بقيمة 1,800 جنيه وبطارية بقيمة 3,500 جنيه في الربع نفسه. تُركَّب القطعتان وتُربطان بالسيارة، فيصبح إجمالي قطع الغيار لها في الربع 5,300 جنيه، يُضاف إلى إصلاحاتها ومصروفاتها الأخرى.

هذا الإجمالي يغذي تكلفة الكيلومتر وقرارات الاستبدال. وللصورة الكاملة لتكاليف التشغيل، اطّلع على [إدارة مصروفات الأسطول](/features/expense-management) و[إدارة تكاليف الأسطول](/fleet-cost-tracking).`,
      },
      {
        kind: 'text',
        heading: 'استخدام السجل لتخطيط إعادة الطلب',
        body: `يعطيك أكسبنس السجل، ويبقى قرار إعادة الطلب لفريقك. وهناك ممارسة بسيطة تناسب معظم الأساطيل: راجع القطع الأكثر تركيبًا خلال الأشهر الماضية، واحتفظ بكمية احتياطية صغيرة منها، واطلب القطع بطيئة الحركة فقط عندما يحتاجها عمل محدد.

وتنبيهات الصيانة تساعد أيضًا: عندما تستحق عدة مركبات من النوع نفسه الصيانة ذاتها، تعرف أي الفلاتر والزيوت يجب تجهيزها.`,
      },
      {
        kind: 'cards',
        heading: 'من يستخدم سجل قطع الغيار',
        columns: 2,
        items: [
          { icon: 'wrench', title: 'مشرف الورشة', desc: 'يراجع المتاح ويسجّل كل تركيب على المركبة الصحيحة.' },
          { icon: 'package', title: 'أمين المخزن والمشتريات', desc: 'يسجّلون المشتريات عند وصولها ويرون ما استُخدم قبل طلب المزيد.' },
          { icon: 'truck', title: 'مدير الأسطول', desc: 'يكتشف المركبات التي تستهلك قطعًا أسرع من باقي الأسطول.' },
          { icon: 'dollar', title: 'الإدارة المالية', desc: 'تطابق فواتير القطع مع المركبات وترى إنفاق القطع لكل مركبة وفئة.' },
        ],
      },
      {
        kind: 'text',
        heading: 'جزء من نظام الصيانة لديك',
        body: `تقع قطع الغيار بين الصيانة الوقائية والتكاليف. وهي وحدة من وحدات [برنامج صيانة الأسطول](/fleet-maintenance-software) في أكسبنس، مع [الصيانة الوقائية حسب الكيلومترات](/features/preventive-maintenance) وسجل الصيانة والفحوصات، فتبقى القطعة والصيانة التي رُكّبت فيها والمركبة التي تخصها مترابطة دائمًا.`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'What does Axpense track for spare parts?', a: 'Each part from purchase to installation: when it was bought and at what cost, and which vehicle it was installed in. The installed part’s cost is counted in that vehicle’s expenses.' },
      { q: 'Can I see all the parts installed in one vehicle?', a: 'Yes. Installed parts appear in the vehicle’s history, so the workshop can check what was fitted before starting a new job.' },
      { q: 'Does Axpense reorder parts automatically?', a: 'No. Axpense keeps the purchase and installation history that shows which parts you use most. Many teams use that history to decide what to keep on the shelf and when to order.' },
      { q: 'How do spare parts affect the cost of a vehicle?', a: 'When a part is installed in a vehicle, its cost is added to that vehicle’s total under the spare parts category. That keeps cost per km and replacement decisions based on real spending.' },
      { q: 'Is this useful for a small fleet without a parts store?', a: 'Yes. Even if you buy parts only when a job needs them, recording each one against the vehicle keeps the history and the cost complete. See [how to calculate vehicle cost per km](/blog/vehicle-cost-per-km).' },
    ],
    ar: [
      { q: 'ماذا يتابع أكسبنس في قطع الغيار؟', a: 'كل قطعة من الشراء حتى التركيب: متى اشتُريت وبأي تكلفة، وفي أي مركبة رُكّبت. وتُحسب تكلفة القطعة المركّبة ضمن مصروفات تلك المركبة.' },
      { q: 'هل يمكنني رؤية كل القطع المركّبة في مركبة واحدة؟', a: 'نعم. تظهر القطع المركّبة في سجل المركبة، فتراجع الورشة ما رُكّب قبل بدء أي عمل جديد.' },
      { q: 'هل يعيد أكسبنس طلب القطع تلقائيًا؟', a: 'لا. يحتفظ أكسبنس بسجل الشراء والتركيب الذي يوضح أكثر القطع استخدامًا، وتستخدم فرق كثيرة هذا السجل لتقرر ما تحتفظ به على الرف ومتى تطلب.' },
      { q: 'كيف تؤثر قطع الغيار على تكلفة المركبة؟', a: 'عند تركيب قطعة في مركبة، تُضاف تكلفتها إلى إجمالي المركبة تحت فئة قطع الغيار، فتبقى تكلفة الكيلومتر وقرارات الاستبدال مبنية على الإنفاق الفعلي.' },
      { q: 'هل يفيد ذلك أسطولًا صغيرًا بلا مخزن قطع؟', a: 'نعم. حتى لو كنت تشتري القطع عند الحاجة فقط، فإن تسجيل كل قطعة على المركبة يُبقي السجل والتكلفة كاملين. اطّلع على [كيفية حساب تكلفة الكيلومتر](/blog/vehicle-cost-per-km).' },
    ],
  },
  relatedPages: ['/fleet-maintenance-software', '/features/preventive-maintenance', '/features/expense-management', '/features/vehicle-management', '/fleet-cost-tracking', '/resources/fleet-cost-calculator'],
  relatedIndustries: ['/industries/logistics', '/industries/construction', '/industries/oil-and-gas', '/industries/manufacturing'],
  relatedArticles: ['fleet-spare-parts-management', 'vehicle-cost-per-km', 'reduce-vehicle-downtime'],
  parent: '/fleet-maintenance-software',
  schemaName: 'Axpense Spare Parts Management',
};
