"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";

interface TestimonialItem {
  src: string;
  alt: string;
}

export function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: TestimonialItem[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Update visible items count based on viewport width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setVisibleCount(5); // Desktop: 5
      } else if (width >= 768) {
        setVisibleCount(3); // Pad / Tablet: 3
      } else if (width >= 540) {
        setVisibleCount(2); // Large mobile: 2
      } else {
        setVisibleCount(1); // Mobile: 1
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Autoplay
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;

    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, maxIndex, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 40) {
      nextSlide();
    } else if (diff < -40) {
      prevSlide();
    }
    setTouchStart(null);
  };

  // Ensure index stays valid when visible count changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  return (
    <section
      aria-label="Parent Testimonials"
      className="bg-[#faf7fc] py-16 lg:py-24 border-t border-[#e5d9f0]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
              <MessageSquareQuote className="h-4 w-4 text-[#ffbf47]" />
              Parent Reviews & Stories
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-[0.95] tracking-[0] text-[#07101f] sm:text-5xl">
              Loved by parents & children.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#526274]">
              Real feedback from parents watching their children discover their
              voice, build genuine confidence, and communicate with pride.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e5d9f0] bg-white text-[#07101f] shadow-sm transition hover:bg-[#6B2D8B] hover:text-white hover:border-[#6B2D8B]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e5d9f0] bg-white text-[#07101f] shadow-sm transition hover:bg-[#6B2D8B] hover:text-white hover:border-[#6B2D8B]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel Track Container */}
        <div className="mt-10 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={item.src}
                className="shrink-0 px-2 sm:px-2.5"
                style={{
                  width: `${100 / visibleCount}%`,
                }}
              >
                <div className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-[#e5d9f0] bg-white p-2 shadow-sm transition-all duration-300 hover:border-[#6B2D8B] hover:shadow-lg">
                  <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#fdf8ff]">
                    <Image
                      src={item.src}
                      alt={item.alt || `Podio Parent Testimonial ${index + 1}`}
                      fill
                      sizes="(max-width: 540px) 90vw, (max-width: 768px) 45vw, (max-width: 1200px) 30vw, 20vw"
                      className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        {maxIndex > 0 && (
          <div className="mt-8 flex justify-center items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setCurrentIndex(dotIndex)}
                aria-label={`Go to slide ${dotIndex + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === dotIndex
                    ? "w-8 bg-[#6B2D8B]"
                    : "w-2 bg-[#d6c4e6] hover:bg-[#a686c4]"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
