import { Experience, JobType, ResetFilters } from "./client";

export function JobFilter() {
  return (
    <div className="@container bg-muted w-full md:w-[clamp(10rem,calc(0.1rem+50vw),15rem)] flex overflow-y-auto *:flex-0 gap-x-2 md:max-w-sm md:grid md:gap-y-8 h-fit sticky top-16 z-1 py-2 md:py-0">
      <JobType />
      <Experience />
      <ResetFilters />
    </div>
  );
}
