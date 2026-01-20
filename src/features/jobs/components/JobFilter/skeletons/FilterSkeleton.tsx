import {
  ExperienceSkeleton,
  JobSearchSkeleton,
  JobTypeSkeleton,
} from "./index";

export function JobFilterSkeleton() {
  return (
    <div className="grid h-fit grid-cols-[auto_1fr] gap-y-8 gap-x-4">
      <JobSearchSkeleton />
      <div className="w-full min-w-80 max-w-sm grid gap-y-8 h-fit">
        <JobTypeSkeleton />
        <ExperienceSkeleton />
      </div>
      <div className="row-start-2 col-start-2"></div>
    </div>
  );
}
