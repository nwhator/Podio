import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { BookBuyButton } from "./book-buy-button";
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

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              {books.map((book) => (
                <article
                  key={book.name}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#e5d9f0] bg-[#fdf8ff] shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#f5edfb] sm:aspect-[4/3]">
                    <Image
                      src={book.image}
                      alt={book.name}
                      fill
                      className="object-contain p-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-black uppercase leading-[1.1] tracking-[-0.01em] text-[#07101f]">
                          {book.name}
                        </h2>
                        <p className="mt-1 text-sm font-bold text-[#6B2D8B]">
                          Ages {book.ageRange}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-lg bg-[#f5edfb] px-3 py-1.5 text-lg font-black text-[#6B2D8B]">
                        {book.price}
                      </span>
                    </div>

                    <p className="mt-4 flex-1 leading-7 text-[#526274]">
                      {book.description}
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <div className="flex-1">
                        <BookBuyButton priceId={book.stripePriceId} label={`Buy ${book.name}`} />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#6B2D8B]">
                        Physical copy
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
