import type { ComponentProps } from "react";
import type { GetUnions, PathValue } from "@/shared/types/lib/PathValue";
import type { InputProps, TextAreaProps } from "@/shared/ui/Input";
import type { JobType } from "../../jobs.contract.types";
import type { useJobForm } from "./client/hooks/useJobForm";

export type PostJobType = Omit<JobType, "postedTime" | "salary"> & {
  minSalary: number;
  maxSalary: number;
};

export type FormSectionWrapperProps = {
  title: string;
  description: string;
} & ComponentProps<"section">;

export type JobFormContextProps = ReturnType<typeof useJobForm> | null;

export type PostJobPaths = GetUnions<PostJobType>;

export type PostJobPathValue<T extends PostJobPaths> = PathValue<
  PostJobType,
  T
>;

export type JobInputProps<T extends PostJobPaths, El = "input"> = {
  name: T;
  label: string;
} & (El extends "textarea" ? TextAreaProps : InputProps);

export type SkillPillProps = {
  index: number;
  skill: string;
};
