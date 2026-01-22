import {
  FilterProvider,
  JobFilter,
  JobFilterHeader,
  JobSearch,
  JobsCard,
} from "@/features/jobs";
import { FramerAnimatePosition } from "@/shared/features/Framer";
import { jobsPageVariants } from "../contants";

export function JobsPage() {
  return (
    <FramerAnimatePosition
      animate="show"
      className=" bg-neutral pb-8"
      variants={jobsPageVariants}
    >
      <JobFilterHeader />

      <FilterProvider>
        <JobSearch />
        <main className="md:py-4 max-w-6xl mx-auto">
          <div className="@container grid md:grid-cols-[auto_1fr] gap-y-4 gap-x-4">
            <JobFilter />
            <div>
              <JobsCard />
            </div>
          </div>
        </main>
      </FilterProvider>
    </FramerAnimatePosition>
  );
}
