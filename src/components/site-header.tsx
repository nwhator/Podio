"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Events", href: "/events" },
  { label: "Pricing", href: "/pricing" },
  { label: "Books", href: "/books" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5d9f0] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-3 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Podio home"
        >
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-[#6B2D8B]">
            <Image
              alt=""
              aria-hidden
              className="h-full w-full"
              height={40}
              src="/podio-icon.svg"
              width={40}
            />
          </span>
          <span className="text-base font-black uppercase tracking-[0.08em] sm:text-lg">
            Podio
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 text-xs font-black uppercase tracking-[0.16em] text-[#526274] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition ${
                isActive(item.href)
                  ? "text-[#6B2D8B]"
                  : "hover:text-[#6B2D8B]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden h-10 items-center justify-center gap-2 rounded-md bg-[#6B2D8B] px-5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#4e1f68] sm:inline-flex"
          >
            Book a session
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[#e5d9f0] text-[#07101f] lg:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X aria-hidden className="h-5 w-5" />
            ) : (
              <Menu aria-hidden className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-[#e5d9f0] bg-white px-5 pb-5 pt-3 lg:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex h-11 items-center rounded-lg px-3 text-sm font-bold transition ${
                  isActive(item.href)
                    ? "bg-[#f5edfb] text-[#6B2D8B]"
                    : "text-[#07101f] hover:bg-[#faf7fc]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#6B2D8B] px-5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#4e1f68]"
            >
              Book a session
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
