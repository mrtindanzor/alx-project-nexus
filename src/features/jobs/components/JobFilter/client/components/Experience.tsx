"use client";

import { JOB_EXPERIENCES } from "@/features/jobs/constants";
import { Button } from "@/shared/ui/primitive/Buttons";
import { cn } from "@/shared/utils/cn";
import type { ExprienceCardProps } from "../../filters.types";
import { useFilterCtx } from "../hooks/useFilters";
import { CardWrapper } from "./CardWrapper";

export function Experience() {
  return (
    <CardWrapper title="Experience">
      <ul className="grid gap-y-2">
        {JOB_EXPERIENCES.map((exp) => (
          <Card key={exp} title={exp} />
        ))}
      </ul>
    </CardWrapper>
  );
}

function Card({ className, title, ...props }: ExprienceCardProps) {
  const { setFilter, isSelected } = useFilterCtx();
  const selected = isSelected("experience", title);

  return (
    <li {...props} className={cn(className)}>
      <Button
        variant={selected ? "ghost-sky" : "none"}
        hover="outline-dark"
        className={cn("md:text-primary", selected && "md:text-accent")}
        onClick={() => setFilter("experience", title)}
        pad="lg"
        w="full"
      >
        {title}
      </Button>
    </li>
  );
}
