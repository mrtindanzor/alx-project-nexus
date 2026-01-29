import type { pollQueries } from "./api.queries.polls";
import type { PaginatedPollProps, PollProps } from "./poll.contract.types";

export type PollFetcherKeys = keyof ReturnType<typeof pollQueries>;

export type PollServices = {
  poll: PollQueryType;
  polls: PollsQueryType;
};

export type PollQueryType = {
  data: { poll: PollProps };
  variables: { pollId: string };
};

export type PollsQueryType = {
  data: { polls: PaginatedPollProps };
  variables: { page: number; limit?: number };
};
