export type responseUtilType<
  T = unknown,
  Success extends "success" | "error" = "success",
> = Success extends "success"
  ? SuccessType & { data: T | null | undefined }
  : ErrorType;

type ErrorType = {
  message: string;
  success: false;
  error: true;
};

type SuccessType = {
  message: string;
  success: true;
  error: false;
};

export type dataFetchResponse<T> =
  | (SuccessType & { data: T | null | undefined })
  | ErrorType;

export type fetchResponseNoData = SuccessType | ErrorType;
