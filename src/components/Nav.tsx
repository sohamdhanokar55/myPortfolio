import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-5",
      )}
    >
      <nav
        aria-label="Main navigation"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500",
          scrolled ? "glass shadow-[var(--glow-soft)]" : "border border-transparent",
          "mx-4 lg:mx-auto",
        )}
      >
        <Link to="/" className="font-display text-sm font-bold tracking-[0.28em] gradient-text">
          SD
        </Link>

        <ul className="hidden items-center gap-5 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={`/${l.href}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 lg:inline-block"
            style={{ background: "var(--gradient-brand)", boxShadow: "var(--glow-violet)" }}
          >
            Contact
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border p-2 lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mx-4 mt-2 rounded-2xl p-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={`/${l.href}`}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm text-muted-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/contact" onClick={() => setOpen(false)} className="block py-1 text-sm text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
