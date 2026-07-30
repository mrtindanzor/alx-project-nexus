import { QueryClient } from "@tanstack/react-query";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pollQuery } from "@/features/poll";
import { PollResultPage } from "@/screens/result";
import { HydrationProvider } from "@/shared/ui/primitive/HydationProvider";

export const runtime = "edge";

type VotePageProps = {
  params: Promise<{ pollId: string }>;
};

export async function generateMetadata({
  params,
}: VotePageProps): Promise<Metadata> {
  const { pollId } = await params;
  const qc = new QueryClient();
  const query = pollQuery(pollId);

  const poll = await qc.fetchQuery(query);

  return {
    title: `Consensus - ${poll.title}`,
  };
}

export default async function Page({ params }: VotePageProps) {
  const { pollId } = await params;
  const qc = new QueryClient();
  const query = pollQuery(pollId);

  const poll = await qc.fetchQuery(query);

  if (!poll) return notFound();

  return (
    <HydrationProvider queries={[{ queryKey: query.queryKey, data: poll }]}>
      <PollResultPage pollId={pollId} />
    </HydrationProvider>
  );
}
