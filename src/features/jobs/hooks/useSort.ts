import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { SORT_FILTERS } from "../constants";

export function useSort() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const selected = useMemo(() => {
    return searchParams.get("sort") || SORT_FILTERS[0];
  }, [searchParams]);

  const setValue = useCallback(
    (sort: string) => {
      const query = new URLSearchParams(searchParams);
      query.set("sort", sort);

      router.push(`${pathname}?${query.toString()}`);
    },
    [router, pathname, searchParams],
  );

  return { sortBy: selected, setSortBy: setValue };
}
