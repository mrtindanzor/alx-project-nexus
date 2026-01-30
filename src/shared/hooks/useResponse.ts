"use client";

import {
  type FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { fe } from "@/shared/utils/fe";
import { tryCatch } from "@/shared/utils/tryCatch";

export type UpdateProps = {
  message: unknown;
  error?: boolean;
  success?: boolean;
};

export type UseResponseProps<T> = {
  data?: T;
  callSubmitted?: boolean;
};

export function useResponse<T>({
  data,
  callSubmitted = true,
}: UseResponseProps<T> = {}) {
  const formDataRef = useRef(data);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const containerRef = useRef<HTMLElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [progressMsg, setProgressMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const setResponse = useCallback(
    ({ message, error = false, success = false }: UpdateProps) => {
      setMessage(fe(message));
      setError(error);
      setSuccess(success);
      setProgressMsg("");

      const ctn = containerRef.current;
      console.log({ ctn });
      if (!(ctn instanceof HTMLElement)) return;

      requestAnimationFrame(() => {
        ctn.classList.add("scroll-mt-50");
        ctn.scrollIntoView({ behavior: "smooth" });
      });
      setSubmitting(false);
    },
    [],
  );

  const msgCtnRef = useCallback(<Ref>(ref: Ref) => {
    if (ref instanceof HTMLElement) containerRef.current = ref;
  }, []);

  const clsResponse = useCallback(() => {
    setError(false);
    setSuccess(false);
    setMessage("");
    setProgressMsg("");
  }, []);

  const schClear = useCallback(
    (delayInSecs = 7) => {
      const timeoutId = timeoutRef.current;
      if (timeoutId) clearTimeout(timeoutId);

      timeoutRef.current = setTimeout(clsResponse, delayInSecs * 1000);
    },
    [clsResponse],
  );

  const handleSubmit = useCallback(
    (callback: (data: T) => Promise<void>) => {
      return async (e: FormEvent) => {
        e.preventDefault();

        if (!formDataRef.current) return;

        clsResponse();
        setSubmitting(true);

        await tryCatch(callback(formDataRef.current));

        if (callSubmitted) setSubmitting(false);
        schClear();
      };
    },
    [clsResponse, callSubmitted, schClear],
  );

  useEffect(() => {
    return () => {
      const timeoutId = timeoutRef.current;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    formDataRef.current = data;
  }, [data]);

  return {
    setResponse,
    msgCtnRef,
    handleSubmit,
    setProgressMsg,
    setSubmitting,
    formState: {
      progressMsg,
      message,
      success,
      error,
      submitting,
    },
    clear: {
      schClear,
      clsResponse,
    },
  };
}
