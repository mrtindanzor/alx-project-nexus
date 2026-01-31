import z from "zod";
import { POLL_TYPES } from "./contants";

export const newPollSchema = z.object(
  {
    title: z
      .string("Poll title must be sentence.")
      .min(2, "Poll title must be sentence."),
    type: z.enum(
      POLL_TYPES,
      `Poll type must be either one of these ${POLL_TYPES.join(", ")}`,
    ),
    options: z
      .array(
        z.object(
          {
            answer: z
              .string("Poll answer must be sentence.")
              .min(1, "An answer was not provided for a poll option"),
          },
          "Add answers for the poll.",
        ),
        "Add answers for the poll.",
      )
      .refine(
        (options) => options.length > 1,
        "Poll must have at least 2 answer options.",
      )
      .refine((options) => {
        const answers = options.map((o) => o.answer.toLowerCase());
        const uniqueAnswers = new Set(answers);
        return uniqueAnswers.size === answers.length;
      }, "Poll answers must be distinct."),
  },
  { error: "Fill in the poll form" },
);
