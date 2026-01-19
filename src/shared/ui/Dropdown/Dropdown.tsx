"use client";

import { AnimatePresence } from "framer-motion";
import { useAutoHide } from "lpm/hooks/useAutoHide";
import FramerAnimatePosition from "lpm/ui/AnimatePosition";
import { Button } from "lpm/ui/Buttons";
import { cn } from "lpm/utils/cn";
import { ChevronsUpDown } from "lucide-react";
import { useCallback, useImperativeHandle, useRef, useState } from "react";
import type {
  DropDownItemProps,
  DropDownListProps,
  DropDownProps,
} from "./dropdown.types";

export default function Dropdown<T>({
  title,
  items,
  setValue,
  className,
  Icon,
  buttonProps,
  ...props
}: DropDownProps<T>) {
  const dropDownRef = useRef<{
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
  }>(null);

  const { captureRef } = useAutoHide({
    setIsOpen: () => dropDownRef.current?.setIsOpen(false),
    isOpen: true,
    event: "click",
  });

  return (
    <div
      {...props}
      ref={captureRef()}
      className={cn("relative w-fit ", className)}
    >
      <Button
        type="button"
        onClick={() => dropDownRef.current?.setIsOpen((a) => !a)}
        className=" grid grid-cols-[1fr_auto] text-left gap-2"
        w="full"
        y="center"
        pad="sm"
        variant="ghost-light"
        hover="dark"
        {...buttonProps}
      >
        {title}
        {Icon ? (
          <Icon className="size-4 stroke-2 justify-center flex" />
        ) : (
          <ChevronsUpDown className="size-4 stroke-2 justify-center flex" />
        )}
      </Button>
      <DropdownList
        items={items}
        ref={dropDownRef}
        setValue={(value, index) => setValue(value, index)}
      />
    </div>
  );
}

export function DropdownList<T>({
  ref,
  items,
  setValue,
}: DropDownListProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      setIsOpen(value) {
        setIsOpen(value);
      },
      isOpen,
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <FramerAnimatePosition
          animate="show"
          exit="hidden"
          variants={{ hidden: { y: 5 } }}
          className="absolute z-20 overflow-hidden rounded-md top-[calc(100%+0.25rem)] right-0 max-h-80 w-50"
        >
          <ul className="overflow-y-auto p-1 grid h-fit bg-muted gap-1">
            {items.map((item, index) => (
              <DropItem
                key={item.title}
                setValue={(value) => setValue(value, index)}
                setIsOpen={setIsOpen}
                {...item}
              />
            ))}
          </ul>
        </FramerAnimatePosition>
      )}
    </AnimatePresence>
  );
}

function DropItem<T>({
  title,
  value,
  setValue,
  setIsOpen,
  icon: Icon,
  className,
  ...props
}: DropDownItemProps<T>) {
  const handleToggle = useCallback(() => {
    setValue(value);
    setIsOpen(false);
  }, [setIsOpen, setValue, value]);
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
