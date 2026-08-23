import { useState } from "react";
import { Linkedin, Mic, Quote, Users } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/effects";
import { ImageGalleryModal } from "@/components/ImageGalleryModal";
import { SPEAKER_TALKS } from "@/constants/site";

export function Speaking() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeTalk = activeIndex !== null ? SPEAKER_TALKS[activeIndex] : null;

  return (
    <section id="speaking" className="relative section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Expert speaker</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            On stage, <span className="gradient-text">not just on screen.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {SPEAKER_TALKS.map((talk, index) => (
            <Reveal key={talk.title} delay={0.1 + index * 0.08}>
              <motion.div
                role="button"
                tabIndex={0}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") setActiveIndex(index);
                }}
                data-cursor="Behind the Mic"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="glass-card h-full w-full overflow-hidden text-left transition-all hover:border-primary/50"
              >
                <div className="relative h-56">
                  <img src={talk.image} alt={`${talk.title} lecture`} width={1280} height={800} loading="lazy" className="size-full object-cover" />
                  <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                <div className="p-7 lg:p-9">
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-primary">
                <Mic className="size-3" /> Expert Lecture
              </span>
              <h3 className="mt-6 font-display text-3xl font-bold leading-tight">
                <Quote className="mb-2 size-6 text-primary" />
                {talk.title}
              </h3>
              <p className="mt-5 text-muted-foreground">{talk.detail}</p>
              <div className="mt-8 flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2">
                  <Users className="size-3.5 text-primary" /> {talk.audience}
                </span>
                <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2">
                  <Mic className="size-3.5 text-primary" /> Invited speaker
                </span>
              </div>
              {talk.linkedinUrl && (
                <a
                  href={talk.linkedinUrl}
                  data-cursor="See Me On Stage"
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm text-primary transition-all hover:-translate-y-1 hover:bg-primary/20 hover:shadow-[var(--glow-soft)]"
                >
                  <Linkedin className="size-4" /> View the Lecture Story
                </a>
              )}

                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <ImageGalleryModal
        open={activeTalk !== null}
        title={activeTalk?.title}
        images={activeTalk?.galleryImages ?? []}
        onClose={() => setActiveIndex(null)}
        mode="six"
      />
    </section>
  );
}
