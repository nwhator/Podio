"use client";

import { useState } from "react";
import { Loader2, ShoppingBag } from "lucide-react";

interface BookBuyButtonProps {
  priceId: string;
  label: string;
}

export function BookBuyButton({ priceId, label }: BookBuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleBuy() {
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

  return (
    <div>
      <button
        onClick={handleBuy}
        disabled={loading}
        className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-md bg-[#6B2D8B] px-5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#4e1f68] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {loading ? (
          <Loader2 aria-hidden className="h-4 w-4 animate-spin" />
        ) : (
          <ShoppingBag aria-hidden className="h-3.5 w-3.5" />
        )}
        <span className="ml-1">BUY NOW</span>
      </button>
      {error && (
        <p className="mt-3 rounded-lg bg-[#ffe8e8] p-3 text-sm font-semibold text-[#9a1b1b]">
          {error}
        </p>
      )}
    </div>
  );
}
