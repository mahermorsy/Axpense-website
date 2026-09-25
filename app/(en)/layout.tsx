import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { SITE_URL, SITE_NAME } from '@/lib/seo';
import { RootDocument } from '@/components/RootDocument';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Fleet & Asset Management Software`,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Manage vehicles, equipment, maintenance, fuel, expenses and inspections in one platform. Built for businesses across Egypt and MENA.',
  robots: { index: true, follow: true },
};

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="en" dir="ltr" className={inter.variable}>{children}</RootDocument>;
}
