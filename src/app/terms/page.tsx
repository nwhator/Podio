import type { Metadata } from "next";
import { Check } from "lucide-react";
import { terms } from "@/lib/podio-content";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | Podio",
  description:
    "Terms and conditions for families enrolling children in Podio programmes.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#f4f7fb] text-[#07101f]">
        <section className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
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
              Podio programme.
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
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
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
                        className="mt-1 h-5 w-5 shrink-0 text-[#6B2D8B]"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
