import { FileText } from "lucide-react";
import { Reveal } from "@/components/effects";
import { CURSOR, RESEARCH } from "@/constants/site";

export function Research() {
  return (
    <section id="research" className="relative section-pad">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Research &amp; publications</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Work backed by <span className="gradient-text">research.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5">
          {RESEARCH.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <a
                href={r.href}
                target={r.href.startsWith("http") ? "_blank" : undefined}
                rel={r.href.startsWith("http") ? "noreferrer" : undefined}
                data-cursor={CURSOR.research}
                className="glass-card flex gap-6 p-8"
              >
                <span className="hidden size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 sm:inline-flex">
                  <FileText className="size-5 text-primary" />
                </span>
                <div>
                  <ul className="flex flex-wrap gap-2">
                    {r.badges.map((b) => (
                      <li
                        key={b}
                        className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-widest text-primary"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug">{r.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{r.venue}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{r.summary}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
