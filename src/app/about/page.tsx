import type { Metadata } from "next";
import { Award, Check, Target } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { FounderPhoto } from "@/components/founder-photo";
import { coachChecks } from "@/lib/podio-content";

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

        {/* ── MEET THE FOUNDER ────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-24 border-b border-[#e5d9f0]">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
            {/* Interactive Crossfade Founder Photo */}
            <div className="lg:sticky lg:top-24 flex justify-center">
              <FounderPhoto />
            </div>

            {/* Founder Biography & Story */}
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
                Leadership
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
                Meet the Founder
              </h2>

              <div className="mt-6 space-y-4 text-base leading-7 text-[#526274] sm:text-lg">
                <p>
                  <strong className="font-extrabold text-[#07101f]">Goodnews Chukwunyem</strong> is the Founder of Podio, an international speaker, media and communications expert, storyteller and public speaking coach passionate about helping young people find the confidence to express themselves.
                </p>
                <p>
                  With a background in Law and a Master’s degree in Media and Communications from the University of Roehampton, London, Goodnews has built a career around communication, storytelling, digital media and social impact. Her work has taken her to international platforms, including the United Nations World Summit for Social Development in Doha, where she represented Silver Lining for the Needy Initiative.
                </p>
              </div>

              {/* Why Podio Sub-Section */}
              <div className="mt-10 border-t border-[#e5d9f0] pt-8">
                <h3 className="text-2xl font-black uppercase tracking-[0.02em] text-[#6B2D8B]">
                  Why Podio?
                </h3>
                <div className="mt-4 space-y-4 text-base leading-7 text-[#526274]">
                  <p>
                    The idea for Podio came from years of working with both adults and children.
                  </p>
                  <p>
                    In conversations with adults, Goodnews often heard the same thing: their fear of public speaking and difficulty expressing themselves had started when they were children. At the same time, working with children, she saw firsthand how many struggled to put their thoughts, ideas and words together.
                  </p>
                  <div className="my-6 rounded-xl border border-[#e5d9f0] bg-[#fdf8ff] p-5 sm:p-6">
                    <p className="text-lg font-bold leading-snug text-[#07101f] sm:text-xl">
                      And she began to ask herself: What if we can help children find their voice before fear does?
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-[#526274]">
                      What if children could learn to communicate with confidence early enough, so they grow into adults who are not afraid to speak, share ideas and be heard?
                    </p>
                    <p className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-[#6B2D8B]">
                      That question became Podio.
                    </p>
                  </div>
                  <p>
                    Through its books, programs, workshops and future digital platform, Podio is helping children build the communication and confidence skills they need for life.
                  </p>
                  <p>
                    Because every adult was once a child. And if we can help children find their voice today, we can help build a generation of confident communicators tomorrow.
                  </p>
                </div>

                {/* Quote Callout */}
                <div className="mt-8 rounded-xl bg-[#6B2D8B] p-6 text-white shadow-md">
                  <blockquote className="text-xl font-black italic tracking-wide text-[#ffbf47] sm:text-2xl">
                    “Every child has a voice. Podio exists to help them discover its power.”
                  </blockquote>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-[#f5e8ff]">
                    — Goodnews Chukwunyem, Founder of Podio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MISSION & VISION ────────────────────────────────── */}
        <section className="bg-[#faf7fc] py-16 lg:py-20">
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
        <section className="bg-white py-16 lg:py-20 border-t border-[#e5d9f0]">
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
