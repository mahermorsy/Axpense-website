# SEO implementation report (29–30 Sep 2026)

This implements the "SEO Implementation Prompt (v2)" inside the existing repo. The header and the homepage (EN and AR) are pixel-identical to the 24 Sep version above the footer. A pixel diff of full-page screenshots at 1440px shows 0 changed rows.

**Build and audit:** `next build` passes. `npm run seo:audit` crawled 92 URLs (83 in the sitemap): **0 errors, 0 warnings**. All 38 redirects return 308 in one hop to a 200 page.

**Checks at 390px and 1440px:** no horizontal overflow, and exactly one H1 per page, on 20 EN/AR templates.

## 1. URL map

See `docs/seo/url-map.md`. It lists every old and new URL with its status: keep, retarget, merged (308), new or noindex, plus word counts before and after.

**Totals:**
- 40 new URLs
- 42 retargeted or rewritten
- 38 merged (308)
- 13 noindex:
  - 4 behind the capability gate
  - 6 legacy industry pages the homepage still links to
  - 3 legal drafts

**Architecture decisions:**
- **Commercial pages.** The four commercial pages sit at the root: `/fleet-management-software`, `/fleet-maintenance-software`, `/fleet-cost-tracking`, `/vehicle-inspection-software`, each with an `/ar` twin.
- **Merged into commercial pages:**
  - `/features/fleet-management` and `/features/fleet-maintenance`.
  - All four `/solutions/*` pages: cost → `/fleet-cost-tracking`; maintenance → `/fleet-maintenance-software`; asset lifecycle → `/features/asset-management`; equipment cost → `/fleet-cost-tracking`.
  - `/solutions` is now the hub, with the four commercial pages first.
- **Retargeted and new feature pages.** `/features/asset-management` now owns "vehicle depreciation and lifecycle management". `/features/spare-parts` and `/features/drivers` are new.
- **Industries:** 6 at full quality: logistics, distribution (new), construction, oil-and-gas (new), manufacturing, field-services (new).
  - transportation → logistics and energy-utilities → oil-and-gas (308).
  - real-estate, healthcare and travel-hospitality are **kept but noindex**, because the frozen homepage links to them. Rebuild them to 800+ words later, or drop them from the homepage when it is unfrozen.
- **Locations:** `/locations/egypt`, `/locations/saudi-arabia`, `/locations/mena`.
  - `/en-xx` and `/ar-xx` redirect to them.
  - UAE, Qatar, Jordan and Iraq are sections of `/locations/mena`, since UAE isn't confirmed as an active market.
- **Blog:**
  - 11 English articles: 3 expanded, 8 new.
  - 4 Arabic twins at `/ar/blog/<slug>`.
  - `what-is-fleet-management` is merged (308) into `what-is-fleet-management-software`.
  - `how-to-calculate-fleet-cost` is retargeted to fleet budgeting, so it doesn't compete with the cost-per-km and TCO articles.
- **Tools:**
  - The calculator is extended with cost per km, cost per mile, annual cost and lifecycle TCO, and keeps its 7 currencies.
  - New: `/resources/vehicle-inspection-checklist` and `/resources/preventive-maintenance-checklist`, each interactive or tabular, with EN/AR PDFs in `public/downloads/`.

## 2. Indexable URLs: keywords, metadata and schema

Every canonical is absolute and self-referencing on `https://axpense.net`, with no trailing slash ("self" below). The Words column counts words inside `<main>` as crawled. Organization and WebSite are on every page.

