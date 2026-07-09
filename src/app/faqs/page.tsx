import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { faqs } from "@/lib/podio-content";

export const metadata: Metadata = {
  title: "FAQs | Podio",
  description:
    "Answers to the most common questions from parents about Podio's online coaching programmes for children aged 8–18.",
};

export default function FAQsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#faf7fc] text-[#07101f]">
        <PageHero
          kicker="FAQs"
          heading="Questions parents often ask."
          subtitle="Find answers to the most common questions below. If you don't see yours, we'd love to hear from you."
        />

        {/* ── ALL FAQS ────────────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-5 lg:grid-cols-[0.65fr_1.35fr] lg:px-8">
            {/* Sticky sidebar */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
                Have more questions?
              </p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f]">
                We're happy to help.
              </h2>
              <p className="mt-5 leading-7 text-[#526274]">
                If you can't find the answer you're looking for, get in touch
                and we'll get back to you within 24 hours.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-lg bg-[#6B2D8B] px-5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#4e1f68]"
              >
                Contact us
              </Link>
            </div>

            {/* FAQ accordion */}
            <div className="divide-y divide-[#e5d9f0] rounded-xl border border-[#e5d9f0] bg-[#fdf8ff]">
              {faqs.map((faq, index) => (
                <details
                  className="group p-5 sm:p-6"
                  key={faq.question}
                  open={index === 0}
                >
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
                      className="mt-1 h-5 w-5 shrink-0 text-[#6B2D8B] transition group-open:rotate-90"
                    />
                  </summary>
                  <p className="mt-5 leading-7 text-[#526274]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── STILL UNSURE CTA ────────────────────────────────── */}
        <section className="bg-[#6B2D8B] px-5 py-16 text-white lg:px-8">
          <div className="mx-auto max-w-[1280px] text-center">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffbf47]">
              Still unsure?
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
              Book a free discovery session.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#e8d4f5]">
              The best way to know if Podio is right for your child is to try it.
              Our free discovery session is relaxed, fun, and comes with zero obligation.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-8 text-xs font-black uppercase tracking-[0.12em] text-[#6B2D8B] transition hover:bg-[#ffbf47]"
            >
              Book your free session
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
