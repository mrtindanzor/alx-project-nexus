import { useCallback, useContext, useState } from "react";
import { useAutoHide } from "@/shared/hooks/useAutoHide";
import { DropDownContext } from "./Dropdown";
import type { UseDropdownItemProps } from "./dropdown.types";

export function useDropdownItem({ value, index }: UseDropdownItemProps) {
  const { setIsOpen, setValue } = useDropdownCtx();

  const handleToggle = useCallback(() => {
    setValue(value, index);
    setIsOpen(false);
  }, [setIsOpen, setValue, index, value]);

  return { handleToggle };
}

export function useDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const { captureRef } = useAutoHide({
    setIsOpen: () => setIsOpen(false),
    isOpen: isOpen,
    event: "click",
  });

  const toggle = () => setIsOpen((a) => !a);

  return { captureRef, isOpen, setIsOpen, toggle };
}

export function useDropdownCtx() {
  const ctx = useContext(DropDownContext);
  if (!ctx) throw Error("DropDownContext not defined");

  return ctx;
}
