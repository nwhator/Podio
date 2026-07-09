import type { Metadata } from "next";
import { ArrowUpRight, Award, BookOpen, MessageCircle, Target, Users, Video } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { features, programmes } from "@/lib/podio-content";

export const metadata: Metadata = {
  title: "Programmes | Podio",
  description:
    "Explore Podio's public speaking and communication programmes for children aged 8–18. Three learning pathways designed to build confidence step by step.",
};

const featureIcons = [Video, Target, BookOpen, Award, MessageCircle, Users];

export default function ProgrammesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#faf7fc] text-[#07101f]">
        <PageHero
          kicker="Our programmes"
          heading="A complete communication ecosystem."
          subtitle="Every session is built around practical speaking, supportive feedback, and repeatable confidence habits children can use at school, at home, and in future opportunities."
        />

        {/* ── WHAT'S INCLUDED ─────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
                  What's included
                </p>
                <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
                  What every Podio child gets.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-[#526274] sm:text-lg lg:ml-auto">
                Every programme tier includes the same core experience — the only
                difference is the level of challenge and the skills being developed.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = featureIcons[index] ?? Award;
                return (
                  <div
                    key={feature}
                    className="rounded-xl border border-[#e5d9f0] bg-[#fdf8ff] p-6"
                  >
                    <Icon aria-hidden className="h-8 w-8 text-[#6B2D8B]" />
                    <h3 className="mt-6 text-xl font-black text-[#07101f]">
                      {feature}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── LEARNING PATHWAYS ───────────────────────────────── */}
        <section className="bg-[#f5edfb] py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
                Learning pathways
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
                Choose your child's journey.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#526274] sm:text-lg">
                Each programme runs for 12 weeks in a small group of 6–8 children,
                with live online sessions led by a qualified coach.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {programmes.map((programme) => (
                <article
                  key={programme.name}
                  className="flex flex-col rounded-xl border border-[#e5d9f0] bg-white p-7"
                >
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#6B2D8B]">
                    {programme.eyebrow}
                  </p>
                  <h3 className="mt-4 text-3xl font-black uppercase leading-none tracking-[0] text-[#07101f]">
                    {programme.name}
                  </h3>
                  <p className="mt-5 flex-1 leading-7 text-[#526274]">
                    {programme.description}
                  </p>
                  <div className="mt-6 border-t border-[#e5d9f0] pt-5">
                    <p className="text-sm font-bold text-[#526274]">
                      Best for:{" "}
                      <span className="font-semibold">{programme.bestFor}</span>
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-sm font-bold text-[#526274]">Duration:</p>
                      <p className="font-black text-[#07101f]">{programme.duration}</p>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-sm font-bold text-[#526274]">From:</p>
                      <p className="font-black text-[#6B2D8B]">{programme.monthlyPrice}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/pricing"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#6B2D8B] px-8 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#4e1f68]"
              >
                View pricing and enrol
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ────────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
                The process
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
                Getting started is simple.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Book a free session",
                  desc: "Start with a no-obligation discovery session so your child can meet the coach and get a feel for Podio.",
                },
                {
                  step: "02",
                  title: "Choose a programme",
                  desc: "We'll recommend the right learning pathway based on your child's age, confidence level, and goals.",
                },
                {
                  step: "03",
                  title: "Join a small group",
                  desc: "Your child joins a group of 6–8 peers at a similar level, creating a safe space to practise and grow.",
                },
                {
                  step: "04",
                  title: "Watch them flourish",
                  desc: "Over 12 weeks, you'll see measurable growth in confidence, communication, and self-expression.",
                },
              ].map((item) => (
                <div key={item.step} className="rounded-xl border border-[#e5d9f0] bg-[#fdf8ff] p-6">
                  <p className="text-4xl font-black text-[#6B2D8B] opacity-40">{item.step}</p>
                  <h3 className="mt-4 text-xl font-black text-[#07101f]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#526274]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
