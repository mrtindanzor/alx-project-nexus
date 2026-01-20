import type { ComponentProps } from "react";
import type { JobType } from "../../jobs.types";

export type JobCardProps = {
  job: JobType;
} & ComponentProps<"li">;

export type JobCardContextProps = Pick<JobCardProps, "job"> | null;
