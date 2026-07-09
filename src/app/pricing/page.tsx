import type { Metadata } from "next";

export const dynamic = "force-dynamic";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { EnrolButton } from "@/components/enrol-button";
import { programmes } from "@/lib/podio-content";

export const metadata: Metadata = {
  title: "Pricing | Podio",
  description:
    "Transparent pricing for Podio's public speaking and communication programmes. Pay in full or spread the cost monthly. Enrol online with Stripe.",
};

/**
 * Map each programme name to its Stripe price ID environment variables.
 * Add the actual price_xxx values to your .env.local file.
 */
const PRICE_IDS: Record<string, { full: string | undefined; monthly: string | undefined }> = {
  "Voice Explorers": {
    full: process.env.STRIPE_PRICE_VOICE_EXPLORERS_FULL,
    monthly: process.env.STRIPE_PRICE_VOICE_EXPLORERS_MONTHLY,
  },
  "Voice Builders": {
    full: process.env.STRIPE_PRICE_VOICE_BUILDERS_FULL,
    monthly: process.env.STRIPE_PRICE_VOICE_BUILDERS_MONTHLY,
  },
  "Voice Leaders": {
    full: process.env.STRIPE_PRICE_VOICE_LEADERS_FULL,
    monthly: process.env.STRIPE_PRICE_VOICE_LEADERS_MONTHLY,
  },
};

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#faf7fc] text-[#07101f]">
        <PageHero
          kicker="Podio pricing"
          heading="Find the perfect programme for your child."
          subtitle="Every child has a unique voice. Pay in full and save, or spread the cost with monthly payments — whichever works best for your family."
        />

        {/* ── PRICING CARDS ───────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              {programmes.map((programme, index) => {
                const prices = PRICE_IDS[programme.name];
                const isFeatured = index === 1;

                return (
                  <article
                    key={programme.name}
                    className={
                      isFeatured
                        ? "rounded-xl border-2 border-[#6B2D8B] bg-[#fdf8ff] p-7 shadow-[0_24px_60px_rgba(107,45,139,0.18)]"
                        : "rounded-xl border border-[#e5d9f0] bg-white p-7"
                    }
                  >
                    {isFeatured && (
                      <p className="mb-4 inline-flex items-center rounded-full bg-[#6B2D8B] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white">
                        Most popular
                      </p>
                    )}

                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#6B2D8B]">
                      {programme.eyebrow}
                    </p>
                    <h2 className="mt-3 text-3xl font-black uppercase leading-none tracking-[0] text-[#07101f]">
                      {programme.name}
                    </h2>
                    <p className="mt-5 leading-7 text-[#526274] lg:min-h-36">
                      {programme.description}
                    </p>

                    {/* Pricing breakdown */}
                    <dl className="mt-6 space-y-3 border-y border-[#e5d9f0] py-5">
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-sm font-bold text-[#526274]">Duration</dt>
                        <dd className="text-right font-black text-[#07101f]">{programme.duration}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-sm font-bold text-[#526274]">Pay in full</dt>
                        <dd className="text-right text-xl font-black text-[#07101f]">{programme.fullPrice}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-sm font-bold text-[#526274]">Monthly option</dt>
                        <dd className="text-right text-xl font-black text-[#07101f]">{programme.monthlyPrice}</dd>
                      </div>
                    </dl>

                    <p className="mt-5 text-sm font-bold text-[#07101f]">
                      Best for:{" "}
                      <span className="font-semibold text-[#526274]">
                        {programme.bestFor}
                      </span>
                    </p>

                    {/* Stripe checkout buttons */}
                    <div className="mt-6 flex flex-col gap-3">
                      <EnrolButton
                        priceId={prices?.full}
                        label={`Enrol now — Pay in full (${programme.fullPrice})`}
                        variant="primary"
                      />
                      <EnrolButton
                        priceId={prices?.monthly}
                        label={`Pay monthly (${programme.monthlyPrice})`}
                        variant="secondary"
                      />
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Reassurance strip */}
            <div className="mt-12 rounded-xl border border-[#e5d9f0] bg-[#fdf8ff] p-6 sm:p-8">
              <div className="grid gap-6 sm:grid-cols-3 sm:divide-x sm:divide-[#e5d9f0]">
                {[
                  {
                    title: "Free discovery session",
                    desc: "Try before you commit — book a free session and let your child meet the coach first.",
                  },
                  {
                    title: "Secure Stripe checkout",
                    desc: "Payments are processed securely through Stripe. We never store your card details.",
                  },
                  {
                    title: "Questions? Just ask",
                    desc: "Contact us at PodioForKids@gmail.com or call +44 7498 502571 before enrolling.",
                  },
                ].map((item) => (
                  <div key={item.title} className="sm:px-6 first:pl-0 last:pr-0">
                    <h3 className="font-black text-[#07101f]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#526274]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
