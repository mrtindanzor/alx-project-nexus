import type { MotionProps, TargetAndTransition } from "framer-motion";
import type { ComponentProps } from "react";

export type FramerOptionsProps = {
  hidden?: TargetAndTransition;
  show?: TargetAndTransition;
  exit?: TargetAndTransition;
};

export type FramerAnimatePositionProps = {
  children: React.ReactNode;
  variants?: FramerOptionsProps;
  autoNone?: boolean;
} & Omit<ComponentProps<"div">, "style"> &
  Omit<MotionProps, "variants">;
