import type { Capability } from './capabilities';

/**
 * Content model for SEO pages (commercial, feature, industry, location).
 * Metadata, canonical, hreflang, breadcrumbs, schema and sitemap entries are
 * generated from this object, so a new page needs content only.
 *
 * Text fields accept "markdown-lite" (see components/seo/Md.tsx):
 * paragraphs separated by blank lines, "### " H3, "- " bullets, "1. " steps,
 * pipe tables, **bold** and [anchor](/english-path) links (localized on render).
 */
export type Req = { requires?: Capability | Capability[] };
export type Faq = { q: string; a: string } & Req;
export type ScreenName = 'dashboard' | 'vehicles' | 'maintenance';
export type IconName =
  | 'truck' | 'wrench' | 'dollar' | 'clipboard' | 'package' | 'chart' | 'users' | 'gauge' | 'calendar' | 'shield'
  | 'trending' | 'fuel' | 'hardhat' | 'factory' | 'building' | 'flame' | 'boxes' | 'map' | 'globe' | 'clock' | 'file' | 'alert' | 'check' | 'layers' | 'calculator' | 'languages' | 'rocket';

export type Card = { title: string; desc: string; href?: string; icon?: IconName } & Req;
export type Step = { title: string; desc: string } & Req;

export type Section = Req & (
  | { kind: 'text'; heading: string; body: string }
  | { kind: 'steps'; heading: string; intro?: string; steps: Step[] }
  | { kind: 'cards'; heading: string; intro?: string; items: Card[]; columns?: 2 | 3 }
  | { kind: 'checklist'; heading: string; intro?: string; items: ({ text: string } & Req)[] }
  | { kind: 'formula'; heading: string; intro?: string; formulas: { label: string; expression: string }[]; example?: { title: string; body: string } }
  | { kind: 'screenshot'; heading?: string; image: ScreenName; alt: string; caption?: string }
  | { kind: 'workflow'; heading: string; intro?: string; nodes: ({ label: string } & Req)[]; note?: string }
);

export type SeoPageType = 'commercial' | 'feature' | 'industry' | 'location';
export type L<T> = { en: T; ar: T };

export type SeoPage = {
  /** English path without trailing slash, e.g. '/fleet-maintenance-software'. Arabic twin is '/ar' + path. */
  path: string;
  type: SeoPageType;
  /** ISO date — sitemap lastmod. Change only when the content changes. */
  updatedAt: string;
  primaryKeyword: L<string>;
  secondaryKeywords: L<string[]>;
  meta: L<{ title: string; description: string }>;
  h1: L<string>;
  /** Short descriptive anchor used by footers, hubs and related-link blocks. */
  navLabel: L<string>;
  hero: L<{ badge: string; intro: string }>;
  heroImage?: ScreenName;
  sections: L<Section[]>;
  faqs: L<Faq[]>;
  /** Page-level capability gate: when unconfirmed the page is noindex, out of the sitemap and unlinked. */
  requires?: Capability[];
  /** English paths of related pages (features, commercial, tools, locations). */
  relatedPages: string[];
  relatedIndustries: string[];
  /** Blog slugs. */
  relatedArticles: string[];
  /** Region codes for location pages only. */
  hreflang?: L<string>;
  ogLocale?: L<string>;
  /** English path of the commercial page this page links up to. */
  parent?: string;
  /** Name used in SoftwareApplication schema (commercial and feature pages). */
  schemaName?: string;
};

/** Free tool pages under /resources (widget rendered by the page, copy from here). */
export type ToolPage = {
  path: string;
  updatedAt: string;
  primaryKeyword: L<string>;
  meta: L<{ title: string; description: string }>;
  h1: L<string>;
  navLabel: L<string>;
  hero: L<{ badge: string; intro: string }>;
  /** Rendered below the tool: what it calculates, how to use it, formula, worked example… */
  sections: L<Section[]>;
  faqs: L<Faq[]>;
  relatedPages: string[];
  relatedArticles: string[];
  schemaName: L<string>;
};

/** Printable/interactive checklist data. */
export type ChecklistGroup = { title: L<string>; items: L<string>[] };
export type MaintenanceRow = { item: L<string>; interval: L<string>; notes: L<string> };
