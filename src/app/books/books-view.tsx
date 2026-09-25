"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { BookOpen, Eye, X, CheckCircle2, Sparkles, BookMarked } from "lucide-react";
import { BookBuyButton } from "./book-buy-button";
import { FlipbookReader } from "@/components/flipbook-reader";
import type { BookProduct } from "@/lib/podio-content";

interface BooksViewProps {
  books: BookProduct[];
}

export function BooksView({ books }: BooksViewProps) {
  const [activeBookId, setActiveBookId] = useState<string | null>(null);
  const readerSectionRef = useRef<HTMLDivElement>(null);

  const activeBook = books.find((b) => b.id === activeBookId);

  function handleTogglePreview(bookId: string) {
    if (activeBookId === bookId) {
      // Toggle off if already active
      setActiveBookId(null);
    } else {
      // Reveal new book preview, hiding any other active preview
      setActiveBookId(bookId);
      // Smooth scroll to reader
      setTimeout(() => {
        readerSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 80);
    }
  }

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Book Cards Grid */}
        <div className="grid gap-10 lg:grid-cols-2">
          {books.map((book) => {
            const isPreviewing = activeBookId === book.id;

            return (
              <article
                key={book.id || book.name}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-[#fdf8ff] shadow-sm transition-all duration-300 hover:shadow-xl ${
                  isPreviewing
                    ? "border-[#6B2D8B] ring-4 ring-[#6B2D8B]/20 shadow-xl"
                    : "border-[#e5d9f0]"
                }`}
              >
                {/* Active Preview Badge */}
                {isPreviewing && (
                  <div className="absolute left-4 top-4 z-20 flex items-center gap-1.5 rounded-full bg-[#6B2D8B] px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow-lg animate-pulse">
                    <Eye className="h-3.5 w-3.5" />
                    <span>Now Previewing</span>
                  </div>
                )}

                {/* Book Cover Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#f5edfb] sm:aspect-[4/3]">
                  <Image
                    src={book.image}
                    alt={book.name}
                    fill
                    className="object-contain p-4 transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Book Details */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-black uppercase leading-[1.1] tracking-[-0.01em] text-[#07101f]">
                        {book.name}
                      </h2>
                      <span className="mt-1 inline-block text-xs font-bold text-[#6B2D8B]">
                        Includes interactive workbook & exercises
                      </span>
                    </div>
                    <span className="shrink-0 rounded-lg bg-[#f5edfb] px-2.5 py-1 text-base font-black text-[#6B2D8B]">
                      {book.price}
                    </span>
                  </div>

                  <p className="mt-4 flex-1 leading-7 text-[#526274]">
                    {book.description}
                  </p>

                  {/* Highlights / Features */}
                  <div className="mt-5 rounded-xl border border-[#e5d9f0]/60 bg-white/70 p-3.5">
                    <p className="text-[11px] font-black uppercase tracking-wider text-[#6B2D8B]">
                      Sample Includes:
                    </p>
                    <p className="mt-1 text-xs text-[#526274]">
                      {book.totalPages} pages of preview content • Stories, exercises & speaking guide
                    </p>
                  </div>

                  {/* Action Buttons: Preview & Buy */}
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    {/* Preview Button */}
                    <button
                      onClick={() => handleTogglePreview(book.id)}
                      className={`inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg px-4 text-xs font-black uppercase tracking-[0.12em] transition-all duration-200 ${
                        isPreviewing
                          ? "bg-red-50 text-red-700 border border-red-200 hover:bg-red-100"
                          : "bg-white text-[#6B2D8B] border-2 border-[#6B2D8B] hover:bg-[#6B2D8B] hover:text-white shadow-sm"
                      }`}
                    >
                      {isPreviewing ? (
                        <>
                          <X className="h-4 w-4" />
                          <span>Close Preview</span>
                        </>
                      ) : (
                        <>
                          <BookOpen className="h-4 w-4" />
                          <span>Read Preview</span>
                        </>
                      )}
                    </button>

                    {/* Buy Button */}
                    <div className="flex-1 sm:max-w-[160px]">
                      <BookBuyButton priceId={book.stripePriceId} label={`Buy ${book.name}`} />
                    </div>
                  </div>

                  <p className="mt-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#6B2D8B] sm:text-left">
                    Physical copy delivered to your door
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* ── ACTIVE FLIPBOOK READER REVEAL AREA ───────────────────────── */}
        <div ref={readerSectionRef} className="scroll-mt-8">
          {activeBook && (
            <div className="mt-14 animate-fadeIn">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookMarked className="h-5 w-5 text-[#6B2D8B]" />
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-[#6B2D8B]">
                    Active Preview Reader
                  </span>
                </div>
                <button
                  onClick={() => setActiveBookId(null)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#e5d9f0] bg-white px-3 py-1.5 text-xs font-bold text-[#526274] transition hover:bg-[#faf7fc] hover:text-[#07101f]"
                >
                  <X className="h-3.5 w-3.5" />
                  <span>Close Reader</span>
                </button>
              </div>

              {/* The Flipbook Reader */}
              <FlipbookReader
                book={activeBook}
                allBooks={books}
                onSelectBook={(bookId) => setActiveBookId(bookId)}
                onClose={() => setActiveBookId(null)}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
