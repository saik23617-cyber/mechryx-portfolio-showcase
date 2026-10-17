import { createFileRoute } from "@tanstack/react-router";
import { ProjectGrid } from "@/components/site/ProjectGrid";
import { EngineeringMotion } from "@/components/site/EngineeringMotion";
import { CTASection } from "@/components/site/CTASection";
import { Container, PageHeader } from "@/components/site/ui";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Selected Projects — SolidWorks & AutoCAD Work | MECHRYX" },
      { name: "description", content: "Explore MECHRYX's SolidWorks and AutoCAD mechanical projects, with uploaded CAD screenshots and exploded-view assembly animations." },
      { property: "og:title", content: "Selected Projects | MECHRYX" },
      { property: "og:description", content: "Mechanical CAD projects in SolidWorks and AutoCAD, plus Engineering in Motion assembly animations." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Portfolio" title="Selected Projects" text="A selection of mechanical components, mechanisms, and product designs." />
      <section className="py-20"><Container><ProjectGrid /></Container></section>
      <EngineeringMotion />
      <CTASection />
    </>
  ),
});
