// src/app/worship/_sections/Careers.tsx
import Link from "next/link";

const COLLAGE =
  "https://cms-images.life.church/lc-site/pages/worship/CareersCollage.png";

export default function Careers() {
  return (
    <section className="relative w-full bg-[#141414] text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-[28px] font-extrabold tracking-tight">
            Feel called to work in ministry?
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-white/80">
            We’re hiring worship pastors at Life.Church locations. God is telling
            a story here, and you have a part to play.
          </p>

          <Link
            href="https://www.life.church/careers/find-a-role/?job_team=Ministry"
            target="_blank"
            className="mt-7 inline-flex items-center rounded-full border border-white/25 px-5 py-3 text-[13px] font-semibold text-white hover:border-white/50"
          >
            Find an Open Role
          </Link>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={COLLAGE}
            alt="Careers collage"
            className="h-auto w-[420px] max-w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
