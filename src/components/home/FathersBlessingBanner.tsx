import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

/**
 * TEMPORARY homepage feature for "A Father's Blessing" (Tue Aug 18, 2026).
 * Remove after the event: delete this file, its import, and <FathersBlessingBanner />
 * in src/app/page.tsx.
 */
export default function FathersBlessingBanner() {
  return (
    <section className="bg-[#1B140B] text-white">
      <Container>
        <Link
          href="/fathers-blessing"
          className="group flex flex-col items-center gap-5 py-6 text-center sm:flex-row sm:gap-8 sm:py-7 sm:text-left"
        >
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/15 sm:h-28 sm:w-28">
            <Image
              src="/images/fathers-blessing/poster.jpg"
              alt="A Father's Blessing"
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#E0B25C]">
              Happening tomorrow · Tuesday
            </div>
            <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
              A Father&apos;s Blessing
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-white/70">
              Tuesday, August 18, 2026 · 5pm · The Centre of Discipleship, 20 Okumagba Avenue, Warri
            </p>
          </div>

          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#E0B25C] px-7 py-3.5 text-sm font-bold text-[#1B140B] transition group-hover:bg-[#ECC574]">
            Register
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </Link>
      </Container>
    </section>
  );
}
