import { createFileRoute } from "@tanstack/react-router";
import { MembershipApplicationPage } from "@/components/providence/membership-application-page";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join Providence — Membership Application" },
      { name: "description", content: "Apply to become a Providence member. IT skills and at least two years of experience are required." },
    ],
  }),
  component: MembershipApplicationPage,
});