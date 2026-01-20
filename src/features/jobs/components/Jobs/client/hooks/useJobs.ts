"use client";

import { useContext } from "react";
import { JobsContext } from "../component/JobsProvider";

export function useJobs() {
  const ctx = useContext(JobsContext);
  if (!ctx) throw Error("JobsContext not defined");

  return ctx;
}
