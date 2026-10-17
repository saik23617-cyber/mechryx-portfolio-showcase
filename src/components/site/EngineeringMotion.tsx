import { engineeringClips } from "@/data/engineering-motion";
import { Container, Reveal, SectionHeading } from "./ui";

export function EngineeringMotion() {
  return (
    <section className="border-t bg-blueprint py-20 sm:py-24" aria-labelledby="engineering-motion-title">
      <Container>
        <div id="engineering-motion-title">
          <SectionHeading eyebrow="SolidWorks / Assembly animations" title="Engineering in Motion" />
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {engineeringClips.map((clip, index) => (
            <Reveal key={clip.slug} delay={index * 90} className="min-w-0">
              <figure className="h-full overflow-hidden rounded-lg border bg-card shadow-card">
                <video controls playsInline preload="none" poster={clip.poster} aria-label={`${clip.title} exploded-view animation`} aria-describedby={`${clip.slug}-caption`} className="aspect-video w-full bg-navy object-contain">
                  <source src={clip.webm} type="video/webm" />
                  <source src={clip.video} type="video/mp4" />
                  Your browser does not support this video. <a href={clip.video}>Open {clip.title} video</a>.
                </video>
                <figcaption id={`${clip.slug}-caption`} className="p-6">
                  <p className="eyebrow">{clip.category}</p>
                  <h3 className="mt-3 text-xl font-semibold">{clip.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{clip.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}