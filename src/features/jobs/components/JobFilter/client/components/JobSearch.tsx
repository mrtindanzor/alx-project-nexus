"use client";

import { Search } from "lucide-react";
import { FramerAnimatePosition } from "@/shared/features/Framer";
import { Button } from "@/shared/ui/primitive/Buttons";
import { Input } from "@/shared/ui/primitive/Input";
import { searchSearchVariants } from "../../contants";
import { useFilterCtx } from "../hooks/useFilters";
import { SortBy } from "./SortBy";

export function JobSearch() {
  return (
    <FramerAnimatePosition
      animate="show"
      variants={searchSearchVariants}
      className="@container px-4 bg-neutral border-b border-b-muted-2 col-span-full"
    >
      <div className="max-w-6xl mt-20 px-4 mx-auto h-[80vh] grid-rows-[1fr_auto_auto] pb-8 grid gap-y-2">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold pt-8 mx-auto text-primary flex-place-center tracking-tight font-chakra italic">
          Find your next role at a top-tier company.
        </h1>
        <SearchBox />
        <SortBy />
      </div>
    </FramerAnimatePosition>
  );
}

function SearchBox() {
  const { handleSearchSubmit, getSelected } = useFilterCtx();
  const search = getSelected("search");

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="flex border-2 white-wrapper bg-muted-2 pl-3 pr-1 py-1 items-center"
    >
      <Search className="size-6 @sm:block" />

      <Input
        type="search"
        placeholder="Search by job title, keywords, or company..."
        className="border-0 flex-1 w-full max-w-full outline-none focus:outline-none"
        defaultValue={search}
        name="search"
        variant="none"
      />

      <Button variant="dark" hover="sky" rad="xl" pad="xl" className="flex-0">
        Search
      </Button>
    </form>
  );
}
