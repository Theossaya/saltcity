"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = {
  label: string;
  href: string;
};

const tabs: Tab[] = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "What to Expect", href: "/who-we-are/what-to-expect" },
  { label: "Our Beliefs", href: "/who-we-are/our-beliefs" },
];

function isActive(pathname: string, href: string) {
  if (href === "/who-we-are") return pathname === "/who-we-are";
  return pathname.startsWith(href);
}

export default function WhoWeAreNavBar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white border-b border-black/10 sticky top-[73px] z-30">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center gap-1 h-14">
          {tabs.map((t) => {
            const active = isActive(pathname, t.href);
            return (
              <Link
                key={t.href}
                href={t.href}
                className={`relative px-6 h-full flex items-center text-sm font-semibold transition-colors ${
                  active ? "text-black" : "text-black/50 hover:text-black/75"
                }`}
              >
                {t.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-black" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="md:hidden py-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {tabs.map((t) => {
              const active = isActive(pathname, t.href);
              return (
                <Link
                  key={t.href}
                  href={t.href}
                  className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                    active
                      ? "bg-black text-white"
                      : "bg-neutral-100 text-black/70 hover:bg-neutral-200"
                  }`}
                >
                  {t.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}