"use client";

import { useEffect } from "react";
import Modal from "@/components/ui/Modal";

type Props = {
  open: boolean;
  onClose: () => void;
  filloutUrl: string; // full Fillout form URL
  title?: string;
  description?: string;
};

export default function FilloutModal({
  open,
  onClose,
  filloutUrl,
  title = "First Time Here?",
  description = "Fill this quickly and we’ll reach out.",
}: Props) {
  // Optional: allow ESC close even if your Modal already handles it
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <Modal open={open} onClose={onClose} title={title} description={description}>
      <div className="w-full">
        {/* Keeps the embed responsive and tall enough */}
        <div className="relative w-full h-[72vh] min-h-[520px] rounded-2xl overflow-hidden border border-black/10 bg-white">
          <iframe
            title="Fillout First Time Form"
            src={filloutUrl}
            className="absolute inset-0 h-full w-full"
            allow="clipboard-write; fullscreen"
          />
        </div>

        <div className="mt-4 text-xs text-black/55">
          If it doesn’t load, open it in a new tab:{" "}
          <a
            className="underline font-semibold"
            href={filloutUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Form
          </a>
        </div>
      </div>
    </Modal>
  );
}
