import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type PropsWithChildren, useState } from "react";
import { PollsListener } from "./Socket/polls.sync";
import { SocketProvider } from "./Socket/Socket";
import { RouteChangeProvider } from "./shared/features/RouteChange";

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
