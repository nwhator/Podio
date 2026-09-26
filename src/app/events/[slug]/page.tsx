import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EventHero } from "@/components/events/event-hero";
import { EventDetailsBar } from "@/components/events/event-details-bar";
import { EventAboutSection } from "@/components/events/event-about";
import { EventOutcomes } from "@/components/events/event-outcomes";
import { EventAudienceSection } from "@/components/events/event-audience";
import { EventSchedule } from "@/components/events/event-schedule";
import { EventSpeakers } from "@/components/events/event-speakers";
import { EventRecapSection } from "@/components/events/event-recap";
import { EventGallery } from "@/components/events/event-gallery";
import { EventTestimonials } from "@/components/events/event-testimonials";
import { EventFAQSection } from "@/components/events/event-faq";
import { EventStickyBar } from "@/components/events/event-sticky-bar";
import { getEventBySlug, getAllEventSlugs } from "@/lib/events/service";

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllEventSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug, false);

  if (!event) {
    return {
      title: "Event Not Found | Podio",
    };
  }

  const title = `${event.title} — ${event.headline} | Podio Events`;
  const description = event.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://podioforkids.com/events/${event.slug}`,
      siteName: "Podio",
      images: [
        {
          url: event.heroImage.startsWith("http")
            ? event.heroImage
            : `https://podioforkids.com${event.heroImage}`,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        event.heroImage.startsWith("http")
          ? event.heroImage
          : `https://podioforkids.com${event.heroImage}`,
      ],
    },
  };
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug, false);

  if (!event) {
    notFound();
  }

  // Schema.org Event JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    startDate: `${event.date}T${event.startTime.replace(/[^0-9:]/g, "") || "09:00"}:00`,
    endDate: `${event.date}T${event.endTime.replace(/[^0-9:]/g, "") || "17:00"}:00`,
    eventStatus:
      event.status === "completed"
        ? "https://schema.org/EventCompleted"
        : event.status === "registration-closed"
        ? "https://schema.org/EventPostponed"
        : "https://schema.org/EventScheduled",
    eventAttendanceMode:
      event.attendanceType === "online"
        ? "https://schema.org/OnlineEventAttendanceMode"
        : "https://schema.org/OfflineEventAttendanceMode",
    location:
      event.attendanceType === "online"
        ? {
            "@type": "VirtualLocation",
            url: `https://podioforkids.com/events/${event.slug}`,
          }
        : {
            "@type": "Place",
            name: event.venue || event.city,
            address: {
              "@type": "PostalAddress",
              streetAddress: event.address || "",
              addressLocality: event.city || "",
              addressCountry: event.country || "",
            },
          },
    image: [event.heroImage],
    organizer: {
      "@type": "Organization",
      name: "Podio Academy",
      url: "https://podioforkids.com",
    },
    offers: {
      "@type": "Offer",
      price: event.isFree ? "0" : String(event.price || 0),
      priceCurrency: event.currency || "GBP",
      availability:
        event.status === "registration-open" || event.status === "almost-full"
          ? "https://schema.org/InStock"
          : "https://schema.org/SoldOut",
      url: `https://podioforkids.com/events/${event.slug}/register`,
    },
  };

  return (
    <>
      {/* Event Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />
      <main className="min-h-screen bg-white text-[#07101f]">
        {/* 1. Hero Section */}
        <EventHero event={event} />

        {/* 2. Event Key Details Bar */}
        <EventDetailsBar event={event} />

        {/* 3. About Section */}
        <EventAboutSection
          about={event.about}
          title={event.title}
          image={event.heroImage}
        />

        {/* 4. Learning Outcomes */}
        <EventOutcomes
          outcomes={event.learningOutcomes}
          title={event.title}
        />

        {/* 5. Target Audience */}
        <EventAudienceSection
          audience={event.audience}
          title={event.title}
        />

        {/* 6. Programme Schedule */}
        <EventSchedule
          schedule={event.schedule}
          title={event.title}
        />

        {/* 7. Speakers & Facilitators */}
        <EventSpeakers
          speakers={event.speakers}
          title={event.title}
        />

        {/* 8. Event Recap (if completed) */}
        {event.recap && (
          <EventRecapSection
            recap={event.recap}
            title={event.title}
          />
        )}

        {/* 9. Event Gallery */}
        <EventGallery
          gallery={event.gallery}
          title={event.title}
        />

        {/* 10. Testimonials */}
        <EventTestimonials
          testimonials={event.testimonials}
          title={event.title}
        />

        {/* 11. FAQ */}
        <EventFAQSection
          faq={event.faq}
          title={event.title}
        />

        {/* 12. Sticky Registration Callout Bar */}
        <EventStickyBar event={event} />
      </main>
      <SiteFooter />
    </>
  );
}
