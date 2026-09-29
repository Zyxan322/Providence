import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VisionBlock } from "@/components/providence/home";
import { DonateBand, PageHero, SectionIntro, TiltCard } from "@/components/providence/site";
import { coreAreas, imagery } from "@/lib/providence-data";

export const Route = createFileRoute("/vision")({
  head: () => ({ meta: [
    { title: "Our Vision — Providence" },
    { name: "description", content: "Providence's vision: an ecosystem where AI, software, immersive tech, gaming, blockchain, research and education shape digital innovation." },
    { property: "og:title", content: "Our Vision — Providence" },
    { property: "og:description", content: "Build intelligent systems. Create meaningful technology. Educate the next generation." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: VisionPage,
});

function VisionPage() {
  return <>
    <PageHero label="PROVIDENCE / VISION" title="OUR VISION." description="Build intelligent systems. Create meaningful technology. Educate the next generation." image={imagery.heroWoman}/>
    <section className="dark-section py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(15,15,18,0.9),rgba(22,28,35,0.8))] p-6 md:p-8 lg:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <p className="eyebrow text-white/70">OUR PURPOSE</p>
              <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-[-0.07em] text-white">
                WE BUILD GIRLS INTO<br />SKILLFUL TECHNOLOGY<br />LEADERS.
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-white/75">
              <p>
                Providence exists to help girls become confident, capable, and future-ready in technology. We believe every young learner deserves access to the skills, tools, and opportunities that can change her trajectory.
              </p>
              <p>
                We focus on practical learning, real-world confidence, and digital opportunities that help girls move from learning to leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <VisionBlock/>
    <section className="section dark-section"><SectionIntro label="THE ECOSYSTEM" title="ONE CONNECTED FUTURE." copy="Every discipline strengthens the others — research informs engineering, engineering powers education."/><div className="card-grid">{coreAreas.map((c, i) => <TiltCard key={c.title} {...c} meta={`PILLAR / 0${i + 1}`} actionLabel="Explore"/>)}</div><div className="section-action"><Button asChild variant="premium" size="xl"><Link to="/3d">Experience Providence 3D <ArrowRight/></Link></Button></div></section>
    <DonateBand/>
  </>;
}
