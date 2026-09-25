import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { AdminProvider } from '@/lib/admin/store';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'Axpense Admin', template: '%s · Axpense Admin' },
  robots: { index: false, follow: false, nocache: true },
};

// Separate root layout: no marketing header/footer, no analytics tags.
export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={inter.variable}>
      <body className="bg-background">
        <AdminProvider>{children}</AdminProvider>
      </body>
    </html>
  );
}
