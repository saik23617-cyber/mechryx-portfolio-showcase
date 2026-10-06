import { Box, Cog, Ruler, Layers, Printer, LifeBuoy, type LucideIcon } from "lucide-react";

export type Service = { title: string; text: string; icon: LucideIcon; code: string };

export const services: Service[] = [
  { code: "S-01", icon: Box, title: "3D CAD Modelling", text: "Convert sketches, dimensions, images, or concepts into detailed 3D CAD models." },
  { code: "S-02", icon: Cog, title: "Product Design", text: "Develop mechanical product concepts into practical CAD designs suitable for prototyping and manufacturing." },
  { code: "S-03", icon: Ruler, title: "Engineering Drawings", text: "Create clear dimensioned engineering drawings and manufacturing documentation." },
  { code: "S-04", icon: Layers, title: "Assembly Design", text: "Build multi-component assemblies with proper component relationships and exploded views." },
  { code: "S-05", icon: Printer, title: "3D Printing Design", text: "Prepare optimized STL/STEP-ready models for prototyping and FDM 3D printing." },
  { code: "S-06", icon: LifeBuoy, title: "CAD Design Support", text: "Provide flexible CAD support for students, startups, makers, and small businesses." },
];

export const extraCapabilities = ["Basic Simulation & Analysis", "Prototype-ready Design", "Exploded Views & BOM", "STEP / STL / DWG Export"];
