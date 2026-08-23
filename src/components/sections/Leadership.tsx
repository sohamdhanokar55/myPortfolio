import { useState } from "react";
import { BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/effects";
import { ImageGalleryModal } from "@/components/ImageGalleryModal";
import { CURSOR, LEADERSHIP } from "@/constants/site";

export function Leadership() {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : LEADERSHIP[active];

  return (
    <section id="leadership" className="relative section-pad">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Leadership journey</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Leading teams, <span className="gradient-text">not just code.</span>
          </h2>
        </Reveal>

        <ol className="relative mt-14 space-y-10 border-l border-border pl-8">
          {LEADERSHIP.map((item, i) => (
            <Reveal as="li" key={item.role} delay={i * 0.1} className="relative">
              <span
                aria-hidden
                className="absolute -left-[41px] top-2 size-3 rounded-full neon-pulse"
                style={{ background: "var(--gradient-brand)" }}
              />
              <button
                type="button"
                data-cursor={CURSOR.leadership}
                onClick={() => setActive(i)}
                className="glass-card w-full p-7 text-left"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl font-semibold">{item.role}</h3>
                  <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] text-primary">
                    <BadgeCheck className="size-3" /> {item.badge}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.org} · {item.period}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">{item.detail}</p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-primary">Open story</p>
              </button>
            </Reveal>
          ))}
        </ol>
      </div>

      <ImageGalleryModal
        open={Boolean(current)}
        images={current?.images ?? []}
        title={current ? `${current.role} — ${current.org}` : undefined}
        onClose={() => setActive(null)}
        mode="pair"
      />
    </section>
  );
}
