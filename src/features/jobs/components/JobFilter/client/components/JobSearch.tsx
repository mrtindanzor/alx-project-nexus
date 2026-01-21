import { Search } from "lucide-react";
import { Button } from "@/shared/ui/Buttons";
import { Input } from "@/shared/ui/Input";
import { useFilterCtx } from "../hooks/useFilters";
import { SortBy } from "./SortBy";

export function JobSearch() {
  return (
    <div className="@container grid gap-y-2 col-span-full">
      <h1 className="text-xl font-sans font-bold tracking-tight">
        Find your next role at a top-tier company.
      </h1>
      <SortBy />
      <SearchBox />
    </div>
  );
}

function SearchBox() {
  const { handleSearchSubmit, getSelected } = useFilterCtx();
  const search = getSelected("search");

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="flex border-2 border-muted-2 rounded-xl bg-neutral pl-3 pr-1 py-1 items-center"
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

      <Button variant="sky" hover="dark" rad="xl" pad="xl" className="flex-0">
        Search
      </Button>
    </form>
  );
}
