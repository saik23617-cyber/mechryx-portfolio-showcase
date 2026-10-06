/**
 * PROJECTS
 * To add/replace a project image:
 *   1. Put your screenshot in src/assets/projects/
 *   2. Import it below and set `image` on the project.
 * Projects with `image: undefined` show a blueprint placeholder automatically.
 */
import camFollower from "@/assets/projects/cam-follower.png.asset.json";
import phoneStand from "@/assets/projects/phone-stand.png.asset.json";
import pulley from "@/assets/projects/pulley.png.asset.json";
import bracket from "@/assets/projects/bracket.png.asset.json";

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image?: string | undefined;
  gallery?: string[];
  tools: string[];
};

export const projects: Project[] = [
  {
    slug: "four-cylinder-engine",
    title: "4-Cylinder Engine",
    category: "Mechanical CAD / Engine Design",
    description: "3D CAD modelling of a four-cylinder engine assembly with multiple mechanical components and assembly relationships.",
    image: undefined,
    tools: ["SolidWorks"],
  },
  {
    slug: "crane-hook",
    title: "Crane Hook",
    category: "Mechanical Design",
    description: "Designed and modelled a crane hook in SolidWorks with attention to mechanical geometry and manufacturability.",
    image: undefined,
    tools: ["SolidWorks"],
  },
  {
    slug: "water-control-valve",
    title: "Water Control Valve",
    category: "Product Design",
    description: "Mechanical CAD design of a water control valve with component-level modelling and functional considerations.",
    image: undefined,
    tools: ["SolidWorks"],
  },
  {
    slug: "phone-stand",
    title: "Phone Stand",
    category: "Product Design / 3D Printing",
    description: "Designed a functional phone stand with integrated charging access and considerations for FDM 3D printing.",
    image: phoneStand.url,
    tools: ["SolidWorks", "SolidWorks Simulation"],
  },
  {
    slug: "cam-follower",
    title: "Cam-Follower Mechanism",
    category: "Mechanical Mechanism",
    description: "Designed and modelled a cam-follower mechanism for a mechanical application.",
    image: camFollower.url,
    tools: ["SolidWorks"],
  },
  {
    slug: "components-assemblies",
    title: "Mechanical Components & Assemblies",
    category: "CAD Modelling",
    description: "A collection of mechanical components and assemblies developed using professional CAD workflows.",
    image: pulley.url,
    gallery: [pulley.url, bracket.url],
    tools: ["SolidWorks", "Sheet Metal"],
  },
];
