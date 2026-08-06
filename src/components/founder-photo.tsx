"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export function FounderPhoto() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div
      onClick={() => setIsToggled((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsToggled((prev) => !prev);
        }
      }}
      aria-label="Goodnews Chukwunyem, Founder of Podio. Click or hover to switch portrait"
      className="group relative mx-auto aspect-[3/4] w-full max-w-[440px] overflow-hidden rounded-2xl border-2 border-[#e5d9f0] bg-[#3d1158] shadow-xl transition-all duration-300 hover:shadow-2xl cursor-pointer select-none focus:outline-none focus:ring-4 focus:ring-[#6B2D8B]/30"
    >
      {/* founder_1.jpg (Main Picture) */}
      <Image
        src="/founder/founder_1.jpg"
        alt="Goodnews Chukwunyem - Founder of Podio"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 440px"
        className={`object-cover object-top transition-opacity duration-700 ease-in-out ${
          isToggled ? "opacity-0" : "opacity-100 group-hover:opacity-0"
        }`}
      />

      {/* founder_2.jpg (Fades in on Hover or Touch) */}
      <Image
        src="/founder/founder_2.jpg"
        alt="Goodnews Chukwunyem - Founder of Podio speaking"
        fill
        sizes="(max-width: 768px) 100vw, 440px"
        className={`object-cover object-top transition-opacity duration-700 ease-in-out ${
          isToggled ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* Bottom Information Card Overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#280841]/95 via-[#280841]/60 to-transparent p-5 text-white sm:p-6">
        <p className="text-base font-black tracking-wide text-[#ffbf47]">
          Goodnews Chukwunyem
        </p>
        <p className="text-xs font-semibold text-[#f0e4ff]">
          Founder & Lead Coach, Podio
        </p>
        <div className="mt-2.5 flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-bold text-white backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-[#ffbf47]" />
            Hover or tap to switch portrait
          </span>
        </div>
      </div>
    </div>
  );
}
