import { useState } from "react";
import { Linkedin, Trophy } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/effects";
import { ImageGalleryModal } from "@/components/ImageGalleryModal";
import { ACHIEVEMENTS, CURSOR } from "@/constants/site";

export function Achievements() {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : ACHIEVEMENTS[active];
  const international = ACHIEVEMENTS[0];
  const rest = ACHIEVEMENTS.slice(1);

  return (
    <section id="achievements" className="relative section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Achievements</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Competing and <span className="gradient-text">winning.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.article
            role="button"
            tabIndex={0}
            data-cursor={CURSOR.recognition}
            onClick={() => setActive(0)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") setActive(0);
            }}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="mt-14 w-full overflow-hidden rounded-3xl border-2 border-primary/40 p-8 text-left sm:p-10"
            style={{
              background: "linear-gradient(135deg, oklch(0.15 0.04 280 / 0.8) 0%, oklch(0.14 0.02 320 / 0.6) 100%)",
              boxShadow: "0 0 60px oklch(0.6 0.2 280 / 0.15), inset 0 0 40px oklch(0.6 0.1 280 / 0.1)",
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-3 py-1.5 text-[10px] uppercase tracking-widest text-yellow-500">
                  <Trophy className="size-3.5" /> International Winner
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold sm:text-3xl">{international?.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground/80 sm:text-base">{international?.detail}</p>
                <p className="mt-4 text-xs text-muted-foreground">Dattakala Group of Institutions, Pune • In association with University of Science and Technology, Southern Philippines</p>
                {international?.linkedinUrl && (
                  <a
                    href={international.linkedinUrl}
                    data-cursor="Share the Win"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm text-primary transition-colors hover:bg-primary/20"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Linkedin className="size-4" /> LinkedIn post
                  </a>
                )}
              </div>
              <motion.span
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex size-16 shrink-0 items-center justify-center rounded-2xl text-3xl"
                style={{ background: "linear-gradient(135deg, oklch(0.8 0.25 45) 0%, oklch(0.7 0.2 50) 100%)" }}
              >
                🏆
              </motion.span>
            </div>
          </motion.article>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <Reveal key={a.title} delay={0.15 + i * 0.06}>
              <article
                role="button"
                tabIndex={0}
                data-cursor={CURSOR.recognition}
                onClick={() => setActive(i + 1)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") setActive(i + 1);
                }}
                className="glass-card h-full w-full cursor-pointer p-7 text-left transition-all hover:border-primary/50"
              >
                <span
                  className="inline-flex size-11 items-center justify-center rounded-2xl"
                  style={{ background: "var(--gradient-brand)", boxShadow: "var(--glow-violet)" }}
                >
                  <Trophy className="size-5 text-primary-foreground" />
                </span>
                <span className="mt-5 inline-flex rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] uppercase tracking-widest text-primary">First Prize</span>
                <h3 className="mt-4 font-display text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.detail}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setActive(i + 1);
                    }}
                    className="rounded-full border border-border px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    View images
                  </button>
                  {a.linkedinUrl && (
                    <a
                      href={a.linkedinUrl}
                      data-cursor="Share the Win"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs text-primary transition-colors hover:bg-primary/20"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <Linkedin className="size-3.5" /> LinkedIn post
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <ImageGalleryModal
        open={Boolean(current)}
        images={current?.images ?? []}
        title={current?.title}
        onClose={() => setActive(null)}
        mode="triple"
      />
    </section>
  );
}
