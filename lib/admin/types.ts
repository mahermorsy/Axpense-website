export type Role = 'admin' | 'editor' | 'sales';
export type Area = 'dashboard' | 'leads' | 'blog' | 'faqs' | 'users';

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'demo_booked' | 'won' | 'lost';
export type Lead = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone?: string;
  companySize?: string;
  assetCount?: number;
  industry: string;
  country: string;
  message?: string;
  sourcePage: string;
  channel: 'Google' | 'LinkedIn' | 'Facebook' | 'Direct' | 'Referral' | 'Other';
  lang: 'en' | 'ar';
  status: LeadStatus;
  ownerId?: string;
  notes: { id: string; at: string; by: string; byName?: string; text: string }[];
  createdAt: string; // ISO
};

export type PostStatus = 'published' | 'draft';
export type AdminPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  status: PostStatus;
  lang: 'en' | 'ar';
  publishedAt: string;
  updatedAt: string;
  views: number;
  authorId: string;
  seoTitle?: string;
  seoDescription?: string;
  sections: { heading: string; body: string }[];
};

export type Faq = {
  id: string;
  page: string; // e.g. 'home', 'pricing', 'en-eg'
  lang: 'en' | 'ar';
  question: string;
  answer: string;
  published: boolean;
  order: number;
};

export type UserStatus = 'active' | 'invited' | 'disabled';
export type AdminUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: UserStatus;
  lastActiveAt?: string;
  createdAt: string;
};

export const LEAD_STATUSES: { id: LeadStatus; label: string }[] = [
  { id: 'new', label: 'New' },
  { id: 'contacted', label: 'Contacted' },
  { id: 'qualified', label: 'Qualified' },
  { id: 'demo_booked', label: 'Demo booked' },
  { id: 'won', label: 'Won' },
  { id: 'lost', label: 'Lost' },
];

export const ROLE_LABEL: Record<Role, string> = { admin: 'Admin', editor: 'Editor', sales: 'Sales' };
export const ROLE_DESC: Record<Role, string> = {
  admin: 'Full access, including users',
  editor: 'Blog articles and FAQs',
  sales: 'Leads and lead analytics',
};

const ACCESS: Record<Role, Area[]> = {
  admin: ['dashboard', 'leads', 'blog', 'faqs', 'users'],
  editor: ['dashboard', 'blog', 'faqs'],
  sales: ['dashboard', 'leads'],
};
export function can(role: Role | undefined, area: Area) {
  return !!role && ACCESS[role].includes(area);
}
