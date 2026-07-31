import { Link } from "@tanstack/react-router";
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
  href,
  ...props
}: StyledLinkProps) {
  return (
    <Link
      {...props}
      to={href as never}
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
