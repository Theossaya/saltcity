"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Modal from "@/components/ui/Modal";

type ActiveModal = "baptism" | "serve" | "counseling" | null;

const STEPS = [
  {
    title: "Sign up for discipleship",
    desc: "Learn what it means and register for the next discipleship class.",
    kind: "modal" as const,
    modalKey: "baptism" as const,
  },
  {
    title: "Serve Team",
    desc: "Join a team and start serving with your gifts.",
    kind: "modal" as const,
    modalKey: "serve" as const,
  },
  {
    title: "Counseling / Prayer",
    desc: "Request counseling or let us stand with you in prayer.",
    kind: "modal" as const,
    modalKey: "counseling" as const,
  },
  {
    title: "Find a Location",
    desc: "See all locations and service times.",
    kind: "link" as const,
    href: "/locations",
  },
  {
    title: "What to Expect",
    desc: "If you’re new, start here.",
    kind: "link" as const,
    href: "/who-we-are/what-to-expect",
  },
  {
    title: "Contact Us",
    desc: "Questions? Reach out and we’ll respond.",
    kind: "link" as const,
    href: "/contact",
  },
];

export default function NextStepsPage() {
  const [active, setActive] = useState<ActiveModal>(null);

  return (
    <>
      <main className="pb-16">
        <section className="py-14 bg-white border-b border-black/10">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-5xl font-black tracking-tight text-black">
                More Steps
              </h1>
              <p className="mt-4 text-lg leading-8 text-black/70">
                Here are simple pathways to help you grow, connect, and serve.
              </p>

              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex rounded-full border border-black/15 px-5 py-2 text-sm font-semibold text-black/70 hover:border-black/25 hover:text-black"
                >
                  ← Back home
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-neutral-50">
          <Container>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {STEPS.map((s) => {
                const cardClass =
                  "group bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-black/5";

                if (s.kind === "link") {
                  return (
                    <Link key={s.title} href={s.href} className={cardClass}>
                      <h3 className="text-xl font-bold text-black mb-3">
                        {s.title}
                      </h3>
                      <p className="text-base text-black/70 leading-relaxed">
                        {s.desc}
                      </p>
                      <div className="mt-6 text-sm font-semibold text-black/60 group-hover:text-black">
                        Open →
                      </div>
                    </Link>
                  );
                }

                return (
                  <button
                    key={s.title}
                    type="button"
                    onClick={() => setActive(s.modalKey)}
                    className={cardClass + " text-left"}
                  >
                    <h3 className="text-xl font-bold text-black mb-3">
                      {s.title}
                    </h3>
                    <p className="text-base text-black/70 leading-relaxed">
                      {s.desc}
                    </p>
                    <div className="mt-6 text-sm font-semibold text-black/60 group-hover:text-black">
                      Start →
                    </div>
                  </button>
                );
              })}
            </div>
          </Container>
        </section>
      </main>

      <Modal
        open={active === "baptism"}
        title="Water Baptism"
        description="Register and we’ll share the next available date and class details."
        onClose={() => setActive(null)}
      >
        <SimpleForm
          onDone={() => setActive(null)}
          fields={[
            { label: "Full Name", required: true },
            { label: "Phone Number", required: true },
            { label: "Email (optional)" },
          ]}
        />
      </Modal>

      <Modal
        open={active === "serve"}
        title="Serve Team"
        description="Tell us what you’re interested in and we’ll connect you."
        onClose={() => setActive(null)}
      >
        <SimpleForm
          onDone={() => setActive(null)}
          fields={[
            { label: "Full Name", required: true },
            { label: "Phone Number", required: true },
            { label: "Preferred Team (optional)" },
          ]}
        />
      </Modal>

      <Modal
        open={active === "counseling"}
        title="Counseling / Prayer"
        description="Share briefly and someone will reach out."
        onClose={() => setActive(null)}
      >
        <SimpleForm
          onDone={() => setActive(null)}
          fields={[
            { label: "Full Name", required: true },
            { label: "Phone Number", required: true },
            { label: "Message (optional)", textarea: true },
          ]}
        />
      </Modal>
    </>
  );
}

function SimpleForm({
  onDone,
  fields,
}: {
  onDone: () => void;
  fields: Array<{ label: string; required?: boolean; textarea?: boolean }>;
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: connect to an API route / form provider
        onDone();
      }}
      className="grid gap-5"
    >
      {fields.map((f) => (
        <label key={f.label} className="block">
          <div className="text-xs font-bold uppercase tracking-wider text-black/60 mb-2">
            {f.label}
          </div>
          {f.textarea ? (
            <textarea
              rows={4}
              required={f.required}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/15"
            />
          ) : (
            <input
              required={f.required}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/15"
            />
          )}
        </label>
      ))}

      <div className="mt-2 flex flex-wrap gap-3">
        <button
          type="submit"
          className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={onDone}
          className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-black/70 hover:border-black/25 hover:text-black"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
