import { LayoutWithBackButton } from "@/shared/layouts/components/server/LayoutWithBackButton";
import { PollCard } from "@/shared/ui/PollCard";
import { PollVoteCard } from "../components/PollVoteCard";

type PollVotePageProps = {
  pollId: string;
};

export function PollVotePage({ pollId }: PollVotePageProps) {
  return (
    <main className="pt-20 h-screen section">
      <LayoutWithBackButton>
        <PollVoteCard pollId={pollId} />
      </LayoutWithBackButton>
    </main>
  );
}
PollCard;
