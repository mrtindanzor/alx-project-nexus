import type { PollOptionProps } from "@/domain/poll";
import type { ButtonProps } from "@/shared/ui/primitive/Buttons";

export type PollButtonProps = ButtonProps &
  Pick<PollOptionProps, "_id" | "answer"> & {
    selected: string[];
    total?: number;
    setVotes: (id: string) => void;
  };

export type PollVoteCardProps = {
  pollId: string;
};
