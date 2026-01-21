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
        "md:grid md:h-fit md:gap-y-3 md:py-6 md:px-4 md:border-3 md:rounded-xl md:bg-neutral md:border-muted-2/70",

        className,
      )}
    >
      <h2 className="whitespace-nowrap font-bold hidden md:block tracking-tight">
        {title}
      </h2>
      <div className="hidden md:block mt-2">{children}</div>

      <Button
        variant="light"
        hover="sky"
        className="whitespace-nowrap tracking-tight outline-muted-2 md:hidden gap-x-2 text-[clamp(0.75rem,calc(0.1rem+5vw),1rem)]"
        onClick={open}
        pad="lg"
        y="center"
        rad="lg"
      >
        {title} <ChevronDown className="size-4" />
      </Button>

      <Modal active={showSm} close={close} largeScreenDirection="bottom">
        <div className="p-2">{children}</div>
      </Modal>
    </div>
  );
}
