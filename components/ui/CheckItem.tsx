import { CheckCircle2 } from 'lucide-react';
import type { ReactNode } from 'react';

// List row in the app's card style with a teal check.
export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="card-app flex items-start gap-3 p-4 text-sm leading-relaxed text-ink-700">
      <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
      <span>{children}</span>
    </li>
  );
}
