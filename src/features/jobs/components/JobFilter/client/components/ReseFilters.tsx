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
      pad="xl"
      rad="lg"
    >
      Reset All Filters
    </Button>
  );
}
