import { LayoutWithBackButton } from "@/shared/layouts/components/server/LayoutWithBackButton";
import { PollResultsHeader } from "../components/Header";
import { PollResultsCard } from "../components/PollResultsCard";

type PollResultPageProps = {
  pollId: string;
};

export function PollResultPage({ pollId }: PollResultPageProps) {
  return (
    <main className="pt-20 min-h-screen section pb-20">
      <PollResultsHeader />
      <LayoutWithBackButton>
        <h1 className="text-center font-black max-w-lg mx-auto text-2xl sm:text-3xl my-4">
          Interactive Polling, Powered by Live Results
        </h1>
        <p className="text-center mb-8 text-neutral/80">
          Engage your audience with instant polls and real-time updates that
          bring every vote to life.
        </p>
        <PollResultsCard pollId={pollId} />
      </LayoutWithBackButton>
    </main>
  );
}
