import type { JobType } from "../../jobs.contract.types";

export type JobPageProps = {
  params: Promise<{ job: string }>;
};

export type PageHeaderProps = Pick<JobType, "title" | "postedTime">;

export type PageHeaderCardProps = {
  title: string;
  icon: React.ElementType;
};

export type JobDecriptionProps = Pick<JobType, "description" | "skills">;

export type DescriptionSectionWrapperProps = {
  title: string;
  children: React.ReactNode;
};

export type JobFactsProps = Pick<
  JobType,
  "salary" | "experience" | "location" | "type"
>;

export type JobFactCardProps = {
  title: string;
  icon: React.ElementType;
  content: string;
};

export type JobBreadCrumbsProps = Pick<JobType, "title">;
