import z from "zod";

const unknownError =
  "Failed to cast vote, try refreshing the page to try again";
const makeChoice = "Make a choice from options provided";

export const pollVoteSchema = z.object(
  {
    pollId: z.string(unknownError).min(24, unknownError),
    votesIds: z
      .array(z.string(makeChoice).min(24, makeChoice), makeChoice)
      .refine((votes) => votes.length > 0, makeChoice),
  },
  { error: unknownError },
);
