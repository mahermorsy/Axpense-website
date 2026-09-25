'use client';

/**
 * Admin data store with two modes:
 *  - API mode (NEXT_PUBLIC_API_URL set): talks to the .NET backend (JWT auth, SQL Server).
 *    Changes are applied optimistically and rolled back (with an error toast) if the API refuses them.
 *  - Demo mode: seeded sample data kept in this browser's localStorage.
 */
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { DEMO_USERS, seedFaqs, seedLeads, seedPosts } from './seed';
import { API_MODE, ApiError, api, fromFaq, fromLead, fromPost, fromUser, roleToApi, toFaqModel, toPostModel, tokenStore, type FaqDto, type LeadDto, type Paged, type PostDto, type UserDto } from './api';
import { computeDashboard, fromDashboardDto, type DashboardView } from './dashboard';
import { can, type AdminPost, type AdminUser, type Faq, type Lead, type LeadStatus } from './types';

type Data = { leads: Lead[]; posts: AdminPost[]; faqs: Faq[]; users: AdminUser[] };
type Toast = { id: number; text: string; tone?: 'ok' | 'error' };
type LeadPatch = { status?: LeadStatus; ownerId?: string | undefined };

type Store = Data & {
  mode: 'api' | 'demo';
  ready: boolean;
  me?: AdminUser;
  signIn: (userId: string) => void;
  signInWithPassword: (email: string, password: string) => Promise<string | null>;
  signOut: () => void;
  refresh: () => Promise<void>;
  updateLead: (id: string, patch: LeadPatch) => Promise<void>;
  bulkUpdateLeads: (ids: string[], patch: LeadPatch) => Promise<void>;
  addLeadNote: (id: string, text: string) => Promise<void>;
  deleteLeads: (ids: string[]) => Promise<void>;
  savePost: (post: AdminPost) => Promise<AdminPost | null>;
  deletePost: (id: string) => Promise<void>;
  saveFaq: (faq: Faq) => Promise<void>;
  deleteFaq: (id: string) => Promise<void>;
  moveFaq: (id: string, dir: -1 | 1) => Promise<void>;
  saveUser: (user: AdminUser) => Promise<{ temporaryPassword?: string } | null>;
  resetUserPassword: (id: string) => Promise<string | null>;
  deleteUser: (id: string) => Promise<void>;
  fetchDashboard: (days: number, country: string | null) => Promise<DashboardView>;
  resetDemo: () => void;
  toasts: Toast[];
  toast: (text: string, tone?: Toast['tone']) => void;
};

const KEY = 'axpense-admin-demo-v1';
const SESSION = 'axpense-admin-session';
const ME_KEY = 'axpense-admin-me';
const EMPTY: Data = { leads: [], posts: [], faqs: [], users: [] };
const Ctx = createContext<Store | null>(null);

function freshDemo(): Data {
  return { leads: seedLeads(), posts: seedPosts(), faqs: seedFaqs(), users: DEMO_USERS };
}
function loadDemo(): Data {
  try { const raw = localStorage.getItem(KEY); if (raw) return JSON.parse(raw) as Data; } catch { /* ignore */ }
  return freshDemo();
}

