import { Breadcrumbs } from './Breadcrumbs';
import { JsonLd } from './JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { lhref, type Lang } from '@/lib/i18n';

/** Visible breadcrumb (Home › page) + matching BreadcrumbList schema for hub/utility pages. */
export function PageBreadcrumbs({ lang, label, path }: { lang: Lang; label: string; path: string }) {
  const items = [
    { name: lang === 'ar' ? 'الرئيسية' : 'Home', path: lhref(lang, '/') },
    { name: label, path: lhref(lang, path) },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <Breadcrumbs lang={lang} items={[{ label }]} />
    </>
  );
}
