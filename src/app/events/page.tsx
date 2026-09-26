import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { EventCard } from "@/components/events/event-card";
import { getUpcomingEvents, getPastEvents } from "@/lib/events/service";
import { Calendar, Sparkles, Award, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Events & Seminars | Podio",
  description:
    "Explore Podio's inspiring communication seminars, public speaking workshops, and youth events. Find upcoming dates and register today.",
};

export default async function EventsPage() {
  const upcomingEvents = await getUpcomingEvents();
  const pastEvents = await getPastEvents();

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#faf7fc] text-[#07101f]">
        <PageHero
          kicker="Podio Events & Seminars"
          heading="Where Young Voices Take Center Stage."
          subtitle="Join our immersive, high-energy in-person seminars and workshops. Designed to build lifelong public speaking confidence, structured thinking, and leadership presence in a safe, supportive environment."
        />

        {/* ── UPCOMING EVENTS SECTION ───────────────────────────────── */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#e5d9f0] pb-5">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
                  <Sparkles className="h-4 w-4" />
                  <span>Upcoming Opportunities</span>
                </div>
                <h2 className="mt-2 text-3xl font-black uppercase leading-tight tracking-[-0.01em] text-[#07101f] sm:text-4xl">
                  Upcoming Seminars & Workshops
                </h2>
              </div>
              <p className="text-sm font-semibold text-[#526274]">
                {upcomingEvents.length} {upcomingEvents.length === 1 ? "event" : "events"} scheduled
              </p>
            </div>

            {upcomingEvents.length > 0 ? (
              <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="mt-10 rounded-2xl border border-dashed border-[#e5d9f0] bg-white p-12 text-center">
                <Calendar className="mx-auto h-12 w-12 text-[#6B2D8B]/50" />
                <h3 className="mt-4 text-xl font-black uppercase text-[#07101f]">
                  No New Events Announced Right Now
                </h3>
                <p className="mt-2 text-sm text-[#526274] max-w-md mx-auto">
                  We are finalizing the dates for our next masterclasses. Check back soon or contact us to be added to our priority waitlist.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ── VALUE HIGHLIGHTS / PILLARS ────────────────────────────── */}
        <section className="bg-white py-16 border-y border-[#e5d9f0]">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5edfb] text-[#6B2D8B]">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase text-[#07101f]">
                    Small Peer Groups
                  </h3>
                  <p className="mt-1 text-xs leading-6 text-[#526274]">
                    Tailored peer cohorts ensure every participant speaks and receives constructive feedback.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5edfb] text-[#6B2D8B]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase text-[#07101f]">
                    Safeguarding First
                  </h3>
                  <p className="mt-1 text-xs leading-6 text-[#526274]">
                    All coaches hold enhanced background checks and certified child protection credentials.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5edfb] text-[#6B2D8B]">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase text-[#07101f]">
                    Action, Not Lectures
                  </h3>
                  <p className="mt-1 text-xs leading-6 text-[#526274]">
                    Interactive games, elevator pitches, and stage showcases that make speaking fun.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5edfb] text-[#6B2D8B]">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase text-[#07101f]">
                    Official Certification
                  </h3>
                  <p className="mt-1 text-xs leading-6 text-[#526274]">
                    Every participant receives a personalized Podio Certificate of Completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PAST EVENTS / ARCHIVE SECTION ─────────────────────────── */}
        {pastEvents.length > 0 && (
          <section className="py-16 lg:py-20 bg-[#faf7fc]">
            <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#e5d9f0] pb-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
                    Event Archive
                  </p>
                  <h2 className="mt-2 text-3xl font-black uppercase leading-tight tracking-[-0.01em] text-[#07101f] sm:text-4xl">
                    Past Events & Recaps
                  </h2>
                </div>
                <p className="text-sm font-semibold text-[#526274]">
                  Browse photos, lessons, and highlights from previous seminars
                </p>
              </div>

              <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {pastEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
