import { cva } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";
import type { InputProps } from "./types";

export const inputVariants = cva("py-2 px-4 rounded-xl", {
  variants: {
    variant: {
      primary: "bg-primary text-neutral",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export function Input({ className, variant, ...props }: InputProps) {
  return (
    <input {...props} className={cn(inputVariants({ className, variant }))} />
  );
}
