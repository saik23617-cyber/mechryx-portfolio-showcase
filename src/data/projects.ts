/**
 * PROJECTS
 * To add/replace a project image:
 *   1. Put your screenshot in src/assets/projects/
 *   2. Import it below and set `image` on the project.
 * Projects with `image: undefined` show a blueprint placeholder automatically.
 */
import camFollower from "@/assets/projects/cam-assembly.png.asset.json";
import phoneStand from "@/assets/projects/phone-stand.png.asset.json";
import pulley from "@/assets/projects/pulley.png.asset.json";
import bracket from "@/assets/projects/bracket.png.asset.json";
import valve from "@/assets/projects/valve-flow.jpeg.asset.json";
import crane from "@/assets/projects/crane-hook.jpeg.asset.json";
import engineVideo from "@/assets/projects/engine-motion.mp4.asset.json";
import enginePoster from "@/assets/projects/engine-poster.jpg.asset.json";

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image?: string | undefined;
  imageAlt?: string;
  preserveImage?: boolean;
  uploadLabel?: string;
  caption?: string;
  video?: string;
  poster?: string;
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
    uploadLabel: "Upload engine screenshot",
    video: engineVideo.url,
    poster: enginePoster.url,
    caption: "4-cylinder engine motion study — uploaded video.",
    tools: ["SolidWorks"],
  },
  {
    slug: "crane-hook",
    title: "Crane Hook",
    category: "Mechanical Design",
    description: "Designed and modelled a crane hook in SolidWorks with attention to mechanical geometry and manufacturability.",
    image: crane.url,
    imageAlt: "SolidWorks screenshot of a crane hook assembly with green side plates, cross pins, fasteners and a grey hook.",
    tools: ["SolidWorks"],
  },
  {
    slug: "water-control-valve",
    title: "Water Control Valve",
    category: "Product Design",
    description: "Mechanical CAD design of a water control valve with component-level modelling and functional considerations.",
    image: valve.url,
    imageAlt: "SolidWorks flow simulation screenshot showing a transparent flanged elbow with coloured flow trajectories and a pressure legend.",
    caption: "Water control valve flow simulation — uploaded screenshot.",
    tools: ["SolidWorks"],
  },
  {
    slug: "phone-stand",
    title: "Phone Stand",
    category: "Product Design / 3D Printing",
    description: "Designed a functional phone stand with integrated charging access and considerations for FDM 3D printing.",
    image: phoneStand.url,
    imageAlt: "SolidWorks phone stand simulation screenshot with a coloured contour plot, mesh and load arrows on the stand.",
    caption: "Phone stand simulation — uploaded screenshot.",
    tools: ["SolidWorks", "SolidWorks Simulation"],
  },
  {
    slug: "cam-follower",
    title: "Cam-Follower Mechanism",
    category: "Mechanical Mechanism",
    description: "Designed and modelled a cam-follower mechanism for a mechanical application.",
    image: camFollower.url,
    imageAlt: "SolidWorks screenshot of a cam-follower assembly with a supporting frame, cam, linkage and upper mechanism.",
    tools: ["SolidWorks"],
  },
  {
    slug: "components-assemblies",
    title: "Mechanical Components & Assemblies",
    category: "CAD Modelling",
    description: "A collection of mechanical components and assemblies developed using professional CAD workflows.",
    image: pulley.url,
    imageAlt: "SolidWorks assembly screenshot showing a green grooved wheel between yellow supports on a mounting base.",
    tools: ["SolidWorks", "Sheet Metal"],
  },
  {
    slug: "assembly-component",
    title: "Project title to be provided",
    category: "Assembly Component",
    description: "Project description to be provided.",
    image: bracket.url,
    imageAlt: "Uploaded SolidWorks screenshot showing a magenta component with a flat base, a large circular opening and two raised folded sections with circular holes.",
    preserveImage: true,
    tools: [],
  },
];
