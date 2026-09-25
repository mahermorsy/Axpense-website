import { notFound } from 'next/navigation';

// Sends unknown top-level URLs (e.g. /pricng) to the branded 404 page.
export default function UnknownPage() {
  notFound();
}
