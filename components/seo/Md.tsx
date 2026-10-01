import Link from 'next/link';
import type { ReactNode } from 'react';
import { lhref, type Lang } from '@/lib/i18n';

/**
 * Minimal, safe "markdown-lite" renderer for content files (no HTML injection).
 * Blocks (separated by blank lines): "### " H3, "- " list, "1. " ordered list,
 * "| a | b |" tables (2nd row = separator), "> " note, otherwise a paragraph.
 * Inline: **bold** and [anchor](/path). Internal links are localized with lhref().
 */
export function Md({ text, lang = 'en', className = '' }: { text: string; lang?: Lang; className?: string }) {
  const blocks = text.trim().split(/\n\s*\n/);
  return <div className={`md-lite space-y-4 text-base leading-relaxed text-muted-foreground ${className}`}>{blocks.map((b, i) => <Block key={i} block={b.trim()} lang={lang} />)}</div>;
}

function Block({ block, lang }: { block: string; lang: Lang }) {
  const lines = block.split('\n').map((l) => l.trim());
  if (lines[0].startsWith('### ')) {
    const rest = lines.slice(1).join('\n');
    return <><h3 className="pt-2 text-lg font-semibold text-foreground">{inline(lines[0].slice(4), lang)}</h3>{rest && <Block block={rest} lang={lang} />}</>;
  }
  if (lines.every((l) => l.startsWith('- '))) {
    return <ul className="space-y-2">{lines.map((l, i) => <li key={i} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /><span>{inline(l.slice(2), lang)}</span></li>)}</ul>;
  }
  if (lines.every((l) => /^\d+\.\s/.test(l))) {
    return <ol className="list-decimal space-y-2 ps-6 marker:font-semibold marker:text-primary">{lines.map((l, i) => <li key={i}>{inline(l.replace(/^\d+\.\s/, ''), lang)}</li>)}</ol>;
  }
  if (lines.every((l) => l.startsWith('|'))) {
    const rows = lines.filter((l) => !/^\|[\s:|-]+\|$/.test(l)).map((l) => l.replace(/^\||\|$/g, '').split('|').map((c) => c.trim()));
    const [head, ...body] = rows;
    return (
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[480px] text-start text-sm">
          <thead className="bg-muted/60 text-foreground"><tr>{head.map((c, i) => <th key={i} scope="col" className="px-4 py-3 text-start font-semibold">{inline(c, lang)}</th>)}</tr></thead>
          <tbody>{body.map((r, i) => <tr key={i} className="border-t border-border">{r.map((c, j) => <td key={j} className="px-4 py-3 align-top">{inline(c, lang)}</td>)}</tr>)}</tbody>
        </table>
      </div>
    );
  }
  if (lines.every((l) => l.startsWith('> '))) {
    return <p className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">{inline(lines.map((l) => l.slice(2)).join(' '), lang)}</p>;
  }
  return <p>{inline(lines.join(' '), lang)}</p>;
}

export function inline(s: string, lang: Lang): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(s))) {
    if (m.index > last) out.push(s.slice(last, m.index));
    if (m[1]) out.push(<strong key={k++} className="font-semibold text-foreground">{m[1]}</strong>);
    else {
      const href = m[3];
      out.push(href.startsWith('/')
        ? <Link key={k++} href={lhref(lang, href)} className="font-medium text-primary underline-offset-2 hover:underline">{m[2]}</Link>
        : <a key={k++} href={href} rel="noopener" className="font-medium text-primary underline-offset-2 hover:underline">{m[2]}</a>);
    }
    last = re.lastIndex;
  }
  if (last < s.length) out.push(s.slice(last));
  return out;
}

/** Plain text (for JSON-LD / meta) — strips the markdown-lite markup. */
export function plain(s: string) {
  return s.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
}
