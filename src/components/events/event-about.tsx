import React from "react";
import Image from "next/image";
import { Target, HeartHandshake, Sparkles, CheckCircle2, Lightbulb } from "lucide-react";
import type { EventAbout } from "@/types/event";

interface EventAboutProps {
  about: EventAbout;
  title: string;
  image?: string;
}

export function EventAboutSection({ about, title, image }: EventAboutProps) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Story & Problem */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
              About {title}
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.01em] text-[#07101f] sm:text-4xl lg:text-5xl">
              Finding confidence before fear takes over.
            </h2>

            {about.whatIsIt && (
              <p className="mt-6 text-base font-medium leading-7 text-[#07101f] sm:text-lg">
                {about.whatIsIt}
              </p>
            )}

            {about.whyCreated && (
              <p className="mt-4 text-base leading-7 text-[#526274]">
                {about.whyCreated}
              </p>
            )}

            {about.paragraphs && about.paragraphs.length > 0 && (
              <div className="mt-4 space-y-4 text-base leading-7 text-[#526274]">
                {about.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}

            {/* What to Gain Highlight Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {about.problemAddressed && (
                <div className="rounded-xl border border-[#e5d9f0] bg-[#fdf8ff] p-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f5edfb] text-[#6B2D8B]">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-sm font-black uppercase tracking-wider text-[#07101f]">
                    The Challenge We Solve
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-[#526274]">
                    {about.problemAddressed}
                  </p>
                </div>
              )}

              {about.whatToGain && (
                <div className="rounded-xl border border-[#e5d9f0] bg-[#fdf8ff] p-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f5edfb] text-[#6B2D8B]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-sm font-black uppercase tracking-wider text-[#07101f]">
                    What You Will Gain
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-[#526274]">
                    {about.whatToGain}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Visual Feature Box */}
          <div className="relative overflow-hidden rounded-3xl border border-[#e5d9f0] bg-[#3d1158] p-8 text-white shadow-2xl sm:p-10">
            {image && (
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
                style={{ backgroundImage: `url('${image}')` }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#200730] via-[#3d1158]/90 to-[#6B2D8B]/70" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#ffbf47]/20 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#ffbf47]">
                <HeartHandshake className="h-3.5 w-3.5" />
                <span>The Podio Philosophy</span>
              </div>

              <h3 className="mt-6 text-2xl font-black uppercase leading-snug sm:text-3xl">
                Confidence is taught through gentle practice, never pressure.
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#e8d4f5]">
                We believe every child and young adult possesses a strong, authentic voice. When given structured tools and a warm, supportive audience, public speaking stops being scary and becomes a thrilling adventure.
              </p>

              <div className="mt-8 space-y-3.5 border-t border-white/20 pt-6 text-xs font-bold text-[#f5e8ff]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ffbf47]" />
                  <span>Small peer cohorts for maximum speaking turns</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ffbf47]" />
                  <span>DBS / Enhanced background checked communication specialists</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ffbf47]" />
                  <span>Practical physical workbook challenges to take home</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
