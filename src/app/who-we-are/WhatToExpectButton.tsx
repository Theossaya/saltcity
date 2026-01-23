import Link from "next/link";

export default function WhatToExpectButton() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex justify-center">
          <Link
            href="/who-we-are/what-to-expect"
            className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-white font-semibold hover:opacity-90 transition"
          >
            What to Expect <span aria-hidden>›</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