| URL | Type | Primary keyword | Secondary keywords | Title | Meta description | H1 | Canonical | hreflang | Schema (besides Organization + WebSite) | Words |
|---|---|---|---|---|---|---|---|---|---|---|
| `/` | home | Axpense; fleet and asset management platform |  | Axpense \| Fleet & Asset Management Platform for MENA | Axpense is the fleet and asset management platform for businesses in Egypt and MENA: km-based maintenance, inspections, spare parts and costs. Book a demo. | Fleet & asset management software for growing businesses | self | en, ar, x-default | FAQPage | 1032 |
| `/about` | page | — |  | About Us \| Axpense | Axpense builds fleet, asset and maintenance management software for growing businesses in Egypt and MENA. Learn what we stand for and how to reach us. | Built for teams that run on assets | self | en, ar, x-default | BreadcrumbList | 219 |
| `/ar` | home | أكسبنس؛ منصة إدارة الأسطول والأصول |  | أكسبنس \| منصة إدارة الأسطول والأصول في الشرق الأوسط | أكسبنس منصة إدارة الأسطول والأصول للشركات في مصر والشرق الأوسط: صيانة حسب الكيلومترات وفحوصات وقطع غيار وتكاليف في مكان واحد. احجز عرضًا تجريبيًا. | برنامج إدارة الأسطول والأصول للشركات النامية | self | en, ar, x-default | FAQPage | 949 |
| `/ar/about` | page | — |  | من نحن \| أكسبنس | تطوّر أكسبنس برامج إدارة الأسطول والأصول والصيانة للشركات النامية في مصر والشرق الأوسط. تعرّف على قيمنا وطريقة التواصل معنا. | مصمم للفرق التي تعتمد على الأصول | self | en, ar, x-default | BreadcrumbList | 189 |
| `/ar/blog` | hub | — |  | مدونة إدارة الأسطول \| أكسبنس | أدلة عملية عن صيانة الأسطول وتكلفة الكيلومتر والتكلفة الإجمالية للملكية وفحص المركبات وقطع الغيار لفرق الأسطول في مصر والشرق الأوسط. | رؤى حول إدارة الأسطول والأصول | self | en, ar, x-default | BreadcrumbList | 550 |
| `/ar/blog/fleet-total-cost-of-ownership` | blog | التكلفة الإجمالية لملكية السيارة |  | التكلفة الإجمالية لملكية السيارة: دليل الحساب \| أكسبنس | التكلفة الإجمالية لملكية السيارة بالتفصيل: المعادلة، ومثال بالجنيه يقارن بين سيارتين، ومتى تستبدل سيارة الشركة لتوفّر المال. احجز عرضًا تجريبيًا. | التكلفة الإجمالية لملكية السيارة: كيف تحسبها وتقارن بين السيارات | self | en, ar, x-default | Article, BreadcrumbList, FAQPage | 1163 |
| `/ar/blog/km-based-preventive-maintenance` | blog | جدول الصيانة الوقائية للسيارات |  | جدول الصيانة الوقائية للسيارات حسب الكيلومتر \| أكسبنس | كيف تبني جدول الصيانة الوقائية للسيارات حسب الكيلومترات المقطوعة، مع أمثلة لفترات الخدمة ونصائح عملية لظروف التشغيل الشاقة. احجز عرضًا تجريبيًا. | جدول الصيانة الوقائية للسيارات حسب الكيلومترات: دليل عملي للأساطيل | self | en, ar, x-default | Article, BreadcrumbList, FAQPage | 1201 |
| `/ar/blog/vehicle-cost-per-km` | blog | كيفية حساب تكلفة الكيلومتر للسيارة |  | كيفية حساب تكلفة الكيلومتر للسيارة \| أكسبنس | كيفية حساب تكلفة الكيلومتر للسيارة خطوة بخطوة، مع أمثلة بالجنيه والريال والتكاليف التي ينساها أغلب الفرق. احجز عرضًا تجريبيًا لترى تكلفة كل سيارة. | كيفية حساب تكلفة الكيلومتر للسيارة: المعادلة وأمثلة محلولة | self | en, ar, x-default | Article, BreadcrumbList, FAQPage | 1187 |
| `/ar/blog/what-is-fleet-management-software` | blog | ما هو برنامج إدارة الأسطول |  | ما هو برنامج إدارة الأسطول؟ دليل مبسّط \| أكسبنس | ما هو برنامج إدارة الأسطول؟ تعرّف على ما يقدمه للشركات، وأهم وحداته، ومتى يجب الانتقال من الإكسل إلى نظام متكامل للسيارات. احجز عرضًا تجريبيًا. | ما هو برنامج إدارة الأسطول؟ دليل مبسّط للشركات التي يكبر أسطولها | self | en, ar, x-default | Article, BreadcrumbList, FAQPage | 1257 |
| `/ar/contact` | page | — |  | اتصل بنا \| أكسبنس | تواصل مع فريق أكسبنس بخصوص إدارة الأسطول والصيانة والتكاليف لشركتك في مصر أو الشرق الأوسط. نرد عليك عبر البريد أو الهاتف. | تحدث مع الفريق | self | en, ar, x-default | BreadcrumbList | 73 |
| `/ar/demo` | page | — |  | احجز عرضًا تجريبيًا \| أكسبنس | احجز عرضًا تجريبيًا مجانيًا لأكسبنس. أخبرنا عن مركباتك وسنعرض لك الصيانة حسب الكيلومترات والفحوصات ومتابعة التكاليف على أسطولك أنت. | احجز عرضًا تجريبيًا | self | en, ar, x-default | BreadcrumbList | 79 |
| `/ar/features` | hub | — |  | المميزات \| أكسبنس | كل مميزات أكسبنس في مكان واحد: المركبات والسائقون والصيانة الوقائية حسب الكيلومترات وقطع الغيار والفحوصات والمصروفات والإهلاك والتقارير. | كل ما تحتاجه من أجل إدارة أصول متميزة | self | en, ar, x-default | BreadcrumbList | 307 |
| `/ar/features/asset-management` | feature | إهلاك المركبات ودورة حياتها | دورة حياة المركبة, استبدال السيارات, حساب إهلاك السيارات, القيمة الدفترية للسيارة | إهلاك المركبات ودورة حياتها \| أكسبنس | إهلاك المركبات ودورة حياتها في مكان واحد: القيمة الدفترية لكل مركبة بمرور الوقت بجوار تكاليف تشغيلها، لتخطط للاستبدال بالأرقام. احجز عرضًا تجريبيًا. | إهلاك المركبات وإدارة دورة حياتها من الشراء حتى البيع | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 970 |
| `/ar/features/drivers` | feature | إدارة السائقين | تعيين السائقين على المركبات, سجل السائقين, تسليم واستلام المركبة, مسؤولية السائق عن المركبة, ربط السائق بالسيارة | إدارة السائقين وتعيينهم على المركبات \| أكسبنس | إدارة السائقين بتعيين كل سائق على مركبته وربط كل فحص ومصروف بشخص محدد، لتبقى المسؤولية واضحة عند تسليم المركبة واستلامها. احجز عرضًا تجريبيًا الآن. | إدارة السائقين: مسؤولية واضحة عن كل مركبة | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 845 |
| `/ar/features/expense-management` | feature | إدارة مصروفات الأسطول | مصروفات السيارات, تسجيل مصروفات المركبات, تكلفة كل سيارة, مصروفات الأسطول الشهرية | إدارة مصروفات الأسطول لكل مركبة \| أكسبنس | إدارة مصروفات الأسطول بتسجيل الإصلاحات وقطع الغيار والتأمين والترخيص على كل مركبة، لتكون الإجماليات الشهرية جاهزة دائمًا دون جداول. احجز عرضًا تجريبيًا. | إدارة مصروفات الأسطول: كل تكلفة على المركبة الصحيحة | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 908 |
| `/ar/features/inspection-management` | feature | تطبيق قوائم فحص الأسطول | قائمة فحص السيارة قبل الرحلة, الفحص اليومي للمركبات, نموذج فحص المركبات, قوائم فحص رقمية للأسطول | تطبيق قوائم فحص الأسطول اليومية والدورية \| أكسبنس | تطبيق قوائم فحص الأسطول للفحص اليومي وقبل الرحلة والدوري، مع حفظ نتيجة كل بند (مطابق أو غير مطابق) وسببه في سجل المركبة. احجز عرضًا تجريبيًا الآن. | تطبيق قوائم فحص الأسطول للفحص اليومي وقبل الرحلة والدوري | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 1034 |
| `/ar/features/preventive-maintenance` | feature | برنامج الصيانة الوقائية للسيارات | الصيانة الدورية للسيارات, تنبيهات الصيانة, جدول الصيانة حسب الكيلومترات, الصيانة الوقائية للأسطول, موعد الصيانة القادمة | برنامج الصيانة الوقائية للسيارات حسب الكيلومترات \| أكسبنس | برنامج الصيانة الوقائية للسيارات يحسب الكيلومترات المتبقية حتى كل صيانة وينبّهك للمركبات المتأخرة قبل أن تتعطل في الطريق. احجز عرضًا تجريبيًا الآن. | برنامج الصيانة الوقائية للسيارات حسب الكيلومترات الفعلية | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 1012 |
| `/ar/features/reports-analytics` | feature | تقارير الأسطول | لوحة متابعة الأسطول, مؤشرات أداء الأسطول, تقرير صيانة السيارات, تقرير تكاليف الأسطول | تقارير الأسطول ولوحات المتابعة \| أكسبنس | تقارير الأسطول ولوحات متابعة تعرض الصيانة المستحقة والمتأخرة حسب الكيلومترات والتكاليف لكل مركبة وفئة واتجاهها، دون أي جداول. احجز عرضًا تجريبيًا. | تقارير الأسطول ولوحات متابعة الصيانة والتكاليف دون جداول إكسل | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 992 |
| `/ar/features/spare-parts` | feature | إدارة قطع الغيار | قطع غيار السيارات, تتبع قطع الغيار, دورة حياة قطع الغيار, تكلفة قطع الغيار لكل مركبة, سجل قطع الغيار | إدارة قطع الغيار لأسطول المركبات \| أكسبنس | إدارة قطع الغيار من الشراء حتى التركيب: اعرف أي قطعة رُكّبت في أي مركبة وكم أضافت إلى تكلفتها، دون دفاتر المخزن المتفرقة. احجز عرضًا تجريبيًا الآن. | إدارة قطع الغيار من الشراء حتى التركيب في المركبة | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 979 |
| `/ar/features/vehicle-management` | feature | برنامج إدارة المركبات | نظام إدارة المركبات, سجل المركبات, إدارة سيارات الشركة, سجل السيارة, بيانات المركبات | برنامج إدارة المركبات: سجل واحد لكل مركبة \| أكسبنس | برنامج إدارة المركبات الذي يجمع العداد والحالة والسائق والصيانة والفحوصات والتكاليف في سجل واحد لكل مركبة، بدل الملفات المتفرقة. احجز عرضًا تجريبيًا. | برنامج إدارة المركبات: كل مركبة في سجل واحد | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 984 |
| `/ar/fleet-cost-tracking` | commercial | إدارة تكاليف الأسطول | إدارة مصروفات السيارات, حساب تكلفة تشغيل السيارة, تكلفة الكيلومتر, التكلفة الإجمالية للملكية, إهلاك السيارات | إدارة تكاليف الأسطول وتكلفة الكيلومتر \| أكسبنس | إدارة تكاليف الأسطول بسجل واحد لكل مركبة يجمع الصيانة وقطع الغيار والتأمين وباقي المصروفات، لتعرف تكلفة الكيلومتر وقرار الاستبدال. احجز عرضًا تجريبيًا. | برنامج إدارة تكاليف الأسطول ومصروفات السيارات | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 1582 |
| `/ar/fleet-maintenance-software` | commercial | برنامج صيانة الأسطول | برنامج صيانة السيارات, نظام إدارة صيانة المركبات, الصيانة الوقائية للسيارات, جدول صيانة السيارات, سجل صيانة السيارة | برنامج صيانة الأسطول والصيانة الوقائية \| أكسبنس | برنامج صيانة الأسطول الذي يحدد موعد كل صيانة حسب الكيلومترات المقطوعة، وينبّهك قبل استحقاقها، ويحفظ سجل الصيانة الكامل لكل مركبة. احجز عرضًا تجريبيًا. | برنامج صيانة الأسطول: صيانة وقائية حسب الكيلومترات | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 1491 |
| `/ar/fleet-management-software` | commercial | برنامج إدارة الأسطول | نظام إدارة الأسطول, برنامج إدارة أسطول السيارات, نظام إدارة المركبات, إدارة سيارات الشركة | برنامج إدارة الأسطول للشركات \| أكسبنس | برنامج إدارة الأسطول الذي يجمع المركبات والسائقين والصيانة حسب الكيلومترات والفحوصات والتكاليف في لوحة واحدة، بالعربية والإنجليزية. احجز عرضًا تجريبيًا. | برنامج إدارة الأسطول للتحكم الكامل في مركبات شركتك | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 1492 |
| `/ar/industries` | hub | — |  | القطاعات \| أكسبنس | كيف يدعم أكسبنس أساطيل النقل والتوزيع والمقاولات والبترول والغاز والمصانع والخدمات الميدانية في مصر والشرق الأوسط. احجز عرضًا تجريبيًا. | إدارة الأسطول حسب طريقة عمل قطاعك | self | en, ar, x-default | BreadcrumbList | 185 |
| `/ar/industries/construction` | industry | إدارة معدات ومركبات المقاولات | إدارة أسطول شركات المقاولات, صيانة مركبات المقاولات, فحص مركبات المواقع, إهلاك سيارات المقاولات, برنامج إدارة سيارات المشروعات | إدارة معدات ومركبات المقاولات \| أكسبنس | إدارة معدات ومركبات المقاولات في كل المواقع: صيانة البيك أب والقلابات والخلاطات بالكيلومتر وفحص الموقع وإهلاك كل مركبة في نظام واحد. احجز عرضًا تجريبيًا. | إدارة معدات ومركبات المقاولات في كل مواقع المشروعات | self | en, ar, x-default | BreadcrumbList, FAQPage | 1146 |
| `/ar/industries/distribution` | industry | إدارة أسطول سيارات التوزيع | إدارة سيارات التوزيع, صيانة سيارات التوزيع, أسطول شركات السلع الاستهلاكية, نظام إدارة مركبات التوزيع, تعيين السائقين على سيارات التوزيع | إدارة أسطول سيارات التوزيع للفروع \| أكسبنس | إدارة أسطول سيارات التوزيع في كل الفروع من نظام واحد: صيانة حسب الكيلومترات وتعيين واضح للسائقين وتكلفة كل فرع أمامك. احجز عرضًا تجريبيًا الآن. | إدارة أسطول سيارات التوزيع في كل الفروع من نظام واحد | self | en, ar, x-default | BreadcrumbList, FAQPage | 1182 |
| `/ar/industries/field-services` | industry | إدارة سيارات فرق الخدمة الميدانية | إدارة سيارات الفنيين, صيانة سيارات الخدمة, أسطول شركات الصيانة, فحص تسليم واستلام السيارة, سيارات فرق الصيانة | إدارة سيارات فرق الخدمة الميدانية \| أكسبنس | إدارة سيارات فرق الخدمة الميدانية لتبقى سيارات الفنيين جاهزة: صيانة بالكيلومتر تُخطط حول المهام، وفحص عند التسليم، وسجل لكل سيارة. احجز عرضًا تجريبيًا. | إدارة سيارات فرق الخدمة الميدانية لتبقى سيارة الفني جاهزة للمهمة القادمة | self | en, ar, x-default | BreadcrumbList, FAQPage | 1166 |
| `/ar/industries/logistics` | industry | برنامج إدارة أسطول النقل والشحن | نظام إدارة أسطول الشاحنات, صيانة شاحنات النقل, تكلفة الكيلومتر للشاحنة, إدارة أسطول شركات الشحن, برنامج صيانة سيارات النقل | برنامج إدارة أسطول النقل والشحن \| أكسبنس | برنامج إدارة أسطول النقل والشحن يجدول صيانة الشاحنات وسيارات النقل حسب الكيلومترات ويعرض تكلفة كل مركبة لتقل الأعطال على الطريق. احجز عرضًا تجريبيًا. | برنامج إدارة أسطول النقل والشحن للشاحنات وسيارات النقل كثيرة الحركة | self | en, ar, x-default | BreadcrumbList, FAQPage | 1237 |
| `/ar/industries/manufacturing` | industry | إدارة أسطول المصانع | إدارة سيارات المصنع, صيانة أتوبيسات نقل العاملين, إدارة سيارات الشركة, استغلال المركبات, مخزون قطع غيار السيارات | إدارة أسطول المصانع ومركباتها \| أكسبنس | إدارة أسطول المصانع من شاحنات التوزيع إلى أتوبيسات العاملين وسيارات الإدارة: صيانة بالكيلومتر ومتابعة قطع الغيار وتكلفة كل مركبة. احجز عرضًا تجريبيًا. | إدارة أسطول المصانع: شاحنات التوزيع وأتوبيسات العاملين وسيارات الشركة | self | en, ar, x-default | BreadcrumbList, FAQPage | 1158 |
| `/ar/industries/oil-and-gas` | industry | إدارة أسطول شركات البترول والغاز | إدارة أسطول شركات النفط والغاز, فحص مركبات الحقول, صيانة مركبات حقول البترول, فحص ما قبل الرحلة, مركبات شركات خدمات البترول | إدارة أسطول شركات البترول والغاز \| أكسبنس | إدارة أسطول شركات البترول والغاز لمركبات الحقول البعيدة: فحص قبل كل رحلة، وصيانة شاقة بالكيلومتر، وسجل كامل لكل مركبة في مكان واحد. احجز عرضًا تجريبيًا. | إدارة أسطول شركات البترول والغاز لمركبات الحقول والمواقع البعيدة | self | en, ar, x-default | BreadcrumbList, FAQPage | 1189 |
| `/ar/locations/egypt` | location | برنامج إدارة الأسطول في مصر | برنامج إدارة السيارات للشركات في مصر, برنامج صيانة السيارات في مصر, إدارة مصروفات السيارات | برنامج إدارة الأسطول في مصر \| أكسبنس | برنامج إدارة الأسطول في مصر بالعربية: تنبيهات صيانة حسب الكيلومترات، ومصروفات كل سيارة وأسعار بالجنيه، وتشغيل خلال يوم واحد. احجز عرضًا تجريبيًا. | برنامج إدارة أسطول السيارات للشركات في مصر | self | en-EG, ar-EG, x-default | BreadcrumbList, FAQPage | 1076 |
| `/ar/locations/mena` | location | برنامج إدارة الأسطول في الشرق الأوسط | نظام إدارة الأسطول في قطر, نظام إدارة الأسطول في الأردن, برنامج إدارة الأسطول في العراق, إدارة الأسطول في الخليج | برنامج إدارة الأسطول في الشرق الأوسط \| أكسبنس | برنامج إدارة الأسطول في الشرق الأوسط بالعربية والإنجليزية: صيانة حسب الكيلومترات وفحوصات وتكلفة كل مركبة، وخطط من 40 دولارًا شهريًا. احجز عرضًا تجريبيًا. | برنامج إدارة الأسطول في الشرق الأوسط وشمال أفريقيا | self | en, ar, x-default | BreadcrumbList, FAQPage | 1129 |
| `/ar/locations/saudi-arabia` | location | نظام إدارة الأسطول في السعودية | نظام إدارة المركبات, نظام صيانة المركبات, إدارة أسطول الشركات في السعودية | نظام إدارة الأسطول في السعودية \| أكسبنس | نظام إدارة الأسطول في السعودية بالعربية والإنجليزية: صيانة المركبات حسب الكيلومترات، وفحوصات، وتكلفة كل مركبة، وأسعار بالريال. احجز عرضًا تجريبيًا. | نظام إدارة أسطول المركبات للشركات في السعودية | self | en-SA, ar-SA, x-default | BreadcrumbList, FAQPage | 1007 |
| `/ar/pricing` | page | — |  | الأسعار \| أكسبنس | خطط أكسبنس تبدأ من 2,000 جنيه شهريًا (40 دولارًا · 150 ريالًا). ابدأ بتجربة مجانية 14 يومًا بدون بطاقة ائتمان أو احجز عرضًا تجريبيًا مع فريقنا. | اختر الخطة المناسبة لك | self | en, ar, x-default | BreadcrumbList | 143 |
| `/ar/resources` | hub | — |  | موارد مجانية للأساطيل \| أكسبنس | أدوات وأدلة مجانية للأساطيل: حاسبة تكلفة الكيلومتر، وقائمة فحص السيارة، وجدول الصيانة الدورية، ومقالات عملية عن إدارة الأسطول. | أدوات وأدلة مجانية لفرق الأسطول | self | en, ar, x-default | BreadcrumbList | 147 |
| `/ar/resources/fleet-cost-calculator` | tool | حساب تكلفة الكيلومتر للسيارة |  | حاسبة تكلفة الكيلومتر وإجمالي تكلفة الملكية \| أكسبنس | أداة مجانية لحساب تكلفة الكيلومتر للسيارة: أدخل سعر الشراء وقيمة البيع والمسافة السنوية والمصروفات لتعرف التكلفة السنوية وإجمالي تكلفة الملكية لكل مركبة. | حساب تكلفة الكيلومتر للسيارة وإجمالي تكلفة الملكية | self | en, ar, x-default | WebApplication, BreadcrumbList, FAQPage | 1247 |
| `/ar/resources/preventive-maintenance-checklist` | tool | جدول الصيانة الدورية للسيارات |  | جدول الصيانة الدورية للسيارات حسب الكيلومتر \| أكسبنس | جدول الصيانة الدورية للسيارات مجانًا بفترات حسب الكيلومتر للزيت والفلاتر والفرامل والإطارات والسوائل، لتخطط صيانة أسطولك. اعرضه على الشاشة أو اطبعه PDF. | جدول الصيانة الدورية للسيارات حسب الكيلومترات | self | en, ar, x-default | WebApplication, BreadcrumbList, FAQPage | 1072 |
| `/ar/resources/vehicle-inspection-checklist` | tool | قائمة فحص السيارة |  | قائمة فحص السيارة المجانية (PDF) \| أكسبنس | قائمة فحص السيارة مجانًا لأساطيل الشركات: الإطارات والأنوار والسوائل والفرامل ومعدات السلامة والمستندات. استخدمها على الشاشة أو اطبعها للسائقين. | قائمة فحص السيارة المجانية للأساطيل | self | en, ar, x-default | WebApplication, BreadcrumbList, FAQPage | 1098 |
| `/ar/solutions` | hub | — |  | الحلول \| أكسبنس | حلول أكسبنس: برنامج إدارة الأسطول وبرنامج صيانة الأسطول وإدارة تكاليف الأسطول وبرنامج فحص المركبات للشركات في مصر والشرق الأوسط. | حلول إدارة الأسطول من أكسبنس | self | en, ar, x-default | BreadcrumbList | 143 |
| `/ar/vehicle-inspection-software` | commercial | برنامج فحص المركبات | نظام فحص السيارات, قائمة فحص السيارة, نموذج فحص المركبات, الفحص اليومي للسيارات, فحص السيارات إلكترونيًا | برنامج فحص المركبات وقوائم الفحص \| أكسبنس | برنامج فحص المركبات بقوائم فحص تضعها بنفسك ونتائج مطابق وغير مطابق، مع حفظ البنود غير المطابقة في سجل كل مركبة لمتابعتها. احجز عرضًا تجريبيًا. | برنامج فحص المركبات إلكترونيًا | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 1278 |
| `/blog` | hub | — |  | Fleet Management Blog \| Axpense | Practical guides on fleet maintenance, cost per km, total cost of ownership, inspections and spare parts for fleet teams in Egypt and MENA. | Insights on fleet & asset management | self | en, ar, x-default | BreadcrumbList | 569 |
| `/blog/daily-vehicle-inspection-checklist` | blog | daily vehicle inspection checklist |  | Daily Vehicle Inspection Checklist for Fleets \| Axpense | A daily vehicle inspection checklist for fleets: exterior, tyres, lights, fluids, brakes and documents, plus what to do with failed items. Book a demo. | Daily Vehicle Inspection Checklist: What Drivers Should Check Before Every Trip | self | — | Article, BreadcrumbList, FAQPage | 2055 |
| `/blog/fleet-management-excel-vs-software` | blog | fleet management excel template vs software |  | Fleet Management Excel Template vs Software \| Axpense | Fleet management Excel template vs software: the columns a good sheet needs, where it breaks as you grow, and how to switch in a day. Book a demo. | Fleet Management Excel Template vs Software: When to Switch | self | — | Article, BreadcrumbList, FAQPage | 1724 |
| `/blog/fleet-spare-parts-management` | blog | fleet spare parts management |  | Fleet Spare Parts Management: A Practical Guide \| Axpense | Fleet spare parts management made practical: what to stock, minimum levels, part-to-vehicle records, warranty and cost per vehicle. Book a demo. | Fleet Spare Parts Management: A Practical Guide for Fleet Managers | self | — | Article, BreadcrumbList, FAQPage | 1767 |
| `/blog/fleet-total-cost-of-ownership` | blog | fleet total cost of ownership |  | Fleet Total Cost of Ownership (TCO) Explained \| Axpense | Fleet total cost of ownership explained: the TCO formula, a worked EGP example comparing two vans, and when to replace a vehicle. Book a demo. | Fleet Total Cost of Ownership: How to Calculate TCO and Compare Vehicles | self | en, ar, x-default | Article, BreadcrumbList, FAQPage | 1789 |
| `/blog/how-to-calculate-fleet-cost` | blog | how to calculate fleet costs |  | How to Calculate Fleet Costs and Build a Budget \| Axpense | How to calculate fleet costs: fixed vs variable costs, a 20-vehicle EGP budget and a monthly variance review. Book a demo to record costs per vehicle. | How to Calculate Fleet Costs and Build a Fleet Budget | self | — | Article, BreadcrumbList, FAQPage | 1987 |
| `/blog/km-based-preventive-maintenance` | blog | preventive maintenance schedule for fleets |  | Preventive Maintenance Schedule for Fleets (km) \| Axpense | Build a preventive maintenance schedule for fleets around kilometres driven, with example intervals and severe-duty tips. Book a demo to see reminders. | How to Build a Preventive Maintenance Schedule for Fleets Based on Kilometres | self | en, ar, x-default | Article, BreadcrumbList, FAQPage | 1819 |
| `/blog/preventive-vs-reactive-maintenance` | blog | preventive vs reactive maintenance |  | Preventive vs Reactive Maintenance for Fleets \| Axpense | Preventive vs reactive maintenance compared: costs, a worked EGP example, when reactive is fine and how to switch in stages. Book a demo to plan services. | Preventive vs Reactive Maintenance: Costs, Trade-offs and How to Switch | self | — | Article, BreadcrumbList, FAQPage | 2064 |
| `/blog/reduce-vehicle-downtime` | blog | how to reduce vehicle downtime |  | How to Reduce Vehicle Downtime in Your Fleet \| Axpense | How to reduce vehicle downtime: measure days off the road, price the lost days, and cut them with km-based maintenance and early checks. Book a demo. | How to Reduce Vehicle Downtime in a Company Fleet | self | — | Article, BreadcrumbList, FAQPage | 1807 |
| `/blog/vehicle-cost-per-km` | blog | how to calculate vehicle cost per km |  | How to Calculate Vehicle Cost per km \| Axpense | How to calculate vehicle cost per km step by step, with worked EGP and SAR examples and the costs most teams forget. Book a demo to see costs per vehicle. | How to Calculate Vehicle Cost per km: Formula and Worked Examples | self | en, ar, x-default | Article, BreadcrumbList, FAQPage | 1690 |
| `/blog/what-is-asset-management` | blog | what is asset management |  | What Is Asset Management? A Practical Guide \| Axpense | What is asset management for physical assets: lifecycle stages, register fields, a depreciation example and when to replace. Book a demo for your fleet. | What Is Asset Management? Lifecycle, Depreciation and Replacement | self | — | Article, BreadcrumbList, FAQPage | 1947 |
| `/blog/what-is-fleet-management-software` | blog | what is fleet management software |  | What Is Fleet Management Software? Plain Guide \| Axpense | What is fleet management software? Learn what it does, which modules matter and when a growing fleet should move off spreadsheets. Book a demo to see it. | What Is Fleet Management Software? A Plain Guide for Growing Fleets | self | en, ar, x-default | Article, BreadcrumbList, FAQPage | 2075 |
| `/contact` | page | — |  | Contact Sales \| Axpense | Talk to the Axpense team about fleet maintenance, inspections and cost tracking for your company in Egypt or MENA. We'll get back to you. | Talk to the team | self | en, ar, x-default | BreadcrumbList | 78 |
| `/demo` | page | — |  | Book a Demo \| Axpense | Book a free Axpense demo. Tell us about your vehicles and we will show you km-based maintenance, inspections and cost tracking with your own fleet. | Book a demo | self | en, ar, x-default | BreadcrumbList | 83 |
| `/features` | hub | — |  | Features \| Axpense | Every Axpense feature in one place: vehicles, drivers, km-based preventive maintenance, spare parts, inspections, expenses, depreciation and reports. | Everything You Need for Asset Excellence | self | en, ar, x-default | BreadcrumbList | 335 |
| `/features/asset-management` | feature | vehicle depreciation and lifecycle management | vehicle depreciation calculation, vehicle book value, fleet replacement planning, vehicle lifecycle stages | Vehicle Depreciation & Lifecycle Management \| Axpense | Vehicle depreciation and lifecycle management that shows each vehicle’s book value over time, so replacement plans rest on numbers. Book a demo today. | Vehicle Depreciation and Asset Lifecycle Management | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 1162 |
| `/features/drivers` | feature | driver management software | assign drivers to vehicles, driver vehicle assignment, fleet driver records, vehicle handover between drivers, driver accountability | Driver Management Software for Company Fleets \| Axpense | Driver management software that assigns drivers to vehicles and links every inspection and expense to a person, so handovers stay clear. Book a demo. | Driver Management Software: Clear Responsibility for Every Vehicle | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 1061 |
| `/features/expense-management` | feature | fleet expense management software | vehicle expense tracking, fleet expense categories, cost by vehicle, monthly fleet expenses | Fleet Expense Management Software by Vehicle \| Axpense | Fleet expense management software that records repairs, parts, insurance and registration per vehicle, so monthly totals are always ready. Book a demo. | Fleet Expense Management Software That Puts Every Cost on the Right Vehicle | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 1077 |
| `/features/inspection-management` | feature | fleet inspection checklist app | vehicle inspection checklist template, pre-trip inspection checklist, daily vehicle check, digital inspection checklist for fleets | Fleet Inspection Checklist App for Daily Checks \| Axpense | A fleet inspection checklist app for daily, pre-trip and periodic checks, with pass/fail results saved on each vehicle’s history. Book a demo today. | Fleet Inspection Checklist App for Daily, Pre-Trip and Periodic Checks | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 1226 |
| `/features/preventive-maintenance` | feature | preventive maintenance software for fleets | km-based maintenance schedule, vehicle service reminders, preventive maintenance schedule for vehicles, overdue service alerts, mileage-based maintenance | Preventive Maintenance Software for Fleets \| Axpense | Preventive maintenance software for fleets that counts the km left to each service and flags overdue vehicles before they break down. Book a demo. | Preventive Maintenance Software for Fleets, Driven by Kilometres | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 1227 |
| `/features/reports-analytics` | feature | fleet reporting software | fleet dashboard, fleet KPIs, fleet maintenance report, fleet cost report | Fleet Reporting Software and Dashboards \| Axpense | Fleet reporting software with dashboards for services due and overdue, cost by vehicle and category, and cost trends. No spreadsheets. Book a demo. | Fleet Reporting Software: Maintenance and Cost Dashboards Without Spreadsheets | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 1143 |
| `/features/spare-parts` | feature | spare parts management for fleets | fleet spare parts tracking, vehicle parts lifecycle, parts installed per vehicle, spare parts cost per vehicle, fleet parts records | Spare Parts Management for Fleets \| Axpense | Spare parts management for fleets: follow each part from purchase to installation, see which vehicle it went into and what it added to cost. Book a demo. | Spare Parts Management for Fleets, from Purchase to Installation | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 1215 |
| `/features/vehicle-management` | feature | vehicle management software | vehicle management system, company vehicle records, vehicle register, vehicle history record, odometer tracking for fleets | Vehicle Management Software: One Vehicle Record \| Axpense | Vehicle management software that keeps odometer, status, driver, services, inspections and costs on one record per vehicle. See it live: book a demo. | Vehicle Management Software: Every Vehicle on One Record | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 1206 |
| `/fleet-cost-tracking` | commercial | fleet cost tracking software | fleet cost management, fleet expense tracking, vehicle cost tracking, vehicle expense tracking, fleet TCO, vehicle total cost of ownership, fleet cost per km, fleet operating costs | Fleet Cost Tracking Software: TCO & Cost per KM \| Axpense | Fleet cost tracking software that adds up maintenance, parts, insurance and other costs per vehicle, so you can see TCO and cost per km. Book a demo. | Fleet Cost Tracking Software: Know What Every Vehicle Costs | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 1977 |
| `/fleet-maintenance-software` | commercial | fleet maintenance software | vehicle maintenance software, fleet maintenance management system, vehicle maintenance tracking, maintenance scheduling software, vehicle service history, fleet downtime | Fleet Maintenance Software: Preventive Service by KM \| Axpense | Fleet maintenance software that schedules services by kilometres driven, flags overdue vehicles and keeps every service history. Book a demo. | Fleet Maintenance Software for Preventive Vehicle Maintenance | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 1940 |
| `/fleet-management-software` | commercial | fleet management software | fleet management system, fleet management platform, vehicle fleet management software, fleet management solution for businesses, fleet management dashboard | Fleet Management Software for MENA Businesses \| Axpense | Fleet management software that puts vehicles, drivers, km-based maintenance, inspections and costs in one dashboard. Arabic & English. Book a demo. | Fleet Management Software for Complete Fleet Control | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 1807 |
| `/industries` | hub | — |  | Industries \| Axpense | How Axpense supports fleets in logistics, distribution, construction, oil and gas, manufacturing and field services across Egypt and MENA. Book a demo. | Fleet management built for how your industry operates | self | en, ar, x-default | BreadcrumbList | 182 |
| `/industries/construction` | industry | construction fleet and equipment management | construction fleet management software, construction vehicle maintenance, contractor fleet management, site vehicle inspection, construction vehicle depreciation | Construction Fleet and Equipment Management \| Axpense | Construction fleet and equipment management for pickups, tippers and mixers across sites: km-based servicing, site checks and depreciation. Book a demo. | Construction Fleet and Equipment Management Across Every Site | self | en, ar, x-default | BreadcrumbList, FAQPage | 1417 |
| `/industries/distribution` | industry | distribution fleet management | FMCG fleet management, delivery van fleet maintenance, route sales vehicle management, distribution vehicle cost per branch, van fleet driver assignment | Distribution Fleet Management for FMCG Vans \| Axpense | Distribution fleet management for vans across many branches: km-based servicing, clear driver assignment and cost per branch in one system. Book a demo. | Distribution Fleet Management for Vans and Light Trucks Across Every Branch | self | en, ar, x-default | BreadcrumbList, FAQPage | 1446 |
| `/industries/field-services` | industry | field service vehicle management | technician van fleet management, service van maintenance, field service fleet, vehicle handover checklist, maintenance company vehicles | Field Service Vehicle Management for Van Fleets \| Axpense | Field service vehicle management that keeps technician vans available: km-based servicing planned around jobs and clear handovers. Book a demo. | Field Service Vehicle Management That Keeps Technician Vans Ready for the Next Job | self | en, ar, x-default | BreadcrumbList, FAQPage | 1460 |
| `/industries/logistics` | industry | logistics fleet management software | transport fleet management software, truck fleet maintenance, trucking fleet cost per km, logistics vehicle maintenance schedule, haulage fleet management | Logistics Fleet Management Software for Trucks \| Axpense | Logistics fleet management software that schedules truck and van servicing by km and shows cost per vehicle, so fewer break down mid-route. Book a demo. | Logistics Fleet Management Software for High-Mileage Trucks and Vans | self | en, ar, x-default | BreadcrumbList, FAQPage | 1490 |
| `/industries/manufacturing` | industry | manufacturing fleet management | factory vehicle management, staff bus fleet maintenance, company car management for manufacturers, vehicle utilisation, vehicle spare parts inventory | Manufacturing Fleet Management for Factories \| Axpense | Manufacturing fleet management for delivery trucks, staff buses and company cars: km-based servicing, parts tracking and cost per vehicle. Book a demo. | Manufacturing Fleet Management for Delivery Trucks, Staff Buses and Company Cars | self | en, ar, x-default | BreadcrumbList, FAQPage | 1406 |
| `/industries/oil-and-gas` | industry | oil and gas fleet management | oilfield vehicle management, oil and gas vehicle inspection, field vehicle maintenance, pre-trip inspection for field vehicles, oilfield services fleet | Oil and Gas Fleet Management for Field Vehicles \| Axpense | Oil and gas fleet management for remote field vehicles: pre-trip checklists, heavy-duty km service intervals and a full record per vehicle. Book a demo. | Oil and Gas Fleet Management for Remote Field Vehicles | self | en, ar, x-default | BreadcrumbList, FAQPage | 1437 |
| `/locations/egypt` | location | fleet management software in Egypt | fleet management system Egypt, vehicle maintenance software Egypt, fleet management Cairo, company car management Egypt, fleet expense management Egypt | Fleet Management Software in Egypt \| Axpense | Fleet management software in Egypt with km-based service reminders, per-vehicle costs, EGP pricing and an Arabic interface. Live in one day. Book a demo. | Fleet Management Software for Companies in Egypt | self | en-EG, ar-EG, x-default | BreadcrumbList, FAQPage | 1288 |
| `/locations/mena` | location | fleet management software for the Middle East | fleet management software UAE, fleet management system Qatar, fleet management Kuwait, fleet management software GCC, fleet management Jordan, fleet management Iraq | Fleet Management Software for the Middle East \| Axpense | Fleet management software for the Middle East: km-based maintenance, inspections and vehicle costs in Arabic and English, from $40 a month. Book a demo. | Fleet Management Software Across the Middle East & North Africa | self | en, ar, x-default | BreadcrumbList, FAQPage | 1352 |
| `/locations/saudi-arabia` | location | fleet management software in Saudi Arabia | fleet management system Saudi Arabia, fleet management KSA, vehicle maintenance system Saudi Arabia, fleet management Riyadh, company vehicle management Saudi Arabia | Fleet Management Software in Saudi Arabia \| Axpense | Fleet management software in Saudi Arabia: km-based servicing, inspections, per-vehicle costs and SAR pricing, in Arabic and English. Book a demo. | Fleet Management Software for Saudi Businesses | self | en-SA, ar-SA, x-default | BreadcrumbList, FAQPage | 1206 |
| `/pricing` | page | — |  | Pricing \| Axpense | Axpense plans start at $40 a month (2,000 EGP · 150 SAR). Start with a 14-day free trial, no credit card required, or book a demo with our team. | Choose Your Perfect Plan | self | en, ar, x-default | BreadcrumbList | 140 |
| `/resources` | hub | — |  | Free Fleet Resources \| Axpense | Free fleet tools and guides: a cost per km calculator, a vehicle inspection checklist, a preventive maintenance checklist and practical fleet articles. | Free tools and guides for fleet teams | self | en, ar, x-default | BreadcrumbList | 175 |
| `/resources/fleet-cost-calculator` | tool | fleet cost per km calculator |  | Fleet Cost per KM Calculator (with TCO) \| Axpense | Free fleet cost per km calculator: enter price, resale value, km and running costs to get cost per km, annual cost and lifecycle TCO for each vehicle. | Fleet Cost per KM Calculator | self | en, ar, x-default | WebApplication, BreadcrumbList, FAQPage | 1549 |
| `/resources/preventive-maintenance-checklist` | tool | fleet preventive maintenance checklist |  | Fleet Preventive Maintenance Checklist \| Axpense | Free fleet preventive maintenance checklist with km-based service intervals for oil, filters, brakes, tyres and fluids. View it online or print the PDF. | Fleet Preventive Maintenance Checklist by Kilometre | self | en, ar, x-default | WebApplication, BreadcrumbList, FAQPage | 1274 |
| `/resources/vehicle-inspection-checklist` | tool | vehicle inspection checklist |  | Free Vehicle Inspection Checklist (PDF) \| Axpense | Free vehicle inspection checklist for fleets: tyres, lights, fluids, brakes, safety kit and documents. Tick it online or print the PDF for your drivers. | Free Vehicle Inspection Checklist | self | en, ar, x-default | WebApplication, BreadcrumbList, FAQPage | 1335 |
| `/solutions` | hub | — |  | Solutions \| Axpense | Axpense solutions: fleet management software, fleet maintenance software, fleet cost tracking and vehicle inspection software for Egypt and MENA. | Axpense fleet management solutions | self | en, ar, x-default | BreadcrumbList | 145 |
| `/vehicle-inspection-software` | commercial | vehicle inspection software | fleet inspection software, digital vehicle inspection, vehicle inspection app, fleet inspection checklist, vehicle defect tracking | Vehicle Inspection Software & Digital Checklists \| Axpense | Vehicle inspection software with your own checklists, pass/fail results and failed items kept on each vehicle’s record for follow-up. Book a demo. | Vehicle Inspection Software for Digital Fleet Inspections | self | en, ar, x-default | BreadcrumbList, FAQPage, SoftwareApplication | 1597 |

