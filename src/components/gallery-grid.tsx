"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  X,
  Maximize2,
  Folder,
  FolderOpen,
  Images,
} from "lucide-react";
import { GalleryFolder, GalleryItem } from "@/lib/gallery-data";

export function GalleryGrid({ folders }: { folders: GalleryFolder[] }) {
  // Accordion state: which folder is open (null if closed)
  const [openFolderId, setOpenFolderId] = useState<string | null>(
    folders[0]?.id || null
  );

  // Lightbox state
  const [lightboxImages, setLightboxImages] = useState<GalleryItem[]>([]);
  const [lightboxAlbumName, setLightboxAlbumName] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const toggleFolder = (folderId: string) => {
    setOpenFolderId((current) => (current === folderId ? null : folderId));
    setSelectedIndex(null);
  };

  const openLightbox = (
    images: GalleryItem[],
    index: number,
    albumName: string
  ) => {
    setLightboxImages(images);
    setLightboxAlbumName(albumName);
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
      prev === null || lightboxImages.length === 0
        ? null
        : (prev - 1 + lightboxImages.length) % lightboxImages.length
    );
  }, [lightboxImages.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null || lightboxImages.length === 0
        ? null
        : (prev + 1) % lightboxImages.length
    );
  }, [lightboxImages.length]);

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

  if (!folders || folders.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[#e5d9f0] bg-white p-12 text-center">
        <Images className="mx-auto h-12 w-12 text-[#6B2D8B]/40" />
        <p className="mt-4 text-lg font-bold text-[#07101f]">
          No albums found in gallery
        </p>
        <p className="mt-1 text-sm text-[#526274]">
          Add images into public/gallery/ to automatically display them here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {folders.map((folder) => {
        const isOpen = openFolderId === folder.id;

        return (
          <div
            key={folder.id}
            className="overflow-hidden rounded-2xl border border-[#e5d9f0] bg-white shadow-sm transition-all duration-300 hover:shadow-md"
          >
            {/* Accordion Header Button */}
            <button
              type="button"
              onClick={() => toggleFolder(folder.id)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between p-5 text-left transition sm:p-6 ${
                isOpen
                  ? "bg-[#fdf8ff] border-b border-[#e5d9f0]"
                  : "hover:bg-[#faf7fc]"
              }`}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition ${
                    isOpen
                      ? "bg-[#6B2D8B] text-white"
                      : "bg-[#f5edfb] text-[#6B2D8B]"
                  }`}
                >
                  {isOpen ? (
                    <FolderOpen className="h-6 w-6 text-[#ffbf47]" />
                  ) : (
                    <Folder className="h-6 w-6" />
                  )}
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#07101f]">
                    {folder.name}
                  </h2>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#6B2D8B]">
                    {folder.images.length} Photos
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-flex rounded-lg border border-[#e5d9f0] bg-white px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-[#07101f] transition">
                  {isOpen ? "Close Gallery" : "View Gallery"}
                </span>
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border border-[#e5d9f0] bg-white text-[#07101f] transition duration-200 ${
                    isOpen ? "bg-[#6B2D8B] text-white border-[#6B2D8B]" : ""
                  }`}
                >
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </div>
              </div>
            </button>

            {/* Accordion Content */}
            {isOpen && (
              <div className="p-5 sm:p-8 animate-fadeIn">
                {folder.description && (
                  <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl bg-[#faf7fc] p-4 sm:p-5 border border-[#e5d9f0]">
                    <p className="text-sm leading-6 text-[#526274] max-w-2xl">
                      {folder.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => toggleFolder(folder.id)}
                      className="shrink-0 inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#e5d9f0] bg-white px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-[#6B2D8B] hover:bg-[#6B2D8B] hover:text-white transition"
                    >
                      <X className="h-3.5 w-3.5" />
                      Close Gallery
                    </button>
                  </div>
                )}

                {/* Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
                  {folder.images.map((item, index) => (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() =>
                        openLightbox(folder.images, index, folder.name)
                      }
                      aria-label={`View photo ${index + 1} of ${folder.name} full screen`}
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

                {/* Bottom Close Bar */}
                <div className="mt-8 flex justify-center border-t border-[#e5d9f0] pt-6">
                  <button
                    type="button"
                    onClick={() => toggleFolder(folder.id)}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#e5d9f0] bg-[#faf7fc] px-6 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-[#07101f] transition hover:bg-[#6B2D8B] hover:text-white hover:border-[#6B2D8B]"
                  >
                    <ChevronUp className="h-4 w-4" />
                    Close {folder.name}
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Fullscreen Lightbox Modal */}
      {selectedIndex !== null && lightboxImages[selectedIndex] && (
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
                {selectedIndex + 1} / {lightboxImages.length}
              </span>
              <span className="hidden sm:inline text-xs font-semibold text-white/80">
                {lightboxAlbumName}
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
              src={lightboxImages[selectedIndex].src}
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
