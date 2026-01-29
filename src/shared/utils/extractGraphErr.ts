import { AxiosError } from "axios";

export function extractGraphErr(error: unknown) {
  if (error instanceof AxiosError) {
    const err = error.response?.data?.errors?.[0]?.message as
      | string
      | undefined;
    if (err) return err;
  }
  if (
    error instanceof Error &&
    "errors" in error &&
    Array.isArray(error.errors)
  ) {
    const err = error?.errors?.[0]?.message as string | undefined;
    if (err) return err;
  }
}
