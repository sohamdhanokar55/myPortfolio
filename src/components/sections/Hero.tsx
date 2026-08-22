import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Download, FolderGit2, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { AuroraBackground, Magnetic } from "@/components/effects";
import { ROLES, SOCIALS, CURSOR } from "@/constants/site";

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length] ?? "";
    const speed = deleting ? 40 : 85;
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), 1500);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
      return;
    }
    const t = setTimeout(() => {
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <AuroraBackground dense />
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-primary neon-pulse" />
          Available for work
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl"
        >
          Hi, I'm <span className="gradient-text">Soham Dhanokar.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 flex h-10 items-center font-display text-xl text-foreground/90 sm:text-3xl"
          aria-live="polite"
        >
          <span className="text-muted-foreground">I build as a&nbsp;</span>
          <span className="text-primary">{typed}</span>
          <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-primary sm:h-8" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          Production-grade web applications, machine learning systems and cinematic digital
          experiences — shipped, deployed and used by real people.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Magnetic>
            <a
              href="/#projects"
              data-cursor={CURSOR.project}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--glow-violet)" }}
            >
              <FolderGit2 className="size-4" /> View Projects
            </a>
          </Magnetic>
          <Magnetic>
            <Link
              to="/contact"
              data-cursor={CURSOR.contact}
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors hover:text-primary"
            >
              <Mail className="size-4" /> Contact Me
            </Link>
          </Magnetic>
          <Magnetic>
            <a
              href={SOCIALS.resume}
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
            >
              <Download className="size-4" /> Download Resume
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <motion.a
        href="/#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.2, duration: 2.4, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="size-5" />
      </motion.a>
    </section>
  );
}
