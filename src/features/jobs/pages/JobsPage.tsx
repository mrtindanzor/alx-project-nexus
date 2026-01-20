import { Suspense } from "react";
import { FilterProvider } from "../components/JobFilter";
import { JobFilterSkeleton } from "../components/JobFilter/skeletons/FilterSkeleton";
import { JobsCard } from "../components/Jobs/client/component/JobsCard";
import { Header } from "../layouts/JobFilter/Header";

export function JobsPage() {
  return (
    <>
      <Header />

      <main className="mt-18 py-10 px-4 max-w-6xl mx-auto">
        <Suspense fallback={<JobFilterSkeleton />}>
          <FilterProvider>
            <JobsCard />
          </FilterProvider>
        </Suspense>
      </main>
    </>
  );
}
