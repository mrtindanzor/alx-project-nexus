export type PollOptionProps = {
  total: number;
  answer: string;
  _id: string;
  id: string;
};

export type PollType = {
  _id: string;
  id: string;
  title: string;
  createdAt: Date;
  type: "multiple" | "single";
  options: PollOptionProps[];
};

export type CreatePollDTO = Pick<PollType, "title" | "type"> & {
  options: Pick<PollOptionProps, "answer">[];
};

export type PollResults = Pick<PollType, "options" | "title"> & {
  pollId: string;
  results: Record<string, number>;
  type: "multiple" | "single";
};
