import type { IndustryPageData } from '@/components/IndustryPage';

// Legacy industry pages (noindex) still linked from the homepage. The six
// indexable industry pages live in content/seo/industries/.
export const INDUSTRIES: Record<string, { en: IndustryPageData; ar: IndustryPageData }> = {
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
        { label: 'Fleet Management', href: '/fleet-management-software' },
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
        { label: 'إدارة الأسطول', href: '/fleet-management-software' },
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
        { label: 'Fleet Maintenance', href: '/fleet-maintenance-software' },
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
        { label: 'صيانة الأسطول', href: '/fleet-maintenance-software' },
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
        { label: 'Fleet Management', href: '/fleet-management-software' },
        { label: 'Fleet Maintenance', href: '/fleet-maintenance-software' },
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
        { label: 'إدارة الأسطول', href: '/fleet-management-software' },
        { label: 'صيانة الأسطول', href: '/fleet-maintenance-software' },
        { label: 'إدارة المصروفات', href: '/features/expense-management' },
      ],
    },
  },
};
