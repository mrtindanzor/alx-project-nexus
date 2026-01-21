"use client";

import { FramerAnimatePosition } from "lpm/features/Framer";
import { CloseButton, Pill } from "lpm/ui/Buttons";
import { cn } from "lpm/utils/cn";
import { modalPosition, thumbPositions } from "../../constants";
import { useModal } from "../../hooks/useModal";
import type { ModalThumbProps, ModalWrapperProps } from "../../modal.types";
import { ModalCore } from "./ModalCore";

export function Modal({
  active,
  close,
  children,
  className,
  variants,
  header,
  footer,
  backdropClassName,
  headerClassName,
  footerClassName,
  variant: submittedVariant = "dynamic",
  childrenClassName,
  threshold,
  buttonProps,
  style,
  mobileDirection = "bottom",
  largeScreenDirection = "right",
  ...props
}: ModalWrapperProps) {
  const {
    backdropId,
    modalId,
    handleClose,
    variant,
    direction,
    controls,
    modalControls,
    scope,
    x,
    y,
  } = useModal({
    largeScreenDirection,
    mobileDirection,
    variant: submittedVariant,
    active,
    threshold,
    close,
  });

  return (
    <>
      {active && (
        <ModalCore
          id={backdropId}
          backdropClassName={backdropClassName}
          close={() => handleClose(true)}
        >
          <FramerAnimatePosition
            {...props}
            autoNone
            className={cn(
              "bg-muted grid grid-rows-[auto_1fr_auto] space-y-4 outline sm:outline outline-accent h-[90vh] max-h-[90vh] max-w-7xl rounded-t-2xl w-full absolute px-2 sm:px-4 md:px-6 pb-2 overflow-hidden",
              variant === "thumb" && "pt-8",
              modalPosition(direction, variant === "thumb"),
              className,
            )}
            id={modalId}
            animate={modalControls}
            drag={direction === "left" || direction === "right" ? "x" : "y"}
            dragControls={controls}
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            dragElastic={{
              top: direction === "top" ? 1 : 0,
              bottom: direction === "bottom" ? 1 : 0,
              left: direction === "left" ? 1 : 0,
              right: direction === "right" ? 1 : 0,
            }}
            ref={scope}
            dragListener={variant === "thumb"}
            onDragEnd={() => variant === "thumb" && handleClose()}
            style={{ ...style, y, x }}
          >
            {variant === "thumb" && (
              <Thumb direction={direction} controls={controls} />
            )}
            <div className={cn("row-start-1", headerClassName)}>
              {variant === "button" && (
                <CloseButton
                  {...buttonProps}
                  className={cn("ml-auto my-2", buttonProps?.className)}
                  close={() => handleClose(true)}
                />
              )}
              {header}
            </div>
            <div
              className={cn(
                "row-start-2 overflow-y-auto h-fit max-h-full py-4",
                childrenClassName,
              )}
            >
              {children}
            </div>
            {footer && (
              <div className={cn("row-start-3", footerClassName)}>{footer}</div>
            )}
          </FramerAnimatePosition>
        </ModalCore>
      )}
    </>
  );
}

function Thumb({ controls, direction }: ModalThumbProps) {
  return (
    <div
      className={cn(
        "h-7 group absolute flex pt-3 z-10 items-center pb-6 w-full cursor-grab! active:cursor-grabbing",
        thumbPositions[direction],
      )}
      onPointerDown={(e) => controls.start(e)}
    >
      <Pill
        hover="light"
        variant="light"
        className="h-2 opacity-30 group-hover:opacity-100 w-[clamp(4rem,calc(20vw+0.1rem),8rem)] mx-auto"
      ></Pill>
    </div>
  );
}
