"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Calendar, Ticket } from "lucide-react";
import type { EventData } from "@/types/event";

interface EventStickyBarProps {
  event: EventData;
}

export function EventStickyBar({ event }: EventStickyBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // Show sticky bar after scrolling down past the hero
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const isRegistrationOpen =
    event.status === "registration-open" || event.status === "almost-full";

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-[#e5d9f0] bg-white/95 p-3.5 shadow-2xl backdrop-blur-md animate-fadeIn">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4">
        <div className="hidden sm:block">
          <p className="text-[11px] font-black uppercase tracking-wider text-[#6B2D8B]">
            {event.status === "completed" ? "Event Archive" : "Upcoming Event"}
          </p>
          <p className="text-base font-black text-[#07101f] truncate max-w-md">
            {event.title} — {event.headline}
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-[#f5edfb] px-2.5 py-1 text-xs font-black uppercase text-[#6B2D8B]">
              {event.isFree ? "Free" : `${event.currency || "£"}${event.price}`}
            </span>
            <span className="text-xs font-semibold text-[#526274] hidden md:inline">
              Ages {event.ageRange}
            </span>
          </div>

          {isRegistrationOpen && (
            <Link
              href={`/events/${event.slug}/register`}
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-[#6B2D8B] px-6 text-xs font-black uppercase tracking-[0.12em] text-white shadow transition hover:bg-[#4e1f68]"
            >
              <span>Register Now</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}

          {event.status === "completed" && (
            <a
              href="#recap"
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-[#07101f] px-6 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#3d1158]"
            >
              <span>View Recap</span>
            </a>
          )}

          {event.status === "coming-soon" && (
            <a
              href="#details"
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-sky-600 px-6 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-sky-700"
            >
              <span>Get Notified</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
