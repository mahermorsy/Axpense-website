import { Analytics } from '@/components/Analytics';
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo';

/**
 * Shared <html>/<body> shell for the two root layouts (English and Arabic).
 * Each language has its own root layout so the server-rendered HTML carries
 * the correct lang/dir — no client-side script rewriting them after load.
 */
export function RootDocument({ lang, dir, className, bodyClassName, children }: {
  lang: 'en' | 'ar';
  dir: 'ltr' | 'rtl';
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} dir={dir} className={className}>
      <body className={bodyClassName}>
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }} />
        {children}
      </body>
    </html>
  );
}
