import type { Metadata } from 'next';
import { CountryLandingPage } from '@/components/CountryLandingPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { FAQJsonLd } from '@/components/seo/FAQJsonLd';
import { buildCountryMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { getMarket } from '@/lib/countries';

const market = getMarket('sa')!;
const data = market.en;
const path = '/en-sa';
const seoTitle = 'Fleet Management Software in Saudi Arabia';

const featureLinks = [
  { label: 'Fleet Management', href: '/features/fleet-management' },
  { label: 'Fleet Maintenance', href: '/features/fleet-maintenance' },
  { label: 'Vehicle Management', href: '/features/vehicle-management' },
  { label: 'Fuel Management', href: '/features/fuel-management' },
  { label: 'Asset Management', href: '/features/asset-management' },
  { label: 'Work Orders', href: '/features/work-orders' },
  { label: 'Preventive Maintenance', href: '/features/preventive-maintenance' },
];

const relatedMarkets = [
  { label: 'Egypt', href: '/en-eg' },
  { label: 'UAE', href: '/en-ae' },
  { label: 'Qatar', href: '/en-qa' },
  { label: 'Jordan', href: '/en-jo' },
  { label: 'Iraq', href: '/en-iq' },
  { label: 'MENA', href: '/en-mena' },
];

export const metadata: Metadata = buildCountryMetadata({ title: seoTitle, description: data.intro, path, language: 'en', alternatePath: '/ar-sa', alternateLanguage: 'ar' });

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Axpense', url: '/' }, { name: data.h1, url: path }])} />
      <JsonLd data={FAQJsonLd({ items: data.faq })} />
      <CountryLandingPage data={{ language: 'en', code: market.code, name: market.nameEn, h1: data.h1, intro: data.intro, focus: data.focus, faq: data.faq, featureLinks, relatedMarkets }} />
    </>
  );
}
