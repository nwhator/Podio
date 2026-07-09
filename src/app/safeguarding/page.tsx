import type { Metadata } from "next";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { safeguarding } from "@/lib/podio-content";

export const metadata: Metadata = {
  title: "Safeguarding | Podio",
  description:
    "Safeguarding, child protection, communication, and data practices for Podio.",
};

export default function SafeguardingPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#faf7fc] text-[#07101f]">
        <PageHero
          kicker="Child safety and wellbeing"
          heading="Safeguarding at Podio."
          subtitle="The safety, wellbeing, and dignity of every child is our highest priority. Podio is fully committed to creating and maintaining a safe, respectful, and supportive learning environment."
        />

        <section className="py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1280px] gap-5 px-5 md:grid-cols-2 lg:px-8">
            {safeguarding.map((item) => (
              <article
                className="rounded-xl border border-[#e5d9f0] bg-white p-7"
                key={item.title}
              >
                <ShieldCheck aria-hidden className="h-8 w-8 text-[#6B2D8B]" />
                <h2 className="mt-8 text-2xl font-black text-[#07101f]">
                  {item.title}
                </h2>
                <p className="mt-4 leading-7 text-[#526274]">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Reporting concerns */}
        <section className="bg-white px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-[1280px] rounded-xl border border-[#e5d9f0] bg-[#fdf8ff] p-7">
            <h2 className="text-3xl font-black uppercase tracking-[0]">
              Reporting concerns
            </h2>
            <p className="mt-4 leading-7 text-[#526274]">
              If you have any concern about your child's safety, wellbeing, or
              experience at Podio — no matter how small — please contact us
              immediately.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#6B2D8B] px-5 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-[#4e1f68]"
                href="tel:+447498502571"
              >
                <Phone aria-hidden className="h-4 w-4" />
                Call us
              </Link>
              <Link
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#6B2D8B] px-5 text-sm font-black uppercase tracking-[0.1em] text-[#6B2D8B] transition hover:bg-[#f5edfb]"
                href="mailto:PodioForKids@gmail.com"
              >
                <Mail aria-hidden className="h-4 w-4" />
                Email us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
