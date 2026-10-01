import Image from 'next/image';
import Link from 'next/link';
import { SocialLinks } from './SocialLinks';
import { lhref, type Lang } from '@/lib/i18n';
import { isLinkable, linkLabel } from '@/content/registry';

type Col = { title: { en: string; ar: string }; links: { label: { en: string; ar: string }; href: string }[] };

const L = (path: string): { label: { en: string; ar: string }; href: string } | null => {
  if (!isLinkable(path)) return null;
  return { label: { en: linkLabel(path, 'en') as string, ar: linkLabel(path, 'ar') as string }, href: path };
};
const live = (paths: string[]) => paths.map(L).filter(Boolean) as Col['links'];

// Columns are generated from content data, so gated pages never appear and
// anchors match each page's navLabel. "Software" and "Locations" are the main
// entry points to the commercial and location pages (SEO brief §8).
const COLUMNS: Col[] = [
  {
    title: { en: 'Software', ar: 'البرامج' },
    links: live(['/fleet-management-software', '/fleet-maintenance-software', '/fleet-cost-tracking', '/vehicle-inspection-software']),
  },
  {
    title: { en: 'Product', ar: 'المنتج' },
    links: [
      ...live(['/features/vehicle-management', '/features/preventive-maintenance', '/features/work-orders', '/features/fuel-management', '/features/spare-parts', '/features/expense-management']),
      { label: { en: 'Pricing', ar: 'الأسعار' }, href: '/pricing' },
    ],
  },
  {
    title: { en: 'Industries', ar: 'القطاعات' },
    links: live(['/industries/logistics', '/industries/distribution', '/industries/construction', '/industries/oil-and-gas', '/industries/manufacturing', '/industries/field-services']),
  },
  {
    title: { en: 'Locations', ar: 'الأسواق' },
    links: live(['/locations/egypt', '/locations/saudi-arabia', '/locations/mena']),
  },
  {
    title: { en: 'Company', ar: 'الشركة' },
    links: [
      { label: { en: 'About', ar: 'من نحن' }, href: '/about' },
      { label: { en: 'Blog', ar: 'المدونة' }, href: '/blog' },
      { label: { en: 'Free resources', ar: 'موارد مجانية' }, href: '/resources' },
      { label: { en: 'Contact', ar: 'اتصل بنا' }, href: '/contact' },
    ],
  },
  {
    title: { en: 'Legal', ar: 'قانوني' },
    links: [
      { label: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' }, href: '/privacy-policy' },
      { label: { en: 'Terms', ar: 'الشروط والأحكام' }, href: '/terms' },
      { label: { en: 'Cookie Policy', ar: 'سياسة ملفات الارتباط' }, href: '/cookie-policy' },
    ],
  },
];

const T = {
  en: { blurb: 'Fleet, asset, maintenance and spare parts management for businesses in Egypt and MENA.', rights: 'Axpense. All rights reserved.' },
  ar: { blurb: 'نظام إدارة الأسطول والأصول والصيانة وقطع الغيار للشركات في مصر ومنطقة الشرق الأوسط وشمال أفريقيا.', rights: 'أكسبنس. جميع الحقوق محفوظة.' },
};

export function Footer({ lang = 'en' }: { lang?: Lang }) {
  const t = T[lang];
  return (
    <footer className="border-t border-border bg-card py-14">
      <div className="mx-auto max-w-wrap px-5 sm:px-7">
        <div className="grid grid-cols-2 gap-10 pb-12 md:grid-cols-4 lg:grid-cols-7">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Image src="/logo.png" alt={lang === 'ar' ? 'أكسبنس' : 'Axpense'} width={120} height={26} />
            <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-muted-foreground">{t.blurb}</p>
            <div className="mt-4"><SocialLinks /></div>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title.en}>
              <p className="mb-3 text-sm font-semibold text-foreground">{col.title[lang]}</p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={lhref(lang, link.href)} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {link.label[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} {t.rights}</span>
          <a href="mailto:info@axpense.net" className="hover:text-primary">info@axpense.net</a>
        </div>
      </div>
    </footer>
  );
}
