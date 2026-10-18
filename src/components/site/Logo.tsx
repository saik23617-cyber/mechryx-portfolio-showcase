import { Link } from "@tanstack/react-router";
import logo from "@/assets/branding/mechryx-logo.png?url";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lg-m" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--primary-glow)" />
          <stop offset="1" stopColor="var(--primary)" />
        </linearGradient>
      </defs>
      <path d="M20 2 36 11v18L20 38 4 29V11z" fill="none" stroke="url(#lg-m)" strokeWidth="2" />
      <path d="M11 27V14l9 8 9-8v13" fill="none" stroke="var(--foreground)" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="20" cy="22" r="1.8" fill="var(--primary)" />
    </svg>
  );
}

export function Logo({ sub = true }: { sub?: boolean }) {
  return (
    <Link to="/" className="flex w-fit min-w-0 items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="MECHRYX home">
      <img src={logo} alt="MECHRYX — metallic silver gear and lettering with an electric blue accent" width={1536} height={1024} className="h-14 w-auto shrink-0 object-contain sm:h-16" />
      {sub && <span className="hidden max-w-36 font-mono text-[0.6rem] leading-relaxed text-muted-foreground uppercase xl:block">Mechanical CAD & Product Design</span>}
    </Link>
  );
}
