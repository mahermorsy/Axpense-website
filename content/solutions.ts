import type { SolutionPageData } from '@/components/SolutionPage';

// Solution pages (/solutions/<slug> and /ar/solutions/<slug>).
export const SOLUTIONS: Record<string, { en: SolutionPageData; ar: SolutionPageData }> = {
  'fleet-cost-management': {
    en: {
      title: 'Fleet Cost Management',
      metaTitle: 'Fleet Cost Management Software',
      description: 'Get a clear, per-vehicle picture of fuel, repair, and operating costs instead of reconstructing spend at month-end.',
      intro: 'Combines expense tracking, fuel logging, and reporting so you know exactly what each vehicle costs to run — not just the fleet total.',
      outcomes: [
        'Cost per vehicle instead of one fleet-wide number',
        'Fuel spend trends visible before they become a budget problem',
        'Repair costs tied to the vehicle and work order that caused them',
        'Monthly cost reports ready without manual spreadsheet work',
      ],
    },
    ar: {
      title: 'إدارة تكاليف الأسطول',
      metaTitle: 'برنامج إدارة تكاليف الأسطول',
      description: 'احصل على صورة واضحة لتكاليف الوقود والإصلاح والتشغيل لكل مركبة بدلًا من إعادة حساب الإنفاق في نهاية الشهر.',
      intro: 'يجمع تتبع المصروفات وتسجيل الوقود والتقارير لتعرف بالضبط تكلفة تشغيل كل مركبة — لا إجمالي الأسطول فقط.',
      outcomes: [
        'التكلفة لكل مركبة بدلًا من رقم واحد للأسطول بالكامل',
        'اتجاهات الإنفاق على الوقود ظاهرة قبل أن تصبح مشكلة في الميزانية',
        'تكاليف الإصلاح مرتبطة بالمركبة وأمر الشغل الذي تسبب فيها',
        'تقارير تكاليف شهرية جاهزة دون عمل يدوي في جداول إكسل',
      ],
    },
  },
  'fleet-maintenance-management': {
    en: {
      title: 'Fleet Maintenance Management',
      metaTitle: 'Fleet Maintenance Management Solution',
      description: 'Move from reactive repairs to scheduled preventive maintenance, with work orders and repair history in one system.',
      intro: 'Combines preventive scheduling, work orders, and inspections so vehicles get serviced before they break down, not after.',
      outcomes: [
        'Preventive maintenance scheduled by mileage or time',
        'Work orders tracked from request to completion',
        'Inspection failures automatically flagged for service',
        'Full repair history per vehicle in one place',
      ],
    },
    ar: {
      title: 'إدارة صيانة الأسطول',
      metaTitle: 'حل إدارة صيانة الأسطول',
      description: 'انتقل من الإصلاح بعد العطل إلى صيانة وقائية مجدولة، مع أوامر الشغل وسجل الإصلاحات في نظام واحد.',
      intro: 'يجمع الجدولة الوقائية وأوامر الشغل والفحوصات لتُصان المركبات قبل أن تتعطل، لا بعد ذلك.',
      outcomes: [
        'صيانة وقائية مجدولة حسب المسافة أو الوقت',
        'أوامر شغل متابعة من الطلب حتى الإنجاز',
        'البنود غير المطابقة في الفحص تُحال للصيانة تلقائيًا',
        'سجل إصلاحات كامل لكل مركبة في مكان واحد',
      ],
    },
  },
  'asset-lifecycle-management': {
    en: {
      title: 'Asset Lifecycle Management',
      metaTitle: 'Asset Lifecycle Management Software',
      description: 'Track assets from acquisition through depreciation to disposal, with automated book values throughout.',
      intro: 'Combines asset registration, automated depreciation, and disposal records so you always know what an asset is worth and where it stands.',
      outcomes: [
        'Every asset tracked from purchase to disposal',
        'Depreciation and book values calculated automatically',
        'Assignment history showing who held what, and when',
        'Disposal records with reason and date on file',
      ],
    },
    ar: {
      title: 'إدارة دورة حياة الأصول',
      metaTitle: 'برنامج إدارة دورة حياة الأصول',
      description: 'تتبع الأصول من الاقتناء مرورًا بالإهلاك حتى التخلص منها، مع احتساب القيمة الدفترية تلقائيًا طوال الوقت.',
      intro: 'يجمع تسجيل الأصول والإهلاك التلقائي وسجلات التخلص لتعرف دائمًا قيمة الأصل ووضعه الحالي.',
      outcomes: [
        'كل أصل متتبع من الشراء حتى التخلص',
        'الإهلاك والقيمة الدفترية محسوبان تلقائيًا',
        'سجل تخصيص يوضح من احتفظ بماذا ومتى',
        'سجلات تخلص موثقة بالسبب والتاريخ',
      ],
    },
  },
  'equipment-cost-management': {
    en: {
      title: 'Equipment Cost Management',
      metaTitle: 'Equipment Cost Management Software',
      description: 'Understand true equipment cost across sites and projects, combining maintenance, expenses, and utilization in one view.',
      intro: 'Combines asset tracking, maintenance cost logs, and utilization reporting so you know what each piece of equipment actually costs to keep running.',
      outcomes: [
        'Equipment cost broken out by site or project',
        'Maintenance spend tied to the specific machine that needed it',
        'Utilization data showing idle equipment worth reallocating',
        'One view instead of separate spreadsheets per site',
      ],
    },
    ar: {
      title: 'إدارة تكاليف المعدات',
      metaTitle: 'برنامج إدارة تكاليف المعدات',
      description: 'افهم التكلفة الحقيقية للمعدات عبر المواقع والمشروعات، بجمع الصيانة والمصروفات والاستغلال في عرض واحد.',
      intro: 'يجمع تتبع الأصول وسجلات تكلفة الصيانة وتقارير الاستغلال لتعرف ما تكلفه كل معدة فعلًا لتبقى في الخدمة.',
      outcomes: [
        'تكلفة المعدات مفصّلة حسب الموقع أو المشروع',
        'الإنفاق على الصيانة مرتبط بالماكينة التي احتاجتها',
        'بيانات استغلال توضح المعدات المتوقفة التي تستحق إعادة التوزيع',
        'عرض واحد بدلًا من جداول منفصلة لكل موقع',
      ],
    },
  },
};

export const SOLUTION_SLUGS = Object.keys(SOLUTIONS);
