import type { ZodType } from "zod";
import { type FetchDataProps, fetchData } from "@/lib/fetchData";

export async function nextDataFetch<T>(payload: FetchDataProps) {
  const fetcher = await fetchData<T>(payload);

  async function fetch<Schema extends ZodType>(validator?: Schema) {
    await fetcher.fetch(validator);
  }

  return {
    fetch,
    isError() {
      return fetcher.isError();
    },
    isSuccess() {
      return fetcher.isSuccess();
    },
    get message() {
      return fetcher.message;
    },
    get error() {
      return fetcher.error;
    },
    get data() {
      return fetcher.data;
    },
    get dataWithStatus() {
      return fetcher.dataWithStatus;
    },
    get fetchStatus() {
      return fetcher.fetchStatus;
    },
  };
}