export function AdminProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<Data>(EMPTY);
  const [ready, setReady] = useState(false);
  const [meId, setMeId] = useState<string | undefined>();
  const [apiMe, setApiMe] = useState<AdminUser | undefined>();
  const [toasts, setToasts] = useState<Toast[]>([]);
  const dataRef = useRef(data);
  dataRef.current = data;

  const toast = useCallback((text: string, tone: Toast['tone'] = 'ok') => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, text, tone }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3600);
  }, []);

  const signOut = useCallback(() => {
    setMeId(undefined);
    setApiMe(undefined);
    tokenStore.clear();
    try { localStorage.removeItem(SESSION); localStorage.removeItem(ME_KEY); } catch { /* ignore */ }
    if (API_MODE) setData(EMPTY);
  }, []);

  // ---------- API loading ----------
  const loadFromApi = useCallback(async (user: AdminUser) => {
    const [users, leads, posts, faqs] = await Promise.all([
      api<UserDto[]>('/api/users'),
      can(user.role, 'leads') ? api<Paged<LeadDto>>('/api/leads?pageSize=1000') : Promise.resolve(null),
      can(user.role, 'blog') ? api<Paged<PostDto>>('/api/blog?pageSize=1000') : Promise.resolve(null),
      can(user.role, 'faqs') ? api<FaqDto[]>('/api/faqs') : Promise.resolve(null),
    ]);
    setData({
      users: users.map(fromUser),
      leads: leads ? leads.items.map(fromLead) : [],
      posts: posts ? posts.items.map(fromPost) : [],
      faqs: faqs ? faqs.map(fromFaq) : [],
    });
  }, []);

  useEffect(() => {
    (async () => {
      if (!API_MODE) {
        setData(loadDemo());
        try { setMeId(localStorage.getItem(SESSION) || undefined); } catch { /* ignore */ }
        setReady(true);
        return;
      }
      if (tokenStore.get()) {
        try {
          const me = fromUser(await api<UserDto>('/api/auth/me'));
          setApiMe(me);
          await loadFromApi(me);
        } catch {
          signOut();
        }
      }
      setReady(true);
    })();
  }, [loadFromApi, signOut]);

  useEffect(() => {
    if (!ready || API_MODE) return;
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch { /* ignore */ }
  }, [data, ready]);

  const me = API_MODE ? apiMe : data.users.find((u) => u.id === meId && u.status === 'active');

  const patchData = useCallback(<K extends keyof Data>(key: K, fn: (arr: Data[K]) => Data[K]) => {
    setData((d) => ({ ...d, [key]: fn(d[key]) }));
  }, []);

  /** Runs an API call; on failure shows the error, handles expired sessions and reloads server state. */
  const guard = useCallback(async <T,>(call: () => Promise<T>): Promise<T | null> => {
    try {
      return await call();
    } catch (e) {
      const err = e as ApiError;
      if (err.status === 401) { toast('Your session has ended. Please sign in again.', 'error'); signOut(); return null; }
      toast(err.message || 'Something went wrong.', 'error');
      if (apiMe) await loadFromApi(apiMe).catch(() => undefined);
      return null;
    }
  }, [toast, signOut, apiMe, loadFromApi]);

  const store = useMemo<Store>(() => {
    // Mirrors the backend rules: assigning a new lead marks it contacted; an explicit status wins.
    const applyLead = (id: string, p: LeadPatch) => patchData('leads', (a) => a.map((l) => {
      if (l.id !== id) return l;
      const next: Lead = { ...l };
      if ('ownerId' in p) { next.ownerId = p.ownerId; if (p.ownerId && next.status === 'new') next.status = 'contacted'; }
      if (p.status) next.status = p.status;
      return next;
    }));
    const leadBody = (p: LeadPatch) => ({ status: p.status ?? null, ownerId: p.ownerId ?? null, clearOwner: 'ownerId' in p && !p.ownerId });

    return {
      ...data,
      mode: API_MODE ? 'api' : 'demo',
      ready,
      me,
      toasts,
      toast,
      signOut,
      refresh: async () => { if (API_MODE && apiMe) await guard(() => loadFromApi(apiMe)); },

      signIn: (userId) => {
        setMeId(userId);
        try { localStorage.setItem(SESSION, userId); } catch { /* ignore */ }
        patchData('users', (a) => a.map((u) => (u.id === userId ? { ...u, lastActiveAt: new Date().toISOString() } : u)));
      },
      signInWithPassword: async (email, password) => {
        try {
          const res = await api<{ accessToken: string; expiresAt: string; user: UserDto }>('/api/auth/login', { method: 'POST', body: { email, password }, auth: false });
          tokenStore.set(res.accessToken);
          const user = fromUser(res.user);
          setApiMe(user);
          await loadFromApi(user);
          return null;
        } catch (e) {
          tokenStore.clear();
          return (e as ApiError).message || 'Sign-in failed.';
        }
      },

      // ----- Leads -----
      updateLead: async (id, p) => {
        applyLead(id, p);
        if (API_MODE) await guard(async () => { const d = await api<LeadDto>(`/api/leads/${id}`, { method: 'PATCH', body: leadBody(p) }); patchData('leads', (a) => a.map((l) => (l.id === id ? fromLead(d) : l))); });
      },
      bulkUpdateLeads: async (ids, p) => {
        ids.forEach((id) => applyLead(id, p));
        if (API_MODE) await guard(() => api('/api/leads/bulk-update', { method: 'POST', body: { ids, status: p.status ?? null, ownerId: p.ownerId ?? null } }));
      },
      addLeadNote: async (id, text) => {
        const tempId = `N-${Date.now()}`;
        patchData('leads', (a) => a.map((l) => (l.id === id ? { ...l, notes: [...l.notes, { id: tempId, at: new Date().toISOString(), by: me?.id ?? '', byName: me?.name, text }] } : l)));
        if (API_MODE) await guard(async () => {
          const n = await api<LeadDto['notes'][number]>(`/api/leads/${id}/notes`, { method: 'POST', body: { text } });
          patchData('leads', (a) => a.map((l) => (l.id === id ? { ...l, notes: l.notes.map((x) => (x.id === tempId ? { id: n.id, at: n.createdAt, by: n.authorId ?? '', byName: n.authorName, text: n.text } : x)) } : l)));
        });
      },
      deleteLeads: async (ids) => {
        patchData('leads', (a) => a.filter((l) => !ids.includes(l.id)));
        if (API_MODE) await guard(() => (ids.length === 1 ? api(`/api/leads/${ids[0]}`, { method: 'DELETE' }) : api('/api/leads/bulk-delete', { method: 'POST', body: { ids } })));
      },

      // ----- Blog -----
      savePost: async (post) => {
        const exists = dataRef.current.posts.some((p) => p.id === post.id);
        if (!API_MODE) {
          patchData('posts', (a) => (exists ? a.map((p) => (p.id === post.id ? post : p)) : [post, ...a]));
          return post;
        }
        return guard(async () => {
          const d = await api<PostDto>(exists ? `/api/blog/${post.id}` : '/api/blog', { method: exists ? 'PUT' : 'POST', body: toPostModel(post) });
          const saved = fromPost(d);
          patchData('posts', (a) => (exists ? a.map((p) => (p.id === post.id ? saved : p)) : [saved, ...a]));
          return saved;
        });
      },
      deletePost: async (id) => {
        patchData('posts', (a) => a.filter((p) => p.id !== id));
        if (API_MODE) await guard(() => api(`/api/blog/${id}`, { method: 'DELETE' }));
      },

      // ----- FAQs -----
      saveFaq: async (faq) => {
        const exists = dataRef.current.faqs.some((f) => f.id === faq.id);
        patchData('faqs', (a) => (exists ? a.map((f) => (f.id === faq.id ? faq : f)) : [...a, faq]));
        if (API_MODE) await guard(async () => {
          const d = await api<FaqDto>(exists ? `/api/faqs/${faq.id}` : '/api/faqs', { method: exists ? 'PUT' : 'POST', body: toFaqModel(faq) });
          patchData('faqs', (a) => a.map((f) => (f.id === faq.id ? fromFaq(d) : f)));
        });
      },
      deleteFaq: async (id) => {
        patchData('faqs', (a) => a.filter((f) => f.id !== id));
        if (API_MODE) await guard(() => api(`/api/faqs/${id}`, { method: 'DELETE' }));
      },
      moveFaq: async (id, dir) => {
        patchData('faqs', (a) => {
          const f = a.find((x) => x.id === id); if (!f) return a;
          const group = a.filter((x) => x.page === f.page && x.lang === f.lang).sort((x, y) => x.order - y.order);
          const i = group.findIndex((x) => x.id === id); const j = i + dir;
          if (j < 0 || j >= group.length) return a;
          const other = group[j];
          return a.map((x) => (x.id === f.id ? { ...x, order: other.order } : x.id === other.id ? { ...x, order: f.order } : x));
        });
        if (API_MODE) await guard(() => api(`/api/faqs/${id}/move`, { method: 'POST', body: { direction: dir } }));
      },

      // ----- Users -----
      saveUser: async (user) => {
        const exists = dataRef.current.users.some((u) => u.id === user.id);
        if (!API_MODE) {
          patchData('users', (a) => (exists ? a.map((u) => (u.id === user.id ? user : u)) : [...a, user]));
          return {};
        }
        return guard(async () => {
          if (exists) {
            const d = await api<UserDto>(`/api/users/${user.id}`, { method: 'PUT', body: { name: user.name, role: roleToApi(user.role), status: user.status } });
            patchData('users', (a) => a.map((u) => (u.id === user.id ? fromUser(d) : u)));
            return {};
          }
          const d = await api<{ user: UserDto; temporaryPassword?: string | null }>('/api/users', { method: 'POST', body: { name: user.name, email: user.email, role: roleToApi(user.role), password: null } });
          patchData('users', (a) => [...a, fromUser(d.user)]);
          return { temporaryPassword: d.temporaryPassword ?? undefined };
        });
      },
      resetUserPassword: async (id) => {
        if (!API_MODE) return 'Demo-Only-Pass1';
        const r = await guard(() => api<{ temporaryPassword?: string | null }>(`/api/users/${id}/reset-password`, { method: 'POST' }));
        return r?.temporaryPassword ?? null;
      },
      deleteUser: async (id) => {
        patchData('users', (a) => a.filter((u) => u.id !== id));
        if (API_MODE) await guard(() => api(`/api/users/${id}`, { method: 'DELETE' }));
      },

      // ----- Analytics -----
      fetchDashboard: async (days, country) => {
        const includeLeads = can(me?.role, 'leads');
        if (!API_MODE) return computeDashboard(dataRef.current.leads, dataRef.current.posts, dataRef.current.faqs, days, country, includeLeads);
        const qs = new URLSearchParams({ days: String(days), ...(country ? { country } : {}) });
        const d = await guard(() => api<DashboardView>(`/api/analytics/dashboard?${qs}`));
        return d ? fromDashboardDto(d) : computeDashboard([], [], [], days, null, false);
      },

      resetDemo: () => { if (!API_MODE) setData(freshDemo()); },
    };
  }, [data, ready, me, toasts, toast, signOut, apiMe, guard, loadFromApi, patchData]);

  return <Ctx.Provider value={store}>{children}</Ctx.Provider>;
}

export function useAdmin() {
  const s = useContext(Ctx);
  if (!s) throw new Error('useAdmin must be used inside <AdminProvider>');
  return s;
}

export function uid(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 5)}`;
}
