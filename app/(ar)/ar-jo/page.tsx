import type { Metadata } from 'next';
import { CountryLandingPage } from '@/components/CountryLandingPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { FAQJsonLd } from '@/components/seo/FAQJsonLd';
import { buildCountryMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { getMarket } from '@/lib/countries';

const market = getMarket('jo')!;
const data = market.ar;
const path = '/ar-jo';
const seoTitle = 'برنامج إدارة الأسطول في الأردن';

const featureLinks = [
  { label: 'إدارة الأسطول', href: '/ar/features/fleet-management' },
  { label: 'إدارة الصيانة', href: '/ar/features/fleet-maintenance' },
  { label: 'إدارة المركبات', href: '/ar/features/vehicle-management' },
  { label: 'إدارة الوقود', href: '/ar/features/fuel-management' },
  { label: 'إدارة الأصول', href: '/ar/features/asset-management' },
  { label: 'أوامر الشغل', href: '/ar/features/work-orders' },
  { label: 'الصيانة الوقائية', href: '/ar/features/preventive-maintenance' },
];

const relatedMarkets = [
  { label: 'مصر', href: '/ar-eg' },
  { label: 'السعودية', href: '/ar-sa' },
  { label: 'الإمارات', href: '/ar-ae' },
  { label: 'قطر', href: '/ar-qa' },
  { label: 'العراق', href: '/ar-iq' },
  { label: 'MENA', href: '/ar-mena' },
];

export const metadata: Metadata = buildCountryMetadata({ title: seoTitle, description: data.intro, path, language: 'ar', alternatePath: '/en-jo', alternateLanguage: 'en' });

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Axpense', url: '/' }, { name: data.h1, url: path }])} />
      <JsonLd data={FAQJsonLd({ items: data.faq })} />
      <CountryLandingPage data={{ language: 'ar', code: market.code, name: market.nameAr, h1: data.h1, intro: data.intro, focus: data.focus, faq: data.faq, featureLinks, relatedMarkets }} />
    </>
  );
}
