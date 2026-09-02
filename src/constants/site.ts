import projectAttendance from "@/assets/project-attendance.webp";
import projectAttendance1 from "@/assets/project-attendance1.webp";
import projectAttendance2 from "@/assets/project-attendance2.webp";
import projectResonance from "@/assets/project-resonance.webp";
import projectResonance1 from "@/assets/projectResonance1.webp";
import projectResonance2 from "@/assets/projectResonance2.webp";
import projectZest from "@/assets/project-zest.webp";
import projectZest1 from "@/assets/projectZest1.webp";
import projectZest2 from "@/assets/projectZest2.webp";
import projectCoal from "@/assets/project-coal.webp";
import projectCoal1 from "@/assets/project-coal1.webp";
import projectCoal2 from "@/assets/project-coal2.webp";
import projectEwaste from "@/assets/project-ewaste.jpg";
import dogi1 from "@/assets/Achievements/dogi-1.webp";
import dogi2 from "@/assets/Achievements/dogi-2.webp";
import dogi3 from "@/assets/Achievements/dogi-3.webp";
import jondhale2 from "@/assets/Achievements/Jondhale-2.webp";
import jondhale1 from "@/assets/Achievements/Jondhale-1.webp";
import jondhale3 from "@/assets/Achievements/Jondhale-3.webp";
import dogicerti from "@/assets/Achievements/dogi-certi.webp";
import president from "@/assets/Leadership/president.webp";
import fcrit1 from "@/assets/Achievements/Fcrit-1.webp";
import fcrit2 from "@/assets/Achievements/Fcrit-2.webp";
import fcrit3 from "@/assets/Achievements/Fcrit-3.webp";
import kalsekar1 from "@/assets/Achievements/Kalsekar-1.webp";
import kalsekar2 from "@/assets/Achievements/Kalsekar-2.webp";
import kalsekar3 from "@/assets/Achievements/Kalsekar-3.webp";
import apv1 from "@/assets/Achievements/apv-1.webp";
import apv2 from "@/assets/Achievements/apv-2.webp";
import apv3 from "@/assets/Achievements/apv-3.webp";
import clue1 from "@/assets/Achievements/clue-1.webp";
import clue2 from "@/assets/Achievements/clue-2.webp";
import clue3 from "@/assets/Achievements/clue-3.webp";
import blindTyping from "@/assets/Achievements/Blind Typing.webp";
import blindtypingcerti from "@/assets/Achievements/blind-typing-certi.webp";
import reso1 from "@/assets/Achievements/reso-image.webp";
import reso2 from "@/assets/Achievements/fashion-show.webp";
// import apv3 from "@/assets/Achievements/apv-3.webp";
import thakur2 from "@/assets/Achievements/Thakur 2.webp";
import thakur1 from "@/assets/Achievements/Thakur 1.webp";
import thakur3 from "@/assets/Achievements/Thakur 3.webp";
import ecellCerti from "@/assets/Leadership/President-Certificate.webp";
import lateComers from "@/assets/Certifications/latecomers.webp";
import ocmAward from "@/assets/Leadership/ocmAward.webp";
import ocmCerti from "@/assets/Leadership/ocmCerti.webp";
import latecerti from "@/assets/Certifications/latecomers.webp";
import illuminate from "@/assets/Certifications/illuminate.webp";
import nec from "@/assets/Certifications/nec.webp";
import BLS from "@/assets/Certifications/bls.webp";
import udaan from "@/assets/Certifications/udaan-run.webp";
import yodha from "@/assets/Certifications/yodha-run.webp";
import bmcappr from "@/assets/Certifications/bmc-appr.webp";
import bmcinv from "@/assets/Certifications/bmc-inv.webp";
import app from "@/assets/Certifications/application-development.webp";
import paper1 from "@/assets/Certifications/paper-1.webp";
import paper2 from "@/assets/Certifications/paper-2.webp";
import video1 from "@/assets/Edits/video-1.webp";
import video2 from "@/assets/Edits/video-2.webp";
import video3 from "@/assets/Edits/video-3.webp";
import chestDayVideo from "@/assets/Edits/chest-day.mp4";
import tristanSohamVideo from "@/assets/Edits/tristan-soham.mp4";
import bhosaleSohamVideo from "@/assets/Edits/bhosale-soham.mp4";
import profile from "@/assets/profile.jpg";

