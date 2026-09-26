import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Users, ArrowUpRight, Clock, Video } from "lucide-react";
import type { EventData } from "@/types/event";
import { EventStatusBadge } from "./event-status-badge";

interface EventCardProps {
  event: EventData;
}

export function EventCard({ event }: EventCardProps) {
  // Format human-friendly date
  const eventDate = new Date(event.date);
  const formattedDate = !isNaN(eventDate.getTime())
    ? eventDate.toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : event.date;

  const isCompleted = event.status === "completed";
  const isRegistrationOpen =
    event.status === "registration-open" || event.status === "almost-full";

  const locationDisplay =
    event.attendanceType === "online"
      ? "Online Event"
      : event.city && event.country
      ? `${event.city}, ${event.country}`
      : event.venue || "TBA";

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#e5d9f0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6B2D8B]/40 hover:shadow-xl">
      {/* Event Image Banner */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#3d1158]">
        <Image
          src={event.heroImage}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute left-4 top-4 z-10 flex flex-wrap items-center gap-2">
          <EventStatusBadge status={event.status} size="sm" />
          <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
            {event.attendanceType === "online" ? (
              <>
                <Video className="h-3 w-3" /> Online
              </>
            ) : (
              <>
                <MapPin className="h-3 w-3" /> In Person
              </>
            )}
          </span>
        </div>

        {/* Bottom Image Overlay: Price or Free */}
        <div className="absolute bottom-3 right-4 z-10">
          <span className="rounded-lg bg-[#ffbf47] px-2.5 py-1 text-xs font-black uppercase tracking-wider text-[#07101f] shadow">
            {event.isFree ? "Free Entry" : `${event.currency || "£"}${event.price}`}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-2 text-xs font-bold text-[#6B2D8B]">
          <Users className="h-3.5 w-3.5" />
          <span>Ages {event.ageRange}</span>
        </div>

        <h3 className="mt-2 text-2xl font-black uppercase leading-tight tracking-[-0.01em] text-[#07101f] transition group-hover:text-[#6B2D8B]">
          {event.title}
        </h3>

        <p className="mt-1 text-sm font-semibold text-[#ffbf47] drop-shadow-sm">
          {event.headline}
        </p>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#526274]">
          {event.description}
        </p>

        {/* Key Event Metadata */}
        <div className="mt-6 space-y-2 border-t border-[#f0e4ff] pt-4 text-xs font-semibold text-[#526274]">
          <div className="flex items-center gap-2.5">
            <Calendar className="h-4 w-4 text-[#6B2D8B]" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock className="h-4 w-4 text-[#6B2D8B]" />
            <span>
              {event.startTime} – {event.endTime} ({event.timezone})
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <MapPin className="h-4 w-4 text-[#6B2D8B]" />
            <span className="truncate">{locationDisplay}</span>
          </div>
        </div>

        {/* Card CTA Actions */}
        <div className="mt-6 flex items-center gap-3 pt-2">
          <Link
            href={`/events/${event.slug}`}
            className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-lg border-2 border-[#6B2D8B] bg-white px-4 text-xs font-black uppercase tracking-[0.12em] text-[#6B2D8B] transition hover:bg-[#f5edfb]"
          >
            <span>View Event</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          {isRegistrationOpen && (
            <Link
              href={`/events/${event.slug}/register`}
              className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#6B2D8B] px-4 text-xs font-black uppercase tracking-[0.12em] text-white shadow transition hover:bg-[#4e1f68]"
            >
              <span>Register</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}

          {isCompleted && (
            <Link
              href={`/events/${event.slug}#recap`}
              className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#07101f] px-4 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#3d1158]"
            >
              <span>View Recap</span>
            </Link>
          )}

          {event.status === "coming-soon" && (
            <Link
              href={`/events/${event.slug}`}
              className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-lg bg-sky-600 px-4 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-sky-700"
            >
              <span>Get Notified</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
