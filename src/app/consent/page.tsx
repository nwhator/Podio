import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { ConsentForm } from "@/components/podio-forms";

export const metadata: Metadata = {
  title: "Consent Form | Podio Academy",
  description:
    "Parent and guardian consent form for Podio Academy programmes.",
};

export default function ConsentPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#07101f]">
      <header className="border-b border-[#d8e0ea] bg-white px-5 py-4 lg:px-8">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between">
          <a className="text-lg font-black uppercase tracking-[0.08em]" href="/">
            Podio Academy
          </a>
          <a
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#0b4fb3]"
            href="/"
          >
            <ArrowLeft aria-hidden className="h-4 w-4" />
            Back home
          </a>
        </div>
      </header>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b4fb3]">
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

      <footer className="border-t border-[#d8e0ea] bg-[#eaf2fb] px-5 py-8 text-sm font-semibold text-[#526274] lg:px-8">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} Podio Academy.</p>
          <div className="flex flex-wrap gap-4">
            <a href="/safeguarding">Safeguarding</a>
            <a href="/terms">Terms</a>
            <a href="mailto:PodioForKids@gmail.com">PodioForKids@gmail.com</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
