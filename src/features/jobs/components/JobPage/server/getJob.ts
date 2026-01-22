import { MOCK_JOBS } from "@/features/jobs";

export async function getJob(job_name: string) {
  const job = MOCK_JOBS.find(
    (job) => decodeURIComponent(job_name) === job.title,
  );
  return job;
}
