import Hero from "@components/landing/Hero";
import Perks from "@components/landing/Perks";
import WhitepaperQuote from "@components/landing/WhitepaperQuote";
import Uses from "@components/landing/Uses";
import Stats from "@components/landing/Stats";
import Featured from "@components/landing/Featured";
import Highlights from "@components/Highlights";

export default function Home() {
  return (
    <>
      <Hero />
      <WhitepaperQuote />
      <Perks />
      <Uses />
      {/* <Highlights /> */}
      <Stats />
      <Featured />
    </>
  );
}
