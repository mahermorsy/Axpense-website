'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowRight, Info, Lock } from 'lucide-react';
import { useAdmin } from '@/lib/admin/store';
import { ROLE_DESC, ROLE_LABEL } from '@/lib/admin/types';
import { Avatar, cx } from '@/components/admin/ui';

export default function LoginPage() {
  const { ready, me, mode } = useAdmin();
  const router = useRouter();
  useEffect(() => { if (ready && me) router.replace('/admin'); }, [ready, me, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <Image src="/logo.png" alt="Axpense" width={839} height={184} className="h-10 w-auto" priority />
          <h1 className="text-2xl font-bold text-foreground">Sign in to Admin</h1>
          <p className="text-sm text-muted-foreground">Manage leads, blog articles, FAQs and users.</p>
        </div>
        {mode === 'api' ? <PasswordForm /> : <DemoPicker />}
      </div>
    </div>
  );
}

function PasswordForm() {
  const { signInWithPassword } = useAdmin();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  return (
    <form
      className="rounded-2xl border border-border bg-card p-6 shadow-elevated"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true); setError('');
        const err = await signInWithPassword(email.trim(), password);
        setBusy(false);
        if (err) setError(err); else router.replace('/admin');
      }}
    >
      {error && <p role="alert" className="mb-4 rounded-lg border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
      <label htmlFor="email" className="label-app">Work email</label>
      <input id="email" type="email" autoComplete="username" required value={email} onChange={(e) => setEmail(e.target.value)} className="input-app" />
      <label htmlFor="password" className="label-app mt-4">Password</label>
      <input id="password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="input-app" />
      <button type="submit" disabled={busy} className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-[hsl(176_40%_42%)] text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl disabled:opacity-60">
        <Lock className="h-4 w-4" />{busy ? 'Signing in…' : 'Sign in'}
      </button>
      <p className="mt-4 text-center text-xs text-muted-foreground">Forgot your password? Ask an admin to reset it.</p>
    </form>
  );
}

// DEMO sign-in: pick a sample account (no backend configured).
function DemoPicker() {
  const { ready, users, signIn } = useAdmin();
  const router = useRouter();
  const [selected, setSelected] = useState<string>('u1');
  const active = users.filter((u) => u.status === 'active');
  return (
    <form onSubmit={(e) => { e.preventDefault(); signIn(selected); router.replace('/admin'); }} className="rounded-2xl border border-border bg-card p-6 shadow-elevated">
      <div className="mb-4 flex gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
        <Info className="h-4 w-4 shrink-0" aria-hidden="true" />
        Demo mode — choose a sample account to see what each role can do. Connect the backend to use real accounts.
      </div>
      <fieldset>
        <legend className="label-app">Sign in as</legend>
        <div className="mt-2 flex flex-col gap-2">
          {active.map((u) => (
            <label key={u.id} className={cx('flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors', selected === u.id ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted/50')}>
              <input type="radio" name="user" value={u.id} checked={selected === u.id} onChange={() => setSelected(u.id)} className="sr-only" />
              <Avatar name={u.name} />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-foreground">{u.name}</span>
                <span className="block truncate text-xs text-muted-foreground">{ROLE_LABEL[u.role]} · {ROLE_DESC[u.role]}</span>
              </span>
              <span className={cx('h-4 w-4 rounded-full border-2', selected === u.id ? 'border-primary bg-primary shadow-[inset_0_0_0_2px_white]' : 'border-border')} aria-hidden="true" />
            </label>
          ))}
        </div>
      </fieldset>
      <button type="submit" disabled={!ready} className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-[hsl(176_40%_42%)] text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl disabled:opacity-60">
        Sign in <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
