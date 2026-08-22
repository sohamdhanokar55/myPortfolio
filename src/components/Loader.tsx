import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const NAME = "SOHAM DHANOKAR";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <h1 className="flex flex-wrap justify-center px-6 text-3xl font-bold tracking-[0.2em] sm:text-5xl">
            {NAME.split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: i * 0.055, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="gradient-text"
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </h1>
          <div className="mt-8 h-[3px] w-56 overflow-hidden rounded-full bg-muted sm:w-72">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full rounded-full"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--glow-violet)" }}
            />
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">Loading experience</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
