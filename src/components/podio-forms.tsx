"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type SubmitState = "idle" | "loading" | "success" | "error";

function formToPayload(form: HTMLFormElement) {
  const data = new FormData(form);
  return Object.fromEntries(
    Array.from(data.entries()).map(([key, value]) => [
      key,
      value === "on" ? true : value,
    ]),
  );
}

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formToPayload(form)),
    });

    if (response.ok) {
      setState("success");
      form.reset();
      setMessage("Thank you. Podio Academy will respond within 24 hours.");
      return;
    }

    setState("error");
    setMessage("Something went wrong. Please email PodioForKids@gmail.com.");
  }

  return (
    <form
      className="rounded-xl border border-[#e5d9f0] bg-[#fdf8ff] p-6 shadow-[0_24px_60px_rgba(7,16,31,0.08)] sm:p-8"
      onSubmit={onSubmit}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Parent / Guardian Name" name="parentName" required />
        <Field label="Email Address" name="email" required type="email" />
        <Field label="Phone / WhatsApp" name="phone" type="tel" />
        <label className="block">
          <span className="text-sm font-black text-[#07101f]">I need help with</span>
          <select
            className="mt-2 h-12 w-full rounded-lg border border-[#c8d3df] bg-white px-3 text-sm font-semibold outline-none transition focus:border-[#6B2D8B] focus:ring-4 focus:ring-[#e5d9f0]"
            name="enquiryType"
            defaultValue="Book a Free Discovery Session"
          >
            <option>Book a Free Discovery Session</option>
            <option>Parent Enquiries</option>
            <option>Private Coaching</option>
            <option>School Partnerships</option>
          </select>
        </label>
      </div>
      <label className="mt-4 block">
        <span className="text-sm font-black text-[#07101f]">Message</span>
        <textarea
          className="mt-2 min-h-36 w-full rounded-lg border border-[#c8d3df] bg-white px-3 py-3 text-sm font-semibold outline-none transition focus:border-[#6B2D8B] focus:ring-4 focus:ring-[#e5d9f0]"
          name="message"
          placeholder="Tell us a little about your child, schedule, or question."
        />
      </label>
      <SubmitButton state={state}>Send enquiry</SubmitButton>
      <StatusMessage state={state} message={message} />
    </form>
  );
}

export function ConsentForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const displayDate = useMemo(
    () =>
      new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date()),
    [],
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const response = await fetch("/api/consent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formToPayload(form),
        submittedDate: displayDate,
      }),
    });

    if (response.ok) {
      setState("success");
      form.reset();
      setMessage("Consent submitted. Thank you for confirming.");
      return;
    }

    const body = await response.json().catch(() => null);
    setState("error");
    setMessage(body?.error ?? "Please check the required fields and try again.");
  }

  return (
    <form
      className="rounded-xl border border-[#e5d9f0] bg-white p-6 shadow-[0_24px_60px_rgba(7,16,31,0.08)] sm:p-8"
      onSubmit={onSubmit}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Parent / Guardian Name" name="parentName" required />
        <Field label="Child's Full Name" name="childName" required />
        <Field label="Email Address" name="email" required type="email" />
        <div className="rounded-lg border border-[#e5d9f0] bg-[#fdf8ff] p-4 text-sm font-bold text-[#526274]">
          Date: <span className="text-[#07101f]">{displayDate}</span>
        </div>
      </div>

      <ConsentBlock
        description="This includes all live online sessions, speaking exercises, assignments, and any group activities that form part of the enrolled programme."
        required
        title="General Participation Consent"
      >
        <Checkbox
          label="I give permission for my child to participate in Podio Academy programmes and activities"
          name="generalParticipation"
          required
        />
      </ConsentBlock>

      <ConsentBlock
        description="Recordings are stored securely and used only for quality assurance and educational review. They are not shared publicly."
        title="Recording Consent"
      >
        <Checkbox
          label="I understand that sessions may be recorded for educational and quality purposes"
          name="recordingConsent"
        />
      </ConsentBlock>

      <ConsentBlock
        description="Your child's name will not be used without further consent. Your choice has no impact on participation."
        title="Photography & Video Consent"
      >
        <Radio
          label="I consent to my child's image being used for Podio Academy promotional purposes"
          name="photoConsent"
          value="yes"
        />
        <Radio
          label="I do not consent to my child's image being used publicly"
          name="photoConsent"
          value="no"
        />
      </ConsentBlock>

      <ConsentBlock
        description="We will send session reminders, progress updates, and occasional programme news. You can unsubscribe at any time."
        title="Communication Consent"
      >
        <Checkbox
          label="I agree to receive Podio Academy updates, programme information, and relevant communications"
          name="communicationConsent"
        />
      </ConsentBlock>

      <label className="mt-6 block">
        <span className="text-sm font-black text-[#07101f]">Digital Signature *</span>
        <input
          className="mt-2 h-12 w-full rounded-lg border border-[#c8d3df] bg-white px-3 text-sm font-semibold outline-none transition focus:border-[#6B2D8B] focus:ring-4 focus:ring-[#e5d9f0]"
          name="signature"
          placeholder="Type your full legal name"
          required
        />
      </label>
      <p className="mt-3 text-sm leading-6 text-[#526274]">
        By typing your full name above, you confirm that you are the parent or
        legal guardian of the child named above, and that you agree to the
        consents selected. This constitutes a valid digital signature.
      </p>
      <SubmitButton state={state}>Submit Consent Form</SubmitButton>
      <StatusMessage state={state} message={message} />
    </form>
  );
}

