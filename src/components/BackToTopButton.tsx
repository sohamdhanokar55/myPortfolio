import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 flex size-12 items-center justify-center rounded-full border border-border/50 transition-all duration-300 hover:scale-110"
          style={{
            background: "linear-gradient(135deg, oklch(0.15 0.04 280 / 0.9) 0%, oklch(0.14 0.02 320 / 0.8) 100%)",
            boxShadow: "0 0 30px oklch(0.6 0.2 280 / 0.2), inset 0 0 20px oklch(0.6 0.1 280 / 0.1)",
          }}
          whileHover={{
            y: -4,
            boxShadow: "0 0 40px oklch(0.6 0.2 280 / 0.3), inset 0 0 20px oklch(0.6 0.1 280 / 0.1)",
          }}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowUp className="size-5" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
