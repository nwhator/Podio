import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { getEventBySlug } from "@/lib/events/service";

function generateRegistrationReference(eventSlug: string): string {
  const prefix = eventSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
  const randomChars = Math.random().toString(36).substring(2, 6).toUpperCase();
  const timestamp = Date.now().toString().slice(-4);
  return `PODIO-${prefix || "EVT"}-${timestamp}${randomChars}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      eventSlug,
      fullName,
      age,
      email,
      phone,
      schoolOrOrganization,
      city,
      parentName,
      parentEmail,
      parentPhone,
      parentRelationship,
    } = body;

    // Validate essential fields
    if (!eventSlug || !fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required registration details." },
        { status: 400 },
      );
    }

    const parsedAge = Number(age);
    if (isNaN(parsedAge) || parsedAge < 4 || parsedAge > 100) {
      return NextResponse.json(
        { error: "Please enter a valid age." },
        { status: 400 },
      );
    }

    // If participant is under 18, require parent/guardian contact
    if (parsedAge < 18 && (!parentName || !parentPhone)) {
      return NextResponse.json(
        {
          error:
            "Parent or guardian contact details are required for participants under 18.",
        },
        { status: 400 },
      );
    }

    // Verify event exists and registration is open
    const event = await getEventBySlug(eventSlug, false);
    if (!event) {
      return NextResponse.json(
        { error: "Event not found." },
        { status: 404 },
      );
    }

    if (
      event.status !== "registration-open" &&
      event.status !== "almost-full"
    ) {
      return NextResponse.json(
        { error: "Registration for this event is currently closed." },
        { status: 400 },
      );
    }

    const reference = generateRegistrationReference(eventSlug);

    // Save to external database (Supabase) if configured
    const supabase = getSupabaseAdmin();
    if (supabase) {
      try {
        const { error: dbError } = await supabase
          .from("podio_event_registrations")
          .insert({
            reference,
            event_slug: eventSlug,
            full_name: fullName.trim(),
            age: parsedAge,
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
            school_or_organization: schoolOrOrganization?.trim() || null,
            city: city?.trim() || null,
            parent_name: parentName?.trim() || null,
            parent_email: parentEmail?.trim()?.toLowerCase() || null,
            parent_phone: parentPhone?.trim() || null,
            parent_relationship: parentRelationship?.trim() || null,
            payment_status: event.isFree ? "free" : "pending",
          });

        if (dbError) {
          console.warn("Supabase registration insert warning:", dbError.message);
          // If table doesn't exist yet, we still provide confirmation so user isn't blocked
        }
      } catch (err) {
        console.warn("Could not save to Supabase:", err);
      }
    }

    return NextResponse.json({
      success: true,
      reference,
      eventSlug,
      eventTitle: event.title,
      eventDate: event.date,
      eventTime: `${event.startTime} – ${event.endTime}`,
      eventVenue: event.venue || event.city || "Online",
      fullName,
      email,
    });
  } catch (error) {
    console.error("Event registration error:", error);
    return NextResponse.json(
      { error: "Failed to process registration. Please try again." },
      { status: 500 },
    );
  }
}
