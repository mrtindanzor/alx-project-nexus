import {
  ArrowBackButton,
  type ArrowBackButtonProps,
} from "@/shared/features/RouteChange";
import { cn } from "@/shared/utils/cn";

export function LayoutWithBackButton({
  children,
  className,
  variant = "none",
  hover = "ghost-light",
  ...props
}: ArrowBackButtonProps) {
  return (
    <>
      <ArrowBackButton
        {...props}
        hover={hover}
        variant={variant}
        className={cn("my-2 flex-place-center gap-x-2", className)}
      />
      {children}
    </>
  );
}
