"use client";

import { X } from "lucide-react";
import { Pill } from "@/shared/ui/Buttons";
import type { SkillPillProps } from "../../jobform.types";
import { FormSectionWrapper } from "../../server";
import { useJobFormCtx } from "../hooks/useJobForm";
import { JobInput, JobTextArea } from "./Input";

export function JobFormRequirements() {
  return (
    <FormSectionWrapper
      title="Role Description"
      description="Be as detailed as possible to attract the right talent."
    >
      <Description />
      <SkillsRequired />
    </FormSectionWrapper>
  );
}

function Description() {
  return (
    <JobTextArea
      name="description"
      label="Detailed Description"
      placeholder="Outline the responsibilities, and requirements..."
    />
  );
}

function SkillsRequired() {
  const { job } = useJobFormCtx();

  return (
    <div>
      <JobInput
        name="skills"
        label="Required Skills"
        placeholder="React, Node.js, AWS... (Press enter to add)"
      />

      <ul className="flex flex-wrap gap-2 py-2">
        {job.skills.map((skill, index) => (
          <SkillPill key={skill} index={index} skill={skill} />
        ))}
      </ul>
    </div>
  );
}

function SkillPill({ skill, index }: SkillPillProps) {
  const { removeSkill } = useJobFormCtx();

  return (
    <Pill
      variant="ghost-sky"
      hover="sky"
      rad="2xl"
      y="center"
      className="gap-x-2 first-letter:uppercase!"
    >
      {skill}
      <X
        className="size-5 cursor-pointer z-2"
        onClick={() => removeSkill(index)}
      />
    </Pill>
  );
}
