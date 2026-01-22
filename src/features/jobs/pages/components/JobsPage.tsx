import { FilterProvider, JobFilterHeader, JobsCard } from "@/features/jobs";

export function JobsPage() {
  return (
    <>
      <JobFilterHeader />

      <main className="mt-18 py-10 max-w-6xl mx-auto">
        <FilterProvider>
          <JobsCard />
        </FilterProvider>
      </main>
    </>
  );
}
