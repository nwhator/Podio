import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ConfirmationView } from "./confirmation-view";
import { getEventBySlug } from "@/lib/events/service";

interface ConfirmationPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const metadata: Metadata = {
  title: "Registration Confirmed | Podio",
  description: "Your registration for Podio's seminar has been confirmed.",
};

export default async function ConfirmationPage({
  params,
  searchParams,
}: ConfirmationPageProps) {
  const { slug } = await params;
  const search = await searchParams;
  const event = await getEventBySlug(slug, true);

  if (!event) {
    notFound();
  }

  const reference =
    typeof search.ref === "string"
      ? search.ref
      : `PODIO-${event.slug.toUpperCase()}-CONFIRMED`;

  const participantName =
    typeof search.name === "string" ? search.name : "Registered Participant";

  const participantEmail =
    typeof search.email === "string" ? search.email : undefined;

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#faf7fc]">
        <ConfirmationView
          event={event}
          reference={reference}
          participantName={participantName}
          participantEmail={participantEmail}
        />
      </main>
      <SiteFooter />
    </>
  );
}
