import React from "react";
import Image from "next/image";
import { ArrowUpRight, Award } from "lucide-react";
import type { Speaker } from "@/types/event";

interface EventSpeakersProps {
  speakers: Speaker[];
  title?: string;
}

export function EventSpeakers({ speakers, title }: EventSpeakersProps) {
  // If no speakers, automatically hide section
  if (!speakers || speakers.length === 0) return null;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B2D8B]">
            Expert Facilitators
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-[1.05] tracking-[-0.01em] text-[#07101f] sm:text-4xl">
            Meet Your Speakers & Coaches
          </h2>
          <p className="mt-4 text-base leading-7 text-[#526274]">
            Experienced speech specialists, broadcast coaches, and educators dedicated to helping young people thrive.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#e5d9f0] bg-[#fdf8ff] shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#6B2D8B]/40"
            >
              {/* Speaker Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#3d1158]">
                {speaker.image ? (
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-white/50">
                    <Award className="h-12 w-12" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Speaker Bio & Details */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="text-xs font-black uppercase tracking-wider text-[#6B2D8B]">
                  {speaker.role}
                </span>

                <h3 className="mt-1 text-2xl font-black uppercase tracking-[-0.01em] text-[#07101f]">
                  {speaker.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-[#526274]">
                  {speaker.bio}
                </p>

                {/* Expertise Badges */}
                {speaker.expertise && speaker.expertise.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-[#e5d9f0] pt-4">
                    {speaker.expertise.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="rounded-md bg-[#f5edfb] px-2 py-0.5 text-[11px] font-bold text-[#6B2D8B]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {speaker.socialUrl && (
                  <a
                    href={speaker.socialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#6B2D8B] hover:text-[#4e1f68]"
                  >
                    <span>View Profile</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
