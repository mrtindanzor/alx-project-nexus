import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function tryCatch<T, E = Error>(promise: Promise<T>) {
  try {
    return [await promise, null] as const;
  } catch (error) {
    if (isRedirectError(error)) throw error;
    return [null, error as E] as const;
  }
}

export function syncTryCatch<T, E = Error>(callback: () => T) {
  try {
    return [callback() as T, null] as const;
  } catch (error) {
    return [null, error as E] as const;
  }
}
