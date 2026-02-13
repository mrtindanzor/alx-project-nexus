import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { fetchPollVote, POLL_KEY } from "@/domain/poll";
import { PollVotePage } from "@/features/poll-vote";
import { tryCatch } from "@/shared/utils/tryCatch";

export const runtime = "edge";

type VotePageProps = {
  params: Promise<{ pollId: string }>;
};

const fetchPoll = cache(async (pollId: string) => {
  const [poll] = await tryCatch(fetchPollVote(pollId));
  return poll;
});

export async function generateMetadata({
  params,
}: VotePageProps): Promise<Metadata> {
  const { pollId } = await params;
  const poll = await fetchPoll(pollId);

  if (!poll) return { title: "Consensus - PollMaker" };

  return {
    title: `Consensus - ${poll.title}`,
  };
}

const qc = new QueryClient();

export default async function Page({ params }: VotePageProps) {
  const { pollId } = await params;
  const poll = await fetchPoll(pollId);

  if (!poll) return notFound();

  qc.setQueryData([...POLL_KEY, pollId], poll);

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <PollVotePage pollId={pollId} />
    </HydrationBoundary>
  );
}
