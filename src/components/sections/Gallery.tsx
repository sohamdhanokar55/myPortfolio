import { useMemo, useState } from "react";
import { Reveal } from "@/components/effects";
import { ImageLightbox } from "@/components/ImageLightbox";
import { CURSOR, GALLERY } from "@/constants/site";
import { cn } from "@/lib/utils";

function MarqueeRow({
  items,
  reverse,
  onOpen,
}: {
  items: typeof GALLERY;
  reverse?: boolean;
  onOpen: (index: number) => void;
}) {
  const loop = useMemo(() => [...items, ...items], [items]);

  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max gap-4 py-2 group-hover/moments:[animation-play-state:paused]"
        style={{
          animation: `${reverse ? "ticker-reverse" : "ticker"} 42s linear infinite`,
        }}
      >
        {loop.map((photo, i) => {
          const original = i % items.length;
          return (
            <button
              key={`${photo.src}-${i}`}
              type="button"
              data-cursor={CURSOR.gallery}
              onClick={() => onOpen(original)}
              aria-label={photo.alt}
              tabIndex={i >= items.length ? -1 : 0}
              className={cn(
                "relative h-44 w-[min(85vw,calc((min(72rem,100vw)-3.5rem)/3))] shrink-0 overflow-hidden rounded-2xl border border-border",
                "transition-transform duration-500 hover:z-10 hover:scale-[1.04] hover:border-primary/50 hover:shadow-[var(--glow-soft)]",
              )}
            >
              <img src={photo.src} alt="" className="size-full object-cover" />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-primary/0 transition-colors duration-500 hover:bg-primary/10"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const top = GALLERY.filter((_, i) => i % 2 === 0);
  const bottom = GALLERY.filter((_, i) => i % 2 === 1);

  return (
    <section id="moments" className="relative section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Behind the scenes</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Real moments, <span className="gradient-text">not just medals.</span>
          </h2>
        </Reveal>
      </div>

      <div className="group/moments relative mt-12 space-y-4">
        <MarqueeRow items={top} onOpen={(i) => setOpen(GALLERY.indexOf(top[i]!))} />
        <MarqueeRow
          items={bottom}
          reverse
          onOpen={(i) => setOpen(GALLERY.indexOf(bottom[i]!))}
        />
      </div>

      <ImageLightbox
        open={open !== null}
        images={GALLERY}
        startIndex={open ?? 0}
        title="Behind the scenes"
        onClose={() => setOpen(null)}
      />
    </section>
  );
}