import asstcertificate from "@/assets/Leadership/asstcertificate.webp";
import asstaward from "@/assets/Leadership/asstaward.webp";
import speaker from "@/assets/speaker.jpg";
import nayodaInternship from "@/assets/Internship/nayoda.webp";
import smartedInternship from "@/assets/Internship/smarted.webp";
import sncInternship from "@/assets/Internship/snc.webp";

export const CURSOR = {
  project: "View live demo",
  photo: "This is me!",
  leadership: "Click to view!",
  research: "View research!",
  experience: "See my impact",
  video: "Watch the Edit",
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
  github: "https://github.com/sohamdhanokar55",
  instagram: "https://www.instagram.com/sohamz.z.z/",
  leetcode: "https://leetcode.com/sohamdhanokar",
  email: "hello@sohamdhanokar.dev",
  phone: "+91 9321895202",
  location: "Mumbai, India",
  resume: "/myResume.pdf",
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
  images: [MediaImage, ...MediaImage[]];
  note?: string;
  demo: string;
  github: string;
  linkedinUrl?: string;
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
    images: [
      { src: projectAttendance, alt: "Late Comers Attendance Management System" },
      { src: projectAttendance1, alt: "Late Comers system dashboard" },
      { src: projectAttendance2, alt: "Late Comers system records" },
    ],
    note: "Officially recognised with a certificate by the institution.",
    demo: "#",
    github: "https://github.com/sohamdhanokar55/new-late-comers-next",
    linkedinUrl: "#",
    flagship: true,
    accent: "oklch(0.58 0.24 292 / 35%)",
  },
  {
    title: "APV Resonance 2026",
    category: "Event Platforms",
    description:
      "Animation-heavy festival website with scroll-driven reveals, cinematic hero motion and a schedule system built for thousands of visitors during fest week.",
    stack: ["Next.js", "Framer Motion", "GSAP", "Tailwind CSS"],
    images: [
      { src: projectResonance, alt: "APV Resonance 2026 website" },
      { src: projectResonance1, alt: "APV Resonance 2026 event" },
      { src: projectResonance2, alt: "APV Resonance 2026 schedule" },
    ],
    demo: "#",
    github: "https://github.com/sohamdhanokar55/resonance26.git",
    linkedinUrl: "#",
    accent: "oklch(0.66 0.2 250 / 32%)",
  },
  {
    title: "Zest 2026",
    category: "Event Platforms",
    description:
      "End-to-end event platform with Razorpay payment integration, ticketing, registration dashboards and automated confirmation flows.",
    stack: ["React", "Razorpay", "Firebase", "Node.js"],
    images: [
      { src: projectZest, alt: "Zest 2026 event platform" },
      { src: projectZest1, alt: "Zest 2026 registration flow" },
      { src: projectZest2, alt: "Zest 2026 ticketing experience" },
    ],
    demo: "#",
    github: "https://github.com/sohamdhanokar55/zest25",
    linkedinUrl: "#",
    accent: "oklch(0.62 0.26 305 / 32%)",
  },
  {
    title: "AI-Based Coal Classification System",
    category: "AI",
    description:
      "Industry-collaborated ML system classifying coal grades from FT-NIR spectral data, combining research methodology with a deployable prediction pipeline.",
    stack: ["Python", "TensorFlow", "FT-NIR", "FastAPI"],
    images: [
      { src: projectCoal, alt: "AI-based coal classification system" },
      { src: projectCoal1, alt: "Coal classification prediction pipeline" },
      { src: projectCoal2, alt: "FT-NIR research system" },
    ],
    note: "Research-backed, developed with industry collaboration.",
    demo: "#",
    github: "https://github.com/cppgroup04-ai/final_cpp.git",
    linkedinUrl: "#",
    accent: "oklch(0.7 0.14 80 / 28%)",
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
    linkedinUrl: "#",
    images: [
      { src: president, alt: "E-Cell session" },
      { src: ecellCerti, alt: "APV E-Cell President" },
      // { src: video1, alt: "President certificate placeholder" },
    ] satisfies MediaImage[],
  },
  {
    role: "OCM Head",
    org: "APV Council",
    period: "2025 – 26",
    detail:
      "Led operations and committee management across flagship events, owning planning, logistics and cross-team execution.",
    badge: "Certificate Received",
    linkedinUrl: "#",
    images: [
      { src: ocmAward, alt: "OCM Head operations" },
      { src: ocmCerti, alt: "Event floor moments" },
      // { src: speaker, alt: "OCM Head certificate placeholder" },
    ] satisfies MediaImage[],
  },
  {
    role: "Assistant Technical Secretary",
    org: "APV Council",
    period: "2024 – 25",
    detail:
      "Coordinated technical events, managed volunteer teams and drove the technical execution of college-wide programmes.",
    badge: "Council",
    linkedinUrl: "#",
    images: [
      { src: asstcertificate , alt: "Campus technical programme" },
      { src: asstaward, alt: "Technical events and council work" },
    ] satisfies MediaImage[],
  },
  
  
];

