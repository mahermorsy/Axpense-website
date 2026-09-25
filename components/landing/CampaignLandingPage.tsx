import { AlertTriangle, LayoutGrid } from 'lucide-react';
import { Button } from '../Button';
import { LeadForm } from '../LeadForm';
import { CheckItem } from '../ui/CheckItem';
import { FaqItem } from '../home/FAQSection';
import { ProductScreenshot } from '../ProductScreenshot';
import { Section, SectionHead } from '../Section';
import { JsonLd } from '../seo/JsonLd';
import { FAQJsonLd } from '../seo/FAQJsonLd';

export type CampaignData = { title:string; description:string; problem:string[]; benefits:string[]; features:string[]; faq:{q:string;a:string}[] };

export function CampaignLandingPage({ data }: { data: CampaignData }) {
  return <><JsonLd data={FAQJsonLd({ items: data.faq })} />
    <section className="border-b border-border bg-gradient-hero py-16 sm:py-20"><div className="mx-auto grid max-w-wrap items-center gap-12 px-5 sm:px-7 lg:grid-cols-2"><div><p className="badge-app mb-4">Axpense</p><h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-ink-900 sm:text-5xl">{data.title}</h1><p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{data.description}</p><Button href="#get-started" size="lg">Book a Demo</Button></div><ProductScreenshot priority /></div></section>
    <Section><SectionHead eyebrow="The problem" title="Replace scattered operational records with one system" /><ul className="grid gap-4 sm:grid-cols-2">{data.problem.map(x=><li key={x} className="card-app flex items-center gap-3 p-4 text-sm text-foreground"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive"><AlertTriangle className="h-4 w-4" aria-hidden="true" /></span>{x}</li>)}</ul></Section>
    <Section alt><SectionHead eyebrow="Benefits" title="What your team can manage in one place" /><ul className="grid gap-4 sm:grid-cols-2">{data.benefits.map(x=><CheckItem key={x}>{x}</CheckItem>)}</ul></Section>
    <Section><SectionHead eyebrow="Features" title="Built around real fleet and asset workflows" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{data.features.map(x=><div key={x} className="card-app flex items-center gap-3 p-4 text-sm font-medium text-foreground"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-primary"><LayoutGrid className="h-4 w-4" aria-hidden="true" /></span>{x}</div>)}</div></Section>
    <Section alt id="get-started"><SectionHead eyebrow="Get started" title="Tell us what you need to manage" center /><div className="card-app mx-auto max-w-2xl p-6 shadow-card sm:p-8"><LeadForm /></div></Section>
    <Section><SectionHead eyebrow="FAQ" title="Frequently asked questions" /><div className="mx-auto flex max-w-3xl flex-col gap-3">{data.faq.map(x=><FaqItem key={x.q} q={x.q} a={x.a} />)}</div></Section>
  </>;
}
