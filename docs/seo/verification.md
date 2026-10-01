# Search engine verification & indexing

## Google Search Console
1. Add a **URL-prefix property** for `https://axpense.net/` (or a Domain property via DNS TXT, which covers all hosts).
2. Choose **HTML tag** verification and copy only the `content` value.
3. Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<value>` in Vercel (Production) and redeploy.
   It is already wired: `lib/seo.ts` → `rootVerification()` → `metadata.verification.google`,
   used by the root layouts, so the `<meta name="google-site-verification">` tag appears on every page.
4. Click **Verify**, then **Sitemaps → submit** `https://axpense.net/sitemap.xml`.

## Bing Webmaster Tools
1. Add the site (or import it from Search Console, which skips verification).
2. For meta-tag verification set `NEXT_PUBLIC_BING_SITE_VERIFICATION=<value>` and redeploy —
   `rootVerification()` emits it as `<meta name="msvalidate.01">`.
3. Submit `https://axpense.net/sitemap.xml` under **Sitemaps**.

## IndexNow (Bing, Yandex, Seznam, Naver…)
- Key file: `public/3e5a6f45a01b797a0fa300190795899b.txt` (served at `https://axpense.net/3e5a6f45a01b797a0fa300190795899b.txt`).
  Keep exactly one 32-hex `.txt` key file in `public/`, or set `INDEXNOW_KEY`.
- After **each production deploy** (CI step / Vercel deploy hook):
  ```bash
  npm run indexnow                    # reads ${SITE_URL:-https://axpense.net}/sitemap.xml
  npm run indexnow -- --dry-run       # show the payload without sending
  node scripts/indexnow.mjs --sitemap ./local-sitemap.xml
  ```
  200/202 = accepted; 403 = key file not reachable; 422 = URLs don't match the host.
- Google does not use IndexNow; it relies on the sitemap in Search Console.

## Canonical host
`redirects.js` can 308-redirect `axpense-website.vercel.app` and `axpense.net` to `https://axpense.net`.
It is **off by default**. Set `ENFORCE_CANONICAL_HOST=true` in Vercel only **after** `axpense.net`
serves this deployment (otherwise the site redirects visitors away from itself), redeploy, then check:
```bash
curl -sI https://axpense-website.vercel.app/ | grep -i -E "^(HTTP|location)"   # 308 -> https://axpense.net/
curl -sI https://axpense.net/pricing        | grep -i -E "^(HTTP|location)"
```

## Env vars (see `.env.example`)
`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION`,
`ENFORCE_CANONICAL_HOST`, `NEXT_PUBLIC_ENABLE_GTM`, `INDEXNOW_KEY`.
