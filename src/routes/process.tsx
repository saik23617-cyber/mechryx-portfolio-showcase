import { createFileRoute } from "@tanstack/react-router";
import { process } from "@/data/site";
import { CTASection } from "@/components/site/CTASection";
import { Container, PageHeader, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "How We Work — Design Process | MECHRYX" },
      { name: "description", content: "Understand, plan, design, review, deliver — the MECHRYX five-step mechanical CAD process." },
      { property: "og:title", content: "How We Work | MECHRYX" },
      { property: "og:description", content: "A clear five-step process from idea to delivered CAD files." },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageHeader eyebrow="Process" title="How We Work" text="A clear, collaborative workflow — so you always know where your design stands." />
      <section className="py-20">
        <Container className="max-w-4xl">
          <ol className="relative border-l border-primary/30">
            {process.map((p, i) => (
              <li key={p.n} className="relative pb-14 pl-10 last:pb-0">
                <span className="absolute top-1 -left-[6px] h-3 w-3 rounded-full bg-primary shadow-glow" />
                <Reveal delay={i * 60} className="grid gap-2 sm:grid-cols-[120px_1fr]">
                  <span className="font-mono text-3xl text-primary-glow">{p.n}</span>
                  <div>
                    <h2 className="text-2xl font-semibold">{p.title}</h2>
                    <p className="mt-2 text-muted-foreground">{p.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
