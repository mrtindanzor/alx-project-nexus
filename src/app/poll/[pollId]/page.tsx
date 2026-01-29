import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { fetchPoll, POLL_KEY } from "@/domain/poll";
import { PollVotePage } from "@/features/poll-vote";
import { tryCatch } from "@/shared/utils/tryCatch";

export const dynamicParams = true;

type VotePageProps = {
  params: Promise<{ pollId: string }>;
};

const qc = new QueryClient();

export default async function Page({ params }: VotePageProps) {
  const { pollId } = await params;
  const [poll] = await tryCatch(fetchPoll(pollId));

  if (!poll) return notFound();

  qc.setQueryData([...POLL_KEY, pollId], poll);

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <PollVotePage pollId={pollId} />
    </HydrationBoundary>
  );
}
