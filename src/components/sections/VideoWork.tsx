import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play, X } from "lucide-react";
import { Reveal } from "@/components/effects";
import { CURSOR, VIDEOS } from "@/constants/site";

export function VideoWork() {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : VIDEOS[active];

  return (
    <section id="video" className="relative section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Video editing</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Motion Meets <span className="gradient-text">Storytelling.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <button
                onClick={() => setActive(i)}
                aria-label={`Play ${v.title}`}
                data-cursor={CURSOR.video}
                className="glass-card group block w-full overflow-hidden text-left"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={v.image}
                    alt={`${v.title} thumbnail`}
                    width={576}
                    height={1024}
                    loading="lazy"
                    className="aspect-[9/16] h-auto w-full bg-background/40 object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="flex size-14 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110"
                      style={{ background: "var(--gradient-brand)", boxShadow: "var(--glow-violet)" }}
                    >
                      <Play className="size-5 text-primary-foreground" fill="currentColor" />
                    </span>
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{v.tag}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${current.title} player`}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-background/85 p-6 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass w-full max-w-3xl overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-video">
                <img
                  src={current.image}
                  alt=""
                  className="size-full object-cover opacity-60"
                  width={1024}
                  height={640}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                  <Play className="size-10 text-primary" />
                  <p className="font-display text-xl font-semibold">{current.title}</p>
                  <p className="text-xs text-muted-foreground">Video reel coming soon</p>
                </div>
              </div>
              <button
                onClick={() => setActive(null)}
                aria-label="Close video"
                className="absolute right-6 top-6 rounded-full border border-border bg-background/70 p-2"
              >
                <X className="size-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
