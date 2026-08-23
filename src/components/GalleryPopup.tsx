import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { MediaImage } from "@/constants/site";

interface GalleryPopupProps {
  open: boolean;
  images: MediaImage[];
  title?: string;
  onClose: () => void;
  columns?: number;
}

export function GalleryPopup({ open, images, title, onClose, columns = 3 }: GalleryPopupProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrentIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setCurrentIndex((i) => (i + 1) % images.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose, images.length]);

  const visibleImages = columns === 4 
    ? images.slice(currentIndex, currentIndex + 4)
    : images.slice(currentIndex, currentIndex + 3);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-background/85 p-6 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery: ${title || "Gallery"}`}
        >
          <motion.div
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="glass w-full max-w-5xl rounded-3xl border border-border/50 p-8"
          >
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <div>
                {title && <h2 className="font-display text-2xl font-bold">{title}</h2>}
                <p className="mt-1 text-xs text-muted-foreground">
                  {images.length} {images.length === 1 ? "image" : "images"}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close gallery"
                className="rounded-full border border-border bg-background/50 p-2 transition-colors hover:bg-background"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Gallery Grid */}
            <div className={`grid gap-4 mb-6 grid-cols-${columns}`}>
              {visibleImages.map((img, idx) => (
                <motion.div
                  key={`${currentIndex}-${idx}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="aspect-square h-full w-full object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-sm"
                  >
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div
                        className="flex size-12 items-center justify-center rounded-full"
                        style={{ background: "var(--gradient-brand)" }}
                      >
                        <svg className="size-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Navigation */}
            {images.length > columns && (
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentIndex((i) => (i - 1 + images.length) % images.length)}
                  aria-label="Previous"
                  className="rounded-full border border-border bg-background/50 p-2 transition-colors hover:bg-background"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <span className="text-xs text-muted-foreground">
                  {currentIndex + 1} – {Math.min(currentIndex + columns, images.length)} of {images.length}
                </span>
                <button
                  onClick={() => setCurrentIndex((i) => (i + 1) % images.length)}
                  aria-label="Next"
                  className="rounded-full border border-border bg-background/50 p-2 transition-colors hover:bg-background"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
