import { pollFetcher } from "./pollFetcher.services";
import type { PollsQueryType } from "./pollFetcher.services.types";

export async function fetchPolls({
  page,
  limit = 15,
}: PollsQueryType["variables"]) {
  const nextFetch = pollFetcher("polls", { page, limit });

  await nextFetch.fetch();
  return nextFetch.data?.polls;
}

export async function fetchPollVote(pollId: string) {
  const nextFetch = pollFetcher("poll-vote", { pollId });

  await nextFetch.fetch();
  return nextFetch.data?.poll;
}

export async function fetchPollResults(pollId: string) {
  const nextFetch = pollFetcher("poll-results", { pollId });

  await nextFetch.fetch();
  return nextFetch.data?.poll;
}
