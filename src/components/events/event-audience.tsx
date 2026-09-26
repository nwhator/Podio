import React from "react";
import { Users, CheckCircle2, Heart } from "lucide-react";
import type { EventAudience } from "@/types/event";

interface EventAudienceProps {
  audience: EventAudience;
  title: string;
}

export function EventAudienceSection({ audience, title }: EventAudienceProps) {
  if (!audience || !audience.target || audience.target.length === 0) return null;

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="rounded-3xl border border-[#e5d9f0] bg-gradient-to-br from-[#fdf8ff] to-[#f5edfb] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
                Target Audience
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase leading-[1.05] tracking-[-0.01em] text-[#07101f] sm:text-4xl">
                Who Is This Seminar For?
              </h2>
              <p className="mt-4 text-base leading-7 text-[#526274]">
                {audience.description ||
                  `Designed specifically for young minds ready to unlock their voice in a safe, dynamic learning space.`}
              </p>

              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-[#e5d9f0]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6B2D8B] text-[#ffbf47]">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-wider text-[#526274]">
                    Age Eligibility
                  </p>
                  <p className="text-xl font-black text-[#07101f]">
                    Ages {audience.ageRange}
                  </p>
                </div>
              </div>
            </div>

            {/* Target Breakdown Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {audience.target.map((group, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-white/80 bg-white p-5 shadow-sm transition hover:border-[#6B2D8B]/40"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f5edfb] text-[#6B2D8B]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#07101f]">
                      {group}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
