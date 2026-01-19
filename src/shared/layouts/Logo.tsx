import type { ComponentProps } from "react";
import { APP_NAME } from "../contants";
import { cn } from "../utils/cn";

export function Logo({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      {...props}
      className={cn("block py-2 px-2 font-bold text-3xl", className)}
    >
      {APP_NAME}
    </span>
  );
}
