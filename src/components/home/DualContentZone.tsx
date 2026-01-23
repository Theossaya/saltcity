"use client";

import Container from "@/components/ui/Container";

const LOCATIONS = [
  { group: "Online", items: [{ label: "SaltCity Online", value: "online" }] },
  {
    group: "Nigeria",
    items: [
      { label: "Warri", value: "warri" },
      { label: "Benin City", value: "benin" },
    ],
  },
];

export default function DualContentZone() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between gap-10">
          {/* left image */}
          <div className="lg:w-[584px]">
            <div className="overflow-hidden rounded-[32px]">
              <img
                src="/place-for-you.jpg"
                alt="Welcome"
                className="h-[520px] w-full object-cover lg:h-[584px]"
              />
            </div>
          </div>

          {/* right content */}
          <div className="lg:w-[584px]">
            <h1 className="text-[44px] leading-[44px] lg:text-[72px] lg:leading-[72px] font-black mb-6">
              There’s a place for you here.
            </h1>

            <p className="text-[18px] leading-[30px] lg:text-[22px] lg:leading-[34px] text-black/80 max-w-[40ch]">
              Placeholder copy for SaltCity. We’ll replace this with your real text once you’re ready.
            </p>

            <div className="pt-8" />

            <a
              href="#find-closest-location"
              className="inline-flex items-center gap-3 font-semibold underline underline-offset-4"
            >
              <span className="inline-grid h-5 w-5 place-items-center rounded-full border border-black/40">
                ⦿
              </span>
              <span>Find Your Closest Location</span>
            </a>

            <div className="mt-6">
              <div className="relative max-w-[620px]">
                <select
                className="appearance-none h-[56px] w-full rounded-xl border border-black/25 bg-white px-6 pr-12 text-[18px] shadow-[0_10px_24px_rgba(0,0,0,0.10)]"
                defaultValue=""
                >
                  <option value="">Choose a Location</option>
                  {LOCATIONS.map((g) => (
                    <optgroup key={g.group} label={g.group}>
                      {g.items.map((x) => (
                        <option key={x.value} value={x.value}>
                          {x.label}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>

                <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-black/70">
                  ▼
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
