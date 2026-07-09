import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/podio-forms";

export const metadata: Metadata = {
  title: "Contact | Podio",
  description:
    "Get in touch with Podio to book a free discovery session, ask about our programmes, or enquire about school partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#faf7fc] text-[#07101f]">
        <PageHero
          kicker="Contact Podio"
          heading="Book a session or ask us anything."
          subtitle="We respond to all enquiries within 24 hours. Whether you want to book a free discovery session or just have a question, we'd love to hear from you."
        />

        {/* ── CONTACT GRID ────────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            {/* Contact details */}
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
                Get in touch
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
                We're here for you.
              </h2>
              <p className="mt-6 text-base leading-7 text-[#526274]">
                Whether you're ready to enrol or simply curious, our team is
                happy to answer any questions about our programmes, pricing, or
                approach.
              </p>

              <div className="mt-8 grid gap-4">
                <ContactLine icon={Phone} label="Phone / WhatsApp">
                  <a
                    href="tel:+447498502571"
                    className="font-black text-[#07101f] transition hover:text-[#6B2D8B]"
                  >
                    +44 7498 502571
                  </a>
                </ContactLine>
                <ContactLine icon={Mail} label="Email">
                  <a
                    href="mailto:PodioForKids@gmail.com"
                    className="font-black text-[#07101f] transition hover:text-[#6B2D8B]"
                  >
                    PodioForKids@gmail.com
                  </a>
                </ContactLine>
                <ContactLine icon={MapPin} label="Location">
                  <span className="font-black text-[#07101f]">
                    Online — United Kingdom
                  </span>
                </ContactLine>
                <ContactLine icon={Clock} label="Business Hours">
                  <span className="font-black text-[#07101f]">
                    Monday – Saturday, 9 AM – 8 PM
                  </span>
                </ContactLine>
              </div>

              {/* Free session callout */}
              <div className="mt-8 rounded-xl border border-[#e5d9f0] bg-[#fdf8ff] p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#6B2D8B]">
                  New to Podio?
                </p>
                <p className="mt-3 text-xl font-black text-[#07101f]">
                  Start with a free discovery session.
                </p>
                <p className="mt-3 text-sm leading-6 text-[#526274]">
                  Your child meets the coach, tries a few speaking activities, and
                  gets a feel for the Podio environment — with zero obligation.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
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
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
