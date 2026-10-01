import type { BlogPost } from '@/lib/blog';
import { EN_POSTS } from './en';
import { AR_POSTS } from './ar';

// Arabic articles reuse the English slug, so /blog/x and /ar/blog/x are twins.
export const POSTS: BlogPost[] = [...EN_POSTS, ...AR_POSTS];

/** Slugs with an Arabic twin — used by lhref() and the language switcher. */
export const AR_BLOG_SLUGS = AR_POSTS.map((p) => p.slug);
