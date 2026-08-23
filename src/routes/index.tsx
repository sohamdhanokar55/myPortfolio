import { createFileRoute } from "@tanstack/react-router";
import { CursorGlow, ScrollProgress, SmoothScroll } from "@/components/effects";
import { Loader } from "@/components/Loader";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BackToTopButton } from "@/components/BackToTopButton";
import { ProjectNavigationArrow } from "@/components/ProjectNavigationArrow";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Leadership } from "@/components/sections/Leadership";
import { Achievements } from "@/components/sections/Achievements";
import { Research } from "@/components/sections/Research";
import { Experience } from "@/components/sections/Experience";
import { Speaking } from "@/components/sections/Speaking";
import { VideoWork } from "@/components/sections/VideoWork";
import { Certifications } from "@/components/sections/Certifications";
import { Gallery } from "@/components/sections/Gallery";
import { SocialProof } from "@/components/sections/SocialProof";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SOCIALS } from "@/constants/site";

const TITLE = "Soham Dhanokar — Full Stack Developer & AI Engineer";
const DESCRIPTION =
  "Portfolio of Soham Dhanokar — full stack developer, AI & ML engineer, speaker and student leader building production-grade web products.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Soham Dhanokar",
          jobTitle: "Full Stack Developer & AI/ML Engineer",
          description: DESCRIPTION,
          email: `mailto:${SOCIALS.email}`,
          sameAs: [SOCIALS.linkedin, SOCIALS.github, SOCIALS.instagram],
          knowsAbout: ["Next.js", "React", "TypeScript", "Machine Learning", "Firebase"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Loader />
      <SmoothScroll />
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Leadership />
        <Achievements />
        <Research />
        <Experience />
        <Speaking />
        <VideoWork />
        <Gallery />
        <Certifications />
        <SocialProof />
        <ContactCTA />
      </main>
      <Footer />
      <BackToTopButton />
      <ProjectNavigationArrow />
    </>
  );
}
