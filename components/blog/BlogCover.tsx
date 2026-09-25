import { BookOpen, DollarSign, Package, Truck, Wrench, type LucideIcon } from 'lucide-react';

const COVERS: Record<string, { icon: LucideIcon; from: string; to: string }> = {
  'Fleet Management': { icon: Truck, from: 'from-primary', to: 'to-panel-4' },
  'Fleet Maintenance': { icon: Wrench, from: 'from-panel-3', to: 'to-primary' },
  'Fleet Expenses': { icon: DollarSign, from: 'from-primary', to: 'to-[hsl(180_45%_30%)]' },
  'Asset Management': { icon: Package, from: 'from-panel-4', to: 'to-primary' },
};

// Branded cover art (no stock photos): brand gradient, dot grid and a large
// category icon — replace with real images later via the `image` prop.
export function BlogCover({ category, size = 'md', image }: { category: string; size?: 'md' | 'lg'; image?: string }) {
  const c = COVERS[category] ?? { icon: BookOpen, from: 'from-primary', to: 'to-panel-4' };
  const Icon = c.icon;
  if (image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={image} alt="" className="h-full w-full object-cover" />;
  }
  return (
    <div aria-hidden="true" className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${c.from} ${c.to}`}>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '22px 22px' }} />
      <div className="absolute -bottom-16 -end-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
      <div className={`relative flex items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm ${size === 'lg' ? 'h-24 w-24' : 'h-16 w-16'}`}>
        <Icon className={`text-white ${size === 'lg' ? 'h-12 w-12' : 'h-8 w-8'}`} />
      </div>
    </div>
  );
}
