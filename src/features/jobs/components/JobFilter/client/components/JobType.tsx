"use client";

import { JOB_TYPES } from "@/features/jobs/constants";
import { Button } from "@/shared/ui/Buttons";
import type { JobTypeCardProps } from "../../filters.types";
import { useFilterCtx } from "../hooks/useFilters";
import { CardWrapper } from "./CardWrapper";

export function JobType() {
  return (
    <CardWrapper title="Job Type">
      <ul className="grid gap-y-2">
        {JOB_TYPES.map((job) => (
          <Card key={job} title={job} />
        ))}
      </ul>
    </CardWrapper>
  );
}

function Card({ title, ...props }: JobTypeCardProps) {
  const { setFilter, isSelected } = useFilterCtx();
  const selected = isSelected("jobType", title);

  return (
    <li {...props}>
      <Button
        variant={selected ? "ghost-sky" : "white"}
        pad="md"
        rad="lg"
        w="full"
        className="md:text-primary"
        onClick={() => setFilter("jobType", title)}
      >
        {title}
      </Button>
    </li>
  );
}
