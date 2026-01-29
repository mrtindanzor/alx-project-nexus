import type { ButtonProps } from "@/shared/ui/primitive/Buttons";

export type BackButtonProps = ButtonProps & {
  backUrl?: string;
};
export type ArrowBackButtonProps = BackButtonProps & {
  wrapperClassName?: string;
  iconClassName?: string;
};
