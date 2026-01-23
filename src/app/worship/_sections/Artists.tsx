// src/app/worship/_sections/Artists.tsx
import Link from "next/link";

const LOCKUP =
  "https://cms-images.life.church/lc-site/pages/worship/worship-collectives-lockup-desktop.png";

export default function Artists() {
  return (
    <section className="relative w-full bg-[#151515] text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />

      <div className="relative mx-auto w-full max-w-5xl px-6 py-20">
        <div className="flex justify-center">
          <img
            src={LOCKUP}
            alt="Life.Church Worship and Switch"
            className="h-auto w-[420px] max-w-full"
            loading="lazy"
          />
        </div>

        <h2 className="mt-10 text-[28px] font-extrabold tracking-tight">
          Meet our worship collectives.
        </h2>

        <div className="mt-4 space-y-4 text-[16px] leading-7 text-white/80">
          <p>
            At Life.Church, we have two collectives of worship pastors who write
            and release music for our church: Life.Church Worship and Switch.
          </p>
          <p>
            These collectives capture what God is doing in our church and write
            anthems that tell the story of how He is moving. You can listen to
            all their music on your favorite digital platform!
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/worship/lcworship"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-transparent px-5 py-3 text-[13px] font-semibold text-white hover:border-white/50"
          >
            Listen to Life.Church Worship <span aria-hidden="true">›</span>
          </Link>

          <Link
            href="/worship/switch-music"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-transparent px-5 py-3 text-[13px] font-semibold text-white hover:border-white/50"
          >
            Discover Music From Switch <span aria-hidden="true">›</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
