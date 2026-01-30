import { AlertCircle } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/shared/utils/cn";

export type ErrorCardProps = {
  message?: string;
  success?: boolean;
  error?: boolean;
} & ComponentProps<"div">;

export function ErrorCard({
  message,
  className,
  success,
  error,
  ...props
}: ErrorCardProps) {
  return (
    <div
      {...props}
      className={cn(
        success ? "bg-success/20" : error ? "bg-danger/80" : "",
        "grid text-white grid-cols-[auto_1fr] text-left items-center py-2 px-2 mt-1 text-sm gap-2 rounded",
        !message && "hidden",
        className,
      )}
    >
      <AlertCircle className="size-4" />
      <p className="text-xs font-chakra p-0!" role="alert">
        {message}
      </p>
    </div>
  );
}
