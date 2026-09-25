export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string; // ISO date
  updatedAt: string;
  relatedFeature?: { label: string; href: string };
  sections: { heading: string; body: string[] }[];
  /** Arabic title/summary for the /ar/blog listing (the article body is English for now). */
  ar?: { title: string; description: string };
};

export const CATEGORY_AR: Record<string, string> = {
  'Fleet Management': 'إدارة الأسطول',
  'Fleet Maintenance': 'صيانة الأسطول',
  'Fleet Expenses': 'مصروفات الأسطول',
  'Asset Management': 'إدارة الأصول',
};

// Phase 6: a first batch of articles across the categories the spec
// defines (section 13). Real, useful content — no invented statistics,
// customers, or case studies, per spec section 19/20.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'what-is-fleet-management',
    ar: { title: 'ما هي إدارة الأسطول؟', description: 'دليل مبسط لما تغطيه إدارة الأسطول، ولماذا تتجاوز الشركات في مصر جداول إكسل لأجلها.' },
    title: 'What Is Fleet Management?',
    description:
      'A plain-language guide to what fleet management covers, and why businesses in Egypt outgrow spreadsheets for it.',
    category: 'Fleet Management',
    publishedAt: '2026-09-01',
    updatedAt: '2026-09-01',
    relatedFeature: { label: 'Fleet Management', href: '/features/fleet-management' },
    sections: [
      {
        heading: 'The short version',
        body: [
          'Fleet management is the set of processes a business uses to keep its vehicles running safely, legally, and cost-effectively — from acquisition through daily operation to eventual disposal.',
          'For most businesses this means tracking vehicles, drivers, documents, maintenance, fuel, and costs, and making decisions from that data instead of guessing.',
        ],
      },
      {
        heading: 'What it actually involves',
        body: [
          'Vehicle records: make, model, plate number, registration, and ownership details.',
          'Driver assignment: who is responsible for which vehicle, and whether their license is current.',
          'Maintenance: preventive schedules and the work orders that come out of them.',
          'Expenses: fuel, repairs, insurance, and other operating costs, tracked per vehicle.',
          'Compliance: inspections, licensing, and documentation that stays current.',
        ],
      },
      {
        heading: 'Why spreadsheets stop working',
        body: [
          'A spreadsheet can hold vehicle data. What it can’t do is remind you when a license is about to expire, flag a failed inspection automatically, or show you cost per vehicle without manual work every month.',
          'That gap is usually where businesses start looking for dedicated fleet management software.',
        ],
      },
    ],
  },
  {
    slug: 'preventive-vs-reactive-maintenance',
    ar: { title: 'الصيانة الوقائية مقابل الصيانة بعد العطل', description: 'الفرق العملي بين إصلاح المركبات بعد تعطلها وصيانتها وفق جدول محدد، وأيهما يحتاجه أسطولك.' },
    title: 'Preventive vs. Reactive Maintenance',
    description:
      'The practical difference between fixing vehicles after they break and maintaining them on a schedule — and what each actually costs.',
    category: 'Fleet Maintenance',
    publishedAt: '2026-09-01',
    updatedAt: '2026-09-01',
    relatedFeature: { label: 'Fleet Maintenance', href: '/features/fleet-maintenance' },
    sections: [
      {
        heading: 'Reactive maintenance',
        body: [
          'Reactive maintenance means fixing something after it fails. It’s simple to understand but expensive in practice: a breakdown mid-route costs more than a scheduled service would have, and it happens at the worst possible time.',
        ],
      },
      {
        heading: 'Preventive maintenance',
        body: [
          'Preventive maintenance means servicing a vehicle on a schedule — by mileage or by time — before something fails. It costs money on a predictable schedule instead of an unpredictable one.',
          'The tradeoff is upfront planning: schedules have to be set up and tracked, which is where most spreadsheet-based systems fall behind.',
        ],
      },
      {
        heading: 'Which one makes sense',
        body: [
          'Most fleets end up using both: preventive maintenance for the predictable wear items, reactive repairs for the things that genuinely can’t be predicted. The goal isn’t to eliminate reactive maintenance entirely — it’s to shrink it to the cases that actually need it.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-calculate-fleet-cost',
    ar: { title: 'كيف تحسب تكلفة الأسطول', description: 'ما الذي يدخل فعليًا في تكلفة تشغيل الأسطول، وكيف تصل إلى رقم لكل مركبة.' },
    title: 'How to Calculate Fleet Cost',
    description:
      'What actually goes into the cost of running a fleet, and how to get a per-vehicle number instead of one fleet-wide guess.',
    category: 'Fleet Expenses',
    publishedAt: '2026-09-01',
    updatedAt: '2026-09-01',
    relatedFeature: { label: 'Expense Management', href: '/features/expense-management' },
    sections: [
      {
        heading: 'What counts as fleet cost',
        body: [
          'Fuel, maintenance and repairs, insurance, registration and licensing, and depreciation are the core categories. Some businesses also include driver wages and parking or toll fees.',
        ],
      },
      {
        heading: 'Fleet-wide vs. per-vehicle',
        body: [
          'A single fleet-wide total tells you what you spent. It doesn’t tell you which vehicle is costing more than it should. Breaking cost down per vehicle is what actually lets you act — replace the vehicle that’s become expensive to maintain, or investigate why one route burns more fuel than another.',
        ],
      },
      {
        heading: 'Getting there without a spreadsheet',
        body: [
          'The manual version of this is logging every receipt against a vehicle and reconciling monthly. Most businesses that try this by hand find it slips after a few months — which is usually the point they look for software that logs cost per vehicle automatically as expenses happen.',
        ],
      },
    ],
  },
  {
    slug: 'what-is-asset-management',
    ar: { title: 'ما هي إدارة الأصول؟', description: 'إدارة الأصول بما يتجاوز المركبات — ماذا تغطي للمعدات والأدوات وباقي الأصول المادية.' },
    title: 'What Is Asset Management?',
    description:
      'Asset management beyond vehicles — what it covers for equipment and tools, and how it differs from fleet management.',
    category: 'Asset Management',
    publishedAt: '2026-09-01',
    updatedAt: '2026-09-01',
    relatedFeature: { label: 'Asset Management', href: '/features/asset-management' },
    sections: [
      {
        heading: 'Assets beyond vehicles',
        body: [
          'Asset management covers any physical item a business owns and needs to track: equipment, tools, machinery, IT hardware, and more — not just vehicles.',
        ],
      },
      {
        heading: 'The lifecycle view',
        body: [
          'An asset has a lifecycle: acquisition, assignment, maintenance, depreciation, and eventual disposal. Managing an asset well means tracking it through all of that, not just knowing it exists.',
        ],
      },
      {
        heading: 'Where it overlaps with fleet management',
        body: [
          'Vehicles are technically assets too — which is why fleet and asset management are often handled in the same system rather than two separate ones. The vehicle-specific parts (fuel, driver assignment) sit alongside the general asset parts (depreciation, lifecycle tracking).',
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function readingMinutes(post: BlogPost) {
  const words = [post.description, ...post.sections.flatMap((s) => [s.heading, ...s.body])].join(' ').split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatPostDate(iso: string, locale: 'en' | 'ar' = 'en', style: 'short' | 'long' = 'short') {
  return new Date(iso).toLocaleDateString(locale === 'ar' ? 'ar-EG' : 'en-US', style === 'short' ? { month: 'short', day: 'numeric', year: 'numeric' } : { month: 'long', day: 'numeric', year: 'numeric' });
}
