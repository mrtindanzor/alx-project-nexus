import { Pill } from "@/shared/ui/primitive/Buttons";
import { cn } from "@/shared/utils/cn";
import type { PollButtonProps } from "../poll-results.types";

export function PollResultsButton({
  totalVotes,
  total,
  answer,
  className,
  ...props
}: PollButtonProps) {
  const width = total === 0 ? 0 : ((total / totalVotes) * 100).toFixed(2);

  return (
    <div className="">
      <p className="grid grid-cols-[1fr_auto] gap-x-4 text-neutral/60">
        <span>{answer}</span>
        <span title="Total votes for this option">
          {width}% ({total} votes)
        </span>
      </p>

      <Pill
        variant="ghost-light"
        hover="none"
        rad="2xl"
        className="p-0"
        w="full"
      >
        <Pill
          hover="none"
          {...props}
          className={cn(
            "transition-all ease-in-out duration-500 px-0",
            className,
          )}
          style={{ width: `${width}%` }}
          rad="2xl"
          pad="xl"
        />
      </Pill>
    </div>
  );
}
