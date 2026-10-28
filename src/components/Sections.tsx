import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  FileText,
  Globe,
  GraduationCap,
  Layers,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Terminal,
  Wrench,
  Quote
} from "lucide-react";
import { liveSites,prototypeSites ,profile, ticker, type Dict, type Locale } from "@/content";
import Halftone from "./Halftone";
import { ExperienceList, FaqList } from "./Accordion";

// Cached at build time; refreshes on each deploy
async function Year() {
  "use cache";
  return new Date().getFullYear();
}

export const container = "mx-auto w-full max-w-[1280px] px-4 md:px-8";

function SectionHead({ label, title, dark = false }: { label: string; title: string; dark?: boolean }) {
  return (
    <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-[1fr_4fr] md:gap-8">
      <p
        className={`h-fit border-l pl-3 text-[11px] uppercase tracking-wider md:pb-10 ${
          dark ? "border-white/40 text-white/50" : "border-ink text-muted"
        }`}
      >
        {label}
      </p>
      <h2
        className={`font-display text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl ${
          dark ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

function Marquee({ text, className }: { text: string; className?: string }) {
  return (
    <div className={`flex w-max animate-marquee ${className ?? ""}`} aria-hidden>
      {[0, 1].map((n) => (
        <span key={n} className="flex shrink-0">
          {[0, 1].map((m) => (
            <span key={m} className="pr-[0.6em]">
              {text}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}

export function Hero({ hero }: { hero: Dict["hero"] }) {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-14 text-white md:pt-[70px]">
      <div className="relative min-h-[calc(100svh-3.5rem)] md:min-h-[calc(100svh-70px)]">
        <div className="absolute right-0 top-0 h-[52%] w-full md:bottom-0 md:h-auto md:w-[55%]">
          <Halftone src="/rahil-hero.png" className="h-full w-full opacity-90" spacing={5} />
        </div>

        <h1 className="sr-only">
          {profile.name} — {hero.headline}
        </h1>

        <div className={`${container} relative flex pb-14 pt-[50svh] md:absolute md:inset-x-0 md:bottom-0 md:pb-16 md:pt-0`}>
          <div className="max-w-md">
            <p className="text-sm leading-[1.9] md:text-[15px]">
              <span className="mark-accent">{hero.intro}</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="bg-accent px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-white"
              >
                {hero.seeWork}
              </a>
              <a
                href={profile.cv}
                download
                className="border border-white/70 px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-white hover:text-ink"
              >
                {hero.downloadCv}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-y border-white/10 bg-accent py-3 text-ink">
        <Marquee
          text={ticker.map((t) => t.toUpperCase()).join(" / ") + " /"}
          className="animate-marquee-fast text-xs font-bold tracking-wider"
        />
      </div>
    </section>
  );
}

export function About({ about }: { about: Dict["about"] }) {
  return (
    <section className={`${container} py-24 md:py-36`}>
      <div className="grid gap-10 md:grid-cols-[1fr_4fr] md:gap-8">
        <div className="flex flex-col gap-6">
          <p className="h-fit border-l border-ink pl-3 text-[11px] uppercase tracking-wider text-muted">
            {about.label}
          </p>
          <div className="relative aspect-square w-40 overflow-hidden bg-panel md:w-full">
            <Image
              src="/rahil-gray.png"
              alt={profile.name}
              fill
              sizes="(min-width: 768px) 220px, 160px"
              className="object-cover object-top"
            />
          </div>
        </div>
        <div className="border-l border-ink pl-5 md:pl-8">
          <p className="font-display text-2xl font-medium leading-snug tracking-tight text-ink/80 md:text-[2.6rem] md:leading-[1.15]">
            {about.text}
          </p>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-wider text-muted">
            {about.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
            <li className="text-accent-dark">{about.available}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Numbers({ numbers }: { numbers: Dict["numbers"] }) {
  const accents = ["text-accent-dark", "text-ink", "text-ink", "text-accent"];
  const heights = ["md:pb-28", "md:pt-20 md:pb-10", "md:pt-36", "md:pb-20"];
  return (
    <section className={`${container} pb-24 md:pb-36`}>
      <SectionHead label={numbers.label} title={numbers.title} />
      <div className="grid grid-cols-2 md:grid-cols-4">
        {numbers.items.map((item, i) => (
          <div key={item.caption} className={`border-l border-ink/80 px-4 py-6 md:px-6 ${heights[i]}`}>
            <p className={`font-display text-5xl font-bold tracking-tight md:text-7xl ${accents[i]}`}>
              {item.value}
            </p>
            <p className="mt-3 max-w-[16rem] text-xs leading-relaxed text-muted">{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export const projectGlyphs = ["{ }", "⌂", "HR", "∿", "▶", "☎"];

export function Work({ work, lang, view }: { work: Dict["work"]; lang: Locale; view: string }) {
  return (
    <section id="work" className="pb-24 md:pb-36">
      <div className={container}>
        <SectionHead label={work.label} title={work.title} />
      </div>
      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 [scrollbar-width:thin] md:px-[max(2rem,calc((100vw_-_1280px)/2_+_2rem))] md:scroll-px-[max(2rem,calc((100vw_-_1280px)/2_+_2rem))]">
        {work.items.map((p, i) => (
          <Link
            key={p.slug}
            href={`/${lang}/projects/${p.slug}`}
            className="group flex w-[85vw] shrink-0 snap-start flex-col bg-white transition-shadow hover:shadow-[8px_8px_0_#0a0a0a] sm:w-[420px]"
          >
            <div className="relative grid aspect-[4/3] place-items-center overflow-hidden bg-ink">
              <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(#555_1px,transparent_1.5px)] [background-size:10px_10px] transition-opacity duration-500 group-hover:opacity-70" />
              <span className="relative font-display text-7xl font-bold text-accent transition-transform duration-500 group-hover:scale-110">
                {projectGlyphs[i] ?? "◆"}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex justify-between text-[11px] uppercase tracking-wider text-soft">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>{p.year}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold group-hover:underline group-hover:decoration-accent group-hover:decoration-2 group-hover:underline-offset-4">
                {p.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <li key={s} className="border border-ink/70 px-1.5 py-0.5 text-[10px] uppercase tracking-wider">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[13px] leading-relaxed text-muted">{p.description}</p>
              <div className="mt-auto flex items-center justify-between pt-5 text-[11px] uppercase tracking-wider">
                <span className="text-soft">{p.role}</span>
                <span className="flex items-center gap-1 text-accent-dark">
                  {view}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

const layerIcons = [Code2, Layers, Database, Wrench];

export function Stack({ stack }: { stack: Dict["stack"] }) {
  return (
    <section id="stack" className={`${container} pb-24 md:pb-36`}>
      <SectionHead label={stack.label} title={stack.title} />
      <div className="grid items-end gap-10 lg:grid-cols-[3fr_1fr]">
        <div className="grid sm:grid-cols-2">
          {stack.layers.map((layer, i) => {
            const Icon = layerIcons[i];
            return (
              <div
                key={layer.name}
                className="group relative border-l border-t border-ink/80 bg-paper p-6 transition-all duration-200 hover:z-10 hover:-translate-x-1 hover:-translate-y-1 hover:bg-accent hover:shadow-[8px_8px_0_#0a0a0a]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold">{layer.name}</h3>
                  <span className="flex items-center gap-2 text-[11px] text-soft group-hover:text-ink">
                    <Icon size={16} />
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-4 text-[13px] leading-relaxed text-muted group-hover:text-ink">{layer.items}</p>
              </div>
            );
          })}
        </div>
        <div className="relative hidden aspect-[3/4] lg:block">
          <Image
            src="/rahil-gray.png"
            alt=""
            fill
            sizes="300px"
            className="object-contain object-bottom contrast-125"
          />
        </div>
      </div>
    </section>
  );
}

export function Experience({ experience }: { experience: Dict["experience"] }) {
  return (
    <section id="experience" className={`${container} pb-24 md:pb-36`}>
      <SectionHead label={experience.label} title={experience.title} />
      <div className="md:ml-[20%]">
        <ExperienceList roles={experience.roles} />
      </div>
    </section>
  );
}

export function LiveSites({ sites }: { sites: Dict["sites"] }) {
  return (
    <section className={`${container} pb-24 md:pb-36`}>
      <SectionHead label={sites.label} title={sites.title} />
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {liveSites.map((site, i) => (
          <a
            key={site.url}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group border-l border-ink/80 px-4 pb-2 ${i % 2 ? "lg:mt-12" : ""}`}
          >
            <Globe size={18} className="text-muted" />
            <h3 className="mt-4 font-display text-lg font-bold underline decoration-1 underline-offset-4 group-hover:decoration-accent group-hover:decoration-2">
              {site.name}
            </h3>
            <p className="mt-2 text-[13px] text-muted">{site.label}</p>
            <p className="mt-5 flex items-center gap-1 text-[11px] uppercase tracking-wider text-accent-dark">
              {sites.visit} <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
export function PrototypeSites({ prototypes }: { prototypes: Dict["prototypes"] }) {
  return (
    <section className={`${container} pb-24 md:pb-36`}>
      <SectionHead label={prototypes.label} title={prototypes.title} />
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {prototypeSites.map((site, i) => (
          <a
            key={site.url}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group border-l border-ink/80 px-4 pb-2 ${i % 2 ? "lg:mt-12" : ""}`}
          >
            <Globe size={18} className="text-muted" />
            <h3 className="mt-4 font-display text-lg font-bold underline decoration-1 underline-offset-4 group-hover:decoration-accent group-hover:decoration-2">
              {site.name}
            </h3>
            <p className="mt-2 text-[13px] text-muted">{site.label}</p>
            <p className="mt-5 flex items-center gap-1 text-[11px] uppercase tracking-wider text-accent-dark">
              {prototypes.visit} <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Research({ research }: { research: Dict["research"] }) {
  return (
    <section className={`${container} pb-24 md:pb-36`}>
      <SectionHead label={research.label} title={research.title} />
      <div className="grid gap-8 lg:grid-cols-2">
        <article className="flex flex-col bg-ink p-7 text-white md:p-10">
          <span className="flex w-fit items-center gap-2 bg-accent px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
            <FileText size={14} /> {research.paperTag}
          </span>
          <h3 className="mt-8 font-display text-2xl font-bold leading-snug md:text-3xl">“{research.paper}”</h3>
          <p className="mt-6 text-[13px] leading-relaxed text-white/60">{research.paperNote}</p>
        </article>
        <ul className="border-l border-ink/80">
          {research.education.map((e) => (
            <li key={e.degree} className="border-b border-line px-5 py-6 last:border-b-0 md:px-7">
              <div className="flex items-start gap-4">
                <GraduationCap size={18} className="mt-1 shrink-0 text-accent-dark" />
                <div className="flex-1">
                  <h3 className="font-display text-base font-bold md:text-lg">{e.degree}</h3>
                  <p className="mt-1 flex flex-wrap justify-between gap-2 text-[13px] text-muted">
                    <span>{e.school}</span>
                    <span className="text-[11px] uppercase tracking-wider text-soft">{e.period}</span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const stepIcons = [Search, PenTool, Rocket, ShieldCheck];

export function Process({ process }: { process: Dict["process"] }) {
  return (
    <section className="grid-lines-dark bg-ink py-24 text-white md:py-36">
      <div className={container}>
        <SectionHead label={process.label} title={process.title} dark />
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr]">
          <div className="hidden border border-white/10 bg-black p-6 text-[13px] leading-7 text-white/50 lg:block">
            <p className="flex items-center gap-2 text-white/30">
              <Terminal size={14} /> ~/rahil
            </p>
            {process.steps.map((s, i) => (
              <p key={s.name}>
                <span className="text-accent">$</span> step {i + 1} --{s.name.toLowerCase().replace(/[^a-zà-ÿ]+/g, "-")}
                <br />
                <span className="text-white/30">✓ done</span>
              </p>
            ))}
            <p>
              <span className="text-accent">$</span> <span className="animate-pulse-dot">▍</span>
            </p>
          </div>
          <ol className="border-l border-white/20">
            {process.steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <li key={step.name} className="px-6 py-7 md:px-8">
                  <div className="flex items-center justify-between">
                    <h3 className="flex items-baseline gap-3 font-display text-lg font-bold">
                      <span className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</span>
                      {step.name}
                    </h3>
                    <Icon size={18} className="text-accent" />
                  </div>
                  <p className="mt-3 max-w-md text-[13px] leading-relaxed text-white/60">{step.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}


export function Recommendations({ recommendations }: { recommendations: Dict["recommendations"] }) {
  const cols = recommendations.items.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <section className={`${container} pb-24 md:pb-36`}>
      <SectionHead label={recommendations.label} title={recommendations.title} />
      <div className={`grid gap-x-8 gap-y-10 sm:grid-cols-2 ${cols}`}>
        {recommendations.items.map((r) => (
          <figure
            key={r.linkedin}
            className="flex flex-col border-l border-ink/80 px-4 pb-2"
          >
            <Quote size={18} className="text-accent-dark" />
            <blockquote className="mt-4 text-[13px] leading-relaxed text-muted">
              “{r.quote}”
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-5 pt-6">
              <div className="relative size-24 shrink-0 overflow-hidden bg-panel md:size-28">
                {r.image ? (
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    sizes="112px"
                    className="object-cover object-top grayscale"
                  />
                ) : (
                  <span className="grid h-full w-full place-items-center font-display text-lg font-bold">
                    {r.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </span>
                )}
              </div>
              <div>
                <p className="font-display text-base font-bold">{r.name}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-soft">
                  {r.role} · {r.company}
                </p>
                <a
                  href={r.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-2 flex w-fit items-center gap-1 text-[11px] uppercase tracking-wider text-accent-dark"
                >
                  <span className="underline decoration-1 underline-offset-4 group-hover:decoration-accent group-hover:decoration-2">
                    {recommendations.linkedin}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Faq({ faq, lang }: { faq: Dict["faq"]; lang: Locale }) {
  return (
    <section className={`${container} py-24 md:py-36`}>
      <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
        <div>
          <p className="w-fit border-l border-ink pl-3 text-[11px] uppercase tracking-wider text-muted">{faq.label}</p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">{faq.title}</h2>
          <Link
            href={`/${lang}/contact`}
            className="mt-10 inline-block bg-ink px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent hover:text-ink"
          >
            {faq.ask}
          </Link>
          <p className="mt-4 max-w-xs text-[13px] text-muted">{faq.askNote}</p>
        </div>
        <FaqList items={faq.items} />
      </div>
    </section>
  );
}

export function Footer({ rights }: { rights: string }) {
  const links = [
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "CV (PDF)", href: profile.cv },
  ];
  return (
    <footer className="flex flex-col gap-4 border-t border-white/10 pt-6 text-[11px] uppercase tracking-wider text-white/50 md:flex-row md:items-center md:justify-between">
      <ul className="flex flex-wrap gap-6 border-l border-white/40 pl-3">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <p>
        © <Year /> {profile.name} · {rights}
      </p>
    </footer>
  );
}

// Dark footer band for the inner pages
export function SiteFooter({ rights }: { rights: string }) {
  return (
    <div className="bg-ink pb-10 pt-2">
      <div className={container}>
        <Footer rights={rights} />
      </div>
    </div>
  );
}

export function Contact({ contact, lang }: { contact: Dict["contact"]; lang: Locale }) {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-white">
      <div className="plus-pattern pointer-events-none absolute inset-x-0 bottom-20 h-56" />
      <div className={`${container} relative pb-10 pt-24 md:pt-32`}>
        <p className="w-fit border-l border-white/40 pl-3 text-[11px] uppercase tracking-wider text-white/50">
          {contact.label}
        </p>
        <h2 className="mt-8 max-w-4xl font-mono text-4xl font-bold uppercase leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
          <span className="text-soft">{contact.titleMuted} </span>
          {contact.titleStrong}
        </h2>
        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Link
            href={`/${lang}/contact`}
            className="w-fit bg-accent px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-white"
          >
            {contact.cta}
          </Link>
          <div className="md:text-right">
            <a
              href={`mailto:${profile.email}`}
              className="block break-all font-mono text-xl font-bold hover:text-accent sm:text-2xl md:text-3xl"
            >
              {profile.email}
            </a>
            <a href={profile.phoneHref} className="mt-2 block text-sm text-white/60 hover:text-accent">
              {profile.phone}
            </a>
          </div>
        </div>

        <div className="mt-28">
          <Footer rights={contact.rights} />
        </div>
      </div>
    </section>
  );
}
