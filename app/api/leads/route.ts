import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Only these fields are forwarded to the webhook; anything else is dropped.
const FIELDS = ['name', 'company', 'email', 'phone', 'companySize', 'assetCount', 'industry', 'message', 'page', 'lang', 'utmSource', 'referrer'] as const;
const REQUIRED = ['name', 'company', 'email'] as const;
const MAX_LEN: Record<string, number> = { message: 2000, referrer: 1000 };
const DEFAULT_MAX = 200;

// Best-effort per-instance rate limit (5 submissions / 10 min / IP).
// For multi-instance hosting, back this with Upstash/Redis or your edge WAF.
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > LIMIT;
}

function err(code: string, error: string, status: number) {
  return NextResponse.json({ code, error }, { status });
}

function escapeHtml(value = '') {
  return value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char] ?? char);
}

function leadEmailHtml(body: Record<string, string>) {
  const rows = [
    ['Name', body.name],
    ['Company', body.company],
    ['Email', body.email],
    ['Phone', body.phone],
    ['Company size', body.companySize],
    ['Vehicles / assets', body.assetCount],
    ['Industry', body.industry],
    ['Page', body.page],
    ['Language', body.lang],
    ['UTM source', body.utmSource],
    ['Referrer', body.referrer],
  ].filter(([, value]) => value);

  return `
    <div style="font-family:Arial,sans-serif;color:#0f172a;line-height:1.5">
      <h2 style="margin:0 0 16px">New Axpense demo request</h2>
      <table style="border-collapse:collapse;width:100%;max-width:640px">
        ${rows.map(([label, value]) => `
          <tr>
            <td style="border:1px solid #dbe3ea;padding:10px;font-weight:700;background:#f8fafc">${escapeHtml(label)}</td>
            <td style="border:1px solid #dbe3ea;padding:10px">${escapeHtml(value)}</td>
          </tr>
        `).join('')}
      </table>
      ${body.message ? `<h3 style="margin:20px 0 8px">Message</h3><p style="white-space:pre-wrap">${escapeHtml(body.message)}</p>` : ''}
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (rateLimited(ip)) return err('rate_limited', 'Too many submissions. Please try again later or email info@axpense.net.', 429);

    const raw = await request.json() as Record<string, unknown>;

    // Honeypot: real users never see or fill the "website" field. Pretend success so bots don't adapt.
    if (typeof raw.website === 'string' && raw.website.trim()) return NextResponse.json({ ok: true });

    const body: Record<string, string> = {};
    for (const field of FIELDS) {
      const value = raw[field];
      if (typeof value !== 'string') continue;
      const trimmed = value.trim();
      if (!trimmed) continue;
      if (trimmed.length > (MAX_LEN[field] ?? DEFAULT_MAX)) return err('too_long', `The ${field} field is too long.`, 400);
      body[field] = trimmed;
    }

    const missing = REQUIRED.filter((field) => !body[field]);
    if (missing.length) return err('missing', `Missing required fields: ${missing.join(', ')}`, 400);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return err('invalid_email', 'Enter a valid work email.', 400);

    // 1) Save to the Axpense backend (SQL Server) when configured.
    const apiBase = (process.env.API_INTERNAL_URL || process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');
    const webhook = process.env.LEADS_WEBHOOK_URL;
    const resendKey = process.env.RESEND_API_KEY;
    const emailTo = (process.env.LEADS_EMAIL_TO || '').split(',').map((email) => email.trim()).filter(Boolean);
    const emailFrom = process.env.LEADS_EMAIL_FROM || 'Axpense <leads@axpense.net>';
    const emailConfigured = !!resendKey && emailTo.length > 0;
    if (!apiBase && !webhook && !emailConfigured) return err('not_configured', 'Lead delivery is not configured yet. Please email info@axpense.net.', 503);

    let delivered = false;
    if (apiBase) {
      const res = await fetch(`${apiBase}/api/public/leads`, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-forwarded-for': ip },
        body: JSON.stringify({
          name: body.name, company: body.company, email: body.email, phone: body.phone, companySize: body.companySize,
          assetCount: body.assetCount ? Number(body.assetCount) || null : null, industry: body.industry, message: body.message,
          sourcePage: body.page, lang: body.lang, utmSource: body.utmSource, referrer: body.referrer,
          countryCode: request.headers.get('x-vercel-ip-country') ?? undefined,
        }),
        cache: 'no-store',
      }).catch(() => null);
      if (res?.status === 400) return err('invalid', 'Please check the form and try again.', 400);
      delivered = !!res?.ok;
    }

    // 2) Optional webhook (e.g. Zapier/Make/CRM) — also used as a fallback if the API is down.
    if (webhook) {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ source: 'axpense.net', receivedAt: new Date().toISOString(), ...body }),
        cache: 'no-store',
      }).catch(() => null);
      delivered = delivered || !!res?.ok;
    }

    // 3) Optional email delivery through Resend.
    if (resendKey && emailTo.length > 0) {
      const resend = new Resend(resendKey);
      const { error } = await resend.emails.send({
        from: emailFrom,
        to: emailTo,
        replyTo: body.email,
        subject: `New Axpense demo request — ${body.company}`,
        html: leadEmailHtml(body),
      }).catch((error) => ({ error }));
      delivered = delivered || !error;
    }

    if (!delivered) return err('delivery_failed', 'Lead delivery failed. Please try again.', 502);
    return NextResponse.json({ ok: true });
  } catch {
    return err('server_error', 'Unable to submit the form right now.', 500);
  }
}
