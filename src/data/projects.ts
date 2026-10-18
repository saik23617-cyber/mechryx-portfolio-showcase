/**
 * PROJECTS
 * To add/replace a project image:
 *   1. Put your screenshot in src/assets/projects/
 *   2. Import it below and set `image` on the project.
 * Projects with `image: undefined` show a blueprint placeholder automatically.
 */
import camFollower from "@/assets/projects/cam-assembly.png?url";
import phoneStand from "@/assets/projects/phone-stand.png?url";
import pulley from "@/assets/projects/pulley.png?url";
import bracket from "@/assets/projects/bracket.png?url";
import valve from "@/assets/projects/valve-flow.jpeg?url";
import crane from "@/assets/projects/crane-hook.jpeg?url";
import engineVideo from "@/assets/projects/engine-motion.mp4?url";
import enginePoster from "@/assets/projects/engine-assembly.png?url";
import autocadComponent from "@/assets/projects/autocad-component.png?url";

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
    image: enginePoster,
    imageAlt: "SolidWorks screenshot of a 4-cylinder engine assembly showing four pistons, connecting rods and a crankshaft.",
    video: engineVideo,
    poster: enginePoster,
    caption: "4-Cylinder Engine motion study — uploaded video with your engine assembly screenshot as the thumbnail.",
    tools: ["SolidWorks"],
  },
  {
    slug: "crane-hook",
    title: "Crane Hook",
    category: "Mechanical Design",
    description: "Designed and modelled a crane hook in SolidWorks with attention to mechanical geometry and manufacturability.",
    image: crane,
    imageAlt: "SolidWorks screenshot of a crane hook assembly with green side plates, cross pins, fasteners and a grey hook.",
    tools: ["SolidWorks"],
  },
  {
    slug: "water-control-valve",
    title: "Water Control Valve",
    category: "SIMULATION DESIGN",
    description: "Mechanical CAD design of a water control valve with component-level modelling and functional considerations.",
    image: valve,
    imageAlt: "SolidWorks flow simulation screenshot showing a transparent flanged elbow with coloured flow trajectories and a pressure legend.",
    caption: "Water control valve flow simulation — uploaded screenshot.",
    tools: ["SolidWorks"],
  },
  {
    slug: "phone-stand",
    title: "Phone Stand",
    category: "Product Design / 3D Printing",
    description: "Designed a functional phone stand with integrated charging access and considerations for FDM 3D printing.",
    image: phoneStand,
    imageAlt: "SolidWorks phone stand simulation screenshot with a coloured contour plot, mesh and load arrows on the stand.",
    caption: "Phone stand simulation — uploaded screenshot.",
    tools: ["SolidWorks", "SolidWorks Simulation"],
  },
  {
    slug: "cam-follower",
    title: "Cam-Follower Mechanism",
    category: "Mechanical Mechanism",
    description: "Designed and modelled a cam-follower mechanism for a mechanical application.",
    image: camFollower,
    imageAlt: "SolidWorks screenshot of a cam-follower assembly with a supporting frame, cam, linkage and upper mechanism.",
    tools: ["SolidWorks"],
  },
  {
    slug: "components-assemblies",
    title: "Mechanical Components & Assemblies",
    category: "CAD Modelling",
    description: "A collection of mechanical components and assemblies developed using professional CAD workflows.",
    image: pulley,
    imageAlt: "SolidWorks assembly screenshot showing a green grooved wheel between yellow supports on a mounting base.",
    tools: ["SolidWorks", "Sheet Metal"],
  },
  {
    slug: "assembly-component",
    title: "Sheet Metal Bracket",
    category: "SHEET METAL MODELING",
    description: "SolidWorks sheet metal bracket with formed flanges, mounting holes, and a central opening, built using sheet metal features and mirrored geometry.",
    image: bracket,
    imageAlt: "Uploaded SolidWorks screenshot showing a magenta component with a flat base, a large circular opening and two raised folded sections with circular holes.",
    preserveImage: true,
    tools: [],
  },
  {
    slug: "autocad-mechanical-component",
    title: "AutoCAD Mechanical Component",
    category: "AutoCAD / Mechanical CAD",
    description: "3D mechanical component modeled in AutoCAD, showcasing its mounting base, support structure, and precision openings.",
    caption: "3D mechanical component modeled in AutoCAD, showcasing its mounting base, support structure, and precision openings.",
    image: autocadComponent,
    imageAlt: "AutoCAD screenshot of a grey mechanical component with a two-hole mounting base, upright support, circular opening and upper elongated opening.",
    preserveImage: true,
    tools: ["AutoCAD"],
  },
];
