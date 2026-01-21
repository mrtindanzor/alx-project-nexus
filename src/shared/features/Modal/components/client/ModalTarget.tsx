"use client";

import type { PropsWithChildren } from "react";
import { useInert, useModalCtx } from "../../hooks/useModal";

export function ModalTarget() {
  const { modalRef } = useModalCtx();

  return <div ref={modalRef} />;
}

export function InertToggle({ children }: PropsWithChildren) {
  const { totalOpenedModals } = useInert();

  return <div inert={totalOpenedModals > 0}>{children}</div>;
}
