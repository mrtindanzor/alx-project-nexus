import { AxiosError } from "axios";
import { extractGraphErr } from "./extractGraphErr";

export const fe = (error: unknown) => {
  if (typeof error === "string") return error;

  if (error instanceof AxiosError) {
    return (
      extractGraphErr(error) ||
      (error.response?.data?.message as string) ||
      error?.message
    );
  }

  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;

  return "Something went wrong";
};
