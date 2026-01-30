import type { PaginatedPollProps, PollProps } from "./polls.contract.types";
import type { pollQueries } from "./polls.queries.api";

export type PollFetcherKeys = keyof ReturnType<typeof pollQueries>;

export type PollServices = {
  "poll-vote": PollVoteQueryType;
  "poll-results": PollResultsQueryType;
  polls: PollsQueryType;
};

export type PollVoteQueryType = {
  data: {
    poll: Pick<PollProps, "createdAt" | "title"> & {
      options: Omit<PollProps["options"][number], "total">[];
    };
  };
  variables: { pollId: string };
};

export type PollResultsQueryType = {
  data: { poll: PollProps };
  variables: { pollId: string };
};

export type PollsQueryType = {
  data: { polls: PaginatedPollProps };
  variables: { page: number; limit?: number };
};
