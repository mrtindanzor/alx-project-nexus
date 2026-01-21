import { Button } from "@/shared/ui/Buttons";
import { useFilters } from "../hooks/useFilters";

export function ResetFilters() {
  const { resetFilters } = useFilters();

  return (
    <Button
      onClick={resetFilters}
      variant="outline"
      hover="sky"
      w="full"
      x="center"
      pad="lg"
      rad="lg"
      className="whitespace-nowrap hidden md:block"
    >
      Reset <span className="hidden sm:inline-block ml-1"> All Filters</span>
    </Button>
  );
}
