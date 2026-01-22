import Link, { type LinkProps } from "next/link";
import type { ComponentProps } from "react";
import { APP_NAME } from "../../../contants/app";
import { cn } from "../../../utils/cn";

export function Logo({
  className,
  ...props
}: Omit<LinkProps, "href"> & ComponentProps<"a">) {
  return (
    <Link
      {...props}
      href="/"
      className={cn(
        "block py-2 px-2 font-bold text-accent text-[clamp(1rem,calc(0.1rem+5vw),2.2rem)]",
        className,
      )}
    >
      {APP_NAME}
    </Link>
  );
}
