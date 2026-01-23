"use client";

import { useEffect, useMemo, useRef } from "react";

type CarouselItem = {
  title: string;
  href: string;
  image: string;
};

type Props = {
  title: string;
  description?: string;
  viewAllHref?: string;
  theme?: "light" | "dark";
  cardWidth?: number; // px
  cardHeight?: number; // px
  items: CarouselItem[];
};

export default function CarouselSection({
  title,
  description,
  viewAllHref,
  theme = "light",
  cardWidth = 373,
  cardHeight = 210,
  items,
}: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // Duplicate list to simulate “infinite” looping without heavy libs.
  const loopItems = useMemo(() => {
    const safe = items.length ? items : [];
    return [...safe, ...safe, ...safe];
  }, [items]);

  const baseIndex = items.length; // middle copy

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || items.length === 0) return;

    // Start in the middle copy.
    const firstCard = el.querySelector<HTMLElement>("[data-card='1']");
    if (firstCard) {
      el.scrollLeft = firstCard.offsetLeft;
    }

    const onScroll = () => {
      // If user scrolls too far left/right, jump back into the middle copy.
      // Keeps the illusion of infinite scroll.
      const cards = el.querySelectorAll<HTMLElement>("[data-card]");
      if (!cards.length) return;

      const minX = cards[1]?.offsetLeft ?? 0;
      const maxX = cards[cards.length - 2]?.offsetLeft ?? 0;
      const x = el.scrollLeft;

      // Thresholds tuned to avoid visible jumps.
      if (x < minX) {
        const midCard = el.querySelector<HTMLElement>(
          `[data-card='${baseIndex + 1}']`
        );
        if (midCard) el.scrollLeft = midCard.offsetLeft;
      } else if (x > maxX) {
        const midCard = el.querySelector<HTMLElement>(
          `[data-card='${baseIndex + 1}']`
        );
        if (midCard) el.scrollLeft = midCard.offsetLeft;
      }
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [items.length, baseIndex]);

  const scrollByOne = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;

    // scroll by one card + gap
    const gap = 16;
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

  const isDark = theme === "dark";

  return (
    <section
      className={isDark ? "py-14" : "py-14"}
      style={{
        background: isDark
          ? "radial-gradient(1200px 400px at 30% 30%, rgba(255,255,255,0.12), rgba(0,0,0,0)), linear-gradient(90deg, #0b0b0b, #1a1a1a)"
          : "transparent",
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <h2
              className={[
                "text-[44px] font-extrabold leading-none",
                isDark ? "text-white" : "text-black",
              ].join(" ")}
            >
              {title}
            </h2>

            {description ? (
              <p
                className={[
                  "mt-6 max-w-[520px] text-[18px] leading-[30px]",
                  isDark ? "text-white/80" : "text-black/70",
                ].join(" ")}
              >
                {description}
              </p>
            ) : null}
          </div>

          {viewAllHref ? (
            <a
              href={viewAllHref}
              className={[
                "shrink-0 rounded-[2px] bg-black/10 px-4 py-2 text-[14px] font-semibold",
                "transition-colors hover:bg-black/15",
                isDark ? "bg-white/15 text-white hover:bg-white/20" : "text-black",
              ].join(" ")}
            >
              View All
            </a>
          ) : null}
        </div>

        <div className="relative mt-8">
          {/* always-visible arrows, subtle */}
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByOne(-1)}
            className={[
              "absolute left-0 top-1/2 z-10 -translate-y-1/2",
              "grid h-[46px] w-[46px] place-items-center rounded-full",
              "transition-[opacity,transform] duration-200",
              isDark ? "bg-white/15" : "bg-black/10",
            ].join(" ")}
            style={{ opacity: 0.45 }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.45")}
          >
            <span className={isDark ? "text-white text-[22px]" : "text-black text-[22px]"}>
              ‹
            </span>
          </button>

          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByOne(1)}
            className={[
              "absolute right-0 top-1/2 z-10 -translate-y-1/2",
              "grid h-[46px] w-[46px] place-items-center rounded-full",
              "transition-[opacity,transform] duration-200",
              isDark ? "bg-white/15" : "bg-black/10",
            ].join(" ")}
            style={{ opacity: 0.45 }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.45")}
          >
            <span className={isDark ? "text-white text-[22px]" : "text-black text-[22px]"}>
              ›
            </span>
          </button>

          <div
            ref={scrollerRef}
            tabIndex={0}
            onKeyDown={onKeyDown}
            className={[
              "no-scrollbar flex gap-4 overflow-x-auto scroll-smooth",
              "snap-x snap-mandatory pr-2",
              "outline-none",
            ].join(" ")}
            style={{
              paddingLeft: 64, // matches Life.Church spacing so arrows sit “outside”
              paddingRight: 64,
            }}
          >
            {loopItems.map((item, i) => {
              const idx = i + 1;
              return (
                <a
                  key={`${item.href}-${i}`}
                  data-card={idx}
                  href={item.href}
                  className="snap-start shrink-0"
                  style={{ width: `${cardWidth}px` }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{
                      height: `${cardHeight}px`,
                      borderRadius: "6px",
                      boxShadow: "0 10px 24px rgba(0,0,0,0.16)",
                      transform: "translateZ(0)",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
