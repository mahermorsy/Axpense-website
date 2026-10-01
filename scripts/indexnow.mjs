#!/usr/bin/env node
/**
 * IndexNow submitter — pings Bing, Yandex, Seznam, Naver etc. (via api.indexnow.org)
 * with every URL in the production sitemap.
 *
 * Run it AFTER EACH PRODUCTION DEPLOY, e.g. as a CI step after the Vercel deploy
 * succeeds or from a Vercel deploy hook / GitHub Action on `deployment_status`:
 *
 *   npm run indexnow                               # live sitemap of SITE_URL
 *   npm run indexnow -- --dry-run                  # print payload, send nothing
 *   node scripts/indexnow.mjs --sitemap ./sitemap.xml   # local file or URL
 *
 * Env:
 *   SITE_URL      default https://axpense.net
 *   INDEXNOW_KEY  optional; otherwise the single public/<32-hex>.txt key file is used.
 *                 The key file must be reachable at ${SITE_URL}/<key>.txt.
 *
 * Plain Node 20+, no dependencies.
 */
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ENDPOINT = 'https://api.indexnow.org/indexnow';
const BATCH = 10_000;
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const smIdx = args.indexOf('--sitemap');
const siteUrl = (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://axpense.net').replace(/\/+$/, '');
const sitemapArg = smIdx >= 0 ? args[smIdx + 1] : `${siteUrl}/sitemap.xml`;
if (smIdx >= 0 && !sitemapArg) fail('--sitemap needs a URL or file path');

function fail(msg) {
  console.error(`indexnow: ${msg}`);
  process.exit(1);
}

async function findKey() {
  const env = process.env.INDEXNOW_KEY?.trim();
  if (env) return env;
  const files = (await readdir(path.join(root, 'public'))).filter((f) => /^[0-9a-f]{32}\.txt$/i.test(f));
  if (files.length !== 1) fail(`expected exactly one 32-hex-char .txt key file in public/, found ${files.length}`);
  const key = (await readFile(path.join(root, 'public', files[0]), 'utf8')).trim();
  if (key !== files[0].slice(0, -4)) fail(`public/${files[0]} content does not match its filename`);
  return key;
}

async function loadSitemap(src) {
  if (/^https?:\/\//i.test(src)) {
    const res = await fetch(src);
    if (!res.ok) fail(`GET ${src} -> ${res.status}`);
    return res.text();
  }
  return readFile(path.resolve(src), 'utf8');
}

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'");

const key = await findKey();
const xml = await loadSitemap(sitemapArg);
const urls = [...new Set([...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map((m) => decode(m[1])))];
if (!urls.length) fail(`no <loc> URLs found in ${sitemapArg}`);

const host = new URL(siteUrl).host;
const foreign = urls.filter((u) => new URL(u).host !== host);
if (foreign.length) console.warn(`indexnow: skipping ${foreign.length} URL(s) not on ${host}, e.g. ${foreign[0]}`);
const urlList = urls.filter((u) => new URL(u).host === host);
const keyLocation = `${siteUrl}/${key}.txt`;

console.log(`indexnow: ${urlList.length} URL(s) from ${sitemapArg} for ${host}${dryRun ? ' (dry run)' : ''}`);

let failed = false;
for (let i = 0; i < urlList.length; i += BATCH) {
  const payload = { host, key, keyLocation, urlList: urlList.slice(i, i + BATCH) };
  if (dryRun) {
    console.log(`POST ${ENDPOINT}`);
    console.log(JSON.stringify(payload, null, 2));
    continue;
  }
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  const body = await res.text().catch(() => '');
  console.log(`batch ${i / BATCH + 1}: ${res.status} ${res.statusText}${body ? ` — ${body.slice(0, 300)}` : ''}`);
  // 200 OK / 202 Accepted are success; 403 = key not found at keyLocation; 422 = URLs not matching host.
  if (res.status !== 200 && res.status !== 202) failed = true;
}
if (failed) process.exit(1);
