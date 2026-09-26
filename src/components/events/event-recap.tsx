import React from "react";
import Image from "next/image";
import { Award, Users, CheckCircle2, Lightbulb, Sparkles, BookOpen } from "lucide-react";
import type { EventRecap } from "@/types/event";

interface EventRecapProps {
  recap: EventRecap;
  title: string;
}

export function EventRecapSection({ recap, title }: EventRecapProps) {
  if (!recap) return null;

  return (
    <section id="recap" className="bg-[#1c0828] py-16 lg:py-24 text-white">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#ffbf47]/20 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#ffbf47]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Official Event Archive</span>
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
              {title} — Event Recap
            </h2>
          </div>

          {typeof recap.participantCount === "number" && (
            <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-sm border border-white/20">
              <Users className="h-6 w-6 text-[#ffbf47]" />
              <div>
                <p className="text-2xl font-black text-[#ffbf47]">
                  {recap.participantCount}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">
                  Young Speakers Trained
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Summary Paragraph */}
        {recap.summary && (
          <p className="mt-8 max-w-3xl text-lg font-medium leading-8 text-[#f0e4ff]">
            {recap.summary}
          </p>
        )}

        {/* Highlights & Key Lessons */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Event Highlights */}
          {recap.highlights && recap.highlights.length > 0 && (
            <div className="rounded-2xl border border-white/15 bg-white/5 p-7 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#ffbf47]">
                <Award className="h-4 w-4" />
                <span>Event Highlights</span>
              </div>
              <ul className="mt-6 space-y-4">
                {recap.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#ffbf47]" />
                    <span className="text-sm leading-6 text-[#e8d4f5]">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Lessons Learned */}
          {recap.keyLessons && recap.keyLessons.length > 0 && (
            <div className="rounded-2xl border border-white/15 bg-white/5 p-7 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#ffbf47]">
                <Lightbulb className="h-4 w-4" />
                <span>Key Lessons & Takeaways</span>
              </div>
              <ul className="mt-6 space-y-4">
                {recap.keyLessons.map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ffbf47] text-[10px] font-black text-[#07101f]">
                      {idx + 1}
                    </span>
                    <span className="text-sm leading-6 text-[#e8d4f5]">
                      {lesson}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
