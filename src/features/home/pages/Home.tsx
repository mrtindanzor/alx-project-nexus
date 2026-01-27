import { Features } from "../components/Features";
import { Pitch } from "../components/Pitch";
import { WelcomeBanner } from "../components/WelcomeBanner";

export function Home() {
  return (
    <main className="py-10">
      <WelcomeBanner />
      <Pitch />
      <Features />
    </main>
  );
}
