"use client";

import Link from "next/link";
import * as React from "react";

type RailTheme = "light" | "dark" | "purple" | "gridBlue" | "gray" | "cyan";
type RailLayout = "stack" | "split";

type CarouselItem = {
  title: string;
  href: string;
  image: string;
  kicker?: string; // e.g. "Youth Expression", "Series", "Album"
};

type Props = {
  title: string;
  subtitle?: string;
  viewAllHref?: string;

  theme?: RailTheme;
  layout?: RailLayout;

  cardWidth?: number; // px
  cardHeight?: number; // px
  items: CarouselItem[];
};

function sectionBackground(theme: RailTheme) {
  switch (theme) {
    case "dark":
      return {
        background:
          "radial-gradient(1200px 400px at 30% 30%, rgba(255,255,255,0.10), rgba(0,0,0,0)), linear-gradient(90deg, #0b0b0b, #1a1a1a)",
      };
    case "purple":
      return { background: "linear-gradient(90deg, #4b0f73, #6b1aa0)" };
    case "gridBlue":
      return {
        background: "linear-gradient(90deg, #0e3d76, #0b2f5a)",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, #0e3d76, #0b2f5a)",
        backgroundSize: "40px 40px, 40px 40px, auto",
        backgroundPosition: "0 0, 0 0, 0 0",
      };
    case "gray":
      return { background: "linear-gradient(90deg, #5e5e5e, #4b4b4b)" };
    case "cyan":
      return { background: "linear-gradient(90deg, #4fb7dd, #2fa0cf)" };
    case "light":
    default:
      return { background: "transparent" };
  }
}

export default function MediaRail({
  title,
  subtitle,
  viewAllHref,
  theme = "light",
  layout = "stack",
  cardWidth = 360,
  cardHeight = 210,
  items,
}: Props) {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);

  const scrollByOne = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const gap = 18;
    el.scrollBy({ left: dir * (cardWidth + gap), behavior: "smooth" });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByOne(-1);
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByOne(1);
    }
  };

  const isDarkish = theme !== "light";
  const bgStyle = sectionBackground(theme);

  const TitleBlock = (
    <div className="min-w-0">
      <h2
        className={[
          "text-[40px] font-extrabold leading-[1.05] tracking-tight",
          isDarkish ? "text-white" : "text-black",
        ].join(" ")}
      >
        {title}
      </h2>

      {subtitle ? (
        <p
          className={[
            "mt-5 max-w-[520px] text-[16px] leading-[28px]",
            isDarkish ? "text-white/80" : "text-black/70",
          ].join(" ")}
        >
          {subtitle}
        </p>
      ) : null}

      {viewAllHref ? (
        <div className="mt-6">
          <Link
            href={viewAllHref}
            className={[
              "inline-flex items-center justify-center rounded-full px-5 py-2 text-[13px] font-semibold",
              "transition-colors",
              isDarkish
                ? "bg-white/15 text-white hover:bg-white/20"
                : "bg-black/10 text-black hover:bg-black/15",
            ].join(" ")}
          >
            View All
          </Link>
        </div>
      ) : null}
    </div>
  );

  return (
    <section className="py-14" style={bgStyle as any}>
      <div className="mx-auto w-full max-w-[1200px] px-6">
        {layout === "stack" ? (
          <div className="flex items-start justify-between gap-6">
            {TitleBlock}
            {/* In stack mode, we already show View All inside TitleBlock */}
          </div>
        ) : (
          <div className="grid items-start gap-10 lg:grid-cols-[380px_1fr]">
            {TitleBlock}
            <div />
          </div>
        )}

        <div
          className={[
            "relative mt-8",
            layout === "split" ? "lg:mt-[-112px] lg:ml-[390px]" : "",
          ].join(" ")}
        >
          {/* Arrows */}
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByOne(-1)}
            className={[
              "absolute left-0 top-1/2 z-10 -translate-y-1/2",
              "grid h-[44px] w-[44px] place-items-center rounded-full",
              "backdrop-blur",
              isDarkish ? "bg-white/18 text-white" : "bg-black/10 text-black",
              "border",
              isDarkish ? "border-white/15" : "border-black/10",
              "hover:opacity-100",
            ].join(" ")}
            style={{ opacity: 0.75 }}
          >
            <span className="text-[22px] leading-none">‹</span>
          </button>

          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByOne(1)}
            className={[
              "absolute right-0 top-1/2 z-10 -translate-y-1/2",
              "grid h-[44px] w-[44px] place-items-center rounded-full",
              "backdrop-blur",
              isDarkish ? "bg-white/18 text-white" : "bg-black/10 text-black",
              "border",
              isDarkish ? "border-white/15" : "border-black/10",
              "hover:opacity-100",
            ].join(" ")}
            style={{ opacity: 0.75 }}
          >
            <span className="text-[22px] leading-none">›</span>
          </button>

          <div
            ref={scrollerRef}
            tabIndex={0}
            onKeyDown={onKeyDown}
            className={[
              "no-scrollbar flex gap-[18px] overflow-x-auto scroll-smooth",
              "snap-x snap-mandatory pr-2 outline-none",
            ].join(" ")}
            style={{
              paddingLeft: 56,
              paddingRight: 56,
            }}
          >
            {items.map((item, i) => (
              <Link
                key={`${item.href}-${i}`}
                href={item.href}
                className="snap-start shrink-0"
                style={{ width: `${cardWidth}px` }}
              >
                <div
                  className={[
                    "group relative overflow-hidden",
                    "rounded-xl border",
                    isDarkish ? "border-white/10" : "border-black/10",
                    "transition-transform duration-200",
                    "hover:-translate-y-[2px]",
                  ].join(" ")}
                  style={{
                    height: `${cardHeight}px`,
                    boxShadow: isDarkish
                      ? "0 14px 34px rgba(0,0,0,0.35)"
                      : "0 14px 34px rgba(0,0,0,0.14)",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />

                  {/* gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-95" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    {item.kicker ? (
                      <div className="mb-1 text-[11px] font-semibold tracking-wide text-white/80">
                        {item.kicker.toUpperCase()}
                      </div>
                    ) : null}
                    <div className="text-[15px] font-semibold leading-snug text-white">
                      {item.title}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
