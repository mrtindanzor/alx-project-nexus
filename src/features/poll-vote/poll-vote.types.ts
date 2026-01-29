import type { PollOptionProps } from "@/domain/poll";
import type { SetState } from "@/shared/types/lib/setState";
import type { ButtonProps } from "@/shared/ui/primitive/Buttons";

export type PollButtonProps = ButtonProps & {
  answer: PollOptionProps["answer"];
  selected: string;
  setSelected: SetState<string>;
};

export type PollVoteCardProps = {
  pollId: string;
};
