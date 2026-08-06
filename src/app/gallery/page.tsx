import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { GalleryGrid } from "@/components/gallery-grid";
import { galleryImages } from "@/lib/podio-content";

export const metadata: Metadata = {
  title: "Gallery | Podio",
  description:
    "Explore photos and memorable moments from Podio workshops, speaking sessions, and confidence-building events across the UK.",
};

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#faf7fc] text-[#07101f]">
        <PageHero
          kicker="Moments & Milestones"
          heading="Our Gallery"
          subtitle="Capturing the joy, teamwork, and confidence of young people discovering the power of their voices."
        />

        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <GalleryGrid images={galleryImages} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
