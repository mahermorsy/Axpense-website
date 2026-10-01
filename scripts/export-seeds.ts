/**
 * Regenerates the backend seed files from the website content, so the API
 * starts with exactly what the static site shows:
 *   npx tsx scripts/export-seeds.ts
 * → backend/src/Axpense.Infrastructure/Persistence/Seed/pricing.json
 * → backend/src/Axpense.Infrastructure/Persistence/Seed/blog-posts.json
 */
import { writeFileSync } from 'node:fs';
import { DEFAULT_PRICING } from '../content/pricing';
import { POSTS } from '../content/blog';

const dir = 'backend/src/Axpense.Infrastructure/Persistence/Seed';
writeFileSync(`${dir}/pricing.json`, JSON.stringify(DEFAULT_PRICING, null, 2) + '\n');
writeFileSync(`${dir}/blog-posts.json`, JSON.stringify(POSTS.filter((p) => p.status === 'published').map((p) => ({
  slug: p.slug, title: p.title, excerpt: p.excerpt, category: p.category, language: p.language, publishedAt: p.publishedAt, sections: p.sections,
})), null, 2) + '\n');
console.log(`pricing: ${DEFAULT_PRICING.currencies.length} currencies · blog: ${POSTS.length} posts`);
