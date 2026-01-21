import { Search } from "lucide-react";
import { Button } from "@/shared/ui/Buttons";
import { Input } from "@/shared/ui/Input";
import { useFilterCtx } from "../hooks/useFilters";
import { SortBy } from "./SortBy";

export function JobSearch() {
  return (
    <div className="@container grid gap-y-4 col-span-full">
      <h1 className="text-xl text-neutral/80">
        Find your next role at a top-tier tech company.
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
      className="flex bg-primary rounded-xl px-2 py-1.5 items-center"
    >
      <Search className="size-6 @sm:block" />

      <Input
        type="search"
        placeholder="Search by job title, keywords, or company..."
        className="border-0 flex-1 w-full max-w-full outline-none focus:outline-none"
        defaultValue={search}
        name="search"
      />

      <Button variant="sky" rad="xl" pad="xl" className="flex-0">
        Search
      </Button>
    </form>
  );
}
