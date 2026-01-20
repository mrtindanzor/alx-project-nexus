"use client";

import { createContext, type PropsWithChildren } from "react";
import type { JobCardContextProps } from "../../jobcard.types";

export const JobCardContext = createContext<JobCardContextProps>(null);

export function JobCardProvider({
  children,
  job,
}: PropsWithChildren<NonNullable<JobCardContextProps>>) {
  return (
    <JobCardContext.Provider value={{ job }}>
      {children}
    </JobCardContext.Provider>
  );
}
