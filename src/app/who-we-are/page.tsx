// src/app/who-we-are/page.tsx
import HeroMission from "./HeroMission";
import StoryWithVideo from "./StoryWithVideo";
import ExperienceSection from "./ExperienceSection";
import LeadershipIntro from "./LeadershipIntro";
import LeadershipGrid from "./LeadershipGrid";
import AppCTA from "./AppCTA";
import WhatToExpectButton from "./WhatToExpectButton";

export default function WhoWeArePage() {
  return (
    <main>
      <HeroMission />
      <StoryWithVideo />
      <ExperienceSection />
      <LeadershipIntro />
      <LeadershipGrid />
      <AppCTA />
      <WhatToExpectButton />
    </main>
  );
}
