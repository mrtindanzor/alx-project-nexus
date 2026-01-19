import { JobSearch } from "../components/JobSearch";
import { Header } from "../layouts/Header";

export function JobsPage() {
  return (
    <>
      <Header />

      <main className="mt-18 py-10 max-w-6xl mx-auto">
        <JobSearch />
      </main>
    </>
  );
}
