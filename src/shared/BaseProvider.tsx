import type { PropsWithChildren } from "react";
import { JobsProvider } from "@/features/jobs";
import { InertToggle, ModalProvider, ModalTarget } from "./features/Modal";

export function BaseProvider({ children }: PropsWithChildren) {
  return (
    <JobsProvider>
      <ModalProvider>
        <ModalTarget />
        <InertToggle>{children}</InertToggle>
      </ModalProvider>
    </JobsProvider>
  );
}
