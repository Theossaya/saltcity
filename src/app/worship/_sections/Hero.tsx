// src/app/worship/_sections/Hero.tsx
import Link from "next/link";

const HERO_BG =
  "https://cms-images.life.church/lc-site/pages/worship/Worship_Hero-Desktop-V2.jpg";

export default function Hero() {
  return (
    <section
      className="relative min-h-[520px] w-full bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      {/* gradient overlay (transparent -> black) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/85" />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-20 pt-16 text-center">
        <h1 className="text-balance text-[40px] font-extrabold leading-tight tracking-tight md:text-[56px]">
          Worship isn’t just the
          <br />
          songs we sing.
          <br />
          It&apos;s our way of life.
        </h1>

        <p className="mt-5 max-w-2xl text-[15px] leading-6 text-white/85 md:text-[16px]">
          There’s power and energy when we let go of distractions and focus on
          God together. When we gather at church, we sing songs that honor God
          for who He is and what He’s done.
        </p>

        <Link
          href="/worship/albums"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-black hover:bg-white/90"
        >
          Explore Music <span aria-hidden="true">›</span>
        </Link>
      </div>
    </section>
  );
}
