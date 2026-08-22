import { useState } from "react";
import { Award } from "lucide-react";
import { Reveal } from "@/components/effects";
import { ImageLightbox } from "@/components/ImageLightbox";
import { CERTIFICATIONS, CURSOR } from "@/constants/site";

export function Certifications() {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : CERTIFICATIONS[active];

  return (
    <section id="certifications" className="relative section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Certifications</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Recognition on <span className="gradient-text">record.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <button
                type="button"
                data-cursor={CURSOR.recognition}
                onClick={() => setActive(i)}
                className="glass-card block h-full w-full p-7 text-left"
                aria-label={`Preview ${c.title}`}
              >
                <Award className="size-6 text-primary" />
                <h3 className="mt-5 font-display text-base font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{c.year}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <ImageLightbox
        open={Boolean(current)}
        images={current?.images ?? []}
        title={current?.title}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
