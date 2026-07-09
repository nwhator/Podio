import {
  ArrowUpRight,
  Award,
  BookOpen,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MicVocal,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Video,
} from "lucide-react";
import Image from "next/image";
import { ContactForm } from "@/components/podio-forms";
import {
  coachChecks,
  faqs,
  features,
  programmes,
  safeguarding,
} from "@/lib/podio-content";

const heroImage =
  "https://media.base44.com/images/public/6a213dc397307c380a637125/812a0c1d8_generated_image.png";

const featureIcons = [Video, Target, BookOpen, Award, MessageCircle, Users];

const navCards = [
  {
    title: "About",
    description:
      "Learn about Podio and our mission to build confident young communicators.",
    href: "#about",
    icon: Users,
  },
  {
    title: "Programmes",
    description:
      "Explore our learning pathways for children aged 8–18.",
    href: "#programmes",
    icon: BookOpen,
  },
  {
    title: "Pricing",
    description:
      "View our programme fees and flexible monthly payment options.",
    href: "#pricing",
    icon: Award,
  },
  {
    title: "FAQs",
    description:
      "Find answers to the questions parents ask most.",
    href: "#faq",
    icon: MessageCircle,
  },
  {
    title: "Contact",
    description:
      "Get in touch to book a free discovery session.",
    href: "#contact",
    icon: Mail,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7fc] text-[#07101f]">
      {/* ── HEADER ──────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[#e5d9f0] bg-white/92 backdrop-blur">
        <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-3 lg:px-8">
          <a
            className="group flex items-center gap-3"
            href="#top"
            aria-label="Podio home"
          >
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-[#6B2D8B] text-white">
              <Image
                alt=""
                aria-hidden
                className="h-full w-full"
                height={40}
                src="/podio-icon.svg"
                width={40}
              />
            </span>
            <span className="text-base font-black uppercase tracking-[0.08em] sm:text-lg">
              Podio
            </span>
          </a>
          <div className="hidden items-center gap-8 text-xs font-black uppercase tracking-[0.16em] text-[#526274] lg:flex">
            <a className="transition hover:text-[#6B2D8B]" href="#about">
              About
            </a>
            <a className="transition hover:text-[#6B2D8B]" href="#programmes">
              Programmes
            </a>
            <a className="transition hover:text-[#6B2D8B]" href="#pricing">
              Pricing
            </a>
            <a className="transition hover:text-[#6B2D8B]" href="#faq">
              FAQs
            </a>
            <a className="transition hover:text-[#6B2D8B]" href="#contact">
              Contact
            </a>
          </div>
          <a
            className="hidden h-10 items-center justify-center gap-2 rounded-md bg-[#6B2D8B] px-5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#4e1f68] sm:inline-flex"
            href="#contact"
          >
            Book a session
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </a>
          <a
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[#e5d9f0] text-[#07101f] lg:hidden"
            href="#footer-links"
            aria-label="Open footer navigation"
          >
            <Menu aria-hidden className="h-5 w-5" />
          </a>
        </nav>
      </header>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section
        id="top"
        className="relative isolate overflow-hidden bg-[#3d1158] text-white"
      >
        {/* Hero image — high opacity so children's faces are clearly visible */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-90"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        {/* Subtle gradient — only enough to keep left-side text readable */}
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
                <a
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-xs font-black uppercase tracking-[0.12em] text-[#07101f] transition hover:bg-[#ffbf47]"
                  href="#contact"
                >
                  Book free session
                  <ArrowUpRight aria-hidden className="h-4 w-4" />
                </a>
                <a
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white/45 px-6 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
                  href="#pricing"
                >
                  View pricing
                </a>
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
                <p className="text-2xl font-black text-[#ffbf47] sm:text-3xl">{stat}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#e8d4f5]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORE NAV CARDS ───────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="text-center">
            <SectionKicker>Explore Podio</SectionKicker>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
              Everything you need to know.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#526274] sm:text-lg">
              Use the links below to explore Podio — from our story and
              programmes to pricing and getting in touch.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {navCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.href}
                  className="group flex flex-col gap-4 rounded-xl border border-[#e5d9f0] bg-[#fdf8ff] p-6 transition hover:border-[#6B2D8B] hover:shadow-[0_8px_32px_rgba(107,45,139,0.12)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#6B2D8B] text-white transition group-hover:bg-[#4e1f68]">
                    <Icon aria-hidden className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-[#07101f]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#526274]">
                      {card.description}
                    </p>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-black uppercase tracking-[0.14em] text-[#6B2D8B]">
                    Explore
                    <ArrowUpRight aria-hidden className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────── */}
      <section id="about" className="overflow-hidden bg-[#faf7fc] py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="relative min-h-[320px] overflow-hidden rounded-xl bg-[#6B2D8B] lg:min-h-[420px]">
            <div
              aria-hidden
              className="absolute inset-0 bg-cover bg-center opacity-80"
              style={{ backgroundImage: `url('${heroImage}')` }}
            />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(50,10,75,0.90),transparent)] p-6 text-white">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#ffbf47]">
                Podio
              </p>
              <p className="mt-2 max-w-md text-2xl font-black">
                Confidence is taught through practice, not pressure.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <SectionKicker>About the academy</SectionKicker>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
              Helping children find their voice before fear finds them.
            </h2>
            <p className="mt-6 text-base leading-7 text-[#526274] sm:text-lg">
              Many adults struggle with confidence and communication because
              these skills were never intentionally developed during childhood.
              Podio exists to change that story.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <InfoPanel
                icon={Target}
                title="Our Mission"
                copy="Helping children become confident communicators, courageous thinkers, and future leaders."
              />
              <InfoPanel
                icon={Award}
                title="Our Vision"
                copy="To build the UK's leading children's communication ecosystem through education, storytelling, confidence building, and public speaking."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMMES / FEATURES ───────────────────────────────── */}
      <section id="programmes" className="bg-[#6B2D8B] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <SectionKicker tone="dark">What makes us different</SectionKicker>
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
              const Icon = featureIcons[index] ?? Sparkles;
              return (
                <div className="bg-[#6B2D8B] p-6" key={feature}>
                  <Icon aria-hidden className="h-8 w-8 text-[#ffbf47]" />
                  <h3 className="mt-6 text-xl font-black">{feature}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COACH ───────────────────────────────────────────────── */}
      <section className="bg-[#f5edfb] py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionKicker>Meet your coach</SectionKicker>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
              Trained, checked, and child-focused.
            </h2>
          </div>
          <div>
            <p className="text-base leading-7 text-[#526274] sm:text-lg">
              Every Podio coach is a trained communication specialist
              with safeguarding certification and a passion for helping children
              thrive.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
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
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────── */}
      <section id="pricing" className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <SectionKicker>Podio pricing</SectionKicker>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
                Find the perfect Podio programme for your child.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#526274] sm:text-lg lg:ml-auto">
              Every child has a unique voice. Whether they are taking their
              first steps toward confidence or preparing to become a future
              leader, Podio has a programme designed to help them grow.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {programmes.map((programme, index) => (
              <article
                className={
                  index === 1
                    ? "rounded-xl border-2 border-[#6B2D8B] bg-[#fdf8ff] p-6 shadow-[0_24px_60px_rgba(107,45,139,0.18)]"
                    : "rounded-xl border border-[#e5d9f0] bg-white p-6"
                }
                key={programme.name}
              >
                {index === 1 && (
                  <p className="mb-4 inline-flex items-center rounded-full bg-[#6B2D8B] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white">
                    Most popular
                  </p>
                )}
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#6B2D8B]">
                  {programme.eyebrow}
                </p>
                <h3 className="mt-4 text-3xl font-black uppercase leading-none tracking-[0] text-[#07101f]">
                  {programme.name}
                </h3>
                <p className="mt-5 leading-7 text-[#526274] lg:min-h-40">
                  {programme.description}
                </p>
                <dl className="mt-6 space-y-3 border-y border-[#e5d9f0] py-5">
                  <PriceLine label="Duration" value={programme.duration} />
                  <PriceLine label="Pay in full" value={programme.fullPrice} />
                  <PriceLine
                    label="Monthly option"
                    value={programme.monthlyPrice}
                  />
                </dl>
                <p className="mt-6 text-sm font-bold leading-6 text-[#07101f]">
                  Best for:{" "}
                  <span className="font-semibold text-[#526274]">
                    {programme.bestFor}
                  </span>
                </p>
                <a
                  className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#6B2D8B] px-5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#4e1f68]"
                  href="#contact"
                >
                  Enrol now
                  <ArrowUpRight aria-hidden className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section id="faq" className="bg-[#faf7fc] py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <SectionKicker>FAQs</SectionKicker>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
              Questions parents often ask.
            </h2>
          </div>
          <div className="divide-y divide-[#e5d9f0] rounded-xl border border-[#e5d9f0] bg-white">
            {faqs.map((faq, index) => (
              <details className="group p-5 sm:p-6" key={faq.question} open={index === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <span>
                    <span className="mb-3 block text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xl font-black text-[#07101f] sm:text-2xl">
                      {faq.question}
                    </span>
                  </span>
                  <ChevronRight
                    aria-hidden
                    className="mt-1 h-5 w-5 shrink-0 transition group-open:rotate-90"
                  />
                </summary>
                <p className="mt-5 leading-7 text-[#526274]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────── */}
      <section id="contact" className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionKicker>Contact Podio</SectionKicker>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
              Book a discovery session or ask about a programme.
            </h2>
            <div className="mt-8 grid gap-4">
              <ContactLine icon={Phone} label="Phone / WhatsApp">
                +44 7498 502571
              </ContactLine>
              <ContactLine icon={Mail} label="Email">
                PodioForKids@gmail.com
              </ContactLine>
              <ContactLine icon={MapPin} label="Location">
                Online - United Kingdom
              </ContactLine>
              <ContactLine icon={Clock} label="Business Hours">
                Monday - Saturday, 9 AM - 8 PM
              </ContactLine>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ── SAFEGUARDING ────────────────────────────────────────── */}
      <section className="bg-[#6B2D8B] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <SectionKicker tone="dark">Safety and trust</SectionKicker>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] sm:text-5xl">
                Safeguarding at Podio.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#e8d4f5] sm:text-lg lg:ml-auto">
              The safety, wellbeing, and dignity of every child is our highest
              priority. A fuller safeguarding policy is available as its own
              page from the footer.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {safeguarding.slice(0, 3).map((item) => (
              <div
                className="rounded-xl border border-white/14 bg-white/[0.07] p-6"
                key={item.title}
              >
                <ShieldCheck aria-hidden className="h-8 w-8 text-[#ffbf47]" />
                <h3 className="mt-6 text-xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#e8d4f5]">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function SectionKicker({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={
        tone === "dark"
          ? "text-xs font-black uppercase tracking-[0.18em] text-[#ffbf47]"
          : "text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]"
      }
    >
      {children}
    </p>
  );
}

function InfoPanel({
  icon: Icon,
  title,
  copy,
}: {
  icon: typeof Target;
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-xl border border-[#e5d9f0] bg-[#fdf8ff] p-6">
      <Icon aria-hidden className="h-7 w-7 text-[#6B2D8B]" />
      <h3 className="mt-6 text-2xl font-black text-[#07101f]">{title}</h3>
      <p className="mt-3 leading-7 text-[#526274]">{copy}</p>
    </div>
  );
}

function PriceLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-sm font-bold text-[#526274]">{label}</dt>
      <dd className="text-right text-lg font-black text-[#07101f]">{value}</dd>
    </div>
  );
}

function ContactLine({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-[#e5d9f0] bg-[#fdf8ff] p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#6B2D8B] text-white">
        <Icon aria-hidden className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#526274]">
          {label}
        </p>
        <p className="mt-1 font-black text-[#07101f]">{children}</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#f5edfb]">
      <div className="mx-auto max-w-[1280px] px-5 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
              Ready to start?
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
              Let's help your child speak with confidence.
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#6B2D8B] px-7 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#4e1f68]"
              href="#contact"
            >
              Book free session
              <CalendarCheck aria-hidden className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div
          id="footer-links"
          className="mt-12 grid gap-8 border-t border-[#e5d9f0] pt-8 md:grid-cols-3"
        >
          <div>
            <p className="text-xl font-black uppercase tracking-[0.08em]">
              Podio
            </p>
            <p className="mt-3 max-w-sm leading-7 text-[#526274]">
              Helping children find their voice before fear finds them.
            </p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#526274]">
              Navigate
            </p>
            <div className="mt-4 grid gap-2 text-sm font-bold">
              <a href="#about">About</a>
              <a href="#programmes">Programmes</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQs</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#526274]">
              Parent information
            </p>
            <div className="mt-4 grid gap-2 text-sm font-bold">
              <a href="/safeguarding">Safeguarding</a>
              <a href="/terms">Terms and Conditions</a>
              <a href="/consent">Consent Form</a>
              <a href="mailto:PodioForKids@gmail.com">PodioForKids@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#e5d9f0] px-5 py-6 text-sm font-semibold text-[#526274] lg:px-8">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} Podio.</p>
          <p>Online - United Kingdom | +44 7498 502571</p>
        </div>
      </div>
    </footer>
  );
}
