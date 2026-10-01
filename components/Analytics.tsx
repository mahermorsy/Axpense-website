'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { ctaId, trackEvent } from '@/lib/analytics';
import { CONSENT_KEY, GA_ID, GTM_ENABLED, GTM_ID } from '@/lib/consent';
import type { Lang } from '@/lib/i18n';
import { ConsentBanner } from './ConsentBanner';

/**
 * GA4 and/or Google Tag Manager behind Google Consent Mode v2. Consent defaults to
 * denied for analytics and ads storage; a saved choice is re-applied before
 * GTM loads. GTM is only loaded when NEXT_PUBLIC_GTM_ID is set and
 * NEXT_PUBLIC_ENABLE_GTM=true (switch on once the legal pages are final).
 *
 * The delegated click listener sends cta_click / email_click / phone_click /
 * whatsapp_click for every link on the site without per-component wiring.
 */
export function Analytics({ lang = 'en' }: { lang?: Lang }) {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (href.startsWith('mailto:')) return trackEvent('email_click', { link_url: href });
      if (href.startsWith('tel:')) return trackEvent('phone_click', { link_url: href });
      if (/wa\.me|whatsapp\.com/.test(href)) return trackEvent('whatsapp_click', { link_url: href });
      const isCta = a.dataset.ctaId || /(^|\/)(demo|contact|pricing)$/.test(href.split(/[?#]/)[0]) || /bg-gradient-to-r/.test(a.className);
      if (!isCta) return;
      const position = (a.closest('[data-cta-position]') as HTMLElement | null)?.dataset.ctaPosition
        || a.dataset.ctaPosition
        || (a.closest('header') ? 'header' : a.closest('footer') ? 'footer' : a.closest('main section:first-of-type') ? 'hero' : 'body');
      trackEvent('cta_click', { cta_id: a.dataset.ctaId || ctaId(href), cta_position: position, link_url: href });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  if (!GTM_ENABLED) return null;
  return (
    <>
      <Script id="consent-default" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('consent', 'default', { ad_storage: 'denied', analytics_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', wait_for_update: 500 });
        try { var c = JSON.parse(localStorage.getItem('${CONSENT_KEY}') || 'null'); if (c) gtag('consent', 'update', { analytics_storage: c.analytics ? 'granted' : 'denied', ad_storage: c.ads ? 'granted' : 'denied', ad_user_data: c.ads ? 'granted' : 'denied', ad_personalization: c.ads ? 'granted' : 'denied' }); } catch (e) {}
      `}</Script>
      {GA_ID ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-loader" strategy="afterInteractive">{`
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}</Script>
        </>
      ) : null}
      {GTM_ID ? (
        <Script id="gtm-loader" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
      ) : null}
      <ConsentBanner lang={lang} />
    </>
  );
}
