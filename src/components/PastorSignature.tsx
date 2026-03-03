"use client";

export default function PastorSignature({
  name = "Pastor Tobore David",
  subtitle = "Lead Pastor, SaltCity Church",
}: {
  name?: string;
  subtitle?: string;
}) {
  return (
    <div className="mt-8">
      <div className="relative rounded-2xl border border-black/5 bg-white/70 px-6 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div className="absolute -right-10 -bottom-10 text-[120px] font-black tracking-tight text-black select-none">
            {name}
          </div>
        </div>

        <div className="relative flex flex-col gap-2">
          <div className="h-14 w-[260px] sm:w-[320px]">
            <svg viewBox="0 0 520 120" className="h-full w-full" fill="none">
              <path
                className="signature-path"
                d="M20 70
                   C 60 30, 85 95, 120 62
                   C 145 40, 160 95, 195 60
                   C 230 25, 250 95, 285 55
                   C 315 20, 340 95, 380 58
                   C 410 30, 440 85, 500 50"
                stroke="rgba(0,0,0,0.85)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="text-sm font-semibold text-black">{name}</div>
          <div className="text-xs text-black/60">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}
