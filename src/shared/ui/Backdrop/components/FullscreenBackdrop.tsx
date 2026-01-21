import { FramerAnimatePosition } from "lpm/features/Framer";
import { cn } from "lpm/utils/cn";
import type { FullScreenBackropProps } from "../backdrop.types";

export function FullscreenBackdrop({
  className,
  children,
  close,
  backdropClassName,
  ...props
}: FullScreenBackropProps) {
  return (
    <FramerAnimatePosition
      {...props}
      animate="show"
      variants={{
        hidden: { x: 0, y: 0 },
        show: { opacity: 1 },
      }}
      className={cn(
        "fixed! inset-0 *:not-first:z-2 flex-place-center",
        className,
      )}
    >
      <div
        aria-hidden
        onClick={close}
        title="Click to close modal"
        className={cn(
          "absolute bg-muted/50 z-0  cursor-pointer inset-0",
          backdropClassName,
        )}
      />
      {children}
    </FramerAnimatePosition>
  );
}
