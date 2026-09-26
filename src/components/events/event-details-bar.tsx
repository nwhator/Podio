import React from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Video,
  Ticket,
  Hourglass,
  Shirt,
  Mail,
  Phone,
  Layers,
  CalendarCheck,
} from "lucide-react";
import type { EventData } from "@/types/event";

interface EventDetailsBarProps {
  event: EventData;
}

export function EventDetailsBar({ event }: EventDetailsBarProps) {
  const eventDate = new Date(event.date);
  const formattedDate = !isNaN(eventDate.getTime())
    ? eventDate.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : event.date;

  // Build list of valid, non-empty detail items
  const items: Array<{
    label: string;
    value: string;
    icon: React.ElementType;
    subValue?: string;
  }> = [];

  // Date
  items.push({
    label: "Date",
    value: formattedDate,
    icon: Calendar,
  });

  // Time & Timezone
  items.push({
    label: "Time",
    value: `${event.startTime} – ${event.endTime}`,
    subValue: event.timezone,
    icon: Clock,
  });

  // Attendance Type & Location
  if (event.attendanceType === "online") {
    items.push({
      label: "Format",
      value: "Live Online Event",
      subValue: "Interactive video platform",
      icon: Video,
    });
  } else {
    if (event.venue) {
      items.push({
        label: "Venue",
        value: event.venue,
        subValue: event.address || (event.city ? `${event.city}, ${event.country || ""}` : undefined),
        icon: MapPin,
      });
    } else if (event.city) {
      items.push({
        label: "Location",
        value: `${event.city}${event.country ? `, ${event.country}` : ""}`,
        icon: MapPin,
      });
    }
  }

  // Age Range
  if (event.ageRange) {
    items.push({
      label: "Age Group",
      value: `Ages ${event.ageRange}`,
      subValue: "Youth & Students",
      icon: Users,
    });
  }

  // Duration
  if (event.duration) {
    items.push({
      label: "Duration",
      value: event.duration,
      icon: Hourglass,
    });
  }

  // Price / Admission
  items.push({
    label: "Admission",
    value: event.isFree ? "Free Admission" : `${event.currency || "£"}${event.price}`,
    subValue: event.isFree ? "Registration required" : "Per participant",
    icon: Ticket,
  });

  // Capacity / Spaces
  if (typeof event.capacity === "number" && event.capacity > 0) {
    items.push({
      label: "Capacity",
      value: `${event.capacity} Spaces`,
      subValue: "Limited seating",
      icon: Layers,
    });
  }

  // Registration Deadline
  if (event.registrationDeadline) {
    items.push({
      label: "Registration Closes",
      value: event.registrationDeadline,
      icon: CalendarCheck,
    });
  }

  // Dress Code
  if (event.dressCode) {
    items.push({
      label: "Dress Code",
      value: event.dressCode,
      icon: Shirt,
    });
  }

  // Contact
  if (event.contactEmail) {
    items.push({
      label: "Enquiries",
      value: event.contactEmail,
      subValue: event.contactPhone,
      icon: Mail,
    });
  }

  return (
    <section id="details" className="relative -mt-6 z-20 mx-auto max-w-[1280px] px-5 lg:px-8">
      <div className="rounded-2xl border border-[#e5d9f0] bg-white p-6 shadow-xl sm:p-8">
        <h2 className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
          Event Key Details
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 rounded-xl border border-[#f5edfb] bg-[#fdf8ff] p-4 transition-colors hover:border-[#6B2D8B]/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f5edfb] text-[#6B2D8B]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-black uppercase tracking-wider text-[#526274]">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm font-black text-[#07101f] leading-snug break-words">
                    {item.value}
                  </p>
                  {item.subValue && (
                    <p className="mt-0.5 text-xs text-[#526274] leading-tight truncate">
                      {item.subValue}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
