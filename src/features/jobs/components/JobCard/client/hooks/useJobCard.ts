import { useContext } from "react";
import { JobCardContext } from "../components/JobCardProvider";

export function useJobCard() {
  const ctx = useContext(JobCardContext);
  if (!ctx) throw Error("JobCardContext not provided");

  return ctx.job;
}
