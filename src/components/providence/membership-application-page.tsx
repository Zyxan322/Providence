import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { imagery } from "@/lib/providence-data";
import { DonateBand, PageHero, ScrollTypingText } from "./site";

export function MembershipApplicationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        label="PROVIDENCE / MEMBERSHIP"
        title="BECOME A MEMBER OF PROVIDENCE."
        description="Bring your technical skills, experience and curiosity to a community building what comes next."
        image={imagery.educationLab}
      />

      <section className="dark-section py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="max-w-md">
            <p className="eyebrow text-white/70">MEMBERSHIP APPLICATION</p>
            <h2 className="mt-4 text-3xl font-bold text-white font-display md:text-4xl"><ScrollTypingText text="Your next chapter starts here." characters /></h2>
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              <ScrollTypingText text="Membership is for people with practical IT skills and at least two years of professional experience. Share your background and the skills you would bring to Providence." />
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-white/45">Required: IT skills and 2+ years of experience</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-white/65">Full name *</span>
                <input required name="fullName" autoComplete="name" placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-white/35 focus:outline-none" />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-white/65">Email *</span>
                <input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className="w-full rounded-lg border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-white/35 focus:outline-none" />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-white/65">Phone</span>
                <input type="tel" name="phone" autoComplete="tel" placeholder="Your phone number" className="w-full rounded-lg border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-white/35 focus:outline-none" />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-white/65">Years of IT experience *</span>
                <input required type="number" name="experienceYears" min="2" step="1" inputMode="numeric" placeholder="2 or more" className="w-full rounded-lg border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-white/35 focus:outline-none" />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-white/65">IT skill area *</span>
              <select required name="itSkills" defaultValue="" className="w-full rounded-lg border border-white/10 bg-black/25 px-4 py-3 text-sm text-white focus:border-white/35 focus:outline-none">
                <option value="" disabled className="text-black">Select your primary IT skill</option>
                <option className="text-black">Software Development</option>
                <option className="text-black">Web &amp; Mobile Development</option>
                <option className="text-black">AI &amp; Machine Learning</option>
                <option className="text-black">Data Science &amp; Analytics</option>
                <option className="text-black">Cloud Computing &amp; DevOps</option>
                <option className="text-black">Cybersecurity</option>
                <option className="text-black">Networking &amp; IT Support</option>
                <option className="text-black">Database Administration</option>
                <option className="text-black">UI/UX &amp; Graphic Design</option>
                <option className="text-black">Quality Assurance &amp; Testing</option>
                <option className="text-black">3D &amp; Immersive Technology</option>
                <option className="text-black">Other</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-white/65">Description</span>
              <textarea name="skillDescription" rows={4} placeholder="Describe your skills, tools and relevant experience" className="w-full resize-y rounded-lg border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-white/35 focus:outline-none" />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-white/65">LinkedIn or portfolio</span>
              <input type="url" name="portfolio" placeholder="https://" className="w-full rounded-lg border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-white/35 focus:outline-none" />
            </label>

            {submitted ? (
              <p role="status" className="flex items-start gap-2 text-sm leading-relaxed text-emerald-300">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                Your details passed the required checks. Application delivery is not connected yet.
              </p>
            ) : (
              <Button type="submit" variant="premium" size="lg" className="w-full sm:w-auto">
                Submit Application <ArrowRight className="ml-2" size={16} />
              </Button>
            )}
          </form>
        </div>
      </section>

      <DonateBand />
    </>
  );
}