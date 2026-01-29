"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "@/shared/ui/primitive/Buttons";
import { cn } from "@/shared/utils/cn";
import type {
  ArrowBackButtonProps,
  BackButtonProps,
} from "./routeChange.types";
import { useRouteChange } from "./useRouteChange.hooks";

export function BackButton({
  backUrl,
  onClick,
  hoverEffect = "from-left",
  ...props
}: BackButtonProps) {
  const { goBack } = useRouteChange();

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
  hover = "ghost-light",
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
