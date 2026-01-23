// src/app/worship/WorshipNavBar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "What Is Worship?", href: "/worship" },
  { label: "Life.Church Worship", href: "/worship/lcworship" },
  { label: "Switch", href: "/worship/switch-music" },
  { label: "Albums", href: "/worship/albums" },
];

function isActive(pathname: string, href: string) {
  if (href === "/worship") return pathname === "/worship";
  return pathname.startsWith(href);
}

export default function WorshipNavBar() {
  const pathname = usePathname();

  return (
    <section className="w-full border-b border-black/15 bg-[#f3f3f3]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-[20px] font-semibold tracking-tight text-black">
          Worship
        </h1>

        <nav aria-label="Worship navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {tabs.map((t) => {
              const active = isActive(pathname, t.href);
              return (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "group relative inline-block",
                      "text-[13px] font-medium text-black/70 hover:text-black",
                      "pb-3",
                    ].join(" ")}
                  >
                    {t.label}

                    {/* hover underline */}
                    <span
                      className={[
                        "pointer-events-none absolute left-0 right-0 -bottom-[1px] h-[2px]",
                        "bg-black/25",
                        "origin-left scale-x-0 transition-transform duration-200",
                        "group-hover:scale-x-100",
                      ].join(" ")}
                    />

                    {/* active underline */}
                    {active && (
                      <span className="pointer-events-none absolute left-0 right-0 -bottom-[1px] h-[2px] bg-black/70" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile: simple select-like pills */}
        <nav aria-label="Worship navigation mobile" className="md:hidden">
          <ul className="flex flex-wrap gap-2 justify-end">
            {tabs.map((t) => {
              const active = isActive(pathname, t.href);
              return (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    className={[
                      "rounded-full border px-3 py-2 text-[12px] font-semibold",
                      active
                        ? "border-black bg-black text-white"
                        : "border-black/20 bg-white text-black",
                    ].join(" ")}
                  >
                    {t.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}
