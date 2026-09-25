"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  X,
  BookOpen,
  Volume2,
  VolumeX,
  Columns2,
  Square,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import type { BookProduct } from "@/lib/podio-content";
import { BookBuyButton } from "@/app/books/book-buy-button";

interface FlipbookReaderProps {
  book: BookProduct;
  allBooks?: BookProduct[];
  onSelectBook?: (bookId: string) => void;
  onClose: () => void;
}

export function FlipbookReader({
  book,
  allBooks = [],
  onSelectBook,
  onClose,
}: FlipbookReaderProps) {
  // Page index starts at 0 (page 1)
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isSpread, setIsSpread] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [isFlipping, setIsFlipping] = useState<"next" | "prev" | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const pages = book.previewPages || [];
  const total = pages.length;

  // Synthesize realistic subtle paper rustle sound using Web Audio API
  const playPageSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const bufferSize = ctx.sampleRate * 0.18;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 1200;
      filter.Q.value = 1.2;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();
    } catch {
      // AudioContext policy or unsupported
    }
  }, [soundEnabled]);

  // Reset to first page when active book changes
  useEffect(() => {
    setCurrentPage(0);
  }, [book.id]);

  // Responsive mode: on mobile (<768px), force single-page view
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsSpread(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute displayed pages for spread mode
  // In spread mode:
  // Page 0 (Cover) is shown on right (or single cover spread)
  // Subsequent pages are shown in pairs: (1, 2), (3, 4), etc.
  const isCover = currentPage === 0;
  const leftPageIndex = isSpread ? (isCover ? null : currentPage) : currentPage;
  const rightPageIndex = isSpread ? (isCover ? 0 : currentPage + 1 < total ? currentPage + 1 : null) : null;

  const canGoPrev = currentPage > 0;
  const canGoNext = isSpread
    ? (isCover ? total > 1 : currentPage + 2 < total)
    : currentPage + 1 < total;

  const goToNext = useCallback(() => {
    if (!canGoNext) return;
    setIsFlipping("next");
    playPageSound();
    setTimeout(() => {
      if (isSpread) {
        if (isCover) {
          setCurrentPage(1);
        } else {
          setCurrentPage((prev) => Math.min(prev + 2, total - 1));
        }
      } else {
        setCurrentPage((prev) => Math.min(prev + 1, total - 1));
      }
      setIsFlipping(null);
    }, 200);
  }, [canGoNext, isSpread, isCover, total, playPageSound]);

  const goToPrev = useCallback(() => {
    if (!canGoPrev) return;
    setIsFlipping("prev");
    playPageSound();
    setTimeout(() => {
      if (isSpread) {
        if (currentPage <= 2) {
          setCurrentPage(0);
        } else {
          setCurrentPage((prev) => Math.max(prev - 2, 0));
        }
      } else {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
      }
      setIsFlipping(null);
    }, 200);
  }, [canGoPrev, isSpread, currentPage, playPageSound]);

  // Keyboard navigation & Fullscreen sync
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, isFullscreen, onClose]);

  // Direct page selection from thumbnail scrubber
  function handleJumpToPage(index: number) {
    playPageSound();
    if (isSpread) {
      if (index === 0) {
        setCurrentPage(0);
      } else if (index % 2 === 1) {
        setCurrentPage(index);
      } else {
        setCurrentPage(index - 1);
      }
    } else {
      setCurrentPage(index);
    }
  }

  // Label for current spread
  const pageLabel = isSpread
    ? isCover
      ? `Cover (Page 1 of ${total})`
      : rightPageIndex !== null
      ? `Pages ${leftPageIndex! + 1}–${rightPageIndex + 1} of ${total}`
      : `Page ${leftPageIndex! + 1} of ${total}`
    : `Page ${currentPage + 1} of ${total}`;

  return (
    <div
      ref={containerRef}
      data-no-print="true"
      onContextMenu={(e) => e.preventDefault()}
      className={`flipbook-preview relative select-none transition-all duration-300 ${
        isFullscreen
          ? "fixed inset-0 z-50 flex flex-col bg-[#070b14]/95 p-4 backdrop-blur-md"
          : "my-8 rounded-3xl border-2 border-[#6B2D8B]/30 bg-gradient-to-b from-[#1c1228] to-[#0c0714] p-4 text-white shadow-2xl sm:p-7"
      }`}
    >
      {/* ── TOP HEADER / TOOLBAR ────────────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6B2D8B] text-[#ffbf47] shadow-inner">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#ffbf47]/20 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#ffbf47]">
                Online Preview
              </span>
              <span className="hidden text-xs text-white/50 sm:inline">
                Read-only flipbook • Non-downloadable
              </span>
            </div>
            <h3 className="text-base font-black uppercase tracking-wide text-white sm:text-lg">
              {book.name}
            </h3>
          </div>
        </div>

        {/* Switcher tabs if multiple books provided */}
        {allBooks.length > 1 && onSelectBook && (
          <div className="flex items-center gap-1 rounded-xl bg-white/10 p-1">
            {allBooks.map((b) => {
              const active = b.id === book.id;
              return (
                <button
                  key={b.id}
                  onClick={() => onSelectBook(b.id)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                    active
                      ? "bg-[#6B2D8B] text-white shadow"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {b.name.includes("Teen") ? "Teen Edition" : "Junior Edition"}
                </button>
              );
            })}
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled((prev) => !prev)}
            title={soundEnabled ? "Mute page turn sound" : "Enable page turn sound"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/15 hover:text-white"
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4 opacity-60" />}
          </button>

          {/* Spread Mode Toggle (desktop only) */}
          <button
            onClick={() => setIsSpread((prev) => !prev)}
            title={isSpread ? "Switch to single-page view" : "Switch to 2-page book spread"}
            className="hidden h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/15 hover:text-white md:flex"
            aria-label="Toggle Spread Mode"
          >
            {isSpread ? <Square className="h-4 w-4" /> : <Columns2 className="h-4 w-4" />}
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={() => setIsFullscreen((prev) => !prev)}
            title={isFullscreen ? "Exit fullscreen" : "Read in fullscreen"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/15 hover:text-white"
            aria-label="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>

          {/* Close Reader */}
          <button
            onClick={onClose}
            title="Close Preview"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition hover:bg-red-500/80 hover:text-white"
            aria-label="Close Reader"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ── FLIPBOOK STAGE / PAGES ──────────────────────────────────── */}
      <div className="relative my-4 flex flex-1 items-center justify-center overflow-hidden py-4 sm:py-6">
        {/* Floating Prev Button */}
        <button
          onClick={goToPrev}
          disabled={!canGoPrev}
          title="Previous Page (Left Arrow)"
          className="absolute left-2 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-xl backdrop-blur-sm transition-all hover:scale-110 hover:bg-[#6B2D8B] disabled:pointer-events-none disabled:opacity-20 sm:left-4"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>

        {/* Floating Next Button */}
        <button
          onClick={goToNext}
          disabled={!canGoNext}
          title="Next Page (Right Arrow)"
          className="absolute right-2 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-xl backdrop-blur-sm transition-all hover:scale-110 hover:bg-[#6B2D8B] disabled:pointer-events-none disabled:opacity-20 sm:right-4"
        >
          <ChevronRight className="h-7 w-7" />
        </button>

        {/* ── THE BOOK SPREAD CONTAINER ─────────────────────────────── */}
        <div
          className={`relative mx-auto flex max-h-[72vh] items-center justify-center transition-transform duration-300 ${
            isFlipping ? "scale-[0.99]" : "scale-100"
          }`}
          style={{ perspective: "1800px" }}
        >
          {/* Subtle Outer Book Shadow / Matting */}
          <div className="relative flex items-center justify-center rounded-2xl bg-[#0b0514] p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-white/15 sm:p-3">

            {/* SINGLE PAGE VIEW OR COVER MODE */}
            {(!isSpread || isCover) ? (
              <div
                onClick={goToNext}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-2xl transition duration-200"
              >
                {/* Page Image */}
                <div className="relative aspect-[3/4] w-[290px] sm:w-[410px] md:w-[460px] lg:w-[500px]">
                  <Image
                    src={pages[currentPage]}
                    alt={`${book.name} - Page ${currentPage + 1}`}
                    fill
                    priority
                    draggable={false}
                    className="pointer-events-none select-none object-contain"
                    sizes="(max-width: 640px) 290px, (max-width: 768px) 410px, 500px"
                  />
                  {/* Subtle right-edge page thickness effect */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-black/25 to-transparent" />
                  {/* Subtle spine shadow */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/35 to-transparent" />

                  {/* Watermark overlay to protect against unauthorized redistribution */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <p className="rotate-[-25deg] select-none text-[11px] font-black uppercase tracking-[0.25em] text-black/10 sm:text-xs">
                      Podio Preview • Read Only
                    </p>
                  </div>
                </div>

                {/* Hover indicator for click-to-turn */}
                {canGoNext && (
                  <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-bold text-white/90 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <span>Turn Page</span>
                    <ChevronRight className="h-3 w-3" />
                  </div>
                )}
              </div>
            ) : (
              /* DUAL PAGE SPREAD MODE (Open Book Layout) */
              <div className="flex items-center overflow-hidden rounded-xl bg-white shadow-2xl">
                {/* LEFT PAGE */}
                <div
                  onClick={goToPrev}
                  className={`group relative overflow-hidden bg-white ${
                    canGoPrev ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div className="relative aspect-[3/4] w-[260px] sm:w-[350px] md:w-[400px] lg:w-[440px]">
                    {leftPageIndex !== null && pages[leftPageIndex] ? (
                      <>
                        <Image
                          src={pages[leftPageIndex]}
                          alt={`${book.name} - Page ${leftPageIndex + 1}`}
                          fill
                          priority
                          draggable={false}
                          className="pointer-events-none select-none object-contain"
                          sizes="(max-width: 768px) 350px, 440px"
                        />
                        {/* Page spine shadow (right side of left page) */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/30 via-black/10 to-transparent" />
                        {/* Left edge shadow */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/20 to-transparent" />
                        {/* Page number badge */}
                        <div className="absolute bottom-2 left-3 rounded bg-black/40 px-1.5 py-0.5 text-[10px] font-bold text-white">
                          p. {leftPageIndex + 1}
                        </div>
                      </>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-50 text-xs text-gray-400">
                        Blank Page
                      </div>
                    )}
                  </div>
                </div>

                {/* CENTER BOOK SPINE / GUTTER CREASE */}
                <div className="relative z-10 w-[2px] self-stretch bg-gradient-to-r from-black/40 via-[#3a2010] to-black/40 shadow-inner">
                  <div className="absolute inset-y-0 -left-2 w-4 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
                </div>

                {/* RIGHT PAGE */}
                <div
                  onClick={goToNext}
                  className={`group relative overflow-hidden bg-white ${
                    canGoNext ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div className="relative aspect-[3/4] w-[260px] sm:w-[350px] md:w-[400px] lg:w-[440px]">
                    {rightPageIndex !== null && pages[rightPageIndex] ? (
                      <>
                        <Image
                          src={pages[rightPageIndex]}
                          alt={`${book.name} - Page ${rightPageIndex + 1}`}
                          fill
                          priority
                          draggable={false}
                          className="pointer-events-none select-none object-contain"
                          sizes="(max-width: 768px) 350px, 440px"
                        />
                        {/* Page spine shadow (left side of right page) */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
                        {/* Right edge shadow */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-black/20 to-transparent" />
                        {/* Page number badge */}
                        <div className="absolute bottom-2 right-3 rounded bg-black/40 px-1.5 py-0.5 text-[10px] font-bold text-white">
                          p. {rightPageIndex + 1}
                        </div>
                      </>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-50 text-xs text-gray-400">
                        End of Preview
                      </div>
                    )}

                    {/* Watermark overlay */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <p className="rotate-[-25deg] select-none text-[11px] font-black uppercase tracking-[0.25em] text-black/10 sm:text-xs">
                        Podio Preview • Read Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── BOTTOM TOOLBAR & THUMBNAIL SCRUBBER ───────────────────────── */}
      <div className="space-y-3 border-t border-white/10 pt-3">
        {/* Page status and Quick Jump */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">{pageLabel}</span>
            <span className="text-white/40">•</span>
            <span className="text-white/60">
              Use arrow keys or click book edges to flip
            </span>
          </div>

          {/* Quick Buy in Reader */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#ffbf47] font-semibold">
              Enjoying this sample?
            </span>
            <div className="scale-90 origin-right">
              <BookBuyButton
                priceId={book.stripePriceId}
                label={`Order Physical Copy (${book.price})`}
              />
            </div>
          </div>
        </div>

        {/* Thumbnail scrubber */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto py-1 scrollbar-thin">
          {pages.map((imgSrc, idx) => {
            const isSelected = isSpread
              ? isCover
                ? idx === 0
                : idx === leftPageIndex || idx === rightPageIndex
              : idx === currentPage;

            return (
              <button
                key={imgSrc}
                onClick={() => handleJumpToPage(idx)}
                title={`Go to page ${idx + 1}`}
                className={`group relative h-16 w-12 shrink-0 overflow-hidden rounded-md border transition-all duration-200 ${
                  isSelected
                    ? "border-[#ffbf47] ring-2 ring-[#ffbf47] scale-105"
                    : "border-white/20 opacity-60 hover:opacity-100 hover:border-white/50"
                }`}
              >
                <Image
                  src={imgSrc}
                  alt={`Thumbnail page ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
                <span className="absolute bottom-0 inset-x-0 bg-black/70 py-0.5 text-[9px] font-bold text-white text-center">
                  {idx + 1}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
