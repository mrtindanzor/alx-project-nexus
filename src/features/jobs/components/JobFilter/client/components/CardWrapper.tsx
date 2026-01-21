"use client";

import { ChevronDown } from "lucide-react";
import { Modal } from "@/shared/features/Modal";
import { Button } from "@/shared/ui/Buttons";
import { cn } from "@/shared/utils/cn";
import type { CardWrapperProps } from "../../filters.types";
import { useFilterCardHide } from "../hooks/useFilterCardHide";

export function CardWrapper({
  className,
  title,
  children,
  ...props
}: CardWrapperProps) {
  const { showSm, close, open } = useFilterCardHide();
  return (
    <div
      {...props}
      className={cn(
        "md:border grid h-fit gap-y-3 md:py-4 md:px-4 md:border-accent/20 rounded-xl md:bg-primary/60 text-neutral",

        className,
      )}
    >
      <h2 className="whitespace-nowrap hidden md:block">{title}</h2>
      <div className="hidden md:block">{children}</div>

      <Button
        variant="ghost-sky"
        hover="sky"
        className="whitespace-nowrap md:hidden gap-x-2"
        onClick={open}
        pad="lg"
        y="center"
        rad="lg"
      >
        {title} <ChevronDown className="size-6" />
      </Button>

      <Modal active={showSm} close={close} largeScreenDirection="bottom">
        <div className="p-2">{children}</div>
      </Modal>
    </div>
  );
}
