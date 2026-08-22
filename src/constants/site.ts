import projectAttendance from "@/assets/project-attendance.webp";
import projectResonance from "@/assets/project-resonance.webp";
import projectZest from "@/assets/project-zest.webp";
import projectCoal from "@/assets/project-coal.webp";
import projectEwaste from "@/assets/project-ewaste.jpg";
import video1 from "@/assets/video-1.jpg";
import video2 from "@/assets/video-2.jpg";
import video3 from "@/assets/video-3.jpg";
import profile from "@/assets/profile.jpg";

import asstcertificate from "@/assets/asstcertificate.webp";
import asstaward from "@/assets/asstaward.webp";
import speaker from "@/assets/speaker.jpg";

export const CURSOR = {
  project: "View live demo",
  photo: "This is me!",
  leadership: "Click to view!",
  research: "View research!",
  experience: "See my impact",
  video: "Watch the edit",
  speaking: "On stage",
  recognition: "View the wins",
  gallery: "Behind the scenes",
  social: "Let’s connect",
  contact: "Start a convo",
  skills: "Build with me",
} as const;

export type MediaImage = { src: string; alt: string };

/** Update these once official links are ready. */
export const SOCIALS = {
  linkedin: "https://linkedin.com/in/soham-dhanokar",
  github: "https://github.com/sohamdhanokar",
  instagram: "https://instagram.com/soham.dhanokar",
  portfolio: "https://sohamdhanokar.dev",
  email: "hello@sohamdhanokar.dev",
  phone: "+91 00000 00000",
  location: "Mumbai, India",
  resume: "/resume.pdf",
};

export const ROLES = [
  "Full Stack Developer",
  "AI & ML Engineer",
  "Creative Video Editor",
  "Tech Speaker",
  "Student Leader",
];

export const STATS = [
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Technical Paper Wins", value: 6, suffix: "+" },
  { label: "Internships", value: 3, suffix: "" },
  { label: "Websites Delivered", value: 5, suffix: "+" },
  { label: "Events Led", value: 15, suffix: "+" },
];

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", level: 93 },
      { name: "React", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "Tailwind CSS", level: 94 },
      { name: "Framer Motion", level: 86 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 87 },
      { name: "Express", level: 84 },
      { name: "Firebase", level: 90 },
      { name: "FastAPI", level: 78 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "Firebase", level: 90 },
      { name: "MongoDB", level: 82 },
      { name: "Google Sheets API", level: 88 },
    ],
  },
  {
    title: "AI & ML",
    skills: [
      { name: "Python", level: 89 },
      { name: "TensorFlow", level: 76 },
      { name: "Machine Learning", level: 84 },
      { name: "FT-NIR ML Models", level: 80 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 91 },
      { name: "VS Code", level: 95 },
      { name: "Razorpay", level: 82 },
      { name: "Hostinger", level: 85 },
      { name: "Premiere Pro", level: 88 },
    ],
  },
];

export type Project = {
  title: string;
  category: "Web Development" | "AI" | "College Projects" | "Event Platforms";
  description: string;
  stack: string[];
  image: string;
  note?: string;
  demo: string;
  github: string;
  flagship?: boolean;
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Late Comers Attendance Management System",
    category: "Web Development",
    description:
      "Flagship production system used to log late arrivals via barcode scanning, manage fines, export records to Excel and sync live with Google Sheets — replacing an entirely manual register workflow.",
    stack: ["Next.js", "Firebase", "Barcode Scanning", "Fine Management", "Excel Export", "Google Sheets API"],
    image: projectAttendance,
    note: "Officially recognised with a certificate by the institution.",
    demo: "#",
    github: "https://github.com/sohamdhanokar55/new-late-comers-next",
    flagship: true,
    accent: "oklch(0.58 0.24 292 / 35%)",
  },
  {
    title: "APV Resonance 2K26 Website",
    category: "Event Platforms",
    description:
      "Animation-heavy festival website with scroll-driven reveals, cinematic hero motion and a schedule system built for thousands of visitors during fest week.",
    stack: ["Next.js", "Framer Motion", "GSAP", "Tailwind CSS"],
    image: projectResonance,
    demo: "#",
    github: "https://github.com/sohamdhanokar55/resonance26.git",
    accent: "oklch(0.66 0.2 250 / 32%)",
  },
  {
    title: "Zest 2026",
    category: "Event Platforms",
    description:
      "End-to-end event platform with Razorpay payment integration, ticketing, registration dashboards and automated confirmation flows.",
    stack: ["React", "Razorpay", "Firebase", "Node.js"],
    image: projectZest,
    demo: "#",
    github: "https://github.com/sohamdhanokar55/zest25",
    accent: "oklch(0.62 0.26 305 / 32%)",
  },
  {
    title: "AI-Based Coal Classification System",
    category: "AI",
    description:
      "Industry-collaborated ML system classifying coal grades from FT-NIR spectral data, combining research methodology with a deployable prediction pipeline.",
    stack: ["Python", "TensorFlow", "FT-NIR", "FastAPI"],
    image: projectCoal,
    note: "Research-backed, developed with industry collaboration.",
    demo: "#",
    github: "https://github.com/cppgroup04-ai/final_cpp.git",
    accent: "oklch(0.7 0.14 80 / 28%)",
  },
  {
    title: "E-Waste Management Website",
    category: "College Projects",
    description:
      "Sustainability platform helping users locate e-waste drop points, schedule pickups and understand the environmental impact of responsible disposal.",
    stack: ["React", "Firebase", "Tailwind CSS"],
    image: projectEwaste,
    demo: "#",
    github: "#",
    accent: "oklch(0.72 0.16 155 / 28%)",
  },
];

