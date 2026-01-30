import { LayoutWithBackButton } from "@/shared/layouts/components/server/LayoutWithBackButton";
import { PollVoteHeader } from "../components/Header";
import { PollVoteCard } from "../components/PollVoteCard";

type PollVotePageProps = {
  pollId: string;
};

export function PollVotePage({ pollId }: PollVotePageProps) {
  return (
    <main className="py-20 min-h-screen section">
      <PollVoteHeader />
      <LayoutWithBackButton>
        <PollVoteCard pollId={pollId} />
      </LayoutWithBackButton>
    </main>
  );
}
