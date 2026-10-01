import { SeoRoute, seoMetadata } from '@/lib/seo-route';

const PATH = '/fleet-cost-tracking';
export const metadata = seoMetadata(PATH, 'ar');

export default function Page() {
  return <SeoRoute enPath={PATH} lang="ar" />;
}
