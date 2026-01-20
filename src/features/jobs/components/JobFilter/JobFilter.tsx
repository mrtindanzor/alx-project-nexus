import { Experience, JobType, ResetFilters } from "./client";

export function JobFilter() {
  return (
    <div className="w-full min-w-80 max-w-sm grid gap-y-8 h-fit sticky top-16 z-1 py-2">
      <JobType />
      <Experience />
      <ResetFilters />
    </div>
  );
}
