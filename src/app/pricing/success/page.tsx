import type { Metadata } from "next";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Payment Successful | Podio",
  description: "Your enrolment is confirmed. Welcome to Podio!",
};

export default function PricingSuccessPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#faf7fc] text-[#07101f]">
        {/* Success hero */}
        <section className="bg-gradient-to-br from-[#3d1158] to-[#6B2D8B] px-5 py-24 text-white lg:px-8">
          <div className="mx-auto max-w-[1280px] text-center">
            <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/15 ring-4 ring-white/20">
              <CheckCircle2 aria-hidden className="h-10 w-10 text-[#ffbf47]" />
            </span>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-[#ffbf47]">
              Payment confirmed
            </p>
            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.92] sm:text-7xl">
              You're all set! 🎤
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-[#e8d4f5]">
              Your child is one step closer to finding their voice. Welcome to
              the Podio family — we can't wait to meet them.
            </p>
          </div>
        </section>

        {/* What happens next */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
                Next steps
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
                What happens now?
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Check your inbox",
                  desc: "A payment receipt from Stripe has been sent to your email address. Keep it safe for your records.",
                },
                {
                  step: "02",
                  title: "We'll be in touch",
                  desc: "A member of the Podio team will contact you within 24 hours to confirm your child's session schedule.",
                },
                {
                  step: "03",
                  title: "Prepare for day one",
                  desc: "Your child needs a device with a camera, a stable internet connection, and an open mind. That's it!",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl border border-[#e5d9f0] bg-[#fdf8ff] p-7"
                >
                  <p className="text-4xl font-black text-[#6B2D8B] opacity-40">
                    {item.step}
                  </p>
                  <h3 className="mt-4 text-xl font-black text-[#07101f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#526274]">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Contact strip */}
            <div className="mt-12 rounded-xl bg-[#f5edfb] p-7">
              <h3 className="text-xl font-black text-[#07101f]">
                Any questions?
              </h3>
              <p className="mt-2 text-[#526274]">
                We're here to help. Reach out anytime before your first session.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="tel:+447498502571"
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#6B2D8B] px-5 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-[#4e1f68]"
                >
                  <Phone aria-hidden className="h-4 w-4" />
                  +44 7498 502571
                </Link>
                <Link
                  href="mailto:PodioForKids@gmail.com"
                  className="inline-flex h-11 items-center gap-2 rounded-lg border border-[#6B2D8B] px-5 text-sm font-black uppercase tracking-[0.1em] text-[#6B2D8B] transition hover:bg-[#f5edfb]"
                >
                  <Mail aria-hidden className="h-4 w-4" />
                  PodioForKids@gmail.com
                </Link>
                <Link
                  href="/"
                  className="inline-flex h-11 items-center gap-2 rounded-lg border border-[#e5d9f0] px-5 text-sm font-bold text-[#526274] transition hover:border-[#6B2D8B] hover:text-[#6B2D8B]"
                >
                  Back to homepage
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
