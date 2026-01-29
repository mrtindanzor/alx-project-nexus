"use client";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

type UseIntersectionProps = {
  threshold?: number;
  rootMargin?: string;
  unobserve?: boolean;
};

export default function useIntersection({
  threshold = 0.5,
  rootMargin = "0px",
  unobserve,
}: UseIntersectionProps = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const captureRef = useCallback(<T>(element: T) => {
    if (element instanceof HTMLElement) ref.current = element;
  }, []);

  useLayoutEffect(() => {
    const currentRef = ref.current;
    if (!currentRef || !(currentRef instanceof HTMLElement)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && unobserve) observer.unobserve(entry.target);
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, [threshold, rootMargin, unobserve]);

  return {
    isIntersecting,
    ref: captureRef,
  };
}
