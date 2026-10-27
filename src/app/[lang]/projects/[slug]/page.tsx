import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { getDictionary, hasLocale, profile } from "@/content";
import Header from "@/components/Header";
import { container, projectGlyphs, SiteFooter } from "@/components/Sections";

// Every project page is prerendered from generateStaticParams, so the whole
// page reads its params up front instead of streaming behind Suspense
export const instant = false;

// Slugs are the same in every language, so English is enough to list them
export function generateStaticParams() {
  return getDictionary("en").work.items.map((p) => ({ slug: p.slug }));
}

async function getProject(params: PageProps<"/[lang]/projects/[slug]">["params"]) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return null;
  const t = getDictionary(lang);
  const index = t.work.items.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  return { lang, t, index, project: t.work.items[index] };
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projects/[slug]">): Promise<Metadata> {
  const found = await getProject(params);
  if (!found) return {};
  const { lang, project } = found;
  return {
    title: `${project.title} — ${profile.name}`,
    description: project.description,
    alternates: {
      canonical: `/${lang}/projects/${project.slug}`,
      languages: { en: `/en/projects/${project.slug}`, fr: `/fr/projects/${project.slug}` },
    },
  };
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/projects/[slug]">) {
  const found = await getProject(params);
  if (!found) notFound();
  const { lang, t, index, project } = found;
  const labels = t.project;
  const items = t.work.items;
  const next = items[(index + 1) % items.length];
  const number = (i: number) => String(i + 1).padStart(2, "0");

  return (
    <>
      <Header lang={lang} nav={t.nav} />
      <main className="relative pt-14 md:pt-[70px]">
        <div
          aria-hidden
          className="grid-lines pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-[1280px] -translate-x-1/2 md:block"
        />

        <article className={`${container} relative pb-24 pt-12 md:pb-32 md:pt-20`}>
          <Link
            href={`/${lang}#work`}
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted hover:text-ink"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            {labels.back}
          </Link>

          <header className="mt-10 grid gap-6 md:grid-cols-[1fr_4fr] md:gap-8">
            <p className="h-fit border-l border-ink pl-3 text-[11px] uppercase tracking-wider text-muted">
              {number(index)} / {number(items.length - 1)}
            </p>
            <div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                {project.description}
              </p>
            </div>
          </header>

          <dl className="mt-12 grid gap-px border border-ink/80 bg-ink/80 sm:grid-cols-3 md:ml-[20%]">
            <div className="bg-paper p-5">
              <dt className="text-[11px] uppercase tracking-wider text-soft">{labels.role}</dt>
              <dd className="mt-2 font-display font-bold">{project.role}</dd>
            </div>
            <div className="bg-paper p-5">
              <dt className="text-[11px] uppercase tracking-wider text-soft">{labels.year}</dt>
              <dd className="mt-2 font-display font-bold">{project.year || "—"}</dd>
            </div>
            <div className="bg-paper p-5">
              <dt className="text-[11px] uppercase tracking-wider text-soft">{labels.stack}</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span key={s} className="border border-ink/70 px-1.5 py-0.5 text-[10px] uppercase tracking-wider">
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <div className="relative mt-12 grid aspect-[16/7] place-items-center overflow-hidden bg-ink md:ml-[20%]">
            <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(#555_1px,transparent_1.5px)] [background-size:12px_12px]" />
            <span className="relative font-display text-7xl font-bold text-accent md:text-9xl">
              {projectGlyphs[index] ?? "◆"}
            </span>
          </div>

          <div className="mt-16 grid gap-12 md:ml-[20%] lg:grid-cols-[3fr_2fr]">
            <section>
              <h2 className="border-l border-ink pl-3 text-[11px] uppercase tracking-wider text-muted">
                {labels.overview}
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink/80">
                {project.details.map((d) => (
                  <p key={d}>{d}</p>
                ))}
              </div>
            </section>
            <section>
              <h2 className="border-l border-ink pl-3 text-[11px] uppercase tracking-wider text-muted">
                {labels.highlights}
              </h2>
              <ul className="mt-6 border-t border-line">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 border-b border-line py-4 text-sm">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent-dark" />
                    {h}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>

        <section className="relative bg-ink text-white">
          <div className={`${container} grid gap-10 py-20 md:grid-cols-2 md:items-end md:py-24`}>
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">{labels.cta}</h2>
              <Link
                href={`/${lang}/contact`}
                className="mt-8 inline-block bg-accent px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-white"
              >
                {labels.ctaButton}
              </Link>
            </div>
            <Link
              href={`/${lang}/projects/${next.slug}`}
              className="group border-l border-white/30 pl-5 md:justify-self-end md:text-right"
            >
              <span className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-white/50 md:justify-end">
                {labels.next}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
              <span className="mt-2 block font-display text-xl font-bold group-hover:text-accent md:text-2xl">
                {next.title}
              </span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter rights={t.contact.rights} />
    </>
  );
}
