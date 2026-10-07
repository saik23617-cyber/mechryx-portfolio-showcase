import { useRef, type MouseEvent } from "react";
import { ArrowUpRight, ImagePlus, Play } from "lucide-react";
import type { Service } from "@/data/services";
import type { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";

export function ServiceCard({ s }: { s: Service }) {
  const Icon = s.icon;
  return (
    <article className="group corner-ticks relative h-full overflow-hidden rounded-lg border bg-panel p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
      <div className="flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary-glow">
          <Icon className="h-5 w-5" />
        </div>
        <span className="font-mono text-xs text-muted-foreground">{s.code}</span>
      </div>
      <h3 className="mt-8 text-xl font-semibold">{s.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
      <div className="mt-6 h-px w-10 bg-primary transition-all duration-500 group-hover:w-full" />
    </article>
  );
}

export function ProjectImage({ p, className = "" }: { p: Project; className?: string }) {
  if (p.image) return <img src={p.image} alt={p.imageAlt ?? `${p.title} uploaded CAD screenshot`} loading="lazy" className={`h-full w-full ${p.preserveImage ? "object-contain" : "object-cover object-[65%_center]"} ${className}`} />;
  return (
    <div className={`relative grid h-full w-full place-items-center bg-blueprint bg-navy ${className}`}>
      <div className="flex flex-col items-center gap-3 px-6 text-center text-muted-foreground">
        <ImagePlus className="h-8 w-8 text-primary-glow" aria-hidden="true" />
        <span className="text-sm">{p.uploadLabel ?? "Upload project screenshot"}</span>
        {p.video && <span className="flex items-center gap-2 text-xs text-silver"><Play className="h-3 w-3" /> Motion study video available</span>}
      </div>
    </div>
  );
}

export function ProjectCard({ p, index, onOpen }: { p: Project; index: number; onOpen: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const move = (e: MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  };
  const leave = () => ref.current && (ref.current.style.transform = "");

  return (
    <article ref={ref} onMouseMove={move} onMouseLeave={leave} className="group flex h-full flex-col overflow-hidden rounded-lg border bg-card shadow-card transition-[transform,border-color] duration-200 hover:border-primary/40">
      <Button variant="ghost" onClick={onOpen} className="relative aspect-[4/3] h-auto w-full shrink-0 overflow-hidden rounded-none p-0 text-left" aria-label={`View ${p.title}`}>
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-105"><ProjectImage p={p} /></div>
        <span className="absolute top-3 left-3 rounded bg-background/80 px-2 py-1 font-mono text-[0.65rem] tracking-widest text-silver backdrop-blur">P-{String(index + 1).padStart(2, "0")}</span>
      </Button>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{p.category}</p>
        <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
        <Button variant="link" onClick={onOpen} className="mt-6 h-auto gap-1.5 self-start p-0 text-sm font-medium text-primary-glow">
          View Project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
      </div>
    </article>
  );
}

export function ProcessStep({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="group relative h-full border-t border-primary/30 pt-6">
      <span className="absolute -top-[5px] left-0 h-2.5 w-2.5 rounded-full bg-primary shadow-glow" />
      <p className="font-mono text-sm text-primary-glow">{n}</p>
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
