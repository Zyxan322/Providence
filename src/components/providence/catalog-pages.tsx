import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Copy, Eye, Facebook, Linkedin, LockKeyhole, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { courseGroups, imagery, researchAreas, serviceGroups } from "@/lib/providence-data";
import { DonateBand, PageHero, SectionIntro, TiltCard } from "./site";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

import { ShoppingCart, Server, Cpu, Globe, Database, PenTool, BrainCircuit } from "lucide-react";

export function ServiceCard({ title, description, image, meta, tag }: { title: string, description: string, image: string, meta: string, tag: string }) {
  const { openServiceDetail } = useCart();
  const getIcon = () => {
    if (tag.includes("AI") || tag.includes("INTELLIGENCE")) return <BrainCircuit className="w-4 h-4" />;
    if (tag.includes("SOFTWARE")) return <Server className="w-4 h-4" />;
    if (tag.includes("3D")) return <Globe className="w-4 h-4" />;
    if (tag.includes("CRYPTO")) return <Database className="w-4 h-4" />;
    if (tag.includes("CREATIVE")) return <PenTool className="w-4 h-4" />;
    return <Cpu className="w-4 h-4" />;
  };

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111111] transition-all duration-500 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(255,255,255,0.05)]">
      <div className="relative h-[240px] w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-85" />

        <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md">
          {getIcon()}
        </div>
        <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[0.65rem] font-bold tracking-[0.16em] text-white uppercase backdrop-blur-md">
          {tag}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-3 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.18em] text-white/50">
          <span>{meta}</span>
        </div>
        <h3 className="mb-3 text-xl font-bold text-white font-display">{title}</h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-white/65">{description}</p>

        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1 bg-[#111] text-white border-white/10 hover:bg-white hover:text-black"
            onClick={() => openServiceDetail({
              id: title.toLowerCase().replace(/\s+/g, "-"),
              number: meta.split("/")[0].trim(),
              title,
              description,
              image,
              category: tag,
              priority: "primary",
              isCustomQuote: true,
            })}
          >
            <Eye className="w-4 h-4 mr-2" />
            View
          </Button>
          <Button
            variant="outline"
            className="flex-1 bg-[#111] text-white border-white/10 hover:bg-white hover:text-black"
            onClick={() => alert(`Added ${title} to cart`)}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </article>
  );
}

export function ServicesPage() {
  const serviceImages = [
    imagery.heroAi,
    imagery.generativeIntelligence,
    imagery.agentCore,
    imagery.machineLearning,
    imagery.digitalSolutions,
    imagery.immersive3d,
    imagery.cryptoEducation,
    imagery.educationLab,
    imagery.researchLab,
    imagery.gameWorld,
    imagery.heroModels,
    imagery.technologyEcosystem,
  ];

  return (
    <>
      <PageHero label="PROVIDENCE / SERVICES" title="TECHNOLOGY, BUILT AROUND YOU." description="Intelligent systems, digital products and immersive technology designed around real-world ambition." image={imagery.heroAi}/>
      {serviceGroups.map((group, gi) => (
        <section className={`catalog-section ${gi % 2 ? "light-section" : "dark-section"}`} key={group.title}>
          <SectionIntro label={`0${gi + 1} / CAPABILITY`} title={group.title} copy="Purpose-built systems with technical depth, strategic clarity and production-grade execution." light={gi % 2 === 1}/>
          <div className="catalog-grid">
            {group.items.map((item, i) => {
              const image = serviceImages[(gi * 3 + i) % serviceImages.length];
              return (
                <ServiceCard
                  key={item}
                  title={item.toUpperCase()}
                  description={item === "Social Media Marketing"
                    ? "Social strategy, platform-ready content, campaign management and performance reporting to grow your audience and reach measurable goals."
                    : `Focused ${item.toLowerCase()} engineered for performance, scale and meaningful outcomes.`}
                  image={image}
                  meta={`${String(i + 1).padStart(2,"0")} / ${group.title}`}
                  tag={group.title.split(" ")[0]}
                />
              );
            })}
          </div>
        </section>
      ))}
      <DonateBand/>
    </>
  );
}

