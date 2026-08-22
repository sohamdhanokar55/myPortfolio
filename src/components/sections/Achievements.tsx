import { useState } from "react";
import { Trophy } from "lucide-react";
import { Reveal } from "@/components/effects";
import { ImageLightbox } from "@/components/ImageLightbox";
import { ACHIEVEMENTS, CURSOR } from "@/constants/site";

export function Achievements() {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : ACHIEVEMENTS[active];

  return (
    <section id="achievements" className="relative section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Achievements</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Competing and <span className="gradient-text">winning.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <button
                type="button"
                data-cursor={CURSOR.recognition}
                onClick={() => setActive(i)}
                className="glass-card h-full w-full p-7 text-left"
              >
                <span
                  className="inline-flex size-11 items-center justify-center rounded-2xl"
                  style={{ background: "var(--gradient-brand)", boxShadow: "var(--glow-violet)" }}
                >
                  <Trophy className="size-5 text-primary-foreground" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.detail}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <ImageLightbox
        open={Boolean(current)}
        images={current?.images ?? []}
        title={current?.title}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
