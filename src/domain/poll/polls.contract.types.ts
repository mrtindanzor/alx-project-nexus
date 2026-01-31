import type { InfiniteData } from "@tanstack/react-query";

export type PollOptionProps = {
  total: number;
  answer: string;
  _id: string;
};

export type PollProps = {
  _id: string;
  title: string;
  createdAt: Date;
  type: "multiple" | "single";
  options: PollOptionProps[];
};

export type PaginatedPollProps = {
  nextpage: number | null;
  data: PollProps[];
};

export type PostPollProps = Pick<PollProps, "title" | "type"> & {
  options: Omit<PollOptionProps, "total">[];
};

export type InfinitePollProps = InfiniteData<PaginatedPollProps>;
export type PollResultProps = {
  pollId: string;
  options: Record<string, number>;
};
