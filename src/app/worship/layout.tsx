// src/app/worship/layout.tsx
import type { ReactNode } from "react";
import WorshipNavBar from "./WorshipNavBar";

export default function WorshipLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <WorshipNavBar />
      {children}
    </div>
  );
}
