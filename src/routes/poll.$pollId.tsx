import { createFileRoute, notFound } from "@tanstack/react-router";
import { pollQuery } from "@/features/poll";
import { generateMetaData } from "@/lib/tanstack";
import { PollNotFound } from "@/screens/NotFound";
import { PollResultPage } from "@/screens/result";
import { HydrationProvider } from "@/shared/ui/primitive/HydationProvider";

export const Route = createFileRoute("/poll/$pollId")({
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
      title: poll?.title ?? "Poll not found",
      description:
        poll?.title ?? "This  poll has been closed or could not be found.",
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
      <PollResultPage pollId={pollId} />
    </HydrationProvider>
  );
}
