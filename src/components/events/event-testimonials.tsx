import React from "react";
import { Quote } from "lucide-react";
import type { EventTestimonial } from "@/types/event";

interface EventTestimonialsProps {
  testimonials: EventTestimonial[];
  title?: string;
}

export function EventTestimonials({
  testimonials,
  title,
}: EventTestimonialsProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="bg-[#faf7fc] py-16 lg:py-24 border-t border-[#e5d9f0]">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
            What People Say
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-[1.05] tracking-[-0.01em] text-[#07101f] sm:text-4xl">
            Real Stories, Real Growth
          </h2>
          <p className="mt-4 text-base leading-7 text-[#526274]">
            Hear from parents and students whose lives were changed through Podio's communication experiences.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-[#e5d9f0] bg-white p-7 shadow-sm transition hover:shadow-md hover:border-[#6B2D8B]/40"
            >
              <div>
                <Quote className="h-8 w-8 text-[#ffbf47]" />
                <p className="mt-4 text-sm leading-7 text-[#07101f] italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 border-t border-[#f5edfb] pt-4">
                <p className="font-black uppercase text-sm text-[#07101f]">
                  {t.name}
                </p>
                <p className="text-xs font-semibold text-[#6B2D8B]">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
