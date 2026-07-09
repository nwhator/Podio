import type { Metadata } from "next";
import { Award, Check, Target } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { coachChecks, safeguarding } from "@/lib/podio-content";

export const metadata: Metadata = {
  title: "About | Podio",
  description:
    "Learn about Podio's mission to help children aged 8–18 build confidence, find their voice, and become future leaders through live online coaching.",
};

const heroImage =
  "https://media.base44.com/images/public/6a213dc397307c380a637125/812a0c1d8_generated_image.png";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#faf7fc] text-[#07101f]">
        <PageHero
          kicker="About Podio"
          heading="Building confident communicators."
          subtitle="Many adults struggle with confidence and communication because these skills were never intentionally developed during childhood. Podio exists to change that story."
        />

        {/* ── MISSION & VISION ────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1280px] gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="relative min-h-[320px] overflow-hidden rounded-xl bg-[#6B2D8B] lg:min-h-[440px]">
              <div
                aria-hidden
                className="absolute inset-0 bg-cover bg-center opacity-82"
                style={{ backgroundImage: `url('${heroImage}')` }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(50,10,75,0.94),transparent)] p-6 text-white">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#ffbf47]">
                  Our belief
                </p>
                <p className="mt-2 max-w-md text-2xl font-black">
                  Confidence is taught through practice, not pressure.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
                Why we exist
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
                Every child deserves a confident voice.
              </h2>
              <p className="mt-6 text-base leading-7 text-[#526274] sm:text-lg">
                Public speaking fear is one of the most common anxieties among
                adults — and it almost always starts in childhood. At Podio, we
                intervene early, building the habits, resilience, and communication
                skills that last a lifetime.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[#e5d9f0] bg-[#fdf8ff] p-6">
                  <Target aria-hidden className="h-7 w-7 text-[#6B2D8B]" />
                  <h3 className="mt-6 text-2xl font-black text-[#07101f]">
                    Our Mission
                  </h3>
                  <p className="mt-3 leading-7 text-[#526274]">
                    Helping children become confident communicators, courageous
                    thinkers, and future leaders.
                  </p>
                </div>
                <div className="rounded-xl border border-[#e5d9f0] bg-[#fdf8ff] p-6">
                  <Award aria-hidden className="h-7 w-7 text-[#6B2D8B]" />
                  <h3 className="mt-6 text-2xl font-black text-[#07101f]">
                    Our Vision
                  </h3>
                  <p className="mt-3 leading-7 text-[#526274]">
                    To build the UK's leading children's communication ecosystem
                    through education, storytelling, confidence building, and
                    public speaking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE PODIO APPROACH ─────────────────────────────── */}
        <section className="bg-[#faf7fc] py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
                How we work
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
                Small groups. Big results.
              </h2>
              <p className="mt-6 text-base leading-7 text-[#526274] sm:text-lg">
                Every Podio programme runs for 12 weeks with a group of just 6–8
                children. This small-group format means every child gets individual
                attention, plenty of speaking time, and a safe space to grow.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                {
                  stat: "12",
                  label: "Weeks per programme",
                  desc: "A structured 12-week journey with clear milestones and weekly challenges.",
                },
                {
                  stat: "6–8",
                  label: "Children per group",
                  desc: "Small enough for individual attention, large enough for dynamic group practice.",
                },
                {
                  stat: "100%",
                  label: "Live and online",
                  desc: "All sessions are live, interactive, and accessible from anywhere in the UK.",
                },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="rounded-xl border border-[#e5d9f0] bg-white p-7 text-center"
                >
                  <p className="text-5xl font-black text-[#6B2D8B]">{item.stat}</p>
                  <p className="mt-2 text-sm font-black uppercase tracking-[0.1em] text-[#07101f]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#526274]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COACH ──────────────────────────────────────────── */}
        <section className="bg-[#f5edfb] py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1280px] gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
                Meet your coach
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
                Trained, checked, and child‑focused.
              </h2>
              <p className="mt-6 text-base leading-7 text-[#526274]">
                Every Podio coach is a trained communication specialist with
                safeguarding certification and a genuine passion for helping
                children thrive. Your child is always in safe, qualified hands.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:items-start">
              {coachChecks.map((item) => (
                <div
                  className="flex min-h-20 items-start gap-4 rounded-xl border border-[#e5d9f0] bg-white p-5"
                  key={item}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#6B2D8B] text-white">
                    <Check aria-hidden className="h-4 w-4" />
                  </span>
                  <span className="font-bold leading-7 text-[#07101f]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SAFEGUARDING BANNER ────────────────────────────── */}
        <section className="bg-[#07101f] px-5 py-14 text-white lg:px-8">
          <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffbf47]">
                Child safety
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase leading-none">
                Our safeguarding commitment.
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-[#8899a8]">
                The safety, wellbeing, and dignity of every child at Podio is
                our absolute priority. Read our full safeguarding policy.
              </p>
            </div>
            <Link
              href="/safeguarding"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg border border-white/25 px-6 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
            >
              Read our policy
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