## 3. Redirects added (all 308, single hop, in `redirects.js`)

| From | To |
|---|---|
| `/ar-ae` | `/ar/locations/mena` |
| `/ar-eg` | `/ar/locations/egypt` |
| `/ar-iq` | `/ar/locations/mena` |
| `/ar-jo` | `/ar/locations/mena` |
| `/ar-mena` | `/ar/locations/mena` |
| `/ar-qa` | `/ar/locations/mena` |
| `/ar-sa` | `/ar/locations/saudi-arabia` |
| `/ar/asset-management` | `/ar/features/asset-management` |
| `/ar/features/fleet-maintenance` | `/ar/fleet-maintenance-software` |
| `/ar/features/fleet-management` | `/ar/fleet-management-software` |
| `/ar/fleet-maintenance` | `/ar/fleet-maintenance-software` |
| `/ar/fleet-management` | `/ar/fleet-management-software` |
| `/ar/fuel-management` | `/ar/features/fuel-management` |
| `/ar/industries/energy-utilities` | `/ar/industries/oil-and-gas` |
| `/ar/industries/transportation` | `/ar/industries/logistics` |
| `/ar/preventive-maintenance` | `/ar/features/preventive-maintenance` |
| `/ar/solutions/asset-lifecycle-management` | `/ar/features/asset-management` |
| `/ar/solutions/equipment-cost-management` | `/ar/fleet-cost-tracking` |
| `/ar/solutions/fleet-cost-management` | `/ar/fleet-cost-tracking` |
| `/ar/solutions/fleet-maintenance-management` | `/ar/fleet-maintenance-software` |
| `/ar/vehicle-management` | `/ar/features/vehicle-management` |
| `/ar/work-orders` | `/ar/features/work-orders` |
| `/blog/what-is-fleet-management` | `/blog/what-is-fleet-management-software` |
| `/en-ae` | `/locations/mena` |
| `/en-eg` | `/locations/egypt` |
| `/en-iq` | `/locations/mena` |
| `/en-jo` | `/locations/mena` |
| `/en-mena` | `/locations/mena` |
| `/en-qa` | `/locations/mena` |
| `/en-sa` | `/locations/saudi-arabia` |
| `/features/fleet-maintenance` | `/fleet-maintenance-software` |
| `/features/fleet-management` | `/fleet-management-software` |
| `/industries/energy-utilities` | `/industries/oil-and-gas` |
| `/industries/transportation` | `/industries/logistics` |
| `/solutions/asset-lifecycle-management` | `/features/asset-management` |
| `/solutions/equipment-cost-management` | `/fleet-cost-tracking` |
| `/solutions/fleet-cost-management` | `/fleet-cost-tracking` |
| `/solutions/fleet-maintenance-management` | `/fleet-maintenance-software` |

