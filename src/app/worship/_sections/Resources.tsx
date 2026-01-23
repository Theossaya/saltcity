// src/app/worship/_sections/Resources.tsx
import Link from "next/link";

const RES_IMG =
  "https://cms-images.life.church/lc-site/pages/worship/WorshipResources_V2.png";
const OPEN_LOGO =
  "https://cms-images.life.church/lc-site/pages/worship/LC_OpenNetwork_Logo.svg";

export default function Resources() {
  return (
    <section className="relative w-full bg-[#111111] text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div className="flex justify-center md:justify-start">
          <img
            src={RES_IMG}
            alt="Worship resources"
            className="h-auto w-[560px] max-w-full"
            loading="lazy"
          />
        </div>

        <div>
          <img
            src={OPEN_LOGO}
            alt="Open Network"
            className="h-auto w-[220px] max-w-full"
            loading="lazy"
          />

          <h2 className="mt-6 text-[28px] font-extrabold tracking-tight">
            Get free worship resources for your church.
          </h2>

          <div className="mt-4 space-y-4 text-[16px] leading-7 text-white/80">
            <p>
              Download free resources and support material for music from
              Life.Church Worship, Switch, and our partners on{" "}
              <a
                className="underline decoration-white/60 underline-offset-4 hover:decoration-white"
                href="https://open.life.church"
                target="_blank"
                rel="noreferrer"
              >
                Open Network
              </a>
              .
            </p>

            <p>
              From ProPresenter slides, lyrics, chord charts, and album art—you’ll
              find everything your ministry needs to lead others in worship to God.
            </p>
          </div>

          <Link
            href="https://open.life.church/categories/316-worship"
            target="_blank"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-[13px] font-semibold text-white hover:border-white/50"
          >
            Get Free Resources <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
