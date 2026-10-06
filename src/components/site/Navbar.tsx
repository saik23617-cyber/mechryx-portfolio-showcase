import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { nav } from "@/data/site";
import { Logo } from "./Logo";
import { btn } from "./ui";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled || open ? "border-b bg-background/85 backdrop-blur-xl" : "bg-transparent")}>
      <nav className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8 lg:grid-cols-[auto_1fr_auto]" aria-label="Main">
        <Logo />
        <ul className="hidden items-center justify-center gap-1 lg:flex">
          {nav.map((n) => (
            <li key={n.to}>
              <Link
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="rounded-md px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link to="/contact" className={cn(btn({ size: "sm" }), "hidden sm:inline-flex")}>
            Start a Project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <button className="grid h-10 w-10 place-items-center rounded-md border lg:hidden" onClick={() => setOpen((o) => !o)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: n.to === "/" }} className="block border-b py-3.5 font-display text-lg text-muted-foreground" activeProps={{ className: "text-primary-glow" }}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link to="/contact" onClick={() => setOpen(false)} className={cn(btn(), "w-full")}>Start a Project</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
