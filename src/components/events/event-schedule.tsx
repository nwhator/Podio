import React from "react";
import { Clock, Sparkles, Coffee, Mic, UserCheck } from "lucide-react";
import type { ScheduleItem } from "@/types/event";

interface EventScheduleProps {
  schedule: ScheduleItem[];
  title?: string;
}

export function EventSchedule({ schedule, title }: EventScheduleProps) {
  if (!schedule || schedule.length === 0) return null;

  const getActivityBadge = (type?: string) => {
    switch (type) {
      case "interactive":
        return { label: "Interactive Activity", bg: "bg-purple-100 text-[#6B2D8B]" };
      case "workshop":
        return { label: "Masterclass Workshop", bg: "bg-amber-100 text-amber-900" };
      case "break":
        return { label: "Refreshment & Networking", bg: "bg-emerald-100 text-emerald-800" };
      case "showcase":
        return { label: "Live Stage Showcase", bg: "bg-rose-100 text-rose-800" };
      case "session":
      default:
        return { label: "Keynote Session", bg: "bg-blue-100 text-blue-800" };
    }
  };

  return (
    <section id="schedule" className="bg-[#faf7fc] py-16 lg:py-24 border-t border-[#e5d9f0]">
      <div className="mx-auto max-w-[1000px] px-5 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
            Programme Agenda
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-[1.05] tracking-[-0.01em] text-[#07101f] sm:text-4xl">
            Event Schedule & Timeline
          </h2>
          <p className="mt-4 text-base leading-7 text-[#526274] max-w-xl mx-auto">
            A carefully curated blend of energetic warm-ups, practical speaking frameworks, and live stage opportunities.
          </p>
        </div>

        {/* Timeline List */}
        <div className="mt-14 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:-translate-x-1/2 before:bg-[#e5d9f0]">
          {schedule.map((item, idx) => {
            const badge = getActivityBadge(item.activityType);
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="relative mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                {/* Center Timeline Node Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#faf7fc] bg-[#6B2D8B] text-white shadow-md z-10">
                  <span className="text-[10px] font-black">{idx + 1}</span>
                </div>

                {/* Left or Right Card depending on alternate indexing */}
                <div
                  className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${
                    isEven ? "sm:mr-auto sm:text-right" : "sm:ml-auto"
                  }`}
                >
                  <div className="rounded-2xl border border-[#e5d9f0] bg-white p-6 shadow-sm transition hover:shadow-md hover:border-[#6B2D8B]/40">
                    <div
                      className={`flex flex-wrap items-center gap-2 ${
                        isEven ? "sm:justify-end" : "sm:justify-start"
                      }`}
                    >
                      <span className="inline-flex items-center gap-1 rounded-md bg-[#6B2D8B] px-2.5 py-1 text-xs font-black uppercase tracking-wider text-white">
                        <Clock className="h-3 w-3" />
                        {item.time}
                      </span>
                      <span
                        className={`rounded-md px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${badge.bg}`}
                      >
                        {badge.label}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-black uppercase text-[#07101f]">
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="mt-2 text-xs sm:text-sm leading-6 text-[#526274]">
                        {item.description}
                      </p>
                    )}

                    {item.speaker && (
                      <p className="mt-3 text-xs font-bold text-[#6B2D8B]">
                        Facilitator: {item.speaker}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
