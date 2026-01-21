"use client";

import { SORT_FILTERS } from "@/features/jobs/constants";
import { Dropdown } from "@/shared/features/Dropdown";
import { useFilterCtx } from "../hooks/useFilters";

export function SortBy() {
  const { getSelected, setFilter } = useFilterCtx();
  const sortBy = getSelected("sort");

  return (
    <Dropdown
      title={sortBy}
      items={SORT_FILTERS.map((item) => ({ title: item, value: item }))}
      setValue={(value) => setFilter("sort", value)}
      className="ml-auto w-40"
    />
  );
}
