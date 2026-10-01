import { SeoRoute, seoMetadata } from '@/lib/seo-route';

const PATH = '/vehicle-inspection-software';
export const metadata = seoMetadata(PATH, 'en');

export default function Page() {
  return <SeoRoute enPath={PATH} lang="en" />;
}