import { coursesData, courseCategories } from "@/lib/courses-data";
import { CourseCard } from "./course-card";

export function CoursesPage() { 
  return (
    <>
      <PageHero label="PROVIDENCE / EDUCATION" title="LEARN THE TECHNOLOGY THAT BUILDS THE FUTURE." description="Professional learning pathways for builders, researchers and digital creators." image={imagery.educationLab}/>
      {courseCategories.filter(c => c !== "All").map((cat, gi) => {
        const categoryCourses = coursesData.filter(c => c.category === cat);
        if (categoryCourses.length === 0) return null;
        return (
          <section className={`catalog-section ${gi % 2 ? "light-section" : "dark-section"}`} key={cat}>
            <SectionIntro label={`LEARNING PATH / 0${gi + 1}`} title={cat.toUpperCase()} copy="Structured for applied understanding, technical confidence and real-world creation." light={gi % 2 === 1}/>
            <div className="catalog-grid">
              {categoryCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>
        );
      })}

      <section className="dark-section py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,15,16,0.88),rgba(19,23,30,0.82))] p-6 md:p-8 lg:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow text-white/70">FRESHER ACCESS / FREE LEARNING</p>
                <h3 className="mt-3 text-3xl md:text-5xl font-bold font-display text-white">Free starter courses for freshers.</h3>
              </div>
              <Button asChild variant="premium" size="lg">
                <Link to="/contact">Apply for free access <ArrowRight className="ml-2" /></Link>
              </Button>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/50 mb-3">How it works</p>
                  <div className="space-y-4 text-sm text-white/75">
                    <div className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/8 border border-white/10 text-xs font-bold">01</span><span>Submit your proof documents, such as a student ID, transcript, or recent academic certificate.</span></div>
                    <div className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/8 border border-white/10 text-xs font-bold">02</span><span>Share your interest area: design, coding, AI, graphics, or game development.</span></div>
                    <div className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/8 border border-white/10 text-xs font-bold">03</span><span>Our team reviews the application and grants a free starter learning path for eligible freshers.</span></div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/50 mb-4">Eligible documents</p>
                <ul className="space-y-3 text-sm text-white/75">
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-signal" /> Student ID / enrollment proof</li>
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-signal" /> Recent mark sheet or transcript</li>
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-signal" /> CNIC / government ID or guardian proof</li>
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-signal" /> A short interest statement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DonateBand/>
    </>
  ); 
}

export function ResearchPage() { return <><PageHero label="PROVIDENCE RESEARCH" title="EXPLORING WHAT COMES NEXT." description="A research practice focused on useful intelligence, emerging computation and the systems shaping tomorrow." image={imagery.heroModels}/><section className="section lab-section"><SectionIntro label="RESEARCH AREAS / ACTIVE" title="QUESTIONS WORTH BUILDING TOWARD." copy="We investigate intelligence across models, perception, autonomous systems, spatial computing and automation."/><div className="research-grid">{researchAreas.map((item, i) => <TiltCard key={item} title={item.toUpperCase()} description="Exploration at the intersection of research rigor, technical experimentation and applied impact." image={[imagery.heroModels, imagery.generativeIntelligence, imagery.machineLearning, imagery.computerVision, imagery.agentCore, imagery.heroFuture, imagery.gameWorld, imagery.automation, imagery.blockchainNetwork][i] ?? imagery.researchLab} meta={`RESEARCH FIELD / ${String(i + 1).padStart(2,"0")}`} to="/research"/>)}</div></section><DonateBand/></>; }

export function ContactPage() {
  const [mode, setMode] = useState<"service" | "course">("service");
  const [selectedCourse, setSelectedCourse] = useState("AI & Data");
  const [selectedService, setSelectedService] = useState("Artificial Intelligence");

  const courseOptions = ["AI & Data", "Programming", "3D & Immersive", "Design & Digital", "Crypto & Blockchain"];
  const serviceOptions = ["Artificial Intelligence", "Generative AI", "AI Agents", "Software & Digital Solutions", "3D & Immersive Technology", "Crypto & Blockchain Training"];

  return (
    <>
      <PageHero
        label="PROVIDENCE / CONTACT"
        title="START A CONVERSATION. BUILD WHAT'S NEXT."
        description="Share your goals, ask about a service, or explore the right learning path for you or your team."
        image={imagery.heroFuture}
      />

      <section className="relative overflow-hidden py-20 dark-section">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_35%)]" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]"
          >
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,20,0.9),rgba(10,10,12,0.7))] backdrop-blur-xl p-7 md:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.2)]">
              <p className="eyebrow text-white/70">CONTACT US</p>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold font-display text-white">Let’s build something meaningful.</h2>
              <p className="mt-4 text-base text-white/70 leading-relaxed">
                Whether you need a custom technology solution, want to explore learning options, or need guidance for a project, we’ll help you find the right next step.
              </p>

              <div className="mt-8 space-y-4 text-sm text-white/75">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="text-[0.65rem] uppercase tracking-[0.2em] text-white/50">Email</div>
                  </div>
                  <div>hello@providence.example</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="text-[0.65rem] uppercase tracking-[0.2em] text-white/50">Support</div>
                  </div>
                  <div>AI strategy, product design, education and custom systems</div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href="https://www.facebook.com/theprovidenceai/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/theprovidenceai/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-6 md:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.18)]">
              <div className="mb-6 flex gap-3 rounded-full border border-white/10 bg-black/20 p-1.5">
                <button
                  type="button"
                  onClick={() => setMode("service")}
                  className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                    mode === "service"
                      ? "bg-white text-black shadow-[0_15px_40px_rgba(255,255,255,0.18)]"
                      : "bg-transparent text-white/75 hover:bg-white/5"
                  }`}
                >
                  Service
                </button>
                <button
                  type="button"
                  onClick={() => setMode("course")}
                  className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                    mode === "course"
                      ? "bg-white text-black shadow-[0_15px_40px_rgba(255,255,255,0.18)]"
                      : "bg-transparent text-white/75 hover:bg-white/5"
                  }`}
                >
                  Course
                </button>
              </div>

              <form className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/60">Full name</span>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/60">Email</span>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
                    />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/60">Phone</span>
                    <input
                      type="tel"
                      placeholder="+00 000 000 000"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/60">{mode === "service" ? "Service" : "Course"}</span>
                    <select
                      value={mode === "service" ? selectedService : selectedCourse}
                      onChange={(e) =>
                        mode === "service"
                          ? setSelectedService(e.target.value)
                          : setSelectedCourse(e.target.value)
                      }
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white focus:border-white/30 focus:outline-none"
                    >
                      {(mode === "service" ? serviceOptions : courseOptions).map((option) => (
                        <option key={option} value={option} className="text-black">{option}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/60">Project / Goal</span>
                  <textarea
                    rows={5}
                    placeholder="Tell us about what you want to build or learn..."
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none resize-none"
                  />
                </label>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button type="button" variant="premium" size="lg" className="flex-1">
                    Send Enquiry <ArrowRight className="ml-2" />
                  </Button>
                  <Button type="button" variant="outline" size="lg" className="flex-1 border-white/15 bg-white/5 text-white hover:bg-white/10">
                    Book a Call
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <DonateBand/>
    </>
  );
}

export function AboutPage() { 
  return (
    <>
      <PageHero label="PROVIDENCE / ABOUT" title="BUILT FOR WHAT COMES NEXT." description="An AI society and technology company building intelligent systems, digital products, education and immersive technology." image={imagery.heroAi}/>
      <section className="manifesto light-section py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 backdrop-blur-sm p-6 md:p-10 lg:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.16)]"
            style={{
              backgroundImage: `linear-gradient(120deg, rgba(5, 5, 10, 0.82), rgba(10, 15, 25, 0.56)), url(${imagery.heroAi})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_40%)]" />
            <div className="relative z-10">
              <p className="eyebrow text-white/70">OUR POSITION</p>
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-end mt-6">
                <h2 className="text-4xl md:text-6xl lg:text-[5.2rem] font-black uppercase leading-[0.85] tracking-[-0.08em] text-white">
                  WE BUILD<br />
                  TECHNOLOGY.<br />
                  WE STUDY<br />
                  INTELLIGENCE.<br />
                  WE SHARE<br />
                  WHAT WE LEARN.
                </h2>

                <div className="space-y-5 max-w-xl">
                  <p className="text-lg md:text-xl leading-relaxed text-white/80">
                    Providence brings research, engineering, digital innovation, immersive experience and education into one technology ecosystem.
                  </p>
                  <p className="text-base leading-relaxed text-white/70">
                    Our work spans AI models, intelligent systems, software, 3D computing, gaming technology and professional learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-section py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionIntro
            label="OUR DISCIPLINES / CONNECTED BY DESIGN"
            title="One ecosystem. Many ways to build what comes next."
            copy="Providence connects research, engineering, immersive technology and education so people can move from understanding an idea to making it real."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { number: "01", title: "Intelligent systems", text: "Explore AI, machine learning and autonomous systems through research and applied engineering.", image: imagery.heroModels, to: "/research", action: "Explore research" },
              { number: "02", title: "Digital products", text: "Turn ambitious ideas into useful software, web experiences and dependable digital products.", image: imagery.softwareStudio, to: "/services", action: "Explore services" },
              { number: "03", title: "Immersive technology", text: "Make digital spaces tangible with interactive 3D, WebGL and spatial experiences.", image: imagery.immersive3d, to: "/3d", action: "Enter 3D experience" },
              { number: "04", title: "Learning & capability", text: "Build practical skills in AI, software, design and emerging technology through structured learning.", image: imagery.educationLab, to: "/courses", action: "Explore courses" },
            ].map((discipline) => (
              <article key={discipline.number} className="group grid overflow-hidden border border-white/10 bg-white/[0.025] sm:grid-cols-[0.8fr_1.2fr]">
                <div className="relative min-h-52 overflow-hidden">
                  <img src={discipline.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-xs font-semibold tracking-[0.16em] text-white/80">FIELD / {discipline.number}</span>
                </div>
                <div className="flex flex-col items-start p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-white font-display">{discipline.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{discipline.text}</p>
                  <Link to={discipline.to} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-signal">
                    {discipline.action} <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              <p className="eyebrow mb-4">OUR MISSION</p>
              <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">To make technology accessible, practical, and empowering.</h3>
              <p className="text-base text-white/75 leading-relaxed mb-6">
                Our mission is to help young people, especially girls, move from uncertainty to capability. We believe skill building should not remain a privilege for a few. It should be a path for everyone who is ready to learn, create, and lead.
              </p>
              <div className="space-y-4 text-sm text-white/75">
                <div className="flex gap-3 items-start">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-signal" />
                  <span>We create learning environments that are practical, motivating, and rooted in real-world outcomes.</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-signal" />
                  <span>We help students gain confidence by learning the tools, systems, and thinking required in modern technology careers.</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-signal/5 p-8">
              <p className="eyebrow mb-4">OUR MOTIVE</p>
              <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">We want girls to become skilled, confident, and future-ready.</h3>
              <p className="text-base text-white/75 leading-relaxed mb-6">
                Our motive is simple but powerful: we want girls to become skillful builders of tomorrow. We want them to learn technology, lead with confidence, and enter the workforce without hesitation.
              </p>
              <div className="space-y-4 text-sm text-white/75">
                <div className="flex gap-3 items-start">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span>Girls deserve equal access to digital learning and technical opportunity.</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span>Freshers should not be left behind simply because they lack money or connections.</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span>We believe free, quality education can unlock careers, independence, and long-term growth.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="light-section py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mb-10 text-center">
            <p className="eyebrow">WHY THIS MATTERS</p>
            <h3 className="text-3xl md:text-5xl font-bold font-display text-[#111]">A future built by capable minds.</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Girls in Tech", "We are removing barriers so girls can learn, lead, and innovate with confidence."],
              ["Freshers First", "We give new learners a real starting point, even when they are just beginning their journey."],
              ["Free Learning", "High-quality courses, guidance, and resources should be available without financial pressure."],
              ["Career Growth", "We help people move from learning to actual opportunities in digital and AI careers."],
            ].map(([title, text], index) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/10 text-sm font-bold text-white">
                  0{index + 1}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
                <p className="text-sm leading-relaxed text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mb-10">
            <p className="eyebrow">WHAT WE BELIEVE</p>
            <h3 className="text-3xl md:text-5xl font-bold font-display text-white">Skills should create opportunity, not limit it.</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Skill is power", "Every learner deserves the chance to build confidence through proper training and mentorship."],
              ["Access is essential", "Free courses and practical guidance can transform lives, especially for freshers and beginners."],
              ["Potential is equal", "Talent should not be underestimated because of background, gender, or financial constraints."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6">
                <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
                <p className="text-sm leading-relaxed text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="light-section py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mb-10">
            <p className="eyebrow">HOW WE HELP</p>
            <h3 className="text-3xl md:text-5xl font-bold font-display text-[#111]">From learning to long-term capability.</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["01", "Learn the foundations", "We provide structured, easy-to-follow learning paths for beginners and freshers."],
              ["02", "Build real skills", "Learners work on practical knowledge in AI, software, design, and digital systems."],
              ["03", "Grow with confidence", "We aim to help students move toward opportunity, clarity, and a stronger future."],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <span className="text-xs font-bold tracking-[0.2em] text-white/60">{number}</span>
                <h4 className="mt-4 text-2xl font-bold text-white">{title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="light-section py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">STEP INSIDE / PROVIDENCE 3D</p>
            <h3 className="text-3xl font-bold leading-tight text-[#111] font-display md:text-5xl">Experience the web from another dimension.</h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-black/65">
              Our 3D experience brings Providence’s work to life through an interactive environment. Explore how spatial design, real-time technology and purposeful storytelling can change the way people connect with digital products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="premium" size="lg">
                <Link to="/3d">Explore the 3D experience <ArrowRight className="ml-2" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-black/20 bg-transparent text-black hover:bg-black/5">
                <Link to="/services">Build with Providence</Link>
              </Button>
            </div>
          </div>
          <Link to="/3d" aria-label="Open the Providence 3D experience" className="group relative block min-h-[320px] overflow-hidden bg-black md:min-h-[440px]">
            <img src={imagery.immersive3d} alt="Abstract immersive 3D environment" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 text-sm font-semibold text-white">ENTER / 3D <ArrowRight size={16} /></span>
          </Link>
        </div>
      </section>

      <section className="founder-ribbon-section dark-section">
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
      </section>
      <DonateBand/>
    </>
  ); 
}

export function DonatePage() {
  const methods = [
    { name: "Bitcoin", detail: "Bitcoin contribution details will be published when donations open." },
    { name: "Ethereum", detail: "Ethereum contribution details will be published when donations open." },
    { name: "USDT", detail: "Supported network details will be confirmed before launch." },
    { name: "Other assets", detail: "Additional contribution options will be announced when available." },
  ];

  return (
    <>
      <PageHero
        label="PROVIDENCE / SUPPORT"
        title="SUPPORT THE FUTURE OF INTELLIGENCE."
        description="Donations support Providence research, experimentation, educational initiatives and technology development."
        image={imagery.heroFuture}
      />
      <section className="donation-section dark-section">
        <img className="donation-bg-image" src={imagery.blockchainNetwork} alt="" aria-hidden="true" loading="lazy" width={1536} height={1024} />
        <SectionIntro
          label="CONTRIBUTE / COMING SOON"
          title="HELP BUILD WHAT COMES NEXT."
          copy="Contribution details are being prepared. Wallet addresses and supported networks will be published here before donations open."
        />
        <div className="wallet-grid">
          {methods.map((method, i) => (
            <article className="wallet-card" key={method.name}>
              <div className="wallet-top">
                <span>SUPPORT METHOD / 0{i + 1}</span>
                <LockKeyhole aria-hidden="true" />
              </div>
              <h3>{method.name}</h3>
              <p className="wallet-detail">{method.detail}</p>
              <div className="wallet-status">
                <span className="wallet-status-dot" aria-hidden="true" />
                <span>Wallet details coming soon</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="donation-statement dark-section">
        <span>RESEARCH</span>
        <span>EXPERIMENTATION</span>
        <span>EDUCATION</span>
        <span>DEVELOPMENT</span>
      </section>
    </>
  );
}
