import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export function ProjectNavigationArrow() {
  const [isInProjects, setIsInProjects] = useState(false);
  const [isLastProject, setIsLastProject] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");
      if (!projectsSection) {
        setIsInProjects(false);
        return;
      }

      const rect = projectsSection.getBoundingClientRect();
      const isIn = rect.top < window.innerHeight && rect.bottom > 0;
      setIsInProjects(isIn);

      // Check if we're near the end of projects section
      setIsLastProject(rect.bottom - window.innerHeight < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextProject = () => {
    // Scroll down by one viewport height or to next project
    const currentScroll = window.scrollY;
    window.scrollTo({
      top: currentScroll + window.innerHeight * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isInProjects && !isLastProject && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: -20 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          onClick={scrollToNextProject}
          aria-label="Next project"
          className="fixed bottom-8 left-1/2 z-40 flex size-12 -translate-x-1/2 items-center justify-center rounded-full border border-border/50 transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, oklch(0.6 0.2 280 / 0.9) 0%, oklch(0.55 0.15 250 / 0.8) 100%)",
            boxShadow: "0 0 30px oklch(0.6 0.2 280 / 0.3), inset 0 0 20px oklch(0.6 0.1 280 / 0.1)",
          }}
          whileHover={{
            y: 4,
            boxShadow: "0 0 40px oklch(0.6 0.2 280 / 0.4), inset 0 0 20px oklch(0.6 0.1 280 / 0.15)",
          }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="size-5 text-primary-foreground" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
