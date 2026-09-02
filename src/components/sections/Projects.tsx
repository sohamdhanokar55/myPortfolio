import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight, Github, Linkedin, Sparkles } from "lucide-react";
import { Reveal } from "@/components/effects";
import { CURSOR, PROJECTS, PROJECT_FILTERS, type Project } from "@/constants/site";
import { cn } from "@/lib/utils";

function ProjectScene({ project, index, total }: { project: Project; index: number; total: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [imageIndex, setImageIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const currentImage = project.images[imageIndex] ?? project.images[0];

  useEffect(() => {
    setImageIndex(0);
  }, [project.title]);

  useEffect(() => {
    if (paused || project.images.length < 2) return;
    const timer = window.setInterval(() => {
      setImageIndex((current) => (current + 1) % project.images.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [paused, project.images.length, project.title]);

  return (
    <div className="relative grid h-full items-center gap-8 px-6 lg:grid-cols-[0.45fr_0.55fr] lg:gap-12">
      <div className="relative z-10 max-w-xl">
        <p className="font-display text-sm tracking-[0.4em] text-primary">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
        <motion.h3
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl"
        >
          {project.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          {project.description}
        </motion.p>
        {project.note && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            className="mt-4 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-xs text-foreground/90"
          >
            {project.note}
          </motion.p>
        )}
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s, i) => (
            <motion.li
              key={s}
              initial={{ opacity: 0, y: 10, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.32 + i * 0.05, duration: 0.4 }}
              className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground"
            >
              {s}
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            data-cursor={CURSOR.project}
            className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground"
            style={{ background: "var(--gradient-brand)", boxShadow: "var(--glow-violet)" }}
          >
            Live Demo <ArrowUpRight className="size-4" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="glass inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-colors hover:text-primary"
          >
            <Github className="size-4" /> GitHub
          </a>
          {project.linkedinUrl && (
            <a
              href={project.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-colors hover:text-primary"
              data-cursor="Share the Story →"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
          )}
        </motion.div>
      </div>

      <a
        href={project.demo}
        target="_blank"
        rel="noreferrer"
        data-cursor={CURSOR.project}
        className="relative mx-auto block w-full max-w-2xl"
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setTilt({
            x: ((e.clientY - (r.top + r.height / 2)) / r.height) * -8,
            y: ((e.clientX - (r.left + r.width / 2)) / r.width) * 10,
          });
        }}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)", rotateX: tilt.x, rotateY: tilt.y }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformPerspective: 900 }}
          className="relative overflow-hidden rounded-3xl border border-primary/25 shadow-[var(--glow-soft)]"
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={currentImage.src + imageIndex}
              src={currentImage.src}
              alt={currentImage.alt}
              width={1280}
              height={800}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] h-auto w-full object-cover sm:aspect-[16/11]"
            />
          </AnimatePresence>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(120deg, oklch(0.13 0.012 285 / 35%), transparent 55%)" }}
          />
          <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/65 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-primary backdrop-blur-md">
            View live demo
          </span>
          {project.flagship && (
            <span className="glass absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] uppercase tracking-widest text-primary">
              <Sparkles className="size-3" /> Flagship
            </span>
          )}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5" aria-label="Project gallery" role="status">
            {project.images.map((image, imageIndexValue) => (
              <span
                key={`${image.src}-${imageIndexValue}`}
                aria-current={imageIndexValue === imageIndex}
                className={`size-1.5 rounded-full transition-all duration-500 ${imageIndexValue === imageIndex ? "scale-125 bg-primary shadow-[var(--glow-violet)]" : "bg-foreground/50"}`}
              />
            ))}
          </div>
        </motion.div>
      </a>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const pinRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: pinRef, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const n = Math.max(list.length, 1);
    setActive(Math.min(n - 1, Math.floor(v * n)));
  });

  useEffect(() => {
    setActive(0);
  }, [filter]);

  const current = list[active] ?? list[0];

  return (
    <section id="projects" className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-28">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Featured work</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Projects that <span className="gradient-text">shipped.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm transition-all",
                  filter === f ? "text-primary-foreground" : "glass text-muted-foreground hover:text-foreground",
                )}
                style={filter === f ? { background: "var(--gradient-brand)", boxShadow: "var(--glow-violet)" } : undefined}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <div ref={pinRef} style={{ height: `${Math.max(list.length, 1) * 100}vh` }} className="relative mt-6">
        <div className="sticky top-0 flex h-screen items-center overflow-y-auto overflow-x-hidden">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 blur-[120px] transition-colors duration-700"
            style={{ background: `radial-gradient(ellipse at 70% 40%, ${current?.accent ?? "transparent"}, transparent 62%)` }}
          />
          <div className="mx-auto h-full w-full max-w-6xl py-10">
            <AnimatePresence mode="wait">
              {current && (
                <motion.div
                  key={current.title}
                  initial={{ opacity: 0, y: 70, filter: "blur(14px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -50, filter: "blur(12px)" }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  <ProjectScene project={current} index={active} total={list.length} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