**Canonical host:** 308 from `axpense-website.vercel.app` and `axpense.net` to `https://axpense.net`. It is implemented but only active with `ENFORCE_CANONICAL_HOST=true`. Switch it on once the domain serves this deployment.

## 4. Sitemap and robots

- **`app/sitemap.ts`:** single sitemap with 83 URLs. Every entry has:
  - a real `lastmod`: `updatedAt` in the content files, or `content/page-dates.ts` for other pages;
  - hreflang alternates, using regional codes on location pages.
  
  Excluded: `/admin`, `/api`, `/landing/*`, noindex pages, redirected URLs and drafts. English-only articles have no Arabic alternate.
- **`app/robots.ts`:** allows everything, disallows `/admin` and `/api/`, and doesn't block `/_next`. It declares `Host` and the sitemap URL.

## 5. Internal links for the commercial pages

"Linking pages" counts other crawled pages that contain a link to the page. The footer "Software" column links all four commercial pages from every page.

| Page | Pages linking to it (whole page incl. footer) | Pages linking to it from body content | Internal links out (body) |
|---|---|---|---|
| `/fleet-management-software` | 50 | 23 | 28 |
| `/fleet-maintenance-software` | 50 | 26 | 19 |
| `/fleet-cost-tracking` | 50 | 23 | 16 |
| `/vehicle-inspection-software` | 50 | 12 | 18 |
| `/ar/fleet-management-software` | 40 | 21 | 28 |
| `/ar/fleet-maintenance-software` | 40 | 23 | 19 |
| `/ar/fleet-cost-tracking` | 40 | 20 | 16 |
| `/ar/vehicle-inspection-software` | 40 | 11 | 18 |

