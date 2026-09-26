export type EventStatus =
  | "draft"
  | "coming-soon"
  | "registration-open"
  | "almost-full"
  | "registration-closed"
  | "event-day"
  | "completed";

export type AttendanceType = "in-person" | "online" | "hybrid";

export interface LearningOutcome {
  title: string;
  description: string;
  icon?: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
  speaker?: string;
  activityType?: "session" | "workshop" | "break" | "interactive" | "showcase";
}

export interface Speaker {
  name: string;
  role: string;
  bio: string;
  image?: string;
  expertise?: string[];
  socialUrl?: string;
}

export interface EventFAQ {
  question: string;
  answer: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface EventTestimonial {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}

export interface RecapMediaItem {
  src: string;
  alt?: string;
  caption?: string;
  type?: "image" | "video";
}

export interface EventRecap {
  summary?: string;
  participantCount?: number;
  highlights?: string[];
  keyLessons?: string[];
  media?: RecapMediaItem[];
}

export interface EventAbout {
  whatIsIt?: string;
  whyCreated?: string;
  problemAddressed?: string;
  whoIsItFor?: string;
  whatToGain?: string;
  paragraphs?: string[];
}

export interface EventAudience {
  ageRange: string;
  target: string[];
  description?: string;
}

export interface EventData {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  headline: string;
  description: string;
  heroImage: string;
  status: EventStatus;
  date: string; // ISO date string: YYYY-MM-DD
  endDate?: string;
  startTime: string;
  endTime: string;
  timezone: string;
  venue?: string;
  address?: string;
  city?: string;
  country?: string;
  attendanceType: AttendanceType;
  ageRange: string;
  duration?: string;
  registrationDeadline?: string;
  capacity?: number;
  isFree: boolean;
  price?: number;
  currency?: string;
  registrationUrl?: string;
  contactEmail?: string;
  contactPhone?: string;
  dressCode?: string;
  about: EventAbout;
  learningOutcomes: LearningOutcome[];
  audience: EventAudience;
  schedule: ScheduleItem[];
  speakers: Speaker[];
  faq: EventFAQ[];
  gallery: GalleryItem[];
  testimonials: EventTestimonial[];
  recap?: EventRecap;
}

export interface RegistrationSubmission {
  eventSlug: string;
  fullName: string;
  age: number;
  email: string;
  phone: string;
  schoolOrOrganization?: string;
  city?: string;
  parentName?: string;
  parentEmail?: string;
  parentPhone?: string;
  parentRelationship?: string;
}

export interface RegistrationRecord extends RegistrationSubmission {
  id?: number | string;
  reference: string;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  eventVenue: string;
  paymentStatus: "free" | "paid" | "pending";
  createdAt: string;
}
