import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RegisterForm } from "./register-form";
import { getEventBySlug } from "@/lib/events/service";
import { Calendar, Clock, MapPin, ShieldCheck, ArrowLeft } from "lucide-react";

interface RegisterPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: RegisterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug, false);

  if (!event) {
    return { title: "Register | Podio" };
  }

  return {
    title: `Register for ${event.title} | Podio`,
    description: `Secure your spot for ${event.title} — ${event.headline}. Free registration for young people aged ${event.ageRange}.`,
  };
}

export default async function RegisterPage({ params }: RegisterPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug, false);

  if (!event) {
    notFound();
  }

  // Check if registration is open
  const isRegistrationOpen =
    event.status === "registration-open" || event.status === "almost-full";

  const eventDate = new Date(event.date);
  const formattedDate = !isNaN(eventDate.getTime())
    ? eventDate.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : event.date;

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#faf7fc] py-12 lg:py-16 text-[#07101f]">
        <div className="mx-auto max-w-[900px] px-5 lg:px-8">
          {/* Back link */}
          <Link
            href={`/events/${event.slug}`}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#6B2D8B] transition hover:text-[#4e1f68]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Event Details</span>
          </Link>

          {/* Header Card */}
          <div className="mt-4 rounded-3xl border border-[#e5d9f0] bg-white p-6 sm:p-10 shadow-sm">
            <span className="rounded-full bg-[#f5edfb] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#6B2D8B]">
              Event Registration
            </span>

            <h1 className="mt-3 text-3xl font-black uppercase leading-[1.05] tracking-[-0.01em] text-[#07101f] sm:text-4xl">
              Register for {event.title}
            </h1>

            <p className="mt-2 text-base font-semibold text-[#6B2D8B]">
              {event.headline}
            </p>

            {/* Quick Meta */}
            <div className="mt-6 flex flex-wrap gap-4 border-t border-[#f5edfb] pt-4 text-xs font-semibold text-[#526274]">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#6B2D8B]" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#6B2D8B]" />
                <span>
                  {event.startTime} – {event.endTime} ({event.timezone})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#6B2D8B]" />
                <span>
                  {event.attendanceType === "online"
                    ? "Online"
                    : event.venue || event.city}
                </span>
              </div>
            </div>
          </div>

          {/* Registration Form / Status Message */}
          <div className="mt-8">
            {isRegistrationOpen ? (
              <RegisterForm event={event} />
            ) : (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-8 text-center text-rose-900">
                <h2 className="text-xl font-black uppercase">
                  Registration is Currently Closed
                </h2>
                <p className="mt-2 text-sm text-rose-700 max-w-md mx-auto">
                  Capacity has been reached or registration has ended for this session. Please return to our events hub to view other upcoming masterclasses.
                </p>
                <Link
                  href="/events"
                  className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-[#6B2D8B] px-6 text-xs font-black uppercase tracking-wider text-white shadow"
                >
                  Browse Other Events
                </Link>
              </div>
            )}
          </div>

          {/* Safeguarding Reassurance */}
          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-[#e5d9f0] bg-white p-5 text-xs text-[#526274]">
            <ShieldCheck className="h-5 w-5 text-[#6B2D8B] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[#07101f]">
                Podio Safeguarding & Data Promise
              </p>
              <p className="mt-0.5">
                Participant data is encrypted and used strictly for event logistics and emergency safeguarding. We never sell or share participant information.
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
