import type { Metadata } from "next";
import { ArrowLeft, Mail, Phone, ShieldCheck } from "lucide-react";
import { safeguarding } from "@/lib/podio-content";

export const metadata: Metadata = {
  title: "Safeguarding | Podio Academy",
  description:
    "Safeguarding, child protection, communication, and data practices for Podio Academy.",
};

export default function SafeguardingPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#07101f]">
      <PolicyHeader />
      <section className="bg-[#07101f] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffbf47]">
            Child safety and wellbeing
          </p>
          <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] tracking-[0] sm:text-7xl">
            Safeguarding at Podio Academy.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#d9e8f8]">
            The safety, wellbeing, and dignity of every child is our highest
            priority. Podio Academy is fully committed to creating and
            maintaining a safe, respectful, and supportive learning environment
            for all children.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {safeguarding.map((item) => (
            <article
              className="rounded-md border border-[#d8e0ea] bg-white p-7"
              key={item.title}
            >
              <ShieldCheck aria-hidden className="h-8 w-8 text-[#0b4fb3]" />
              <h2 className="mt-8 text-2xl font-black text-[#07101f]">
                {item.title}
              </h2>
              <p className="mt-4 leading-7 text-[#526274]">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-md border border-[#d8e0ea] bg-[#f7fbff] p-7">
          <h2 className="text-3xl font-black uppercase tracking-[0]">
            Reporting concerns
          </h2>
          <p className="mt-4 leading-7 text-[#526274]">
            If you have any concern about your child's safety, wellbeing, or
            experience at Podio Academy, no matter how small, please contact us
            immediately.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#0b4fb3] px-5 text-sm font-black uppercase tracking-[0.1em] text-white"
              href="tel:+447498502571"
            >
              <Phone aria-hidden className="h-4 w-4" />
              Call us
            </a>
            <a
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-[#0b4fb3] px-5 text-sm font-black uppercase tracking-[0.1em] text-[#0b4fb3]"
              href="mailto:PodioForKids@gmail.com"
            >
              <Mail aria-hidden className="h-4 w-4" />
              Email us
            </a>
          </div>
        </div>
      </section>
      <PolicyFooter />
    </main>
  );
}

function PolicyHeader() {
  return (
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
  );
}

function PolicyFooter() {
  return (
    <footer className="border-t border-[#d8e0ea] bg-[#eaf2fb] px-5 py-8 text-sm font-semibold text-[#526274] lg:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright © {new Date().getFullYear()} Podio Academy.</p>
        <div className="flex flex-wrap gap-4">
          <a href="/terms">Terms</a>
          <a href="/consent">Consent Form</a>
          <a href="mailto:PodioForKids@gmail.com">PodioForKids@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
