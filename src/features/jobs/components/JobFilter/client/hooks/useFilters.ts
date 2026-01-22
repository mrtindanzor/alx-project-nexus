"use client";

import {
  type ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import {
  type FormEvent,
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { FilterOptions } from "@/features/jobs/jobs.contract.types";
import type { GetSelectedValue, SetFilterValue } from "../../filters.types";
import { FiltersContext } from "../components/FilterProvider";

export function useSetFilters() {
  const { setFilters, setSearchParams } = useFilterCtx();
  const searchParams = useSearchParams();

  useLayoutEffect(() => {
    const jobTypes = searchParams.getAll("jobType");
    const experiences = searchParams.getAll("experience");

    setFilters({
      sort: (searchParams.get("sort") || "Latest") as FilterOptions["sort"],
      jobType: (jobTypes.length > 0
        ? jobTypes
        : ["Full-time"]) as FilterOptions["jobType"],
      experience: (experiences.length > 0
        ? experiences
        : ["Mid-weight"]) as FilterOptions["experience"],
      search: searchParams.get("search") || "",
    });

    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, setFilters]);
}

export function useFilters() {
  const searchParamsRef = useRef<ReadonlyURLSearchParams>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    search: "",
    experience: ["Mid-weight"],
    jobType: ["Full-time"],
    sort: "Recommended",
  });
  const router = useRouter();
  const pathname = usePathname();

  const setSearchParams = useCallback(
    (searchParams: ReadonlyURLSearchParams) => {
      searchParamsRef.current = searchParams;
    },
    [],
  );

  const isSelected = useCallback(
    <T extends keyof FilterOptions>(option: T, match: GetSelectedValue<T>) => {
      const current = filters[option];

      if (typeof current === "string") return current === match;

      const arr = current as SetFilterValue<T>[];
      return arr.includes(match);
    },
    [filters],
  );

  const getSelected = useCallback(
    <T extends keyof FilterOptions>(option: T) => {
      return filters[option];
    },
    [filters],
  );

  const setFilter = useCallback(
    <T extends keyof FilterOptions>(option: T, value: SetFilterValue<T>) => {
      const searchParams = searchParamsRef.current;
      if (!searchParams) return;

      const params = new URLSearchParams(searchParams);

      switch (option) {
        case "sort":
        case "search": {
          params.set(option, value);
          return router.push(`${pathname}?${params.toString()}`);
        }

        case "experience":
        case "jobType": {
          params.getAll(option).includes(value)
            ? params.delete(option, value)
            : params.append(option, value);

          return router.push(`${pathname}?${params.toString()}`);
        }
      }
    },
    [pathname, router],
  );

  const handleSearchSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formdata = new FormData(e.currentTarget);
      const search = formdata.get("search");

      setFilter("search", search as string);
    },
    [setFilter],
  );

  const resetFilters = useCallback(() => {
    router.push(pathname);
  }, [router, pathname]);

  return {
    filters,
    setFilter,
    isSelected,
    getSelected,
    handleSearchSubmit,
    resetFilters,
    setFilters,
    setSearchParams,
  };
}

export function useFilterCtx() {
  const ctx = useContext(FiltersContext);
  if (!ctx) throw Error("FiltersContext not defined");

  return ctx;
}
