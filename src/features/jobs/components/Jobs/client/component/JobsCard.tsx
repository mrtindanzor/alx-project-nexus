"use client";

import { JobCard } from "@/features/jobs";
import { useJobs } from "../hooks/useJobs";

export function JobsCard() {
  const { jobs } = useJobs();

  return (
    <ul className="@container grid h-fit gap-y-8">
      {jobs.map((job) => (
        <JobCard key={job.title} job={job} />
      ))}
    </ul>
  );
}
