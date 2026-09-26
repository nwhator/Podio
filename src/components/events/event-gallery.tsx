"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import type { GalleryItem } from "@/types/event";

interface EventGalleryProps {
  gallery: GalleryItem[];
  title?: string;
}

export function EventGallery({ gallery, title }: EventGalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  if (!gallery || gallery.length === 0) return null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % gallery.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + gallery.length) % gallery.length);
    }
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
            Event Moments
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-[1.05] tracking-[-0.01em] text-[#07101f] sm:text-4xl">
            Photo Highlights
          </h2>
          <p className="mt-4 text-base leading-7 text-[#526274]">
            Capturing the excitement, courage, and pride as young speakers discover their voices.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-[#3d1158] shadow-sm transition hover:shadow-xl"
            >
              <Image
                src={item.src}
                alt={item.alt || `${title || "Event"} photo ${idx + 1}`}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              {item.caption && (
                <p className="absolute bottom-3 inset-x-3 text-xs font-bold text-white opacity-0 transition-opacity group-hover:opacity-100 truncate">
                  {item.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          onClick={() => setSelectedIdx(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fadeIn"
        >
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Next photo"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-[4/3] w-[85vw] max-w-[900px] max-h-[75vh]">
              <Image
                src={gallery[selectedIdx].src}
                alt={gallery[selectedIdx].alt}
                fill
                priority
                className="object-contain"
                sizes="900px"
              />
            </div>
            {gallery[selectedIdx].caption && (
              <p className="mt-3 text-center text-sm font-semibold text-white/90">
                {gallery[selectedIdx].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
