// needs-native-review: Arabic written by Claude
import type { SeoPage } from '@/lib/seo-page';

// Whole page is gated on fuelModule: noindex, out of the sitemap and unlinked until the capability is confirmed.
export const FUEL_MANAGEMENT: SeoPage = {
  path: '/features/fuel-management',
  type: 'feature',
  updatedAt: '2026-09-29',
  requires: ['fuelModule'],
  primaryKeyword: { en: 'fuel expense tracking', ar: 'مصروفات الوقود' },
  secondaryKeywords: {
    en: ['fuel cost per km', 'fleet fuel consumption', 'fuel log per vehicle', 'abnormal fuel consumption'],
    ar: ['استهلاك الوقود', 'تكلفة الوقود للسيارة', 'سجل تموين السيارات', 'استهلاك البنزين والسولار'],
  },
  meta: {
    en: {
      title: 'Fuel Expense Tracking for Every Vehicle',
      description: 'Fuel expense tracking per vehicle, with fuel cost per km and consumption you can compare across the fleet to spot problems early. Book a demo today.',
    },
    ar: {
      title: 'مصروفات الوقود لكل مركبة في الأسطول',
      description: 'سجّل مصروفات الوقود لكل مركبة، واعرف تكلفة الوقود للكيلومتر ومعدل الاستهلاك لتقارن بين السيارات وتكتشف أي استهلاك غير طبيعي مبكرًا. احجز عرضًا تجريبيًا.',
    },
  },
  h1: { en: 'Fuel Expense Tracking for Every Vehicle in Your Fleet', ar: 'مصروفات الوقود لكل سيارة في أسطولك، بالكيلومتر واللتر' },
  navLabel: { en: 'Fuel expense tracking', ar: 'مصروفات الوقود' },
  hero: {
    en: {
      badge: 'Fuel expenses',
      intro: 'Fuel is usually the largest running cost a fleet has, and the hardest to see clearly. Record each fill-up against the vehicle it went into, with litres, amount and odometer reading, and Axpense shows what fuel costs per vehicle and per kilometre.',
    },
    ar: {
      badge: 'مصروفات الوقود',
      intro: 'الوقود غالبًا أكبر تكلفة تشغيل في أي أسطول، وأصعبها في المتابعة. سجّل كل تموين على السيارة التي تلقّته، بعدد اللترات والمبلغ وقراءة العداد، ويعرض لك أكسبنس تكلفة الوقود لكل سيارة ولكل كيلومتر.',
    },
  },
  heroImage: 'vehicles',
  sections: {
    en: [
      {
        kind: 'text',
        heading: 'What is fuel expense tracking?',
        body: `**Fuel expense tracking means recording every fuel purchase against the vehicle that received it, so fuel cost can be measured per vehicle and per kilometre.** A monthly fuel total tells you how much the company paid; per-vehicle records tell you which vehicles are using more than they should.

Many companies pay for fuel through cash advances, station accounts or reimbursed receipts. The money is accounted for, but it is rarely tied to a vehicle and an odometer reading. Without those two facts you cannot calculate consumption, and without consumption you cannot tell normal use from waste.`,
      },
      {
        kind: 'text',
        heading: 'How fuel records work in Axpense',
        body: `Each fuel entry is recorded on a vehicle with the **date**, **litres**, **amount paid** and the **odometer reading** at the fill-up. From those entries Axpense can show:

- **Fuel spend per vehicle** for any month, next to that vehicle’s maintenance and other costs.
- **Fuel cost per km**, from the amount spent and the kilometres driven between readings.
- **Consumption**, in litres per 100 km, so similar vehicles can be compared fairly.

Fuel entries sit on the same vehicle record as services and [expenses](/features/expense-management), so a vehicle’s full running cost is in one place. Entries are recorded by your team; Axpense does not connect to fuel cards or vehicle sensors.`,
      },
      {
        kind: 'formula',
        heading: 'Two formulas every fleet should use',
        formulas: [
          { label: 'Fuel cost per km', expression: 'Fuel spend for the period ÷ km driven in the period' },
          { label: 'Consumption (L/100 km)', expression: '(Litres used ÷ km driven) × 100' },
        ],
        example: {
          title: 'Example: two identical pickups on similar routes',
          body: `Two pickups of the same model work similar routes in one month. The figures are illustrative.

| | Pickup 1 | Pickup 2 |
|---|---|---|
| Km driven | 4,000 | 3,800 |
| Litres | 440 | 570 |
| Fuel spend (EGP) | 6,600 | 8,550 |
| L/100 km | 11.0 | 15.0 |
| Fuel cost per km (EGP) | 1.65 | 2.25 |

Pickup 2 drove fewer kilometres but used about a third more fuel per kilometre. That is worth a question: a mechanical issue such as tyre pressure or a clogged filter, a different driving style, or fuel that isn’t going into the vehicle at all.`,
        },
      },
      {
        kind: 'steps',
        heading: 'Spotting abnormal consumption: a practical routine',
        intro: 'Good records make problems visible. This monthly routine turns them into action.',
        steps: [
          { title: 'Record every fill-up with the odometer', desc: 'Make the odometer reading part of the routine. Without it, consumption cannot be calculated.' },
          { title: 'Compare like with like', desc: 'Compare L/100 km across vehicles of the same model and similar routes, not a city van with a highway truck.' },
          { title: 'Set your own normal range', desc: 'After two or three months, you will know the usual range for each vehicle type. Anything well outside it needs a look.' },
          { title: 'Check the vehicle first', desc: 'Before suspecting anyone, rule out mechanical causes: tyres, filters, injectors and overdue services all raise consumption.' },
          { title: 'Talk to the driver', desc: 'If the vehicle is fine, review the pattern with the assigned driver. Most gaps have an ordinary explanation; some don’t.' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'Odometer readings are the base of every fuel figure',
        image: 'vehicles',
        alt: 'Axpense vehicles screen showing each vehicle’s odometer reading, the kilometre figure used to calculate fuel cost per km and consumption',
        caption: 'Accurate odometer readings on each vehicle make fuel cost per km and consumption figures reliable.',
      },
      {
        kind: 'text',
        heading: 'Who uses fuel records',
        body: `- **Fleet managers** compare consumption across vehicles and follow up on the outliers.
- **Finance teams** see fuel spend by vehicle instead of one large monthly figure.
- **Supervisors** use fuel records together with [driver assignments](/features/drivers) to discuss driving habits with the right person.

Fuel is one line in the full cost of a vehicle. To combine it with repairs, parts, insurance and depreciation, see [fleet cost tracking](/fleet-cost-tracking), or work out a vehicle’s full cost per kilometre with our [fleet cost per km calculator](/resources/fleet-cost-calculator).`,
      },
    ],
    ar: [
      {
        kind: 'text',
        heading: 'ما المقصود بمتابعة مصروفات الوقود؟',
        body: `**متابعة مصروفات الوقود تعني تسجيل كل عملية تموين على السيارة التي تلقّتها، لتُقاس تكلفة الوقود لكل سيارة ولكل كيلومتر.** إجمالي الوقود الشهري يخبرك بما دفعته الشركة، أما السجل لكل سيارة فيخبرك بالسيارات التي تستهلك أكثر مما يجب.

كثير من الشركات تدفع ثمن الوقود من خلال عهد نقدية أو حسابات لدى المحطات أو إيصالات تُسترد قيمتها. المال محسوب، لكنه نادرًا ما يُربط بسيارة وقراءة عداد. ودون هاتين المعلومتين لا يمكنك حساب الاستهلاك، ودون الاستهلاك لا يمكنك التفرقة بين الاستخدام الطبيعي والهدر.`,
      },
      {
        kind: 'text',
        heading: 'كيف تعمل سجلات الوقود في أكسبنس',
        body: `يُسجَّل كل تموين على سيارة مع **التاريخ** و**عدد اللترات** و**المبلغ المدفوع** و**قراءة العداد** وقت التموين. ومن هذه السجلات يعرض أكسبنس:

- **مصروف الوقود لكل سيارة** في أي شهر، بجوار صيانتها وباقي تكاليفها.
- **تكلفة الوقود للكيلومتر**، من المبلغ المنفق والكيلومترات المقطوعة بين القراءات.
- **معدل الاستهلاك** باللتر لكل 100 كم، لتقارن السيارات المتشابهة بشكل عادل.

توجد سجلات الوقود في سجل السيارة نفسه مع الصيانة و[المصروفات](/features/expense-management)، فتكون تكلفة تشغيلها كاملة في مكان واحد. ويسجّل فريقك هذه البيانات بنفسه، إذ لا يرتبط أكسبنس ببطاقات الوقود أو أجهزة الاستشعار في السيارات.`,
      },
      {
        kind: 'formula',
        heading: 'معادلتان يحتاجهما كل أسطول',
        formulas: [
          { label: 'تكلفة الوقود للكيلومتر', expression: 'مصروف الوقود خلال الفترة ÷ الكيلومترات المقطوعة خلال الفترة' },
          { label: 'استهلاك الوقود (لتر/100 كم)', expression: '(اللترات المستهلكة ÷ الكيلومترات المقطوعة) × 100' },
        ],
        example: {
          title: 'مثال: سيارتا بيك أب متطابقتان على خطوط متشابهة',
          body: `سيارتا بيك أب من الطراز نفسه تعملان على خطوط متشابهة لمدة شهر، والأرقام للتوضيح فقط.

| | بيك أب 1 | بيك أب 2 |
|---|---|---|
| الكيلومترات المقطوعة | 4,000 | 3,800 |
| اللترات | 440 | 570 |
| مصروف الوقود (جنيه) | 6,600 | 8,550 |
| لتر/100 كم | 11.0 | 15.0 |
| تكلفة الوقود للكيلومتر (جنيه) | 1.65 | 2.25 |

قطعت السيارة الثانية كيلومترات أقل لكنها استهلكت وقودًا أكثر بنحو الثلث لكل كيلومتر. وهذا يستحق السؤال: هل هي مشكلة فنية مثل ضغط الإطارات أو انسداد فلتر، أم أسلوب قيادة مختلف، أم وقود لا يدخل السيارة أصلًا؟`,
        },
      },
      {
        kind: 'steps',
        heading: 'اكتشاف الاستهلاك غير الطبيعي: روتين عملي',
        intro: 'السجلات الجيدة تجعل المشكلات ظاهرة، وهذا الروتين الشهري يحوّلها إلى إجراء.',
        steps: [
          { title: 'سجّل كل تموين مع قراءة العداد', desc: 'اجعل قراءة العداد جزءًا ثابتًا من الروتين، فبدونها لا يمكن حساب الاستهلاك.' },
          { title: 'قارن المتشابه بالمتشابه', desc: 'قارن معدل الاستهلاك بين سيارات من الطراز نفسه وعلى خطوط متشابهة، لا بين سيارة تعمل داخل المدينة وشاحنة على الطرق السريعة.' },
          { title: 'حدد المعدل الطبيعي لأسطولك', desc: 'بعد شهرين أو ثلاثة ستعرف المدى المعتاد لكل نوع من السيارات، وأي رقم بعيد عنه يحتاج إلى مراجعة.' },
          { title: 'افحص السيارة أولًا', desc: 'قبل أن تشك في أحد، استبعد الأسباب الفنية: الإطارات والفلاتر والرشاشات والصيانة المتأخرة كلها ترفع الاستهلاك.' },
          { title: 'تحدث مع السائق', desc: 'إذا كانت السيارة سليمة، راجع النمط مع السائق المعيّن عليها. معظم الفروق لها تفسير عادي، وبعضها لا.' },
        ],
      },
      {
        kind: 'screenshot',
        heading: 'قراءات العداد أساس كل رقم للوقود',
        image: 'vehicles',
        alt: 'شاشة المركبات في أكسبنس تعرض قراءة العداد لكل سيارة، وهي الكيلومترات المستخدمة في حساب تكلفة الوقود للكيلومتر ومعدل الاستهلاك',
        caption: 'دقة قراءات العداد لكل سيارة تجعل أرقام تكلفة الوقود للكيلومتر ومعدل الاستهلاك موثوقة.',
      },
      {
        kind: 'text',
        heading: 'من يستخدم سجلات الوقود',
        body: `- **مدير الأسطول** يقارن الاستهلاك بين السيارات ويتابع الحالات الشاذة.
- **الإدارة المالية** ترى مصروف الوقود لكل سيارة بدلًا من رقم شهري واحد كبير.
- **المشرفون** يستخدمون سجلات الوقود مع [تعيين السائقين](/features/drivers) لمناقشة أسلوب القيادة مع الشخص الصحيح.

الوقود بند واحد في التكلفة الكاملة للسيارة. ولجمعه مع الإصلاحات وقطع الغيار والتأمين والإهلاك، اطّلع على [إدارة تكاليف الأسطول](/fleet-cost-tracking)، أو احسب التكلفة الكاملة للكيلومتر باستخدام أداة [حساب تكلفة الكيلومتر للسيارة](/resources/fleet-cost-calculator).`,
      },
    ],
  },
  faqs: {
    en: [
      { q: 'What do I record for each fill-up?', a: 'The vehicle, date, litres, amount paid and the odometer reading. The odometer reading is what makes fuel cost per km and consumption possible.' },
      { q: 'How is fuel cost per km calculated?', a: 'Fuel spend for a period divided by the kilometres driven in that period. For example, 6,600 EGP of fuel over 4,000 km is 1.65 EGP per km.' },
      { q: 'How do I spot abnormal fuel consumption?', a: 'Compare litres per 100 km between vehicles of the same model on similar routes. A vehicle well above the others should be checked mechanically first, then reviewed with its driver.' },
      { q: 'Does Axpense connect to fuel cards or GPS devices?', a: 'No. Fuel entries are recorded by your team. That keeps setup simple and works with any payment method, including cash and station accounts.' },
      { q: 'Can I see fuel together with other vehicle costs?', a: 'Yes. Fuel entries are stored on the same vehicle record as maintenance and expenses, so the vehicle’s full running cost is in one place.' },
    ],
    ar: [
      { q: 'ماذا أسجل مع كل تموين؟', a: 'السيارة والتاريخ وعدد اللترات والمبلغ المدفوع وقراءة العداد. وقراءة العداد هي ما يجعل حساب تكلفة الكيلومتر والاستهلاك ممكنًا.' },
      { q: 'كيف تُحسب تكلفة الوقود للكيلومتر؟', a: 'مصروف الوقود خلال فترة مقسومًا على الكيلومترات المقطوعة في الفترة نفسها. مثلًا، 6,600 جنيه وقود على مدى 4,000 كم تساوي 1.65 جنيه للكيلومتر.' },
      { q: 'كيف أكتشف الاستهلاك غير الطبيعي للوقود؟', a: 'قارن اللترات لكل 100 كم بين سيارات من الطراز نفسه على خطوط متشابهة. السيارة التي تزيد كثيرًا عن غيرها تُفحص فنيًا أولًا، ثم يُراجع الأمر مع سائقها.' },
      { q: 'هل يرتبط أكسبنس ببطاقات الوقود أو أجهزة GPS؟', a: 'لا. يسجّل فريقك بيانات التموين بنفسه، وهذا يبقي التجهيز بسيطًا ويناسب أي طريقة دفع، بما فيها النقد وحسابات المحطات.' },
      { q: 'هل أرى الوقود مع باقي تكاليف السيارة؟', a: 'نعم. تُحفظ سجلات الوقود في سجل السيارة نفسه مع الصيانة والمصروفات، فتكون تكلفة تشغيلها كاملة في مكان واحد.' },
    ],
  },
  relatedPages: ['/fleet-cost-tracking', '/features/expense-management', '/resources/fleet-cost-calculator', '/features/drivers', '/features/reports-analytics'],
  relatedIndustries: ['/industries/logistics', '/industries/distribution', '/industries/field-services', '/industries/oil-and-gas'],
  relatedArticles: ['vehicle-cost-per-km', 'how-to-calculate-fleet-cost', 'fleet-total-cost-of-ownership'],
  parent: '/fleet-cost-tracking',
  schemaName: 'Axpense Fuel Expense Tracking',
};
