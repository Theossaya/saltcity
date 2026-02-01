"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import { User } from "lucide-react";
import Link from "next/link";

type Props = {
  open: boolean;
  onClose: () => void;
};

type NavItem = {
  title: string;
  desc: string;
  href: string;
};

const TOP_ITEMS: NavItem[] = [
  {
    title: "Attend Online",
    desc: "Check out a message live with our Church Online community.",
    href: "https://www.youtube.com/@saltcitycentral",
  },
  {
    title: "Sermons",
    desc: "Scripture-rich teaching series and messages.",
    href: "/media/sermon-series",
  },
  {
    title: "Resources",
    desc: "Tools and guides to help you grow in your faith.",
    href: "/resources",
  },
  {
    title: "Give",
    desc: "Giving is simple. Find ways to give and make a difference.",
    href: "/giving",
  },
  {
    title: "Who We Are",
    desc: "Learn about our story, beliefs, and leadership.",
    href: "/who-we-are",
  },
  {
    title: "Songs",
    desc: "Worship and sound doctrine set to melody.",
    href: "/songs",
  },
];

const WAYS_TO_CONNECT: NavItem[] = [
  {
    title: "CityCenter",
    desc: "Follow CityCenter and stay updated on gatherings and moments.",
    href: "https://instagram.com/mycitycentre",
  },
  {
    title: "LifeCity",
    desc: "Follow LifeCity for youth updates, meetups, and highlights.",
    href: "https://instagram.com/thisislifecity",
  },
  {
    title: "Shop",
    desc: "Merch and resources from our church.",
    href: "/shop",
  },
];

export default function MenuOverlay({ open, onClose }: Props) {
  // Keep mounted for animation
  const [mounted, setMounted] = useState(open);

  useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!mounted) return null;

  const isExternal = (href: string) => href.startsWith("http");

  return (
    <div
      className={[
        "fixed inset-0 z-50",
        "transition-opacity duration-300",
        open ? "opacity-100" : "opacity-0 pointer-events-none",
      ].join(" ")}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      onTransitionEnd={() => {
        if (!open) setMounted(false);
      }}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu backdrop"
        onClick={onClose}
        className={[
          "absolute inset-0",
          "bg-black/30 backdrop-blur-[2px]",
          "transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      {/* Panel */}
      <div
        className={[
          "absolute inset-0 bg-white",
          "transition-transform duration-300 ease-out",
          open ? "translate-y-0" : "-translate-y-3",
        ].join(" ")}
      >
        {/* Top bar mirrors header */}
        <div className="border-b border-black/10">
          <Container>
            <div className="flex items-center justify-between py-6">
              {/* Logo */}
              <Link href="/" className="flex items-center cursor-pointer" onClick={onClose}>
                <img src="/logo.svg" alt="SaltCity" className="h-6 w-auto" />
              </Link>

              <div className="flex items-center gap-6">
                {/* LOG IN */}
                <Link
                  href="/login"
                  onClick={onClose}
                  className="hidden sm:flex cursor-pointer items-center gap-2 uppercase text-sm font-semibold tracking-wide text-black/70 hover:text-black"
                >
                  <div className="grid h-7 w-7 place-items-center rounded-full border border-black/20 text-black/50">
                    <User className="h-4 w-4" />
                  </div>
                  <span>LOG IN</span>
                </Link>

                {/* Close Menu */}
                <button
                  type="button"
                  onClick={onClose}
                  className="flex cursor-pointer items-center gap-3 uppercase text-sm font-semibold tracking-wide text-black/70 hover:text-black"
                  aria-label="Close menu"
                >
                  <span className="text-xl leading-none">×</span>
                  <span>MENU</span>
                </button>
              </div>
            </div>
          </Container>
        </div>

        {/* Content */}
        <div className="h-[calc(100vh-81px)] overflow-y-auto">
          <Container>
            <div className="py-10">
              {/* Mobile */}
              <div className="lg:hidden space-y-10">
                <div className="space-y-6">
                  {TOP_ITEMS.map((x) => {
                    const ext = isExternal(x.href);
                    return (
                      <Link
                        key={x.title}
                        href={x.href}
                        onClick={onClose}
                        target={ext ? "_blank" : undefined}
                        rel={ext ? "noopener noreferrer" : undefined}
                        className="block cursor-pointer"
                      >
                        <div className="text-sm font-bold text-sky-600 hover:underline">
                          {x.title}
                        </div>
                        <div className="text-sm text-black/70 mt-1">{x.desc}</div>
                      </Link>
                    );
                  })}
                </div>

                <div>
                  <div className="text-xl font-extrabold mb-4">More of us</div>
                  <div className="space-y-6">
                    {WAYS_TO_CONNECT.map((x) => {
                      const ext = isExternal(x.href);
                      return (
                        <Link
                          key={x.title}
                          href={x.href}
                          onClick={onClose}
                          target={ext ? "_blank" : undefined}
                          rel={ext ? "noopener noreferrer" : undefined}
                          className="block cursor-pointer"
                        >
                          <div className="text-sm font-bold text-sky-600 hover:underline">
                            {x.title}
                          </div>
                          <div className="text-sm text-black/70 mt-1">{x.desc}</div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Desktop */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-[260px_1fr] gap-12">
                  {/* Left column */}
                  <div className="space-y-10">
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-wide text-black/40 mb-4">
                        Explore
                      </div>
                      <div className="space-y-4">
                        {TOP_ITEMS.map((x) => {
                          const ext = isExternal(x.href);
                          return (
                            <Link
                              key={x.title}
                              href={x.href}
                              onClick={onClose}
                              target={ext ? "_blank" : undefined}
                              rel={ext ? "noopener noreferrer" : undefined}
                              className="block cursor-pointer text-sky-600 font-bold hover:underline"
                            >
                              {x.title}
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <div className="text-3xl font-extrabold mb-6">Ways to Connect</div>
                      <div className="space-y-5">
                        {WAYS_TO_CONNECT.map((x) => {
                          const ext = isExternal(x.href);
                          return (
                            <Link
                              key={x.title}
                              href={x.href}
                              onClick={onClose}
                              target={ext ? "_blank" : undefined}
                              rel={ext ? "noopener noreferrer" : undefined}
                              className="block cursor-pointer text-left text-sky-600 font-bold hover:underline"
                            >
                              {x.title}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right column descriptions */}
                  <div className="space-y-7">
                    {WAYS_TO_CONNECT.map((x) => (
                      <div key={x.title} className="border-b border-black/5 pb-6">
                        <div className="text-sm font-semibold text-black/90 mb-1">{x.title}</div>
                        <div className="text-sm text-black/70">{x.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-14 border-t border-black/10 pt-10">
                  <div className="text-3xl font-extrabold mb-6">About Us</div>
                  <div className="text-sm text-black/70">
                    Placeholder section — we’ll clone this section next.
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
