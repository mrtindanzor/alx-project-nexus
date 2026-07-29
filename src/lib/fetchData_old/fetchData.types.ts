import type { AxiosRequestConfig } from "axios";

export type FetchStatus = "idle" | "loading" | "success" | "error";

export type FetchDataProps<Payload = object | undefined> = {
  payload?: Payload;
  uri: string;
  method?: "post" | "put" | "delete" | "patch" | "get";
};

export type FetchQueryProps = {
  query: string;
  variables?: object;
};

export type GetAxoisInstanceProps = {
  headers?: AxiosRequestConfig["headers"];
};

export type ServerResponse<T> = T & {
  rateExceeded?: boolean;
  message: string;
  status: ErrorCode | SuccessCode;
};

export type ErrorCode = 500 | 400 | 403 | 404;

export type SuccessCode = 200 | 201;
