import type { PropsWithChildren } from "react";
import { JobsProvider } from "@/features/jobs/components/Jobs/client/component/JobsProvider";

export function BaseProvider({ children }: PropsWithChildren) {
  return <JobsProvider>{children}</JobsProvider>;
}
