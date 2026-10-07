import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Mail } from "lucide-react";
import { site } from "@/data/site";
import { ContactForm } from "@/components/site/ContactForm";
import { Container, PageHeader, Reveal, btn } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Contact — Start Your CAD Project | MECHRYX" },
      { name: "description", content: "Send your sketch, concept or CAD requirement to MECHRYX via WhatsApp, email or the consultation form." },
      { property: "og:title", content: "Let's Build Your Idea | MECHRYX" },
      { property: "og:description", content: "Request a mechanical CAD or product design consultation." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's Build Your Idea" text="Have a sketch, concept, product idea, or CAD requirement? Send us the details and let's discuss how we can turn it into a professional mechanical design." />
      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-5">
            <Reveal>
              <div className="rounded-xl border bg-panel p-7">
                <MessageCircle className="h-6 w-6 text-primary-glow" />
                <p className="eyebrow mt-5">WhatsApp</p>
                <p className="mt-2 font-display text-2xl">{site.phoneDisplay}</p>
                <a href={site.whatsapp} target="_blank" rel="noreferrer" className={`${btn()} mt-6 w-full`}>Chat on WhatsApp</a>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-xl border bg-panel p-7">
                <Mail className="h-6 w-6 text-primary-glow" />
                <p className="eyebrow mt-5">Email</p>
                <p className="mt-2 font-display text-xl break-all">{site.email}</p>
                <a href={`mailto:${site.email}`} className={`${btn({ variant: "outline" })} mt-6 w-full`}>Send Email</a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}><ContactForm /></Reveal>
        </Container>
      </section>
    </>
  );
}
