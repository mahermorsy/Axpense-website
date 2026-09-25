import { Facebook, Linkedin } from 'lucide-react';
import { SOCIAL } from '@/lib/cta';

const ICONS = { LinkedIn: Linkedin, Facebook } as const;

// Same icon buttons as the app footer.
export function SocialLinks() {
  return (
    <div className="flex gap-3">
      {SOCIAL.map(({ name, href }) => {
        const Icon = ICONS[name];
        return (
          <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
