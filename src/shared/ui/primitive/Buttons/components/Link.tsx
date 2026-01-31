import Link from "next/link";
import { cn } from "@/shared/utils/cn";
import type { StyledLinkProps } from "../button.types";
import { ButtonVariants } from "./Button";

export function StyledLink({
  variant,
  className,
  hover,
  hoverEffect,
  effectTiming,
  pad,
  rad,
  x,
  y,
  w,
  ...props
}: StyledLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        ButtonVariants({
          variant,
          className,
          hover,
          hoverEffect,
          effectTiming,
          pad,
          rad,
          x,
          y,
          w,
        }),
      )}
    />
  );
}
