// src/app/worship/_sections/Serve.tsx
"use client";

import { useState } from "react";

const COLLAGE =
  "https://cms-images.life.church/lc-site/pages/worship/VolunteerCollage-V3.png";

export default function Serve() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full bg-[#1a1a1a]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a2a] via-black/70 to-black" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div className="flex justify-center md:justify-start">
          <img
            src={COLLAGE}
            alt="Volunteer collage"
            className="h-auto w-[420px] max-w-full"
            loading="lazy"
          />
        </div>

        <div className="text-white">
          <h2 className="text-[28px] font-extrabold tracking-tight">
            Serve on the Tech &amp; Worship Team at your location.
          </h2>

          <p className="mt-4 text-[16px] leading-7 text-white/80">
            When you serve with the Tech &amp; Worship Team at your Life.Church
            location, you help create an environment for people to be in God’s
            presence. No matter your skill level, there’s a spot for you.
          </p>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-7 inline-flex items-center rounded-full border border-white/25 px-5 py-3 text-[13px] font-semibold text-white hover:border-white/50"
          >
            See Serving Opportunities
          </button>
        </div>
      </div>

      {/* Simple modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-2xl rounded-2xl bg-white p-6 text-black shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[18px] font-bold">Serving Opportunities</h3>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full px-3 py-1 text-[16px] text-black/70 hover:bg-black/5"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-3 text-[15px] leading-6 text-black/80">
              <p>
                <strong>Social Media:</strong> Help people engage with Life.Church
                through your location’s social media channels.
              </p>
              <p>
                <strong>Photography:</strong> Visually capture how God is moving
                at Life.Church.
              </p>
              <p>
                <strong>Tech:</strong> Help set the stage for people to experience
                God through lighting, slides, and more.
              </p>
              <p>
                <strong>FOH Sound Engineer:</strong> Create an audio environment for
                people to experience God during services. <em>(Requires an audition)</em>
              </p>
              <p>
                <strong>Band &amp; Vocals:</strong> Lead people to worship God
                through music as part of a weekend service. <em>(Requires an audition)</em>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center rounded-full bg-black px-5 py-3 text-[13px] font-semibold text-white hover:bg-black/90"
                href="https://www.life.church/webview-app/multistep-forms/serving/"
                target="_blank"
                rel="noreferrer"
              >
                Sign Up to Serve
              </a>
              <a
                className="inline-flex items-center rounded-full border border-black/15 bg-white px-5 py-3 text-[13px] font-semibold text-black hover:bg-black/5"
                href="https://lifechurch.formstack.com/forms/lcworshipteam"
                target="_blank"
                rel="noreferrer"
              >
                Sign Up to Audition
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
