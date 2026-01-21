"use client";

import { useId } from "react";
import { JOB_TYPES } from "@/features/jobs/constants";
import { Dropdown } from "@/shared/features/Dropdown";
import { FormSectionWrapper } from "../../server";
import { useJobFormCtx } from "../hooks/useJobForm";
import { JobInput } from "./Input";

const inputs = [
  {
    name: "title",
    label: "Job Title",
    placeholder: "eg. Senior Full-stack Engineer",
  },
  {
    name: "location",
    label: "Location",
    placeholder: "Remote, Greater Accra, Ahsanti",
  },
] as const;

export function JobFormOverview() {
  return (
    <FormSectionWrapper
      title="Job Basics"
      description="Tell us about the role"
      className="sm:grid-cols-2 gap-x-4"
    >
      <JobInput {...inputs[0]} className="col-span-full" />
      <JobInput {...inputs[1]} />
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
        items={JOB_TYPES.map((type) => ({ title: type, value: type }))}
        setValue={(type) => setValue("type", type)}
        className="w-full *:last:w-full"
        buttonProps={{ w: "full", pad: "xl", rad: "md" }}
      />
    </div>
  );
}
