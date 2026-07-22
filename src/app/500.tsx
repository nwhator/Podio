import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCcw } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Server Error | Podio",
  description: "Something went wrong on our end. Please try again later or contact us for assistance.",
};

export default function ServerErrorPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#faf7fc] text-[#07101f]">
        <section className="relative isolate flex min-h-[calc(100vh-65px)] items-center justify-center overflow-hidden px-5 py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] to-[#6B2D8B]" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/15 ring-4 ring-white/20">
              <AlertTriangle className="h-12 w-12 text-[#ff6b6b]" />
            </div>

            <h1 className="mt-10 text-[clamp(3rem,8vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.01em] text-white">
              500
              <span className="block text-5xl sm:text-6xl">Server Error</span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-white/90 sm:text-xl">
              We're experiencing some technical difficulties right now. Our team has been notified and is working to fix this issue.
              Please try again in a few minutes.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-8 text-sm font-black uppercase tracking-[0.12em] text-[#6B2D8B] transition hover:bg-[#ffbf47] hover:text-white"
              >
                <Home aria-hidden className="h-5 w-5" />
                Go to Homepage
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
              >
                <RefreshCcw aria-hidden className="h-5 w-5" />
                Try Again
              </Link>
            </div>

            <div className="mt-8 text-sm text-white/70">
              <p>If the problem persists, please contact us at PodioForKids@gmail.com</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}