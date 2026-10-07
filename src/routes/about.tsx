import { createFileRoute } from "@tanstack/react-router";
import { software } from "@/data/site";
import { CTASection } from "@/components/site/CTASection";
import { LogoMark } from "@/components/site/Logo";
import { Container, PageHeader, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "About MECHRYX — Mechanical CAD Studio" },
      { name: "description", content: "MECHRYX is a growing mechanical CAD and product design studio founded by Sai Kumar." },
      { property: "og:title", content: "About MECHRYX" },
      { property: "og:description", content: "Understand the requirement, design it accurately, communicate clearly, deliver usable CAD." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="About MECHRYX" />
      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="font-display text-2xl text-foreground sm:text-3xl">MECHRYX is a growing mechanical CAD and product design studio focused on transforming engineering ideas into practical digital designs.</p>
            <p>We work across mechanical 3D modelling, product design, assemblies, engineering drawings, and prototype-ready CAD.</p>
            <p>Our goal is simple: understand the requirement, design it accurately, communicate clearly, and deliver a usable CAD solution.</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="corner-ticks rounded-xl border bg-panel p-8">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-lg border bg-navy"><LogoMark className="h-9 w-9" /></div>
                <div className="min-w-0">
                  <p className="eyebrow">Founder</p>
                  <h2 className="mt-1 text-2xl font-semibold">Sai Kumar</h2>
                </div>
              </div>
              <p className="mt-2 text-sm text-silver">Mechanical Engineering Student & CAD Designer</p>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">I am a Mechanical Engineering student focused on mechanical design, CAD modelling, product development, and manufacturing-oriented design. I work primarily with SolidWorks, AutoCAD, Solid Edge, and related engineering tools.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {software.map((s) => <span key={s} className="rounded border px-2.5 py-1 font-mono text-xs text-silver">{s}</span>)}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
