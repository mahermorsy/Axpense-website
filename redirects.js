// All permanent (308) redirects in one place. Used by next.config.js and by
// docs/seo/url-map.md. Every pair is mirrored for Arabic (/ar + path) unless
// listed in `arOnly`/`exact`. Destinations are final URLs (single hop) — this
// file throws at build time if a destination is also a source.

/** English path → final English path. The Arabic twin (/ar + from → /ar + to) is added automatically. */
const mirrored = {
  // Merged into the commercial pages (keyword ownership, SEO brief §2.1)
  '/features/fleet-management': '/fleet-management-software',
  '/features/fleet-maintenance': '/fleet-maintenance-software',
  '/solutions/fleet-cost-management': '/fleet-cost-tracking',
  '/solutions/fleet-maintenance-management': '/fleet-maintenance-software',
  '/solutions/equipment-cost-management': '/fleet-cost-tracking',
  '/solutions/asset-lifecycle-management': '/features/asset-management',
  // Industries consolidated into the first six (§2.3)
  '/industries/transportation': '/industries/logistics',
  '/industries/energy-utilities': '/industries/oil-and-gas',
};

/** Exact redirects (no automatic Arabic twin). */
const exact = {
  // Market hubs → /locations/* (§2.4). UAE, Qatar, Jordan and Iraq are sections of /locations/mena for now.
  '/en-eg': '/locations/egypt',
  '/ar-eg': '/ar/locations/egypt',
  '/en-sa': '/locations/saudi-arabia',
  '/ar-sa': '/ar/locations/saudi-arabia',
  '/en-ae': '/locations/mena',
  '/ar-ae': '/ar/locations/mena',
  '/en-qa': '/locations/mena',
  '/ar-qa': '/ar/locations/mena',
  '/en-jo': '/locations/mena',
  '/ar-jo': '/ar/locations/mena',
  '/en-iq': '/locations/mena',
  '/ar-iq': '/ar/locations/mena',
  '/en-mena': '/locations/mena',
  '/ar-mena': '/ar/locations/mena',
  // Old Arabic feature URLs (before /ar mirrored the English paths)
  '/ar/fleet-management': '/ar/fleet-management-software',
  '/ar/fleet-maintenance': '/ar/fleet-maintenance-software',
  '/ar/asset-management': '/ar/features/asset-management',
  '/ar/vehicle-management': '/ar/features/vehicle-management',
  '/ar/fuel-management': '/ar/features/fuel-management',
  '/ar/work-orders': '/ar/features/work-orders',
  '/ar/preventive-maintenance': '/ar/features/preventive-maintenance',
  // Blog: merged into the new, deeper article (§7.1)
  '/blog/what-is-fleet-management': '/blog/what-is-fleet-management-software',
};

const pairs = { ...exact };
for (const [from, to] of Object.entries(mirrored)) {
  pairs[from] = to;
  pairs[`/ar${from}`] = `/ar${to}`;
}
for (const [from, to] of Object.entries(pairs)) {
  if (pairs[to]) throw new Error(`redirects.js: ${from} → ${to} is a chain (${to} also redirects)`);
}

const redirects = Object.entries(pairs).map(([source, destination]) => ({ source, destination, permanent: true }));

// Canonical host: 308 from the Vercel domain and www to the canonical origin (https://axpense.net).
// Off by default — switch on (ENFORCE_CANONICAL_HOST=true) only once axpense.net
// serves this deployment, otherwise the site would redirect visitors away from itself.
if (process.env.ENFORCE_CANONICAL_HOST === 'true') {
  const site = (process.env.NEXT_PUBLIC_SITE_URL || 'https://axpense.net').replace(/\/$/, '');
  const canonicalHost = new URL(site).host;
  for (const host of ['axpense-website.vercel.app', 'axpense.net', 'www.axpense.net'].filter((h) => h !== canonicalHost)) {
    redirects.push({ source: '/:path*', has: [{ type: 'host', value: host }], destination: `${site}/:path*`, permanent: true });
  }
}

module.exports = { redirects, pairs };
