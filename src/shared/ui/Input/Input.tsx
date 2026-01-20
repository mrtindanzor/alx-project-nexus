import { cva } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";
import type { InputProps, TextAreaProps } from "./types";

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

export function Textarea({ className, variant, ...props }: TextAreaProps) {
  return (
    <textarea
      {...props}
      className={cn(
        inputVariants({
          className: `resize-none min-h-25 ${className}`,
          variant,
        }),
      )}
    />
  );
}
