import fs from "fs";
import path from "path";
import type { EventData } from "@/types/event";
import { validateEvent } from "./validator";

const EVENTS_DIR = path.join(process.cwd(), "content", "events");

function readJsonFile<T = unknown>(filePath: string): T | null {
  try {
    if (!fs.existsSync(filePath)) return null;
    const content = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(content) as T;
  } catch (err) {
    console.error(`Error reading JSON file at ${filePath}:`, err);
    return null;
  }
}

/**
 * Loads a single event directory, reading `event.json` and any modular files
 * like `schedule.json`, `speakers.json`, `faq.json`, `testimonials.json`, `gallery.json`, `recap.json`.
 */
export function loadEventFromDir(eventDir: string, slugHint?: string): EventData {
  const mainFile = path.join(eventDir, "event.json");
  if (!fs.existsSync(mainFile)) {
    throw new Error(`Event directory ${eventDir} is missing required "event.json" file.`);
  }

  const rawEvent = readJsonFile<Record<string, unknown>>(mainFile) || {};

  // If slug is not defined in event.json, fallback to directory name
  if (!rawEvent.slug && slugHint) {
    rawEvent.slug = slugHint;
  }

  // Check for modular companion files and merge if present
  const scheduleFile = path.join(eventDir, "schedule.json");
  const modularSchedule = readJsonFile(scheduleFile);
  if (modularSchedule) {
    rawEvent.schedule = modularSchedule;
  }

  const speakersFile = path.join(eventDir, "speakers.json");
  const modularSpeakers = readJsonFile(speakersFile);
  if (modularSpeakers) {
    rawEvent.speakers = modularSpeakers;
  }

  const faqFile = path.join(eventDir, "faq.json");
  const modularFaq = readJsonFile(faqFile);
  if (modularFaq) {
    rawEvent.faq = modularFaq;
  }

  const testimonialsFile = path.join(eventDir, "testimonials.json");
  const modularTestimonials = readJsonFile(testimonialsFile);
  if (modularTestimonials) {
    rawEvent.testimonials = modularTestimonials;
  }

  const galleryFile = path.join(eventDir, "gallery.json");
  const modularGallery = readJsonFile(galleryFile);
  if (modularGallery) {
    rawEvent.gallery = modularGallery;
  }

  const recapFile = path.join(eventDir, "recap.json");
  const modularRecap = readJsonFile(recapFile);
  if (modularRecap) {
    rawEvent.recap = modularRecap;
  }

  return validateEvent(rawEvent, mainFile);
}

/**
 * Loads all events from the GitHub-managed content/events/ directory.
 */
export async function getAllEvents(includeDrafts = false): Promise<EventData[]> {
  if (!fs.existsSync(EVENTS_DIR)) {
    return [];
  }

  const entries = fs.readdirSync(EVENTS_DIR, { withFileTypes: true });
  const events: EventData[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const eventDirPath = path.join(EVENTS_DIR, entry.name);
      const eventJsonPath = path.join(eventDirPath, "event.json");
      if (fs.existsSync(eventJsonPath)) {
        try {
          const event = loadEventFromDir(eventDirPath, entry.name);
          if (includeDrafts || event.status !== "draft") {
            events.push(event);
          }
        } catch (err) {
          console.error(`Failed to load event at ${eventDirPath}:`, err);
          throw err; // Fail fast during build so invalid content is detected immediately
        }
      }
    }
  }

  // Sort chronologically by date
  events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return events;
}

/**
 * Loads a single event by slug.
 */
export async function getEventBySlug(
  slug: string,
  includeDrafts = false,
): Promise<EventData | null> {
  const events = await getAllEvents(true);
  const event = events.find((e) => e.slug === slug);
  if (!event) return null;
  if (!includeDrafts && event.status === "draft") return null;
  return event;
}

/**
 * Returns all upcoming events (status !== 'completed' and status !== 'draft').
 */
export async function getUpcomingEvents(): Promise<EventData[]> {
  const events = await getAllEvents(false);
  return events
    .filter((e) => e.status !== "completed")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

/**
 * Returns all past/completed events (status === 'completed').
 */
export async function getPastEvents(): Promise<EventData[]> {
  const events = await getAllEvents(false);
  return events
    .filter((e) => e.status === "completed")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Returns all public slugs for Next.js generateStaticParams.
 */
export async function getAllEventSlugs(): Promise<string[]> {
  const events = await getAllEvents(false);
  return events.map((e) => e.slug);
}