export const ACHIEVEMENTS = [
  {
    category: "International Conference",
    title: "Best Paper Award",
    detail: "1st International Conference on Trends in Management and Engineering Streams — International Winner",
    images: [{ src: dogi2, alt: "Best Paper Award - International Conference" }, { src: dogi3, alt: "Best Paper Award - International Conference" }, { src: dogi1, alt: "Best Paper Award - International Conference" }, { src: dogicerti, alt: "Best Paper Award - Certificate" }] satisfies MediaImage[],
    linkedinUrl: "https://www.linkedin.com/posts/soham-dhanokar_internationalconference-firstprize-ai-activity-7457318746836299776-tjU7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFh3CzwBFv-EvNf8xA56_tg-eKB7QKmuIPU",
    isInternational: true,
  },
  {
    category: "Technical Paper Presentations",
    title: "Thakur Shyamnarayan Engineering College, Kandivali",
    detail: "First Prize — State Level Technical Paper Presentation",
    images: [{ src: thakur2, alt: "Technical paper first prize" },{ src: thakur1, alt: "Technical paper first prize" },{ src: thakur3, alt: "Technical paper first prize" }] satisfies MediaImage[],
    linkedinUrl: "https://www.linkedin.com/posts/soham-dhanokar_technicalpaperpresentation-industry40-qualitycontrol-activity-7431540912163352576-P8SW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFh3CzwBFv-EvNf8xA56_tg-eKB7QKmuIPU",
  },
  {
    category: "Technical Paper Presentations",
    title: "Shivajirao S. Jondhle Polytechnic, Asangaon",
    detail: "First Prize — State Level Technical Paper Presentation",
    images: [{ src: jondhale1, alt: "National winner recognition" },{ src: jondhale2, alt: "National winner recognition" },{ src: jondhale3, alt: "National winner recognition" }] satisfies MediaImage[],
    linkedinUrl: "https://www.linkedin.com/posts/soham-dhanokar_technicalpaperpresentation-statelevel-firstprize-activity-7426467528031408128-uav_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFh3CzwBFv-EvNf8xA56_tg-eKB7QKmuIPU",
  },
  {
    category: "Technical Paper Presentations",
    title: "Fr. C. Rodrigues Ins  titute of Technology (FCRIT), Vashi",
    detail: "First Prize — National Level Technical Paper Presentation",
    images: [{ src: fcrit1, alt: "International conference winner" },{ src: fcrit2, alt: "International conference winner" },{ src: fcrit3, alt: "International conference winner" }] satisfies MediaImage[],
    linkedinUrl: "https://www.linkedin.com/posts/soham-dhanokar_sustainability-technology-innovation-activity-7390953415213727744-FVEE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFh3CzwBFv-EvNf8xA56_tg-eKB7QKmuIPU",
  },
  {
    category: "Technical Paper Presentations",
    title: "AR Kalsekar Polytechnic, Panvel",
    detail: "First Prize — State LevelTechnical Paper Presentation",
    images: [{ src: kalsekar1, alt: "AR Kalsekar Polytechnic first prize" },{ src: kalsekar2, alt: "AR Kalsekar Polytechnic first prize" },{ src: kalsekar3, alt: "AR Kalsekar Polytechnic first prize" }] satisfies MediaImage[],
    linkedinUrl: "https://www.linkedin.com/posts/soham-dhanokar_artificialintelligence-ai-innovation-activity-7376820244805345280-Sn7o?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFh3CzwBFv-EvNf8xA56_tg-eKB7QKmuIPU",
  },
  {
    category: "Technical Paper Presentations",
    title: "Agnel Polytechnic, (Technocratz)",
    detail: "First Prize — State-Level Technical Paper Presentation (Artificial Intelligence)",
    images: [{ src: apv1, alt: "Agnel Polytechnic Technocratz first prize" },{ src: apv2, alt: "Agnel Polytechnic Technocratz first prize" },{ src: apv3, alt: "Agnel Polytechnic Technocratz first prize" }] satisfies MediaImage[],
    linkedinUrl: "https://www.linkedin.com/posts/soham-dhanokar_ai-artificialintelligence-innovation-activity-7380806525616988160-61-z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFh3CzwBFv-EvNf8xA56_tg-eKB7QKmuIPU",
  },
  {
    category: "Quiz Competition - (Clue Chronicle)",
    title: "KJ Somaiya Polytechnic, Vidyavihar",
    detail: "First Prize — Clue Chronicle Technical Competition",
    images: [{ src: clue1, alt: "KJ Somaiya Polytechnic first prize" },{ src: clue2, alt: "KJ Somaiya Polytechnic first prize" },{ src: clue3, alt: "KJ Somaiya Polytechnic first prize" }] satisfies MediaImage[],
    linkedinUrl: "https://www.linkedin.com/posts/soham-dhanokar_cluechronicle-techevent-hackathon-activity-7354388865194803204-HtBI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFh3CzwBFv-EvNf8xA56_tg-eKB7QKmuIPU",
  },
  {
    category: "Others",
    title: "Fashion Show - Resonance - Agnel Polytechnic Vashi",
    detail: "Participated in the Fashion Show at Resonance",
    images: [{ src: reso1, alt: "Fashion Show at Resonance" },{ src: reso2, alt: "Fashion Show at Resonance" }],
  },
  {
    category: "Others",
    title: "Blind Typing Competition - Agnel Polytechnic, Vashi",
    detail: "Participated in the Blind Typing Competition",
    images: [{ src: blindTyping, alt: "Blind Typing Competition certificate" },{ src: blindtypingcerti, alt: "KJ Somaiya Polytechnic first prize" }] satisfies MediaImage[],
  },
];

