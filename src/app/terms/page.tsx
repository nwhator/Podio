import type { Metadata } from "next";
import { ArrowLeft, Check } from "lucide-react";
import { terms } from "@/lib/podio-content";

export const metadata: Metadata = {
  title: "Terms and Conditions | Podio Academy",
  description:
    "Terms and conditions for families enrolling children in Podio Academy programmes.",
};

export default function TermsPage() {
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
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b4fb3]">
            Parent information
          </p>
          <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-7xl">
            Terms and conditions.
          </h1>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-[#526274]">
            Last updated: January 2026
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#526274]">
            Please read these terms carefully before enrolling your child in a
            Podio Academy programme.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-5">
          {terms.map((section, index) => (
            <article
              className="rounded-md border border-[#d8e0ea] bg-white p-7"
              key={section.title}
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b4fb3]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#07101f]">
                {section.title}
              </h2>
              <ul className="mt-6 space-y-3">
                {section.points.map((point) => (
                  <li className="flex gap-3 leading-7 text-[#526274]" key={point}>
                    <Check
                      aria-hidden
                      className="mt-1 h-5 w-5 shrink-0 text-[#0b4fb3]"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#d8e0ea] bg-[#eaf2fb] px-5 py-8 text-sm font-semibold text-[#526274] lg:px-8">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} Podio Academy.</p>
          <div className="flex flex-wrap gap-4">
            <a href="/safeguarding">Safeguarding</a>
            <a href="/consent">Consent Form</a>
            <a href="mailto:PodioForKids@gmail.com">PodioForKids@gmail.com</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
