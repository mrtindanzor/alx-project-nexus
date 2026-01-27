import type { PropsWithChildren } from "react";
import { JobsProvider } from "@/features/jobs";
import { InertToggle, ModalProvider, ModalTarget } from "./features/Modal";
import { RouteChangeProvider } from "./features/RouteChange";

export function BaseProvider({ children }: PropsWithChildren) {
  return (
    <JobsProvider>
      <RouteChangeProvider>
        <ModalProvider>
          <ModalTarget />

          <InertToggle>{children}</InertToggle>
        </ModalProvider>
      </RouteChangeProvider>
    </JobsProvider>
  );
}
