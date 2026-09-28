import { Link } from "@tanstack/react-router";
import { ArrowRight, Copy, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { courseGroups, imagery, researchAreas, serviceGroups } from "@/lib/providence-data";
import { DonateBand, PageHero, SectionIntro, TiltCard } from "./site";

import { ShoppingCart, Server, Cpu, Globe, Database, PenTool, BrainCircuit } from "lucide-react";

export function ServiceCard({ title, description, image, meta, tag }: { title: string, description: string, image: string, meta: string, tag: string }) {
  const getIcon = () => {
    if (tag.includes("AI") || tag.includes("INTELLIGENCE")) return <BrainCircuit className="w-4 h-4" />;
    if (tag.includes("SOFTWARE")) return <Server className="w-4 h-4" />;
    if (tag.includes("3D")) return <Globe className="w-4 h-4" />;
    if (tag.includes("CRYPTO")) return <Database className="w-4 h-4" />;
    if (tag.includes("CREATIVE")) return <PenTool className="w-4 h-4" />;
    return <Cpu className="w-4 h-4" />;
  };

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl bg-void border border-white/10 transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-1">
      <div className="relative h-[240px] w-full overflow-hidden">
         <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
         <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80" />
         
         <div className="absolute top-4 left-4 h-8 w-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
           {getIcon()}
         </div>
         <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[0.65rem] font-bold text-white tracking-widest border border-white/20">
           {tag}
         </div>
      </div>
      <div className="flex flex-col flex-1 p-6 bg-void relative z-10">
        <h3 className="text-xl font-bold text-white mb-3 font-display">{title}</h3>
        <p className="text-sm text-white/60 mb-6 flex-1 line-clamp-3 leading-relaxed">{description}</p>
        <Button 
          variant="outline" 
          className="w-full bg-[#111] hover:bg-white hover:text-black text-white border-white/10 transition-all duration-300 group-hover:border-white/30"
          onClick={() => alert(`Added ${title} to cart`)}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </article>
  );
}

export function ServicesPage() { 
  return (
    <>
      <PageHero label="PROVIDENCE / SERVICES" title="TECHNOLOGY, BUILT AROUND YOU." description="Intelligent systems, digital products and immersive technology designed around real-world ambition." image={imagery.heroAi}/>
      {serviceGroups.map((group, gi) => (
        <section className={`catalog-section ${gi % 2 ? "light-section" : "dark-section"}`} key={group.title}>
          <SectionIntro label={`0${gi + 1} / CAPABILITY`} title={group.title} copy="Purpose-built systems with technical depth, strategic clarity and production-grade execution." light={gi % 2 === 1}/>
          <div className="catalog-grid">
            {group.items.map((item, i) => (
              <ServiceCard 
                key={item} 
                title={item.toUpperCase()} 
                description={`Focused ${item.toLowerCase()} engineered for performance, scale and meaningful outcomes.`} 
                image={group.image} 
                meta={`${String(i + 1).padStart(2,"0")} / ${group.title}`} 
                tag={group.title.split(" ")[0]}
              />
            ))}
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
      <PageHero label="PROVIDENCE / EDUCATION" title="LEARN THE TECHNOLOGY THAT BUILDS THE FUTURE." description="Professional learning pathways for builders, researchers and digital creators." image={imagery.heroResearcher}/>
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
      <DonateBand/>
    </>
  ); 
}

export function ResearchPage() { return <><PageHero label="PROVIDENCE RESEARCH" title="EXPLORING WHAT COMES NEXT." description="A research practice focused on useful intelligence, emerging computation and the systems shaping tomorrow." image={imagery.researchLab}/><section className="section lab-section"><SectionIntro label="RESEARCH AREAS / ACTIVE" title="QUESTIONS WORTH BUILDING TOWARD." copy="We investigate intelligence across models, perception, autonomous systems, spatial computing and automation."/><div className="research-grid">{researchAreas.map((item, i) => <TiltCard key={item} title={item.toUpperCase()} description="Exploration at the intersection of research rigor, technical experimentation and applied impact." image={[imagery.heroModels, imagery.generativeIntelligence, imagery.machineLearning, imagery.computerVision, imagery.agentCore, imagery.heroFuture, imagery.gameWorld, imagery.automation, imagery.blockchainNetwork][i] ?? imagery.researchLab} meta={`RESEARCH FIELD / ${String(i + 1).padStart(2,"0")}`} to="/research"/>)}</div></section><DonateBand/></>; }

export function AboutPage() { 
  return (
    <>
      <PageHero label="PROVIDENCE / ABOUT" title="BUILT FOR WHAT COMES NEXT." description="An AI society and technology company building intelligent systems, digital products, education and immersive technology." image={imagery.heroAi}/>
      <section className="manifesto light-section">
        <p className="eyebrow">OUR POSITION</p>
        <h2>WE BUILD TECHNOLOGY.<br/>WE STUDY INTELLIGENCE.<br/>WE SHARE WHAT WE LEARN.</h2>
        <div className="manifesto-copy">
          <p>Providence brings research, engineering, digital innovation, immersive experience and education into one technology ecosystem.</p>
          <p>Our work spans AI models, intelligent systems, software, 3D computing, gaming technology and professional learning.</p>
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
