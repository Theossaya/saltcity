// ─── TEMPORARY: A Father's Blessing takeover (Tue Aug 18, 2026) ───────────
// The event hero replaces the usual slideshow so the announcement is the
// first thing visitors see. TO REVERT after the event:
//   1. uncomment the Hero import below and render <Hero /> instead
//   2. delete src/components/home/FathersBlessingHero.tsx
//   3. git checkout src/app/fathers-blessing/page.tsx  (restores registration)
// import Hero from "@/components/home/Hero";
import FathersBlessingHero from "@/components/home/FathersBlessingHero";
import NextSteps from "@/components/home/NextSteps";
import NewHere from "@/components/home/NewHere";
import ListenToSermons from "@/components/home/BibleApp";
import OpenNetworkStrip from "@/components/layout/OpenNetworkStrip";

export default function Home() {
  return (
    <main>
      <FathersBlessingHero />
      <NextSteps />
      <NewHere />
      <ListenToSermons />
      <OpenNetworkStrip />
    </main>
  );
}
