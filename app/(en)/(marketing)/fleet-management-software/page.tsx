import { SeoRoute, seoMetadata } from '@/lib/seo-route';

const PATH = '/fleet-management-software';
export const metadata = seoMetadata(PATH, 'en');

export default function Page() {
  return <SeoRoute enPath={PATH} lang="en" />;
}
