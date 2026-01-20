import type { JobType } from "@/features/jobs/jobs.types";

export type JobsProviderContextProps = {
  jobs: JobType[];
  setJobs: React.Dispatch<React.SetStateAction<JobType[]>>;
} | null;
