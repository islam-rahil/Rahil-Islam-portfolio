import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FileText, Mail, MapPin, Phone } from "lucide-react";
import { getDictionary, hasLocale, profile } from "@/content";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import { container, SiteFooter } from "@/components/Sections";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    title: t.contactPage.metaTitle,
    description: t.contactPage.intro,
    alternates: { canonical: `/${lang}/contact`, languages: { en: "/en/contact", fr: "/fr/contact" } },
  };
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const page = t.contactPage;

  const direct = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: profile.phoneHref },
    { icon: FileText, label: "CV (PDF)", href: profile.cv },
  ];
  const social = [
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
  ];

  return (
    <>
      <Header lang={lang} nav={t.nav} />
      <main className="relative pt-14 md:pt-[70px]">
        <div
          aria-hidden
          className="grid-lines pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-[1280px] -translate-x-1/2 md:block"
        />
        <div className={`${container} relative grid gap-14 pb-24 pt-12 md:pb-32 md:pt-20 lg:grid-cols-[2fr_3fr]`}>
          <div>
            <p className="w-fit border-l border-ink pl-3 text-[11px] uppercase tracking-wider text-muted">{page.label}</p>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">{page.title}</h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base">{page.intro}</p>

            <p className="mt-12 text-[11px] uppercase tracking-wider text-soft">{page.direct}</p>
            <ul className="mt-4 border-l border-ink/80">
              {direct.map(({ icon: Icon, label, href }) => (
                <li key={href}>
                  <a href={href} className="flex items-center gap-3 px-4 py-2.5 text-sm hover:text-accent-dark">
                    <Icon size={16} className="shrink-0 text-accent-dark" />
                    <span className="break-all">{label}</span>
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted">
                <MapPin size={16} className="shrink-0 text-accent-dark" />
                {page.location}
              </li>
            </ul>
            <ul className="mt-6 flex gap-6 text-[11px] uppercase tracking-wider">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-1 underline-offset-4 hover:decoration-accent hover:decoration-2"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pt-24">
            <ContactForm form={page.form} />
          </div>
        </div>
      </main>
      <SiteFooter rights={t.contact.rights} />
    </>
  );
}
