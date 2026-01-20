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
        <JobFormOverview />
        <JobFormRequirements />
        <JobFormBenefits />
        <SubmitJobForm />
      </div>
    </JobFormProvider>
  );
}
