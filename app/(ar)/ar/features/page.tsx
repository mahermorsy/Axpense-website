import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { FeaturesIndexView } from '@/components/pages/FeaturesIndexView';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: "المميزات",
  description: "كل مميزات أكسبنس في مكان واحد: المركبات والسائقون والصيانة الوقائية حسب الكيلومترات وقطع الغيار والفحوصات والمصروفات والإهلاك والتقارير.",
  path: '/ar/features',
  enPath: '/features',
  pageType: 'hub',
});

export default function Page() {
  return <FeaturesIndexView lang={LANG} />;
}
