import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/effects";
import { EDUCATION } from "@/constants/site";

export function Education() {
  return (
    <section id="education" className="relative section-pad">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Education</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            The foundation behind <span className="gradient-text">the work.</span>
          </h2>
        </Reveal>

        <div className="relative mt-14 space-y-6 before:absolute before:bottom-6 before:left-5 before:top-6 before:w-px before:bg-gradient-to-b before:from-primary before:via-primary/40 before:to-transparent sm:space-y-8 sm:before:left-6">
          {EDUCATION.map((item, index) => (
            <Reveal key={item.institution} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                data-cursor="The Journey Behind the Skills"
                className="glass-card relative ml-12 p-6 sm:ml-16 sm:p-8"
              >
                <span className="absolute -left-[3.15rem] top-8 flex size-10 items-center justify-center rounded-full border border-primary/50 bg-background text-primary shadow-[var(--glow-soft)] sm:-left-[3.55rem] sm:size-12">
                  <GraduationCap className="size-5 sm:size-6" />
                </span>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold sm:text-2xl">{item.institution}</h3>
                    <p className="mt-2 text-primary">{item.degree}{item.field ? ` · ${item.field}` : ""}</p>
                  </div>
                  <p className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {item.startDate} - {item.endDate}
                  </p>
                </div>
                {item.grade && <p className="mt-5 text-sm font-medium text-foreground">Grade: {item.grade}</p>}
                {(item.activities || item.roles) && (
                  <div className="mt-5 grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
                    {item.activities && <p><span className="text-foreground">Activities:</span> {item.activities.join(" · ")}</p>}
                    {item.roles && <p><span className="text-foreground">Leadership:</span> {item.roles.join(" · ")}</p>}
                  </div>
                )}
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}