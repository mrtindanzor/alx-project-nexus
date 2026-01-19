import type { PillProps } from "lpm/types/ui/button";
import { cn } from "lpm/utils/cn";
import { ButtonVariants } from "./Button";

export default function Pill({
  className,
  variant,
  pad,
  hover,
  rad,
  x,
  y,
  w,
  hoverEffect,
  effectTiming,
  ...props
}: PillProps) {
  return (
    <span
      {...props}
      className={cn(
        ButtonVariants({
          className: `z-1 ${className}`,
          variant,
          hover,
          hoverEffect,
          effectTiming,
          pad,
          rad,
          x,
          w,
          y,
        }),
      )}
    />
  );
}