**Other link paths:**
- The footer has new "Software" and "Locations" columns, generated from content data.
- `/solutions` lists the commercial pages first.
- Feature, industry and location pages link up to their parent commercial page.
- Blog articles link to one commercial page plus 2–3 related pages.
- Related-link blocks are data-driven (`relatedPages`, `relatedIndustries`, `relatedArticles`).
- Anchors are page labels, never "learn more".
- Links to gated pages are removed automatically (`content/registry.ts`).

## 6. Arabic content marked `needs-native-review`

All Arabic in these files was written by Claude. It needs a native business-Arabic review before launch, especially titles, H1s and meta descriptions.

- `content/blog/ar/fleet-total-cost-of-ownership.ts`
- `content/blog/ar/km-based-preventive-maintenance.ts`
- `content/blog/ar/vehicle-cost-per-km.ts`
- `content/blog/ar/what-is-fleet-management-software.ts`
- `content/seo/commercial.ts`
- `content/seo/commercial/fleet-cost-tracking.ts`
- `content/seo/commercial/fleet-maintenance-software.ts`
- `content/seo/commercial/vehicle-inspection-software.ts`
- `content/seo/features/asset-management.ts`
- `content/seo/features/drivers.ts`
- `content/seo/features/expense-management.ts`
- `content/seo/features/fuel-management.ts`
- `content/seo/features/inspection-management.ts`
- `content/seo/features/preventive-maintenance.ts`
- `content/seo/features/reports-analytics.ts`
- `content/seo/features/spare-parts.ts`
- `content/seo/features/vehicle-management.ts`
- `content/seo/features/work-orders.ts`
- `content/seo/industries/construction.ts`
- `content/seo/industries/distribution.ts`
- `content/seo/industries/field-services.ts`
- `content/seo/industries/logistics.ts`
- `content/seo/industries/manufacturing.ts`
- `content/seo/industries/oil-and-gas.ts`
- `content/seo/locations/egypt.ts`
- `content/seo/locations/mena.ts`
- `content/seo/locations/saudi-arabia.ts`
- `content/tools/checklist-data.ts`
- `content/tools/fleet-cost-calculator.ts`
- `content/tools/preventive-maintenance-checklist.ts`
- `content/tools/vehicle-inspection-checklist.ts`

