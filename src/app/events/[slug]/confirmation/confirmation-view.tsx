"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Download,
  Printer,
  Share2,
  Mail,
  Home,
  CalendarPlus,
} from "lucide-react";
import type { EventData } from "@/types/event";

interface ConfirmationViewProps {
  event: EventData;
  reference: string;
  participantName: string;
  participantEmail?: string;
}

export function ConfirmationView({
  event,
  reference,
  participantName,
  participantEmail,
}: ConfirmationViewProps) {
  const eventDate = new Date(event.date);
  const formattedDate = !isNaN(eventDate.getTime())
    ? eventDate.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : event.date;

  const locationDisplay =
    event.attendanceType === "online"
      ? "Online Live Stream"
      : event.venue
      ? `${event.venue}, ${event.city || ""}`
      : event.city || "Venue TBA";

  // Google Calendar URL generator
  function getGoogleCalendarUrl() {
    const title = encodeURIComponent(`${event.title} — Podio Seminar`);
    const details = encodeURIComponent(
      `Registration Reference: ${reference}\nParticipant: ${participantName}\n\n${event.description}\n\nMore info: https://podioforkids.com/events/${event.slug}`,
    );
    const location = encodeURIComponent(locationDisplay);

    // Format dates to YYYYMMDDTHHMMSSZ (approximate UTC)
    const dateClean = event.date.replace(/[^0-9]/g, "");
    // Default 09:00 to 16:00
    const startIso = `${dateClean}T090000Z`;
    const endIso = `${dateClean}T160000Z`;

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startIso}/${endIso}`;
  }

  // Download .ics file
  function handleDownloadIcs() {
    const dateClean = event.date.replace(/[^0-9]/g, "");
    const startIso = `${dateClean}T090000Z`;
    const endIso = `${dateClean}T160000Z`;

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Podio Academy//Event Registration//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:${reference}@podioforkids.com`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
      `DTSTART:${startIso}`,
      `DTEND:${endIso}`,
      `SUMMARY:${event.title} — Podio Seminar`,
      `DESCRIPTION:Registration Reference: ${reference}\\nParticipant: ${participantName}\\n${event.headline}`,
      `LOCATION:${locationDisplay}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${event.slug}-podio-event.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function handlePrint() {
    if (typeof window !== "undefined") {
      window.print();
    }
  }

  return (
    <div className="mx-auto max-w-[800px] px-5 py-12 lg:py-16">
      {/* ── SUCCESS BANNER CARD ────────────────────────────────────── */}
      <div className="rounded-3xl border-2 border-[#6B2D8B]/20 bg-white p-6 sm:p-10 shadow-xl">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-inner">
            <CheckCircle2 className="h-10 w-10" />
          </div>

          <span className="mt-4 rounded-full bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-emerald-800">
            Registration Confirmed
          </span>

          <h1 className="mt-3 text-3xl font-black uppercase leading-[1.05] tracking-[-0.01em] text-[#07101f] sm:text-5xl">
            You're Registered!
          </h1>

          <p className="mt-3 text-base text-[#526274] max-w-lg">
            Your registration for{" "}
            <span className="font-black text-[#07101f]">{event.title}</span> has
            been received. We can't wait to see you there!
          </p>

          {/* Reference Badge */}
          <div className="mt-6 rounded-2xl border border-dashed border-[#6B2D8B] bg-[#fdf8ff] px-6 py-4">
            <p className="text-[11px] font-black uppercase tracking-widest text-[#6B2D8B]">
              Registration Reference
            </p>
            <p className="mt-1 font-mono text-xl sm:text-2xl font-black tracking-wider text-[#07101f]">
              {reference}
            </p>
            <p className="mt-1 text-[11px] text-[#526274]">
              Please keep this reference for on-site check-in.
            </p>
          </div>
        </div>

        {/* ── EVENT SUMMARY RECAP ─────────────────────────────────────── */}
        <div className="mt-10 rounded-2xl border border-[#e5d9f0] bg-[#faf7fc] p-6 space-y-4 text-sm">
          <div className="flex items-start justify-between gap-4 border-b border-[#e5d9f0] pb-3">
            <span className="font-bold text-[#526274]">Participant:</span>
            <span className="font-black text-[#07101f] text-right">
              {participantName}
            </span>
          </div>

          <div className="flex items-start justify-between gap-4 border-b border-[#e5d9f0] pb-3">
            <span className="font-bold text-[#526274]">Event:</span>
            <span className="font-black text-[#07101f] text-right">
              {event.title} — {event.headline}
            </span>
          </div>

          <div className="flex items-start justify-between gap-4 border-b border-[#e5d9f0] pb-3">
            <span className="font-bold text-[#526274]">Date:</span>
            <span className="font-black text-[#07101f] text-right">
              {formattedDate}
            </span>
          </div>

          <div className="flex items-start justify-between gap-4 border-b border-[#e5d9f0] pb-3">
            <span className="font-bold text-[#526274]">Time:</span>
            <span className="font-black text-[#07101f] text-right">
              {event.startTime} – {event.endTime} ({event.timezone})
            </span>
          </div>

          <div className="flex items-start justify-between gap-4">
            <span className="font-bold text-[#526274]">Location:</span>
            <span className="font-black text-[#07101f] text-right">
              {locationDisplay}
            </span>
          </div>
        </div>

        {/* ── ACTION BUTTONS ─────────────────────────────────────────── */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {/* Add to Google Calendar */}
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#6B2D8B] px-5 text-xs font-black uppercase tracking-wider text-white shadow transition hover:bg-[#4e1f68]"
          >
            <CalendarPlus className="h-4 w-4" />
            <span>Add to Google Calendar</span>
          </a>

          {/* Download .ics file */}
          <button
            onClick={handleDownloadIcs}
            className="flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-[#6B2D8B] bg-white px-5 text-xs font-black uppercase tracking-wider text-[#6B2D8B] transition hover:bg-[#f5edfb]"
          >
            <Download className="h-4 w-4" />
            <span>Download .ICS File (Apple / Outlook)</span>
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-[#e5d9f0]">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#526274] hover:text-[#07101f]"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Print Confirmation</span>
          </button>

          <span className="text-gray-300">•</span>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#526274] hover:text-[#07101f]"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Contact Podio</span>
          </Link>

          <span className="text-gray-300">•</span>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6B2D8B] hover:underline"
          >
            <Home className="h-3.5 w-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
