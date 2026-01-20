import { SORT_FILTERS } from "@/features/jobs/constants";
import Dropdown from "@/shared/ui/Dropdown/Dropdown";

export function SortBySkeleton() {
  return (
    <Dropdown
      title="Latest"
      items={SORT_FILTERS.map((item) => ({ title: item, value: item }))}
      setValue={() => null}
      className="ml-auto w-40"
    />
  );
}
