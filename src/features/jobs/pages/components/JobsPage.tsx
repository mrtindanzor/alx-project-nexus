import { FilterProvider } from "../../components/JobFilter";
import { JobsCard } from "../../components/Jobs/client/component/JobsCard";
import { Header } from "../../layouts/JobFilter/Header";

export function JobsPage() {
  return (
    <>
      <Header />

      <main className="mt-18 py-10 px-4 max-w-6xl mx-auto">
        <FilterProvider>
          <JobsCard />
        </FilterProvider>
      </main>
    </>
  );
}
