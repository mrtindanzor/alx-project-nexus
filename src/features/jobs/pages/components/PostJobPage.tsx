import { JobForm, JobFormHeader } from "@/features/jobs";

export function PostJobPage() {
  return (
    <>
      <JobFormHeader />
      <main className="pt-20 px-4 max-w-4xl w-full mx-auto">
        <JobForm />
      </main>
    </>
  );
}
