import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type LightboxImage = {
  src: string;
  alt: string;
};

type ImageLightboxProps = {
  open: boolean;
  images: LightboxImage[];
  title?: string | undefined;
  startIndex?: number;
  onClose: () => void;
};

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 90 : -90,
    y: 48,
    opacity: 0,
    scale: 0.9,
    rotate: direction > 0 ? 5 : -5,
    filter: "blur(10px)",
  }),
  center: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    y: -36,
    opacity: 0,
    scale: 0.94,
    rotate: direction > 0 ? -4 : 4,
    filter: "blur(8px)",
  }),
};

export function ImageLightbox({ open, images, title, startIndex = 0, onClose }: ImageLightboxProps) {
  const count = images.length;
  const [[index, direction], setPage] = useState([startIndex, 0]);

  useEffect(() => {
    if (open) setPage([Math.min(startIndex, Math.max(count - 1, 0)), 0]);
  }, [open, startIndex, count]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, count]);

  const paginate = (dir: number) => {
    if (count < 2) return;
    setPage(([i]) => [((i + dir) % count + count) % count, dir]);
  };

  const current = images[index];
  const peek = count > 1 ? images[(index + 1) % count] : null;

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={title ?? "Image gallery"}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
        >
          <motion.button
            type="button"
            aria-label="Close gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-2xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                {title && <p className="font-display text-sm font-semibold sm:text-base">{title}</p>}
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  {index + 1} / {count}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="glass rounded-full p-2.5 transition-colors hover:text-primary"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full">
              {peek && (
                <div
                  aria-hidden
                  className="absolute inset-x-[8%] bottom-[-6%] top-[8%] overflow-hidden rounded-3xl border border-border/60 opacity-40 shadow-2xl"
                >
                  <img src={peek.src} alt="" className="size-full scale-105 object-cover blur-[1px]" />
                </div>
              )}

              <div className="relative h-full overflow-hidden rounded-3xl border border-primary/30 bg-card shadow-[var(--glow-soft)]">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.img
                    key={current.src + index}
                    src={current.src}
                    alt={current.alt}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag={count > 1 ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.18}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -80) paginate(1);
                      else if (info.offset.x > 80) paginate(-1);
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 28 }}
                    className="absolute inset-0 size-full cursor-grab object-cover active:cursor-grabbing"
                  />
                </AnimatePresence>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{ background: "linear-gradient(to top, oklch(0.13 0.012 285 / 45%), transparent 40%)" }}
                />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => paginate(-1)}
                disabled={count < 2}
                aria-label="Previous image"
                className="glass rounded-full p-3 disabled:opacity-30"
              >
                <ChevronLeft className="size-4" />
              </button>
              <div className="flex gap-1.5" aria-hidden>
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={cn(
                      "h-1 rounded-full transition-all duration-500",
                      i === index ? "w-8 bg-primary" : "w-2 bg-foreground/20",
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => paginate(1)}
                disabled={count < 2}
                aria-label="Next image"
                className="glass rounded-full p-3 disabled:opacity-30"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
