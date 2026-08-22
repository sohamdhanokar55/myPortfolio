import { Mic, Quote, Users } from "lucide-react";
import { Reveal } from "@/components/effects";
import { CURSOR } from "@/constants/site";
import speaker from "@/assets/speaker.jpg";

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

        <Reveal delay={0.1}>
          <div data-cursor={CURSOR.speaking} className="glass-card mt-12 grid overflow-hidden lg:grid-cols-2">
            <div className="relative">
              <img
                src={speaker}
                alt="Speaker addressing an audience under stage lights"
                width={1280}
                height={800}
                loading="lazy"
                className="h-72 w-full object-cover lg:h-full"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{ background: "linear-gradient(90deg, transparent 40%, oklch(0.13 0.012 285 / 85%))" }}
              />
            </div>
            <div className="p-9 lg:p-12">
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-primary">
                <Mic className="size-3" /> Expert Lecture
              </span>
              <h3 className="mt-6 font-display text-3xl font-bold leading-tight">
                <Quote className="mb-2 size-6 text-primary" />
                Skills That Matter More Than Marks
              </h3>
              <p className="mt-5 text-muted-foreground">
                Delivered an expert lecture at a BMC Government College on the practical skills that
                shape careers — building real projects, communicating clearly, leading teams and
                staying employable in an AI-first industry.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2">
                  <Users className="size-3.5 text-primary" /> Government college audience
                </span>
                <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2">
                  <Mic className="size-3.5 text-primary" /> Invited speaker
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
