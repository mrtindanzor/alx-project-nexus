import {
  getJob,
  JobDecription,
  JobFacts,
  JobPageBreadCrumb,
  JobPageHeader,
  type JobPageProps,
  PageHeader,
} from "@/features/jobs";
import { FramerAnimatePosition } from "@/shared/features/Framer";
import { jobPageVariants } from "../contants";

export async function JobPage({ params }: JobPageProps) {
  const job_name = (await params).job;
  const job = await getJob(job_name);

  if (!job) return null;

  const {
    title,
    postedTime,
    location,
    description,
    skills,
    salary,
    type,
    experience,
  } = job;

  return (
    <>
      <JobPageHeader />
      <FramerAnimatePosition variants={jobPageVariants} animate="show">
        <div className="max-w-6xl mx-auto px-1  mt-25 sm:px-4">
          <JobPageBreadCrumb title={title} />

          <div className="grid md:grid-cols-[1fr_auto] gap-y-4 md:gap-y-8 pb-20  gap-x-6 mt-4 ">
            <PageHeader {...{ title, postedTime }} />
            <JobDecription {...{ description, skills }} />
            <JobFacts {...{ location, salary, type, experience }} />
          </div>
        </div>
      </FramerAnimatePosition>
    </>
  );
}
