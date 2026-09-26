import React from "react";
import {
  MicVocal,
  MessageSquare,
  Sparkles,
  BookOpen,
  Award,
  Compass,
  CheckCircle,
} from "lucide-react";
import type { LearningOutcome } from "@/types/event";

interface EventOutcomesProps {
  outcomes: LearningOutcome[];
  title?: string;
}

const defaultIcons = [
  MicVocal,
  MessageSquare,
  Sparkles,
  BookOpen,
  Compass,
  Award,
];

export function EventOutcomes({ outcomes, title }: EventOutcomesProps) {
  if (!outcomes || outcomes.length === 0) return null;

  return (
    <section className="bg-[#faf7fc] py-16 lg:py-24 border-y border-[#e5d9f0]">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
            What You Will Learn
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.01em] text-[#07101f] sm:text-4xl">
            Key Learning Outcomes
          </h2>
          <p className="mt-4 text-base leading-7 text-[#526274]">
            Every workshop at {title || "this seminar"} is designed around practical speaking frameworks that young people can immediately use at school, home, and beyond.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome, idx) => {
            const Icon = defaultIcons[idx % defaultIcons.length];
            return (
              <div
                key={idx}
                className="group relative flex flex-col rounded-2xl border border-[#e5d9f0] bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6B2D8B]/50 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5edfb] text-[#6B2D8B] transition-colors group-hover:bg-[#6B2D8B] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-black uppercase tracking-[-0.01em] text-[#07101f]">
                  {outcome.title}
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-[#526274]">
                  {outcome.description}
                </p>

                <div className="mt-auto pt-4 flex items-center gap-1.5 text-xs font-bold text-[#6B2D8B]">
                  <CheckCircle className="h-3.5 w-3.5" />
                  <span>Practical skill mastered</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
