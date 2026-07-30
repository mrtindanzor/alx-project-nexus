import { Features } from "./sections/Features";
import { HomeHeader } from "./sections/Header";
import { Pitch } from "./sections/Pitch";
import { WelcomeBanner } from "./sections/WelcomeBanner";

export function Home() {
  return (
    <main className="py-10">
      <HomeHeader />
      <WelcomeBanner />
      <Pitch />
      <Features />
    </main>
  );
}