export const PROJECT_FILTERS = [
  "All",
  "Web Development",
  "AI",
  "College Projects",
  "Event Platforms",
] as const;

export const LEADERSHIP = [
  {
    role: "President",
    org: "APV E-Cell",
    period: "2025 – 26",
    detail:
      "Heading the entrepreneurship cell — building startup culture on campus through speaker sessions, pitch events and mentorship drives.",
    badge: "Certificate Received",
    images: [
      { src: speaker, alt: "APV E-Cell President" },
      { src: projectResonance, alt: "E-Cell session" },
      { src: video1, alt: "President certificate placeholder" },
    ] satisfies MediaImage[],
  },
  {
    role: "OCM Head",
    org: "APV Council",
    period: "2025 – 26",
    detail:
      "Led operations and committee management across flagship events, owning planning, logistics and cross-team execution.",
    badge: "Certificate Received",
    images: [
      { src: projectZest, alt: "OCM Head operations" },
      { src: video2, alt: "Event floor moments" },
      { src: speaker, alt: "OCM Head certificate placeholder" },
    ] satisfies MediaImage[],
  },
  {
    role: "Assistant Technical Secretary",
    org: "APV Council",
    period: "2024 – 25",
    detail:
      "Coordinated technical events, managed volunteer teams and drove the technical execution of college-wide programmes.",
    badge: "Council",
    images: [
      { src: asstaward, alt: "Technical events and council work" },
      { src: asstcertificate , alt: "Campus technical programme" },
    ] satisfies MediaImage[],
  },
  
  
];

export const ACHIEVEMENTS = [
  {
    title: "6+ First Prize Wins",
    detail: "Technical paper presentations across state and national platforms.",
    images: [{ src: projectCoal, alt: "Technical paper first prize" }] satisfies MediaImage[],
  },
  {
    title: "National Winner",
    detail: "Winner at a national-level technical paper competition.",
    images: [{ src: projectAttendance, alt: "National winner recognition" }] satisfies MediaImage[],
  },
  {
    title: "International Conference Winner",
    detail: "Recognised at an international conference for research work.",
    images: [{ src: projectCoal, alt: "International conference winner" }] satisfies MediaImage[],
  },
  {
    title: "Blind Typing Runner-Up",
    detail: "Second place in a competitive blind typing championship.",
    images: [{ src: video3, alt: "Blind typing runner-up" }] satisfies MediaImage[],
  },
  {
    title: "NEC IIT Bombay Rank",
    detail: "Ranked at the National Entrepreneurship Challenge, IIT Bombay.",
    images: [{ src: speaker, alt: "NEC IIT Bombay" }] satisfies MediaImage[],
  },
  {
    title: "Mr. Agnel",
    detail: "Awarded the flagship all-round student title.",
    images: [{ src: profile, alt: "Mr. Agnel title" }] satisfies MediaImage[],
  },
];

