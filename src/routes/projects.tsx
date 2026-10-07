import { createFileRoute } from "@tanstack/react-router";
import { ProjectGrid } from "@/components/site/ProjectGrid";
import { CTASection } from "@/components/site/CTASection";
import { Container, PageHeader } from "@/components/site/ui";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Selected Projects — SolidWorks CAD Work | MECHRYX" },
      { name: "description", content: "Engine, crane hook, valve, phone stand, cam-follower mechanism and other mechanical CAD projects by MECHRYX." },
      { property: "og:title", content: "Selected Projects | MECHRYX" },
      { property: "og:description", content: "Mechanical CAD and product design projects modelled in SolidWorks." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Portfolio" title="Selected Projects" text="A selection of mechanical components, mechanisms, and product designs." />
      <section className="py-20"><Container><ProjectGrid /></Container></section>
      <CTASection />
    </>
  ),
});
