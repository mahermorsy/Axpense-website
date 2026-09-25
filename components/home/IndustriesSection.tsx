import Link from 'next/link';
import { Building, Factory, HardHat, HeartPulse, Hotel, Truck, type LucideIcon } from 'lucide-react';
import { lhref, type Lang } from '@/lib/i18n';

type Copy = { title: string; desc: string; points: string[] };
type Industry = { icon: LucideIcon; href: string; en: Copy; ar: Copy };

const INDUSTRIES: Industry[] = [
  { icon: Truck, href: '/industries/logistics',
    en: { title: 'Logistics & Transportation', desc: 'Optimize fleet operations, reduce fuel costs, and ensure vehicle compliance.', points: ['Real-time GPS tracking', 'Route optimization', 'Driver management'] },
    ar: { title: 'اللوجستيات والنقل', desc: 'حسّن تشغيل الأسطول، وقلّل تكاليف الوقود، وحافظ على التزام المركبات.', points: ['تتبع GPS لحظي', 'تحسين المسارات', 'إدارة السائقين'] } },
  { icon: HardHat, href: '/industries/construction',
    en: { title: 'Construction', desc: 'Track heavy equipment, manage tool inventory, and schedule maintenance.', points: ['Equipment utilization', 'Project-based tracking', 'Safety compliance'] },
    ar: { title: 'المقاولات والإنشاءات', desc: 'تتبع المعدات الثقيلة، وأدر مخزون الأدوات، وجدول الصيانة.', points: ['استغلال المعدات', 'متابعة حسب المشروع', 'الالتزام بالسلامة'] } },
  { icon: Factory, href: '/industries/manufacturing',
    en: { title: 'Manufacturing', desc: 'Monitor production equipment, reduce downtime, and optimize maintenance.', points: ['Preventive maintenance', 'Production line tracking', 'Spare parts management'] },
    ar: { title: 'التصنيع', desc: 'راقب معدات الإنتاج، وقلّل التوقفات، وحسّن الصيانة.', points: ['الصيانة الوقائية', 'متابعة خطوط الإنتاج', 'إدارة قطع الغيار'] } },
  { icon: Building, href: '/industries/real-estate',
    en: { title: 'Real Estate & Facilities', desc: 'Manage property vehicles, facility equipment, and service contracts across sites.', points: ['Multi-site asset register', 'Facility equipment servicing', 'Contractor work orders'] },
    ar: { title: 'العقارات والمرافق', desc: 'أدر مركبات العقارات ومعدات المرافق وعقود الخدمة عبر المواقع.', points: ['سجل أصول متعدد المواقع', 'صيانة معدات المرافق', 'أوامر شغل المقاولين'] } },
  { icon: Hotel, href: '/industries/travel-hospitality',
    en: { title: 'Travel & Hospitality', desc: 'Keep guest-transport fleets safe, on time, and serviced before every season.', points: ['Guest transport fleets', 'Pre-trip inspections', 'Cost per vehicle'] },
    ar: { title: 'السياحة والضيافة', desc: 'حافظ على أساطيل نقل الضيوف آمنة وفي موعدها ومصانة قبل كل موسم.', points: ['أساطيل نقل الضيوف', 'فحص ما قبل الرحلة', 'التكلفة لكل مركبة'] } },
  { icon: HeartPulse, href: '/industries/healthcare',
    en: { title: 'Healthcare', desc: 'Manage medical equipment, ensure compliance, and track device maintenance.', points: ['Medical device tracking', 'Compliance documentation', 'Service scheduling'] },
    ar: { title: 'الرعاية الصحية', desc: 'أدر المعدات الطبية، وحافظ على الالتزام، وتابع صيانة الأجهزة.', points: ['تتبع الأجهزة الطبية', 'توثيق الالتزام', 'جدولة الصيانة'] } },
];

const T = {
  en: { badge: 'Industry Solutions', title: 'Built for ', accent: 'Every Industry', sub: 'Axpense adapts to your industry’s unique requirements with specialized features and workflows.' },
  ar: { badge: 'حلول القطاعات', title: 'مصمم ', accent: 'لكل القطاعات', sub: 'يتكيف أكسبنس مع متطلبات قطاعك الخاصة بمميزات وسير عمل متخصصة.' },
};

// Layout copied from the Axpense app's "Built for Every Industry" section.
export function IndustriesSection({ lang = 'en' }: { lang?: Lang }) {
  const t = T[lang];
  return (
    <section className="bg-gradient-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">{t.badge}</span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">{t.title}<span className="text-gradient">{t.accent}</span></h2>
          <p className="text-lg text-muted-foreground">{t.sub}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map(({ icon: Icon, href, ...copy }) => {
            const { title, desc, points } = copy[lang];
            return (
              <Link key={href} href={lhref(lang, href)} className="group rounded-2xl border border-border bg-gradient-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-primary/10">
                  <Icon className="h-7 w-7 text-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">{title}</h3>
                <p className="mb-5 text-muted-foreground">{desc}</p>
                <ul className="space-y-2.5">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-muted-foreground"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{p}</li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
