"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { PollsListener } from "./Socket/polls.sync";
import { SocketProvider } from "./Socket/Socket";
import { RouteChangeProvider } from "./shared/features/RouteChange";

const qc = new QueryClient();

export function BaseProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={qc}>
      <SocketProvider>
        <PollsListener />

        <RouteChangeProvider>{children}</RouteChangeProvider>
      </SocketProvider>
    </QueryClientProvider>
  );
}
