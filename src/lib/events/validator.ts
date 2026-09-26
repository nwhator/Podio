import type { EventData, EventStatus, AttendanceType } from "@/types/event";

const VALID_STATUSES: EventStatus[] = [
  "draft",
  "coming-soon",
  "registration-open",
  "almost-full",
  "registration-closed",
  "event-day",
  "completed",
];

const VALID_ATTENDANCE: AttendanceType[] = ["in-person", "online", "hybrid"];

export class EventValidationError extends Error {
  constructor(source: string, field: string, message: string) {
    super(
      `Event validation failed in ${source}:\nField: "${field}"\nReason: ${message}`,
    );
    this.name = "EventValidationError";
  }
}

export function validateEvent(raw: unknown, sourcePath: string): EventData {
  if (!raw || typeof raw !== "object") {
    throw new EventValidationError(sourcePath, "root", "Event data must be a JSON object.");
  }

  const data = raw as Record<string, unknown>;

  const requireString = (field: string): string => {
    const val = data[field];
    if (typeof val !== "string" || !val.trim()) {
      throw new EventValidationError(sourcePath, field, `Missing required string field "${field}".`);
    }
    return val.trim();
  };

  const id = (typeof data.id === "string" && data.id.trim()) ? data.id.trim() : requireString("slug");
  const slug = requireString("slug");

  // Validate slug characters
  if (!/^[a-z0-9-]+$/.test(slug)) {
    throw new EventValidationError(
      sourcePath,
      "slug",
      `Slug "${slug}" must only contain lowercase letters, numbers, and hyphens (e.g. "speak-up").`,
    );
  }

  const title = requireString("title");
  const headline = requireString("headline");
  const description = requireString("description");
  const heroImage = (typeof data.heroImage === "string" && data.heroImage.trim())
    ? data.heroImage.trim()
    : "/gallery/DSC_3345.jpeg";

  const rawStatus = requireString("status");
  if (!VALID_STATUSES.includes(rawStatus as EventStatus)) {
    throw new EventValidationError(
      sourcePath,
      "status",
      `Invalid status "${rawStatus}". Must be one of: ${VALID_STATUSES.join(", ")}`,
    );
  }
  const status = rawStatus as EventStatus;

  const date = requireString("date");
  const startTime = requireString("startTime");
  const endTime = requireString("endTime");
  const timezone = typeof data.timezone === "string" ? data.timezone : "WAT (UTC+1)";

  const rawAttendance = requireString("attendanceType");
  if (!VALID_ATTENDANCE.includes(rawAttendance as AttendanceType)) {
    throw new EventValidationError(
      sourcePath,
      "attendanceType",
      `Invalid attendanceType "${rawAttendance}". Must be one of: ${VALID_ATTENDANCE.join(", ")}`,
    );
  }
  const attendanceType = rawAttendance as AttendanceType;

  const ageRange = requireString("ageRange");
  const isFree = typeof data.isFree === "boolean" ? data.isFree : true;

  if (!isFree && (typeof data.price !== "number" || data.price <= 0)) {
    throw new EventValidationError(
      sourcePath,
      "price",
      `When isFree is false, "price" must be a positive number.`,
    );
  }

  // Parse arrays safely
  const schedule = Array.isArray(data.schedule)
    ? data.schedule.map((item, idx) => {
        if (!item || typeof item !== "object" || !item.time || !item.title) {
          throw new EventValidationError(
            sourcePath,
            `schedule[${idx}]`,
            `Schedule item must contain "time" and "title".`,
          );
        }
        return {
          time: String(item.time),
          title: String(item.title),
          description: item.description ? String(item.description) : undefined,
          speaker: item.speaker ? String(item.speaker) : undefined,
          activityType: item.activityType,
        };
      })
    : [];

  const learningOutcomes = Array.isArray(data.learningOutcomes)
    ? data.learningOutcomes.map((item, idx) => {
        if (!item || typeof item !== "object" || !item.title || !item.description) {
          throw new EventValidationError(
            sourcePath,
            `learningOutcomes[${idx}]`,
            `Learning outcome must contain "title" and "description".`,
          );
        }
        return {
          title: String(item.title),
          description: String(item.description),
          icon: item.icon ? String(item.icon) : undefined,
        };
      })
    : [];

  const speakers = Array.isArray(data.speakers)
    ? data.speakers.map((s) => ({
        name: String(s.name || ""),
        role: String(s.role || ""),
        bio: String(s.bio || ""),
        image: s.image ? String(s.image) : undefined,
        expertise: Array.isArray(s.expertise) ? s.expertise.map(String) : [],
        socialUrl: s.socialUrl ? String(s.socialUrl) : undefined,
      }))
    : [];

  const faq = Array.isArray(data.faq)
    ? data.faq.map((f) => ({
        question: String(f.question || ""),
        answer: String(f.answer || ""),
      }))
    : [];

  const gallery = Array.isArray(data.gallery)
    ? data.gallery.map((g) => ({
        src: String(g.src || ""),
        alt: String(g.alt || title),
        caption: g.caption ? String(g.caption) : undefined,
      }))
    : [];

  const testimonials = Array.isArray(data.testimonials)
    ? data.testimonials.map((t) => ({
        quote: String(t.quote || ""),
        name: String(t.name || ""),
        role: String(t.role || ""),
        avatar: t.avatar ? String(t.avatar) : undefined,
      }))
    : [];

  const aboutRaw = (data.about && typeof data.about === "object") ? (data.about as Record<string, unknown>) : {};
  const about = {
    whatIsIt: typeof aboutRaw.whatIsIt === "string" ? aboutRaw.whatIsIt : undefined,
    whyCreated: typeof aboutRaw.whyCreated === "string" ? aboutRaw.whyCreated : undefined,
    problemAddressed: typeof aboutRaw.problemAddressed === "string" ? aboutRaw.problemAddressed : undefined,
    whoIsItFor: typeof aboutRaw.whoIsItFor === "string" ? aboutRaw.whoIsItFor : undefined,
    whatToGain: typeof aboutRaw.whatToGain === "string" ? aboutRaw.whatToGain : undefined,
    paragraphs: Array.isArray(aboutRaw.paragraphs) ? aboutRaw.paragraphs.map(String) : [],
  };

  const audienceRaw = (data.audience && typeof data.audience === "object") ? (data.audience as Record<string, unknown>) : {};
  const audience = {
    ageRange: typeof audienceRaw.ageRange === "string" ? audienceRaw.ageRange : ageRange,
    target: Array.isArray(audienceRaw.target) ? audienceRaw.target.map(String) : ["Children", "Teenagers", "Young Adults"],
    description: typeof audienceRaw.description === "string" ? audienceRaw.description : undefined,
  };

  const recapRaw = (data.recap && typeof data.recap === "object") ? (data.recap as Record<string, unknown>) : undefined;
  const recap = recapRaw
    ? {
        summary: typeof recapRaw.summary === "string" ? recapRaw.summary : undefined,
        participantCount: typeof recapRaw.participantCount === "number" ? recapRaw.participantCount : undefined,
        highlights: Array.isArray(recapRaw.highlights) ? recapRaw.highlights.map(String) : [],
        keyLessons: Array.isArray(recapRaw.keyLessons) ? recapRaw.keyLessons.map(String) : [],
        media: Array.isArray(recapRaw.media) ? recapRaw.media.map((m) => ({
          src: String(m.src || ""),
          caption: m.caption ? String(m.caption) : undefined,
          type: m.type === "video" ? ("video" as const) : ("image" as const),
        })) : [],
      }
    : undefined;

  return {
    id,
    slug,
    title,
    shortTitle: typeof data.shortTitle === "string" ? data.shortTitle : undefined,
    headline,
    description,
    heroImage,
    status,
    date,
    endDate: typeof data.endDate === "string" ? data.endDate : undefined,
    startTime,
    endTime,
    timezone,
    venue: typeof data.venue === "string" ? data.venue : undefined,
    address: typeof data.address === "string" ? data.address : undefined,
    city: typeof data.city === "string" ? data.city : undefined,
    country: typeof data.country === "string" ? data.country : undefined,
    attendanceType,
    ageRange,
    duration: typeof data.duration === "string" ? data.duration : undefined,
    registrationDeadline: typeof data.registrationDeadline === "string" ? data.registrationDeadline : undefined,
    capacity: typeof data.capacity === "number" ? data.capacity : undefined,
    isFree,
    price: typeof data.price === "number" ? data.price : undefined,
    currency: typeof data.currency === "string" ? data.currency : (isFree ? undefined : "NGN"),
    registrationUrl: typeof data.registrationUrl === "string" ? data.registrationUrl : undefined,
    contactEmail: typeof data.contactEmail === "string" ? data.contactEmail : "PodioForKids@gmail.com",
    contactPhone: typeof data.contactPhone === "string" ? data.contactPhone : "+44 7498 502571",
    dressCode: typeof data.dressCode === "string" ? data.dressCode : undefined,
    about,
    learningOutcomes,
    audience,
    schedule,
    speakers,
    faq,
    gallery,
    testimonials,
    recap,
  };
}
