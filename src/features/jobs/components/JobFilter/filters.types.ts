import type { ComponentProps } from "react";
import type { FilterOptions } from "../../jobs.types";
import type { useFilters } from "./client/hooks/useFilters";

export type CardWrapperProps = {
  title: string;
} & ComponentProps<"div">;

export type ExprienceCardProps = {
  title: FilterOptions["experience"][number];
} & ComponentProps<"li">;

export type JobTypeCardProps = {
  title: FilterOptions["jobType"][number];
} & ComponentProps<"li">;

export type FiltersContextProps = ReturnType<typeof useFilters> | null;

export type SetFilterValue<T extends keyof FilterOptions> =
  FilterOptions[T] extends string
    ? FilterOptions[T]
    : FilterOptions[T] extends `${infer U}`[]
      ? U
      : never;

export type GetSelectedValue<T extends keyof FilterOptions> = SetFilterValue<T>;
