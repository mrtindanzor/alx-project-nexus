import {
  JobFormBenefits,
  JobFormOverview,
  JobFormProvider,
  JobFormRequirements,
  SubmitJobForm,
} from "./client";
import { FormHeader } from "./server";

export function JobForm() {
  return (
    <JobFormProvider>
      <div className="grid h-fit gap-y-8 pb-10">
        <FormHeader />
        <div className="bg-neutral grid gap-y-8 rounded-xl px-4 md:px-12 py-8 outline-2 outline-muted-2/50">
          <JobFormOverview />
          <JobFormRequirements />
          <JobFormBenefits />
          <SubmitJobForm />
        </div>
      </div>
    </JobFormProvider>
  );
}
