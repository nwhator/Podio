export function PageHero({
  kicker,
  heading,
  subtitle,
}: {
  kicker: string;
  heading: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-gradient-to-br from-[#3d1158] to-[#6B2D8B] px-5 py-20 text-white lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffbf47]">
          {kicker}
        </p>
        <h1 className="mt-5 max-w-4xl text-3xl font-black uppercase leading-[0.92] tracking-[-0.01em] sm:text-4xl md:text-5xl">
          {heading}
        </h1>
        {subtitle && (
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#e8d4f5]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
