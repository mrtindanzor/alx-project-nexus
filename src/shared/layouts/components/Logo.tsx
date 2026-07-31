import { Link, type LinkProps } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { APP_NAME } from "@/shared/contants/app";
import { routes } from "@/shared/routes/routes";
import { cn } from "@/shared/utils/cn";

export function Logo({
  className,
  ...props
}: Omit<LinkProps, "href"> & ComponentProps<"a">) {
  return (
    <Link
      {...props}
      href={routes.home}
      className={cn(
        "block py-2 px-2 font-bold text-accent text-[clamp(1rem,calc(0.1rem+5vw),2rem)]",
        className,
      )}
    >
      {APP_NAME}
    </Link>
  );
}
