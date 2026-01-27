export type PollOptionProps = {
  total: number;
  answer: string;
};

export type PollProps = {
  title: string;
  options: PollOptionProps[];
};

export type PostPollProps = Pick<PollProps, "title"> & {
  options: (Pick<PollOptionProps, "answer"> & { id: string })[];
};
