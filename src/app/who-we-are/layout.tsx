// src/app/who-we-are/layout.tsx
import type { ReactNode } from "react";
import WhoWeAreNavBar from "./WhoWeAreNavBar";

export default function WhoWeAreLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <WhoWeAreNavBar />
      {children}
    </>
  );
}
