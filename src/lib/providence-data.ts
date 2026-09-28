import heroAi from "@/assets/hero-ai-intelligence.jpg";
import heroResearcher from "@/assets/hero-ai-researcher.jpg";
import heroModels from "@/assets/hero-ai-models.jpg";
import heroFuture from "@/assets/hero-digital-future.jpg";
import heroWoman from "@/assets/hero-neural-woman.jpg";
import heroNeural from "@/assets/hero-ai-neural.jpg";
import heroReference from "@/assets/Hero.png";
import agentCore from "@/assets/ai-agent-core.jpg";
import computerVision from "@/assets/computer-vision-lab.jpg";
import automation from "@/assets/intelligent-automation.jpg";
import gameWorld from "@/assets/game-spatial-world.jpg";
import machineLearning from "@/assets/machine-learning-engine.jpg";
import generativeIntelligence from "@/assets/generative-intelligence.jpg";
import educationLab from "@/assets/education-lab.jpg";
import technologyEcosystem from "@/assets/technology-ecosystem.jpg";
import softwareStudio from "@/assets/software-studio.jpg";
import blockchainNetwork from "@/assets/blockchain-network.jpg";
import researchLab from "@/assets/research-lab.jpg";
import designStudio from "@/assets/design-studio.jpg";
import visionLandscape from "@/assets/vision-landscape.jpg";
import digitalSolutions from "@/assets/digital-solutions.jpg";
import immersive3d from "@/assets/immersive-3d.jpg";
import aiEngineering from "@/assets/ai-engineering.jpg";
import cryptoEducation from "@/assets/crypto-education.jpg";
import providenceLogo from "@/assets/providence-logo.jpg";

/* ── Centralised image registry ─────────────────────────────────────
   Keep homepage imagery assignment centralized in `providence-data.ts`
   so every AI capability remains visually distinct (per AGENTS.md).  */

export const imagery = {
  logo: providenceLogo,
  heroCinematic: heroReference,
  heroAi,
  heroResearcher,
  heroModels,
  heroFuture,
  heroWoman,
  heroNeural,
  agentCore,
  computerVision,
  automation,
  gameWorld,
  machineLearning,
  generativeIntelligence,
  educationLab,
  technologyEcosystem,
  softwareStudio,
  blockchainNetwork,
  researchLab,
  designStudio,
  visionLandscape,
  digitalSolutions,
  immersive3d,
  aiEngineering,
  cryptoEducation,
};

/* ── Navigation ───────────────────────────────────────────────────── */

export const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Courses", "/courses"],
  ["Vision", "/vision"],
  ["About", "/about"],
  ["Research", "/research"],
  ["Donate", "/donate"],
] as const;

/* ── Service cards (10 services — Square / Near-Square modular system) ─ */

export interface ServiceCard {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  category: string;
  priority: "primary" | "secondary";
  price?: number;
  isCustomQuote?: boolean;
}

export const serviceCards: ServiceCard[] = [
  {
    id: "service-ai",
    number: "01",
    title: "Artificial Intelligence",
    description: "AI systems, intelligent applications, machine learning and AI-powered solutions.",
    image: heroAi,
    category: "AI & Systems",
    priority: "primary",
    isCustomQuote: true,
  },
  {
    id: "service-gen-ai",
    number: "02",
    title: "Generative AI",
    description: "Generative AI applications, intelligent content systems and AI workflows.",
    image: generativeIntelligence,
    category: "Generative Models",
    priority: "primary",
    isCustomQuote: true,
  },
  {
    id: "service-ai-agents",
    number: "03",
    title: "AI Agents",
    description: "Autonomous agents, multi-agent systems and intelligent automation.",
    image: agentCore,
    category: "Autonomous Systems",
    priority: "primary",
    isCustomQuote: true,
  },
  {
    id: "service-ml",
    number: "04",
    title: "Machine Learning",
    description: "Predictive models, data-driven intelligence and machine learning solutions.",
    image: machineLearning,
    category: "Data & Inference",
    priority: "primary",
    isCustomQuote: true,
  },
  {
    id: "service-software",
    number: "05",
    title: "Software & Digital Solutions",
    description: "Custom software, web, mobile, SaaS, APIs and business automation.",
    image: digitalSolutions,
    category: "Engineering",
    priority: "primary",
    isCustomQuote: true,
  },
  {
    id: "service-3d",
    number: "06",
    title: "3D & Immersive Technology",
    description: "Three.js, WebGL, 3D websites and immersive digital experiences.",
    image: immersive3d,
    category: "Spatial & WebGL",
    priority: "primary",
    isCustomQuote: true,
  },
  {
    id: "service-crypto",
    number: "07",
    title: "Crypto & Blockchain Training",
    description: "Blockchain, Web3, cryptocurrency technology, wallets and digital assets education.",
    image: cryptoEducation,
    category: "Decentralized Systems",
    priority: "primary",
    isCustomQuote: true,
  },
  {
    id: "service-education",
    number: "08",
    title: "Technology Education",
    description: "Practical courses covering AI, programming, design and emerging technologies.",
    image: educationLab,
    category: "Academia & Skills",
    priority: "primary",
    isCustomQuote: true,
  },
  {
    id: "service-research",
    number: "09",
    title: "Research & Development",
    description: "Research and experimentation across AI, automation and emerging technologies.",
    image: researchLab,
    category: "Frontier Lab",
    priority: "primary",
    isCustomQuote: true,
  },
  {
    id: "service-gaming",
    number: "10",
    title: "Gaming Technology",
    description: "Game development and Game AI.",
    image: gameWorld,
    category: "Real-time Graphics",
    priority: "secondary",
    isCustomQuote: true,
  },
];

