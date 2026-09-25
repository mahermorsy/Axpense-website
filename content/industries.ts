import type { IndustryPageData } from '@/components/IndustryPage';

// Industry pages (/industries/<slug> and /ar/industries/<slug>).
export const INDUSTRIES: Record<string, { en: IndustryPageData; ar: IndustryPageData }> = {
  logistics: {
    en: {
      title: 'Fleet Management for Logistics & Transportation',
      metaTitle: 'Fleet Management Software for Logistics & Transportation',
      description: 'Optimize fleet operations, reduce fuel costs, and keep vehicles compliant. Built for logistics and transportation companies in Egypt.',
      intro: 'Delivery fleets live or die on uptime and cost control. Axpense keeps every vehicle, driver, and expense visible in one place.',
      challenges: [
        'Real-time visibility into which vehicles are active, idle, or in maintenance',
        'Driver assignment and license tracking across a large fleet',
        'Fuel cost tracking per vehicle and per route',
        'Preventive maintenance that keeps delivery vehicles from breaking down mid-route',
        'Compliance documentation for inspections and vehicle licensing',
      ],
      relevantFeatures: [
        { label: 'Fleet Management', href: '/features/fleet-management' },
        { label: 'Expense Management', href: '/features/expense-management' },
        { label: 'Fleet Maintenance', href: '/features/fleet-maintenance' },
      ],
    },
    ar: {
      title: 'إدارة الأسطول للوجستيات والنقل',
      metaTitle: 'برنامج إدارة الأسطول لشركات اللوجستيات والنقل',
      description: 'حسّن تشغيل الأسطول، وقلّل تكاليف الوقود، وحافظ على التزام المركبات. مصمم لشركات اللوجستيات والنقل في مصر.',
      intro: 'نجاح أساطيل التوصيل يعتمد على جاهزية المركبات والتحكم في التكاليف. يبقي أكسبنس كل مركبة وسائق ومصروف ظاهرًا في مكان واحد.',
      challenges: [
        'رؤية لحظية لأي المركبات نشطة أو متوقفة أو في الصيانة',
        'تعيين السائقين ومتابعة رخصهم في أسطول كبير',
        'تتبع تكلفة الوقود لكل مركبة ولكل مسار',
        'صيانة وقائية تمنع تعطل مركبات التوصيل في منتصف الطريق',
        'توثيق الالتزام للفحوصات وتراخيص المركبات',
      ],
      relevantFeatures: [
        { label: 'إدارة الأسطول', href: '/features/fleet-management' },
        { label: 'إدارة المصروفات', href: '/features/expense-management' },
        { label: 'صيانة الأسطول', href: '/features/fleet-maintenance' },
      ],
    },
  },

  transportation: {
    en: {
      title: 'Fleet Management Software for Transportation Companies',
      metaTitle: 'Fleet Management Software for Transportation Companies in Egypt',
      description: 'Manage vehicles, drivers, maintenance, fuel and operating expenses for transportation fleets from one system.',
      intro: 'Transportation operations need a reliable record of vehicle status, driver assignments, maintenance and running costs. Axpense connects those records in one platform.',
      challenges: [
        'Vehicle and driver records that stay connected to daily assignments',
        'Maintenance planning for vehicles that need to stay available for operations',
        'Fuel and operating expense tracking by vehicle',
        'Inspection records and maintenance issues in one place',
        'Operational reports that reduce manual spreadsheet consolidation',
      ],
      relevantFeatures: [
        { label: 'Fleet Management', href: '/features/fleet-management' },
        { label: 'Vehicle Management', href: '/features/vehicle-management' },
        { label: 'Preventive Maintenance', href: '/features/preventive-maintenance' },
        { label: 'Fuel Management', href: '/features/fuel-management' },
      ],
    },
    ar: {
      title: 'برنامج إدارة الأسطول لشركات النقل',
      metaTitle: 'برنامج إدارة الأسطول لشركات النقل في مصر',
      description: 'أدر المركبات والسائقين والصيانة والوقود ومصروفات التشغيل لأساطيل النقل من نظام واحد.',
      intro: 'تحتاج عمليات النقل إلى سجل موثوق لحالة المركبات وتعيين السائقين والصيانة وتكاليف التشغيل. يربط أكسبنس هذه السجلات في منصة واحدة.',
      challenges: [
        'سجلات مركبات وسائقين مرتبطة بالتعيينات اليومية',
        'تخطيط الصيانة للمركبات التي يجب أن تبقى متاحة للتشغيل',
        'تتبع الوقود ومصروفات التشغيل لكل مركبة',
        'سجلات الفحص وأعطال الصيانة في مكان واحد',
        'تقارير تشغيلية تقلل تجميع البيانات يدويًا في جداول إكسل',
      ],
      relevantFeatures: [
        { label: 'إدارة الأسطول', href: '/features/fleet-management' },
        { label: 'إدارة المركبات', href: '/features/vehicle-management' },
        { label: 'الصيانة الوقائية', href: '/features/preventive-maintenance' },
        { label: 'إدارة الوقود', href: '/features/fuel-management' },
      ],
    },
  },

  construction: {
    en: {
      title: 'Equipment Management for Construction',
      metaTitle: 'Equipment Management Software for Construction',
      description: 'Track heavy equipment, manage tool inventory, and schedule maintenance. Built for construction companies in Egypt.',
      intro: 'Heavy equipment sitting idle on the wrong site costs money. Axpense tracks where every machine and tool is, and what it needs next.',
      challenges: [
        'Knowing which equipment is on which project site right now',
        'Tool inventory that doesn’t walk off unnoticed between sites',
        'Maintenance scheduling for equipment that can’t afford downtime mid-project',
        'Safety compliance and inspection records for heavy machinery',
        'Project-based cost tracking for equipment usage',
      ],
      relevantFeatures: [
        { label: 'Asset Management', href: '/features/asset-management' },
        { label: 'Fleet Maintenance', href: '/features/fleet-maintenance' },
        { label: 'Inspections', href: '/features/inspection-management' },
      ],
    },
    ar: {
      title: 'إدارة المعدات لشركات المقاولات',
      metaTitle: 'برنامج إدارة المعدات لشركات المقاولات والإنشاءات',
      description: 'تتبع المعدات الثقيلة، وأدر مخزون الأدوات، وجدول الصيانة. مصمم لشركات المقاولات في مصر.',
      intro: 'المعدات الثقيلة المتوقفة في الموقع الخطأ تكلّف مالًا. يتتبع أكسبنس مكان كل معدة وأداة وما تحتاجه بعد ذلك.',
      challenges: [
        'معرفة أي المعدات في أي موقع مشروع الآن',
        'مخزون أدوات لا يختفي دون ملاحظة بين المواقع',
        'جدولة صيانة المعدات التي لا تحتمل التوقف في منتصف المشروع',
        'سجلات السلامة والفحص للمعدات الثقيلة',
        'تتبع تكلفة استخدام المعدات حسب المشروع',
      ],
      relevantFeatures: [
        { label: 'إدارة الأصول', href: '/features/asset-management' },
        { label: 'صيانة الأسطول', href: '/features/fleet-maintenance' },
        { label: 'الفحوصات', href: '/features/inspection-management' },
      ],
    },
  },

  manufacturing: {
    en: {
      title: 'Equipment Management for Manufacturing',
      metaTitle: 'Production Equipment Management Software',
      description: 'Monitor production equipment, reduce downtime, and optimize maintenance. Built for manufacturers in Egypt.',
      intro: 'Unplanned downtime on a production line is expensive. Axpense keeps maintenance ahead of failure instead of reacting to it.',
      challenges: [
        'Predictive maintenance scheduling instead of run-to-failure',
        'Tracking which production line equipment is due for service',
        'Spare parts inventory tied to specific machines',
        'Downtime logs that show which equipment costs the most in lost production',
        'Compliance and inspection records for safety-critical machinery',
      ],
      relevantFeatures: [
        { label: 'Asset Management', href: '/features/asset-management' },
        { label: 'Fleet Maintenance', href: '/features/fleet-maintenance' },
        { label: 'Reports & Analytics', href: '/features/reports-analytics' },
      ],
    },
    ar: {
      title: 'إدارة المعدات لقطاع التصنيع',
      metaTitle: 'برنامج إدارة معدات الإنتاج',
      description: 'راقب معدات الإنتاج، وقلّل التوقفات، وحسّن الصيانة. مصمم للمصانع في مصر.',
      intro: 'التوقف غير المخطط لخط الإنتاج مكلف. يبقي أكسبنس الصيانة سابقة للعطل بدلًا من التعامل معه بعد وقوعه.',
      challenges: [
        'جدولة صيانة تنبؤية بدلًا من التشغيل حتى العطل',
        'معرفة معدات خط الإنتاج المستحقة للصيانة',
        'مخزون قطع غيار مرتبط بماكينات محددة',
        'سجلات توقف توضح أي المعدات تكلّف أكثر في الإنتاج المفقود',
        'سجلات الالتزام والفحص للماكينات الحساسة للسلامة',
      ],
      relevantFeatures: [
        { label: 'إدارة الأصول', href: '/features/asset-management' },
        { label: 'صيانة الأسطول', href: '/features/fleet-maintenance' },
        { label: 'التقارير والتحليلات', href: '/features/reports-analytics' },
      ],
    },
  },

  'real-estate': {
    en: {
      title: 'Asset & Fleet Management for Real Estate',
      metaTitle: 'Fleet & Facility Asset Management for Real Estate',
      description: 'Manage delivery and service vehicles, facility equipment, and distribution assets. Built for real estate and property companies in Egypt.',
      intro: 'Property companies run vehicles and equipment across sites, not just buildings. Axpense keeps that side of the operation organized too.',
      challenges: [
        'Service and maintenance vehicles shared across multiple properties',
        'Facility equipment tracked by site rather than lost in a spreadsheet',
        'Maintenance scheduling for shared equipment across properties',
        'Cost tracking per site or per property',
        'Inspection records for equipment used across managed properties',
      ],
      relevantFeatures: [
        { label: 'Asset Management', href: '/features/asset-management' },
        { label: 'Fleet Management', href: '/features/fleet-management' },
        { label: 'Expense Management', href: '/features/expense-management' },
      ],
    },
    ar: {
      title: 'إدارة الأصول والأسطول لقطاع العقارات',
      metaTitle: 'إدارة الأسطول وأصول المرافق لشركات العقارات',
      description: 'أدر مركبات التوصيل والخدمة ومعدات المرافق وأصول التوزيع. مصمم لشركات العقارات وإدارة الممتلكات في مصر.',
      intro: 'شركات العقارات تشغّل مركبات ومعدات عبر مواقع متعددة، لا مباني فقط. يبقي أكسبنس هذا الجانب من التشغيل منظمًا أيضًا.',
      challenges: [
        'مركبات خدمة وصيانة مشتركة بين عدة عقارات',
        'معدات مرافق مسجلة حسب الموقع بدلًا من ضياعها في جدول إكسل',
        'جدولة صيانة المعدات المشتركة بين العقارات',
        'تتبع التكلفة لكل موقع أو عقار',
        'سجلات فحص المعدات المستخدمة في العقارات المُدارة',
      ],
      relevantFeatures: [
        { label: 'إدارة الأصول', href: '/features/asset-management' },
        { label: 'إدارة الأسطول', href: '/features/fleet-management' },
        { label: 'إدارة المصروفات', href: '/features/expense-management' },
      ],
    },
  },

  healthcare: {
    en: {
      title: 'Medical Equipment & Fleet Management for Healthcare',
      metaTitle: 'Medical Equipment Management Software',
      description: 'Manage medical equipment, ensure compliance, and track device maintenance and service schedules. Built for healthcare providers in Egypt.',
      intro: 'Medical equipment and transport vehicles both need airtight maintenance and compliance records. Axpense tracks both in one system.',
      challenges: [
        'Medical device tracking with full service history',
        'Compliance documentation ready for audits and inspections',
        'Scheduled servicing that doesn’t get missed',
        'Ambulance or transport vehicle maintenance and fuel tracking',
        'Cost tracking for equipment across departments or facilities',
      ],
      relevantFeatures: [
        { label: 'Asset Management', href: '/features/asset-management' },
        { label: 'Inspections', href: '/features/inspection-management' },
        { label: 'Fleet Maintenance', href: '/features/fleet-maintenance' },
      ],
    },
    ar: {
      title: 'إدارة المعدات الطبية والأسطول للرعاية الصحية',
      metaTitle: 'برنامج إدارة المعدات الطبية',
      description: 'أدر المعدات الطبية، وحافظ على الالتزام، وتابع صيانة الأجهزة ومواعيدها. مصمم لمقدمي الرعاية الصحية في مصر.',
      intro: 'تحتاج المعدات الطبية ومركبات النقل معًا إلى سجلات صيانة والتزام محكمة. يتتبع أكسبنس الاثنين في نظام واحد.',
      challenges: [
        'تتبع الأجهزة الطبية مع سجل صيانة كامل',
        'توثيق التزام جاهز للتدقيق والتفتيش',
        'صيانة مجدولة لا تُنسى',
        'متابعة صيانة ووقود سيارات الإسعاف أو النقل',
        'تتبع تكلفة المعدات عبر الأقسام أو المنشآت',
      ],
      relevantFeatures: [
        { label: 'إدارة الأصول', href: '/features/asset-management' },
        { label: 'الفحوصات', href: '/features/inspection-management' },
        { label: 'صيانة الأسطول', href: '/features/fleet-maintenance' },
      ],
    },
  },

  'travel-hospitality': {
    en: {
      title: 'Fleet Management for Travel & Hospitality',
      metaTitle: 'Fleet Management Software for Travel & Hospitality',
      description: 'Manage transport and guest-service vehicles, maintenance, and fuel costs. Built for travel and hospitality operators in Egypt.',
      intro: 'Guest transport vehicles need to be reliable every day. Axpense keeps maintenance ahead of schedule and costs visible.',
      challenges: [
        'Transport vehicle scheduling and driver assignment',
        'Preventive maintenance so vehicles don’t fail during guest transport',
        'Fuel and operating cost tracking across a mixed vehicle fleet',
        'Inspection records for passenger-carrying vehicles',
        'Utilization tracking to right-size the fleet for demand',
      ],
      relevantFeatures: [
        { label: 'Fleet Management', href: '/features/fleet-management' },
        { label: 'Fleet Maintenance', href: '/features/fleet-maintenance' },
        { label: 'Expense Management', href: '/features/expense-management' },
      ],
    },
    ar: {
      title: 'إدارة الأسطول للسياحة والضيافة',
      metaTitle: 'برنامج إدارة الأسطول لقطاع السياحة والضيافة',
      description: 'أدر مركبات النقل وخدمة الضيوف والصيانة وتكاليف الوقود. مصمم لشركات السياحة والضيافة في مصر.',
      intro: 'يجب أن تكون مركبات نقل الضيوف موثوقة كل يوم. يبقي أكسبنس الصيانة في موعدها والتكاليف ظاهرة.',
      challenges: [
        'جدولة مركبات النقل وتعيين السائقين',
        'صيانة وقائية حتى لا تتعطل المركبات أثناء نقل الضيوف',
        'تتبع الوقود وتكاليف التشغيل في أسطول متنوع',
        'سجلات فحص المركبات التي تنقل الركاب',
        'متابعة الاستغلال لضبط حجم الأسطول حسب الطلب',
      ],
      relevantFeatures: [
        { label: 'إدارة الأسطول', href: '/features/fleet-management' },
        { label: 'صيانة الأسطول', href: '/features/fleet-maintenance' },
        { label: 'إدارة المصروفات', href: '/features/expense-management' },
      ],
    },
  },

  'energy-utilities': {
    en: {
      title: 'Fleet & Equipment Management for Energy & Utilities',
      metaTitle: 'Fleet & Equipment Management Software for Energy & Utilities',
      description: 'Manage service vehicles, equipment, maintenance, inspections and operating expenses for energy and utilities operations.',
      intro: 'Field operations depend on vehicles and equipment being available, maintained and traceable. Axpense centralizes the records and costs behind those assets.',
      challenges: [
        'Tracking service vehicles and operational equipment across teams',
        'Scheduling preventive maintenance for assets used in field operations',
        'Recording inspections and maintenance issues with the asset history',
        'Connecting fuel, repair and operating expenses to the relevant asset',
        'Reporting on maintenance activity and operating costs across assets',
      ],
      relevantFeatures: [
        { label: 'Asset Management', href: '/features/asset-management' },
        { label: 'Vehicle Management', href: '/features/vehicle-management' },
        { label: 'Preventive Maintenance', href: '/features/preventive-maintenance' },
        { label: 'Work Orders', href: '/features/work-orders' },
      ],
    },
    ar: {
      title: 'إدارة الأسطول والمعدات لقطاع الطاقة والمرافق',
      metaTitle: 'برنامج إدارة الأسطول والمعدات لقطاع الطاقة والمرافق',
      description: 'أدر مركبات الخدمة والمعدات والصيانة والفحوصات ومصروفات التشغيل لعمليات الطاقة والمرافق.',
      intro: 'تعتمد العمليات الميدانية على أن تكون المركبات والمعدات متاحة ومصانة وقابلة للتتبع. يجمع أكسبنس السجلات والتكاليف الخاصة بهذه الأصول.',
      challenges: [
        'تتبع مركبات الخدمة والمعدات التشغيلية عبر الفرق',
        'جدولة الصيانة الوقائية للأصول المستخدمة في العمل الميداني',
        'تسجيل الفحوصات وأعطال الصيانة ضمن سجل الأصل',
        'ربط الوقود والإصلاحات ومصروفات التشغيل بالأصل المعني',
        'تقارير عن أعمال الصيانة وتكاليف التشغيل عبر الأصول',
      ],
      relevantFeatures: [
        { label: 'إدارة الأصول', href: '/features/asset-management' },
        { label: 'إدارة المركبات', href: '/features/vehicle-management' },
        { label: 'الصيانة الوقائية', href: '/features/preventive-maintenance' },
        { label: 'أوامر الشغل', href: '/features/work-orders' },
      ],
    },
  },
};

export const INDUSTRY_SLUGS = Object.keys(INDUSTRIES);
