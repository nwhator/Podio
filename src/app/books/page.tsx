import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Books | Podio",
  description:
    "Podio's children's book library — coming soon. Stories that build confidence, communication skills, and a love for reading.",
};

export default function BooksPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#faf7fc] text-[#07101f]">
        <section className="relative isolate flex min-h-[calc(100vh-65px)] items-center justify-center overflow-hidden bg-[#3d1158] px-5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#6B2D8B_0%,#3d1158_70%)]" />

          {/* floating book icons */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            {[...Array(6)].map((_, i) => (
              <BookOpen
                key={i}
                className="absolute text-white/6"
                style={{
                  width: 40 + i * 20,
                  height: 40 + i * 20,
                  top: `${15 + i * 14}%`,
                  left: `${8 + i * 16}%`,
                  animation: `float ${4 + i * 1.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.6}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div
              className="mx-auto flex h-20 w-20 animate-pulse items-center justify-center rounded-2xl bg-[#ffbf47] shadow-lg"
              style={{ animationDuration: "2s" }}
            >
              <BookOpen className="h-10 w-10 text-[#3d1158]" />
            </div>

            <h1 className="mt-8 text-[clamp(2.5rem,7vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.01em] text-white">
              Children&apos;s
              <span className="block text-[#ffbf47]">Book Library</span>
            </h1>

            <div className="mt-6">
              <span className="inline-flex animate-pulse items-center gap-3 rounded-full border border-[#ffbf47]/40 bg-[#ffbf47]/10 px-6 py-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffbf47] opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#ffbf47]" />
                </span>
                <span className="text-sm font-black uppercase tracking-[0.16em] text-[#ffbf47]">
                  Coming Soon
                </span>
              </span>
            </div>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-7 text-[#e8d4f5] sm:text-xl">
              Stories that help children find their voice, build confidence, and
              fall in love with reading. Our book library is being curated with
              care — and it&apos;ll be here before you know it.
            </p>

            <div className="mt-4 flex items-center justify-center gap-3 text-sm text-[#c4a8d9]">
              <span className="h-1 w-1 rounded-full bg-[#c4a8d9]" />
              <span>Sign up to be notified when we launch</span>
              <span className="h-1 w-1 rounded-full bg-[#c4a8d9]" />
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: "Confidence Stories",
                  desc: "Tales of courage, self-belief, and finding your voice — written to inspire young readers.",
                  color: "bg-[#6B2D8B]",
                },
                {
                  title: "Activity Books",
                  desc: "Fun exercises, journal prompts, and speaking challenges that make building confidence a daily habit.",
                  color: "bg-[#ffbf47]",
                },
                {
                  title: "Parent Guides",
                  desc: "Practical resources for parents who want to support their child's communication journey at home.",
                  color: "bg-[#4e1f68]",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#e5d9f0] bg-[#fdf8ff] p-7 opacity-60"
                >
                  <div
                    className={`${item.color} mb-5 h-2 w-16 rounded-full`}
                  />
                  <h3 className="text-xl font-black uppercase tracking-[-0.01em] text-[#07101f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#526274]">{item.desc}</p>
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-[#6B2D8B]">
                    Coming soon
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-24px) rotate(8deg); }
        }
      `}</style>

      <SiteFooter />
    </>
  );
}
