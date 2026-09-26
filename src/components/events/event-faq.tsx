import React from "react";
import { ChevronRight, HelpCircle } from "lucide-react";
import type { EventFAQ } from "@/types/event";

interface EventFAQProps {
  faq: EventFAQ[];
  title?: string;
}

export function EventFAQSection({ faq, title }: EventFAQProps) {
  if (!faq || faq.length === 0) return null;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-[1.05] tracking-[-0.01em] text-[#07101f] sm:text-4xl">
              Everything You Need to Know
            </h2>
            <p className="mt-4 text-base leading-7 text-[#526274]">
              Have questions about attending {title || "this event"}? Find quick answers here, or reach out to our team anytime.
            </p>

            <div className="mt-8 rounded-2xl border border-[#e5d9f0] bg-[#fdf8ff] p-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#6B2D8B]">
                <HelpCircle className="h-4 w-4" />
                <span>Need Further Assistance?</span>
              </div>
              <p className="mt-2 text-xs leading-6 text-[#526274]">
                Reach our team directly at{" "}
                <a
                  href="mailto:PodioForKids@gmail.com"
                  className="font-bold text-[#6B2D8B] hover:underline"
                >
                  PodioForKids@gmail.com
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+447498502571"
                  className="font-bold text-[#6B2D8B] hover:underline"
                >
                  +44 7498 502571
                </a>
              </p>
            </div>
          </div>

          {/* Accordion Questions */}
          <div className="divide-y divide-[#e5d9f0] rounded-2xl border border-[#e5d9f0] bg-[#fdf8ff] shadow-sm">
            {faq.map((item, idx) => (
              <details
                key={idx}
                className="group p-6"
                open={idx === 0}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="text-base sm:text-lg font-black text-[#07101f]">
                    {item.question}
                  </span>
                  <ChevronRight
                    className="mt-1 h-5 w-5 shrink-0 text-[#6B2D8B] transition group-open:rotate-90"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-4 text-sm leading-7 text-[#526274]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
