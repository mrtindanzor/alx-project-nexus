"use client";

import { createContext, type PropsWithChildren, Suspense } from "react";
import type { FiltersContextProps } from "../../filters.types";
import { JobFilter } from "../../JobFilter";
import { useFilters, useSetFilters } from "../hooks/useFilters";
import { JobSearch } from "./JobSearch";

export const FiltersContext = createContext<FiltersContextProps>(null);

export function FilterProvider({ children }: PropsWithChildren) {
  const filterProps = useFilters();

  return (
    <FiltersContext.Provider value={filterProps}>
      <Suspense fallback={<div />}>
        <UpdateFilters />
      </Suspense>
      <div className="@container grid md:grid-cols-[auto_1fr] gap-y-4 gap-x-4">
        <JobSearch />
        <JobFilter />
        <div className="md:row-start-2 md:col-start-2">{children}</div>
      </div>
    </FiltersContext.Provider>
  );
}

function UpdateFilters() {
  useSetFilters();

  return null;
}
