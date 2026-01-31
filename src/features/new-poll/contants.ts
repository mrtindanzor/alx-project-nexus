import type { CreatePollStepProps } from "./new-poll.types";

export const CREATE_POLL_STEPS: CreatePollStepProps[] = [
  {
    title: "Fill out the form.",
    description:
      "Create your poll by adding a clear title and multiple answer options.",
  },
  {
    title: "Invite participants.",
    description:
      "Share your poll link with participants or embed it on your site to reach your audience instantly.",
  },
  {
    title: "Get instant results.",
    description:
      "See live results update in real time as votes are submitted, giving you immediate insights.",
  },
];

export const POLL_TYPES = ["multiple", "single"] as const;
