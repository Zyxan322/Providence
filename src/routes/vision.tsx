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
    <VisionBlock/>
    <section className="section dark-section"><SectionIntro label="THE ECOSYSTEM" title="ONE CONNECTED FUTURE." copy="Every discipline strengthens the others — research informs engineering, engineering powers education."/><div className="card-grid">{coreAreas.map((c, i) => <TiltCard key={c.title} {...c} meta={`PILLAR / 0${i + 1}`} actionLabel="Explore"/>)}</div><div className="section-action"><Button asChild variant="premium" size="xl"><Link to="/3d">Experience Providence 3D <ArrowRight/></Link></Button></div></section>
    <DonateBand/>
  </>;
}
