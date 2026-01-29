"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { InertToggle, ModalProvider, ModalTarget } from "./features/Modal";
import { RouteChangeProvider } from "./features/RouteChange";
import { SocketProvider } from "./features/Socket";

const qc = new QueryClient();

export function BaseProvider({ children }: PropsWithChildren) {
  return (
    <SocketProvider>
      <QueryClientProvider client={qc}>
        <RouteChangeProvider>
          <ModalProvider>
            <ModalTarget />

            <InertToggle>{children}</InertToggle>
          </ModalProvider>
        </RouteChangeProvider>
      </QueryClientProvider>
    </SocketProvider>
  );
}
