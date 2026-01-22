import { LightBulbIcon } from "@heroicons/react/24/outline";
import { Minus } from "lucide-react";
import { FormSectionWrapper } from "../../server";
import { JobInput } from "./Input";

export function JobFormBenefits() {
  return (
    <FormSectionWrapper
      title="Compensation & Benefits"
      description="Competitive pay attracts better quality applications."
    >
      <SalaryRange />
    </FormSectionWrapper>
  );
}

function SalaryRange() {
  return (
    <div className="grid @xs:grid-cols-[1fr_auto_1fr] gap-x-2 border-b pb-8 border-b-neutral/10">
      <span className="col-span-full font-bold">Annual Salary Range (GHS)</span>
      <JobInput name="minSalary" label="" placeholder="Min: 80,000" />
      <Minus className="hidden @xs:flex my-auto text-muted-2" />
      <JobInput name="maxSalary" label="" placeholder="Min: 120,000" />
      <Hint />
    </div>
  );
}

function Hint() {
  return (
    <div className="rounded-xl mt-4 col-span-full grid grid-cols-[auto_1fr] gap-x-4 items-center  bg-accent/10 border border-accent/30 py-4 px-4">
      <div className="flex items-center  col-start-1 row-start-1  row-span-2">
        <LightBulbIcon className="size-7 fill-accent text-accent" />
      </div>
      <h4 className="text-accent font-bold text-lg">Pro Tip</h4>
      <p className="text-primary/80">
        Jobs with visible salary ranges recieve 75% more clicks and 40% more
        applications on average.
      </p>
    </div>
  );
}
