"use client";

import { createContext, type PropsWithChildren } from "react";
import { useModalProvider } from "../../hooks/useModal";
import type { ModalContextProps } from "../../modal.types";

export const ModalContext = createContext<ModalContextProps>(null);

export function ModalProvider({ children }: PropsWithChildren) {
  const { modalRef, totalOpenedModals, setTotalOpenedModals } =
    useModalProvider();

  return (
    <ModalContext.Provider
      value={{ modalRef, totalOpenedModals, setTotalOpenedModals }}
    >
      {children}
    </ModalContext.Provider>
  );
}
