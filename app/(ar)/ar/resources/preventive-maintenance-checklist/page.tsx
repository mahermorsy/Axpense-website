import { ToolRoute, toolMetadata } from '@/lib/tool-route';

const PATH = '/resources/preventive-maintenance-checklist';
export const metadata = toolMetadata(PATH, 'ar');

export default function Page() {
  return <ToolRoute enPath={PATH} lang="ar" />;
}
