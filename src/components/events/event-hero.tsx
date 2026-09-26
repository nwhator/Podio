import React from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowUpRight,
  Sparkles,
  Share2,
} from "lucide-react";
import type { EventData } from "@/types/event";
import { EventStatusBadge } from "./event-status-badge";
import { EventShare } from "./event-share";

interface EventHeroProps {
  event: EventData;
}

export function EventHero({ event }: EventHeroProps) {
  const eventDate = new Date(event.date);
  const formattedDate = !isNaN(eventDate.getTime())
    ? eventDate.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : event.date;

  const isCompleted = event.status === "completed";
  const isRegistrationOpen =
    event.status === "registration-open" || event.status === "almost-full";

  const locationDisplay =
    event.attendanceType === "online"
      ? "Online Live Stream"
      : event.venue
      ? `${event.venue}${event.city ? `, ${event.city}` : ""}`
      : event.city || "Venue TBA";

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#2b0a42] via-[#3d1158] to-[#1c0828] text-white">
      {/* Background Hero Image with Dark Gradient Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-25 mix-blend-luminosity"
        style={{ backgroundImage: `url('${event.heroImage}')` }}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/60" />

      <div className="mx-auto max-w-[1280px] px-5 py-12 sm:py-16 lg:px-8 lg:py-20">
        {/* Top Breadcrumb & Status */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Link
              href="/events"
              className="text-xs font-black uppercase tracking-[0.16em] text-[#e8d4f5] transition hover:text-[#ffbf47]"
            >
              ← All Events
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-xs font-bold text-white/70 truncate max-w-[200px] sm:max-w-none">
              {event.title}
            </span>
          </div>

          <EventStatusBadge status={event.status} size="md" />
        </div>

        {/* Hero Main Content */}
        <div className="mt-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ffbf47]/30 bg-[#ffbf47]/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#ffbf47]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Podio Live Seminar</span>
          </div>

          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[-0.01em] sm:text-6xl lg:text-7xl">
            {event.title}
          </h1>

          <p className="mt-3 text-xl font-black uppercase tracking-wide text-[#ffbf47] sm:text-2xl">
            {event.headline}
          </p>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#f0e4ff] sm:text-lg">
            {event.description}
          </p>
        </div>

        {/* Quick Details Pills */}
        <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-bold text-[#f5e8ff]">
          <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-sm">
            <Calendar className="h-4 w-4 text-[#ffbf47]" />
            <span>{formattedDate}</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-sm">
            <Clock className="h-4 w-4 text-[#ffbf47]" />
            <span>
              {event.startTime} – {event.endTime} ({event.timezone})
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-sm">
            <MapPin className="h-4 w-4 text-[#ffbf47]" />
            <span>{locationDisplay}</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-sm">
            <Users className="h-4 w-4 text-[#ffbf47]" />
            <span>Ages {event.ageRange}</span>
          </div>
        </div>

        {/* CTAs & Social Share */}
        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between border-t border-white/15 pt-8">
          <div className="flex flex-wrap items-center gap-4">
            {isRegistrationOpen && (
              <Link
                href={`/events/${event.slug}/register`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#ffbf47] px-8 text-xs font-black uppercase tracking-[0.12em] text-[#07101f] shadow-lg transition hover:bg-white hover:scale-105"
              >
                <span>Register Now</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}

            {isCompleted && (
              <a
                href="#recap"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-8 text-xs font-black uppercase tracking-[0.12em] text-[#07101f] shadow-lg transition hover:bg-[#ffbf47]"
              >
                <span>View Event Recap</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}

            {event.status === "coming-soon" && (
              <a
                href="#details"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg transition hover:bg-sky-400"
              >
                <span>Get Notified</span>
              </a>
            )}

            {event.status === "registration-closed" && (
              <span className="inline-flex h-12 items-center justify-center rounded-xl bg-white/10 px-6 text-xs font-black uppercase tracking-[0.12em] text-white/60">
                Registration Closed
              </span>
            )}

            <a
              href="#schedule"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/30 px-6 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
            >
              View Programme
            </a>
          </div>

          {/* Social Share Menu */}
          <EventShare
            title={event.title}
            headline={event.headline}
            slug={event.slug}
          />
        </div>
      </div>
    </section>
  );
}
