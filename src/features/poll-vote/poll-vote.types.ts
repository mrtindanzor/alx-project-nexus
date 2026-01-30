import type { PollOptionProps } from "@/domain/poll";
import type { SetState } from "@/shared/types/lib/setState";
import type { ButtonProps } from "@/shared/ui/primitive/Buttons";

export type PollButtonProps = ButtonProps &
  Pick<PollOptionProps, "_id" | "answer"> & {
    selected: string;
    total?: number;
    setSelected: SetState<string>;
  };

export type PollVoteCardProps = {
  pollId: string;
};
