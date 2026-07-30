import { LayoutWithBackButton } from "@/shared/layouts/components/LayoutWithBackButton";
import { PollVoteHeader } from "./components/Header";
import { VoteCard } from "./components/VoteCard";

type PollVotePageProps = {
  pollId: string;
};

export function PollVotePage({ pollId }: PollVotePageProps) {
  return (
    <main className="py-20 min-h-screen section">
      <PollVoteHeader />
      <LayoutWithBackButton>
        <VoteCard pollId={pollId} />
      </LayoutWithBackButton>
    </main>
  );
}
