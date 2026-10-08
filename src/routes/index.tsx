import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { process, software } from "@/data/site";
import { ServiceCard, ProcessStep } from "@/components/site/Cards";
import { ProjectGrid } from "@/components/site/ProjectGrid";
import { CTASection } from "@/components/site/CTASection";
import { Container, Reveal, SectionHeading, btn } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "MECHRYX | Mechanical CAD & Product Design" },
      { name: "description", content: "MECHRYX provides mechanical CAD modelling, product design, engineering drawings, assemblies, and 3D-printing design support." },
      { property: "og:title", content: "MECHRYX | Mechanical CAD & Product Design" },
      { property: "og:description", content: "From Concept to Reality — professional mechanical CAD and product design for students, startups, makers, and businesses." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <div className="border-y bg-navy/50">
        <Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 font-mono text-xs tracking-[0.2em] text-silver uppercase">
          {["Precision", "Practical Design", "Fast Communication", "Client-Focused"].map((t, i) => (
            <span key={t} className="flex items-center gap-8">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-primary" />}
              {t}
            </span>
          ))}
        </Container>
      </div>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="01 — Selected work" title="Selected Projects" text="Mechanical components, mechanisms and products modelled in SolidWorks." />
            <Link to="/projects" className={btn({ variant: "outline" })}>All Projects <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-14"><ProjectGrid limit={3} /></div>
        </Container>
      </section>

      <section className="border-t bg-blueprint py-24 sm:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="02 — Services" title="What We Do" />
            <Link to="/services" className={btn({ variant: "outline" })}>Explore Services <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80}><ServiceCard s={s} /></Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="03 — Process" title="How We Work" />
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p, i) => <Reveal key={p.n} delay={i * 80}><ProcessStep {...p} /></Reveal>)}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

function Hero() {
  const engine = projects.find((project) => project.slug === "four-cylinder-engine");
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section className="hero-blueprint relative overflow-hidden bg-blueprint pt-28 lg:pt-0">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
      <Container className="relative grid items-center gap-12 py-12 lg:min-h-[min(820px,90dvh)] lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div className="lg:pt-16">
          <Reveal>
            <p className="eyebrow flex items-center gap-3"><span className="h-px w-8 bg-primary" />MECHRYX · Mechanical CAD & Product Design</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl leading-[1.02] font-semibold sm:text-6xl xl:text-7xl">
              Turning Ideas Into <span className="text-gradient">Real Products</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">Professional mechanical CAD and product design for students, startups, makers, and businesses.</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className={btn({ size: "lg" })}>Start Your Project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
              <Link to="/projects" className={btn({ variant: "outline", size: "lg" })}>View Projects</Link>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t pt-6">
              <span className="font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">Tools</span>
              {software.map((s) => <span key={s} className="font-display text-sm text-silver">{s}</span>)}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="hero-perspective relative">
          <div className="hero-cad relative">
            {reduceMotion || !engine?.video ? (
              <img src={engine?.image} alt={engine?.imageAlt ?? "Uploaded 4-cylinder engine CAD assembly screenshot"} width={1280} height={960} className="aspect-[4/3] w-full object-contain" />
            ) : (
              <video
                src={engine.video}
                poster={engine.poster ?? engine.image}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={engine.imageAlt ?? "4-Cylinder Engine motion study video"}
                className="aspect-[4/3] w-full object-contain"
              />
            )}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t bg-background/70 px-4 py-3 font-mono text-[0.65rem] tracking-widest text-silver uppercase backdrop-blur">
              <span>4-Cylinder Engine</span>
              <span className="text-primary-glow">From Concept to Reality</span>
            </div>
          </div>
          <svg className="pointer-events-none absolute -top-10 -right-10 hidden h-40 w-40 text-primary/30 lg:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.6" aria-hidden="true">
            <circle cx="50" cy="50" r="30" /><circle cx="50" cy="50" r="10" />
            {Array.from({ length: 12 }).map((_, i) => <rect key={i} x="47" y="14" width="6" height="7" transform={`rotate(${i * 30} 50 50)`} />)}
          </svg>
        </Reveal>
      </Container>
    </section>
  );
}