function Field({
  label,
  name,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block">
        <span className="text-sm font-black text-[#07101f]">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        className="mt-2 h-12 w-full rounded-lg border border-[#c8d3df] bg-white px-3 text-sm font-semibold outline-none transition focus:border-[#6B2D8B] focus:ring-4 focus:ring-[#e5d9f0]"
        name={name}
        required={required}
        type={type}
      />
    </label>
  );
}

function ConsentBlock({
  title,
  description,
  children,
  required,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <fieldset className="mt-6 rounded-lg border border-[#e5d9f0] bg-[#fdf8ff] p-4">
      <legend className="px-2 text-sm font-black text-[#07101f]">
        {title}
        {required ? " *" : ""}
      </legend>
      <p className="mt-2 text-sm leading-6 text-[#526274]">{description}</p>
      <div className="mt-4 space-y-3">{children}</div>
    </fieldset>
  );
}

function Checkbox({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="flex items-start gap-3 text-sm font-semibold leading-6 text-[#07101f]">
      <input
        className="mt-1 h-4 w-4 rounded border-[#9baabd] text-[#6B2D8B]"
        name={name}
        required={required}
        type="checkbox"
      />
      <span>{label}</span>
    </label>
  );
}

function Radio({
  label,
  name,
  value,
}: {
  label: string;
  name: string;
  value: string;
}) {
  return (
    <label className="flex items-start gap-3 text-sm font-semibold leading-6 text-[#07101f]">
      <input
        className="mt-1 h-4 w-4 border-[#9baabd] text-[#6B2D8B]"
        name={name}
        type="radio"
        value={value}
      />
      <span>{label}</span>
    </label>
  );
}

function SubmitButton({
  children,
  state,
}: {
  children: React.ReactNode;
  state: SubmitState;
}) {
  return (
    <button
      className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#6B2D8B] px-5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#4e1f68] disabled:cursor-not-allowed disabled:opacity-70"
      disabled={state === "loading"}
      type="submit"
    >
      {state === "loading" ? (
        <Loader2 aria-hidden className="h-4 w-4 animate-spin" />
      ) : (
        <ArrowRight aria-hidden className="h-4 w-4" />
      )}
      {children}
    </button>
  );
}

function StatusMessage({
  state,
  message,
}: {
  state: SubmitState;
  message: string;
}) {
  if (!message) {
    return null;
  }

  return (
    <p
      className={
        state === "success"
          ? "mt-4 flex items-center gap-2 rounded-md bg-[#e8f8f4] p-3 text-sm font-semibold text-[#075c52]"
          : "mt-4 rounded-md bg-[#ffe8e8] p-3 text-sm font-semibold text-[#9a1b1b]"
      }
    >
      {state === "success" ? <CheckCircle2 aria-hidden className="h-4 w-4" /> : null}
      {message}
    </p>
  );
}
