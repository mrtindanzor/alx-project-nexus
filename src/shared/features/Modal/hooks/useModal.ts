"use client";

import {
  useAnimate,
  useAnimation,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import { useMeasure } from "lpm/hooks/useMeasure";
import {
  useCallback,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useMatchesWidth } from "@/shared/hooks/useDeviceWidth";
import { ModalContext } from "../components/client/ModalProvider";
import {
  baseIndex,
  getDragAnimation,
  getEnterAnimation,
  getVariant,
  OFFSET_MARGIN,
} from "../constants";
import type { UseModalCoreProps, UseModalProps } from "../modal.types";

export function useModal({
  largeScreenDirection = "left",
  mobileDirection = "bottom",
  variant: submittedVariant = "dynamic",
  active,
  threshold,
  close,
}: UseModalProps) {
  const isLgDevice = useMatchesWidth({ size: "sm", comparison: ">" });

  const direction = isLgDevice ? largeScreenDirection : mobileDirection;
  const [variant, setVariant] = useState(
    getVariant(isLgDevice, submittedVariant),
  );

  const [scope, animate] = useAnimate<HTMLDivElement>();
  const controls = useDragControls();
  const modalControls = useAnimation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const genId = useId();
  const backdropId = `id${genId}id`;
  const modalId = `modal${genId}id`;

  const {
    height: backdropHeight,
    width: backdropWidth,
    node: backdropRef,
  } = useMeasure({ selector: `#${backdropId}`, enabled: active });

  const handleClose = useCallback(
    async (request = false) => {
      const isInline = direction === "left" || direction === "right";
      const negate = direction === "left" || direction === "top";

      const axisValue = isInline ? x.get() : y.get();

      const requested = request || typeof axisValue === "string";

      const start = requested ? 0 : axisValue;

      const hideThreshold = negate
        ? -(threshold ?? OFFSET_MARGIN)
        : (threshold ?? OFFSET_MARGIN);

      if (
        !requested &&
        variant === "thumb" &&
        (negate ? start > hideThreshold : start < hideThreshold)
      )
        return;

      if (!backdropRef.current) return;

      animate(backdropRef.current, { opacity: [1, 0] });

      await animate(
        scope.current,
        getDragAnimation({
          direction,
          start,
          height: backdropHeight,
          width: backdropWidth,
        }),
      );
      close();
    },
    [
      x,
      y,
      animate,
      backdropHeight,
      backdropWidth,
      backdropRef,
      scope,
      direction,
      variant,
      threshold,
      close,
    ],
  );

  useLayoutEffect(() => {
    setVariant(getVariant(isLgDevice, submittedVariant));
  }, [isLgDevice, submittedVariant]);

  useEffect(() => {
    if (!active) return;

    const variants = getEnterAnimation({
      direction,
      height: backdropHeight,
      width: backdropWidth,
    });

    modalControls.start(variants.show);
  }, [active, direction, modalControls, backdropWidth, backdropHeight]);

  useLayoutEffect(() => {
    const variants = getEnterAnimation({
      direction,
      height: backdropHeight,
      width: backdropWidth,
    });
    modalControls.set(variants.hidden);
    modalControls.set(variants.hidden);

    return () => {
      x.set(0);
      y.set(0);
    };
  }, [direction, modalControls, backdropHeight, backdropWidth, x, y]);

  return {
    modalId,
    backdropId,
    handleClose,
    controls,
    variant,
    direction,
    modalControls,
    scope,
    x,
    y,
  };
}

export function useModalCore({ close }: UseModalCoreProps) {
  const { modalRef, totalOpenedModals, setTotalOpenedModals } = useModalCtx();
  const zRef = useRef(0);

  const zIndex = zRef.current;
  const isFirst = zIndex === baseIndex;
  const isTopMost = zIndex === totalOpenedModals * baseIndex;

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      e.stopPropagation();
      if (!isTopMost) return;

      const exit = e.key === "Escape";
      if (exit) close();
    },
    [isTopMost, close],
  );

  useEffect(() => {
    setTotalOpenedModals((total) => {
      const newTotal = total + 1;

      zRef.current = newTotal * baseIndex;

      return newTotal;
    });

    return () => {
      setTotalOpenedModals((total) => Math.max(0, total - 1));
      zRef.current = zRef.current - baseIndex;
    };
  }, [setTotalOpenedModals]);

  useEffect(() => {
    if (!isTopMost) return;
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [handleEscape, isTopMost]);

  return { handleEscape, isFirst, modalRef, isTopMost, zIndex };
}

export function useInert() {
  const { totalOpenedModals } = useModalCtx();

  useEffect(() => {
    if (totalOpenedModals > 0)
      document.documentElement.classList.add("overflow-y-hidden");
    else document.documentElement.classList.remove("overflow-y-hidden");

    return () => {
      document.documentElement.classList.remove("overflow-y-hidden");
    };
  }, [totalOpenedModals]);

  return { totalOpenedModals };
}

export function useModalProvider() {
  const modalRef = useRef<HTMLDivElement>(null);
  const [totalOpenedModals, setTotalOpenedModals] = useState(0);

  return {
    modalRef,
    totalOpenedModals,
    setTotalOpenedModals,
  };
}

export function useModalCtx() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw Error("Modal context must be used in Modal context");

  return ctx;
}
