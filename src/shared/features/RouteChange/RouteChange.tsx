"use client";

import { createContext, type PropsWithChildren, Suspense, useRef } from "react";
import { useRouteChangeListener } from "./useRouteChange.hooks";

export type RouteChangeContextProps = {
  routeHistoryRef: React.RefObject<string[]>;
};

export const RouteChangeContext = createContext<RouteChangeContextProps | null>(
  null,
);

export function RouteChangeProvider({ children }: PropsWithChildren) {
  const routeHistoryRef = useRef<string[]>(["/", "/"]);

  return (
    <RouteChangeContext value={{ routeHistoryRef }}>
      <Suspense fallback={null}>
        <RouteChangeListener />
      </Suspense>

      {children}
    </RouteChangeContext>
  );
}

function RouteChangeListener() {
  useRouteChangeListener();

  return null;
}
