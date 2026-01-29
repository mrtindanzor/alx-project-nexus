export type PollOptionProps = {
  total: number;
  answer: string;
};

export type PollProps = {
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
