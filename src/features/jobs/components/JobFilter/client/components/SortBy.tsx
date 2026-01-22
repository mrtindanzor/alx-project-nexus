"use client";

import { useId } from "react";
import { SORT_FILTERS } from "@/features/jobs/constants";
import { Dropdown } from "@/shared/features/Dropdown";
import { useFilterCtx } from "../hooks/useFilters";

export function SortBy() {
  const { getSelected, setFilter } = useFilterCtx();
  const sortBy = getSelected("sort");
  const id = useId();

  return (
    <div className="w-fit ml-auto flex flex-col">
      <span id={id} className="font-medium">
        Sort by
      </span>

      <Dropdown
        aria-labelledby={id}
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
          variant: "dark",
          className: "outline outline-muted-2",
          pad: "md",
          rad: "lg",
        }}
        dropDownListClassName="bg-neutral border border-muted-2"
      />
    </div>
  );
}
