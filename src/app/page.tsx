import Hero from "@/components/home/Hero";
import FathersBlessingBanner from "@/components/home/FathersBlessingBanner";
import NextSteps from "@/components/home/NextSteps";
import NewHere from "@/components/home/NewHere";
import ListenToSermons from "@/components/home/BibleApp";
import OpenNetworkStrip from "@/components/layout/OpenNetworkStrip";

export default function Home() {
  return (
    <main>
      <Hero />
      <FathersBlessingBanner />
      <NextSteps />
      <NewHere />
      <ListenToSermons />
      <OpenNetworkStrip />
    </main>
  );
}