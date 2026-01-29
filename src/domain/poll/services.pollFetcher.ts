import { nextQueryFetch } from "@/infra/nextFetch";
import { pollQueries } from "./api.queries.polls";
import type {
  PollFetcherKeys,
  PollServices,
} from "./services.pollFetcher.types";

export function pollFetcher<T extends PollFetcherKeys>(
  queryKey: T,
  variables: PollServices[T]["variables"],
) {
  const query = pollQueries()[queryKey];
  const nextFetch = nextQueryFetch<PollServices[T]["data"]>({
    query,
    variables,
  });

  return nextFetch;
}
