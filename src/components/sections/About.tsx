import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Reveal } from "@/components/effects";
import { CURSOR, STATS } from "@/constants/site";
import profile from "@/assets/profile.jpg";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 60;
    const id = setInterval(() => {
      frame += 1;
      setN(Math.round(value * (1 - Math.pow(1 - frame / total, 3))));
      if (frame >= total) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold gradient-text">
      {n}
      {suffix}
    </span>
  );
}

const ROLES_LIST = [
  "President — APV E-Cell",
  "OCM Head — APV Council",
  "Public Speaker",
  "Web Developer",
  "3× Internship Experience",
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden section-pad">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-56 -translate-y-1/3 bg-gradient-to-b from-background via-primary/10 to-transparent blur-3xl" />
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <Reveal>
          <div data-cursor={CURSOR.photo} className="gradient-border relative overflow-hidden rounded-3xl">
            <img
              src={profile}
              alt="Portrait of Soham Dhanokar"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: "linear-gradient(to top, oklch(0.13 0.012 285 / 75%), transparent 55%)" }}
            />
            <span className="absolute bottom-4 left-4 inline-flex rounded-full border border-primary/30 bg-background/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-primary backdrop-blur-md">
              This is me!
            </span>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">About me</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              From AI &amp; ML student to shipping <span className="gradient-text">production websites.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-muted-foreground">
              I started in artificial intelligence and machine learning, then fell for the craft of
              building things people actually use. Today I design and engineer full-stack products —
              from a barcode-driven attendance system running inside my institution to payment-enabled
              event platforms handling live traffic.
            </p>
            <p className="mt-4 text-muted-foreground">
              Alongside engineering, I lead teams, run entrepreneurship initiatives, speak on stage and
              edit cinematic video. The common thread: making complex things feel effortless.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {ROLES_LIST.map((r) => (
                <li key={r} className="glass rounded-full px-4 py-2 text-xs text-muted-foreground">
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 px-6 md:grid-cols-5">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.07}>
            <div className="glass-card p-6 text-center">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
