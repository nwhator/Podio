import type { Metadata } from "next";
import Link from "next/link";
import { Home, AlertCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Page Not Found | Podio",
  description: "The page you're looking for doesn't exist. Let's help you find what you need.",
};

export default function NotFoundPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#faf7fc] text-[#07101f]">
        <section className="relative isolate flex min-h-[calc(100vh-65px)] items-center justify-center overflow-hidden px-5 py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d1158] to-[#6B2D8B]" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/15 ring-4 ring-white/20">
              <AlertCircle className="h-12 w-12 text-[#ffbf47]" />
            </div>

            <h1 className="mt-10 text-[clamp(3rem,8vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.01em] text-white">
              404
              <span className="block text-5xl sm:text-6xl">Page Not Found</span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-[#e8d4f5] sm:text-xl">
              Oops! The page you're trying to visit doesn't exist or may have been moved.
              Let's get you back on track with finding your voice.
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
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}