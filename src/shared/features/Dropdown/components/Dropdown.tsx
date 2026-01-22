"use client";

import { AnimatePresence } from "framer-motion";
import { Button } from "lpm/ui/Buttons";
import { cn } from "lpm/utils/cn";
import { ChevronsUpDown } from "lucide-react";
import { createContext } from "react";
import { FramerAnimatePosition } from "../../Framer";
import type {
  DropDownContextProps,
  DropDownItem,
  DropDownProps,
} from "../dropdown.types";
import {
  useDropdown,
  useDropdownCtx,
  useDropdownItem,
} from "../hooks/useDropdown";

export const DropDownContext = createContext<DropDownContextProps | null>(null);

export function Dropdown<T>({
  title,
  items,
  setValue,
  className,
  Icon = ChevronsUpDown,
  buttonProps,
  dropDownListClassName,
  ...props
}: DropDownProps<T>) {
  const { className: btnClassName, ...btnProps } = buttonProps || {};
  const { captureRef, isOpen, setIsOpen, toggle } = useDropdown();

  return (
    <DropDownContext.Provider
      value={{ setValue, items, isOpen, setIsOpen, dropDownListClassName }}
    >
      <div
        {...props}
        ref={captureRef()}
        className={cn("relative w-fit ", className)}
      >
        <Button
          type="button"
          onClick={toggle}
          className={cn(
            "grid grid-cols-[1fr_auto] text-left gap-2",
            btnClassName,
          )}
          w="full"
          y="center"
          variant="ghost-light"
          hover="dark"
          {...btnProps}
        >
          {title}
          <Icon
            ref={captureRef(1)}
            className="size-4 stroke-2 justify-center flex"
          />
        </Button>
        <DropdownList />
      </div>
    </DropDownContext.Provider>
  );
}

export function DropdownList() {
  const { isOpen, items, dropDownListClassName } = useDropdownCtx();

  return (
    <AnimatePresence>
      {isOpen && (
        <FramerAnimatePosition
          animate="show"
          exit="hidden"
          variants={{ hidden: { y: 5 } }}
          className="absolute drop-shadow z-50 top-[calc(100%+0.25rem)] right-0 max-h-80 w-50"
        >
          <ul
            className={cn(
              "overflow-y-auto p-1 overflow-hidden rounded-md grid h-fit bg-muted gap-1",
              dropDownListClassName,
            )}
          >
            {items.map((item, index) => (
              <DropItem key={item.title} index={index} {...item} />
            ))}
          </ul>
        </FramerAnimatePosition>
      )}
    </AnimatePresence>
  );
}

function DropItem({
  title,
  value,
  icon: Icon,
  className,
  index,
  ...props
}: DropDownItem) {
  const { handleToggle } = useDropdownItem({ value, index });

  return (
    <li>
      <Button
        type="button"
        onClick={handleToggle}
        variant="none"
        hover="ghost-light"
        className={cn(
          "w-full py-2 text-left text-sm  tracking-wide font-light grid grid-cols-[auto_1fr] gap-2 items-center",
          className,
        )}
        {...props}
      >
        {Icon && <Icon className="size-4" />}
        <span className="col-start-2">{title}</span>
      </Button>
    </li>
  );
}
