import z from "zod";

const unknownError =
  "Failed to cast vote, try refreshing the page to try again";

export const pollVoteSchema = z.object(
  {
    pollId: z.string(unknownError).min(24, unknownError),
    optionId: z
      .string("Make a choice from options provided")
      .min(24, "Make a choice from options provided"),
  },
  { error: unknownError },
);
