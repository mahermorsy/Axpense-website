import type { FeaturePageData } from '@/components/FeaturePage';

// Feature pages (/features/<slug> and /ar/features/<slug>). Links are
// English paths; the page template localizes them.
export type FeatureEntry = { jsonLdName: string; en: FeaturePageData; ar: FeaturePageData };

export const FEATURES: Record<string, FeatureEntry> = {
  'fleet-management': {
    jsonLdName: 'Axpense Fleet Management',
    en: {
      title: 'Fleet Management Software for Egyptian Businesses',
      metaTitle: 'Fleet Management Software in Egypt',
      description: 'Track every vehicle, driver, and document in one platform. Fleet management software built for logistics, transportation, and delivery operations in Egypt.',
      intro: 'Register, track, and manage every vehicle in your fleet — with driver assignments, documents, and status all in one place instead of spread across spreadsheets and WhatsApp.',
      capabilities: [
        { title: 'Vehicle registry', desc: 'Keep make, model, plate number, registration, and ownership details for every vehicle in one record.' },
        { title: 'Driver assignment', desc: 'Assign drivers to vehicles, track licenses, and see who is responsible for what.' },
        { title: 'Document tracking', desc: 'Store licenses, insurance, and registration papers with renewal reminders before they expire.' },
        { title: 'Vehicle status', desc: 'See at a glance which vehicles are active, in maintenance, or out of service.' },
        { title: 'Utilization view', desc: 'Understand which vehicles are earning their keep and which are sitting idle.' },
        { title: 'Centralized records', desc: 'Replace scattered spreadsheets and paper files with one searchable system.' },
      ],
      relatedFeatures: [
        { label: 'Maintenance Management', href: '/features/fleet-maintenance' },
        { label: 'Expense Management', href: '/features/expense-management' },
        { label: 'Reports & Analytics', href: '/features/reports-analytics' },
      ],
    },
    ar: {
      title: 'برنامج إدارة الأسطول للشركات في مصر',
      metaTitle: 'برنامج إدارة الأسطول في مصر',
      description: 'تتبع كل مركبة وسائق ومستند في منصة واحدة. برنامج إدارة أسطول مصمم لشركات الخدمات اللوجستية والنقل والتوصيل في مصر.',
      intro: 'سجّل وتابع وأدر كل مركبة في أسطولك — مع تعيين السائقين والمستندات والحالة في مكان واحد بدلًا من توزيعها بين جداول إكسل وواتساب.',
      capabilities: [
        { title: 'سجل المركبات', desc: 'احتفظ ببيانات الماركة والطراز ورقم اللوحة والترخيص والملكية لكل مركبة في سجل واحد.' },
        { title: 'تعيين السائقين', desc: 'اربط السائقين بالمركبات، وتابع رخصهم، واعرف المسؤول عن كل مركبة.' },
        { title: 'تتبع المستندات', desc: 'احفظ الرخص والتأمين وأوراق الترخيص مع تذكير بالتجديد قبل انتهائها.' },
        { title: 'حالة المركبة', desc: 'اعرف فورًا أي المركبات نشطة أو في الصيانة أو خارج الخدمة.' },
        { title: 'معدل الاستخدام', desc: 'افهم أي المركبات تُستغل جيدًا وأيها متوقفة دون داعٍ.' },
        { title: 'سجلات مركزية', desc: 'استبدل الجداول والملفات الورقية المتناثرة بنظام واحد قابل للبحث.' },
      ],
      relatedFeatures: [
        { label: 'إدارة الصيانة', href: '/features/fleet-maintenance' },
        { label: 'إدارة المصروفات', href: '/features/expense-management' },
        { label: 'التقارير والتحليلات', href: '/features/reports-analytics' },
      ],
    },
  },

  'fleet-maintenance': {
    jsonLdName: 'Axpense Maintenance Management',
    en: {
      title: 'Fleet Maintenance Software',
      metaTitle: 'Fleet Maintenance Software in Egypt',
      description: 'Schedule preventive maintenance, manage work orders, and track repair history. Fleet maintenance software that catches problems before they cause downtime.',
      intro: 'Stop reacting to breakdowns. Plan preventive maintenance on a schedule, open work orders when something needs attention, and keep a full repair history per vehicle.',
      capabilities: [
        { title: 'Preventive schedules', desc: 'Set maintenance intervals by mileage or time, and get reminded before service is due.' },
        { title: 'Work orders', desc: 'Create, assign, and track work orders from request through completion.' },
        { title: 'Repair history', desc: 'See every service event for a vehicle in one timeline, not scattered receipts.' },
        { title: 'Downtime tracking', desc: 'Know how much time and money each vehicle loses to maintenance.' },
        { title: 'Parts & cost log', desc: 'Record parts used and labor cost per work order for accurate cost tracking.' },
        { title: 'Service reminders', desc: 'Automatic alerts before maintenance is overdue, not after something breaks.' },
      ],
      relatedFeatures: [
        { label: 'Fleet Management', href: '/features/fleet-management' },
        { label: 'Inspections', href: '/features/inspection-management' },
        { label: 'Expense Management', href: '/features/expense-management' },
      ],
    },
    ar: {
      title: 'برنامج صيانة الأسطول',
      metaTitle: 'برنامج إدارة صيانة الأسطول في مصر',
      description: 'جدولة الصيانة الوقائية وإدارة أوامر الشغل وتتبع سجل الإصلاحات. برنامج صيانة أسطول يكتشف المشكلات قبل أن تسبب توقفًا.',
      intro: 'توقف عن التعامل مع الأعطال بعد وقوعها. خطط للصيانة الوقائية وفق جدول، وافتح أوامر شغل عندما يحتاج شيء إلى تدخل، واحتفظ بسجل إصلاحات كامل لكل مركبة.',
      capabilities: [
        { title: 'جداول الصيانة الوقائية', desc: 'حدد فترات الصيانة بالمسافة أو الزمن، واحصل على تذكير قبل موعدها.' },
        { title: 'أوامر الشغل', desc: 'أنشئ أوامر الشغل وعيّنها وتابعها من الطلب حتى الإنجاز.' },
        { title: 'سجل الإصلاحات', desc: 'اطّلع على كل عملية صيانة للمركبة في جدول زمني واحد، لا في إيصالات متناثرة.' },
        { title: 'تتبع التوقف', desc: 'اعرف كم من الوقت والمال تخسره كل مركبة بسبب الصيانة.' },
        { title: 'سجل قطع الغيار والتكلفة', desc: 'سجّل القطع المستخدمة وتكلفة العمالة لكل أمر شغل لتتبع دقيق للتكاليف.' },
        { title: 'تذكيرات الصيانة', desc: 'تنبيهات تلقائية قبل تأخر الصيانة، لا بعد حدوث العطل.' },
      ],
      relatedFeatures: [
        { label: 'إدارة الأسطول', href: '/features/fleet-management' },
        { label: 'الفحوصات', href: '/features/inspection-management' },
        { label: 'إدارة المصروفات', href: '/features/expense-management' },
      ],
    },
  },

  'vehicle-management': {
    jsonLdName: 'Axpense Vehicle Management',
    en: {
      title: 'Vehicle Management Software for Growing Fleets',
      metaTitle: 'Vehicle Management Software in Egypt',
      description: 'Manage vehicle records, drivers, documents, assignments, status and operating history in one vehicle management system.',
      intro: 'Keep every vehicle record current and connected to the driver, maintenance, inspections and expenses that belong to it.',
      capabilities: [
        { title: 'Complete vehicle records', desc: 'Store identification, ownership, model, registration and operational information in one searchable record.' },
        { title: 'Driver assignments', desc: 'Connect drivers to vehicles and keep responsibility visible for the current assignment.' },
        { title: 'Document tracking', desc: 'Keep registration, license and insurance information organized with renewal dates.' },
        { title: 'Vehicle status', desc: 'Know which vehicles are active, available, under maintenance or otherwise unavailable.' },
        { title: 'History in context', desc: 'Connect maintenance, inspections, fuel and expenses to the vehicle record instead of separate files.' },
        { title: 'Searchable fleet data', desc: 'Give operations teams a single place to find the vehicle information they need.' },
      ],
      outcomes: ['Less time spent reconciling vehicle records', 'Clearer responsibility for vehicle assignments', 'A single operational history for each vehicle', 'Better visibility into vehicle status and cost'],
      relatedFeatures: [
        { label: 'Fleet Management', href: '/features/fleet-management' },
        { label: 'Fleet Maintenance', href: '/features/fleet-maintenance' },
        { label: 'Fuel Management', href: '/features/fuel-management' },
        { label: 'Expense Management', href: '/features/expense-management' },
      ],
    },
    ar: {
      title: 'برنامج إدارة المركبات للأساطيل النامية',
      metaTitle: 'برنامج إدارة المركبات في مصر',
      description: 'إدارة بيانات المركبات والسائقين والمستندات والتعيينات والحالة وسجل التشغيل في نظام واحد لإدارة المركبات.',
      intro: 'حافظ على تحديث سجل كل مركبة وربطه بالسائق والصيانة والفحوصات والمصروفات الخاصة بها.',
      capabilities: [
        { title: 'سجلات مركبات كاملة', desc: 'احفظ بيانات التعريف والملكية والطراز والترخيص والتشغيل في سجل واحد قابل للبحث.' },
        { title: 'تعيين السائقين', desc: 'اربط السائقين بالمركبات وأبقِ المسؤولية عن التعيين الحالي واضحة.' },
        { title: 'تتبع المستندات', desc: 'نظّم بيانات الترخيص والرخص والتأمين مع مواعيد التجديد.' },
        { title: 'حالة المركبة', desc: 'اعرف أي المركبات نشطة أو متاحة أو في الصيانة أو غير متاحة لسبب آخر.' },
        { title: 'سجل مترابط', desc: 'اربط الصيانة والفحوصات والوقود والمصروفات بسجل المركبة بدلًا من ملفات منفصلة.' },
        { title: 'بيانات أسطول قابلة للبحث', desc: 'امنح فرق التشغيل مكانًا واحدًا للعثور على بيانات المركبات التي تحتاجها.' },
      ],
      outcomes: ['وقت أقل في مطابقة سجلات المركبات', 'مسؤولية أوضح عن تعيين المركبات', 'سجل تشغيلي واحد لكل مركبة', 'رؤية أفضل لحالة المركبات وتكلفتها'],
      relatedFeatures: [
        { label: 'إدارة الأسطول', href: '/features/fleet-management' },
        { label: 'صيانة الأسطول', href: '/features/fleet-maintenance' },
        { label: 'إدارة الوقود', href: '/features/fuel-management' },
        { label: 'إدارة المصروفات', href: '/features/expense-management' },
      ],
    },
  },

  'asset-management': {
    jsonLdName: 'Axpense Asset Management',
    en: {
      title: 'Asset Management Software',
      metaTitle: 'Asset Management Software in Egypt',
      description: 'Manage vehicles, equipment, and tools across their full lifecycle. Asset management software with automated depreciation and real-time book values.',
      intro: 'Beyond vehicles — track equipment, tools, and other physical assets from acquisition to disposal, with depreciation calculated automatically.',
      capabilities: [
        { title: 'Asset lifecycle', desc: 'Track each asset from purchase through assignment, service, and eventual disposal.' },
        { title: 'Automated depreciation', desc: 'Book values update automatically as assets age, instead of a manual spreadsheet.' },
        { title: 'Assignment tracking', desc: 'Know which team, site, or person currently holds each piece of equipment.' },
        { title: 'Financial reporting', desc: 'Export asset values and depreciation schedules for accounting.' },
        { title: 'Custom asset types', desc: 'Track equipment and tools alongside vehicles, not in a separate system.' },
        { title: 'Disposal records', desc: 'Log retirement, sale, or write-off with the reason and date on record.' },
      ],
      relatedFeatures: [
        { label: 'Fleet Management', href: '/features/fleet-management' },
        { label: 'Expense Management', href: '/features/expense-management' },
        { label: 'Reports & Analytics', href: '/features/reports-analytics' },
      ],
    },
    ar: {
      title: 'برنامج إدارة الأصول',
      metaTitle: 'برنامج إدارة الأصول في مصر',
      description: 'إدارة المركبات والمعدات والأدوات عبر دورة حياتها الكاملة. برنامج إدارة أصول مع احتساب الإهلاك تلقائيًا والقيمة الدفترية لحظيًا.',
      intro: 'أبعد من المركبات — تتبع المعدات والأدوات وباقي الأصول المادية من الاقتناء حتى التخلص منها، مع احتساب الإهلاك تلقائيًا.',
      capabilities: [
        { title: 'دورة حياة الأصل', desc: 'تتبع كل أصل من الشراء إلى التخصيص والصيانة وحتى التخلص منه.' },
        { title: 'إهلاك تلقائي', desc: 'تُحدَّث القيمة الدفترية تلقائيًا مع تقادم الأصل، بدلًا من جدول يدوي.' },
        { title: 'تتبع التخصيص', desc: 'اعرف أي فريق أو موقع أو شخص يحتفظ حاليًا بكل معدة.' },
        { title: 'تقارير مالية', desc: 'صدّر قيم الأصول وجداول الإهلاك لقسم المحاسبة.' },
        { title: 'أنواع أصول مخصصة', desc: 'تتبع المعدات والأدوات جنبًا إلى جنب مع المركبات، لا في نظام منفصل.' },
        { title: 'سجلات التخلص', desc: 'وثّق الإخراج من الخدمة أو البيع أو الشطب مع السبب والتاريخ.' },
      ],
      relatedFeatures: [
        { label: 'إدارة الأسطول', href: '/features/fleet-management' },
        { label: 'إدارة المصروفات', href: '/features/expense-management' },
        { label: 'التقارير والتحليلات', href: '/features/reports-analytics' },
      ],
    },
  },

  'expense-management': {
    jsonLdName: 'Axpense Expense Management',
    en: {
      title: 'Fleet Expense Management Software',
      metaTitle: 'Fleet Expense Management Software',
      description: 'Track fuel, repairs, and operating expenses by vehicle. Fleet cost tracking software that shows where your operating budget actually goes.',
      intro: 'Every fuel receipt, repair bill, and operating cost logged against the vehicle or asset it belongs to — so month-end isn’t a scramble to reconstruct what happened.',
      capabilities: [
        { title: 'Fuel cost tracking', desc: 'Log fuel purchases per vehicle and watch consumption trends over time.' },
        { title: 'Expense categorization', desc: 'Sort spend into fuel, repairs, insurance, and other categories automatically.' },
        { title: 'Cost per vehicle', desc: 'See total operating cost per vehicle, not just a lump sum for the whole fleet.' },
        { title: 'Budget vs. actual', desc: 'Compare planned budgets against what’s actually being spent, by period.' },
        { title: 'Receipts & records', desc: 'Attach receipts and invoices directly to the expense they belong to.' },
        { title: 'Cost trend reports', desc: 'Spot rising costs early instead of discovering them at year-end.' },
      ],
      relatedFeatures: [
        { label: 'Fleet Management', href: '/features/fleet-management' },
        { label: 'Reports & Analytics', href: '/features/reports-analytics' },
        { label: 'Depreciation & Financials', href: '/features/asset-management' },
      ],
    },
    ar: {
      title: 'برنامج إدارة مصروفات الأسطول',
      metaTitle: 'برنامج إدارة مصروفات الأسطول',
      description: 'تتبع الوقود والإصلاحات ومصروفات التشغيل لكل مركبة. برنامج لتتبع تكاليف الأسطول يوضح أين تذهب ميزانية التشغيل فعلًا.',
      intro: 'كل إيصال وقود وفاتورة إصلاح وتكلفة تشغيل مسجلة على المركبة أو الأصل الذي تخصه — فلا تصبح نهاية الشهر سباقًا لإعادة تجميع ما حدث.',
      capabilities: [
        { title: 'تتبع تكلفة الوقود', desc: 'سجّل مشتريات الوقود لكل مركبة وتابع اتجاهات الاستهلاك بمرور الوقت.' },
        { title: 'تصنيف المصروفات', desc: 'صنّف الإنفاق إلى وقود وإصلاحات وتأمين وفئات أخرى تلقائيًا.' },
        { title: 'التكلفة لكل مركبة', desc: 'اطّلع على إجمالي تكلفة التشغيل لكل مركبة، لا مجرد رقم إجمالي للأسطول.' },
        { title: 'الميزانية مقابل الفعلي', desc: 'قارن الميزانيات المخططة بالإنفاق الفعلي حسب الفترة.' },
        { title: 'الإيصالات والسجلات', desc: 'أرفق الإيصالات والفواتير مباشرة بالمصروف الذي تخصه.' },
        { title: 'تقارير اتجاه التكاليف', desc: 'اكتشف ارتفاع التكاليف مبكرًا بدلًا من اكتشافه في نهاية العام.' },
      ],
      relatedFeatures: [
        { label: 'إدارة الأسطول', href: '/features/fleet-management' },
        { label: 'التقارير والتحليلات', href: '/features/reports-analytics' },
        { label: 'الإهلاك والبيانات المالية', href: '/features/asset-management' },
      ],
    },
  },

  'fuel-management': {
    jsonLdName: 'Axpense Fuel Management',
    en: {
      title: 'Fuel Management Software for Fleet Operations',
      metaTitle: 'Fuel Management Software in Egypt',
      description: 'Track fuel purchases, fuel costs and vehicle fuel activity in one system to understand fleet operating costs.',
      intro: 'Record fuel activity against the vehicle it belongs to and connect fuel spend with the wider cost picture of your fleet.',
      capabilities: [
        { title: 'Fuel transaction records', desc: 'Capture fuel purchases with the vehicle, date, quantity and cost information your team needs.' },
        { title: 'Vehicle-level fuel costs', desc: 'See fuel spending in the context of each vehicle instead of one unstructured total.' },
        { title: 'Fuel history', desc: 'Keep a searchable history of fuel activity for operational review and reporting.' },
        { title: 'Cost reporting', desc: 'Combine fuel data with maintenance and other expenses for a clearer fleet cost view.' },
        { title: 'Operational visibility', desc: 'Give managers a consistent record of fuel activity across the fleet.' },
        { title: 'Connected records', desc: 'Link fuel information to vehicle records and reports instead of separate spreadsheets.' },
      ],
      outcomes: ['A clearer picture of fuel operating costs', 'Less manual reconciliation of fuel records', 'Vehicle-level cost visibility for fleet reviews', 'Better inputs for fleet cost reports'],
      relatedFeatures: [
        { label: 'Vehicle Management', href: '/features/vehicle-management' },
        { label: 'Expense Management', href: '/features/expense-management' },
        { label: 'Fleet Cost Management', href: '/solutions/fleet-cost-management' },
        { label: 'Reports & Analytics', href: '/features/reports-analytics' },
      ],
    },
    ar: {
      title: 'برنامج إدارة الوقود لتشغيل الأساطيل',
      metaTitle: 'برنامج إدارة الوقود في مصر',
      description: 'تتبع مشتريات الوقود وتكاليفه ونشاط الوقود لكل مركبة في نظام واحد لفهم تكاليف تشغيل الأسطول.',
      intro: 'سجّل نشاط الوقود على المركبة التي يخصها، واربط الإنفاق على الوقود بالصورة الأشمل لتكاليف أسطولك.',
      capabilities: [
        { title: 'سجلات عمليات الوقود', desc: 'سجّل مشتريات الوقود مع المركبة والتاريخ والكمية والتكلفة التي يحتاجها فريقك.' },
        { title: 'تكلفة الوقود لكل مركبة', desc: 'اطّلع على الإنفاق على الوقود في سياق كل مركبة بدلًا من إجمالي غير منظم.' },
        { title: 'سجل الوقود', desc: 'احتفظ بسجل قابل للبحث لنشاط الوقود للمراجعة التشغيلية والتقارير.' },
        { title: 'تقارير التكاليف', desc: 'ادمج بيانات الوقود مع الصيانة والمصروفات الأخرى لرؤية أوضح لتكاليف الأسطول.' },
        { title: 'رؤية تشغيلية', desc: 'امنح المديرين سجلًا موحدًا لنشاط الوقود عبر الأسطول.' },
        { title: 'سجلات مترابطة', desc: 'اربط بيانات الوقود بسجلات المركبات والتقارير بدلًا من جداول منفصلة.' },
      ],
      outcomes: ['صورة أوضح لتكاليف تشغيل الوقود', 'مطابقة يدوية أقل لسجلات الوقود', 'رؤية التكلفة لكل مركبة عند مراجعة الأسطول', 'مدخلات أفضل لتقارير تكاليف الأسطول'],
      relatedFeatures: [
        { label: 'إدارة المركبات', href: '/features/vehicle-management' },
        { label: 'إدارة المصروفات', href: '/features/expense-management' },
        { label: 'إدارة تكاليف الأسطول', href: '/solutions/fleet-cost-management' },
        { label: 'التقارير والتحليلات', href: '/features/reports-analytics' },
      ],
    },
  },

  'inspection-management': {
    jsonLdName: 'Axpense Inspections',
    en: {
      title: 'Vehicle Inspection Software',
      metaTitle: 'Vehicle Inspection & Compliance Software',
      description: 'Digital inspection forms, safety checks, and compliance documentation in one place. Vehicle inspection software that replaces paper checklists.',
      intro: 'Move inspections off paper. Drivers complete digital checklists, failed items get flagged automatically, and every inspection is on record for compliance.',
      capabilities: [
        { title: 'Digital checklists', desc: 'Build inspection forms once and reuse them across every vehicle or asset type.' },
        { title: 'Failed item flags', desc: 'Anything that fails an inspection is flagged and can trigger a work order.' },
        { title: 'Photo evidence', desc: 'Attach photos to inspection items so issues are documented, not just described.' },
        { title: 'Compliance record', desc: 'Keep a full history of inspections for audits and regulatory requirements.' },
        { title: 'Scheduled inspections', desc: 'Set recurring inspection schedules so nothing gets skipped.' },
        { title: 'Driver accountability', desc: 'Know who completed which inspection and when.' },
      ],
      relatedFeatures: [
        { label: 'Maintenance Management', href: '/features/fleet-maintenance' },
        { label: 'Fleet Management', href: '/features/fleet-management' },
        { label: 'Reports & Analytics', href: '/features/reports-analytics' },
      ],
    },
    ar: {
      title: 'برنامج فحص المركبات',
      metaTitle: 'برنامج فحص المركبات والالتزام',
      description: 'استمارات فحص رقمية وفحوصات سلامة وتوثيق للالتزام في مكان واحد. برنامج فحص مركبات يحل محل قوائم الفحص الورقية.',
      intro: 'انقل الفحوصات من الورق. يكمل السائقون قوائم فحص رقمية، وتُعلَّم البنود غير المطابقة تلقائيًا، ويُحفظ كل فحص في السجل لأغراض الالتزام.',
      capabilities: [
        { title: 'قوائم فحص رقمية', desc: 'أنشئ استمارات الفحص مرة واحدة وأعد استخدامها لكل نوع مركبة أو أصل.' },
        { title: 'تعليم البنود غير المطابقة', desc: 'أي بند يفشل في الفحص يُعلَّم ويمكن أن يُنشئ أمر شغل.' },
        { title: 'إثبات بالصور', desc: 'أرفق صورًا ببنود الفحص لتوثيق المشكلات لا وصفها فقط.' },
        { title: 'سجل الالتزام', desc: 'احتفظ بسجل كامل للفحوصات لأغراض التدقيق والمتطلبات التنظيمية.' },
        { title: 'فحوصات مجدولة', desc: 'حدد جداول فحص دورية حتى لا يُهمل أي فحص.' },
        { title: 'مساءلة السائقين', desc: 'اعرف من أجرى كل فحص ومتى.' },
      ],
      relatedFeatures: [
        { label: 'إدارة الصيانة', href: '/features/fleet-maintenance' },
        { label: 'إدارة الأسطول', href: '/features/fleet-management' },
        { label: 'التقارير والتحليلات', href: '/features/reports-analytics' },
      ],
    },
  },

  'work-orders': {
    jsonLdName: 'Axpense Work Order Management',
    en: {
      title: 'Work Order Management for Vehicle Maintenance',
      metaTitle: 'Work Order Management Software for Fleets',
      description: 'Create, track and close vehicle maintenance work orders while keeping labor, parts, costs and status connected to the asset.',
      intro: 'Turn maintenance requests into trackable work orders with clear status, assigned work and cost history.',
      capabilities: [
        { title: 'Create work orders', desc: 'Open a work order for planned or corrective maintenance and connect it to the relevant vehicle or asset.' },
        { title: 'Track status', desc: 'Follow work from open to in progress and completion so the team knows what is pending.' },
        { title: 'Record parts and costs', desc: 'Keep maintenance cost details with the work order rather than scattered receipts.' },
        { title: 'Assign maintenance work', desc: 'Make ownership of maintenance tasks clear to the people responsible for completing them.' },
        { title: 'Maintenance history', desc: 'Build a service history that can be reviewed by vehicle or asset.' },
        { title: 'Connected reporting', desc: 'Use completed work orders as an input for maintenance and fleet cost reporting.' },
      ],
      outcomes: ['Clearer maintenance workload and status', 'Better traceability for repair activity', 'Maintenance costs tied to the asset', 'A usable service history for operational decisions'],
      relatedFeatures: [
        { label: 'Preventive Maintenance', href: '/features/preventive-maintenance' },
        { label: 'Fleet Maintenance', href: '/features/fleet-maintenance' },
        { label: 'Inspections', href: '/features/inspection-management' },
        { label: 'Expense Management', href: '/features/expense-management' },
      ],
    },
    ar: {
      title: 'إدارة أوامر الشغل لصيانة المركبات',
      metaTitle: 'برنامج إدارة أوامر الشغل للأساطيل',
      description: 'أنشئ أوامر شغل صيانة المركبات وتابعها وأغلقها مع ربط العمالة وقطع الغيار والتكاليف والحالة بالأصل.',
      intro: 'حوّل طلبات الصيانة إلى أوامر شغل قابلة للمتابعة بحالة واضحة وأعمال محددة وسجل تكاليف.',
      capabilities: [
        { title: 'إنشاء أوامر الشغل', desc: 'افتح أمر شغل للصيانة المخططة أو التصحيحية واربطه بالمركبة أو الأصل المعني.' },
        { title: 'متابعة الحالة', desc: 'تابع العمل من الفتح إلى التنفيذ حتى الإنجاز ليعرف الفريق ما هو معلّق.' },
        { title: 'تسجيل القطع والتكاليف', desc: 'احتفظ بتفاصيل تكلفة الصيانة مع أمر الشغل بدلًا من إيصالات متناثرة.' },
        { title: 'تعيين أعمال الصيانة', desc: 'اجعل مسؤولية مهام الصيانة واضحة للأشخاص المكلّفين بإنجازها.' },
        { title: 'سجل الصيانة', desc: 'كوّن سجل صيانة يمكن مراجعته حسب المركبة أو الأصل.' },
        { title: 'تقارير مترابطة', desc: 'استخدم أوامر الشغل المنجزة كمدخل لتقارير الصيانة وتكاليف الأسطول.' },
      ],
      outcomes: ['رؤية أوضح لحجم أعمال الصيانة وحالتها', 'تتبع أفضل لأعمال الإصلاح', 'تكاليف الصيانة مرتبطة بالأصل', 'سجل صيانة مفيد للقرارات التشغيلية'],
      relatedFeatures: [
        { label: 'الصيانة الوقائية', href: '/features/preventive-maintenance' },
        { label: 'صيانة الأسطول', href: '/features/fleet-maintenance' },
        { label: 'الفحوصات', href: '/features/inspection-management' },
        { label: 'إدارة المصروفات', href: '/features/expense-management' },
      ],
    },
  },

  'preventive-maintenance': {
    jsonLdName: 'Axpense Preventive Maintenance',
    en: {
      title: 'Preventive Maintenance Software for Fleets',
      metaTitle: 'Preventive Maintenance Software in Egypt',
      description: 'Plan and track scheduled vehicle maintenance by time or usage so service work stays visible before it becomes an unexpected interruption.',
      intro: 'Move preventive maintenance from reminders and spreadsheets into scheduled work that your operations team can see and act on.',
      capabilities: [
        { title: 'Maintenance schedules', desc: 'Define recurring maintenance activities for vehicles and assets based on the schedule your operation uses.' },
        { title: 'Due maintenance visibility', desc: 'See upcoming maintenance work and keep overdue items visible to the responsible team.' },
        { title: 'Service history', desc: 'Keep completed preventive work connected to the vehicle or asset record.' },
        { title: 'Work order connection', desc: 'Turn scheduled maintenance into work orders that can be assigned and tracked through completion.' },
        { title: 'Maintenance planning', desc: 'Give operations and maintenance teams one view of planned work instead of separate reminders.' },
        { title: 'Cost context', desc: 'Connect preventive work with maintenance expenses to understand the cost of keeping assets operational.' },
      ],
      outcomes: ['Fewer missed scheduled maintenance tasks', 'Clearer upcoming maintenance workload', 'A consistent maintenance history', 'Better visibility into planned maintenance costs'],
      relatedFeatures: [
        { label: 'Fleet Maintenance', href: '/features/fleet-maintenance' },
        { label: 'Work Orders', href: '/features/work-orders' },
        { label: 'Inspections', href: '/features/inspection-management' },
        { label: 'Vehicle Management', href: '/features/vehicle-management' },
      ],
    },
    ar: {
      title: 'برنامج الصيانة الوقائية للأساطيل',
      metaTitle: 'برنامج الصيانة الوقائية في مصر',
      description: 'خطط لصيانة المركبات المجدولة وتابعها حسب الوقت أو الاستخدام، لتبقى أعمال الصيانة ظاهرة قبل أن تتحول إلى توقف مفاجئ.',
      intro: 'انقل الصيانة الوقائية من التذكيرات وجداول إكسل إلى أعمال مجدولة يراها فريق التشغيل ويتصرف بناءً عليها.',
      capabilities: [
        { title: 'جداول الصيانة', desc: 'حدد أعمال الصيانة المتكررة للمركبات والأصول وفق الجدول الذي تعمل به.' },
        { title: 'رؤية الصيانة المستحقة', desc: 'اطّلع على أعمال الصيانة القادمة وأبقِ المتأخر منها ظاهرًا للفريق المسؤول.' },
        { title: 'سجل الصيانة', desc: 'احتفظ بأعمال الصيانة الوقائية المنجزة مرتبطة بسجل المركبة أو الأصل.' },
        { title: 'الربط بأوامر الشغل', desc: 'حوّل الصيانة المجدولة إلى أوامر شغل يمكن تعيينها ومتابعتها حتى الإنجاز.' },
        { title: 'تخطيط الصيانة', desc: 'امنح فرق التشغيل والصيانة عرضًا واحدًا للأعمال المخططة بدلًا من تذكيرات متفرقة.' },
        { title: 'سياق التكلفة', desc: 'اربط الصيانة الوقائية بمصروفات الصيانة لفهم تكلفة إبقاء الأصول في الخدمة.' },
      ],
      outcomes: ['مهام صيانة مجدولة فائتة أقل', 'رؤية أوضح لحجم الصيانة القادمة', 'سجل صيانة متسق', 'رؤية أفضل لتكاليف الصيانة المخططة'],
      relatedFeatures: [
        { label: 'صيانة الأسطول', href: '/features/fleet-maintenance' },
        { label: 'أوامر الشغل', href: '/features/work-orders' },
        { label: 'الفحوصات', href: '/features/inspection-management' },
        { label: 'إدارة المركبات', href: '/features/vehicle-management' },
      ],
    },
  },

  'reports-analytics': {
    jsonLdName: 'Axpense Reports & Analytics',
    en: {
      title: 'Fleet & Asset Reports and Analytics',
      metaTitle: 'Fleet Reports & Analytics Software',
      description: 'Turn fleet and asset data into decisions. Reports on utilization, maintenance, and cost trends without building a spreadsheet by hand.',
      intro: 'Every vehicle, maintenance event, and expense you log feeds into reports you can actually use — no exporting to Excel to make sense of it.',
      capabilities: [
        { title: 'Utilization reports', desc: 'See which vehicles and assets are working hard and which are sitting idle.' },
        { title: 'Cost trend analysis', desc: 'Track operating costs over time and catch increases before they compound.' },
        { title: 'Maintenance summaries', desc: 'Understand which vehicles are costing the most in downtime and repairs.' },
        { title: 'Custom report builder', desc: 'Build the specific view your team needs instead of relying on fixed dashboards.' },
        { title: 'Exportable data', desc: 'Pull reports out for finance, ownership, or compliance reviews.' },
        { title: 'Scheduled delivery', desc: 'Get recurring reports sent automatically instead of pulling them manually.' },
      ],
      relatedFeatures: [
        { label: 'Fleet Management', href: '/features/fleet-management' },
        { label: 'Expense Management', href: '/features/expense-management' },
        { label: 'Asset Management', href: '/features/asset-management' },
      ],
    },
    ar: {
      title: 'تقارير وتحليلات الأسطول والأصول',
      metaTitle: 'برنامج تقارير وتحليلات الأسطول',
      description: 'حوّل بيانات الأسطول والأصول إلى قرارات. تقارير عن الاستغلال والصيانة واتجاهات التكاليف دون إعداد جداول يدويًا.',
      intro: 'كل مركبة وعملية صيانة ومصروف تسجله يغذي تقارير يمكنك استخدامها فعلًا — دون التصدير إلى إكسل لفهمها.',
      capabilities: [
        { title: 'تقارير الاستغلال', desc: 'اعرف أي المركبات والأصول تعمل بكثافة وأيها متوقفة.' },
        { title: 'تحليل اتجاه التكاليف', desc: 'تابع تكاليف التشغيل بمرور الوقت واكتشف الزيادات قبل أن تتضاعف.' },
        { title: 'ملخصات الصيانة', desc: 'افهم أي المركبات تكلفك أكثر في التوقف والإصلاحات.' },
        { title: 'منشئ تقارير مخصص', desc: 'أنشئ العرض الذي يحتاجه فريقك بدلًا من الاعتماد على لوحات ثابتة.' },
        { title: 'بيانات قابلة للتصدير', desc: 'صدّر التقارير لمراجعات المالية أو الإدارة أو الالتزام.' },
        { title: 'إرسال مجدول', desc: 'استلم التقارير الدورية تلقائيًا بدلًا من استخراجها يدويًا.' },
      ],
      relatedFeatures: [
        { label: 'إدارة الأسطول', href: '/features/fleet-management' },
        { label: 'إدارة المصروفات', href: '/features/expense-management' },
        { label: 'إدارة الأصول', href: '/features/asset-management' },
      ],
    },
  },
};

export const FEATURE_SLUGS = Object.keys(FEATURES);
