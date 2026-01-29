/** biome-ignore-all lint/style/noNonNullAssertion: assert data is not null by runing our own checks */

import type { AxiosResponse } from "axios";
import type { ZodType } from "zod";
import { fe } from "@/shared/utils/fe";
import {
  type fetchResponseNoData,
  responseUtil,
} from "@/shared/utils/response";
import { tryCatch } from "@/shared/utils/tryCatch";
import { zodErrorFilter } from "@/shared/utils/zodErrorFilter";
import { axiosInstance } from "./axios";
import type {
  ErrorCode,
  FetchDataProps,
  FetchStatus,
  GetAxoisInstanceProps,
  ServerResponse,
  SuccessCode,
} from "./fetchData.types";

export async function fetchData<T>(payload: FetchDataProps) {
  const localPayload = payload;

  let status: FetchStatus = "idle";
  let data: T | null = null;
  let error: string | null = null;
  let message: string | null = null;

  let statusCode: ErrorCode | SuccessCode | null = null;

  async function fetch<Schema extends ZodType>(
    validator?: Schema,
    axiosConfig: GetAxoisInstanceProps = {},
  ) {
    if (status !== "idle") return;

    if (validator) {
      const [data, validatorErr] = zodErrorFilter(
        validator,
        localPayload.payload,
      );

      if (error || !data) {
        error = validatorErr || "Form validation failed";
        status = "error";
        statusCode = 400;
        return;
      }

      if (data) localPayload.payload = data;
    }

    const { uri, method = "post", payload } = localPayload;
    status = "loading";

    const axios = axiosInstance(axiosConfig);

    let promise: Promise<AxiosResponse<ServerResponse<T>, unknown>>;

    switch (method) {
      case "delete":
      case "get": {
        promise = axios[method]<ServerResponse<T>>(uri, {
          withCredentials: true,
        });
        break;
      }
      default:
        promise = axios[method]<ServerResponse<T>>(uri, payload, {
          withCredentials: true,
        });
    }

    const [res, fetchErr] = await tryCatch(promise);

    status = "error";
    statusCode = 400;

    if (!res || fetchErr) {
      error = fe(fetchErr ?? "Something went wrong, failed to fetch data.");
      return;
    }

    if (![200, 201].includes(res.data.status)) {
      error = fe(res.data.message);
      return;
    }

    const { message: resMessage, status: _s, ...rest } = res.data;

    statusCode = res.data.status;
    status = "success";
    message = resMessage;

    data = rest as T;
  }

  return {
    fetch,
    isError() {
      return status === "error";
    },
    isSuccess() {
      return status === "success";
    },
    get message(): string {
      if (!message) throw Error("No success message exists");

      return message;
    },
    get error(): string {
      if (!error) throw Error("No error exists");
      return error;
    },
    get data(): T {
      if (!data) throw Error("Data not available, call fetch first");

      return data;
    },
    get dataWithStatus() {
      if (data) return responseUtil(message!, "success", data!);

      return responseUtil(error!, "error");
    },
    get fetchStatus(): fetchResponseNoData {
      if (data) return responseUtil(message!, "success");

      return responseUtil(error!, "error");
    },
    statusCode,
  };
}
