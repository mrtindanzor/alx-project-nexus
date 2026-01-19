import { ComponentProps } from "react";
import { APP_NAME } from "../contants";

export function Logo({ className, ...props }: ComponentProps<"span">) {
  return <span className="block py-2 px-2 font-bold text-3xl">{APP_NAME}</span>;
}
