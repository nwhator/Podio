import Link from "next/link";
import { CalendarCheck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#f5edfb]">
      <div className="mx-auto max-w-[1280px] px-5 py-14 lg:px-8 lg:py-16">
        {/* CTA strip */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
              Ready to start?
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
              Let's help your child speak with confidence.
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#6B2D8B] px-7 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#4e1f68]"
            >
              Book free session
              <CalendarCheck aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Link columns */}
        <div className="mt-12 grid gap-8 border-t border-[#e5d9f0] pt-8 md:grid-cols-3">
          <div>
            <p className="text-xl font-black uppercase tracking-[0.08em]">Podio</p>
            <p className="mt-3 max-w-sm leading-7 text-[#526274]">
              Helping children find their voice before fear finds them.
            </p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#526274]">
              Navigate
            </p>
            <div className="mt-4 grid gap-2 text-sm font-bold">
              <Link href="/about" className="transition hover:text-[#6B2D8B]">About</Link>
              <Link href="/programmes" className="transition hover:text-[#6B2D8B]">Programmes</Link>
              <Link href="/pricing" className="transition hover:text-[#6B2D8B]">Pricing</Link>
              <Link href="/books" className="transition hover:text-[#6B2D8B]">Books</Link>
              <Link href="/gallery" className="transition hover:text-[#6B2D8B]">Gallery</Link>
              <Link href="/faqs" className="transition hover:text-[#6B2D8B]">FAQs</Link>
              <Link href="/contact" className="transition hover:text-[#6B2D8B]">Contact</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#526274]">
              Parent information
            </p>
            <div className="mt-4 grid gap-2 text-sm font-bold">
              <Link href="/safeguarding" className="transition hover:text-[#6B2D8B]">Safeguarding</Link>
              <Link href="/terms" className="transition hover:text-[#6B2D8B]">Terms and Conditions</Link>
              <Link href="/consent" className="transition hover:text-[#6B2D8B]">Consent Form</Link>
              <Link
                href="mailto:PodioForKids@gmail.com"
                className="transition hover:text-[#6B2D8B]"
              >
                PodioForKids@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#e5d9f0] px-5 py-6 text-sm font-semibold text-[#526274] lg:px-8">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} Podio.</p>
          <p>Online — United Kingdom | <a href="tel:+447498502571" className="underline decoration-[#c4a8d9] underline-offset-2 transition hover:text-[#6B2D8B] hover:decoration-[#6B2D8B]">+44 7498 502571</a></p>
        </div>
      </div>
    </footer>
  );
}
