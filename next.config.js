/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Self-contained server bundle for the Docker image (ignored by Vercel).
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  images: { formats: ['image/avif', 'image/webp'] },
  // Old Arabic feature URLs → the mirrored /ar/features/* pages.
  async redirects() {
    return ['fleet-management', 'fleet-maintenance', 'asset-management', 'vehicle-management', 'fuel-management', 'work-orders', 'preventive-maintenance']
      .map((slug) => ({ source: `/ar/${slug}`, destination: `/ar/features/${slug}`, permanent: true }));
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
      ],
    }];
  },
};

module.exports = nextConfig;
