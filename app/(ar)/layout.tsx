import type { Metadata } from 'next';
import { Inter, IBM_Plex_Sans_Arabic } from 'next/font/google';
import '../globals.css';
import { SITE_URL, rootVerification } from '@/lib/seo';
import { RootDocument } from '@/components/RootDocument';
import { MarketingChrome } from '@/components/MarketingChrome';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'أكسبنس | منصة إدارة الأسطول والأصول',
    template: '%s | أكسبنس',
  },
  description: 'أكسبنس لإدارة الأسطول والأصول والصيانة وقطع الغيار والمصروفات للشركات التي تدير مركبات ومعدات.',
  robots: { index: true, follow: true },
  verification: rootVerification(),
};

// Covers every Arabic page (/ar and /ar/*). Uses the
// same header, footer and page components as English, mirrored for RTL.
export default function ArabicRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootDocument lang="ar" dir="rtl" className={`${inter.variable} ${ibmPlexArabic.variable}`} bodyClassName="font-arabic">
      <MarketingChrome lang="ar">{children}</MarketingChrome>
    </RootDocument>
  );
}
