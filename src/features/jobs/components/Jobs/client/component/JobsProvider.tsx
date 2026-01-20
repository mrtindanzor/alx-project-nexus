"use client";

import { createContext, type PropsWithChildren, useState } from "react";
import { MOCK_JOBS } from "@/features/jobs/constants";
import type { JobsProviderContextProps } from "../../jobs.types";

export const JobsContext = createContext<JobsProviderContextProps>(null);

export function JobsProvider({ children }: PropsWithChildren) {
  const [jobs, setJobs] = useState(MOCK_JOBS);

  return (
    <JobsContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobsContext.Provider>
  );
}
