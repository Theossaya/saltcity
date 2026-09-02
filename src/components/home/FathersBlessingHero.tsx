"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";

/**
 * TEMPORARY homepage takeover for "A Father's Blessing" (Tue Aug 18, 2026, 5pm).
 * Replaces the usual <Hero /> slideshow so the event is the first thing seen.
 * To revert: render <Hero /> again in src/app/page.tsx and delete this file.
 */
const EVENT_START = new Date("2026-08-18T17:00:00+01:00");
const GOLD = "#E0B25C";
const POSTER = "/images/fathers-blessing/fathers-blessing.jpeg";
const POSTER_W = 618;
const POSTER_H = 1080;
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=20+Okumagba+Avenue%2C+Warri";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function useCountdown(target: Date) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (now === null) return null;
  const diff = target.getTime() - now;
  return {
    live: diff <= 0,
    d: Math.max(0, Math.floor(diff / 86400000)),
    h: Math.max(0, Math.floor((diff % 86400000) / 3600000)),
    m: Math.max(0, Math.floor((diff % 3600000) / 60000)),
    s: Math.max(0, Math.floor((diff % 60000) / 1000)),
  };
}

function Countdown() {
  const c = useCountdown(EVENT_START);

  if (c?.live) {
    return (
      <div className="mt-9 text-3xl font-black tracking-tight sm:text-4xl" style={{ color: GOLD }}>
        Happening now — join us.
      </div>
    );
  }

  const cells: [string, string][] = [
    ["Days", c ? pad(c.d) : "––"],
    ["Hours", c ? pad(c.h) : "––"],
    ["Minutes", c ? pad(c.m) : "––"],
    ["Seconds", c ? pad(c.s) : "––"],
  ];

  return (
    <div className="mt-9 flex max-w-md items-stretch">
      {cells.map(([label, val], i) => (
        <div
          key={label}
          className={i === 0 ? "flex-1" : "ml-4 flex-1 border-l border-white/15 pl-4"}
        >
          <div className="text-4xl font-black leading-none tabular-nums sm:text-5xl">{val}</div>
          <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Click-to-expand flyer */
function Lightbox({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8">
      <button
        aria-label="Close flyer"
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
      />
      <div className="relative max-h-full w-full max-w-[620px]">
        <Image
          src={POSTER}
          alt="A Father's Blessing flyer"
          width={POSTER_W}
          height={POSTER_H}
          className="mx-auto h-auto max-h-[86svh] w-auto rounded-2xl object-contain"
        />
        <button
          onClick={onClose}
          className="mt-4 w-full text-sm font-bold uppercase tracking-[0.16em] text-white/70 transition hover:text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function FathersBlessingHero() {
  const [ready, setReady] = useState(false);
  const [flyer, setFlyer] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 60);
    return () => clearTimeout(t);
  }, []);

  const step = (i: number): React.CSSProperties => ({
    opacity: ready ? 1 : 0,
    transform: ready ? "none" : "translateY(18px)",
    transition: `opacity 900ms ease ${i * 110}ms, transform 900ms cubic-bezier(0.16,1,0.3,1) ${i * 110}ms`,
  });

  return (
    <section
      data-header-overlay="true"
      className="relative overflow-hidden bg-[#1B140B] text-white"
    >
      {/* ambient artwork wash */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={POSTER}
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-125 object-cover opacity-40 blur-2xl motion-safe:animate-[sof-drift_26s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-[#1B140B]/72" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1B140B] to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid min-h-[100svh] items-center gap-10 py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          {/* announcement */}
          <div>
            <div
              className="text-[11px] font-bold uppercase tracking-[0.3em]"
              style={{ ...step(0), color: GOLD }}
            >
              Tomorrow · Tuesday · 5PM
            </div>

            <h1
              className="mt-5 text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl"
              style={step(1)}
            >
              A Father&apos;s
              <br />
              Blessing
            </h1>

            <div className="mt-7 space-y-1.5 text-lg" style={step(2)}>
              <p className="font-semibold text-white/90">
                Ministering: Apst. Tony Rapu
                <span className="mx-2 text-white/25">·</span>
                Host: Pst. Tobore David
              </p>
              <p className="text-white/65">
                The Centre of Discipleship · 20 Okumagba Avenue, Warri
              </p>
            </div>

            <div style={step(3)}>
              <Countdown />
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4" style={step(4)}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold text-[#1B140B] transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: GOLD }}
              >
                Get directions
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <button
                onClick={() => setFlyer(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-white/85 ring-1 ring-white/25 transition hover:bg-white/10 hover:text-white hover:ring-white/45"
              >
                View flyer
              </button>
            </div>
          </div>

          {/* flyer */}
          <button
            onClick={() => setFlyer(true)}
            aria-label="View the A Father's Blessing flyer"
            // width is capped by viewport height too, so the tall flyer never
            // overflows on short screens (aspect 618:1080 ≈ 0.572)
            className="group relative mx-auto w-full max-w-[285px] sm:max-w-[310px] lg:max-w-[min(340px,38svh)]"
            style={step(2)}
          >
            <span
              className="pointer-events-none absolute -inset-6 rounded-[36px] opacity-40 blur-3xl"
              style={{ background: `radial-gradient(circle, ${GOLD}55, transparent 70%)` }}
            />
            <span className="relative block overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-[0_40px_90px_rgba(0,0,0,0.55)] transition-transform duration-500 group-hover:-translate-y-1.5">
              <Image
                src={POSTER}
                alt="A Father's Blessing — Tuesday, August 18, 2026, 5pm at 20 Okumagba Avenue, Warri"
                width={POSTER_W}
                height={POSTER_H}
                sizes="(max-width: 1024px) 90vw, 340px"
                className="h-auto w-full transition-transform duration-[1200ms] group-hover:scale-[1.03]"
              />
            </span>
          </button>
        </div>
      </Container>

      <Lightbox open={flyer} onClose={() => setFlyer(false)} />

      <style jsx global>{`
        @keyframes sof-drift {
          0% { transform: scale(1.25) translate3d(0, 0, 0); }
          50% { transform: scale(1.32) translate3d(0, -1.5%, 0); }
          100% { transform: scale(1.25) translate3d(0, 0, 0); }
        }
      `}</style>
    </section>
  );
}
