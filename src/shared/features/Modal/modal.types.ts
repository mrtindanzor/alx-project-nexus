import type { DragControls } from "framer-motion";
import type { ComponentProps } from "react";
import type { ButtonProps } from "@/shared/ui/primitive/Buttons";
import type { FramerAnimatePositionProps } from "../Framer";

export type ModalContextProps = {
  totalOpenedModals: number;
  setTotalOpenedModals: React.Dispatch<React.SetStateAction<number>>;
  modalRef: React.RefObject<HTMLDivElement | null>;
} | null;

export type ModalProps = {
  children: React.ReactNode;
  id?: string;
  backdropClassName?: string;
  close: () => void;
};

export type ModalButtonProps = Pick<ModalProps, "close"> & {
  className?: string;
  children?: React.ReactNode;
};

export type ModalVariantsTypes = "thumb" | "button" | "dynamic";

export type ModalThumbProps = {
  controls: DragControls;
  direction: ModalInitialDirection;
};

export type ModalInitialDirection = "top" | "left" | "right" | "bottom";

export type GetAnimationProps = {
  direction: ModalInitialDirection;
  height: number;
  width: number;
  start: number;
};

export type ModalWrapperProps = Omit<ComponentProps<"div">, "style"> &
  FramerAnimatePositionProps &
  ModalProps & {
    active: boolean;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    headerClassName?: string;
    childrenClassName?: string;
    footerClassName?: string;
    variant?: ModalVariantsTypes;
    threshold?: number;
    buttonProps?: ButtonProps;
    mobileDirection?: ModalInitialDirection;
    largeScreenDirection?: ModalInitialDirection;
  };

export type ModaLWrapperCoreProps = Omit<ModalWrapperProps, "active"> & {
  axis: "x" | "y";
};

export type UseModalProps = Pick<
  ModalWrapperProps,
  | "active"
  | "mobileDirection"
  | "variant"
  | "largeScreenDirection"
  | "threshold"
  | "close"
>;

export type UseModalCoreProps = Pick<ModalProps, "close">;
