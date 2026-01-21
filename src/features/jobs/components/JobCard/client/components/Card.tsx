"use client";

import { ArrowUp, BadgeDollarSign, Clock, MapPin } from "lucide-react";
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
          "grid h-fit gap-x-4 py-8 gap-y-1 not-last:border-b not-last:border-b-accent/10",
          className,
        )}
      >
        <PostedTime />
        <CardLocation />
        <CardHeader />
        <Salary />
        <Description />
        <Apply />
      </li>
    </JobCardProvider>
  );
}

function CardHeader() {
  const { title } = useJobCard();

  return (
    <h3 className="text-[clamp(1.3rem,calc(0.1rem+3vw),1.8rem)] text-accent font-semibold">
      {title}
    </h3>
  );
}

function CardLocation() {
  const { location, type } = useJobCard();

  return (
    <p className="text-neutral/70 flex items-center gap-x-1">
      <MapPin className="size-4" /> {location}
      {location !== type && `, ${type}`}
    </p>
  );
}

function Salary() {
  const { salary } = useJobCard();

  return (
    <p className="flex gap-x-4 text-neutral/50 items-center">
      <BadgeDollarSign className="size-4" /> {salary}
    </p>
  );
}

function PostedTime() {
  const { postedTime } = useJobCard();

  return (
    <p className="flex gap-x-1 text-neutral/50 items-center">
      <Clock className="size-4" /> {postedTime}
    </p>
  );
}

function Description() {
  const { description } = useJobCard();

  return <p className="line-clamp-3 my-4 text-neutral/80">{description}</p>;
}

function Apply() {
  const { title } = useJobCard();

  return (
    <div>
      <StyledLink
        href={`/job/${encodeURIComponent(title)}`}
        rad="xl"
        y="center"
        variant="link"
        hover="ghost-light"
        className="text-accent ml-auto gap-x-2 tracking-wide"
      >
        View <ArrowUp className="rotate-45 size-4" />
      </StyledLink>
    </div>
  );
}
