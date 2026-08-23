import { Mic, Quote, Users } from "lucide-react";
import { Reveal } from "@/components/effects";
import { CURSOR, SPEAKER_TALKS } from "@/constants/site";

export function Speaking() {
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
              <div data-cursor="On Stage →" className="glass-card h-full overflow-hidden">
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
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
