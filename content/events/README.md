# Podio Events & Seminars — GitHub Content Management Guide

All events on the Podio website are managed directly through GitHub. **There is no admin UI, CMS, or backend dashboard.**

When you create, edit, or delete an event in this repository, GitHub Actions / your deployment pipeline automatically builds and deploys the changes to the live site.

---

## Folder Structure

Each event lives in its own folder under `content/events/<event-slug>/`:

```text
content/
  events/
    speak-up/
      event.json           # Main event configuration (Required)
      schedule.json        # Programme agenda & timeline (Optional modular file)
      speakers.json        # Speakers and coaches (Optional modular file)
      faq.json             # Event FAQs (Optional modular file)
      testimonials.json    # Event reviews and quotes (Optional modular file)
      gallery.json         # Photos from the event (Optional modular file)
      recap.json           # Recap & highlights for completed events (Optional)
```

> **Note:** You can put all data in a single `event.json` file, or break it down into modular files (`schedule.json`, `speakers.json`, etc.). The system automatically merges them!

---

## How to Create a New Event

1. **Create a new folder** under `content/events/`:
   ```bash
   content/events/confidence-bootcamp/
   ```
2. **Add an `event.json`** file inside the folder with required fields:
   ```json
   {
     "id": "confidence-bootcamp",
     "slug": "confidence-bootcamp",
     "title": "Confidence Bootcamp",
     "headline": "Overcome Stage Fright & Find Your Voice",
     "description": "A 1-day masterclass for teenagers preparing for high school debates and interviews.",
     "heroImage": "/gallery/DSC_3345.jpeg",
     "status": "registration-open",
     "date": "2026-08-15",
     "startTime": "10:00 AM",
     "endTime": "04:00 PM",
     "timezone": "WAT (UTC+1)",
     "venue": "The Landmark Centre, Victoria Island",
     "city": "Lagos",
     "country": "Nigeria",
     "attendanceType": "in-person",
     "ageRange": "12–18",
     "duration": "6 Hours",
     "capacity": 50,
     "isFree": true,
     "about": {
       "whatIsIt": "A dynamic in-person confidence masterclass...",
       "whyCreated": "To help young people speak with clarity before anxiety sets in...",
       "problemAddressed": "Stage fright and voice hesitation in public settings...",
       "whoIsItFor": "Middle school and secondary school students...",
       "whatToGain": "Actionable speaking frameworks and live stage practice."
     },
     "learningOutcomes": [
       {
         "title": "Vocal Projection",
         "description": "Speak loudly and clearly without voice strain."
       }
     ],
     "audience": {
       "ageRange": "12–18",
       "target": ["Students", "Teenagers", "Aspiring Debaters"]
     }
   }
   ```
3. **Commit & Push to GitHub**:
   ```bash
   git add content/events/confidence-bootcamp
   git commit -m "Add Confidence Bootcamp event"
   git push origin main
   ```
   The website will automatically build and publish:
   - Event Hub: `/events`
   - Event Page: `/events/confidence-bootcamp`
   - Registration: `/events/confidence-bootcamp/register`

---

## Supported Event Statuses

Change `"status"` in `event.json` to automatically update the website UI:

| Status | Display Badge | Primary CTA | Behavior |
| :--- | :--- | :--- | :--- |
| `draft` | *Hidden* | *None* | Hidden from `/events` listing and public routes. |
| `coming-soon` | **Coming Soon** | **Get Notified** | Announces the event before registration begins. |
| `registration-open` | **Registration Open** | **Register Now** | Full registration active via `/events/[slug]/register`. |
| `almost-full` | **Almost Full** | **Register Now** | Urgency badge indicating high demand. |
| `registration-closed` | **Registration Closed** | *Disabled* | Disables the registration form and notifies visitors. |
| `event-day` | **Happening Today** | **View Details** | Highlights the event as live today. |
| `completed` | **Event Completed** | **View Event Recap** | Automatically moves to **Past Events** tab and enables the recap section with photos and lessons. |

---

## Marking an Event as Completed (Event Recap)

When an event has concluded, you don't need to delete it! Simply:

1. Change `"status": "completed"` in `event.json`.
2. Add a `"recap"` section in `event.json` (or in `recap.json`):
   ```json
   "recap": {
     "summary": "Youth Communication Day 2026 was a tremendous success!",
     "participantCount": 65,
     "highlights": [
       "65 students aged 11–18 completed the 6-hour masterclass.",
       "100% of participants took the podium and delivered an impromptu speech."
     ],
     "keyLessons": [
       "Confidence is taught through gentle practice, never pressure."
     ]
   }
   ```
3. Add photos to `"gallery"`:
   ```json
   "gallery": [
     { "src": "/gallery/DSC_3383.jpeg", "alt": "Greenwich workshop group" },
     { "src": "/gallery/DSC_3390.jpeg", "alt": "Student presenting proudly" }
   ]
   ```
4. Commit and push. The event page automatically transforms into a permanent event recap archive!

---

## Dynamic Registrations & Security

- Participant registrations are **never committed to GitHub** to protect privacy and comply with GDPR / UK Safeguarding laws.
- Submissions are securely processed by the API and stored in your database (e.g. Supabase `podio_event_registrations` table).
- Registered participants automatically receive a unique reference code (e.g. `PODIO-SPK-94821`), a Google Calendar link, and a `.ics` calendar file.