Arabic keyword volumes weren't checked: Keyword Planner and Search Console aren't available in this environment. The keywords follow the brief's map as written.

## 7. Capabilities still `unconfirmed` (questions for the owner)

Content for each of these is written but hidden until you switch the flag to `'confirmed'` in `lib/capabilities.ts` and rebuild. Pages, links, sitemap and schema follow automatically.

1. **Work orders** (`workOrders`). The app sidebar shows "Work Orders". Can a service or failed inspection become a tracked work order? Confirming this unhides `/features/work-orders` and the related steps and FAQs.
2. **Inspection photos** (`inspectionPhotos`). Can photos be attached to failed checklist items?
3. **Inspection → work order** (`inspectionToWorkOrder`). Does a failed item create a work order automatically?
4. **Fuel module** (`fuelModule`) and **fuel as an expense category** (`fuelAsExpense`). `/features/fuel-management` stays noindex until confirmed.
5. **Budgets / budget vs actual** (`budgets`).
6. **Document expiry reminders** (`documentExpiryReminders`): licence, registration and insurance renewals.
7. **Multi-currency inside the app** (`multiCurrency`).
8. **GPS / tracking** (`gps`) and **route optimisation** (`routeOptimization`).
9. **AI features** (`ai`), **public API** (`publicApi`), **mobile app** (`mobileApp`), **white-label** (`whiteLabel`), **SSO** (`sso`).
10. **Added during implementation:** non-vehicle equipment and assets (`equipmentAssets`), engine-hour maintenance (`hourBasedMaintenance`), users and roles (`usersRoles`), a standalone issues list (`issues`).

