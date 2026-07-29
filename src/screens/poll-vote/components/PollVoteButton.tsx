import { Button, Pill } from "@/shared/ui/primitive/Buttons";
import { cn } from "@/shared/utils/cn";
import type { PollButtonProps } from "../poll-vote.types";

export function PollVoteButton({
  answer,
  _id,
  selected,
  setVotes,
  total: _t,
  className,
  ...props
}: PollButtonProps) {
  return (
    <Button
      type="button"
      onClick={() => setVotes(_id)}
      variant="none"
      hover="ghost-light"
      pad="lg"
      w="full"
      y="center"
      className={cn("gap-x-2 px-1", className)}
      {...props}
    >
      <Pill
        className="rounded-full aspect-square size-5!"
        pad="xs"
        x="center"
        y="center"
        variant={selected.includes(_id) ? "sky" : "light"}
        hover={selected.includes(_id) ? "sky" : "ghost-light"}
      >
        <span className="grid size-2 aspect-square! rounded-full bg-secondary-900"></span>
      </Pill>
      {answer}
    </Button>
  );
}
