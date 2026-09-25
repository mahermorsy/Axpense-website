import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export type BreadcrumbItem = { label: string; href?: string };

// Same pattern as the app's breadcrumb: home icon › section › page
export function Breadcrumbs({ items, lang = 'en' }: { items: BreadcrumbItem[]; lang?: 'en' | 'ar' }) {
  return (
    <nav aria-label={lang === 'ar' ? 'مسار التنقل' : 'Breadcrumb'} className="mx-auto max-w-wrap px-5 pt-6 sm:px-7">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        <li><Link href={lang === 'ar' ? '/ar' : '/'} aria-label={lang === 'ar' ? 'الرئيسية' : 'Home'} className="flex items-center hover:text-primary"><Home className="h-4 w-4" /></Link></li>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
            <ChevronRight aria-hidden="true" className="h-4 w-4 rtl:rotate-180" />
            {item.href ? (
              <Link href={item.href} className="hover:text-primary">{item.label}</Link>
            ) : (
              <span aria-current="page" className="font-medium text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
