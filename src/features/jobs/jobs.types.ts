import type { JOB_EXPERIENCES, JOB_TYPES, SORT_FILTERS } from "./constants";

export type FilterOptions = {
  jobType: (typeof JOB_TYPES)[number][];
  experience: (typeof JOB_EXPERIENCES)[number][];
  sort: (typeof SORT_FILTERS)[number];
  search: string;
};

export type JobType = {
  title: string;
  location: string;
  salary: string;
  postedTime: string;
  type: FilterOptions["jobType"][number];
  experience: FilterOptions["experience"][number];
  description: string;
  skills: string[];
};
