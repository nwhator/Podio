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
  Mic2,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Video,
} from "lucide-react";
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#07101f]">
      <header className="sticky top-0 z-50 border-b border-[#d8e0ea] bg-white/92 backdrop-blur">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-8">
          <a
            className="group flex items-center gap-3"
            href="#top"
            aria-label="Podio Academy home"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#0b4fb3] text-white">
              <Mic2 aria-hidden className="h-5 w-5" />
            </span>
            <span className="text-lg font-black uppercase tracking-[0.08em]">
              Podio Academy
            </span>
          </a>
          <div className="hidden items-center gap-8 text-xs font-black uppercase tracking-[0.16em] text-[#526274] lg:flex">
            <a className="transition hover:text-[#0b4fb3]" href="#about">
              About
            </a>
            <a className="transition hover:text-[#0b4fb3]" href="#programmes">
              Programmes
            </a>
            <a className="transition hover:text-[#0b4fb3]" href="#pricing">
              Pricing
            </a>
            <a className="transition hover:text-[#0b4fb3]" href="#faq">
              FAQ
            </a>
            <a className="transition hover:text-[#0b4fb3]" href="#contact">
              Contact
            </a>
          </div>
          <a
            className="hidden h-11 items-center justify-center gap-2 rounded-md bg-[#07101f] px-5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#0b4fb3] sm:inline-flex"
            href="#contact"
          >
            Book a session
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </a>
          <a
            className="flex h-11 w-11 items-center justify-center rounded-md border border-[#cbd6e3] text-[#07101f] lg:hidden"
            href="#footer-links"
            aria-label="Open footer navigation"
          >
            <Menu aria-hidden className="h-5 w-5" />
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="relative isolate overflow-hidden bg-[#0b4fb3] text-white"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-36"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,16,31,0.92),rgba(11,79,179,0.74)_48%,rgba(7,16,31,0.2))]" />
        <div className="mx-auto grid min-h-[88vh] max-w-[1440px] content-between px-5 py-10 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pt-10">
            <p className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#eaf4ff]">
              <Sparkles aria-hidden className="h-4 w-4" />
              Online coaching for ages 8-18
            </p>
            <p className="max-w-sm text-sm font-semibold leading-6 text-[#d8e8ff]">
              Communication, confidence, storytelling, public speaking, and
              leadership for growing voices.
            </p>
          </div>

          <div className="py-14 sm:py-20">
            <h1 className="max-w-6xl text-[clamp(4rem,13vw,11rem)] font-black uppercase leading-[0.86] tracking-[0]">
              Helping Children
              <span className="block text-right text-[#ffbf47]">
                Find Their Voice
              </span>
            </h1>
            <div className="mt-10 grid gap-6 lg:grid-cols-[0.65fr_0.35fr] lg:items-end">
              <p className="max-w-3xl text-xl font-medium leading-8 text-[#edf5ff] sm:text-2xl">
                Podio Academy helps children become confident communicators,
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

          <div className="grid gap-4 border-t border-white/22 py-6 sm:grid-cols-3">
            {[
              ["12", "weeks per programme"],
              ["6-8", "children per small group"],
              ["UK", "live online academy"],
            ].map(([stat, label]) => (
              <div key={label}>
                <p className="text-4xl font-black text-[#ffbf47]">{stat}</p>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.12em] text-[#d8e8ff]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="overflow-hidden bg-white py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="relative min-h-[440px] overflow-hidden rounded-md bg-[#07101f]">
            <div
              aria-hidden
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${heroImage}')` }}
            />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(7,16,31,0.9),transparent)] p-6 text-white">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#ffbf47]">
                Podio Academy
              </p>
              <p className="mt-2 max-w-md text-2xl font-black">
                Confidence is taught through practice, not pressure.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <SectionKicker>About the academy</SectionKicker>
            <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-6xl">
              Helping children find their voice before fear finds them.
            </h2>
            <p className="mt-8 text-lg leading-8 text-[#526274]">
              Many adults struggle with confidence and communication because
              these skills were never intentionally developed during childhood.
              Podio Academy exists to change that story.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
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

      <section id="programmes" className="bg-[#07101f] py-24 text-white">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <SectionKicker tone="dark">What makes us different</SectionKicker>
              <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-[0] sm:text-6xl">
                A complete communication ecosystem.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#d9e8f8] lg:ml-auto">
              Every session is built around practical speaking, supportive
              feedback, and repeatable confidence habits children can use at
              school, at home, and in future opportunities.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-white/14 bg-white/14 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = featureIcons[index] ?? Sparkles;

              return (
                <div className="bg-[#07101f] p-7" key={feature}>
                  <Icon aria-hidden className="h-8 w-8 text-[#ffbf47]" />
                  <h3 className="mt-8 text-2xl font-black">{feature}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf2fb] py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionKicker>Meet your coach</SectionKicker>
            <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-6xl">
              Trained, checked, and child-focused.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-[#526274]">
              Every Podio Academy coach is a trained communication specialist
              with safeguarding certification and a passion for helping children
              thrive.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {coachChecks.map((item) => (
                <div
                  className="flex min-h-20 items-start gap-4 rounded-md border border-[#cdd9e7] bg-white p-5"
                  key={item}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#0b4fb3] text-white">
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

      <section id="pricing" className="bg-white py-24">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <SectionKicker>Podio pricing</SectionKicker>
              <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-6xl">
                Find the perfect Podio programme for your child.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#526274] lg:ml-auto">
              Every child has a unique voice. Whether they are taking their
              first steps toward confidence or preparing to become a future
              leader, Podio Academy has a programme designed to help them grow.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {programmes.map((programme, index) => (
              <article
                className={
                  index === 1
                    ? "rounded-md border-2 border-[#0b4fb3] bg-[#f7fbff] p-7 shadow-[0_24px_60px_rgba(11,79,179,0.16)]"
                    : "rounded-md border border-[#d8e0ea] bg-white p-7"
                }
                key={programme.name}
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#0b4fb3]">
                  {programme.eyebrow}
                </p>
                <h3 className="mt-5 text-4xl font-black uppercase leading-none tracking-[0] text-[#07101f]">
                  {programme.name}
                </h3>
                <p className="mt-6 min-h-40 leading-7 text-[#526274]">
                  {programme.description}
                </p>
                <dl className="mt-8 space-y-4 border-y border-[#d8e0ea] py-6">
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
                  className={
                    index === 1
                      ? "mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#0b4fb3] px-5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#083f8f]"
                      : "mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#07101f] px-5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#0b4fb3]"
                  }
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

      <section id="faq" className="bg-[#f4f7fb] py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <SectionKicker>FAQ</SectionKicker>
            <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-6xl">
              Questions parents often ask.
            </h2>
          </div>
          <div className="divide-y divide-[#d8e0ea] rounded-md border border-[#d8e0ea] bg-white">
            {faqs.map((faq, index) => (
              <details className="group p-6" key={faq.question} open={index === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <span>
                    <span className="mb-3 block text-xs font-black uppercase tracking-[0.18em] text-[#0b4fb3]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-2xl font-black text-[#07101f]">
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

      <section id="contact" className="bg-white py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionKicker>Contact Podio Academy</SectionKicker>
            <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-6xl">
              Book a discovery session or ask about a programme.
            </h2>
            <div className="mt-10 grid gap-4">
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

      <section className="bg-[#07101f] py-24 text-white">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <SectionKicker tone="dark">Safety and trust</SectionKicker>
              <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-[0] sm:text-6xl">
                Safeguarding at Podio Academy.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#d9e8f8] lg:ml-auto">
              The safety, wellbeing, and dignity of every child is our highest
              priority. A fuller safeguarding policy is available as its own
              page from the footer.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {safeguarding.slice(0, 3).map((item) => (
              <div
                className="rounded-md border border-white/14 bg-white/[0.07] p-7"
                key={item.title}
              >
                <ShieldCheck aria-hidden className="h-8 w-8 text-[#ffbf47]" />
                <h3 className="mt-8 text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#d9e8f8]">{item.copy}</p>
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
          : "text-xs font-black uppercase tracking-[0.18em] text-[#0b4fb3]"
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
    <div className="rounded-md border border-[#d8e0ea] bg-[#f7fbff] p-6">
      <Icon aria-hidden className="h-7 w-7 text-[#0b4fb3]" />
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
    <div className="flex gap-4 rounded-md border border-[#d8e0ea] bg-[#f7fbff] p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#0b4fb3] text-white">
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
    <footer className="bg-[#eaf2fb]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b4fb3]">
              Ready to start?
            </p>
            <h2 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-6xl">
              Let's help your child speak with confidence.
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#0b4fb3] px-7 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#07101f]"
              href="#contact"
            >
              Book free session
              <CalendarCheck aria-hidden className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div
          id="footer-links"
          className="mt-16 grid gap-8 border-t border-[#cbd6e3] pt-10 md:grid-cols-3"
        >
          <div>
            <p className="text-xl font-black uppercase tracking-[0.08em]">
              Podio Academy
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
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
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
      <div className="border-t border-[#cbd6e3] px-5 py-6 text-sm font-semibold text-[#526274] lg:px-8">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} Podio Academy.</p>
          <p>Online - United Kingdom | +44 7498 502571</p>
        </div>
      </div>
    </footer>
  );
}
