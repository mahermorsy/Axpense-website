/**
 * Client for the Axpense .NET API (backend/). Used when NEXT_PUBLIC_API_URL is set;
 * otherwise the admin runs in demo mode with local sample data.
 */
import type { AdminPost, AdminUser, Faq, Lead, LeadStatus, Role } from './types';

export const API_URL = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');
export const API_MODE = API_URL.length > 0;

const TOKEN_KEY = 'axpense-admin-token';
export const tokenStore = {
  get: () => { try { return localStorage.getItem(TOKEN_KEY); } catch { return null; } },
  set: (t: string) => { try { localStorage.setItem(TOKEN_KEY, t); } catch { /* ignore */ } },
  clear: () => { try { localStorage.removeItem(TOKEN_KEY); } catch { /* ignore */ } },
};

export class ApiError extends Error {
  constructor(message: string, public status: number, public errors?: Record<string, string[]>) { super(message); }
}

export async function api<T>(path: string, init: { method?: string; body?: unknown; auth?: boolean } = {}): Promise<T> {
  const headers: Record<string, string> = { accept: 'application/json' };
  if (init.body !== undefined) headers['content-type'] = 'application/json';
  const token = init.auth === false ? null : tokenStore.get();
  if (token) headers.authorization = `Bearer ${token}`;

  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, { method: init.method ?? 'GET', headers, body: init.body === undefined ? undefined : JSON.stringify(init.body) });
  } catch {
    throw new ApiError('Can’t reach the server. Check your connection and try again.', 0);
  }
  if (res.status === 204) return undefined as T;
  const data = await res.json().catch(() => undefined);
  if (!res.ok) {
    const errors = data?.errors as Record<string, string[]> | undefined;
    const first = errors ? Object.values(errors).flat()[0] : undefined;
    throw new ApiError(first || data?.title || `Request failed (${res.status})`, res.status, errors);
  }
  return data as T;
}

// ---------- DTOs (as returned by the API; enums are snake_case strings) ----------
type ChannelDto = 'direct' | 'google' | 'linked_in' | 'facebook' | 'referral' | 'other';
export type LeadDto = {
  id: string; name: string; company: string; email: string; phone?: string | null; companySize?: string | null; assetCount?: number | null;
  industry: string; country: string; message?: string | null; sourcePage: string; channel: ChannelDto; language: 'en' | 'ar';
  status: LeadStatus; ownerId?: string | null; createdAt: string;
  notes: { id: string; text: string; authorId?: string | null; authorName: string; createdAt: string }[];
};
export type PostDto = {
  id: string; slug: string; title: string; excerpt: string; category: string; status: 'draft' | 'published'; language: 'en' | 'ar';
  publishedAt?: string | null; views: number; authorId?: string | null; seoTitle?: string | null; seoDescription?: string | null;
  sections: { heading: string; body: string }[]; createdAt: string; updatedAt?: string | null;
};
export type FaqDto = { id: string; page: string; language: 'en' | 'ar'; question: string; answer: string; isPublished: boolean; sortOrder: number };
export type UserDto = { id: string; name: string; email: string; role: string; status: 'active' | 'invited' | 'disabled'; lastActiveAt?: string | null; createdAt: string };
export type Paged<T> = { items: T[]; total: number; page: number; pageSize: number };

const CHANNEL: Record<ChannelDto, Lead['channel']> = { direct: 'Direct', google: 'Google', linked_in: 'LinkedIn', facebook: 'Facebook', referral: 'Referral', other: 'Other' };

export const fromLead = (d: LeadDto): Lead => ({
  id: d.id, name: d.name, company: d.company, email: d.email, phone: d.phone ?? undefined, companySize: d.companySize ?? undefined,
  assetCount: d.assetCount ?? undefined, industry: d.industry, country: d.country, message: d.message ?? undefined,
  sourcePage: d.sourcePage, channel: CHANNEL[d.channel] ?? 'Other', lang: d.language, status: d.status, ownerId: d.ownerId ?? undefined,
  createdAt: d.createdAt,
  notes: d.notes.map((n) => ({ id: n.id, at: n.createdAt, by: n.authorId ?? '', byName: n.authorName, text: n.text })),
});

export const fromPost = (d: PostDto): AdminPost => ({
  id: d.id, slug: d.slug, title: d.title, excerpt: d.excerpt, category: d.category, status: d.status, lang: d.language,
  publishedAt: d.publishedAt ? d.publishedAt.slice(0, 10) : '', updatedAt: (d.updatedAt ?? d.createdAt).slice(0, 10),
  views: d.views, authorId: d.authorId ?? '', seoTitle: d.seoTitle ?? undefined, seoDescription: d.seoDescription ?? undefined,
  sections: d.sections,
});

export const toPostModel = (p: AdminPost) => ({
  title: p.title, slug: p.slug, excerpt: p.excerpt, category: p.category, status: p.status, language: p.lang,
  publishedAt: p.publishedAt ? `${p.publishedAt}T00:00:00Z` : null, seoTitle: p.seoTitle || null, seoDescription: p.seoDescription || null,
  sections: p.sections,
});

export const fromFaq = (d: FaqDto): Faq => ({ id: d.id, page: d.page, lang: d.language, question: d.question, answer: d.answer, published: d.isPublished, order: d.sortOrder });
export const toFaqModel = (f: Faq) => ({ page: f.page, language: f.lang, question: f.question, answer: f.answer, isPublished: f.published });

export const fromUser = (d: UserDto): AdminUser => ({
  id: d.id, name: d.name, email: d.email, role: (d.role.toLowerCase() as Role) || 'sales', status: d.status,
  lastActiveAt: d.lastActiveAt ?? undefined, createdAt: d.createdAt,
});
export const roleToApi = (r: Role) => r.charAt(0).toUpperCase() + r.slice(1);
