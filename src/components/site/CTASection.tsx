import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { Container, Reveal, btn } from "./ui";

export function CTASection({ title = "Have an idea? Let's design it." }: { title?: string }) {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <div className="corner-ticks relative overflow-hidden rounded-xl border bg-navy bg-blueprint px-6 py-16 text-center sm:px-12">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
            <p className="eyebrow relative">Next step</p>
            <h2 className="relative mx-auto mt-4 max-w-2xl text-3xl font-semibold sm:text-5xl">{title}</h2>
            <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/contact" className={btn({ size: "lg" })}>Start Your Project <ArrowUpRight className="h-4 w-4" /></Link>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className={btn({ variant: "outline", size: "lg" })}><MessageCircle className="h-4 w-4" /> Chat on WhatsApp</a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
