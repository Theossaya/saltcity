"use client";

import { useEffect, useState } from "react";

export default function HeroMission() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // simple entrance trigger (runs once on mount)
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden text-white bg-gradient-to-br from-neutral-800 to-neutral-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/transform.jpg"
          alt="Our Mission"
          className="h-full w-full object-cover"
        />
        {/* Slight global dim so image holds contrast without crushing it */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* LEFT → RIGHT dark → bright overlay (lighter than before) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-white/0" />

      {/* Subtle brand tint on the left (keep it faint) */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-[1200px] px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          {/* OUR MISSION fades in first */}
          <h2
            className={[
              "mb-4 text-sm font-bold tracking-wide uppercase text-white/90",
              "transition-all duration-700 ease-out",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
            ].join(" ")}
          >
            OUR MISSION
          </h2>

          {/* Headline slides up ~8px */}
          <h1
            className={[
              "text-4xl font-black leading-tight md:text-6xl",
              "transition-all duration-700 ease-out delay-150",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
            ].join(" ")}
          >
            Transforming the distressed, indebted and discontented into mighty men.
          </h1>

          {/* More spacing: Headline → Subtext */}
          <p
            className={[
              "mt-8 text-lg text-white/90 md:text-xl", // mt-8 gives the breathing room
              "transition-opacity duration-700 ease-out delay-300",
              mounted ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
            We raise disciples and disciple makers.
          </p>
        </div>
      </div>
    </section>
  );
}