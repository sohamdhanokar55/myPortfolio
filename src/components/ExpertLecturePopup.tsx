import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import type { MediaImage } from "@/constants/site";

interface ExpertLecturePopupProps {
  open: boolean;
  title: string;
  detail: string;
  images: MediaImage[];
  onClose: () => void;
}

export function ExpertLecturePopup({ open, title, detail, images, onClose }: ExpertLecturePopupProps) {
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
          aria-label={`Expert Lecture: ${title}`}
        >
          <motion.div
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="glass w-full max-w-4xl rounded-3xl border border-border/50 overflow-hidden"
          >
            {/* Header */}
            <div className="border-b border-border/50 bg-gradient-to-br from-primary/10 to-background p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-3xl font-bold leading-tight">{title}</h2>
                  <p className="mt-3 text-muted-foreground">{detail}</p>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close dialog"
                  className="rounded-full border border-border bg-background/50 p-2 transition-colors hover:bg-background"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            {/* Gallery Grid - 3 columns */}
            <div className="p-8">
              <div className="grid grid-cols-3 gap-6">
                {images.slice(0, 3).map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl"
                  >
                    <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-border/50 bg-background/50">
                      <motion.img
                        src={img.src}
                        alt={img.alt}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="size-full object-cover"
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
                            className="flex size-14 items-center justify-center rounded-full"
                            style={{ background: "var(--gradient-brand)" }}
                          >
                            <svg className="size-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                    <motion.p
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 + 0.1 }}
                      className="mt-3 text-center text-xs text-muted-foreground"
                    >
                      Image {idx + 1}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