**Frozen homepage.** Rule 3 wins over rule 4, so the homepage still shows some unconfirmed claims:
- the industry cards mention "Real-time GPS tracking" and "Route optimization";
- the pricing preview lists plan features such as GPS, API, mobile app, AI and white-label;
- the modules strip shows Work Orders, Issues and Users & Roles.

`/pricing` hides the unconfirmed plan features. Decide whether to unfreeze those homepage items.

## 8. Owner inputs still needed

- **Domain:** confirm `axpense.net` points to this deployment, then set `ENFORCE_CANONICAL_HOST=true`.
- **Author:** a real named author with a short bio. Until then, articles use the Organization as author.
- **UAE:** yes or no to a dedicated location page. Today it is a section of `/locations/mena`.
- **Screenshots:** the current ones come from an HTML mock. Replace them with real app screens (inspections, spare parts, depreciation and costs are missing). Files are in `public/screens/*` under descriptive names.
- **Company address:** only if you want a Google Business Profile, and only if real. No LocalBusiness schema was added.
- **Search Console:** `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and `NEXT_PUBLIC_BING_SITE_VERIFICATION`.
- **Legal and GTM:** final legal pages, then `NEXT_PUBLIC_ENABLE_GTM=true` together with `NEXT_PUBLIC_GTM_ID`.

## 9. Audit and Lighthouse results

**`npm run seo:audit`:** 0 errors, 0 warnings. It checks:
- status codes and single H1s;
- canonicals, and reciprocal hreflang with self-reference and x-default;
- sitemap ↔ index consistency;
- duplicate or empty titles and descriptions;
- JSON-LD parsing;
- broken or redirecting internal links;
- minimum word counts per page type (Arabic at 60 %);
- the intended 404.

**Lighthouse** (local, mobile preset, one run each; this sandbox CPU is slower and noisier than CI):

| URL | Performance | Accessibility | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|
| `/` | 0.96 | 0.96 | 1.00 | 2.26 s | 0 | 166 ms |
| `/fleet-maintenance-software` | 0.94 (median of 3 after the Button change; 0.87–0.92 before) | 0.96 | 1.00 | 2.55 s | 0 | 202 ms (median; 243–382 ms before) |
| `/ar` | 0.94 | 0.96 | 1.00 | 2.55 s | 0 | 184 ms |

**CI** (`.github/workflows/ci.yml`) runs build → SEO audit → Lighthouse CI (`lighthouserc.json`, median of 3 runs).
- **Budgets:** performance ≥ 0.85, SEO ≥ 0.95, LCP ≤ 3.0 s, CLS ≤ 0.1, TBT ≤ 300 ms.
- **INP:** covered by TBT in the lab and by field data in Search Console.
- **Risk:** TBT on long pages is close to the budget. `Button` was made a server component to cut client JavaScript, which brought the median TBT from about 300 ms down to about 200 ms on the longest commercial page. The sandbox shows occasional outliers.

## 10. Remaining gaps and next steps

1. **Search Console:** verify the domain, submit `https://axpense.net/sitemap.xml`, then run `npm run indexnow` after each deploy. Review monthly:
   - high-impression / low-CTR pages → rewrite titles and descriptions;
   - positions 5–20 → expand content and add internal links;
   - queries landing on the wrong page → fix cannibalisation (keyword map in `docs/seo/content-brief.md`).
