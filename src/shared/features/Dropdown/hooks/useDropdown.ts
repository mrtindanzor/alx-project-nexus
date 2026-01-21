import { useCallback, useImperativeHandle, useRef, useState } from "react";
import { useAutoHide } from "@/shared/hooks/useAutoHide";
import type {
  UseDropDownListProps,
  UseDropdownItemProps,
} from "../dropdown.types";

export function useDropdownItem<T>({
  setIsOpen,
  setValue,
  value,
}: UseDropdownItemProps<T>) {
  const handleToggle = useCallback(() => {
    setValue(value);
    setIsOpen(false);
  }, [setIsOpen, setValue, value]);

  return { handleToggle };
}

export function useDropDownList<T>({ ref }: UseDropDownListProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      setIsOpen(value) {
        setIsOpen(value);
      },
      isOpen,
    };
  }, [isOpen]);

  return { isOpen, setIsOpen };
}

export function useDropdown() {
  const dropDownRef = useRef<{
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
  }>(null);

  const { captureRef } = useAutoHide({
    setIsOpen: () => dropDownRef.current?.setIsOpen(false),
    isOpen: true,
    event: "click",
  });

  const toggle = () => dropDownRef.current?.setIsOpen((a) => !a);

  return { captureRef, dropDownRef, toggle };
}
