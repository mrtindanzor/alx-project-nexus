import { cn } from "@/shared/utils/cn";
import type { CardWrapperProps } from "../../filters.types";

export function CardWrapper({
  className,
  title,
  children,
  ...props
}: CardWrapperProps) {
  return (
    <div
      {...props}
      className={cn(
        "border grid h-fit gap-y-3 py-4 px-4 border-accent/20 rounded-xl bg-primary/60 text-neutral",
        className,
      )}
    >
      <h2 className="text-xl uppercase">{title}</h2>
      {children}
    </div>
  );
}
