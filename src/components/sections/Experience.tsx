import { motion } from "motion/react";
import { Reveal } from "@/components/effects";
import { CURSOR, EXPERIENCE } from "@/constants/site";

export function Experience() {
  return (
    <section id="experience" className="relative section-pad">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Experience &amp; contributions</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Where I made an <span className="gradient-text">impact.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            Not a list of titles — a record of what I actually shipped, trained and grew.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2"
          />

          <ul className="space-y-12">
            {EXPERIENCE.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal as="li" key={e.company} delay={i * 0.08} className="relative">
                  <span
                    aria-hidden
                    className="absolute left-4 top-8 z-10 size-3 -translate-x-1/2 rounded-full neon-pulse md:left-1/2"
                    style={{ background: "var(--gradient-brand)" }}
                  />
                  <motion.article
                    whileHover={{
                      y: -8,
                      boxShadow: "var(--glow-soft)",
                    }}
                    transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                    className={`glass-card ml-10 p-7 md:ml-0 md:w-[calc(50%-2rem)] ${left ? "md:mr-auto" : "md:ml-auto"}`}
                  >
                    <p className="font-display text-xs tracking-[0.35em] text-primary">{e.year}</p>
                    <div className="mt-3 flex items-start gap-4">
                      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 font-display text-sm font-bold text-primary">
                        {e.initials}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold">{e.company}</h3>
                        <p className="text-sm text-primary">{e.role}</p>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">{e.period}</p>
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{e.contribution}</p>
                    <p className="mt-3 text-sm text-foreground/90">{e.achievement}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {e.tech.map((t) => (
                        <li key={t} className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
