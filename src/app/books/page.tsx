import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { BooksView } from "./books-view";
import { books } from "@/lib/podio-content";

export const metadata: Metadata = {
  title: "Books | Podio",
  description:
    "Podio's book collection — My Voice Is A Superpower and My Voice Is A Superpower: Teen Edition. Build confidence and communication skills through stories.",
};

export default function BooksPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#faf7fc] text-[#07101f]">
        <PageHero
          kicker="Podio books"
          heading="Find your voice on every page."
          subtitle="Our books and companion workbooks help children and teens build confidence, express ideas clearly, and develop strong communication skills — all through the power of storytelling."
        />

        <BooksView books={books} />
      </main>
      <SiteFooter />
    </>
  );
}