export const RESEARCH = [
  {
    title: "AI-Based Coal Quality Classification Using FT-NIR Spectroscopy",
    venue: "International Conference",
    badges: ["Published", "Conference", "Winner"],
    summary:
      "Machine learning models trained on FT-NIR spectral signatures to classify coal grade with industry-grade accuracy, developed in collaboration with an industry partner.",
    href: "#",
  },
  {
    title: "Smart Attendance & Discipline Automation for Institutions",
    venue: "Journal Publication",
    badges: ["Published", "Journal"],
    summary:
      "A study on digitising manual latecomer registers using barcode identification, real-time cloud sync and automated fine reconciliation.",
    href: "#",
  },
];

export const EXPERIENCE = [
  {
    company: "Nayoda IT Solutions",
    role: "Full Stack Developer Intern",
    period: "2025",
    year: "2025",
    tech: ["Next.js", "TypeScript", "Firebase"],
    contribution: "Owned client-facing products from UI through APIs to deployment — shipping sites that real businesses used.",
    achievement: "Production web apps delivered end to end with performance tuning.",
    initials: "NI",
  },
  {
    company: "SmartED Innovations",
    role: "Machine Learning Intern",
    period: "2025",
    year: "2025",
    tech: ["Python", "TensorFlow", "FastAPI"],
    contribution: "Turned raw datasets into evaluated models and prediction pipelines the team could actually run.",
    achievement: "Experiments converted into usable ML outputs, not just notebooks.",
    initials: "SE",
  },
  {
    company: "Stars N Celebs",
    role: "Marketing Intern",
    period: "2024",
    year: "2024",
    tech: ["Premiere Pro", "Content", "Growth"],
    contribution: "Built campaign creative and edited motion content that helped talent brands grow their audience.",
    achievement: "Story-led edits and experiments that lifted engagement.",
    initials: "SC",
  },
];

export const GALLERY: MediaImage[] = [
  { src: profile, alt: "Behind the scenes portrait" },
  { src: speaker, alt: "On stage at a lecture" },
  { src: projectAttendance, alt: "Shipping the attendance system" },
  { src: projectResonance, alt: "Festival website launch" },
  { src: projectZest, alt: "Event platform in the wild" },
  { src: video1, alt: "Cinematic shoot" },
  { src: video2, alt: "College event floor" },
  { src: video3, alt: "Promotional reel still" },
  { src: projectCoal, alt: "Research lab collaboration" },
  { src: projectEwaste, alt: "Sustainability project" },
];

export const VIDEOS = [
  { title: "Cinematic Edit", tag: "Colour Grade · Sound Design", image: video1 },
  { title: "College Event Edit", tag: "Multi-cam · Highlight Reel", image: video2 },
  { title: "Promotional Reel", tag: "Motion Graphics · Brand", image: video3 },
];

export const CERTIFICATIONS = [
  {
    title: "Late Comers System Recognition",
    issuer: "Institution Award",
    year: "2026",
    images: [{ src: projectAttendance, alt: "Late Comers System certificate" }] satisfies MediaImage[],
  },
  {
    title: "APV E-Cell President",
    issuer: "APV E-Cell",
    year: "2026",
    images: [{ src: speaker, alt: "APV E-Cell President certificate" }] satisfies MediaImage[],
  },
  {
    title: "APV Council OCM Head",
    issuer: "APV Council",
    year: "2026",
    images: [{ src: projectZest, alt: "OCM Head certificate" }] satisfies MediaImage[],
  },
  {
    title: "Research Paper Certificate",
    issuer: "International Conference",
    year: "2025",
    images: [{ src: projectCoal, alt: "Research paper certificate" }] satisfies MediaImage[],
  },
  {
    title: "Internship Certificates",
    issuer: "Nayoda · SmartED · Stars N Celebs",
    year: "2024 – 25",
    images: [
      { src: projectAttendance, alt: "Nayoda internship" },
      { src: projectCoal, alt: "SmartED internship" },
      { src: video3, alt: "Stars N Celebs internship" },
    ] satisfies MediaImage[],
  },
  {
    title: "Course Certificates",
    issuer: "Full Stack · Machine Learning",
    year: "2024 – 26",
    images: [
      { src: projectResonance, alt: "Full stack course" },
      { src: projectCoal, alt: "Machine learning course" },
    ] satisfies MediaImage[],
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Moments", href: "#moments" },
  { label: "Speaking", href: "#speaking" },
  { label: "Video", href: "#video" },
];
