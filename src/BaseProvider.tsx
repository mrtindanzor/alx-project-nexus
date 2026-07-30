"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type PropsWithChildren, useState } from "react";
import { RouteChangeProvider } from "./shared/features/RouteChange";
import { PollsListener } from "./Socket/polls.sync";
import { SocketProvider } from "./Socket/Socket";

export function BaseProvider({ children }: PropsWithChildren) {
  const [qc] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={qc}>
      <SocketProvider>
        <PollsListener />

        <RouteChangeProvider>{children}</RouteChangeProvider>
      </SocketProvider>
    </QueryClientProvider>
  );
}
