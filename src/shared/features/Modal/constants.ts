import { motionVariants } from "lpm/features/Framer";
import type {
  GetAnimationProps,
  ModalInitialDirection,
  ModalVariantsTypes,
} from "./modal.types";

export const OFFSET_MARGIN = 100;

export const getVariant = (
  isLgDevice: boolean,
  variant: ModalVariantsTypes,
): "button" | "thumb" => {
  if (variant === "dynamic") return !isLgDevice ? "thumb" : "button";
  return variant;
};

const showTransition = {
  transition: {
    type: "spring" as const,
    ease: "easeOut" as const,
    stiffness: 130,
    duration: 0.1,
    damping: 24,
  },
};

export const getEnterAnimation = ({
  direction,
  height,
  width,
}: Omit<GetAnimationProps, "start">) => {
  const get = (x: number, y: number, negate = false) =>
    motionVariants({
      hidden: {
        y: negate ? -y : y,
        x: negate ? -x : x,
        opacity: 0,
        visibility: "hideen",
      },
      show: { ...showTransition, visibility: "visibility" },
    });

  switch (direction) {
    case "bottom":
    case "top":
      return get(0, height, direction === "top");

    case "left":
    case "right":
      return get(width, 0, direction === "left");
  }
};

export const getDragAnimation = ({
  direction,
  height,
  start,
  width,
}: GetAnimationProps) => {
  switch (direction) {
    case "bottom":
      return { y: [start, height] };
    case "top":
      return { y: [start, -height] };
    case "left":
      return { x: [start, -width] };
    case "right":
      return { x: [start, width] };
  }
};

export const modalPosition = (
  direction: ModalInitialDirection,
  isThumb: boolean,
) =>
  ({
    right: `right-0! inset-y-0 ${isThumb ? "pl-6!" : ""}`,
    left: `left-0! inset-y-0 ${isThumb ? "pr-8!" : ""}`,
    top: `pb-8! top-0 inset-x-0 ${isThumb ? "pb-8!" : ""}`,
    bottom: "inset-x-0 bottom-0",
  })[direction];

export const thumbPositions = {
  right: "top-1/2 rotate-90 -translate-y-1/2 translate-x-1 -left-1/2",
  left: "top-1/2 rotate-90 -translate-y-1/2 -translate-x-4 -right-1/2",
  top: "left-1/2 -translate-x-1/2 -bottom-4",
  bottom: "left-1/2 -translate-x-1/2 top-2",
};

export const baseIndex = 3000;