/* ── AI pipeline layers ───────────────────────────────────────────── */

export const aiPipelineLayers = [
  "AI Models",
  "Generative AI",
  "AI Agents",
  "Machine Learning",
  "Intelligent Automation",
];

/* ── Course groups ────────────────────────────────────────────────── */

export const courseGroups = [
  { title: "AI & DATA", level: "ALL LEVELS", image: machineLearning, items: ["Artificial Intelligence", "Machine Learning", "Generative AI", "Deep Learning", "Computer Vision", "NLP", "AI Agents", "Data Science"] },
  { title: "PROGRAMMING", level: "BEGINNER → ADVANCED", image: softwareStudio, items: ["Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "FastAPI", "API Development", "Full Stack Development"] },
  { title: "3D & IMMERSIVE", level: "INTERMEDIATE", image: immersive3d, items: ["Three.js", "WebGL", "3D Web Development", "Interactive Experiences"] },
  { title: "DESIGN & DIGITAL", level: "BEGINNER", image: designStudio, items: ["UI/UX", "Figma", "Graphic Design", "Digital Marketing", "SEO", "Video Editing", "Motion Graphics"] },
  { title: "CRYPTO & BLOCKCHAIN", level: "FOUNDATION", image: cryptoEducation, items: ["Blockchain Fundamentals", "Cryptocurrency Technology", "Web3", "Wallet Security", "Digital Assets", "Blockchain Development"] },
];

/* ── Core Areas ───────────────────────────────────────────────────── */

export const coreAreas = [
  { title: "ARTIFICIAL INTELLIGENCE", description: "AI Models, Generative AI, Machine Learning, Computer Vision, NLP, AI Agents and intelligent automation.", image: heroModels, to: "/research" as const },
  { title: "DIGITAL TECHNOLOGY", description: "Software, SaaS, Web Applications, Mobile Applications, APIs, Cloud and Business Automation.", image: softwareStudio, to: "/services" as const },
  { title: "3D & IMMERSIVE", description: "3D Websites, WebGL, Three.js, Interactive Experiences, Digital Twins and immersive interfaces.", image: heroFuture, to: "/vision" as const },
  { title: "CRYPTO & BLOCKCHAIN", description: "Blockchain technology, Web3 concepts, digital assets and blockchain education.", image: blockchainNetwork, to: "/courses" as const },
  { title: "EDUCATION", description: "Professional technology courses, practical training and future-focused learning.", image: educationLab, to: "/courses" as const },
  { title: "GAMING TECHNOLOGY", description: "Game Development, Game AI, Unity, Unreal Engine and interactive real-time systems.", image: gameWorld, to: "/services" as const },
];

export const serviceGroups = [
  { title: "AI & INTELLIGENT SYSTEMS", image: heroModels, items: ["AI Model Development", "Generative AI", "AI Agents", "Machine Learning", "Computer Vision", "NLP", "AI Automation", "AI APIs"] },
  { title: "SOFTWARE & DIGITAL PRODUCTS", image: softwareStudio, items: ["Custom Software", "Web Development", "Mobile Development", "SaaS Development", "API Development", "Backend Systems", "Cloud Solutions", "Business Automation"] },
  { title: "3D & IMMERSIVE TECHNOLOGY", image: heroFuture, items: ["3D Websites", "Three.js", "WebGL", "Interactive Experiences", "Digital Twins", "3D Product Experiences"] },
  { title: "GAMING TECHNOLOGY", image: gameWorld, items: ["Game Development", "Game AI", "Unity", "Unreal Engine", "Interactive Systems"] },
  { title: "CREATIVE & DIGITAL", image: designStudio, items: ["UI/UX Design", "Graphic Design", "Motion Graphics", "Digital Content", "Digital Marketing", "SEO"] },
  { title: "CRYPTO & BLOCKCHAIN", image: blockchainNetwork, items: ["Blockchain Education", "Crypto Training", "Web3 Fundamentals", "Blockchain Development Concepts", "Digital Asset Technology Education"] },
];

/* ── Research areas ───────────────────────────────────────────────── */

export const researchAreas = [
  "AI Models",
  "Generative AI",
  "Machine Learning",
  "AI Agents",
  "Computer Vision",
  "Intelligent Automation",
  "3D Computing",
  "Emerging Technologies",
];

/* ── About pillars ────────────────────────────────────────────────── */

export const aboutPillars = [
  { label: "BUILD", heading: "Build", copy: "We engineer intelligent systems and digital products." },
  { label: "EXPLORE", heading: "Explore", copy: "We research emerging technologies and new possibilities." },
  { label: "EDUCATE", heading: "Educate", copy: "We make advanced technology accessible through practical learning." },
  { label: "CREATE", heading: "Create", copy: "We transform ideas into meaningful digital experiences." },
];

/* ── Footer technology categories ─────────────────────────────────── */

export const footerCategories = ["AI", "Digital", "3D", "Crypto", "Education", "Research"];
