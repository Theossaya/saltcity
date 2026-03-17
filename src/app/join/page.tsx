// src/app/join/page.tsx
//
// Drop this file at: src/app/join/page.tsx
// Image is already at: public/images/members.jpg
//
// Shareable direct link: https://yourdomain.com/join
// The membership modal auto-opens the moment the page loads.

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/nav/Header";
import Footer from "@/components/layout/Footer";
import Modal from "@/components/ui/Modal";
import MembershipForm from "@/components/forms/MembershipForm";

export default function JoinPage() {
  const [open, setOpen] = useState(false);

  // Auto-open the modal once the page has mounted
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <>

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">

          {/* Background photo */}
          <Image
            src="/images/members.jpg"
            alt="Salt City Church congregation worshipping together"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Dark overlay — heavier at bottom so text pops */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

          {/* Subtle warm tint layer */}
          <div className="absolute inset-0 bg-amber-950/20" />

          {/* Content */}
          <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center">

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                Membership
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
              You Belong
              <br />
              <span className="text-amber-400">Here.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mx-auto mb-10">
              Becoming a member is how you go from attending Salt City to
              belonging to Salt City. It takes two minutes to register.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setOpen(true)}
                className="group inline-flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 text-base font-bold hover:bg-amber-50 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:-translate-y-0.5"
              >
                <span>Fill the Membership Form</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white px-6 py-4 text-sm font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Back to home
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
            <span className="text-xs text-white font-medium tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
          </div>
        </section>

        {/* ── Why Membership ─────────────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black mb-4">
                Why become a member?
              </h2>
              <p className="text-lg text-black/60 max-w-xl mx-auto leading-relaxed">
                Membership isn't about a title. It's about commitment — yours to
                the family, and ours to you.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                  title: "Be known",
                  body: "You're no longer just a face in the crowd. You're part of the family — and we take care of our own.",
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                  title: "Be covered",
                  body: "Membership connects you to pastoral care, counseling, and the support structures of the church.",
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  ),
                  title: "Go deeper",
                  body: "Members get access to discipleship classes, companies, serve teams, and everything that helps you grow.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-black/8 bg-neutral-50 p-8 hover:bg-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center mb-6 text-black group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-black text-black mb-2">{item.title}</h3>
                  <p className="text-sm text-black/60 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-3 rounded-full bg-black text-white px-10 py-4 text-base font-bold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Fill the Membership Form</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <p className="mt-4 text-sm text-black/40">Takes about 1 minutes.</p>
            </div>
          </div>
        </section>
      </main>


      {/* ── Membership Modal ──────────────────────────────────────────────── */}
      <Modal
        open={open}
        title="Membership Form"
        description="Fill this in and we'll help you get properly connected to Salt City."
        onClose={() => setOpen(false)}
        footer={
          <div className="text-xs text-black/50">
            By submitting, you confirm your consent as described in our Privacy Policy.
          </div>
        }
      >
        <MembershipForm onDone={() => setOpen(false)} />
      </Modal>
    </>
  );
}