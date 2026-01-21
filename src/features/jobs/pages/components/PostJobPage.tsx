import { JobForm } from "../../components/JobForm/JobForm";
import { Header } from "../../layouts/JobForm/Header";

export function PostJobPage() {
  return (
    <>
      <Header />
      <main className="pt-20 px-4 max-w-4xl w-full mx-auto">
        <JobForm />
      </main>
    </>
  );
}
