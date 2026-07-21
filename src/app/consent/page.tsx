import type { Metadata } from "next";
import { ConsentForm } from "@/components/podio-forms";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Consent Form | Podio",
  description:
    "Parent and guardian consent form for Podio programmes.",
};

export default function ConsentPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#f4f7fb] text-[#07101f]">
        <section className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
                Parent consent
              </p>
              <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-7xl">
                Consent form.
              </h1>
              <p className="mt-8 text-lg leading-8 text-[#526274]">
                Please read and complete each section carefully. Your digital
                signature confirms your agreement. General participation consent
                is required to submit this form.
              </p>
            </div>
            <ConsentForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