2. **Backend blog:** the public blog still reads static files. They use the same fields as the backend `BlogPost`, so moving to `/api/public/blog` is a data copy. Regenerate `backend/.../Seed/blog-posts.json` from `content/blog` when switching.
3. **Arabic review:** native review of all files in §6.
4. **Legacy industry pages:** rebuild the three to full quality or retire them.
5. **Keyword volumes:** check Arabic keyword volumes for Egypt and Saudi in Keyword Planner, and swap headings where volume favours another phrase.
6. **Next blog cluster**, 4–6 posts a month: fleet management KPIs, how to choose fleet management software, vehicle service history, fleet budget management, vehicle replacement planning, depreciation methods, pre-trip inspection, defect management.
7. **Real screenshots:** replace the mock screenshots and add per-page OG images for the commercial pages.

## Update: 30 Sep 2026, pricing and features

- **Now live:** `/features/fuel-management` and `/features/work-orders` are confirmed and indexable. Alerts are confirmed. The mobile app is shown as coming soon.
- **Per-vehicle pricing:** replaces the Starter/Professional plans everywhere: the homepage, the pricing page, market pages, industry pages and the blog. See `docs/pricing.md`.
- **Structured data:** the SoftwareApplication schema uses an AggregateOffer in USD and EGP.
- **Checks:** SEO audit found 0 errors and 0 warnings. The .NET Core tests pass 41/41.
