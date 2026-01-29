import type { LinkProps } from "next/link";
import type { ComponentProps } from "react";
import type { ExtractVariantsTypes } from "@/shared/types/lib/ExtractVariants";
import type { ButtonVariants } from "./components/Button";

export type ButtonVariantTypes = ExtractVariantsTypes<typeof ButtonVariants>;
export type ButtonProps = ComponentProps<"button"> & ButtonVariantTypes;

export type BackButtonProps = ButtonProps & {
  backUrl?: string;
};

export type PillProps = ButtonVariantTypes & ComponentProps<"span">;

export type StyledLinkProps = ButtonVariantTypes &
  LinkProps &
  ComponentProps<"a">;

export type ArrowBackButtonProps = BackButtonProps & {
  wrapperClassName?: string;
  iconClassName?: string;
};

export type CloseButtonProps = {
  close: () => void;
} & ButtonProps &
  ComponentProps<"button">;
