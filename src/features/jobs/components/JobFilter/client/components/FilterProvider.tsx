"use client";

import { createContext, type PropsWithChildren } from "react";
import type { FiltersContextProps } from "../../filters.types";
import { JobFilter } from "../../JobFilter";
import { useFilters } from "../hooks/useFilters";
import { JobSearch } from "./JobSearch";

export const FiltersContext = createContext<FiltersContextProps>(null);

export function FilterProvider({ children }: PropsWithChildren) {
  const filterProps = useFilters();

  return (
    <FiltersContext.Provider value={filterProps}>
      <div className="grid grid-cols-[auto_1fr] gap-y-8 gap-x-4 ">
        <JobSearch />
        <JobFilter />
        <div className="row-start-2 col-start-2">{children}</div>
      </div>
    </FiltersContext.Provider>
  );
}
