import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  const socials = [
    { href: site.social.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: site.social.instagram, label: "Instagram", Icon: Instagram },
    { href: site.whatsapp, label: "WhatsApp", Icon: MessageCircle },
  ].filter((s) => s.href);

  return (
    <footer className="relative border-t bg-navy/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-6 font-display text-2xl text-silver">From Concept to Reality</p>
          <div className="mt-6 flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-md border text-muted-foreground transition-colors hover:border-primary hover:text-primary-glow">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Navigate</p>
          <ul className="mt-5 space-y-3">
            {links.map((l) => (
              <li key={l.to}><Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href={site.phoneHref} className="text-muted-foreground hover:text-foreground">{site.phoneDisplay}</a></li>
            <li><a href={`mailto:${site.email}`} className="break-all text-muted-foreground hover:text-foreground">{site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 font-mono text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-8">
          <span>© 2026 MECHRYX. All rights reserved.</span>
          <span>Mechanical CAD & Product Design</span>
        </div>
      </div>
    </footer>
  );
}
