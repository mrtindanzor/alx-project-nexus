"use client";

import { createContext, type PropsWithChildren, Suspense } from "react";
import type { FiltersContextProps } from "../../filters.types";
import { useFilters, useSetFilters } from "../hooks/useFilters";

export const FiltersContext = createContext<FiltersContextProps>(null);

export function FilterProvider({ children }: PropsWithChildren) {
  const filterProps = useFilters();

  return (
    <FiltersContext.Provider value={filterProps}>
      <Suspense fallback={<div />}>
        <UpdateFilters />
      </Suspense>
      {children}
    </FiltersContext.Provider>
  );
}

function UpdateFilters() {
  useSetFilters();

  return null;
}
