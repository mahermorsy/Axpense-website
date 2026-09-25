import Image from 'next/image';
import Link from 'next/link';
import { SocialLinks } from './SocialLinks';
import { lhref, type Lang } from '@/lib/i18n';

type Col = { title: { en: string; ar: string }; links: { label: { en: string; ar: string }; href: string }[] };

const COLUMNS: Col[] = [
  {
    title: { en: 'Product', ar: 'المنتج' },
    links: [
      { label: { en: 'Fleet Management', ar: 'إدارة الأسطول' }, href: '/features/fleet-management' },
      { label: { en: 'Maintenance', ar: 'الصيانة' }, href: '/features/fleet-maintenance' },
      { label: { en: 'Expense Management', ar: 'إدارة المصروفات' }, href: '/features/expense-management' },
      { label: { en: 'Asset Management', ar: 'إدارة الأصول' }, href: '/features/asset-management' },
      { label: { en: 'Pricing', ar: 'الأسعار' }, href: '/pricing' },
    ],
  },
  {
    title: { en: 'Industries', ar: 'القطاعات' },
    links: [
      { label: { en: 'Logistics & Transportation', ar: 'اللوجستيات والنقل' }, href: '/industries/logistics' },
      { label: { en: 'Construction', ar: 'المقاولات والإنشاءات' }, href: '/industries/construction' },
      { label: { en: 'Manufacturing', ar: 'التصنيع' }, href: '/industries/manufacturing' },
      { label: { en: 'Real Estate', ar: 'العقارات' }, href: '/industries/real-estate' },
      { label: { en: 'Healthcare', ar: 'الرعاية الصحية' }, href: '/industries/healthcare' },
    ],
  },
  {
    title: { en: 'Markets', ar: 'الأسواق' },
    links: [
      { label: { en: 'Egypt', ar: 'مصر' }, href: '/en-eg' },
      { label: { en: 'Saudi Arabia', ar: 'السعودية' }, href: '/en-sa' },
      { label: { en: 'UAE', ar: 'الإمارات' }, href: '/en-ae' },
      { label: { en: 'Qatar', ar: 'قطر' }, href: '/en-qa' },
      { label: { en: 'Jordan', ar: 'الأردن' }, href: '/en-jo' },
      { label: { en: 'Iraq', ar: 'العراق' }, href: '/en-iq' },
      { label: { en: 'MENA', ar: 'الشرق الأوسط وشمال أفريقيا' }, href: '/en-mena' },
    ],
  },
  {
    title: { en: 'Company', ar: 'الشركة' },
    links: [
      { label: { en: 'About', ar: 'من نحن' }, href: '/about' },
      { label: { en: 'Blog', ar: 'المدونة' }, href: '/blog' },
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
        <div className="grid grid-cols-2 gap-10 pb-12 md:grid-cols-6">
          <div className="col-span-2 md:col-span-1">
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
