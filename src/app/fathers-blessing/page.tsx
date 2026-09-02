import type { Metadata } from "next";
import FathersBlessingClient from "./FathersBlessingClient";

export const metadata: Metadata = {
  title: "A Father's Blessing | SaltCity",
  description:
    "A Father's Blessing — an evening of blessing and impartation. Tuesday, August 18, 2026, 5pm at 20 Okumagba Avenue, Warri. Register to attend.",
  openGraph: {
    title: "A Father's Blessing",
    description:
      "An evening of blessing and impartation. Tuesday, August 18, 2026, 5pm · 20 Okumagba Avenue, Warri.",
    images: ["/images/fathers-blessing/poster.jpg"],
  },
};

export default function FathersBlessingPage() {
  return <FathersBlessingClient />;
}
