import { createFileRoute, notFound } from "@tanstack/react-router";
import { pollQuery } from "@/features/poll";
import { generateMetaData } from "@/lib/tanstack";
import { PollNotFound } from "@/screens/NotFound";
import { PollVotePage } from "@/screens/poll-vote";
import { HydrationProvider } from "@/shared/ui/primitive/HydationProvider";

export const Route = createFileRoute("/vote/$pollId")({
  component: RouteComponent,
  notFoundComponent: PollNotFound,
  loader: async ({ params: { pollId }, context }) => {
    const query = pollQuery(pollId);

    const poll = await context.queryClient.fetchQuery(query);

    if (!poll) throw notFound();

    return { poll };
  },
  head: ({ loaderData: { poll } = {}, params: { pollId } }) => ({
    meta: generateMetaData({
      title: `Consensus - ${poll?.title}`,
      description: `Your number 1 poll maker`,
      path: `vote/${pollId}`,
    }),
  }),
});

function RouteComponent() {
  const { pollId } = Route.useParams();
  const { poll } = Route.useLoaderData();
  const query = pollQuery(pollId);

  return (
    <HydrationProvider queries={[{ queryKey: query.queryKey, data: poll }]}>
      <PollVotePage pollId={pollId} />
    </HydrationProvider>
  );
}
