import { Link } from "@tanstack/react-router";

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
    <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="MECHRYX home">
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-[0.18em]">MECHRYX</span>
        {sub && <span className="mt-1 hidden truncate font-mono text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase sm:block">Mechanical CAD & Product Design</span>}
      </span>
    </Link>
  );
}
