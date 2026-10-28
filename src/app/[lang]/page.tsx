import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/content";
import Header from "@/components/Header";
import {
  About,
  Contact,
  Experience,
  Faq,
  Hero,
  LiveSites,
  Numbers,
  Process,
  PrototypeSites,
  Recommendations,
  Research,
  Stack,
  Work,
} from "@/components/Sections";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <Header lang={lang} nav={t.nav} />
      <main>
        <Hero hero={t.hero} />
        <div className="relative">
          <div
            aria-hidden
            className="grid-lines pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-[1280px] -translate-x-1/2 md:block"
          />
          <div className="relative">
            <About about={t.about} />
            <Numbers numbers={t.numbers} />
            <Work work={t.work} lang={lang} view={t.project.view} />
            <Stack stack={t.stack} />
            <Experience experience={t.experience} />
            <Recommendations recommendations={t.recommendations} />
            <LiveSites sites={t.sites} />
            <PrototypeSites prototypes={t.prototypes} />
            <Research research={t.research} />
          </div>
        </div>
        <Process process={t.process} />
        <Faq faq={t.faq} lang={lang} />
        <Contact contact={t.contact} lang={lang} />
      </main>
    </>
  );
}
