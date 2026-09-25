'use client';

import { useState } from 'react';
import { Copy, KeyRound, Pencil, Plus, ShieldCheck, Trash2, UserX } from 'lucide-react';
import { useAdmin, uid } from '@/lib/admin/store';
import { ROLE_DESC, ROLE_LABEL, type AdminUser, type Role } from '@/lib/admin/types';
import { Avatar, Btn, Card, ConfirmDialog, Field, Input, Modal, PageHeader, Pill, Select, timeAgo } from '@/components/admin/ui';

export default function UsersPage() {
  const { users, me, saveUser, deleteUser, resetUserPassword, toast, mode } = useAdmin();
  const [editing, setEditing] = useState<AdminUser | null>(null);
  const [secret, setSecret] = useState<{ name: string; email: string; password: string } | null>(null);
  const [del, setDel] = useState<AdminUser | null>(null);
  const admins = users.filter((u) => u.role === 'admin' && u.status === 'active').length;

  return (
    <>
      <PageHeader eyebrow="Users management" title="Users & roles" desc="Who can sign in to the admin, and what each person can do."
        actions={<Btn variant="primary" onClick={() => setEditing({ id: uid('u'), name: '', email: '', role: 'sales', status: 'invited', createdAt: new Date().toISOString() })}><Plus />Invite user</Btn>} />

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        {(Object.keys(ROLE_LABEL) as Role[]).map((r) => (
          <Card key={r} className="flex items-start gap-3 p-4">
            <span className="icon-tile h-10 w-10 rounded-lg"><ShieldCheck className="h-5 w-5" /></span>
            <div><p className="font-semibold text-foreground">{ROLE_LABEL[r]} <span className="text-sm font-normal text-muted-foreground">· {users.filter((u) => u.role === r).length}</span></p><p className="text-sm text-muted-foreground">{ROLE_DESC[r]}</p></div>
          </Card>
        ))}
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="text-left text-xs text-muted-foreground"><tr className="border-b border-border">
              <th className="px-4 py-3 font-medium">User</th><th className="px-2 py-3 font-medium">Role</th><th className="px-2 py-3 font-medium">Status</th><th className="px-2 py-3 font-medium">Last active</th><th className="px-4 py-3 text-right font-medium"><span className="sr-only">Actions</span></th>
            </tr></thead>
            <tbody>
              {users.map((u) => {
                const self = u.id === me?.id;
                const lastAdmin = u.role === 'admin' && u.status === 'active' && admins <= 1;
                return (
                  <tr key={u.id} className="border-b border-border/60 last:border-0">
                    <td className="px-4 py-3"><div className="flex items-center gap-3"><Avatar name={u.name || '?'} /><div className="min-w-0"><p className="font-medium text-foreground">{u.name}{self && <span className="ms-1.5 text-xs text-muted-foreground">(you)</span>}</p><p className="truncate text-xs text-muted-foreground">{u.email}</p></div></div></td>
                    <td className="px-2 py-3">
                      <label htmlFor={`role-${u.id}`} className="sr-only">Role for {u.name}</label>
                      <Select id={`role-${u.id}`} value={u.role} disabled={self || lastAdmin} onChange={async (e) => { const r = await saveUser({ ...u, role: e.target.value as Role }); if (r) toast(`${u.name} is now ${ROLE_LABEL[e.target.value as Role]}`); }} className="h-9 w-32 py-0">
                        {(Object.keys(ROLE_LABEL) as Role[]).map((r) => <option key={r} value={r}>{ROLE_LABEL[r]}</option>)}
                      </Select>
                    </td>
                    <td className="px-2 py-3">{u.status === 'active' ? <Pill tone="green">Active</Pill> : u.status === 'invited' ? <Pill tone="amber">Invited</Pill> : <Pill>Disabled</Pill>}</td>
                    <td className="px-2 py-3 text-xs text-muted-foreground">{u.status === 'invited' ? 'Invite pending' : timeAgo(u.lastActiveAt)}</td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-1">
                        {u.status === 'invited' && mode === 'demo' && <Btn size="sm" variant="ghost" onClick={() => { saveUser({ ...u, status: 'active' }); toast(`${u.name} activated (demo)`); }}>Mark accepted</Btn>}
                        {u.status !== 'invited' && !self && !lastAdmin && (
                          <Btn size="sm" variant="ghost" onClick={async () => { const r = await saveUser({ ...u, status: u.status === 'active' ? 'disabled' : 'active' }); if (r) toast(u.status === 'active' ? `${u.name} disabled` : `${u.name} enabled`); }}><UserX />{u.status === 'active' ? 'Disable' : 'Enable'}</Btn>
                        )}
                        {mode === 'api' && !self && <button type="button" onClick={async () => { const pwd = await resetUserPassword(u.id); if (pwd) setSecret({ name: u.name, email: u.email, password: pwd }); }} aria-label={`Reset password for ${u.name}`} title="Reset password" className="rounded-md p-2 text-muted-foreground hover:bg-muted"><KeyRound className="h-4 w-4" /></button>}
                        <button type="button" onClick={() => setEditing(u)} aria-label={`Edit ${u.name}`} className="rounded-md p-2 text-muted-foreground hover:bg-muted"><Pencil className="h-4 w-4" /></button>
                        <button type="button" onClick={() => setDel(u)} disabled={self || lastAdmin} aria-label={`Remove ${u.name}`} className="rounded-md p-2 text-muted-foreground hover:bg-red-50 hover:text-destructive disabled:opacity-30"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
      <p className="mt-3 text-xs text-muted-foreground">You can’t change your own role or remove the last active admin. {mode === 'api' ? 'New users get a temporary password to share with them securely.' : 'In demo mode, invites aren’t emailed.'}</p>

      {editing && <UserModal lockRole={editing.id === me?.id} user={editing} isNew={!users.some((u) => u.id === editing.id)} users={users} onClose={() => setEditing(null)} onSave={async (u, isNew) => { const r = await saveUser(u); if (!r) return; setEditing(null); if (r.temporaryPassword) setSecret({ name: u.name, email: u.email, password: r.temporaryPassword }); toast(isNew ? `${u.name} added` : 'User saved'); }} />}
      {secret && <PasswordModal secret={secret} onClose={() => setSecret(null)} />}
      <ConfirmDialog open={!!del} onCancel={() => setDel(null)} onConfirm={async () => { if (del) { await deleteUser(del.id); toast(`${del.name} removed`); } setDel(null); }} title="Remove this user?" body={`${del?.name ?? ''} will no longer be able to sign in.`} confirmLabel="Remove" />
    </>
  );
}

function UserModal({ user, isNew, users, onClose, onSave, lockRole }: { lockRole?: boolean; user: AdminUser; isNew: boolean; users: AdminUser[]; onClose: () => void; onSave: (u: AdminUser, isNew: boolean) => void }) {
  const [u, setU] = useState(user);
  const [err, setErr] = useState('');
  function submit() {
    if (!u.name.trim()) return setErr('Enter a name.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u.email)) return setErr('Enter a valid email address.');
    if (users.some((x) => x.email.toLowerCase() === u.email.toLowerCase() && x.id !== u.id)) return setErr('A user with this email already exists.');
    onSave({ ...u, name: u.name.trim(), email: u.email.trim() }, isNew);
  }
  return (
    <Modal open onClose={onClose} title={isNew ? 'Invite user' : 'Edit user'} footer={<><Btn onClick={onClose}>Cancel</Btn><Btn variant="primary" onClick={submit}>{isNew ? 'Send invite' : 'Save'}</Btn></>}>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); submit(); }}>
        {err && <p role="alert" className="rounded-lg bg-destructive/10 p-2 text-sm text-destructive">{err}</p>}
        <Field label="Full name" htmlFor="u-name"><Input id="u-name" value={u.name} onChange={(e) => setU({ ...u, name: e.target.value })} /></Field>
        <Field label="Work email" htmlFor="u-email"><Input id="u-email" type="email" value={u.email} onChange={(e) => setU({ ...u, email: e.target.value })} /></Field>
        <Field label="Role" htmlFor="u-role" hint={ROLE_DESC[u.role]}>
          <Select id="u-role" disabled={lockRole} value={u.role} onChange={(e) => setU({ ...u, role: e.target.value as Role })}>{(Object.keys(ROLE_LABEL) as Role[]).map((r) => <option key={r} value={r}>{ROLE_LABEL[r]}</option>)}</Select>
        </Field>
      </form>
    </Modal>
  );
}

function PasswordModal({ secret, onClose }: { secret: { name: string; email: string; password: string }; onClose: () => void }) {
  const { toast } = useAdmin();
  const copy = async () => { try { await navigator.clipboard.writeText(secret.password); toast('Password copied'); } catch { toast('Copy not available — select it manually', 'error'); } };
  return (
    <Modal open onClose={onClose} title="Temporary password" footer={<Btn variant="primary" onClick={onClose}>Done</Btn>}>
      <p className="text-sm text-muted-foreground">Share this with <span className="font-medium text-foreground">{secret.name}</span> ({secret.email}) through a secure channel. It won’t be shown again — they should change it after signing in.</p>
      <div className="mt-4 flex items-center gap-2 rounded-lg border border-border bg-muted/50 p-3">
        <code className="flex-1 select-all break-all font-mono text-base text-foreground">{secret.password}</code>
        <Btn size="sm" onClick={copy}><Copy />Copy</Btn>
      </div>
    </Modal>
  );
}
