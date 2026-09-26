"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  Building,
  MapPin,
  Calendar,
  AlertCircle,
  Loader2,
  CheckCircle2,
  Shield,
  Sparkles,
  Ticket,
} from "lucide-react";
import type { EventData } from "@/types/event";

interface RegisterFormProps {
  event: EventData;
}

export function RegisterForm({ event }: RegisterFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form Fields
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [schoolOrOrganization, setSchoolOrOrganization] = useState("");
  const [city, setCity] = useState(event.city || "");

  // Parent/Guardian fields
  const [parentName, setParentName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [parentRelationship, setParentRelationship] = useState("Parent");

  const isUnder18 = typeof age === "number" && age > 0 && age < 18;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/events/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventSlug: event.slug,
          fullName,
          age,
          email,
          phone,
          schoolOrOrganization,
          city,
          parentName: isUnder18 ? parentName : parentName || undefined,
          parentEmail: isUnder18 ? parentEmail : parentEmail || undefined,
          parentPhone: isUnder18 ? parentPhone : parentPhone || undefined,
          parentRelationship: isUnder18 ? parentRelationship : undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Registration failed. Please try again.");
      }

      // Encode params for confirmation page
      const query = new URLSearchParams({
        ref: data.reference,
        name: fullName,
        email: email,
      }).toString();

      router.push(`/events/${event.slug}/confirmation?${query}`);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred.",
      );
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="h-5 w-5 shrink-0 text-red-600 mt-0.5" />
          <p>{error}</p>
        </div>
      )}

      {/* ── SECTION 1: PARTICIPANT DETAILS ──────────────────────────── */}
      <div className="rounded-2xl border border-[#e5d9f0] bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#6B2D8B]">
          <User className="h-4 w-4" />
          <span>Step 1: Participant Information</span>
        </div>
        <h3 className="mt-2 text-xl font-black uppercase text-[#07101f]">
          Who is attending?
        </h3>
        <p className="mt-1 text-xs text-[#526274]">
          Eligible for young people in age group {event.ageRange}.
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {/* Full Name */}
          <div className="sm:col-span-2">
            <label
              htmlFor="fullName"
              className="block text-xs font-black uppercase tracking-wider text-[#07101f]"
            >
              Participant's Full Name *
            </label>
            <div className="relative mt-2">
              <input
                id="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Leo Johnson"
                className="w-full rounded-xl border border-[#e5d9f0] bg-[#faf7fc] px-4 py-3 text-sm text-[#07101f] focus:border-[#6B2D8B] focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Age */}
          <div>
            <label
              htmlFor="age"
              className="block text-xs font-black uppercase tracking-wider text-[#07101f]"
            >
              Age (Years) *
            </label>
            <input
              id="age"
              type="number"
              min={5}
              max={30}
              required
              value={age}
              onChange={(e) =>
                setAge(e.target.value === "" ? "" : Number(e.target.value))
              }
              placeholder="e.g. 14"
              className="mt-2 w-full rounded-xl border border-[#e5d9f0] bg-[#faf7fc] px-4 py-3 text-sm text-[#07101f] focus:border-[#6B2D8B] focus:bg-white focus:outline-none"
            />
          </div>

          {/* City */}
          <div>
            <label
              htmlFor="city"
              className="block text-xs font-black uppercase tracking-wider text-[#07101f]"
            >
              Current City *
            </label>
            <input
              id="city"
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Lagos or London"
              className="mt-2 w-full rounded-xl border border-[#e5d9f0] bg-[#faf7fc] px-4 py-3 text-sm text-[#07101f] focus:border-[#6B2D8B] focus:bg-white focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-black uppercase tracking-wider text-[#07101f]"
            >
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="participant or parent email"
              className="mt-2 w-full rounded-xl border border-[#e5d9f0] bg-[#faf7fc] px-4 py-3 text-sm text-[#07101f] focus:border-[#6B2D8B] focus:bg-white focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-black uppercase tracking-wider text-[#07101f]"
            >
              Phone / WhatsApp Number *
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+234 or +44..."
              className="mt-2 w-full rounded-xl border border-[#e5d9f0] bg-[#faf7fc] px-4 py-3 text-sm text-[#07101f] focus:border-[#6B2D8B] focus:bg-white focus:outline-none"
            />
          </div>

          {/* School or Organization */}
          <div className="sm:col-span-2">
            <label
              htmlFor="school"
              className="block text-xs font-black uppercase tracking-wider text-[#07101f]"
            >
              School, College, or Organization (Optional)
            </label>
            <input
              id="school"
              type="text"
              value={schoolOrOrganization}
              onChange={(e) => setSchoolOrOrganization(e.target.value)}
              placeholder="e.g. Corona Secondary School"
              className="mt-2 w-full rounded-xl border border-[#e5d9f0] bg-[#faf7fc] px-4 py-3 text-sm text-[#07101f] focus:border-[#6B2D8B] focus:bg-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* ── SECTION 2: PARENT / GUARDIAN (AUTO CONDITIONAL) ─────────── */}
      {isUnder18 && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 sm:p-8 shadow-sm animate-fadeIn">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-800">
            <Shield className="h-4 w-4 text-amber-600" />
            <span>Step 2: Parent or Guardian Contact (Required for under 18)</span>
          </div>
          <h3 className="mt-2 text-xl font-black uppercase text-[#07101f]">
            Parent / Guardian Details
          </h3>
          <p className="mt-1 text-xs text-[#526274]">
            Required under Podio's UK safeguarding and emergency notification policy.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="parentName"
                className="block text-xs font-black uppercase tracking-wider text-[#07101f]"
              >
                Parent / Guardian Name *
              </label>
              <input
                id="parentName"
                type="text"
                required={isUnder18}
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                placeholder="Full Name"
                className="mt-2 w-full rounded-xl border border-[#e5d9f0] bg-white px-4 py-3 text-sm text-[#07101f] focus:border-[#6B2D8B] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="parentRelationship"
                className="block text-xs font-black uppercase tracking-wider text-[#07101f]"
              >
                Relationship *
              </label>
              <select
                id="parentRelationship"
                value={parentRelationship}
                onChange={(e) => setParentRelationship(e.target.value)}
                className="mt-2 w-full rounded-xl border border-[#e5d9f0] bg-white px-4 py-3 text-sm text-[#07101f] focus:border-[#6B2D8B] focus:outline-none"
              >
                <option value="Mother">Mother</option>
                <option value="Father">Father</option>
                <option value="Guardian">Guardian</option>
                <option value="Teacher/Mentor">Teacher / Mentor</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="parentPhone"
                className="block text-xs font-black uppercase tracking-wider text-[#07101f]"
              >
                Parent Phone Number *
              </label>
              <input
                id="parentPhone"
                type="tel"
                required={isUnder18}
                value={parentPhone}
                onChange={(e) => setParentPhone(e.target.value)}
                placeholder="Emergency contact number"
                className="mt-2 w-full rounded-xl border border-[#e5d9f0] bg-white px-4 py-3 text-sm text-[#07101f] focus:border-[#6B2D8B] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="parentEmail"
                className="block text-xs font-black uppercase tracking-wider text-[#07101f]"
              >
                Parent Email (Optional)
              </label>
              <input
                id="parentEmail"
                type="email"
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
                placeholder="parent@example.com"
                className="mt-2 w-full rounded-xl border border-[#e5d9f0] bg-white px-4 py-3 text-sm text-[#07101f] focus:border-[#6B2D8B] focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* ── SECTION 3: ADMISSION SUMMARY & SUBMIT ────────────────────── */}
      <div className="rounded-2xl border border-[#e5d9f0] bg-[#fdf8ff] p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5d9f0] pb-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#6B2D8B]">
              Admission Type
            </span>
            <p className="text-xl font-black text-[#07101f]">
              {event.title} — {event.headline}
            </p>
          </div>

          <span className="rounded-xl bg-[#6B2D8B] px-4 py-2 text-sm font-black uppercase tracking-wider text-white shadow">
            {event.isFree ? "Free Registration" : `${event.currency || "£"}${event.price}`}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-[#526274]">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>Includes workbook, workshop materials, mentorship, and completion certificate.</span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#6B2D8B] px-8 text-sm font-black uppercase tracking-[0.14em] text-white shadow-xl transition-all hover:bg-[#4e1f68] hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Processing Registration...</span>
            </>
          ) : (
            <>
              <Ticket className="h-5 w-5" />
              <span>Confirm & Complete Registration</span>
            </>
          )}
        </button>

        <p className="mt-3 text-center text-xs text-[#526274]">
          By submitting, you agree to Podio's safeguarding terms and code of conduct.
        </p>
      </div>
    </form>
  );
}