export const RESEARCH = [
   {
    title: "Non-Destructive Coal Type Classification Using FT-NIR Spectroscopy and Machine Learning",
    venue: "Journal Publication",
    badges: ["Published", "Peer-Reviewed"],
    summary:
      "An FT-NIR spectroscopy and machine learning pipeline classifies anthracite, bituminous, and lignite coal from CSV spectra through PCA-based preprocessing and a deployable Flutter-Python API.",
    href: "https://www.ijfmr.com/research-paper.php?id=69699",
    linkedinUrl: "#",
    publicationUrl: "https://www.ijfmr.com/research-paper.php?id=69699",
  },
  {
    title: "AI-Based Coal Quality Classification Using FT-NIR Spectroscopy",
    venue: "Journal Publication",
    badges: ["Published", "Peer-Reviewed"],
    summary:
      "Machine learning models trained on FT-NIR spectral signatures to classify coal grade with industry-grade accuracy, developed in collaboration with an industry partner.",
    href: "https://rjwave.org/jaafr/viewpaperforall.php?paper=JAAFR2603149",
    linkedinUrl: "#",
    publicationUrl: "https://rjwave.org/jaafr/viewpaperforall.php?paper=JAAFR2603149",
  },
 
];

export const EXPERIENCE = [
    {
    company: "Nayoda IT Solutions",
    role: "Full Stack Developer Intern",
    period: "1 Month",
    year: "July 2026",
    tech: ["Next.js", "TypeScript", "Firebase"],
    contribution: "Owned client-facing products from UI through APIs to deployment — shipping sites that real businesses used.",
    achievement: "Production web apps delivered end to end with performance tuning.",
    linkedinUrl: "#",
    initials: "NI",
    images: [{ src: nayodaInternship, alt: "Nayoda IT Solutions internship" }] satisfies MediaImage[],
  },
   
  {
    company: "Stars N Celebs",
    role: "Marketing Intern",
    period: "1 Months",
    year: "June 2026",
    tech: ["Premiere Pro", "Content", "Growth"],
    contribution: "Built campaign creative and edited motion content that helped talent brands grow their audience.",
    achievement: "Story-led edits and experiments that lifted engagement.",
    linkedinUrl: "#",
    initials: "SC",
    images: [{ src: sncInternship, alt: "Stars N Celebs internship" }] satisfies MediaImage[],
  },
  {
    company: "SmartED Innovations",
    role: "Machine Learning Intern",
    period: "3 Months",
    year: "May 2025",
    tech: ["Python", "TensorFlow", "FastAPI"],
    contribution: "Turned raw datasets into evaluated models and prediction pipelines the team could actually run.",
    achievement: "Experiments converted into usable ML outputs, not just notebooks.",
    linkedinUrl: "#",
    initials: "SE",
    images: [{ src: smartedInternship, alt: "SmartED Innovations internship" }] satisfies MediaImage[],
  },

 
  
];

