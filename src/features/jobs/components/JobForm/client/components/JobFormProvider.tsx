"use client";

import { createContext, type PropsWithChildren } from "react";
import type { JobFormContextProps } from "../../jobform.types";
import { useJobForm } from "../hooks/useJobForm";

export const JobFormContext = createContext<JobFormContextProps>(null);

export function JobFormProvider({ children }: PropsWithChildren) {
  const props = useJobForm();
  const { handleSubmit } = props;

  return (
    <JobFormContext.Provider value={props}>
      <form onSubmit={handleSubmit}>{children}</form>
    </JobFormContext.Provider>
  );
}
