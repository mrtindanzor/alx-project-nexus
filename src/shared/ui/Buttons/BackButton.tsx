"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import useBackButton from "lpm/hooks/useBackButton";
import { cn } from "lpm/utils/cn";
import { Button } from "./Button";
import type { ArrowBackButtonProps, BackButtonProps } from "./button.types";

export function BackButton({
  backUrl,
  onClick,
  hoverEffect = "from-left",
  ...props
}: BackButtonProps) {
  const { goBack } = useBackButton();

  return (
    <Button
      {...props}
      hoverEffect={hoverEffect}
      onClick={(e) => {
        goBack(backUrl);
        onClick?.(e);
      }}
    />
  );
}

export function ArrowBackButton({
  wrapperClassName,
  iconClassName,
  hover = "light",
  ...props
}: ArrowBackButtonProps) {
  return (
    <div className={cn("col-span-full py-2 px-2", wrapperClassName)}>
      <BackButton {...props} hover={hover}>
        <ArrowLeftIcon className={cn("size-4", iconClassName)} />
        Back
      </BackButton>
    </div>
  );
}