export interface Education {
  institution: string;
  logo?: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate: string;
  grade?: string;
  activities?: string[];
  roles?: string[];
  institutionUrl?: string;
}

export const EDUCATION: Education[] = [
  {
    institution: "Vidyalankar Institute of Technology, Mumbai",
    degree: "Bachelor of Technology",
    field: "Electronics and Computer Science",
    startDate: "August 2026",
    endDate: "June 2029 (Persuing)",
    grade: "-- CGPA",
    activities: ["Engineering projects", "Technical research"],
  },
  {
    institution: "Agnel Polytechnic, Vashi",
    degree: "Diploma of Education",
    field: "Artificial Intelligence & Machine Learning",
    startDate: "August 2023",
    endDate: "May 2026",
    grade: "91.82%",
    activities: ["Technical paper presentations", "Artificial intelligence projects"],
  },
  {
    institution: "Presentation Convent School",
    degree: "Indian Certificate of Secondary Education",
    startDate: "Date not provided",
    endDate: "Completed",
    grade: "87%",
    activities: ["English literature", "Mathematics", "Science"],
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
  {
    title: "Chest Day",
    tag: "Portrait Edit · Sound Design",
    image: video1,
    video: chestDayVideo,
    orientation: "portrait",
  },
  {
    title: "Tristan Soham",
    tag: "Portrait Edit · Storytelling",
    image: video2,
    video: tristanSohamVideo,
    orientation: "portrait",
  },
  {
    title: "Bhosale Soham",
    tag: "Landscape Edit · Highlight Reel",
    image: video3,
    video: bhosaleSohamVideo,
    orientation: "portrait",
  },
];

import bmc1 from "@/assets/Lecture/bmc/bmc-1.webp";
import bmc2 from "@/assets/Lecture/bmc/bmc-2.webp";
import bmc3 from "@/assets/Lecture/bmc/bmc-3.webp";
import bmc4 from "@/assets/Lecture/bmc/bmc-4.webp";
import bmc5 from "@/assets/Lecture/bmc/bmc-5.webp";
import bmc6 from "@/assets/Lecture/bmc/bmc-6.webp";
import bmc from "@/assets/Lecture/bmc-img.webp";

import lecApv1 from "@/assets/Lecture/apv/lec-apv-1.webp";
import lecApv2 from "@/assets/Lecture/apv/lec-apv-2.webp";
import lecApv3 from "@/assets/Lecture/apv/lec-apv-3.webp";
import lecApv4 from "@/assets/Lecture/apv/lec-apv-4.webp";
import lecApv5 from "@/assets/Lecture/apv/lec-apv-5.webp";
import lecApv6 from "@/assets/Lecture/apv/lec-apv-6.webp";
import apv from "@/assets/Lecture/apv-img.webp";

export const SPEAKER_TALKS = [
  {
    title: "Skills That Matter More Than Marks",
    audience: "Government college audience",
    detail: "An expert lecture for BMC Government College students on practical skills, real projects, communication and leadership.",
    image: bmc,
    linkedinUrl: "#",
    galleryImages: [
      { src: bmc1, alt: "Speaking at BMC Government College - 1" },
      { src: bmc2, alt: "Speaking at BMC Government College - 2" },
      { src: bmc3, alt: "Speaking at BMC Government College - 3" },
      { src: bmc4, alt: "Speaking at BMC Government College - 4" },
      { src: bmc5, alt: "Speaking at BMC Government College - 5" },
      { src: bmc6, alt: "Speaking at BMC Government College - 6" },
    ] satisfies MediaImage[],
  },
  {
    title: "A Step-by-Step Guide to Writing and Presenting a Technical Paper",
    audience: "First-Year Diploma Students",
    detail: "A practical walkthrough of choosing a topic, building evidence, structuring a paper and presenting research with confidence.",
    image: apv,
    linkedinUrl: "https://www.linkedin.com/posts/soham-dhanokar_knowledgesharing-technicalpaper-mentorship-activity-7441687704347582464-VGMJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFh3CzwBFv-EvNf8xA56_tg-eKB7QKmuIPU",
    galleryImages: [
      { src: lecApv1, alt: "Technical Paper Presentation - 1" },
      { src: lecApv2, alt: "Technical Paper Presentation - 2" },
      { src: lecApv3, alt: "Technical Paper Presentation - 3" },
      { src: lecApv4, alt: "Technical Paper Presentation - 4" },
      { src: lecApv5, alt: "Technical Paper Presentation - 5" },
      { src: lecApv6, alt: "Technical Paper Presentation - 6" },
    ] satisfies MediaImage[],
  },
] as const;

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  category: "Leadership & Recognition" | "Research Publications" | "Workshops" | "Marathons";
  badge?: string;
  description?: string;
  images: MediaImage[];
  galleryMode?: "single" | "pair" | "triple";
};

