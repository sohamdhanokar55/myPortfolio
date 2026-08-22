import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Magnetic, Reveal } from "@/components/effects";
import { CURSOR } from "@/constants/site";

export function ContactCTA() {
  return (
    <section id="contact" className="relative section-pad">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-[26rem] blur-[140px]"
        style={{ background: "radial-gradient(ellipse at center, oklch(0.62 0.26 300 / 28%), transparent 70%)" }}
      />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="text-4xl font-bold leading-tight sm:text-6xl">
            Let's Build Something <span className="gradient-text">Amazing Together.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Product idea, internship, collaboration or a website that needs to feel premium — my inbox
            is open.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Magnetic>
              <Link
                to="/contact"
                data-cursor={CURSOR.contact}
                className="inline-flex items-center gap-2 rounded-full px-10 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-105"
                style={{ background: "var(--gradient-brand)", boxShadow: "var(--glow-violet)" }}
              >
                Contact Me <ArrowUpRight className="size-5" />
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
