import { cva } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";
import type { InputProps, TextAreaProps } from "../types";

export const inputVariants = cva("py-2 px-4 rounded-xl", {
  variants: {
    variant: {
      muted: "bg-muted text-neutral",
      ghost: "bg-transparent text-primary",
      outline: "bg-muted outline-2 text-primary outline-muted-2",
      none: "",
    },
  },
  defaultVariants: {
    variant: "ghost",
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
