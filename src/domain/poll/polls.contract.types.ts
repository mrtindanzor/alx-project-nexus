export type PollOptionProps = {
  total: number;
  answer: string;
  _id: string;
};

export type PollType = {
  _id: string;
  id: string;
  title: string;
  createdAt: Date;
  type: "multiple" | "single";
  options: PollOptionProps[];
};

export type CreatePollDTO = Pick<PollProps, "title" | "type"> & {
  options: Omit<PollOptionProps, "total">[];
};

export type PollProps = PollType;

export type PostPollProps = Pick<PollProps, "title" | "type"> & {
  options: Omit<PollOptionProps, "total">[];
};
