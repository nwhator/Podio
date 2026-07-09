"use client";

import { useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";

interface EnrolButtonProps {
  priceId: string | undefined;
  envKeyName?: string;
  label?: string;
  /** "primary" = solid purple fill, "secondary" = outlined */
  variant?: "primary" | "secondary";
}

export function EnrolButton({
  priceId,
  envKeyName,
  label = "Enrol now",
  variant = "primary",
}: EnrolButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleEnrol() {
    if (!priceId) {
      const configMsg = envKeyName
        ? ` (Missing environment variable: ${envKeyName})`
        : "";
      setError(
        `Online enrolment isn't configured yet.${configMsg} Please contact us at PodioForKids@gmail.com or call +44 7498 502571 to enrol.`,
      );
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Could not start checkout. Please try again.");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
      setLoading(false);
    }
  }

  const cls =
    variant === "primary"
      ? "inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#6B2D8B] px-5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#4e1f68] disabled:cursor-not-allowed disabled:opacity-60"
      : "inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border-2 border-[#6B2D8B] px-5 text-xs font-black uppercase tracking-[0.12em] text-[#6B2D8B] transition hover:bg-[#f5edfb] disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <div>
      <button onClick={handleEnrol} disabled={loading} className={cls}>
        {loading ? (
          <Loader2 aria-hidden className="h-4 w-4 animate-spin" />
        ) : (
          <ArrowUpRight aria-hidden className="h-4 w-4" />
        )}
        {loading ? "Redirecting to checkout…" : label}
      </button>
      {error && (
        <p className="mt-3 rounded-lg bg-[#ffe8e8] p-3 text-sm font-semibold text-[#9a1b1b]">
          {error}
        </p>
      )}
    </div>
  );
}
