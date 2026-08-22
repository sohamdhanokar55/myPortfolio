import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

/* ---------------- Smooth scrolling (Lenis) ---------------- */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const instance = new Lenis({ duration: 1.1, smoothWheel: true });
      lenis = instance;
      const loop = (time: number) => {
        instance.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);
  return null;
}

/* ---------------- Scroll progress ---------------- */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX, background: "var(--gradient-brand)" }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
    />
  );
}

/* ---------------- Cursor glow + follower ---------------- */
function readCursorLabel(target: EventTarget | null) {
  if (!(target instanceof Element)) return null;
  if (target.closest("input, textarea, select, [data-native-cursor]")) return null;
  return target.closest("[data-cursor]")?.getAttribute("data-cursor") ?? null;
}

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 280, damping: 28 });
  const sy = useSpring(y, { stiffness: 280, damping: 28 });
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("has-fancy-cursor");
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setFlip(e.clientX > window.innerWidth - 180);
      setLabel(readCursorLabel(e.target));
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      document.documentElement.classList.remove("has-fancy-cursor");
      window.removeEventListener("pointermove", onMove);
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div
        aria-hidden
        style={{ left: sx, top: sy }}
        className="pointer-events-none fixed z-[90] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.span
          animate={{ scale: label ? 1.55 : 1, opacity: label ? 0.35 : 1 }}
          className="block size-2 rounded-full bg-primary"
          style={{ boxShadow: "0 0 18px oklch(0.58 0.24 292 / 80%)" }}
        />
        <motion.span
          animate={{ scale: label ? 2.4 : 1, opacity: label ? 0.55 : 0.2 }}
          className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50"
        />
        <AnimatePresence>
          {label && (
            <motion.span
              initial={{ opacity: 0, y: 8, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, scale: 1, x: flip ? -8 : 8 }}
              exit={{ opacity: 0, y: 6, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
              className={cn(
                "absolute top-5 whitespace-nowrap rounded-full border border-primary/35 bg-background/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground backdrop-blur-xl",
                flip ? "right-3" : "left-3",
              )}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        aria-hidden
        style={{ left: sx, top: sy, background: "radial-gradient(circle, oklch(0.58 0.24 292 / 22%), transparent 70%)" }}
        className="pointer-events-none fixed z-[54] size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
      />
    </>
  );
}

/* ---------------- Reveal on scroll ---------------- */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
}

/* ---------------- Magnetic button ---------------- */
export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.span
      ref={ref}
      className={cn("inline-block", className)}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setPos({ x: (e.clientX - (r.left + r.width / 2)) * 0.25, y: (e.clientY - (r.top + r.height / 2)) * 0.35 });
      }}
      onPointerLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      {children}
    </motion.span>
  );
}

/* ---------------- Animated background ---------------- */
export function AuroraBackground({ dense = false }: { dense?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div
        className="absolute -left-40 top-[-10%] size-[38rem] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, oklch(0.58 0.24 292 / 45%), transparent 65%)",
          animation: "float-slow 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-32 top-[20%] size-[34rem] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, oklch(0.66 0.2 250 / 40%), transparent 65%)",
          animation: "float-slow 24s ease-in-out infinite reverse",
        }}
      />
      {dense && (
        <div
          className="absolute bottom-[-20%] left-1/3 size-[30rem] rounded-full blur-[130px]"
          style={{
            background: "radial-gradient(circle, oklch(0.62 0.26 305 / 35%), transparent 65%)",
            animation: "float-slow 21s ease-in-out infinite",
          }}
        />
      )}
      <Particles />
    </div>
  );
}

function Particles() {
  const dots = Array.from({ length: 34 }, (_, i) => ({
    left: (i * 37) % 100,
    top: (i * 61) % 100,
    delay: (i % 8) * 0.6,
    size: (i % 3) + 1,
  }));
  return (
    <div className="absolute inset-0">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-primary/70"
          style={{ left: `${d.left}%`, top: `${d.top}%`, width: d.size, height: d.size }}
          animate={{ opacity: [0.15, 0.9, 0.15], y: [0, -26, 0] }}
          transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: d.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
