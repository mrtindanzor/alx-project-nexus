import { nextQueryFetch } from "@/infra/nextFetch";
import type {
  PollFetcherKeys,
  PollServices,
} from "./pollFetcher.services.types";
import { pollQueries } from "./polls.queries.api";

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
