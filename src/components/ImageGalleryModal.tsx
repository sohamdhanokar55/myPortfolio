import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { MediaImage } from "@/constants/site";

export type GalleryMode = "single" | "triple" | "pair" | "six" | "slider";

interface ImageGalleryModalProps {
  open: boolean;
  images: MediaImage[];
  title?: string;
  onClose: () => void;
  mode?: GalleryMode;
  autoPlayInterval?: number;
}

export function ImageGalleryModal({
  open,
  images,
  title,
  onClose,
  mode = "slider",
  autoPlayInterval = 3000,
}: ImageGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (open) {
      setCurrentIndex(0);
      setAutoPlay(true);
    }
  }, [open, images]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!autoPlay || mode === "pair" || isHovered || !open || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % Math.max(1, getTotalGroups()));
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlay, isHovered, open, images.length, autoPlayInterval]);

  const getGroupSize = () => {
    switch (mode) {
      case "pair":
        return 2;
      case "triple":
        return 3;
      case "six":
        return 6;
      case "single":
        return 1;
      default:
        return 1;
    }
  };

  const getVisibleImages = () => {
    const groupSize = getGroupSize();
    const startIdx = currentIndex * groupSize;
    return images.slice(startIdx, startIdx + groupSize);
  };

  const getTotalGroups = () => {
    if (mode === "pair") return 1;
    const groupSize = getGroupSize();
    return Math.ceil(images.length / groupSize);
  };

  const goToNext = () => {
    setCurrentIndex((i) => (i + 1) % Math.max(1, getTotalGroups()));
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 2000);
  };

  const goToPrevious = () => {
    setCurrentIndex((i) => (i - 1 + getTotalGroups()) % Math.max(1, getTotalGroups()));
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 2000);
  };

  const visibleImages = getVisibleImages();
  const totalGroups = getTotalGroups();
  const groupSize = getGroupSize();
  const startImageNum = currentIndex * groupSize + 1;
  const imageCount = mode === "pair" ? Math.min(images.length, 2) : images.length;
  const endImageNum = Math.min((currentIndex + 1) * groupSize, imageCount);

  if (!open || images.length === 0) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-background/85 p-3 backdrop-blur-xl sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery: ${title || "Images"}`}
        >
          <motion.div
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="glass flex h-[min(92dvh,52rem)] w-full max-w-7xl flex-col overflow-hidden rounded-3xl border border-border/50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Header */}
            <div className="shrink-0 border-b border-border/50 bg-gradient-to-br from-primary/10 to-background p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  {title && <h2 className="font-display text-2xl sm:text-3xl font-bold">{title}</h2>}
                  {images.length > 1 && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      {startImageNum} – {endImageNum} of {imageCount}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close gallery"
                  className="rounded-full border border-border bg-background/50 p-2 transition-colors hover:bg-background flex-shrink-0"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="flex min-h-0 flex-1 flex-col justify-center p-3 sm:p-6">
              <div
                className={`grid min-h-0 w-full gap-3 ${
                  mode === "six"
                    ? "flex-1 grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2"
                    : mode === "triple"
                      ? "flex-1 grid-cols-3"
                      : mode === "pair"
                        ? "flex-1 grid-cols-2"
                        : "mx-auto aspect-[16/10] max-h-[min(70dvh,42rem)] grid-cols-1"
                }`}
              >
                {visibleImages.map((img, idx) => (
                  <motion.div
                    key={`${currentIndex}-${idx}`}
                    initial={{ opacity: 0, scale: 0.95, x: mode === "pair" ? (idx === 0 ? -20 : 20) : 0 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, type: "spring", damping: 20 }}
                    className="relative flex min-h-0 overflow-hidden rounded-2xl"
                  >
                    <div
                      className="flex min-h-0 w-full items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-background/50"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="size-full object-contain"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation */}
              {images.length > groupSize && (
                <div className="mt-4 flex shrink-0 items-center justify-between gap-4">
                  <button
                    onClick={goToPrevious}
                    aria-label="Previous"
                    className="rounded-full border border-border bg-background/50 p-2 transition-colors hover:bg-background"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <span className="text-xs text-muted-foreground">
                    {currentIndex + 1} / {totalGroups}
                  </span>
                  <button
                    onClick={goToNext}
                    aria-label="Next"
                    className="rounded-full border border-border bg-background/50 p-2 transition-colors hover:bg-background"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
