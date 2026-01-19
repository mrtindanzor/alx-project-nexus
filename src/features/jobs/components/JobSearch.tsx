"use client";

import { Search } from "lucide-react";
import { Suspense } from "react";
import { Button } from "@/shared/ui/Buttons";
import Dropdown from "@/shared/ui/Dropdown/Dropdown";
import { Input } from "@/shared/ui/Input";
import { SORT_FILTERS } from "../constants";
import { useSort } from "../hooks/useSort";

export function JobSearch() {
  return (
    <form className="grid gap-y-4">
      <h1 className="text-xl text-neutral/80">
        Find your next role at a top-tier tech company.
      </h1>
      <Suspense fallback={<div />}>
        <Sort />
      </Suspense>
      <SearchBox />
    </form>
  );
}

function SearchBox() {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] bg-primary rounded-xl px-2 py-1.5 items-center gap-x-2">
      <Search className="text-6" />

      <Input
        type="search"
        placeholder="Search by job title, keywords, or company..."
        className="border-0 outline-none focus:outline-none"
      />

      <Button variant="sky" rad="xl" pad="xl">
        Search
      </Button>
    </div>
  );
}

function Sort() {
  const { sortBy, setSortBy } = useSort();

  return (
    <Dropdown
      title={sortBy}
      items={SORT_FILTERS.map((item) => ({ title: item, value: item }))}
      setValue={setSortBy}
      className="ml-auto w-40"
    />
  );
}
