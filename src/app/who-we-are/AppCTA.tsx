"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/ui/Modal";
import CompanyForm from "@/components/forms/CompanyForm";

export default function AppCTA() {
  const [open, setOpen] = useState(false);

  const bg = "/images/fulfill_call.jpg";
  const icon = "/logo-white.svg";

  return (
    <>
      <section className="w-full bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="grid items-stretch gap-0 md:grid-cols-12">
            {/* IMAGE PANEL */}
            <div className="md:col-span-5">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="relative aspect-[4/5] md:aspect-[3/4]">
                  <Image
                    src={bg}
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    style={{ objectPosition: "50% 20%" }}
                    quality={75}
                  />

                  {/* 🔥 ALL-AROUND BLEND */}
                  <div className="pointer-events-none absolute inset-0">
                    {/* soft vignette — fades image on every edge */}
                    <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_40%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.75)_100%)]" />

                    {/* extra feather to kill hard edges */}
                    <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.85)]" />
                  </div>
                </div>
              </div>
            </div>

            {/* CONTENT PANEL (NO BACKGROUND CARD) */}
            <div className="md:col-span-7 flex items-center">
              <div className="px-4 py-8 md:px-8 md:py-12">
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white">
                  Ready for Growth?
                  <br />
                  Become a Member.
                </h2>

                <p className="mt-4 max-w-xl text-white/80">
                  Join a Company and grow with believers around you through structure,
                  fellowship, and discipleship.
                </p>

                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center">
                  <a
                    href="/app/download"
                    className="inline-flex items-center justify-center rounded-2xl bg-white/10 p-3 hover:bg-white/15 transition"
                  >
                    <img src={icon} alt="SaltCity App" className="h-14 w-14" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black transition"
                  >
                    Join a Company
                  </button>
                </div>

                <div className="mt-8 text-xs text-white/60">
                  We’ll connect you to a Company lead near you.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        open={open}
        title="Join a Company"
        description="Tell us where you are and what kind of community you’re looking for."
        onClose={() => setOpen(false)}
        footer={
          <div className="text-xs text-black/60">
            We’ll connect you to a company lead near you.
          </div>
        }
      >
        <CompanyForm onDone={() => setOpen(false)} />
      </Modal>
    </>
  );
}
