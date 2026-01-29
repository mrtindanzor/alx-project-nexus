import { pollFetcher } from "./services.pollFetcher";
import type { PollsQueryType } from "./services.pollFetcher.types";

export async function fetchPolls({
  page,
  limit = 15,
}: PollsQueryType["variables"]) {
  const nextFetch = pollFetcher("polls", { page, limit });

  await nextFetch.fetch();
  return nextFetch.data?.polls;
}

export async function fetchPoll(pollId: string) {
  const nextFetch = pollFetcher("poll", { pollId });

  await nextFetch.fetch();
  return nextFetch.data?.poll;
}
