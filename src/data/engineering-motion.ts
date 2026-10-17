import practiceVideo from "@/assets/projects/PRACTICE_1.mp4.asset.json";
import practiceWebm from "@/assets/projects/PRACTICE_1.webm.asset.json";
import practicePoster from "@/assets/projects/PRACTICE_1-poster.jpg.asset.json";
import toolPostVideo from "@/assets/projects/SQUARE_TOOL_POST.mp4.asset.json";
import toolPostWebm from "@/assets/projects/SQUARE_TOOL_POST.webm.asset.json";
import toolPostPoster from "@/assets/projects/SQUARE_TOOL_POST-poster.jpg.asset.json";

export const engineeringClips = [
  {
    slug: "pulley-exploded-view",
    title: "Pulley Assembly",
    category: "SolidWorks / Exploded-view animation",
    caption: "The grooved wheel and shaft separate from the supporting base, then return to their assembled positions.",
    video: practiceVideo.url,
    webm: practiceWebm.url,
    poster: practicePoster.url,
  },
  {
    slug: "square-tool-post-exploded-view",
    title: "Square Tool Post",
    category: "SolidWorks / Exploded-view animation",
    caption: "The handle, cap, fasteners and stacked plates separate in sequence to reveal the assembly's component arrangement.",
    video: toolPostVideo.url,
    webm: toolPostWebm.url,
    poster: toolPostPoster.url,
  },
];