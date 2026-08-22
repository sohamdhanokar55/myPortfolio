import { Github, Globe, Instagram, Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/components/effects";
import { CURSOR, SOCIALS } from "@/constants/site";

const ITEMS = [
  { Icon: Linkedin, label: "LinkedIn", meta: "Connect", href: SOCIALS.linkedin },
  { Icon: Github, label: "GitHub", meta: "Follow", href: SOCIALS.github },
  { Icon: Instagram, label: "Instagram", meta: "Follow", href: SOCIALS.instagram },
  { Icon: Globe, label: "Portfolio", meta: "Visit", href: SOCIALS.portfolio },
  { Icon: Mail, label: "Email", meta: "Say hello", href: `mailto:${SOCIALS.email}` },
];

export function SocialProof() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <section id="social" className="relative section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Find me online</p>
        </Reveal>
      </div>

      <div className="relative mt-10 overflow-hidden py-2" aria-label="Social profiles">
        <div className="flex w-max gap-5" style={{ animation: "ticker 32s linear infinite" }}>
          {loop.map(({ Icon, label, meta, href }, i) => (
            <a
              key={`${label}-${i}`}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-hidden={i >= ITEMS.length}
              tabIndex={i >= ITEMS.length ? -1 : 0}
              data-cursor={CURSOR.social}
              className="glass-card flex w-64 items-center gap-4 p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10">
                <Icon className="size-5 text-primary" />
              </span>
              <span>
                <span className="block font-display text-sm font-semibold">{label}</span>
                <span className="block text-xs text-muted-foreground">{meta}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
