import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { services, extraCapabilities } from "@/data/services";
import { software } from "@/data/site";
import { ServiceCard } from "@/components/site/Cards";
import { CTASection } from "@/components/site/CTASection";
import { Container, PageHeader, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — 3D CAD, Product Design & Drawings | MECHRYX" },
      { name: "description", content: "3D CAD modelling, mechanical product design, engineering drawings, assembly design, 3D-printing models and CAD support." },
      { property: "og:title", content: "Services | MECHRYX" },
      { property: "og:description", content: "Mechanical CAD services from concept sketches to prototype-ready files." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title="What We Do" text="From a rough sketch to manufacturing-ready CAD — practical mechanical design support at every stage." />
      <section className="py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => <Reveal key={s.title} delay={(i % 3) * 80}><ServiceCard s={s} /></Reveal>)}
          </div>
          <Reveal className="mt-16 grid gap-10 rounded-xl border bg-panel p-8 md:grid-cols-2">
            <div>
              <p className="eyebrow">Also available</p>
              <ul className="mt-5 space-y-3">
                {extraCapabilities.map((c) => <li key={c} className="flex items-center gap-3 text-silver"><Check className="h-4 w-4 text-primary-glow" />{c}</li>)}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Software</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {software.map((s) => <span key={s} className="rounded-md border px-4 py-2 font-display text-silver">{s}</span>)}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
