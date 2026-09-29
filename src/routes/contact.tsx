import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/providence/catalog-pages";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Providence — AI Society & Technology Company" },
      { name: "description", content: "Contact Providence for AI services, educational guidance, and technology consultation." },
      { property: "og:title", content: "Contact Providence" },
      { property: "og:description", content: "Connect with Providence for AI services, digital projects, and learning opportunities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});
