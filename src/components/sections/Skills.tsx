import { motion } from "motion/react";
import { Reveal } from "@/components/effects";
import { CURSOR, SKILL_GROUPS } from "@/constants/site";

export function Skills() {
  return (
    <section id="skills" className="relative section-pad">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-[28rem] blur-[140px]"
        style={{ background: "radial-gradient(ellipse at 30% 50%, oklch(0.58 0.24 292 / 22%), transparent 70%)" }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Skills</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
            Building Digital Experiences with{" "}
            <span className="gradient-text">Modern Technologies</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.08}>
              <motion.div
                whileHover={{ rotateX: -3, rotateY: 3 }}
                style={{ transformPerspective: 900 }}
                data-cursor={CURSOR.skills}
                className="glass-card h-full p-7"
              >
                <h3 className="font-display text-lg font-semibold">
                  <span className="gradient-text">{group.title}</span>
                </h3>
                <ul className="mt-6 space-y-4">
                  {group.skills.map((s) => (
                    <li key={s.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/90">{s.name}</span>
                        <span className="text-xs text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full"
                          style={{ background: "var(--gradient-brand)", boxShadow: "var(--glow-violet)" }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
