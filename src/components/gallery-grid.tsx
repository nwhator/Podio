"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2, Folder, Images } from "lucide-react";
import { GalleryFolder } from "@/lib/gallery-data";

export function GalleryGrid({ folders }: { folders: GalleryFolder[] }) {
  const [activeFolderId, setActiveFolderId] = useState<string>(
    folders[0]?.id || "all"
  );
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const activeFolder =
    folders.find((f) => f.id === activeFolderId) || folders[0];
  const activeImages = activeFolder?.images || [];

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto";
    }
  }, []);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + activeImages.length) % activeImages.length
    );
  }, [activeImages.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % activeImages.length
    );
  }, [activeImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeLightbox, showPrev, showNext]);

  // Clean up overflow on unmount
  useEffect(() => {
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "auto";
      }
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      showNext();
    } else if (diff < -50) {
      showPrev();
    }
    setTouchStart(null);
  };

  if (!activeFolder || activeImages.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[#e5d9f0] bg-white p-12 text-center">
        <Images className="mx-auto h-12 w-12 text-[#6B2D8B]/40" />
        <p className="mt-4 text-lg font-bold text-[#07101f]">
          No photos found in gallery
        </p>
        <p className="mt-1 text-sm text-[#526274]">
          Add images into public/gallery/ to automatically display them here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Folder Selector Tabs (if more than 1 folder exists or single folder indicator) */}
      <div className="flex flex-wrap items-center gap-3">
        {folders.map((folder) => {
          const isActive = folder.id === activeFolderId;
          return (
            <button
              key={folder.id}
              onClick={() => {
                setActiveFolderId(folder.id);
                setSelectedIndex(null);
              }}
              className={`inline-flex items-center gap-2.5 rounded-xl px-5 py-3 text-xs font-black uppercase tracking-[0.14em] transition-all duration-200 ${
                isActive
                  ? "bg-[#6B2D8B] text-white shadow-md"
                  : "border border-[#e5d9f0] bg-white text-[#07101f] hover:border-[#6B2D8B] hover:text-[#6B2D8B]"
              }`}
            >
              <Folder className={`h-4 w-4 ${isActive ? "text-[#ffbf47]" : "text-[#6B2D8B]"}`} />
              <span>{folder.name}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                  isActive ? "bg-white/20 text-white" : "bg-[#f5edfb] text-[#6B2D8B]"
                }`}
              >
                {folder.images.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Folder Header Banner */}
      <div className="rounded-2xl border border-[#e5d9f0] bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
              <Folder className="h-4 w-4 text-[#ffbf47]" />
              Event Album
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#07101f]">
              {activeFolder.name}
            </h2>
            {activeFolder.description && (
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#526274]">
                {activeFolder.description}
              </p>
            )}
          </div>
          <div className="shrink-0 self-start sm:self-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e5d9f0] bg-[#faf7fc] px-3.5 py-1.5 text-xs font-bold text-[#07101f]">
              <span className="h-2 w-2 rounded-full bg-[#6B2D8B]" />
              {activeImages.length} Photos
            </span>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
        {activeImages.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => openLightbox(index)}
            aria-label={`View photo ${index + 1} of ${activeFolder.name} full screen`}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#e5d9f0] bg-[#f5edfb] text-left shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#6B2D8B]"
          >
            <Image
              src={item.src}
              alt=""
              aria-hidden
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
            />
            {/* Subtle hover overlay indicator */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
              <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#07101f] opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedIndex !== null && activeImages[selectedIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full screen image viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm select-none"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar Controls */}
          <div
            className="absolute inset-x-0 top-0 flex items-center justify-between p-4 text-white sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-black tracking-widest text-[#ffbf47] uppercase">
                {selectedIndex + 1} / {activeImages.length}
              </span>
              <span className="hidden sm:inline text-xs font-semibold text-white/80">
                {activeFolder.name}
              </span>
            </div>
            <button
              onClick={closeLightbox}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
              aria-label="Close fullscreen view"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-3 sm:left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white shadow-lg transition hover:bg-white/30 hover:scale-105"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-3 sm:right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white shadow-lg transition hover:bg-white/30 hover:scale-105"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Active Image */}
          <div
            className="relative flex h-[82vh] w-[90vw] max-w-5xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImages[selectedIndex].src}
              alt=""
              fill
              priority
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
