import Link from "next/link";
import { ButtonVariants } from "./Button";
import type { StyledLinkProps } from "./button.types";

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
      className={ButtonVariants({
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
      })}
    />
  );
}
