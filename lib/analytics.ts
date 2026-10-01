/**
 * dataLayer events. Every event carries the same context parameters:
 * page_type (from the page's `page-type` meta), lang and location (path).
 *
 * Events: demo_request, contact_submit, lead_submit, form_start, cta_click
 * (cta_id, cta_position), whatsapp_click, phone_click, email_click,
 * calculator_complete, checklist_download, pricing_currency.
 * Nothing is sent to Google unless GTM is enabled and the visitor consents
 * (Consent Mode v2, see components/Analytics.tsx).
 */
type W = Window & { dataLayer?: Record<string, unknown>[] };

export function pageContext() {
  if (typeof document === 'undefined') return {};
  return {
    page_type: document.querySelector('meta[name="page-type"]')?.getAttribute('content') || 'page',
    lang: document.documentElement.lang || 'en',
    location: window.location.pathname,
  };
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  const w = window as W;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: name, ...pageContext(), ...params });
}

/** "/ar/demo" → "demo", "/pricing#faq" → "pricing", "https://…/login" → "external". */
export function ctaId(href: string) {
  if (/^https?:/.test(href)) return 'external';
  const p = href.split(/[?#]/)[0].replace(/^\/ar(?=\/|$)/, '') || '/';
  return p === '/' ? 'home' : p.replace(/^\//, '').replace(/\//g, '_');
}
