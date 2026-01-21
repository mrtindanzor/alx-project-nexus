import { Experience, JobType, ResetFilters } from "./client";

export function JobFilter() {
  return (
    <div className="@container bg-muted-light w-full sm:min-w-80 flex flex-wrap @sm:*:flex-0 *:flex-1 gap-x-2 gap-y-2 md:max-w-sm md:grid md:gap-y-8 h-fit sticky top-16 z-1 py-2">
      <JobType />
      <Experience />
      <ResetFilters />
    </div>
  );
}
