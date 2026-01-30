import { Features } from "../components/Features";
import { HomeHeader } from "../components/Header";
import { Pitch } from "../components/Pitch";
import { WelcomeBanner } from "../components/WelcomeBanner";

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
