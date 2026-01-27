"use client";

import { useEffect } from "react";

type ModalProps = {
  open: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export default function Modal({
  open,
  title,
  description,
  onClose,
  children,
  footer,
}: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Backdrop */}
      <button
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      {/* Panel */}
      <div className="relative w-full max-w-[640px] rounded-2xl bg-white shadow-2xl border border-black/10 overflow-hidden">
        <div className="p-6 border-b border-black/10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-black tracking-tight text-black">
                {title}
              </h3>
              {description ? (
                <p className="mt-2 text-sm leading-6 text-black/70">
                  {description}
                </p>
              ) : null}
            </div>

            <button
              onClick={onClose}
              className="rounded-full px-3 py-1 text-sm font-semibold text-black/70 hover:text-black hover:bg-black/5"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6">{children}</div>

        {footer ? (
          <div className="p-6 border-t border-black/10 bg-neutral-50">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}
