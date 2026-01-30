import type { ButtonProps } from "@/shared/ui/primitive/Buttons";

export type PollButtonProps = ButtonProps & {
  total: number;
  totalVotes: number;
  answer: string;
};

export type PollResultsCardProps = {
  pollId: string;
};
