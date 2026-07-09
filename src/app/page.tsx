import {
  ArrowUpRight,
  Award,
  BookOpen,
  ChevronRight,
  MessageCircle,
  MicVocal,
  Target,
  Users,
  Video,
} from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { faqs, features, programmes } from "@/lib/podio-content";

const heroImage =
  "https://media.base44.com/images/public/6a213dc397307c380a637125/812a0c1d8_generated_image.png";

const featureIcons = [Video, Target, BookOpen, Award, MessageCircle, Users];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#faf7fc] text-[#07101f]">

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="relative isolate overflow-hidden bg-[#3d1158] text-white">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-cover bg-center opacity-90"
            style={{ backgroundImage: `url('${heroImage}')` }}
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(40,8,65,0.72)_0%,rgba(40,8,65,0.38)_45%,rgba(40,8,65,0.04)_100%)]" />

          <div className="mx-auto grid min-h-[calc(100svh-65px)] max-w-[1280px] content-between px-5 py-4 lg:h-[calc(100svh-65px)] lg:max-h-[640px] lg:min-h-[540px] lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <p className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/12 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#f5e8ff]">
                <MicVocal aria-hidden className="h-4 w-4" />
                Online coaching for ages 8–18
              </p>
              <p className="hidden max-w-sm text-sm font-semibold leading-6 text-[#f5e8ff] md:block">
                Communication, confidence, storytelling, public speaking, and
                leadership for growing voices.
              </p>
            </div>

            <div className="py-6 sm:py-8">
              <h1 className="max-w-4xl text-[clamp(2.4rem,6.5vw,5.8rem)] font-black uppercase leading-[0.92] tracking-[-0.01em]">
                Helping Children Find Their Voice
                <span className="block text-[#ffbf47]">
                  Before Fear Finds Them.
                </span>
              </h1>
              <div className="mt-6 grid gap-4 lg:grid-cols-[0.65fr_0.35fr] lg:items-end">
                <p className="max-w-3xl text-base font-medium leading-7 text-[#f0e4ff] sm:text-lg">
                  Podio helps children become confident communicators,
                  courageous thinkers, and future leaders through live coaching
                  in a warm, structured online environment.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-xs font-black uppercase tracking-[0.12em] text-[#07101f] transition hover:bg-[#ffbf47]"
                  >
                    Book free session
                    <ArrowUpRight aria-hidden className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex h-12 items-center justify-center rounded-md border border-white/45 px-6 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
                  >
                    View pricing
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid gap-3 border-t border-white/20 py-3 sm:grid-cols-3">
              {[
                ["12", "weeks per programme"],
                ["6–8", "children per small group"],
                ["UK", "live online academy"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <p className="text-2xl font-black text-[#ffbf47] sm:text-3xl">
                    {stat}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#e8d4f5]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT TEASER ──────────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="relative min-h-[300px] overflow-hidden rounded-xl bg-[#6B2D8B] lg:min-h-[420px]">
              <div
                aria-hidden
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: `url('${heroImage}')` }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(50,10,75,0.92),transparent)] p-6 text-white">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#ffbf47]">
                  Podio
                </p>
                <p className="mt-2 text-2xl font-black">
                  Confidence is taught through practice, not pressure.
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
                About Podio
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
                Helping children find their voice before fear finds them.
              </h2>
              <p className="mt-6 text-base leading-7 text-[#526274] sm:text-lg">
                Many adults struggle with confidence and communication because
                these skills were never intentionally developed during childhood.
                Podio exists to change that story — by building the habits and
                confidence that last a lifetime.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[#e5d9f0] bg-[#fdf8ff] p-5">
                  <Target aria-hidden className="h-6 w-6 text-[#6B2D8B]" />
                  <h3 className="mt-4 text-lg font-black text-[#07101f]">Our Mission</h3>
                  <p className="mt-2 text-sm leading-6 text-[#526274]">
                    Helping children become confident communicators, courageous thinkers, and future leaders.
                  </p>
                </div>
                <div className="rounded-xl border border-[#e5d9f0] bg-[#fdf8ff] p-5">
                  <Award aria-hidden className="h-6 w-6 text-[#6B2D8B]" />
                  <h3 className="mt-4 text-lg font-black text-[#07101f]">Our Vision</h3>
                  <p className="mt-2 text-sm leading-6 text-[#526274]">
                    The UK's leading children's communication ecosystem through education and public speaking.
                  </p>
                </div>
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-[#6B2D8B] transition hover:gap-3"
              >
                Learn about us
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── PROGRAMMES TEASER ─────────────────────────────────── */}
        <section className="bg-[#6B2D8B] py-16 text-white lg:py-24">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffbf47]">
                  Our programmes
                </p>
                <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] sm:text-5xl">
                  A complete communication ecosystem.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-[#e8d4f5] sm:text-lg lg:ml-auto">
                Every session is built around practical speaking, supportive
                feedback, and repeatable confidence habits children can use at
                school, at home, and in future opportunities.
              </p>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/14 bg-white/14 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = featureIcons[index] ?? MicVocal;
                return (
                  <div className="bg-[#6B2D8B] p-6" key={feature}>
                    <Icon aria-hidden className="h-8 w-8 text-[#ffbf47]" />
                    <h3 className="mt-6 text-xl font-black">{feature}</h3>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <Link
                href="/programmes"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
              >
                Explore all programmes
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── PRICING PREVIEW ───────────────────────────────────── */}
        <section className="bg-[#faf7fc] py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
                Simple, clear pricing
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
                Choose the right programme.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#526274]">
                Every programme runs for 12 weeks. Pay in full or spread the
                cost monthly — whichever works for your family.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {programmes.map((programme, index) => (
                <div
                  key={programme.name}
                  className={
                    index === 1
                      ? "rounded-xl border-2 border-[#6B2D8B] bg-white p-6 shadow-[0_12px_40px_rgba(107,45,139,0.14)]"
                      : "rounded-xl border border-[#e5d9f0] bg-white p-6"
                  }
                >
                  {index === 1 && (
                    <span className="mb-3 inline-flex rounded-full bg-[#6B2D8B] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-2xl font-black uppercase text-[#07101f]">
                    {programme.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-[#526274]">{programme.eyebrow}</p>
                  <div className="mt-4 border-t border-[#e5d9f0] pt-4">
                    <p className="text-3xl font-black text-[#07101f]">
                      {programme.fullPrice}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#526274]">
                      or {programme.monthlyPrice}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-lg bg-[#6B2D8B] px-7 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#4e1f68]"
              >
                View full pricing and enrol
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ TEASER ────────────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1280px] gap-10 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:px-8">
            <div className="lg:sticky lg:top-24">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
                FAQs
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
                Questions parents often ask.
              </h2>
              <p className="mt-5 leading-7 text-[#526274]">
                Find answers to the most common parent questions, or get in
                touch and we'll reply within 24 hours.
              </p>
              <Link
                href="/faqs"
                className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-[#6B2D8B] transition hover:gap-3"
              >
                See all FAQs
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>

            <div className="divide-y divide-[#e5d9f0] rounded-xl border border-[#e5d9f0] bg-[#fdf8ff]">
              {faqs.slice(0, 3).map((faq, index) => (
                <details
                  className="group p-5 sm:p-6"
                  key={faq.question}
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                    <span className="text-lg font-black text-[#07101f]">
                      {faq.question}
                    </span>
                    <ChevronRight
                      aria-hidden
                      className="mt-1 h-5 w-5 shrink-0 text-[#6B2D8B] transition group-open:rotate-90"
                    />
                  </summary>
                  <p className="mt-4 leading-7 text-[#526274]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
