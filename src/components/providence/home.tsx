import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Cpu, Compass, BookOpen, Sparkles, ShieldCheck, Zap, Globe, Layers, Database, Lock, Eye, Check, ShoppingBag, Terminal } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  serviceCards,
  imagery,
  researchAreas,
  aiPipelineLayers,
  aboutPillars,
} from "@/lib/providence-data";
import { coursesData } from "@/lib/courses-data";
import { DonateBand, Reveal, SectionIntro, TiltCard } from "./site";
import { ServiceSquareCard } from "./service-square-card";
import { CourseCard } from "./course-card";

/* ═══════════════════════════════════════════════════════════════════
   HERO — Centered, cinematic, elegant (85–100vh)
   ═══════════════════════════════════════════════════════════════════ */

function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="hero-v3">
      {/* Background cinematic visual with subtle drift / parallax */}
      <div className="hero-v3-media">
        <motion.img
          src={imagery.heroCinematic}
          alt="A hooded figure surrounded by luminous blue artificial intelligence networks"
          className="hero-v3-img"
          initial={reduce ? {} : { scale: 1.05, opacity: 0 }}
          animate={reduce ? { opacity: 1 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          width={1672}
          height={941}
        />
        <div className="hero-v3-shade" />
        <div className="hero-v3-grid" />
      </div>

      {/* Centered, constrained content */}
      <div className="hero-v3-container">
        <motion.div
          className="hero-v3-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-v3-eyebrow-wrap">
            <span className="hero-v3-live-dot" />
            <p className="hero-v3-eyebrow">AN AI SOCIETY</p>
          </div>

          <h1 className="hero-v3-title">
            Building What Comes Next.
          </h1>

          <p className="hero-v3-description">
            Providence builds intelligent systems, digital products, immersive experiences, and future-ready technology.
          </p>

          <div className="hero-v3-actions">
            <Button asChild variant="outlineLight" size="lg" className="glass-cta">
              <Link to="/services">
                Explore Services <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="lg" className="glass-cta">
              <Link to="/about">
                Discover Providence <ArrowRight className="ml-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll cue */}
      <div className="hero-v3-bottom">
        <span className="hero-v3-scroll-indicator">
          SCROLL TO EXPLORE <ArrowDown size={14} className="animate-bounce" />
        </span>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   01 / INTRODUCTION — Large typography + cinematic image
   ═══════════════════════════════════════════════════════════════════ */

function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-6%", "6%"]);

  return (
    <section className="intro-editorial dark-section">
      <div className="intro-editorial-container">
        <Reveal className="intro-editorial-copy">
          <p className="eyebrow">01 / INTRODUCTION</p>
          <h2 className="intro-editorial-title">
            An AI Society Building Beyond The Ordinary.
          </h2>
          <p className="intro-editorial-lead">
            Providence explores artificial intelligence, digital technology, immersive experiences, education, and
            emerging technologies to build what comes next.
          </p>
          <div className="intro-editorial-tags">
            <span>Intelligent Systems</span>
            <span>•</span>
            <span>Digital Infrastructure</span>
            <span>•</span>
            <span>Applied Research</span>
          </div>
        </Reveal>

        <Reveal className="intro-editorial-media" delay={0.15}>
          <div ref={ref} className="intro-editorial-frame">
            <motion.img
              style={{ y }}
              src={imagery.technologyEcosystem}
              alt="Providence Connected Technology Ecosystem"
              loading="lazy"
              width={1536}
              height={1024}
              className="intro-editorial-img"
            />
            <div className="intro-editorial-shade" />
            <span className="intro-editorial-badge">01 / ECOSYSTEM</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   02 / ARTIFICIAL INTELLIGENCE — "Intelligence, Engineered."
   ═══════════════════════════════════════════════════════════════════ */

function AiFeatureSection() {
  return (
    <section className="ai-feature-v3 dark-section">
      <div className="ai-feature-v3-container">
        <Reveal className="ai-feature-v3-header">
          <p className="eyebrow">02 / ARTIFICIAL INTELLIGENCE</p>
          <h2 className="ai-feature-v3-title">Intelligence, Engineered.</h2>
          <p className="ai-feature-v3-lead">
            From multi-modal models to autonomous reasoning systems — engineering production-grade AI that drives real-world outcomes.
          </p>
        </Reveal>

        <div className="ai-feature-v3-grid">
          {aiPipelineLayers.map((layer, idx) => {
            const descriptions = [
              "Specialized foundational architectures and multi-modal neural systems.",
              "Creative AI systems, context-aware content engines, and enterprise generative workflows.",
              "Autonomous agentic planners, collaborative multi-agent execution, and tool orchestration.",
              "Predictive intelligence, similarity embeddings, and scalable data pipeline modeling.",
              "End-to-end task automation, human-in-the-loop validation, and enterprise AI workflows."
            ];

            const icons = [
              <Cpu key="cpu" size={20} className="text-signal" />,
              <Sparkles key="sparkles" size={20} className="text-signal" />,
              <Terminal key="terminal" size={20} className="text-signal" />,
              <Layers key="layers" size={20} className="text-signal" />,
              <Zap key="zap" size={20} className="text-signal" />
            ];

            return (
              <Reveal key={layer} delay={idx * 0.08} className="ai-node-card-wrap">
                <div className="ai-node-card">
                  <div className="ai-node-top">
                    <span className="ai-node-index">0{idx + 1}</span>
                    <div className="ai-node-icon-box">{icons[idx]}</div>
                  </div>
                  <h3 className="ai-node-title">{layer}</h3>
                  <p className="ai-node-desc">{descriptions[idx]}</p>
                  <div className="ai-node-glow-bar" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   03 / SERVICES — Square / Near-Square Card System (1:1)
   ═══════════════════════════════════════════════════════════════════ */

function ServicesSection() {
  return (
    <section className="services-section-v3 dark-section" id="services-section">
      <div className="services-section-container">
        <Reveal className="services-section-header">
          <p className="eyebrow">03 / SERVICES</p>
          <h2 className="services-section-title">Technology Without Limits.</h2>
          <p className="services-section-lead">
            From intelligent systems to immersive digital experiences, Providence builds technology across multiple disciplines.
          </p>
        </Reveal>

        {/* 4 cards per row desktop, 2 tablet, 1 mobile */}
        <div className="services-square-grid">
          {serviceCards.map((card) => (
            <ServiceSquareCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   04 / IMMERSIVE TECHNOLOGY — "Beyond The Screen."
   ═══════════════════════════════════════════════════════════════════ */

function ImmersiveSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-4%", "4%"]);

  return (
    <section className="immersive-v3 dark-section">
      <div className="immersive-v3-container">
        <div className="immersive-v3-card">
          <motion.img
            style={{ y }}
            src={imagery.immersive3d}
            alt="3D WebGL and immersive computing"
            loading="lazy"
            className="immersive-v3-bg"
            width={1920}
            height={1080}
          />
          <div className="immersive-v3-shade" />

          <Reveal className="immersive-v3-content">
            <p className="eyebrow">04 / IMMERSIVE TECHNOLOGY</p>
            <h2 className="immersive-v3-title">Beyond The Screen.</h2>
            <p className="immersive-v3-desc">
              Interactive 3D websites, WebGL experiences, real-time spatial computing, and digital environments built for next-generation immersion.
            </p>

            <div className="immersive-v3-chips">
              <span>Three.js</span>
              <span>WebGL</span>
              <span>Spatial Computing</span>
              <span>Digital Twins</span>
            </div>

            <Button asChild variant="premium" size="lg" className="mt-4">
              <Link to="/vision">
                Explore 3D Experiences <ArrowRight className="ml-1" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   05 / EDUCATION (COURSES) — "Learn What Comes Next."
   ═══════════════════════════════════════════════════════════════════ */

function CoursesSection() {
  const featuredCourses = coursesData.slice(0, 3);

  return (
    <section className="courses-home-v3 dark-section">
      <div className="courses-home-container">
        <div className="courses-home-header">
          <Reveal>
            <p className="eyebrow">05 / EDUCATION</p>
            <h2 className="courses-home-title">Learn What Comes Next.</h2>
            <p className="courses-home-lead">
              Professional pathways designed for engineers, researchers, and digital builders.
            </p>
          </Reveal>

          <Button asChild variant="outline" className="hidden sm:inline-flex border-white/20 hover:bg-white/10 text-white">
            <Link to="/courses">
              View All Courses <ArrowRight className="ml-1.5" />
            </Link>
          </Button>
        </div>

        <div className="courses-home-grid">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="sm:hidden text-center mt-6">
          <Button asChild variant="premium">
            <Link to="/courses">
              Explore All Courses <ArrowRight className="ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
  07 / BLOCKCHAIN — "Understand The Technology."
   ═══════════════════════════════════════════════════════════════════ */

function WomenSkillsSection() {
  const pathways = [
    { number: "01", title: "Learn practical skills", description: "Build confidence with AI, coding, and digital tools." },
    { number: "02", title: "Make something real", description: "Turn new knowledge into projects you can share." },
    { number: "03", title: "Take the next step", description: "Use your work to keep growing in study or career." },
  ];

  return (
    <section className="women-skills-v3 dark-section">
      <div className="women-skills-container">
        <Reveal className="women-skills-copy">
          <p className="eyebrow">06 / OUR PURPOSE</p>
          <h2 className="women-skills-title">More women equipped to shape the digital future.</h2>
          <p className="women-skills-lead">
            Providence wants to help women become skilled and confident in technology. We make room to learn by doing,
            create visible proof of new skills, and keep moving forward.
          </p>

          <div className="women-skills-pathways">
            {pathways.map((pathway) => (
              <div className="women-skills-pathway" key={pathway.number}>
                <span>{pathway.number}</span>
                <div>
                  <h3>{pathway.title}</h3>
                  <p>{pathway.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Button asChild variant="premium" size="lg">
            <Link to="/courses">
              Explore learning paths <ArrowRight className="ml-1" />
            </Link>
          </Button>
        </Reveal>

        <Reveal className="women-skills-visual" delay={0.15}>
          <img
            src={imagery.heroWoman}
            alt="A woman framed by a luminous digital neural network"
            loading="lazy"
            width={1536}
            height={1024}
          />
          <div className="women-skills-visual-shade" />
          <span className="women-skills-visual-label">PROVIDENCE / SKILLS PATHWAY</span>
          <p>Learn. Build. Lead.</p>
        </Reveal>
      </div>
    </section>
  );
}

function CryptoSection() {
  return (
    <section className="crypto-v3 dark-section">
      <div className="crypto-v3-container">
        <div className="crypto-v3-grid">
          <Reveal className="crypto-v3-left">
            <p className="eyebrow">07 / BLOCKCHAIN</p>
            <h2 className="crypto-v3-title">Understand The Technology.</h2>
            <p className="crypto-v3-lead">
              Demystifying decentralized infrastructure, smart contract architecture, cryptographic security, and Web3 principles through rigorous engineering education.
            </p>

            <div className="crypto-v3-pillars">
              <div className="crypto-pillar-item">
                <ShieldCheck size={16} className="text-signal" />
                <div>
                  <h4>Cryptographic Security</h4>
                  <p>Key management, hashing algorithms, and zero-knowledge privacy.</p>
                </div>
              </div>

              <div className="crypto-pillar-item">
                <Database size={16} className="text-signal" />
                <div>
                  <h4>Decentralized Networks</h4>
                  <p>Consensus mechanics, distributed ledgers, and layer-1/layer-2 scalability.</p>
                </div>
              </div>

              <div className="crypto-pillar-item">
                <Lock size={16} className="text-signal" />
                <div>
                  <h4>Smart Contract Architecture</h4>
                  <p>Formal verification, deterministic execution, and state machines.</p>
                </div>
              </div>
            </div>

            <Button asChild variant="premium" size="lg" className="mt-2">
              <Link to="/courses">
                Explore Blockchain Curriculum <ArrowRight className="ml-1" />
              </Link>
            </Button>
          </Reveal>

          <Reveal className="crypto-v3-right" delay={0.15}>
            <div className="crypto-v3-card">
              <img
                src={imagery.cryptoEducation}
                alt="Providence Blockchain and Cryptography Network"
                loading="lazy"
                width={1536}
                height={1024}
                className="crypto-v3-img"
              />
              <div className="crypto-v3-overlay" />
              <div className="crypto-v3-hud">
                <span className="crypto-hud-tag">PROTOCOL // RESEARCH</span>
                <span className="crypto-hud-status">ZERO-KNOWLEDGE VERIFIED</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
  08 / RESEARCH — "Exploring What Comes Next."
   ═══════════════════════════════════════════════════════════════════ */

function ResearchSection() {
  return (
    <section className="research-v3 dark-section">
      <div className="research-v3-container">
        <Reveal className="research-v3-left">
          <div className="research-v3-eyebrow-wrap">
            <span className="research-v3-pulse" />
            <p className="eyebrow">08 / RESEARCH</p>
          </div>

          <h2 className="research-v3-title">Exploring What Comes Next.</h2>

          <p className="research-v3-desc">
            An open research practice dedicated to frontier computation, model interpretability, autonomous systems, and human-AI synergy.
          </p>

          <div className="research-v3-areas">
            {researchAreas.map((area) => (
              <div key={area} className="research-v3-chip">
                <span className="chip-dot" />
                <span>{area}</span>
              </div>
            ))}
          </div>

          <div className="research-v3-cta">
            <Button asChild variant="premium" size="xl">
              <Link to="/research">
                Explore Research <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <span className="research-v3-active-pill">
              <Sparkles size={13} className="text-signal" /> Active Frontier Lab
            </span>
          </div>
        </Reveal>

        <Reveal className="research-v3-right" delay={0.15}>
          <div className="research-v3-visual-card">
            <img
              src={imagery.researchLab}
              alt="Providence AI research laboratory"
              loading="lazy"
              width={1920}
              height={1088}
              className="research-v3-bg"
            />
            <div className="research-v3-overlay" />
            <div className="research-v3-hud-top">
              <span className="hud-badge">PROVIDENCE / LAB</span>
              <span className="hud-telemetry">SYS.VER // 4.9.2</span>
            </div>
            <div className="research-v3-hud-bottom">
              <div>
                <span className="metric-label">CORE FOCUS</span>
                <strong className="metric-value">AUTONOMOUS INTELLIGENCE</strong>
              </div>
              <div>
                <span className="metric-label">STATE</span>
                <strong className="metric-value text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> ONLINE
                </strong>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
  09 / VISION — "A Future Built Through Intelligence."
   ═══════════════════════════════════════════════════════════════════ */

export function VisionBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-5%", "5%"]);

  return (
    <section className="vision-v3 dark-section">
      <div className="vision-v3-container">
        <div className="vision-v3-card">
          <motion.img
            style={{ y }}
            src={imagery.visionLandscape}
            alt="Providence strategic vision"
            loading="lazy"
            className="vision-v3-bg"
            width={1920}
            height={1080}
          />
          <div className="vision-v3-shade" />

          <Reveal className="vision-v3-content">
            <p className="eyebrow">09 / VISION</p>
            <h2 className="vision-v3-title">A Future Built Through Intelligence.</h2>
            <p className="vision-v3-lead">
              Our vision is to build an ecosystem where AI, software, immersive technology, blockchain, and education
              come together to shape the next generation of digital innovation.
            </p>
            <Button asChild variant="premium" size="lg" className="mt-4">
              <Link to="/vision">
                Read Our Vision <ArrowRight className="ml-1" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FOUNDER RIBBON — Sleek, compact badge
   ═══════════════════════════════════════════════════════════════════ */

function FounderSection() {
  return (
    <section className="founder-ribbon-section dark-section">
      <Reveal>
        <div className="founder-ribbon">
          <div className="founder-ribbon-glow" />
          <div className="founder-ribbon-tag">
            <span className="founder-dot" />
            <span>FOUNDER / OWNER</span>
          </div>
          <div className="founder-ribbon-divider" />
          <div className="founder-ribbon-content">
            <h3 className="founder-ribbon-name">THE CONSTANT</h3>
            <span className="founder-ribbon-title">Founder &amp; Owner — Providence</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FINAL CTA — "Build What Comes Next."
   ═══════════════════════════════════════════════════════════════════ */

function FinalCta() {
  return (
    <section className="final-cta-v3">
      <img
        src={imagery.heroNeural}
        alt="Providence neural intelligence"
        loading="lazy"
        width={1920}
        height={1080}
        className="final-cta-v3-bg"
      />
      <div className="final-cta-v3-backdrop" />
      <div className="final-cta-v3-grid" />

      <div className="final-cta-v3-container">
        <Reveal className="final-cta-v3-content">
          <p className="eyebrow">START NOW</p>
          <h2 className="final-cta-v3-title">
            Build What Comes Next.
          </h2>
          <p className="final-cta-v3-lead">
            Explore Providence and discover a technology ecosystem built around intelligence, creativity, research, and innovation.
          </p>

          <div className="final-cta-v3-actions">
            <Button asChild variant="premium" size="xl">
              <Link to="/services">
                Get Started <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <Link to="/about">
                Explore Providence <ArrowRight className="ml-1" />
              </Link>
            </Button>
          </div>

          <div className="final-cta-v3-trust">
            <div className="trust-item">
              <Zap size={14} className="text-signal" />
              <span>Frontier AI Systems</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <Globe size={14} className="text-signal" />
              <span>Global Intelligence Network</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <ShieldCheck size={14} className="text-signal" />
              <span>Enterprise Grade Reliability</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   HOME PAGE — Unified, continuous premium experience
   ═══════════════════════════════════════════════════════════════════ */

export function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. 01 / Introduction */}
      <IntroSection />

      {/* 3. 02 / Artificial Intelligence */}
      <AiFeatureSection />

      {/* 4. 03 / Services (Square 1:1 modular cards) */}
      <ServicesSection />

      {/* 5. 04 / Immersive Technology */}
      <ImmersiveSection />

      {/* 6. 05 / Education (Courses) */}
      <CoursesSection />

      {/* 7. 06 / Our Purpose */}
      <WomenSkillsSection />

      {/* 8. 07 / Blockchain */}
      <CryptoSection />

      {/* 9. 08 / Research */}
      <ResearchSection />

      {/* 10. 09 / Vision */}
      <VisionBlock />

      {/* 11. Founder Ribbon */}
      <FounderSection />

      {/* 12. Final CTA */}
      <FinalCta />

      {/* 13. Donate Band */}
      <DonateBand />
    </>
  );
}
