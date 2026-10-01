import { ToolRoute, toolMetadata } from '@/lib/tool-route';

const PATH = '/resources/fleet-cost-calculator';
export const metadata = toolMetadata(PATH, 'en');

export default function Page() {
  return <ToolRoute enPath={PATH} lang="en" />;
}
