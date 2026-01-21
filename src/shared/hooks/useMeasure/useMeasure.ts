"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { UseMeasure } from "./useMeasure.types";

export function useMeasure<T>({
  element,
  selector,
  enabled = true,
}: UseMeasure<T>) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const node = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!enabled || (!element && !selector)) return;

    let el: HTMLElement | null = null;

    if (element?.current && element?.current instanceof HTMLElement)
      el = element.current;

    if (!el && selector) el = document.querySelector(selector);
    if (!el) return;

    const { offsetLeft, clientHeight, clientWidth, offsetTop } = el;
    node.current = el;

    setHeight(clientHeight);
    setWidth(clientWidth);
    setTop(offsetTop);
    setLeft(offsetLeft);
  }, [enabled, element, selector]);

  return {
    height,
    width,
    offsetTop: top,
    offsetLeft: left,
    node,
  };
}
