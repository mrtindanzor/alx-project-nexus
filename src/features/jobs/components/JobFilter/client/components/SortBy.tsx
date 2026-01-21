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
      items={SORT_FILTERS.map((item) => ({
        title: item,
        value: item,
        variant: "none",
        hover: "dark",
      }))}
      setValue={(value) => setFilter("sort", value)}
      className="ml-auto w-40"
      buttonProps={{
        variant: "light",
        className: "outline outline-muted-2",
        pad: "md",
      }}
      dropDownListClassName="bg-neutral border border-muted-2"
    />
  );
}
