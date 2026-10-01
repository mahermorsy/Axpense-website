import { ToolRoute, toolMetadata } from '@/lib/tool-route';

const PATH = '/resources/vehicle-inspection-checklist';
export const metadata = toolMetadata(PATH, 'ar');

export default function Page() {
  return <ToolRoute enPath={PATH} lang="ar" />;
}
