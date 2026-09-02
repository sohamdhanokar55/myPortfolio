import { useState } from "react";
import { Award, BookOpen, Medal, PersonStanding, Trophy } from "lucide-react";
import { Reveal } from "@/components/effects";
import { ImageGalleryModal } from "@/components/ImageGalleryModal";
import { CERTIFICATIONS, CURSOR, type Certification } from "@/constants/site";

const categoryIcons = {
  "Leadership & Recognition": Trophy,
  "Research Publications": BookOpen,
  Workshops: Award,
  Marathons: PersonStanding,
} as const;

export function Certifications() {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : CERTIFICATIONS[active];
  const categories = [...new Set(CERTIFICATIONS.map((certificate) => certificate.category))];

  return (
    <section id="certifications" className="relative section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Certifications</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Recognition on <span className="gradient-text">record.</span>
          </h2>
        </Reveal>

        <div className="mt-14 space-y-14">
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            return (
              <div key={category}>
                <h3 className="flex items-center gap-3 font-display text-2xl font-semibold"><Icon className="size-5 text-primary" /> {category}</h3>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {CERTIFICATIONS.map((certificate, index) => certificate.category === category && (
                    <CertificateCard key={certificate.title} certificate={certificate} index={index} onOpen={() => setActive(index)} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ImageGalleryModal
        open={Boolean(current)}
        images={current?.images ?? []}
        title={current?.title}
        onClose={() => setActive(null)}
        mode={current?.galleryMode ?? "single"}
        autoPlayInterval={3000}
      />
    </section>
  );
}

function CertificateCard({ certificate, index, onOpen }: { certificate: Certification; index: number; onOpen: () => void }) {
  const Icon = categoryIcons[certificate.category];
  return (
    <Reveal delay={index * 0.04}>
      <button type="button" data-cursor={certificate.category === "Research Publications" ? "Read the Research" : CURSOR.recognition} onClick={onOpen} className="glass-card block h-full w-full p-7 text-left" aria-label={`Preview ${certificate.title}`}>
        <Icon className="size-6 text-primary" />
        {certificate.badge && <span className="mt-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] uppercase tracking-widest text-primary">{certificate.badge}</span>}
        <h4 className="mt-5 font-display text-base font-semibold">{certificate.title}</h4>
        <p className="mt-1 text-sm text-muted-foreground">{certificate.issuer}</p>
        {certificate.description && <p className="mt-4 text-sm text-muted-foreground">{certificate.description}</p>}
        <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{certificate.year}</p>
      </button>
    </Reveal>
  );
}
