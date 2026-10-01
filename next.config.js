const { redirects } = require('./redirects');

/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'Content-Security-Policy', value: [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'self'",
    "form-action 'self'",
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
    "connect-src 'self' https://api.axpense.net https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com",
    "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com",
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self' data:",
    'upgrade-insecure-requests',
  ].join('; ') },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
];

const nextConfig = {
  reactStrictMode: true,
  // Self-contained server bundle for the Docker image (ignored by Vercel).
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  images: { formats: ['image/avif', 'image/webp'] },
  // Every redirect lives in redirects.js (308, single hop).
  async redirects() {
    return redirects;
  },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
};

module.exports = nextConfig;
