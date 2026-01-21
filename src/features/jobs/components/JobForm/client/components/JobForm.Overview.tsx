"use client";

import { useId } from "react";
import { JOB_TYPES } from "@/features/jobs/constants";
import { Dropdown } from "@/shared/features/Dropdown";
import { jobInputs } from "../../contants";
import { FormSectionWrapper } from "../../server";
import { useJobFormCtx } from "../hooks/useJobForm";
import { JobInput } from "./Input";

export function JobFormOverview() {
  return (
    <FormSectionWrapper
      title="Job Basics"
      description="Tell us about the role"
      className="sm:grid-cols-2 gap-x-4"
    >
      <JobInput {...jobInputs[0]} className="col-span-full" />
      <JobInput {...jobInputs[1]} />
      <JobType />
    </FormSectionWrapper>
  );
}

function JobType() {
  const { job, setValue } = useJobFormCtx();
  const id = useId();

  return (
    <div className="flex flex-col justify-between">
      <span id={id} className="font-bold">
        Work Type
      </span>

      <Dropdown
        aria-labelledby={id}
        title={job.type}
        items={JOB_TYPES.map((type) => ({
          title: type,
          value: type,
          variant: "none",
          hover: "dark",
        }))}
        setValue={(type) => setValue("type", type)}
        className="w-full *:last:w-full"
        dropDownListClassName="bg-neutral border-muted-2 border"
        buttonProps={{
          variant: "outline-dark",
          w: "full",
          pad: "xl",
          rad: "md",
        }}
      />
    </div>
  );
}
