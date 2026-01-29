import { type FetchQueryProps, fetchQuery } from "@/lib/fetchData";
export function nextQueryFetch<T>(payload: FetchQueryProps) {
  const fetcher = fetchQuery<T>(payload);

  async function fetch() {
    await fetcher.fetch();
  }

  return {
    fetch,
    isError() {
      return fetcher.isError();
    },
    get error(): string {
      return fetcher.error;
    },
    get data() {
      return fetcher.data;
    },
    get status() {
      return fetcher.status;
    },
  };
}
