import type { ComponentProps } from "react";
import type { JobType } from "../../jobs.contract.types";

export type JobCardProps = {
  job: JobType;
} & ComponentProps<"li">;
