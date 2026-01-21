"use client";

import { BadgeDollarSign, Clock, MapPin } from "lucide-react";
import { StyledLink } from "@/shared/ui/Buttons";
import { cn } from "@/shared/utils/cn";
import type { JobCardProps } from "../../jobcard.types";
import { useJobCard } from "../hooks/useJobCard";
import { JobCardProvider } from "./JobCardProvider";

export function JobCard({ job, className, ...props }: JobCardProps) {
  return (
    <JobCardProvider job={job}>
      <li
        {...props}
        className={cn(
          "grid h-fit gap-y-2 gap-x-4 @md:grid-cols-[1fr_auto] py-8 px-6 rounded-xl bg-primary *:not-last:col-start-1",
          className,
        )}
      >
        <CardHeader />
        <CardLocation />
        <SalaryAndTime />
        <Description />
        <Apply />
      </li>
    </JobCardProvider>
  );
}

function CardHeader() {
  const { title } = useJobCard();

  return (
    <h3 className="text-[clamp(1.3rem,calc(0.1rem+4vw),1.8rem)] text-neutral">
      {title}
    </h3>
  );
}

function CardLocation() {
  const { location, type } = useJobCard();

  return (
    <p className="text-neutral/70 text-lg flex items-center gap-x-1">
      <MapPin className="size-4" /> {location}
      {location !== type && `, ${type}`}
    </p>
  );
}

function SalaryAndTime() {
  const { salary, postedTime } = useJobCard();

  return (
    <p className="flex gap-x-4 text-neutral/50 mb-4">
      <span className="flex gap-x-2 items-center">
        <BadgeDollarSign className="size-4" /> {salary}
      </span>
      <span className="flex gap-x-2 items-center">
        <Clock className="size-4" /> {postedTime}
      </span>
    </p>
  );
}

function Description() {
  const { description } = useJobCard();

  return <p className="line-clamp-3 text-neutral/80">{description}</p>;
}

function Apply() {
  const { title } = useJobCard();

  return (
    <div className="h-full @md:row-start-1 @md:col-start-2 @md:row-span-full">
      <StyledLink
        href={`/job/${encodeURIComponent(title)}`}
        pad="lg"
        rad="xl"
        variant="sky"
        hover="ghost-sky"
        className="ml-auto"
      >
        Apply
      </StyledLink>
    </div>
  );
}
