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
  options: PollOptionProps[];
};

export type PaginatedPollProps = {
  nextpage: number | null;
  data: PollProps[];
};

export type PostPollProps = Pick<PollProps, "title"> & {
  options: (Pick<PollOptionProps, "answer"> & { id: string })[];
};

export type InfinitePollProps = InfiniteData<PaginatedPollProps>;
export type PollResultProps = {
  pollId: string;
  total: number;
  optionId: string;
};
