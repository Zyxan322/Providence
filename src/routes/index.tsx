import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/providence/home";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Providence — We Build Intelligence" },
    { name: "description", content: "Providence is an AI society and technology company building models, intelligent systems, digital products and immersive 3D experiences." },
    { property: "og:title", content: "Providence — We Build Intelligence" },
    { property: "og:description", content: "AI models, intelligent systems, digital technology, education and immersive 3D." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <HomePage />;
}
