export const site = {
  name: "MECHRYX",
  tagline: "From Concept to Reality",
  descriptor: "Mechanical CAD & Product Design",
  founder: "Sai Kumar",
  phoneDisplay: "+91 90595 82549",
  phoneHref: "tel:+919059582549",
  whatsapp: "https://wa.me/919059582549",
  email: "mechryxdesigns@gmail.com",
  enquiryForm: "https://cmv3po68h000a30bukn8l94eg.zapier.app/enquiry-form",
  // Add your real profile URLs here. Leave empty ("") to hide the link.
  social: {
    linkedin: "",
    instagram: "https://www.instagram.com/mechryx?xtok=cHp4ZHh3MnF3eXcz",
  },
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

export const software = ["SolidWorks", "AutoCAD", "Solid Edge", "Fusion 360"];

export const process = [
  { n: "01", title: "Understand", text: "Discuss the idea, requirements, dimensions, and intended application." },
  { n: "02", title: "Plan", text: "Define the modelling approach, components, materials, and design requirements." },
  { n: "03", title: "Design", text: "Develop the 3D CAD model, assembly, or product design." },
  { n: "04", title: "Review", text: "Review dimensions, functionality, manufacturability, and required modifications." },
  { n: "05", title: "Deliver", text: "Provide the required CAD files, drawings, renders, or prototype-ready files." },
];
