/** biome-ignore-all lint/suspicious/noExplicitAny: Create context does not accept generics */
import type { ButtonVariantTypes } from "lpm/ui/Buttons";
import type React from "react";
import type { ComponentProps } from "react";

export type DropDownItem<T = any> = {
  icon?: React.ElementType;
  value: T;
  title: string;
  className?: string;
  index: number;
} & ButtonVariantTypes;

export type DropDownProps<T = any> = {
  Icon?: React.ElementType;
  title?: string;
  setValue: (value: T, index?: number) => void;
  items: Omit<DropDownItem<T>, "index">[];
  buttonProps?: { className?: string } & ButtonVariantTypes;
  dropDownListClassName?: string;
} & ComponentProps<"div">;

export type DropDownListProps = Pick<DropDownProps, "items" | "setValue">;

export type UseDropdownItemProps = Pick<DropDownItem, "value" | "index">;

export type DropDownContextProps = Pick<
  DropDownProps,
  "items" | "setValue" | "dropDownListClassName"
> & {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};