export const CERTIFICATIONS: Certification[] = [
  {
    category: "Leadership & Recognition",
    title: "Late Comers System Recognition",
    issuer: "Institution Award",
    year: "2026",
    images: [{ src: latecerti, alt: "Late Comers System certificate" }] satisfies MediaImage[],
  },

  {
    category: "Leadership & Recognition",
    title: "NEC (IIT Bombay)",
    issuer: "National Entrepreneurship Challenge",
    year: "2025",
    images: [{ src: nec, alt: "NEC IIT Bombay certificate" }] satisfies MediaImage[],
  },
  {
    category: "Leadership & Recognition",
    title: "Expert Lecture - BMC Government College",
    issuer: "Expert Lecture",
    year: "2025",
    images: [
      { src: bmcinv, alt: "Expert lecture at BMC Government College" },
      { src: bmcappr, alt: "Expert lecture at BMC Government College" },
    ] satisfies MediaImage[],
    galleryMode: "pair",
  },

  {
    category: "Research Publications",
    title: "Non-Destructive Coal Type Classification Using FT-NIR Spectroscopy and Machine Learning",
    issuer: "International Journal For Multidisciplinary Research",
    year: "Published research",
    badge: "Published Research",
    description: "A machine learning approach for classifying coal types from FT-NIR spectral data.",
    images: [{ src: paper1, alt: "Coal classification research publication" }],
  },
  {
    category: "Research Publications",
    title: "AI-Based Coal Classification and Management System Using FT-NIR Spectroscopy",
    issuer: "Journal of Advance and Future Research",
    year: "Published research",
    badge: "Published Research",
    description: "Research into a deployable classification and management workflow using FT-NIR spectroscopy.",
    images: [{ src: paper2, alt: "AI-based coal classification publication" }],
  },
  {
    category: "Workshops",
    title: "Illuminate 2025",
    issuer: "Workshop",
    year: "2025",
    description: "Participated in a professional development workshop.",
    images: [{ src: illuminate, alt: "Illuminate 2025 workshop" }],
  },
  {
    category: "Workshops",
    title: "Application Development Workshop",
    issuer: "Workshop",
    year: "2025",
    description: "Developed mobile applications using PHP and SQL.",
    images: [{ src: app, alt: "Application development workshop" }],
  },
  {
    category: "Workshops",
    title: "Basic Life Support Workshop",
    issuer: "Workshop",
    year: "2025",
    description: "Learned CPR and emergency response using BLS equipment.",
    images: [{ src: BLS, alt: "Basic Life Support workshop" }],
  },
  {
    category: "Marathons",
    title: "Yodha Marathon",
    issuer: "Fitness achievement",
    year: "10 KM Marathon",
    images: [{ src: yodha, alt: "Yodha 10 KM Marathon" }],
  },
  {
    category: "Marathons",
    title: "Udaan Marathon",
    issuer: "Fitness achievement",
    year: "10 KM Marathon",
    images: [{ src: udaan, alt: "Udaan 10 KM Marathon" }],
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
