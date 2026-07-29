import { fe } from "@/shared/utils/fe";
import { tryCatch } from "@/shared/utils/tryCatch";
import { axiosInstance } from "./axios";
import type {
  FetchQueryProps,
  FetchStatus,
  GetAxoisInstanceProps,
} from "./fetchData.types";

export function fetchQuery<T>(payload: FetchQueryProps) {
  const localPayload = payload;
  let status: FetchStatus = "idle";

  let error: string | null = null;
  let data: T | null = null;

  async function fetch(axiosConfig: GetAxoisInstanceProps = {}) {
    if (status !== "idle") return;

    status = "loading";

    const axios = axiosInstance(axiosConfig);

    const [res, resErr] = await tryCatch(
      axios.post<{ data: T }>("/query", localPayload),
    );

    if (resErr || !res) {
      status = "error";
      error = fe(resErr || "Failed to fetch data");
      return;
    }

    status = "success";
    data = res.data.data;
  }

  return {
    fetch,
    isError() {
      return status === "error";
    },

    get error(): string {
      if (!error) throw Error("No error message");
      return error;
    },

    get data(): T {
      if (!data) throw Error(error || "No data fetched");

      return data;
    },

    get status() {
      return status;
    },
  };
}
