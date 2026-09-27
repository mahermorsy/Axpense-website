import { redirect } from 'next/navigation';
import { APP_URL } from '@/lib/cta';

export default function AdminLoginPage() {
  redirect(APP_URL);
}
