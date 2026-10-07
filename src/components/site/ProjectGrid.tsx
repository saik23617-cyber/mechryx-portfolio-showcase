import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/projects";
import { ProjectCard, ProjectImage } from "./Cards";
import { Reveal, btn } from "./ui";

export function ProjectGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState<Project | null>(null);
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90} className="h-full min-w-0">
            <ProjectCard p={p} index={projects.indexOf(p)} onOpen={() => setActive(p)} />
          </Reveal>
        ))}
      </div>
      {active && <ProjectModal p={active} onClose={() => setActive(null)} />}
    </>
  );
}

function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  const imgs = p.gallery ?? (p.image ? [p.image] : []);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-background/80 p-0 backdrop-blur-md animate-in fade-in sm:items-center sm:p-6" onClick={onClose} role="dialog" aria-modal="true" aria-label={p.title}>
      <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-xl border bg-card shadow-card animate-in slide-in-from-bottom-4 sm:rounded-xl" onClick={(e) => e.stopPropagation()}>
        <Button variant="outline" size="icon" onClick={onClose} className="absolute top-3 right-3 z-10 h-10 w-10 bg-background/80 backdrop-blur" aria-label="Close">
          <X className="h-5 w-5" />
        </Button>
        <div className="aspect-[16/10] bg-navy">
          {p.video ? (
            <video key={p.video} controls playsInline preload="metadata" poster={p.poster} aria-label={`${p.title} motion study`} className="h-full w-full object-contain">
              <source src={p.video} type="video/mp4" />
              Your browser does not support this video. <a href={p.video}>Open the motion study video</a>.
            </video>
          ) : imgs.length ? <img src={imgs[idx]} alt={p.imageAlt ?? `${p.title} uploaded CAD view ${idx + 1}`} className="h-full w-full object-contain" /> : <ProjectImage p={p} />}
        </div>
        {p.caption && <p className="border-b px-6 py-3 text-sm text-muted-foreground">{p.caption}</p>}
        {imgs.length > 1 && (
          <div className="flex gap-2 border-b p-3">
            {imgs.map((src, i) => (
              <Button variant="ghost" key={src} onClick={() => setIdx(i)} className={`h-16 w-24 overflow-hidden rounded border p-0 ${i === idx ? "border-primary" : "opacity-60"}`} aria-label={`Show view ${i + 1}`}>
                <img src={src} alt="" className="h-full w-full object-cover" />
              </Button>
            ))}
          </div>
        )}
        <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow">{p.category}</p>
            <h3 className="mt-3 text-3xl font-semibold">{p.title}</h3>
            <p className="mt-4 text-muted-foreground">{p.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.tools.map((t) => <span key={t} className="rounded border px-2.5 py-1 font-mono text-xs text-silver">{t}</span>)}
            </div>
          </div>
          <div className="md:self-end">
            <Link to="/contact" className={btn()}>Start a Similar Project</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
