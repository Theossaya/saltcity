"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Find a Location", href: "/locations" },
  { label: "SaltCity Online", href: "/locations#online" },
];

export default function LocationsNavBar() {
  const pathname = usePathname();

  return (
    <section className="border-y border-black/10 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <h1 className="text-3xl font-semibold tracking-tight">Locations</h1>

        <nav className="hidden gap-8 md:flex">
          {tabs.map((t) => {
            const active = t.href === "/locations" ? pathname === "/locations" : false;
            return (
              <Link
                key={t.href}
                href={t.href}
                className={[
                  "text-sm font-medium tracking-wide text-black/80",
                  "hover:text-black",
                  "pb-4 -mb-4 border-b-2",
                  active ? "border-black" : "border-transparent hover:border-black/30",
                ].join(" ")}
              >
                {t.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
