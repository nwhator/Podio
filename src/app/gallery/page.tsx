import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { GalleryGrid } from "@/components/gallery-grid";
import { getGalleryFolders } from "@/lib/gallery-data";

export const metadata: Metadata = {
  title: "Gallery | Podio",
  description:
    "Explore photos and memorable moments from Podio workshops, speaking sessions, and confidence-building events across the UK.",
};

// Immediately re-scans public/gallery so newly added photos appear right away
export const dynamic = "force-dynamic";

export default function GalleryPage() {
  const folders = getGalleryFolders();

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
            <GalleryGrid folders={folders} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
