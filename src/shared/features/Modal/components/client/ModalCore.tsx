"use client";

import { cn } from "lpm/utils/cn";
import { createPortal } from "react-dom";
import { FullscreenBackdrop } from "@/shared/ui/Backdrop";
import { useModalCore } from "../../hooks/useModal";
import type { ModalProps } from "../../modal.types";

export function ModalCore({
  children,
  close,
  id,
  backdropClassName,
}: ModalProps) {
  const { modalRef, isFirst, isTopMost, zIndex } = useModalCore({ close });

  if (!modalRef.current) return null;

  return createPortal(
    <FullscreenBackdrop
      close={close}
      inert={!isTopMost}
      backdropClassName={cn(!isFirst && "bg-primary/50", backdropClassName)}
      style={{ zIndex }}
      id={id}
    >
      {children}
    </FullscreenBackdrop>,
    modalRef.current,
  );
}
