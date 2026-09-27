'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Lock } from 'lucide-react';
import { useAdmin } from '@/lib/admin/store';

export default function AdminLoginPage() {
  const { ready, me, mode } = useAdmin();
  const router = useRouter();

  useEffect(() => {
    if (ready && me) router.replace('/admin');
  }, [ready, me, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <Image src="/logo.png" alt="Axpense" width={839} height={184} className="h-10 w-auto" priority />
          <h1 className="text-2xl font-bold text-foreground">Sign in to Admin</h1>
          <p className="text-sm text-muted-foreground">Manage leads, blog articles, FAQs and users.</p>
        </div>
        {mode === 'api' ? <PasswordForm /> : <AdminNotConfigured />}
      </div>
    </div>
  );
}

function AdminNotConfigured() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-elevated">
      <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <Lock className="h-5 w-5" aria-hidden="true" />
      </div>
      <p className="text-lg font-semibold text-foreground">Admin login is not configured</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Connect the marketing admin backend by setting <span className="font-mono text-foreground">NEXT_PUBLIC_API_URL</span>.
      </p>
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
        setBusy(true);
        setError('');
        const err = await signInWithPassword(email.trim(), password);
        setBusy(false);
        if (err) setError(err);
        else router.replace('/admin');
      }}
    >
      {error && <p role="alert" className="mb-4 rounded-lg border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
      <label htmlFor="email" className="label-app">Work email</label>
      <input id="email" type="email" autoComplete="username" required value={email} onChange={(e) => setEmail(e.target.value)} className="input-app" />
      <label htmlFor="password" className="label-app mt-4">Password</label>
      <input id="password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="input-app" />
      <button type="submit" disabled={busy} className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-[hsl(176_40%_42%)] text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl disabled:opacity-60">
        <Lock className="h-4 w-4" />{busy ? 'Signing in...' : 'Sign in'}
      </button>
      <p className="mt-4 text-center text-xs text-muted-foreground">Admin access is restricted to authorized Axpense staff.</p>
    </form>
  );
}
