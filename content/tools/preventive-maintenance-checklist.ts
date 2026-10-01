// needs-native-review: Arabic written by Claude
import type { ToolPage } from '@/lib/seo-page';

export const PREVENTIVE_MAINTENANCE_CHECKLIST: ToolPage = {
  path: '/resources/preventive-maintenance-checklist',
  updatedAt: '2026-09-29',
  primaryKeyword: { en: 'fleet preventive maintenance checklist', ar: 'جدول الصيانة الدورية للسيارات' },
  meta: {
    en: {
      title: 'Fleet Preventive Maintenance Checklist',
      description: 'Free fleet preventive maintenance checklist with km-based service intervals for oil, filters, brakes, tyres and fluids. View it online or print the PDF.',
    },
    ar: {
      title: 'جدول الصيانة الدورية للسيارات حسب الكيلومتر',
      description: 'جدول الصيانة الدورية للسيارات مجانًا بفترات حسب الكيلومتر للزيت والفلاتر والفرامل والإطارات والسوائل، لتخطط صيانة أسطولك. اعرضه على الشاشة أو اطبعه PDF.',
    },
  },
  h1: { en: 'Fleet Preventive Maintenance Checklist by Kilometre', ar: 'جدول الصيانة الدورية للسيارات حسب الكيلومترات' },
  navLabel: { en: 'Fleet preventive maintenance checklist', ar: 'جدول الصيانة الدورية للسيارات' },
  hero: {
    en: {
      badge: 'Free checklist',
      intro: 'A km-based service table for light commercial vehicles: what to check or replace, and at roughly what distance. Use it to plan services for your vans, pickups and company cars, or print the PDF for your workshop. The intervals are typical examples; your manufacturer’s schedule always comes first.',
    },
    ar: {
      badge: 'جدول مجاني',
      intro: 'جدول صيانة مبني على الكيلومترات للمركبات التجارية الخفيفة: ما الذي يُفحص أو يُغيَّر، وعلى أي مسافة تقريبًا. استخدمه لتخطيط صيانة الفانات ومركبات النصف نقل وسيارات الشركة، أو اطبع ملف PDF للورشة. الفترات المذكورة أمثلة شائعة، ويبقى جدول الشركة المصنعة هو المرجع الأول.',
    },
  },
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'What this checklist is',
        body: `**A fleet preventive maintenance checklist lists the service items each vehicle needs and the distance at which each one is due, so services are planned before parts wear out rather than after they fail.** The table above covers the items that matter most for light commercial vehicles: engine oil and filters, tyres and alignment, brakes, fluids, battery, belts, suspension and air conditioning.

Intervals are in kilometres because distance, not the calendar, is what wears a vehicle. Two identical vans bought on the same day can be 30,000 km apart after a year, and they should not be serviced on the same date. For the reasoning behind this approach, read our guide to [km-based preventive maintenance](/blog/km-based-preventive-maintenance).`,
      },
      {
        kind: 'text',
        heading: 'How to use the km intervals',
        body: `Start with the vehicle’s owner’s manual or service book. **Always follow the manufacturer’s schedule** where it differs from this table; the ranges here are general examples to help you plan and to fill gaps when the manual is missing.

Then decide whether your vehicles run in normal or severe conditions. Most manufacturers publish a separate, shorter "severe duty" schedule. In Egypt, Saudi Arabia and the Gulf, many fleets qualify for it:

- **Heat:** long periods above 40 °C strain oil, coolant, batteries and air conditioning.
- **Dust and sand:** air filters clog faster, and dust reaches brakes and suspension.
- **Stop-start driving:** city deliveries with many short trips and long idling wear oil and brakes faster than highway kilometres.
- **Heavy loads:** vehicles that regularly carry close to their maximum payload wear brakes, tyres and suspension faster.

If any of these apply, use the short end of each range, or the manufacturer’s severe-duty intervals.`,
      },
      {
        kind: 'text',
        heading: 'Adapting the checklist to each vehicle type',
        body: `### Light vans and company cars
The table fits these vehicles closely. Focus on oil, tyres and brakes, which wear fastest on urban delivery routes.

### Pickups
Pickups on site work or rough roads need more frequent suspension, steering and alignment checks, and air filter checks on dusty sites. Four-wheel-drive models add transfer case and differential oil to the list.

### Trucks
Medium and heavy trucks have their own schedules, often with longer oil intervals but many more items: air brakes, fifth wheel, greasing points and diesel fuel filters. Use the table as a reminder of categories, and take intervals from the truck manufacturer.`,
      },
      {
        kind: 'text',
        heading: 'Record odometer readings, or the schedule won’t work',
        body: `A km-based schedule is only as reliable as the odometer readings behind it. Record each vehicle’s reading at least weekly, and every time it is serviced, inspected or refuelled if you can. Write the reading on each service invoice as well, so the next due point can be worked out from the last service rather than guessed.

For vehicles that drive long distances every day, a weekly reading can already be a service interval apart, so read them more often.`,
      },
      {
        kind: 'text',
        heading: 'Let Axpense track the kilometres left to each service',
        body: `Keeping this table in a spreadsheet means someone has to compare every odometer reading against every interval by hand. In Axpense you set the service intervals in kilometres for each vehicle. As odometer readings are recorded, Axpense shows the kilometres left until each service, sends reminders as it gets close and flags services that are overdue. The completed service is stored in the vehicle’s service history, and the next due point is calculated from it.

See how it works in our [fleet maintenance software](/fleet-maintenance-software) and the [preventive maintenance module](/features/preventive-maintenance).`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'ما هذا الجدول؟',
        body: `**جدول الصيانة الدورية يحدد بنود الخدمة التي تحتاجها كل مركبة والمسافة التي يحين عندها موعد كل بند، لتُخطَّط الصيانة قبل أن تتآكل القطع لا بعد أن تتعطل.** ويغطي الجدول أعلاه أهم البنود للمركبات التجارية الخفيفة: زيت المحرك والفلاتر، والإطارات وضبط الزوايا، والفرامل، والسوائل، والبطارية، والسيور، ونظام التعليق، والتكييف.

الفترات محسوبة بالكيلومتر لأن المسافة وليس التقويم هي ما يستهلك المركبة. فقد يفصل بين سيارتين متطابقتين اشتُريتا في اليوم نفسه 30,000 كم بعد عام واحد، ولا يصح أن تُصانا في التاريخ نفسه. ولمعرفة المنطق وراء ذلك اقرأ دليل [الصيانة الوقائية حسب الكيلومترات](/blog/km-based-preventive-maintenance).`,
      },
      {
        kind: 'text',
        heading: 'كيف تستخدم فترات الكيلومترات؟',
        body: `ابدأ بدليل المالك أو كتيب الصيانة. **التزم دائمًا بجدول الشركة المصنعة** إذا اختلف عن هذا الجدول؛ فالفترات هنا أمثلة عامة تساعدك على التخطيط وسد الفراغ عند غياب الدليل.

ثم حدد هل تعمل مركباتك في ظروف عادية أم قاسية. معظم المصنّعين ينشرون جدولًا أقصر للظروف القاسية، وكثير من الأساطيل في مصر والسعودية والخليج ينطبق عليها ذلك:

- **الحرارة:** العمل لفترات طويلة فوق 40 درجة يُجهد الزيت وسائل التبريد والبطارية والتكييف.
- **الأتربة والرمال:** تنسد فلاتر الهواء أسرع، ويصل الغبار إلى الفرامل ونظام التعليق.
- **القيادة المتقطعة:** التوزيع داخل المدن برحلات قصيرة كثيرة ووقوف طويل يستهلك الزيت والفرامل أسرع من كيلومترات الطرق السريعة.
- **الأحمال الثقيلة:** المركبات المحملة قرب حدها الأقصى تستهلك الفرامل والإطارات والتعليق أسرع.

إذا انطبق أي من ذلك، فاعتمد الحد الأقصر من كل فترة أو فترات الظروف القاسية لدى المصنّع.`,
      },
      {
        kind: 'text',
        heading: 'تكييف الجدول حسب نوع المركبة',
        body: `### الفانات وسيارات الشركة
يناسبها الجدول إلى حد كبير. ركّز على الزيت والإطارات والفرامل، فهي الأسرع تآكلًا في مسارات التوزيع داخل المدن.

### مركبات النصف نقل (البيك أب)
تحتاج مركبات المواقع والطرق الوعرة إلى فحص أكثر تكرارًا للتعليق والتوجيه وضبط الزوايا وفلتر الهواء. وتضيف طرازات الدفع الرباعي زيت علبة التحويل والدفرنس.

### الشاحنات
للشاحنات المتوسطة والثقيلة جداولها الخاصة، وتشمل بنودًا أكثر كفرامل الهواء ونقاط التشحيم وفلاتر الديزل. استخدم الجدول تذكيرًا بالفئات، وخذ الفترات من الشركة المصنعة.`,
      },
      {
        kind: 'text',
        heading: 'سجّل قراءات العداد وإلا فلن يعمل الجدول',
        body: `دقة جدول الصيانة حسب الكيلومتر من دقة قراءات العداد. سجّل قراءة كل مركبة أسبوعيًا على الأقل، وعند كل صيانة أو فحص. واكتب القراءة على فاتورة كل صيانة، ليُحسب الموعد التالي من آخر صيانة فعلية لا بالتخمين.

أما المركبات التي تقطع مسافات طويلة يوميًا، فقد تساوي القراءة الأسبوعية فترة صيانة كاملة، لذا سجّلها أكثر.`,
      },
      {
        kind: 'text',
        heading: 'دع أكسبنس يحسب الكيلومترات المتبقية لكل صيانة',
        body: `الاحتفاظ بهذا الجدول في Excel يعني أن شخصًا ما عليه مقارنة كل قراءة عداد بكل فترة يدويًا. في أكسبنس تحدد فترات الصيانة بالكيلومتر لكل مركبة، ومع تسجيل قراءات العداد يعرض البرنامج الكيلومترات المتبقية حتى كل صيانة، ويرسل تذكيرًا عند اقترابها، وينبّه إلى الصيانة المتأخرة. وتُحفظ الصيانة المنجزة في سجل المركبة ويُحسب الموعد التالي منها.

تعرّف على التفاصيل في [برنامج صيانة الأسطول](/fleet-maintenance-software) و[وحدة الصيانة الوقائية](/features/preventive-maintenance).`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'How often should fleet vehicles be serviced?', a: 'For most light commercial vehicles, an oil service every 5,000–10,000 km is a common example, with other items at multiples of that distance. The right interval depends on the manufacturer’s schedule, the oil used and how hard the vehicle works.' },
      { q: 'Should I service by kilometres or by date?', a: 'By kilometres first, with a date limit as a backup for vehicles that drive very little. Oil and brake fluid, for example, age even when a vehicle stands still, so manufacturers usually say "every X km or Y months, whichever comes first".' },
      { q: 'What counts as severe driving conditions?', a: 'High temperatures, dust and sand, frequent short trips, long idling and heavy loads. Many fleets in the Middle East meet at least one of these, so check whether your manufacturer’s severe-duty schedule applies.' },
      { q: 'Can I use this table for heavy trucks?', a: 'Only as a list of categories. Heavy trucks have different components and longer or shorter intervals depending on the item, so take the intervals from the truck manufacturer.' },
      { q: 'What is the difference between preventive and reactive maintenance?', a: 'Preventive maintenance services a vehicle before something fails; reactive maintenance repairs it after a breakdown. Our article on [preventive vs reactive maintenance](/blog/preventive-vs-reactive-maintenance) compares the two in detail.' },
    ],
    ar: [
      { q: 'كل كم تحتاج مركبات الأسطول إلى صيانة؟', a: 'في أغلب المركبات التجارية الخفيفة، يُعد تغيير الزيت كل 5,000–10,000 كم مثالًا شائعًا، وتأتي البنود الأخرى على مضاعفات هذه المسافة. والفترة الصحيحة تتوقف على جدول الشركة المصنعة ونوع الزيت وظروف عمل المركبة.' },
      { q: 'هل أعتمد الكيلومترات أم التاريخ؟', a: 'الكيلومترات أولًا، مع حد زمني احتياطي للمركبات قليلة الاستخدام؛ فالزيت وزيت الفرامل يتقادمان حتى لو كانت المركبة متوقفة، ولذلك يكتب المصنّعون عادة: كل كذا كم أو كذا شهر أيهما أسبق.' },
      { q: 'ما المقصود بظروف التشغيل القاسية؟', a: 'الحرارة المرتفعة، والأتربة والرمال، والرحلات القصيرة المتكررة، والوقوف الطويل والمحرك يعمل، والأحمال الثقيلة. وكثير من الأساطيل في المنطقة تنطبق عليها حالة واحدة على الأقل.' },
      { q: 'هل يصلح الجدول للشاحنات الثقيلة؟', a: 'كقائمة بالفئات فقط؛ فللشاحنات الثقيلة مكونات مختلفة وفترات أطول أو أقصر حسب البند، لذا خذ الفترات من الشركة المصنعة.' },
      { q: 'ما الفرق بين الصيانة الوقائية والصيانة بعد العطل؟', a: 'الصيانة الوقائية تُجرى قبل حدوث العطل، أما الصيانة التفاعلية فتُجرى بعده. ويقارن مقالنا عن [الصيانة الوقائية مقابل التفاعلية](/blog/preventive-vs-reactive-maintenance) بين الأسلوبين بالتفصيل.' },
    ],
  },
  relatedPages: ['/fleet-maintenance-software', '/features/preventive-maintenance', '/features/spare-parts'],
  relatedArticles: ['km-based-preventive-maintenance', 'preventive-vs-reactive-maintenance', 'reduce-vehicle-downtime'],
  schemaName: { en: 'Axpense Fleet Preventive Maintenance Checklist', ar: 'جدول الصيانة الدورية للسيارات من أكسبنس' },
};
