import { Link } from "@tanstack/react-router";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { CURSOR, NAV_LINKS, SOCIALS } from "@/constants/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-14rem] h-[22rem] blur-[120px]"
        style={{ background: "radial-gradient(ellipse at center, oklch(0.58 0.24 292 / 35%), transparent 70%)" }}
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold gradient-text">Soham Dhanokar</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Full stack developer building production-grade web experiences.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={`/${l.href}`} className="text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-3">
          {[
            { Icon: Linkedin, href: SOCIALS.linkedin, label: "LinkedIn" },
            { Icon: Github, href: SOCIALS.github, label: "GitHub" },
            { Icon: Instagram, href: SOCIALS.instagram, label: "Instagram" },
            { Icon: Mail, href: `mailto:${SOCIALS.email}`, label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              data-cursor={CURSOR.social}
              className="glass rounded-full p-3 transition-all hover:scale-110 hover:text-primary"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
      <p className="relative border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Soham Dhanokar. Crafted with intent.
      </p>
    </footer>
  );
}
